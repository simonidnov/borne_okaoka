var self = null;
function drawing(){
    this.base = "pages/drawing/";
    this.exportRoot = null;
    this.stage = null;
    
    this.color = "#000000";
    this.strokerstyle = {
        "size":10,
        "stylingW":"round",
        "stylingH":"round"
    }
    this.isMouseDown;
    this.currentShape = null;
    this.oldMidX;
    this.oldMidY;
    this.oldX;
    this.oldY;
    
    self = this;
    this.init();
}
drawing.prototype.init = function(){
    
}
drawing.prototype.create_interface = function(){
    var tmp = _.template($('#drawing_interface').html());
    $('.app_content').append(tmp({}));
    
    /* -------- SET COLORS FIRST -------- */
    TweenMax.set($('.color_picker'), {scaleX:0, scaleY:0});
    $('.color_picker').on('click', function(){
        self.color = $(this).attr('data-color');
        $.each($('.brush'), function(index, b){
            $(this).find('#brush').attr('fill', self.color);
        });
    });
    $('.color_picker').css('height', ((window.innerHeight - 100)/_.keys(colors).length)+'px');
    $.each($('.color_picker'), function(index, color){
        TweenMax.to($(this), .5, {scaleX:1, scaleY:1, delay:index/100});
    });
    
    /* -------- set drawing canvas --------- */
    $('#drawing_page').css('width', (window.innerWidth - 200)+"px");
    $('#drawing_canvas').css({"width":$('#drawing_page').width(), "height":$('#drawing_page').height()});
    $('#drawing_canvas').attr({"width":$('#drawing_page').width(), "height":$('#drawing_page').height()});
    
    TweenMax.set($('#drawing_page'), {scaleX:0, transformOrigin:"0% 0%"});
    setTimeout(function(){
        TweenMax.to($('#drawing_page'), .7, {scaleX:1, onComplete:function(){
            // ajouter les outils à droite
            /* -------- set tools last --------- */
            for(var i=1; i<6; i++){
                $('#brush_'+i).css('top', (75*(i-1))+'px');
                $('#brush_'+i).load(self.base+'images/brushes/brush_'+i+'.svg', function(){
                });
                TweenMax.to($('#brush_'+i), .5, {
                    css:{left:"0px"},
                    ease:Power4.easeOut,
                    delay:(.1*i)
                });
            }
            $('.brush svg').css({'width':'100%', 'height':'100%'});
        }, ease:Power4.easeInOut});
    },1000);
    
    
    /* ------- set brush events ------- */
    $('.brush').on('click', function(){
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        self.strokerstyle.size = $(this).attr('data-size');
        self.strokerstyle.stylingW = $(this).attr('data-stylingw');
        self.strokerstyle.stylingH = $(this).attr('data-stylingh');
    });
    this.init_draw_tool();
}
drawing.prototype.init_draw_tool = function(){
    self.stage = new createjs.Stage("drawing_canvas");
    self.stage.autoClear = true;
    //self.stage.onMouseDown = this.handleMouseDown;
    //self.stage.onMouseUp = this.handleMouseUp;
	createjs.Touch.enable(self.stage);
    self.stage.update();
    createjs.Ticker.addEventListener("tick", self.tick);
    
    if ("ontouchstart" in window) {
        $('#drawing_canvas').on('touchstart', self.handleMouseDown);
        $('#drawing_canvas').on('touchend', self.handleMouseUp);
    } else {
        $('#drawing_canvas').on('mousedown', self.handleMouseDown);
        $('#drawing_canvas').on('mouseup', self.handleMouseUp);
    }
	//createjs.Ticker.addListener(this);   
}
drawing.prototype.handleMouseDown = function(e) {
    self.isMouseDown = true;
    var s = new createjs.Shape();
    self.oldX = self.stage.mouseX;
    self.oldY = self.stage.mouseY;
    self.oldMidX = self.stage.mouseX;
    self.oldMidY = self.stage.mouseY;
    var g = s.graphics;
    //var thickness = Math.random() * 30 + 10 | 0;
    g.setStrokeStyle(10, 'round', 'round');
    
    var color = createjs.Graphics.getRGB(0,0,0);
    console.log(color);
    g.beginStroke(self.color);
    self.stage.addChild(s);
    self.currentShape = s;
}
drawing.prototype.handleMouseUp = function() {
    navigation._page_script.isMouseDown = false;
}
drawing.prototype.tick = function() {
    if(self == null){
        return false;
    }
    if (self.isMouseDown) {
        var pt = new createjs.Point(self.stage.mouseX, self.stage.mouseY);
        var midPoint = new createjs.Point(self.oldX + pt.x>>1, self.oldY+pt.y>>1);
        if(typeof self.currentShape != "undefined"){
            self.currentShape.graphics.setStrokeStyle(self.strokerstyle.size, self.strokerstyle.stylingW, self.strokerstyle.stylingH);
            self.currentShape.graphics.moveTo(midPoint.x, midPoint.y);
            self.currentShape.graphics.curveTo(self.oldX, self.oldY, self.oldMidX, self.oldMidY);
        }
        self.oldX = pt.x;
        self.oldY = pt.y;

        self.oldMidX = midPoint.x;
        self.oldMidY = midPoint.y;
        
        self.stage.update();
    }
}
drawing.prototype.destroy = function(callBack){
    self.base = null;
    self.exportRoot = null;
    self.stage = null;
    self.isMouseDown = null;
    self.currentShape = null;
    self.oldMidX = null;
    self.oldMidY = null;
    self.oldX = null;
    self.oldY = null;
    
    delete self.base;
    delete self.exportRoot;
    delete self.stage;
    delete self.isMouseDown;
    delete self.currentShape;
    delete self.oldMidX;
    delete self.oldMidY;
    delete self.oldX;
    delete self.oldY;
    $.each($('.color_picker'), function(index, color){
        TweenMax.to($(this), .5, {scaleX:0, scaleY:0, delay:index/100});
    });
    $.each($('.brush'), function(index, b){
        TweenMax.to($(this), .5, {css:{left:"100px"}, delay:.5+(index/100)});
    });
    
    TweenMax.set($('#drawing_page'), {transformOrigin:"50% 50%"});
    TweenMax.to($('#drawing_page'), .7, {scaleX:0, scaleY:0, onComplete:function(){
        callBack();
    }, ease:Power4.easeIn, delay:.7});
}
