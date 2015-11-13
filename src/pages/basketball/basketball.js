var _okg = null;
function basketball(){
    this.debug = false;
    this.player1 = {points:0, balls:[]};
    this.player2 = {points:0, balls:[]};
    this.touchs = {};
    this.basket_visibility = true;
    this.gameInfos = {
        score:{
            player_1:0,
            player_2:0
        },
        delay:60000,
        start:0,
        status:''
    }
    _okg = this;
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
    _okg.motion_hitzone = TweenMax.to($('.ball_zone'), .5, {css:{'border':'8px solid #FFFFFF'}, repeat:-1, yoyo:true, ease:Back.easeOut, delay:2});
    $('#phaser-basketball').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    _okg.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-basketball', { preload: _okg.preload, create: _okg.create, update: _okg.update, render: _okg.render });
    
}
basketball.prototype.preload = function(){
    _okg.game.time.advancedTiming = true;
    
    _okg.game.load.image("mark_points", "pages/basketball/images/three_points.png");
    
    _okg.game.load.image('basket_maille', 'pages/basketball/images/basket_maille.png');
    _okg.game.load.image('basket_maille_collider', 'pages/basketball/images/basket_maille.png');
    _okg.game.load.image('basket_v_maille_1', 'pages/basketball/images/basket_v_maille_1.png');
    _okg.game.load.image('ball', 'pages/basketball/images/ball.png');
    _okg.game.load.image('ball2', 'pages/basketball/images/ball2.png');
    _okg.game.load.image('basket_ground', 'pages/basketball/images/backet_ground.png');
    _okg.game.load.image('basket_arc', 'pages/basketball/images/basket_arc.png');
    _okg.game.load.image('basket_center', 'pages/basketball/images/basket_center.png');
    _okg.game.load.image('attachment', 'pages/basketball/images/atachment.png');
    _okg.game.load.physics('colliders', 'pages/basketball/images/basket_colliders.json');
    _okg.game.load.spritesheet('okaoka_dribble', 'pages/basketball/images/okaoka_basket.png', 75, 75);
    
    _okg.game.load.image("replay_btn", "./images/assets/btn_replay.png");
    _okg.game.load.image("stats_btn", "./images/assets/btn_podium.png");
    
    _okg.game.load.image('chronos_icon', 'pages/dots/assets/chronos_icon_small.png');
    _okg.game.load.image('player_1', 'pages/basketball/images/player_1.png');
    _okg.game.load.image('player_2', 'pages/basketball/images/player_2.png');
}
basketball.prototype.create = function(){
    
    _okg.game.time.events.loop(Phaser.Timer.SECOND/20, _okg.check_basket, this);
    
    _okg.game.time.events.loop(Phaser.Timer.SECOND * 2, _okg.clean_game, this);
    
    _okg.game.stage.backgroundColor = navigation._current_interface_color;
    
    _okg.game.physics.startSystem(Phaser.Physics.P2JS);
    _okg.game.physics.p2.restitution = 1;
    _okg.game.physics.p2.friction = 10;
    _okg.game.physics.p2.gravity.y = 1000;
    
    _okg.basket = {};
    _okg.basket.ground = _okg.game.add.sprite(window.innerWidth/2, window.innerHeight/2, 'basket_ground');
    
    _okg.balls = _okg.game.add.group();
    _okg.create_ball(1);
    if(utilities.is_touch_screen()){
        _okg.create_ball(2);
    }else{
        $('#ball_zone2').remove();
    }
    
    _okg.create_basket2(window.innerWidth/2, window.innerHeight/2);
    _okg.move_basket2(window.innerWidth/2, window.innerHeight-100);
    
    _okg.create_task_bar();
    
    _okg.trajectory = _okg.game.add.graphics(0, 0);
    
    _okg.chronos = _okg.game.add.bitmapData(this.game.width, this.game.height);
    _okg.chronos.context.fillStyle = 'rgb(255, 255, 255)';
    _okg.chronos.context.strokeStyle = 'rgb(255, 255, 255)';
    _okg.game.add.image(0, 0, _okg.chronos);
    
    _okg.hero_chronos = _okg.game.add.sprite(200, -1000, 'okaoka_dribble');
    _okg.hero_chronos.scale.set(1);
    _okg.hero_chronos.smoothed = true;
    _okg.hero_chronos.animations.add('walk', [0,1,2,3,4,5,6,7,8,9], 20, true);
    _okg.hero_chronos.animations.add('pause', [10], 1, false);
    _okg.hero_chronos.y = window.innerHeight - 75 - 30;
    _okg.hero_chronos.x = -75;
    
    _okg.bitmap = _okg.game.add.bitmapData(this.game.width, this.game.height);
    _okg.bitmap.context.fillStyle = 'rgb(255, 255, 255)';
    _okg.bitmap.context.strokeStyle = 'rgb(255, 255, 255)';
    _okg.game.add.image(0, 0, _okg.bitmap);
    
    _okg.start_game();
}
basketball.prototype.start_game = function(){
    _okg.hide_basket2();
    _okg.basket_visibility = false;
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"intro_basketball", buttons:["play"]}, 
        function(e){
            utilities.create_over_motion({
                size:{width:550, height:400},
                position:{x:((window.innerWidth/2)-275), y:((window.innerHeight/2) - 200)},
                motion:"count_3"
            }, function(){
            });
            utilities.countCallBack = function(){
                _okg.basket_visibility = true;
                _okg.display_basket2();
                utilities.destroy_over_motion();
                _okg.lets_play();
            }
        }
    );
}
basketball.prototype.lets_play = function(){
    
    _okg.move_basket2(window.innerWidth/2, window.innerHeight/2);
    $('#ball_zone1').css('display', 'block');
    $('#ball_zone2').css('display', 'block');
    _okg.gameInfos.start = new Date().getTime();
    _okg.gameInfos.status = 'started';
    _okg.hero_chronos.play('walk');
    _okg.set_events();   
}
basketball.prototype.move_basket2 = function(x, y){
    TweenMax.to(_okg.basket.attachment.body, 3, {x:x,y:y});
}
basketball.prototype.move_basket = function(x, y){
    TweenMax.to(_okg.basket_ground.position, 1, {x:x,y:y}); 
    TweenMax.to(_okg.attachments[0].body, 1, {x:x+30,y:y+130}); 
    TweenMax.to(_okg.attachments[1].body, 1, {x:x+120,y:y+130}); 
    TweenMax.to(_okg.attachments[2].body, 1, {x:x+75,y:y+130});
    TweenMax.to(_okg.basket_arc, 1, {x:x+20,y:y+120});
}
basketball.prototype.display_basket2 = function(posx,posy){
    $.each(_.keys(_okg.basket), function(i,key){
        _okg.basket[key].alpha = 1; 
    });
}
basketball.prototype.hide_basket2 = function(posx,posy){
    $.each(_.keys(_okg.basket), function(i,key){
        _okg.basket[key].alpha = 0; 
    });
}
basketball.prototype.create_basket2 = function(posx,posy){
    
    _okg.basket.attachment = _okg.game.add.sprite(posx+100, posy+100, 'basket_center');
    
    _okg.basket.attach1 = _okg.game.add.sprite(posx-50, posy+50, 'attachment');
    _okg.basket.attach2 = _okg.game.add.sprite(posx+0, posy+50, 'attachment');
    _okg.basket.attach3 = _okg.game.add.sprite(posx+50, posy+50, 'attachment');
    
    _okg.basket.maille1 = _okg.game.add.sprite(posx-50, posy+55, 'basket_maille');
    _okg.basket.maille2 = _okg.game.add.sprite(posx-50, posy+75, 'basket_maille');
    _okg.basket.maille3 = _okg.game.add.sprite(posx-50, posy+95, 'basket_maille');
    
    _okg.basket.maille4 = _okg.game.add.sprite(posx+0, posy+55, 'basket_maille');
    _okg.basket.maille5 = _okg.game.add.sprite(posx+0, posy+75, 'basket_maille_collider');
    _okg.basket.maille6 = _okg.game.add.sprite(posx+0, posy+95, 'basket_maille');
    
    _okg.basket.maille7 = _okg.game.add.sprite(posx+50, posy+55, 'basket_maille');
    _okg.basket.maille8 = _okg.game.add.sprite(posx+50, posy+75, 'basket_maille');
    _okg.basket.maille9 = _okg.game.add.sprite(posx+50, posy+95, 'basket_maille');
    
    _okg.basket.arc = _okg.game.add.sprite(posx+0, posy+0, 'basket_arc');

    $.each(_.keys(_okg.basket), function(i, key){
        _okg.game.physics.p2.enable(_okg.basket[key], _okg.debug);
        _okg.basket[key].body.mass = 50;
    });
    _okg.basket.attachment.body.static = true;
    _okg.basket.attachment.body.clearCollision(true, true);
    _okg.basket.ground.body.clearCollision(true, true);
    //_okg.basket.arc.body.clearCollision(true, true);
    _okg.basket.arc.body.clearShapes();
    _okg.basket.arc.body.loadPolygon('colliders', 'basket_arc_collider');
    
    _okg.basket.attach1.body.clearCollision(true, true);
    _okg.basket.attach2.body.clearCollision(true, true);
    _okg.basket.attach3.body.clearCollision(true, true);
    _okg.basket.maille4.body.clearCollision(true, true);
    _okg.basket.maille6.body.clearCollision(true, true);
    
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.ground, [0, 0], _okg.basket.attachment, [0, 0], 20000
    );
    _okg.game.physics.p2.createGearConstraint(_okg.basket.ground, _okg.basket.attachment, 0, 2);
    _okg.game.physics.p2.createGearConstraint(_okg.basket.ground, _okg.basket.arc, 0, 2);
    
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.arc, [0, 0], _okg.basket.ground, [0, 50], 20000
    );
    //_okg.basket.arc.body.setZeroRotation(20);
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.arc, [0, 0], _okg.basket.attachment, [0, 50], 20000
    );
    
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.attach1, [0, 0], _okg.basket.arc, [-50, 5], 20000
    );
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.attach2, [0, 0], _okg.basket.arc, [0, 5], 20000
    );
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.attach3, [0, 0], _okg.basket.arc, [50, 5], 20000
    );
    
    /* mailles */
    _okg.basket.maille1.body.mass = 50;
    _okg.basket.maille2.body.mass = 50;
    _okg.basket.maille3.body.mass = 50;
    _okg.basket.maille4.body.mass = 10;
    _okg.basket.maille5.body.mass = .1;
    _okg.basket.maille6.body.mass = 1;
    _okg.basket.maille7.body.mass = 50;
    _okg.basket.maille8.body.mass = 50;
    _okg.basket.maille9.body.mass = 50;
    
    _okg.basket.maille5.body.onBeginContact.add(_okg.basket_collision, this);
    
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.maille1, [0, -15], _okg.basket.attach1, [0, 5], 20000
    );
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.maille2, [0, -15], _okg.basket.maille1, [0, 15], 20000
    );
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.maille3, [0, -15], _okg.basket.maille2, [0, 15], 20000
    );
    
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.maille4, [0, -15], _okg.basket.attach2, [0, 5], 20000
    );
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.maille5, [0, -15], _okg.basket.maille4, [0, 15], 20000
    );
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.maille6, [0, -15], _okg.basket.maille5, [0, 15], 20000
    );
    
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.maille7, [0, -15], _okg.basket.attach3, [0, 5], 20000
    );
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.maille8, [0, -15], _okg.basket.maille7, [0, 15], 20000
    );
    _okg.game.physics.p2.createRevoluteConstraint(
        _okg.basket.maille9, [0, -15], _okg.basket.maille8, [0, 15], 20000
    );
    
    /* distance mailles */
    _okg.game.physics.p2.createDistanceConstraint(
        _okg.basket.maille1, _okg.basket.maille4, 40
    );
    _okg.game.physics.p2.createDistanceConstraint(
        _okg.basket.maille7, _okg.basket.maille4, 40
    );
    
    _okg.game.physics.p2.createDistanceConstraint(
        _okg.basket.maille2, _okg.basket.maille5, 25
    );
    _okg.game.physics.p2.createDistanceConstraint(
        _okg.basket.maille8, _okg.basket.maille5, 30
    );
    
    _okg.game.physics.p2.createDistanceConstraint(
        _okg.basket.maille3, _okg.basket.maille6, 25
    );
    _okg.game.physics.p2.createDistanceConstraint(
        _okg.basket.maille9, _okg.basket.maille6, 30
    );
    
    _okg.filet = _okg.game.add.bitmapData(window.innerWidth,window.innerHeight);
    var color = '#FFFFFF';

    _okg.filet.ctx.beginPath();
    _okg.filet.ctx.lineWidth = "6";
    _okg.filet.ctx.strokeStyle = color;
    _okg.filet.ctx.stroke();
    
    _okg.sprite = _okg.game.add.sprite(0, 0, _okg.filet); 
}
basketball.prototype.destroy_basket = function(){
    _okg.basket.attachment.destroy();
    
    _okg.basket.ground.destroy();
    
    _okg.basket.attach1.destroy();
    _okg.basket.attach2.destroy();
    _okg.basket.attach3.destroy();
    
    _okg.basket.maille1.destroy();
    _okg.basket.maille2.destroy();
    _okg.basket.maille3.destroy();
    _okg.basket.maille4.destroy();
    _okg.basket.maille5.destroy();
    _okg.basket.maille6.destroy();
    _okg.basket.maille7.destroy();
    _okg.basket.maille8.destroy();
    _okg.basket.maille9.destroy();
    
    _okg.basket.arc.destroy();
}
basketball.prototype.destroy_balls = function(){
    $.each(_okg.player1.balls, function(i, ball){
        if(ball){
            ball.destroy();
        }
    });
    $.each(_okg.player2.balls, function(i, ball){
        if(ball){
            ball.destroy();
        }
    });
}
basketball.prototype.redraw_filet = function(){
    _okg.filet.clear();
    if(!_okg.basket_visibility){
        return;
    }
    _okg.filet.ctx.beginPath();
    _okg.filet.ctx.moveTo(_okg.basket.attach1.position.x, _okg.basket.attach1.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille1.position.x, _okg.basket.maille1.position.y);
    
    _okg.filet.ctx.moveTo(_okg.basket.attach2.position.x, _okg.basket.attach2.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille4.position.x, _okg.basket.maille4.position.y);
    
    _okg.filet.ctx.moveTo(_okg.basket.attach3.position.x, _okg.basket.attach3.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille7.position.x, _okg.basket.maille7.position.y);
    
    _okg.filet.ctx.moveTo(_okg.basket.maille1.position.x, _okg.basket.maille1.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille2.position.x, _okg.basket.maille2.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille3.position.x, _okg.basket.maille3.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille6.position.x, _okg.basket.maille6.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille9.position.x, _okg.basket.maille9.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille8.position.x, _okg.basket.maille8.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille7.position.x, _okg.basket.maille7.position.y);
    
    _okg.filet.ctx.moveTo(_okg.basket.maille4.position.x, _okg.basket.maille4.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille5.position.x, _okg.basket.maille5.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille6.position.x, _okg.basket.maille6.position.y);
    /*
    _okg.filet.ctx.moveTo(_okg.basket.maille7.position.x, _okg.basket.maille7.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille8.position.x, _okg.basket.maille8.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille9.position.x, _okg.basket.maille9.position.y);
    */
    _okg.filet.ctx.moveTo(_okg.basket.maille1.position.x, _okg.basket.maille1.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille4.position.x, _okg.basket.maille4.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille7.position.x, _okg.basket.maille7.position.y);
    
    _okg.filet.ctx.moveTo(_okg.basket.maille2.position.x, _okg.basket.maille2.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille5.position.x, _okg.basket.maille5.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille8.position.x, _okg.basket.maille8.position.y);
    
    _okg.filet.ctx.moveTo(_okg.basket.maille3.position.x, _okg.basket.maille3.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille6.position.x, _okg.basket.maille6.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille9.position.x, _okg.basket.maille9.position.y);
    
    _okg.filet.ctx.moveTo(_okg.basket.maille3.position.x, _okg.basket.maille3.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille3.position.x, _okg.basket.maille3.position.y+10);
    
    _okg.filet.ctx.moveTo(_okg.basket.maille6.position.x, _okg.basket.maille6.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille6.position.x, _okg.basket.maille6.position.y+10);
    
    _okg.filet.ctx.moveTo(_okg.basket.maille9.position.x, _okg.basket.maille9.position.y);
    _okg.filet.ctx.lineTo(_okg.basket.maille9.position.x, _okg.basket.maille9.position.y+10);
    
    
    _okg.filet.ctx.lineWidth = 6;
    _okg.filet.ctx.stroke();
    _okg.filet.ctx.closePath();
    //_okg.filet.render();
    //_okg.filet.refreshBuffer();
}
basketball.prototype.get_velocity = function(pos, current_ball){
    //var current_ball = _okg.player1.balls[_okg.player1.balls.length-1];
    var a = pos.x - current_ball.position.x;
    var b = pos.y - current_ball.position.y;
    var c = Math.sqrt( a*a + b*b );
    return {x:(a*5), y:(b*5)};
}
basketball.prototype.redraw_chronos = function(){
    if(_okg.gameInfos.status === 'started'){
        _okg.chronos.context.clearRect(0,0,window.innerWidth, window.innerHeight);
        
        var now = new Date().getTime();
        var elapsed = now - _okg.gameInfos.start;
        var rest = (_okg.gameInfos.delay - elapsed);
        _okg.chronos_text.text = Math.ceil(rest/1000);
        /* CHECKING TIME AND RENDER BAR + CHRONOS _okg.party.start */
        var percent_progress = 100 - ((rest * 100 ) / _okg.gameInfos.delay);
        _okg.chronos.context.fillStyle = 'rgba(0, 0, 0, .2)';
        _okg.chronos.context.fillRect(0, window.innerHeight-30, window.innerWidth, window.innerHeight); 
        _okg.chronos.context.fillStyle = '#FFFFFF';
        _okg.chronos.context.fillRect(0, window.innerHeight-30, (window.innerWidth * (percent_progress/100)), window.innerHeight); 
        
        _okg.hero_chronos.x = (window.innerWidth * (percent_progress/100))-75;
        
        _okg.chronos_text.y = _okg.player_2_text.y = _okg.player_1_text.y = 70;
        //_okg.chronos_line_progress.scaleX = percent_progress / 100;
        //_okg.okaokasprite.x = (window.innerWidth) * (percent_progress/ 100) - 50;
        /* on check si il reste du temps */
        if(Math.round(rest) === 5){
            if(typeof _okg.five_last_sound === "undefined"){
                audio_manager.play_sound('chronos_five_seconds', 0, function(e){
                    _okg.five_last_sound = e;
                });
            }
        }
        if(rest <= 0){
            _okg.end_game();
            /* si le temps est écoulé c'est la fin de la partie */
            //_okg.gameInfo.started = false;
            //_okg.okaokasprite.gotoAndStop('stand');
            //_okg.fivehits.gotoAndStop('stop');
            //_okg.end_game();
        }
    }
    _okg.chronos_text.x = _okg.chronos_icon.getBounds().x + (_okg.chronos_icon.getBounds().width/2) - (_okg.chronos_text.getBounds().width/2);
    _okg.player_1_text.x = _okg.player_1.getBounds().x + (_okg.player_1.getBounds().width/2) - (_okg.player_1_text.getBounds().width/2);
    _okg.player_2_text.x = _okg.player_2.getBounds().x + (_okg.player_2.getBounds().width/2) - (_okg.player_2_text.getBounds().width/2);
}
basketball.prototype.set_events = function(){
    if(utilities.is_touch_screen()){
        $('body').on('touchstart', _okg.touchstart);
        $('body').on('touchmove', _okg.touchmove);
        $('body').on('touchend', _okg.touchend);
    }else{
        $('#ball_zone1').on('mousedown', _okg.mousestart);
        $('#ball_zone2').on('mousedown', _okg.mousestart);
        $('#phaser-basketball canvas').on('mousemove', _okg.mousemove);
        $('#phaser-basketball canvas').on('mouseup', _okg.mouseend);
    }   
}
basketball.prototype.unset_events = function(){
    if(utilities.is_touch_screen()){
        $('body').off('touchstart', _okg.touchstart);
        $('body').off('touchmove', _okg.touchmove);
        $('body').off('touchend', _okg.touchend);
    }else{
        $('#ball_zone1').off('mousedown', _okg.mousestart);
        $('#ball_zone2').off('mousedown', _okg.mousestart);
        $('#phaser-basketball canvas').off('mousemove', _okg.mousemove);
        $('#phaser-basketball canvas').off('mouseup', _okg.mouseend);
    }  
}
basketball.prototype.end_game = function(){
    audio_manager.play_sound('chronos_end', 0, function(e){});
    _okg.gameInfos.status = "ended";
    _okg.task_bar.fixedToCamera = false;
    TweenMax.to(_okg.task_bar, .8, {y:window.innerHeight/2-100, delay:.5, onComplete:function(){
        if(typeof _okg === "undefined"){
            return false;
        }
        _okg.total_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "700 100px Roboto", fill: '#FFFFFF', align:"center"}));
        _okg.total_text.text = "000";
        _okg.total_text.y = 120;
        _okg.total_text.alpha = 0;
        _okg.total_text.x = window.innerWidth/2 - (_okg.total_text.getBounds().width/2);
        TweenMax.to(_okg.total_text, .5, {alpha:1});
        var total = _okg.gameInfos.score.player_1 + _okg.gameInfos.score.player_2;
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
                if(typeof _okg !== "undefined"){
                    var score = "";
                    var num = Math.ceil(scored.total);
                    if(num.toString().length < 3){
                        var dif = 3 - num.toString().length;
                        for(var i=0; i<dif; i++){
                            score+="0";
                        }
                    }
                    if(typeof _okg.total_text !== "undefined"){
                        _okg.total_text.y = 120;
                        _okg.total_text.x = window.innerWidth/2 - (_okg.total_text.getBounds().width/2);
                        score+= num.toString();
                        _okg.total_text.text = score;
                    }
                }
            },
            ease:Power4.easeOut,
            onComplete:function(){
                if(typeof _okg === "undefined"){
                    return false;
                }
                _okg.stat_button = _okg.game.add.button(_okg.game.camera.position.x - 120, _okg.game.camera.position.y + 150, 'stats_btn', _okg.show_stats, this);
                _okg.replay_button = _okg.game.add.button(_okg.game.camera.position.x + 20, _okg.game.camera.position.y + 150, 'replay_btn', _okg.replay_game, this);
                
                utilities.save_score_game('basketball', total);
                
                _okg.stat_button.scale.x = _okg.stat_button.scale.y = _okg.replay_button.scale.x = _okg.replay_button.scale.y = 0;
                var sc = {s:0};
                TweenMax.to(sc, .5, {s:1, onUpdate:function(){
                    if(typeof _okg === "undefined"){
                        return false;
                    }
                    if(typeof _okg.stat_button === "undefined"){
                        return false;
                    }
                    _okg.stat_button.scale.x = _okg.stat_button.scale.y = _okg.replay_button.scale.x = _okg.replay_button.scale.y = sc.s;
                }});
            }
        });
    }});
    
    _okg.unset_events();
    
    _okg.hero_chronos.play('pause');
    
    $('#ball_zone1').css('display', 'none');
    $('#ball_zone2').css('display', 'none');
    
    _okg.destroy_basket();
    _okg.destroy_balls();
    _okg.filet.clear();
    _okg.trajectory.clear();
    _okg.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
}

