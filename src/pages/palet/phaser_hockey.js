var self;
function palet(){
    this.game = null;
    self = this;
    
}
palet.prototype.init = function(){
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'hockey_canvas', { preload: this.preload, create: this.create, update: this.update, render: this.render });
}
palet.prototype.preload = function(){
    console.log('preload');
}
palet.prototype.create = function(){
    console.log('create');
    //self.game.stage.backgroundColor = '#124184';
    
    self.game.physics.startSystem(Phaser.Physics.BOX2D);
    self.game.physics.box2d.gravity.y = 400;
    self.game.physics.box2d.restitution = 0.8;
    self.game.physics.box2d.setBoundsToWorld();
}
palet.prototype.update = function(){
}
palet.prototype.render = function(){
}
palet.prototype.create_interface = function(){
    $('#hockey_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    $('#debug_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    this.init();
}
palet.prototype.destroy = function(callBack){
    callBack();
}