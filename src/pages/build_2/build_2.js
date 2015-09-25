var self;
function build(){
    self = this;
    this._debug = false;
    this.gameInfo = {
        status : "play",
        pieces : 0
    }
    this.maps_array = [
        {key:'green_lt', color:'dgreen', mass:4, size:{w:2,h:3}},
        {key:'light_blue_bar', color:'lightblue', mass:4, size:{w:1,h:4}},
        {key:'orange_bar', color:'orange', mass:5, size:{w:4,h:1}},
        {key:'pink_square', color:'pink', mass:4, size:{w:2,h:2}},
        {key:'pink_sv', color:'pink', mass:4, size:{w:2,h:3}},
        {key:'purple_s', color:'purple', mass:4, size:{w:3,h:2}},
        {key:'purple_z', color:'purple', mass:4, size:{w:3,h:2}},
        {key:'red_l', color:'red', mass:4, size:{w:2,h:3}},
        {key:'sblue-lh', color:'sblue', mass:5, size:{w:3,h:2}},
        {key:'yellow_tl', color:'yellow', mass:4, size:{w:2,h:3}},
        {key:'dgreen_t', color:'dgreen', mass:4, size:{w:3,h:2}},
        {key:'sblue_dbl', color:'sblue', mass:2, size:{w:1,h:2}},
        {key:'yellow_rect', color:'yellow', mass:1, size:{w:1,h:1}}
    ];
    this.shapes = [];
    this.explosion = [];
    this.colors = _.clone(colors);
    delete this.colors.blue;
    delete this.colors.black;
    delete this.colors.green;
    this._current_color = 0;
    this.init();
}
build.prototype.init = function(){
    
}
build.prototype.get_color = function(){
    if(self._current_color >= _.keys(self.colors).length){
        self._current_color = 0;
    }
    var colorer = self.colors[_.keys(self.colors)[self._current_color]];
    return colorer;
}
build.prototype.create_interface = function(){
    $('#build_canvas').attr({width:window.innerWidth, height:window.innerHeight});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'build_canvas', { preload: self.preload, create: self.create, render: self.render });
}
build.prototype.preload = function(){
    self.game.load.image('floor', 'pages/build_2/images/assets/floor.png');
    self.game.load.image('square_50', 'pages/build_2/images/assets/square_50.png');
    self.game.load.image('circle_50', 'pages/build_2/images/assets/circle_50.png');
    self.game.load.image('bar', 'pages/build_2/images/assets/bar.png');
    self.game.load.image('square', 'pages/build_2/images/assets/square.png');
    
    self.game.load.image('green_lt', 'pages/build_2/images/assets/green_lt.png');
    self.game.load.image('light_blue_bar', 'pages/build_2/images/assets/light_blue_bar.png');
    self.game.load.image('orange_bar', 'pages/build_2/images/assets/orange_bar.png');
    self.game.load.image('pink_square', 'pages/build_2/images/assets/pink_square.png');
    self.game.load.image('pink_sv', 'pages/build_2/images/assets/pink_sv.png');
    self.game.load.image('purple_s', 'pages/build_2/images/assets/purple_s.png');
    self.game.load.image('purple_z', 'pages/build_2/images/assets/purple_z.png');
    self.game.load.image('red_l', 'pages/build_2/images/assets/red_l.png');
    self.game.load.image('sblue-lh', 'pages/build_2/images/assets/sblue-lh.png');
    self.game.load.image('yellow_tl', 'pages/build_2/images/assets/yellow_tl.png');
    self.game.load.image('dgreen_t', 'pages/build_2/images/assets/dgreen_t.png');
    self.game.load.image('dgreen_rt', 'pages/build_2/images/assets/dgreen_rt.png');
    self.game.load.image('yellow_rect', 'pages/build_2/images/assets/yellow_rect.png');
    self.game.load.image('sblue_dbl', 'pages/build_2/images/assets/sblue_dbl.png');
    
    self.game.load.image('square_yellow', 'pages/build_2/images/assets/square_yellow.png');
    self.game.load.image('square_orange', 'pages/build_2/images/assets/square_orange.png');
    self.game.load.image('square_purple', 'pages/build_2/images/assets/square_purple.png');
    self.game.load.image('square_sblue', 'pages/build_2/images/assets/square_sblue.png');
    self.game.load.image('square_lightblue', 'pages/build_2/images/assets/square_lightblue.png');
    self.game.load.image('square_dgreen', 'pages/build_2/images/assets/square_dgreen.png');
    self.game.load.image('square_red', 'pages/build_2/images/assets/square_red.png');
    self.game.load.image('square_pink', 'pages/build_2/images/assets/square_pink.png');
    
    self.game.load.physics('maps', 'pages/build_2/images/assets/maps.json');
}
build.prototype.create = function(){
    //self.game.time.events.loop(Phaser.Timer.SECOND / 20, self.moveBody, this);
    //self.game.time.events.loop(Phaser.Timer.SECOND * 2, self.clean_game, this);
    self.game.world.setBounds(0, -80000, window.innerWidth, 80000);
    
    self.game.camera.setSize(window.innerWidth, window.innerHeight);
    //self.game.world.setBounds(-4000, -2500, 800000, 2500);
    self.game.stage.scaleMode = Phaser.scaleModes.DEFAULT;
    
    self.game.stage.backgroundColor = colors.green;
    
    //self.game.world.scale.x = self.game.world.scale.y = .6;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 0;
    self.game.physics.p2.friction = 10000;
    //self.game.physics.p2.world.defaultContactMaterial.friction = 0.3;
    self.game.physics.p2.gravity.y = 100;
    
    self.decors = self.game.add.group();
    self.createFloor();
    self.construction = self.game.add.group();
    for(var i=0; i<self.maps_array.length; i++){
        self.createShape(i, self.maps_array[i].key);
    }
}
build.prototype.createFloor = function(){
    self.floor = self.decors.create(0, 0, 'floor');
    self.game.physics.p2.enable(self.floor, self._debug);
    self.floor.body.sensor = false;
    self.floor.body.static = true;
    self.floor.body.mass = 10000;
    self.floor.body.x = window.innerWidth/2;
    self.floor.body.y = (self.game.world.getBounds().height) - 100;
    self.floor.body.onBeginContact.add(self.collision_floor, this);
    
    self.base = self.decors.create(0, 0, 'circle_50');
    self.game.physics.p2.enable(self.base, self._debug);
    self.base.body.clearShapes();
    self.base.body.setCircle(25);
    self.base.body.static = true;
    self.base.body.mass = 10000;
    self.base.body.x = window.innerWidth/2;
    self.base.body.y = (self.floor.body.y) - (self.floor.getBounds().height/2)-25;
    
    self.bar = self.decors.create(0, 0, 'bar');
    self.game.physics.p2.enable(self.bar, self._debug);
    self.bar.body.mass = 10000;
    self.bar.body.x = window.innerWidth/2;
    self.bar.body.y = (self.base.body.y) - (self.bar.getBounds().height);
    
    self.game.camera.follow(self.base);
    var constraint = self.game.physics.p2.createLockConstraint(self.bar, self.base, [0, -50], 0);

    //self.game.physics.p2.createGearConstraint(self.base, self.bar, 0, 2);
    //self.game.physics.p2.createRevoluteConstraint(
    //    self.bar, [self.bar.getBounds().width/2, 0], self.base, [25, 0], 20000
    //);
}
build.prototype.global_scale = function(scale){
    self.game.world.scale.x = self.game.world.scale.y = scale;
}
build.prototype.collision_floor = function(body, bodyB, shapeA, shapeB, equation){
    console.log('lose');
    /*if(body.sprite.key === "bar"){
        
    }else{
    }*/
    if(self.gameInfo.status !== "lose"){
        if(body.sprite.key.indexOf('square_') === -1){
            self.destroy_element(body.sprite, 0);
            self.gameInfo.status = "lose";
            self.last_brick = self.bar;
            for(var i=0; i<self.shapes.length; i++){
                self.destroy_element(self.shapes[i], i);
            }
        }
    }
    //body.sprite.body.clearShapes();
    //body.sprite.body.destroy();
    //body.sprite.body.destroy();
    //body.clearShapes();
}
var last_destroyed = null;
build.prototype.destroy_element = function(body, delay){
    last_destroyed = body;
    self.game.physics.p2.gravity.y = 1000;
    var element = self.maps_array[body.map_id];
    setTimeout(function(){
        for(var i=0; i<element.mass; i++){
            var current_shape = self.explosion.length;
            self.explosion[current_shape] = self.construction.create(body.x, body.y, 'square_'+element.color);
            self.game.physics.p2.enable(self.explosion[current_shape], self._debug);
            self.explosion[current_shape].body.mass = 400;
            self.explosion[current_shape].body.velocity.y = -400;
        }
        body.kill();
    }, (delay*100));
}
build.prototype.createShape = function(pos, key){
    //var sh_random = Math.ceil(Math.random()*self.maps_array.length-1);
    var sh_random = pos;
    self.currentShape = self.maps_array[sh_random].key;
    var current_shape = self.shapes.length;
    var sw = 4-self.maps_array[sh_random].size.w;
    var sh = self.maps_array[sh_random].size.h;
    var start_x = window.innerWidth/2 - ((self.maps_array.length/2)*100);
    self.shapes[current_shape] = self.construction.create(start_x+(100*pos)+(sw*10), window.innerHeight - (sh*25), self.maps_array[sh_random].key);
    self.shapes[current_shape].scale.x = self.shapes[current_shape].scale.y = .5;
    self.shapes[current_shape].inputEnabled = true;
    self.shapes[current_shape].input.enableDrag(false, true);
    self.shapes[current_shape].events.onDragStart.add(self.startDrag, this);
    self.shapes[current_shape].events.onDragStop.add(self.stopDrag, this); 
    self.shapes[current_shape].fixedToCamera = true;
    self.shapes[current_shape].map_id = sh_random;
    self.shapes[current_shape].pos = pos;
    //self.shapes[current_shape].position.x = (window.innerWidth/2) - (self.shapes[current_shape].getBounds().width/2);
}
build.prototype.startDrag = function(sprite, pointer){
    sprite.scale.x = sprite.scale.y = 1;
}
build.prototype.stopDrag = function(sprite, pointer){
    sprite.fixedToCamera = false;
    sprite.inputEnabled = false;
    self.game.physics.p2.enable(sprite, self._debug);
    self.last_brick = sprite;
    
    sprite.body.mass = self.maps_array[sprite.map_id].mass * 500;
    //sprite.body.mass = 1000;
    
    sprite.body.clearShapes();
    sprite.body.loadPolygon('maps', self.maps_array[sprite.map_id].key);
    sprite.body.fixedRotation = false;
    //sprite.body.setRectangle(sprite.getBounds().width, sprite.getBounds().height);
    sprite.body.x = sprite.position.x + (sprite.getBounds().width/2);
    sprite.body.y = sprite.position.y + (sprite.getBounds().height/2);
    self.createShape(sprite.pos);
    
    self.gameInfo.pieces++;
}
build.prototype.render = function(){
    //self.game.camera.setPosition(0,0);
    if(typeof self.last_brick !== "undefined"){
        /*var np = {
            x:self.last_brick.position.x,
            y:self.last_brick.position.y - window.innerHeight/2
        }*/
        /*var current_cam_pos = self.game.camera.position;
        TweenMax.to(current_cam_pos, .5, {
            y:np.y,
            x:np.x,
            onUpdate : function(){
                self.game.camera.setPosition(0, current_cam_pos.y);
            }
        });*/
        //self.game.world.position.x = ((window.innerWidth*scale)/2);        
    }
    self.scale = (window.innerHeight / (self.construction.getBounds().height+300)).toFixed(2);
    if(self.scale>1){
        self.scale = 1;
    }
    /*var sc = {
        x:self.scale,
        y:self.scale
    }
    var current_cam_scale = self.game.world.scale;
    TweenMax.to(current_cam_scale, .5, {
        y:sc.y,
        x:sc.x,
        onUpdate : function(){
            self.game.world.scale.setTo(current_cam_scale.x, current_cam_scale.y);
        }
    });*/
}
build.prototype.pause = function(){
}
build.prototype.play = function(){
}
build.prototype.destroy = function(callBack){
    callBack();
}