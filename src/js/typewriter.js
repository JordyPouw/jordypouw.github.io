export const typewriter = ({ elem, sentences, lineTag, speed }) => {
  const length = sentences.length;
  let index = 0;
  let current = 0;

  function ticking(text) {
    if (index < text.length) {
      if (index === 0) {
        const line = document.createElement(lineTag);
        line.classList.add(`line`, `line-${current + 1}`);
        elem.appendChild(line);
      }

      elem.querySelectorAll(lineTag)[current].innerHTML += text.charAt(index);
      index++;

      setTimeout(() => {
        ticking(text);
      }, speed);
    } else {
      current++;
      index = 0;
      current + 1 <= length && ticking(sentences[current]);
    }
  }

  ticking(sentences[current]);
};
