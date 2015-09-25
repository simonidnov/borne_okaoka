var self = null;
function simplediscs(){
    this.pause_time = new Date().getTime();
    this.okaokarun = new Image();
    this.okaokarun.src = "pages/simplediscs/images/simple_run.png";
    this.party = {hits:0, great:0, wrong:0, start:new Date().getTime(), delay:60000, play_time:false};
    this.circles = [];
    this._is_playing = false;
    self = this;
}
simplediscs.prototype.init = function(){
    $('#discs_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#discs_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    self.stage = new createjs.Stage("discs_canvas");
    self.stage.autoClear = true;
    self.stage.update();
    self.create_structure();
    createjs.Touch.enable(self.stage);
    createjs.Ticker.addEventListener("tick", self.render);
    createjs.Ticker.setFPS(60);
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"tuto_popup_2", buttons:["play"]}, 
        function(e){
            /* have to init gameplay */
            setTimeout(function(){
                self.countGround = new createjs.Shape();
                self.countGround.graphics.beginFill(navigation._current_interface_color);
                self.countGround.graphics.drawCircle(0,0,70);
                self.countGround.scaleX = self.countGround.scaleY = 0;
                self.countGround.x = window.innerWidth/2;
                self.countGround.y = window.innerHeight/2;
                TweenMax.to(self.countGround, .5, {scaleX:1, scaleY:1});
                
                self.countMotion = new lib["count_3"]();
                self.countMotion.regX = 275;
                self.countMotion.regY = 200;
                self.countMotion.x = window.innerWidth/2;
                self.countMotion.y = window.innerHeight/2;
                self.countMotion.shadow = new createjs.Shadow(utilities.colorLuminance(navigation._current_interface_color, -.2), 3, 3, 0);
                self.stage.addChild(self.countMotion);
                utilities.countCallBack = function(){
                    TweenMax.to(self.countGround, .5, {scaleX:0, scaleY:0});
                    self.stage.removeChild(self.countMotion);
                    self.stage.removeChild(self.countGround);
                    self.launch_game();
                }
            },800);
        }
    );
}
simplediscs.prototype.create_structure = function(){
    self.preview = self.stage.addChild(new createjs.Container());
    self.preview.regX = 200; self.preview.regY = 350;
    self.preview.x = window.innerWidth/2 - 350
    self.preview.y = window.innerHeight / 2 + 150;
        
    self.preview_floor = new createjs.Shape();
    self.preview_floor.graphics.beginFill("#FFFFFF");
    self.preview_floor.graphics.drawRoundRect(0,320,400, 60, 30);
    self.preview.addChild(self.preview_floor);
    
    self.preview_v = new createjs.Shape();
    self.preview_v.graphics.beginFill("#FFFFFF");
    self.preview_v.graphics.drawRoundRect(170,0,60,350, 30);
    self.preview.addChild(self.preview_v);
    
    self.choices = self.stage.addChild(new createjs.Container());
    self.choices.regX = self.choices.regY = 300;
    self.choices.x = window.innerWidth/2 + 300
    self.choices.y = window.innerHeight/2
    self.choices.scaleX = .8;
    self.choices.scaleY = .8;
    self.choices.rotation = 45;
    
    self.choices_lines = new createjs.Shape();
    //self.choices_lines.regX = self.choices_lines.regY = 300;
    self.choices_lines.graphics.setStrokeStyle(3);
    self.choices_lines.graphics.beginStroke("rgba(0,0,0,.1)");
    self.choices_lines.graphics.moveTo(300, 50);
    self.choices_lines.graphics.lineTo(300, 550);
    self.choices_lines.graphics.moveTo(50, 300);
    self.choices_lines.graphics.lineTo(550, 300);
    self.choices.addChild(self.choices_lines);
    
    self.choice_1 = self.choices.addChild(new createjs.Container());
    self.choice_1.regX = self.choice_1.regY = 150;
    self.choice_1.x = self.choice_1.y = 300;
    self.choice_1.id = 1;
    self.choice_1_socle = new createjs.Shape();
    self.choice_1_socle.graphics.beginFill('#FFFFFF');
    self.choice_1_socle.graphics.drawCircle(0,0,100);
    self.choice_1.addChild(self.choice_1_socle);
    self.choice_1.addEventListener("click", function(event) {
        self.respond(1);
    });
    
    self.choice_2 = self.choices.addChild(new createjs.Container());
    self.choice_2.regX = self.choice_2.regY = 150;
    self.choice_2.x = 600; self.choice_2.y = 300;
    self.choice_2.id = 2;
    self.choice_2_socle = new createjs.Shape();
    self.choice_2_socle.graphics.beginFill('#FFFFFF');
    self.choice_2_socle.graphics.drawCircle(0,0,100);
    self.choice_2.addChild(self.choice_2_socle);
    self.choice_2.addEventListener("click", function(event) {
        self.respond(2);
    });
    
    self.choice_3 = self.choices.addChild(new createjs.Container());
    self.choice_3.regX = self.choice_3.regY = 150;
    self.choice_3.x = 300; self.choice_3.y = 600;
    self.choice_3.id = 3;
    self.choice_3_socle = new createjs.Shape();
    self.choice_3_socle.graphics.beginFill('#FFFFFF');
    self.choice_3_socle.graphics.drawCircle(0,0,100);
    self.choice_3.addChild(self.choice_3_socle);
    self.choice_3.addEventListener("click", function(event) {
        self.respond(3);
    });
    
    self.choice_4 = self.choices.addChild(new createjs.Container());
    self.choice_4.regX = self.choice_4.regY = 150;
    self.choice_4.x = 600; self.choice_4.y = 600;
    self.choice_4.id = 4;
    self.choice_4_socle = new createjs.Shape();
    self.choice_4_socle.graphics.beginFill('#FFFFFF');
    self.choice_4_socle.graphics.drawCircle(0,0,100);
    self.choice_4.addChild(self.choice_4_socle);
    self.choice_4.addEventListener("click", function(event) {
        self.respond(4);
    });
    
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
    
    self.score_infos = self.stage.addChild(new createjs.Container());
    //self.score_infos.regX = 200;
    //self.score_infos.regY = 30;
    //self.score_infos.x = window.innerWidth/2;
    //self.score_infos.y = 45;
    self.score_infos_ground = new createjs.Shape();
    //self.score_infos_ground.graphics.beginFill('#FFFFFF');
    //self.score_infos_ground.graphics.drawRoundRect(0,0,400,60,30);
    self.score_infos.addChild(self.score_infos_ground);
    
    var star = {
        images: ["pages/simplediscs/images/star.png"],
        frames: {width:150, height:150},
        animations: {
            star:0
        }
    }
    
    /*var imgs = {
        images: [
            "pages/simplediscs/images/great.png", 
            "pages/simplediscs/images/wrong.png", 
            "pages/simplediscs/images/chronos.png"
        ],
        frames: {width:39, height:39},
        animations: {
            great:0,
            wrong:1,
            chronos:2
        }
    };
    var imgAssets = new createjs.SpriteSheet(imgs);
    self.greatsprite = new createjs.Sprite(imgAssets, "great");
    self.wrongsprite = new createjs.Sprite(imgAssets, "wrong");
    self.chronosprite = new createjs.Sprite(imgAssets, "chronos");*/
    
    self.greatsprite = new createjs.Bitmap("pages/simplediscs/images/great.png");
    self.wrongsprite = new createjs.Bitmap("pages/simplediscs/images/wrong.png");
    self.chronosprite = new createjs.Bitmap("pages/simplediscs/images/chronos.png");
    
    self.greattext = new createjs.Text();
    self.greattext.font = "100 35px Roboto";
    self.greattext.color = "#FFFFFF";
    self.greattext.text = '0';
    
    self.wrongtext = new createjs.Text();
    self.wrongtext.font = "100 35px Roboto";
    self.wrongtext.color = "#FFFFFF";
    self.wrongtext.text = '0';
    
    self.chronostext = new createjs.Text();
    self.chronostext.font = "100 35px Roboto";
    self.chronostext.color = "#FFFFFF";
    self.chronostext.text = '60';
    
    self.greatsprite.regX = self.greatsprite.regY = self.wrongsprite.regX = self.wrongsprite.regY = self.chronosprite.regX =  self.chronosprite.regY = 20; 
    
    self.greattext.textAlign = "center"; 
    self.wrongtext.textAlign = "center"; 
    self.chronostext.textAlign = "center"; 
    
    self.greatsprite.y = self.wrongsprite.y = self.chronosprite.y = 20;
    
    self.chronosprite.x = 20;
    self.chronostext.x = 20;
    self.chronostext.y = 50;
    
    self.greatsprite.x = 110;
    self.greattext.x = 110;
    self.greattext.y = 50;
    
    self.wrongsprite.x = 200;
    self.wrongtext.x = 200;
    self.wrongtext.y = 50;
    
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
    self.fivehits.regX = self.fivehits.regY = 25;
    self.fivehits.x = -3;
    self.fivehits.y = 45;
    
    self.score_infos.addChild(self.fivehits);
    
    self.score_infos.addChild(self.greatsprite);
    self.score_infos.addChild(self.wrongsprite);
    self.score_infos.addChild(self.chronosprite);
    self.score_infos.addChild(self.greattext);
    self.score_infos.addChild(self.wrongtext);
    self.score_infos.addChild(self.chronostext);
    
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
    self.great_motion = new createjs.Sprite(greatAssets, "stay");
    self.great_motion.regX = self.great_motion.regY = 100;
    self.great_motion.x = window.innerWidth /2;
    self.great_motion.y = window.innerHeight /2;
    self.great_motion.rotation = -self.choices.rotation;
    self.choices.addChild(self.great_motion);
    
    var wrong = {
        images: ["pages/simplediscs/motion/wrong_motion_200.png"],
        frames: {width:200, height:200},
        animations: {
            wrong:[0,46, false],
            stay:48
        }
    };
    var wrongAssets = new createjs.SpriteSheet(wrong);
    self.wrong_motion = new createjs.Sprite(wrongAssets, "stay");
    self.wrong_motion.regX = self.wrong_motion.regY = 100;
    self.wrong_motion.x = window.innerWidth /2;
    self.wrong_motion.y = window.innerHeight /2;
    self.wrong_motion.rotation = -self.choices.rotation;
    self.choices.addChild(self.wrong_motion);
    
    self.score_infos.x = (window.innerWidth/2) - (self.score_infos.getBounds().width/2);
    self.score_infos.y = 20;
    
    
    self.preview.scaleX = self.preview.scaleY = .95;
    self.choices.scaleX = self.choices.scaleY = .75;
}
simplediscs.prototype.respond = function(resp){
    if(!self._is_playing){
        return false;
    }
    if(resp === self.response+1){
        self.party.great++;
        self.greattext.text = self.party.great;
        self.play_response('great', resp);
    }else{
        self.party.wrong++;
        self.wrongtext.text = self.party.wrong;
        self.play_response('wrong', resp);
    }
    self.party.hits++;
    self.destroy_level(function(){
        var lvl = Math.floor(Math.random() * simplediscs_levels.length);
        self.create_level(lvl);
    });
}
simplediscs.prototype.play_response = function(type, resp){
    var pos = {x:self.choices.x, y:self.choices.y};
    var target_pos  = self['choice_'+(self.response+1)];
    var resp_target = self['choice_'+resp];
    var adds = {time:0};
    self._is_playing = false;
    switch(type){
        case 'great':
            self.party.delay+=200;
            TweenMax.to(adds, .5,{
                time:20,
                onUpdate:function(){
                },
                onComplete:function(){
                    self._is_playing = true;
                }
            });
            self.okaokasprite.gotoAndPlay('great');
            break;
        case 'wrong':
            self.party.delay-=200;
            TweenMax.to(adds, .5,{
                time:20,
                onUpdate:function(){
                    
                },
                onComplete:function(){
                    self._is_playing = true;
                }
            });
            self.okaokasprite.gotoAndPlay('wrong');
            self.wrong_motion.x = resp_target.x - 150;
            self.wrong_motion.y = resp_target.y - 150;
            self.wrong_motion.gotoAndPlay('wrong');
            break;
    }
    self.great_motion.x = target_pos.x - 150;
    self.great_motion.y = target_pos.y - 150;
    self.great_motion.gotoAndPlay('great');
}
simplediscs.prototype.destroy_level = function(callBack){
    var cur = 0;
    for(var i=2; i>=0; i--){
        TweenMax.to(self.circles[i], .3, {
            y:-(window.innerHeight),
            ease:Power4.easeIn,
            delay:.2*cur
        });
        cur++;
    }
    for(var c=0; c<4; c++){
        for(var o=0; o<3; o++){
            self['choice_'+(c+1)+'_container']['shape_'+o].scaleX=-1;
            self['choice_'+(c+1)+'_container']['shape_'+o].scaleY=-1;
            self.undraw_arc(
                o,
                self['choice_'+(c+1)+'_container']['shape_'+o], 
                self['choice_'+(c+1)+'_container']['shape_'+o].graphics._strokeStyle.width, 
                self['choice_'+(c+1)+'_container']['shape_'+o].graphics._stroke.style,
                self['choice_'+(c+1)+'_container']['shape_'+o].graphics._strokeStyle.width,
                function(target){
                    /* remove shape */
                    //removeChild(target);
                }
            );
            //self.undraw_arc(self['choice_'+c+'_container']['shape_'+o]);
        }
    }
    setTimeout(function(){
        callBack();
    },800);
}
simplediscs.prototype.create_interface = function(){
    this.init();
}
simplediscs.prototype.end_game = function(){
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
    TweenMax.to(self.score_infos, .5, {
        y       : window.innerHeight/2 - (self.score_infos.getBounds().height/2),
        x       : (window.innerWidth/2) - (self.score_infos.getBounds().width/2),
        ease    : Power4.easeInOut,
        delay   : .5,
        onComplete : function(){
            self.winning_dance.x = window.innerWidth/2 - (146/2);
            self.winning_dance.y = self.score_infos.y - self.winning_dance.getBounds().height - 20;
            self.stage.addChild(self.winning_dance);
            
            
            self.total_score_text = new createjs.Text();
            self.total_score_text.font = "700 100px Roboto";
            self.total_score_text.color = "#FFFFFF";
            self.total_score_text.text = "00000";
            self.total_score_text.textAlign = "center";
            self.total_score_text.x = window.innerWidth/2;
            self.total_score_text.y = self.score_infos.y + self.score_infos.getBounds().height;
            self.stage.addChild(self.total_score_text);
            /* CALCUL SCORE */
            var total_score = parseInt(self.party.delay) + (parseInt(self.party.great)*5) + parseInt(self.party.wrong);
            console.log(total_score);
            var scored = {total:0};
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
                    self.total_score_text.text = score;
                },
                ease:Power4.easeOut,
                onComplete:function(){
                    self.replay_button = new createjs.Bitmap("./images/assets/btn_replay.png");
                    self.replay_button.x = window.innerWidth/2 + 70;
                    self.replay_button.y = self.total_score_text.y + self.total_score_text.getBounds().height + 70;
                    self.replay_button.regX = self.replay_button.regY = 50;
                    self.replay_button.scaleX = self.replay_button.scaleY = 0;
                    
                    self.stats_button = new createjs.Bitmap("./images/assets/btn_stats.png");
                    self.stats_button.x = window.innerWidth/2 - 70;
                    self.stats_button.y = self.total_score_text.y + self.total_score_text.getBounds().height + 70;
                    self.stats_button.regX = self.stats_button.regY = 50;
                    self.stats_button.scaleX = self.stats_button.scaleY = 0;
                    
                    var hitAreaG = new createjs.Graphics();
                    hitAreaG.beginFill(navigation._current_interface_color);
                    hitAreaG.drawCircle(50, 50, 50);
                    hitAreaG.endFill();
                    self.replay_button.hitArea = new createjs.Shape(hitAreaG);
                    self.stats_button.hitArea = new createjs.Shape(hitAreaG);
                    
                    
                    utilities.save_score_game('simplediscs', total_score);
                    self.replay_button.addEventListener("click", function(event) { 
                        window.location.reload();
                    });
                    self.stats_button.addEventListener("click", function(event) { 
                        utilities.show_score_game('simplediscs', total_score);
                    });
                    TweenMax.to(self.replay_button, .5, {
                        scaleX:1,
                        scaleY:1
                    });
                    TweenMax.to(self.stats_button, .5, {
                        scaleX:1,
                        scaleY:1,
                        delay:.2
                    });
                    self.stage.addChild(self.replay_button);
                    self.stage.addChild(self.stats_button);
                }
            });
        }
    });
    TweenMax.to(self.choices, .5, {
        scaleX : 0,
        scaleY : 0,
        delay : .2
    });
    TweenMax.to(self.preview, .5, {
        scaleX : 0,
        scaleY : 0
    });
    
}
simplediscs.prototype.launch_game = function(){
    self._is_playing = true;
    self.okaokasprite.gotoAndPlay('run');
    self.party = {hits:0, great:0, wrong:0, start:new Date().getTime(), delay:60000, play_time:false};
    var lvl = Math.floor(Math.random() * simplediscs_levels.length);
    self.create_level(lvl);
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
        if(typeof self.circles[i] !== "undefined"){
            self.circles[i].removeAllEventListeners();
            self.preview.removeChild(self.circles[i]);
        }
        /* add random circle color on preview self.preview */
        /* reduce by id */
        var w = (400-(60*(i+1)));
        var posy = 280 - (80*i);
        self.circles[i] = new createjs.Shape();
        self.circles[i].graphics.beginFill(colors[simplediscs_levels[id].colors[i]]);
        self.circles[i].graphics.drawRoundRect(0,0,w,80,40);
        self.circles[i].regX = w/2;
        self.circles[i].regY = 40;
        self.circles[i].y = -500;
        self.circles[i].x = 200;
        self.preview.addChild(self.circles[i]);
        TweenMax.to(self.circles[i], .8, {
            y:posy,
            delay:.2*i,
            ease:Power4.easeOut
        });
    }
    self.response = Math.floor(Math.random()*4);
    var next_id = id+1;
    for(var i=0; i<4; i++){
        if(i === self.response){
            self.create_choices((i+1), simplediscs_levels[id]);
        }else{
            if(next_id === simplediscs_levels.length){
                next_id = 0;
            }
            self.create_choices((i+1), simplediscs_levels[next_id]);
            next_id++;
        }
    }
}
simplediscs.prototype.create_preview = function(){
}
simplediscs.prototype.create_choices = function(id, datas){
    /* on détruit l'ancien si il existe */
    if(typeof self['choice_'+id+'_container'] !== "undefined"){
        self['choice_'+id].removeChild(self['choice_'+id+'_container']);
    }
    /* on crée un nouveau container */
    self['choice_'+id+'_container'] = self['choice_'+id].addChild(new createjs.Container());
    //self['choice_'+id].addChild(self['choice_'+id+'_container']);
    /* on ajoute des arcs de couleurs dans le container */
    setTimeout(function(){
        for(var i=0; i<datas.colors.length; i++){
            self['choice_'+id+'_container']['shape_'+i] = new createjs.Shape();
            self['choice_'+id+'_container'].addChild(self['choice_'+id+'_container']['shape_'+i]);
            self.draw_arc(
                i,
                self['choice_'+id+'_container']['shape_'+i], 
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
    if(self._is_playing){
        var now = new Date().getTime();
        /* CHECKING TIME AND RENDER BAR + CHRONOS self.party.start */
        var elapsed = now - self.party.start;
        var rest = (self.party.delay - elapsed);
        self.chronostext.text = Math.round(rest/1000);
        var percent_progress = 100 - ((rest * 100 ) / self.party.delay);
        self.chronos_line_progress.scaleX = percent_progress / 100;
        self.okaokasprite.x = (window.innerWidth) * (percent_progress/ 100) - 50;
        if(Math.round(rest/1000) < 5 && Math.round(rest/1000) > 0){
            if(typeof self.fivehitsLaunched === "undefined" || self.fivehitsLaunched == false){
                self.fivehits.gotoAndPlay('hit');
                self.fivehitsLaunched = true;
            }
        }else{
            self.fivehits.gotoAndStop('stop');
        }
        if(Math.round(rest/1000) === 0){
            var extra_time = (500 * self.party.great) - (800 * self.party.wrong);
            /*if(!self.party.play_time && extra_time > 0){
                self._is_playing = false;
                self.party.delay+= (200 * self.party.great);
                
                elapsed = now - self.party.start;
                rest = (self.party.delay - elapsed);
                self.chronostext.text = Math.round(rest/1000);
                
                percent_progress = 100 - ((rest * 100 ) / self.party.delay);
                TweenMax.to(self.chronos_line_progress, .5, {scaleX:percent_progress / 100});
                TweenMax.to(self.okaokasprite, .5, {
                    x : (window.innerWidth) * (percent_progress/ 100) - 50, 
                    onComplete : function(){
                        utilities.show_popup(
                            {color:navigation._current_interface_color, motion:"tuto_popup", buttons:["play"]}, 
                            function(e){
                                self._is_playing = true;
                                console.log('goooo !');
                            }
                        );
                        console.log('ready');
                    }
                });
                self.party.play_time = true;
            }else{*/
                //+(200 * self.party.great)+(100 * self.party.wrong);
                self._is_playing = false;
                //self.destroy_level(function(){});
                self.okaokasprite.gotoAndStop('stand');
                self.end_game();
                return false;   
            //}
        }
    }
    self.stage.update();
}
simplediscs.prototype.pause = function(){
    self.pause_time = new Date().getTime();
    createjs.Ticker.removeEventListener('tick', self.render);
}
simplediscs.prototype.play = function(){
    if(self._is_playing){
        self.party.delay += new Date().getTime() - self.pause_time;  
    }
    createjs.Ticker.addEventListener("tick", self.render);
}
simplediscs.prototype.destroy = function(callBack){
    if(self.render){
        createjs.Ticker.removeEventListener('tick', self.render);
    }
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