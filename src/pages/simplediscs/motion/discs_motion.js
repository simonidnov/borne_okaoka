(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 400,
	fps: 40,
	color: "#999999",
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


(lib.bar_3 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AgmAAIBNAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.4,-2.5,12.9,5);


(lib.bar_2 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhBAAICDAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.1,-2.5,18.3,5);


(lib.bar_1 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AheAAIC9AA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-2.5,24.1,5);


(lib.discs_motion_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.instance = new lib.bar_3();
	this.instance.setTransform(0.5,-31.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).to({y:-15.1},4).to({rotation:-15,y:-16.3},3).to({y:-17.4},8).to({rotation:-4.8,y:-15.8},9).to({rotation:0,y:-15.1},1).to({_off:true},91).wait(20));

	// Calque 7
	this.instance_1 = new lib.bar_2();
	this.instance_1.setTransform(0.5,-29.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).to({y:-10.2},5).to({rotation:6.5,y:-11},3).to({y:-12.2},4).to({rotation:0,y:-10.2},4).to({_off:true},112).wait(20));

	// Calque 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AA0CHIhnAAQgZAAgSgRQgRgSAAgZIAAiVQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAg");
	this.shape.setTransform(-0.6,-47.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AhvhKQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAIhnAAQgZAAgSgRQgRgSAAgZg");
	this.shape_1.setTransform(-0.6,-47.7);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AhthDQAAgXARgSQAQgRAYgBQA2gDAsAAQAKgBAKAEQALAEAKAIQARARABAXQABARABASQADAyAAA2QAAAbgRARQgQARgXACQgHAAgHAAQgpACgsABQgKAAgKgEQgLgEgKgIQgRgQgBgXQgBgSgBgTQgDgzAAg3g");
	this.shape_2.setTransform(-0.5,-47.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("Ahqg7QAAgXAPgRQAPgRAWgCQA1gGAogBQAKAAAJADQAMAEAJAHQARAPADAWQABAQACAQQAFAwAAA0QAAAagPAQQgPARgWADQgGAAgHABQgoAEgoABQgKAAgKgDQgKgEgJgHQgRgPgDgVQgCgRgCgRQgFgxAAg0g");
	this.shape_3.setTransform(-0.5,-46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("Ahog0QAAgVAOgRQAOgRAUgEQAygIAmgBQAKAAAJACQALADAJAHQARAOAEATQADAPACAQQAIAtAAAxQAAAZgOARQgOAQgVAEQgGABgFAAQgmAHgmABQgKAAgJgCQgKgEgJgGQgRgNgEgUQgDgPgDgQQgIguAAgzg");
	this.shape_4.setTransform(-0.4,-45.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AhmgsQAAgVANgQQANgRASgFQAvgKAkgCQAKAAAIACQALACAJAGQARAMAFASQAEAOAEAOQAKAsAAAuQAAAYgNAQQgMAQgUAGQgFAAgFABQgkAJglABQgJABgJgDQgKgCgIgGQgRgMgGgSQgDgOgEgPQgLgsAAgvg");
	this.shape_5.setTransform(-0.3,-45.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AhjgkQAAgUALgQQALgRASgGQArgOAjgBQAJgBAIACQAKACAJAGQAQAKAHAQQAFANAEANQANAoAAAtQAAAXgLAQQgMAQgSAGQgFABgEABQghALgjACQgJAAgJgCQgJgCgIgFQgRgKgHgQQgFgNgEgOQgNgqAAgsg");
	this.shape_6.setTransform(-0.2,-44.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AhhgdQAAgTAJgPQALgQAQgIQAogQAhgCQAIgBAJABQAJACAIAFQARAIAJAPQAFALAFANQAQAlAAArQAAAVgLAQQgKAQgQAHQgFACgEABQgfAMggADQgJAAgIgBQgJgCgIgEQgRgIgIgPQgGgLgGgOQgPgmAAgrg");
	this.shape_7.setTransform(-0.1,-43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AhfgVQAAgSAJgPQAJgQAPgJQAkgTAggDQAIAAAIABQAJABAIAEQAQAHAKANQAGAKAGALQATAjAAApQAAAUgJAPQgKAQgPAJQgDABgEACQgcAOgfADQgJABgIgCQgIgBgIgDQgQgHgKgNQgHgKgGgMQgTgkAAgog");
	this.shape_8.setTransform(0,-43.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AhcgOQAAgRAHgPQAIgPANgKQAhgWAfgDQAHgBAHABQAJAAAIAEQAQAFALALQAIAJAGALQAVAfAAAnQAAATgIAPQgIAPgNALQgEACgDABQgZARggADQgGABgHgBQgIgBgIgDQgQgFgLgLQgIgJgHgLQgVggAAgng");
	this.shape_9.setTransform(0.1,-42.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AhagGQAAgQAGgOQAHgQALgLQAegYAegEQAGgBAHAAQAIABAIACQAQAEAMAKQAJAHAIAJQAXAdAAAlQAAATgGAOQgHAPgNALQgCACgDACQgXATgeADQgHABgGAAQgIAAgHgCQgPgEgNgKQgKgHgIgKQgXgdAAglg");
	this.shape_10.setTransform(0.2,-41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("ABZAAQAAAkgaAbQgaAaglAAQgkAAgagaQgagbAAgkQAAgjAagaQAagaAkAAQAlAAAaAaQAaAaAAAjg");
	this.shape_11.setTransform(0.3,-41.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AhYAAQAAgdAagWQAagXAkAAQAlAAAaAXQAaAWAAAdQAAAfgaAWQgaAWglAAQgkAAgagWQgagWAAgfg");
	this.shape_12.setTransform(0.3,-41.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AhYAAQAAgYAagSQAagSAkAAQAlAAAaASQAaASAAAYQAAAZgaASQgaASglAAQgkAAgagSQgagSAAgZg");
	this.shape_13.setTransform(0.3,-41.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("AhYAAQAAgSAagOQAagOAkAAQAlAAAaAOQAaAOAAASQAAATgaAOQgaAOglAAQgkAAgagOQgagOAAgTg");
	this.shape_14.setTransform(0.3,-41.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AhYAAQAAgNAagKQAagJAkAAQAlAAAaAJQAaAKAAANQAAANgaAKQgaAKglAAQgkAAgagKQgagKAAgNg");
	this.shape_15.setTransform(0.3,-41.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AhYAAQAAgHAagGQAagGAkAAQAlAAAaAGQAaAGAAAHQAAAHgaAHQgaAGglAAQgkAAgagGQgagHAAgHg");
	this.shape_16.setTransform(0.3,-41.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("ABZAAQAAACgaACQgaACglAAQgkAAgagCQgagCAAgCQAAgBAagCQAagCAkAAQAlAAAaACQAaACAAABg");
	this.shape_17.setTransform(0.3,-41.2);

	this.instance_2 = new lib.bar_1();
	this.instance_2.setTransform(0.5,-41.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},28).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},6).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},123).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(29).to({_off:false},0).wait(9).to({_off:true},1).wait(189));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(62).to({_off:false},0).wait(5).to({y:-27.4},0).to({y:-5.3},4).to({rotation:-15,y:-9.1},3).to({y:-11.1},6).to({rotation:0,y:-12.4},2).wait(1).to({y:-7.8},0).to({y:-5.2},2).to({_off:true},123).wait(20));

	// Calque 5
	this.instance_3 = new lib.dot();
	this.instance_3.setTransform(18.5,-28.5,1,1,0,0,0,2.5,2.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).wait(3).to({regX:0,regY:0,scaleX:0,scaleY:0,x:18.4},5).to({_off:true},1).wait(191));

	// Calque 4
	this.instance_4 = new lib.dot();
	this.instance_4.setTransform(18.5,-20.5,1,1,0,0,0,2.5,2.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({regX:0,regY:0,scaleX:0,scaleY:0,x:18.4,y:-20.6},5).to({_off:true},4).wait(191));

	// Calque 12
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AhvAAIDfAA");
	this.shape_18.setTransform(-0.6,-24.2);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(28).to({_off:false},0).wait(12).to({x:-0.5,y:-21.8},0).wait(1).to({x:-0.4,y:-19.4},0).wait(1).to({x:-0.2,y:-17},0).wait(1).to({x:-0.1,y:-14.7},0).wait(1).to({x:0,y:-12.3},0).wait(1).to({x:0.1,y:-9.9},0).wait(1).to({x:0.2,y:-7.6},0).wait(1).to({x:0.4,y:-5.2},0).wait(1).to({x:0.5,y:-2.8},0).wait(1).to({x:0.6,y:-0.4},0).to({_off:true},159).wait(20));

	// Calque 11
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("Ag9BbIB7i1");
	this.shape_19.setTransform(-5.7,-11.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("AA4haQg4Bag3Bb");
	this.shape_20.setTransform(-5.1,-11);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AAzhaQgzBagyBb");
	this.shape_21.setTransform(-4.5,-11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AAthaQgtBagsBb");
	this.shape_22.setTransform(-4,-11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AAnhbQgnBbgmBc");
	this.shape_23.setTransform(-3.4,-11);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("AAihbQgiBbghBc");
	this.shape_24.setTransform(-2.8,-11);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AAchbQgcBbgbBc");
	this.shape_25.setTransform(-2.3,-10.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AAWhbQgWBbgVBc");
	this.shape_26.setTransform(-1.7,-10.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AARhbQgRBbgQBd");
	this.shape_27.setTransform(-1.1,-10.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AALhbQgLBbgKBd");
	this.shape_28.setTransform(-0.6,-10.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AAFhcQgFBcgEBd");
	this.shape_29.setTransform(0,-10.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("AAABdIAAi5");
	this.shape_30.setTransform(0.6,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},28).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[]},169).wait(20));

	// Calque 10
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AgxhaIBjC1");
	this.shape_31.setTransform(5.6,-11.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AgshZQAsBZAtBa");
	this.shape_32.setTransform(5.1,-11.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AgohZQAoBZApBa");
	this.shape_33.setTransform(4.7,-11.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AgjhZQAjBZAkBa");
	this.shape_34.setTransform(4.2,-11.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("AgehYQAeBYAgBZ");
	this.shape_35.setTransform(3.8,-11.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AgahYQAaBYAbBZ");
	this.shape_36.setTransform(3.3,-11.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AgVhYQAVBYAWBY");
	this.shape_37.setTransform(2.8,-11.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AgRhXQARBXASBY");
	this.shape_38.setTransform(2.4,-11.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("AgMhXQAMBXANBY");
	this.shape_39.setTransform(1.9,-11.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("AgIhWQAIBWAJBX");
	this.shape_40.setTransform(1.5,-11.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("AgDhWQADBWAEBX");
	this.shape_41.setTransform(1,-11.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("AAAhWIAACt");
	this.shape_42.setTransform(0.6,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31}]},28).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[]},169).wait(20));

	// Calque 9
	this.instance_5 = new lib.dot();
	this.instance_5.setTransform(18.5,-20.5,1,1,0,0,0,2.5,2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AiiE9QgMgHAAgPQAAgGADgGIBnigQACgDAAgDQAAgHgFgFQgFgFgGAAIhFAAQgKAAgHgHQgGgHAAgKQAAgKAGgIQAHgHAKAAIDdAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgHAHgKAAIhHAAIBcC0QADAGAAAHQAAAOgMAHQgJAFgKgDQgJgDgFgIIhMiZIhmCcQgFAIgKADIgGABQgHAAgFgDgACFAzQgHgHAAgKQAAgKAHgIQAIgHAKAAQAKAAAIAHQAGAIABAKQgBAKgGAHQgIAHgKAAQgKAAgIgHgAhhgBQggAAgXgXQgXgXABghIAAihQgBggAXgXQAXgXAgAAIBxAAQAhAAAWAXQAXAXAAAgIAAChQAAAhgXAXQgWAXghAAgAh0kEQgKALAAAOIAACVQAAAPAKAKQAKALAPAAIBlAAQAPAAAKgLQALgKAAgPIAAiVQAAgOgLgLQgKgKgPAAIhlAAQgPAAgKAKg");
	this.shape_43.setTransform(3.3,-32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.instance_5}]}).to({state:[]},28).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-64.1,35.2,64.2);


// stage content:



(lib.discs_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:122});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_99 = function() {
		if(typeof window['navigation'] !== "undefined"){
			window['navigation'].intro_motion_stopped();
		}
	}
	this.frame_122 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(23).call(this.frame_122).wait(86));

	// Calque 1
	this.instance = new lib.discs_motion_1("synched",0,false);
	this.instance.setTransform(465.7,286.9,3.173,3.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({startPosition:61},0).to({scaleX:7.14,scaleY:7.14,startPosition:78},17).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(870.2,283.4,111.7,203.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;