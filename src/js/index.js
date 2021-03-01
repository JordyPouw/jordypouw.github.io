import { myself } from "./myself";
import { wave4, wave5, wave6 } from "./waves";

document.body.innerHTML = myself() + wave6() + wave5() + wave4();

const waves = document.querySelectorAll(".wave");

setInterval(() => {
  waves.forEach((wave) =>
    wave.style.setProperty("--animation-time", Math.random() * 3 + 1 + "s")
  );
}, 4000);
