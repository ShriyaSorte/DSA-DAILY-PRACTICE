const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverse(n) {
  let rem,
    rev = 0;
  while (n != 0) {
    rem = n % 10;
    rev = (rev * 10) + rem;
    n = (n / 10) | 0;
  }
  return rev;
}

rl.question("Enter a number: ", function (userInput) {
  const num = parseInt(userInput);
  const reversedNumber = reverse(num);
  console.log(`Reversed number: ${reversedNumber}`);
  rl.close();
});
