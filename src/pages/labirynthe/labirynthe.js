var self = null;
function labirynthe(){
    this.ball;
    this.mouseBody;
    self = this;
}
labirynthe.prototype.init = function(){
    $('#phaser-labirynthe').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-labirynthe', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
labirynthe.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.image('ball', 'pages/labirynthe/assets/ball.png');
    
    this.load.atlas('arcade', 'pages/labirynthe/assets/arcade-joystick.png', 'pages/labirynthe/assets/arcade-joystick.json');
    this.load.image('bg', 'pages/labirynthe/assets/space1.png');
}
labirynthe.prototype.create = function(){
    self.game.stage.backgroundColor = colors.pink;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 0.5;
    self.game.physics.p2.friction = 500;
    self.game.physics.p2.gravity.y = 0;
    
    self.ball = self.game.add.sprite(100, 200, 'ball');
    
    self.game.physics.p2.enable([ self.ball ], false);
    
    self.mouseBody = new p2.Body();
    self.game.physics.p2.world.addBody(self.mouseBody);
    
    //self.hero.body.fixedRotation = true;
    self.ball.body.mass = 1000;
    self.ball.body.setCircle(50);
    
    //self.pad = this.game.plugins.add(Phaser.VirtualJoystick);
    //self.stick = self.pad.addStick(0, 0, 200, 'arcade');
    //self.stick.alignBottomCenter();
    
    self.game.input.onDown.add(self.click, this);
    self.game.input.onUp.add(self.release, this);
    self.game.input.addMoveCallback(self.move, this);
}
labirynthe.prototype.click = function(pointer) {
    var bodies = self.game.physics.p2.hitTest(pointer.position, [ self.ball.body ]);
    var physicsPos = [self.game.physics.p2.pxmi(pointer.position.x), self.game.physics.p2.pxmi(pointer.position.y)];
    if (bodies.length)
    {
        var clickedBody = bodies[0];
        var localPointInBody = [0, 0];
        clickedBody.toLocalFrame(localPointInBody, physicsPos);
        //mouseConstraint = this.game.physics.p2.createRevoluteConstraint(self.mouseBody, [0, 0], clickedBody, [self.game.physics.p2.mpxi(localPointInBody[0]), self.game.physics.p2.mpxi(localPointInBody[1]) ]);
        mouseConstraint = this.game.physics.p2.createRevoluteConstraint(self.mouseBody, [0, 0], clickedBody, [0, 0]);
    }
}
labirynthe.prototype.release = function() {
    self.game.physics.p2.removeConstraint(mouseConstraint);
}
labirynthe.prototype.move = function(pointer) {
    self.mouseBody.position[0] = self.game.physics.p2.pxmi(pointer.position.x);
    self.mouseBody.position[1] = self.game.physics.p2.pxmi(pointer.position.y);
}

labirynthe.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body){
        console.log(body.sprite.key);
    }
}
labirynthe.prototype.render = function(){
    
}
labirynthe.prototype.update = function(){
    
}
labirynthe.prototype.create_interface = function(){
    console.log('interface');
    this.init();
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
}
labirynthe.prototype.destroy = function(callBack){
    callBack();
}