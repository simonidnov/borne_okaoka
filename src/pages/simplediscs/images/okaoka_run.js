(function(window) {
discs_progress_run = function() {
	this.initialize();
}
discs_progress_run._SpriteSheet = new createjs.SpriteSheet({images: ["okaoka_run.png"], frames: [[0,0,75,75,0,36.45,63.6],[75,0,75,75,0,36.45,63.6],[150,0,75,75,0,36.45,63.6],[225,0,75,75,0,36.45,63.6],[300,0,75,75,0,36.45,63.6],[375,0,75,75,0,36.45,63.6],[450,0,75,75,0,36.45,63.6],[525,0,75,75,0,36.45,63.6]]});
var discs_progress_run_p = discs_progress_run.prototype = new createjs.Sprite();
discs_progress_run_p.Sprite_initialize = discs_progress_run_p.initialize;
discs_progress_run_p.initialize = function() {
	this.Sprite_initialize(discs_progress_run._SpriteSheet);
	this.paused = false;
}
window.discs_progress_run = discs_progress_run;
}(window));

