const execute = require("./src/getPixels");

const buildHtml = els => {
  return require("fs").writeFileSync(
    "./build/index.html",
    `<!doctype html>
<html lang="en">

<head>

  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
    crossorigin="anonymous"></script>
    <link href="index.css" rel="stylesheet">


 
  <title>paulsevere.com</title>
</head>

<body>
<div class="letters">
  ${els}
  </div>
  <script>
  $("body").on("click", ".title", () => {
    window.location = "https://github.com/paulsevere";
  });
  </script>
</body>
</html>`
  );
};

execute("./public/paulsevere.png", buildHtml);
