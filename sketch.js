var cat, mouse;
var catI, mouseI
var backgroundI;
function preload() {
    //load the images here
    backgroundI= loadImage("garden.png");
    catI = loadAnimation("cat1.png");
    catI2 = loadAnimation("cat2.png", "cat3.png");
    catI3 = loadAnimation("cat4.png");
    mouseI = loadAnimation("mouse1.png");
    mouseI2 = loadAnimation("mouse2.png", "mouse3.png");
    mouseI3 = loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    mouse = createSprite(100,600);
    cat = createSprite(800,600,);
    cat.addAnimation("catsleeping",catI)
    mouse.addAnimation("mousestanding",mouseI)
    mouse.scale = 0.15
    
    cat.scale = 0.2
    //create tom and jerry sprites here

}

function draw() {

    background(backgroundI);
    
    if((cat.x-mouse.x)<(cat.width-mouse.width)/2){
       cat.velocityX=0
       cat.addAnimation("catlastimage",catI3)
       cat.x=300
       cat.scale = 0.2;
       cat.changeAnimation("catlastimage");
       mouse.addAnimation("mouselastimage",mouseI3)
       mouse.scale = 0.15
       mouse.changeAnimation("mouselastimage")
    }


    //Write condition here to evalute if tom and jerry collide
     keyPressed();
    drawSprites();
}

function keyPressed() {
    if(keyCode===LEFT_ARROW){
        cat.velocityX =-5;
        cat.addAnimation("catrunning",catI2)
        cat.scale =0.2
        cat.changeAnimation("catrunning")
        mouse.addAnimation("mouseteasing",mouseI2)
        mouse.scale = 0.15
        mouse.changeAnimation("mouseteasing")
        mouse.framedelay = 25 
    }
}


