var self = null;
function bounceball(){
    this.poles = [];
    self = this;
}
bounceball.prototype.init = function(){
    $('#phaser-bounceball').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-bounceball', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
bounceball.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.image('ball', 'pages/bounceball/assets/ball.png');
    self.game.load.image('pole', 'pages/bounceball/assets/pole.png');
}
bounceball.prototype.create = function(){
    self.game.stage.backgroundColor = colors.pink;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 0;
    self.game.physics.p2.gravity.y = 1000;
    
    self.ball = self.game.add.sprite(400, 400, 'ball');
    
    self.game.physics.p2.enable([ self.ball ], false);
    
    self.create_pole();
    
    //self.hero.body.fixedRotation = true;
    self.ball.body.setCircle(50);
    
    self.ball.body.onBeginContact.add(self.collision, this);
    self.game.input.onDown.add(self.touchstart, this);
    self.game.input.onUp.add(self.touchend, this);
}
bounceball.prototype.create_pole = function(){
    var posY = 300+Math.round(Math.random()*(window.innerHeight-500));
    var pole1Y = posY - 600;
    var pole2Y = posY + 600;
    self.poles[self.poles.length] = self.game.add.sprite(window.innerWidth, pole1Y, 'pole');
    self.poles[self.poles.length] = self.game.add.sprite(window.innerWidth, pole2Y, 'pole');
    self.game.physics.p2.enable([ self.poles[self.poles.length-1], self.poles[self.poles.length-2] ], false);
    self.poles[self.poles.length-1].body.kinematic = true;
    self.poles[self.poles.length-2].body.kinematic = true;
}
bounceball.prototype.touchstart = function(evt){
    console.log(evt.pageX);
    self.ball.body.velocity.y = -500;
}
bounceball.prototype.touchend = function(evt){
    console.log(evt.pageX);
}
bounceball.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body){
        console.log(body.sprite.key);
        //self.game.paused = true;
    }
}
bounceball.prototype.render = function(){
    if(self.game.paused){
        var vitesse = 0;
        return;
    }else{
        var vitesse = 500;
    }
    for(var i=0; i<self.poles.length; i++){
        if(self.poles[i]){
            self.poles[i].body.moveLeft(vitesse);
            var sw = self.poles[i].body.sprite.width;
            if(self.poles[i].body.x <= -(sw)){
                console.log('kill');
                self.poles[i].kill();
                self.poles[i] = null;
                self.poles.splice(i, 1);
            }
        }
    }
    if(self.poles[self.poles.length-1].body.x <= window.innerWidth - 500){
        self.create_pole();
    }
    self.ball.body.x = 400;
}
bounceball.prototype.update = function(){
    
}
bounceball.prototype.create_interface = function(){
    console.log('interface');
    this.init();
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
}
bounceball.prototype.pause = function(){
    self.game.paused = true;
}
bounceball.prototype.play = function(){
    self.game.paused = false;
}
bounceball.prototype.destroy = function(callBack){
    callBack();
}