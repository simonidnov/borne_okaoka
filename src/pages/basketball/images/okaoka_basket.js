(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#996600",
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


(lib.okaoka_basket_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al2F3IAArtILsAAIAALtg");
	mask.setTransform(1.1,-26.1);

	// Calque 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1A2QgXgWAAggQAAgfAXgWQAWgXAfAAQAfAAAXAXQAXAWgBAfQABAggXAWQgXAXgfgBQgfABgWgXg");
	this.shape.setTransform(21.2,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1A2QgXgWAAggQAAgfAXgWQAWgWAfAAQAfAAAXAWQAXAWgBAfQABAggXAWQgXAWgfABQgfgBgWgWg");
	this.shape_1.setTransform(21.2,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1A2QgXgWAAggQAAgfAXgWQAWgWAfgBQAfABAXAWQAXAWgBAfQABAggXAWQgXAWgfAAQgfAAgWgWg");
	this.shape_2.setTransform(21.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1ArQgXgSAAgZQAAgYAXgTQAWgSAfAAQAfAAAXASQAXATgBAYQABAZgXASQgXASgfAAQgfAAgWgSg");
	this.shape_3.setTransform(21.2,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1AlQgXgQAAgVQAAgVAXgPQAWgQAfAAQAfAAAXAQQAXAPgBAVQABAVgXAQQgXAQgfAAQgfAAgWgQg");
	this.shape_4.setTransform(21.2,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA1QgTgWAAgfQAAgeATgWQATgWAZAAQAbAAASAWQATAWAAAeQAAAfgTAWQgSAWgbAAQgZAAgTgWg");
	this.shape_5.setTransform(21.2,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1A1QgXgWAAgfQAAgeAXgWQAWgWAfAAQAfAAAXAWQAXAWgBAeQABAfgXAWQgXAWgfAAQgfAAgWgWg");
	this.shape_6.setTransform(21.2,-6.2);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6,p:{y:-6.2}}]},1).to({state:[{t:this.shape_6,p:{y:-12.2}}]},1).to({state:[{t:this.shape_6,p:{y:-14.7}}]},1).wait(1));

	// Calque 1
	this.instance = new lib.tete();
	this.instance.setTransform(15,-42,1,1,-9,0,0,8.8,-12.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-1.5,x:6.3,y:-25.5},0).wait(1).to({rotation:6,x:5.8,y:-23},0).wait(1).to({x:8.3,y:-21.5},0).wait(2).to({y:-20.5},0).wait(1).to({rotation:-1.2,x:5.8,y:-23},0).wait(1).to({rotation:0.5,x:4.8,y:-25.7},0).wait(1).to({rotation:-2.8,x:4.5,y:-28},0).wait(1).to({rotation:-8.2},0).wait(1));

	// Calque 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AikgQQBQAdBNAEQBLAEBhgW");
	this.shape_7.setTransform(5.3,-20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AiWgfQBNAfA9ANQA7AMBoAH");
	this.shape_8.setTransform(3.8,-19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AiUgwQA0AlA8ARQA5ATCAAY");
	this.shape_9.setTransform(3.7,-17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AiRg6QAiAvA6AVQA3AXCQAa");
	this.shape_10.setTransform(3.3,-16.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AiXg8QApAhA6AXQA3AVCVAs");
	this.shape_11.setTransform(3.2,-15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AiXgiQApAhA6AUQA3AXCVgL");
	this.shape_12.setTransform(3.2,-17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AiXgRQAtARA4ALQA3ALCTgH");
	this.shape_13.setTransform(3.2,-19.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("AiegBQA0ALBHACQBFACB9gZ");
	this.shape_14.setTransform(3.9,-21);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AidAIQA1AOBHACQBEACB7gx");
	this.shape_15.setTransform(3.8,-22.1);

	this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Calque 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AhFhaQCCACAJCz");
	this.shape_16.setTransform(6.2,-3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AgnhlQBOA2ABCV");
	this.shape_17.setTransform(3.2,-2.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AAXh4QgWBNgXCk");
	this.shape_18.setTransform(-3.2,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AA8hqQgVBOhiCH");
	this.shape_19.setTransform(-7,-2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("ABNhqIiZDV");
	this.shape_20.setTransform(-8.6,-2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("ABTgzQgJB2icgS");
	this.shape_21.setTransform(-9.2,-7.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AAChGQBzB2ilAX");
	this.shape_22.setTransform(-1.1,-5.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AgohTQB7A0hABz");
	this.shape_23.setTransform(3.2,-4.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("Ag8hWQCFAagOCT");
	this.shape_24.setTransform(5.2,-4.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AhGhTQCdARgSCW");
	this.shape_25.setTransform(6.2,-4.5);

	this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).wait(1));

	// Calque 4
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AhNBpICbjR");
	this.shape_26.setTransform(-8.8,-2.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AhNA3QBmAbA1iM");
	this.shape_27.setTransform(-8.8,-7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AhEA9QDKAUhgiP");
	this.shape_28.setTransform(-4.7,-6.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AAeBdQAjhihnhX");
	this.shape_29.setTransform(3,-3.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("AAvBmQAKhzhnhY");
	this.shape_30.setTransform(3.9,-2.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AAuBrQgMh9hPhY");
	this.shape_31.setTransform(3.7,-2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AgQBqQA5h7gnhY");
	this.shape_32.setTransform(-1.1,-2.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AgrBqQB1h7gnhY");
	this.shape_33.setTransform(-4.4,-2.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AgxBqQBsh7gKhY");
	this.shape_34.setTransform(-5.9,-2.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("Ag8BpIB5jR");
	this.shape_35.setTransform(-7,-2.4);

	this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(1));

	// Calque 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(211,35,138,0)").s().p("Al2F3IAArtILsAAIAALtg");
	this.shape_36.setTransform(1.1,-26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-63.6,75,75);


// stage content:
(lib.okaoka_basket = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.okaoka_basket_1();
	this.instance.setTransform(143.5,201.5,1,1,0,0,0,37.5,37.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(344.6,300.4,77.1,75);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;