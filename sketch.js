const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


//Declare global variables
var pc, edges;
var myEngine, myWorld;
var candyArray = [];
var sky;
var destroy;
var score = 0;
var group;
var candy1;

function preload(){

sky = loadImage("images/blueSky.png");
//load image for PC

//candy1 = loadImage("images/candyClipart.jpg");

}

function setup(){
 //createCanvas(1500,800);
 createCanvas(displayWidth, displayHeight-110);
 myEngine = Engine.create();
 myWorld = myEngine.world;
 
 pc = createSprite(displayWidth/2,displayHeight-250,20,20);
 edges = createEdgeSprites();
 //console.log(edges);

 //create a new group
 group = new Group();
 

}

function draw(){
    background(sky);
    
    Engine.update(myEngine);
    stroke ("black");
    textSize(40);
    text('Score: ' + score , displayWidth - 275, 50);

    //Calculate score
    if (pc.isTouching(group)){
        score += 5;

    }


   if (pc.isTouching(edges[2])){
    pc.velocityY = 0;
   }

   if (pc.isTouching(edges[0]) || pc.isTouching(edges[1])){
       
    pc.velocityX = 0;
   }


  if(frameCount % 60 === 0){
    c1 = dropCandies();
    candyArray.push(c1);
    
    
      
    
  }
  
  for(var i=0; i < candyArray.length; i++){
   // console.log("In for.." + i + "--> " + candyArray[i]);
    candyArray[i].display(); 
  }
  
  
drawSprites();
}


function keyPressed(){
    //ASCII Code for Up arrow is 38
    if(keyCode === 38){
        //pc.y -= 10;
        pc.velocityY = -5;
    }

    //ASCII Code for Up arrow is 38
    if(keyCode === 39){
        //pc.x -= 10;
        pc.velocityX = 5;
    }

    if(keyCode === 37){
        //pc.x -= 10;
        pc.velocityX = -5;
    }
}

function dropCandies(){

//var candy = new Candies(Math.round(random(20, displayWidth - 20), 0,30)); 
//console.log(random(30, displayWidth - 30));
var candy = new Candies(random(30, displayWidth - 30), 30, 30);
//console.log(candy);
return candy;

}
