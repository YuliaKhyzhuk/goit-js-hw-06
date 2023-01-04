const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onInputRangeChange = (event) => {
  const rangeValue = inputRange.value;
  text.style.fontSize = rangeValue + "px";
};

inputRange.addEventListener("input", onInputRangeChange);
