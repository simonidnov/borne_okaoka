var self = null;
function basketball(){
    this.debug = false;
    this.player1 = {points:0, balls:[]};
    this.player2 = {points:0, balls:[]};
    this.touchs = {};
    this.gameInfos = {
        score:{
            player_1:0,
            player_2:0
        },
        delay:60000,
        start:0,
        status:''
    }
    self = this;
}
basketball.prototype.init = function(){
    $('#ball_zone1').css({
        top:window.innerHeight-180,
        left:130
    });
    $('#ball_zone2').css({
        top:window.innerHeight-180,
        left:window.innerWidth-180
    });
    $('#phaser-basketball').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-basketball', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
basketball.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.image('basket_maille', 'pages/basketball/images/basket_maille.png');
    self.game.load.image('basket_maille_collider', 'pages/basketball/images/basket_maille.png');
    self.game.load.image('basket_v_maille_1', 'pages/basketball/images/basket_v_maille_1.png');
    self.game.load.image('ball', 'pages/basketball/images/ball.png');
    self.game.load.image('ball2', 'pages/basketball/images/ball2.png');
    self.game.load.image('basket_ground', 'pages/basketball/images/backet_ground.png');
    self.game.load.image('basket_arc', 'pages/basketball/images/basket_arc.png');
    self.game.load.image('basket_center', 'pages/basketball/images/basket_center.png');
    self.game.load.image('attachment', 'pages/basketball/images/atachment.png');
    self.game.load.physics('colliders', 'pages/basketball/images/basket_colliders.json');
    self.game.load.spritesheet('okaoka_dribble', 'pages/basketball/images/okaoka_basket.png', 75, 75);
    
    self.game.load.image("replay_btn", "./images/assets/btn_replay.png");
    self.game.load.image("stats_btn", "./images/assets/btn_stats.png");
    
    self.game.load.image('chronos_icon', 'pages/dots/assets/chronos_icon_small.png');
    self.game.load.image('player_1', 'pages/basketball/images/player_1.png');
    self.game.load.image('player_2', 'pages/basketball/images/player_2.png');
}
basketball.prototype.create = function(){
    
    //self.game.time.events.loop(Phaser.Timer.SECOND * 1, self.redraw_chronos, this);
    self.game.time.events.loop(Phaser.Timer.SECOND * 2, self.clean_game, this);
    
    //self.game.world.setBounds(0, 0, window.inerWidth, window.innerHeight);
    
    self.game.stage.backgroundColor = navigation._current_interface_color;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 1;
    self.game.physics.p2.friction = 10;
    self.game.physics.p2.gravity.y = 1000;
    
    self.basket = {};
    self.basket.ground = self.game.add.sprite(window.innerWidth/2, window.innerHeight/2, 'basket_ground');
    
    self.balls = self.game.add.group();
    self.create_ball(1);
    self.create_ball(2);
    
    self.create_basket2(window.innerWidth/2, window.innerHeight/2);
    self.move_basket2(window.innerWidth/2, window.innerHeight-100);
    
    self.create_task_bar();
    
    self.trajectory = self.game.add.graphics(0, 0);
    
    self.chronos = self.game.add.bitmapData(this.game.width, this.game.height);
    self.chronos.context.fillStyle = 'rgb(255, 255, 255)';
    self.chronos.context.strokeStyle = 'rgb(255, 255, 255)';
    self.game.add.image(0, 0, self.chronos);
    
    self.hero_chronos = self.game.add.sprite(200, -1000, 'okaoka_dribble');
    self.hero_chronos.scale.set(1);
    self.hero_chronos.smoothed = true;
    self.hero_chronos.animations.add('walk', [0,1,2,3,4,5,6,7,8,9], 20, true);
    self.hero_chronos.animations.add('pause', [10], 1, false);
    self.hero_chronos.y = window.innerHeight - 75 - 30;
    self.hero_chronos.x = -75;
    
    self.bitmap = self.game.add.bitmapData(this.game.width, this.game.height);
    self.bitmap.context.fillStyle = 'rgb(255, 255, 255)';
    self.bitmap.context.strokeStyle = 'rgb(255, 255, 255)';
    self.game.add.image(0, 0, self.bitmap);
    
    self.start_game();
}
basketball.prototype.start_game = function(){
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"intro_basketball", buttons:["play"]}, 
        function(e){
            utilities.create_over_motion({
                size:{width:550, height:400},
                position:{x:((window.innerWidth/2)-275), y:((window.innerHeight/2) - 200)},
                motion:"count_3"
            }, function(){
                console.log('motion completed');
            });
            utilities.countCallBack = function(){
                utilities.destroy_over_motion();
                self.lets_play();
            }
        }
    );
}
basketball.prototype.lets_play = function(){
    
    self.move_basket2(window.innerWidth/2, window.innerHeight/2);
    $('#ball_zone1').css('display', 'block');
    $('#ball_zone2').css('display', 'block');
    self.gameInfos.start = new Date().getTime();
    self.gameInfos.status = 'started';
    self.hero_chronos.play('walk');
    self.set_events();   
}
basketball.prototype.move_basket2 = function(x, y){
    TweenMax.to(self.basket.attachment.body, 3, {x:x,y:y});
}
basketball.prototype.move_basket = function(x, y){
    TweenMax.to(self.basket_ground.position, 1, {x:x,y:y}); 
    TweenMax.to(self.attachments[0].body, 1, {x:x+30,y:y+130}); 
    TweenMax.to(self.attachments[1].body, 1, {x:x+120,y:y+130}); 
    TweenMax.to(self.attachments[2].body, 1, {x:x+75,y:y+130});
    TweenMax.to(self.basket_arc, 1, {x:x+20,y:y+120});
}
basketball.prototype.create_basket2 = function(posx,posy){
    
    self.basket.attachment = self.game.add.sprite(posx+100, posy+100, 'basket_center');
    
    self.basket.attach1 = self.game.add.sprite(posx-50, posy+50, 'attachment');
    self.basket.attach2 = self.game.add.sprite(posx+0, posy+50, 'attachment');
    self.basket.attach3 = self.game.add.sprite(posx+50, posy+50, 'attachment');
    
    self.basket.maille1 = self.game.add.sprite(posx-50, posy+55, 'basket_maille');
    self.basket.maille2 = self.game.add.sprite(posx-50, posy+75, 'basket_maille');
    self.basket.maille3 = self.game.add.sprite(posx-50, posy+95, 'basket_maille');
    
    self.basket.maille4 = self.game.add.sprite(posx+0, posy+55, 'basket_maille');
    self.basket.maille5 = self.game.add.sprite(posx+0, posy+75, 'basket_maille_collider');
    self.basket.maille6 = self.game.add.sprite(posx+0, posy+95, 'basket_maille');
    
    self.basket.maille7 = self.game.add.sprite(posx+50, posy+55, 'basket_maille');
    self.basket.maille8 = self.game.add.sprite(posx+50, posy+75, 'basket_maille');
    self.basket.maille9 = self.game.add.sprite(posx+50, posy+95, 'basket_maille');
    
    self.basket.arc = self.game.add.sprite(posx+0, posy+0, 'basket_arc');

    $.each(_.keys(self.basket), function(i, key){
        self.game.physics.p2.enable(self.basket[key], self.debug);
        self.basket[key].body.mass = 50;
    });
    self.basket.attachment.body.static = true;
    self.basket.attachment.body.clearCollision(true, true);
    self.basket.ground.body.clearCollision(true, true);
    //self.basket.arc.body.clearCollision(true, true);
    self.basket.arc.body.clearShapes();
    self.basket.arc.body.loadPolygon('colliders', 'basket_arc_collider');
    
    self.basket.attach1.body.clearCollision(true, true);
    self.basket.attach2.body.clearCollision(true, true);
    self.basket.attach3.body.clearCollision(true, true);
    self.basket.maille4.body.clearCollision(true, true);
    self.basket.maille6.body.clearCollision(true, true);
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.ground, [0, 0], self.basket.attachment, [0, 0], 20000
    );
    self.game.physics.p2.createGearConstraint(self.basket.ground, self.basket.attachment, 0, 2);
    self.game.physics.p2.createGearConstraint(self.basket.ground, self.basket.arc, 0, 2);
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.arc, [0, 0], self.basket.ground, [0, 50], 20000
    );
    //self.basket.arc.body.setZeroRotation(20);
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.arc, [0, 0], self.basket.attachment, [0, 50], 20000
    );
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.attach1, [0, 0], self.basket.arc, [-50, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.attach2, [0, 0], self.basket.arc, [0, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.attach3, [0, 0], self.basket.arc, [50, 5], 20000
    );
    
    /* mailles */
    self.basket.maille1.body.mass = 50;
    self.basket.maille2.body.mass = 50;
    self.basket.maille3.body.mass = 50;
    self.basket.maille4.body.mass = 10;
    self.basket.maille5.body.mass = .1;
    self.basket.maille6.body.mass = 1;
    self.basket.maille7.body.mass = 50;
    self.basket.maille8.body.mass = 50;
    self.basket.maille9.body.mass = 50;
    
    self.basket.maille5.body.onBeginContact.add(self.basket_collision, this);
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille1, [0, -15], self.basket.attach1, [0, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille2, [0, -15], self.basket.maille1, [0, 15], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille3, [0, -15], self.basket.maille2, [0, 15], 20000
    );
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille4, [0, -15], self.basket.attach2, [0, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille5, [0, -15], self.basket.maille4, [0, 15], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille6, [0, -15], self.basket.maille5, [0, 15], 20000
    );
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille7, [0, -15], self.basket.attach3, [0, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille8, [0, -15], self.basket.maille7, [0, 15], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille9, [0, -15], self.basket.maille8, [0, 15], 20000
    );
    
    /* distance mailles */
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille1, self.basket.maille4, 40
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille7, self.basket.maille4, 40
    );
    
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille2, self.basket.maille5, 25
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille8, self.basket.maille5, 30
    );
    
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille3, self.basket.maille6, 25
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille9, self.basket.maille6, 30
    );
    
    self.filet = self.game.add.bitmapData(window.innerWidth,window.innerHeight);
    var color = '#FFFFFF';

    self.filet.ctx.beginPath();
    self.filet.ctx.lineWidth = "6";
    self.filet.ctx.strokeStyle = color;
    self.filet.ctx.stroke();
    
    self.sprite = self.game.add.sprite(0, 0, self.filet); 
}
basketball.prototype.destroy_basket = function(){
    self.basket.attachment.destroy();
    
    self.basket.ground.destroy();
    
    self.basket.attach1.destroy();
    self.basket.attach2.destroy();
    self.basket.attach3.destroy();
    
    self.basket.maille1.destroy();
    self.basket.maille2.destroy();
    self.basket.maille3.destroy();
    self.basket.maille4.destroy();
    self.basket.maille5.destroy();
    self.basket.maille6.destroy();
    self.basket.maille7.destroy();
    self.basket.maille8.destroy();
    self.basket.maille9.destroy();
    
    self.basket.arc.destroy();
}
basketball.prototype.destroy_balls = function(){
    $.each(self.player1.balls, function(i, ball){
        if(ball){
            ball.destroy();
        }
    });
    $.each(self.player2.balls, function(i, ball){
        if(ball){
            ball.destroy();
        }
    });
}
basketball.prototype.redraw_filet = function(){
    self.filet.clear();
    self.filet.ctx.beginPath();
    self.filet.ctx.moveTo(self.basket.attach1.position.x, self.basket.attach1.position.y);
    self.filet.ctx.lineTo(self.basket.maille1.position.x, self.basket.maille1.position.y);
    
    self.filet.ctx.moveTo(self.basket.attach2.position.x, self.basket.attach2.position.y);
    self.filet.ctx.lineTo(self.basket.maille4.position.x, self.basket.maille4.position.y);
    
    self.filet.ctx.moveTo(self.basket.attach3.position.x, self.basket.attach3.position.y);
    self.filet.ctx.lineTo(self.basket.maille7.position.x, self.basket.maille7.position.y);
    
    self.filet.ctx.moveTo(self.basket.maille1.position.x, self.basket.maille1.position.y);
    self.filet.ctx.lineTo(self.basket.maille2.position.x, self.basket.maille2.position.y);
    self.filet.ctx.lineTo(self.basket.maille3.position.x, self.basket.maille3.position.y);
    self.filet.ctx.lineTo(self.basket.maille6.position.x, self.basket.maille6.position.y);
    self.filet.ctx.lineTo(self.basket.maille9.position.x, self.basket.maille9.position.y);
    self.filet.ctx.lineTo(self.basket.maille8.position.x, self.basket.maille8.position.y);
    self.filet.ctx.lineTo(self.basket.maille7.position.x, self.basket.maille7.position.y);
    
    self.filet.ctx.moveTo(self.basket.maille4.position.x, self.basket.maille4.position.y);
    self.filet.ctx.lineTo(self.basket.maille5.position.x, self.basket.maille5.position.y);
    self.filet.ctx.lineTo(self.basket.maille6.position.x, self.basket.maille6.position.y);
    /*
    self.filet.ctx.moveTo(self.basket.maille7.position.x, self.basket.maille7.position.y);
    self.filet.ctx.lineTo(self.basket.maille8.position.x, self.basket.maille8.position.y);
    self.filet.ctx.lineTo(self.basket.maille9.position.x, self.basket.maille9.position.y);
    */
    self.filet.ctx.moveTo(self.basket.maille1.position.x, self.basket.maille1.position.y);
    self.filet.ctx.lineTo(self.basket.maille4.position.x, self.basket.maille4.position.y);
    self.filet.ctx.lineTo(self.basket.maille7.position.x, self.basket.maille7.position.y);
    
    self.filet.ctx.moveTo(self.basket.maille2.position.x, self.basket.maille2.position.y);
    self.filet.ctx.lineTo(self.basket.maille5.position.x, self.basket.maille5.position.y);
    self.filet.ctx.lineTo(self.basket.maille8.position.x, self.basket.maille8.position.y);
    
    self.filet.ctx.moveTo(self.basket.maille3.position.x, self.basket.maille3.position.y);
    self.filet.ctx.lineTo(self.basket.maille6.position.x, self.basket.maille6.position.y);
    self.filet.ctx.lineTo(self.basket.maille9.position.x, self.basket.maille9.position.y);
    
    self.filet.ctx.moveTo(self.basket.maille3.position.x, self.basket.maille3.position.y);
    self.filet.ctx.lineTo(self.basket.maille3.position.x, self.basket.maille3.position.y+10);
    
    self.filet.ctx.moveTo(self.basket.maille6.position.x, self.basket.maille6.position.y);
    self.filet.ctx.lineTo(self.basket.maille6.position.x, self.basket.maille6.position.y+10);
    
    self.filet.ctx.moveTo(self.basket.maille9.position.x, self.basket.maille9.position.y);
    self.filet.ctx.lineTo(self.basket.maille9.position.x, self.basket.maille9.position.y+10);
    
    
    self.filet.ctx.lineWidth = 6;
    self.filet.ctx.stroke();
    self.filet.ctx.closePath();
    self.filet.render();
    //self.filet.refreshBuffer();
}
basketball.prototype.get_velocity = function(pos, current_ball){
    //var current_ball = self.player1.balls[self.player1.balls.length-1];
    var a = pos.x - current_ball.position.x;
    var b = pos.y - current_ball.position.y;
    var c = Math.sqrt( a*a + b*b );
    return {x:(a*5), y:(b*5)};
}
basketball.prototype.redraw_chronos = function(){
    if(self.gameInfos.status === 'started'){
        self.chronos.context.clearRect(0,0,window.innerWidth, window.innerHeight);
        
        var now = new Date().getTime();
        var elapsed = now - self.gameInfos.start;
        var rest = (self.gameInfos.delay - elapsed);
        self.chronos_text.text = Math.ceil(rest/1000);
        /* CHECKING TIME AND RENDER BAR + CHRONOS self.party.start */
        var percent_progress = 100 - ((rest * 100 ) / self.gameInfos.delay);
        self.chronos.context.fillStyle = 'rgba(0, 0, 0, .2)';
        self.chronos.context.fillRect(0, window.innerHeight-30, window.innerWidth, window.innerHeight); 
        self.chronos.context.fillStyle = '#FFFFFF';
        self.chronos.context.fillRect(0, window.innerHeight-30, (window.innerWidth * (percent_progress/100)), window.innerHeight); 
        
        self.hero_chronos.x = (window.innerWidth * (percent_progress/100))-75;
        
        self.chronos_text.y = self.player_2_text.y = self.player_1_text.y = 70;
        //self.chronos_line_progress.scaleX = percent_progress / 100;
        //self.okaokasprite.x = (window.innerWidth) * (percent_progress/ 100) - 50;
        /* on check si il reste du temps */
        if(rest <= 0){
            self.end_game();
            /* si le temps est écoulé c'est la fin de la partie */
            //self.gameInfo.started = false;
            //self.okaokasprite.gotoAndStop('stand');
            //self.fivehits.gotoAndStop('stop');
            //self.end_game();
        }
    }
    self.chronos_text.x = self.chronos_icon.getBounds().x + (self.chronos_icon.getBounds().width/2) - (self.chronos_text.getBounds().width/2);
    self.player_1_text.x = self.player_1.getBounds().x + (self.player_1.getBounds().width/2) - (self.player_1_text.getBounds().width/2);
    self.player_2_text.x = self.player_2.getBounds().x + (self.player_2.getBounds().width/2) - (self.player_2_text.getBounds().width/2);
}
basketball.prototype.set_events = function(){
    if(utilities.is_touch_screen()){
        $('body').on('touchstart', self.touchstart);
        $('body').on('touchmove', self.touchmove);
        $('body').on('touchend', self.touchend);
    }else{
        $('#ball_zone1').on('mousedown', self.mousestart);
        $('#ball_zone2').on('mousedown', self.mousestart);
        $('#phaser-basketball canvas').on('mousemove', self.mousemove);
        $('#phaser-basketball canvas').on('mouseup', self.mouseend);
    }   
}
basketball.prototype.unset_events = function(){
    if(utilities.is_touch_screen()){
        $('body').off('touchstart', self.touchstart);
        $('body').off('touchmove', self.touchmove);
        $('body').off('touchend', self.touchend);
    }else{
        $('#ball_zone1').off('mousedown', self.mousestart);
        $('#ball_zone2').off('mousedown', self.mousestart);
        $('#phaser-basketball canvas').off('mousemove', self.mousemove);
        $('#phaser-basketball canvas').off('mouseup', self.mouseend);
    }  
}
basketball.prototype.end_game = function(){
    self.gameInfos.status = "ended";
    self.task_bar.fixedToCamera = false;
    TweenMax.to(self.task_bar, .8, {y:window.innerHeight/2-100, delay:.5, onComplete:function(){
        self.total_text = self.task_bar.add(self.game.make.text(0, 0, '0',  { font: "700 100px Roboto", fill: '#FFFFFF', align:"center"}));
        self.total_text.text = "000";
        self.total_text.y = 120;
        self.total_text.alpha = 0;
        self.total_text.x = window.innerWidth/2 - (self.total_text.getBounds().width/2);
        TweenMax.to(self.total_text, .5, {alpha:1});
        var total = self.gameInfos.score.player_1 + self.gameInfos.score.player_2;
        var scored = {total:0};
        utilities.create_over_motion({
            size:{width:290, height:200},
            position:{x:((window.innerWidth/2)-150), y:((window.innerHeight/2) - 300)},
            motion:"basketball_end_motion"
        }, function(){
        });
        TweenMax.to(scored, .8, {
            total : total,
            delay:.6,
            onUpdate : function(){
                var score = "";
                var num = Math.ceil(scored.total);
                if(num.toString().length < 3){
                    var dif = 3 - num.toString().length;
                    for(var i=0; i<dif; i++){
                        score+="0";
                    }
                }
                self.total_text.y = 120;
                self.total_text.x = window.innerWidth/2 - (self.total_text.getBounds().width/2);
                score+= num.toString();
                self.total_text.text = score;
            },
            ease:Power4.easeOut,
            onComplete:function(){
                self.stat_button = self.game.add.button(self.game.camera.position.x - 120, self.game.camera.position.y + 150, 'stats_btn', self.show_stats, this);
                self.replay_button = self.game.add.button(self.game.camera.position.x + 20, self.game.camera.position.y + 150, 'replay_btn', self.replay_game, this);
                
                utilities.save_score_game('basketball', total);
                
                self.stat_button.scale.x = self.stat_button.scale.y = self.replay_button.scale.x = self.replay_button.scale.y = 0;
                var sc = {s:0};
                TweenMax.to(sc, .5, {s:1, onUpdate:function(){
                    self.stat_button.scale.x = self.stat_button.scale.y = self.replay_button.scale.x = self.replay_button.scale.y = sc.s;
                }});
            }
        });
    }});
    
    self.unset_events();
    
    self.hero_chronos.play('pause');
    
    $('#ball_zone1').css('display', 'none');
    $('#ball_zone2').css('display', 'none');
    
    self.destroy_basket();
    self.destroy_balls();
    self.filet.clear();
    self.trajectory.clear();
    self.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
}

