var test = require('./src/detection');
var Thunder = require('./src/thunder-images');

var webpSrc = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';

test(webpSrc, function(e) {
  if (e && e.type !== 'load') {
    Thunder();
  }
});
