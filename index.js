const form = document.getElementById("form");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const fnameValue = fName.value.trim();
  const lnameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const passValue = password.value.trim();

  if (fnameValue === "") {
    //show error
    //add error class
    setErrorFor(fName, "First name can not be empty");
  } else {
    //add success class
    setSuccessFor(fName);
  }
  if (lnameValue === "") {
    //show error
    //add error class
    setErrorFor(lName, "Last name can not be empty");
  } else {
    //add success class
    setSuccessFor(lName);
  }
  if (emailValue === "") {
    //show error
    //add error class
    setErrorFor(email, "Email can not be empty");
  } else if (!isEmail(emailValue)) {
    //add success class
    setErrorFor(email, "Enter a valid email address");
  } else {
    setSuccessFor(email);
  }
  if (passValue === "") {
    //show error
    //add error class
    setErrorFor(password, "Password can not be empty");
  } else {
    //add success class
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control failure";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email) == false) {
    return false;
  }

  return true;
}
