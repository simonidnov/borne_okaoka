﻿(function(window) {
run_asset = function() {
	this.initialize();
}
run_asset._SpriteSheet = new createjs.SpriteSheet({images: ["hero.png"], frames: [[0,0,100,150,0,0,0],[100,0,100,150,0,0,0],[200,0,100,150,0,0,0],[300,0,100,150,0,0,0],[400,0,100,150,0,0,0],[500,0,100,150,0,0,0],[600,0,100,150,0,0,0],[700,0,100,150,0,0,0],[800,0,100,150,0,0,0],[900,0,100,150,0,0,0],[1000,0,100,150,0,0,0],[1100,0,100,150,0,0,0],[0,150,100,150,0,0,0],[100,150,100,150,0,0,0],[200,150,100,150,0,0,0],[300,150,100,150,0,0,0],[400,150,100,150,0,0,0],[500,150,100,150,0,0,0],[600,150,100,150,0,0,0],[700,150,100,150,0,0,0],[800,150,100,150,0,0,0],[900,150,100,150,0,0,0],[1000,150,100,150,0,0,0],[1100,150,100,150,0,0,0],[0,300,100,150,0,0,0],[100,300,100,150,0,0,0],[200,300,100,150,0,0,0],[300,300,100,150,0,0,0],[400,300,100,150,0,0,0],[500,300,100,150,0,0,0],[600,300,100,150,0,0,0],[700,300,100,150,0,0,0],[800,300,100,150,0,0,0],[900,300,100,150,0,0,0],[1000,300,100,150,0,0,0],[1100,300,100,150,0,0,0]]});
var run_asset_p = run_asset.prototype = new createjs.Sprite();
run_asset_p.Sprite_initialize = run_asset_p.initialize;
run_asset_p.initialize = function() {
	this.Sprite_initialize(run_asset._SpriteSheet);
	this.paused = false;
}
window.run_asset = run_asset;
}(window));

