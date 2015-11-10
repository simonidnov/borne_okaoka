(function(window) {
rectangle = function() {
	this.initialize();
}
rectangle._SpriteSheet = new createjs.SpriteSheet({images: ["enemy_square.png"], frames: [[0,0,62,59,0,31,29.35],[62,0,62,59,0,30,29.35],[124,0,62,59,0,30,29.35],[186,0,62,59,0,30,29.35],[248,0,62,59,0,30,29.35],[310,0,62,59,0,30,29.35]]});
var rectangle_p = rectangle.prototype = new createjs.Sprite();
rectangle_p.Sprite_initialize = rectangle_p.initialize;
rectangle_p.initialize = function() {
	this.Sprite_initialize(rectangle._SpriteSheet);
	this.paused = false;
}
window.rectangle = rectangle;
}(window));

