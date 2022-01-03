// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //ALL YOUR CODE GOES HERE
//   gonna need if statements for the number of characters

// if else statement

// set it from 8-128 , set special characters, 

// for loop
// loop the amnt of the number that the user enters

// need math.random command

// function

// only need to write generate password function



}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
