// I paired with Ismail Kalimi] on this challenge.

// Pseudocode
// create a variable and assing a value
// enter a password
// either true/false
// array of index[0] and [3]

// __________________________________________
// Write your code below.
var secretNumber = 0;
var secretNumber = 7;
var pasword = "hello"
var password = "just open the door";
var allowedIn = true;
var allowedIn = false;
var members = [];
var members = ["John","Juan" "Molly", "Mary"];

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = [];
var members = ["John", , ,"Mary"];

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
//
// Even though I understood javascript basics, I had difficulty understanding
// the directions of what and how to run the test. I had to read up on testing
// and then load node.js on my computer. I also had to read up on node basic for beginners.
// However, once I ran the first test, then the whole process fell into place.  I think
// what confused me was, it was too simple and I thought I was doing something wrong.
// I feel like every learning competency is like a hill, that seems insurmontable at first,
// but I eventually end up climbing. I was excited when I figured out how you can test 
// your code on sublime without having to load it in terminal by clicking cmd + B. 
// With every new learning competencies, after early frustration I am able to move on. 
// One step at a time!!
// 
// ________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

