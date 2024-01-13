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
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {   // isNaN checks whether it is a number or not
      alert("Please enter a valid password length between 8 and 128 characters.");
      return "";
  }

  // Confirm character types 
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
      alert("Please select at least one character type.");
      return "";
  }

  // Define character sets based on user choices
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+={}[]:;,<>./'?";

  // Concatenate all character types
  var allChars = "";
  if (includeLowercase) {
    allChars += lowercaseChars;
  }   
  if (includeUppercase) {
    allChars += uppercaseChars;
  }  
  if (includeNumeric) {
    allChars += numericChars;
  }  
  if (includeSpecialChars) {
    allChars += specialChars;
  }  

  // Generate the password
  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars.charAt(randomIndex);
  }

  // Return the generated password
  return generatedPassword;
}
