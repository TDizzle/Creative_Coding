    var headX = 250;
    var headY = 100;
    var headDirection = 1;

    var circleX = 100;
    var circleY = 25;
    var circleDirection = 2;

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
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    textSize(22);
    text("Good morning!", 10,80);

    // head
    fill(255, 204, 0);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    // body
    fill(10, 24, 120);
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }

    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Michael Cassens",270,500 );


}
