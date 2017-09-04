const getPixels = require("get-pixels");

const colorToRgb = color => {
  return `rgb(${color.r},${color.g},${color.b})`;
};

const makeSpan = (color, letter = "p", className) => {
  return `<div class="letter ${className || ""}" style="color:${colorToRgb(
    color
  )}">${letter}</div>`;
};
function execute(img, cb) {
  return new Promise((resolve, reject) => {
    getPixels(img, (err, pixels) => {
      if (err) {
        console.log(err);
        return;
      }
      const spans = [];
      let letters = getLetter("content");

      for (let y = 0; y < pixels.shape[0]; y++) {
        for (let x = 0; x < pixels.shape[1]; x++) {
          let r = pixels.get(x, y, 0);
          let g = pixels.get(x, y, 1);
          let b = pixels.get(x, y, 2);
          spans.push({
            x,
            y,
            span: makeSpan({ r, g, b }, letters.next().value)
          });
          // if (x === 100) {
          //   console.log(x, y, { r, g, b });
          // }
        }
      }
      insertTitle(spans, 1030, "title");

      const els = spans.reduce((acc, curr) => {
        let { x, y } = curr;
        if (x === 0) {
          // acc += "<br>";
        }
        return acc + curr.span;
      }, "");

      cb(els);
    });
  });
}

function* getLetter(word) {
  const letters = word.split("");
  for (let x = 0; x < letters.length; x++) {
    if (x === letters.length - 1) {
      yield letters[x];

      x = 0;
    }
    yield letters[x];
  }
}

function insertTitle(pixels, n, title) {
  let letters = "paulsevere.com".split("");
  for (var x = 0; x < letters.length; x++) {
    pixels[n + x] = {
      x: 50,
      y: 50,
      span: makeSpan({ r: 50, g: 150, b: 200 }, letters[x], title)
    };
  }
}

module.exports = execute;
