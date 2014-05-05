#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
    Element Tab on the left and the styles tab which gets selected as well.

  * Javascript Debugging
    Console 

  * Performance Optimization 
    NetWork

* What's the quick key for your OS to spawn the Dev Tools inspector?
  Using the key command + alt + I on a Mac and ctrl + alt + I on a PC.


* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
     Background-color: #0b0f11

  * Tweak the background color to white.
  Done

  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  Done

  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  Done

  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  http://postimg.org/image/8f2lqzol9/24fb4823/
  

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  Because it is inherited from Body#home.  When I checked the source(css file), this was gif file.  

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  Large_Large.png which was 316kb was the largest in terms of image size.

* Explain how you would find out this information, and list the URL of offending image here and how big it is.
   1.  cmd + alt + I to open dev tools.  2.  click on network.  3. In the size column click the up arrow so the files are arranged in descending order of size. 4. Click the image file on the left and choose preview tab on the right to doublen check the info for file size and other info about the file.
   http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

I think you can do a few things right away.

  1. The large(885.9KB) images has to compressed.  This can be easily be done using a image editng software.

  2. Moving the css files above the js files.