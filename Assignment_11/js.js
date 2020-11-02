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

function setup()
{
    createCanvas(800,600);

}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function draw()
{
//key codes ----------------------------
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

// exit message
    textSize(20);
    text("Exit",50,50);


// mouse obstacle
    fill(120,130,140);
    circle(mouseShapeX,mouseShapeY,25);

//character body ---------------------------
    fill(300,0,0);
    circle(charX,charY,25);


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
// exit/winning prompt
    if(charX < 850-width && charY < height-600)
    {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Win!", width/2-50, height/2-50);
    }

}
