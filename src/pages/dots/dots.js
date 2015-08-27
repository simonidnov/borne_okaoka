delete self;
var self = null;
function dots(){
    this._levels = null;
    this._navigation = {container:null, buttons:null, line:null};
    
    
    this.dots = [];
    this.grid_size = {c:3, l:3};
    this.position = {x:0, y:0};
    this._grid_size = 100;
    this._dot_size = 35;
    this._is_down = false;
    this._current_dot = null;
    this._lines = null;
    this._line = null;
    this._hits = 0;
    this._total_hits = 1;
    this._objectives = {};
    this._completed_objectives = {};
    this._is_shape = false;
    this._selected_dots = [];
    this._full_selected_dots = [];
    this.total_dots = 0;
    
    this._objectives_container = null;
    this._objectives_texts = {};
    this._objectives_dots = null;
    this._objectives_hits = {};
    
    this.colors = {
        "yellow":colors.yellow
    }
    /*this.colors = {
        "green":colors.green,
        "purple":colors.purple,
        "pink":colors.pink,
        "grey":colors.grey,
        "lighblue":colors.lighblue
    }*/
    //_.clone(colors);
    //delete this.colors.yellow;
}
dots.prototype.init = function(){
}
dots.prototype.create_interface = function(){
    self = this;
    self.load_level(1);
}
dots.prototype.create_objectives = function(){
    self._objectives_container = self.stage.addChild(new createjs.Container());
    
    self._objectives_hits.icon = new createjs.Bitmap("./pages/dots/assets/hit_icon_small.png");
    self._objectives_hits.icon.x = 70;
    self._objectives_container.addChild(self._objectives_hits.icon);
    
    self._objectives_hits.text = new createjs.Text();
    self._objectives_hits.text.font = "100 25px Roboto";
    self._objectives_hits.text.color = "#FFFFFF";
    self._objectives_hits.text.text = self._total_hits;
    self._objectives_hits.text.x = 90;
    self._objectives_hits.text.y = 35;
    self._objectives_hits.text.width = 100;
    self._objectives_hits.text.textAlign = "center"; 
    self._objectives_container.addChild(self._objectives_hits.text);
    
    $.each(_.keys(self._objectives), function(i, obk){
        self._objectives_texts[obk] = {dot:null, text:null, percent:null};
        self._objectives_texts[obk].dot = new createjs.Shape();
        self._objectives_texts[obk].dot.graphics.beginFill(colors[obk]).drawCircle(0, 0, 10);
        self._objectives_texts[obk].dot.y = 15;
        self._objectives_texts[obk].dot.x = 100 + (80 * (i+1));
        self._objectives_container.addChild(self._objectives_texts[obk].dot);
        
        self._objectives_texts[obk].percent = new createjs.Shape();
        self._objectives_texts[obk].percent.graphics.setStrokeStyle(3);
        self._objectives_texts[obk].percent.graphics.beginStroke(colors[obk]);
        self._objectives_texts[obk].percent.graphics.arc(0,0,16,0,0);
        self._objectives_texts[obk].percent.y = 15;
        self._objectives_texts[obk].percent.x = 100 + (80 * (i+1));
        self._objectives_container.addChild(self._objectives_texts[obk].percent);
        
        self._objectives_texts[obk].check = new createjs.Bitmap("./pages/dots/assets/check_small.png");
        self._objectives_texts[obk].check.y = 0;
        self._objectives_texts[obk].check.x = 100 + (80 * (i+1)) - 15;
        self._objectives_texts[obk].check.scaleX = 0;
        self._objectives_texts[obk].check.scaleY = 0;
        self._objectives_container.addChild(self._objectives_texts[obk].check);
        
        self._objectives_texts[obk].text = new createjs.Text();
        self._objectives_texts[obk].text.font = "100 15px Roboto";
        self._objectives_texts[obk].text.color = "#FFFFFF";
        self._objectives_texts[obk].text.text = "0/"+self._objectives[obk];
        self._objectives_texts[obk].text.x = 100 + (80 * (i+1));
        self._objectives_texts[obk].text.y = 45;
        self._objectives_texts[obk].text.width = 100;
        self._objectives_texts[obk].text.textAlign = "center"; 
        self._objectives_container.addChild(self._objectives_texts[obk].text);
    });
    
}
dots.prototype.init_stage = function(){
    $('#dots_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#dots_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    self.stage = new createjs.Stage("dots_canvas");
    self.stage.autoClear = true;
    self.stage.update();
    createjs.Touch.enable(self.stage);
    createjs.Ticker.addEventListener("tick", self.tick);
}
dots.prototype.stage_down = function(e){
    self._is_shape = false;
    self._selected_dots = [];
    self._full_selected_dots = [];
    self.position = {x: e.stageX, y:e.stageY};
    self._is_down = true;
}
dots.prototype.stage_up = function(e){
    self._is_down = false;
    if(self._is_shape){
        self.destroy_all_color(_.findWhere(self.dots, {id:self._selected_dots[0]}).color);
    }else{
        self.check_selected_dots();
    }   
}
dots.prototype.create_grid = function(){
    self.stage.addEventListener("stagemousedown", self.stage_down);
    self.stage.addEventListener("stagemouseup", self.stage_up);
    
    self.create_objectives();
    
    self._line = new createjs.Shape();
    self.stage.addChild(self._line);
    
    self.grid = self.stage.addChild(new createjs.Container());
    //self.grid.y = -window.innerHeight;
    //TweenMax.to(self.grid, 1, {y:0});
    
    self._objectives_container.x = self.grid.x = self._line.x = (window.innerWidth/2) - ((self._grid_size * self.grid_size.c)/2) - (self._grid_size/2);
    self.grid.y = self._line.y = (window.innerHeight/2) - ((self._grid_size * self.grid_size.l)/2) - (self._grid_size/2);
    
    self._objectives_container.y = (window.innerHeight/2) - ((self._grid_size * self.grid_size.l)/2) - (self._grid_size/2) -50;

    
    var curr = 1;
    var line = 1;
    for(var i=0; i<(self.grid_size.c * self.grid_size.l); i++){
        var cur = this.dots.length;
        var num_color = Math.round(Math.random()*_.keys(self.colors).length-1);
        if(num_color < 0){
            num_color = 0;
        }
        var cur_color = _.keys(self.colors)[num_color];
        this.dots[cur] = new createjs.Shape();
        this.dots[cur].graphics.beginFill(colors[cur_color]).drawCircle(0, 0, self._dot_size);
        //Set position of Shape instance.
        this.dots[cur].x = self._grid_size * (curr);
        this.dots[cur].y = self._grid_size * (line);
        this.dots[cur].color = cur_color;
        this.dots[cur].id = self.total_dots;
        this.dots[cur].selected  = false;
        this.dots[cur].column = curr;
        this.dots[cur].line = line;
        this.dots[cur].grid_position = {column:curr, line:line};
        this.dots[cur].setBounds(self._grid_size * (curr), self._grid_size * (line), self._grid_size, self._grid_size);
        curr++;
        self.total_dots++;
        if(curr === self.grid_size.c + 1){
            line++;
            curr = 1;
        }
        //this.dots[cur].addEventListener("click", self.hit_dot);
        //Add Shape instance to stage display list.
        self.grid.addChild(this.dots[cur]);
    }
}
dots.prototype.hit_dot = function(e){
    console.log("hit_dot position : ", e.target.grid_position, " color : ", e.target.color);
}
dots.prototype.tick = function(){
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
                    /* --- on ne pousse pas deux fois le meme dot dans l'array de selection courante ---- */
                    if(!child.selected){
                        var last_dot = _.findWhere(self.dots, {id:self._selected_dots[self._selected_dots.length-1]})
                        //self.dots[self._selected_dots[self._selected_dots.length-1]];
                        /* ------- ON CHECK SI LA COULEUR EST COMPATIBLE AVEC LA SELECTION -------- */
                        if(child.color === last_dot.color){
                            /* ----- SI LA COULEUR EST COMPATIBLE ON CHECK SI LA DISTANCE EST CORRECTE ----- */
                            /* ----- SEULS LES POINTS DE MM COULEUR VERTICAUX OU HORIZONTAUX ET COLLES SONT CORRECTS --- */
                            var pl  = {x:last_dot.x, y:last_dot.y};
                            var pc = {x:child.x, y:child.y};
                            var distance = Math.sqrt( (pl.x-pc.x)*(pl.x-pc.x) + (pl.y-pc.y)*(pl.y-pc.y) );
                            if(distance <= self._grid_size){
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
                        }
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
                        /* --- on check si un rectangle est dessiné _selected_dots > 3 && child === first selected dot --- */
                        if(child.id !== self._selected_dots[self._selected_dots.length-1]){
                            if(self._selected_dots.length >= 4 && self.is_a_shape(child.id) && distance <= self._grid_size){
                                console.log('tu as fait une forme fermée on détruit tout les dots de la couleur');
                                //self._is_down = false;
                                self._is_shape = true;
                                self._selected_dots.push(child.id);
                            }
                        }
                    }
                }
            }
        }
        delete l;
        self.redraw_line_selection();
    }
    //stage.update(event);
    self.stage.update();
}
dots.prototype.is_a_shape = function(id){
    for(var i=0; i<self._selected_dots.length-3; i++){
        if(self._selected_dots[i] === id){
            return true;
        }
    }
    return false;
}
dots.prototype.destroy_all_color = function(color){
    self._full_selected_dots = [];
    var l = self.grid.getNumChildren();
    for (var i=l-1; i>=0; i--) {
        var child = self.grid.getChildAt(i);
        if(child.color === color){
            self._full_selected_dots.push(child.id);
            TweenMax.to(child, .5, {
                scaleX : 1.2,
                scaleY : 1.2
            });
        }
    }
    self.check_selected_dots();
}
dots.prototype.check_selected_dots = function(){
    /* ------ on Check si une suite est effectuée ----- */
    if(self._selected_dots.length > 1){
        self._hits++;
        var to_remove = self._selected_dots;
        if(self._full_selected_dots.length > self._selected_dots.length){
            to_remove = self._full_selected_dots;
        }
        var first_dot = _.findWhere(self.dots, {id:to_remove[0]});
        if(typeof first_dot !== "undefined"){
            if(typeof self._completed_objectives[first_dot.color] !== "undefined"){
                self._completed_objectives[first_dot.color].count += parseInt(to_remove.length);
                self._completed_objectives[first_dot.color].percent = (self._completed_objectives[first_dot.color].count * 100) / self._objectives[first_dot.color];
            }else{
                self._completed_objectives[first_dot.color] = {percent:0, count:0};
                self._completed_objectives[first_dot.color].count = to_remove.length;
            }
            /* ---- Si on a une suite on joue une anim puis on detruit les dots ---- */
            TweenMax.set($('#colorer'), {backgroundColor:self.colors[first_dot.color]});
            var border = {size:self._dot_size};
            TweenMax.to(border, .3, {size:(self._dot_size * 2.5), onUpdate:function(){
                self.redraw_line_selection(border.size, $('#colorer').css('background-color'));
            }, onComplete:function(){
                TweenMax.to($('#colorer'), .3, {backgroundColor:'#FFFFFF', onUpdate:function(){
                    for(var i=0; i<to_remove.length; i++){
                        var dot = _.findWhere(self.dots, {id:to_remove[i]});
                        if(typeof dot!=="undefined"){
                            self.set_dot_color(dot, $('#colorer').css('background-color'));
                            self.redraw_line_selection(border.size, $('#colorer').css('background-color'));
                        }
                    }
                }, onComplete:function(){
                    self._line.graphics.clear();
                    /* ---- Ensuite on replace les dots des lignes supérieures ---- */
                    for(var i=0; i<to_remove.length; i++){
                        var dot = _.findWhere(self.dots, {id:to_remove[i]});
                        if(typeof dot !== "undefined"){
                            self.grid.removeChild(dot);
                            self.dots = _.reject(self.dots, {id:to_remove[i]});
                        }
                    }
                    /* ---- Puis on ajoute de nouveaux dots par le haut pour compbler les trous ---- */
                    self.replace_dots(0);
                }});
            }});
        }
    }else{
        for(var i=0; i<self._selected_dots.length; i++){
            var dot = _.findWhere(self.dots, {id:self._selected_dots[i]});
            TweenMax.to(dot, .5, {
                scaleX : 1,
                scaleY : 1
            });
            dot.selected = false;
        }
    }
    self._line.graphics.clear();
    //self._selected_dots = [];
}
dots.prototype.replace_dots = function(num){
    var l = self.grid.getNumChildren();
    for (var i=l-1; i>=0; i--) {
        var child = self.grid.getChildAt(i);
        if(child.line < self.grid_size.l){
            //console.log(i, ' ::: ', child.line);
            var next_exist = _.findWhere(self.dots, {line:child.line+1, column:child.column});
            //console.log(next_exist);
            if(typeof next_exist === "undefined"){
                child.line += 1;
                child.setBounds(self._grid_size * child.column, self._grid_size * child.line, self._grid_size, self._grid_size);
            }
        }
    }
    if(num < self.grid_size.l){
        self.replace_dots(num+1);   
    }else{
        for (var i=l-1; i>=0; i--) {
            var child = self.grid.getChildAt(i);
            TweenMax.to(child, .5, {
                y : child.line * self._grid_size,
                ease : Bounce.easeOut
            });
        }
        setTimeout(function(){
            self.check_game_state(function(status){
                console.log(status);
                switch(status.label){
                    case "continu":
                        self.complete_grid();
                        break;
                    case "win":
                        /* --- ouverture de la pop up winner --- */
                        /* --- Choix 1 retour au menu principal --- */
                        self.destroy_grid();
                        self.open_nav();
                        /* --- Choix 2 Level Suivant --- */
                        break;
                    case "lose":
                        /* --- ouverture de la pop up loser --- */
                        /* --- Choix 1 retour au menu principal --- */
                        self.destroy_grid();
                        self.open_nav();
                        /* --- Choix 2 Rejouer --- */
                        break;
                }
            });
        },500);
    }
}
dots.prototype.check_game_state = function(callBack){
    var status = {label:"continu", objectifs:false, hits:true};
    var _objectives_infos = {total:_.keys(self._objectives).length, completed:0};
    /* --- On check si les objectifs sont remplis et on met à jour la partie objectifs ----- */
    $.each(_.keys(self._objectives), function(i, obk){
        if(self._completed_objectives[obk].count >= self._objectives[obk]){
            self._objectives_texts[obk].percent.graphics.clear();
            self._objectives_texts[obk].percent.graphics.setStrokeStyle(3);
            self._objectives_texts[obk].percent.graphics.beginStroke(colors[obk]);
            self._objectives_texts[obk].percent.graphics.arc(0,0,16,0,6);
            
            self._objectives_texts[obk].text.text = self._objectives[obk];
            
            TweenMax.to(self._objectives_texts[obk].dot, .2, {scaleX:2, scaleY:2, ease:Back.easeOut});
            TweenMax.to(self._objectives_texts[obk].check, .2, {scaleX:1, scaleY:1, delay:.1, ease:Back.easeOut});
            
            _objectives_infos.completed++;
        }else{
            self._objectives_texts[obk].percent.graphics.clear();
            self._objectives_texts[obk].percent.graphics.setStrokeStyle(3);
            self._objectives_texts[obk].percent.graphics.beginStroke(colors[obk]);
            var angle = (6 * self._completed_objectives[obk].percent)/100;
            self._objectives_texts[obk].percent.graphics.arc(0,0,16,0,angle);
            
            self._objectives_texts[obk].text.text = self._completed_objectives[obk].count+"/"+self._objectives[obk];
        }
    });
    /* --- si les objectifs sont remplis on gagne ---- */
    if(_objectives_infos.total === _objectives_infos.completed){
        /* --- on a rempli tous les objectifs du level on gagne ---- */
        status.label = "win";
        status.objectifs = true;
    }
    /* --- On check s'il reste des hits et on met à jour les hits ------- */
    self._objectives_hits.text.text = self._total_hits - self._hits;
    if(self._total_hits - self._hits <= 0){
        if(status.objectifs === false){
            status.label = "lose";
        }
        status.hits = false;
    }
    
    /* --- S'il n'y à plus de hits on perd ---- */
    callBack(status);
}
dots.prototype.complete_grid = function(){
    var curr = 1;
    var line = 1;
    var added_new = 0;
    for(var i=0; i<(self.grid_size.c * self.grid_size.l); i++){
        if(typeof _.findWhere(self.dots, {column:curr, line:line}) === "undefined"){
            var cur = this.dots.length;
            var num_color = Math.round(Math.random()*_.keys(self.colors).length-1);
            if(num_color < 0){
                num_color = 0;
            }
            var cur_color = _.keys(self.colors)[num_color];
            this.dots[cur] = new createjs.Shape();
            this.dots[cur].graphics.beginFill(colors[cur_color]).drawCircle(0, 0, self._dot_size);
            //Set position of Shape instance.
            this.dots[cur].x = self._grid_size * (curr);
            this.dots[cur].y = self._grid_size * (line);
            this.dots[cur].color = cur_color;
            this.dots[cur].id = self.total_dots;
            this.dots[cur].selected  = false;
            this.dots[cur].column = curr;
            this.dots[cur].line = line;
            this.dots[cur].grid_position = {column:curr, line:line};
            this.dots[cur].setBounds(self._grid_size * (curr), self._grid_size * (line), self._grid_size, self._grid_size);
            self.grid.addChild(this.dots[cur]);
            TweenMax.set(this.dots[cur], {scaleX:0, scaleY:0});
            TweenMax.to(this.dots[cur], .4, {scaleX:1, scaleY:1, delay:added_new*.02, ease:Back.easeOut});
            added_new++;
        }
        
        curr++;
        self.total_dots++;
        if(curr === self.grid_size.c+1){
            line++;
            curr = 1;
        }
    }
}
dots.prototype.redraw_line_selection = function(size, color){
    if(!size){
        size = self._dot_size*1.2;
    }
    if(!color){
        var obj_color = _.findWhere(self.dots, {id:self._selected_dots[0]});
        if(typeof obj_color !== "undefined"){
            color = self.colors[_.findWhere(self.dots, {id:self._selected_dots[0]}).color];
        }else{
            color = "#FFFFFF";
        }
    }else{
        if(color.indexOf('#') === -1){
            color = rgb2hex(color);
        }
    }
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
dots.prototype.set_dot_color = function(target, color){
    target.graphics.clear();
    target.graphics.beginFill(color).drawCircle(0, 0, self._dot_size);
}
dots.prototype.load_level = function(lvl){
    self.init_stage();
    if(self.grid){
        //TweenMax.to(self.grid_ground, .5, {scaleX:0, scaleY:0});
        TweenMax.to(self._line, .5, {scaleX:0, scaleY:0});
        TweenMax.to(self.grid, .5, {scaleX:0, scaleY:0});
        //self.stage.removeChild(self.grid_ground);
        self.stage.removeChild(self._line);
        self.stage.removeChild(self.grid);
    }
    $.ajax({
        dataType: "json",
        url: './pages/dots/levels/level_'+lvl+'.json',
        data: {},
        success: function(datas){
            self._levels = datas;
            self.build_navigation();
        }
    });
}
dots.prototype.select_level = function(id){
    var datas = self._levels[id];
    self._grid_size = datas._grid_size;
    self.colors     = {};
    $.each(datas.colors, function(i,cl){
        self.colors[datas.colors[i]] = colors[datas.colors[i]];
    });
    self._dot_size       = datas.dot_size;
    self.grid_size      = datas.grid_size;
    self._total_hits    = datas.hits;
    self._hits          = 0;
    self._objectives     = datas.objectives;
    self._completed_objectives     = {};
    $.each(_.keys(datas.objectives), function(o, obk){
        self._completed_objectives[obk] = {count:0, percent:0};
    });
    TweenMax.to($('.app_content'), .5, {backgroundColor:colors[datas.color]});
    TweenMax.to($('#backbutton'), .5, {backgroundColor:colors[datas.color]});
    TweenMax.to(self._navigation.container, 1, {y:window.innerHeight, onComplete : function(){
        self.create_grid();
    }});
}
dots.prototype.destroy_grid = function(){
    var l = self.grid.getNumChildren();
    for (var i=0; i<l; i++) {
        self.dots = _.reject(self.dots, {id:self.grid.getChildAt(i).id});
        //self.grid.removeChild(self.grid.getChildAt(i));
    }
    self.stage.removeChild(self.grid);
    self.stage.removeChild(self._objectives_container);
}
dots.prototype.open_nav = function(){
    TweenMax.to(self._navigation.container, .5, {y:0});
}
dots.prototype.build_navigation = function(){
    self._navigation = {container:null, buttons:{}, line:null};
    self._navigation.container = self.stage.addChild(new createjs.Container());
    self._navigation.line = new createjs.Shape();
    self._navigation.line.graphics.setStrokeStyle(40);
    self._navigation.line.graphics.beginStroke("#FFF");
    self._navigation.line.graphics.moveTo(260, (window.innerHeight / 2) - 25);
    self._navigation.line.graphics.lineTo((100 + (160 * _.keys(self._levels).length)), (window.innerHeight / 2) - 25);
    self._navigation.container.addChild(self._navigation.line);
    
    $.each(_.keys(self._levels), function(i, lvl){
        self._navigation.buttons[lvl] = {dot:null, text:null, percent:null};
        self._navigation.buttons[lvl].dot = new createjs.Shape();
        self._navigation.buttons[lvl].dot.graphics.setStrokeStyle(20);
        self._navigation.buttons[lvl].dot.graphics.beginStroke("#FFF");
        self._navigation.buttons[lvl].dot.graphics.beginFill(colors[self._levels[lvl].color]).drawCircle(0, 0, 50);
        self._navigation.buttons[lvl].dot.y = (window.innerHeight / 2) - 25;
        self._navigation.buttons[lvl].dot.x = 100 + (160 * (i+1));
        self._navigation.buttons[lvl].dot.id = lvl;
        
        
        self._navigation.buttons[lvl].text = new createjs.Text();
        self._navigation.buttons[lvl].text.font = "700 50px Roboto";
        self._navigation.buttons[lvl].text.color = "#FFFFFF";
        self._navigation.buttons[lvl].text.text = lvl;
        self._navigation.buttons[lvl].text.x = 100 + (160 * (i+1));
        self._navigation.buttons[lvl].text.y = (window.innerHeight / 2) - 55;
        self._navigation.buttons[lvl].text.width = 100;
        self._navigation.buttons[lvl].text.textAlign = "center"; 
        
        self._navigation.container.addChild(self._navigation.buttons[lvl].dot);
        self._navigation.container.addChild(self._navigation.buttons[lvl].text);
        
        self._navigation.buttons[lvl].dot.addEventListener("click", function(e){
            self.select_level(e.currentTarget.id);
        });
    });
}
dots.prototype.pause = function(){
}
dots.prototype.play = function(){
}
dots.prototype.destroy = function(callBack){
    createjs.Ticker.removeEventListener('tick', self.tick);
    callBack();
}
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};