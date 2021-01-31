var PLAY=1;
var END=0;
var gameState=PLAY;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var ground;
var player;
var score=0;
var obstaclesGroup;
var obstacle,obstacleimg;

function preload()
{
//obstacleimg=loadImage("image/covid.jpg")	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

ground=createSprite(600,598,1200,10);
ground.shapeColor="red";
player=createSprite(30,560,30,60);
player.shapeColor="blue";

	//Engine.run(engine);
  obstaclesGroup=createGroup()
}


function draw() {
 // rectMode(CENTER);
  background("green");
  textSize(25);
  fill("blue");
  text("Score: "+score,1000,50);
  score=Math.round(frameCount/1);
  //Engine.update(engine);
//ground.display();
 //player.display();

 if(gameState===PLAY){

 spawnObstacles();
 if(keyDown("space")){
 player.velocityY=-5;
 }
 player.velocityY=player.velocityY+0.5;
 if(obstaclesGroup.isTouching(player)) {
  gameState=END;
 }
player.collide(ground);
 }
if(gameState===END){
	console.log("game ended");
	obstaclesGroup.setVelocityXEach(0);
	player.velocityY=0;
	score=0;
}
 drawSprites();

}

function spawnObstacles(){
	if(frameCount%130===0){
	var obstacle=createSprite(1200,580,20,20);
	//obstacle.addImage(obstacleimg);
	obstacle.shapeColor="yellow";
	obstacle.velocityX=-4;
	obstaclesGroup.add(obstacle);
 }
}





