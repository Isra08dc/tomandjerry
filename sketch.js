
  
var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    backg = loadImage("Imagenes/garden.png");
    tomImg1= loadAnimation("Imagenes/tomOne.png");
    tomImg2=loadAnimation("Imagenes/tomTwo.png","Imagenes/tomThree.png");
    TomImg3= loadAnimation("Imagenes/tomFour.png");
    jerryImg1=loadAnimation("Imagenes/jerryOne.png");
    jerryImg2= loadAnimation("Imagenes/jerryTwo.png","Imagenes/jerryThree.png");
    jerryImg3=loadAnimation("Imagenes/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0
        tom.addAnimation("ÚltimaImagenGato"),tomImg4;
        tom.changeAnimation("ÚltimaImagenGato");
        tom.x=300;
        tom.scale=0.2;    
        
        jerry.addAnimation("ÚltimaImagenRatón"),jerryImg4;
        jerry.changeAnimation("ÚltimaImagenRatón"), jerryImg1;
        jerry.x=300;
        jerry.scale=0.2;  
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}