const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false; 

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false; 
  }
  return true; 
}

rl.question("Enter a number: ", function (userInput) {
  const number = parseInt(userInput);

  if (isNaN(number)) {
    console.log("Please enter a valid number.");
  } else {
    if (prime(number)) {
      console.log(`${number} is a prime number.`);
    } else {
      console.log(`${number} is not a prime number.`);
    }
  }

  rl.close();
});
