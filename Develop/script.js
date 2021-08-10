// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment code here

// WELCOME PROMPT
alert("Welcome to your free password generator.");

// PASSWORD LENGTH FUNCTION
function passwordLength() {
  var passwordLength = prompt("Please type in the length of the password you would like to have. Please choose 8-128");
  while (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {
    alert("Invalid, try again")
    passwordLength = prompt("choose your character length 8-128")
  }
  return passwordLength;
};

// CHOOSE CHARACTER TYPE
function startPw() {

  alert("Which character types would you like in your password.");

  var hasUppercase = confirm("Would you like uppercase?");
  var hasLowercase = confirm("How about lowercase letters?");
  var hasSpecialCharacters = confirm("Would you like some special characters as well?");
  var hasNumbers = confirm("and how about some numbers?");

  var confirmArray = new Array(hasUppercase, hasLowercase, hasSpecialCharacters, hasNumbers);
  var falseCheck = confirmArray.every
    (confirmElement => !confirmElement);

  if (falseCheck) {
    alert("Please choose a type, try again")
    startPw();
  }






}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
