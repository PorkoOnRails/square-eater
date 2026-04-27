//canvas
const canvas = document.getElementById('canvas');
var columns = 20;
var rows = 20
//blockSize is literaly the width and height of a block size, he is the base number to be multiplyed forming a square
var blockSize = 25;

canvas.width = columns * blockSize;
canvas.height = rows * blockSize;

//Acess the context 2d in canvas abbreviating to "ctx" 
const ctx = canvas.getContext('2d');

//Square spawn
var squareX = 10 * blockSize;
var squareY = 10 * blockSize;

//The square needs a variable velocity to be able to move starting with 0 because when the game start the square is not moving
var squareVelocityX = 0;
var squareVelocityY = 0;

//Square Food
var foodX;
var foodY;

//score
const showScoreValue = document.getElementById("showScoreValue");
var score = 0;

//Obstacles
var obstacleX1, obstacleY1;
var obstacleX2, obstacleY2;
var obstacleX3, obstacleY3;
var obstacleX4, obstacleY4;
var obstacleX5, obstacleY5;
var obstacleX6, obstacleY6;
var obstacleX7, obstacleY7;
var obstacleX8, obstacleY8;
var obstacleX9, obstacleY9;
var obstacleX10, obstacleY10;

//Wait the input from the player to move
document.addEventListener("keydown", changeDirection);

//When game loads
window.onload = function() {

    //When the game start we add the food
    placeFood();
    //Set the velocity that the game will run, giving a time that the function "update" will be repeat
    setInterval(update, 80); // The "update" function will be repeat every 80 milliseconds, the lower the number the faster the game will be
}

