const userName = document.querySelector("#username");
const userEmail = document.querySelector("#useremail");
const sendMessage = document.querySelector("#sendmessage");

const checkUserName = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const usernameEl = userName.value.trim();

  if (!isReqiured(usernameEl)) {
    showError(userName, "Username cannot be blank.");
  } else if (!isBetween(usernameEl.length, min, max)) {
    showError(
      userName,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSeccess(userName);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = userEmail.value.trim();

  if (!isReqiured(email)) {
    showError(userEmail, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(userEmail, "Sorry, invalid format here");
  } else {
    showSeccess(userEmail);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isReqiured = (value) => (value === "" ? false : true);
const isBetween = (lenght, min, max) =>
  lenght < min || lenght > max ? false : true;

const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("seccess");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSeccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("seccess");

  const error = formField.querySelector("small");
  error.textContent = "";
};

sendMessage.addEventListener("submit", function (event) {
  let valid = false;

  let isUsernameValid = checkUserName(),
    isEmailValid = checkEmail();

  let isFormValid = isUsernameValid && isEmailValid;

  if (isFormValid) {
    valid = true;
  }

  if (valid === false) {
    event.preventDefault();
  }
});

sendMessage.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "username":
      checkUserName();
      break;
    case "useremail":
      checkEmail();
      break;
  }
});

// scroll Button

const scrollButton = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  if (this.scrollY >= 700) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
};

scrollButton.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};

// Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showing");
    } else {
      entry.target.classList.remove("showing");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));
