class Box{
    constructor(){
        this.body = Bodies.rectangle(200,200,50,50);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x,this.body.position.y,50,50);
    }
}