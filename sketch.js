
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var orange;
function setup() {
	createCanvas(800, 700);

 orange="orange";
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,500,800,30);
	
  paper=new Paper(200,470,50);
	
   dustbin1=new Dustbin(500,450,10,100)
  dustbin2=new Dustbin(700,450,10,100)
  dustbin3=new Dustbin(600,480,200,10)
	Engine.run(engine);
  
}


function draw() {
    background(orange);

  paper.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
  dustbin3.display();
  keyPressed();
}

function keyPressed()
{
	    if(keyCode===UP_ARROW)
        {
          Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
        }
      
}
