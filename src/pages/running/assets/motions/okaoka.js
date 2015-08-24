(function(window) {
running_g = function() {
	this.initialize();
}
running_g._SpriteSheet = new createjs.SpriteSheet({images: ["okaoka.png"], frames: [[75,0,75,75,0,33.55,63.75],[75,0,75,75,0,33.55,63.75],[150,0,75,75,0,33.55,63.75],[150,0,75,75,0,33.55,63.75],[225,0,75,75,0,33.55,63.75],[225,0,75,75,0,33.55,63.75],[300,0,75,75,0,33.55,63.75],[300,0,75,75,0,33.55,63.75],[0,0,75,76,0,33.55,64.75],[0,0,75,76,0,33.55,64.75]]});
var running_g_p = running_g.prototype = new createjs.Sprite();
running_g_p.Sprite_initialize = running_g_p.initialize;
running_g_p.initialize = function() {
	this.Sprite_initialize(running_g._SpriteSheet);
	this.paused = false;
}
window.running_g = running_g;
}(window));

