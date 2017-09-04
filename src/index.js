import "./index.css";

import execute from "./getPixels";
import $ from "jquery";

// ReactDOM.render(<App />, document.getElementById("root"));
$(() => {
  execute(els => (document.getElementById("root").innerHTML = els));
});
