import "./dickbutt";
import "./its-me";
import { typewriter } from "./typewriter";

const codelines = document.querySelector(".js-code-lines");

const input = document.querySelector(".js-code-input");
input.focus();

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const value = input.value;
    input.value = "";
    codelines.innerHTML += `<span class="user-input">${value}</span>`;
    if (value === "run expose") expose();
  }
});

setTimeout(
  () =>
    typewriter({
      elem: input,
      sentences: ["run expose"],
      minSpeed: 50,
      maxSpeed: 100,
      onEnd: () => {
        setTimeout(() => {
          input.value = "";
          input.blur();
          expose();
        }, 1000);
      },
    }),
  2000
);

const expose = () =>
  typewriter({
    elem: codelines,
    sentences: [
      "cd projects/jordypouw.github.io/",
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
    onEnd: () => {
      input.focus();
    },
  });

// observer.
const target = document.querySelector(".js-code-lines");
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    target.scrollTop = target.scrollHeight;
  });
});

observer.observe(target, { childList: true });
