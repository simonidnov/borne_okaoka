(function (lib, img, cjs, ss) {

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
	this.shape.graphics.f("#FFFFFF").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.number_motion_intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AAAgSIAAAl");
	this.shape.setTransform(14.9,-12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AAAAcIAAg3");
	this.shape_1.setTransform(14.9,-12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AAAAlIAAhJ");
	this.shape_2.setTransform(14.9,-11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AAAAuIAAhb");
	this.shape_3.setTransform(14.9,-10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AAAA3IAAht");
	this.shape_4.setTransform(14.9,-9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AAABAIAAh/");
	this.shape_5.setTransform(14.9,-8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AAAhJIAACT");
	this.shape_6.setTransform(14.9,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},41).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},19).wait(52));

	// Calque 15
	this.instance = new lib.dot();
	this.instance.setTransform(18.4,-28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AgQAAIAhAA");
	this.shape_7.setTransform(16.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AgdAAIA7AA");
	this.shape_8.setTransform(17.9,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AgqAAIBVAA");
	this.shape_9.setTransform(19.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("Ag3AAIBvAA");
	this.shape_10.setTransform(20.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AhEAAICJAA");
	this.shape_11.setTransform(21.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AhRAAICjAA");
	this.shape_12.setTransform(23.2,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AheAAIC9AA");
	this.shape_13.setTransform(24.5,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("AhrAAIDXAA");
	this.shape_14.setTransform(25.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},28).to({state:[]},1).to({state:[{t:this.shape_7}]},18).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},12).wait(52));

	// Calque 2
	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(18.4,-20.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AAZAAIgxAA");
	this.shape_15.setTransform(34.8,-14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AgnAAIBPAA");
	this.shape_16.setTransform(33.4,-14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("Ag1AAIBrAA");
	this.shape_17.setTransform(31.9,-14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AhDAAICHAA");
	this.shape_18.setTransform(30.5,-14.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AhSAAIClAA");
	this.shape_19.setTransform(29,-14.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("AhgAAIDBAA");
	this.shape_20.setTransform(27.6,-14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("ABwAAIjfAA");
	this.shape_21.setTransform(26.1,-14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},28).to({state:[]},1).to({state:[{t:this.shape_15}]},6).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},25).wait(52));

	// Calque 12
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AhvAAIDfAA");
	this.shape_22.setTransform(-0.6,-24.2);
	this.shape_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(28).to({_off:false},0).wait(1).to({x:3.5,y:-24.7},0).wait(1).to({x:7.6,y:-25.1},0).wait(1).to({x:11.7,y:-25.6},0).wait(1).to({x:15.8,y:-26.1},0).wait(1).to({x:20,y:-26.5},0).wait(1).to({x:24.1,y:-27},0).wait(1).to({x:26},0).to({_off:true},31).wait(52));

	// Calque 11
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("Ag9BbIB7i1");
	this.shape_23.setTransform(-5.7,-11.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("Ag1BiIBrjD");
	this.shape_24.setTransform(-4.5,-11.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AguBpIBdjR");
	this.shape_25.setTransform(-3.4,-11.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AgmBwIBNjf");
	this.shape_26.setTransform(-2.2,-12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AgfB3IA/jt");
	this.shape_27.setTransform(-1.1,-12.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AgXB+IAvj7");
	this.shape_28.setTransform(0.1,-13);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AgQCFIAhkJ");
	this.shape_29.setTransform(1.2,-13.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("AAACFIAAkJ");
	this.shape_30.setTransform(-0.5,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23}]},28).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[]},31).wait(52));

	// Calque 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AgxhaIBjC1");
	this.shape_31.setTransform(5.6,-11.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AgrhTIBXCn");
	this.shape_32.setTransform(10.8,-12.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AglhNIBLCb");
	this.shape_33.setTransform(16.1,-14.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AgghGIBBCN");
	this.shape_34.setTransform(21.3,-16.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("Agag/IA1B/");
	this.shape_35.setTransform(26.5,-18.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AgUg5IApBz");
	this.shape_36.setTransform(31.8,-19.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AgOgyIAdBl");
	this.shape_37.setTransform(37,-21.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AAAg6IAAB1");
	this.shape_38.setTransform(37.4,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31}]},28).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[]},31).wait(52));

	// Calque 8
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("AA0CHIhnAAQgZAAgSgRQgRgSAAgZIAAiVQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAg");
	this.shape_39.setTransform(-0.6,-47.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("AhvhKQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAIhnAAQgZAAgSgRQgRgSAAgZg");
	this.shape_40.setTransform(-5,-42);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("AhvhKQAAgZARgSQASgRAZAAIBnAAQAZAAARARQASASAAAZIAACVQAAAZgSASQgRARgZAAIhnAAQgZAAgSgRQgRgSAAgZg");
	this.shape_41.setTransform(-22.4,-19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39,p:{x:-0.6,y:-47.7}}]},28).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_39,p:{x:-26.7,y:-13.4}}]},1).to({state:[{t:this.shape_39,p:{x:-26.7,y:-13.4}}]},1).to({state:[]},31).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(29).to({_off:false},0).wait(1).to({x:-9.3,y:-36.3},0).wait(1).to({x:-13.7,y:-30.5},0).wait(1).to({x:-18,y:-24.8},0).to({_off:true},1).wait(85));

	// Calque 9
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AiiE9QgMgHAAgPQAAgGADgGIBnigQACgDAAgDQAAgHgFgFQgFgFgGAAIhFAAQgKAAgHgHQgGgHAAgKQAAgKAGgIQAHgHAKAAIDdAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgHAHgKAAIhHAAIBcC0QADAGAAAHQAAAOgMAHQgJAFgKgDQgJgDgFgIIhMiZIhmCcQgFAIgKADIgGABQgHAAgFgDgACFCEQgHgIAAgKQAAgKAHgHQAIgHAKAAQAKAAAIAHQAGAHABAKQgBAKgGAIQgIAHgKAAQgKAAgIgHgACFAzQgHgHAAgKQAAgKAHgIQAIgHAKAAQAKAAAIAHQAGAIABAKQgBAKgGAHQgIAHgKAAQgKAAgIgHgAhhgBQggAAgXgXQgXgXABghIAAihQgBggAXgXQAXgXAgAAIBxAAQAhAAAWAXQAXAXAAAgIAAChQAAAhgXAXQgWAXghAAgAh0kEQgKALAAAOIAACVQAAAPAKAKQAKALAPAAIBlAAQAPAAAKgLQALgKAAgPIAAiVQAAgOgLgLQgKgKgPAAIhlAAQgPAAgKAKg");
	this.shape_42.setTransform(3.3,-32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).to({_off:true},28).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-64.1,35.2,64.2);


// stage content:



(lib.number_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:59});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_34 = function() {
		window['navigation'].intro_motion_stopped();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(25).call(this.frame_59).wait(7));

	// Calque 1
	this.instance = new lib.number_motion_intro("synched",0);
	this.instance.setTransform(439.7,286.9,3.173,3.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(844.2,283.4,111.7,203.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;