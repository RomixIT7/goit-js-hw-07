function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');
btn.addEventListener('click', changeColor);

function changeColor(e) {
  const currentColor = getRandomHexColor();
  color.textContent = currentColor;
  body.style.backgroundColor = currentColor;
}
