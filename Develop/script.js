// Assignment code here
function generatePassword() {
    var numChars = null, //must end up between 8 and 128
        incLowers = null,
        incUppers = null,
        incNums = null,
        incSpecialChars = null;

    while (numChars === null) {
        let input = parseInt(window.prompt("Number of Characters:", "8"));
        if (input >= 8 && input <= 128) {
            numChars = input;
        } else {
            window.alert("Please input a value between 8 and 128");
        }
    }

    while (incLowers === null) {
        let input = window.prompt("Include Lower Case Letters? y/n", "y");
        if (input === "y" || input === "Y") {
            incLowers = true;
        } else if (input === "n" || input === "N") {
            incLowers = false;
        } else {
            window.alert("Please input y or n");
        }
    }

    while (incUppers === null) {
        let input = window.prompt("Include Upper Case Letters? y/n", "y");
        if (input === "y" || input === "Y") {
            incUppers = true;
        } else if (input === "n" || input === "N") {
            incUppers = false;
        } else {
            window.alert("Please input y or n");
        }
    }

    while (incNums === null) {
        let input = window.prompt("Include Numbers? y/n", "y");
        if (input === "y" || input === "Y") {
            incNums = true;
        } else if (input === "n" || input === "N") {
            incNums = false;
        } else {
            window.alert("Please input y or n");
        }
    }

    while (incSpecialChars === null) {
        let input = window.prompt("Include Special Characters? y/n", "y");
        if (input === "y" || input === "Y") {
            incSpecialChars = true;
        } else if (input === "n" || input === "N") {
            incSpecialChars = false;
        } else {
            window.alert("Please input y or n");
        }
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
