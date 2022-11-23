// variables: 
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmCharacter;

// Alphabet characters
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Numbers
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Special Characters: 
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Space is for the Uppercase conversion
var space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    newpass = generatePassword();
    document.getElementById("password").placeholder = newpass;
});

// function to generate password
function generatePassword() {
    // Asks user for length
    enter = parseInt(prompt("How long is your password? Type a number between 8 and 128"));
  
    if (!enter) {
        alert("Password cancelled");
    } else if (enter < 8 || enter > 128) {
      
        enter = parseInt(prompt("You must choose between 8 and 128"));
       
    } else {
      confirmUppercase = confirm("Would you like your password to contain Uppercase letters?");
      confirmLowercase = confirm("Would you like your password to contain Lowercase letters?");
      confirmNumber = confirm("Would you like your password to contain numbers?");
      confirmCharacter = confirm("Would you like your password to contain special characters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("No criteria was selected. Choose at least one");

    }
    
    // Else if for all 4 positive options
    else if (confirmUppercase && confirmLowercase && confirmNumber && confirmCharacter) {

        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);
    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    var password = [];

    // Random selection function: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
  
    var newpass = password.join("");
    UserInput(newpass);
    return newpass;
}

// password into textbox
function UserInput(newpass) {
    document.getElementById("password").textContent = newpass;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});