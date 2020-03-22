(function (window, document) {
  function resize () {
    var ww = window.innerWidth
    if (ww > window.screen.width) {
      window.requestAnimationFrame(resize)
    } else {
      if (ww > 375) {
        ww = 375
      }
      document.documentElement.style.fontSize = ww * 100 / 375 + 'px'
    }
  }

  resize()

  window.addEventListener('resize', resize)
})(window, document)