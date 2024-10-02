const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function factorial(n) {
  let f = 1;
  for (i = n; i >= 1; i--) {
    f = f * i;
  }
  return f;
}

rl.question("Enter a number: ", function (userInput) {
  const num = parseInt(userInput);
  const result = factorial(num); 
  console.log(`Factorial of ${num} is: ${result}`); 
  rl.close(); 
});
