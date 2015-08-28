var slider = function(wrapper, scroller, slides){
    this.wrapper    = wrapper;
    this.scroller   = scroller;
    this.slides     = slides;
    this.snapPoints = [];
    this.start_point= {x:0, y:0, time:0};
    this.end_point  = {x:0, y:0, time:0};
    this.containerDraggable = null;
    
    this.init_slides();
    this.init_draggable();
}
slider.prototype.init_slides = function(){
    for(var i = 0; i < this.slides.length; i++)
    {
        this.snapPoints.push(-1024 * i);
    }
}
slider.prototype.init_draggable = function(){
    var slid = this;
    this.containerDraggable = Draggable.create(this.scroller,
    {
        //bounds:{top:0, left:0, width:window.innerWidth, height:window.innerHeight},
        type:'x',
        throwProps:true,
        maxDuration:1.25,
        minDuration:.75,
        edgeResistance:.2,
        onDragStart:function(evt)
        {
            slid.start_point.x      = evt.pageX;
            slid.start_point.y      = evt.pageY;
            slid.start_point.time   = new Date().getTime();
            //slid.replace_scroller();
        },
        onDragEnd:function(evt)
        {
            slid.end_point.x    = evt.pageX;
            slid.end_point.y    = evt.pageY;
            slid.end_point.time = new Date().getTime();
            slid.brake();
        },
        onThrowComplete:function()
        {
            console.log('complete throw');
        },
        snap:
        {
            left:
            function(endValue)
            {
                console.log(endValue);
            }
        }//snap variable end
    });//draggable end
    this.enableDrag();
}
slider.prototype.brake = function(){
    var slid = this;
    var infos = {
        distance : Math.abs(this.start_point.x - this.end_point.x),
        duree    : this.end_point.time - this.start_point.time,
        vitesse  : Math.abs(this.start_point.x - this.end_point.x) / (this.end_point.time - this.start_point.time),
        deceleration : .1,
        direction : (this.start_point.x - this.end_point.x > 0)? true : false
    };
    TweenMax.to(infos, 5, {
        onUpdate:function(){
            infos.vitesse-=infos.deceleration;
            if(infos.vitesse <= 0){
                //TweenLite.killAll();
                TweenMax.killAll();
                slid.replace_scroller();
            }else{
                if(infos.direction){
                    TweenLite.to(slid.scroller, .1, {x:slid.scroller.position().left - (infos.vitesse * 10), ease:Power2.easeOut});
                }else{
                    TweenLite.to(slid.scroller, .1, {x:slid.scroller.position().left + (infos.vitesse * 10), ease:Power2.easeOut});
                }
            }
        }
    });
    console.log(infos.vitesse);
    //this.replace_scroller();
}
slider.prototype.replace_scroller = function(){
    var p = this.scroller.position();
    if(p.left > 0){
        TweenLite.to(this.scroller, .7, {x:0, ease:Power2.easeOut});
        return false;
    }
    if(p.left < -(this.scroller.width() - this.wrapper.width())){
        TweenLite.to(this.scroller, .7, {x:-(this.scroller.width() - this.wrapper.width()), ease:Power2.easeOut});
        return false;
    }
    var distance = this.start_point.x - this.end_point.x;
    if(distance < -this.wrapper.width() / 4){
        
    }else if(distance > this.wrapper.width() / 4){
        
    }
}
slider.prototype.enableDrag = function(){
    this.containerDraggable[0].enable();
}
slider.prototype.disableDrag = function(){
    this.containerDraggable[0].disable();
}