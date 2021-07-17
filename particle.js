class Particle{
	constructor(x,y,r)
	{
		var options={
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		//this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        this.color = color(random(0,255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(this.color)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			ellipse(0,0,this.r,this.r)
			pop()
			
	}
    
}
