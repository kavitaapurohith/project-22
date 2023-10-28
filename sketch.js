//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Only for debugging code, is this needed, not otherwise
// const Render = Matter.Render;

var engine,world;
var ground, ball;
var ball1, ball2, ball3;
var box1, box2;

function setup(){
    var canvas = createCanvas(800,400);
   
    engine = Engine.create();
    world = engine.world;

    //Code for brown ground
    var ground_options ={
        isStatic: true,
      
    }
    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);
    console.log(ground);


  
 
    // Code for ball
 ball1= new Ball(200,50,20,"red",0.5);
 ball2= new Ball(250,60,10,"blue",1);
    // code for box
    box1 = new Ball(650,250,70,90,"purple");
    box1 = new Ball(65,50,45,10,"yellow");
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    rectMode(CENTER);
     fill("brown")
    rect(ground.position.x,ground.position.y,800,20);
    fill("red")
   
   

    ball1.display();
    ball2.display();
    box1.display();
    box2.display();
}
