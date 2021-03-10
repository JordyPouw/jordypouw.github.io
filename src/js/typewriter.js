export const typewriter = ({
  elem,
  sentences,
  lineTag,
  minSpeed,
  maxSpeed,
  onEnd,
}) => {
  const length = sentences.length;
  let index = 0;
  let current = 0;

  function ticking(text) {
    const speed = maxSpeed * Math.random() + minSpeed;
    if (index < text.length) {
      if (index === 0 && lineTag) {
        const line = document.createElement(lineTag);
        line.classList.add(`line`, `line-${current + 1}`);
        elem.appendChild(line);
      }
      if (lineTag) {
        const nodes = elem.querySelectorAll(`.line-${current + 1}`);
        const last = nodes[nodes.length - 1];
        last.innerHTML += text.charAt(index);
      } else {
        elem.value += text.charAt(index);
      }

      index++;

      setTimeout(() => {
        ticking(text);
      }, speed);
    } else {
      current++;
      index = 0;
      current + 1 <= length && ticking(sentences[current]);
      current + 1 > length && onEnd && onEnd();
    }
  }

  ticking(sentences[current]);
};
