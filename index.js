class Thunder {
  constructor () {
    const webpSrc = 'data:image/webpbase64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='
    this.test(webpSrc, e => {
      if (e && e.type !== 'load') {
        this.setter()
      }
    })
  }

  setter () {
    const images = document.querySelectorAll('[data-thunder]')

    for (let i = 0; i < images.length; ++i) {
      const fallback = images[i].getAttribute('data-thunder')
      images[i].setAttribute('src', fallback)
    }
  }

  test (uri, cb) {
    const image = new Image()

    function addResult (event) {
    // TODO: rethink this pattern
    // if the event is from 'onload', check the see if the image's width is
    // 1 pixel (which indiciates support). otherwise, it fails

      const result = event && event.type === 'load' ? image.width === 1 : false

      if (cb) {
        cb(event)
      }

      return result
    }

    image.onerror = addResult()
    image.onload = addResult()
    image.src = uri

    return image
  }
}

export default new Thunder()
