module.exports = function test (uri, cb){

  var image = new Image();

  function addResult(event) {
  // if the event is from 'onload', check the see if the image's width is
  // 1 pixel (which indiciates support). otherwise, it fails

      var result = event && event.type === 'load' ? image.width == 1 : false;

      if (cb) {
          cb(event);
      }
  }

  image.onerror = addResult;
  image.onload = addResult;
  image.src = uri;

};
