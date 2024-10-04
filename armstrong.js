const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function armstrong(n) {
  let rem,
    sum = 0;
  let temp = n;

  while (n != 0) {
    rem = n % 10;
    sum = sum + (rem * rem * rem);
    n = (n / 10) | 0;
  }
  return sum === temp;
}

rl.question("Enter a number: ", (input) => {
  const number = +input;

  if (isNaN(number)) {
    console.log("Please enter a valid number.");
  } else if (armstrong(number)) {
    console.log(`${number} is an Armstrong number.`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
  }

  rl.close();
});
