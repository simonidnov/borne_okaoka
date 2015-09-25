(function(window) {
triangle = function() {
	this.initialize();
}
triangle._SpriteSheet = new createjs.SpriteSheet({images: ["enemy_triangle.png"], frames: [[0,0,160,101,0,79.85,50.05],[160,0,160,101,0,79.85,50.05],[320,0,160,101,0,79.85,50.05],[480,0,160,101,0,79.85,50.05],[640,0,160,101,0,79.85,50.05]]});
var triangle_p = triangle.prototype = new createjs.Sprite();
triangle_p.Sprite_initialize = triangle_p.initialize;
triangle_p.initialize = function() {
	this.Sprite_initialize(triangle._SpriteSheet);
	this.paused = false;
}
window.triangle = triangle;
}(window));

