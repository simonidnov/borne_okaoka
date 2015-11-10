var _okg = null;
function where(){
    this.circle_base = 50;
    this.max_try = 150;
    this._time_lap = 120000;
    this.check_num = 0;
    this.balls = 1;
    this.game_infos = {
        great:0,
        wrong:0
    };
    this.colors = _.clone(colors);
    delete this.colors.dgreen;
    delete this.colors.black;
    delete this.colors.maroon;
    this.level = 1;
    this.circles = [];
    this.base = "pages/where/";
    _okg = this;
    this._current_response = 0;
}
where.prototype.init = function(){
    this.create_interface();
}
where.prototype.replay_game = function(){
    window.location.href = window.location.href+"/intro/false";   
    gui.Window.get().reload(3);
}
where.prototype.create_interface = function(){
    $('#where_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#where_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    this.stage = new createjs.Stage("where_canvas");
    this.stage.autoClear = true;
    this.stage.update();
    this.build_chronos_line();
    this.create_taskbar();
    createjs.Touch.enable(this.stage);
    createjs.Ticker.addEventListener("tick", this.tick);
    createjs.Ticker.setFPS(60);
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"where_tuto_popup", buttons:["play"]}, 
        function(e){
            _okg.count_start_chronos(function(){
                _okg.create_level();
                _okg.start_date = new Date().getTime();
                _okg.okaokasprite.gotoAndPlay('run');
                _okg.started = true;
            });
        }
    );
}
where.prototype.create_level = function(){
    var levelwhere = new createjs.Text();
        levelwhere.font = "700 50px Roboto";
        levelwhere.color = "#FFFFFF";
        levelwhere.text = this.level;
        levelwhere.textAlign = "center";
    
    levelwhere.x = window.innerWidth/2 - levelwhere.getBounds().width;
    levelwhere.y = window.innerHeight/2 - levelwhere.getBounds().height;
    levelwhere.regY = levelwhere.getBounds().height/2;
    
    this.stage.addChild(levelwhere);
    
    TweenMax.to(levelwhere, 1.4, {
        scaleX:13,
        scaleY:13,
        alpha:0,
        onComplete:function(){
            if(_okg.started){
                _okg.stage.removeChild(levelwhere);
                _okg.create_choices();
            }
        },
        ease:Quart.easeOut
    });
}
where.prototype.create_choices = function(){
    var c = Math.floor(Math.random()*4); 
    for(var i = 0; i<4; i++){
        var choice = _okg.stage.addChild(new createjs.Container());
        if(i === c){
            var dot = new createjs.Shape();
            dot.graphics.beginFill("#FFF000").drawCircle(55,104,16);
            choice.addChild(dot);
            choice.is_great = true;
        }else{
            choice.is_great = false;
        }
        
        var capsule = _okg.stage.addChild(new createjs.Container());
        var top = new createjs.Shape();
        top.graphics.beginFill("#FFFFFF").drawRoundRectComplex(5,0,100,81,50,50,0,0);
        capsule.addChild(top);
        
        //var sbar = new createjs.Shape();
        //sbar.graphics.beginFill("#FFFFFF").drawRoundRect(3,80,104,4,2);
        //capsule.addChild(sbar);
        
        //var circ = new createjs.Shape();
        //circ.graphics.beginFill("#FFFFFF").drawCircle(55,-5,10);
        //capsule.addChild(circ);
        
        var bar = new createjs.Shape();
        bar.graphics.beginFill("#FFFFFF").drawRoundRect(0,120,110,14,7);
        choice.addChild(bar);
        
        capsule.name = "capsule";
        choice.addChild(capsule);
        choice.name = "choice_"+i;
        choice.mouseChildren = false;
        choice.y = window.innerHeight/2 - 50;
        choice.x = (window.innerWidth/2 - 300) + (180*i);
        this.stage.addChild(choice);
    }
    setTimeout(function(){
        for(var i=0; i<4; i++){
            TweenMax.to(_okg.stage.getChildByName('choice_'+i).getChildByName('capsule'), .5, {
                y:42,
                delay:.1*i
            });
        }
        setTimeout(function(){
            _okg.mix_positions(0);
        },1200);
    },2000);
}
where.prototype.add_ball = function(id){
    var choice = this.stage.getChildByName('choice_'+id);                                    
    var dot = new createjs.Shape();
    this.balls++;
    dot.graphics.beginFill("#FFF000").drawCircle(55,104,16);
    dot.name="dot";
    choice.addChildAt(dot, 0);
    choice.is_great = true;
    for(var i=0; i<4; i++){
        TweenMax.to(_okg.stage.getChildByName('choice_'+i).getChildByName('capsule'), .5, {
            y:0,
            delay:.1*i
        });
        TweenMax.to(_okg.stage.getChildByName('choice_'+i).getChildByName('capsule'), .5, {
            y:42,
            delay:2+(.1*i)
        });
    }
    setTimeout(function(){
        _okg.mix_positions(0);
    },2500);
}
where.prototype.mix_positions = function(num){
    this._current_response = 0;
    if(!_okg.started){
        return false;
    }
    var array = [0,1,2,3];
    var num_move = this.level;
    if(num_move > 3){
        num_move = 3;
    }
    if(num === num_move+2){
        for(var i=0; i<4; i++){
            this.stage.getChildByName('choice_'+i).addEventListener("click", function(event) { 
                _okg.response(event.target.is_great, event.target.name);
            });
        }
        return false;
    }
    var pos_1 = array[Math.floor(Math.random()*array.length)];
    array.splice(pos_1,1);
    var pos_2 = array[Math.floor(Math.random()*array.length)];
    this.move_capsule(pos_1, pos_2, function(){
        num++;
        _okg.mix_positions(num);
    });
}
where.prototype.move_capsule = function(id_1, id_2, callBack){
    if(!_okg.started){
        return false;
    }
    if(id_1 === id_2){
        callBack();
        return false;
    }
    var choice_0 = this.stage.getChildByName('choice_'+id_1);
    var choice_1 = this.stage.getChildByName('choice_'+id_2);
    var pos = {
        0:{
            y:choice_0.y,
            x:choice_0.x
        },
        1:{
            y:choice_1.y,
            x:choice_1.x
        }
    }
    var easeX = choice_0.x - (pos[0].x+pos[1].x)/2;
    TweenMax.to(choice_0, .5, {
        x:(pos[0].x+pos[1].x)/2,
        y:pos[1].y,
        ease:Power4.easeIn,
        bezier:[{y:pos[1].y-100}],
        onComplete : function(){
            TweenMax.to(choice_0, .7, {y:pos[1].y, x:pos[1].x, ease:Power4.easeOut});
        }
    });
    TweenMax.to(choice_1, .5, {
        x:(pos[0].x+pos[1].x)/2,
        y:pos[0].y,
        ease:Power4.easeIn,
        bezier:[{y:pos[0].y+100}],
        onComplete : function(){
            TweenMax.to(choice_1, .7, {y:pos[0].y, x:pos[0].x, ease:Power4.easeOut, onComplete: function(){
                callBack();
            }});
        }
    });
    if(typeof _okg._where_move_sound === "undefined"){
        audio_manager.play_sound('where_move', 0, function(e){
            _okg._where_move_sound = e;
        });
    }else{
        _okg._where_move_sound.play();
    }
}
where.prototype.response = function(response, id){
    if(typeof _okg._where_hit_sound === "undefined"){
        audio_manager.play_sound('where_hit', 0, function(e){
            _okg._where_hit_sound = e;
        });
    }else{
        _okg._where_hit_sound.play();
    }
    if(response){
        _okg.game_infos.great++;
        TweenMax.to(_okg.stage.getChildByName(id).getChildByName('capsule'), .5, {
            y:0,
            delay:.1*i
        });
        this._current_response++;
        if(this._current_response < this.balls){
            return false;
        }
        if(typeof _okg._where_win_sound === "undefined"){
            audio_manager.play_sound('where_win', 0, function(e){
                _okg._where_win_sound = e;
            });
        }else{
            _okg._where_win_sound.play();
        }
    }else{
        _okg.game_infos.wrong++;
        if(typeof _okg._where_fail_sound === "undefined"){
            audio_manager.play_sound('where_fail', 0, function(e){
                _okg._where_fail_sound = e;
            });
        }else{
            _okg._where_fail_sound.play();
        }
    }
    for(var i=0; i<4; i++){
        var element = this.stage.getChildByName('choice_'+i);
        element.removeAllEventListeners();
        TweenMax.to(_okg.stage.getChildByName('choice_'+i).getChildByName('capsule'), .5, {
            y:0,
            delay:.1*i
        });
    }
    setTimeout(function(){
        _okg.destroy_level();
    }, 1000);
}
where.prototype.destroy_level = function(){
    this.colors = _.clone(colors);
    delete this.colors.yellow;
    delete this.colors.black;
    delete this.colors.maroon;
    
    var num = Math.floor(Math.random()*_.keys(this.colors).length);
    var color = this.colors[_.keys(this.colors)[num]];

    TweenMax.to($('.app_content'), .5, {css:{'backgroundColor':color}});
    TweenMax.to($('#backbutton'), .5, {css:{'backgroundColor':color}});
    
    for(var i=0; i<4; i++){
        var element = this.stage.getChildByName('choice_'+i);
        //element.removeAllEventListeners();
        TweenMax.to(element.getChildByName('capsule'), .5, {
            y:42,
            delay:.1*i
        });
        //_okg.stage.removeChild(element);
    }
    setTimeout(function(){
        _okg.level++;
        if(_okg.level === 5){
            var trought = false;
            for(var i=0; i<4; i++){
                if(!_okg.stage.getChildByName('choice_'+i).is_great && trought === false){
                    trought = true;
                    //this.stage.getChildByName('choice_'+i).is_great = true;
                    _okg.add_ball(i);
                }
            }
        }else{
            _okg.mix_positions(0);
        }
    },2000);
    //_okg.create_choices();
    return false;
}
where.prototype.tick = function() {
    if( _okg.started ){
        _okg.update_chronos();
    }
    _okg.stage.update();
}
where.prototype.pause = function(){
}
where.prototype.play = function(){
}
where.prototype.destroy = function(callBack){
    if(this.tick){
        createjs.Ticker.removeEventListener('tick', this.tick);
    }
    callBack();
}


