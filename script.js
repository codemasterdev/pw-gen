// WELCOME PROMPT
alert("Welcome to your free password generator.");


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

    // RANGE TYPES FOR CHARACTER
    const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowerCase = "qwertyuiopasdfghjklzxcvbnm"
    const specialCharacters = "`~!@#$%^&*|}{?><+-"
    const numbers = "0123456789"


    var characterRange = '';

    if (hasUppercase) {
        characterRange += upperCase;
    }
    if (hasLowercase) {
        characterRange += lowerCase;
    }
    if (hasSpecialCharacters) {
        characterRange += specialCharacters;
    }
    if (hasNumbers) {
        characterRange += numbers;
    }

    // RETURN RANGE OF CHARACTERS
    return characterRange;

}

// PASSWORD LENGTH FUNCTION
function passwordLength() {
    var passwordLength = prompt("Please type in the length of the password you would like to have. Please choose 8-128");
    while (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {
        alert("Invalid, try again")
        passwordLength = prompt("choose your character length 8-128")
    }
    return passwordLength;
};

// PASSWORD GENERATOR FUNCTION
function generatePassword() {
    var userLength = passwordLength();
    var characterType = startPw();

    var newPassword = "";

    for (let i = 0; i < userLength; i++) {
        newPassword += characterType.charAt(Math.floor(Math.random() * characterType.length));
    }

    return newPassword;
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
