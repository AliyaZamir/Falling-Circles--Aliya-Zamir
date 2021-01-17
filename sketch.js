const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


//Declare global variables
var pc, edges;
var myEngine, myWorld;
var candyArray = [];

function preload(){

}

function setup(){
 //createCanvas(1500,800);
 createCanvas(displayWidth, displayHeight-110);
 myEngine = Engine.create();
 myWorld = myEngine.world;
 
 pc = createSprite(displayWidth/2,displayHeight-250,20,20);
 edges = createEdgeSprites();
 console.log(edges);
 

}

function draw(){
    background('white');
    
    Engine.update(myEngine);

    //if (){

   // }

 /*  if (pc.isTouching(edges[2])){
    pc.velocityY = 0;
   }

   if (pc.isTouching(edges[0]) || pc.isTouching(edges[1])){
       
    pc.velocityX = 0;
   }*/

  
  if(frameCount % 60 === 0){
    c1 = dropCandies();
    candyArray.push(c1);
    for(var i=0; i < candyArray.length; i++){
        console.log(candyArray[i]);
        candyArray[i].display(); 
    }
    
    
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
var candy = new Candies(30, 30, 30);
console.log(candy);
return candy;

}