class Pig extends BaseClass{
      constructor(x,y){
         super(x,y,50,50);
         this.image = loadImage("sprites/enemy.png");
         this.visibilty = 255;
      }
  
      display(){
            if(this.body.speed < 2.5){
                  super.display();
            }
            else{
                  World.remove(world, this.body);
                 
                  push();
                  var pos = this.body.position
                  tint(255, this.visibilty);  //255 - 255 (%) = 0%
                  image(this.image, pos.x,pos.y, 50,50)
                  this.visibilty = this.visibilty - 5; // 255-0=255/255 = 100%
                  pop();
            }
            
      }

}