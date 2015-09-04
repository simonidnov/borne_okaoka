var self = null;
function run(){
    self = this;
    self.gameInfo = {
        "width":window.innerWidth,
        "height":window.innerHeight
    }
}
run.prototype.init = function(){
    TweenMax.set($('#phaser-run'), {opacity:0});
    $('#phaser-run').css({width:self.gameInfo.width+"px", height:self.gameInfo.height+"px"});
    self.game = new Phaser.Game(self.gameInfo.width, self.gameInfo.height, Phaser.CANVAS, 'phaser-run', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
run.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.spritesheet('dude', 'pages/runperf/images/dude.png', 32, 48);
    self.game.load.image('background', 'pages/runperf/images/background_1-01.png');
}
run.prototype.create = function(){
    TweenMax.set($('#phaser-run'), {opacity:1});
    self.game.time.events.loop(Phaser.Timer.SECOND * 2, self.check_perf, this);
    
    self.game.world.setBounds(0,0,8000,window.innerHeight);
    
    self.game.physics.startSystem(Phaser.Physics.ARCADE);

    self.game.time.desiredFps = 30;

    self.bg = self.game.add.tileSprite(0, 0, self.gameInfo.width, self.gameInfo.height, 'background');
    self.bg.fixedToCamera = true;
    
    self.game.physics.arcade.gravity.y = 500;

    self.player = self.game.add.sprite(32, 32, 'dude');
    self.game.physics.enable(self.player, Phaser.Physics.ARCADE);

    self.player.body.bounce.y = 0.2;
    self.player.body.collideWorldBounds = true;
    self.player.body.setSize(20, 32, 5, 16);

    self.player.animations.add('left', [0, 1, 2, 3], 10, true);
    self.player.animations.add('turn', [4], 20, true);
    self.player.animations.add('right', [5, 6, 7, 8], 10, true);

    self.cursors = self.game.input.keyboard.createCursorKeys();
    self.jumpButton = self.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    self.facing = 'left';
    self.cursors = self.game.input.keyboard.createCursorKeys();

    self.jumpTimer = 0;
    self.jumpButton = self.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    //self.game.camera.follow(self.player);
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
run.prototype.on_down = function(evt){
    self.player.animations.play('left');
    evt.preventDefault();
    console.log('down');
}
run.prototype.on_up = function(evt){
    console.log('up');
}
run.prototype.render = function(){
    self.game.debug.body(self.player);
}
run.prototype.check_perf = function(){
    console.log("current fps :: ", self.game.time.fps);
    console.log('suggestedFps : ', self.game.time.suggestedFps);
}
run.prototype.update = function(){   
    self.player.body.velocity.x = 0;
    
    self.player.body.velocity.x = 5;
    
    if (self.cursors.left.isDown)
    {
        self.player.body.velocity.x = -500;

        if (self.facing != 'left')
        {
            self.player.animations.play('left');
            self.facing = 'left';
        }
    }
    else if (self.cursors.right.isDown)
    {
        self.player.body.velocity.x = 500;

        if (self.facing != 'right')
        {
            self.player.animations.play('right');
            self.facing = 'right';
        }
    }
    else
    {
        if (self.facing != 'idle')
        {
            self.player.animations.stop();

            if (self.facing == 'left')
            {
                self.player.frame = 0;
            }
            else
            {
                self.player.frame = 5;
            }

            self.facing = 'idle';
        }
    }
    self.bg.tilePosition.x -= self.player.body.velocity.x;
    
    if (self.jumpButton.isDown && self.player.body.onFloor() && self.game.time.now > self.jumpTimer)
    {
        self.player.body.velocity.y = -350;
        self.jumpTimer = self.game.time.now + 450;
    }
    var np = {
        x:self.player.position.x - 300,
        y:self.player.position.y - self.gameInfo.height/2
    }
    self.game.camera.setPosition(np.x, np.y);
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
run.prototype.replay_game = function(){
    window.location.reload();
}
run.prototype.destroy_all_game = function(){
    if('ontouchstart' in window){
        $('#phaser-run').off('touchstart');
        $('#phaser-run').off('touchend');
    }else{
        $('#phaser-run').off('mousedown');
        $('#phaser-run').off('mouseup');
    }
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
    self.destroy_all_game();
    callBack();
}