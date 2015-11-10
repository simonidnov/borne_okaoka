(function(window) {
circle = function() {
	this.initialize();
}
circle._SpriteSheet = new createjs.SpriteSheet({images: ["enemy_circle.png"], frames: [[0,0,104,100,0,0.25,0.4],[104,0,104,100,0,0.25,0.4],[208,0,104,100,0,0.25,0.4],[312,0,104,100,0,0.25,0.4],[416,0,104,100,0,0.25,0.4],[520,0,104,100,0,0.25,0.4]]});
var circle_p = circle.prototype = new createjs.Sprite();
circle_p.Sprite_initialize = circle_p.initialize;
circle_p.initialize = function() {
	this.Sprite_initialize(circle._SpriteSheet);
	this.paused = false;
}
window.circle = circle;
}(window));

