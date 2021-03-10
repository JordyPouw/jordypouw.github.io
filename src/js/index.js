import "./dickbutt";
import "./its-me";
import { typewriter } from "./typewriter";

setTimeout(() => {
  typewriter({
    elem: document.querySelector(".js-code-lines"),
    sentences: [
      "cd projects/jordypouw.github.io/",
      "run expose",
      "........ ✓",
      "Name: Jordy Pouw",
      "Date of birth: unknown",
      "Location: The Netherlands",
      "Profession: Lets code do brrrr",
      "ERROR",
      "ERROR",
      "Github: https://github.com/jordypouw",
      "Socially awkward: ☑",
      "Ability to fly: ☒",
      "Traveled through time: ☑",
      "CLASSIFIED",
      "CLASSIFIED",
      "CLASSIFIED",
      "Program terminated",
      "....................",
      "Protocol breached",
      "Activate self destruction",
      ".......... 3",
      ".......... 2",
      ".......... 1",
      "Gotcha :')",
    ],
    lineTag: "p",
    minSpeed: 50,
    maxSpeed: 100,
  });
}, 1000);

// observer.
const target = document.querySelector(".js-code-lines");
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    target.scrollTop = target.scrollHeight;
  });
});

observer.observe(target, { childList: true });
