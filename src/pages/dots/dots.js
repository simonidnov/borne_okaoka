delete self;
var self = null;
function dots(){
    this._levels = null;
    this._navigation = {container:null, buttons:null, line:null};
    
    this.okaokarun = new Image();
    this.okaokarun.src = "pages/simplediscs/images/simple_run.png";
    
    this.angle = 0;
    this.particles_container;
    this.particles=[];
    
    this._nav_is_open = true;
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
    this.gameInfo = {start_date:0, started:false};
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
    if(self._total_hits !== -1){
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
    }
    if(self._time_lap !== -1){
        self._objectives_hits.icon = new createjs.Bitmap("./pages/dots/assets/chronos_icon_small.png");
        self._objectives_hits.icon.x = 0;
        self._objectives_container.addChild(self._objectives_hits.icon);

        self._objectives_hits.text = new createjs.Text();
        self._objectives_hits.text.font = "100 35px Roboto";
        self._objectives_hits.text.color = "#FFFFFF";
        self._objectives_hits.text.text = self._time_lap/1000;
        self._objectives_hits.text.x = 25;
        self._objectives_hits.text.y = 50;
        self._objectives_hits.text.width = 100;
        self._objectives_hits.text.textAlign = "center"; 
        self._objectives_container.addChild(self._objectives_hits.text);
        self.build_chronos_line();
        /* ------ CREATE RUNNER FOR TIME LAP GAME --------- */
    }
    $.each(_.keys(self._objectives), function(i, obk){
        self._objectives_texts[obk] = {dot:null, text:null, percent:null};
        self._objectives_texts[obk].dot = new createjs.Shape();
        self._objectives_texts[obk].dot.graphics.beginFill(colors[obk]);
        self.drawShape(self._objectives_texts[obk].dot, obk);
        //.drawCircle(0, 0, 15);
        self._objectives_texts[obk].dot.y = 25;
        self._objectives_texts[obk].dot.x = 100 + (80 * (i));
        self._objectives_container.addChild(self._objectives_texts[obk].dot);
        
        self._objectives_texts[obk].percent = new createjs.Shape();
        self._objectives_texts[obk].percent.graphics.setStrokeStyle(3);
        self._objectives_texts[obk].percent.graphics.beginStroke(colors[obk]);
        self._objectives_texts[obk].percent.graphics.arc(0,0,18,0,0);
        self._objectives_texts[obk].percent.y = 25;
        self._objectives_texts[obk].percent.x = 100 + (80 * (i));
        self._objectives_container.addChild(self._objectives_texts[obk].percent);
        
        self._objectives_texts[obk].check = new createjs.Bitmap("./pages/dots/assets/check_small.png");
        self._objectives_texts[obk].check.y = 10;
        self._objectives_texts[obk].check.x = 100 + (80 * (i)) - 15;
        self._objectives_texts[obk].check.scaleX = 0;
        self._objectives_texts[obk].check.scaleY = 0;
        self._objectives_container.addChild(self._objectives_texts[obk].check);
        
        self._objectives_texts[obk].text = new createjs.Text();
        self._objectives_texts[obk].text.font = "100 35px Roboto";
        self._objectives_texts[obk].text.color = "#FFFFFF";
        if(self._objectives[obk] === -1){
            self._objectives_texts[obk].text.text = "0";
        }else{
            self._objectives_texts[obk].text.text = "0/"+self._objectives[obk];
        }
        self._objectives_texts[obk].text.x = 100 + (80 * (i));
        self._objectives_texts[obk].text.y = 50;
        self._objectives_texts[obk].text.width = 100;
        self._objectives_texts[obk].text.textAlign = "center"; 
        self._objectives_container.addChild(self._objectives_texts[obk].text);
    });
    /* create five_hits_sprite */
    var data = {
        images: ["./pages/dots/images/five_hits_sprite.png"],
        frames: {width:100, height:100},
        animations: {
            hit:[0,15,true],
            stop:16
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    self.fivehits = new createjs.Sprite(spriteSheet, "stop");
    self.fivehits.x = 45;
    self.fivehits.y = 20;
    
    self._objectives_container.addChild(self.fivehits);
}
dots.prototype.build_chronos_line = function(){
    self.chronos_line = self.stage.addChild(new createjs.Container());
    self.chronos_line.regY = 25;
    self.chronos_line.y = window.innerHeight;
    self.chronos_line_ground = new createjs.Shape();
    self.chronos_line_ground.graphics.beginFill('rgba(0,0,0,.3)');
    self.chronos_line_ground.graphics.drawRect(0,0,window.innerWidth, 25);
    self.chronos_line.addChild(self.chronos_line_ground);
    
    self.chronos_line_progress = new createjs.Shape();
    self.chronos_line_progress.graphics.beginFill('#FFFFFF');
    self.chronos_line_progress.graphics.drawRect(0,0,window.innerWidth, 25);
    self.chronos_line_progress.scaleX = 0;
    self.chronos_line.addChild(self.chronos_line_progress);
    
    var data = {
        images: [self.okaokarun],
        frames: {width:80, height:80},
        animations: {
            stand:{frames:[0]},
            run:{frames:[0,0,1,1,2,2,3,3,4,4,5,5,6,6], frequency:50},
            great:{frames:[7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16], next:"run"},
            wrong:{frames:[17,17,18,18,19,19,20,20,21,21,22,22,23,23,24], next:"wrongslide"},
            wrongslide:{frames:[21,21,22,22,23,23,21,21,22,22,23,23,21,21,22,22,23,23,21,21,22,22,23,23], next:"run"}
        },
        framerate: 5
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    self.okaokasprite = new createjs.Sprite(spriteSheet, "run");
    self.okaokasprite.scaleX = self.okaokasprite.scaleY = .7;
    self.okaokasprite.y = -55;
    self.okaokasprite.gotoAndStop('stand');
    self.chronos_line.addChild(self.okaokasprite);   
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
    if(self.gameInfo.started){
        if(self._is_shape){
            self.destroy_all_color(_.findWhere(self.dots, {id:self._selected_dots[0]}).color);
        }else{
            self.check_selected_dots();
        }
    }
}
dots.prototype.create_grid = function(){
    self.stage.addEventListener("stagemousedown", self.stage_down);
    self.stage.addEventListener("stagemouseup", self.stage_up);
    
    self.create_objectives();
    
    self._line = new createjs.Shape();
    self.stage.addChild(self._line);
    
    self.grid = self.stage.addChild(new createjs.Container());
    //self.grid.x = window.innerWidth;
    /*TweenMax.to(self._objectives_container, 1, {
        x:(window.innerWidth/2) - ((self._grid_size * self.grid_size.c)/2) - (self._grid_size/2), 
        ease:Power4.easeInOut,
        delay:.2,
        onComplete:function(){
            self.gameInfo.start_date = new Date().getTime();
            self.okaokasprite.gotoAndPlay('run');
            self.gameInfo.started = true;
        }
    });
    TweenMax.to(self.grid, 1, {
        x:(window.innerWidth/2) - ((self._grid_size * self.grid_size.c)/2) - (self._grid_size/2), 
        ease:Power4.easeInOut
    });*/
    //self.grid.y = -window.innerHeight;
    //TweenMax.to(self.grid, 1, {y:0});
    
    self._line.x = (window.innerWidth/2) - ((self._grid_size * self.grid_size.c)/2) - (self._grid_size/2);
    self.grid.y = self._line.y = (window.innerHeight/2) - ((self._grid_size * self.grid_size.l)/2) - (self._grid_size/2);
    
    self._objectives_container.y = (window.innerHeight/2) - ((self._grid_size * self.grid_size.l)/2) - (self._grid_size/2) - 60;

    
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
        this.dots[cur].graphics.beginFill(colors[cur_color]);
        self.drawShape( this.dots[cur], cur_color);
        
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
    self.grid.x = (window.innerWidth/2) - ((self._grid_size * self.grid_size.c)/2) - (self._grid_size/2);
    self._objectives_container.x = (window.innerWidth/2) - (self._objectives_container.getBounds().width/2);
    
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"dots_tuto_popup", buttons:["play"]}, 
        function(e){
            /* have to init gameplay */
            setTimeout(function(){
                self.gameInfo.start_date = new Date().getTime();
                self.okaokasprite.gotoAndPlay('run');
                self.gameInfo.started = true;
            },800);
        }
    );
    
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
    /* on check si le jeu est basé sur du temps */
    if(self.gameInfo.started){
        if(self._time_lap !== -1){
            /* on met à jour le temps de la partie */
            var now = new Date().getTime();
            var elapsed = now - self.gameInfo.start_date;
            var rest = (self._time_lap - elapsed);
            self._objectives_hits.text.text = Math.ceil(rest/1000);
            /* CHECKING TIME AND RENDER BAR + CHRONOS self.party.start */
            var percent_progress = 100 - ((rest * 100 ) / self._time_lap);
            self.chronos_line_progress.scaleX = percent_progress / 100;
            self.okaokasprite.x = (window.innerWidth) * (percent_progress/ 100) - 50;
            /* on check si il reste du temps */
            if(rest <= 0){
                /* si le temps est écoulé c'est la fin de la partie */
                self.gameInfo.started = false;
                self.okaokasprite.gotoAndStop('stand');
                self.fivehits.gotoAndStop('stop');
                self.end_game();
            }
        }
    }
    self.update_particles();
    self.stage.update();
}
dots.prototype.end_game = function(){
    self.gameInfo.started = false;
    self.okaokasprite.gotoAndStop("stop");
    self._line.graphics.clear();
    TweenMax.to(self.chronos_line, .5, {
        y:window.innerHeight + 100,
        ease:Power4.easeIn
    });
    if(!self.winning_dance){
        var data = {
            images: ["../../motions/okaoka/winning_dance_8.png"],
            frames: {width:146, height:230},
            animations: {
                dance:[0,24]
            }
        };
        var spriteSheet = new createjs.SpriteSheet(data);
        self.winning_dance = new createjs.Sprite(spriteSheet, "dance");
    }else{
        self.stage.removeChild(self.winning_dance);
    }
    for(var i=0; i<self.grid.getNumChildren(); i++){
        var xpos = -(self.grid.x) + Math.random()*window.innerWidth;
        var ypos = self.grid.getChildAt(i).y;
        TweenMax.to(self.grid.getChildAt(i), .5, {
            //bezier:[{y:(ypos-100)},{y:(ypos+window.innerHeight)}],
            y:ypos+window.innerHeight,
            delay:0.02*(self.grid.getNumChildren()-i),
            ease:Power4.easeIn
            //bezier:[{x:xpos/2, y:ypos},{x:xpos, y:(window.innerHeight+300)}],
            //delay:(.01*i)
        });
    }
    TweenMax.to(self._objectives_container, .5, {
        y       : window.innerHeight/2 - (self._objectives_container.getBounds().height/2),
        x       : (window.innerWidth/2) - (self._objectives_container.getBounds().width/2),
        delay   : (0.02 * self.dots.length),
        ease    : Power4.easeIn,
        onComplete : function(){
            self.stage.removeChild(self.grid);
            self.winning_dance.x = window.innerWidth/2 - (146/2);
            self.winning_dance.y = self._objectives_container.y - self.winning_dance.getBounds().height - 20;
            self.stage.addChild(self.winning_dance);
            
            self.total_score_text = new createjs.Text();
            self.total_score_text.font = "700 100px Roboto";
            self.total_score_text.color = "#FFFFFF";
            self.total_score_text.text = "00000";
            self.total_score_text.textAlign = "center";
            self.total_score_text.x = window.innerWidth/2;
            self.total_score_text.y = self._objectives_container.y + self._objectives_container.getBounds().height;
            self.stage.addChild(self.total_score_text);
            var score = 0;
            $.each(_.keys(self._completed_objectives), function(i, key){
                score+= parseInt(self._completed_objectives[key].count);
            });
            var bonus = score * self._hits;
            var total_score = score + bonus;
            var scored = {total:0};
            TweenMax.to(scored, 3.5, {
                total : total_score,
                delay:.6,
                onUpdate : function(){
                    var score = "";
                    var num = Math.ceil(scored.total);
                    if(num.toString().length < 5){
                        var dif = 5 - num.toString().length;
                        for(var i=0; i<dif; i++){
                            score+="0";
                        }
                    }
                    score+= num.toString();
                    self.total_score_text.text = score;
                },
                ease:Power4.easeInOut,
                onComplete:function(){
                    console.log('total completed');
                }
            });
        }
    });
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
            TweenMax.to(border, .3, {size:1, onUpdate:function(){
                self.redraw_line_selection(border.size, $('#colorer').css('background-color'));
            }, onComplete:function(){
                TweenMax.to($('#colorer'), .3, {backgroundColor:'#FFFFFF', onUpdate:function(){
                    for(var i=0; i<to_remove.length; i++){
                        var dot = _.findWhere(self.dots, {id:to_remove[i]});
                        if(typeof dot!=="undefined"){
                            self.set_dot_color(dot, $('#colorer').css('background-color'), first_dot.color);
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
    var status = {label:"continu", objectifs:false, hits:true, time:true};
    /* on check si le jeu est basé sur des objectifs */
    if(self._total_hits !== -1){
        var _objectives_infos = {total:_.keys(self._objectives).length, completed:0};
        /* --- On check si les objectifs sont remplis et on met à jour la partie objectifs ----- */
        self._objectives_hits.text.text = self._total_hits - self._hits;
        /* on check les objectivfs un par un */
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
        if(self._total_hits - self._hits <= 5 && self._total_hits - self._hits > 0){
            self.fivehits.gotoAndPlay('hit');
        }else{
            self.fivehits.gotoAndStop('stop');
        }
        if(self._total_hits - self._hits <= 0){
            if(status.objectifs === false){
                status.label = "lose";
            }
            status.hits = false;
        }
    }
    /* on check si le jeu est basé sur du temps */
    if(self.gameInfo.started){
        if(self._time_lap !== -1){
            $.each(_.keys(self._objectives), function(i, obk){
                self._objectives_texts[obk].text.text = self._completed_objectives[obk].count;
            });
            /* on met à jour le temps de la partie */
            var elapsed = new Date().getTime() - self.gameInfo.start_date;
            var time = Math.ceil((self._time_lap - elapsed)/1000);
            /* si le temps restant est inférieur à 10 sec on affiche le fivehits */
            if(time < 10){
                self.fivehits.gotoAndPlay('hit');
            }
        }
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
            var num_color = Math.ceil(Math.random()*_.keys(self.colors).length-1);
            if(num_color < 0){
                num_color = 0;
            }
            var cur_color = _.keys(self.colors)[num_color];
            this.dots[cur] = new createjs.Shape();
            this.dots[cur].graphics.beginFill(colors[cur_color]);
            self.drawShape( this.dots[cur], cur_color);
        
            //this.dots[cur].graphics.beginFill(colors[cur_color]).drawCircle(0, 0, self._dot_size);
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
    if(!self.gameInfo.started){
        return false;
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
dots.prototype.set_dot_color = function(target, color, original_color){
    target.graphics.clear();
    target.graphics.beginFill(color);
    console.log(color);
    self.drawShape(target, original_color);
    //.drawCircle(0, 0, self._dot_size)
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
            self.build_decors();
            self.create_particles();
            self.select_level(0);
            //self.build_navigation();
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
    self._dot_size      = datas.dot_size;
    self.grid_size      = datas.grid_size;
    self._total_hits    = datas.hits;
    self._time_lap      = datas.time;
    self._hits          = 0;
    self._objectives    = datas.objectives;
    self._completed_objectives     = {};
    $.each(_.keys(datas.objectives), function(o, obk){
        self._completed_objectives[obk] = {count:0, percent:0};
    });
    TweenMax.to($('.app_content'), .5, {backgroundColor:colors[datas.color]});
    TweenMax.to($('#backbutton'), .5, {backgroundColor:colors[datas.color]});
    self.create_objectives_popup();
    self.create_grid();
}
dots.prototype.create_objectives_popup = function(){
       
}
dots.prototype.destroy_grid = function(){
    TweenMax.to(self._objectives_container, 1, {
        x:window.innerWidth,
        ease:Power4.easeInOut
    });
    TweenMax.to(self.grid, 1, {
        x:window.innerWidth,
        ease:Power4.easeInOut,
        onComplete:function(){
            var l = self.grid.getNumChildren();
            for (var i=0; i<l; i++) {
                self.dots = _.reject(self.dots, {id:self.grid.getChildAt(i).id});
                //self.grid.removeChild(self.grid.getChildAt(i));
            }
            self.stage.removeChild(self.grid);
            self.stage.removeChild(self._objectives_container);
        }
    });
}
dots.prototype.open_nav = function(){
    /*$('#dots_page').append('<div class="scroller"></div>');
    $('.scroller').css({
        width:window.innerWidth+"px", 
        height:self._navigation.container.getBounds().height,
        top:self._navigation.container.y,
        left:0,
        background:'rgba(0,0,0,.2)'
    });*/
    //Draggable.create('.scroller', {type:"x,y", edgeResistance:0.65, bounds:".app_content", throwProps:true, onComplete:function(){console.log($('.scroller').position());}});
    
    self._nav_is_open = true;
    self.stage.removeEventListener("stagemousedown");
    self.stage.removeEventListener("stagemouseup");
    var offset = new createjs.Point();
    var start_point = {x:0, y:0};
    self.stage.addEventListener("pressup", function (evt) {
        if(self._nav_is_open){
            self.replace_decors();
            if(self._navigation.container.y > (self._navigation.container.getBounds().height - (window.innerHeight / 2))){
                TweenMax.to(self._navigation.container, 1, {
                    y : (self._navigation.container.getBounds().height - (window.innerHeight / 2)), 
                    ease:Power4.easeInOut,
                    onUpdate : function(){
                        self.replace_decors();   
                    }
                });
            }
            if(self._navigation.container.y < -(self._navigation.container.getBounds().height + self._navigation.container.getBounds().y - (window.innerHeight / 2))){
                TweenMax.to(self._navigation.container, 1, {
                    y : -(self._navigation.container.getBounds().height + self._navigation.container.getBounds().y - (window.innerHeight / 2)), 
                    ease:Power4.easeInOut,
                    onUpdate : function(){
                        self.replace_decors();   
                    }
                });
            }
        }
    });
    self.stage.addEventListener("mousedown", function (evt) {
		if(self._nav_is_open){
            start_point = {x: evt.stageX, y: evt.stageY, default_pos:self._navigation.container.y};
        }
	});
    self.stage.addEventListener("pressmove", function (evt) {
        if(self._nav_is_open){
            //self._navigation.container.y = $('.scroller').position().top;
            self._navigation.container.y = start_point.default_pos + (evt.stageY - start_point.y)/1.2;
            self.replace_decors();
        }
    });
    TweenMax.to(self._navigation.container, 1, {x:0, ease : Power4.easeInOut});
}
dots.prototype.close_nav = function(){
    self._nav_is_open = false;
    self.stage.removeEventListener("pressup");
    self.stage.removeEventListener("mousedown");
    self.stage.removeEventListener("pressmove");
    TweenMax.to(self._navigation.container, 1, {x:-window.innerWidth, ease : Power4.easeInOut});
}
dots.prototype.build_decors = function(){
    self.decors = {container:null, bottom_left:null, bottom_right:null, bottom_center:null, watter:null, elements:{}};
    
    self.decors.container = self.stage.addChild(new createjs.Container());
    
    self.decors.bottom_left = new createjs.Bitmap("./pages/dots/images/decors/bottom_left.png");
    self.decors.container.addChild(self.decors.bottom_left);
    
    self.decors.bottom_right = new createjs.Bitmap("./pages/dots/images/decors/bottom_right.png");
    self.decors.container.addChild(self.decors.bottom_right);
    
    self.decors.bottom_center = new createjs.Bitmap("./pages/dots/images/decors/bottom_center.png");
    self.decors.container.addChild(self.decors.bottom_center);
    
    self.decors.bottom_left.scaleX = self.decors.bottom_left.scaleY = self.decors.bottom_right.scaleX = self.decors.bottom_right.scaleY = self.decors.bottom_center.scaleX = self.decors.bottom_center.scaleY = 0;
    
    /*self.decors.watter = new createjs.Bitmap("./pages/dots/images/decors/watter_white.png");
    self.decors.watter.x = -100;
    self.decors.watter.y = window.innerHeight + 300;
    self.decors.container.addChild(self.decors.watter);
    
    TweenMax.to(self.decors.watter, 1, {
        y:window.innerHeight-40,
        delay:1
    });*/
    
    /*self.decors.elements['square'] = new createjs.Bitmap("./pages/dots/images/decors/square_green.png");
    self.decors.elements['square'].x = window.innerWidth/2 - 250;
    self.decors.elements['square'].y = 400;
    self.decors.elements['square'].level = 2;
    self.decors.container.addChild(self.decors.elements['square']);
    self.decors.elements.square.regX = self.decors.elements.square.regY = 50;
    TweenMax.to(self.decors.elements['square'], 12, {
        rotation:360,
        rotation:360,
        repeat:-1,
        ease:Linear.easeInOut
    });
    
    self.decors.elements['triangle_pink'] = new createjs.Bitmap("./pages/dots/images/decors/triangle_pink.png");
    self.decors.elements['triangle_pink'].x = 250;
    self.decors.elements['triangle_pink'].y = 0;
    self.decors.elements['triangle_pink'].level = 1;
    self.decors.container.addChild(self.decors.elements['triangle_pink']);
    self.decors.elements.triangle_pink.regX = self.decors.elements.triangle_pink.regY = 50;
    TweenMax.to(self.decors.elements['triangle_pink'], 24, {
        rotation:360,
        repeat:-1,
        ease:Linear.easeInOut
    });
    
    self.decors.elements['wave_pink'] = new createjs.Bitmap("./pages/dots/images/decors/wave_pink.png");
    self.decors.elements['wave_pink'].x = window.innerWidth/2 + 330;
    self.decors.elements['wave_pink'].y = 225;
    self.decors.elements['wave_pink'].level = 2;
    self.decors.container.addChild(self.decors.elements['wave_pink']);
    self.decors.elements.wave_pink.regX = self.decors.elements.wave_pink.regY = 50;*/
    /*TweenMax.to(self.decors.elements['wave_pink'], 5, {
        scaleX:0,
        scaleY:0,
        yoyo:true,
        repeat:-1,
        ease:Linear.easeInOut,
        onComplete:function(){
            var m =this;
            this.pause();
            setTimeout(function(){
                m.resume();
            },2500);
        }
    });*/
    
    /*self.decors.elements['circular_green'] = new createjs.Bitmap("./pages/dots/images/decors/circular_green.png");
    self.decors.elements['circular_green'].x = window.innerWidth - 150;
    self.decors.elements['circular_green'].y = window.innerHeight - 200;
    self.decors.elements['circular_green'].level = 3;
    self.decors.container.addChild(self.decors.elements['circular_green']);
    self.decors.elements.circular_green.regX = self.decors.elements.circular_green.regY = 100;
    TweenMax.to(self.decors.elements['circular_green'], 35, {
        rotation:360,
        repeat:-1,
        ease:Linear.easeInOut
    });
    
    self.decors.elements['herisson_green'] = new createjs.Bitmap("./pages/dots/images/decors/herisson_green.png");
    self.decors.elements['herisson_green'].x = window.innerWidth - 250;
    self.decors.elements['herisson_green'].y = -280;
    self.decors.elements['herisson_green'].level = 4;
    self.decors.container.addChild(self.decors.elements['herisson_green']);
    self.decors.elements.herisson_green.regX = self.decors.elements.herisson_green.regY = 78;
    TweenMax.to(self.decors.elements['herisson_green'], 8, {
        rotation:360,
        repeat:-1,
        ease:Linear.easeInOut
    });*/
    
    
    setTimeout(function(){
        self.decors.bottom_left.regY = self.decors.bottom_left.getBounds().height;
        self.decors.bottom_left.y = window.innerHeight + 300;
        self.decors.bottom_left.regX = 0;
        
        self.decors.bottom_right.regX = self.decors.bottom_right.getBounds().width;
        self.decors.bottom_right.regY = self.decors.bottom_right.getBounds().height;
        self.decors.bottom_right.x = window.innerWidth;
        self.decors.bottom_right.y = window.innerHeight + 300;
        
        self.decors.bottom_center.regX = self.decors.bottom_center.getBounds().width/2;
        self.decors.bottom_center.regY = self.decors.bottom_center.getBounds().height;
        self.decors.bottom_center.x = window.innerWidth/2;
        self.decors.bottom_center.y = window.innerHeight + 300;
        
        var updt = {scale:0}
        TweenMax.to(updt, 1, {scale:1, onUpdate:function(){
            self.decors.bottom_left.scaleX = self.decors.bottom_left.scaleY = self.decors.bottom_right.scaleX = self.decors.bottom_right.scaleY = self.decors.bottom_center.scaleX = self.decors.bottom_center.scaleY = updt.scale;
        }, delay:1});
        self.replace_decors();
    }, 500);
}
dots.prototype.create_particles = function(){
    self.particles_container = self.stage.addChild(new createjs.Container());
    for(var i=0; i<25; i++){
        self.particles[i] = new createjs.Shape();
        self.particles[i].graphics.beginFill("#FFFFFF").drawCircle(0, 0, Math.round(Math.random()*5)+1);
        self.particles[i].x = Math.random()*window.innerWidth;
        self.particles[i].y = Math.random()*window.innerHeight;   
        self.particles[i].alpha = .1 + Math.random()*1;
        self.particles_container.addChild(self.particles[i]);
    }
}
dots.prototype.redraw_particles = function(){
    
}
dots.prototype.update_particles = function(){
    var W = window.innerWidth;
    var H = window.innerWidth;
    self.angle += 0.01;
	for(var i = 0; i < self.particles.length; i++)
	{
		var p = self.particles[i];
		p.y += Math.cos(self.angle) + 1;
		p.x += Math.sin(self.angle) * 2;
        //console.log(p.x);
		if(p.x > W+5 || p.x < -5 || p.y > H)
		{
			if(i%3 > 0) //66.67% of the flakes
			{
				self.particles[i].x = Math.random()*W;
                self.particles[i].y = -10;
                //, r: p.r, d: p.d};
			}
			else
			{
				if(Math.sin(self.angle) > 0)
				{
					self.particles[i].x = -5;
                    self.particles[i].y = Math.random()*H;
                    //, r: p.r, d: p.d};
				}
				else
				{
					self.particles[i].x = W+5;
                    self.particles[i].y = Math.random()*H;
                    //, r: p.r, d: p.d};
				}
			}
		}
	}
	   
}
dots.prototype.replace_decors = function(){
    // set self.decors.container relative to self._navigation.container.y
    //self.decors.container.y = self._navigation.container.y / 2;
    //self.decors.bottom_center.y = -(self.decors.container.y) / 2 + window.innerHeight + 300;
    /*for(var i=0; i<_.keys(self.decors.elements).length; i++){
        console.log(self.decors.elements[_.keys(self.decors.elements)[i]].y);
        self.decors.elements[_.keys(self.decors.elements)[i]].y = -(self.decors.container.y) / self.decors.elements[_.keys(self.decors.elements)[i]].level;
    }*/
}
dots.prototype.build_navigation = function(){
    self.hit_zone = new createjs.Shape();
    self.hit_zone.graphics.beginFill(colors['yellow']).drawRect(0,0,window.innerWidth, window.innerHeight);
    self.stage.addChild(self.hit_zone);
    self.hit_zone.alpha = 0.01;
    
    self._navigation = {container:null, buttons:{}, line:null};
    self._navigation.container = self.stage.addChild(new createjs.Container());
    self._navigation.line = new createjs.Shape();
    self._navigation.line.graphics.setStrokeStyle(40, "round", "round");
    self._navigation.line.graphics.beginStroke("#FFF");
    self._navigation.line.graphics.moveTo(window.innerWidth/2, (window.innerHeight - 125));
    self._navigation.line.graphics.lineTo(
        window.innerWidth/2, 
        (window.innerHeight - 50) - (125 * _.keys(self._levels).length)
    );
    self._navigation.container.addChild(self._navigation.line);
    //self._navigation.line.scaleX = 0;
    self.stage.enableMouseOver(20);
    self.stage.mouseMoveOutside = true;
    
    $.each(_.keys(self._levels), function(i, lvl){
        self._navigation.buttons[lvl] = {container:null, dot:null, text:null, percent:null};
        self._navigation.buttons[lvl].container = self._navigation.container.addChild(new createjs.Container());
        self._navigation.buttons[lvl].container.y = (window.innerHeight - 125) - (150 * i);
        self._navigation.buttons[lvl].container.x = window.innerWidth/2;
        self._navigation.buttons[lvl].container.id = lvl;
        self._navigation.buttons[lvl].container.scaleX = 0;
        self._navigation.buttons[lvl].container.scaleY = 0;
            
        self._navigation.buttons[lvl].dot = new createjs.Shape();
        self._navigation.buttons[lvl].dot.graphics.setStrokeStyle(20);
        self._navigation.buttons[lvl].dot.graphics.beginStroke("#FFF");
        self._navigation.buttons[lvl].dot.graphics.beginFill(colors[self._levels[lvl].color]).drawCircle(0, 0, 50);
        self._navigation.buttons[lvl].dot.y = 30;
        //self._navigation.buttons[lvl].dot.x = window.innerWidth/2 - 50;
        self._navigation.buttons[lvl].dot.id = lvl;
        
        
        self._navigation.buttons[lvl].text = new createjs.Text();
        self._navigation.buttons[lvl].text.font = "700 50px Roboto";
        self._navigation.buttons[lvl].text.color = "#FFFFFF";
        self._navigation.buttons[lvl].text.text = lvl;
        //self._navigation.buttons[lvl].text.x = window.innerWidth/2 - 50;
        //self._navigation.buttons[lvl].text.y = (window.innerHeight - 155) - (150 * i);
        self._navigation.buttons[lvl].text.width = 100;
        self._navigation.buttons[lvl].text.textAlign = "center"; 
        
        self._navigation.buttons[lvl].container.addChild(self._navigation.buttons[lvl].dot);
        self._navigation.buttons[lvl].container.addChild(self._navigation.buttons[lvl].text);
        
        self._navigation.buttons[lvl].container.addEventListener("mousedown", function(e){
            TweenMax.to(self._navigation.buttons[e.currentTarget.id].dot, .3, {scaleX:1.3, scaleY:1.3, ease:Back.easeOut});
        });
        self._navigation.buttons[lvl].container.addEventListener("mouseover", function(e){
            TweenMax.to(self._navigation.buttons[e.currentTarget.id].dot, .3, {scaleX:1.3, scaleY:1.3, ease:Back.easeOut});
        });
        self._navigation.buttons[lvl].container.addEventListener("mouseup", function(e){
            for(var i=0; i<_.keys(self._navigation.buttons).length; i++){
                TweenMax.to(
                    self._navigation.buttons[_.keys(self._navigation.buttons)[i]],
                    .3, 
                    {scaleX:1, scaleY:1}
                ); 
            }
        });
        self._navigation.buttons[lvl].container.addEventListener("mouseout", function(e){
            TweenMax.to(self._navigation.buttons[e.currentTarget.id].dot, .3, {scaleX:1, scaleY:1}); 
        });
        self._navigation.buttons[lvl].container.addEventListener("click", function(e){
            self.close_nav();
            self.select_level(e.currentTarget.id);
        });
        TweenMax.to(self._navigation.buttons[lvl].container, .6, {
            scaleX:1,
            scaleY:1,
            ease:Back.easeOut,
            delay:(.1*i)
        });
    });
    self._navigation.container.y = -(self._navigation.container.getBounds().height + self._navigation.container.getBounds().y - (window.innerHeight / 2));
    self.open_nav();
    //self.intro_hand();
}
dots.prototype.intro_hand = function(){
    var hand = new createjs.Bitmap("./pages/dots/images/decors/hand.png");
    hand.x = window.innerWidth;
    hand.y = window.innerHeight;
    self.stage.addChild(hand);
    TweenMax.to(hand, 1, {
        y:window.innerHeight/2, 
        x:window.innerWidth/2 + 200,
        onComplete:function(){
            TweenMax.to(hand, 1, {
                y:window.innerHeight/2 + 250, 
                x:window.innerWidth/2 + 200,
                onUpdate : function(){
                    self._navigation.container.y = (hand.y - window.innerHeight/2) -(self._navigation.container.getBounds().height + self._navigation.container.getBounds().y - (window.innerHeight / 2));
                    self.replace_decors();
                },
                onComplete:function(){
                    TweenMax.to(hand, 1, {
                        y:window.innerHeight/2 - 250, 
                        x:window.innerWidth/2 + 200,
                        onUpdate : function(){
                            self._navigation.container.y = (hand.y - window.innerHeight/2) -(self._navigation.container.getBounds().height + self._navigation.container.getBounds().y - (window.innerHeight / 2));
                            self.replace_decors();
                        },
                        onComplete:function(){
                            TweenMax.to(hand, 1, {
                                y:window.innerHeight/2, 
                                x:window.innerWidth/2 + 200,
                                onUpdate : function(){
                                    self._navigation.container.y = (hand.y - window.innerHeight/2) -(self._navigation.container.getBounds().height + self._navigation.container.getBounds().y - (window.innerHeight / 2));
                                    self.replace_decors();
                                },
                                onComplete:function(){
                                    TweenMax.to(hand, 1, {
                                        y:window.innerHeight, 
                                        x:window.innerWidth,
                                        ease:Back.easeIn,
                                        onComplete:function(){
                                            self.stage.removeChild(hand);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
dots.prototype.drawShape = function(target, color){
    switch(color){
        case("purple"):
            target.graphics.drawCircle(0, 0, self._dot_size);  
            break;
        case("green"):
            target.graphics.drawRect(-(self._dot_size-5), -(self._dot_size-5), ((self._dot_size-5)*2), ((self._dot_size-5)*2));  
            target.rotation = 45;
            break;
        case("pink"):
            target.graphics.moveTo(0, -self._dot_size);
            target.graphics.lineTo(self._dot_size+3, self._dot_size);
            target.graphics.lineTo(-self._dot_size-3, self._dot_size);
            //this.dots[cur].graphics.drawCircle(0, 0, self._dot_size);  
            break;
        default:
            target.graphics.drawCircle(0, 0, self._dot_size);  
            break;
    }
}
dots.prototype.pause = function(){
}
dots.prototype.play = function(){
}
dots.prototype.destroy = function(callBack){
    if(self.tick){
        createjs.Ticker.removeEventListener('tick', self.tick);
    }
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