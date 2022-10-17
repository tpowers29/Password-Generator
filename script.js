// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var passwordLen = parseInt(prompt("Enter password length"))
  // "Name" 122
   //"12"
   if(passwordLen < 8 || passwordLen > 128 || isNaN(passwordLen)){
    return  "Please enter valid length between 8-128"
   }
   var acceptU = confirm("Uppercase?")
   var acceptN = confirm("Numeric?")
   var acceptS = confirm("Special characters?")
   var acceptT = confirm("lower case?")
   if(!acceptU && !acceptN && !acceptS && !acceptT){
   return "Please select at least one option"
   }

  var userChoiceLetters = []
  if(acceptN){
    userChoiceLetters += "1234567890"
  }
  if(acceptU){
    userChoiceLetters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(acceptT){
    userChoiceLetters += "abcdefghijklmnopqrstuvwxyz"
  }
  if(acceptS){
    userChoiceLetters += "!@#$%^&*()"
  }
  console.log(userChoiceLetters);
  var password =""
  for(let i=0;i<passwordLen;i++){
    var index= Math.floor(Math.random() * userChoiceLetters.length)
    password += userChoiceLetters[index]
    console.log(password)
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
