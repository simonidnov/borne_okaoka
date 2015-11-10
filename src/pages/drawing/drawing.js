var _okg = null;
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
    _okg = this;
    this.init();
}
drawing.prototype.init = function(){
    
}
drawing.prototype.replay_game = function(){
    window.location.href = window.location.href+"/intro/false";   
    gui.Window.get().reload(3);
}
drawing.prototype.create_interface = function(){
    var tmp = _.template($('#drawing_interface').html());
    $('.app_content').append(tmp({}));
    
    /* -------- SET COLORS FIRST -------- */
    TweenMax.set($('.color_picker'), {scaleX:0, scaleY:0});
    $('.color_picker').on('click', function(){
        $('.color_picker').removeClass('color_selected');
        $(this).addClass('color_selected');
        _okg.play_hit();
        _okg.color = $(this).attr('data-color');
        $.each($('.brush'), function(index, b){
            $(this).find('#brush').attr('fill', _okg.color);
        });
        TweenMax.to($('.app_content'), .5, {css:{'backgroundColor':_okg.color}});
        TweenMax.to($('#backbutton'), .5, {css:{'backgroundColor':_okg.color}});
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
            $('#brush_'+i).load(_okg.base+'images/brushes/brush_'+i+'.svg', function(){
            });
        }
        $('.brush svg').css({'width':'100%', 'height':'100%'});
    }, ease:Power4.easeInOut, delay:.5});
    /* ------- set brush events ------- */
    $('.brush').on('click', function(){
        _okg.play_hit();
        if(_okg.prevent_color && _okg.color === 'rgb(255,255,255)'){
            _okg.color = _okg.prevent_color;
            _okg.prevent_color = null;
        }
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        _okg.strokerstyle.size = $(this).attr('data-size');
        _okg.strokerstyle.stylingW = $(this).attr('data-stylingw');
        _okg.strokerstyle.stylingH = $(this).attr('data-stylingh');
    });
    
    /* -------- set other tools -------- */
    $('#gum').load(_okg.base+'images/brushes/gomme.svg');
    $('#cancel').load(_okg.base+'images/brushes/cancel.svg');
    $('#redraw').load(_okg.base+'images/brushes/redraw.svg');
    $('#clear').load(_okg.base+'images/brushes/clear.svg');
    var ttop = ($('.brush').length * 50);
    //$('#gum').css({"top":ttop+"px", "left":"100px"});
    //$('#cancel').css({"top":(ttop + 50)+"px", "left":"100px"});
    //$('#redraw').css({"top":(ttop + (50*2))+"px", "left":"100px"});
    //$('#clear').css({"top":(ttop + (50*3))+"px", "left":"100px"});
    $.each($('.tool'), function(index, t){
        
    });
    $('#gum').on('click', _okg.get_gum);
    $('#clear').on('click', _okg.clear_drawing);
    $('#cancel').on('click', _okg.remove_last);
    $('#redraw').on('click', _okg.redraw_last);
    
    var tool_height = (window.innerHeight - $('#backbutton').height()) / $('.tool').length;
    $('.tool').css('height', tool_height+'px');
    $.each($('.tool'), function(i, tool){
        $(this).css({'top': tool_height*i+"px", 'left':"100px"}); 
        TweenMax.to($(this), .5, {css:{"left":"0px"}, delay:(.1*i)+.8});
    });
    this.init_draw_tool();
}
drawing.prototype.play_hit = function(){
    if(typeof _okg._drawing_hit === "undefined"){
        audio_manager.play_sound('drawing_hit', 0, function(e){
            _okg._drawing_hit = e;     
        });
    }else{
        _okg._drawing_hit.play();     
    }   
}
drawing.prototype.get_gum = function(){
    _okg.play_hit();
    _okg.prevent_color = _okg.color;
    _okg.color = 'rgb(255,255,255)';
    $('.selected').removeClass('selected');
    $('#gum').addClass('selected');
    _okg.strokerstyle.size = $(this).attr('data-size');
    _okg.strokerstyle.stylingW = $(this).attr('data-stylingw');
    _okg.strokerstyle.stylingH = $(this).attr('data-stylingh');
}
drawing.prototype.init_draw_tool = function(){
    _okg.stage = new createjs.Stage("drawing_canvas");
    _okg.stage.autoClear = true;
    //_okg.stage.onMouseDown = this.handleMouseDown;
    //_okg.stage.onMouseUp = this.handleMouseUp;
	//createjs.Touch.enable(_okg.stage);
    _okg.stage.update();
    createjs.Ticker.addEventListener("tick", _okg.tick);
    
    if ("ontouchstart" in window) {
        createjs.Touch.enable(_okg.stage);
        _okg.stage.on("stagemousedown", _okg.handleMouseDown);
        _okg.stage.on("stagemousemove", _okg.handleMouseMove);
        _okg.stage.on("stagemouseup", _okg.handleMouseUp);
    } else {
        $('#drawing_canvas').on('mousedown', _okg.handleMouseDown);
        $('#drawing_canvas').on('mouseup', _okg.handleMouseUp);
    }
    _okg.set_active_tools();
	//createjs.Ticker.addListener(this);   
}
drawing.prototype.handleMouseDown = function(e) {
    _okg.isMouseDown = true;
    navigation.set_update_events();
    var s = new createjs.Shape();
    if ("ontouchstart" in window) {
        _okg.oldX = e.stageX;
        _okg.oldY = e.stageY;
        _okg.oldMidX = e.stageX;
        _okg.oldMidY = e.stageY;
        _okg.touchPos = {x:e.stageX, y:e.stageY};
    }else{
        _okg.oldX = _okg.stage.mouseX;
        _okg.oldY = _okg.stage.mouseY;
        _okg.oldMidX = _okg.stage.mouseX;
        _okg.oldMidY = _okg.stage.mouseY;
    }
   
    var g = s.graphics;
    //var thickness = Math.random() * 30 + 10 | 0;
    g.setStrokeStyle(10, 'round', 'round');
    
    var color = createjs.Graphics.getRGB(0,0,0);
    g.beginStroke(_okg.color);
    _okg.stage.addChild(s);
    _okg.currentShape[_okg.currentShape.length] = s;
}
drawing.prototype.handleMouseMove = function(evt){
    _okg.touchPos = {x:evt.stageX, y:evt.stageY};
}
drawing.prototype.handleMouseUp = function() {
    navigation._page_script.isMouseDown = false;
}
drawing.prototype.tick = function() {
    if(_okg == null){
        return false;
    }
    if (_okg.isMouseDown) {
        if(_okg.touchPos !== null){
            var pt = new createjs.Point(_okg.touchPos.x, _okg.touchPos.y);
        }else{
            var pt = new createjs.Point(_okg.stage.mouseX, _okg.stage.mouseY);
        }
        var midPoint = new createjs.Point(_okg.oldX + pt.x>>1, _okg.oldY+pt.y>>1);
        if(typeof _okg.currentShape[_okg.currentShape.length-1] != "undefined"){
            _okg.currentShape[_okg.currentShape.length-1].graphics.setStrokeStyle(_okg.strokerstyle.size, _okg.strokerstyle.stylingW, _okg.strokerstyle.stylingH);
            _okg.currentShape[_okg.currentShape.length-1].graphics.moveTo(midPoint.x, midPoint.y);
            _okg.currentShape[_okg.currentShape.length-1].graphics.curveTo(_okg.oldX, _okg.oldY, _okg.oldMidX, _okg.oldMidY);
        }
        _okg.oldX = pt.x;
        _okg.oldY = pt.y;

        _okg.oldMidX = midPoint.x;
        _okg.oldMidY = midPoint.y;
        _okg.stage.update();
        
        _okg._removed = [];
    }
    _okg.set_active_tools();
}
drawing.prototype.set_active_tools = function(){
    var toolHeight = $('.brush').height();
    var posTop = toolHeight + (toolHeight * $('.brush').length);
    
    if(_okg.currentShape.length > 0){
        $('#cancel svg').attr('fill', '#000000');
    }else{
        $('#cancel svg').attr('fill', '#CCCCCC');
    }
    if(_okg._removed.length > 0){
        $('#redraw svg').attr('fill', '#000000');
    }else{
        $('#redraw svg').attr('fill', '#CCCCCC');
    }
    //TweenMax.to($('#clear'), .5, {css:{top:posTop+'px'}});
    //$('#cancel').on('click', _okg.remove_last);
    //$('#redraw').on('click', _okg.redraw_last);
}
drawing.prototype.redraw_last = function(){
    _okg.play_hit();
    if(_okg._removed.length > 0){
        _okg.currentShape.push(_okg._removed[_okg._removed.length-1]);
        _okg.stage.addChild(_okg._removed[_okg._removed.length-1]);
        _okg._removed.pop();
    }
    _okg.stage.update();
}
drawing.prototype.remove_last = function(){
    _okg.play_hit();
    _okg._removed.push(_.clone(_okg.currentShape[_okg.currentShape.length-1]));
    _okg.stage.removeChild(_okg.currentShape[_okg.currentShape.length-1]);
    _okg.currentShape.pop();
    _okg.stage.update();
}
drawing.prototype.clear_drawing = function(){
    if(typeof _okg._clear_drawing_sound === "undefined"){
        audio_manager.play_sound('drawing_clear', 0, function(e){
            _okg._clear_drawing_sound = e;
        });    
    }else{
        _okg._clear_drawing_sound.play();
    }
    utilities.show_popup({color:navigation._current_interface_color, motion:"paper_ball"}, function(e){
        if(e == 1){
            _okg.stage.removeAllChildren();
            _okg.stage.update();
        }
    });
}
drawing.prototype.pause = function(){
}
drawing.prototype.play = function(){
}
drawing.prototype.destroy = function(callBack){
    if(_okg.currentShape.length > 10){
        //node_utilities.save_picture(bitmapData, base_filname, datas, callBack); 
        var bitmapData = document.getElementById('drawing_canvas').toDataURL('image/png');
        if(typeof _node === "undefined"){
            _node = new node_utilities();   
        }
        _node.save_picture(bitmapData, "drawing", {}, function(e){
        });
    }
    createjs.Ticker.removeEventListener('tick', _okg.tick);
    //createjs.Ticker.removeAllEventListeners();
    _okg.base = null;
    _okg.exportRoot = null;
    _okg.stage = null;
    _okg.isMouseDown = null;
    _okg.currentShape = [];
    _okg.oldMidX = null;
    _okg.oldMidY = null;
    _okg.oldX = null;
    _okg.oldY = null;
    
    delete _okg.base;
    delete _okg.exportRoot;
    delete _okg.stage;
    delete _okg.isMouseDown;
    delete _okg.currentShape;
    delete _okg.oldMidX;
    delete _okg.oldMidY;
    delete _okg.oldX;
    delete _okg.oldY;
    delete _okg;
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
