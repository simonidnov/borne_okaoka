var _okg = null;
function switcher(){
    _okg = this;
    _okg.dots = [];
    _okg.grid = null;
    _okg.init();
}
switcher.prototype.init = function(){
    _okg.init_stage();
}
switcher.prototype.init_stage = function(){
    $('#switch_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#switch_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    _okg.stage = new createjs.Stage("switch_canvas");
    _okg.stage.autoClear = true;
    _okg.stage.update();
    createjs.Touch.enable(_okg.stage);
    createjs.Ticker.addEventListener("tick", _okg.tick);
    
    $('#backbutton').css('display','none');
    _okg.create_grid();
}
switcher.prototype.create_grid = function(){
    _okg.stage.addEventListener("stagemousedown", _okg.stage_down);
    _okg.stage.addEventListener("stagemouseup", _okg.stage_up);
    
    _okg._line = new createjs.Shape();
    _okg._line.x = (window.innerWidth/2) - 100;
    _okg._line.y = (window.innerHeight/2) - 100;
    _okg.stage.addChild(_okg._line);
    
    _okg.grid = _okg.stage.addChild(new createjs.Container());
    _okg.grid.x = (window.innerWidth/2) - 100;
    _okg.grid.y = (window.innerHeight/2) - 100;
    _okg.grid.setBounds();
    var c = 0;
    var l = 0;
    for(var i=0; i<9; i++){
        _okg.dots[i] = new createjs.Shape();
        _okg.dots[i].graphics.beginFill('rgb(255,255,255)').drawCircle(0,0,20);
        _okg.dots[i].x = 100 * c;
        _okg.dots[i].y = 100 * l;
        _okg.dots[i].id = i;
        _okg.grid.addChild(_okg.dots[i]);
        c++;
        if(c === 3){
            c = 0;
            l++;
        }
    }
}
switcher.prototype.stage_down = function(e){
    _okg._selected_dots = [];
    _okg.position = {x: e.stageX, y:e.stageY};
    _okg._is_down = true;
}
switcher.prototype.stage_up = function(e){
    _okg._is_down = false;
    if(typeof _okg._selected_dots !== "undefined"){
        _okg.check_selected_dots();
    }
}
switcher.prototype.check_selected_dots = function(){
    if(_okg === null){
        return false;
    }
    /* ------- ON CHECK SI LA COMBINAISON EST VALABLE POUR SWITCHER VERS UN AUTRE MODE ----- */
    $.each(_.keys(combinaisons), function(i, key){
        if(typeof _okg !== "undefined" && _okg !== null){
            if(JSON.stringify(combinaisons[key]) === JSON.stringify(_okg._selected_dots)){
                switch(key){
                    case 'games':
                        navigation.router.navigate('page/screensaver', {trigger:true, replace:true});
                        break;
                    case 'video':
                        navigation.router.navigate('page/video', {trigger:true, replace:true});
                        break;
                    case 'settings':
                        navigation.router.navigate('page/settings', {trigger:true, replace:true});
                        break;
                    case 'quit':
                        utilities.save_page_stat("end_up", new Date().getTime());
                        if(typeof require !== "undefined"){
                            if(gui){
                                gui.App.quit();
                            }else{
                                gui = requireNode('nw.gui');
                                win = gui.Window.get();
                            }
                        }else{
                            window.close();
                        }
                        break;
                    default :
                        navigation.router.navigate('page/screensaver', {trigger:true, replace:true});
                        window.location.reload();
                        break;
                }
            }
        }
    });
    if(_okg === null){
        return false;
    }
    var l = _okg.grid.getNumChildren();
    for (var i=0; i<l; i++) {
        var child = _okg.grid.getChildAt(i);
        child.selected = false;
        TweenMax.to(child, .5, {
            scaleX : 1,
            scaleY : 1
        });
    }
    _okg._selected_dots = [];
    _okg._line.graphics.clear();
}
switcher.prototype.redraw_line_selection = function(size, color){
    if(!size){
        size = 20;
    }
    if(!color){
        color = "#FFFFFF";
    }else{
        if(color.indexOf('#') === -1){
            color = rgb2hex(color);
        }
    }
    _okg._line.graphics.clear();
    if(_okg._selected_dots.length > 0){
        _okg._line.graphics.clear();
        _okg._line.graphics.setStrokeStyle(size, "round", "round");
        _okg._line.graphics.beginStroke(color);
        _okg._line.graphics.moveTo(
            _.findWhere(_okg.dots, {id:_okg._selected_dots[0]}).x,
            _.findWhere(_okg.dots, {id:_okg._selected_dots[0]}).y
        ); 
        for(var i=1; i<_okg._selected_dots.length; i++){
            _okg._line.graphics.lineTo(
                _.findWhere(_okg.dots, {id:_okg._selected_dots[i]}).x, 
                _.findWhere(_okg.dots, {id:_okg._selected_dots[i]}).y
            );
        };
        if(_okg._is_down){
            _okg._line.graphics.lineTo(_okg.stage.mouseX-_okg._line.x, _okg.stage.mouseY-_okg._line.y);
        }
    }
}
switcher.prototype.tick = function(){
    if(_okg._is_down){
        var l = _okg.grid.getNumChildren();
        for (var i=0; i<l; i++) {
            var child = _okg.grid.getChildAt(i);
            //child.alpha = 0.1;
            var pt = child.globalToLocal(_okg.stage.mouseX, _okg.stage.mouseY);
            if (_okg.stage.mouseInBounds && child.hitTest(pt.x, pt.y)) { 
                /* ---- SI PAS DE SELECTION COURANTE ---- */
                if(_okg._selected_dots.length === 0){
                    _okg._selected_dots.push(child.id);
                    child.selected = true;
                    TweenMax.to(child, .5, {
                        scaleX : 1.2,
                        scaleY : 1.2
                    });
                }else{
                    if(!child.selected){
                        var last_dot = _.findWhere(_okg.dots, {id:_okg._selected_dots[_okg._selected_dots.length-1]});
                        
                        var pl  = {x:last_dot.x, y:last_dot.y};
                        var pc = {x:child.x, y:child.y};
                        var distance = Math.sqrt( (pl.x-pc.x)*(pl.x-pc.x) + (pl.y-pc.y)*(pl.y-pc.y) );
                        if(distance <= 150){
                            child.selected = true;
                            _okg._selected_dots.push(child.id);
                            TweenMax.to(child, .5, {
                                scaleX : 1.2,
                                scaleY : 1.2
                            });
                        }
                        delete pl;
                        delete pc;
                        delete distance;
                    }else{
                        var last_dot = _.findWhere(_okg.dots, {id:_okg._selected_dots[_okg._selected_dots.length-1]})
                        var pl  = {x:last_dot.x, y:last_dot.y};
                        var pc = {x:child.x, y:child.y};
                        var distance = Math.sqrt( (pl.x-pc.x)*(pl.x-pc.x) + (pl.y-pc.y)*(pl.y-pc.y) );
                        /* SI ON TOUCHE LE DOTS PRECEDENT ON SUPPRIMER LE DERNIER POINT DE LIAISON */
                        if(child.id === _okg._selected_dots[_okg._selected_dots.length-2]){
                            var laster = _.findWhere(_okg.dots, {id:_okg._selected_dots[_okg._selected_dots.length-1]});
                            laster.selected = false;
                            TweenMax.to(laster, .5, {
                                scaleX : 1,
                                scaleY : 1
                            });
                            _okg._selected_dots.pop();
                            if(_okg._is_shape){
                                var laster = _.findWhere(_okg.dots, {id:_okg._selected_dots[_okg._selected_dots.length-1]});
                                laster.selected = false;
                                TweenMax.to(laster, .5, {
                                    scaleX : 1,
                                    scaleY : 1
                                });
                                _okg._is_shape = false;
                                _okg._selected_dots.pop();
                            }
                        }
                    }
                }
            }
        }
        _okg.redraw_line_selection();
    }
    _okg.stage.update();
}
switcher.prototype.play = function(){
    
}
switcher.prototype.pause = function(){
    
}
switcher.prototype.destroy = function(callBack){
    if(_okg.stage){
        _okg.stage.removeEventListener("stagemousedown", _okg.stage_down);
        _okg.stage.removeEventListener("stagemouseup", _okg.stage_up);
    }
    createjs.Ticker.removeEventListener("tick", _okg.tick);
    /* DESTRUCTION DE TOUS LES OBJETS ET VARIABLES */
    /* TODO DETRUIRE EVENT TICKER ET STAGE */
    callBack();
}



var combinaisons = {
    "video":[0, 3, 7, 5, 2],
    "games":[2, 1, 0, 3, 6, 7, 8, 5, 4],
    "settings":[2, 1, 0, 3, 4, 5, 8, 7, 6],
    "quit":[0, 1, 2, 5, 8, 7, 6, 3, 4]
}