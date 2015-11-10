var _okg = null;
function simplediscs(){
    this.pause_time = new Date().getTime();
    this.okaokarun = new Image();
    this.okaokarun.src = "pages/simplediscs/images/simple_run.png";
    this.party = {hits:0, great:0, wrong:0, start:new Date().getTime(), delay:60000, play_time:false};
    this.circles = [];
    this._is_playing = false;
    this._can_click = true;
    _okg = this;
}
simplediscs.prototype.init = function(){
    $('#discs_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#discs_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    _okg.stage = new createjs.Stage("discs_canvas");
    _okg.stage.autoClear = true;
    _okg.stage.update();
    _okg.create_structure();
    createjs.Touch.enable(_okg.stage);
    createjs.Ticker.addEventListener("tick", _okg.render);
    createjs.Ticker.setFPS(60);
    
    TweenMax.set(_okg.choices, {
        scaleX : 0,
        scaleY : 0
    });
    TweenMax.set(_okg.preview, {
        scaleX : 0,
        scaleY : 0
    });
    
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"tuto_popup_3", buttons:["play"]}, 
        function(e){
            setTimeout(function(){
                _okg.countGround = new createjs.Shape();
                _okg.countGround.graphics.beginFill(navigation._current_interface_color);
                _okg.countGround.graphics.drawCircle(0,0,70);
                _okg.countGround.scaleX = _okg.countGround.scaleY = 0;
                _okg.countGround.x = window.innerWidth/2;
                _okg.countGround.y = window.innerHeight/2;
                TweenMax.to(_okg.countGround, .5, {scaleX:1, scaleY:1});
                
                _okg.countMotion = new lib["count_3"]();
                _okg.countMotion.regX = 275;
                _okg.countMotion.regY = 200;
                _okg.countMotion.x = window.innerWidth/2;
                _okg.countMotion.y = window.innerHeight/2;
                _okg.stage.addChild(_okg.countMotion);
                utilities.countCallBack = function(){
                    TweenMax.to(_okg.choices, .5, {
                        scaleX : .75,
                        scaleY : .75,
                        delay : .2
                    });
                    TweenMax.to(_okg.preview, .5, {
                        scaleX : .95,
                        scaleY : .95
                    });
                    TweenMax.to(_okg.countGround, .5, {scaleX:0, scaleY:0});
                    _okg.stage.removeChild(_okg.countMotion);
                    _okg.stage.removeChild(_okg.countGround);
                    _okg.launch_game();
                }
            },800);
        }
    );
}
simplediscs.prototype.create_structure = function(){
    _okg.preview = _okg.stage.addChild(new createjs.Container());
    _okg.preview.regX = 200; _okg.preview.regY = 350;
    _okg.preview.x = window.innerWidth/2 - 350
    _okg.preview.y = window.innerHeight / 2 + 150;
        
    _okg.preview_floor = new createjs.Shape();
    _okg.preview_floor.graphics.beginFill("#FFFFFF");
    _okg.preview_floor.graphics.drawRoundRect(0,320,400, 60, 30);
    _okg.preview.addChild(_okg.preview_floor);
    
    _okg.preview_v = new createjs.Shape();
    _okg.preview_v.graphics.beginFill("#FFFFFF");
    _okg.preview_v.graphics.drawRoundRect(170,0,60,350, 30);
    _okg.preview.addChild(_okg.preview_v);
    
    _okg.choices = _okg.stage.addChild(new createjs.Container());
    _okg.choices.regX = _okg.choices.regY = 300;
    _okg.choices.x = window.innerWidth/2 + 300
    _okg.choices.y = window.innerHeight/2
    _okg.choices.scaleX = .8;
    _okg.choices.scaleY = .8;
    _okg.choices.rotation = 45;
    
    _okg.choices_lines = new createjs.Shape();
    //_okg.choices_lines.regX = _okg.choices_lines.regY = 300;
    _okg.choices_lines.graphics.setStrokeStyle(3);
    _okg.choices_lines.graphics.beginStroke("rgba(0,0,0,.1)");
    _okg.choices_lines.graphics.moveTo(300, 50);
    _okg.choices_lines.graphics.lineTo(300, 550);
    _okg.choices_lines.graphics.moveTo(50, 300);
    _okg.choices_lines.graphics.lineTo(550, 300);
    _okg.choices.addChild(_okg.choices_lines);
    
    _okg.choice_1 = _okg.choices.addChild(new createjs.Container());
    _okg.choice_1.regX = _okg.choice_1.regY = 150;
    _okg.choice_1.x = _okg.choice_1.y = 300;
    _okg.choice_1.id = 1;
    _okg.choice_1_socle = new createjs.Shape();
    _okg.choice_1_socle.graphics.beginFill('#FFFFFF');
    _okg.choice_1_socle.graphics.drawCircle(0,0,100);
    _okg.choice_1.addChild(_okg.choice_1_socle);
    _okg.choice_1.addEventListener("click", function(event) {
        _okg.respond(1);
    });
    
    _okg.choice_2 = _okg.choices.addChild(new createjs.Container());
    _okg.choice_2.regX = _okg.choice_2.regY = 150;
    _okg.choice_2.x = 600; _okg.choice_2.y = 300;
    _okg.choice_2.id = 2;
    _okg.choice_2_socle = new createjs.Shape();
    _okg.choice_2_socle.graphics.beginFill('#FFFFFF');
    _okg.choice_2_socle.graphics.drawCircle(0,0,100);
    _okg.choice_2.addChild(_okg.choice_2_socle);
    _okg.choice_2.addEventListener("click", function(event) {
        _okg.respond(2);
    });
    
    _okg.choice_3 = _okg.choices.addChild(new createjs.Container());
    _okg.choice_3.regX = _okg.choice_3.regY = 150;
    _okg.choice_3.x = 300; _okg.choice_3.y = 600;
    _okg.choice_3.id = 3;
    _okg.choice_3_socle = new createjs.Shape();
    _okg.choice_3_socle.graphics.beginFill('#FFFFFF');
    _okg.choice_3_socle.graphics.drawCircle(0,0,100);
    _okg.choice_3.addChild(_okg.choice_3_socle);
    _okg.choice_3.addEventListener("click", function(event) {
        _okg.respond(3);
    });
    
    _okg.choice_4 = _okg.choices.addChild(new createjs.Container());
    _okg.choice_4.regX = _okg.choice_4.regY = 150;
    _okg.choice_4.x = 600; _okg.choice_4.y = 600;
    _okg.choice_4.id = 4;
    _okg.choice_4_socle = new createjs.Shape();
    _okg.choice_4_socle.graphics.beginFill('#FFFFFF');
    _okg.choice_4_socle.graphics.drawCircle(0,0,100);
    _okg.choice_4.addChild(_okg.choice_4_socle);
    _okg.choice_4.addEventListener("click", function(event) {
        _okg.respond(4);
    });
    
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
    data = null;
    delete data;
    _okg.okaokasprite = new createjs.Sprite(spriteSheet, "run");
    _okg.okaokasprite.scaleX = _okg.okaokasprite.scaleY = .7;
    _okg.okaokasprite.y = -55;
    _okg.okaokasprite.gotoAndStop('stand');
    _okg.chronos_line.addChild(_okg.okaokasprite);
    
    _okg.score_infos = _okg.stage.addChild(new createjs.Container());
    _okg.score_infos_ground = new createjs.Shape();
    _okg.score_infos.addChild(_okg.score_infos_ground);
    
    _okg.greatsprite = new createjs.Bitmap("pages/simplediscs/images/great.png");
    _okg.wrongsprite = new createjs.Bitmap("pages/simplediscs/images/wrong.png");
    _okg.chronosprite = new createjs.Bitmap("pages/simplediscs/images/chronos.png");
    
    _okg.greattext = new createjs.Text();
    _okg.greattext.font = "100 35px Roboto";
    _okg.greattext.color = "#FFFFFF";
    _okg.greattext.text = '0';
    
    _okg.wrongtext = new createjs.Text();
    _okg.wrongtext.font = "100 35px Roboto";
    _okg.wrongtext.color = "#FFFFFF";
    _okg.wrongtext.text = '0';
    
    _okg.chronostext = new createjs.Text();
    _okg.chronostext.font = "100 35px Roboto";
    _okg.chronostext.color = "#FFFFFF";
    _okg.chronostext.text = '60';
    
    _okg.greatsprite.regX = _okg.greatsprite.regY = _okg.wrongsprite.regX = _okg.wrongsprite.regY = _okg.chronosprite.regX =  _okg.chronosprite.regY = 20; 
    
    _okg.greattext.textAlign = "center"; 
    _okg.wrongtext.textAlign = "center"; 
    _okg.chronostext.textAlign = "center"; 
    
    _okg.greatsprite.y = _okg.wrongsprite.y = _okg.chronosprite.y = 20;
    
    _okg.chronosprite.x = 20;
    _okg.chronostext.x = 20;
    _okg.chronostext.y = 50;
    
    _okg.greatsprite.x = 110;
    _okg.greattext.x = 110;
    _okg.greattext.y = 50;
    
    _okg.wrongsprite.x = 200;
    _okg.wrongtext.x = 200;
    _okg.wrongtext.y = 50;
    
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
    
    _okg.fivehits = new createjs.Sprite(spriteSheet, "stop");
    _okg.fivehits.regX = _okg.fivehits.regY = 25;
    _okg.fivehits.x = -3;
    _okg.fivehits.y = 45;
    
    _okg.score_infos.addChild(_okg.fivehits);
    
    _okg.score_infos.addChild(_okg.greatsprite);
    _okg.score_infos.addChild(_okg.wrongsprite);
    _okg.score_infos.addChild(_okg.chronosprite);
    _okg.score_infos.addChild(_okg.greattext);
    _okg.score_infos.addChild(_okg.wrongtext);
    _okg.score_infos.addChild(_okg.chronostext);
    
    //check_great_motion.png
    var great = {
        images: ["pages/simplediscs/motion/great_motion_200.png"],
        frames: {width:200, height:200},
        animations: {
            great:[0,46, false],
            stay:48
        }
    };
    var greatAssets = new createjs.SpriteSheet(great);
    great = null;
    delete great;
    
    _okg.great_motion = new createjs.Sprite(greatAssets, "stay");
    _okg.great_motion.regX = _okg.great_motion.regY = 100;
    _okg.great_motion.x = window.innerWidth /2;
    _okg.great_motion.y = window.innerHeight /2;
    _okg.great_motion.rotation = -_okg.choices.rotation;
    _okg.choices.addChild(_okg.great_motion);
    
    var wrong = {
        images: ["pages/simplediscs/motion/wrong_motion_200.png"],
        frames: {width:200, height:200},
        animations: {
            wrong:[0,46, false],
            stay:48
        }
    };
    var wrongAssets = new createjs.SpriteSheet(wrong);
    wrong = null;
    delete wrong;
    
    _okg.wrong_motion = new createjs.Sprite(wrongAssets, "stay");
    _okg.wrong_motion.regX = _okg.wrong_motion.regY = 100;
    _okg.wrong_motion.x = window.innerWidth /2;
    _okg.wrong_motion.y = window.innerHeight /2;
    _okg.wrong_motion.rotation = -_okg.choices.rotation;
    _okg.choices.addChild(_okg.wrong_motion);
    
    _okg.score_infos.x = (window.innerWidth/2) - (_okg.score_infos.getBounds().width/2);
    _okg.score_infos.y = 20;
    
    
    _okg.preview.scaleX = _okg.preview.scaleY = .95;
    _okg.choices.scaleX = _okg.choices.scaleY = .75;
}
simplediscs.prototype.respond = function(resp){
    if(_okg._can_click){
        if(!_okg._is_playing){
            return false;
        }
        if(resp === _okg.response+1){
            _okg.party.great++;
            _okg.greattext.text = _okg.party.great;
            _okg.play_response('great', resp);
        }else{
            _okg.party.wrong++;
            _okg.wrongtext.text = _okg.party.wrong;
            _okg.play_response('wrong', resp);
        }
        _okg.party.hits++;
        _okg.destroy_level(function(){
            var lvl = Math.floor(Math.random() * simplediscs_levels.length);
            _okg.create_level(lvl);
        });
        _okg._can_click = false;
        setTimeout(function(){
            _okg._can_click = true;
        },800);
    }
}
simplediscs.prototype.play_response = function(type, resp){
    var pos = {x:_okg.choices.x, y:_okg.choices.y};
    var target_pos  = _okg['choice_'+(_okg.response+1)];
    var resp_target = _okg['choice_'+resp];
    var adds = {time:0};
    _okg._is_playing = false;
    switch(type){
        case 'great':
            if(typeof _okg._disc_win_sound === "undefined"){
                audio_manager.play_sound('disc_win', 0, function(e){
                    _okg._disc_win_sound = e;
                });
            }else{
                _okg._disc_win_sound.play();
            }
            _okg.party.delay+=200;
            TweenMax.to(adds, .5,{
                time:20,
                onUpdate:function(){
                },
                onComplete:function(){
                    _okg._is_playing = true;
                }
            });
            _okg.okaokasprite.gotoAndPlay('great');
            break;
        case 'wrong':
            if(typeof _okg._disc_fail_sound === "undefined"){
                audio_manager.play_sound('disc_fail', 0, function(e){
                    _okg._disc_fail_sound = e;
                });
            }else{
                _okg._disc_fail_sound.play();
            }
            _okg.party.delay-=200;
            TweenMax.to(adds, .5,{
                time:20,
                onUpdate:function(){
                    
                },
                onComplete:function(){
                    _okg._is_playing = true;
                }
            });
            _okg.okaokasprite.gotoAndPlay('wrong');
            _okg.wrong_motion.x = resp_target.x - 150;
            _okg.wrong_motion.y = resp_target.y - 150;
            _okg.wrong_motion.gotoAndPlay('wrong');
            break;
    }
    _okg.great_motion.x = target_pos.x - 150;
    _okg.great_motion.y = target_pos.y - 150;
    _okg.great_motion.gotoAndPlay('great');
}
simplediscs.prototype.destroy_level = function(callBack){
    var cur = 0;
    for(var i=2; i>=0; i--){
        TweenMax.to(_okg.circles[i], .3, {
            y:-(window.innerHeight),
            ease:Power4.easeIn,
            delay:.2*cur
        });
        cur++;
    }
    for(var c=0; c<4; c++){
        for(var o=0; o<3; o++){
            _okg['choice_'+(c+1)+'_container']['shape_'+o].scaleX=-1;
            _okg['choice_'+(c+1)+'_container']['shape_'+o].scaleY=-1;
            if(typeof _okg['choice_'+(c+1)+'_container']['shape_'+o].graphics !== "undefined"){
                if(typeof _okg['choice_'+(c+1)+'_container']['shape_'+o].graphics._stroke !== "undefined"){
                    _okg.undraw_arc(
                        o,
                        _okg['choice_'+(c+1)+'_container']['shape_'+o], 
                        _okg['choice_'+(c+1)+'_container']['shape_'+o].graphics._strokeStyle.width, 
                        _okg['choice_'+(c+1)+'_container']['shape_'+o].graphics._stroke.style,
                        _okg['choice_'+(c+1)+'_container']['shape_'+o].graphics._strokeStyle.width,
                        function(target){
                        }
                    );
                }
            }
        }
    }
    setTimeout(function(){
        callBack();
    },100);
}
simplediscs.prototype.create_interface = function(){
    this.init();
}
simplediscs.prototype.end_game = function(){
    audio_manager.play_sound('disc_end_game', 0, function(e){});
    TweenMax.to(_okg.chronos_line, .5, {
        y:window.innerHeight + 100,
        ease:Power4.easeIn
    });
    /*if(!_okg.winning_dance){
        var data = {
            images: ["./motions/okaoka/winning_dance_8.png"],
            frames: {width:146, height:230},
            animations: {
                dance:[0,24]
            }
        };
        var spriteSheet = new createjs.SpriteSheet(data);
        _okg.winning_dance = new createjs.Sprite(spriteSheet, "dance");
    }else{
        _okg.stage.removeChild(_okg.winning_dance);
    }*/
    TweenMax.to(_okg.score_infos, .5, {
        y       : window.innerHeight/2 - (_okg.score_infos.getBounds().height/2),
        x       : (window.innerWidth/2) - (_okg.score_infos.getBounds().width/2),
        ease    : Power4.easeInOut,
        delay   : .5,
        onComplete : function(){
            //_okg.winning_dance.x = window.innerWidth/2 - (146/2);
            //_okg.winning_dance.y = _okg.score_infos.y - _okg.winning_dance.getBounds().height - 20;
            //_okg.stage.addChild(_okg.winning_dance);
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
            var total_score = parseInt(_okg.party.delay) + (parseInt(_okg.party.great)*5) + parseInt(_okg.party.wrong);
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
                    
                    utilities.save_score_game('simplediscs', total_score);
                    _okg.replay_button.addEventListener("click", function(event) { 
                        window.location.href = "#page/"+navigation._current_page_name+"/intro/false/date/"+new Date().getTime();
                    });
                    _okg.stats_button.addEventListener("click", function(event) { 
                        utilities.show_score_game('simplediscs', total_score);
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
    TweenMax.to(_okg.choices, .5, {
        scaleX : 0,
        scaleY : 0,
        delay : .2
    });
    TweenMax.to(_okg.preview, .5, {
        scaleX : 0,
        scaleY : 0
    });
    
}
simplediscs.prototype.launch_game = function(){
    _okg._is_playing = true;
    _okg.okaokasprite.gotoAndPlay('run');
    _okg.party = {hits:0, great:0, wrong:0, start:new Date().getTime(), delay:60000, play_time:false};
    var lvl = Math.floor(Math.random() * simplediscs_levels.length);
    _okg.create_level(lvl);
}
simplediscs.prototype.destroy_all = function(){
}
simplediscs.prototype.create_level = function(id){
    TweenMax.to($('.app_content'), .5, {
        "backgroundColor":colors[simplediscs_levels[id].bkColor]
    });
    TweenMax.to($('#backbutton'), .5, {
        "backgroundColor":colors[simplediscs_levels[id].bkColor]
    });
    for(var i=0; i<simplediscs_levels[id].colors.length; i++){
        if(typeof _okg.circles[i] !== "undefined"){
            _okg.circles[i].removeAllEventListeners();
            _okg.preview.removeChild(_okg.circles[i]);
        }
        /* add random circle color on preview _okg.preview */
        /* reduce by id */
        var w = (400-(60*(i+1)));
        var posy = 280 - (80*i);
        _okg.circles[i] = new createjs.Shape();
        _okg.circles[i].graphics.beginFill(colors[simplediscs_levels[id].colors[i]]);
        _okg.circles[i].graphics.drawRoundRect(0,0,w,80,40);
        _okg.circles[i].regX = w/2;
        _okg.circles[i].regY = 40;
        _okg.circles[i].y = -500;
        _okg.circles[i].x = 200;
        _okg.preview.addChild(_okg.circles[i]);
        TweenMax.to(_okg.circles[i], .8, {
            y:posy,
            delay:.2*i,
            ease:Power4.easeOut
        });
    }
    _okg.response = Math.floor(Math.random()*4);
    var next_id = id+1;
    for(var i=0; i<4; i++){
        if(i === _okg.response){
            _okg.create_choices((i+1), simplediscs_levels[id]);
        }else{
            if(next_id === simplediscs_levels.length){
                next_id = 0;
            }
            _okg.create_choices((i+1), simplediscs_levels[next_id]);
            next_id++;
        }
    }
}
simplediscs.prototype.create_preview = function(){
}
simplediscs.prototype.create_choices = function(id, datas){
    /* on détruit l'ancien si il existe */
    if(typeof _okg['choice_'+id+'_container'] !== "undefined"){
        _okg['choice_'+id].removeChild(_okg['choice_'+id+'_container']);
    }
    /* on crée un nouveau container */
    _okg['choice_'+id+'_container'] = _okg['choice_'+id].addChild(new createjs.Container());
    //_okg['choice_'+id].addChild(_okg['choice_'+id+'_container']);
    /* on ajoute des arcs de couleurs dans le container */
    setTimeout(function(){
        for(var i=0; i<datas.colors.length; i++){
            _okg['choice_'+id+'_container']['shape_'+i] = new createjs.Shape();
            _okg['choice_'+id+'_container'].addChild(_okg['choice_'+id+'_container']['shape_'+i]);
            _okg.draw_arc(
                i,
                _okg['choice_'+id+'_container']['shape_'+i], 
                60-(15*i), 
                colors[datas.colors[i]],
                60-(15*i)
            );
        }
    }, 100*id);
}
simplediscs.prototype.draw_arc = function(id, target, rayon, color, size){
    var r = {d:0};
    TweenMax.to(r, 1, {d:6.6, delay:.1*id, onUpdate:function(){
        target.graphics.clear();
        target.graphics.setStrokeStyle(size, 'round', 'round');
        target.graphics.beginStroke(color);
        target.graphics.arc(0,0,rayon,0,r.d);
    }});
}
simplediscs.prototype.undraw_arc = function(id, target, rayon, color, size){
    var r = {d:6.6};
    TweenMax.to(r, .5, {d:0, delay:.1*id, onUpdate:function(){
        target.graphics.clear();
        target.graphics.setStrokeStyle(size, 'round', 'round');
        target.graphics.beginStroke(color);
        target.graphics.arc(0,0,rayon,0,r.d);
    }, onComplete:function( ){
        target.graphics.clear();
    }});
}
simplediscs.prototype.render = function(){
    if(_okg._is_playing){
        var now = new Date().getTime();
        var elapsed = now - _okg.party.start;
        var rest = (_okg.party.delay - elapsed);
        _okg.chronostext.text = Math.ceil(rest/1000);
        var percent_progress = 100 - ((rest * 100 ) / _okg.party.delay);
        _okg.chronos_line_progress.scaleX = percent_progress / 100;
        _okg.okaokasprite.x = (window.innerWidth) * (percent_progress/ 100) - 50;
        if(Math.round(rest/1000) < 5 && Math.round(rest/1000) > 0){
            if(typeof _okg.fivehitsLaunched === "undefined" || _okg.fivehitsLaunched == false){
                _okg.fivehits.gotoAndPlay('hit');
                _okg.fivehitsLaunched = true;
            }
        }else{
            _okg.fivehits.gotoAndStop('stop');
        }
        if(Math.ceil(rest/1000) === 5){
            _okg.fivehits.gotoAndPlay('hit');
            if(typeof _okg.five_last_sound === "undefined"){
                audio_manager.play_sound('chronos_five_seconds', 0, function(e){
                    _okg.five_last_sound = e;
                });
            }
        }
        if(Math.round(rest/1000) === 0){
            var extra_time = (500 * _okg.party.great) - (800 * _okg.party.wrong);
            _okg._is_playing = false;
            _okg.okaokasprite.gotoAndStop('stand');
            _okg.end_game();
            return false;
        }
    }
    _okg.stage.update();
}
simplediscs.prototype.pause = function(){
    _okg.pause_time = new Date().getTime();
    createjs.Ticker.removeEventListener('tick', _okg.render);
}
simplediscs.prototype.play = function(){
    if(_okg._is_playing){
        _okg.party.delay += new Date().getTime() - _okg.pause_time;  
    }
    createjs.Ticker.addEventListener("tick", _okg.render);
}
simplediscs.prototype.destroy = function(callBack){
    if(_okg.render){
        createjs.Ticker.removeEventListener('tick', _okg.render);
    }
    this.pause_time = this.okaokarun = this.okaokarun.src = this.party = this.circles = this._is_playing = this._can_click = null;
    callBack();
}
simplediscs.prototype.play_good = function(){
    TweenMax.set($('#good'), {scaleX:0, scaleY:0});
    $('#good').css('display', 'block');
    TweenMax.to($('#good'), .3, {scaleX:1, scaleY:1, ease:Back.easeOut, onComplete:function(){
        TweenMax.to($('#good'), .3, {scaleX:0, scaleY:0, ease:Back.easeIn, onComplete:function(){
            TweenMax.set($('#good'), {scaleX:0, scaleY:0});
        }, delay:.1});
    }});
}
simplediscs.prototype.play_wrong = function(){
    TweenMax.set($('#wrong'), {scaleX:0, scaleY:0});
    $('#wrong').css('display', 'block');
    TweenMax.to($('#wrong'), .3, {scaleX:1, scaleY:1, ease:Elastic.easeOut, onComplete:function(){
        TweenMax.to($('#wrong'), .3, {scaleX:0, scaleY:0, ease:Back.easeIn, onComplete:function(){
            TweenMax.set($('#wrong'), {scaleX:0, scaleY:0});
        }, delay:.1});
    }});
}