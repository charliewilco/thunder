module.exports = function(){
  function testWebP(callback) {
    var webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = function () {
        callback(webP.height === 2);
    };
  }

  function notify(supported) {
    console.log((supported) ? "webP supported!" : "webP not supported.");
  }

  testWebP(notify);
}
