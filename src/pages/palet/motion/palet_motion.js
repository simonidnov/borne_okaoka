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


(lib.running = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 7
	this.instance = new lib.dot();
	this.instance.setTransform(0.4,-19.7,2.204,2.204,0,0,0,2.5,2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).to({scaleX:3.81,scaleY:3.81,x:0.5},6).to({scaleX:4.57,scaleY:4.57,x:0.6,y:-19.6},6).to({scaleX:2.44,scaleY:2.44,x:0.5,y:-19.8},5).wait(16).to({x:3.9,y:-23.4},0).to({x:36.4,y:-53},8).to({x:37.3,y:-51.1},2).to({x:33.9,y:-52.4},2).to({x:-30.4,y:-24.6},13).wait(1).to({x:-19},0).to({x:67.4,y:-23.5},7).to({x:76},6).wait(76));

	// Calque 5
	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(18.5,-28.5,1,1,0,0,0,2.5,2.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).wait(9).to({scaleX:3,scaleY:3,x:2.2,y:-47},3).to({scaleX:4.5,scaleY:4.5,x:-22.3,y:-44.1},5).to({scaleX:3.15,scaleY:3.15,x:-41.4,y:-23},5).wait(11).to({x:-26.3,y:-11},4).to({x:-11.4,y:-14.2},4).wait(14).to({x:-32.2},4).to({x:-51.2,y:-25.2},5).to({x:-43.6},2).wait(90));

	// Calque 4
	this.instance_2 = new lib.dot();
	this.instance_2.setTransform(18.5,-20.5,1,1,0,0,0,2.5,2.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(9).to({scaleX:3,scaleY:3,x:22.7,y:-32.3},3).to({scaleX:4.5,scaleY:4.5,x:30.3,y:-37.3},5).to({scaleX:3.15,scaleY:3.15,x:45.1,y:-21.6},5).wait(16).to({x:50.1,y:-42.1},7).wait(4).to({x:49.2,y:-44},2).wait(18).to({x:44.1,y:-25.2},9).wait(78));

	// Calque 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhvAAIDfAA");
	this.shape.setTransform(-0.6,-24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AhcAAIC5AA");
	this.shape_1.setTransform(-0.4,-24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AhIAAICRAA");
	this.shape_2.setTransform(-0.1,-24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("Ag1AAIBrAA");
	this.shape_3.setTransform(0.1,-24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AghAAIBDAA");
	this.shape_4.setTransform(0.4,-24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AgeAAQAfgFAeAH");
	this.shape_5.setTransform(0.4,-23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AgcABQAfgMAaAQ");
	this.shape_6.setTransform(0.4,-23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AgZABQAegTAVAZ");
	this.shape_7.setTransform(0.4,-22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AgWACQAcgaARAh");
	this.shape_8.setTransform(0.4,-21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},28).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(147));

	// Calque 11
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("Ag9BbIB7i1");
	this.shape_9.setTransform(-5.7,-11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AgwBIIBhiQ");
	this.shape_10.setTransform(-4.4,-12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AgkA2IBJhr");
	this.shape_11.setTransform(-3.2,-14.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AgYAkIAxhH");
	this.shape_12.setTransform(-1.9,-16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AgLARIAXgh");
	this.shape_13.setTransform(-0.7,-18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("AgLAHQAHgFAQgI");
	this.shape_14.setTransform(-0.8,-18.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AgJgCQAAAGATgC");
	this.shape_15.setTransform(-0.9,-18.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AgIgMQgGATAYAG");
	this.shape_16.setTransform(-1,-19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AgGgWQgLAgAbAO");
	this.shape_17.setTransform(-1.2,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},28).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).wait(147));

	// Calque 10
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AgxhaIBjC1");
	this.shape_18.setTransform(5.6,-11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AgnhHIBPCP");
	this.shape_19.setTransform(4.6,-12.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("Agdg0IA7Bq");
	this.shape_20.setTransform(3.6,-14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AgTgiIAnBF");
	this.shape_21.setTransform(2.6,-16.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AgJgPIATAf");
	this.shape_22.setTransform(1.6,-18.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AgJgHQALAIAJAH");
	this.shape_23.setTransform(1.7,-18.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("AgKAAQAPACAGgB");
	this.shape_24.setTransform(1.6,-18.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AgKAGQARgCAEgJ");
	this.shape_25.setTransform(1.7,-18.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AALgNQgBASgUAJ");
	this.shape_26.setTransform(1.6,-18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},28).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[]},1).wait(147));

	// Calque 8
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AA0CHIhnAAQgZAAgSgRQgRgSAAgZIAAiVQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAg");
	this.shape_27.setTransform(-0.6,-47.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AhvhKQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAIhnAAQgZAAgSgRQgRgSAAgZg");
	this.shape_28.setTransform(-0.6,-47.7);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("Ai3huQAAgZASgSQASgRAYAAID3AAQAZAAARARQASASAAAZIAADdQAAAZgSASQgRARgZAAIj3AAQgYAAgSgRQgSgSAAgZg");
	this.shape_29.setTransform(-0.6,-44.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("Aj+iSQAAgYASgSQARgSAZAAIGFAAQAZAAARASQASASAAAYIAAElQAAAZgSARQgRASgZAAImFAAQgZAAgRgSQgSgRAAgZg");
	this.shape_30.setTransform(-0.6,-40.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AlGi1QAAgZASgSQASgRAYAAIIVAAQAZAAARARQASASAAAZIAAFsQAAAZgSARQgRASgZAAIoVAAQgYAAgSgSQgSgRAAgZg");
	this.shape_31.setTransform(-0.6,-37);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AmNjZQAAgZASgSQASgRAYAAIKjAAQAZAAARARQASASAAAZIAAGzQAAAZgSARQgRASgZAAIqjAAQgYAAgSgSQgSgRAAgZg");
	this.shape_32.setTransform(-0.6,-33.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AnUj9QAAgYARgSQATgSAYAAIMxAAQAZAAASASQARASAAAYIAAH7QAAAZgRARQgSASgZAAIsxAAQgYAAgTgSQgRgRAAgZg");
	this.shape_33.setTransform(-0.6,-29.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AockhQAAgYASgSQASgSAYAAIPBAAQAZAAARASQASASAAAYIAAJCQAAAZgSASQgRASgZAAIvBAAQgYAAgSgSQgSgSAAgZg");
	this.shape_34.setTransform(-0.6,-26.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("AIoGBIxPAAQgZAAgSgRQgRgSAAgZIAAqJQAAgZARgSQASgRAZAAIRPAAQAZAAASARQARASAAAZIAAKJQAAAZgRASQgSARgZAAg");
	this.shape_35.setTransform(-0.6,-22.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AHsGBIxPAAQgZAAgSgRQgRgSAAgZIAAqJQAAgZARgSQASgRAZAAIRPAAQAZAAARARQASASAAAZQDwE6jwFPQAAAZgSASQgRARgZAAg");
	this.shape_36.setTransform(5.4,-22.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AqolEQAAgZARgSQASgRAZAAIRPAAQAZAAARARQASASAZAxQDiEijiE1QgaAzgRASQgRARgZAAIxPAAQgZAAgSgRQgRgSAAgZg");
	this.shape_37.setTransform(6.3,-22.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AqxlEQAAgZASgSQASgRAYAAIRPAAQAZAAASARQARASAzBJQDTEKjUEbQgzBNgRASQgRARgZAAIxPAAQgYAAgSgRQgSgSAAgZg");
	this.shape_38.setTransform(7.1,-22.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("Aq6lEQAAgZARgSQASgRAZAAIRPAAQAZAAARARQASASBMBhQDEDyjFEBQhNBngRASQgQARgZAAIxPAAQgZAAgSgRQgRgSAAgZg");
	this.shape_39.setTransform(8.1,-22.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("ArDlEQAAgZASgSQASgRAYAAIRPAAQAZAAASARQARASBmB5QC1DZi3DoQhmCBgRASQgQARgZAAIxPAAQgYAAgSgRQgSgSAAgZg");
	this.shape_40.setTransform(8.9,-22.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("ArMlEQAAgZASgSQASgRAYAAIRPAAQAZAAASARQARASB/CRQCnDBipDOQiACbgQASQgQARgZAAIxPAAQgYAAgSgRQgSgSAAgZg");
	this.shape_41.setTransform(9.8,-22.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("AG2GBIxPAAQgYAAgSgRQgSgSAAgZIAAqJQAAgZASgSQASgRAYAAIRPAAQAZAAASARQARASCYCpQCYCpiaC0QiaC1gPASQgQARgZAAg");
	this.shape_42.setTransform(10.7,-22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},28).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},58).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(29).to({_off:false},0).wait(6).to({_off:true},1).wait(148));

	// Calque 9
	this.instance_3 = new lib.dot();
	this.instance_3.setTransform(18.5,-20.5,1,1,0,0,0,2.5,2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AiiE9QgMgHAAgPQAAgGADgGIBnigQACgDAAgDQAAgHgFgFQgFgFgGAAIhFAAQgKAAgHgHQgGgHAAgKQAAgKAGgIQAHgHAKAAIDdAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgHAHgKAAIhHAAIBcC0QADAGAAAHQAAAOgMAHQgJAFgKgDQgJgDgFgIIhMiZIhmCcQgFAIgKADIgGABQgHAAgFgDgACFAzQgHgHAAgKQAAgKAHgIQAIgHAKAAQAKAAAIAHQAGAIABAKQgBAKgGAHQgIAHgKAAQgKAAgIgHgAhhgBQggAAgXgXQgXgXABghIAAihQgBggAXgXQAXgXAgAAIBxAAQAhAAAWAXQAXAXAAAgIAAChQAAAhgXAXQgWAXghAAgAh0kEQgKALAAAOIAACVQAAAPAKAKQAKALAPAAIBlAAQAPAAAKgLQALgKAAgPIAAiVQAAgOgLgLQgKgKgPAAIhlAAQgPAAgKAKg");
	this.shape_43.setTransform(3.3,-32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.instance_3}]}).to({state:[]},28).wait(156));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-64.1,35.2,64.2);


// stage content:



(lib.palet_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:113});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_101 = function() {
		window['navigation'].intro_motion_stopped();
	}
	this.frame_113 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(101).call(this.frame_101).wait(12).call(this.frame_113).wait(95));

	// Calque 1
	this.instance = new lib.running("synched",0);
	this.instance.setTransform(439.7,286.9,3.173,3.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(844.2,283.4,111.7,203.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;