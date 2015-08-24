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


(lib.out_of_watter = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.tete();
	this.instance.setTransform(14.5,-48,1,1,6,0,0,8.7,-12.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AiVBoIBpiwAhxipQCaA3BtAJAAig5IiVDj");
	this.shape.setTransform(-4.5,-17.1);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-68.3,61.5,70.9);


(lib.oka_coule = function() {
	this.initialize();

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AAkBrQhhhjAjhy");
	this.shape.setTransform(-20.7,-31.4);

	// Calque 1
	this.instance = new lib.tete();
	this.instance.setTransform(20.1,-11.1,1,1,47.2,0,0,8.8,-12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("ACpiXQhbAzgMBqQgMBqBfAoAioh4QBHBmBgAB");
	this.shape_1.setTransform(-16.7,-18.8);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.1,-44.6,85.1,62.8);


(lib.hero_fail_water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		if(typeof rg != "undefined"){
			rg.setSpeed(0);
			rg._current_obstacle.stop();
		}
	}
	this.frame_42 = function() {
		if(typeof rg != "undefined"){
			rg.setSpeed(10);
			rg._current_obstacle.play();
		}
	}
	this.frame_65 = function() {
		if(typeof rg !== "undefined"){
			rg.run();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(11).call(this.frame_42).wait(23).call(this.frame_65).wait(2));

	// Calque 12
	this.instance = new lib.tete();
	this.instance.setTransform(15.1,-42.7,1,1,-9,0,0,8.8,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:6,x:21.5,y:-35.8},0).wait(8).to({regY:-12.7,rotation:31,x:24,y:-21.6},0).wait(1).to({regY:-12.8,rotation:39.3,x:27.9,y:-8.6},0).wait(1).to({rotation:39.2,x:29.4,y:-3.5},0).wait(1).to({rotation:47.2,x:28.3,y:7},0).wait(1).to({y:14.5},0).wait(1).to({y:19.5},0).wait(1).to({y:27},0).to({_off:true},1).wait(50));

	// Calque 4
	this.instance_1 = new lib.bras();
	this.instance_1.setTransform(1.4,-19.4,1,1,8.3,0,0,0,-2.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AiBhgQArBrA+AtQA8AuBegG");
	this.shape.setTransform(1.8,-23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AgciPQg/BUAeBlQAfBmBmAA");
	this.shape_1.setTransform(1.4,-23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AAAiVQhIBKAQBoQAPBqBlAP");
	this.shape_2.setTransform(4.8,-13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AAciXQhQBAADBqQACBqBiAb");
	this.shape_3.setTransform(3.6,-8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AAziXQhZAzgLBqQgNBqBdAo");
	this.shape_4.setTransform(3.2,-0.7);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},8).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(13).to({_off:false},0).wait(1).to({y:6.8},0).wait(1).to({y:11.8},0).wait(1).to({y:19.3},0).to({_off:true},1).wait(50));

	// Calque 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AAjg5QCJCDj+gS");
	this.shape_5.setTransform(-4.6,-5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("ABegSQhlBVhWhY");
	this.shape_6.setTransform(-10.5,-9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("ABbAQQh5A5g8hr");
	this.shape_7.setTransform(-13.9,-13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("ABHBVQiAg0gNh1");
	this.shape_8.setTransform(-19.3,-27.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AA6BfQh3hGAEh3");
	this.shape_9.setTransform(-14.1,-20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AAvBlQhuhUATh1");
	this.shape_10.setTransform(-13.4,-18);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AAkBrQhhhjAjhy");
	this.shape_11.setTransform(-12.5,-13.3);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},8).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(13).to({_off:false},0).wait(1).to({y:-5.8},0).wait(1).to({y:-0.8},0).wait(1).to({y:6.7},0).to({_off:true},1).wait(50));

	// Calque 7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AgzBZQBMg6Abh3");
	this.shape_12.setTransform(-6.2,-2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AhIBIQBYgjA5hs");
	this.shape_13.setTransform(-12.1,-4.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("AhggUQBoBBBZgl");
	this.shape_14.setTransform(-21.8,-19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AhcgeQBcBPBdgY");
	this.shape_15.setTransform(-17.6,-13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AhYgnQBUBaBdgM");
	this.shape_16.setTransform(-17.6,-11.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AhSgyQBGBkBfAB");
	this.shape_17.setTransform(-17.1,-7.7);
	this.shape_17._off = true;

	this.instance_2 = new lib.oka_coule();
	this.instance_2.setTransform(14.6,34.9,1,1,0,0,0,6.4,-13.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.out_of_watter();
	this.instance_3.setTransform(16.8,115.3,1,1,0,0,0,8.7,-33);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},8).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},21).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},4).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(13).to({_off:false},0).wait(1).to({y:-0.2},0).wait(1).to({y:4.8},0).wait(1).to({y:12.3},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({regY:-13.3,rotation:-30,y:154.9},21).to({regY:-13.2,rotation:-45,x:14.7,y:154.8},3).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({y:10.3},6).to({y:-64.7},4).to({y:-49.7},9).to({y:-24.7},4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-64,57.2,73.2);


// stage content:



(lib.hero_fail_life_watter = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.hero_fail_water();
	this.instance.setTransform(42.2,35.9,1,1,0,0,0,8.6,-27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(54.6,37.2,57.2,73.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;