basketball.prototype.replay_game = function(){
    utilities.destroy_over_motion();
    window.location.href =  "#page/"+navigation._current_page_name+"/intro/false/date/"+new Date().getTime();
    gui.Window.get().reload(3);
}
basketball.prototype.show_stats = function(){
    var total_score = _okg.gameInfos.score.player_1 + _okg.gameInfos.score.player_2;
    utilities.show_score_game('basketball', total_score);   
}

basketball.prototype.getTrajectoryPoint = function(startX, startY, velocityX, velocityY, n) {
     /* VOIR CET ARTICLE INTERRESSANT PHASER SAMPLE TRAJECTORY :::: */
    /* http://www.emanueleferonato.com/2015/09/08/html5-physics-sling-with-predictive-trajectory-like-trick-shot-ios-game-using-phaser-box2d/ */
    var t = 1 / 60;    
     var stepVelocityX = t * _okg.game.physics.p2.pxm(-velocityX); 
     var stepVelocityY = t * _okg.game.physics.p2.pxm(-velocityY);    
     var stepGravityX = t * t * _okg.game.physics.p2.pxm(-_okg.game.physics.p2.gravity.x); 
     var stepGravityY = t * t * _okg.game.physics.p2.pxm(-_okg.game.physics.p2.gravity.y);
     startX = _okg.game.physics.p2.pxm(-startX);
     startY = _okg.game.physics.p2.pxm(-startY);    
     var tpx = startX + n * stepVelocityX + 0.5 * (n * n + n) * stepGravityX;
     var tpy = startY + n * stepVelocityY + 0.5 * (n * n + n) * stepGravityY;    
     tpx = _okg.game.physics.p2.mpx(-tpx);
     tpy = _okg.game.physics.p2.mpx(-tpy);    
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
    _okg.BULLET_SPEED = -distance * 2;
    /* theta = angle entre la balle et la position du cursor */
    var theta = angleRadian;
    /* on applique la gravité définie lors du create game */
    _okg.GRAVITY = _okg.game.physics.p2.gravity.y;
    // Clear the bitmap
    _okg.bitmap.context.clearRect(0, 0, _okg.game.width, _okg.game.height);
    // Set fill style to white
    _okg.bitmap.context.fillStyle = 'rgba(255, 255, 255, 0.5)';
    // Calculate a time offset. This offset is used to alter the starting
    var MARCH_SPEED = 60;
    // time of the draw loop so that the dots are offset a little bit each
    _okg.timeOffset = _okg.timeOffset + 1 || 0;
    //_okg.timeOffset = _okg.timeOffset % MARCH_SPEED;

    // Just a variable to make the trajectory match the actual track a little better.
    // The mismatch is probably due to rounding or the physics engine making approximations.
    var correctionFactor = 0.99;

    // Draw the trajectory
    // http://en.wikipedia.org/wiki/Trajectory_of_a_projectile#Angle_required_to_hit_coordinate_.28x.2Cy.29
    var x = 0, y = 0;
    for(var t = 0 + _okg.timeOffset/(1000*MARCH_SPEED/60); t < 3; t += 0.03) {
        x = _okg.BULLET_SPEED * t * Math.cos(theta) * correctionFactor;
        y = _okg.BULLET_SPEED * t * Math.sin(theta) * correctionFactor - 0.5 * _okg.GRAVITY * t * t;
        _okg.bitmap.context.fillRect(x + ballpos.x, ballpos.y - y, 3, 3);
        if (y < -15) break;
    }

    _okg.bitmap.dirty = true;
};
basketball.prototype.create_ball = function(player){
    if(player === 1){
        _okg.player1.balls[_okg.player1.balls.length] = _okg.balls.create(155, window.innerHeight-155, 'ball');
    }else{
        _okg.player2.balls[_okg.player2.balls.length] = _okg.balls.create(window.innerWidth-155, window.innerHeight-155, 'ball2');
    }
}
basketball.prototype.basket_collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body){
        if(body.sprite.key.indexOf('ball') !== -1){
            if(typeof body.sprite.body.match === "undefined"){
                body.sprite.body.match = false;   
            }
            if(body.velocity.y > 0){
                if(!body.sprite.body.match){
                    if(typeof _okg._mark_sound === "undefined"){
                        audio_manager.play_sound('basket_win', 0, function(e){
                            _okg._mark_sound = e;
                        });
                    }else{
                        _okg._mark_sound.play();
                    }
                    if(body.sprite.body.player === 1){
                        _okg.gameInfos.score.player_1+=3;    
                    }else{
                        _okg.gameInfos.score.player_2+=3;    
                    }
                    _okg.threepoints();
                    _okg.update_score();
                    body.sprite.body.match = true;   
                    var new_pos_x = window.innerWidth/4 + Math.random()*window.innerWidth/2;
                    var new_pos_y = window.innerHeight/4 + Math.random()*window.innerHeight/2;
                    _okg.move_basket2(new_pos_x, new_pos_y);
                }
            }
        }
    }
}
basketball.prototype.update_score = function(){
    _okg.player_1_text.text = _okg.gameInfos.score.player_1;
    _okg.player_2_text.text = _okg.gameInfos.score.player_2;
}
basketball.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body){
        if(body.sprite.key === "basket_arc"){
            audio_manager.play_sound('basket_rebond', 0, function(e){});
        }
    }
}
basketball.prototype.clean_game = function(){
    $.each(_okg.player1.balls, function(i, ball){
        if(ball){
            if(ball.body){
                if(typeof ball.body.life !== "undefined"){
                    if(new Date().getTime() - ball.body.life > 8000){
                        if(typeof ball.body.match === "undefined"){
                            ball.body.match = false;
                        }
                        _okg.player1.balls.splice(i,1);
                        ball.kill();
                    }
                }
            }
        }
    }); 
    $.each(_okg.player2.balls, function(i, ball){
        if(ball){
            if(ball.body){
                if(typeof ball.body.life !== "undefined"){
                    if(new Date().getTime() - ball.body.life > 10000){
                        if(typeof ball.body.match === "undefined"){
                            ball.body.match = false;   
                        }
                        _okg.player2.balls.splice(i,1);
                        ball.kill();
                    }
                }
            }
        }
    }); 
    _okg.update_score();
}
basketball.prototype.render = function(){
    
}
basketball.prototype.update = function(){
    
}
basketball.prototype.check_basket = function(){
    if(_okg.gameInfos.status !== 'ended'){
        _okg.redraw_filet();   
    }
    if(_okg.gameInfos.status === 'started'){
        _okg.redraw_chronos();
    }
}
basketball.prototype.play = function(){
    
}
basketball.prototype.pause = function(){
    
}
basketball.prototype.create_interface = function(){
    this.init();
}
basketball.prototype.destroy = function(callBack){
    if(typeof _okg.motion_hitzone !== "undefened"){
        _okg.motion_hitzone.kill();
    }
    _okg.game.destroy();
    _okg.delete_objects(_okg);
    utilities.destroy_over_motion();
    callBack();
}
basketball.prototype.delete_objects = function(obj){
    $.each(_.keys(obj), function(i, k){
        delete obj[k];
        obj[k] = null;
    });
}
basketball.prototype.create_task_bar = function(){
    _okg.task_bar = _okg.game.add.group();
    _okg.task_bar.fixedToCamera = true;
    //_okg.task_bar.alpha = 0;
    _okg.chronos_icon = _okg.task_bar.create(0, 0, 'chronos_icon');
    _okg.chronos_icon.x = (window.innerWidth/2) - 105;
    
    _okg.player_1 = _okg.task_bar.create(0, 0, 'player_1');
    _okg.player_1.x = (window.innerWidth/2) - 25;
    
    _okg.player_2 = _okg.task_bar.create(0, 0, 'player_2');
    _okg.player_2.x = (window.innerWidth/2) + 60;
    
    _okg.player_1.y = _okg.player_2.y = _okg.chronos_icon.y = 20;
    
    _okg.chronos_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    
    _okg.player_1_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    
    _okg.player_2_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    _okg.chronos_text.y = _okg.player_2_text.y = _okg.player_1_text.y = 80;
    setTimeout(function(){
        _okg.chronos_text.x = _okg.chronos_icon.getBounds().x + (_okg.chronos_icon.getBounds().width/2) - (_okg.chronos_text.getBounds().width/2);
        _okg.player_1_text.x = _okg.player_1.getBounds().x + (_okg.player_1.getBounds().width/2) - (_okg.player_1_text.getBounds().width/2);
        _okg.player_2_text.x = _okg.player_2.getBounds().x + (_okg.player_2.getBounds().width/2) - (_okg.player_2_text.getBounds().width/2);
    }, 10);
}




