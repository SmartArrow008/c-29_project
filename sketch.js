const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;





function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    
    
    box1 = new Grey(200,200,300,250);
    box1.shapeColor = "grey";
    
    box2 = new Grey(50,175,100,300);
    box2.shapeColor = "grey";
    box3 = new Grey(350,175,100,300);
    box3.shapeColor = "grey";
    //box4 = new Brown(200,250,100,150);
    //box4.shapeColor = "brown";
    
    //box5 = new Brown(200,75,50,50);
    //box5.shapeColor = "brown";
    //box6 = new Brown(130,75,50,50);
    //box6.shapeColor = "brown";
    //box7 = new Brown(270,75,50,50);
    //box7.shapeColor = "brown";
}

function draw(){
   
    Engine.update(engine);
    
    box1.display();
    box2.display();
    

    box3.display();
    //box4.display();
    //box5.display();
    //box6.display();
    //box7.display();
}

