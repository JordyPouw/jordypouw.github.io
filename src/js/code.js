import { typewriter } from "./typewriter";

// init.
const codelines = document.querySelector(".js-code-lines");
const input = document.querySelector(".js-code-input");
input.focus();

const opthelp = ["help"];
const optwho = ["who are you"];
const optwhat = ["what do you do"];
const optdm = ["can i contact you"];
const optsurp = ["surprise"];

// input handler.
const cmd = (value) => {
  const command = [
    ...opthelp,
    ...optwho,
    ...optwhat,
    ...optdm,
    ...optsurp,
  ].find((opt) => opt === value);

  if (opthelp.includes(command)) help();
  if (optwho.includes(command)) whoyou();
  if (optwhat.includes(command)) whatyoudo();
  if (optdm.includes(command)) dmme();
  if (optsurp.includes(command)) surprise();
};

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const value = input.value;
    input.value = "";
    codelines.innerHTML += `<span class="user-input">${value}</span>`;
    cmd(value);
  }
});

// observer.
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    codelines.scrollTop = codelines.scrollHeight;
  });
});

observer.observe(codelines, { childList: true });

// run first command.
setTimeout(
  () =>
    typewriter({
      elem: input,
      sentences: ["help"],
      minSpeed: 50,
      maxSpeed: 100,
      onEnd: () => {
        setTimeout(() => {
          input.value = "";
          input.blur();
          help();
        }, 1000);
      },
    }),
  2000
);

const help = () =>
  typewriter({
    elem: codelines,
    sentences: [
      "I can only understand the following",
      "commands at this moment:",
      " ",
      `  - ${opthelp.join(", ")}`,
      `  - ${optwho.join(", ")}`,
      `  - ${optwhat.join(", ")}`,
      `  - ${optdm.join(", ")}`,
      `  - ${optsurp.join(", ")}`,
      " ",
    ],
    lineTag: "p",
    minSpeed: 1,
    maxSpeed: 10,
    onEnd: () => {
      input.focus();
    },
  });

const whoyou = () =>
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
      "Github: https://github.com/jordypouw",
      "Socially awkward: ☑",
      "ERROR",
      "Ability to fly: ☒",
      "Traveled through time: ☑",
      "CLASSIFIED",
      "CLASSIFIED",
      "CLASSIFIED",
      "Program terminated",
      " ",
    ],
    lineTag: "p",
    minSpeed: 50,
    maxSpeed: 100,
    onEnd: () => {
      input.focus();
    },
  });

const whatyoudo = () =>
  typewriter({
    elem: codelines,
    sentences: [
      "Currently just messing around",
      "Trying some new stuff :)",
      " ",
      "Some free-time work:",
      "  - https://jordypouw.github.io/necssary/",
      "  - https://github.com/JordyPouw/michelangelo",
      "Should really update the last one..",
      " ",
    ],
    lineTag: "p",
    minSpeed: 20,
    maxSpeed: 50,
    onEnd: () => {
      input.focus();
    },
  });

const dmme = () =>
  typewriter({
    elem: codelines,
    sentences: ["jordypouw at gmail dot com", " "],
    lineTag: "p",
    minSpeed: 50,
    maxSpeed: 100,
    onEnd: () => {
      input.focus();
    },
  });

const surprise = () =>
  typewriter({
    elem: codelines,
    sentences: ["Open devtools", "Check console", "You're welcome :)", " "],
    lineTag: "p",
    minSpeed: 10,
    maxSpeed: 50,
    onEnd: () => {
      input.focus();
    },
  });
