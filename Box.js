class Box{

    constructor(x,y,w,h,color){

        var Box_options ={
            isStatic: true,
        }
    
        this.box = Bodies.rectangle(250,320,100,120,Box_options);
        World.add(world,this.Box);
    

        this.w=boxWidth;
        this.h=boxHeight;
        this.color=color;

    }

    display(){
        rect(this.Box.position.x,this.Box.position.y,100,120);
        rectMode(CENTER);
        fill("this.color")
        

    }
}