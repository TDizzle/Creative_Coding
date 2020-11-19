var charX = 700;
var charY = 500;

var diameter = 25;

var obstacleX = 120;
var obstacleY = 50;
var obstacleDirection = 8;

var obstacle2X = 30;
var obstacle2Y = 300;
var obstacle2Direction = 4;
var obstacleXSpeed;
var obstacleYSpeed;

var mouseShapeX;
var mouseShapeY;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];


//start canvasy boi-------------------------------------------------------------
function setup()
{
    createCanvas(800,600);

    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(800);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(20);
    }

}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function draw()
{

    characterMovement();

    createBorder();

    createExitmessage();

    createObstacles();

    createMouseobject();

    createPlayer();

    createCongrats();

    // potential enemy
    fill(13, 145, 14);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
      }

}


//functiony bois----------------------------------------------------------------
function createExitmessage()
{
  // exit message ---------------------------
      textSize(20);
      text("Exit",50,50);
}

function createBorder()
{
  //border ----------------------------------
      background(250,10,90);
      fill(0);
  //top
      rect(50,0,width,10);
  //left
      rect(0,0,10,height);
  // bottom
      rect(0, height-10,width, 10);
  // right
      rect(width-10,0,10,height);
}

function characterMovement()
{
  //key codes -------------------------------
      if(keyIsDown(68))
      {
         charX+=5;
      }
      if(keyIsDown(65))
      {
         charX-=5;
      }
      if(keyIsDown(83))
      {
         charY+=5;
      }
      if(keyIsDown(87))
      {
         charY-=5;
      }
}

function createObstacles()
{
  //obstacles --------------------------------
      fill(24,200,300);
      circle(obstacleX,obstacleY,50);
      obstacleX+=obstacleDirection;
      if(obstacleX >= 800)
      {
        obstacleX = 0;
      }

      fill(24,200,29);
      rect(obstacle2X,obstacle2Y,50,100);
      obstacle2Y -= obstacle2Direction;
      if(obstacle2Y <= 0)
      {
        obstacle2Y = 600;
      }
}

function createMouseobject()
{
  // mouse obstacle
      fill(120,130,140);
      circle(mouseShapeX,mouseShapeY,25);
}

function createPlayer()
{
  //character body ---------------------------
      fill(5);
      circle(charX,charY,25);
}

function createCongrats()
{
  // exit/winning prompt
      if(charX < 850-width && charY < height-600)
      {
          fill(0);
          stroke(5);
          textSize(30);
          text("You Win!", width/2-50, height/2-50);
      }

}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
