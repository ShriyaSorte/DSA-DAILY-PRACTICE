const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumofdigits(n) {
  let sum = 0;
  while (n != 0) {
    rem = n % 10;
    sum = sum + rem;
    n = (n / 10) | 0;
  }
  return sum;
}

rl.question("Enter a number: ", function (userInput){
    const number = parseInt(userInput);
    const sum = sumofdigits(number);
    console.log(`Sum of digits of ${number} is ${sum}`);
    rl.close();  
})