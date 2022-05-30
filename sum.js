const args = process.argv;

console.log(args.slice(2));

// We want our code to take 2 numbers, add them, then print the result.

const add = function(a, b) {
  return parseInt(a) + parseInt(b);
};

let sum = add(args[2], args[3]);
console.log("Addition of 2, 3 is ," + sum);

console.log(sum);


