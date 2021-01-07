class Candies{
    constructor(x,y,d){
        //display circle(30, 30, 20);
        this.x = x;
        this.y = y;
        this.diameter = d;
        this.candy=Matter.Bodies.circle(x,y,d, {isStatic: false});
        World.add(myWorld,this.candy);
    }

    display(){
        fill("green");
        var pos = this.candy.position;
        circle(pos.x,pos.y,this.diameter);
        //console.log(this.candy);
    }
}