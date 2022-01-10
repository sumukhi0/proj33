class Snow{
    constructor(x,y){
      this.body = b.circle(x,y,20)
      w.add(wo,this.body)
      this.snowImage = loadImage("snow4.webp");
    }
    display(){
      imageMode(RADIUS)
      image(this.snowImage,this.body.position.x,this.body.position.y,20,20)
    }
}