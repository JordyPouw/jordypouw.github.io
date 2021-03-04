import "./its-me";

const typewriter = ({ elem, text, speed, index }) => {
  (function ticking() {
    if (index < text.length) {
      elem.innerHTML += text.charAt(index);
      index++;
      setTimeout(ticking, speed);
    }
  })();
};

setTimeout(() => {
  typewriter({
    elem: document.querySelector(".hello-text"),
    text: "Hi there, \n How you doin'?",
    speed: 200 - Math.random() * 100,
    index: 0,
  });
}, 1000);
