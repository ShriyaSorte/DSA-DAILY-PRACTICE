// // Function to find the largest number in an array
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// function findLargestNumber(arr) {
//   if (arr.length === 0) {
//     return "The array is empty";
//   }

//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// rl.question("Enter numbers separated by commas: ", (input) => {
//   let numbers = input.split(",").map(Number); // Convert input to an array of numbers

//   // Finding the largest number
//   let largestNumber = findLargestNumber(numbers);

//   // Output the result
//   console.log("The largest number is:", largestNumber);

//   // Close the input stream
//   rl.close();
// });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findLargestAndSecondLargest(arr) {
  if (arr.length < 2) {
    return "The array should have at least two numbers.";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return { largest, secondLargest };
}

rl.question("Enter numbers separated by commas: ", (input) => {
  let numbers = input.split(",").map(Number); 

  let { largest, secondLargest } = findLargestAndSecondLargest(numbers);

  // Output the results
  console.log("The largest number is:", largest);
  if (secondLargest !== -Infinity) {
    console.log("The second largest number is:", secondLargest);
  } else {
    console.log("There is no second largest number.");
  }

  // Close the input stream
  rl.close();
});
