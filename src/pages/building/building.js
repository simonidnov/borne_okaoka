var self = null;
function ballbreaker(){
    this._current_level = 1;
    this._current_ceiling_level = 1;
    this._total_levels = 9;
    this.levels = [];
    this.levels_enemy = [];
    this.levels_ceiling = [];
    this.levels_ceiling_enemy = [];
    this.jumping = 0;
    this.downPos = {x:0, y:0};
    this.gameInfo = {start_date:0, distance:0};
    this.lifes = {count:5, date:0};
    self = this;
}
ballbreaker.prototype.init = function(){
    $('#phaser-ballbreaker').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-ballbreaker', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
ballbreaker.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.image('ball', 'pages/ballbreaker/assets/ball.png');
}
ballbreaker.prototype.create = function(){
    self.game.stage.backgroundColor = colors.pink;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 0;
    self.game.physics.p2.gravity.y = 1000;
    
    self.ball = self.game.add.sprite(100, 200, 'ball');
    
    self.game.physics.p2.enable([ self.hero ], false);
    
    //self.hero.body.fixedRotation = true;
    self.hero.body.setCircle(45);
    
    self.ball.body.onBeginContact.add(self.collision, this);
    self.game.input.onDown.add(self.touchstart, this);
    self.game.input.onUp.add(self.touchend, this);
}
ballbreaker.prototype.touchstart = function(evt){
    console.log(evt.pageX);
}
ballbreaker.prototype.touchstart = function(evt){
    console.log(evt.pageX);
}
ballbreaker.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body){
        console.log(body.sprite.key);
    }
}
ballbreaker.prototype.render = function(){
    
}
ballbreaker.prototype.update = function(){
    
}
ballbreaker.prototype.create_interface = function(){
    console.log('interface');
    this.init();
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
}
ballbreaker.prototype.destroy = function(callBack){
    callBack();
}