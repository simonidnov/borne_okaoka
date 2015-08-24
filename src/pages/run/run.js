var self = null;
function run(){
    this._debug = true;
    this._current_level = 0;
    this._current_decors = 1;
    this._current_ceiling_level = 1;
    this._total_levels = 1;
    this.levels = [];
    this._is_down = false;
    this.levels_enemy = [];
    this.levels_picots = [];
    this.levels_watter = [];
    this.levels_ceiling = [];
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
        speed:600, 
        state:"", 
        motion_state:""
    };
    
    this.lifes = {count:5, date:0};
    this.scale = 1;
    this.last_collision = new Date().getTime();
    self = this;
}
run.prototype.init = function(){
    $('#phaser-run').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-run', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
run.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    
    self.game.load.image('bck_1', 'pages/run/maps/backgrounds/backgrounds-1.png');
    self.game.load.image('bck_2', 'pages/run/maps/backgrounds/backgrounds-2.png');
    self.game.load.image('bck_3', 'pages/run/maps/backgrounds/backgrounds-3.png');
    
    self.game.load.image('invincible', 'pages/run/maps/special_mutation/invicible.png');
    self.game.load.image('double_jump', 'pages/run/maps/special_mutation/double_jump.png');
    self.game.load.image('parachute', 'pages/run/maps/special_mutation/parachute.png');
    
    self.game.load.image('map_1', 'pages/run/maps/decors/map_2500_map_1.png');
    self.game.load.image('map_2', 'pages/run/maps/decors/map_2500_map_2.png');
    self.game.load.image('map_3', 'pages/run/maps/decors/map_2500_map_3.png');
    self.game.load.image('map_4', 'pages/run/maps/decors/map_2500_map_4.png');
    self.game.load.image('map_5', 'pages/run/maps/decors/map_2500_map_5.png');
    self.game.load.image('map_6', 'pages/run/maps/decors/map_2500_map_6.png');
    self.game.load.image('map_7', 'pages/run/maps/decors/map_2500_map_7.png');
    self.game.load.image('map_8', 'pages/run/maps/decors/map_2500_map_8.png');
    self.game.load.image('map_9', 'pages/run/maps/decors/map_2500_map_9.png');
    self.game.load.image('map_10', 'pages/run/maps/decors/map_2500_map_10.png');
    self.game.load.image('map_11', 'pages/run/maps/decors/map_2500_map_11.png');
    self.game.load.image('map_12', 'pages/run/maps/decors/map_2500_map_12.png');
    
    self.game.load.image('watter_1', 'pages/run/maps/decors/map_2500_map_1.png');
    self.game.load.image('watter_2', 'pages/run/maps/decors/map_2500_map_2.png');
    self.game.load.image('watter_3', 'pages/run/maps/decors/map_2500_map_3.png');
    self.game.load.image('watter_4', 'pages/run/maps/decors/map_2500_map_4.png');
    self.game.load.image('watter_5', 'pages/run/maps/decors/map_2500_map_5.png');
    self.game.load.image('watter_6', 'pages/run/maps/decors/map_2500_map_6.png');
    self.game.load.image('watter_7', 'pages/run/maps/decors/map_2500_map_7.png');
    self.game.load.image('watter_8', 'pages/run/maps/decors/map_2500_map_8.png');
    self.game.load.image('watter_9', 'pages/run/maps/decors/map_2500_map_9.png');
    self.game.load.image('watter_10', 'pages/run/maps/decors/map_2500_map_10.png');
    self.game.load.image('watter_11', 'pages/run/maps/decors/map_2500_map_11.png');
    self.game.load.image('watter_12', 'pages/run/maps/decors/map_2500_map_12.png');
    
    self.game.load.image('picots_1', 'pages/run/maps/decors/map_2500_map_1.png');
    self.game.load.image('picots_2', 'pages/run/maps/decors/map_2500_map_2.png');
    self.game.load.image('picots_3', 'pages/run/maps/decors/map_2500_map_3.png');
    self.game.load.image('picots_4', 'pages/run/maps/decors/map_2500_map_4.png');
    self.game.load.image('picots_5', 'pages/run/maps/decors/map_2500_map_5.png');
    self.game.load.image('picots_6', 'pages/run/maps/decors/map_2500_map_6.png');
    self.game.load.image('picots_7', 'pages/run/maps/decors/map_2500_map_7.png');
    self.game.load.image('picots_8', 'pages/run/maps/decors/map_2500_map_8.png');
    self.game.load.image('picots_9', 'pages/run/maps/decors/map_2500_map_9.png');
    self.game.load.image('picots_10', 'pages/run/maps/decors/map_2500_map_10.png');
    self.game.load.image('picots_11', 'pages/run/maps/decors/map_2500_map_11.png');
    self.game.load.image('picots_12', 'pages/run/maps/decors/map_2500_map_12.png');
    
    self.game.load.physics('floor_map', 'pages/run/maps/map_2500.json');
    self.game.load.physics('watter_map', 'pages/run/maps/map_watter_2500.json');
    self.game.load.physics('picots_map', 'pages/run/maps/map_picots_2500.json');
    self.game.load.physics('objects_datas', 'pages/run/maps/objects_datas.json');
    
    self.game.load.spritesheet('okaoka', 'pages/run/maps/character/okaoka.png', 75, 75);
    
    self.game.load.image('hero', 'pages/run/maps/hero.png');
    self.game.load.image('boomer', 'pages/run/maps/boomer.png');
    self.game.load.image('puff', 'pages/run/maps/puff.png');
}
run.prototype.create = function(){
    self.game_start = new Date().getTime();
    self.game.world.setBounds(-4000, -2500, 800000, 2500);
    //self.game.world.setBounds(-1000, -1000, 2000, 2000);
    //self.game.stage.scaleMode = Phaser.scaleModes.DEFAULT; 
    
    self.game.stage.backgroundColor = colors.pink;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 0;
    self.game.physics.p2.friction = 0;
    //game.physics.p2.world.defaultContactMaterial.friction = 0.3;
    self.game.physics.p2.gravity.y = 1500;
    
    self.mountain_3 = self.game.add.tileSprite(-window.innerWidth/2, -400, window.innerWidth*2, window.innerHeight*2, 'bck_3');
    self.mountain_2 = self.game.add.tileSprite(-window.innerWidth/2, -400, window.innerWidth*2, window.innerHeight*2, 'bck_2');
    self.mountain_1 = self.game.add.tileSprite(-window.innerWidth/2, -400, window.innerWidth*2, window.innerHeight*2, 'bck_1');
    
    self.mountain_3.fixedToCamera = true;
    self.mountain_2.fixedToCamera = true;
    self.mountain_1.fixedToCamera = true;
    
    //cursors = game.input.keyboard.createCursorKeys();
    
    self.decors = self.game.add.group();
    
    //self.hero = self.game.add.sprite(-3800, -1100, 'hero');
    /* -------- SAMPLE SPRITE ---------- */
    self.hero = self.game.add.sprite(-3400, -900, 'okaoka');
    self.hero.scale.set(1);
    self.hero.smoothed = true;
    self.hero.animations.add('run', [0,1,2,3], 25, true);
    self.hero.animations.add('small_jump', [4], 8, false);
    self.hero.animations.add('jump', [5], 8, false);
    self.hero.animations.add('after_jump', [6], 8, false);
    self.hero.animations.add('wall', [8,9,10,11,12,13,14,15,16,17], 18, false);
    self.hero.animations.add('watter', [8,9,10,11,12,13,14,15,16,17], 18, false);
    self.hero.animations.add('picots', [8,9,10,11,12,13,14,15,16,17], 18, false);
    self.hero.animations.add('slide', [18], 1, false);
    self.hero.play('run');
    
    
    self.hero_boomer = self.game.add.sprite(-3380, -900, 'boomer');
    
    self.game.physics.p2.enable([ self.hero, self.hero_boomer ], self._debug);
    
    var constraint = self.game.physics.p2.createPrismaticConstraint(self.hero, self.hero_boomer, true,[10,-15],[0,0],[0,1]);
        //SET LIMITS
        constraint.lowerLimitEnabled = constraint.upperLimitEnabled = true;
        constraint.upperLimit = 0;
        constraint.lowerLimit = 0;
    
    self.puff();
    
    //self.game.camera.follow(self.hero);
    /* replace element hero on left */
    self.game.camera.setSize(900,window.innerHeight);
    /* ------ SET HERO PROPERTIES ------ */
    self.hero.body.mass = 1000;
    self.hero.body.fixedRotation = true;
    
    self.hero.body.sensor = true;
    self.hero.body.onBeginContact.add(self.collision, this);
    self.hero.body.onEndContact.add(self.endcollision, this);
    
    self.hero_boomer.body.fixedRotation = true;
    
    self.hero_boomer.body.onBeginContact.add(self.head_collision, this);
    self.hero_boomer.body.onEndContact.add(self.head_endcollision, this);
    
    self.create_ground_level();
    
    self.game.input.onDown.add(self.on_down, this);
    self.game.input.onUp.add(self.on_up, this);
    
    self.gameInfo.start_date = new Date().getTime();
}
run.prototype.endcollision = function(body, bodyB, shapeA, shapeB, equation){
    self.hero.body.fixedRotation = true;
}
run.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body.sprite.key.indexOf('watter') !== -1){
        console.log('watter gloups');
        self.gameInfo.state = "died";
        self.gameInfo.motion_state = "watter";
        self.hero.play('watter');
        self.gameInfo.speed = 0;
    }
    if(body.sprite.key.indexOf('picots') !== -1){
        console.log('picots Aïe !');
        self.gameInfo.state = "died";
        self.gameInfo.motion_state = "watter";
        self.hero.play('picots');
        self.gameInfo.speed = 0;
    }
    if(self.gameInfo.state !== "died"){
        if(self.gameInfo.state !== "sliding"){
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
        if(self.gameInfo.state !== "sliding"){
            setTimeout(function(){
               self.emitter.on = false;
            }, 100);
        }
    }
}
run.prototype.head_collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body.sprite.key != "okaoka"){
        self.gameInfo.state = "died";
        self.gameInfo.motion_state = "wall";
        self.hero.play('wall');
        self.gameInfo.speed = 0;
    }
}
run.prototype.head_endcollision = function(body, bodyB, shapeA, shapeB, equation){
    console.log(body);
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
run.prototype.create_ground_level = function(){
    var prevPosX = 0;
    var cur_level = self._current_level;
    
    var landCG = self.game.physics.p2.createCollisionGroup();
    
    self.levels[cur_level] = self.decors.create(
        self.gameInfo.tilemap.size.width * (cur_level) - 2500, 
        -1500, 
        'map_'+self._current_decors
    );
    //(self.gameInfo.tilemap.size.height - self.gameInfo.tilemap.def) * cur_level
    self.game.physics.p2.enable([ self.levels[cur_level] ], self._debug);
    self.levels[cur_level].body.clearShapes();
	self.levels[cur_level].body.loadPolygon('floor_map', 'map_2500_map_'+self._current_decors);
    self.levels[cur_level].body.mass = 1000;
    self.levels[cur_level].body.kinematic = true;
    
    /* ------- ADD WATTER WITH MAP --------- */
    self.levels_watter[cur_level] = self.decors.create(
        self.gameInfo.tilemap.size.width * (cur_level) - 2500, 
        -1500, 
        'watter_'+self._current_decors
    );
    self.game.physics.p2.enable([ self.levels_watter[cur_level] ], self._debug);
    self.levels_watter[cur_level].body.clearShapes();
	self.levels_watter[cur_level].body.loadPolygon('watter_map', 'map_2500_map_'+self._current_decors);
    self.levels_watter[cur_level].body.kinematic = true;
    
    /* ------- ADD PICOTS WITH MAP --------- */
    self.levels_picots[cur_level] = self.decors.create(
        self.gameInfo.tilemap.size.width * (cur_level) - 2500, 
        -1500, 
        'picots_'+self._current_decors
    );
    self.game.physics.p2.enable([ self.levels_picots[cur_level] ], self._debug);
    self.levels_picots[cur_level].body.clearShapes();
	self.levels_picots[cur_level].body.loadPolygon('picots_map', 'map_2500_map_'+self._current_decors);
    self.levels_picots[cur_level].body.kinematic = true;
    
    //self.decors.add(self.levels_enemy[self.levels_enemy.length-1]);
    
    /* ------- AD ENEMY POLYGON ONLY --------- */
    //self.levels[cur_level].body.loadPolygon('enemies_map', 'map_2500_map_'+self._current_decors);
    //self.levels[cur_level].body.mass = 1000;
    //self.levels[cur_level].body.kinematic = true;
    
    //self.levels[cur_level].body.setCollisionGroup(landCG); 
    //self.levels[cur_level].body.collides(self.hero);
    
    self._current_level++;
    self._current_decors++;
    if(self._current_decors == 13){
        self._current_decors = 1;
    }
    self.gameInfo.last_created_ground = new Date().getTime();
}
run.prototype.on_down = function(evt){
    console.log("x : ", self.game.camera.position.x + evt.pageX);
    console.log("y : ", self.game.camera.position.y + evt.pageY);
    if(self.gameInfo.state === "died"){
        return false;
    }
    self.gameInfo.state="jumping";
    self.emitter.on = false;
    if(!self.jumping_infos.is_jumping){
        self.hero.body.velocity.y = -700;
        TweenMax.to(self.jump_tween, .5, {y:20, onUpdate:function(){
            self.hero.body.velocity.y = self.hero.body.velocity.y - 15;
        }});
        //self.hero.body.velocity.x = self.hero.body.velocity.x+250;
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
        TweenLite.killTweensOf(self.jump_tween);
        var dist = self.jumping_infos.y - evt.pageY;
        self._is_down = false;
        console.log("dist ::: ", dist);
        if(dist > 100){
            //self.game.physics.p2.gravity.y = -1000;
        }else if(dist < -100){
            self.gameInfo.state="sliding";
            self.hero.play('slide');
            self.hero.body.velocity.y = self.hero.body.velocity.y + 700;
            setTimeout(function(){
                self.gameInfo.state = "";
                self.hero.play('run');
                self.emitter.on = false;
            },3000);
            //self.game.physics.p2.gravity.y = 1000;
        }
    }
}
run.prototype.render = function(){
    if(self.game.paused){
        return false;
    }
    /*if(self.gameInfo.speed === 0){
        return false;
    }*/
    if(self._is_down){
    }
    if(self.gameInfo.state !== "died" && self.gameInfo.state !== "sliding"){
        if(self.jumping_infos.is_jumping){
            if(self.hero.body.velocity.y > 0){
                self.hero.play('after_jump');
            }else{
                if(self.hero.body.velocity.y < -500){
                    self.hero.play('jump');
                }else{
                    self.hero.play('small_jump');
                }
            }
        }
    }
    
    if(self.game.camera.position.x > self.levels[self.levels.length-1].position.x - 500){
        self.create_ground_level();
    }
    var level_to_check = self._current_level - 1;
    if(typeof self.levels[level_to_check] === "undefined"){
        delete self.levels[level_to_check];
        self.levels.splice(level_to_check, 1);
    }else{
        if(self.levels[level_to_check].position.x < self.game.camera.position.x - 3000){
            self.levels[level_to_check].body.sprite.destroy();
            //self.levels[0].destroy();
            delete self.levels[level_to_check];
            self.levels.splice(level_to_check, 1);
            
            self.levels_watter[level_to_check].body.sprite.destroy();
            //self.levels[0].destroy();
            delete self.levels_watter[level_to_check];
            self.levels_watter.splice(level_to_check, 1);
            
            self.levels_picots[level_to_check].body.sprite.destroy();
            //self.levels[0].destroy();
            delete self.levels_picots[level_to_check];
            self.levels_picots.splice(level_to_check, 1);
        }
    }
    
    self.hero.body.velocity.x = self.gameInfo.speed;
    
    self.mountain_3.tilePosition.x -= self.hero.body.velocity.x / 200;
    self.mountain_2.tilePosition.x -= self.hero.body.velocity.x / 190;
    self.mountain_1.tilePosition.x -= self.hero.body.velocity.x / 180;
    /* REPLACE EMITTER COLLIDER */
    if(typeof self.emitter !== "undefined"){
        self.emitter.emitX = self.hero.x;
        self.emitter.emitY = self.hero.y + 40;
    }
    
    self.game.world.wrap(self.hero, 64);
    
    self.mountain_3.tilePosition.y = Math.abs(self.hero.position.y) / 200;
    self.mountain_2.tilePosition.y = Math.abs(self.hero.position.y) / 30;
    self.mountain_1.tilePosition.y = Math.abs(self.hero.position.y) / 15;
    
    /* SCALE THE WORLD */
    /*var ps = -(self.hero.body.velocity.y) / 2000;
    if(ps < -0.2){
        ps = -0.2;
    }
    if(ps > 0.6){
        ps = 0.6;
    }
    var s = {v:self.scale, b:self.scale};
    TweenMax.to(s, .5, {v:(1-ps), b:(1-ps), onUpdate:function(){
        self.scale = s.v;
    }});
    
    self.mountain_3.scale.x = self.mountain_3.scale.y = s.b;
    self.mountain_2.scale.x = self.mountain_2.scale.y = s.b;
    self.mountain_1.scale.x = self.mountain_1.scale.y = s.b;*/
    /*
    self.mountain_3.tileScale.y = s.b;
    self.mountain_2.tileScale.x = s.b;
    self.mountain_2.tileScale.y = s.b;
    self.mountain_1.tileScale.x = s.b;
    self.mountain_1.tileScale.y = s.b;
    */
    //self.mountain_3.world.scale.setTo(self.scale + 1, self.scale + 1);
    //self.mountain_2.world.scale.setTo(self.scale + 1, self.scale + 1);
    //self.mountain_1.world.scale.setTo(self.scale + 1, self.scale + 1);
    self.game.world.scale.setTo(self.scale, self.scale);
    
    /* REPLACE CAMERA ON HERO */
    var np = {
        x:self.hero.position.x * self.scale - 300,
        y:self.hero.position.y * self.scale - window.innerHeight/2
    }
    self.game.camera.setPosition(np.x, np.y);
}
run.prototype.update = function(){
    
}
run.prototype.create_interface = function(){
    this.init();
}
run.prototype.pause = function(){
    self.game.paused = true;
}
run.prototype.play = function(){
    self.game.paused = false;
}
run.prototype.destroy = function(callBack){
    delete this._current_level;
    delete this._current_ceiling_level;
    delete this._total_levels;
    delete this.levels;
    delete this.levels_enemy;
    delete this.levels_watter;
    delete this.levels_picots;
    delete this.levels_ceiling;
    delete this.levels_ceiling_enemy;
    delete this.jumping;
    delete this.downPos;
    delete this.gameInfo;
    delete this.lifes;
    self.game.destroy();
    callBack();
}