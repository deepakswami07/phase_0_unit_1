// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

 //Rescue Mission: Pseudocode:
 //move down 2x
 //move right 1x
 //move up 1x
 //move right 1x
 //attack

//code
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy(); 

 //Crab the Mushroom:Pseudocode:
 //move up 1x
 //move right 1x
 //move left 2x
 //attack

//code
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink Me Pseudocode:
//move right 2x
// attack
//move down 1x
//move up 1x

//code
 this.moveRight();
 this.attackNearbyEnemy();
 this.moveRight();
 this.moveDown();
 this.moveUp();
 this.moveRight();
 this.attackNearbyEnemy();

 //Taunt The Guards:Pseudocode:
 //move
 //move right 2x
 //move up 2x
 //move up 2x
 //move down 1x
 //move up 2x

 //code
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

 //It's a Trap: Pseudocode
 // move down 1x
 //move up 2x
 //say
 //attack

 //code
this.moveDown();
this.moveDown();
this.say("Hey there");
this.moveUp();
this.moveUp();
 
//Taunt: Pseudocode
//say 4x
//attack 4x
//alternate commands

//code
this.say("follow me pretty boy");
this.say("follow me loser");
this.say("follow me ugly");
this.say("follow me fatso");

// TPrison break: Pseudocode
//return true for friends
//return false for foe

//code
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  
if(name === "Lucas")
    return true;
if(name === "Brack")
    return false;  
if(name === "Gort")
    return false; 
if(name === "Marcus")
    return true;
if(name === "Robert")
    return true;
if(name === "Gordon")
    return true;
this.moveXY( 160,12);

 // Cowardly Taunt: Pseudocode
// say
// move to close to the circle
// come abck to safe spot

//code
this.say("I can lure them in here.");
this.moveXY(70, 10);
this.moveXY(62, 38);
this.moveXY(70, 10);
this.moveXY(74, 47);
this.moveXY(70, 10);
this.moveXY(42, 22);
this.moveXY(70, 10);
this.moveXY(52, 41); 
this.moveXY(70, 10);

// Commanding followers: Pseudocode
//move
//follow
//move
//attack

 //code
this.moveXY(65, 65);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("follow!");
this.moveXY(68, 48);
this.say("attack!");

//Mobile Artillery: Pseudocode
//move
//attack
//attack
//move

//code
this.moveXY(23, 64);  
this.attackXY(49, 67); 
this.moveXY(25, 59); 
this.attackXY(43, 62);  
this.moveXY(46, 53); 
this.attackXY(67, 57); 
this.attackXY(58, 52); 
this.moveXY(49, 29); 
this.attackXY(49, 9); 

// Reflection:
//Honestly, the first time I went on the site I had no idea of what I was supposed to
//do. As it had to do with js, I did a little reading of the code syntax of js.  Then
// I tried to figure out the interface.  Spending that extra time and getting comfortable with 
// the interface and layout helped to solve the challenges easily later.  In the beginning,
// I thought that it was rather simple and tried to do it the trial error method and found this
//to be a rather inefficient way.  As I started to solve the levels, it got more interesting and 
//then I began to make a connection with how the scripts were written and how it was being
//applied.  Even though it was frustrating in the beginning, after doing this exercise and then
//diving into js fundamentals made more sense to me.  I found the later ones more fun.


















