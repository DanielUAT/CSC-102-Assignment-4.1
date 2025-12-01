var x = 100; // initial x position
var y = 100; // initial y position
var changex = 2; // change in x position
var changey = 11;
var intervalID; // variable to store the interval ID

function start() 
{
    document.getElementById("startButton").disabled = true; // disable start button
    document.getElementById("stopButton").disabled = false; // enable stop button
    intervalID=setInterval(moveCat,75); // call moveCat function to start moving the cat
}

function stop() 
{
    document.getElementById("startButton").disabled = false; // enable start button
    document.getElementById("stopButton").disabled = true; // disable stop button
    clearInterval(intervalID); // stop moving the cat
}

function moveCat()
{
    var image = document.getElementById("Happy Cat"); // get the cat image element
    console.log("Moving the cat");
    image.style.top = y + "px"; // update the y position
    image.style.left= x + "px"; // update the x position
    if (x + image.width >  window.innerWidth || x <= 0) // check for horizontal boundaries
    {
        console.log("Are we hitting the edge?");
        changex=-changex; // reverse horizontal direction
    }
    if (y + image.height >  window.innerHeight || y <= 0) // check for vertical boundaries
    {
        changey=-changey; // reverse vertical direction
    }
    x += changex; // update x position
    y += changey; // update y position
}

