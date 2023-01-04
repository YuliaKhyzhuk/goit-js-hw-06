const usernameInputEl = document.querySelector("#validation-input");
const usernameRequiredLength = Number(usernameInputEl.dataset.length);

const onUsernameInput = (event) => {
  if (usernameInputEl.value.trim().length === usernameRequiredLength) {
    usernameInputEl.classList.remove("invalid");
    usernameInputEl.classList.add("valid");
  } else {
    usernameInputEl.classList.remove("valid");
    usernameInputEl.classList.add("invalid");
  }
};

usernameInputEl.addEventListener("blur", onUsernameInput);
