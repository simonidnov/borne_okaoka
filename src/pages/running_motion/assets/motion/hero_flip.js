(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 75,
	height: 75,
	fps: 12,
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


(lib.hero_flip_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		if(typeof self !== "undefined"){
			self.run();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Calque 5
	this.instance = new lib.tete();
	this.instance.setTransform(11.2,-32.9,1,1,15,0,0,8.6,-12.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("Ahtg0QArAlA+AhQA7AiA3AB");
	this.shape.setTransform(-7.1,-18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AhDhkQASA2AkA7QAiA8AvAc");
	this.shape_1.setTransform(-1.3,-23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AA1htQglArggA+QgjA7gBA3");
	this.shape_2.setTransform(-7.9,-28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AB4AaQgzgZhFgPQhCgSg1AN");
	this.shape_3.setTransform(-2.8,-37.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AAbB3QgEg5gThCQgRhDgNgv");
	this.shape_4.setTransform(5.4,-35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AhTBeQBOgnAqhFQAshHADgI");
	this.shape_5.setTransform(0.6,-29.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AiFAaQBQgaA8gQQA+gPBBAJ");
	this.shape_6.setTransform(-6.2,-23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AiHgGQBUgHA/ABQBAABA8AY");
	this.shape_7.setTransform(-3.2,-20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-18.8}},{t:this.instance,p:{y:-32.9,rotation:15,x:11.2,regY:-12.7,regX:8.6}}]}).to({state:[{t:this.shape,p:{y:-21.3}},{t:this.instance,p:{y:-35.4,rotation:15,x:11.2,regY:-12.7,regX:8.6}}]},2).to({state:[{t:this.shape_1},{t:this.instance,p:{y:-26.1,rotation:45,x:21.6,regY:-12.7,regX:8.6}}]},1).to({state:[{t:this.shape_2},{t:this.instance,p:{y:-9.9,rotation:105,x:6.2,regY:-12.7,regX:8.6}}]},1).to({state:[{t:this.shape_3},{t:this.instance,p:{y:-18.5,rotation:180,x:-16.8,regY:-12.7,regX:8.6}}]},1).to({state:[{t:this.shape_4},{t:this.instance,p:{y:-37.6,rotation:-105,x:-16.7,regY:-12.7,regX:8.6}}]},1).to({state:[{t:this.shape_5},{t:this.instance,p:{y:-49.5,rotation:-45,x:-6.7,regY:-12.6,regX:8.6}}]},1).to({state:[{t:this.shape_6},{t:this.instance,p:{y:-46.6,rotation:-22.3,x:-1.6,regY:-12.6,regX:8.7}}]},1).to({state:[{t:this.shape_7},{t:this.instance,p:{y:-41.2,rotation:-7.3,x:7.2,regY:-12.6,regX:8.7}}]},1).to({state:[]},1).wait(2));

	// Calque 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AA3hMIhtCZ");
	this.shape_8.setTransform(-12.5,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("ABWgKQhWAthVgt");
	this.shape_9.setTransform(-14.8,-13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AAcBhQhMhVAchs");
	this.shape_10.setTransform(-20.6,-37.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AhXAxQA/hfBwgC");
	this.shape_11.setTransform(8.3,-49.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AhigSQBxgrBUBe");
	this.shape_12.setTransform(22.1,-34.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AhXgwQB+gZAxB+");
	this.shape_13.setTransform(19.4,-23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("Ag1hfQBRBHAaB4");
	this.shape_14.setTransform(5.6,-9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AhFhKQCUAKgKCL");
	this.shape_15.setTransform(2.3,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{y:-1.2}}]}).to({state:[{t:this.shape_8,p:{y:-3.7}}]},2).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(2));

	// Calque 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("ABJhcQhABkhRBV");
	this.shape_16.setTransform(-21,-1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("ABQAjQhpgIg2g9");
	this.shape_17.setTransform(-18.8,-23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AgEBaQg6hgBZhT");
	this.shape_18.setTransform(-14.9,-43.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AhaAWQBPhQBmBB");
	this.shape_19.setTransform(15.7,-44.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("AgzhKQBtAcgGB5");
	this.shape_20.setTransform(18.9,-21.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AAFhZQA6BghZBT");
	this.shape_21.setTransform(5.8,-13.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AAxhMQAQBvhzAq");
	this.shape_22.setTransform(-11.1,-10.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("ABEg8QgOBvh5AK");
	this.shape_23.setTransform(-11.5,-8.5);

	this.instance_1 = new lib.tete();
	this.instance_1.setTransform(10,-40,1,1,-9,0,0,8.8,-12.8);

	this.instance_2 = new lib.bras();
	this.instance_2.setTransform(1.5,-16.7,1,1,-6.7,0,0,0,-2.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("AiVAcQB7AmAah2QB+ANAYBe");
	this.shape_24.setTransform(-0.8,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16,p:{y:-1.9}}]}).to({state:[{t:this.shape_16,p:{y:-4.4}}]},2).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24},{t:this.instance_2},{t:this.instance_1}]},1).wait(2));

	// Calque 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0)").s().p("AlxFtIAArZILjAAIAALZg");
	this.shape_25.setTransform(3.9,-26.2,1.012,1.026);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-63.7,75,75);


// stage content:
(lib.hero_flip = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.hero_flip_1();
	this.instance.setTransform(42.2,35.9,1,1,0,0,0,8.6,-27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(37.5,37.5,75,75);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;