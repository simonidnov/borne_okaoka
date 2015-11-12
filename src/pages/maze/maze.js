var _okg = null;
function maze(){
    this._tile_size = 25;
    this._time_lap = 60000;
    this.maze_level = [];
    this.playlist_uri = "/playlist/";   
    this.playlist = null;
    this._current_maze = 0;
    this.init();
    this.game_infos = {
        great:0,
        wrong:0
    }
    _okg = this;
}
maze.prototype.init = function(){
    //this.create_interface();
}
maze.prototype.pause = function(){
    
}
maze.prototype.play = function(){
    
}
maze.prototype.draw_level = function(){
    this.maze_level = this.generateSquareMaze(21);
    var first_brick = null;new createjs.Shape();

    for(var i=0; i<this.maze_level.length; i++){
        for(var l=0; l<this.maze_level[i].length; l++){
            var brick = new createjs.Shape();
            if(this.maze_level[i][l]){
                brick.graphics.beginFill("rgba(0,0,0,.3)");
                brick.graphics.drawRect(0,0,this._tile_size, this._tile_size);
                brick.x = this._tile_size*i;
                brick.y = this._tile_size*l;
                this.maze_container.addChild(brick);
            }else{
                if(first_brick === null){
                    var first_brick = new createjs.Shape();
                    first_brick.graphics.beginFill("#FFF000");
                    first_brick.graphics.drawRect(0,0,this._tile_size, this._tile_size);
                    first_brick.x = this._tile_size*i;
                    first_brick.y = this._tile_size*l;
                    this.maze_container.addChild(first_brick);
                }
                var last = {line:i,column:l};
            }
        }
        if(i === this.maze_level.length-1){
            var last_brick = new createjs.Shape();
            last_brick.graphics.beginFill("#FFF000");
            last_brick.graphics.drawRect(0,0,this._tile_size, this._tile_size);
            last_brick.x = this._tile_size*last.line;
            last_brick.y = this._tile_size*last.column;
            this.maze_container.addChild(last_brick);
        }
    }
}
maze.prototype.create_interface = function(){
    $('#maze_canvas')
        .css({"width":window.innerWidth, "height":window.innerHeight})
        .attr({"width":window.innerWidth, "height":window.innerHeight});
    
    this.stage = new createjs.Stage("maze_canvas");
    this.stage.autoClear = true;
    this.stage.update();
    this.maze_container = this.stage.addChild(new createjs.Container());
    this.build_chronos_line();
    this.create_taskbar();
    createjs.Touch.enable(this.stage);
    createjs.Ticker.addEventListener("tick", this.tick);
    createjs.Ticker.setFPS(60);
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"maze_tuto_popup", buttons:["play"]}, 
        function(e){
            _okg.count_start_chronos(function(){
                _okg.start_date = new Date().getTime();
                _okg.okaokasprite.gotoAndPlay('run');
                _okg.started = true;
                _okg.draw_level();
            });
        }
    );
}
maze.prototype.tick = function(){
    if( _okg.started ){
        _okg.update_chronos();
    }
    _okg.stage.update();
}
maze.prototype.destroy = function(callBack){
    $('.okaoka_maze').html('');
    callBack();
}
maze.prototype.generateSquareMaze = function(dimension) {
    function iterate(field, x, y) {
        field[x][y] = false;
        while(true) {
            directions = [];
            if(x > 1 && field[x-2][y] == true) {
                directions.push([-1, 0]);
            }
            if(x < field.dimension - 2 && field[x+2][y] == true) {
                directions.push([1, 0]);
            }
            if(y > 1 && field[x][y-2] == true) {
                directions.push([0, -1]);
            }
            if(y < field.dimension - 2 && field[x][y+2] == true) {
                directions.push([0, 1]);
            }
            if(directions.length == 0) {
                return field;
            }
            dir = directions[Math.floor(Math.random()*directions.length)];
            field[x+dir[0]][y+dir[1]] = false;
            field = iterate(field, x+dir[0]*2, y+dir[1]*2);
        }
    }

    // Initialize the field.
    var field = new Array(dimension);
    field.dimension = dimension;
    for(var i = 0; i < dimension; i++) {
        field[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++) {
            field[i][j] = true;
        }
    }

    // Gnerate the maze recursively.
    field = iterate(field, 1, 1);
    return field;
}


maze.prototype.update_chronos = function(){
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

maze.prototype.create_taskbar = function(){
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
maze.prototype.destroy_circles = function(){
    for(var i=0; i<this.stage.getNumChildren(); i++){
        if(this.stage.getChildAt(i).name !== null){
            if(this.stage.getChildAt(i).name.indexOf('circle') !== -1){
                TweenMax.to(this.stage.getChildAt(i), .2, {scaleX:0, scaleY:0, onComplete:function(){
                    _okg.stage.removeChild($(this));
                }});
            }
        }
    }
}
maze.prototype.end_game = function(){
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
                    
                    utilities.save_score_game('number', total_score);
                    _okg.replay_button.addEventListener("click", function(event) { 
                        window.location.href = "#page/"+navigation._current_page_name+"/intro/false/date/"+new Date().getTime();
                    });
                    _okg.stats_button.addEventListener("click", function(event) { 
                        utilities.show_score_game('number', total_score);
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
maze.prototype.count_start_chronos = function(callBack){
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

maze.prototype.build_chronos_line = function(){
    
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