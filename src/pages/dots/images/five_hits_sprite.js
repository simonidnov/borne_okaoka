(function(window) {
small_info_up = function() {
	this.initialize();
}
small_info_up._SpriteSheet = new createjs.SpriteSheet({images: ["five_hits_sprite.png"], frames: [[0,0,100,100,0,50,50],[100,0,100,100,0,50,50],[200,0,100,100,0,50,50],[300,0,100,100,0,50,50],[400,0,100,100,0,50,50],[0,100,100,100,0,50,50],[100,100,100,100,0,50,50],[200,100,100,100,0,50,50],[300,100,100,100,0,50,50],[400,100,100,100,0,50,50],[0,200,100,100,0,50,50],[100,200,100,100,0,50,50],[200,200,100,100,0,50,50],[300,200,100,100,0,50,50],[400,200,100,100,0,50,50],[0,300,100,100,0,50,50]]});
var small_info_up_p = small_info_up.prototype = new createjs.Sprite();
small_info_up_p.Sprite_initialize = small_info_up_p.initialize;
small_info_up_p.initialize = function() {
	this.Sprite_initialize(small_info_up._SpriteSheet);
	this.paused = false;
}
window.small_info_up = small_info_up;
}(window));

