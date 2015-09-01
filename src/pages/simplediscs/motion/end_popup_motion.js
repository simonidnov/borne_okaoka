(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 200,
	fps: 50,
	color: "#485DA7",
	manifest: []
};



// symbols:



// stage content:
(lib.end_popup_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 6
	this.text = new cjs.Text("Animation de fin du jeu", "italic bold 30px 'Roboto'", "#FFFFFF");
	this.text.lineHeight = 32;
	this.text.lineWidth = 311;
	this.text.setTransform(48.1,79.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(314));

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgimAAAMBFNAAA");
	this.shape.setTransform(209.6,196.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(314));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(185.5,179.7,448.1,118.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;