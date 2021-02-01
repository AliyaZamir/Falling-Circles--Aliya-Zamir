class Candies{
    constructor(x,y,d){
        //display circle(30, 30, 20);
        this.x = x;
        this.y = y;
        this.diameter = d;
        this.candy=Matter.Bodies.circle(x,y,d, {isStatic: false});
        World.add(myWorld,this.candy);
        this.image = loadImage("images/redCandy.png");
    }

    display(){
       // fill("green");
        var pos = this.candy.position;
        candy1 = createSprite(pos.x,pos.y, 10, 10);
        group.add(candy1);
        image (this.image, pos.x,pos.y);
        //circle(pos.x,pos.y,this.diameter);
        //console.log(this.candy);
    }
}
