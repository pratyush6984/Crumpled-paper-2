class Dustbin2{
    constructor(x,y,width,height){
        var dustbin_options = {
            isStatic:true
        }
            this.body = Bodies.rectangle(x, y, width, height, dustbin_options);
            this.width = width;
            this.height = height;
           World.add(world, this.body)
    }
    display(){
       
    }
}