var self = null;
function simplediscs(){
    this.okaokarun = new Image();
    this.okaokarun.src = "pages/simplediscs/images/okaoka_run.png";
    this.party = {hits:0, great:0, wrong:0, start:new Date().getTime(), delay:6000};
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
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"tuto_popup", buttons:["play"]}, 
        function(e){
            /* have to init gameplay */
            self.launch_game();
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
    self.choices_lines.graphics.beginStroke("rgba(0,0,0,.3)");
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
        frames: {width:75, height:75},
        animations: {
            stand:0,
            run:[0,7]
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    self.okaokasprite = new createjs.Sprite(spriteSheet, "run");
    self.okaokasprite.scaleX = self.okaokasprite.scaleY = .7;
    self.okaokasprite.y = -50;
    self.okaokasprite.gotoAndStop('stand');
    self.chronos_line.addChild(self.okaokasprite);
    
    self.score_infos = self.stage.addChild(new createjs.Container());
    self.score_infos.regX = 200;
    self.score_infos.regY = 30;
    self.score_infos.x = window.innerWidth/2;
    self.score_infos.y = 45;
    self.score_infos_ground = new createjs.Shape();
    self.score_infos_ground.graphics.beginFill('#FFFFFF');
    self.score_infos_ground.graphics.drawRoundRect(0,0,400,60,30);
    self.score_infos.addChild(self.score_infos_ground);
    
    var star = {
        images: ["pages/simplediscs/images/star.png"],
        frames: {width:150, height:150},
        animations: {
            star:0
        }
    }
    
    var imgs = {
        images: ["pages/simplediscs/images/great.png", "pages/simplediscs/images/wrong.png", "pages/simplediscs/images/chronos.png"],
        frames: {width:45, height:45},
        animations: {
            great:0,
            wrong:1,
            chronos:2
        }
    };
    var imgAssets = new createjs.SpriteSheet(imgs);
    self.greatsprite = new createjs.Sprite(imgAssets, "great");
    self.wrongsprite = new createjs.Sprite(imgAssets, "wrong");
    self.chronosprite = new createjs.Sprite(imgAssets, "chronos");
    
    self.greattext = new createjs.Text();
    self.greattext.font = "700 50px Roboto";
    self.greattext.color = "#A7A9AB";
    self.greattext.text = '0';
    
    self.wrongtext = new createjs.Text();
    self.wrongtext.font = "700 50px Roboto";
    self.wrongtext.color = "#A7A9AB";
    self.wrongtext.text = '0';
    
    self.chronostext = new createjs.Text();
    self.chronostext.font = "700 50px Roboto";
    self.chronostext.color = "#A7A9AB";
    self.chronostext.text = '60';
    
    self.greatsprite.y = self.wrongsprite.y = self.chronosprite.y = 7;
    self.greatsprite.x = 10;
    self.greattext.x = 70;
    self.wrongsprite.x = 135;
    self.wrongtext.x = 190;
    self.chronosprite.x = 260;
    self.chronostext.x = 320;
    
    self.score_infos.addChild(self.greatsprite);
    self.score_infos.addChild(self.wrongsprite);
    self.score_infos.addChild(self.chronosprite);
    self.score_infos.addChild(self.greattext);
    self.score_infos.addChild(self.wrongtext);
    self.score_infos.addChild(self.chronostext);
    
    //check_great_motion.png
    var great = {
        images: ["pages/simplediscs/motion/check_great_motion.png"],
        frames: {width:120, height:120},
        animations: {
            great:[0,46, false],
            stay:48
        }
    };
    var greatAssets = new createjs.SpriteSheet(great);
    self.great_motion = new createjs.Sprite(greatAssets, "stay");
    self.great_motion.regX = self.great_motion.regY = 60;
    self.great_motion.x = window.innerWidth /2;
    self.great_motion.y = window.innerHeight /2;
    self.stage.addChild(self.great_motion);
    
    var wrong = {
        images: ["pages/simplediscs/motion/check_wrong_motion.png"],
        frames: {width:120, height:120},
        animations: {
            wrong:[0,46, false],
            stay:48
        }
    };
    var wrongAssets = new createjs.SpriteSheet(wrong);
    self.wrong_motion = new createjs.Sprite(wrongAssets, "stay");
    self.wrong_motion.regX = self.wrong_motion.regY = 60;
    self.wrong_motion.x = window.innerWidth /2;
    self.wrong_motion.y = window.innerHeight /2;
    self.stage.addChild(self.wrong_motion);
}
simplediscs.prototype.respond = function(resp){
    console.log(self.response, ' ?= ', resp);
    if(resp === self.response+1){
        console.log('great');
        self.party.great++;
        self.greattext.text = self.party.great;
        self.play_response('great');
    }else{
        console.log('wrong');
        self.party.wrong++;
        self.wrongtext.text = self.party.wrong;
        self.play_response('wrong');
    }
    self.party.hits++;
    self.destroy_level(function(){
        var lvl = Math.floor(Math.random() * simplediscs_levels.length);
        self.create_level(lvl);
    });
}
simplediscs.prototype.play_response = function(type){
    console.log('play motion ::: ', type);
    switch(type){
        case 'great':
            self.great_motion.gotoAndPlay('great');
            break;
        case 'wrong':
            self.wrong_motion.gotoAndPlay('wrong');
            break;
    }
}
simplediscs.prototype.destroy_level = function(callBack){
    var cur = 0;
    for(var i=2; i>=0; i--){
        TweenMax.to(self.circles[i], .3, {
            y:-400,
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
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"end_popup", buttons:["quit", "refresh"]}, 
        function(e){
            console.log(e);
            if(e==1){
                self.launch_game();
            }else{
                navigation.router.navigate('page/menu', {trigger:true, replace:true});
            }
        }
    );
}
simplediscs.prototype.launch_game = function(){
    self._is_playing = true;
    self.okaokasprite.gotoAndPlay('run');
    self.party = {hits:0, great:0, wrong:0, start:new Date().getTime(), delay:60000};
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
        var rest = self.party.delay - elapsed;
        self.chronostext.text = Math.round(rest/1000);
        var percent_progress = 100 - ((rest * 100 ) / self.party.delay);
        self.chronos_line_progress.scaleX = percent_progress / 100;
        self.okaokasprite.x = (window.innerWidth) * (percent_progress/ 100) - 50;
        if(Math.round(rest/1000) === 0){
            self._is_playing = false;
            //self.destroy_level(function(){});
            self.okaokasprite.gotoAndStop('stand');
            self.end_game();
            return false;    
        }
    }
    self.stage.update();
}
simplediscs.prototype.pause = function(){
    createjs.Ticker.removeEventListener('tick', self.render);
}
simplediscs.prototype.play = function(){
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