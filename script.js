//board
var board;
//Because the board is big, if we use 1 to 10 numbers we will not see anything because the pixel is so small
var columns = 20; //equal X
var rows = 20; //equal Y
//We have 20 multiply by 20 which is 400 pixels in the board, X right is positive, Y down is positive

//blockSize is literaly the width and height of a block size, he is the base number to be multiplyed forming a square
var blockSize = 25;

//Context is the area that is filled with
var context;

//Square spawn point in random location
var squareX = Math.floor(Math.random() * columns) * blockSize;
var squareY = Math.floor(Math.random() * rows) * blockSize;

//The "* blockSize" is the location of the object starting in 0, 0 then equal X, Y multiplyed by size of the block

//The square needs a variable velocity to be able to move starting with 0 because when the game start the square is not moving
var squareVelocityX = 0;
var squareVelocityY = 0;

//Square Food
var foodX;
var foodY;

//what is gonna do when the game starts
window.onload = function() {
    board = document.getElementById('board');
    board.width = columns * blockSize;
    board.height = rows * blockSize;
    context = board.getContext("2d"); //Use to drawing on the board

    //Score
    showScoreValue = document.getElementById("showScoreValue");
    score = 0; //Reset score when the game start

    //When the game start we call a function to add the food
    placeFood();

    //"keyup" means the arrow key was pressed and relised
    //When a arrow key is pressed they does what is after the "," in this case call the function "changeDirection" that will change the velocity of the square
    document.addEventListener("keyup", changeDirection);

    //We was using the "update();" function to see how things goes but now we need this to be doing constantly
    //which requires a setInterval() that update the time in interval of milliseconds seted
    setInterval(update, 1000/10); // 100 Milliseconds = 10 times por second
}

function update() {

    //Everytime he "update()" they will execute all this in the function
    context.fillStyle="black"; //Color that will fill the board, in this case black
    context.fillRect(0, 0, board.width, board.height); //Beggining and end point that will be filled

    //border
    board.style.border = "2px solid blue"; //border color and how many pixels of the board

    //Food
    //The food needs to be first to draw because the square need something to colide with and then "eat it"
    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize); //Fill foodX and foodY with given Width and Height cordinates

    //square
    context.fillStyle="blue";
    //Before filling the square this function update the X and Y position based on velocity
    //with the * blockSize the will move in block to block stead of pixel by pixel
    squareX += squareVelocityX * blockSize; //The "+=" is the same as "squareX = squareX + squareVelocityX * blockSize" and the same for Y
    squareY += squareVelocityY * blockSize;
    context.fillRect(squareX, squareY, blockSize, blockSize); //Fill squareX and squareY with given Width and Height cordinates

     //When the square colide with the food this changes the location and add 1 to the score
    if (squareX == foodX && squareY == foodY) {
        placeFood();
        addScoreValue();
    }

    //Game over
    //Check if the square position is out of the border and then gives Game Over and your score
    //comparing the position squareX and squareY, if is less than 0 the beginning of the board and uses the math (columns/rows multiply by blockSize) to know the end
    if (squareX < 0 || squareX > columns * blockSize || squareY < 0 || squareY > rows * blockSize) {
        alert("Game Over! YOUR SCORE WAS: " + score);
    }
}

//Function who add the food random in the board
function placeFood() {
    //Math.random() Gives you a number between 0 and 1 and can be for example 0.5555...
    //Math.floor() function returns the largest integer less than or equal to a given number by rounding it down to the nearest whole number
    //Math.random() Gives you a number between (0-1) then multiply by columns which the value is set to 20 so the max is 19.9999...
    //In resume you have a random number between 0 and 20 multiply by the blockSize covering all the canvas
    foodX = Math.floor(Math.random() * columns) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

//Function who add 1 to the score and update on the board
function addScoreValue() {
    score += 1;
    return showScoreValue.textContent = score;
}

//Change the speed of the square making him move
//The "event" is the key that will be pressed and will compare to each one of the keys until find the right and exec
function changeDirection(event) {

    if (event.code == "ArrowUp") {
        squareVelocityX = 0;
        squareVelocityY = -1;
//event.key returns the character produced by the key press, respecting the user's keyboard layout (e.g., "z" on a QWERTZ layout)
//event.code returns a string representing the physical key on the keyboard, ignoring the current layout (e.g., "KeyY" on a QWERTZ layout)
    } else if (event.code == "ArrowDown") {
        squareVelocityX = 0;
        squareVelocityY = 1;

    } else if (event.code == "ArrowRight") {
        squareVelocityX = 1;
        squareVelocityY = 0;

    } else if (event.code == "ArrowLeft") {
        squareVelocityX = -1;
        squareVelocityY = 0;
    }
}