basketball.prototype.replay_game = function(){
    utilities.destroy_over_motion();
    window.location.reload();
}
basketball.prototype.show_stats = function(){
    var total_score = self.gameInfos.score.player_1 + self.gameInfos.score.player_2;
    utilities.show_score_game('basketball', total_score);   
}

basketball.prototype.getTrajectoryPoint = function(startX, startY, velocityX, velocityY, n) {
     /* VOIR CET ARTICLE INTERRESSANT PHASER SAMPLE TRAJECTORY :::: */
    /* http://www.emanueleferonato.com/2015/09/08/html5-physics-sling-with-predictive-trajectory-like-trick-shot-ios-game-using-phaser-box2d/ */
    var t = 1 / 60;    
     var stepVelocityX = t * self.game.physics.p2.pxm(-velocityX); 
     var stepVelocityY = t * self.game.physics.p2.pxm(-velocityY);    
     var stepGravityX = t * t * self.game.physics.p2.pxm(-self.game.physics.p2.gravity.x); 
     var stepGravityY = t * t * self.game.physics.p2.pxm(-self.game.physics.p2.gravity.y);
     startX = self.game.physics.p2.pxm(-startX);
     startY = self.game.physics.p2.pxm(-startY);    
     var tpx = startX + n * stepVelocityX + 0.5 * (n * n + n) * stepGravityX;
     var tpy = startY + n * stepVelocityY + 0.5 * (n * n + n) * stepGravityY;    
     tpx = self.game.physics.p2.mpx(-tpx);
     tpy = self.game.physics.p2.mpx(-tpy);    
     return {
          x: tpx, 
          y: tpy 
     };
}
basketball.prototype.draw_trajectory = function(posx, posy) {
    /* VOIR CET ARTICLE INTERRESSANT PHASER SAMPLE TRAJECTORY :::: */
    /* http://www.emanueleferonato.com/2015/09/08/html5-physics-sling-with-predictive-trajectory-like-trick-shot-ios-game-using-phaser-box2d/ */
    
    var ballpos = {x:80, y:window.innerHeight-80};
    var a = posx - ballpos.x;
    var b = posy - ballpos.y;
    var c = Math.sqrt( a*a + b*b );
    
    var angleRadian = Math.atan2(posx - ballpos.x, posy - ballpos.y);
    var angleDegree = angleRadian * (180 / Math.PI);
    distance= Math.sqrt(posx*ballpos.x + posy*ballpos.y);
    /* bullet_speed = la distance entre la touch et la position de la balle */
    self.BULLET_SPEED = -distance * 2;
    /* theta = angle entre la balle et la position du cursor */
    var theta = angleRadian;
    /* on applique la gravité définie lors du create game */
    self.GRAVITY = self.game.physics.p2.gravity.y;
    // Clear the bitmap
    self.bitmap.context.clearRect(0, 0, self.game.width, self.game.height);
    // Set fill style to white
    self.bitmap.context.fillStyle = 'rgba(255, 255, 255, 0.5)';
    // Calculate a time offset. This offset is used to alter the starting
    var MARCH_SPEED = 60;
    // time of the draw loop so that the dots are offset a little bit each
    self.timeOffset = self.timeOffset + 1 || 0;
    //self.timeOffset = self.timeOffset % MARCH_SPEED;

    // Just a variable to make the trajectory match the actual track a little better.
    // The mismatch is probably due to rounding or the physics engine making approximations.
    var correctionFactor = 0.99;

    // Draw the trajectory
    // http://en.wikipedia.org/wiki/Trajectory_of_a_projectile#Angle_required_to_hit_coordinate_.28x.2Cy.29
    var x = 0, y = 0;
    for(var t = 0 + self.timeOffset/(1000*MARCH_SPEED/60); t < 3; t += 0.03) {
        x = self.BULLET_SPEED * t * Math.cos(theta) * correctionFactor;
        y = self.BULLET_SPEED * t * Math.sin(theta) * correctionFactor - 0.5 * self.GRAVITY * t * t;
        self.bitmap.context.fillRect(x + ballpos.x, ballpos.y - y, 3, 3);
        if (y < -15) break;
    }

    self.bitmap.dirty = true;
};
basketball.prototype.create_ball = function(player){
    if(player === 1){
        self.player1.balls[self.player1.balls.length] = self.balls.create(155, window.innerHeight-155, 'ball');
    }else{
        self.player2.balls[self.player2.balls.length] = self.balls.create(window.innerWidth-155, window.innerHeight-155, 'ball2');
    }
}
basketball.prototype.basket_collision = function(body, bodyB, shapeA, shapeB, equation){
    console.log("basket_collision :::::: ", body);
    if(body){
        console.log("basket_collision body.sprite.key :::: ", body.sprite.key);
        if(body.sprite.key.indexOf('ball') !== -1){
            if(typeof body.sprite.body.match === "undefined"){
                body.sprite.body.match = false;   
            }
            if(body.velocity.y > 0){
                if(!body.sprite.body.match){
                    console.log('body.sprite.body.player :: ', body.sprite.body.player);
                    if(body.sprite.body.player === 1){
                        self.gameInfos.score.player_1+=3;    
                    }else{
                        self.gameInfos.score.player_2+=3;    
                    }
                    self.update_score();
                    body.sprite.body.match = true;   
                    var new_pos_x = window.innerWidth/4 + Math.random()*window.innerWidth/2;
                    var new_pos_y = window.innerHeight/4 + Math.random()*window.innerHeight/2;
                    self.move_basket2(new_pos_x, new_pos_y);
                }
            }
        }
    }
}
basketball.prototype.update_score = function(){
    self.player_1_text.text = self.gameInfos.score.player_1;
    self.player_2_text.text = self.gameInfos.score.player_2;
}
basketball.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    /*if(body){
        if(body.sprite.key === "basket_maille_collider" && self.player1.balls[self.player1.balls.length-2].body.velocity.y > 0){
            var new_pos_x = window.innerWidth/4 + Math.random()*window.innerWidth/2;
            var new_pos_y = window.innerHeight/4 + Math.random()*window.innerHeight/2;
            self.move_basket2(new_pos_x, new_pos_y);
        }
    }*/
}
basketball.prototype.clean_game = function(){
    $.each(self.player1.balls, function(i, ball){
        if(ball){
            if(ball.body){
                if(typeof ball.body.life !== "undefined"){
                    if(new Date().getTime() - ball.body.life > 10000){
                        if(typeof ball.body.match === "undefined"){
                            ball.body.match = false;   
                        }
                        if(!ball.body.match){
                            self.gameInfos.score.player_1-=1;
                        }
                        self.player1.balls.splice(i,1);
                        ball.kill();
                    }
                }
            }
        }
    }); 
    $.each(self.player2.balls, function(i, ball){
        if(ball){
            if(ball.body){
                if(typeof ball.body.life !== "undefined"){
                    if(new Date().getTime() - ball.body.life > 10000){
                        if(typeof ball.body.match === "undefined"){
                            ball.body.match = false;   
                        }
                        if(!ball.body.match){
                            self.gameInfos.score.player_2-=1;
                        }
                        self.player2.balls.splice(i,1);
                        ball.kill();
                    }
                }
            }
        }
    }); 
    self.update_score();
}
basketball.prototype.render = function(){
    if(self.gameInfos.status === 'started'){
        self.redraw_chronos();
    }
    if(self.gameInfos.status !== 'ended'){
        self.redraw_filet();   
    }
}
basketball.prototype.update = function(){
    
}
basketball.prototype.play = function(){
    
}
basketball.prototype.pause = function(){
    
}
basketball.prototype.create_interface = function(){
    this.init();
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
}
basketball.prototype.destroy = function(callBack){
    utilities.destroy_over_motion();
    callBack();
}
basketball.prototype.create_task_bar = function(){
    self.task_bar = self.game.add.group();
    self.task_bar.fixedToCamera = true;
    //self.task_bar.alpha = 0;
    self.chronos_icon = self.task_bar.create(0, 0, 'chronos_icon');
    self.chronos_icon.x = (window.innerWidth/2) - 105;
    
    self.player_1 = self.task_bar.create(0, 0, 'player_1');
    self.player_1.x = (window.innerWidth/2) - 25;
    
    self.player_2 = self.task_bar.create(0, 0, 'player_2');
    self.player_2.x = (window.innerWidth/2) + 60;
    
    self.player_1.y = self.player_2.y = self.chronos_icon.y = 20;
    
    self.chronos_text = self.task_bar.add(self.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    
    self.player_1_text = self.task_bar.add(self.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    
    self.player_2_text = self.task_bar.add(self.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    self.chronos_text.y = self.player_2_text.y = self.player_1_text.y = 80;
    setTimeout(function(){
        self.chronos_text.x = self.chronos_icon.getBounds().x + (self.chronos_icon.getBounds().width/2) - (self.chronos_text.getBounds().width/2);
        self.player_1_text.x = self.player_1.getBounds().x + (self.player_1.getBounds().width/2) - (self.player_1_text.getBounds().width/2);
        self.player_2_text.x = self.player_2.getBounds().x + (self.player_2.getBounds().width/2) - (self.player_2_text.getBounds().width/2);
    }, 10);
}




/* ------------------------------ MOUSE EVENTS ------------------------------- */

basketball.prototype.mousestart = function(evt){
    self._is_down = true;
}
basketball.prototype.mousemove = function(evt){
    if(self._is_down){
        self.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
        self.trajectory.clear();
        self.trajectory.lineStyle(3, 0xffffff);
            
        var ball = self.player1.balls[self.player1.balls.length-1];
        for (var i = 0; i < 50; i++){
            //+(ball.getBounds().width/2)
            //+(ball.getBounds().height/2)
            var velocity = self.get_velocity({x:evt.pageX, y:evt.pageY}, ball);
            var trajectoryPoint = self.getTrajectoryPoint(ball.x+25, ball.y+25, velocity.x, velocity.y, i);
            
            //self.trajectory.moveTo(ball.x, ball.y);
            if(i === 0){
                self.trajectory.moveTo(trajectoryPoint.x, trajectoryPoint.y);    
            }else{
                self.trajectory.lineTo(trajectoryPoint.x, trajectoryPoint.y);    
            }
            self.bitmap.context.fillRect(trajectoryPoint.x-3, trajectoryPoint.y-3, 6, 6);        
        }  
    }
    //self.draw_trajectory(evt.pageX, evt.pageY);
}
basketball.prototype.mouseend = function(evt){
    if(self._is_down){
        self._is_down = false;
        var current_ball = self.player1.balls[self.player1.balls.length-1];
        self.game.physics.p2.enable(current_ball, self.debug);
        //current_ball.life = new Date().getTime();
        current_ball.body.life = new Date().getTime();
        current_ball.body.player = 1;
        current_ball.body.setCircle(26);
        current_ball.body.mass=50;
        current_ball.body.onBeginContact.add(self.collision, this);
        current_ball.body.collision_list = [];

        self.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
        self.trajectory.clear();

        var velocity = self.get_velocity({x:evt.pageX, y:evt.pageY}, current_ball);

        current_ball.body.velocity.x = velocity.x;
        current_ball.body.velocity.y = velocity.y;

        self.create_ball(1);
    }
}

/* --------------------------- END MOUSE EVENTS ------------------------------ */


/* ----------------------------- TOUCH EVENTS -------------------------------- */
basketball.prototype.touchstart = function(evt){
    $.each(evt.originalEvent.touches, function(i, touch){
        if(evt.originalEvent.touches[i].target.id.indexOf('ball_zone') !== -1){
            self.touchs[evt.originalEvent.touches[i].identifier] = {
                target  : evt.originalEvent.touches[i].target.id, 
                is_down : true
            }
        }
    });
}
basketball.prototype.touchmove = function(evt){
    self.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
    self.trajectory.clear();
    self.trajectory.lineStyle(3, 0xffffff);
        
    $.each(evt.originalEvent.touches, function(i, touch){
        if(typeof self.touchs[i] !== "undefined"){
            if(self.touchs[i].is_down){
                if(self.touchs[i].target === "ball_zone1"){
                    var ball = self.player1.balls[self.player1.balls.length-1];
                }else if(self.touchs[i].target === "ball_zone2"){
                    var ball = self.player2.balls[self.player2.balls.length-1];
                }
                for (var i = 0; i < 50; i++){
                    var velocity = self.get_velocity({x:touch.pageX, y:touch.pageY}, ball);
                    var trajectoryPoint = self.getTrajectoryPoint(ball.x+25, ball.y+25, velocity.x, velocity.y, i);
                    if(i === 0){
                        self.trajectory.moveTo(trajectoryPoint.x, trajectoryPoint.y);    
                    }else{
                        self.trajectory.lineTo(trajectoryPoint.x, trajectoryPoint.y);    
                    }
                    self.bitmap.context.fillRect(trajectoryPoint.x-3, trajectoryPoint.y-3, 6, 6);        
                } 
            }
        }
    });
}
basketball.prototype.touchend = function(evt){
    var current_ball = null;
    var ball_id = null;
    if(evt.originalEvent.target.id === "ball_zone1"){
        current_ball = self.player1.balls[self.player1.balls.length-1];
        ball_id = 1;
    }else if(evt.originalEvent.target.id === "ball_zone2"){
        current_ball = self.player2.balls[self.player2.balls.length-1];
        ball_id = 2;
    }
    if(current_ball){
        self.game.physics.p2.enable(current_ball, self.debug);
        //current_ball.life = new Date().getTime();
        current_ball.body.life = new Date().getTime();
        current_ball.body.player = ball_id;
        current_ball.body.setCircle(26);
        current_ball.body.mass=50;
        //current_ball.body.onBeginContact.add(self.collision, this);
        current_ball.body.collision_list = [];
        
        self.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
        self.trajectory.clear();
        var velocity = self.get_velocity({x:evt.originalEvent.changedTouches[0].pageX, y:evt.originalEvent.changedTouches[0].pageY}, current_ball);
        
        current_ball.body.velocity.x = velocity.x;
        current_ball.body.velocity.y = velocity.y;
        
        self.create_ball(ball_id);
    }
}
/* --------------------------- END TOUCH EVENTS ------------------------------ */
