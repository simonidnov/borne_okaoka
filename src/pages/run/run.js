var self = null;
function run(){
    this._debug = false;
    this._current_level = 0;
    this._current_decors = 1;
    this._current_ceiling_level = 1;
    this._total_levels = 1;
    this.levels = [];
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
    this.gameInfo = {
        total_maps:25,
        start_date:0, 
        distance:0, 
        tilemap:{
            size:{
                width:1250, 
                height:2500
            }, 
            def:6515
        }, 
        width:window.innerWidth,
        height:window.innerHeight,
        speed:0, 
        state:"", 
        motion_state:"",
        rotation:0
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
    
    self.game.load.image('bck_1', 'pages/run/maps/backgrounds/background_1-01.png');
    self.game.load.image('bck_2', 'pages/run/maps/backgrounds/background_2-01.png');
    self.game.load.image('bck_3', 'pages/run/maps/backgrounds/background_3-01.png');
    
    self.game.load.image('invicible', 'pages/run/maps/special_mutation/invicible.png');
    self.game.load.image('double_jump', 'pages/run/maps/special_mutation/double_jump.png');
    self.game.load.image('parachute', 'pages/run/maps/special_mutation/parachute.png');
    
    self.game.load.image('invicible_icon', 'pages/run/maps/special_mutation/invicible_icon.png');
    self.game.load.image('double_jump_icon', 'pages/run/maps/special_mutation/double_jump_icon.png');
    self.game.load.image('parachute_icon', 'pages/run/maps/special_mutation/parachute_icon.png');
    
    self.game.load.image('particles', 'pages/run/maps/particles.gif');
    self.game.load.image('particles5', 'pages/run/maps/particles_5.gif');
    self.game.load.image('particles2', 'pages/run/maps/particles_2.gif');
    self.game.load.image('house', 'pages/run/maps/house.png');
    self.game.load.image('info_bul', 'pages/run/maps/info_bul.png');
    
    for(var i=1; i<26; i++){
        self.game.load.image('map_'+i, 'pages/run/maps/1250/decors/map_1250_map_'+i+'.png');
        self.game.load.image('watter_'+i, 'pages/run/maps/1250/decors/map_1250_map_'+i+'.png');
        self.game.load.image('picots_'+i, 'pages/run/maps/1250/decors/map_1250_map_'+i+'.png');
    }
    
    self.game.load.physics('floor_map', 'pages/run/maps/1250/maps_1250_colliders.json');
    self.game.load.physics('watter_map', 'pages/run/maps/1250/maps_1250_watter.json');
    self.game.load.physics('picots_map', 'pages/run/maps/1250/maps_1250_picots.json');
    
    self.game.load.spritesheet('bear', 'pages/run/maps/character/bear.png', 75, 150);
    self.game.load.spritesheet('okaoka2', 'pages/run/maps/character/okaoka.png', 75, 150);
    self.game.load.spritesheet('okaoka', 'pages/run/maps/character/okaoka.png', 75, 150);
    
    self.game.load.image('hero', 'pages/run/maps/hero.png');
    self.game.load.image('boomer', 'pages/run/maps/boomer.png');
    self.game.load.image('puff', 'pages/run/maps/puff.png');
    self.game.load.image('invicible_emitter', 'pages/run/maps/invicible_emitter.png');
}
run.prototype.create = function(){
    self.game.time.events.loop(Phaser.Timer.SECOND / 20, self.moveBody, this);
    self.game.time.events.loop(Phaser.Timer.SECOND * 2, self.clean_game, this);
    
    self.game_start = new Date().getTime();
    self.game.world.setBounds(-4000, -2500, 800000, 2500);
    //self.game.world.setBounds(-1000, -1000, 2000, 2000);
    //self.game.stage.scaleMode = Phaser.scaleModes.DEFAULT; 
    
    self.game.stage.backgroundColor = colors.pink;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    
    self.game.time.desiredFps = 30;
    
    self.game.physics.p2.restitution = 0;
    self.game.physics.p2.friction = 0;
    //game.physics.p2.world.defaultContactMaterial.friction = 0.3;
    self.game.physics.p2.gravity.y = 1500;
    
    
    self.mountain_3 = self.game.add.tileSprite(-self.gameInfo.width/2, -400, self.gameInfo.width*2, self.gameInfo.height*2, 'bck_3');
    self.mountain_2 = self.game.add.tileSprite(-self.gameInfo.width/2, -400, self.gameInfo.width*2, self.gameInfo.height*2, 'bck_2');
    self.mountain_1 = self.game.add.tileSprite(-self.gameInfo.width/2, -400, self.gameInfo.width*2, self.gameInfo.height*2, 'bck_1');
    
    self.mountain_3.fixedToCamera = true;
    self.mountain_2.fixedToCamera = true;
    self.mountain_1.fixedToCamera = true;
    
    //cursors = game.input.keyboard.createCursorKeys();
    
    self.decors = self.game.add.group();
    
    //self.hero = self.game.add.sprite(-3800, -1100, 'hero');
    /* -------- SAMPLE SPRITE ---------- */
    
    self.hero = self.game.add.sprite(-2800, -1200, 'okaoka');
    self.hero.scale.set(1);
    self.hero.smoothed = true;
    self.hero.animations.add('run', [0,1,2,3,4,5,6,7,8], 25, true);
    self.hero.animations.add('small_jump', [9,10,11,12,13,14], 25, false);
    self.hero.animations.add('jump', [15,16,17,18], 25, false);
    self.hero.animations.add('after_jump', [19,20,21,22,23,24], 25, false);
    self.hero.animations.add('oka', [25,26,27,28,29], 25, false);
    self.hero.animations.add('wall', [30,31,32,33], 25, false);
    self.hero.animations.add('wall_end', [34,35,36,37,38], 25, false);
    self.hero.animations.add('parachute', [39,40,41,42,43,44,45,46,47,48], 25, false);
    self.hero.animations.add('speed', [49,50,51,52,53], 25, true);
    self.hero.animations.add('invicible', [54,55,56,57,58], 25, true);
    self.hero.animations.add('watter', [59,60,61,62,63,64,65,66,67,68,69], 12, true);
    self.hero.animations.add('picots', [70], 25, false);
    self.hero.animations.add('slide', [80], 1, false);
    self.hero.animations.add('died', [85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], 25, true);
    self.hero.play('oka');
    
    
    /*self.hero = self.game.add.sprite(-2800, -1200, 'bear');
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
    self.hero.play('oka');*/
    
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
    self.particle();
    
    self.house = self.game.add.sprite(-2850, -1200, 'house');
    
    self.fast_emitter.on = false;
    //self.game.camera.follow(self.hero);
    /* replace element hero on left */
    self.game.camera.setSize(900,self.gameInfo.height);
    /* ------ SET HERO PROPERTIES ------ */
    self.hero.body.mass = 1000;
    
    self.hero.body.setRectangle(75,150);
    //self.hero.body.y = 75;
    //self.hero.body.setCircle(37);
    self.hero.body.fixedRotation = true;
    
    self.hero.body.sensor = true;
    self.hero.body.onBeginContact.add(self.collision, this);
    self.hero.body.onEndContact.add(self.endcollision, this);
    
    //self.hero_boomer.body.setCircle(15);
    self.hero_boomer.body.sensor = true;
    self.hero_boomer.body.fixedRotation = true;
    
    //self.hero_powers.body.setCircle(5);
    self.hero_powers.body.sensor = true;
    self.hero_powers.body.fixedRotation = true;
    
    //self.hero_boomer.body.collides(pandaCollisionGroup, hitPanda, this);
    self.hero_boomer.body.onBeginContact.add(self.head_collision, this);
    self.hero_boomer.body.onEndContact.add(self.head_endcollision, this);
    
    self.create_ground_level();
    self.create_ground_level();
    //self.game.input.onDown.add(self.on_down, this);
    //self.game.input.onUp.add(self.on_up, this);
    
    self.gameInfo.start_date = new Date().getTime();
    
    self.intro_game();
    
}
run.prototype.intro_game = function(){
    self.hero.play('oka');
    
    TweenMax.to($('#phaser-run'), 1, {opacity:1, onComplete:function(){
        TweenMax.to(self.gameInfo, 1.5, {
            speed:250,
            onComplete:function(){
                self.bubble = self.game.add.sprite(self.hero.position.x + 30, self.hero.position.y - 50, 'info_bul');
                utilities.show_popup(
                    {color:navigation._current_interface_color, motion:"intro_run", buttons:["play"]}, 
                    function(e){
                        self.set_listeners();
                        self.bubble.destroy();
                        setTimeout(function(){
                            self.hero.play('run');
                            self.gameInfo.speed = 600;
                        }, 500);
                    }
                );
                self.gameInfo.speed = 0;
                self.hero.play('oka');
            }
        });
        self.hero.play('run');
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
    var current_power = self.hero_power.length;
    self.hero_power[current_power] = {
        "type":power,
        "obj":self.game.add.sprite(
            self.hero_powers.body.x - (50 * (current_power+1)), 
            self.hero_powers.body.y, 
            power+"_icon"
        )
    }
    /*self.game.physics.p2.enable([ self.hero_power[current_power].obj ], self._debug);
    
    self.hero_power[current_power].obj.body.sensor = true;
    self.hero_power[current_power].obj.body.fixedRotation = true;
    
    var _constraint = self.game.physics.p2.createPrismaticConstraint(
        self.hero_powers, 
        self.hero_power[current_power].obj, 
        false,
        [-(50 * current_power+1),-50],
        [2,2],
        [2,2]
    );
    _constraint.lowerLimitEnabled = _constraint.upperLimitEnabled = true;
    _constraint.upperLimit = 0;
    _constraint.lowerLimit = 0;*/
}
run.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body === null){
        return false;
    }
    if(self.gameInfo.state === "parachute"){
        self.gameInfo.state = "";
        self.game.physics.p2.gravity.y = 1500;
        self.hero.body.mass = 1000;
    }
    if(body.sprite.key.indexOf('double_jump') !== -1){
        self.add_power('double_jump');
        body.sprite.destroy();
        return;
    }
    if(body.sprite.key.indexOf('invicible') !== -1){
        self.add_power('invicible');
        body.sprite.destroy();
        return;
    }
    if(body.sprite.key.indexOf('parachute') !== -1){
        self.add_power('parachute');
        body.sprite.destroy();
        return;
    }
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
        if(body.sprite.key.indexOf('picots') !== -1 && self.gameInfo.state !== "died"){
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
    if(self.gameInfo.state !== "died"){
        if(self.gameInfo.state == "sliding"){
             self.hero.play('sliding');
        }else if(self.gameInfo.state === "invicible"){
            self.hero.play('invicible');
        }else{
            self.hero.play('run');
        }
        self.last_collision = new Date().getTime();
        if(self.jumping_infos.rotate && self.jumping_infos.is_jumping){
            self.hero.body.velocity.x = self.hero.body.velocity.x + (self.jumping_infos.rotate*100);
        }else{
            //self.puff();
        }
        if(body){
            //self.hero.body.fixedRotation = false;
            self.jumping_infos.is_jumping = false;
        }
        self.emitter.on = true;
        if(self.gameInfo.state !== "sliding" || self.gameInfo.state !== "invicible"){
            setTimeout(function(){
               self.emitter.on = false;
            }, 100);
        }
    }else{
        if(self.gameInfo.motion_state == "wall"){
            self.hero.play('wall_end');
            setTimeout(function(){
                utilities.show_popup(
                    {color:navigation._current_interface_color, motion:"wall_run", buttons:["quit", "refresh"]}, 
                    function(e){
                        if(e == 0){
                            navigation.router.navigate('page/menu', {trigger:true, replace:true});
                        }else{
                            self.replay_game();
                        }
                    }
                );
            }, 500);
        }
    }
}
run.prototype.head_collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body === null){
        return false;
    }
    if(self.gameInfo.state === "invicible"){
        return false;
    }
    /* ADD EXEPT ON POWER COLLIDER */
    if(body.sprite.key.indexOf('map_') !== -1){
        self.hero_boomer.body.onBeginContact.removeAll();
        self.hero_boomer.body.onEndContact.removeAll();
        self.hero_boomer.destroy();
        delete self.hero_boomer;
        self.gameInfo.state = "died";
        self.gameInfo.motion_state = "wall";
        self.hero.play('wall');
        self.gameInfo.speed = 0;
        self.hero.body.velocity.x = -250;
        self.hero.body.velocity.y = -800;
        TweenMax.to(self.hero.body.velocity, 1, {
            x:0, 
            delay:.2
        });
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
    self.particles = self.game.add.emitter(self.game.world.centerX, self.game.world.centerY, 400);
    self.particles.makeParticles( [ 'particles', 'particles5', 'particles2' ] );
    //self.emitter.color = ["#FFF"];
    self.particles.gravity = 0;
    self.particles.width = self.gameInfo.width;
    self.particles.height = self.gameInfo.height/2;
    self.particles.minParticleSpeed.set(0, 50);
    self.particles.maxParticleSpeed.set(0, 200);

    self.particles.setRotation(0, 0);
    self.particles.setAlpha(0.3, 0.6);
    self.particles.setScale(1, 1, 0, 0);
    self.particles.gravity = 0;

    //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
    //	The 5000 value is the lifespan of each particle before it's killed
    self.particles.start(false, 5000, 100);
}
run.prototype.create_ground_level = function(){
    var prevPosX = 0;
    var cur_level = self._current_level;
    
    var landCG = self.game.physics.p2.createCollisionGroup();
    
    /* calcul de la position x des decors à ajouter */
    var x_pos = self.gameInfo.tilemap.size.width * (cur_level) - 2500;
    
    self.levels[cur_level] = self.decors.create(
        x_pos, 
        -1500, 
        'map_'+self._current_decors
    );
    //(self.gameInfo.tilemap.size.height - self.gameInfo.tilemap.def) * cur_level
    self.game.physics.p2.enable([ self.levels[cur_level] ], self._debug);
    self.levels[cur_level].body.clearShapes();
	self.levels[cur_level].body.loadPolygon('floor_map', 'map_1250_map_'+self._current_decors);
    self.levels[cur_level].body.mass = 1000;
    self.levels[cur_level].body.kinematic = true;
    
    /* ------- ADD WATTER WITH MAP --------- */
    self.levels_watter[cur_level] = self.decors.create(
        x_pos, 
        -1500, 
        'watter_'+self._current_decors
    );
    self.game.physics.p2.enable([ self.levels_watter[cur_level] ], self._debug);
    self.levels_watter[cur_level].body.clearShapes();
	self.levels_watter[cur_level].body.loadPolygon('watter_map', 'map_1250_map_'+self._current_decors);
    self.levels_watter[cur_level].body.kinematic = true;
    
    /* ------- ADD PICOTS WITH MAP --------- */
    self.levels_picots[cur_level] = self.decors.create(
        x_pos, 
        -1500, 
        'picots_'+self._current_decors
    );
    self.game.physics.p2.enable([ self.levels_picots[cur_level] ], self._debug);
    self.levels_picots[cur_level].body.clearShapes();
	self.levels_picots[cur_level].body.loadPolygon('picots_map', 'map_1250_map_'+self._current_decors);
    self.levels_picots[cur_level].body.kinematic = true;
    
    var screen_datas = _.findWhere(run_objects.screens, {"name":"screen_"+self._current_decors});
    if(typeof screen_datas !== "undefined"){
        self.levels_objects[cur_level] = [];
        $.each(screen_datas.objects, function(i, obj){
            switch(obj.type){
                case 'double_jump':
                    self.levels_objects[cur_level][i] = self.decors.create(
                        (x_pos) + (obj.position.x - (self.gameInfo.tilemap.size.width/2)), 
                        obj.position.y - 1500, 
                        'double_jump'
                    );
                    break;
                case 'invicible':
                    self.levels_objects[cur_level][i] = self.decors.create(
                        (x_pos) + (obj.position.x - (self.gameInfo.tilemap.size.width/2)), 
                        obj.position.y - 1500, 
                        'invicible'
                    );
                    break;
                case 'parachute':
                    self.levels_objects[cur_level][i] = self.decors.create(
                        (x_pos) + (obj.position.x - (self.gameInfo.tilemap.size.width/2)), 
                        obj.position.y - 1500, 
                        'parachute'
                    );
                    break;
            }
            self.game.physics.p2.enable([ self.levels_objects[cur_level][i] ], self._debug);
            self.levels_picots[cur_level].body.kinematic = true;
        });
    }
    //self.decors.add(self.levels_enemy[self.levels_enemy.length-1]);
    
    /* ------- AD ENEMY POLYGON ONLY --------- */
    //self.levels[cur_level].body.loadPolygon('enemies_map', 'map_2500_map_'+self._current_decors);
    //self.levels[cur_level].body.mass = 1000;
    //self.levels[cur_level].body.kinematic = true;
    
    //self.levels[cur_level].body.setCollisionGroup(landCG); 
    //self.levels[cur_level].body.collides(self.hero);
    
    self._current_level++;
    self._current_decors++;
    if(self._current_decors == self.gameInfo.total_maps+1){
        self._current_decors = 1;
    }
    self.gameInfo.last_created_ground = new Date().getTime();
}
run.prototype.dbl_jump = function(){
    self.hero.body.velocity.y = -800;
    self.jump_tween.y = 0;
    TweenMax.to(self.jump_tween, 1, {y:20, onUpdate:function(){
        self.hero.body.velocity.y = self.hero.body.velocity.y - 15;
    }});
}
run.prototype.invicible = function(){
    self.gameInfo.state = "invicible";
    self.hero.play('invicible');
    self.hero.body.velocity.y = -800;
    self.fast_emitter.on = true;
    
    //self.hero.body.setCircle(37);
    //self.gameInfo.rotation = -0.2;
    //self.hero.body.fixedRotation = false;
    setTimeout(function(){
        //self.gameInfo.rotation = 0;
        //self.hero.body.setRectangle(75,75);
        self.hero.body.fixedRotation = true;
        self.hero.rotation = 0;
        self.hero.body.rotation = 0;
        self.fast_emitter.on = false;
        self.gameInfo.state = "";
        //self.hero.play('run');
    },8000);
}
run.prototype.parachute = function(){
    self.gameInfo.state = "parachute";
    self.game.physics.p2.gravity.y = 60;
    self.hero.body.velocity.y = 0;
    self.hero.body.mass = 100;
    self.hero.play('parachute');
    setTimeout(function(){
        self.gameInfo.state = "";
        self.game.physics.p2.gravity.y = 1500;
        self.hero.body.mass = 1000;
    },5000);
}
run.prototype.on_down = function(evt){
    evt.preventDefault();
    if(self.gameInfo.state === "died"){
        return false;
    }else{
        if(self.gameInfo.speed === 0){
            self.gameInfo.speed = 500;
            self.hero.play('run');
        }
    }
    self.gameInfo.state="jumping";
    self.emitter.on = false;
    if(!self.jumping_infos.is_jumping){
        self.hero.body.velocity.y = -600;
        TweenMax.to(self.jump_tween, .5, {y:20, onUpdate:function(){
            self.hero.body.velocity.y = self.hero.body.velocity.y - 20;
        }});
        //self.hero.body.velocity.x = self.hero.body.velocity.x+250;
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
    self.jumping_infos.is_jumping = true
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
            self.gameInfo.state = "";
            self.game.physics.p2.gravity.y = 1500;
            self.hero.body.mass = 1000;
        }
        TweenLite.killTweensOf(self.jump_tween);
        var dist = self.jumping_infos.y - evt.pageY;
        self._is_down = false;
        if(dist > 100){
            //self.game.physics.p2.gravity.y = -1000;
        }else if(dist < -100){
            /*self.gameInfo.state="sliding";
            self.hero.play('slide');
            self.hero.body.velocity.y = self.hero.body.velocity.y + 700;
            
            self.hero.body.setRectangle(75,25);
            setTimeout(function(){
                self.gameInfo.state = "";
                self.hero.play('run');
                self.emitter.on = false;
                self.hero.body.setRectangle(75,75);
            },3500);*/
            //self.game.physics.p2.gravity.y = 1000;
        }
    }
}

run.prototype.render = function(){
    if(self.game.paused){
        return false;
    }
    if(self.gameInfo.state !== "died"){
        self.hero.body.velocity.x = self.gameInfo.speed;
    }
    self.game.world.wrap(self.hero, 64);
    /* ------- REPLACE HERO POWER ICONS ------- */
    $.each(self.hero_power, function(i, p){
        self.hero_power[i].obj.position.x = self.hero_powers.body.x - (30 * (i+1));
        self.hero_power[i].obj.position.y = self.hero_powers.body.y - ((self.hero.body.velocity.y / 10)*(i+1));
    });
    /* REPLACE CAMERA ON HERO */
    var np = {
        x:self.hero.position.x * self.scale - 300,
        y:self.hero.position.y * self.scale - self.gameInfo.height/2
    }
    self.game.camera.setPosition(np.x, np.y);
}
run.prototype.moveBody = function(){
    if(self.game.paused){
        return false;
    }
    if(self.gameInfo.state !== "died"){
        if(self.jumping_infos.is_jumping && self.gameInfo.state === "jumping"){
            if(self.hero.body.velocity.y > 0){
                if(self.gameInfo.motion_state !== "after_jump"){
                    self.hero.play('after_jump');
                    self.gameInfo.motion_state = "after_jump";
                }
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
    
    if(self.game.camera.position.x > self.levels[self.levels.length-1].position.x - 500){
        self.create_ground_level();
    }
    
    
    self.mountain_3.tilePosition.x -= self.hero.body.velocity.x / 200;
    self.mountain_2.tilePosition.x -= self.hero.body.velocity.x / 190;
    self.mountain_1.tilePosition.x -= self.hero.body.velocity.x / 180;
    self.mountain_3.tilePosition.y = (Math.abs(self.hero.position.y) / 300) + (self.gameInfo.height/3);
    self.mountain_2.tilePosition.y = (Math.abs(self.hero.position.y) / 50) + (self.gameInfo.height/3);
    self.mountain_1.tilePosition.y = (Math.abs(self.hero.position.y) / 15) + (self.gameInfo.height/3);
    
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
    console.log(self.game.time.fps);
    $.each(self.levels, function(i, lvl){
        var level_to_check = i;
        if(typeof self.levels[level_to_check] === "undefined"){
            delete self.levels[level_to_check];
            self.levels.splice(level_to_check, 1);
        }else{
            if(self.levels[level_to_check].position.x < self.game.camera.position.x - 3000){
                self.levels[level_to_check].body.sprite.destroy();
                //self.levels[0].destroy();
                delete self.levels[level_to_check];
                self.levels.splice(level_to_check, 1);
            }
        }
        if(typeof self.levels_watter[level_to_check] === "undefined"){
            delete self.levels_watter[level_to_check];
            self.levels_watter.splice(level_to_check, 1);
        }else{
            if(self.levels_watter[level_to_check].position.x < self.game.camera.position.x - 3000){
                self.levels_watter[level_to_check].body.sprite.destroy();
                delete self.levels_watter[level_to_check];
                self.levels_watter.splice(level_to_check, 1);
            }
        }
        if(typeof self.levels_picots[level_to_check] === "undefined"){
            delete self.levels_picots[level_to_check];
            self.levels_picots.splice(level_to_check, 1);
        }else{
            if(self.levels_picots[level_to_check].position.x < self.game.camera.position.x - 3000){
                self.levels_picots[level_to_check].body.sprite.destroy();
                delete self.levels_picots[level_to_check];
                self.levels_picots.splice(level_to_check, 1);
            }
        }
    });   
}
run.prototype.update = function(){
    
}
run.prototype.create_interface = function(){
    this.init();
}
run.prototype.died = function(){
    self.gameInfo.state = "died";
    self.gameInfo.speed = 0;
    //self.pause();
    setTimeout(function(){
        self.hero.play('died');
        //self.hero.body.setRectangle(75,50);
        setTimeout(function(){
            utilities.show_popup(
                {color:navigation._current_interface_color, motion:self.gameInfo.motion_state+"_run", buttons:["quit", "refresh"]}, 
                function(e){
                    if(e == 0){
                        navigation.router.navigate('page/menu', {trigger:true, replace:true});
                    }else{
                        self.replay_game();
                    }
                }
            );
        }, 500);
    },1000);
    
    /* ----- TODO SHOW POP self.gameInfo.motion_state --------- */
}
run.prototype.pause = function(){
    self.game.paused = true;
}
run.prototype.play = function(){
    self.game.paused = false;
}
run.prototype.replay_game = function(){
    self.destroy_all_game();
    this._debug = false;
    this._current_level = 0;
    this._current_decors = 1;
    this._current_ceiling_level = 1;
    this._total_levels = 1;
    this.levels = [];
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
    this.gameInfo = {
        start_date:0, 
        distance:0, 
        tilemap:{
            size:{
                width:2500, 
                height:2500
            }, 
            def:6515
        }, 
        speed:0, 
        state:"", 
        motion_state:"",
        rotation:0
    };
    this.lifes = {count:5, date:0};
    this.scale = 1;
    this.last_collision = new Date().getTime();
    window.location.reload();
    //this.init();
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
    self.house.destroy();
    self.hero.destroy();
    //self.hero_boomer.destroy();
    self.hero_powers.destroy();
    $.each(self.levels, function(i, lvl){
        self.levels[i].body.sprite.destroy();
        self.levels_watter[i].body.sprite.destroy();
        self.levels_picots[i].body.sprite.destroy();
    });
    /*delete this._current_level;
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
    delete this.house;
    delete this.info_bul;
    delete run_objects;*/
    
    self.game.destroy();
    self.delete_objects(self);
    
    delete self.game;
}
run.prototype.delete_objects = function(obj){
    $.each(_.keys(obj), function(i, k){
        delete obj[k];
        obj[k] = null;
        /*if(typeof obj[k] === "object"){
            //self.delete_objects(obj[k]);
        }else{
            delete obj[k];
        }*/
    });
}
run.prototype.destroy = function(callBack){
    self.destroy_all_game();
    callBack();
}