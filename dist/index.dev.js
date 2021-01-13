"use strict";

var form = document.getElementById("form");
var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var email = document.getElementById("email");
var password = document.getElementById("password");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  var fnameValue = fName.value.trim();
  var lnameValue = lName.value.trim();
  var emailValue = email.value.trim();
  var passValue = password.value.trim();

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
  var formControl = input.parentElement;
  var small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control failure";
}

function setSuccessFor(input) {
  var formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email) == false) {
    return false;
  }

  return true;
}