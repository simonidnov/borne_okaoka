(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 75,
	height: 90,
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


(lib.hero_fail_water_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		if(typeof rg !== "undefined"){
			rg.stop();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Calque 12
	this.instance = new lib.tete();
	this.instance.setTransform(15.1,-42.7,1,1,-9,0,0,8.8,-12.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AAABTIB6hXQATgPAZAEQAZAEAOASIA+BUAjABrQhkhjAjhyAgVgZQgwAZgaAs");
	this.shape.setTransform(10.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AB5A9IAdgVQATgPAZAEQAZAEAOAUIAGAHAjoAsQgNgxAQg3");
	this.shape_1.setTransform(7.8,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:6,x:21.5,y:-35.8},0).wait(1).to({regY:-12.7,rotation:31,x:24,y:-21.6},0).wait(1).to({regY:-12.8,rotation:39.3,x:27.9,y:-8.6},0).wait(1).to({rotation:39.2,x:29.4,y:-3.5},0).wait(1).to({rotation:47.2,x:28.3,y:7},0).wait(1).to({y:14.5},0).to({_off:true},1).wait(4));

	// Calque 4
	this.instance_1 = new lib.bras();
	this.instance_1.setTransform(1.4,-19.4,1,1,8.3,0,0,0,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AiBhgQArBrA+AtQA8AuBegG");
	this.shape_2.setTransform(1.8,-23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AgciPQg/BUAeBlQAfBmBmAA");
	this.shape_3.setTransform(1.4,-23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AAAiVQhIBKAQBoQAPBqBlAP");
	this.shape_4.setTransform(4.8,-13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AAciXQhQBAADBqQACBqBiAb");
	this.shape_5.setTransform(3.6,-8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AAziXQhZAzgLBqQgNBqBdAo");
	this.shape_6.setTransform(3.2,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AhSgyQBGBkBfAB");
	this.shape_7.setTransform(-17.1,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6,p:{y:-0.7}}]},1).to({state:[{t:this.shape_6,p:{y:6.8}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(3));

	// Calque 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AAjg5QCJCDj+gS");
	this.shape_8.setTransform(-4.6,-5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("ABegSQhlBVhWhY");
	this.shape_9.setTransform(-10.5,-9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("ABbAQQh5A5g8hr");
	this.shape_10.setTransform(-13.9,-13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("ABHBVQiAg0gNh1");
	this.shape_11.setTransform(-19.3,-27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AA6BfQh3hGAEh3");
	this.shape_12.setTransform(-14.1,-20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AAvBlQhuhUATh1");
	this.shape_13.setTransform(-13.4,-18);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("AAkBrQhhhjAjhy");
	this.shape_14.setTransform(-12.5,-13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AgCAQQACgQADgP");
	this.shape_15.setTransform(-15.6,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14,p:{y:-13.3}}]},1).to({state:[{t:this.shape_14,p:{y:-5.8}}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},2).to({state:[]},1).wait(1));

	// Calque 7
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AgzBZQBMg6Abh3");
	this.shape_16.setTransform(-6.2,-2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AhIBIQBYgjA5hs");
	this.shape_17.setTransform(-12.1,-4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AhggUQBoBBBZgl");
	this.shape_18.setTransform(-21.8,-19.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AhcgeQBcBPBdgY");
	this.shape_19.setTransform(-17.6,-13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("AhYgnQBUBaBdgM");
	this.shape_20.setTransform(-17.6,-11.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AhSgyQBGBkBfAB");
	this.shape_21.setTransform(-17.1,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{y:-7.7}}]},1).to({state:[{t:this.shape_21,p:{y:-0.2}}]},1).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-64,57.2,73.2);


// stage content:



(lib.hero_fail_water = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.hero_fail_water_1();
	this.instance.setTransform(42.2,35.9,1,1,0,0,0,8.6,-27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(54.6,44.7,57.2,73.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;