/* ------------------------------ MOUSE EVENTS ------------------------------- */

basketball.prototype.mousestart = function(evt){
    navigation.set_update_events();
    _okg._is_down = true;
}
basketball.prototype.mousemove = function(evt){
    if(_okg._is_down){
        _okg.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
        _okg.trajectory.clear();
        _okg.trajectory.lineStyle(8, 0xffffff, .5);
    
        var ball = _okg.player1.balls[_okg.player1.balls.length-1];
        for (var i = 0; i < 50; i++){
            if (i%2 == 0){
                var velocity = _okg.get_velocity({x:evt.pageX, y:evt.pageY}, ball);
                var trajectoryPoint = _okg.getTrajectoryPoint(ball.x+25, ball.y+25, velocity.x, velocity.y, i);
                if(i === 0){
                    _okg.trajectory.moveTo(trajectoryPoint.x, trajectoryPoint.y);    
                }else{
                    _okg.trajectory.lineTo(trajectoryPoint.x, trajectoryPoint.y);    
                }
                //_okg.bitmap.context.fillStyle = 'rgba(255,255,255,'+(((50*i)/1000))+')';
            }
            //_okg.bitmap.context.fillRect(trajectoryPoint.x-3, trajectoryPoint.y-3, 6, 6);     
        }  
    }
    //_okg.draw_trajectory(evt.pageX, evt.pageY);
}
basketball.prototype.mouseend = function(evt){
    if(_okg._is_down){
        if(typeof _okg._launch_sound === "undefined"){
            audio_manager.play_sound('basket_launch', 0, function(e){                                                   _okg._launch_sound = e;
            });
        }else{
            _okg._launch_sound.play();
        }
        _okg._is_down = false;
        var current_ball = _okg.player1.balls[_okg.player1.balls.length-1];
        _okg.game.physics.p2.enable(current_ball, _okg.debug);
        //current_ball.life = new Date().getTime();
        current_ball.body.life = new Date().getTime();
        current_ball.body.player = 1;
        current_ball.body.setCircle(26);
        current_ball.body.mass=50;
        current_ball.body.collideWorldBounds=true;
        current_ball.body.onBeginContact.add(_okg.collision, this);
        current_ball.body.collision_list = [];

        _okg.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
        _okg.trajectory.clear();

        var velocity = _okg.get_velocity({x:evt.pageX, y:evt.pageY}, current_ball);

        current_ball.body.velocity.x = velocity.x;
        current_ball.body.velocity.y = velocity.y;

        _okg.create_ball(1);
    }
}

