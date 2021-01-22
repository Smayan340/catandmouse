var cat, mouse;
var catI, mouseI
var backgroundI;
function preload() {
    //load the images here
    backgroundI = loadImage(garden.png)
    catI.loadImage(cat3.png)
    mouseI.loadImage(mouse2.png)

}

function setup(){
    createCanvas(1000,800);
    mouse = createSprite(600,400,50,50);
    cat = createSprite(100,400,100,100);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    backgroundI.addImage(background)
    catI.addImage(cat)
    mouseI.addImage(mouse)
    if(keyPressed(LEFT_ARROW)){
        cat.velocityX = -10;
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
