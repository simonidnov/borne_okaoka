(function(window) {
runner2 = function() {
	this.initialize();
}
runner2._SpriteSheet = new createjs.SpriteSheet({images: ["character.png"], frames: [[0,0,200,200,0,76,8.75],[200,0,200,200,0,76,8.75],[400,0,200,200,0,76,8.75],[600,0,200,200,0,76,8.75],[800,0,200,200,0,76,8.75],[1000,0,200,200,0,76,8.75],[1200,0,200,200,0,76,8.75],[1400,0,200,200,0,76,8.75],[1600,0,200,200,0,76,8.75],[1800,0,200,200,0,76,8.75],[2000,0,200,200,0,76,8.75]]});
var runner2_p = runner2.prototype = new createjs.Sprite();
runner2_p.Sprite_initialize = runner2_p.initialize;
runner2_p.initialize = function() {
	this.Sprite_initialize(runner2._SpriteSheet);
	this.paused = false;
}
window.runner2 = runner2;
}(window));

