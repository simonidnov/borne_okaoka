(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 400,
	fps: 40,
	color: "#FFCC00",
	manifest: []
};



// symbols:



(lib.dot = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAJAAAIAHQAHAHAAAJQAAAJgHAIQgIAHgJAAQgJAAgHgHg");
	this.shape.setTransform(2.5,2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.9,4.9);


(lib.runner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhKAkQB6AmAbh2");
	this.shape.setTransform(-10.3,-9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AgkBTQCQheiFhH");
	this.shape_1.setTransform(-0.6,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("ABHA7QgGiBiHAO");
	this.shape_2.setTransform(4.3,-10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("ABVBEQgahniQgf");
	this.shape_3.setTransform(5.8,-9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AgRBaQAkhugChF");
	this.shape_4.setTransform(-4.6,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AhKAkQB5AmAch2");
	this.shape_5.setTransform(-10.3,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).wait(3));

	// Calque 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AhKg1QB9ANAYBe");
	this.shape_6.setTransform(4.7,-8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AgQhmQAmBpgFBk");
	this.shape_7.setTransform(-1.5,-2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AA5g1QgBB7hwgS");
	this.shape_8.setTransform(-8.6,-10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("ABMg0QgkCZhzhE");
	this.shape_9.setTransform(-10.5,-11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AgihGQCEA1h0BY");
	this.shape_10.setTransform(0.7,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{y:-8.1}}]}).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_6,p:{y:-7.2}}]},3).wait(3));

	// Calque 4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AiTgYQA+ALBMANQBKALBTAO");
	this.shape_11.setTransform(-1.9,-22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AiSgGQBJgBBIAGQBFADBPAG");
	this.shape_12.setTransform(-1.7,-24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AiTgYQA+ALBMANQBKAMBTAN");
	this.shape_13.setTransform(-1.9,-24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{y:-22}}]}).to({state:[{t:this.shape_11,p:{y:-21}}]},3).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_11,p:{y:-19.1}}]},3).to({state:[{t:this.shape_11,p:{y:-21}}]},3).wait(3));

	// Calque 1
	this.instance = new lib.dot();
	this.instance.setTransform(17.7,-16.4,0.002,0.002);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("AAjCMIhmgMQgYgDgQgTQgPgTADgZIASiVQACgYAUgQQAUgPAYADIBmAMQAZADAQATQAPAUgDAYIgSCVQgDAZgTAPQgUAPgZgDg");
	this.shape_14.setTransform(1.8,-44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14,p:{x:1.8,y:-44}},{t:this.instance,p:{y:-16.4}}]}).to({state:[{t:this.shape_14,p:{x:0.5,y:-42.2}},{t:this.instance,p:{y:-18.6}}]},3).to({state:[{t:this.shape_14,p:{x:1.8,y:-46.2}},{t:this.instance,p:{y:-18.6}}]},3).to({state:[{t:this.shape_14,p:{x:1.8,y:-47.1}},{t:this.instance,p:{y:-19.5}}]},3).to({state:[{t:this.shape_14,p:{x:1.8,y:-39.9}},{t:this.instance,p:{y:-16.4}}]},3).to({state:[{t:this.shape_14,p:{x:1.8,y:-43.1}},{t:this.instance,p:{y:-15.5}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-60.6,54.1,60.5);


(lib.running = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AgwAAIBhAA");
	this.shape.setTransform(0,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AiFAAIELAA");
	this.shape_1.setTransform(0.4,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("AjZAAIGzAA");
	this.shape_2.setTransform(0.8,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("AktAAIJbAA");
	this.shape_3.setTransform(1.1,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1,1).p("AmBAAIMDAA");
	this.shape_4.setTransform(1.5,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1,1).p("AnVAAIOrAA");
	this.shape_5.setTransform(1.9,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1,1).p("AopAAIRTAA");
	this.shape_6.setTransform(2.2,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ap+AAIT9AA");
	this.shape_7.setTransform(2.6,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1,1).p("ArSAAIWlAA");
	this.shape_8.setTransform(3,10.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1,1).p("AsmAAIZNAA");
	this.shape_9.setTransform(3.3,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1,1).p("At6AAIb1AA");
	this.shape_10.setTransform(3.7,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1,1).p("AvPAAIefAA");
	this.shape_11.setTransform(4.1,10.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1,1).p("AwjAAMAhHAAA");
	this.shape_12.setTransform(4.4,10.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ax3AAMAjvAAA");
	this.shape_13.setTransform(4.8,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},28).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},167).wait(45));

	// Calque 5
	this.instance = new lib.dot();
	this.instance.setTransform(18.5,-28.5,1,1,0,0,0,2.5,2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(7).to({_off:true},1).wait(217));

	// Calque 4
	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(18.5,-20.5,1,1,0,0,0,2.5,2.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({regX:0,regY:0,scaleX:0,scaleY:0,x:18.4,y:-20.6},5).to({_off:true},1).wait(219));

	// Calque 12
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("AhvAAIDfAA");
	this.shape_14.setTransform(-0.6,-24.2);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(28).to({_off:false},0).wait(5).to({_off:true},1).wait(219));

	// Calque 11
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("Ag9BbIB7i1");
	this.shape_15.setTransform(-5.7,-11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("Ag/BSQBPhDAwhg");
	this.shape_16.setTransform(-6.5,-11.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AhBBJQBggrAihm");
	this.shape_17.setTransform(-7.3,-11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AhCBAQBygUAUhs");
	this.shape_18.setTransform(-8.1,-11.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AhFA3QCEAEAGhy");
	this.shape_19.setTransform(-8.9,-11.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("AhGAsQCWAcgJh4");
	this.shape_20.setTransform(-9.8,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15}]},28).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(219));

	// Calque 10
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AgxhaIBjC1");
	this.shape_21.setTransform(5.6,-11.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("Ag0hWQBABIApBl");
	this.shape_22.setTransform(5.3,-10.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("Ag3hTQBQA1AfBy");
	this.shape_23.setTransform(5,-10.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("Ag6hQQBgAiAVB/");
	this.shape_24.setTransform(4.6,-10);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("Ag9hMQBvAPAMCK");
	this.shape_25.setTransform(4.3,-9.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AhBhIQCAgFADCX");
	this.shape_26.setTransform(4,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},28).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[]},1).wait(219));

	// Calque 8
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AA0CHIhnAAQgZAAgSgRQgRgSAAgZIAAiVQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAg");
	this.shape_27.setTransform(-0.6,-47.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AhvhKQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAIhnAAQgZAAgSgRQgRgSAAgZg");
	this.shape_28.setTransform(-0.6,-47.7);
	this.shape_28._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},28).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[]},1).wait(219));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(29).to({_off:false},0).wait(3).to({_off:true},1).wait(220));

	// Calque 9
	this.instance_2 = new lib.dot();
	this.instance_2.setTransform(18.5,-20.5,1,1,0,0,0,2.5,2.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AiiE9QgMgHAAgPQAAgGADgGIBnigQACgDAAgDQAAgHgFgFQgFgFgGAAIhFAAQgKAAgHgHQgGgHAAgKQAAgKAGgIQAHgHAKAAIDdAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgHAHgKAAIhHAAIBcC0QADAGAAAHQAAAOgMAHQgJAFgKgDQgJgDgFgIIhMiZIhmCcQgFAIgKADIgGABQgHAAgFgDgACFAzQgHgHAAgKQAAgKAHgIQAIgHAKAAQAKAAAIAHQAGAIABAKQgBAKgGAHQgIAHgKAAQgKAAgIgHgAhhgBQggAAgXgXQgXgXABghIAAihQgBggAXgXQAXgXAgAAIBxAAQAhAAAWAXQAXAXAAAgIAAChQAAAhgXAXQgWAXghAAgAh0kEQgKALAAAOIAACVQAAAPAKAKQAKALAPAAIBlAAQAPAAAKgLQALgKAAgPIAAiVQAAgOgLgLQgKgKgPAAIhlAAQgPAAgKAKg");
	this.shape_29.setTransform(3.3,-32.1);

	this.instance_3 = new lib.runner("synched",0);
	this.instance_3.setTransform(-0.5,-31.6,1,1,0,0,0,-1.2,-29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.instance_2}]}).to({state:[]},28).to({state:[{t:this.instance_3}]},6).to({state:[]},174).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-64.1,35.2,64.2);


// stage content:



(lib.running_motion_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:80});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_80 = function() {
		window['navigation'].intro_motion_stopped();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80).call(this.frame_80).wait(128));

	// Calque 1
	this.instance = new lib.running("synched",0);
	this.instance.setTransform(439.7,286.9,3.173,3.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(844.2,283.4,111.7,203.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;