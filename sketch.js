var canvas;
var music;
var whiteBox;
var surface1;
var surface2;
var surface3;
var surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);
    edges=createEdgeSprites()
    

    //create 4 different surfaces
    whiteBox=createSprite(random(20,750),200,20,20);
    whiteBox.shapeColor= "white";
    whiteBox.velocityX= -5;
    whiteBox.velocityY= 5;
    //whiteBox.shapeColor

    surface1 = createSprite(100,589,200,25);
    surface1.shapeColor= "blue";

    surface2 = createSprite(320,589,200,25);
    surface2.shapeColor= "red";
     
    surface3 = createSprite(540,589,200,25)
    surface3.shapeColor= "yellow";

    surface4 = createSprite(760,589,200,25)
    surface4.shapeColor= "green";
    //create box sprite and give velocity

}

function draw() {
    
    background(rgb(169,169,169));
    //create edgeSprite
    text(mouseX+","+mouseY,100,100);
    
     whiteBox.bounceOff(edges); 
     
     if(whiteBox.isTouching(surface1)){
      whiteBox.bounceOff(surface1)
      whiteBox.shapeColor= "blue"   
     }

     if(whiteBox.isTouching(surface2)){
        whiteBox.bounceOff(surface2)
        whiteBox.shapeColor= "red"  
     }

     if(whiteBox.isTouching(surface3)){
        whiteBox.bounceOff(surface3)
        whiteBox.shapeColor= "yellow"
        music.play()   
     } 
     
     if(whiteBox.isTouching(surface4)){
        whiteBox.bounceOff(surface4)
        whiteBox.shapeColor= "green"
        music.stop()
        whiteBox.velocityX=0
        whiteBox.velocityY=0   
     }    

    drawSprites()
    //add condition to check if box touching surface and make it box
}
