// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate a password based on user criteria
function generatePassword() {

  // Prompt for password length
  var passwordLength = parseInt(prompt("Enter password length (should be between 8 and 128 characters):"));

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return "";
  }




}
