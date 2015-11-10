(function(window) {
winning_dance_2 = function() {
	this.initialize();
}
winning_dance_2._SpriteSheet = new createjs.SpriteSheet({images: ["winning_dance_2.png"], frames: [[0,0,146,230,0,76.45,130.6],[146,0,146,230,0,76.45,130.6],[292,0,146,230,0,76.45,130.6],[438,0,146,230,0,76.45,130.6],[584,0,146,230,0,76.45,130.6],[730,0,146,230,0,76.45,130.6],[876,0,146,230,0,76.45,130.6],[0,230,146,230,0,76.45,130.6],[146,230,146,230,0,76.45,130.6],[292,230,146,230,0,76.45,130.6],[438,230,146,230,0,76.45,130.6],[584,230,146,230,0,76.45,130.6],[730,230,146,230,0,76.45,130.6],[876,230,146,230,0,76.45,130.6],[0,460,146,230,0,76.45,130.6],[146,460,146,230,0,76.45,130.6],[292,460,146,230,0,76.45,130.6],[438,460,146,230,0,76.45,130.6],[584,460,146,230,0,76.45,130.6],[730,460,146,230,0,76.45,130.6]]});
var winning_dance_2_p = winning_dance_2.prototype = new createjs.Sprite();
winning_dance_2_p.Sprite_initialize = winning_dance_2_p.initialize;
winning_dance_2_p.initialize = function() {
	this.Sprite_initialize(winning_dance_2._SpriteSheet);
	this.paused = false;
}
window.winning_dance_2 = winning_dance_2;
}(window));

