const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../_style/icons', false, /\.svg$/)
requireAll(req)