where.prototype.update_chronos = function(){
     var now = new Date().getTime();
     var elapsed = now - this.start_date;
     var rest = (this._time_lap - elapsed);
     this.chronostext.text = Math.ceil(rest/1000);
     this.greattext.text = this.game_infos.great;
     this.wrongtext.text = this.game_infos.wrong;
     /* CHECKING TIME AND RENDER BAR + CHRONOS _okg.party.start */
     var percent_progress = 100 - ((rest * 100 ) / this._time_lap);
     this.chronos_line_progress.scaleX = percent_progress / 100;
     this.okaokasprite.x = (window.innerWidth) * (percent_progress/ 100) - 50;
     /* on check si il reste du temps */
     /*if(Math.round(rest) === 5){
         if(typeof _okg.five_last_sound === "undefined"){
             audio_manager.play_sound('chronos_five_seconds', 0, function(e){
                 _okg.five_last_sound = e;
             });
         }
     }*/
     if(rest <= 0){
         console.log('le jeu est fini chronos');
         //audio_manager.play_sound('chronos_end', 0, function(e){});
         /* si le temps est écoulé c'est la fin de la partie */
         this.started = false;
         this.okaokasprite.gotoAndStop('stand');
         //_okg.fivehits.gotoAndStop('stop');
         this.end_game();
     }
}

