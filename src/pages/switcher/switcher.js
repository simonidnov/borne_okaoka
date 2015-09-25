var self = null;
function switcher(){
    self = this;
    self.dots = [];
    self.grid = null;
    self.init();
}
switcher.prototype.init = function(){
    self.init_stage();
}
switcher.prototype.init_stage = function(){
    $('#switch_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#switch_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    self.stage = new createjs.Stage("switch_canvas");
    self.stage.autoClear = true;
    self.stage.update();
    createjs.Touch.enable(self.stage);
    createjs.Ticker.addEventListener("tick", self.tick);
    
    $('#backbutton').css('display','none');
    self.create_grid();
}
switcher.prototype.create_grid = function(){
    self.stage.addEventListener("stagemousedown", self.stage_down);
    self.stage.addEventListener("stagemouseup", self.stage_up);
    
    self._line = new createjs.Shape();
    self._line.x = (window.innerWidth/2) - 100;
    self._line.y = (window.innerHeight/2) - 100;
    self.stage.addChild(self._line);
    
    self.grid = self.stage.addChild(new createjs.Container());
    self.grid.x = (window.innerWidth/2) - 100;
    self.grid.y = (window.innerHeight/2) - 100;
    self.grid.setBounds();
    var c = 0;
    var l = 0;
    for(var i=0; i<9; i++){
        self.dots[i] = new createjs.Shape();
        self.dots[i].graphics.beginFill('rgb(255,255,255)').drawCircle(0,0,20);
        self.dots[i].x = 100 * c;
        self.dots[i].y = 100 * l;
        self.dots[i].id = i;
        self.grid.addChild(self.dots[i]);
        c++;
        if(c === 3){
            c = 0;
            l++;
        }
    }
}
switcher.prototype.stage_down = function(e){
    self._selected_dots = [];
    self.position = {x: e.stageX, y:e.stageY};
    self._is_down = true;
}
switcher.prototype.stage_up = function(e){
    self._is_down = false;
    self.check_selected_dots();
}
switcher.prototype.check_selected_dots = function(){
    console.log('check_selected_dots');
    /* ------- ON CHECK SI LA COMBINAISON EST VALABLE POUR SWITCHER VERS UN AUTRE MODE ----- */
    $.each(_.keys(combinaisons), function(i, key){
        if(JSON.stringify(combinaisons[key]) === JSON.stringify(self._selected_dots)){
            switch(key){
                case 'games':
                    navigation.router.navigate('page/screensaver', {trigger:true, replace:true});
                    //window.location.reload();
                    break;
                case 'video':
                    console.log("video");
                    navigation.router.navigate('page/video', {trigger:true, replace:true});
                    //window.location.reload();
                    break;
                case 'settings':
                    navigation.router.navigate('page/settings', {trigger:true, replace:true});
                    //window.location.reload();
                    break;
                case 'quit':
                    /* TODO SEARCH SCRIPT TO CLOSE AND KILL THE APP */
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
    });
    var l = self.grid.getNumChildren();
    for (var i=0; i<l; i++) {
        var child = self.grid.getChildAt(i);
        child.selected = false;
        TweenMax.to(child, .5, {
            scaleX : 1,
            scaleY : 1
        });
    }
    self._selected_dots = [];
    self._line.graphics.clear();
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
    self._line.graphics.clear();
    if(self._selected_dots.length > 0){
        self._line.graphics.clear();
        self._line.graphics.setStrokeStyle(size, "round", "round");
        self._line.graphics.beginStroke(color);
        self._line.graphics.moveTo(
            _.findWhere(self.dots, {id:self._selected_dots[0]}).x,
            _.findWhere(self.dots, {id:self._selected_dots[0]}).y
        ); 
        for(var i=1; i<self._selected_dots.length; i++){
            self._line.graphics.lineTo(
                _.findWhere(self.dots, {id:self._selected_dots[i]}).x, 
                _.findWhere(self.dots, {id:self._selected_dots[i]}).y
            );
        };
        if(self._is_down){
            self._line.graphics.lineTo(self.stage.mouseX-self._line.x, self.stage.mouseY-self._line.y);
        }
    }
}
switcher.prototype.tick = function(){
    if(self._is_down){
        var l = self.grid.getNumChildren();
        for (var i=0; i<l; i++) {
            var child = self.grid.getChildAt(i);
            //child.alpha = 0.1;
            var pt = child.globalToLocal(self.stage.mouseX, self.stage.mouseY);
            if (self.stage.mouseInBounds && child.hitTest(pt.x, pt.y)) { 
                /* ---- SI PAS DE SELECTION COURANTE ---- */
                if(self._selected_dots.length === 0){
                    self._selected_dots.push(child.id);
                    child.selected = true;
                    TweenMax.to(child, .5, {
                        scaleX : 1.2,
                        scaleY : 1.2
                    });
                }else{
                    if(!child.selected){
                        var last_dot = _.findWhere(self.dots, {id:self._selected_dots[self._selected_dots.length-1]});
                        
                        var pl  = {x:last_dot.x, y:last_dot.y};
                        var pc = {x:child.x, y:child.y};
                        var distance = Math.sqrt( (pl.x-pc.x)*(pl.x-pc.x) + (pl.y-pc.y)*(pl.y-pc.y) );
                        if(distance <= 150){
                            child.selected = true;
                            self._selected_dots.push(child.id);
                            TweenMax.to(child, .5, {
                                scaleX : 1.2,
                                scaleY : 1.2
                            });
                        }
                        delete pl;
                        delete pc;
                        delete distance;
                    }else{
                        var last_dot = _.findWhere(self.dots, {id:self._selected_dots[self._selected_dots.length-1]})
                        var pl  = {x:last_dot.x, y:last_dot.y};
                        var pc = {x:child.x, y:child.y};
                        var distance = Math.sqrt( (pl.x-pc.x)*(pl.x-pc.x) + (pl.y-pc.y)*(pl.y-pc.y) );
                        /* SI ON TOUCHE LE DOTS PRECEDENT ON SUPPRIMER LE DERNIER POINT DE LIAISON */
                        if(child.id === self._selected_dots[self._selected_dots.length-2]){
                            var laster = _.findWhere(self.dots, {id:self._selected_dots[self._selected_dots.length-1]});
                            laster.selected = false;
                            TweenMax.to(laster, .5, {
                                scaleX : 1,
                                scaleY : 1
                            });
                            self._selected_dots.pop();
                            if(self._is_shape){
                                var laster = _.findWhere(self.dots, {id:self._selected_dots[self._selected_dots.length-1]});
                                laster.selected = false;
                                TweenMax.to(laster, .5, {
                                    scaleX : 1,
                                    scaleY : 1
                                });
                                self._is_shape = false;
                                self._selected_dots.pop();
                            }
                        }
                    }
                }
            }
        }
        self.redraw_line_selection();
    }
    self.stage.update();
}
switcher.prototype.play = function(){
    
}
switcher.prototype.pause = function(){
    
}
switcher.prototype.destroy = function(callBack){
    createjs.Ticker.removeEventListener("tick", self.tick);
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