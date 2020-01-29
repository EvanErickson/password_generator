let result = '';
let lowerCases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperCases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let specialChar = ['@', '%','+','\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{',']','[','~','-','_','.']
let possibleChar = []

let generateBtn = document.getElementById('generate');
let hasUpperCase;

document.getElementById('generate').addEventListener('click', () => {
   let length = parseInt(prompt('How many characters would you like in the password?'))
   console.log(typeof length)
   hasUpperCase = confirm('Would you like to use uppercase letters?')
   console.log(hasUpperCase)
   let hasLowerCase = confirm('Would you like to use lowercase letters?')
   console.log(hasLowerCase)
   let hasNumber = confirm('Would you like to use numbers?')
   console.log(hasNumber)
   let hasSpecial = confirm('Would you like to use special characters?')
   console.log(hasSpecial)
   
   if (hasUpperCase){
   possibleChar = possibleChar.concat(upperCases)
   console.log(possibleChar)
   } else if (hasLowerCase){
      possibleChar = possibleChar.concat(lowerCases)
      console.log(possibleChar)
   } else if (hasNumber){
      possibleChar = possibleChar.concat(numbers)
      console.log(possibleChar)
   } else if (hasSpecial){
      possibleChar = possibleChar.concat(specialChar)
      console.log(possibleChar)
   }
})







      // use if else or use switch case
// get random function to return a random character from the array that has been passed as the input

// get options (length and criteria)
// verify length and criteria, if they hit cancel on all 

// iterate over possible char and randomly choose characters with math function
// do random funciton on each of the four arrays


// function 1 get inputs and outputs
// functino 2 generate password
// render page

//if conditions are true, append corresponding array to new array called possible characters

// // Write password to the #password input
// function writePassword() {
//    var password = generatePassword();
//    var passwordText = document.querySelector("#password");

//    passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)
