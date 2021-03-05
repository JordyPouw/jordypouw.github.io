import "./its-me";
import { typewriter } from "./typewriter";

setTimeout(() => {
  typewriter({
    elem: document.querySelector(".hello-text"),
    sentences: ["The future", "is yesterday"],
    lineTag: "p",
    speed: 300 * Math.random() + 100,
  });
}, 1000);
