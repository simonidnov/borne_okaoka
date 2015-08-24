(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 75,
	height: 75,
	fps: 30,
	color: "#FFCC00",
	manifest: []
};



// symbols:



(lib.tete = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AAjCMIhmgMQgYgDgQgTQgPgTADgZIASiVQACgYAUgQQAUgPAYADIBmAMQAZADAQATQAPAUgDAYIgSCVQgDAZgTAPQgUAPgZgDg");
	this.shape.setTransform(0,-14.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.6,-30.7,46.5,36.2);


(lib.star = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBUIhpA4IA4hpIhygjIBygiIg4hpIBpA4IAihyIAjByIBpg4Ig4BpIByAiIhyAjIA4BpIhpg4IgjByg");
	this.shape.setTransform(0,-19.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-39.7,39.8,39.8);


(lib.hero_fail_life_wall_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var ms = this;
		ms.stop();
		if(typeof rg !== "undefined"){
			rg.pause();
		}
		setTimeout(function(){
			ms.play();
			if(typeof rg !== "undefined"){
				rg.play();
			}
		}, 500);
	}
	this.frame_7 = function() {
		if(typeof rg !== "undefined"){
			rg.run();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1));

	// Calque 12
	this.instance = new lib.star();
	this.instance.setTransform(19.5,-34.5,0.6,0.6,0,0,0,0,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,x:22.5,y:-42},0).wait(1).to({x:20,y:-43},0).to({_off:true},1).wait(5));

	// Calque 4
	this.instance_1 = new lib.tete();
	this.instance_1.setTransform(17.4,-37.5,1,1,6,0,0,8.7,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({regX:8.8,regY:-12.7,rotation:14.5,x:21.6,y:-37.4},0).wait(5));

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AiOgtQA8ATBJAYQBHAWBRAa");
	this.shape.setTransform(1.5,-19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AiGhCQAqAtA6AaQA4AcBxAi");
	this.shape_1.setTransform(3.1,-21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(5));

	// Calque 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AgphEQCgAfiQBq");
	this.shape_2.setTransform(3.4,-4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AgZhGQCBBQiLA9");
	this.shape_3.setTransform(2.6,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},3).wait(5));

	// Calque 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AhbBMIC3iX");
	this.shape_4.setTransform(-10.1,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AhoA/QB+gSBThr");
	this.shape_5.setTransform(-10.6,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},3).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-57.8,64.3,64.7);


// stage content:



(lib.hero_fail_life_wall = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.hero_fail_life_wall_1();
	this.instance.setTransform(42.2,35.9,1,1,0,0,0,8.6,-27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49.2,43.4,64.3,64.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;