// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. John Akers
//  2. Daniel Deepak

// 1. "YOU SIGNED... WHO?!"

var ryan = {
  name: "Ryan Gosling",
  age: 32,
  quote: "I'm really dreamy"
};

// 2. "Here they Come!"
var adam = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's home your home! Are you too good for your home?!"
};

var kristen = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?"
};

var jim = {
  name: "Jim Carey",
  age: 52,
  quote: "...So you're telling me there's a chance? YEAH!"
};

// 3. "TIME IS MONEY!"

// var Client = function () 

function Client (name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  
  var that = this;
  
  this.showQuote = function() {
    console.log(that.quote);
  };
}

//YOUR CODE HERE!

//var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
//shooterMcGavin.constructor === Client;
//shooterMcGavin.age === 48;
//shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

var ryan = new Client("Ryan Gosling", 32, "I'm really dreamy");
var adam = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristen = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var jim = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

// 4. "SHOW 'EM OFF!"

var Clients =  [ ryan, adam, kristen, jim];

for (var i = 0; i < Clients.length; i++) {
  console.log(Clients[i].name + " " + Clients[i].age + " " + Clients[i].quote);
}

ryan.showQuote();