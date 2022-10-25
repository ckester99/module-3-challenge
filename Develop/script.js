// Assignment code here
function generatePassword() {
    let numChars, //must end up between 8 and 128
        incLowers,
        incUppers,
        incNums,
        incSpecialChars;
    cancelPressed = false;

    while (numChars === undefined) {
        let input = parseInt(window.prompt("Number of Characters:", "8"));
        if (isNaN(input)) {
            //checks to see if the cancel button was pressed
            cancelPressed = true;
            break;
        }
        if (input >= 8 && input <= 128) {
            numChars = input;
        } else {
            window.alert("Please input a value between 8 and 128");
        }
    }

    while (incLowers === undefined && !cancelPressed) {
        //will skip input prompt sequence if cancel was pressed at any point
        let input = window.prompt("Include Lower Case Letters? y/n", "y");
        if (input === null) {
            cancelPressed = true;
            break;
        }
        if (input === "y" || input === "Y") {
            incLowers = true;
        } else if (input === "n" || input === "N") {
            incLowers = false;
        } else {
            window.alert("Please input y or n");
        }
    }

    while (incUppers === undefined && !cancelPressed) {
        let input = window.prompt("Include Upper Case Letters? y/n", "y");
        if (input === null) {
            cancelPressed = true;
            break;
        }
        if (input === "y" || input === "Y") {
            incUppers = true;
        } else if (input === "n" || input === "N") {
            incUppers = false;
        } else {
            window.alert("Please input y or n");
        }
    }

    while (incNums === undefined && !cancelPressed) {
        let input = window.prompt("Include Numbers? y/n", "y");
        if (input === null) {
            cancelPressed = true;
            break;
        }
        if (input === "y" || input === "Y") {
            incNums = true;
        } else if (input === "n" || input === "N") {
            incNums = false;
        } else {
            window.alert("Please input y or n");
        }
    }

    while (incSpecialChars === undefined && !cancelPressed) {
        let input = window.prompt("Include Special Characters? y/n", "y");
        if (input === null) {
            cancelPressed = true;
            break;
        }
        if (input === "y" || input === "Y") {
            incSpecialChars = true;
        } else if (input === "n" || input === "N") {
            incSpecialChars = false;
        } else {
            window.alert("Please input y or n");
        }
    }

    //builds a string containing all valid characters for the password
    //this could also be done by setting a valid range of unicode characters and then grabbing a random char from the valid range.
    let validChars = "";
    if (incLowers) {
        validChars = validChars + "abcdefghijklmnopqrstuvwxyz";
    }
    if (incUppers) {
        validChars = validChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (incNums) {
        validChars = validChars + "0123456789";
    }
    if (incSpecialChars) {
        validChars =
            validChars +
            "\u0020\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";
    }

    //builds a password by randomly selecting however many characters user specified from list of valid characters.
    let password = validChars;
    for (let i = 0; i < numChars; i++) {}
    if (cancelPressed) {
        password = "Cancelled";
    }
    return password;
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
