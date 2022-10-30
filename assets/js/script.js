//Code for Assignment
const generateBtn = document.querySelector("#generate");
/* defined the characters that the password can containn*/
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
const numbers = "0123456789";
const symbol = "!@#$%^&*()+_";

/* defined variables for DOM elements */

let passwordLength = "";
let upperCaseCrit = true;
let lowerCaseCrit = true;
let numbersCrit = true;
let symbolsCrit = true;
let options;

//Determining the length of password
function calculatePasswordLength() {
  passwordLength = prompt("Please enter the length of your password (Must be between 8 and 128 characters)");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Must be at least 8 characters long");
    calculatePasswordLength();
  }else {
    alert("Password length accepted");
  }
return passwordLength;
}
console.log(passwordLength);


//function for upperCase letter
  function dictateUpperCase() {
    let upperCaseCrit = prompt("Would you like to include uppercase letters? (Yes or No)");
    if (upperCaseCrit === "yes"){
      upperCaseCrit = true;
      return upperCaseCrit;
    } else if (upperCaseCrit === "no"){
      upperCaseCrit = false;
      return upperCaseCrit;
    }else {
      alert("Invalid Answer! (Yes or No)")
      dictateUpperCase();
      }
      return upperCaseCrit;
    }
    console.log(upperCaseCrit);

//function for lowerCase letters
function dictateLowerCase() {
  let lowerCaseCrit = prompt("Would you like to include lowercase letters? (Yes or No)");
  if (lowerCaseCrit === "yes"){
    lowerCaseCrit = true;
    return lowerCaseCrit;
  } else if (lowerCaseCrit === "no"){
    lowerCaseCrit = false;
    return lowerCaseCrit;
  }else {
    alert("Invalid Answer!(Yes or No)")
    dictateLowerCase();
    }
    return lowerCaseCrit;
  }
  console.log(lowerCaseCrit);    

  //function for numbers
  function dictateNumbers() {
    let numbersCrit = prompt("Would you like to include numbers? (Yes or No)");
    if (numbersCrit === "yes"){
      numbersCrit = true;
      return numbersCrit;
    } else if (numbersCrit === "no"){
      numbersCrit = false;
      return numbersCrit;
    }else {
      alert("Invalid Answer! (Yes or No)")
      dictateNumbers();
      }
      return numbersCrit;
    }
    console.log(numbersCrit);

    // function for using symbols or special characters in password
  function dictateSpecial() {
    let symbolsCrit = prompt("Would you like to include special characters? (Yes or No)");
    if (symbolsCrit === "yes"){
      symbolsCrit == true;
      return symbolsCrit;
    } else if (symbolsCrit === "no"){
      symbolsCrit == false;
      return symbolsCrit;
    }else {
      alert("Invalid Answer!(Yes or No)")
      dictateSpecial();
      }
      return symbolsCrit;
    }
    console.log(symbolsCrit);

//This is to call the functions
function generatePassword(){
  calculatePasswordLength();
  dictateUpperCase();
  dictateLowerCase();
  dictateNumbers();
  dictateSymbol();
  

let password = "";
let options = "";

//This is to identify what the user selected yes "True" to and then add the appropriate variables to the options before generating a password
if (lowerCaseCrit){
  options += lowerCase;
}
if (upperCaseCrit){
  options += upperCase;
}
if (numbersCrit){
  options += numbers;
}
if (symbolsCrit){
  options += symbol;
}

//This is a for loop to iterate throughout the password length which is determined at the beginning and then randomizing the options
for(let i = 0; i < passwordLength; i++) {
  password += options.charAt(Math.floor(Math.random() * options.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password")
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

