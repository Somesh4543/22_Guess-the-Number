let a = Math.random() * 100;
a = Number.parseInt(a)
let input;
let score = 100;

while (input != a) {
  score = score - 1;
  input = prompt("Enter the number");
  if (input == a) {
    console.log("Congrats");
    console.log(`You guessed the number in ${100 - score} chances.`)
  }
  else if (input > a && input < 100) {
    console.log("Your number is greater than the actual number")
  }
  else if (input < a && input > 0) {
    console.log("Your number is smaller than the actual number")
  }
  else {
    console.log("Enter number b/w 1 and 100")
  }
}