class Paper
{
    constructor(x,y,radius)
    {
       var option={
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,option);
        this.x1=x;
        this.y1=y;
        this.radius=radius;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
        
    }
    display()
    {
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image, this.x1, this.y1, this.radius, this.radius);
       
    }
}