//The cycle of the game
function update() {

    //Everytime he "update()" they will execute all this in the function
    ctx.fillStyle="black"; //Color that will fill the canvas, in this case black
    ctx.fillRect(0, 0, canvas.width, canvas.height); //Beggining and end point that will be filled

    //border
    canvas.style.border = "2px solid blue"; //border color and how many pixels of the canvas

    //Obstacles need to be fist then the square to be able to detect properly
    ctx.fillStyle="gray";
    ctx.fillRect(obstacleX1, obstacleY1, blockSize, blockSize);
    ctx.fillRect(obstacleX2, obstacleY2, blockSize, blockSize);
    ctx.fillRect(obstacleX3, obstacleY3, blockSize, blockSize);
    ctx.fillRect(obstacleX4, obstacleY4, blockSize, blockSize);
    ctx.fillRect(obstacleX5, obstacleY5, blockSize, blockSize);
    ctx.fillRect(obstacleX6, obstacleY6, blockSize, blockSize);
    ctx.fillRect(obstacleX7, obstacleY7, blockSize, blockSize);
    ctx.fillRect(obstacleX8, obstacleY8, blockSize, blockSize);
    ctx.fillRect(obstacleX9, obstacleY9, blockSize, blockSize);
    ctx.fillRect(obstacleX10, obstacleY10, blockSize, blockSize);

    //Food
    //The food needs to be first to draw because the square need something to colide with and then "eat it"
    ctx.fillStyle="red";
    ctx.fillRect(foodX, foodY, blockSize, blockSize); //Fill foodX and foodY with given Width and Height cordinates

    //square
    ctx.fillStyle="blue";
    //Before filling the square this function update the X and Y position based on velocity
    //with the * blockSize the will move in block to block stead of pixel by pixel
    squareX += squareVelocityX * blockSize; //The "+=" is the same as "squareX = squareX + squareVelocityX * blockSize" and the same for Y
    squareY += squareVelocityY * blockSize;
    ctx.fillRect(squareX, squareY, blockSize, blockSize); //Fill squareX and squareY with given Width and Height cordinates

     //When the square colide with the food this changes the location, add 1 to the score and check the score to add
    if (squareX == foodX && squareY == foodY) {
        placeFood(), addScoreValue(), checkObstacle();
    }

    //Game over
    //Check if the square position is out of the border and then gives Game Over and your score
    //comparing the position squareX and squareY, if is less than 0 the beginning of the canvas and uses the math (columns/rows multiply by blockSize) to know the en
    //Minus 1 in the blocksize just to sit perfecly in the square

    if (squareX < 0 || squareX > columns * blockSize - 1 || squareY < 0 || squareY > rows * blockSize - 1) {
        return gameOver();
    } else if (squareX == obstacleX1 && squareY == obstacleY1) {
        return gameOver();
    } else if (squareX == obstacleX2 && squareY == obstacleY2) {
        return gameOver();
    } else if (squareX == obstacleX3 && squareY == obstacleY3) {
        return gameOver();
    } else if (squareX == obstacleX4 && squareY == obstacleY4) {
        return gameOver();
    } else if (squareX == obstacleX5 && squareY == obstacleY5) {
        return gameOver();
    } else if (squareX == obstacleX6 && squareY == obstacleY6) {
        return gameOver();
    } else if (squareX == obstacleX7 && squareY == obstacleY7) {
        return gameOver();
    } else if (squareX == obstacleX8 && squareY == obstacleY8) {
        return gameOver();
    } else if (squareX == obstacleX9 && squareY == obstacleY9) {
        return gameOver();
    } else if (squareX == obstacleX10 && squareY == obstacleY10) {
        return gameOver();
    }

}

    function checkObstacle() {

        if (score == 1) {
            return addObstacle1();
        } else if (score == 2) {
            return addObstacle2();
        } else if (score == 3) {
            return addObstacle3();
        } else if (score == 4) {
            return addObstacle4();
        } else if (score == 5) {
            return addObstacle5();
        } else if (score == 6) {
            return addObstacle6();
        } else if (score == 7) {
            return addObstacle7();
        } else if (score == 8) {
            return addObstacle8();
        } else if (score == 9) {
            return addObstacle9();
        } else if (score == 10) {
            return addObstacle10();
        }
    }

  //Function to put some obstacle

  function addObstacle1() {
    obstacleX1 = Math.floor(Math.random() * columns) * blockSize;
    obstacleY1 = Math.floor(Math.random() * rows) * blockSize;
  }
  function addObstacle2() {
    obstacleX2 = Math.floor(Math.random() * columns) * blockSize;
    obstacleY2 = Math.floor(Math.random() * rows) * blockSize;
  }
  function addObstacle3() {
    obstacleX3 = Math.floor(Math.random() * columns) * blockSize;
    obstacleY3 = Math.floor(Math.random() * rows) * blockSize;
  }
  function addObstacle4() {
    obstacleX4 = Math.floor(Math.random() * columns) * blockSize;
    obstacleY4 = Math.floor(Math.random() * rows) * blockSize;
  }
  function addObstacle5() {
    obstacleX5 = Math.floor(Math.random() * columns) * blockSize;
    obstacleY5 = Math.floor(Math.random() * rows) * blockSize;
  }
  function addObstacle6() {
    obstacleX6 = Math.floor(Math.random() * columns) * blockSize;
    obstacleY6 = Math.floor(Math.random() * rows) * blockSize;
  }
  function addObstacle7() {
    obstacleX7 = Math.floor(Math.random() * columns) * blockSize;
    obstacleY7 = Math.floor(Math.random() * rows) * blockSize;
  }
  function addObstacle8() {
    obstacleX8 = Math.floor(Math.random() * columns) * blockSize;
    obstacleY8 = Math.floor(Math.random() * rows) * blockSize;
  }
  function addObstacle9() {
    obstacleX9 = Math.floor(Math.random() * columns) * blockSize;
    obstacleY9 = Math.floor(Math.random() * rows) * blockSize;
  }
  function addObstacle10() {
    obstacleX10 = Math.floor(Math.random() * columns) * blockSize;
    obstacleY10 = Math.floor(Math.random() * rows) * blockSize;
  }

//Game over
function gameOver() {
    alert("Game Over! YOUR SCORE WAS: " + score, location.reload());
}

//Function who add the food random in the canvas
function placeFood() {
    foodX = Math.floor(Math.random() * columns) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

//Function who add 1 to the score and update on the canvas
function addScoreValue() {
    score += 1;
    showScoreValue.textContent = score;
}

//Change the speed of the square making him move
//The "event" is the key that will be pressed and will compare to each one of the keys until find the right and exec
function changeDirection(event) {

    if (event.code == "ArrowUp") {
        squareVelocityX = 0;
        squareVelocityY = -1;
//event.key returns the character produced by the key press, respecting the user's keycanvas layout (e.g., "z" on a QWERTZ layout)
//event.code returns a string representing the physical key on the keycanvas, ignoring the current layout (e.g., "KeyY" on a QWERTZ layout)
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