const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var newLog;

var bgImg;
var sling;
var platform;

function preload(){
   bgImg = loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    pig2 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2);

    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

    bird = new Bird(200,50);

    ground = new Ground(600,height,1200,20);

    sling = new Slingshot(bird.body,{x:200,y:50});

    platform = new Ground(150,305,300,170);
    
}
function draw(){
    background(bgImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    ground.display();
   
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    log3.display();
    log4.display();

    bird.display();
   
    sling.display();

    platform.display();

    
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    sling.fly();
}











