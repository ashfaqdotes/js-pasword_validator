let checkNumber = document.getElementById('checknumber');
let checkLength = document.getElementById('checklength');
let checkSpecial = document.getElementById('checkspecial');
let checkLower = document.getElementById('checklower');
let checkUpper = document.getElementById('checkupper');
let passCheck = document.getElementById('passcheck');

passCheck.onkeyup = () => {
  const numbers = /[0-9]/g;
  const specialChar = /[!@#$%^&*()_+{}:':"|,..<[\]?]/g;
  const lowerLetters = /[a-z]/g;
  const upperLetters = /[A-Z]/g;

  // Validate lowercase letters
  if (passCheck.value.match(lowerLetters)) {
    checkLower.classList.remove("invalid");
    checkLower.classList.add("valid");
  } else {
    checkLower.classList.remove("valid");
    checkLower.classList.add("invalid");
  }

  // Validate capital letters
  if (passCheck.value.match(upperLetters)) {
    checkUpper.classList.remove("invalid");
    checkUpper.classList.add("valid");
  } else {
    checkUpper.classList.remove("valid");
    checkUpper.classList.add("invalid");
  }

  // Validate numbers
  if (passCheck.value.match(numbers)) {
    checkNumber.classList.remove("invalid");
    checkNumber.classList.add("valid");
  } else {
    checkNumber.classList.remove("valid");
    checkNumber.classList.add("invalid");
  }

  // Validate length
  if (passCheck.value.length >= 12) {
    checkLength.classList.remove("invalid");
    checkLength.classList.add("valid");
  } else {
    checkLength.classList.remove("valid");
    checkLength.classList.add("invalid");
  }

  // // Validate length (only alphabetic characters)
  // if (alphabeticChars.length >= 12) {
  //   checkLength.classList.remove("invalid");
  //   checkLength.classList.add("valid");
  // } else {
  //   checkLength.classList.remove("valid");
  //   checkLength.classList.add("invalid");
  // }

  // Validate special characters
  if (passCheck.value.match(specialChar)) {
    checkSpecial.classList.remove("invalid");
    checkSpecial.classList.add("valid");
  } else {
    checkSpecial.classList.remove("valid");
    checkSpecial.classList.add("invalid");
  }
}

