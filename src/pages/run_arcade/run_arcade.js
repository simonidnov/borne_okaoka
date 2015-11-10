var self = null;
function run(){
    self = this;
}
run.prototype.init = function(){
    TweenMax.set($('#phaser-run'), {opacity:0});
    $('#phaser-run').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-run', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
run.prototype.preload = function(){
    
    self.game.load.spritesheet('okaoka3', 'pages/run/maps_new/hero/run.png', 100, 150);
}
run.prototype.create = function(){
    self.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    self.game.physics.arcade.gravity.y = 300;
    
    self.hero = self.game.add.sprite(100, 150, 'okaoka3');
    
    self.game.physics.enable(self.hero, Phaser.Physics.ARCADE);
    
    self.hero.body.collideWorldBounds = true;
    
    self.hero.body.gravity.y = 1000;
    self.hero.body.maxVelocity.y = 500;
    //self.hero.body.setSize(20, 32, 5, 16);
    self.hero.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 20, true);
    self.hero.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 45, true);
    self.hero.animations.add('small_jump', [24], 1, false);
    self.hero.animations.add('jump', [25], 1, false);
    self.hero.animations.add('after_jump', [26], 1, false);
    self.hero.animations.add('oka', [1], 1, false);
    self.hero.animations.add('wall', [27], 1, false);
    self.hero.animations.add('wall_end', [27], 1, false);
    self.hero.animations.add('parachute', [29, 30, 31, 32, 33, 34, 35], 25, false);
    self.hero.animations.add('speed', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 60, true);
    self.hero.animations.add('invicible', [28], 1, false);
    self.hero.animations.add('watter', [27], 12, true);
    self.hero.animations.add('picots', [27], 25, false);
    self.hero.animations.add('died', [27], 25, true);
}
run.prototype.updates_scores = function(){
    
}
run.prototype.create_task_bar = function(){
    
}
run.prototype.intro_game = function(){
    
}
run.prototype.set_listeners = function(){
     
}
run.prototype.endcollision = function(body, bodyB, shapeA, shapeB, equation){
}
run.prototype.add_power = function(power){
    
}

run.prototype.render = function(){
    
}

run.prototype.create_interface = function(){
    this.init();
}
run.prototype.died = function(){
    
}
run.prototype.pause = function(){
    self.game.paused = true;
}
run.prototype.play = function(){
    self.game.paused = false;
}
run.prototype.show_stats = function(){
    var total_score = self.gameInfo.distance + self.gameInfo.score.circles + self.gameInfo.score.squares + self.gameInfo.score.triangles;
    utilities.show_score_game('run', total_score);   
}
run.prototype.replay_game = function(){
    window.location.href = "#page/"+navigation._current_page_name+"/intro/false/date/"+new Date().getTime();
}
run.prototype.destroy_all_game = function(){
    
}
run.prototype.delete_objects = function(obj){
    
}
run.prototype.destroy = function(callBack){
    if(typeof self._running_sound !== "undefined"){
        self._running_sound.stop();  
    }
    self.destroy_all_game();
    utilities.destroy_over_motion();
    callBack();
}