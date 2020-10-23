class Paper{

    constructor(x,y,radius){
       
        var options = {
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2
        }
       
        this.body = Bodies.circle(x,y,radius,options)
        this.width = width;
        this.height = height;
        this.radius = radius;
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        fill("pink");
        circle(pos.x,pos.y+10,this.radius)
    }
    
}