where.prototype.create_taskbar = function(){
    this.score_infos = this.stage.addChild(new createjs.Container());
    this.score_infos_ground = new createjs.Shape();
    this.score_infos.addChild(this.score_infos_ground);
    
    this.greatsprite = new createjs.Bitmap("pages/simplediscs/images/great.png");
    this.wrongsprite = new createjs.Bitmap("pages/simplediscs/images/wrong.png");
    this.chronosprite = new createjs.Bitmap("pages/simplediscs/images/chronos.png");
    
    this.greattext = new createjs.Text();
    this.greattext.font = "100 35px Roboto";
    this.greattext.color = "#FFFFFF";
    this.greattext.text = '0';
    
    this.wrongtext = new createjs.Text();
    this.wrongtext.font = "100 35px Roboto";
    this.wrongtext.color = "#FFFFFF";
    this.wrongtext.text = '0';
    
    this.chronostext = new createjs.Text();
    this.chronostext.font = "100 35px Roboto";
    this.chronostext.color = "#FFFFFF";
    this.chronostext.text = '60';
    
    this.greatsprite.regX = this.greatsprite.regY = this.wrongsprite.regX = this.wrongsprite.regY = this.chronosprite.regX =  this.chronosprite.regY = 20; 
    
    this.greattext.textAlign = "center"; 
    this.wrongtext.textAlign = "center"; 
    this.chronostext.textAlign = "center"; 
    
    this.greatsprite.y = this.wrongsprite.y = this.chronosprite.y = 20;
    
    this.chronosprite.x = 20;
    this.chronostext.x = 20;
    this.chronostext.y = 50;
    
    this.greatsprite.x = 110;
    this.greattext.x = 110;
    this.greattext.y = 50;
    
    this.wrongsprite.x = 200;
    this.wrongtext.x = 200;
    this.wrongtext.y = 50;
    
    var data = {
        images: ["./pages/dots/images/five_hits_sprite.png"],
        frames: {width:100, height:100},
        animations: {
            hit:[0,15,true],
            stop:16
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    
    data = null;
    delete data;
    
    this.fivehits = new createjs.Sprite(spriteSheet, "stop");
    this.fivehits.regX = this.fivehits.regY = 25;
    this.fivehits.x = -3;
    this.fivehits.y = 45;
    
    this.score_infos.addChild(this.fivehits);
    
    this.score_infos.addChild(this.greatsprite);
    this.score_infos.addChild(this.wrongsprite);
    this.score_infos.addChild(this.chronosprite);
    this.score_infos.addChild(this.greattext);
    this.score_infos.addChild(this.wrongtext);
    this.score_infos.addChild(this.chronostext);
    
    this.score_infos.x = (window.innerWidth/2) - (this.score_infos.getBounds().width/2);
    this.score_infos.y = 20;
}
where.prototype.destroy_circles = function(){
    for(var i=0; i<this.stage.getNumChildren(); i++){
        if(this.stage.getChildAt(i).name !== null){
            console.log(this.stage.getChildAt(i).name.indexOf('circle'));
            if(this.stage.getChildAt(i).name.indexOf('circle') !== -1){
                TweenMax.to(this.stage.getChildAt(i), .2, {scaleX:0, scaleY:0, onComplete:function(){
                    _okg.stage.removeChild($(this));
                }});
            }
        }
    }
}
where.prototype.end_game = function(){
    for(var i=0; i<4; i++){
        var element = _okg.stage.getChildByName('choice_'+i);
        if(element !== null){
            element.removeAllEventListeners();
            _okg.stage.removeChild(element);
        }
    }
    this.destroy_circles();
    TweenMax.to(_okg.score_infos, .5, {
        y       : window.innerHeight/2 - (_okg.score_infos.getBounds().height/2),
        x       : (window.innerWidth/2) - (_okg.score_infos.getBounds().width/2),
        ease    : Power4.easeInOut,
        delay   : .5,
        onComplete : function(){
            _okg.destroy_circles();
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
            _okg.total_score_text.y = _okg.score_infos.y + _okg.score_infos.getBounds().height;
            _okg.stage.addChild(_okg.total_score_text);
            /* CALCUL SCORE */
            var total_score = (_okg.game_infos.great-_okg.game_infos.wrong)*_okg.level;
            if(total_score < 0){
                total_score = 0;
            }
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
                    
                    var hitAreaG = new createjs.Graphics();
                    hitAreaG.beginFill(navigation._current_interface_color);
                    hitAreaG.drawCircle(50, 50, 50);
                    hitAreaG.endFill();
                    _okg.replay_button.hitArea = new createjs.Shape(hitAreaG);
                    _okg.stats_button.hitArea = new createjs.Shape(hitAreaG);
                    
                    utilities.save_score_game('where', total_score);
                    _okg.replay_button.addEventListener("click", function(event) { 
                        window.location.href = "#page/"+navigation._current_page_name+"/intro/false/date/"+new Date().getTime();
                    });
                    _okg.stats_button.addEventListener("click", function(event) { 
                        utilities.show_score_game('where', total_score);
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
                }
            });
        }
    });
}
where.prototype.count_start_chronos = function(callBack){
    this.countGround = new createjs.Shape();
    this.countGround.graphics.beginFill(navigation._current_interface_color);
    this.countGround.graphics.drawCircle(0,0,70);
    this.countGround.scaleX = this.countGround.scaleY = 0;
    this.countGround.x = window.innerWidth/2;
    this.countGround.y = window.innerHeight/2;
    TweenMax.to(this.countGround, .5, {scaleX:1, scaleY:1});
    
    this.stage.addChild(this.countGround);
    //this.drawShape( this.dots[cur], cur_color); 
    
    this.countMotion = new lib["count_3"]();
    this.countMotion.regX = 275;
    this.countMotion.regY = 200;
    this.countMotion.x = window.innerWidth/2;
    this.countMotion.y = window.innerHeight/2;
    //this.countMotion.shadow = new createjs.Shadow(utilities.colorLuminance(navigation._current_interface_color, -.2), 3, 3, 0);
    this.stage.addChild(this.countMotion);
    utilities.countCallBack = function(){
        TweenMax.to(_okg.countGround, .5, {scaleX:0, scaleY:0});
        _okg.stage.removeChild(_okg.countMotion);
        _okg.stage.removeChild(_okg.countGround);
        callBack();
    }
}

where.prototype.build_chronos_line = function(){
    console.log('chronos line');
    this.okaokarun = new Image();
    this.okaokarun.src = "pages/simplediscs/images/simple_run.png";
    
    this.chronos_line = this.stage.addChild(new createjs.Container());
    this.chronos_line.regY = 25;
    this.chronos_line.y = window.innerHeight;
    this.chronos_line_ground = new createjs.Shape();
    this.chronos_line_ground.graphics.beginFill('rgba(0,0,0,.3)');
    this.chronos_line_ground.graphics.drawRect(0,0,window.innerWidth, 25);
    this.chronos_line.addChild(this.chronos_line_ground);
    
    this.chronos_line_progress = new createjs.Shape();
    this.chronos_line_progress.graphics.beginFill('#FFFFFF');
    this.chronos_line_progress.graphics.drawRect(0,0,window.innerWidth, 25);
    this.chronos_line_progress.scaleX = 0;
    this.chronos_line.addChild(this.chronos_line_progress);
    
    var data = {
        images: [this.okaokarun],
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
    this.okaokasprite = new createjs.Sprite(spriteSheet, "run");
    this.okaokasprite.scaleX = this.okaokasprite.scaleY = .7;
    this.okaokasprite.y = -55;
    this.okaokasprite.gotoAndStop('stand');
    this.chronos_line.addChild(this.okaokasprite);   
}
