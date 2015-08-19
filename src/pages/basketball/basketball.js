var self = null;
function basketball(){
    self = this;
}
basketball.prototype.init = function(){
    $('#phaser-basketball').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-basketball', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
basketball.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.image('ball', 'pages/basketball/assets/ball.png');
}
basketball.prototype.create = function(){
    self.game.stage.backgroundColor = colors.pink;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 0;
    self.game.physics.p2.gravity.y = 1000;
    
    self.ball = self.game.add.sprite(100, 200, 'ball');
    
    self.game.physics.p2.enable([ self.ball ], false);
    
    //self.hero.body.fixedRotation = true;
    self.ball.body.setCircle(45);
    
    self.ball.body.onBeginContact.add(self.collision, this);
    self.game.input.onDown.add(self.touchstart, this);
    self.game.input.onUp.add(self.touchend, this);
}
basketball.prototype.touchstart = function(evt){
    console.log(evt.pageX);
}
basketball.prototype.touchend = function(evt){
    console.log(evt.pageX);
}
basketball.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body){
        console.log(body.sprite.key);
    }
}
basketball.prototype.render = function(){
    
}
basketball.prototype.update = function(){
    
}
basketball.prototype.create_interface = function(){
    console.log('interface');
    this.init();
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
}
basketball.prototype.destroy = function(callBack){
    callBack();
}