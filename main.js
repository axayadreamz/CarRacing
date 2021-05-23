canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car1_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
car1_x = 20;
car1_y = 100;
car2_width = 100;
car2_height = 90;
car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png";
car2_x = 20;
car2_y = 200;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add()
{
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image;


    car1_imgTag = new Image();
    car1_imgTag.onload = uploadrover;
    car1_imgTag.src = car1_image;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadrover2;
    car2_imgTag.src = car2_image;
}

function uploadBackground()
{ 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadrover2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    console.log(keyPressed);
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    console.log(keyPressed);
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    console.log(keyPressed);
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '87')
    {
        car2up();
        console.log("car2up");
    }  
    if(keyPressed == '65')
    {
        car2left();
        console.log("car2left");
    }
    if(keyPressed == '83')
    {
        car2down();
        console.log("car2down");
    }
    if(keyPressed == '68')
    {
        car2right();
        console.log("car2right");
    }
}

function up()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        console.log("When done arrow is pressed, x = " + car1_x + "y ="+car1_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }

}
function down()
{
    if(car1_y <=500)
    {
        car1_y = car1_y+ 10;
        console.log("When done arrow is pressed, x = " + car1_x + "y ="+car1_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function left()
{
    if(car1_x >= 0)
    {
        car1_x = car1_x - 10;
        console.log("When done arrow is pressed, x = " + car1_x + "y ="+car1_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function right()
{
    if(car1_x <= 700)
    {
        car1_x = car1_x + 10;
        console.log("When done arrow is pressed, x = " + car1_x + "y ="+car1_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}

function car2up()
{
    if(car2_y >=0)
    {
        car2_y = car2_y - 10;
        console.log("When done arrow is pressed, x = " + car2_x + "y ="+car2_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }

}
function car2down()
{
    if(car2_y <=500)
    {
        car2_y = car2_y+ 10;
        console.log("When done arrow is pressed, x = " + car2_x + "y ="+car2_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function car2left()
{
    if(car2_x >= 0)
    {
        car2_x = car2_x - 10;
        console.log("When done arrow is pressed, x = " + car2_x + "y ="+car2_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function car2right()
{
    if(car2_x <= 700)
    {
        car2_x = car2_x + 10;
        console.log("When done arrow is pressed, x = " + car2_x + "y ="+car2_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}