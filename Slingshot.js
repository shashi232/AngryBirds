class Slingshot{
    constructor(body1, point1){
        var options = {
           bodyA: body1,
           pointB: point1,
           length: 10,
           stiffness: 0.04
        }
        this.sling = Constraint.create(options);
        this.pointB = point1;
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;   
    }
    display(){
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
       }
       
    }
}