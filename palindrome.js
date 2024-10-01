const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev === str;
}

rl.question("Enter a string to check if it's a palindrome: ", function (userInput) {
    const result = isPalindrome(userInput);
  
    if (result) {
      console.log(`${userInput} is a palindrome.`);
    } else {
      console.log(`${userInput} is not a palindrome.`);
    }
  
    rl.close();
  });
