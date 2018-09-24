(function() {
  var docEl = document.documentElement,
    resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth
      if(!clientWidth) return;
      if(clientWidth >= 750) {
        docEl.style.fontSize = '100px'
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
      }
    }
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false)
})()
