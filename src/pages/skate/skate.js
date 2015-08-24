var self = null;
function skate(){
    this._debug = false;
    this._current_level = 0;
    this._current_ceiling_level = 1;
    this._total_levels = 1;
    this.levels = [];
    this._is_down = false;
    this.levels_enemy = [];
    this.levels_ceiling = [];
    this.levels_ceiling_enemy = [];
    this.jumping = 0;
    this.jumping_infos = {x:0, y:0, angle:0};
    this.gameInfo = {start_date:0, distance:0, tilemap:{size:{width:8000, height:8000}, def:6515}};
    this.lifes = {count:5, date:0};
    this.scale = 1;
    this.last_collision = new Date().getTime();
    self = this;
}
skate.prototype.init = function(){
    $('#phaser-runner').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-runner', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
skate.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.image('background', 'pages/skate/maps/end_ground.png');
    self.game.load.image('mountain_background', 'pages/skate/maps/mountain_background.png');
    self.game.load.image('mountain_foreground', 'pages/skate/maps/mountain_foreground.png');
    self.game.load.image('decors_1', 'pages/skate/maps/decors_1.png');
    
    self.game.load.image('hero', 'pages/skate/maps/hero.png');
    self.game.load.image('puff', 'pages/skate/maps/puff.png');
    self.game.load.image('hero_head', 'pages/skate/maps/hero_head.png');
    self.game.load.image('board', 'pages/skate/maps/board.png');
    self.game.load.image('btn_left', 'pages/skate/assets/rotate_left.png');
    self.game.load.image('btn_right', 'pages/skate/assets/rotate_right.png');
    self.game.load.spritesheet('runner', 'pages/skate/assets/motions/runner_sprite.png', 100, 100);
    
    self.game.load.image('8000_test', 'pages/skate/maps/8000_test.png');
    self.game.load.physics('groundDatas', 'pages/skate/maps/big_map.json');
}
skate.prototype.create = function(){
    self.game.world.setBounds(-4000, -4000, 800000, 800000);
    //self.game.world.setBounds(-1000, -1000, 2000, 2000);
    //self.game.stage.scaleMode = Phaser.scaleModes.DEFAULT; 
    
    self.game.stage.backgroundColor = colors.pink;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 0;
    self.game.physics.p2.friction = 0;
    //game.physics.p2.world.defaultContactMaterial.friction = 0.3;
    self.game.physics.p2.gravity.y = 1500;
    
    self.hero = self.game.add.sprite(-3800, -3800, 'hero');
    self.hero_head = self.game.add.sprite(-3800, -3800, 'hero_head');
    self.decors = self.game.add.group();
    
    /* -------- SAMPLE SPRITE ---------- */
    /*self.hero = self.game.add.sprite(100, 200, 'runner');
    self.hero.scale.set(1);
    self.hero.smoothed = true;
    self.hero.animations.add('run', [0,1,2,3,4,5], 10, true);
    self.hero.play('run');*/
    
    self.game.physics.p2.enable([ self.hero, self.hero_head ], self._debug);
    
        //ADD CONSTRAINTS
        //PrismaticConstraint(world, bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce)
    var constraint = self.game.physics.p2.createPrismaticConstraint(self.hero, self.hero_head, true,[0,-75],[0,0],[0,1]);
        //SET LIMITS
        constraint.lowerLimitEnabled = constraint.upperLimitEnabled = true;
        constraint.upperLimit = 0;
        constraint.lowerLimit = 0;
    
    
    self.hero.body.clearShapes();
	self.hero.body.loadPolygon('groundDatas', 'hero');
    
    self.hero_head.body.clearShapes();
	self.hero_head.body.loadPolygon('groundDatas', 'hero_head');
    
    
    self.puff();
    
    /* TRY TO MAKE REAL SKATE */
    //self.create_skate();
    
    //self.game.camera.follow(self.hero);
    //self.game.camera.scale.set(self.scale, self.scale)
    //self.game.camera.focusOnXY(self.hero.position.x * self.scale, self.hero.position.y * self.scale);
    /* replace element hero on left */
    self.game.camera.setSize(900,window.innerHeight);
    /* ------- CREATE MINI CAM ---------- */
    /*self.miniCam = self.game.createCamera(600, 32, 200, 200);
    self.miniCam.follow(self.hero, Phaser.Camera.STYLE_LOCKON);
    self.miniCam.setBounds(0, 0, self.game.world.width, self.game.world.height);
    self.miniCam.showBorder = true;
    self.miniCam.scale.setTo(0.5, 0.5);*/
    
    /* ------ SET HERO PROPERTIES ------ */
    self.hero.body.mass = 1000;
    //self.hero.body.fixedRotation = true;
    //self.hero.body.setCircle(45);
    self.hero.body.sensor = true;
    self.hero_head.body.sensor = true;
    self.hero.body.onBeginContact.add(self.collision, this);
    self.hero.body.onEndContact.add(self.endcollision, this);
    
    self.hero_head.body.onBeginContact.add(self.head_collision, this);
    self.hero_head.body.onEndContact.add(self.head_endcollision, this);
    
    self.create_ground_level();
    //self.create_ceiling_level();
    
    
    self.game.input.onDown.add(self.jump, this);
    self.game.input.onUp.add(self.upsidedown, this);
    
    self.gameInfo.start_date = new Date().getTime();
    
    //self.left_button = self.game.add.sprite(window.innerWidth/2 - 200, window.innerHeight - 200, 'btn_left');
    //self.right_button = self.game.add.sprite(window.innerWidth/2 - 200, window.innerHeight - 200, 'btn_right');
    
    //self.left_button.fixedToCamera = true;
    //self.right_button.fixedToCamera = true;
}
skate.prototype.head_endcollision = function(body, bodyB, shapeA, shapeB, equation){
    
}
skate.prototype.head_collision = function(body, bodyB, shapeA, shapeB, equation){
    self.hero.body.velocity.x = 0;
    self.hero.body.velocity.y = 0;
    self.hero.body.rotation = 0;
}
skate.prototype.endcollision = function(body, bodyB, shapeA, shapeB, equation){
    //self.jumping_infos.is_jumping = false;
    self.hero.body.fixedRotation = true;
    self.hero_head.body.fixedRotation = true;
}
skate.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    self.last_collision = new Date().getTime();
    if(self.jumping_infos.rotate && self.jumping_infos.is_jumping){
        self.hero.body.velocity.x = self.hero.body.velocity.x + (self.jumping_infos.rotate*100);
        self.jumping_infos.is_jumping = false;
    }else{
        //self.puff();
    }
    if(body){
        //if(body.sprite.key.indexOf('8000_test') !== -1){
            self.hero.body.fixedRotation = false;
            self.hero_head.body.fixedRotation = false;
        //}
    }
    self.emitter.on = true;
    setTimeout(function(){
        self.emitter.on = false;
    }, 500);
}
skate.prototype.puff = function(){
    self.emitter = self.game.add.emitter(self.game.world.centerX, self.game.world.centerY, 400);

    self.emitter.makeParticles( [ 'puff' ] );
    self.emitter.color = ["#FFF"];
    self.emitter.gravity = 1000;
    self.emitter.width = 150;
    self.emitter.height = 20;
    self.emitter.setXSpeed(500, 800);
    self.emitter.setYSpeed(-50, -100);
    //self.emitter.setAlpha(1, 1, 3000);
    self.emitter.setScale(1, 0, 1, 0, 500);
    self.emitter.on = false;
    self.emitter.start(false, 500, 0);
    
}
skate.prototype.create_skate = function(){
    self.carBody = self.game.add.sprite(-3800, -3800);; //CARBODY
    self.wheel_front = self.game.add.sprite(-3800, -3800); //FRONT WHEEL
    self.wheel_back = self.game.add.sprite(-3800, -3800);; //BACK WHEEL 
    //CG_car = self.game.physics.p2.createCollisionGroup(); //CAR GROUP
    
    self.game.physics.p2.updateBoundsCollisionGroup(); //UPDATE COLLISION BOUND FOR GROUPS
    
    self.game.physics.p2.enable([self.wheel_front, self.wheel_back, self.carBody]); //ENABLE PHYSICS FOR THESE OBJECTS
    
    
        //DEFINE CAR BODY
        self.carBody.body.setRectangle(150,20);
        self.carBody.body.debug = true;
        self.carBody.body.mass = 1000;
        //carBody.body.setCollisionGroup(CG_car);
    
        //DEFINE FRON WHEEL
        self.wheel_front.body.setCircle(20);
        self.wheel_front.body.debug = true;
        self.wheel_front.body.mass = 1000;
        //wheel_front.body.setCollisionGroup(CG_car);
    
        //DEFINE BACK WHEEL
        self.wheel_back.body.setCircle(20);
        self.wheel_back.body.debug = true;
        self.wheel_back.body.mass = 1000;
        //wheel_back.body.setCollisionGroup(CG_car);
    
        //ADD SPRINGS
        //Spring(world, bodyA, bodyB, restLength, stiffness, damping, worldA, worldB, localA, localB)
    var spring = self.game.physics.p2.createSpring(self.carBody,self.wheel_front, 70, 150, 50,null,null,[50,0],null);
    var spring_1 = self.game.physics.p2.createSpring(self.carBody,self.wheel_back, 70, 150,50,null,null,[-50,0],null);
        
        //ADD CONSTRAINTS
        //PrismaticConstraint(world, bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce)
    var constraint = self.game.physics.p2.createPrismaticConstraint(self.carBody,self.wheel_front, true,[50,0],[0,0],[0,1]);
        //SET LIMITS
        constraint.lowerLimitEnabled=constraint.upperLimitEnabled = true;
        constraint.upperLimit = 0;
        constraint.lowerLimit = 0;    
    
    var constraint_1 = self.game.physics.p2.createPrismaticConstraint(self.carBody,self.wheel_back, true,[-50,0],[0,0],[0,1]);
        //SET LIMITS
        constraint_1.lowerLimitEnabled=constraint_1.upperLimitEnabled = true;
        constraint_1.upperLimit = 0;
        constraint_1.lowerLimit = 0;
}
skate.prototype.create_ground_level = function(){
    var prevPosX = 0;
    var cur_level = self._current_level;
    //self.levels[cur_level] = self.game.add.sprite(
    self.levels[cur_level] = self.decors.create(
        self.gameInfo.tilemap.size.width * cur_level, 
        (self.gameInfo.tilemap.size.height - self.gameInfo.tilemap.def) * cur_level, 
        'decors_1'
    );
    self.game.physics.p2.enable([ self.levels[cur_level] ], self._debug);
    self.levels[cur_level].body.clearShapes();
	self.levels[cur_level].body.loadPolygon('groundDatas', 'decors_1_collider');
    self.levels[cur_level].body.mass = 1000;
    self.levels[cur_level].body.kinematic = true;
    //self.levels[cur_level].width = self.game.physics.p2.mpx(self.levels[cur_level].body.data.aabb.upperBound[0] - self.levels[cur_level].body.data.aabb.lowerBound[0]);
    //self.levels[cur_level].height = self.game.physics.p2.mpx(self.levels[cur_level].body.data.aabb.upperBound[1] - self.levels[cur_level].body.data.aabb.lowerBound[1]);
    
    //self.decors.add(self.levels[cur_level]);
    
    self._current_level++;
}
skate.prototype.jump = function(evt){
    if(!self.jumping_infos.is_jumping){
        self.hero.body.velocity.y = self.hero.body.velocity.y-550;
        self.hero.body.velocity.x = self.hero.body.velocity.x+250;
    }
    self.jumping_infos = {is_jumping:true, x:evt.pageX, y:evt.pageY, angle:self.hero.body.angle, rotation:self.hero.body.rotation, rotate:0};
    self._is_down = true;
    
}
skate.prototype.upsidedown = function(evt){
    var dist = self.jumping_infos.y - evt.pageY;
    self._is_down = false;
    if(dist > 100){
        self.game.physics.p2.gravity.y = -1000;
    }else if(dist < -100){
        self.game.physics.p2.gravity.y = 1000;
    }
}
skate.prototype.render = function(){
    //render state event
    if(self._is_down){
        self.hero.body.rotation -= 0.1;
        self.jumping_infos.rotate += 0.1;
        self.hero.rotation = self.hero.body.rotation;
    }
    if(self.game.camera.position.x >= ((4000 * self.scale) * self._current_level)){
        self.create_ground_level();
    }
    if(self._current_level > 0){
        if(self.levels[self._current_level-1].position.x <= self.game.camera.position.x - (4000 * self.scale)){
            //console.log(self.levels);
            self.levels[self._current_level-1].destroy();
            //self.levels.splice(0,1);
            //console.log(self.levels);
        }
    }
    
    var px = self.hero.body.velocity.x;
    var py = self.hero.body.velocity.y;

    px *= -1;
    py *= -1;

    //self.emitter.minParticleSpeed.set(px, py);
    //self.emitter.maxParticleSpeed.set(px, py);

    self.emitter.emitX = self.hero.x - 50;
    self.emitter.emitY = self.hero.y + 40;

    // emitter.forEachExists(game.world.wrap, game.world);
    self.game.world.wrap(self.hero, 64);
    
    var ps = self.hero.body.velocity.y / 1000;
    if(ps < -0.2){
        ps = -0.2;
    }
    if(ps > 0.6){
        ps = 0.6;
    }
    var s = {v:self.scale};
    
    TweenMax.to(s, .5, {v:(1-ps), onUpdate:function(){
        self.scale = s.v;
    }});
    
    self.game.world.scale.setTo(self.scale, self.scale);
    var np = {
        x:self.hero.position.x * self.scale - 300,
        y:self.hero.position.y * self.scale - 300
    }
    self.game.camera.setPosition(np.x, np.y);
}
skate.prototype.update = function(){
    
}
skate.prototype.create_interface = function(){
    this.init();
}
skate.prototype.pause = function(){
    self.game.paused = true;
}
skate.prototype.play = function(){
    self.game.paused = false;
}
skate.prototype.destroy = function(callBack){
    delete this._current_level;
    delete this._current_ceiling_level;
    delete this._total_levels;
    delete this.levels;
    delete this.levels_enemy;
    delete this.levels_ceiling;
    delete this.levels_ceiling_enemy;
    delete this.jumping;
    delete this.downPos;
    delete this.gameInfo;
    delete this.lifes;
    self.game.destroy();
    callBack();
}