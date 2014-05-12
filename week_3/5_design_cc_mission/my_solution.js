// I worked [with: Michelle Murphy] on this challenge

// Your mission description:
// Objectives (Story)
// Level 1 - Objective: Learn 5 Basic Git (pull, add, commit, push, status)
//   
// Level 2 - Dev Tools: Learn 3 (element, network, audit)
//
// Level 3 - HTML: Learn 6 (head, body, nav, header, article, footer)
//
// Level 4 - CSS: Learn 4 (positioning, floats, web fonts, pseudo-classes)
//
// Level 5 - JavaScript: Learn (functions, for/while loop, control flow, object)

// Pseudocode
// 1. Prompt for name and save as variable 
// 2. Prompt for age; must be >= 13 give otherwise warning message of, "Play at your own risk."
// 3. One line of rules - question based (answer "correctly" to move on), true/false answers (using 1/0). 
//
// Level 1 - give commmand and ask if this is what "X" does and answer true/false and do same for all 
  // pull - do a true
  // commit - leave out message
  // add - leave out git part
  // push - leave out origin
  // status - true
//
// Level 2 - Elements is where you find "X" true/false, using Network you can find size of images,
// Audit allows you to see web page performance. to optimize page do you want more or fewer http requests
//
// Level 3 - straight true/false - head is where you'd find link to CSS, body is where you'd do Y, if you have 
// copyright would you put in header (false) or footer (true), change background of your page you'd change body's
// background, article can be used for "X" true/false
// 
// Level 4 - positioning - does absolute position to browser or page; floats - can you set float to center?; 
// web fonts - link in head or body; if you move the mouse over a link and you want it to change color
// you would modify a: hover - true or false?
// 
// Level 5 - type syntax if all is correct type true else type false; loop leave out increment; functions can
// be true; object can be blank and true or do something with constructor format since we mostly know literal
//  

// Initial Code

var userName = prompt("Hello, what is your name?");
var userAge = prompt("How old are you?");

/* (userAge = (isNaN)){
     console.log("Please enter a number.");
 } */
   
    if
    (userAge >= 13)
      console.log("Welcome to DBC!");
   
    else
     console.log("Play at your own risk!")

console.log("You answer the question by typing Yes = 1 or No = 0.");

  var totalScore = 0;

function Score() {

  var answer = prompt("if yes type 1 or no type 0");
    if ( answer === "1") {
        totalScore += 1;
      /*  console.log(totalScore); */
    }
};

/* Phase 1 - Git */

var pull = confirm("Pull command: git pull origin");
  Score();
  console.log(totalScore);


  /* if ( pull === "true"){
     console.log("Correct! Let us move to the next question"); */
    
    questionScore = 1;
  }
  else {
      console.log("I'm sorry, you're mistaken. Better luck next time!");
      questionScore = 0;
}

// Refactored Code
var userName = prompt("Hello, what is your name?");
var userAge = prompt("How old are you?");

(userAge = (isNaN));
{
console.log("Please enter a number.");
} 
   if
    (userAge >= 13)
      console.log("Welcome to DBC!");
      
    else
    console.log("Play at your own risk!");

console.log("You answer the question by typing Yes = 1 or No = 0.");


var totalScore = 0;

function Score(){
var answer = prompt("if yes type 1 or no type 0");
    if ( answer === "1"){
        console.log("Correct! Let us move to the next question"); 
        totalScore += 1;
        
        }else{
            
        console.log("I'm sorry, wrong answer. Next Question");
        totalScore;
    }
}

var answer = confirm("Pull command: git pull origin");{
}
Score();
console.log(totalScore);


var answer = confirm("add command: git add");{
}
Score();
console.log(totalScore);

var answer = confirm("status command: git status");{
}
Score();
console.log(totalScore);

var answer = confirm("push command: git push origin");{
}
Score();
console.log(totalScore);

var answer = confirm("remote command: git remote -v");{
}
Score();
console.log(totalScore);



// Reflection
// I found the "design your code" very challenging, because I do not have a sound understanding of js.
// I came up with a idea of a quiz on the all the concepts we learned in week1.  The idea was to
// have an "object" which will hold the questions and a "function" that will keep track of the score.  It
// seemed like it would be easy.  There were five levels of quiz/game.  I did the pseudocode for each level.
// I first I wrote the function and it worked.  But when I tried to build the object, I did not know how to set it
// up, so that it would hold both questions and answers.  I stopped and went to read up resources on objects and contructors.
// By then I was running out of time and needed some workable solution without the use of objects.  So I set up variables
// for questions and used the function over and over again to keep score.  

// I know I was very close to acheiving my goal and but could not make the connection.  I will get back to this once I
// a better understanding of the js.  However, I had my GPS 1.2 this Sunday evening.  And lo and behold we had to do objects
// and constructors.  Surprisingly, my partner and I did pretty good.  I guess all my reading paid off.  But after the GPS,
// I feel like I have a better understanding of objects and constructors.  This was a long and hard week for me as I had to 
// start from a scratch to understand js, But I feel like I am still holding my head above water, I need to start kicking
// as far as js is concerned.
// 
// 
// 
// 
// 
// 
// 