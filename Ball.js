class Ball{



    constructor(x,y,r,color,res){
        var ball_options ={
            isStatic: false,
            restitution: res
        }
    
        this.body = Bodies.circle(x,y,r, ball_options);
        World.add(world,this.body);
        
        this.radius=r;
        this.color=color;

    }

   display(){

    fill(this.color)
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius);


   }




}