class Red {

    constructor (x,y,w,h) {

        var option={isStatic:true}

        this.box = Bodies.rectangle(x,y,w,h,option);
        this.width=w;
        this.height=h;

        World.add(myworld,this.box);

    }

    display () {

        var pos=this.box.position
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }

}