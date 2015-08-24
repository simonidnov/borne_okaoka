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


(lib.bras = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AiTgYQA+ALBMANQBKALBTAO");
	this.shape.setTransform(0,-2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.3,-7.6,34.8,10.1);


(lib.hero_run_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 5
	this.instance = new lib.tete();
	this.instance.setTransform(10,-42.5,1,1,-9,0,0,8.8,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:-40},0).wait(2).to({y:-37.5},0).wait(2).to({y:-45},0).wait(2).to({y:-47.5},0).wait(2).to({y:-45},0).wait(2));

	// Calque 4
	this.instance_1 = new lib.bras();
	this.instance_1.setTransform(1.5,-19.2,1,1,-6.7,0,0,0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:-16.2},0).wait(2).to({y:-15.2},0).wait(2).to({y:-21},0).wait(2).to({y:-23.5},0).wait(2).to({y:-21},0).wait(2));

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhKg1QB9ANAYBe");
	this.shape.setTransform(6.7,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AgThPQA4A9gYBh");
	this.shape_1.setTransform(1.1,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AAdhQQAeBzheAu");
	this.shape_2.setTransform(-3.9,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("ABPgxQgsBzhxgS");
	this.shape_3.setTransform(-8.8,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3,p:{y:-6.1}}]},2).to({state:[{t:this.shape_3,p:{y:-8.6}}]},2).to({state:[{t:this.shape_3,p:{y:-6.1}}]},2).wait(2));

	// Calque 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AhKAkQB5AmAbh2");
	this.shape_4.setTransform(-8.4,-6.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AggA/QB8g3hthG");
	this.shape_5.setTransform(1,-2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("ABDBIQgSh7hzgU");
	this.shape_6.setTransform(5.9,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("ABVBAQgeiLiLAN");
	this.shape_7.setTransform(7.6,-4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("ABVBAQgeiKiLAM");
	this.shape_8.setTransform(7.6,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_7}]},2).wait(2));

	// Calque 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0)").s().p("AlxFtIAArZILjAAIAALZg");
	this.shape_9.setTransform(3.9,-26.2,1.012,1.026);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-63.8,75,75.2);


// stage content:
(lib.hero_run = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.hero_run_1();
	this.instance.setTransform(42.2,35.9,1,1,0,0,0,8.6,-27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(37.5,37.4,75,75.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;