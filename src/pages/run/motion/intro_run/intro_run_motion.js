(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 200,
	fps: 30,
	color: "#FFCC00",
	manifest: []
};



// symbols:



(lib.run_hand_simple_tap_hold = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("AE3mcQAAA7gpAqQgqApg7AAQg7AAgpgpQgqgqAAg7QAAg7AqgpQApgqA7AAQA7AAAqAqQApApAAA7gAAwouIglAqAEUoyIAqAqAC1AvQABgZASgSQATgRAaAAQAbAAASARQATATAAAaIAAC/IgIB2QgPCDgpBDAhJheQABgZASgTQATgSAaAAQAZAAASASQATATAAAbIAAA2QABgZASgTQATgSAaAAQAbAAASASQATATAAAbIAABTACpnfIAABDIBaAAAA1gmIAACDAC1BxIAAhCAhJheIAAkJQAAgagSgTQgTgTgbAAQgaAAgTATQgTATAAAaIAAEeQgbAGgcAaQg3A0AABnQAAB5ArB9QAoB4BABMAhJBJIAAinAjJhJIAACI");
	this.shape.setTransform(-0.3,-55.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-114.5,68.1,117.1);


(lib.run_hand_simple_tap = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("ABXoMIheBgAAelQICHAAAgnhIQABgZARgSQATgTAZAAQAbAAASATQATATAAAaIAAA2QABgZASgSQATgTAaAAQAaAAATATQATASAAAbIAABUQAAgaATgSQASgTAbAAQAaAAATATQATATAAAaIAADAIgIB2QgQCDgoBCABXgQIAACDADXCHIAAhBAkhoMIBgBgAhkpaIAACHAgnhIIAAkJQAAgagTgTQgTgSgaAAQgbAAgTASQgSATAAAaIAAEeQgHABgKAFQgVAKgRAQQg3A0AABnQAAB5AqB9QApB5A/BLAlvlQICIAAAgnBfIAAinAingzIAACI");
	this.shape.setTransform(1.3,-57.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38,-120.7,76.1,123.3);


(lib.okaoka_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhBhGQB1ACAOCL");
	this.shape.setTransform(7.2,-13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AgEhcQATBsgSBN");
	this.shape_1.setTransform(1.1,-11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("AA8g7QgNCEhqgO");
	this.shape_2.setTransform(-5.5,-14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("AgbhGQA+AygIBb");
	this.shape_3.setTransform(3.4,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-13.2}}]}).to({state:[{t:this.shape,p:{y:-15.7}}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2,p:{y:-14.3}}]},3).to({state:[{t:this.shape_2,p:{y:-16.8}}]},3).to({state:[{t:this.shape_3}]},3).wait(3));

	// Calque 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("Ag1A9QBjAcAIiZ");
	this.shape_4.setTransform(-4.9,-13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AAXBSQASiBhDgi");
	this.shape_5.setTransform(3.3,-12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABPA4QhFh0hYAF");
	this.shape_6.setTransform(8.5,-14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("AgCBXQAMhygKg7");
	this.shape_7.setTransform(0.7,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{y:-13.8}}]}).to({state:[{t:this.shape_4,p:{y:-16.3}}]},3).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6,p:{y:-14.7}}]},3).to({state:[{t:this.shape_6,p:{y:-17.2}}]},3).to({state:[{t:this.shape_7}]},3).wait(3));

	// Calque 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("Ah0ADQB0AcB1gs");
	this.shape_8.setTransform(-0.1,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("Ah0AHQBugCB7gL");
	this.shape_9.setTransform(0.7,-22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ah5AIQB2AiB9g9");
	this.shape_10.setTransform(0.4,-25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1,1).p("AhrANQBrgjBsAP");
	this.shape_11.setTransform(0.2,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{y:-24.6}}]}).to({state:[{t:this.shape_8,p:{y:-27.1}}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10,p:{y:-25.7}}]},3).to({state:[{t:this.shape_10,p:{y:-28.2}}]},3).to({state:[{t:this.shape_11}]},3).wait(3));

	// Calque 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABGB/IhmAOQgZADgTgOQgUgQgEgZIgViTQgDgZAPgUQAQgUAYgDIBngOQAYgEAUAQQAUAOADAZIAUCUQAEAYgPAUQgPAUgZAEg");
	this.shape_12.setTransform(-1.7,-46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(3).to({y:-49.1},0).wait(3).to({y:-44.1},0).wait(3).to({y:-46.6},0).wait(3).to({y:-49.1},0).wait(3).to({y:-41.6},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-63.3,32.8,59.7);


(lib.jumping = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("Ah/iFQB5AmCYAOAAUgTIhGCCAiRCGQAqhLAyhi");
	this.shape.setTransform(-1.4,-13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAjCNIhngOQgZgDgPgTQgPgUADgZIATiUQADgZATgPQAVgPAYADIBnAOQAYACAQAVQAPASgDAZIgUCUQgCAZgUAPQgUAQgYgDg");
	this.shape_1.setTransform(3.9,-44.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.6,-61.1,37.2,63.6);


(lib.decor_run_intro_motion = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.298)").ss(5,1).p("EgosAJsQIwxaIwRaAQzJYQB6yfI4gjQKOghC6Tt");
	this.shape.setTransform(469.9,-79.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("EgkEAFAIAAEsINlAAIAAksAajFAIAAurIJiAAIAAOr");
	this.shape_1.setTransform(452.5,-32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("A4cAAMAxCAAAEAiIAAAMBJJAAAEhrQAAAMBFPAAA");
	this.shape_2.setTransform(465,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-224,-143.6,1378,176.1);


(lib.intro_run_motion_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mode Isolation
	this.instance = new lib.run_hand_simple_tap();
	this.instance.setTransform(-214.4,-88,0.045,0.045,0,0,0,0,-58.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({regY:-59.2,scaleX:0.45,scaleY:0.45},5).wait(11).to({regY:-58.9,scaleX:0.05,scaleY:0.05,x:-269.4},5).to({_off:true},1).wait(131));

	// Calque 6
	this.instance_1 = new lib.run_hand_simple_tap_hold();
	this.instance_1.setTransform(-229.6,-86.4,0.036,0.036,0,0,0,0,-55.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({regY:-56,scaleX:0.36,scaleY:0.36},4).wait(32).to({regY:-55.6,scaleX:0.04,scaleY:0.04},4).to({_off:true},1).wait(55));

	// Calque 2
	this.instance_2 = new lib.okaoka_run();
	this.instance_2.setTransform(-210.1,-10.9,1,1,0,0,0,0,-30.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("Ah1htQBuAHB9AIAhVBqIBVirIBkCv");
	this.shape.setTransform(-209.6,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAjCNIhngOQgZgDgPgTQgPgUADgZIATiUQADgZATgPQAVgPAYADIBnAOQAYACAQAVQAPASgDAZIgUCUQgCAZgUAPQgUAQgYgDg");
	this.shape_1.setTransform(-206.8,-26.8);

	this.instance_3 = new lib.jumping();
	this.instance_3.setTransform(-205.9,-11.6,1,1,0,0,0,0,-29.3);
	this.instance_3._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("Ah1hSQBugMB9gXAhVBxIBViqIBkCv");
	this.shape_2.setTransform(-209.6,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABmBpIhhAoQgXAKgWgJQgXgKgKgXIg7iKQgJgWAIgYQAMgXAWgIIBhgqQAVgKAXAJQAXAJAJAYIA6CKQALAWgKAXQgJAYgWAKg");
	this.shape_3.setTransform(-217.3,-26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape_1},{t:this.shape}]},40).to({state:[{t:this.instance_3}]},16).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},26).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},25).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},27).to({state:[{t:this.instance_2}]},27).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},40).wait(31).to({_off:false},0).to({_off:true},26).wait(41).to({_off:false,x:-30.9},0).wait(27).to({x:-210.1},27).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({guide:{path:[-205.7,-11.7,-200.1,-102.8,-199.6,-11.7]}},14).to({_off:true},1).wait(41).to({_off:false,x:-210,y:-11.4},0).to({guide:{path:[-209.9,-11.5,-189.6,-110.2,-114.5,-111.3,-39.4,-112.4,-31,-11]}},25).to({_off:true},1).wait(55));

	// Calque 3
	this.instance_4 = new lib.decor_run_intro_motion();
	this.instance_4.setTransform(-70.4,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-392.9},40).wait(16).to({x:-762.9},41).wait(41).to({x:-1022.9},27).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-294.4,-121.8,1378,176.1);


// stage content:



(lib.intro_run_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choice_0:192});

	// timeline functions:
	this.frame_189 = function() {
		this.gotoAndPlay(1);//utilities.pop_up_motion_callback();
	}
	this.frame_198 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(189).call(this.frame_189).wait(9).call(this.frame_198).wait(1));

	// Calque 4
	this.instance = new lib.intro_run_motion_1("synched",6,false);
	this.instance.setTransform(289,104,1,1,0,0,0,9,-37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(197).to({startPosition:192},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137.2,119.4,1378,176.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;