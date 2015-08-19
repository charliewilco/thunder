# Thunder.js

Use WebP and gracefully degrade to using JPEG, GIF, or PNG


## Usage
I really like WebP. You should too. But it's not supported in all the evergreen browsers. This package detects whether the browser it's running in was WebP support and if doesn't it falls back to your specified image.

```
 <img data-thunder="path/to/img.png" src="path/to/img.webp">
```

## Installation

### NPM
```
npm install thunderjs
```

Your main bundled .js file would be something like:

```js
Thunder = require('thunderjs');

Thunder();
```

### Bower
```
bower install thunderjs
```

Link to `bower_components/thunderjs/dist/thunder.min.js` or include it in your build and then call `Thunder();`.

## Advantages of WebP

- [25% to 34% smaller files](https://developers.google.com/speed/webp/docs/webp_study)
- Transparency
- Lossless Quality

Here's one really awesome [use case](http://product.voxmedia.com/2015/8/13/9143805/performance-update-2-electric-boogaloo
) that boosted performance.

## Generating WebP Images

[WebP's Getting Started Guide](https://developers.google.com/speed/webp/docs/using) has lots of details about getting started with WebP and CLI tools, be sure to check that out.

### Sketch

At this moment, I know of no tool that will allow you to export webP images from Bohemian Coding's Sketch app. But if you know of one please submit a pull request.

### Online Converters

- [Online Convert](http://image.online-convert.com/convert-to-webp)
- [WebP Converter](http://webp-converter.com/)
- [Convertio](https://convertio.co/convert-to-webp/)

## Contributing

First off, you're awesome for wanting to contribute. Second, please a take a second to go over a few things to make this process simpler for everyone. Third, you're awesome.

### Pull Requests
- [Fork](https://github.com/charlespeters/thunder#fork-destination-box) this repo.
- Push to your fork and submit a pull request.
- Please provide a short explanation of why you made the changes you made and

### Issues
**Reduced test cases are required**. All bug reports and problem issues require a reduced test case. See [CSS Tricks - Reduced Test Cases](http://css-tricks.com/reduced-test-cases/) on why they _"are the absolute, ... number one way to troubleshoot bugs."_ Reduced test cases help you identify the issue at hand and understand your own code. On our side, they greatly reduce the amount of time spent resolving the issue.

- A reduced test case is an isolated example that demonstrates the bug or issue.
- It contains the bare minimum HTML, CSS, and JavaScript required to demonstrate the bug. No extra functionality or styling.
- A link to your site is **not** a reduced test case.
- A [JSBin](http://jsbin.com/) or [CodePen](http://codepen.io) is preferred so we can help you fix an error.

## Licence

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
