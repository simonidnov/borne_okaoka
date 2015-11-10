delete _okg;
var _okg = null;
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
    _okg = this;
    _okg.load_level(1);
}
dots.prototype.create_objectives = function(){
    _okg._objectives_container = _okg.stage.addChild(new createjs.Container());
    if(_okg._total_hits !== -1){
        _okg._objectives_hits.icon = new createjs.Bitmap("./pages/dots/assets/hit_icon_small.png");
        _okg._objectives_hits.icon.x = 70;
        _okg._objectives_container.addChild(_okg._objectives_hits.icon);

        _okg._objectives_hits.text = new createjs.Text();
        _okg._objectives_hits.text.font = "100 35px Roboto";
        _okg._objectives_hits.text.color = "#FFFFFF";
        _okg._objectives_hits.text.text = _okg._total_hits;
        _okg._objectives_hits.text.x = 90;
        _okg._objectives_hits.text.y = 35;
        _okg._objectives_hits.text.width = 100;
        _okg._objectives_hits.text.textAlign = "center"; 
        _okg._objectives_container.addChild(_okg._objectives_hits.text);
    }
    if(_okg._time_lap !== -1){
        _okg._objectives_hits.icon = new createjs.Bitmap("./pages/dots/assets/chronos_icon_small.png");
        _okg._objectives_hits.icon.x = 0;
        _okg._objectives_container.addChild(_okg._objectives_hits.icon);

        _okg._objectives_hits.text = new createjs.Text();
        _okg._objectives_hits.text.font = "100 35px Roboto";
        _okg._objectives_hits.text.color = "#FFFFFF";
        _okg._objectives_hits.text.text = _okg._time_lap/1000;
        _okg._objectives_hits.text.x = 25;
        _okg._objectives_hits.text.y = 50;
        _okg._objectives_hits.text.width = 100;
        _okg._objectives_hits.text.textAlign = "center"; 
        _okg._objectives_container.addChild(_okg._objectives_hits.text);
        _okg.build_chronos_line();
        /* ------ CREATE RUNNER FOR TIME LAP GAME --------- */
    }
    $.each(_.keys(_okg._objectives), function(i, obk){
        _okg._objectives_texts[obk] = {dot:null, text:null, percent:null};
        _okg._objectives_texts[obk].dot = new createjs.Shape();
        _okg._objectives_texts[obk].dot.graphics.beginFill(colors[obk]);
        _okg.drawShape(_okg._objectives_texts[obk].dot, obk);
        //.drawCircle(0, 0, 15);
        _okg._objectives_texts[obk].dot.y = 25;
        _okg._objectives_texts[obk].dot.x = 100 + (80 * (i));
        _okg._objectives_container.addChild(_okg._objectives_texts[obk].dot);
        
        _okg._objectives_texts[obk].percent = new createjs.Shape();
        _okg._objectives_texts[obk].percent.graphics.setStrokeStyle(3);
        _okg._objectives_texts[obk].percent.graphics.beginStroke(colors[obk]);
        _okg._objectives_texts[obk].percent.graphics.arc(0,0,18,0,0);
        _okg._objectives_texts[obk].percent.y = 25;
        _okg._objectives_texts[obk].percent.x = 100 + (80 * (i));
        _okg._objectives_container.addChild(_okg._objectives_texts[obk].percent);
        
        _okg._objectives_texts[obk].check = new createjs.Bitmap("./pages/dots/assets/check_small.png");
        _okg._objectives_texts[obk].check.y = 10;
        _okg._objectives_texts[obk].check.x = 100 + (80 * (i)) - 15;
        _okg._objectives_texts[obk].check.scaleX = 0;
        _okg._objectives_texts[obk].check.scaleY = 0;
        _okg._objectives_container.addChild(_okg._objectives_texts[obk].check);
        
        _okg._objectives_texts[obk].text = new createjs.Text();
        _okg._objectives_texts[obk].text.font = "100 35px Roboto";
        _okg._objectives_texts[obk].text.color = "#FFFFFF";
        if(_okg._objectives[obk] === -1){
            _okg._objectives_texts[obk].text.text = "0";
        }else{
            _okg._objectives_texts[obk].text.text = "0/"+_okg._objectives[obk];
        }
        _okg._objectives_texts[obk].text.x = 100 + (80 * (i));
        _okg._objectives_texts[obk].text.y = 50;
        _okg._objectives_texts[obk].text.width = 100;
        _okg._objectives_texts[obk].text.textAlign = "center"; 
        _okg._objectives_container.addChild(_okg._objectives_texts[obk].text);
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
    _okg.fivehits = new createjs.Sprite(spriteSheet, "stop");
    _okg.fivehits.regX = _okg.fivehits.regY = 25;
    _okg.fivehits.x = 0;
    _okg.fivehits.y = 45;
    
    _okg._objectives_container.addChild(_okg.fivehits);
}
dots.prototype.build_chronos_line = function(){
    _okg.chronos_line = _okg.stage.addChild(new createjs.Container());
    _okg.chronos_line.regY = 25;
    _okg.chronos_line.y = window.innerHeight;
    _okg.chronos_line_ground = new createjs.Shape();
    _okg.chronos_line_ground.graphics.beginFill('rgba(0,0,0,.3)');
    _okg.chronos_line_ground.graphics.drawRect(0,0,window.innerWidth, 25);
    _okg.chronos_line.addChild(_okg.chronos_line_ground);
    
    _okg.chronos_line_progress = new createjs.Shape();
    _okg.chronos_line_progress.graphics.beginFill('#FFFFFF');
    _okg.chronos_line_progress.graphics.drawRect(0,0,window.innerWidth, 25);
    _okg.chronos_line_progress.scaleX = 0;
    _okg.chronos_line.addChild(_okg.chronos_line_progress);
    
    var data = {
        images: [_okg.okaokarun],
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
    _okg.okaokasprite = new createjs.Sprite(spriteSheet, "run");
    _okg.okaokasprite.scaleX = _okg.okaokasprite.scaleY = .7;
    _okg.okaokasprite.y = -55;
    _okg.okaokasprite.gotoAndStop('stand');
    _okg.chronos_line.addChild(_okg.okaokasprite);   
}
dots.prototype.init_stage = function(){
    $('#dots_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#dots_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    _okg.stage = new createjs.Stage("dots_canvas");
    _okg.stage.autoClear = true;
    _okg.stage.update();
    createjs.Touch.enable(_okg.stage);
    createjs.Ticker.addEventListener("tick", _okg.tick);
}
dots.prototype.stage_down = function(e){
    navigation.set_update_events();
    _okg._is_shape = false;
    _okg._selected_dots = [];
    _okg._full_selected_dots = [];
    _okg.position = {x: e.stageX, y:e.stageY};
    _okg._is_down = true;
}
dots.prototype.stage_up = function(e){
    _okg._is_down = false;
    if(_okg.gameInfo.started){
        if(_okg._is_shape){
            var color = _.findWhere(_okg.dots, {id:_okg._selected_dots[0]}).color;
            _okg.destroy_all_color(_.findWhere(_okg.dots, {id:_okg._selected_dots[0]}).color);
            /* CREATE OVER MOTION WITH SHAPE */
            switch(color){
                case("purple"):
                    _okg.shape_break = new createjs.Bitmap("./pages/dots/images/circle_shape.png");
                    _okg.stage.addChild(_okg.shape_break);
                    //circle
                    break;
                case("green"):
                    // rect
                    _okg.shape_break = new createjs.Bitmap("./pages/dots/images/rect_shape.png");
                    _okg.stage.addChild(_okg.shape_break);
                    break;
                case("pink"):
                    //triangle
                    _okg.shape_break = new createjs.Bitmap("./pages/dots/images/triangle_shape.png");
                    _okg.stage.addChild(_okg.shape_break);
                    break;
                default:
                    break;
            }
            _okg.shape_break.regX = _okg.shape_break.regY = 150;
            _okg.shape_break.x = window.innerWidth/2;
            _okg.shape_break.y = window.innerHeight/2;
            _okg.shape_break.scaleX = _okg.shape_break.scaleY = .2;
            _okg.shape_break.alpha = 1;
            TweenMax.to(_okg.shape_break, 1, {
                scaleX:2, 
                scaleY:2, 
                alpha:0,
                onComplete:function(){
                    _okg.stage.removeChild(_okg.shape_break);
                }
            });
        }else{
            _okg.check_selected_dots();
        }
    }
}
dots.prototype.create_grid = function(){
    _okg.stage.addEventListener("stagemousedown", _okg.stage_down);
    _okg.stage.addEventListener("stagemouseup", _okg.stage_up);
    
    _okg.create_objectives();
    
    _okg._line = new createjs.Shape();
    _okg.stage.addChild(_okg._line);
    
    _okg.grid = _okg.stage.addChild(new createjs.Container());
    //_okg.grid.x = window.innerWidth;
    /*TweenMax.to(_okg._objectives_container, 1, {
        x:(window.innerWidth/2) - ((_okg._grid_size * _okg.grid_size.c)/2) - (_okg._grid_size/2), 
        ease:Power4.easeInOut,
        delay:.2,
        onComplete:function(){
            _okg.gameInfo.start_date = new Date().getTime();
            _okg.okaokasprite.gotoAndPlay('run');
            _okg.gameInfo.started = true;
        }
    });
    TweenMax.to(_okg.grid, 1, {
        x:(window.innerWidth/2) - ((_okg._grid_size * _okg.grid_size.c)/2) - (_okg._grid_size/2), 
        ease:Power4.easeInOut
    });*/
    //_okg.grid.y = -window.innerHeight;
    //TweenMax.to(_okg.grid, 1, {y:0});
    
    _okg._line.x = (window.innerWidth/2) - ((_okg._grid_size * _okg.grid_size.c)/2) - (_okg._grid_size/2);
    _okg.grid.y = _okg._line.y = (window.innerHeight/2) - ((_okg._grid_size * _okg.grid_size.l)/2) - (_okg._grid_size/2);
    
    _okg._objectives_container.y = (window.innerHeight/2) - ((_okg._grid_size * _okg.grid_size.l)/2) - (_okg._grid_size/2) - 60;

    
    var curr = 1;
    var line = 1;
    for(var i=0; i<(_okg.grid_size.c * _okg.grid_size.l); i++){
        var cur = this.dots.length;
        var num_color = Math.round(Math.random()*_.keys(_okg.colors).length-1);
        if(num_color < 0){
            num_color = 0;
        }
        var cur_color = _.keys(_okg.colors)[num_color];
        this.dots[cur] = new createjs.Shape();
        this.dots[cur].graphics.beginFill(colors[cur_color]);
        _okg.drawShape( this.dots[cur], cur_color);
        
        //Set position of Shape instance.
        this.dots[cur].x = _okg._grid_size * (curr);
        this.dots[cur].y = _okg._grid_size * (line);
        this.dots[cur].color = cur_color;
        this.dots[cur].id = _okg.total_dots;
        this.dots[cur].selected  = false;
        this.dots[cur].column = curr;
        this.dots[cur].line = line;
        this.dots[cur].grid_position = {column:curr, line:line};
        this.dots[cur].setBounds(_okg._grid_size * (curr), _okg._grid_size * (line), _okg._grid_size, _okg._grid_size);
        curr++;
        _okg.total_dots++;
        if(curr === _okg.grid_size.c + 1){
            line++;
            curr = 1;
        }
        //this.dots[cur].addEventListener("click", _okg.hit_dot);
        //Add Shape instance to stage display list.
        _okg.grid.addChild(this.dots[cur]);
    }
    _okg.grid.x = (window.innerWidth/2) - ((_okg._grid_size * _okg.grid_size.c)/2) - (_okg._grid_size/2);
    _okg._objectives_container.x = (window.innerWidth/2) - (_okg._objectives_container.getBounds().width/2);
    
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"dots_tuto_popup", buttons:["play"]}, 
        function(e){
            /* have to init gameplay */
            setTimeout(function(){
                _okg.countGround = new createjs.Shape();
                _okg.countGround.graphics.beginFill(navigation._current_interface_color);
                _okg.countGround.graphics.drawCircle(0,0,70);
                _okg.countGround.scaleX = _okg.countGround.scaleY = 0;
                _okg.countGround.x = window.innerWidth/2;
                _okg.countGround.y = window.innerHeight/2;
                TweenMax.to(_okg.countGround, .5, {scaleX:1, scaleY:1});
                
                _okg.stage.addChild(_okg.countGround);
                //_okg.drawShape( this.dots[cur], cur_color); 
                
                _okg.countMotion = new lib["count_3"]();
                _okg.countMotion.regX = 275;
                _okg.countMotion.regY = 200;
                _okg.countMotion.x = window.innerWidth/2;
                _okg.countMotion.y = window.innerHeight/2;
                //_okg.countMotion.shadow = new createjs.Shadow(utilities.colorLuminance(navigation._current_interface_color, -.2), 3, 3, 0);
                _okg.stage.addChild(_okg.countMotion);
                utilities.countCallBack = function(){
                    TweenMax.to(_okg.countGround, .5, {scaleX:0, scaleY:0});
                    _okg.stage.removeChild(_okg.countMotion);
                    _okg.stage.removeChild(_okg.countGround);
                    _okg.gameInfo.start_date = new Date().getTime();
                    _okg.okaokasprite.gotoAndPlay('run');
                    _okg.gameInfo.started = true;
                }
            },800);
        }
    );
    
}
dots.prototype.hit_dot = function(e){
}
dots.prototype.tick = function(){
    if(_okg._is_down){
        var l = _okg.grid.getNumChildren();
        for (var i=0; i<l; i++) {
            var child = _okg.grid.getChildAt(i);
            //child.alpha = 0.1;
            var pt = child.globalToLocal(_okg.stage.mouseX, _okg.stage.mouseY);
            if (_okg.stage.mouseInBounds && child.hitTest(pt.x, pt.y)) { 
                /* ---- SI PAS DE SELECTION COURANTE ---- */
                if(_okg._selected_dots.length === 0){
                    if(typeof _okg._dots_select_0 === "undefined"){
                        audio_manager.play_sound('dots_select_0', 0, function(e){
                            _okg._dots_select_0 = e;
                        });
                    }else{
                        _okg._dots_select_0.play();
                    }
                    _okg._selected_dots.push(child.id);
                    child.selected = true;
                    TweenMax.to(child, .5, {
                        scaleX : 1.2,
                        scaleY : 1.2
                    });
                }else{
                    /* --- on ne pousse pas deux fois le meme dot dans l'array de selection courante ---- */
                    if(!child.selected){
                        var last_dot = _.findWhere(_okg.dots, {id:_okg._selected_dots[_okg._selected_dots.length-1]})
                        //_okg.dots[_okg._selected_dots[_okg._selected_dots.length-1]];
                        /* ------- ON CHECK SI LA COULEUR EST COMPATIBLE AVEC LA SELECTION -------- */
                        if(child.color === last_dot.color){
                            /* ----- SI LA COULEUR EST COMPATIBLE ON CHECK SI LA DISTANCE EST CORRECTE ----- */
                            /* ----- SEULS LES POINTS DE MM COULEUR VERTICAUX OU HORIZONTAUX ET COLLES SONT CORRECTS --- */
                            var pl  = {x:last_dot.x, y:last_dot.y};
                            var pc = {x:child.x, y:child.y};
                            var distance = Math.sqrt( (pl.x-pc.x)*(pl.x-pc.x) + (pl.y-pc.y)*(pl.y-pc.y) );
                            if(distance <= _okg._grid_size){
                                child.selected = true;
                                _okg._selected_dots.push(child.id);
                                
                                var sound_id = _okg._selected_dots.length;
                                if(sound_id >= 10){
                                    sound_id=10;
                                }
                                if(typeof _okg['_dots_select_'+sound_id] === "undefined"){
                                    audio_manager.play_sound('dots_select_'+sound_id, 0, function(e){                                        _okg['_dots_select_'+sound_id] = e;
                                    });
                                }else{
                                    _okg['_dots_select_'+sound_id].play();
                                }
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
                        /* --- on check si un rectangle est dessiné _selected_dots > 3 && child === first selected dot --- */
                        if(child.id !== _okg._selected_dots[_okg._selected_dots.length-1]){
                            if(_okg._selected_dots.length >= 4 && _okg.is_a_shape(child.id) && distance <= _okg._grid_size){
             
                                audio_manager.play_sound('dots_select_shape', 0, function(e){                                               _okg['dots_select_shape'] = e;
                                });
                                //_okg._is_down = false;
                                _okg._is_shape = true;
                                _okg._selected_dots.push(child.id);
                            }
                        }
                    }
                }
            }
            child = null;
            pt = null;
        }
        l = null;
        delete l;
        
        _okg.redraw_line_selection();
    }
    /* on check si le jeu est basé sur du temps */
    if(_okg.gameInfo.started){
        if(_okg._time_lap !== -1){
            /* on met à jour le temps de la partie */
            var now = new Date().getTime();
            var elapsed = now - _okg.gameInfo.start_date;
            var rest = (_okg._time_lap - elapsed);
            _okg._objectives_hits.text.text = Math.ceil(rest/1000);
            /* CHECKING TIME AND RENDER BAR + CHRONOS _okg.party.start */
            var percent_progress = 100 - ((rest * 100 ) / _okg._time_lap);
            _okg.chronos_line_progress.scaleX = percent_progress / 100;
            _okg.okaokasprite.x = (window.innerWidth) * (percent_progress/ 100) - 50;
            /* on check si il reste du temps */
            if(Math.ceil(rest/1000) === 5){
                _okg.fivehits.gotoAndPlay('hit');
                if(typeof _okg.five_last_sound === "undefined"){
                    audio_manager.play_sound('chronos_five_seconds', 0, function(e){
                        _okg.five_last_sound = e;
                    });
                }
            }
            if(rest <= 0){
                audio_manager.play_sound('chronos_end', 0, function(e){});
                /* si le temps est écoulé c'est la fin de la partie */
                _okg.gameInfo.started = false;
                _okg.okaokasprite.gotoAndStop('stand');
                _okg.fivehits.gotoAndStop('stop');
                _okg.end_game();
            }
        }
    }
    _okg.update_particles();
    _okg.stage.update();
}
dots.prototype.end_game = function(){
    audio_manager.play_sound('dots_end_game', 0, function(e){});
    _okg.gameInfo.started = false;
    _okg.okaokasprite.gotoAndStop("stop");
    _okg._line.graphics.clear();
    TweenMax.to(_okg.chronos_line, .5, {
        y:window.innerHeight + 100,
        ease:Power4.easeIn
    });
    for(var i=0; i<_okg.grid.getNumChildren(); i++){
        var xpos = -(_okg.grid.x) + Math.random()*window.innerWidth;
        var ypos = _okg.grid.getChildAt(i).y;
        TweenMax.to(_okg.grid.getChildAt(i), .5, {
            y:ypos+window.innerHeight,
            delay:0.02*(_okg.grid.getNumChildren()-i),
            ease:Power4.easeIn
        });
    }
    TweenMax.to(_okg._objectives_container, .5, {
        y       : window.innerHeight/2 - (_okg._objectives_container.getBounds().height/2),
        x       : (window.innerWidth/2) - (_okg._objectives_container.getBounds().width/2),
        delay   : (0.02 * _okg.dots.length),
        ease    : Power4.easeIn,
        onComplete : function(){
            _okg.stage.removeChild(_okg.grid);
            utilities.create_over_motion({
                size:{width:400, height:200},
                position:{x:((window.innerWidth/2)-200), y:((window.innerHeight/2) - 265)},
                motion:"winning_dance_top_motion"
            }, function(){
            });
            createjs.Ticker.setFPS(30);
            _okg.total_score_text = new createjs.Text();
            _okg.total_score_text.font = "700 100px Roboto";
            _okg.total_score_text.color = "#FFFFFF";
            _okg.total_score_text.text = "00000";
            _okg.total_score_text.textAlign = "center";
            _okg.total_score_text.x = window.innerWidth/2;
            _okg.total_score_text.y = _okg._objectives_container.y + _okg._objectives_container.getBounds().height;
            _okg.stage.addChild(_okg.total_score_text);
            var score = 0;
            $.each(_.keys(_okg._completed_objectives), function(i, key){
                score+= parseInt(_okg._completed_objectives[key].count);
            });
            var bonus = score * _okg._hits;
            var total_score = score + bonus;
            var scored = {total:0};
            audio_manager.play_sound('total_count', 0, function(e){});
            TweenMax.to(scored, 2.5, {
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
                    _okg.total_score_text.text = score;
                },
                ease:Power4.easeOut,
                onComplete:function(){
                    _okg.replay_button = new createjs.Bitmap("./images/assets/btn_replay.png");
                    _okg.replay_button.x = window.innerWidth/2 + 70;
                    _okg.replay_button.y = _okg.total_score_text.y + _okg.total_score_text.getBounds().height + 70;
                    _okg.replay_button.regX = _okg.replay_button.regY = 50;
                    _okg.replay_button.scaleX = _okg.replay_button.scaleY = 0;
                    
                    _okg.stats_button = new createjs.Bitmap("./images/assets/btn_podium.png");
                    _okg.stats_button.x = window.innerWidth/2 - 70;
                    _okg.stats_button.y = _okg.total_score_text.y + _okg.total_score_text.getBounds().height + 70;
                    _okg.stats_button.regX = _okg.stats_button.regY = 50;
                    _okg.stats_button.scaleX = _okg.stats_button.scaleY = 0;
                    
                    if(typeof _node === "undefined"){
                        _node = new node_utilities();   
                    }
                    
                    var hitAreaG = new createjs.Graphics();
                    hitAreaG.beginFill(navigation._current_interface_color);
                    hitAreaG.drawCircle(50, 50, 50);
                    hitAreaG.endFill();
                    _okg.replay_button.hitArea = new createjs.Shape(hitAreaG);
                    _okg.stats_button.hitArea = new createjs.Shape(hitAreaG);
                    
                    utilities.save_score_game('dots', total_score);
                    
                    _okg.replay_button.addEventListener("click", function(event) { 
                        window.location.href =  "#page/"+navigation._current_page_name+"/intro/false/date/"+new Date().getTime();
                    });
                    _okg.stats_button.addEventListener("click", function(event) { 
                        utilities.show_score_game('dots', total_score);
                    });
                    TweenMax.to(_okg.replay_button, .5, {
                        scaleX:1,
                        scaleY:1
                    });
                    TweenMax.to(_okg.stats_button, .5, {
                        scaleX:1,
                        scaleY:1,
                        delay:.2
                    });
                    _okg.stage.addChild(_okg.replay_button);
                    _okg.stage.addChild(_okg.stats_button);
                    
                    score = bonus = total_score = scored = hitAreaG = null;

                }
            });
        }
    });
}   
dots.prototype.is_a_shape = function(id){
    for(var i=0; i<_okg._selected_dots.length-3; i++){
        if(_okg._selected_dots[i] === id){
            return true;
        }
    }
    return false;
}
dots.prototype.destroy_all_color = function(color){
    _okg._full_selected_dots = [];
    var l = _okg.grid.getNumChildren();
    for (var i=l-1; i>=0; i--) {
        var child = _okg.grid.getChildAt(i);
        if(child.color === color){
            _okg._full_selected_dots.push(child.id);
            TweenMax.to(child, .5, {
                scaleX : 1.2,
                scaleY : 1.2
            });
        }
        child = null;
    }
    l = null;
    _okg.check_selected_dots();
}
dots.prototype.check_selected_dots = function(){
    /* ------ on Check si une suite est effectuée ----- */
    if(_okg._selected_dots.length > 1){
        _okg._hits++;
        var to_remove = _okg._selected_dots;
        if(_okg._full_selected_dots.length > _okg._selected_dots.length){
            to_remove = _okg._full_selected_dots;
        }
        var first_dot = _.findWhere(_okg.dots, {id:to_remove[0]});
        if(typeof first_dot !== "undefined"){
            if(typeof _okg._completed_objectives[first_dot.color] !== "undefined"){
                _okg._completed_objectives[first_dot.color].count += parseInt(to_remove.length);
                _okg._completed_objectives[first_dot.color].percent = (_okg._completed_objectives[first_dot.color].count * 100) / _okg._objectives[first_dot.color];
            }else{
                _okg._completed_objectives[first_dot.color] = {percent:0, count:0};
                _okg._completed_objectives[first_dot.color].count = to_remove.length;
            }
            /* ---- Si on a une suite on joue une anim puis on detruit les dots ---- */
            TweenMax.set($('#colorer'), {backgroundColor:_okg.colors[first_dot.color]});
            var border = {size:_okg._dot_size};
            TweenMax.to(border, .3, {size:1, onUpdate:function(){
                _okg.redraw_line_selection(border.size, $('#colorer').css('background-color'));
            }, onComplete:function(){
                TweenMax.to($('#colorer'), .3, {backgroundColor:'#FFFFFF', onUpdate:function(){
                    for(var i=0; i<to_remove.length; i++){
                        var dot = _.findWhere(_okg.dots, {id:to_remove[i]});
                        if(typeof dot!=="undefined"){
                            _okg.set_dot_color(dot, $('#colorer').css('background-color'), first_dot.color);
                            _okg.redraw_line_selection(border.size, $('#colorer').css('background-color'));
                        }
                    }
                }, onComplete:function(){
                    _okg._line.graphics.clear();
                    /* ---- Ensuite on replace les dots des lignes supérieures ---- */
                    for(var i=0; i<to_remove.length; i++){
                        var dot = _.findWhere(_okg.dots, {id:to_remove[i]});
                        if(typeof dot !== "undefined"){
                            _okg.grid.removeChild(dot);
                            _okg.dots = _.reject(_okg.dots, {id:to_remove[i]});
                        }
                    }
                    /* ---- Puis on ajoute de nouveaux dots par le haut pour compbler les trous ---- */
                    _okg.replace_dots(0);
                }});
            }});
        }
    }else{
        for(var i=0; i<_okg._selected_dots.length; i++){
            var dot = _.findWhere(_okg.dots, {id:_okg._selected_dots[i]});
            TweenMax.to(dot, .5, {
                scaleX : 1,
                scaleY : 1
            });
            dot.selected = false;
        }
    }
    _okg._line.graphics.clear();
}
dots.prototype.replace_dots = function(num){
    var l = _okg.grid.getNumChildren();
    for (var i=l-1; i>=0; i--) {
        var child = _okg.grid.getChildAt(i);
        if(child.line < _okg.grid_size.l){
            var next_exist = _.findWhere(_okg.dots, {line:child.line+1, column:child.column});
            if(typeof next_exist === "undefined"){
                child.line += 1;
                child.setBounds(_okg._grid_size * child.column, _okg._grid_size * child.line, _okg._grid_size, _okg._grid_size);
            }
        }
    }
    if(num < _okg.grid_size.l){
        _okg.replace_dots(num+1);   
    }else{
        for (var i=l-1; i>=0; i--) {
            var child = _okg.grid.getChildAt(i);
            TweenMax.to(child, .5, {
                y : child.line * _okg._grid_size,
                ease : Bounce.easeOut
            });
        }
        setTimeout(function(){
            _okg.check_game_state(function(status){
                switch(status.label){
                    case "continu":
                        _okg.complete_grid();
                        break;
                    case "win":
                        /* --- ouverture de la pop up winner --- */
                        /* --- Choix 1 retour au menu principal --- */
                        _okg.destroy_grid();
                        _okg.open_nav();
                        /* --- Choix 2 Level Suivant --- */
                        break;
                    case "lose":
                        /* --- ouverture de la pop up loser --- */
                        /* --- Choix 1 retour au menu principal --- */
                        _okg.destroy_grid();
                        _okg.open_nav();
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
    if(_okg._total_hits !== -1){
        var _objectives_infos = {total:_.keys(_okg._objectives).length, completed:0};
        /* --- On check si les objectifs sont remplis et on met à jour la partie objectifs ----- */
        _okg._objectives_hits.text.text = _okg._total_hits - _okg._hits;
        /* on check les objectivfs un par un */
        $.each(_.keys(_okg._objectives), function(i, obk){
            if(_okg._completed_objectives[obk].count >= _okg._objectives[obk]){
                _okg._objectives_texts[obk].percent.graphics.clear();
                _okg._objectives_texts[obk].percent.graphics.setStrokeStyle(3);
                _okg._objectives_texts[obk].percent.graphics.beginStroke(colors[obk]);
                _okg._objectives_texts[obk].percent.graphics.arc(0,0,16,0,6);

                _okg._objectives_texts[obk].text.text = _okg._objectives[obk];

                TweenMax.to(_okg._objectives_texts[obk].dot, .2, {scaleX:2, scaleY:2, ease:Back.easeOut});
                TweenMax.to(_okg._objectives_texts[obk].check, .2, {scaleX:1, scaleY:1, delay:.1, ease:Back.easeOut});

                _objectives_infos.completed++;
            }else{
                _okg._objectives_texts[obk].percent.graphics.clear();
                _okg._objectives_texts[obk].percent.graphics.setStrokeStyle(3);
                _okg._objectives_texts[obk].percent.graphics.beginStroke(colors[obk]);
                var angle = (6 * _okg._completed_objectives[obk].percent)/100;
                _okg._objectives_texts[obk].percent.graphics.arc(0,0,16,0,angle);

                _okg._objectives_texts[obk].text.text = _okg._completed_objectives[obk].count+"/"+_okg._objectives[obk];
            }
        });
        /* --- si les objectifs sont remplis on gagne ---- */
        if(_objectives_infos.total === _objectives_infos.completed){
            /* --- on a rempli tous les objectifs du level on gagne ---- */
            status.label = "win";
            status.objectifs = true;
        }
        /* --- On check s'il reste des hits et on met à jour les hits ------- */
        if(_okg._total_hits - _okg._hits <= 5 && _okg._total_hits - _okg._hits > 0){
            _okg.fivehits.gotoAndPlay('hit');
            audio_manager.play_sound('chronos_five_seconds', 0, function(e){});
        }else{
            _okg.fivehits.gotoAndStop('stop');
        }
        if(_okg._total_hits - _okg._hits <= 0){
            if(status.objectifs === false){
                status.label = "lose";
            }
            status.hits = false;
        }
    }
    /* on check si le jeu est basé sur du temps */
    if(_okg.gameInfo.started){
        if(_okg._time_lap !== -1){
            $.each(_.keys(_okg._objectives), function(i, obk){
                _okg._objectives_texts[obk].text.text = _okg._completed_objectives[obk].count;
            });
            /* on met à jour le temps de la partie */
            var elapsed = new Date().getTime() - _okg.gameInfo.start_date;
            var time = Math.ceil((_okg._time_lap - elapsed)/1000);
            /* si le temps restant est inférieur à 10 sec on affiche le fivehits */
            if(time < 10){
                _okg.fivehits.gotoAndPlay('hit');
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
    for(var i=0; i<(_okg.grid_size.c * _okg.grid_size.l); i++){
        if(typeof _.findWhere(_okg.dots, {column:curr, line:line}) === "undefined"){
            var cur = this.dots.length;
            var num_color = Math.ceil(Math.random()*_.keys(_okg.colors).length-1);
            if(num_color < 0){
                num_color = 0;
            }
            var cur_color = _.keys(_okg.colors)[num_color];
            this.dots[cur] = new createjs.Shape();
            this.dots[cur].graphics.beginFill(colors[cur_color]);
            _okg.drawShape( this.dots[cur], cur_color);
        
            //this.dots[cur].graphics.beginFill(colors[cur_color]).drawCircle(0, 0, _okg._dot_size);
            //Set position of Shape instance.
            this.dots[cur].x = _okg._grid_size * (curr);
            this.dots[cur].y = _okg._grid_size * (line);
            this.dots[cur].color = cur_color;
            this.dots[cur].id = _okg.total_dots;
            this.dots[cur].selected  = false;
            this.dots[cur].column = curr;
            this.dots[cur].line = line;
            this.dots[cur].grid_position = {column:curr, line:line};
            this.dots[cur].setBounds(_okg._grid_size * (curr), _okg._grid_size * (line), _okg._grid_size, _okg._grid_size);
            _okg.grid.addChild(this.dots[cur]);
            TweenMax.set(this.dots[cur], {scaleX:0, scaleY:0});
            TweenMax.to(this.dots[cur], .4, {scaleX:1, scaleY:1, delay:added_new*.02, ease:Back.easeOut});
            added_new++;
        }
        
        curr++;
        _okg.total_dots++;
        if(curr === _okg.grid_size.c+1){
            line++;
            curr = 1;
        }
    }
}
dots.prototype.redraw_line_selection = function(size, color){
    if(!size){
        size = _okg._dot_size*1.2;
    }
    if(!_okg.gameInfo.started){
        return false;
    }
    if(!color){
        var obj_color = _.findWhere(_okg.dots, {id:_okg._selected_dots[0]});
        if(typeof obj_color !== "undefined"){
            color = _okg.colors[_.findWhere(_okg.dots, {id:_okg._selected_dots[0]}).color];
        }else{
            color = "#FFFFFF";
        }
    }else{
        if(color.indexOf('#') === -1){
            color = rgb2hex(color);
        }
    }
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
dots.prototype.set_dot_color = function(target, color, original_color){
    target.graphics.clear();
    target.graphics.beginFill(color);
    _okg.drawShape(target, original_color, color);
    //.drawCircle(0, 0, _okg._dot_size)
}
dots.prototype.load_level = function(lvl){
    _okg.init_stage();
    if(_okg.grid){
        //TweenMax.to(_okg.grid_ground, .5, {scaleX:0, scaleY:0});
        TweenMax.to(_okg._line, .5, {scaleX:0, scaleY:0});
        TweenMax.to(_okg.grid, .5, {scaleX:0, scaleY:0});
        //_okg.stage.removeChild(_okg.grid_ground);
        _okg.stage.removeChild(_okg._line);
        _okg.stage.removeChild(_okg.grid);
    }
    $.ajax({
        dataType: "json",
        url: './pages/dots/levels/level_'+lvl+'.json',
        data: {},
        success: function(datas){
            _okg._levels = datas;
            _okg.build_decors();
            _okg.create_particles();
            _okg.select_level(0);
            //_okg.build_navigation();
        }
    });
}
dots.prototype.select_level = function(id){
    var datas = _okg._levels[id];
    _okg._grid_size = datas._grid_size;
    _okg.colors     = {};
    $.each(datas.colors, function(i,cl){
        _okg.colors[datas.colors[i]] = colors[datas.colors[i]];
    });
    _okg._dot_size      = datas.dot_size;
    _okg.grid_size      = datas.grid_size;
    _okg._total_hits    = datas.hits;
    _okg._time_lap      = datas.time;
    _okg._hits          = 0;
    _okg._objectives    = datas.objectives;
    _okg._completed_objectives     = {};
    $.each(_.keys(datas.objectives), function(o, obk){
        _okg._completed_objectives[obk] = {count:0, percent:0};
    });
    TweenMax.to($('.app_content'), .5, {backgroundColor:colors[datas.color]});
    TweenMax.to($('#backbutton'), .5, {backgroundColor:colors[datas.color]});
    _okg.create_objectives_popup();
    _okg.create_grid();
}
dots.prototype.create_objectives_popup = function(){
       
}
dots.prototype.destroy_grid = function(){
    TweenMax.to(_okg._objectives_container, 1, {
        x:window.innerWidth,
        ease:Power4.easeInOut
    });
    TweenMax.to(_okg.grid, 1, {
        x:window.innerWidth,
        ease:Power4.easeInOut,
        onComplete:function(){
            var l = _okg.grid.getNumChildren();
            for (var i=0; i<l; i++) {
                _okg.dots = _.reject(_okg.dots, {id:_okg.grid.getChildAt(i).id});
                //_okg.grid.removeChild(_okg.grid.getChildAt(i));
            }
            _okg.stage.removeChild(_okg.grid);
            _okg.stage.removeChild(_okg._objectives_container);
        }
    });
}
dots.prototype.open_nav = function(){
    _okg._nav_is_open = true;
    _okg.stage.removeEventListener("stagemousedown");
    _okg.stage.removeEventListener("stagemouseup");
    var offset = new createjs.Point();
    var start_point = {x:0, y:0};
    _okg.stage.addEventListener("pressup", function (evt) {
        if(_okg._nav_is_open){
            _okg.replace_decors();
            if(_okg._navigation.container.y > (_okg._navigation.container.getBounds().height - (window.innerHeight / 2))){
                TweenMax.to(_okg._navigation.container, 1, {
                    y : (_okg._navigation.container.getBounds().height - (window.innerHeight / 2)), 
                    ease:Power4.easeInOut,
                    onUpdate : function(){
                        _okg.replace_decors();   
                    }
                });
            }
            if(_okg._navigation.container.y < -(_okg._navigation.container.getBounds().height + _okg._navigation.container.getBounds().y - (window.innerHeight / 2))){
                TweenMax.to(_okg._navigation.container, 1, {
                    y : -(_okg._navigation.container.getBounds().height + _okg._navigation.container.getBounds().y - (window.innerHeight / 2)), 
                    ease:Power4.easeInOut,
                    onUpdate : function(){
                        _okg.replace_decors();   
                    }
                });
            }
        }
    });
    _okg.stage.addEventListener("mousedown", function (evt) {
		if(_okg._nav_is_open){
            start_point = {x: evt.stageX, y: evt.stageY, default_pos:_okg._navigation.container.y};
        }
	});
    _okg.stage.addEventListener("pressmove", function (evt) {
        if(_okg._nav_is_open){
            //_okg._navigation.container.y = $('.scroller').position().top;
            _okg._navigation.container.y = start_point.default_pos + (evt.stageY - start_point.y)/1.2;
            _okg.replace_decors();
        }
    });
    TweenMax.to(_okg._navigation.container, 1, {x:0, ease : Power4.easeInOut});
}
dots.prototype.close_nav = function(){
    _okg._nav_is_open = false;
    _okg.stage.removeEventListener("pressup");
    _okg.stage.removeEventListener("mousedown");
    _okg.stage.removeEventListener("pressmove");
    TweenMax.to(_okg._navigation.container, 1, {x:-window.innerWidth, ease : Power4.easeInOut});
}
dots.prototype.build_decors = function(){
    _okg.decors = {container:null, bottom_left:null, bottom_right:null, bottom_center:null, watter:null, elements:{}};
    
    _okg.decors.container = _okg.stage.addChild(new createjs.Container());
    
    _okg.decors.bottom_left = new createjs.Bitmap("./pages/dots/images/decors/bottom_left.png");
    _okg.decors.container.addChild(_okg.decors.bottom_left);
    
    _okg.decors.bottom_right = new createjs.Bitmap("./pages/dots/images/decors/bottom_right.png");
    _okg.decors.container.addChild(_okg.decors.bottom_right);
    
    _okg.decors.bottom_center = new createjs.Bitmap("./pages/dots/images/decors/bottom_center.png");
    _okg.decors.container.addChild(_okg.decors.bottom_center);
    
    _okg.decors.bottom_left.scaleX = _okg.decors.bottom_left.scaleY = _okg.decors.bottom_right.scaleX = _okg.decors.bottom_right.scaleY = _okg.decors.bottom_center.scaleX = _okg.decors.bottom_center.scaleY = 0;
    
    /*_okg.decors.watter = new createjs.Bitmap("./pages/dots/images/decors/watter_white.png");
    _okg.decors.watter.x = -100;
    _okg.decors.watter.y = window.innerHeight + 300;
    _okg.decors.container.addChild(_okg.decors.watter);
    
    TweenMax.to(_okg.decors.watter, 1, {
        y:window.innerHeight-40,
        delay:1
    });*/
    
    /*_okg.decors.elements['square'] = new createjs.Bitmap("./pages/dots/images/decors/square_green.png");
    _okg.decors.elements['square'].x = window.innerWidth/2 - 250;
    _okg.decors.elements['square'].y = 400;
    _okg.decors.elements['square'].level = 2;
    _okg.decors.container.addChild(_okg.decors.elements['square']);
    _okg.decors.elements.square.regX = _okg.decors.elements.square.regY = 50;
    TweenMax.to(_okg.decors.elements['square'], 12, {
        rotation:360,
        rotation:360,
        repeat:-1,
        ease:Linear.easeInOut
    });
    
    _okg.decors.elements['triangle_pink'] = new createjs.Bitmap("./pages/dots/images/decors/triangle_pink.png");
    _okg.decors.elements['triangle_pink'].x = 250;
    _okg.decors.elements['triangle_pink'].y = 0;
    _okg.decors.elements['triangle_pink'].level = 1;
    _okg.decors.container.addChild(_okg.decors.elements['triangle_pink']);
    _okg.decors.elements.triangle_pink.regX = _okg.decors.elements.triangle_pink.regY = 50;
    TweenMax.to(_okg.decors.elements['triangle_pink'], 24, {
        rotation:360,
        repeat:-1,
        ease:Linear.easeInOut
    });
    
    _okg.decors.elements['wave_pink'] = new createjs.Bitmap("./pages/dots/images/decors/wave_pink.png");
    _okg.decors.elements['wave_pink'].x = window.innerWidth/2 + 330;
    _okg.decors.elements['wave_pink'].y = 225;
    _okg.decors.elements['wave_pink'].level = 2;
    _okg.decors.container.addChild(_okg.decors.elements['wave_pink']);
    _okg.decors.elements.wave_pink.regX = _okg.decors.elements.wave_pink.regY = 50;*/
    /*TweenMax.to(_okg.decors.elements['wave_pink'], 5, {
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
    
    /*_okg.decors.elements['circular_green'] = new createjs.Bitmap("./pages/dots/images/decors/circular_green.png");
    _okg.decors.elements['circular_green'].x = window.innerWidth - 150;
    _okg.decors.elements['circular_green'].y = window.innerHeight - 200;
    _okg.decors.elements['circular_green'].level = 3;
    _okg.decors.container.addChild(_okg.decors.elements['circular_green']);
    _okg.decors.elements.circular_green.regX = _okg.decors.elements.circular_green.regY = 100;
    TweenMax.to(_okg.decors.elements['circular_green'], 35, {
        rotation:360,
        repeat:-1,
        ease:Linear.easeInOut
    });
    
    _okg.decors.elements['herisson_green'] = new createjs.Bitmap("./pages/dots/images/decors/herisson_green.png");
    _okg.decors.elements['herisson_green'].x = window.innerWidth - 250;
    _okg.decors.elements['herisson_green'].y = -280;
    _okg.decors.elements['herisson_green'].level = 4;
    _okg.decors.container.addChild(_okg.decors.elements['herisson_green']);
    _okg.decors.elements.herisson_green.regX = _okg.decors.elements.herisson_green.regY = 78;
    TweenMax.to(_okg.decors.elements['herisson_green'], 8, {
        rotation:360,
        repeat:-1,
        ease:Linear.easeInOut
    });*/
    
    
    setTimeout(function(){
        _okg.decors.bottom_left.regY = _okg.decors.bottom_left.getBounds().height;
        _okg.decors.bottom_left.y = window.innerHeight + 300;
        _okg.decors.bottom_left.regX = 0;
        
        _okg.decors.bottom_right.regX = _okg.decors.bottom_right.getBounds().width;
        _okg.decors.bottom_right.regY = _okg.decors.bottom_right.getBounds().height;
        _okg.decors.bottom_right.x = window.innerWidth;
        _okg.decors.bottom_right.y = window.innerHeight + 300;
        
        _okg.decors.bottom_center.regX = _okg.decors.bottom_center.getBounds().width/2;
        _okg.decors.bottom_center.regY = _okg.decors.bottom_center.getBounds().height;
        _okg.decors.bottom_center.x = window.innerWidth/2;
        _okg.decors.bottom_center.y = window.innerHeight + 300;
        
        var updt = {scale:0}
        TweenMax.to(updt, 1, {scale:1, onUpdate:function(){
            _okg.decors.bottom_left.scaleX = _okg.decors.bottom_left.scaleY = _okg.decors.bottom_right.scaleX = _okg.decors.bottom_right.scaleY = _okg.decors.bottom_center.scaleX = _okg.decors.bottom_center.scaleY = updt.scale;
        }, delay:1});
        _okg.replace_decors();
    }, 500);
}
dots.prototype.create_particles = function(){
    _okg.particles_container = _okg.stage.addChild(new createjs.Container());
    for(var i=0; i<25; i++){
        _okg.particles[i] = new createjs.Shape();
        _okg.particles[i].graphics.beginFill("#FFFFFF").drawCircle(0, 0, Math.round(Math.random()*5)+1);
        _okg.particles[i].x = Math.random()*window.innerWidth;
        _okg.particles[i].y = Math.random()*window.innerHeight;   
        _okg.particles[i].alpha = .1 + Math.random()*1;
        _okg.particles_container.addChild(_okg.particles[i]);
    }
}
dots.prototype.redraw_particles = function(){
    
}
dots.prototype.update_particles = function(){
    var W = window.innerWidth;
    var H = window.innerWidth;
    _okg.angle += 0.01;
	for(var i = 0; i < _okg.particles.length; i++)
	{
		var p = _okg.particles[i];
		p.y += Math.cos(_okg.angle) + 1;
		p.x += Math.sin(_okg.angle) * 2;
        if(p.x > W+5 || p.x < -5 || p.y > H)
		{
			if(i%3 > 0) //66.67% of the flakes
			{
				_okg.particles[i].x = Math.random()*W;
                _okg.particles[i].y = -10;
                //, r: p.r, d: p.d};
			}
			else
			{
				if(Math.sin(_okg.angle) > 0)
				{
					_okg.particles[i].x = -5;
                    _okg.particles[i].y = Math.random()*H;
                    //, r: p.r, d: p.d};
				}
				else
				{
					_okg.particles[i].x = W+5;
                    _okg.particles[i].y = Math.random()*H;
                    //, r: p.r, d: p.d};
				}
			}
		}
	}
	   
}
dots.prototype.replace_decors = function(){
    // set _okg.decors.container relative to _okg._navigation.container.y
    //_okg.decors.container.y = _okg._navigation.container.y / 2;
    //_okg.decors.bottom_center.y = -(_okg.decors.container.y) / 2 + window.innerHeight + 300;
    /*for(var i=0; i<_.keys(_okg.decors.elements).length; i++){
        _okg.decors.elements[_.keys(_okg.decors.elements)[i]].y = -(_okg.decors.container.y) / _okg.decors.elements[_.keys(_okg.decors.elements)[i]].level;
    }*/
}
dots.prototype.build_navigation = function(){
    _okg.hit_zone = new createjs.Shape();
    _okg.hit_zone.graphics.beginFill(colors['yellow']).drawRect(0,0,window.innerWidth, window.innerHeight);
    _okg.stage.addChild(_okg.hit_zone);
    _okg.hit_zone.alpha = 0.01;
    
    _okg._navigation = {container:null, buttons:{}, line:null};
    _okg._navigation.container = _okg.stage.addChild(new createjs.Container());
    _okg._navigation.line = new createjs.Shape();
    _okg._navigation.line.graphics.setStrokeStyle(40, "round", "round");
    _okg._navigation.line.graphics.beginStroke("#FFF");
    _okg._navigation.line.graphics.moveTo(window.innerWidth/2, (window.innerHeight - 125));
    _okg._navigation.line.graphics.lineTo(
        window.innerWidth/2, 
        (window.innerHeight - 50) - (125 * _.keys(_okg._levels).length)
    );
    _okg._navigation.container.addChild(_okg._navigation.line);
    //_okg._navigation.line.scaleX = 0;
    _okg.stage.enableMouseOver(20);
    _okg.stage.mouseMoveOutside = true;
    
    $.each(_.keys(_okg._levels), function(i, lvl){
        _okg._navigation.buttons[lvl] = {container:null, dot:null, text:null, percent:null};
        _okg._navigation.buttons[lvl].container = _okg._navigation.container.addChild(new createjs.Container());
        _okg._navigation.buttons[lvl].container.y = (window.innerHeight - 125) - (150 * i);
        _okg._navigation.buttons[lvl].container.x = window.innerWidth/2;
        _okg._navigation.buttons[lvl].container.id = lvl;
        _okg._navigation.buttons[lvl].container.scaleX = 0;
        _okg._navigation.buttons[lvl].container.scaleY = 0;
            
        _okg._navigation.buttons[lvl].dot = new createjs.Shape();
        _okg._navigation.buttons[lvl].dot.graphics.setStrokeStyle(20);
        _okg._navigation.buttons[lvl].dot.graphics.beginStroke("#FFF");
        _okg._navigation.buttons[lvl].dot.graphics.beginFill(colors[_okg._levels[lvl].color]).drawCircle(0, 0, 50);
        _okg._navigation.buttons[lvl].dot.y = 30;
        //_okg._navigation.buttons[lvl].dot.x = window.innerWidth/2 - 50;
        _okg._navigation.buttons[lvl].dot.id = lvl;
        
        
        _okg._navigation.buttons[lvl].text = new createjs.Text();
        _okg._navigation.buttons[lvl].text.font = "700 50px Roboto";
        _okg._navigation.buttons[lvl].text.color = "#FFFFFF";
        _okg._navigation.buttons[lvl].text.text = lvl;
        //_okg._navigation.buttons[lvl].text.x = window.innerWidth/2 - 50;
        //_okg._navigation.buttons[lvl].text.y = (window.innerHeight - 155) - (150 * i);
        _okg._navigation.buttons[lvl].text.width = 100;
        _okg._navigation.buttons[lvl].text.textAlign = "center"; 
        
        _okg._navigation.buttons[lvl].container.addChild(_okg._navigation.buttons[lvl].dot);
        _okg._navigation.buttons[lvl].container.addChild(_okg._navigation.buttons[lvl].text);
        
        _okg._navigation.buttons[lvl].container.addEventListener("mousedown", function(e){
            TweenMax.to(_okg._navigation.buttons[e.currentTarget.id].dot, .3, {scaleX:1.3, scaleY:1.3, ease:Back.easeOut});
        });
        _okg._navigation.buttons[lvl].container.addEventListener("mouseover", function(e){
            TweenMax.to(_okg._navigation.buttons[e.currentTarget.id].dot, .3, {scaleX:1.3, scaleY:1.3, ease:Back.easeOut});
        });
        _okg._navigation.buttons[lvl].container.addEventListener("mouseup", function(e){
            for(var i=0; i<_.keys(_okg._navigation.buttons).length; i++){
                TweenMax.to(
                    _okg._navigation.buttons[_.keys(_okg._navigation.buttons)[i]],
                    .3, 
                    {scaleX:1, scaleY:1}
                ); 
            }
        });
        _okg._navigation.buttons[lvl].container.addEventListener("mouseout", function(e){
            TweenMax.to(_okg._navigation.buttons[e.currentTarget.id].dot, .3, {scaleX:1, scaleY:1}); 
        });
        _okg._navigation.buttons[lvl].container.addEventListener("click", function(e){
            _okg.close_nav();
            _okg.select_level(e.currentTarget.id);
        });
        TweenMax.to(_okg._navigation.buttons[lvl].container, .6, {
            scaleX:1,
            scaleY:1,
            ease:Back.easeOut,
            delay:(.1*i)
        });
    });
    _okg._navigation.container.y = -(_okg._navigation.container.getBounds().height + _okg._navigation.container.getBounds().y - (window.innerHeight / 2));
    _okg.open_nav();
    //_okg.intro_hand();
}
dots.prototype.intro_hand = function(){
    var hand = new createjs.Bitmap("./pages/dots/images/decors/hand.png");
    hand.x = window.innerWidth;
    hand.y = window.innerHeight;
    _okg.stage.addChild(hand);
    TweenMax.to(hand, 1, {
        y:window.innerHeight/2, 
        x:window.innerWidth/2 + 200,
        onComplete:function(){
            TweenMax.to(hand, 1, {
                y:window.innerHeight/2 + 250, 
                x:window.innerWidth/2 + 200,
                onUpdate : function(){
                    _okg._navigation.container.y = (hand.y - window.innerHeight/2) -(_okg._navigation.container.getBounds().height + _okg._navigation.container.getBounds().y - (window.innerHeight / 2));
                    _okg.replace_decors();
                },
                onComplete:function(){
                    TweenMax.to(hand, 1, {
                        y:window.innerHeight/2 - 250, 
                        x:window.innerWidth/2 + 200,
                        onUpdate : function(){
                            _okg._navigation.container.y = (hand.y - window.innerHeight/2) -(_okg._navigation.container.getBounds().height + _okg._navigation.container.getBounds().y - (window.innerHeight / 2));
                            _okg.replace_decors();
                        },
                        onComplete:function(){
                            TweenMax.to(hand, 1, {
                                y:window.innerHeight/2, 
                                x:window.innerWidth/2 + 200,
                                onUpdate : function(){
                                    _okg._navigation.container.y = (hand.y - window.innerHeight/2) -(_okg._navigation.container.getBounds().height + _okg._navigation.container.getBounds().y - (window.innerHeight / 2));
                                    _okg.replace_decors();
                                },
                                onComplete:function(){
                                    TweenMax.to(hand, 1, {
                                        y:window.innerHeight, 
                                        x:window.innerWidth,
                                        ease:Back.easeIn,
                                        onComplete:function(){
                                            _okg.stage.removeChild(hand);
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
dots.prototype.drawShape = function(target, color, real_color){
    target.graphics.setStrokeStyle(4, "round", "round");
    if(typeof real_color !== "undefined"){
        target.graphics.beginStroke(real_color);
    }else{
        target.graphics.beginStroke(colors[color]);
    }
    switch(color){
        case("purple"):
            target.graphics.drawCircle(0, 0, _okg._dot_size);  
            break;
        case("green"):
            target.graphics.drawRect(-(_okg._dot_size-5), -(_okg._dot_size-5), ((_okg._dot_size-5)*2), ((_okg._dot_size-5)*2));  
            target.rotation = 45;
            break;
        case("pink"):
            target.graphics.moveTo(0, -_okg._dot_size);
            target.graphics.lineTo(_okg._dot_size+3, _okg._dot_size);
            target.graphics.lineTo(-_okg._dot_size-3, _okg._dot_size);
            target.graphics.lineTo(0, -_okg._dot_size);
            //this.dots[cur].graphics.drawCircle(0, 0, _okg._dot_size);  
            break;
        default:
            target.graphics.drawCircle(0, 0, _okg._dot_size);  
            break;
    }
}
dots.prototype.pause = function(){
    createjs.Ticker.removeEventListener('tick', _okg.tick);
}
dots.prototype.play = function(){
    createjs.Ticker.addEventListener('tick', _okg.tick);
}
dots.prototype.destroy = function(callBack){
    createjs.Ticker.removeEventListener('tick', _okg.tick);
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