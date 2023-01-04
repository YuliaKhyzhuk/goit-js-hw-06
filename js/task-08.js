const contactFormEl = document.querySelector(".login-form");
const onContactFormSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
    return;
  }

  const userDataObject = {
    email: email.value,
    password: password.value,
  };
  console.log(userDataObject);

  event.currentTarget.reset();
};

contactFormEl.addEventListener("submit", onContactFormSubmit);
