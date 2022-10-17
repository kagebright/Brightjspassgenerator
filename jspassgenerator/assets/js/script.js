/* defined the characters that the password can containn*/
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZYZ";
const numbers = "0123456789"
const symbols = "!@#$%^&*()+_"

/* defined variables for DOM elements */
const password = document.getElementById("");
const length = document.getElementById("numberofCharacters")
const includeUppercase = document.getElementById("includeUpperCase");
const includeSymbols = document.getElementById("includeSpecialcharacters");
const number = document.getElementById("includeNumbers");
const generateBtn = document.getElementById("submit");

/* function */
generateBtn.addEventListener("click")
