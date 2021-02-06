var tom, jerry;
var catI, catI2, catI3;
var mouseI, mouseI2, mouseI3;
var backgroundI, canvas;

function preload() {
    //images and animation added here
    backgroundI = loadImage("images/garden.png");
    catI = loadAnimation("images/cat1.png");
    catI2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catI3 = loadAnimation("images/cat4.png");
    mouseI = loadAnimation("images/mouse1.png");
    mouseI2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseI3 = loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(800,600);

    //create tom and jerry sprites here
    tom = createSprite(750, 500);
    tom.addAnimation("tomSleeping", catI);
    tom.scale = 0.2;

    jerry = createSprite(200, 500);
    jerry.addAnimation("jerryStanding", mouseI);
    jerry.scale = 0.15;

}

function draw() {

    background(backgroundI);
    
   
    //if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", catI3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", mouseI3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", catI2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", mouseI2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}
