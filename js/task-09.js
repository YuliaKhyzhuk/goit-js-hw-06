function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

const onChangeColorBtnElClick = (event) => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  console.log(randomColor);
  colorSpan.textContent = randomColor;
  console.log(colorSpan);
};

changeColorBtnEl.addEventListener("click", onChangeColorBtnElClick);
