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



(lib.head = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AA0CHIhnAAQgZAAgSgRQgRgSAAgZIAAiVQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAg");
	this.shape.setTransform(0,-13.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-29.6,27.5,32.2);


(lib.foot = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AhvBbIByi1IBtC1");
	this.shape.setTransform(0,-9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-20.7,27.5,23.3);


(lib.dot = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAJAAAIAHQAHAHAAAJQAAAJgHAIQgIAHgJAAQgJAAgHgHg");
	this.shape.setTransform(2.5,2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.9,4.9);


(lib.bar = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhvAAIDfAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-2.5,27.5,5);


(lib.running = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 5
	this.instance = new lib.dot();
	this.instance.setTransform(18.5,-28.5,1,1,0,0,0,2.5,2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({x:28.6,y:-53.7},4).to({x:31.5,y:-61.3},20).to({x:3.4,y:-28.5},6).wait(26).to({x:39,y:-53.7},5).to({x:50.4,y:-61.3},16).to({x:-0.6,y:-28.5},7).wait(5).to({y:-26.6},3).wait(20).to({x:39,y:-53.7},6).to({x:50.4,y:-61.3},13).to({x:18.5,y:-28.5},7).to({_off:true},1).wait(113));

	// Calque 4
	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(18.5,-20.5,1,1,0,0,0,2.5,2.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({x:19.2,y:-77.4},4).to({x:21.1,y:-82.1},18).to({x:-4.1,y:-28.5},6).wait(28).to({x:-20.5,y:-77.4},5).to({x:-24,y:-83.2},16).to({x:-0.6,y:-28.5},7).wait(5).to({y:-26.6},3).wait(20).to({x:25.2,y:-69.5},6).to({x:41.6,y:-83.2},12).to({x:18.5,y:-20.5},7).to({_off:true},2).wait(113));

	// Calque 12
	this.instance_2 = new lib.bar();
	this.instance_2.setTransform(-0.6,-24.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({rotation:-21.2,x:-1.2,y:-45.3},4).to({y:-50},16).to({scaleX:0.39,rotation:0,x:-0.6,y:-20.4},6).wait(30).to({scaleX:1,rotation:-21.2,x:-1.2,y:-45.3},5).to({rotation:23.8,y:-50},18).to({scaleX:0.39,rotation:0,x:-0.6,y:-32.1},7).wait(3).to({y:-30.2},3).to({rotation:15},3).wait(17).to({scaleX:1,rotation:-21.2,x:-1.2,y:-45.3},6).to({rotation:23.8,y:-50},8).to({rotation:0,x:-0.6,y:-24.2},7).to({_off:true},6).wait(113));

	// Calque 10
	this.instance_3 = new lib.foot();
	this.instance_3.setTransform(-0.6,-12.1,1,1,0,0,0,0,-10.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({regY:-10.3,rotation:-105,x:-34,y:-66.5},4).to({rotation:-150,x:-37.7,y:-71.3},21).to({regY:-10.2,rotation:0,x:-0.6,y:-45.1},6).to({rotation:15,x:1.9,y:-48.9},3).to({rotation:0,x:-0.6,y:-45.1},5).wait(17).to({regX:0.1,rotation:135,x:38.3,y:-17.7},5).to({regY:-10.3,rotation:156.8,x:36.1,y:-14.8},22).to({regX:0,regY:-10.2,rotation:90,x:19.7,y:-25.4},7).wait(22).to({regY:-10.3,rotation:255,x:40.8,y:-9.8},6).to({rotation:321.8,x:9.5,y:-4.3},6).to({regY:-10.2,rotation:360,x:-0.6,y:-12.1},7).to({_off:true},8).wait(113));

	// Calque 8
	this.instance_4 = new lib.head();
	this.instance_4.setTransform(-0.6,-47.7,1,1,0,0,0,0,-13.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({rotation:-30,x:-1.6,y:-65.5},4).to({rotation:-45,y:-68.4},14).to({rotation:0,x:-0.6,y:-25.8},6).wait(32).to({rotation:-30,x:-1.6,y:-65.5},5).to({regX:-0.1,rotation:30,x:4.1,y:-68.4},20).to({regX:0,rotation:0,x:-0.6,y:-25.8},7).wait(24).to({rotation:-30,x:-1.6,y:-65.5},6).to({regX:-0.1,rotation:30,x:4.1,y:-68.4},10).to({regX:0,rotation:0,x:-0.6,y:-47.7},7).to({_off:true},4).wait(113));

	// Calque 9
	this.instance_5 = new lib.dot();
	this.instance_5.setTransform(18.5,-20.5,1,1,0,0,0,2.5,2.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiE9QgMgHAAgPQAAgGADgGIBnigQACgDAAgDQAAgHgFgFQgFgFgGAAIhFAAQgKAAgHgHQgGgHAAgKQAAgKAGgIQAHgHAKAAIDdAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgHAHgKAAIhHAAIBcC0QADAGAAAHQAAAOgMAHQgJAFgKgDQgJgDgFgIIhMiZIhmCcQgFAIgKADIgGABQgHAAgFgDgACFAzQgHgHAAgKQAAgKAHgIQAIgHAKAAQAKAAAIAHQAGAIABAKQgBAKgGAHQgIAHgKAAQgKAAgIgHgAhhgBQggAAgXgXQgXgXABghIAAihQgBggAXgXQAXgXAgAAIBxAAQAhAAAWAXQAXAXAAAgIAAChQAAAhgXAXQgWAXghAAgAh0kEQgKALAAAOIAACVQAAAPAKAKQAKALAPAAIBlAAQAPAAAKgLQALgKAAgPIAAiVQAAgOgLgLQgKgKgPAAIhlAAQgPAAgKAKg");
	this.shape.setTransform(3.3,-32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5}]}).to({state:[]},28).to({state:[{t:this.shape},{t:this.instance_5}]},139).to({state:[]},41).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-64.1,35.2,64.2);


// stage content:



(lib.creator_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:168});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_159 = function() {
		window['navigation'].intro_motion_stopped();
	}
	this.frame_168 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(159).call(this.frame_159).wait(9).call(this.frame_168).wait(40));

	// Calque 1
	this.instance = new lib.running("synched",0);
	this.instance.setTransform(439.7,286.9,3.173,3.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(844.2,283.4,111.7,203.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;