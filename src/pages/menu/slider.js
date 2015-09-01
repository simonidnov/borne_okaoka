var slider = function(wrapper, scroller, slides, current_screen, obj, callBacks){
    this.wrapper    = wrapper;
    this.scroller   = scroller;
    this.callBacks  = callBacks;
    this.slides     = slides;
    this.snapPoints = [];
    this.start_point= {x:0, y:0, time:0};
    this.end_point  = {x:0, y:0, time:0};
    this.containerDraggable = null;
    this._is_dragging = false;
    this.init_slides();
    this.init_draggable();
    this.current_screen = current_screen;
    this.replace_scroller();
}
slider.prototype.init_slides = function(){
    for(var i = 0; i < this.slides.length; i++)
    {
        this.snapPoints.push(-1024 * i);
    }
}
slider.prototype.init_draggable = function(){
    var slid = this;
    if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
        slid.scroller.on('touchstart', function(evt){
            slid._is_dragging = true;
            slid.start_point.x = evt.originalEvent.touches[0].pageX;
            slid.start_point.y = evt.originalEvent.touches[0].pageY;
            slid.start_point.pos = $(this).position();
            evt.preventDefault();
        });
        slid.scroller.on('touchend', function(evt){
            slid.callBacks.stop_drag();
            slid._is_dragging = false;
            slid.replace_scroller();
        });
        slid.scroller.on('touchmove', function(evt){
            if(slid._is_dragging){
                slid.end_point.x = evt.originalEvent.touches[0].pageX;
                slid.end_point.y = evt.originalEvent.touches[0].pageY;
                slid.callBacks.dragging();
                var distance = (slid.start_point.x - slid.end_point.x);
                if(Math.abs(distance) > 4){
                    slid.callBacks.start_drag();    
                }
                $(this).css({
                    left:slid.start_point.pos.left - (distance/2)
                });
            }
            evt.preventDefault();
        });
    }else{
        slid.scroller.on('mousedown', function(evt){
            slid._is_dragging = true;
            slid.start_point.x = evt.pageX;
            slid.start_point.y = evt.pageY;
            slid.start_point.pos = $(this).position();
        });
        slid.scroller.on('mouseup', function(evt){
            slid.callBacks.stop_drag();
            slid._is_dragging = false;
            slid.end_point.x = evt.pageX;
            slid.end_point.y = evt.pageY;
            slid.replace_scroller();
        });
        slid.scroller.on('mousemove', function(evt){
            slid.callBacks.dragging();
            if(slid._is_dragging){
                slid.end_point.x = evt.pageX;
                slid.end_point.y = evt.pageY;
                var distance = (slid.start_point.x - slid.end_point.x);
                if(Math.abs(distance) > 4){
                    slid.callBacks.start_drag();    
                }
                $(this).css({
                    left:slid.start_point.pos.left - (distance/2)
                });
            }
        });
    }
    $('.left_arrow').on('click', function(){
        //slid.current_slide--;
        //slid.replace_scroller();
    });
    $('.right_arrow').on('click', function(){
        //slid.current_slide++;
        //slid.replace_scroller();
    });
}
slider.prototype.replace_scroller = function(){
    var slid = this;
    var p = this.scroller.position();
    if(p.left > 0){
        TweenLite.to(this.scroller, .7, {left:0, ease:Power2.easeOut, onComplete:function(){
            slid.callBacks.end_drag();
        }});
        return false;
    }
    if(p.left < -(this.scroller.width() - this.wrapper.width())){
        TweenLite.to(this.scroller, .7, {left:-(this.scroller.width() - this.wrapper.width()), ease:Power2.easeOut, onComplete:function(){
            slid.callBacks.end_drag();
        }});
        return false;
    }
    var distance = this.start_point.x - this.end_point.x;
    if(distance < -this.wrapper.width() / 6){
        slid.current_screen--;
    }else if(distance > this.wrapper.width() / 6){
        slid.current_screen++;
    }
    if(slid.current_screen > slid.slides.length-1){
        self.current_screen = slid.slides.length-1;
    }else if(self.current_screen < 0){
        self.current_screen = 0;
    }
    TweenLite.to(slid.scroller, .7, {left:-(slid.slides.eq(0).width() * slid.current_screen), ease:Power2.easeOut, onComplete:function(){
        slid.callBacks.end_drag();
    }});
    if(slid.current_screen === 0){
        TweenMax.to($('.left_arrow'), .5, {"left":"-50px"});
    }else{
        TweenMax.to($('.left_arrow'), .5, {"left":"0px"});
    }
    if(slid.current_screen === slid.slides.length - 1){
        TweenMax.to($('.right_arrow'), .5, {"right":"-50px"});
    }else{
        TweenMax.to($('.right_arrow'), .5, {"right":"0px"});
    }
}
slider.prototype.enableDrag = function(){
    this.containerDraggable[0].enable();
}
slider.prototype.disableDrag = function(){
    this.containerDraggable[0].disable();
}
slider.prototype.destroy = function(){
    if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
        this.scroller.off('touchstart');
        this.scroller.off('touchmove');
        this.scroller.off('touchend');
    }else{
        this.scroller.off('mousedown');
        this.scroller.off('mousemove');
        this.scroller.off('mouseup');
    }
    this.wrapper    = null;
    this.scroller   = null;
    this.callBacks  = null;
    this.slides     = null;
    this.snapPoints = null;
    this.start_point= null;
    this.end_point  = null;
    this.containerDraggable = null;
    this._is_dragging = null;
    this.current_screen = null;
    
    delete this.wrapper;
    delete this.scroller;
    delete this.callBacks;
    delete this.slides;
    delete this.snapPoints;
    delete this.start_point;
    delete this.end_point;
    delete this.containerDraggable;
    delete this._is_dragging;
    delete this.current_screen;
    
}