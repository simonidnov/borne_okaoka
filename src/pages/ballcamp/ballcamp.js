var self = null;
function ballcamp(){
    this.ball;
    this.mouseBody;
    self = this;
}
ballcamp.prototype.init = function(){
    $('#phaser-ballcamp').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-ballcamp', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
ballcamp.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.image('ball', 'pages/ballcamp/assets/ball.png');
}
ballcamp.prototype.create = function(){
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
    
    self.game.input.onDown.add(self.click, this);
    self.game.input.onUp.add(self.release, this);
    self.game.input.addMoveCallback(self.move, this);
}
ballcamp.prototype.click = function(pointer) {
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
ballcamp.prototype.release = function() {
    self.game.physics.p2.removeConstraint(mouseConstraint);
}
ballcamp.prototype.move = function(pointer) {
    self.mouseBody.position[0] = self.game.physics.p2.pxmi(pointer.position.x);
    self.mouseBody.position[1] = self.game.physics.p2.pxmi(pointer.position.y);
}

ballcamp.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body){
        console.log(body.sprite.key);
    }
}
ballcamp.prototype.render = function(){
    
}
ballcamp.prototype.update = function(){
    
}
ballcamp.prototype.create_interface = function(){
    console.log('interface');
    this.init();
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
}
ballcamp.prototype.destroy = function(callBack){
    callBack();
}