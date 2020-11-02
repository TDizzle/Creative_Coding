    var headX = 250;
    var headY = 250;
    var headDirection = 1;

    var circleX = 120;
    var circleY = 200;
    var circleDirection = 7;

    var bodyX = 200;
    var bodyY = 185;
    var bodyDirection = 3;

    var rectX = 300;
    var rectY = 450;
    var rectDirection = 1;

    var size = 22;
    var count = 0;
    var sizeDirection = 2;

function setup()
{
    createCanvas(700, 900);
}

function draw()
{

    strokeWeight(5);

    background(300,45,78);
    textSize(100)
    text("Howdy", 150,100);

    // head
    fill(255, 204, 0);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    fill(25,100,70);
    circle(circleX,circleY,75);
    circleX+=circleDirection;
    if(circleX >= 500 || circleX <= 25)
    {
      circleDirection *= -1;
    }

    // body
    fill(10, 24, 120);
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }

    fill(80,250,90);
    rect(350,rectY, 15, 170);
    rectY += rectDirection;
    if(rectY <= 5 || rectY >= 500)
    {
        rectDirection *= -1
    }

    fill(20);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Tristan Lilly",250,700);


}
