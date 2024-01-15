function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ourInput = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const createdBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const inputValue = ourInput.value.trim();
  if (inputValue > 0 && inputValue <= 100) {
    destroyBoxes();
    let boxWidth = 30;
    let boxHeight = 30;
    const arrayOfBoxes = [];
    for (let i = 0; i < inputValue; i++) {
      const box = document.createElement("div");
      box.style.width = `${boxWidth}px`;
      box.style.height = `${boxHeight}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxHeight += 10;
      boxWidth += 10;
      arrayOfBoxes.push(box);
    }
    createdBoxes.append(...arrayOfBoxes);
    ourInput.value = "";
  }
}

function destroyBoxes() {
  createdBoxes.innerHTML = "";
}
