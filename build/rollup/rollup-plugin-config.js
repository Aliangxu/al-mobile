const path = require('path')
const os = require('os')
const fs = require('fs')
const aliasPlugin = require('rollup-plugin-alias')
const replacePlugin = require('rollup-plugin-replace')
const jsonPlugin = require('rollup-plugin-json')
const urlPlugin = require('rollup-plugin-url')
const nodeResolvePlugin = require('rollup-plugin-node-resolve')
const vuePlugin = require('rollup-plugin-vue')
const css = require('rollup-plugin-css-only')
const babel = require('rollup-plugin-babel')
const common = require('rollup-plugin-commonjs')
const stylus = require('stylus')
const stylusMixin = require('../stylus-mixin')
const builtins = require('rollup-plugin-node-builtins')
const uglify = require('rollup-plugin-uglify')
const nodeGlobals = require('rollup-plugin-node-globals')
const glob = require('rollup-plugin-glob-import')
const progress = require('rollup-plugin-progress')
const fillHtmlPlugin = require('rollup-plugin-template-html')
const filesize = require('rollup-plugin-filesize')
const stylusCompilerPlugin = require('./rollup-plugin-stylus-compiler')
const postcss = require('rollup-plugin-postcss')
const svgSpritePlugin = require('./rollup-plugin-svg-sprite')
const findPostcssConfig = require('postcss-load-config')
const pkg = require('../../package.json')

// const postcssUrl = require('postcss-url')

const babelrc = require('babelrc-rollup').default

const isProduction = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'testing'
const isDev = !(isProduction || isTest)
// const isSpecial = process.env.BUILD_TYPE === 'special'

function resolve(dir) {
  return path.resolve(__dirname, '../..', dir)
}
const LIB_DIR = resolve('lib')
const PROJECT_DIR = resolve('.')

const tmpDir = os.tmpdir()
const DEV_OUTPUT_DIR = fs.mkdtempSync(`${tmpDir}${path.sep}`)

const tmpTestDir = os.tmpdir()
const TEST_OUTPUT_DIR = fs.mkdtempSync(`${tmpTestDir}${path.sep}`)

async function vueWarpper() {
  let distDir = '', fileName = ''
  if (isDev) {
    distDir = DEV_OUTPUT_DIR
    fileName = 'al-mobile-dev.css'
  } else if (isProduction) {
    fileName = process.env.BUILD_TYPE !== 'variables' ? 'al-mobile.css' : 'al-mobile.variable.css'
    distDir = LIB_DIR
  } else if (isTest) {
    distDir = TEST_OUTPUT_DIR
    fileName = 'al-mobile-test.css'
  }

  const {
    options,
    plugins,
  } = await findPostcssConfig({
    env: process.env.NODE_ENV
  })
  return [
    css({
      output: path.resolve(distDir, fileName)
    }),
    vuePlugin({
      css: false,
      style: {
        postcssOptions: options,
        postcssPlugins: plugins,
        preprocessOptions: {
          stylus: {
            use: [stylusMixin, styl => {
              styl.define('url', stylus.url())
            }],
          },
        }
      }
    })
  ]
}

// const css = cssWarpper()

function conditionHelper(condition, plugins) {
  return condition ? plugins : []
}

const basicAlias = {
  resolve: ['.js', '.json', '/index.js', '.css', '.vue', '.svg'], // @TODO '/index.js' hack
  'al-mobile/components': resolve('components'),
  'al-mobile/lib': resolve('lib'),
  '@examples/assets/images/bank-zs.svg': resolve('examples/assets/images/bank-zs.svg'),
  '@examples/assets/images/tip-package.svg': resolve('examples/assets/images/tip-package.svg')
}

const rollupPluginFactory = async () =>  {
  const vue = await vueWarpper()
  return [
  // resolve
  ...(conditionHelper(!isDev, [
    aliasPlugin(Object.assign(basicAlias, {
      'al-mobile': resolve('lib/al-mobile.esm.js'),
    })),
  ])),
  ...(conditionHelper(isDev, [
    aliasPlugin(Object.assign(basicAlias, {
      'al-mobile': resolve('components'),
    })),
  ])),
  nodeResolvePlugin({
    extensions: [ '.js', '.json', '.vue' ],
  }),
  ...(conditionHelper(isTest, [
    common({
      exclude: 'components/_util/*.js',
      namedExports: { '@vue/test-utils': ['mount', 'shallow'] },
    }),
    glob(),
  ])),
  ...(conditionHelper(isDev, [
    common({
      include: ['node_modules/**', 'components/common/mescroll.js/mescroll.js', 'components/common/swiper/dist/js/swiper.js', 'components/scroll-table/assets/iscroll-probe.js'],
      // namedExports: { 'fastclick': ['FastClick'] },
    }),
  ])),
  // inject
  replacePlugin({
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    'MAN_VERSION': `"${pkg.version}"`
  }),
  ...(conditionHelper(isTest, [
    builtins(),
    nodeGlobals(),
  ])),
  ...(conditionHelper(isDev, [
    svgSpritePlugin(),
  ])),
  ...(conditionHelper(isProduction, [
    common(),
  ])),
  // resource
  urlPlugin({
    limit: 10 * 1024,
  }),
  jsonPlugin(),
  ...vue,
  stylusCompilerPlugin({
    fn: stylusMixin,
  }),
  postcss({
    config: {
      path: resolve('postcss.config.js')
    }
  }),
  babel(babelrc({
    addModuleOptions: false,
    findRollupPresets: true,
    addExternalHelpersPlugin: false,
  })),

  // dest
  ...(conditionHelper(isProduction, [
    uglify({
      compress: {},
    }),
  ])),
  ...(conditionHelper(isDev, [
    fillHtmlPlugin({
      template: resolve('examples/index.livereload.html'),
      publicPath: '/',
      destFile: path.resolve(DEV_OUTPUT_DIR, 'index.html')
    })
  ])),
  // cli
  progress(),
  ...(conditionHelper(isProduction, [
    filesize(),
  ])),
]
}
module.exports = {
  LIB_DIR,
  PROJECT_DIR,
  DEV_OUTPUT_DIR,
  rollupPluginFactory,
}