/* --------------------------- END MOUSE EVENTS ------------------------------ */


/* ----------------------------- TOUCH EVENTS -------------------------------- */
basketball.prototype.touchstart = function(evt){
    navigation.set_update_events();
    $.each(evt.originalEvent.touches, function(i, touch){
        if(evt.originalEvent.touches[i].target.id.indexOf('ball_zone') !== -1){
            _okg.touchs[evt.originalEvent.touches[i].identifier] = {
                target  : evt.originalEvent.touches[i].target.id, 
                is_down : true
            }
        }
    });
    $('body').off('touchstart').on('touchstart', _okg.touchstart);
}
basketball.prototype.touchmove = function(evt){
    
    _okg.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
    _okg.trajectory.clear();
    _okg.trajectory.lineStyle(8, 0xffffff, .5);
    
    $.each(evt.originalEvent.touches, function(i, touch){
        if(typeof _okg.touchs[i] !== "undefined"){
            if(_okg.touchs[i].is_down){
                if(_okg.touchs[i].target === "ball_zone1"){
                    var ball = _okg.player1.balls[_okg.player1.balls.length-1];
                }else if(_okg.touchs[i].target === "ball_zone2"){
                    var ball = _okg.player2.balls[_okg.player2.balls.length-1];
                }
                for (var i = 0; i < 50; i++){
                    if(i%2 === 0){
                        var velocity = _okg.get_velocity({x:touch.pageX, y:touch.pageY}, ball);
                        var trajectoryPoint = _okg.getTrajectoryPoint(ball.x+25, ball.y+25, velocity.x, velocity.y, i);
                        if(i === 0){
                            _okg.trajectory.moveTo(trajectoryPoint.x, trajectoryPoint.y);    
                        }else{
                            _okg.trajectory.lineTo(trajectoryPoint.x, trajectoryPoint.y);    
                        }
                        //_okg.bitmap.context.fillStyle = 'rgba(255,255,255,'+(((50*i)/1000))+')';
                    }
                    //_okg.bitmap.context.fillRect(trajectoryPoint.x-3, trajectoryPoint.y-3, 6, 6);        
                } 
            }
        }
    });
}
basketball.prototype.threepoints = function(){
    // 3points
    //_okg.game.load.image("mark_points", "./images/assets/three_points.png");
    var threepoint = _okg.game.add.sprite(_okg.basket.attachment.position.x, _okg.basket.attachment.position.y, 'mark_points');
    threepoint.scale.x = threepoint.scale.y = .1;
    var scale = {value:.1, x:_okg.basket.attachment.position.x, y:_okg.basket.attachment.position.y};
    TweenMax.to(scale, .5, {value:1, x: _okg.basket.attachment.position.x-200, y:_okg.basket.attachment.position.y-200, onUpdate:function(){
        threepoint.scale.x = threepoint.scale.y = scale.value;
        threepoint.position.x = scale.x;
        threepoint.position.y = scale.y;
    }, onComplete : function(){
        threepoint.kill();
    }});
    TweenMax.to(threepoint, .5, {alpha:0});
    
}
basketball.prototype.touchend = function(evt){
    /*_okg.touchs[evt.originalEvent.touches[i].identifier] = {
        target  : evt.originalEvent.touches[i].target.id, 
        is_down : true
    }*/
    if(typeof _okg._launch_sound === "undefined"){
        audio_manager.play_sound('basket_launch', 0, function(e){                                                   _okg._launch_sound = e;
        });
    }else{
        _okg._launch_sound.play();
    }
    var current_ball = null;
    var ball_id = null;
    if(evt.originalEvent.target.id === "ball_zone1"){
        current_ball = _okg.player1.balls[_okg.player1.balls.length-1];
        ball_id = 1;
    }else if(evt.originalEvent.target.id === "ball_zone2"){
        current_ball = _okg.player2.balls[_okg.player2.balls.length-1];
        ball_id = 2;
    }
    if(current_ball){
        _okg.game.physics.p2.enable(current_ball, _okg.debug);
        //current_ball.life = new Date().getTime();
        current_ball.body.life = new Date().getTime();
        current_ball.body.player = ball_id;
        current_ball.body.setCircle(26);
        current_ball.body.mass=50;
        //current_ball.body.onBeginContact.add(_okg.collision, this);
        current_ball.body.collision_list = [];
        
        _okg.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
        _okg.trajectory.clear();
        var velocity = _okg.get_velocity({x:evt.originalEvent.changedTouches[0].pageX, y:evt.originalEvent.changedTouches[0].pageY}, current_ball);
        
        current_ball.body.velocity.x = velocity.x;
        current_ball.body.velocity.y = velocity.y;
        
        _okg.create_ball(ball_id);
    }
    if(_okg.touchs[evt.originalEvent.changedTouches[0].target.identifier] === 0){
        if(typeof _okg.touchs[1] !== "undefined"){
            _okg.touchs[0] = _okg.touchs[1];
        }
    }else{
        if(_okg.touchs.length === 0){
            delete _okg.touchs[evt.originalEvent.changedTouches[0].target.identifier];
        }
    }
}
/* --------------------------- END TOUCH EVENTS ------------------------------ */
