(function(window) {
runner_100 = function() {
	this.initialize();
}
runner_100._SpriteSheet = new createjs.SpriteSheet({images: ["runner_sprite.png"], frames: [[0,0,100,100,0,50,50],[100,0,100,100,0,50,50],[200,0,100,100,0,50,50],[300,0,100,100,0,50,50],[400,0,100,100,0,50,50],[500,0,100,100,0,50,50]]});
var runner_100_p = runner_100.prototype = new createjs.Sprite();
runner_100_p.Sprite_initialize = runner_100_p.initialize;
runner_100_p.initialize = function() {
	this.Sprite_initialize(runner_100._SpriteSheet);
	this.paused = false;
}
window.runner_100 = runner_100;
}(window));

