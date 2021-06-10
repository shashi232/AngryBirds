class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");  
        this.smokeImage = loadImage("sprites/smoke.png");
        this.trajectory = [];
    }

    display(){
        super.display();
        
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position =  [this.body.position.x, this.body.position.y];// [100,200]=> [100,210]=>[120,230]
            this.trajectory.push(position); // [[100,200],[100,210],[210,230]...............] 
        }
         // how many element? => length of array => this.trajectory.length => 10 
            // 1st to 10th element => but index starts from 0
            // 0th to 9th element

        // shortcut => i = i+ 1 => i++
        for (var i=0; i < this.trajectory.length; i++) {
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        } 
      
    }
}