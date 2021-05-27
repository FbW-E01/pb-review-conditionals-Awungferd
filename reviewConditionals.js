// # Review - Conditionals

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Save a random whole number between -10 and 10 to a variable.

let randomWholeNum = 8;

// 2. If that variable is greater than 0, print "Ye" and otherwise print "No"

if (randomWholeNum > 0) {
  console.log("Ye");
} else {
  console.log("No");
}

// 3. If that variable is greater than 5, print "Winner", otherwise if that variable is greater than 0, print "OK", otherwise print "Try again!"
if (randomWholeNum > 5) {
  console.log("Winner");
} else if (randomWholeNum > 0) {
  console.log("OK");
} else {
  console.log("Try Again!");
}

// 4. Save another random number between -10 and 10 to a variable.
let anotherVariable = 3;

// 5. If both variables are more than 5, print "Good scores!"
if (randomWholeNum > 6 && anotherVariable > 5) {
  console.log("Good scores");
}
// 6. If either variable is below -9, print "Minus nine!"
if (randomWholeNum < -9 && anotherVariable < -9) {
  console.log("Minus nine");
}
// 7. Create a variable to store a message. If your random numbers added together is smaller than zero, save the message "We have gone sub zero!". Otherwise, set the message to null.
let message = "";
if (randomWholeNum + anotherVariable < 0) {
  let message = "We have gone sub zero!";
} else {
  message = null;
}
console.log(message);
// ===
let message2 =
  randomWholeNum + anotherVariable < 0 ? "We have gone sub zero!" : null;
console.log(message2);
