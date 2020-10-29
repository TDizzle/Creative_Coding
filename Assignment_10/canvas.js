    // circles
      var circleX = 250;
      var circleY = 100;
      var circleDirection = 2;

      var circle1X = 100;
      var circle1Y = 250;
      var circle1Direction = 3;

    //rect
      var rectX = 200;
      var rectY = 185;
      var rectDirection = 1;

      var rect1X = 100;
      var rect1Y = 300;
      var rect1Direction = 1;


      function setup()
      {
        createCanvas(1000, 1200);
      }

      function draw()
      {

          background(300,45,78);
          textSize(22);
          text("Howdy!",400,80);

          //circleX
          fill(255, 204, 0);
          circle(circleX,circleY,175);
          circleX+=circleDirection;
          if(circleX >= 420 || circleX <= 80)
          {
              circleDirection *= -1;
          }

          //circle1
          fill(90, 204, 10);
          circle(circle1X,circle1Y,20);
          circle1X+=circle1Direction;
          if(circle1X >= 500 || circle1X <= 50)
          {
              circle1Direction *= -1;
          }

          // rect
          fill(51);
          rect(rectX,rectY,100,150);
          rectY+=rectDirection;
          if(bodyY <= 80 || bodyY >= 450 )
          {
              rectYDirection *= -1;
          }

          //rect2
          fill(8, 0, 20);
          rect(rec1X,rect1Y,300,150);
          rect1Y += rect1Direction;
          if(rect1Y >= 80 || rect1Y <= 750);
          {
            rect1Direction *= -1;
          }

          textSize(20);
          text("Tristan Lilly",500,100);

        }
