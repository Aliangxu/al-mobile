// <script>
export default {
  name: 'toast-content',
  // eslint-disable-next-line no-unused-vars
  render(h) {
    return (<div>{this.getContent}</div>)
  },
  computed: {
    getContent () {
      let con = []
      if (this.content) {
        let m = this.content.match(/#(\S*)#/)
        if (m) {
          // eslint-disable-next-line no-console
          console.log('%c m[1]', 'color:green;', m[1])
          m[1].split(',').forEach((val, i) => {
            // con += `${this.content.split(m[0])[0]}${val}${
            //   this.content.split(m[0])[1]
            // }<br>`
            con.push(
              <div>
                {this.isHaveNum ? i + 1 + '、' : ''}
                {this.content.split(m[0])[0]}
                {val}
                {this.content.split(m[0])[1]}
              </div>
            )
          })
        } else {
          let strlen = 0
          let len = this.maxTextNum * 2
          let str = this.content
          let mes = ''
          for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 128) {
              strlen += 2
            } else {
              strlen++
            }
            mes += str.charAt(i)
            if (strlen >= len) {
              mes += '...'
              break
            }
          }
          con.push(<span>{mes}</span>)
        }
      } else {
        con = this.content
      }
      return con
    }
  },
  data () {
    return {
      content: this.value
    }
  },
  props: {
    value: {
      //   type: Number,
      required: true
    },
    maxTextNum: {
      type: Number,
      required: 40
    },
    isHaveNum: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    value (newV, oldV) {
      if (newV !== oldV) {
        this.content = newV
      }
    }
  }
}
// </script>
