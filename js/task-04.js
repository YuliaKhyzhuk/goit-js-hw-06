let counterValue = 0;
const outputEl = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const onDecrementBtnClick = (event) => {
  counterValue -= 1;
  outputEl.textContent = counterValue;
};

const onIncrementBtnClick = (event) => {
  counterValue += 1;
  outputEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
