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
	this.initialize(mode,startPosition,loop,{choice_0:116,choice_1:127});

	// timeline functions:
	this.frame_113 = function() {
		this.gotoAndPlay(1);//utilities.pop_up_motion_callback();
	}
	this.frame_122 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}
	this.frame_133 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(113).call(this.frame_113).wait(9).call(this.frame_122).wait(11).call(this.frame_133).wait(190));

	// Calque 6
	this.text = new cjs.Text("Animation de fin du jeu", "italic bold 30px 'Roboto'", "#FFFFFF");
	this.text.lineHeight = 32;
	this.text.lineWidth = 311;
	this.text.setTransform(48.1,79.7);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},314).wait(9));

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgimAAAMBFNAAA");
	this.shape.setTransform(209.6,196.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},314).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(185.5,179.7,448.1,118.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;