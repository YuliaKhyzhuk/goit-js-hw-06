const usernameInputEl = document.querySelector("#name-input");
const usernameOutputEl = document.querySelector("#name-output");

const onUsernameInput = (event) => {
  if (usernameInputEl.value !== "") {
    usernameOutputEl.textContent = usernameInputEl.value.trim();
  } else usernameOutputEl.textContent = "Anonymous";
};

usernameInputEl.addEventListener("input", onUsernameInput);
