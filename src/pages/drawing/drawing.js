var self = null;
function drawing(){
    this.base = "pages/drawing/";
    this.exportRoot = null;
    this.stage = null;
    this._removed = [];
    this.currentShape = [];
    this.color = "#000000";
    this.strokerstyle = {
        "size":10,
        "stylingW":"round",
        "stylingH":"round"
    }
    this.isMouseDown;
    this.oldMidX;
    this.oldMidY;
    this.oldX;
    this.oldY;
    this.prevent_color = null;
    this.touchPos = null;
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
        TweenMax.to($('.app_content'), .5, {css:{'backgroundColor':self.color}});
        TweenMax.to($('#backbutton'), .5, {css:{'backgroundColor':self.color}});
    });
    $('.color_picker').css('height', Math.ceil(window.innerHeight/_.keys(colors).length)+'px');
    $.each($('.color_picker'), function(index, color){
        TweenMax.to($(this), .5, {scaleX:1, scaleY:1, delay:index/100});
    });
    
    /* -------- set drawing canvas --------- */
    $('#drawing_page').css('width', (window.innerWidth - 200)+"px");
    $('#drawing_canvas').css({"width":$('#drawing_page').width(), "height":$('#drawing_page').height()});
    $('#drawing_canvas').attr({"width":$('#drawing_page').width(), "height":$('#drawing_page').height()});
    
    TweenMax.set($('#drawing_page'), {scaleX:0, transformOrigin:"0% 0%"});
    
    TweenMax.to($('#drawing_page'), .7, {scaleX:1, onComplete:function(){
        // ajouter les outils à droite
        /* -------- set tools last --------- */
        for(var i=1; i<6; i++){
            //$('#brush_'+i).css('top', (50*(i-1))+'px');
            $('#brush_'+i).load(self.base+'images/brushes/brush_'+i+'.svg', function(){
            });
        }
        $('.brush svg').css({'width':'100%', 'height':'100%'});
    }, ease:Power4.easeInOut, delay:.5});
    /* ------- set brush events ------- */
    $('.brush').on('click', function(){
        if(self.prevent_color && self.color === 'rgb(255,255,255)'){
            self.color = self.prevent_color;
            self.prevent_color = null;
        }
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        self.strokerstyle.size = $(this).attr('data-size');
        self.strokerstyle.stylingW = $(this).attr('data-stylingw');
        self.strokerstyle.stylingH = $(this).attr('data-stylingh');
    });
    
    /* -------- set other tools -------- */
    $('#gum').load(self.base+'images/brushes/gomme.svg');
    $('#cancel').load(self.base+'images/brushes/cancel.svg');
    $('#redraw').load(self.base+'images/brushes/redraw.svg');
    $('#clear').load(self.base+'images/brushes/clear.svg');
    var ttop = ($('.brush').length * 50);
    //$('#gum').css({"top":ttop+"px", "left":"100px"});
    //$('#cancel').css({"top":(ttop + 50)+"px", "left":"100px"});
    //$('#redraw').css({"top":(ttop + (50*2))+"px", "left":"100px"});
    //$('#clear').css({"top":(ttop + (50*3))+"px", "left":"100px"});
    $.each($('.tool'), function(index, t){
        
    });
    $('#gum').on('click', self.get_gum);
    $('#clear').on('click', self.clear_drawing);
    $('#cancel').on('click', self.remove_last);
    $('#redraw').on('click', self.redraw_last);
    
    var tool_height = (window.innerHeight - $('#backbutton').height()) / $('.tool').length;
    $('.tool').css('height', tool_height+'px');
    $.each($('.tool'), function(i, tool){
        $(this).css({'top': tool_height*i+"px", 'left':"100px"}); 
        TweenMax.to($(this), .5, {css:{"left":"0px"}, delay:(.1*i)+.8});
    });
    
    this.init_draw_tool();
}
drawing.prototype.get_gum = function(){
    self.prevent_color = self.color;
    self.color = 'rgb(255,255,255)';
    $('.selected').removeClass('selected');
    $('#gum').addClass('selected');
    self.strokerstyle.size = $(this).attr('data-size');
    self.strokerstyle.stylingW = $(this).attr('data-stylingw');
    self.strokerstyle.stylingH = $(this).attr('data-stylingh');
}
drawing.prototype.init_draw_tool = function(){
    self.stage = new createjs.Stage("drawing_canvas");
    self.stage.autoClear = true;
    //self.stage.onMouseDown = this.handleMouseDown;
    //self.stage.onMouseUp = this.handleMouseUp;
	//createjs.Touch.enable(self.stage);
    self.stage.update();
    createjs.Ticker.addEventListener("tick", self.tick);
    
    if ("ontouchstart" in window) {
        createjs.Touch.enable(self.stage);
        self.stage.on("stagemousedown", self.handleMouseDown);
        self.stage.on("stagemousemove", self.handleMouseMove);
        self.stage.on("stagemouseup", self.handleMouseUp);
    } else {
        $('#drawing_canvas').on('mousedown', self.handleMouseDown);
        $('#drawing_canvas').on('mouseup', self.handleMouseUp);
    }
    self.set_active_tools();
	//createjs.Ticker.addListener(this);   
}
drawing.prototype.handleMouseDown = function(e) {
    self.isMouseDown = true;
    var s = new createjs.Shape();
    if ("ontouchstart" in window) {
        self.oldX = e.stageX;
        self.oldY = e.stageY;
        self.oldMidX = e.stageX;
        self.oldMidY = e.stageY;
        self.touchPos = {x:e.stageX, y:e.stageY};
    }else{
        self.oldX = self.stage.mouseX;
        self.oldY = self.stage.mouseY;
        self.oldMidX = self.stage.mouseX;
        self.oldMidY = self.stage.mouseY;
    }
   
    var g = s.graphics;
    //var thickness = Math.random() * 30 + 10 | 0;
    g.setStrokeStyle(10, 'round', 'round');
    
    var color = createjs.Graphics.getRGB(0,0,0);
    g.beginStroke(self.color);
    self.stage.addChild(s);
    self.currentShape[self.currentShape.length] = s;
}
drawing.prototype.handleMouseMove = function(evt){
    self.touchPos = {x:evt.stageX, y:evt.stageY};
}
drawing.prototype.handleMouseUp = function() {
    navigation._page_script.isMouseDown = false;
}
drawing.prototype.tick = function() {
    if(self == null){
        return false;
    }
    if (self.isMouseDown) {
        if(self.touchPos !== null){
            var pt = new createjs.Point(self.touchPos.x, self.touchPos.y);
        }else{
            var pt = new createjs.Point(self.stage.mouseX, self.stage.mouseY);
        }
        var midPoint = new createjs.Point(self.oldX + pt.x>>1, self.oldY+pt.y>>1);
        if(typeof self.currentShape[self.currentShape.length-1] != "undefined"){
            self.currentShape[self.currentShape.length-1].graphics.setStrokeStyle(self.strokerstyle.size, self.strokerstyle.stylingW, self.strokerstyle.stylingH);
            self.currentShape[self.currentShape.length-1].graphics.moveTo(midPoint.x, midPoint.y);
            self.currentShape[self.currentShape.length-1].graphics.curveTo(self.oldX, self.oldY, self.oldMidX, self.oldMidY);
        }
        self.oldX = pt.x;
        self.oldY = pt.y;

        self.oldMidX = midPoint.x;
        self.oldMidY = midPoint.y;
        self.stage.update();
        
        self._removed = [];
    }
    self.set_active_tools();
}
drawing.prototype.set_active_tools = function(){
    var toolHeight = $('.brush').height();
    var posTop = toolHeight + (toolHeight * $('.brush').length);
    
    if(self.currentShape.length > 0){
        $('#cancel svg').attr('fill', '#000000');
    }else{
        $('#cancel svg').attr('fill', '#CCCCCC');
    }
    if(self._removed.length > 0){
        $('#redraw svg').attr('fill', '#000000');
    }else{
        $('#redraw svg').attr('fill', '#CCCCCC');
    }
    //TweenMax.to($('#clear'), .5, {css:{top:posTop+'px'}});
    //$('#cancel').on('click', self.remove_last);
    //$('#redraw').on('click', self.redraw_last);
}
drawing.prototype.redraw_last = function(){
    if(self._removed.length > 0){
        self.currentShape.push(self._removed[self._removed.length-1]);
        self.stage.addChild(self._removed[self._removed.length-1]);
        self._removed.pop();
    }
    self.stage.update();
}
drawing.prototype.remove_last = function(){
    self._removed.push(_.clone(self.currentShape[self.currentShape.length-1]));
    self.stage.removeChild(self.currentShape[self.currentShape.length-1]);
    self.currentShape.pop();
    self.stage.update();
}
drawing.prototype.clear_drawing = function(){
    utilities.show_popup({color:navigation._current_interface_color, motion:"paper_ball"}, function(e){
        if(e == 1){
            self.stage.removeAllChildren();
            self.stage.update();
        }
    });
}
drawing.prototype.pause = function(){
}
drawing.prototype.play = function(){
}
drawing.prototype.destroy = function(callBack){
    createjs.Ticker.removeEventListener('tick', self.tick);
    //createjs.Ticker.removeAllEventListeners();
    self.base = null;
    self.exportRoot = null;
    self.stage = null;
    self.isMouseDown = null;
    self.currentShape = [];
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
    delete self;
    $.each($('.color_picker'), function(index, color){
        TweenMax.to($(this), .5, {scaleX:0, scaleY:0, delay:index/100});
    });
    $.each($('.tool'), function(index, b){
        TweenMax.to($(this), .4, {css:{left:"100px"}, delay:.5+(.05*index)});
    });
    
    TweenMax.set($('#drawing_page'), {transformOrigin:"50% 50%"});
    TweenMax.to($('#drawing_page'), .7, {scaleX:0, scaleY:0, onComplete:function(){
        callBack();
    }, ease:Power4.easeIn, delay:.7});
}
