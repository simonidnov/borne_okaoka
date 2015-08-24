(function(window) {
running_g = function() {
	this.initialize();
}
running_g._SpriteSheet = new createjs.SpriteSheet({images: ["okaoka.png"], frames: [[0,0,75,75,0,33.55,63.75],[75,0,75,75,0,33.55,63.75],[150,0,75,75,0,33.55,63.75],[225,0,75,75,0,33.55,63.75],[225,0,75,75,0,33.55,64.75],[300,0,75,76,0,33.55,64.75],[375,0,75,75,0,33.55,63.75],[450,0,75,80,0,33.55,68.75],[525,0,75,80,0,33.55,68.75],[600,0,75,75,0,33.55,63.75],[675,0,75,75,0,33.55,63.75],[750,0,75,83,0,33.55,63.75],[825,0,75,75,0,33.55,63.75],[900,0,75,75,0,33.55,63.75],[975,0,75,75,0,33.55,63.75],[1050,0,75,75,0,33.55,63.75],[1125,0,75,75,0,33.55,63.75],[1200,0,75,75,0,33.55,63.75],[1275,0,75,75,0,33.55,63.75],[1350,0,75,88,0,33.55,63.75]]});
var running_g_p = running_g.prototype = new createjs.Sprite();
running_g_p.Sprite_initialize = running_g_p.initialize;
running_g_p.initialize = function() {
	this.Sprite_initialize(running_g._SpriteSheet);
	this.paused = false;
}
window.running_g = running_g;
}(window));

