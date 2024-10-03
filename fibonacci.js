const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci(n) {
  let t1 = 0;
  let t2 = 1;
  let next;
  for (i = 1; i <= n; i++) {
    console.log(t1);
    next = t1 + t2;
    t1 = t2;
    t2 = next;
  }
  return next;
}

rl.question("Enter the number of terms: ", function (num) {
  const n = parseInt(num);

  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive number.");
  } else {
    fibonacci(n);
  }
  rl.close();
});
