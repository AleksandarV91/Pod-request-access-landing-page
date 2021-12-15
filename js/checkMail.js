const emailInput = document.querySelector(".submitDocs");
const btn = document.querySelector(".btn");
const err = document.querySelector(".error-msg");

btn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();
  if (emailValue === "" || !emailValidation(emailValue)) {
    err.classList.add("show");
  } else {
    err.classList.remove("show");
    emailInput.value = "";
  }
});

const emailValidation = (email) => {
  let regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLocaleLowerCase());
};
