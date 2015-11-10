var _okg = null;
function run(){
    this._debug = false;
    this._current_level = 0;
    this._current_decors = 0;
    this._current_ceiling_level = 1;
    this._total_levels = 1;
    this.levels = [];
    this.brick = {};
    this.elements = {};
    this._is_down = false;
    this.levels_enemy = [];
    this.levels_picots = [];
    this.levels_watter = [];
    this.levels_objects = [];
    this.levels_ceiling = [];
    this.hero = null;
    this.hero_CG = null;
    this.hero_boomer = null;
    //this.hero_powers = null;
    this.hero_power = [];
    this.levels_ceiling_enemy = [];
    this.jumping = 0;
    this.jump_tween = {y:0};
    this.jumping_infos = {x:0, y:0, angle:0};
    this.game_start = 0;
    this.cam_to_hero = false;
    this.gameInfo = {
        total_maps:25,
        start_date:0, 
        distance:0, 
        tilemap:{
            size:{
                width:5120, 
                height:1600
            }, 
            def:6515
        }, 
        score:{
            distance:0,
            circles:0,
            triangles:0,
            squares:0
        },
        width:window.innerWidth,
        height:window.innerHeight,
        speed:0, 
        state:"", 
        motion_state:"",
        rotation:0,
        invicible:false,
        parachute:false,
        double_jump:false,
        jumping:false
    };
    
    this.lifes = {count:5, date:0};
    this.scale = 1;
    this.last_collision = new Date().getTime();
    _okg = this;
}
run.prototype.init = function(){
    TweenMax.set($('#phaser-run'), {opacity:0});
    $('#phaser-run').css({width:_okg.gameInfo.width+"px", height:_okg.gameInfo.height+"px"});
    _okg.game = new Phaser.Game(_okg.gameInfo.width, _okg.gameInfo.height, Phaser.CANVAS, 'phaser-run', { preload: _okg.preload, create: _okg.create, update: _okg.update, render: _okg.render });
}
run.prototype.preload = function(){
    _okg.game.time.advancedTiming = true;
    
    _okg.game.load.image('invicible_icon', 'pages/run/maps/special_mutation/invicible_icon.png');
    _okg.game.load.image('double_jump_icon', 'pages/run/maps/special_mutation/double_jump_icon.png');
    _okg.game.load.image('parachute_icon', 'pages/run/maps/special_mutation/parachute_icon.png');
    
    _okg.game.load.image('particles', 'pages/run/maps/particles.gif');
    _okg.game.load.image('particles5', 'pages/run/maps/particles_5.gif');
    _okg.game.load.image('particles2', 'pages/run/maps/particles_2.gif');
    _okg.game.load.image('info_bul', 'pages/run/maps/info_bul.png');
    
    _okg.game.load.image("floor_collider", "pages/run/maps_new/decors/run_decors_floor.png");
    _okg.game.load.image("floor_start_collider", "pages/run/maps_new/decors/run_decors_floor_start.png");
    _okg.game.load.image("floor_end_collider", "pages/run/maps_new/decors/run_decors_floor_end.png");
    _okg.game.load.image("tremplin_left_collider", "pages/run/maps_new/decors/run_decors_tremplin_left.png");
    _okg.game.load.image("tremplin_left_start_collider", "pages/run/maps_new/decors/run_decors_tremplin_left_start.png");
    _okg.game.load.image("tremplin_left_end_collider", "pages/run/maps_new/decors/run_decors_tremplin_left_end.png");
    _okg.game.load.image("tremplin_right_collider", "pages/run/maps_new/decors/run_decors_tremplin_right.png");
    _okg.game.load.image("tremplin_right_start_collider", "pages/run/maps_new/decors/run_decors_tremplin_right_start.png");
    _okg.game.load.image("tremplin_right_end_collider", "pages/run/maps_new/decors/run_decors_tremplin_right_end.png");
    _okg.game.load.image("tremplin_bottom_left_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left.png");
    _okg.game.load.image("tremplin_bottom_left_start_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left_start.png");
    _okg.game.load.image("tremplin_bottom_left_end_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left_end.png");
    _okg.game.load.image("tremplin_bottom_right_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right.png");
    _okg.game.load.image("tremplin_bottom_right_start_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right_start.png");
    _okg.game.load.image("tremplin_bottom_right_end_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right_end.png");
    _okg.game.load.image("picots_collider", "pages/run/maps_new/decors/run_decors_picots.png");
    _okg.game.load.image("picots_start_collider", "pages/run/maps_new/decors/run_decors_picots_start.png");
    _okg.game.load.image("picots_end_collider", "pages/run/maps_new/decors/run_decors_picots_end.png");
    _okg.game.load.image("watter_collider", "pages/run/maps_new/decors/run_decors_watter.png");
    _okg.game.load.image("watter_start_collider", "pages/run/maps_new/decors/run_decors_watter_start.png");
    _okg.game.load.image("watter_end_collider", "pages/run/maps_new/decors/run_decors_watter_end.png");
    _okg.game.load.image("watter_next_collider", "pages/run/maps_new/decors/run_decors_watter_next.png");
    _okg.game.load.image("floor", "pages/run/maps_new/decors/run_decors_floor.png");
    _okg.game.load.image("floor_start", "pages/run/maps_new/decors/run_decors_floor_start.png");
    _okg.game.load.image("floor_end", "pages/run/maps_new/decors/run_decors_floor_end.png");
    _okg.game.load.image("tremplin_left", "pages/run/maps_new/decors/run_decors_tremplin_left.png");
    _okg.game.load.image("tremplin_left_start", "pages/run/maps_new/decors/run_decors_tremplin_left_start.png");
    _okg.game.load.image("tremplin_left_end", "pages/run/maps_new/decors/run_decors_tremplin_left_end.png");
    _okg.game.load.image("tremplin_right", "pages/run/maps_new/decors/run_decors_tremplin_right.png");
    _okg.game.load.image("tremplin_right_start", "pages/run/maps_new/decors/run_decors_tremplin_right_start.png");
    _okg.game.load.image("tremplin_right_end", "pages/run/maps_new/decors/run_decors_tremplin_right_end.png");
    _okg.game.load.image("tremplin_bottom_left", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left.png");
    _okg.game.load.image("tremplin_bottom_left_start", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left_start.png");
    _okg.game.load.image("tremplin_bottom_left_end", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left_end.png");
    _okg.game.load.image("tremplin_bottom_right", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right.png");
    _okg.game.load.image("tremplin_bottom_right_start", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right_start.png");
    _okg.game.load.image("tremplin_bottom_right_end", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right_end.png");
    _okg.game.load.image("picots", "pages/run/maps_new/decors/run_decors_picots.png");
    _okg.game.load.image("picots_start", "pages/run/maps_new/decors/run_decors_picots_start.png");
    _okg.game.load.image("picots_end", "pages/run/maps_new/decors/run_decors_picots_end.png");
    _okg.game.load.image("watter", "pages/run/maps_new/decors/run_decors_watter.png");
    _okg.game.load.image("watter_start", "pages/run/maps_new/decors/run_decors_watter_start.png");
    _okg.game.load.image("watter_end", "pages/run/maps_new/decors/run_decors_watter_end.png");
    _okg.game.load.image("watter_next", "pages/run/maps_new/decors/run_decors_watter_next.png");
    
    _okg.game.load.image("circle", "pages/run/maps_new/elements/run_decors_element_circle.png");
    _okg.game.load.image("triangle", "pages/run/maps_new/elements/run_decors_element_triangle.png");
    _okg.game.load.image("square", "pages/run/maps_new/elements/run_decors_element_square.png");
    _okg.game.load.image("distance", "pages/run/maps_new/decors/run_decors_element_distance.png");
    
    _okg.game.load.image("parachute", "pages/run/maps_new/decors/run_decors_parachute.png");
    _okg.game.load.image("double_jump", "pages/run/maps_new/decors/run_decors_double_jump.png");
    _okg.game.load.image("invicible", "pages/run/maps_new/decors/run_decors_invicible.png");
    
    _okg.game.load.image("replay_btn", "./images/assets/btn_replay.png");
    _okg.game.load.image("stats_btn", "./images/assets/btn_podium.png");
    _okg.game.load.physics('small_maps', 'pages/run/maps_new/maps_new.json');
    
    _okg.game.load.atlas('enemy_circle', 'pages/run/maps_new/enemies/enemy_circle.png', 'pages/run/maps_new/enemies/enemy_circle.json');
    _okg.game.load.atlas('enemy_square', 'pages/run/maps_new/enemies/enemy_square.png', 'pages/run/maps_new/enemies/enemy_square.json');
    _okg.game.load.atlas('enemy_triangle', 'pages/run/maps_new/enemies/enemy_triangle.png', 'pages/run/maps_new/enemies/enemy_triangle.json');
    
    _okg.game.load.image("ball_1", "pages/run/maps_new/decors/run_decors_element_ball_1.png");
    _okg.game.load.image("ball_2", "pages/run/maps_new/decors/run_decors_element_ball_2.png");
    _okg.game.load.image("ball_3", "pages/run/maps_new/decors/run_decors_element_ball_3.png");
    _okg.game.load.image("ball_4", "pages/run/maps_new/decors/run_decors_element_ball_4.png");
    _okg.game.load.image("ball_5", "pages/run/maps_new/decors/run_decors_element_ball_5.png");
    _okg.game.load.image("ball_6", "pages/run/maps_new/decors/run_decors_element_ball_6.png");
    _okg.game.load.image("ball_7", "pages/run/maps_new/decors/run_decors_element_ball_7.png");
    _okg.game.load.image("ball_8", "pages/run/maps_new/decors/run_decors_element_ball_8.png");
    _okg.game.load.image("ball_9", "pages/run/maps_new/decors/run_decors_element_ball_9.png");
    _okg.game.load.image("ball_10", "pages/run/maps_new/decors/run_decors_element_ball_10.png");
    
    _okg.game.load.spritesheet('okaoka3', 'pages/run/maps_new/hero/run.png', 100, 150);
    _okg.game.load.spritesheet('watter_sprite', 'pages/run/maps_new/decors/watter_sprite.png', 320, 120);
    _okg.game.load.image('boomer', 'pages/run/maps/boomer.png');
    _okg.game.load.image('puff', 'pages/run/maps/puff.png');
}
run.prototype.create = function(){
    _okg.game.time.events.loop(Phaser.Timer.SECOND / 20, _okg.moveBody, this);
    _okg.game.time.events.loop(Phaser.Timer.SECOND * 2, _okg.clean_game, this);
    _okg.game_start = new Date().getTime();
    _okg.game.world.setBounds(-4000, -2500, 800000, 2500);
    _okg.game.stage.scaleMode = Phaser.scaleModes.DEFAULT; 
    _okg.game.stage.backgroundColor = colors.pink;
    
    _okg.game.physics.startSystem(Phaser.Physics.P2JS);
    
    _okg.game.time.desiredFps = 60;
    
    _okg.game.physics.p2.restitution = -1;
    _okg.game.physics.p2.friction = -1;
    _okg.game.physics.p2.gravity.y = 1500;
    _okg.decors = _okg.game.add.group();
    
    /* -------- HERO SPRITE ---------- */
    _okg.hero = _okg.game.add.sprite(400, -600, 'okaoka3');
    _okg.hero.scale.set(1);
    _okg.hero.smoothed = true;
    _okg.hero.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 20, true);
    _okg.hero.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 45, true);
    _okg.hero.animations.add('small_jump', [24], 1, false);
    _okg.hero.animations.add('jump', [25], 1, false);
    _okg.hero.animations.add('after_jump', [26], 1, false);
    _okg.hero.animations.add('oka', [1], 1, false);
    _okg.hero.animations.add('wall', [27], 1, false);
    _okg.hero.animations.add('wall_end', [27], 1, false);
    _okg.hero.animations.add('parachute', [29, 30, 31, 32, 33, 34, 35], 25, false);
    _okg.hero.animations.add('speed', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 60, true);
    _okg.hero.animations.add('invicible', [28], 1, false);
    _okg.hero.animations.add('watter', [27], 12, true);
    _okg.hero.animations.add('picots', [27], 25, false);
    _okg.hero.animations.add('died', [27], 25, true);
    _okg.hero.play('oka');
    
    _okg.elements_layer = _okg.game.add.group();
    
    _okg.hero_boomer = _okg.game.add.sprite(-3380, -800, 'boomer');
    //_okg.hero_powers = _okg.game.add.sprite(-3420, -800, 'boomer');

    _okg.game.physics.p2.enable([ _okg.hero, _okg.hero_boomer ], _okg._debug);
    
    _okg.hero_CG = _okg.game.physics.p2.createCollisionGroup();
    _okg.hero.body.setCollisionGroup(_okg.hero_CG);
    //_okg.hero_boomer.body.setCollisionGroup(_okg.hero_CG);
    //_okg.hero_powers.body.setCollisionGroup(_okg.hero_CG);
    
    var constraint = _okg.game.physics.p2.createPrismaticConstraint(_okg.hero, _okg.hero_boomer, true,[15,-15],[0,0],[0,1]);
        //SET LIMITS
        constraint.lowerLimitEnabled = constraint.upperLimitEnabled = true;
        constraint.upperLimit = 0;
        constraint.lowerLimit = 0;
    
    constraint = null;
    delete constraint;
    
    /*var p_constraint = _okg.game.physics.p2.createPrismaticConstraint(_okg.hero, _okg.hero_powers, true,[-30,-15],[0,0],[0,1]);
        //SET LIMITS
        p_constraint.lowerLimitEnabled = p_constraint.upperLimitEnabled = true;
        p_constraint.upperLimit = 0;
        p_constraint.lowerLimit = 0;*/
    
    //_okg.faster();
    //_okg.puff();
    
    //_okg.fast_emitter.on = false;
    /* replace element hero on left */
    _okg.game.camera.setSize(_okg.gameInfo.width,_okg.gameInfo.height);
    /* ------ SET HERO PROPERTIES ------ */
    _okg.hero.body.mass = 1000;
    
    _okg.hero.body.setRectangle(100,150);
    _okg.hero.body.fixedRotation = true;
    
    _okg.hero.body.sensor = true;
    _okg.hero.body.onBeginContact.add(_okg.collision, this);
    _okg.hero.body.onEndContact.add(_okg.endcollision, this);
    
    _okg.hero_boomer.body.sensor = true;
    _okg.hero_boomer.body.fixedRotation = true;
    
    //_okg.hero_powers.body.sensor = true;
    //_okg.hero_powers.body.fixedRotation = true;
    
    _okg.hero_boomer.body.onBeginContact.add(_okg.head_collision, this);
    _okg.hero_boomer.body.onEndContact.add(_okg.head_endcollision, this);
    
    _okg.create_ground_level();
    
    _okg.gameInfo.start_date = new Date().getTime();
    _okg.create_task_bar();
    _okg.intro_game();
}
run.prototype.updates_scores = function(){
    _okg.triangles_text.text = (_okg.gameInfo.score.triangles > 1000)? (_okg.gameInfo.score.triangles/1000).toFixed(2)+'K' : _okg.gameInfo.score.triangles;
    _okg.circles_text.text = (_okg.gameInfo.score.circles > 1000)? (_okg.gameInfo.score.circles/1000).toFixed(2)+'K' : _okg.gameInfo.score.circles;
    _okg.squares_text.text = (_okg.gameInfo.score.squares > 1000)? (_okg.gameInfo.score.squares/1000).toFixed(2)+'K' : _okg.gameInfo.score.squares;
    
    _okg.distances_text.x = _okg.distances.getBounds().x + (_okg.distances.getBounds().width/2) - (_okg.distances_text.getBounds().width/2);
    _okg.triangles_text.x = _okg.triangles.getBounds().x + (_okg.triangles.getBounds().width/2) - (_okg.triangles_text.getBounds().width/2);
    _okg.squares_text.x = _okg.squares.getBounds().x + (_okg.squares.getBounds().width/2) - (_okg.squares_text.getBounds().width/2);
    _okg.circles_text.x = _okg.circles.getBounds().x + (_okg.circles.getBounds().width/2) - (_okg.circles_text.getBounds().width/2);
}
run.prototype.create_task_bar = function(){
    _okg.task_bar = _okg.game.add.group();
    _okg.task_bar.fixedToCamera = true;
    _okg.task_bar.alpha = 0;
    _okg.distances = _okg.task_bar.create(0, 0, 'distance');
    _okg.distances.x = (window.innerWidth/2) - 160;
    _okg.triangles = _okg.task_bar.create(0, 0, 'triangle');   
    _okg.triangles.x = (window.innerWidth/2) - 80;
    _okg.squares = _okg.task_bar.create(0, 0, 'square');
    _okg.squares.x = (window.innerWidth/2);
    _okg.circles = _okg.task_bar.create(0, 0, 'circle');   
    _okg.circles.x = (window.innerWidth/2) + 80;
    
    _okg.circles.y = _okg.squares.y = _okg.triangles.y = _okg.distances.y = 20;
    
    _okg.distances.scale.x = _okg.distances.scale.y = _okg.triangles.scale.x = _okg.triangles.scale.y = _okg.squares.scale.x = _okg.squares.scale.y = _okg.circles.scale.x = _okg.circles.scale.y = .8;
    
    _okg.distances_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    _okg.triangles_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    _okg.squares_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF' }));
    _okg.circles_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF' }));
    setTimeout(function(){
        _okg.distances_text.x = _okg.distances.getBounds().x + (_okg.distances.getBounds().width/2) - (_okg.distances_text.getBounds().width/2);
        _okg.triangles_text.x = _okg.triangles.getBounds().x + (_okg.triangles.getBounds().width/2) - (_okg.triangles_text.getBounds().width/2);
        _okg.squares_text.x = _okg.squares.getBounds().x + (_okg.squares.getBounds().width/2) - (_okg.squares_text.getBounds().width/2);
        _okg.circles_text.x = _okg.circles.getBounds().x + (_okg.circles.getBounds().width/2) - (_okg.circles_text.getBounds().width/2);
        _okg.distances_text.y = _okg.squares_text.y = _okg.triangles_text.y = _okg.circles_text.y = 70;
    }, 2500);
}
run.prototype.intro_game = function(){
    _okg.hero.play('oka');
    _okg.cam_to_hero = false;
    audio_manager.play_sound('run_run', 0, function(e){
        _okg._running_sound = e;
    });
    TweenMax.to($('#phaser-run'), 1, {opacity:1, onComplete:function(){
        TweenMax.to(_okg.gameInfo, 1.5, {
            speed:550,
            onComplete:function(){
                _okg.bubble = _okg.game.add.sprite(_okg.hero.position.x + 30, _okg.hero.position.y - 50, 'info_bul');
                if(_okg._running_sound){
                    _okg._running_sound.stop();
                }
                utilities.show_popup(
                    {color:navigation._current_interface_color, motion:"intro_run", buttons:["play"]}, 
                    function(e){
                        _okg.set_listeners();
                        _okg.bubble.destroy();
                        setTimeout(function(){
                            _okg.cam_to_hero = true;
                            _okg.hero.play('run');
                            if(typeof _okg._running_sound === "undefined"){
                                audio_manager.play_sound('run_run', 0, function(e){
                                    _okg._running_sound = e;
                                });
                            }else{
                                if(_okg._running_sound.playState !== 'playSucceeded'){
                                    _okg._running_sound.play();
                                }
                            }
                            _okg.gameInfo.speed = 800;
                            _okg.task_bar.alpha = 1;
                        }, 500);
                    }
                );
                _okg.gameInfo.speed = 0;
                _okg.hero.play('oka');
            }
        });
        _okg.hero.play('walk');
    }, delay:1});
}
run.prototype.set_listeners = function(){
    if('ontouchstart' in window){
        $('#phaser-run').off('touchstart').on('touchstart', _okg.on_down);
        $('#phaser-run').off('touchend').on('touchend', _okg.on_up);
    }else{
        $('#phaser-run').off('mousedown').on('mousedown', _okg.on_down);
        $('#phaser-run').off('mouseup').on('mouseup', _okg.on_up);
    }   
}
run.prototype.endcollision = function(body, bodyB, shapeA, shapeB, equation){
    //_okg.hero.body.fixedRotation = true;
}
/*run.prototype.add_power = function(power){
    if(typeof _okg._addPower_sound === "undefined"){
        audio_manager.play_sound('run_add_power', 0, function(e){_okg._addPower_sound = e;});
    }else{
        _okg._addPower_sound.play(0);
    }
    if(typeof _okg.last_power !== "undefined"){
        if(new Date().getTime() - _okg.last_power < 200){
            return false;
        }
    }
    var current_power = _okg.hero_power.length;
    _okg.hero_power[current_power] = {
        "type":power,
        "obj":_okg.game.add.sprite(
            _okg.hero_powers.body.x - (50 * (current_power+1)), 
            _okg.hero_powers.body.y, 
            power+"_icon"
        )
    }
    if(_okg.hero_power.length > 3){
        _okg.hero_power.shift();   
    }
    _okg.last_power = new Date().getTime();
}*/
var test_log;
run.prototype.destroyElement = function(body1, body2){
    body2.removeFromWorld();
}

run.prototype.event_enemy = function(event, type, count, enemy){
    switch(type){
        case 'triangle':
            break;
        case 'circle':
            break;
        case 'square':
            break;
    }
    for(var i=0; i<count; i++){
        var element_id = Math.ceil(Math.random()*10000)+""+i;
        _okg.elements[element_id] = _okg.elements_layer.create(
            _okg.hero.position.x + 100 + (10*i),
            _okg.hero.position.y + 100, 
            type
        );
        _okg.game.physics.p2.enable([ _okg.elements[element_id] ], _okg._debug);
        _okg.elements[element_id].body.setCollisionGroup(_okg.elements_layer);
        _okg.elements[element_id].body.clearShapes();
        _okg.elements[element_id].body.loadPolygon('small_maps', 'run_decors_element_'+type);
        _okg.elements[element_id].body.mass = 1;
        _okg.elements[element_id].body.velocity.y = -800;
    }
    if(event === 'lose'){
        TweenMax.to(_okg.hero, .1, {alpha:.5, repeat:10, yoyo:true, onComplete:function(){
            TweenMax.to(_okg.hero, .1, {alpha:1});
        }});
        _okg.hero.body.velocity.y = -800;
    }else{
        TweenMax.to(enemy.sprite.scale, .5, {y:0, x:0});
        _okg.hero.body.velocity.y = -350;
    }
}

run.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body === null){
        return false;
    }
    if(_okg.gameInfo.state !== "died"){
        if(body.sprite.key === "triangle" || body.sprite.key === "circle" || body.sprite.key === "square" || body.sprite.key === "invicible" || body.sprite.key === "parachute" || body.sprite.key === "double_jump" || body.sprite.key.indexOf('enemy') !== -1){
            body.sprite.body.static = false;
            if(typeof _okg.last_collision !== "undefined"){
                if(new Date().getTime() - _okg.last_collision > 10){
                    switch(body.sprite.key){
                        case"triangle":
                            _okg.gameInfo.score.triangles++;
                            _okg.updates_scores();
                            break; 
                        case"circle":
                            _okg.gameInfo.score.circles++;
                            _okg.updates_scores();
                            break; 
                        case"square":
                            _okg.gameInfo.score.squares++;
                            _okg.updates_scores();
                            break; 
                        case"double_jump":
                            _okg.add_power('double_jump');
                            break;
                        case"parachute":
                            _okg.add_power('parachute');
                            break;
                        case"invicible":
                            _okg.add_power('invicible');
                            break;
                    }
                }
            }
            if(body.sprite.key.indexOf('enemy') !== -1){
                _okg.jumping_infos.is_jumping = false;
                /* le hero arrive d'en haut */
                /* on check si la position y est supérieur de la hauteur de l'enemy */
                if(_okg.hero.position.y <= body.y-50 || _okg.gameInfo.state === "invicible"){
                    if(typeof _okg._win_enemy_sound === "undefined"){
                        audio_manager.play_sound('run_win_enemy', 0, function(e){
                            _okg._win_enemy_sound = e;    
                        });
                    }else{
                        _okg._win_enemy_sound.play();
                    }
                    /* on lui tape sur la tête on gagne 20 jetons de la couleur */
                    switch(body.sprite.key){
                        case'enemy_triangle':
                            _okg.event_enemy('win', 'triangle', 20, body);
                            break;
                        case'enemy_square':
                            _okg.event_enemy('win', 'square', 20, body);
                            break;
                        case'enemy_circle':
                            _okg.event_enemy('win', 'circle', 20, body);
                            break;
                    }
                }else{
                    if(typeof _okg._lose_enemy_sound === "undefined"){
                        audio_manager.play_sound('run_lose_enemy', 0, function(e){
                            _okg._lose_enemy_sound = e;    
                        });
                    }else{
                        _okg._lose_enemy_sound.play();
                    }
                    if(typeof _okg._pieces_sound === "undefined"){
                        audio_manager.play_sound('run_piece', 0, function(e){
                            _okg._pieces_sound = e;    
                        });
                    }else{
                        _okg._pieces_sound.stop();
                        _okg._pieces_sound.play();
                    }
                    /* on perd 20 jetons de la couleur */
                    switch(body.sprite.key){
                        case'enemy_triangle':
                            _okg.event_enemy('lose', 'triangle', 20, body);
                            _okg.gameInfo.score.triangles-=20;
                            break;
                        case'enemy_square':
                            _okg.event_enemy('lose', 'square', 20, body);
                            _okg.gameInfo.score.squares-=20;
                            break;
                        case'enemy_circle':
                            _okg.event_enemy('lose', 'circle', 20, body);
                            _okg.gameInfo.score.circles-=20;
                            break;
                    }
                }
                body.sprite.body.onBeginContact.removeAll();
                _okg.updates_scores();
            }else{
                _okg.ramasse(body);
            }
            body.removeFromWorld();
            
        }else{
            _okg.jumping_infos.is_jumping = false;
            _okg.gameInfo.parachute = false;
            if(_okg.hero.body.velocity.y > 100){
                //_okg.emitter.on = true;
                //setTimeout(function(){
                   //_okg.emitter.on = false;
                //}, _okg.hero.body.velocity.y/2);
            }
            if(!_okg.gameInfo.invicible){
                _okg.hero.play('run');
                if(typeof _okg._running_sound === "undefined"){
                    audio_manager.play_sound('run_run', 0, function(e){_okg._running_sound = e;});
                }else{
                    if(_okg._running_sound.playState !== 'playSucceeded'){
                        _okg._running_sound.play();
                    }
                }
            }
            /*_okg.emitter.on = true;
            setTimeout(function(){
               _okg.emitter.on = false;
            }, 10);*/
        }


        /* looking for picots and watter elements */
        if(_okg.gameInfo.state !== "invicible"){
            if(body.sprite.key.indexOf('watter') !== -1 && _okg.gameInfo.state !== "died"){
                _okg.gameInfo.state = "died";
                _okg.gameInfo.motion_state = "watter";
                _okg.hero.play('watter');
                _okg.hero.body.velocity.x = 0;
                _okg.hero.body.velocity.y = 0;
                _okg.gameInfo.speed = 0;
                _okg.died();
            }
            if(body.sprite.key.indexOf('picot') !== -1 && _okg.gameInfo.state !== "died"){
                _okg.gameInfo.state = "died";
                _okg.gameInfo.motion_state = "picots";
                _okg.hero.play('picots');
                _okg.hero.body.velocity.y = -800;
                _okg.hero.body.velocity.x = 500;

                TweenMax.to(_okg.hero.body.velocity, 1, {
                    x:0, 
                    delay:1
                });
                _okg.gameInfo.speed = 0;
                _okg.died();
            }
        }
        _okg.last_collision = new Date().getTime();
    }else{
        if(_okg.gameInfo.motion_state === "wall"){
            _okg.gameInfo.state = "died";
            _okg.died();
        }
    }
    test_log = body;
}
run.prototype.ramasse = function(body){
    //if(typeof _okg._pieces_sound === "undefined"){
        audio_manager.play_sound('run_piece', 0, function(e){
            _okg._pieces_sound = e;    
        });
    //}else{
    //    _okg._pieces_sound.play();
    //}
    body.velocity.x = -1000;
    TweenMax.to(body, .5, {y:body.y-300, onComplete:function(){
        body.y = 4000;        
    }});
}
run.prototype.head_collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body === null){
        return false;
    }
    if(_okg.gameInfo.oka_state === "invicible"){
        return false;
    }
    /* ADD EXEPT ON POWER COLLIDER */
    if(body.sprite.key.indexOf('floor_') !== -1 || body.sprite.key.indexOf('tremplin_') !== -1){
        _okg.gameInfo.state = "died";
        _okg.gameInfo.motion_state = "wall";
        _okg.hero.play('wall');
        _okg.gameInfo.speed = 0;
        _okg.died();
    }
}
run.prototype.head_endcollision = function(body, bodyB, shapeA, shapeB, equation){
}
/*run.prototype.faster = function(){
    _okg.fast_emitter = _okg.game.add.emitter(_okg.game.world.centerX, _okg.game.world.centerY, 400);
    _okg.fast_emitter.makeParticles( [ 'puff' ] );
    //_okg.emitter.color = ["#FFF"];
    _okg.fast_emitter.gravity = 0;
    _okg.fast_emitter.width = 10;
    _okg.fast_emitter.height = 1;
    _okg.fast_emitter.setXSpeed(0, -800);
    _okg.fast_emitter.setYSpeed(0, 0);
    _okg.fast_emitter.setRotation(0,0);
    _okg.fast_emitter.setScale(1.4, 0, 1.4, 0, 500);
    _okg.fast_emitter.start(false, 5000, 0);
    _okg.fast_emitter.on = false;
}
run.prototype.puff = function(){
    _okg.emitter = _okg.game.add.emitter(_okg.game.world.centerX, _okg.game.world.centerY, 400);
    _okg.emitter.makeParticles( [ 'puff' ] );
    //_okg.emitter.color = ["#FFF"];
    _okg.emitter.gravity = 0;
    _okg.emitter.width = 1;
    _okg.emitter.height = 1;
    //_okg.emitter.setXSpeed(500, 800);
    _okg.emitter.setYSpeed(0, 0);
    _okg.emitter.setRotation(0,0);
    _okg.emitter.setScale(1, 0, 1, 0, 500);
    _okg.emitter.on = false;
    _okg.emitter.start(false, 150, 0);
}*/
/*run.prototype.particle = function(){
    _okg.particles = _okg.game.add.emitter(_okg.game.world.centerX, _okg.game.world.centerY, window.innerWidth);
    _okg.particles.makeParticles( [ 'particles', 'particles5', 'particles2' ] );
    //_okg.emitter.color = ["#FFF"];
    _okg.particles.gravity = 0;
    _okg.particles.width = _okg.gameInfo.width;
    _okg.particles.height = _okg.gameInfo.height;
    _okg.particles.minParticleSpeed.set(0, 50);
    _okg.particles.maxParticleSpeed.set(0, 400);

    //_okg.fast_emitter.setXSpeed(0, -800);
    _okg.particles.setRotation(0, 0);
    _okg.particles.setAlpha(0.3, 0.6);
    _okg.particles.setScale(1, 1, 0, 0);
    _okg.particles.gravity = 0;

    //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
    //	The 5000 value is the lifespan of each particle before it's killed
    _okg.particles.start(false, 1000, 100);
}*/
run.prototype.create_ground_level = function(){
    var prevPosX = 0;
    var cur_level = _okg._current_level;
    
    var x_pos = _okg.gameInfo.tilemap.size.width * (_okg._current_level);
    var y_pos = -1500
    
    _okg.levels[_okg._current_decors] = _okg.game.add.group();
    _okg.levels[_okg._current_decors].position.x = x_pos;
    _okg.levels[_okg._current_decors].position.y = y_pos;
    
    $.each(level_grid['level_'+_okg._current_decors].tiles, function(i, brick){
        var brick_id = brick.id+'_'+_okg._current_level;
        if(brick.type === "physics"){
            if(brick.name.indexOf('watter') !== -1){
                _okg.brick[brick.name] = _okg.decors.create(
                    x_pos+brick.position.x,
                    y_pos+brick.position.y, 
                    "watter_sprite"
                );
                _okg.brick[brick.name].animations.add('watter_flow', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 20, true);
                _okg.brick[brick.name].play('watter_flow');
            }else{
                _okg.brick[brick.name] = _okg.decors.create(
                    x_pos+brick.position.x,
                    y_pos+brick.position.y, 
                    brick.name
                );
            }
            _okg.game.physics.p2.enable([ _okg.brick[brick.name] ], _okg._debug);
            _okg.brick[brick.name].body.setCollisionGroup(_okg.decors);
            _okg.brick[brick.name].body.clearShapes();
            _okg.brick[brick.name].body.loadPolygon('small_maps', 'run_decors_'+brick.name);
            _okg.brick[brick.name].body.mass = 1000;
            _okg.brick[brick.name].body.kinematic = true;
        }else{
            _okg.brick[brick.name] = _okg.decors.create(
                x_pos+brick.position.x-160,
                y_pos+brick.position.y-60, 
                brick.name
            );
        }
    });
    $.each(level_grid['level_'+_okg._current_decors].elements, function(i, element){
        var element_id = element.id+'_'+_okg._current_level;
        if(element.type === "elements"){
            if(element.name.indexOf('enemy_circle') != -1 || element.name.indexOf('enemy_square') != -1 || element.name.indexOf('enemy_triangle') != -1){
                 var frame = "";
                 switch(element.name){
                     case 'enemy_circle':
                         frame = 'circle0000';
                         break;
                     case 'enemy_square':
                         frame = 'rectangle0000';
                         break;
                     case 'enemy_triangle':
                         frame = 'triangle0000';
                         break;
                 }
                 _okg.elements[element.name] = _okg.elements_layer.create(
                     x_pos+element.position.x-100,
                     y_pos+element.position.y-80, 
                     element.name,
                     frame
                 );
                 _okg.elements[element.name].animations.add('walk', 0, 4, 30, true, true);

                 // play animation
                 _okg.elements[element.name].animations.play('walk');
             }else{
                 _okg.elements[element.name] = _okg.elements_layer.create(
                     x_pos+element.position.x-100,
                     y_pos+element.position.y-80, 
                     element.name
                 );
             }
             _okg.game.physics.p2.enable([ _okg.elements[element.name] ], _okg._debug);
             _okg.elements[element.name].body.setCollisionGroup(_okg.elements_layer);
             _okg.elements[element.name].body.clearShapes();
                 //_okg.elements[element_id].body.setRectangle(60,60);
             //_okg.game.load.image('fl', 'pages/run/maps/small_maps/fl.png');
             if(element.name.indexOf('ball') != -1){
                 _okg.elements[element.name].body.setCircle(10);
                 _okg.elements[element.name].body.mass = 1;
             }else if(element.name.indexOf('enemy_circle') != -1){
                 _okg.elements[element.name].body.setRectangle(100,100);
                 _okg.elements[element.name].body.mass = 1000;
                 _okg.elements[element.name].body.fixedRotation = true;
                 _okg.elements[element.name].body.velocity.x = -500;
                 _okg.elements[element.name].body.direction = "left";
                 _okg.listen_enemy(_okg.elements[element.name]);
             }else if(element.name.indexOf('enemy_square') != -1){
                 _okg.elements[element.name].body.setRectangle(60,60);
                 _okg.elements[element.name].body.mass = 1000;
                 _okg.elements[element.name].body.fixedRotation = true;
                 _okg.elements[element.name].body.velocity.x = -500;
                 _okg.elements[element.name].body.direction = "left";
                 _okg.listen_enemy(_okg.elements[element.name]);
             }else if(element.name.indexOf('enemy_triangle') != -1){
                 _okg.elements[element.name].body.setRectangle(160,100);
                 _okg.elements[element.name].body.mass = 1000;
                 _okg.elements[element.name].body.fixedRotation = true;
                 _okg.elements[element.name].body.velocity.x = -500;
                 _okg.elements[element.name].body.direction = "left";
                 _okg.listen_enemy(_okg.elements[element.name]);
             }else{
                 _okg.elements[element.name].body.loadPolygon('small_maps', 'run_decors_element_'+element.name);
                 _okg.elements[element.name].body.mass = -1;
                 //_okg.elements[element_id].body.x = x_pos+element.position.x-100;
                 //_okg.elements[element_id].body.y = y_pos+element.position.y-100;
                 _okg.elements[element.name].body.sensor = false;
                 _okg.elements[element.name].body.static = true;
             }
         }
    });
    
    _okg._current_level++;
    _okg._current_decors++;
    if(_okg._current_decors == _.keys(level_grid).length){
        _okg._current_decors = 0;
    }
    _okg.gameInfo.last_created_ground = new Date().getTime();
}
run.prototype.listen_enemy = function(enemy){
    //_okg.elements[element_id]
    enemy.body.onBeginContact.add(function(body){
        if(body){
           if(body.sprite){
               if(body.sprite.position.y <= enemy.position.y){
                   if(enemy.scale.x === 1){
                       enemy.scale.x = -1;
                       enemy.body.velocity.x = 500;
                   }else{
                       enemy.scale.x = 1;
                       enemy.body.velocity.x = -500;
                   }
               }
           }
        }
    }, this);
}
run.prototype.dbl_jump = function(){
    //audio_manager.stop_sound('run');
    if(typeof _okg._running_sound !== "undefined"){
        _okg._running_sound.stop();
    }
    
    if(typeof _okg._jump_sound === "undefined"){
        audio_manager.play_sound('run_jump', 0, function(e){_okg._jump_sound = e;});
    }else{
        _okg._jump_sound.play(0);
    }
    
    _okg.hero.body.velocity.y = -800;
    _okg.jump_tween.y = 0;
    _okg.gameInfo.double_jump = true;
    TweenMax.to(_okg.jump_tween, 1, {y:20, onUpdate:function(){
        _okg.hero.body.velocity.y = _okg.hero.body.velocity.y - 15;
    },onComplete:function(){
        _okg.gameInfo.double_jump = false;
    }});
}
run.prototype.invicible = function(){
    //audio_manager.stop_sound('run');
    if(typeof _okg._running_sound !== "undefined"){
        _okg._running_sound.stop();
    }
    
    if(typeof _okg._invicible_sound === "undefined"){
        audio_manager.play_sound('run_invicible', 0, function(e){_okg._invicible_sound = e;});
    }else{
        _okg._invicible_sound.play(-1);
    }
    
    _okg.gameInfo.oka_state = "invicible";
    _okg.gameInfo.state = "invicible";
    _okg.gameInfo.invicible = true;
    //_okg.hero.play('invicible');
    _okg.hero.body.velocity.y = -800;
    //_okg.fast_emitter.on = true;
    
    _okg.hero.body.fixedRotation = false;
    _okg.hero.body.setCircle(50);
    //_okg.gameInfo.rotation = -0.2;
    
    setTimeout(function(){
        _okg.gameInfo.invicible = false;
        //_okg.gameInfo.rotation = 0;
        _okg.hero.body.setRectangle(100,150);
        _okg.hero.body.fixedRotation = true;
        _okg.hero.rotation = 0;
        _okg.hero.body.rotation = 0;
        //_okg.fast_emitter.on = false;
        if(_okg.gameInfo.state !== "died"){
            _okg.gameInfo.state = "";
        }
        _okg.gameInfo.oka_state = null;
        //_okg.hero.play('run');
    },8000);
}
run.prototype.parachute = function(){
    if(_okg.gameInfo.state === "died"){
        return false;
    }
    //audio_manager.stop_sound('run');
    if(typeof _okg._running_sound !== "undefined"){
        _okg._running_sound.stop();
    }
   //audio_manager.play_sound('parachute', 0, function(){});
    if(typeof _okg._parachute_sound === "undefined"){
        audio_manager.play_sound('run_parachute', 0, function(e){_okg._parachute_sound = e;});
    }else{
        _okg._parachute_sound.play(0);
    }
    
    if(_okg.gameInfo.state !== "died"){
        _okg.hero.play('parachute');
    }
    _okg.gameInfo.state = "parachute";
    _okg.gameInfo.parachute = true;
    _okg.game.physics.p2.gravity.y = 60;
    _okg.hero.body.velocity.y = 0;
    _okg.hero.body.mass = 100;
    setTimeout(function(){
        _okg.gameInfo.parachute = false;
        if(_okg.gameInfo.state !== "died"){
            _okg.gameInfo.state = "";
        }
        _okg.game.physics.p2.gravity.y = 1500;
        _okg.hero.body.mass = 1000;
    },5000);
}
run.prototype.on_down = function(evt){
    navigation.set_update_events();
    evt.preventDefault();
    if(_okg.gameInfo.state === "died"){
        return false;
    }else{
        if(_okg.gameInfo.speed === 0){
            _okg.gameInfo.speed = 800;
            _okg.hero.play('run');
        }
    }
    _okg.gameInfo.state="jumping";
    _okg.gameInfo.jumping = true;
    //_okg.fast_emitter.on = false;
    //_okg.emitter.on = false;
    if(!_okg.jumping_infos.is_jumping){
        _okg.hero.body.velocity.y = -700;  
        TweenMax.to(_okg.jump_tween, .8, {y:20, onUpdate:function(){
            _okg.hero.body.velocity.y = _okg.hero.body.velocity.y - 20;
        },onComplete:function(){
            if(_okg._is_down){
                _okg.parachute();
            }
            _okg.gameInfo.jumping = false;
        }});
    }else{
        /* --------- IF HERO CURRENTLY JUMPING CHECK IF HERO HAVE POWERS AND SHOW THEM -------- */
        var last_power = _okg.hero_power.length-1;
        if(typeof _okg.hero_power[last_power] !== "undefined"){
            switch(_okg.hero_power[last_power].type){
                case "double_jump":
                    _okg.dbl_jump();
                    break;
                case "invicible":
                    _okg.invicible();
                    break;
                case "parachute":
                    _okg.parachute();
                    break;
            }
            _okg.hero_power[last_power].obj.destroy();
            delete _okg.hero_power[last_power];
            _okg.hero_power.splice(last_power, 1);
        }
    }
    if(!_okg.jumping_infos.is_jumping){
        if(typeof _okg._jump_sound === "undefined"){
            audio_manager.play_sound('run_jump', 0, function(e){_okg._jump_sound = e;});
        }else{
            _okg._jump_sound.play(0);
        }
    }
    _okg.jumping_infos.is_jumping = true;
    //audio_manager.stop_sound('run');
    if(typeof _okg._running_sound !== "undefined"){
        _okg._running_sound.stop();
    }
    _okg.jumping_infos.x = evt.pageX;
    _okg.jumping_infos.y = evt.pageY; 
    _okg.jumping_infos.angle = _okg.hero.body.angle;
    _okg.jumping_infos.rotation = _okg.hero.body.rotation
    _okg.jumping_infos.rotate = 0;
    
    _okg._is_down = true;
}
run.prototype.on_up = function(evt){
    if(_okg.gameInfo.state !== "died"){
        if(_okg.gameInfo.state === "parachute"){
            if(_okg.gameInfo.state !== "died"){
                _okg.gameInfo.state = "";
            }
            _okg.game.physics.p2.gravity.y = 1500;
            _okg.hero.body.mass = 1000;
        }
        TweenLite.killTweensOf(_okg.jump_tween);
        var dist = _okg.jumping_infos.y - evt.pageY;
        _okg._is_down = false;
        if(dist > 100){
            //_okg.game.physics.p2.gravity.y = -1000;
        }else if(dist < -100){
            /*_okg.gameInfo.state="sliding";
            _okg.hero.play('slide');
            _okg.hero.body.velocity.y = _okg.hero.body.velocity.y + 700;
            
            _okg.hero.body.setRectangle(75,25);
            setTimeout(function(){
                _okg.gameInfo.state = "";
                _okg.hero.play('run');
                _okg.emitter.on = false;
                _okg.hero.body.setRectangle(75,75);
            },3500);*/
            //_okg.game.physics.p2.gravity.y = 1000;
        }
    }
}
run.prototype.render = function(){
    if(_okg.game.paused){
        return false;
    }
    if(_okg.gameInfo.invicible){
        _okg.hero.body.fixedRotation = false;
        _okg.hero.body.rotation += .15;
        _okg.hero.play('invicible');
    }else{
        _okg.hero.body.rotation = 0;
        if(_okg.gameInfo.parachute){
            
        }
    }
    _okg.game.world.wrap(_okg.hero, 64);
    /* ------- REPLACE HERO POWER ICONS ------- */
    /*$.each(_okg.hero_power, function(i, p){
        _okg.hero_power[i].obj.position.x = _okg.hero_powers.body.x - (30 * (i+1));
        _okg.hero_power[i].obj.position.y = _okg.hero_powers.body.y - ((_okg.hero.body.velocity.y / 10)*(i+1));
    });*/
    
    /* ------------- UNCOMENT TO SCALE WORLD ON JUMPING PHASES ---------------- */
    /*var ps = Math.abs(_okg.hero.body.velocity.y) / 2500;
    if(ps > 0.6){
        ps = 0.6;
    }
    if(ps < 0){
        ps = 0;
    }
    var s = {v:_okg.scale};
    
    TweenMax.to(s, 1, {v:(1-ps), onUpdate:function(){
        _okg.scale = s.v;
    }});*/
    
    /*var ps = Math.abs(_okg.hero.body.y) / 2500;
    if(ps > 0.6){
        ps = 0.6;
    }
    if(ps < 0){
        ps = 0;
    }
    var s = {v:_okg.scale};
    
    TweenMax.to(s, 1, {v:(1-ps), onUpdate:function(){
        _okg.scale = s.v;
    }});*/
    
    
    if(_okg.gameInfo.state !== "died"){
        //make speed relative to ditance ? add ::::  + _okg.gameInfo.distance
        _okg.hero.body.velocity.x = _okg.gameInfo.speed;
        
        _okg.gameInfo.distance = Math.round(_okg.game.camera.position.x/200);
        _okg.distances_text.text = _okg.gameInfo.distance;
        _okg.distances_text.x = _okg.distances.getBounds().x + (_okg.distances.getBounds().width/2) - (_okg.distances_text.getBounds().width/2);
        _okg.game.world.scale.setTo(_okg.scale, _okg.scale);
        //_okg.task_bar.scale(1+_okg.scale, 1+_okg.scale);
        /* REPLACE CAMERA ON HERO */
        var np = {
            x:_okg.hero.position.x * _okg.scale - 300,
            y:_okg.hero.position.y * _okg.scale - _okg.gameInfo.height/2
        }
        if(_okg.cam_to_hero){
            _okg.game.camera.setPosition(np.x, np.y + 50);
        }else{
            _okg.game.camera.setPosition(500, np.y + 50);   
        }
        np = null;
        delete np;
    }
}
run.prototype.moveBody = function(){
    if(_okg.game.paused){
        return false;
    }
    if(_okg.gameInfo.state !== "died"){
        if(!_okg.gameInfo.invicible && !_okg.gameInfo.parachute){
            if(_okg.hero.body.velocity.y > 100){
                //if(_okg.gameInfo.motion_state !== "after_jump"){
                _okg.hero.play('after_jump');
                _okg.gameInfo.motion_state = "after_jump";
            }
            if(_okg.jumping_infos.is_jumping){
                if(_okg.hero.body.velocity.y > 20){
                    //if(_okg.gameInfo.motion_state !== "after_jump"){
                        _okg.hero.play('after_jump');
                        _okg.gameInfo.motion_state = "after_jump";
                    //}
                }else{
                    if(_okg.hero.body.velocity.y < -500){
                        if(_okg.gameInfo.motion_state !== "jump"){
                            _okg.hero.play('jump');
                            _okg.gameInfo.motion_state = "jump";
                        }
                    }else{
                        if(_okg.gameInfo.motion_state !== "small_jump"){
                            _okg.hero.play('small_jump');
                            _okg.gameInfo.motion_state = "small_jump";
                        }
                    }
                }
            }
        }
    }
    
    if(_okg.game.camera.position.x > _okg.levels[_okg.levels.length-1].position.x - 500){
        _okg.create_ground_level();
    }
    
    if(typeof _okg.mountain_3 !== "undefined" && _okg.gameInfo.state !== "died"){
        _okg.mountain_3.tilePosition.x -= _okg.hero.body.velocity.x / 200;
        _okg.mountain_2.tilePosition.x -= _okg.hero.body.velocity.x / 190;
        _okg.mountain_1.tilePosition.x -= _okg.hero.body.velocity.x / 180;
        _okg.mountain_3.tilePosition.y = (Math.abs(_okg.hero.position.y) / 300) + (_okg.gameInfo.height/2);
        _okg.mountain_2.tilePosition.y = (Math.abs(_okg.hero.position.y) / 50) + (_okg.gameInfo.height/2);
        _okg.mountain_1.tilePosition.y = (Math.abs(_okg.hero.position.y) / 15) + (_okg.gameInfo.height/2);
    }
    
    /* REPLACE EMITTER COLLIDER */
    /*if(typeof _okg.emitter !== "undefined"){
        if(_okg.emitter.on){
            _okg.emitter.emitX = _okg.hero.x;
            _okg.emitter.emitY = _okg.hero.y + 75;
        }
    }*/
    /*if(typeof _okg.fast_emitter !== "undefined"){
        if(_okg.fast_emitter.on){
            _okg.fast_emitter.emitX = _okg.hero.x;
            _okg.fast_emitter.emitY = _okg.hero.y + 75;
        }
    }*/
    /*if(typeof _okg.particles !== "undefined"){
        _okg.particles.emitX = _okg.game.camera.x + _okg.gameInfo.width/2;
        _okg.particles.emitY = _okg.game.camera.y;
    }*/
}
run.prototype.clean_game = function(){
    for (var i = 0, len = _okg.decors.length; i < len; i++) {
        if(typeof _okg.decors.children[i] !== "undefined"){
            if(_okg.decors.children[i].position.x + 1200 < _okg.game.camera.position.x){
                _okg.decors.children[i].destroy();
            }
        }
    } 
    for (var i = 0, len = _okg.elements.length; i < len; i++) {
        if(typeof _okg.elements.children[i] !== "undefined"){
            if(_okg.elements.children[i].position.x + 1200 < _okg.game.camera.position.x){
                _okg.elements.children[i].destroy();
            }
        }
    }
}
run.prototype.update = function(){
    
}
run.prototype.create_interface = function(){
    this.init();
}
run.prototype.died = function(){
    audio_manager.play_sound('run_died', 0, function(){});
    if(typeof _okg._running_sound !== "undefined"){
        _okg._running_sound.stop();
    }
    _okg.hero_boomer.body.onBeginContact.removeAll();
    _okg.hero_boomer.body.onEndContact.removeAll();
    _okg.hero_boomer.destroy();
    delete _okg.hero_boomer;
    
    _okg.gameInfo.state = "died";
    _okg.gameInfo.speed = 0;
    
    _okg.hero.body.clearShapes();
    _okg.hero.play('died');
    _okg.hero.body.velocity.x = 0;
    _okg.hero.body.velocity.y = -600;
    TweenMax.to(_okg.decors.position, 1.5, {
        y:window.innerHeight*2,
        ease:Power4.easeIn,
        delay:2
    });
    TweenMax.to(_okg.elements_layer.position, 1.5, {
        y:window.innerHeight*2,
        ease:Power4.easeIn,
        delay:2
    });
    
    var pos = {x:_okg.game.camera.position.x, y:_okg.game.camera.position.y};
    TweenMax.to(pos, 2, {
        y:0,
        x:0,
        onUpdate : function(){
            if(typeof _okg === "undefined"){
                return false;
            }
            if(typeof _okg.task_bar === "undefined"){
                return false;
            }
            _okg.task_bar.fixedToCamera = false;
            _okg.game.camera.setPosition(pos.x, pos.y);  
            _okg.task_bar.position.x = pos.x;
            _okg.task_bar.position.y = pos.y-window.innerHeight/2-100;
            if(typeof _okg.mountain_3 !== "undefined"){
                _okg.mountain_3.tilePosition.y = _okg.mountain_2.tilePosition.y = _okg.mountain_1.tilePosition.y = _okg.game.camera.position.y;
            }
        },
        onComplete:function(){
            if(typeof _okg === "undefined"){
                return false;
            }
            if(typeof _okg.task_bar === "undefined"){
                return false;
            }
            _okg.total_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "700 100px Roboto", fill: '#FFFFFF', align:"center"}));
            _okg.total_text.text = "00000";
            _okg.total_text.y = 120;
            _okg.total_text.alpha = 0;
            _okg.total_text.x = _okg.distances_text.x;
            var total = _okg.gameInfo.distance + _okg.gameInfo.score.circles + _okg.gameInfo.score.squares + _okg.gameInfo.score.triangles;
            var scored = {total:0};
            audio_manager.play_sound('total_count', 0, function(){});
            TweenMax.to(_okg.total_text, .5, {alpha:1});
            TweenMax.to(scored, 2.5, {
                total : total,
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
                    _okg.total_text.text = score;
                },
                ease:Power4.easeOut,
                onComplete:function(){
                    /* ADD REPLAY AND STAT BUTTON WITH SCALE INTRO */
                    _okg.stat_button = _okg.game.add.button(_okg.game.camera.position.x - 140, _okg.game.camera.position.y + 150, 'stats_btn', _okg.show_stats, this);
                    _okg.replay_button = _okg.game.add.button(_okg.game.camera.position.x + 10, _okg.game.camera.position.y + 150, 'replay_btn', _okg.replay_game, this);
                    
                    utilities.save_score_game('run', total);
                    
                    _okg.stat_button.scale.x = _okg.stat_button.scale.y = _okg.replay_button.scale.x = _okg.replay_button.scale.y = 0;
                    var sc = {s:0};
                    TweenMax.to(sc, .5, {s:1, onUpdate:function(){
                        _okg.stat_button.scale.x = _okg.stat_button.scale.y = _okg.replay_button.scale.x = _okg.replay_button.scale.y = sc.s;
                    }});
                    utilities.create_over_motion({
                        size:{width:290, height:200},
                        position:{x:((window.innerWidth/2)-150), y:((window.innerHeight/2) - 300)},
                        motion:_okg.gameInfo.motion_state+"_run_motion"
                    }, function(){
                    });
                }
            });
        },
        ease:Power4.easeOut,
        delay:4
    });
}
run.prototype.pause = function(){
    _okg.game.paused = true;
}
run.prototype.play = function(){
    _okg.game.paused = false;
}
run.prototype.show_stats = function(){
    var total_score = _okg.gameInfo.distance + _okg.gameInfo.score.circles + _okg.gameInfo.score.squares + _okg.gameInfo.score.triangles;
    utilities.show_score_game('run', total_score);   
}
run.prototype.replay_game = function(){
    window.location.href = "#page/"+navigation._current_page_name+"/intro/false/date/"+new Date().getTime();
    gui.Window.get().reload(3);
}
run.prototype.destroy_all_game = function(){
    if('ontouchstart' in window){
        $('#phaser-run').off('touchstart');
        $('#phaser-run').off('touchend');
    }else{
        $('#phaser-run').off('mousedown');
        $('#phaser-run').off('mouseup');
    }
    _okg.hero.body.onBeginContact.removeAll();
    _okg.hero.body.onEndContact.removeAll();
    /* ----- TODO CLEAN ALL VARS DESTROY SPRITE AND BODIES BEFORE KILLING THE GAME -------- */
    //_okg.house.destroy();
    _okg.hero.destroy();
    //_okg.hero_boomer.destroy();
    //_okg.hero_powers.destroy();
    $.each(_.keys(_okg.brick), function(i, key){
        _okg.brick[key].destroy();
    });
    $.each(_.keys(_okg.elements), function(i, key){
        _okg.elements[key].destroy();
    });
    delete this._current_level;
    delete this._current_ceiling_level;
    delete this._total_levels;
    delete this.levels;
    delete this.levels_enemy;
    delete this.levels_watter;
    delete this.levels_picots;
    delete this.levels_objects;
    delete this.levels_ceiling;
    delete this.levels_ceiling_enemy;
    delete this.jumping;
    delete this.downPos;
    delete this.gameInfo;
    delete this.lifes;
    //delete this.house;
    delete this.info_bul;
    
    _okg.game.destroy();
    _okg.delete_objects(_okg);
    
    delete _okg.game;
}
run.prototype.delete_objects = function(obj){
    $.each(_.keys(obj), function(i, k){
        delete obj[k];
        obj[k] = null;
    });
}
run.prototype.destroy = function(callBack){
    if(typeof _okg._running_sound !== "undefined"){
        _okg._running_sound.stop();  
    }
    level_grid = null;
    _okg.destroy_all_game();
    utilities.destroy_over_motion();
    callBack();
}