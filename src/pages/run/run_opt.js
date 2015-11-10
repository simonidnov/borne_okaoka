var self = null;
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
    this.hero_powers = null;
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
    self = this;
}
run.prototype.init = function(){
    TweenMax.set($('#phaser-run'), {opacity:0});
    $('#phaser-run').css({width:self.gameInfo.width+"px", height:self.gameInfo.height+"px"});
    self.game = new Phaser.Game(self.gameInfo.width, self.gameInfo.height, Phaser.CANVAS, 'phaser-run', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
run.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    
    //self.game.load.image('bck_1', 'pages/run/maps/backgrounds/background_1-01.png');
    //self.game.load.image('bck_2', 'pages/run/maps/backgrounds/background_2-01.png');
    //self.game.load.image('bck_3', 'pages/run/maps/backgrounds/background_3-01.png');
    
    self.game.load.image('invicible_icon', 'pages/run/maps/special_mutation/invicible_icon.png');
    self.game.load.image('double_jump_icon', 'pages/run/maps/special_mutation/double_jump_icon.png');
    self.game.load.image('parachute_icon', 'pages/run/maps/special_mutation/parachute_icon.png');
    
    self.game.load.image('particles', 'pages/run/maps/particles.gif');
    self.game.load.image('particles5', 'pages/run/maps/particles_5.gif');
    self.game.load.image('particles2', 'pages/run/maps/particles_2.gif');
    //self.game.load.image('house', 'pages/run/maps/house.png');
    self.game.load.image('info_bul', 'pages/run/maps/info_bul.png');
    
    self.game.load.image("floor_collider", "pages/run/maps_new/decors/run_decors_floor.png");
    self.game.load.image("floor_start_collider", "pages/run/maps_new/decors/run_decors_floor_start.png");
    self.game.load.image("floor_end_collider", "pages/run/maps_new/decors/run_decors_floor_end.png");
    self.game.load.image("tremplin_left_collider", "pages/run/maps_new/decors/run_decors_tremplin_left.png");
    self.game.load.image("tremplin_left_start_collider", "pages/run/maps_new/decors/run_decors_tremplin_left_start.png");
    self.game.load.image("tremplin_left_end_collider", "pages/run/maps_new/decors/run_decors_tremplin_left_end.png");
    self.game.load.image("tremplin_right_collider", "pages/run/maps_new/decors/run_decors_tremplin_right.png");
    self.game.load.image("tremplin_right_start_collider", "pages/run/maps_new/decors/run_decors_tremplin_right_start.png");
    self.game.load.image("tremplin_right_end_collider", "pages/run/maps_new/decors/run_decors_tremplin_right_end.png");
    self.game.load.image("tremplin_bottom_left_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left.png");
    self.game.load.image("tremplin_bottom_left_start_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left_start.png");
    self.game.load.image("tremplin_bottom_left_end_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left_end.png");
    self.game.load.image("tremplin_bottom_right_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right.png");
    self.game.load.image("tremplin_bottom_right_start_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right_start.png");
    self.game.load.image("tremplin_bottom_right_end_collider", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right_end.png");
    self.game.load.image("picots_collider", "pages/run/maps_new/decors/run_decors_picots.png");
    self.game.load.image("picots_start_collider", "pages/run/maps_new/decors/run_decors_picots_start.png");
    self.game.load.image("picots_end_collider", "pages/run/maps_new/decors/run_decors_picots_end.png");
    self.game.load.image("watter_collider", "pages/run/maps_new/decors/run_decors_watter.png");
    self.game.load.image("watter_start_collider", "pages/run/maps_new/decors/run_decors_watter_start.png");
    self.game.load.image("watter_end_collider", "pages/run/maps_new/decors/run_decors_watter_end.png");
    self.game.load.image("watter_next_collider", "pages/run/maps_new/decors/run_decors_watter_next.png");
    self.game.load.image("floor", "pages/run/maps_new/decors/run_decors_floor.png");
    self.game.load.image("floor_start", "pages/run/maps_new/decors/run_decors_floor_start.png");
    self.game.load.image("floor_end", "pages/run/maps_new/decors/run_decors_floor_end.png");
    self.game.load.image("tremplin_left", "pages/run/maps_new/decors/run_decors_tremplin_left.png");
    self.game.load.image("tremplin_left_start", "pages/run/maps_new/decors/run_decors_tremplin_left_start.png");
    self.game.load.image("tremplin_left_end", "pages/run/maps_new/decors/run_decors_tremplin_left_end.png");
    self.game.load.image("tremplin_right", "pages/run/maps_new/decors/run_decors_tremplin_right.png");
    self.game.load.image("tremplin_right_start", "pages/run/maps_new/decors/run_decors_tremplin_right_start.png");
    self.game.load.image("tremplin_right_end", "pages/run/maps_new/decors/run_decors_tremplin_right_end.png");
    self.game.load.image("tremplin_bottom_left", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left.png");
    self.game.load.image("tremplin_bottom_left_start", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left_start.png");
    self.game.load.image("tremplin_bottom_left_end", "pages/run/maps_new/decors/run_decors_tremplin_bottom_left_end.png");
    self.game.load.image("tremplin_bottom_right", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right.png");
    self.game.load.image("tremplin_bottom_right_start", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right_start.png");
    self.game.load.image("tremplin_bottom_right_end", "pages/run/maps_new/decors/run_decors_tremplin_bottom_right_end.png");
    self.game.load.image("picots", "pages/run/maps_new/decors/run_decors_picots.png");
    self.game.load.image("picots_start", "pages/run/maps_new/decors/run_decors_picots_start.png");
    self.game.load.image("picots_end", "pages/run/maps_new/decors/run_decors_picots_end.png");
    self.game.load.image("watter", "pages/run/maps_new/decors/run_decors_watter.png");
    self.game.load.image("watter_start", "pages/run/maps_new/decors/run_decors_watter_start.png");
    self.game.load.image("watter_end", "pages/run/maps_new/decors/run_decors_watter_end.png");
    self.game.load.image("watter_next", "pages/run/maps_new/decors/run_decors_watter_next.png");
    
    self.game.load.image("circle", "pages/run/maps_new/elements/run_decors_element_circle.png");
    self.game.load.image("triangle", "pages/run/maps_new/elements/run_decors_element_triangle.png");
    self.game.load.image("square", "pages/run/maps_new/elements/run_decors_element_square.png");
    self.game.load.image("distance", "pages/run/maps_new/decors/run_decors_element_distance.png");
    
    self.game.load.image("parachute", "pages/run/maps_new/decors/run_decors_parachute.png");
    self.game.load.image("double_jump", "pages/run/maps_new/decors/run_decors_double_jump.png");
    self.game.load.image("invicible", "pages/run/maps_new/decors/run_decors_invicible.png");
    
    
    self.game.load.image("replay_btn", "./images/assets/btn_replay.png");
    self.game.load.image("stats_btn", "./images/assets/btn_podium.png");
    self.game.load.physics('small_maps', 'pages/run/maps_new/maps_new.json');
    
    self.game.load.atlas('enemy_circle', 'pages/run/maps_new/enemies/enemy_circle.png', 'pages/run/maps_new/enemies/enemy_circle.json');
    self.game.load.atlas('enemy_square', 'pages/run/maps_new/enemies/enemy_square.png', 'pages/run/maps_new/enemies/enemy_square.json');
    self.game.load.atlas('enemy_triangle', 'pages/run/maps_new/enemies/enemy_triangle.png', 'pages/run/maps_new/enemies/enemy_triangle.json');
    
    self.game.load.image("ball_1", "pages/run/maps_new/decors/run_decors_element_ball_1.png");
    self.game.load.image("ball_2", "pages/run/maps_new/decors/run_decors_element_ball_2.png");
    self.game.load.image("ball_3", "pages/run/maps_new/decors/run_decors_element_ball_3.png");
    self.game.load.image("ball_4", "pages/run/maps_new/decors/run_decors_element_ball_4.png");
    self.game.load.image("ball_5", "pages/run/maps_new/decors/run_decors_element_ball_5.png");
    self.game.load.image("ball_6", "pages/run/maps_new/decors/run_decors_element_ball_6.png");
    self.game.load.image("ball_7", "pages/run/maps_new/decors/run_decors_element_ball_7.png");
    self.game.load.image("ball_8", "pages/run/maps_new/decors/run_decors_element_ball_8.png");
    self.game.load.image("ball_9", "pages/run/maps_new/decors/run_decors_element_ball_9.png");
    self.game.load.image("ball_10", "pages/run/maps_new/decors/run_decors_element_ball_10.png");
    
    self.game.load.spritesheet('okaoka3', 'pages/run/maps_new/hero/run.png', 100, 150);
    self.game.load.spritesheet('watter_sprite', 'pages/run/maps_new/decors/watter_sprite.png', 320, 120);
    self.game.load.image('boomer', 'pages/run/maps/boomer.png');
    self.game.load.image('puff', 'pages/run/maps/puff.png');
}
run.prototype.create = function(){
    //self.game.world.scale = self.scale;
    self.game.time.events.loop(Phaser.Timer.SECOND / 20, self.moveBody, this);
    self.game.time.events.loop(Phaser.Timer.SECOND * 2, self.clean_game, this);
    
    self.game_start = new Date().getTime();
    self.game.world.setBounds(-4000, -2500, 800000, 2500);
    //self.game.world.setBounds(-1000, -1000, 2000, 2000);
    self.game.stage.scaleMode = Phaser.scaleModes.DEFAULT; 
    
    self.game.stage.backgroundColor = colors.pink;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    
    self.game.time.desiredFps = 60;
    
    self.game.physics.p2.restitution = -1;
    self.game.physics.p2.friction = -1;
    //game.physics.p2.world.defaultContactMaterial.friction = 0.3;
    self.game.physics.p2.gravity.y = 1500;
    
    self.decors = self.game.add.group();
    
    /* -------- HERO SPRITE ---------- */
    
    self.hero = self.game.add.sprite(400, -600, 'okaoka3');
    self.hero.scale.set(1);
    self.hero.smoothed = true;
    self.hero.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 20, true);
    self.hero.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 45, true);
    self.hero.animations.add('small_jump', [24], 1, false);
    self.hero.animations.add('jump', [25], 1, false);
    self.hero.animations.add('after_jump', [26], 1, false);
    self.hero.animations.add('oka', [1], 1, false);
    self.hero.animations.add('wall', [27], 1, false);
    self.hero.animations.add('wall_end', [27], 1, false);
    self.hero.animations.add('parachute', [29, 30, 31, 32, 33, 34, 35], 25, false);
    self.hero.animations.add('speed', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 60, true);
    self.hero.animations.add('invicible', [28], 1, false);
    self.hero.animations.add('watter', [27], 12, true);
    self.hero.animations.add('picots', [27], 25, false);
    self.hero.animations.add('died', [27], 25, true);
    self.hero.play('oka');
    
    self.elements_layer = self.game.add.group();
    
    
    self.hero = self.game.add.sprite(200, -2200, 'bear');
    self.hero.scale.set(1);
    self.hero.smoothed = true;
    self.hero.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13], 25, true);
    self.hero.animations.add('small_jump', [14,15,16], 25, false);
    self.hero.animations.add('jump', [17,18,19,20], 25, false);
    self.hero.animations.add('after_jump', [21,22,23], 25, false);
    self.hero.animations.add('oka', [24,25,26,27,28,29], 25, false);
    self.hero.animations.add('wall', [30,31,32,33,34], 25, false);
    self.hero.animations.add('wall_end', [35,36,37,38,39], 25, false);
    self.hero.animations.add('parachute', [40,41,42,43,44], 25, false);
    self.hero.animations.add('invicible', [45,46,47,48,49,50,51,52,53,54,55,56,57], 25, true);
    self.hero.animations.add('watter', [58], 12, true);
    self.hero.animations.add('picots', [58], 25, false);
    self.hero.animations.add('died', [59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74], 25, true);
    self.hero.play('oka');
    
    self.hero_boomer = self.game.add.sprite(-3380, -800, 'boomer');
    self.hero_powers = self.game.add.sprite(-3420, -800, 'boomer');

    self.game.physics.p2.enable([ self.hero, self.hero_boomer, self.hero_powers ], self._debug);
    
    self.hero_CG = self.game.physics.p2.createCollisionGroup();
    self.hero.body.setCollisionGroup(self.hero_CG);
    //self.hero_boomer.body.setCollisionGroup(self.hero_CG);
    self.hero_powers.body.setCollisionGroup(self.hero_CG);
    
    var constraint = self.game.physics.p2.createPrismaticConstraint(self.hero, self.hero_boomer, true,[15,-15],[0,0],[0,1]);
        //SET LIMITS
        constraint.lowerLimitEnabled = constraint.upperLimitEnabled = true;
        constraint.upperLimit = 0;
        constraint.lowerLimit = 0;
    
    var p_constraint = self.game.physics.p2.createPrismaticConstraint(self.hero, self.hero_powers, true,[-30,-15],[0,0],[0,1]);
        //SET LIMITS
        p_constraint.lowerLimitEnabled = p_constraint.upperLimitEnabled = true;
        p_constraint.upperLimit = 0;
        p_constraint.lowerLimit = 0;
    
    self.faster();
    self.puff();
    //self.particle();
    
    self.fast_emitter.on = false;
    self.game.camera.setSize(self.gameInfo.width,self.gameInfo.height);
    /* ------ SET HERO PROPERTIES ------ */
    self.hero.body.mass = 1000;
    
    self.hero.body.setRectangle(100,150);
    self.hero.body.fixedRotation = true;
    
    self.hero.body.sensor = true;
    self.hero.body.onBeginContact.add(self.collision, this);
    self.hero.body.onEndContact.add(self.endcollision, this);
    
    self.hero_boomer.body.sensor = true;
    self.hero_boomer.body.fixedRotation = true;
    
    self.hero_powers.body.sensor = true;
    self.hero_powers.body.fixedRotation = true;
    
    self.hero_boomer.body.onBeginContact.add(self.head_collision, this);
    self.hero_boomer.body.onEndContact.add(self.head_endcollision, this);
    
    self.create_ground_level();
    
    self.gameInfo.start_date = new Date().getTime();
    self.create_task_bar();
    self.intro_game();
}
run.prototype.updates_scores = function(){
    self.triangles_text.text = (self.gameInfo.score.triangles > 1000)? (self.gameInfo.score.triangles/1000).toFixed(2)+'K' : self.gameInfo.score.triangles;
    self.circles_text.text = (self.gameInfo.score.circles > 1000)? (self.gameInfo.score.circles/1000).toFixed(2)+'K' : self.gameInfo.score.circles;
    self.squares_text.text = (self.gameInfo.score.squares > 1000)? (self.gameInfo.score.squares/1000).toFixed(2)+'K' : self.gameInfo.score.squares;
    
    self.distances_text.x = self.distances.getBounds().x + (self.distances.getBounds().width/2) - (self.distances_text.getBounds().width/2);
    self.triangles_text.x = self.triangles.getBounds().x + (self.triangles.getBounds().width/2) - (self.triangles_text.getBounds().width/2);
    self.squares_text.x = self.squares.getBounds().x + (self.squares.getBounds().width/2) - (self.squares_text.getBounds().width/2);
    self.circles_text.x = self.circles.getBounds().x + (self.circles.getBounds().width/2) - (self.circles_text.getBounds().width/2);
}
run.prototype.create_task_bar = function(){
    self.task_bar = self.game.add.group();
    self.task_bar.fixedToCamera = true;
    self.task_bar.alpha = 0;
    self.distances = self.task_bar.create(0, 0, 'distance');
    self.distances.x = (window.innerWidth/2) - 160;
    self.triangles = self.task_bar.create(0, 0, 'triangle');   
    self.triangles.x = (window.innerWidth/2) - 80;
    self.squares = self.task_bar.create(0, 0, 'square');
    self.squares.x = (window.innerWidth/2);
    self.circles = self.task_bar.create(0, 0, 'circle');   
    self.circles.x = (window.innerWidth/2) + 80;
    
    self.circles.y = self.squares.y = self.triangles.y = self.distances.y = 20;
    
    self.distances.scale.x = self.distances.scale.y = self.triangles.scale.x = self.triangles.scale.y = self.squares.scale.x = self.squares.scale.y = self.circles.scale.x = self.circles.scale.y = .8;
    
    self.distances_text = self.task_bar.add(self.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    self.triangles_text = self.task_bar.add(self.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    self.squares_text = self.task_bar.add(self.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF' }));
    self.circles_text = self.task_bar.add(self.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF' }));
    setTimeout(function(){
        self.distances_text.x = self.distances.getBounds().x + (self.distances.getBounds().width/2) - (self.distances_text.getBounds().width/2);
        self.triangles_text.x = self.triangles.getBounds().x + (self.triangles.getBounds().width/2) - (self.triangles_text.getBounds().width/2);
        self.squares_text.x = self.squares.getBounds().x + (self.squares.getBounds().width/2) - (self.squares_text.getBounds().width/2);
        self.circles_text.x = self.circles.getBounds().x + (self.circles.getBounds().width/2) - (self.circles_text.getBounds().width/2);
        self.distances_text.y = self.squares_text.y = self.triangles_text.y = self.circles_text.y = 70;
    }, 2500);
    //self.task_bar.x = (window.innerWidth/2) - (self.task_bar.getBounds().width/2);
    
}
run.prototype.intro_game = function(){
    self.hero.play('oka');
    self.cam_to_hero = false;
    audio_manager.play_sound('run_run', 0, function(e){
        self._running_sound = e;
    });
    //self.game.camera.setPosition(500, -1080);
    TweenMax.to($('#phaser-run'), 1, {opacity:1, onComplete:function(){
        TweenMax.to(self.gameInfo, 1.5, {
            speed:550,
            onComplete:function(){
                self.bubble = self.game.add.sprite(self.hero.position.x + 30, self.hero.position.y - 50, 'info_bul');
                //audio_manager.stop_sound('run');
                if(self._running_sound){
                    self._running_sound.stop();
                }
                utilities.show_popup(
                    {color:navigation._current_interface_color, motion:"intro_run", buttons:["play"]}, 
                    function(e){
                        self.set_listeners();
                        self.bubble.destroy();
                        setTimeout(function(){
                            self.cam_to_hero = true;
                            self.hero.play('run');
                            if(typeof self._running_sound === "undefined"){
                                audio_manager.play_sound('run_run', 0, function(e){
                                    self._running_sound = e;
                                });
                            }else{
                                if(self._running_sound.playState !== 'playSucceeded'){
                                    self._running_sound.play();
                                }
                            }
                            self.gameInfo.speed = 800;
                            self.task_bar.alpha = 1;
                        }, 500);
                    }
                );
                self.gameInfo.speed = 0;
                self.hero.play('oka');
            }
        });
        self.hero.play('walk');
    }, delay:1});
}
run.prototype.set_listeners = function(){
    if('ontouchstart' in window){
        $('#phaser-run').off('touchstart').on('touchstart', self.on_down);
        $('#phaser-run').off('touchend').on('touchend', self.on_up);
    }else{
        $('#phaser-run').off('mousedown').on('mousedown', self.on_down);
        $('#phaser-run').off('mouseup').on('mouseup', self.on_up);
    }   
}
run.prototype.endcollision = function(body, bodyB, shapeA, shapeB, equation){
    //self.hero.body.fixedRotation = true;
}
run.prototype.add_power = function(power){
    if(typeof self._addPower_sound === "undefined"){
        audio_manager.play_sound('run_add_power', 0, function(e){self._addPower_sound = e;});
    }else{
        self._addPower_sound.play(0);
    }
    if(typeof self.last_power !== "undefined"){
        if(new Date().getTime() - self.last_power < 200){
            return false;
        }
    }
    var current_power = self.hero_power.length;
    self.hero_power[current_power] = {
        "type":power,
        "obj":self.game.add.sprite(
            self.hero_powers.body.x - (50 * (current_power+1)), 
            self.hero_powers.body.y, 
            power+"_icon"
        )
    }
    if(self.hero_power.length > 3){
        self.hero_power.shift();   
    }
    self.last_power = new Date().getTime();
}
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
        self.elements[element_id] = self.elements_layer.create(
            self.hero.position.x + 100 + (10*i),
            self.hero.position.y + 100, 
            type
        );
        self.game.physics.p2.enable([ self.elements[element_id] ], self._debug);
        self.elements[element_id].body.setCollisionGroup(self.elements_layer);
        self.elements[element_id].body.clearShapes();
        self.elements[element_id].body.loadPolygon('small_maps', 'run_decors_element_'+type);
        self.elements[element_id].body.mass = 1;
        self.elements[element_id].body.velocity.y = -800;
        //self.elements[element_id].body.velocity.x = 700;
        //self.elements[element_id].body.sensor = false;
        //self.elements[element_id].body.static = true;
    }
    if(event === 'lose'){
        TweenMax.to(self.hero, .1, {alpha:.5, repeat:10, yoyo:true, onComplete:function(){
            TweenMax.to(self.hero, .1, {alpha:1});
        }});
        self.hero.body.velocity.y = -800;
    }else{
        TweenMax.to(enemy.sprite.scale, .5, {y:0, x:0});
        self.hero.body.velocity.y = -350;
    }
}

run.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body === null){
        return false;
    }
    if(self.gameInfo.state !== "died"){
        if(body.sprite.key === "triangle" || body.sprite.key === "circle" || body.sprite.key === "square" || body.sprite.key === "invicible" || body.sprite.key === "parachute" || body.sprite.key === "double_jump" || body.sprite.key.indexOf('enemy') !== -1){
            body.sprite.body.static = false;
            if(typeof self.last_collision !== "undefined"){
                if(new Date().getTime() - self.last_collision > 10){
                    switch(body.sprite.key){
                        case"triangle":
                            self.gameInfo.score.triangles++;
                            self.updates_scores();
                            break; 
                        case"circle":
                            self.gameInfo.score.circles++;
                            self.updates_scores();
                            break; 
                        case"square":
                            self.gameInfo.score.squares++;
                            self.updates_scores();
                            break; 
                        case"double_jump":
                            self.add_power('double_jump');
                            break;
                        case"parachute":
                            self.add_power('parachute');
                            break;
                        case"invicible":
                            self.add_power('invicible');
                            break;
                    }
                }
            }
            if(body.sprite.key.indexOf('enemy') !== -1){
                self.jumping_infos.is_jumping = false;
                /* le hero arrive d'en haut */
                /* on check si la position y est supérieur de la hauteur de l'enemy */
                if(self.hero.position.y <= body.y-50 || self.gameInfo.state === "invicible"){
                    if(typeof self._win_enemy_sound === "undefined"){
                        audio_manager.play_sound('run_win_enemy', 0, function(e){
                            self._win_enemy_sound = e;    
                        });
                    }else{
                        self._win_enemy_sound.play();
                    }
                    /* on lui tape sur la tête on gagne 20 jetons de la couleur */
                    switch(body.sprite.key){
                        case'enemy_triangle':
                            self.event_enemy('win', 'triangle', 20, body);
                            break;
                        case'enemy_square':
                            self.event_enemy('win', 'square', 20, body);
                            break;
                        case'enemy_circle':
                            self.event_enemy('win', 'circle', 20, body);
                            break;
                    }
                }else{
                    if(typeof self._lose_enemy_sound === "undefined"){
                        audio_manager.play_sound('run_lose_enemy', 0, function(e){
                            self._lose_enemy_sound = e;    
                        });
                    }else{
                        self._lose_enemy_sound.play();
                    }
                    if(typeof self._pieces_sound === "undefined"){
                        audio_manager.play_sound('run_piece', 0, function(e){
                            self._pieces_sound = e;    
                        });
                    }else{
                        console.log('play piece');
                        self._pieces_sound.stop();
                        self._pieces_sound.play();
                    }
                    /* on perd 20 jetons de la couleur */
                    switch(body.sprite.key){
                        case'enemy_triangle':
                            self.event_enemy('lose', 'triangle', 20, body);
                            self.gameInfo.score.triangles-=20;
                            break;
                        case'enemy_square':
                            self.event_enemy('lose', 'square', 20, body);
                            self.gameInfo.score.squares-=20;
                            break;
                        case'enemy_circle':
                            self.event_enemy('lose', 'circle', 20, body);
                            self.gameInfo.score.circles-=20;
                            break;
                    }
                }
                body.sprite.body.onBeginContact.removeAll();
                self.updates_scores();
            }else{
                self.ramasse(body);
            }
            body.removeFromWorld();
            
        }else{
            self.jumping_infos.is_jumping = false;
            self.gameInfo.parachute = false;
            if(self.hero.body.velocity.y > 100){
                self.emitter.on = true;
                setTimeout(function(){
                   self.emitter.on = false;
                }, self.hero.body.velocity.y/2);
            }
            if(!self.gameInfo.invicible){
                self.hero.play('run');
                if(typeof self._running_sound === "undefined"){
                    audio_manager.play_sound('run_run', 0, function(e){self._running_sound = e;});
                }else{
                    if(self._running_sound.playState !== 'playSucceeded'){
                        self._running_sound.play();
                    }
                }
            }
        }
        /* looking for picots and watter elements */
        if(self.gameInfo.state !== "invicible"){
            if(body.sprite.key.indexOf('watter') !== -1 && self.gameInfo.state !== "died"){
                self.gameInfo.state = "died";
                self.gameInfo.motion_state = "watter";
                self.hero.play('watter');
                self.hero.body.velocity.x = 0;
                self.hero.body.velocity.y = 0;
                self.gameInfo.speed = 0;
                self.died();
            }
            if(body.sprite.key.indexOf('picot') !== -1 && self.gameInfo.state !== "died"){
                self.gameInfo.state = "died";
                self.gameInfo.motion_state = "picots";
                self.hero.play('picots');
                self.hero.body.velocity.y = -800;
                self.hero.body.velocity.x = 500;

                TweenMax.to(self.hero.body.velocity, 1, {
                    x:0, 
                    delay:1
                });
                self.gameInfo.speed = 0;
                self.died();
            }
        }
        self.last_collision = new Date().getTime();
    }else{
        if(self.gameInfo.motion_state === "wall"){
            self.gameInfo.state = "died";
            self.died();
        }
    }
    test_log = body;
}
run.prototype.ramasse = function(body){
    audio_manager.play_sound('run_piece', 0, function(e){
        self._pieces_sound = e;    
    });
    body.velocity.x = -1000;
    TweenMax.to(body, .5, {y:body.y-300, onComplete:function(){
        body.y = 4000;        
    }});
}
run.prototype.head_collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body === null){
        return false;
    }
    if(self.gameInfo.oka_state === "invicible"){
        return false;
    }
    /* ADD EXEPT ON POWER COLLIDER */
    if(body.sprite.key.indexOf('floor_') !== -1 || body.sprite.key.indexOf('tremplin_') !== -1){
        self.gameInfo.state = "died";
        self.gameInfo.motion_state = "wall";
        self.hero.play('wall');
        self.gameInfo.speed = 0;
        self.died();
    }
}
run.prototype.head_endcollision = function(body, bodyB, shapeA, shapeB, equation){
    console.log(body);
}
run.prototype.faster = function(){
    self.fast_emitter = self.game.add.emitter(self.game.world.centerX, self.game.world.centerY, 400);
    self.fast_emitter.makeParticles( [ 'puff' ] );
    //self.emitter.color = ["#FFF"];
    self.fast_emitter.gravity = 0;
    self.fast_emitter.width = 10;
    self.fast_emitter.height = 1;
    self.fast_emitter.setXSpeed(0, -800);
    self.fast_emitter.setYSpeed(0, 0);
    self.fast_emitter.setRotation(0,0);
    self.fast_emitter.setScale(1.4, 0, 1.4, 0, 500);
    self.fast_emitter.start(false, 5000, 0);
    self.fast_emitter.on = false;
}
run.prototype.puff = function(){
    self.emitter = self.game.add.emitter(self.game.world.centerX, self.game.world.centerY, 400);
    self.emitter.makeParticles( [ 'puff' ] );
    //self.emitter.color = ["#FFF"];
    self.emitter.gravity = 0;
    self.emitter.width = 1;
    self.emitter.height = 1;
    //self.emitter.setXSpeed(500, 800);
    self.emitter.setYSpeed(0, 0);
    self.emitter.setRotation(0,0);
    self.emitter.setScale(1, 0, 1, 0, 500);
    self.emitter.on = false;
    self.emitter.start(false, 150, 0);
}
run.prototype.particle = function(){
    self.particles = self.game.add.emitter(self.game.world.centerX, self.game.world.centerY, window.innerWidth);
    self.particles.makeParticles( [ 'particles', 'particles5', 'particles2' ] );
    //self.emitter.color = ["#FFF"];
    self.particles.gravity = 0;
    self.particles.width = self.gameInfo.width;
    self.particles.height = self.gameInfo.height;
    self.particles.minParticleSpeed.set(0, 50);
    self.particles.maxParticleSpeed.set(0, 400);

    self.fast_emitter.setXSpeed(0, -800);
    self.particles.setRotation(0, 0);
    self.particles.setAlpha(0.3, 0.6);
    self.particles.setScale(1, 1, 0, 0);
    self.particles.gravity = 0;

    //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
    //	The 5000 value is the lifespan of each particle before it's killed
    self.particles.start(false, 1000, 100);
}
run.prototype.create_ground_level = function(){
    var prevPosX = 0;
    var cur_level = self._current_level;
    
    var x_pos = self.gameInfo.tilemap.size.width * (self._current_level);
    var y_pos = -1500
    
    self.levels[self._current_decors] = self.game.add.group();
    self.levels[self._current_decors].position.x = x_pos;
    self.levels[self._current_decors].position.y = y_pos;
    
    $.each(level_grid['level_'+self._current_decors].tiles, function(i, brick){
        //self.brick[brick.id] = self.game.add.sprite(brick.position.x, brick.position.y, 'fl_ph');
        var brick_id = brick.id+'_'+self._current_level;
        if(typeof self.brick[brick_id] !== "undefined"){
            self.brick[brick_id].body.destroy();
            delete self.brick[brick_id];
        }
        if(brick.type === "physics"){
            if(brick.name.indexOf('watter') !== -1){
                self.brick[brick_id] = self.decors.create(
                    x_pos+brick.position.x,
                    y_pos+brick.position.y, 
                    "watter_sprite"
                );
                self.brick[brick_id].animations.add('watter_flow', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 20, true);
                self.brick[brick_id].play('watter_flow');
            }else{
                self.brick[brick_id] = self.decors.create(
                    x_pos+brick.position.x,
                    y_pos+brick.position.y, 
                    brick.name
                );
            }
            self.game.physics.p2.enable([ self.brick[brick_id] ], self._debug);
            self.brick[brick_id].body.setCollisionGroup(self.decors);
            self.brick[brick_id].body.clearShapes();
            //self.brick[brick_id].body.setRectangle(160,60);
            //self.game.load.image('fl', 'pages/run/maps/small_maps/fl.png');
            self.brick[brick_id].body.loadPolygon('small_maps', 'run_decors_'+brick.name);
            self.brick[brick_id].body.mass = 1000;
            /* addchild on self.levels[cur_level] */
            self.brick[brick_id].body.kinematic = true;
        }else{
            self.brick[brick_id] = self.decors.create(
                x_pos+brick.position.x-160,
                y_pos+brick.position.y-60, 
                brick.name
            );
            
        }
    });
    $.each(level_grid['level_'+self._current_decors].elements, function(i, element){
        var element_id = element.id+'_'+self._current_level;
        if(typeof self.elements[element_id] !== "undefined"){
            self.elements[element_id].body.destroy();
            delete self.elements[element_id];
        }
        if(element.type === "elements"){
            if(typeof self.elements[element_id] !== "undefined"){
                
            }else{
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
                    self.elements[element_id] = self.elements_layer.create(
                        x_pos+element.position.x-100,
                        y_pos+element.position.y-80, 
                        element.name,
                        frame
                    );
                    self.elements[element_id].animations.add('walk', 0, 4, 30, true, true);

                    // play animation
                    self.elements[element_id].animations.play('walk');
                }else{
                    self.elements[element_id] = self.elements_layer.create(
                        x_pos+element.position.x-100,
                        y_pos+element.position.y-80, 
                        element.name
                    );
                }
                self.game.physics.p2.enable([ self.elements[element_id] ], self._debug);
                self.elements[element_id].body.setCollisionGroup(self.elements_layer);
                self.elements[element_id].body.clearShapes();
                    //self.elements[element_id].body.setRectangle(60,60);
                //self.game.load.image('fl', 'pages/run/maps/small_maps/fl.png');
                if(element.name.indexOf('ball') != -1){
                    self.elements[element_id].body.setCircle(10);
                    self.elements[element_id].body.mass = 1;
                }else if(element.name.indexOf('enemy_circle') != -1){
                    self.elements[element_id].body.setRectangle(100,100);
                    self.elements[element_id].body.mass = 1000;
                    self.elements[element_id].body.fixedRotation = true;
                    self.elements[element_id].body.velocity.x = -500;
                    self.elements[element_id].body.direction = "left";
                    self.listen_enemy(self.elements[element_id]);
                }else if(element.name.indexOf('enemy_square') != -1){
                    self.elements[element_id].body.setRectangle(60,60);
                    self.elements[element_id].body.mass = 1000;
                    self.elements[element_id].body.fixedRotation = true;
                    self.elements[element_id].body.velocity.x = -500;
                    self.elements[element_id].body.direction = "left";
                    self.listen_enemy(self.elements[element_id]);
                }else if(element.name.indexOf('enemy_triangle') != -1){
                    self.elements[element_id].body.setRectangle(160,100);
                    self.elements[element_id].body.mass = 1000;
                    self.elements[element_id].body.fixedRotation = true;
                    self.elements[element_id].body.velocity.x = -500;
                    self.elements[element_id].body.direction = "left";
                    self.listen_enemy(self.elements[element_id]);
                }else{
                    self.elements[element_id].body.loadPolygon('small_maps', 'run_decors_element_'+element.name);
                    self.elements[element_id].body.mass = -1;
                    //self.elements[element_id].body.x = x_pos+element.position.x-100;
                    //self.elements[element_id].body.y = y_pos+element.position.y-100;
                    self.elements[element_id].body.sensor = false;
                    self.elements[element_id].body.static = true;
                }
            }
        }else{
            self.elements[element_id] = self.elements_layer.create(
                x_pos+element.position.x-100,
                y_pos+element.position.y-30, 
                element.name
            );
        }
    });
    
    self._current_level++;
    self._current_decors++;
    if(self._current_decors == _.keys(level_grid).length){
        self._current_decors = 0;
    }
    self.gameInfo.last_created_ground = new Date().getTime();
}
run.prototype.listen_enemy = function(enemy){
    //self.elements[element_id]
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
    if(typeof self._running_sound !== "undefined"){
        self._running_sound.stop();
    }
    
    if(typeof self._jump_sound === "undefined"){
        audio_manager.play_sound('run_jump', 0, function(e){self._jump_sound = e;});
    }else{
        self._jump_sound.play(0);
    }
    
    self.hero.body.velocity.y = -800;
    self.jump_tween.y = 0;
    self.gameInfo.double_jump = true;
    TweenMax.to(self.jump_tween, 1, {y:20, onUpdate:function(){
        self.hero.body.velocity.y = self.hero.body.velocity.y - 15;
    },onComplete:function(){
        self.gameInfo.double_jump = false;
    }});
}
run.prototype.invicible = function(){
    //audio_manager.stop_sound('run');
    if(typeof self._running_sound !== "undefined"){
        self._running_sound.stop();
    }
    
    if(typeof self._invicible_sound === "undefined"){
        audio_manager.play_sound('run_invicible', 0, function(e){self._invicible_sound = e;});
    }else{
        self._invicible_sound.play(-1);
    }
    
    self.gameInfo.oka_state = "invicible";
    self.gameInfo.state = "invicible";
    self.gameInfo.invicible = true;
    //self.hero.play('invicible');
    self.hero.body.velocity.y = -800;
    self.fast_emitter.on = true;
    
    self.hero.body.fixedRotation = false;
    self.hero.body.setCircle(50);
    //self.gameInfo.rotation = -0.2;
    
    setTimeout(function(){
        self.gameInfo.invicible = false;
        //self.gameInfo.rotation = 0;
        self.hero.body.setRectangle(100,150);
        self.hero.body.fixedRotation = true;
        self.hero.rotation = 0;
        self.hero.body.rotation = 0;
        self.fast_emitter.on = false;
        if(self.gameInfo.state !== "died"){
            self.gameInfo.state = "";
        }
        self.gameInfo.oka_state = null;
        //self.hero.play('run');
    },8000);
}
run.prototype.parachute = function(){
    if(self.gameInfo.state === "died"){
        return false;
    }
    //audio_manager.stop_sound('run');
    if(typeof self._running_sound !== "undefined"){
        self._running_sound.stop();
    }
   //audio_manager.play_sound('parachute', 0, function(){});
    if(typeof self._parachute_sound === "undefined"){
        audio_manager.play_sound('run_parachute', 0, function(e){self._parachute_sound = e;});
    }else{
        self._parachute_sound.play(0);
    }
    
    if(self.gameInfo.state !== "died"){
        self.hero.play('parachute');
    }
    self.gameInfo.state = "parachute";
    self.gameInfo.parachute = true;
    self.game.physics.p2.gravity.y = 60;
    self.hero.body.velocity.y = 0;
    self.hero.body.mass = 100;
    setTimeout(function(){
        self.gameInfo.parachute = false;
        if(self.gameInfo.state !== "died"){
            self.gameInfo.state = "";
        }
        self.game.physics.p2.gravity.y = 1500;
        self.hero.body.mass = 1000;
    },5000);
}
run.prototype.on_down = function(evt){
    navigation.set_update_events();
    evt.preventDefault();
    if(self.gameInfo.state === "died"){
        return false;
    }else{
        if(self.gameInfo.speed === 0){
            self.gameInfo.speed = 800;
            self.hero.play('run');
        }
    }
    self.gameInfo.state="jumping";
    self.gameInfo.jumping = true;
    self.fast_emitter.on = false;
    self.emitter.on = false;
    if(!self.jumping_infos.is_jumping){
        self.hero.body.velocity.y = -700;  
        TweenMax.to(self.jump_tween, .8, {y:20, onUpdate:function(){
            self.hero.body.velocity.y = self.hero.body.velocity.y - 20;
        },onComplete:function(){
            if(self._is_down){
                self.parachute();
            }
            self.gameInfo.jumping = false;
        }});
    }else{
        /* --------- IF HERO CURRENTLY JUMPING CHECK IF HERO HAVE POWERS AND SHOW THEM -------- */
        var last_power = self.hero_power.length-1;
        if(typeof self.hero_power[last_power] !== "undefined"){
            switch(self.hero_power[last_power].type){
                case "double_jump":
                    self.dbl_jump();
                    break;
                case "invicible":
                    self.invicible();
                    break;
                case "parachute":
                    self.parachute();
                    break;
            }
            self.hero_power[last_power].obj.destroy();
            delete self.hero_power[last_power];
            self.hero_power.splice(last_power, 1);
        }
    }
    if(!self.jumping_infos.is_jumping){
        if(typeof self._jump_sound === "undefined"){
            audio_manager.play_sound('run_jump', 0, function(e){self._jump_sound = e;});
        }else{
            console.log('on down when !is_jumping play jump sound');
            self._jump_sound.play(0);
        }
    }
    self.jumping_infos.is_jumping = true;
    //audio_manager.stop_sound('run');
    if(typeof self._running_sound !== "undefined"){
        self._running_sound.stop();
    }
    self.jumping_infos.x = evt.pageX;
    self.jumping_infos.y = evt.pageY; 
    self.jumping_infos.angle = self.hero.body.angle;
    self.jumping_infos.rotation = self.hero.body.rotation
    self.jumping_infos.rotate = 0;
    
    self._is_down = true;
}
run.prototype.on_up = function(evt){
    if(self.gameInfo.state !== "died"){
        if(self.gameInfo.state === "parachute"){
            if(self.gameInfo.state !== "died"){
                self.gameInfo.state = "";
            }
            self.game.physics.p2.gravity.y = 1500;
            self.hero.body.mass = 1000;
        }
        TweenLite.killTweensOf(self.jump_tween);
        var dist = self.jumping_infos.y - evt.pageY;
        self._is_down = false;
    }
}
run.prototype.render = function(){
    if(self.game.paused){
        return false;
    }
    if(self.gameInfo.invicible){
        self.hero.body.fixedRotation = false;
        self.hero.body.rotation += .15;
        self.hero.play('invicible');
    }else{
        self.hero.body.rotation = 0;
        if(self.gameInfo.parachute){
            
        }
    }
    self.game.world.wrap(self.hero, 64);
    /* ------- REPLACE HERO POWER ICONS ------- */
    $.each(self.hero_power, function(i, p){
        self.hero_power[i].obj.position.x = self.hero_powers.body.x - (30 * (i+1));
        self.hero_power[i].obj.position.y = self.hero_powers.body.y - ((self.hero.body.velocity.y / 10)*(i+1));
    });
    if(self.gameInfo.state !== "died"){
        self.hero.body.velocity.x = self.gameInfo.speed;
        self.gameInfo.distance = Math.round(self.game.camera.position.x/200);
        self.distances_text.text = self.gameInfo.distance;
        self.distances_text.x = self.distances.getBounds().x + (self.distances.getBounds().width/2) - (self.distances_text.getBounds().width/2);
        self.game.world.scale.setTo(self.scale, self.scale);
        /* REPLACE CAMERA ON HERO */
        var np = {
            x:self.hero.position.x * self.scale - 300,
            y:self.hero.position.y * self.scale - self.gameInfo.height/2
        }
        if(self.cam_to_hero){
            self.game.camera.setPosition(np.x, np.y + 50);
        }else{
            self.game.camera.setPosition(500, np.y + 50);   
        }
    }
}
run.prototype.moveBody = function(){
    if(self.game.paused){
        return false;
    }
    if(self.gameInfo.state !== "died"){
        if(!self.gameInfo.invicible && !self.gameInfo.parachute){
            if(self.hero.body.velocity.y > 100){
                self.hero.play('after_jump');
                self.gameInfo.motion_state = "after_jump";
            }
            if(self.jumping_infos.is_jumping){
                if(self.hero.body.velocity.y > 20){
                    self.hero.play('after_jump');
                    self.gameInfo.motion_state = "after_jump";
                }else{
                    if(self.hero.body.velocity.y < -500){
                        if(self.gameInfo.motion_state !== "jump"){
                            self.hero.play('jump');
                            self.gameInfo.motion_state = "jump";
                        }
                    }else{
                        if(self.gameInfo.motion_state !== "small_jump"){
                            self.hero.play('small_jump');
                            self.gameInfo.motion_state = "small_jump";
                        }
                    }
                }
            }
        }
    }
    
    if(self.game.camera.position.x > self.levels[self.levels.length-1].position.x - 500){
        self.create_ground_level();
    }
    
    if(typeof self.mountain_3 !== "undefined" && self.gameInfo.state !== "died"){
        self.mountain_3.tilePosition.x -= self.hero.body.velocity.x / 200;
        self.mountain_2.tilePosition.x -= self.hero.body.velocity.x / 190;
        self.mountain_1.tilePosition.x -= self.hero.body.velocity.x / 180;
        self.mountain_3.tilePosition.y = (Math.abs(self.hero.position.y) / 300) + (self.gameInfo.height/2);
        self.mountain_2.tilePosition.y = (Math.abs(self.hero.position.y) / 50) + (self.gameInfo.height/2);
        self.mountain_1.tilePosition.y = (Math.abs(self.hero.position.y) / 15) + (self.gameInfo.height/2);
    }
    
    /* REPLACE EMITTER COLLIDER */
    if(typeof self.emitter !== "undefined"){
        if(self.emitter.on){
            self.emitter.emitX = self.hero.x;
            self.emitter.emitY = self.hero.y + 75;
        }
    }
    if(typeof self.fast_emitter !== "undefined"){
        if(self.fast_emitter.on){
            self.fast_emitter.emitX = self.hero.x;
            self.fast_emitter.emitY = self.hero.y + 75;
        }
    }
    if(typeof self.particles !== "undefined"){
        self.particles.emitX = self.game.camera.x + self.gameInfo.width/2;
        self.particles.emitY = self.game.camera.y;
    }
}
run.prototype.clean_game = function(){
    $.each(self.brick, function(i, brick){
        if(brick.position.x + 1200 < self.game.camera.position.x){
            brick.destroy();
            delete brick;
        }
    }); 
    $.each(self.elements, function(i, element){
        if(element.position.x + 1200 < self.game.camera.position.x){
            element.destroy();
            element = null;
            delete element;
        }
    });
}
run.prototype.update = function(){
    
}
run.prototype.create_interface = function(){
    this.init();
}
run.prototype.died = function(){
    audio_manager.play_sound('run_died', 0, function(){});
    if(typeof self._running_sound !== "undefined"){
        self._running_sound.stop();
    }
    self.hero_boomer.body.onBeginContact.removeAll();
    self.hero_boomer.body.onEndContact.removeAll();
    self.hero_boomer.destroy();
    delete self.hero_boomer;
    
    self.gameInfo.state = "died";
    self.gameInfo.speed = 0;
    self.hero.body.clearShapes();
    self.hero.play('died');
    self.hero.body.velocity.x = 0;
    self.hero.body.velocity.y = -600;
    TweenMax.to(self.decors.position, 1.5, {
        y:window.innerHeight*2,
        ease:Power4.easeIn,
        delay:2
    });
    TweenMax.to(self.elements_layer.position, 1.5, {
        y:window.innerHeight*2,
        ease:Power4.easeIn,
        delay:2
    });
    
    var pos = {x:self.game.camera.position.x, y:self.game.camera.position.y};
    TweenMax.to(pos, 2, {
        y:0,
        x:0,
        onUpdate : function(){
            if(typeof self === "undefined"){
                return false;
            }
            if(typeof self.task_bar === "undefined"){
                return false;
            }
            self.task_bar.fixedToCamera = false;
            self.game.camera.setPosition(pos.x, pos.y);  
            self.task_bar.position.x = pos.x;
            self.task_bar.position.y = pos.y-window.innerHeight/2-100;
            if(typeof self.mountain_3 !== "undefined"){
                self.mountain_3.tilePosition.y = self.mountain_2.tilePosition.y = self.mountain_1.tilePosition.y = self.game.camera.position.y;
            }
        },
        onComplete:function(){
            if(typeof self === "undefined"){
                return false;
            }
            if(typeof self.task_bar === "undefined"){
                return false;
            }
            self.total_text = self.task_bar.add(self.game.make.text(0, 0, '0',  { font: "700 100px Roboto", fill: '#FFFFFF', align:"center"}));
            self.total_text.text = "00000";
            self.total_text.y = 120;
            self.total_text.alpha = 0;
            self.total_text.x = self.distances_text.x;
            var total = self.gameInfo.distance + self.gameInfo.score.circles + self.gameInfo.score.squares + self.gameInfo.score.triangles;
            var scored = {total:0};
            audio_manager.play_sound('total_count', 0, function(){});
            TweenMax.to(self.total_text, .5, {alpha:1});
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
                    self.total_text.text = score;
                },
                ease:Power4.easeOut,
                onComplete:function(){
                    /* ADD REPLAY AND STAT BUTTON WITH SCALE INTRO */
                    self.stat_button = self.game.add.button(self.game.camera.position.x - 140, self.game.camera.position.y + 150, 'stats_btn', self.show_stats, this);
                    self.replay_button = self.game.add.button(self.game.camera.position.x + 10, self.game.camera.position.y + 150, 'replay_btn', self.replay_game, this);
                    
                    utilities.save_score_game('run', total);
                    
                    self.stat_button.scale.x = self.stat_button.scale.y = self.replay_button.scale.x = self.replay_button.scale.y = 0;
                    var sc = {s:0};
                    TweenMax.to(sc, .5, {s:1, onUpdate:function(){
                        self.stat_button.scale.x = self.stat_button.scale.y = self.replay_button.scale.x = self.replay_button.scale.y = sc.s;
                    }});
                    utilities.create_over_motion({
                        size:{width:290, height:200},
                        position:{x:((window.innerWidth/2)-150), y:((window.innerHeight/2) - 300)},
                        motion:self.gameInfo.motion_state+"_run_motion"
                    }, function(){
                        console.log('motion completed');
                    });
                }
            });
        },
        ease:Power4.easeOut,
        delay:4
    });
}
run.prototype.pause = function(){
    self.game.paused = true;
}
run.prototype.play = function(){
    self.game.paused = false;
}
run.prototype.show_stats = function(){
    var total_score = self.gameInfo.distance + self.gameInfo.score.circles + self.gameInfo.score.squares + self.gameInfo.score.triangles;
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
    self.hero.body.onBeginContact.removeAll();
    self.hero.body.onEndContact.removeAll();
    /* ----- TODO CLEAN ALL VARS DESTROY SPRITE AND BODIES BEFORE KILLING THE GAME -------- */
    //self.house.destroy();
    self.hero.destroy();
    //self.hero_boomer.destroy();
    self.hero_powers.destroy();
    $.each(_.keys(self.brick), function(i, key){
        self.brick[key].destroy();
    });
    $.each(_.keys(self.elements), function(i, key){
        self.elements[key].destroy();
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
    delete this.info_bul;
    
    self.game.destroy();
    self.delete_objects(self);
    
    delete self.game;
}
run.prototype.delete_objects = function(obj){
    $.each(_.keys(obj), function(i, k){
        delete obj[k];
        obj[k] = null;
    });
}
run.prototype.destroy = function(callBack){
    if(typeof self._running_sound !== "undefined"){
        self._running_sound.stop();  
    }
    self.destroy_all_game();
    utilities.destroy_over_motion();
    callBack();
}