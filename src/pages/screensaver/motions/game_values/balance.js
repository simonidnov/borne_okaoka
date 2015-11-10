(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 600,
	fps: 60,
	color: "#7D868B",
	manifest: []
};



// symbols:



(lib.okaokaplayhead = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhvlRIDfAAQCgAAAACgIAAFjQAACgigAAIjfAAQigAAAAigIAAljQAAigCgAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.7,-40.3,67.5,80.6);


(lib.okaokaplaydot = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAsQgSgTAAgZQAAgXASgUQASgRAZgBQAZABATARQASAUAAAXQAAAZgSATQgTASgZAAQgZAAgSgSg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-6.2,12.5,12.4);


(lib.head = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("ADxGAIl9AvQg8AHgxgmQgxglgHg9IhAoHQgIg9AmgxQAngwA8gHIF9gwQA8gHAxAmQAxAmAHA9IBAIGQAIA9gmAxQgmAwg9AIg");
	this.shape.setTransform(0,0,1,1,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.9,-53.2,103.1,106.5);


(lib.equilibriumhead = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAG5QirAAh8hvQh8hxgUisQgQi2BwiMQB0iLC0gVIAvgDQCrgBB8B1QCABvAQCpIAAADQAUCzh0CMQh4CUi0APgAjPhxQh4ANAACJQAQB8BcBUQBgBVB7AAIAfgFQB8gLBQhZIgUAFIggAAQhwAAhEhQQgyg9gIhQQgWh6huAAIgUAAgAgPiYQA6A7AMBYQAcCGB4gPQBMgIAgg9QAUgrgIgjQgMh8hchUQhchTh/AAIgjAAQhwALhYBZIAQAAIAfgCQBrAABCBKgAjTBRQg8gTAMg+QAIgcAcgNQAYgMAcAJQAcAHAMAYQAMAWgIAcQgPAxgpAAQgNAAgPgFgACnA5QgcgHgMgdQgMgVAIgcQAUhBBAAVQAcAHAMAdQAMAXgIAbQgPAwgpAAQgNAAgPgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.2,-44.2,88.5,88.4);


(lib.equilibriumdot = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9AAQABgYATgRQARgTAYgBQAZABARATQATARABAYQAAA+g+AAQg9AAAAg+g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-6.2,12.4,12.4);


(lib.equilibre_planche = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("A4IAAMAwRAAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161,-6.5,322,13);


(lib.walking_equilibrium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 6
	this.instance = new lib.okaokaplaydot();
	this.instance.setTransform(59.5,40.5,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:59.7,y:21.6},2).to({rotation:-30,x:62.4,y:5.6},4).to({rotation:-15,x:57.1,y:21.5},3).to({rotation:0,x:54.2,y:38},2).to({rotation:9.2,x:52.4,y:34.9},3).to({rotation:19.4,x:50.1,y:30.7},4).to({rotation:4.4,x:54,y:35.4},3).to({rotation:0,x:59.5,y:40.5},2).wait(1));

	// Calque 5
	this.instance_1 = new lib.okaokaplaydot();
	this.instance_1.setTransform(59.5,18.2,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-15,x:54,y:0.1},2).to({rotation:-30,x:51.3,y:-13.6},4).to({rotation:-15,y:0.1},3).to({rotation:0,x:54.2,y:15.9},2).to({rotation:9.2,x:55.9,y:13.1},3).to({rotation:19.4,x:57.5,y:9.9},4).to({rotation:4.4,x:55.7,y:13.3},3).to({rotation:0,x:59.5,y:18.2},2).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("Al2AAILtAA");
	this.shape.setTransform(-0.4,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(16,1).p("Al0AXILpgt");
	this.shape_1.setTransform(-0.4,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(16,1).p("AlzAvILnhd");
	this.shape_2.setTransform(-0.4,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(16,1).p("AlwA7ILhh1");
	this.shape_3.setTransform(-0.4,19.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(16,1).p("AluBIILdiP");
	this.shape_4.setTransform(-0.4,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(16,1).p("AlrBUILXin");
	this.shape_5.setTransform(-0.4,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(16,1).p("AlpBhILTjB");
	this.shape_6.setTransform(-0.4,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(16,1).p("AlsBPILZid");
	this.shape_7.setTransform(-0.8,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(16,1).p("AlwA9ILhh5");
	this.shape_8.setTransform(-1.1,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(16,1).p("AlzArILnhV");
	this.shape_9.setTransform(-1.4,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(16,1).p("Al0AVILpgp");
	this.shape_10.setTransform(-0.9,24.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(16,1).p("Al1gPILrAf");
	this.shape_11.setTransform(-0.6,23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(16,1).p("Al0gfILpA/");
	this.shape_12.setTransform(-0.8,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(16,1).p("AlzgvILnBf");
	this.shape_13.setTransform(-0.9,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(16,1).p("AlygxILlBj");
	this.shape_14.setTransform(-1.1,15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(16,1).p("AlygzILlBm");
	this.shape_15.setTransform(-1.2,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(16,1).p("Alyg0ILlBp");
	this.shape_16.setTransform(-1.3,12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(16,1).p("Alxg2ILjBt");
	this.shape_17.setTransform(-1.4,10.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(16,1).p("Alxg3ILjBv");
	this.shape_18.setTransform(-0.8,14.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(16,1).p("Alxg4ILjBw");
	this.shape_19.setTransform(-0.4,17.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(16,1).p("AlzgbILnA3");
	this.shape_20.setTransform(-0.4,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:27.1}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape,p:{y:27.1}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17,p:{x:-1.4,y:10.6}}]},1).to({state:[{t:this.shape_17,p:{x:-1.1,y:12.7}}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape,p:{y:32.1}}]},1).wait(1));

	// Calque 2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(16,1).p("Agfk5IA/J0");
	this.shape_21.setTransform(-3.7,58.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(16,1).p("AiEkGQDTEGA2EH");
	this.shape_22.setTransform(6.4,50.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(16,1).p("AjpjTQGHDTBNDU");
	this.shape_23.setTransform(16.6,43.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(16,1).p("AjyjMQGHDSBeDH");
	this.shape_24.setTransform(17.4,41.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(16,1).p("Aj6jFQGHDSBuC5");
	this.shape_25.setTransform(18.2,39.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(16,1).p("AkCi/QGHDTB+Cs");
	this.shape_26.setTransform(19,37.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(16,1).p("AkKi3QGHDSCOCe");
	this.shape_27.setTransform(19.8,35.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(16,1).p("Aj/jBQGHDSB4Cx");
	this.shape_28.setTransform(18.7,38.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(16,1).p("Aj0jKQGHDSBiDD");
	this.shape_29.setTransform(17.6,40.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(16,1).p("AAqkbQAcEKh0Eu");
	this.shape_30.setTransform(-11.2,55.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(16,1).p("ACEj7QALGqkSBN");
	this.shape_31.setTransform(-20.2,52.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(16,1).p("AChjYQA3Hdl/gx");
	this.shape_32.setTransform(-23.1,38.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(16,1).p("AikDBQFrBBglnK");
	this.shape_33.setTransform(-23.2,36);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(16,1).p("AijCtQFZBTgTm5");
	this.shape_34.setTransform(-23.3,33.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(16,1).p("AiiCYQFFBkgBmn");
	this.shape_35.setTransform(-23.2,30.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(16,1).p("ACiidQgRGVkyh1");
	this.shape_36.setTransform(-23.2,27.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(16,1).p("AiiCgQFMBegHmt");
	this.shape_37.setTransform(-23.3,31.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(16,1).p("AikC6QFlBIgenF");
	this.shape_38.setTransform(-23.3,35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(16,1).p("AhzD8QEVhTg2mk");
	this.shape_39.setTransform(-17.8,49.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(16,1).p("AA1khQA3FsitDX");
	this.shape_40.setTransform(-12.3,61.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).wait(1));

	// Calque 3
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(16,1).p("AA1jqIhpHV");
	this.shape_41.setTransform(-10.6,67.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(16,1).p("AiPC6QDghqA/kJ");
	this.shape_42.setTransform(-12.5,56.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(16,1).p("ADqiJQhIEomLgW");
	this.shape_43.setTransform(-14.5,46.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(16,1).p("AjoB9QGIAqBJko");
	this.shape_44.setTransform(-14.4,44.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(16,1).p("AjnBvQGGBABJko");
	this.shape_45.setTransform(-14.2,42.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(16,1).p("AjlBhQGDBVBIko");
	this.shape_46.setTransform(-14.1,40.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(16,1).p("ADlhsQhIEomBhr");
	this.shape_47.setTransform(-14,38.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(16,1).p("AjmBlQGEBOBJko");
	this.shape_48.setTransform(-14.2,40.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(16,1).p("AjnB4QGHAyBIko");
	this.shape_49.setTransform(-14.3,43.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(16,1).p("AgjjJQCPC0iPDf");
	this.shape_50.setTransform(-1.6,64.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(16,1).p("Ah4jHQDUBLAdFE");
	this.shape_51.setTransform(6.9,64);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(16,1).p("AjIiQQEpAPBoES");
	this.shape_52.setTransform(14.9,48.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(16,1).p("AjMiDQEpAPBwD4");
	this.shape_53.setTransform(15.4,46);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(16,1).p("AjRh1QEqAPB5Dc");
	this.shape_54.setTransform(15.8,43.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(16,1).p("AjVhpQEpAPCCDE");
	this.shape_55.setTransform(16.3,40.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(16,1).p("AjZhbQEpAPCKCo");
	this.shape_56.setTransform(16.7,38.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(16,1).p("AjUhtQEpAPB/DM");
	this.shape_57.setTransform(16.1,41.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(16,1).p("AjOh+QEpAPB0Du");
	this.shape_58.setTransform(15.5,45.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(16,1).p("AiHitQDHBpBIDy");
	this.shape_59.setTransform(8.4,58.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(16,1).p("AhGjJQBlDBAoDS");
	this.shape_60.setTransform(1.9,69.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41}]}).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).wait(1));

	// Calque 4
	this.instance_2 = new lib.head();
	this.instance_2.setTransform(-1.7,0.3,1,1,0,0,0,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-9,x:-6.7,y:-3.7},2).to({regX:-0.1,rotation:-8.7,x:-10.7,y:-4.7},4).to({rotation:-5.2,y:-3.7},3).to({regX:0,rotation:0,x:-1.7,y:0.3},2).to({rotation:6.7,x:1.8,y:-6.2},3).to({rotation:8.7,y:-10.7},4).to({rotation:7.9,x:2.8,y:-6.2},3).to({rotation:0,x:-1.7,y:5.3},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-94.4,112.3,193.5);


(lib.equilibirum_static = function() {
	this.initialize();

	// Calque 5
	this.instance = new lib.equilibriumhead();
	this.instance.setTransform(-5,-37.6);

	// Calque 4
	this.instance_1 = new lib.equilibriumdot();
	this.instance_1.setTransform(43.1,9.6);

	// Calque 3
	this.instance_2 = new lib.equilibriumdot();
	this.instance_2.setTransform(43.1,29.6);

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfAAII/AA");
	this.shape.setTransform(-5.2,19.6);

	// Calque 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACOEfIkbo9");
	this.shape_1.setTransform(9,48.3);

	// Calque 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(13,1,1).p("AigD0IFAnn");
	this.shape_2.setTransform(-17.4,51.9);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.3,-81.8,98.6,165.5);


(lib.equilibirum_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 5
	this.instance = new lib.equilibriumhead();
	this.instance.setTransform(-0.5,7.1,1,1,0,0,0,0,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.2,x:-15.5,y:1.6},5).to({rotation:8,x:-17,y:-8.5},8).to({rotation:0,x:-9,y:1.6},5).to({y:11.6},5).to({x:-19.5,y:4.6},3).to({regX:0.1,rotation:7.7,x:-18,y:-8.9},8).to({regX:0,rotation:0,x:-9,y:6.6},5).to({x:-0.5,y:7.1},4).wait(1));

	// Calque 4
	this.instance_1 = new lib.equilibriumdot();
	this.instance_1.setTransform(27,53,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:60,x:41.8,y:30.9},5).to({rotation:-30,x:43.7,y:-38.1},8).to({x:39.1,y:-20.7},5).to({rotation:60,x:26.8,y:40.6},5).to({rotation:-15,x:28,y:4.4},3).to({x:34.5,y:-24.6},8).to({rotation:45,x:26.4,y:35},5).to({rotation:75,x:27,y:53},4).wait(1));

	// Calque 3
	this.instance_2 = new lib.equilibriumdot();
	this.instance_2.setTransform(7.6,58.2,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:60,x:24.5,y:40.9},5).to({rotation:-30,x:53.6,y:-20.8},8).to({x:49.1,y:-3.3},5).to({rotation:60,x:9.5,y:50.6},5).to({rotation:-15,x:33.2,y:23.7},3).to({x:39.7,y:-5.3},8).to({rotation:45,x:12.3,y:49.2},5).to({rotation:75,x:7.6,y:58.2},4).wait(1));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkDgDQCPiJC8AgQC+BKgCCV");
	this.shape.setTransform(-12.4,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkUgQQCLhdDJALQDFAvAQCX");
	this.shape_1.setTransform(-11.6,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(13,1,1).p("AklgbQCHgyDWgJQDNATAhCa");
	this.shape_2.setTransform(-10.8,26.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ak2glQCDgHDjgdQDUgIAzCc");
	this.shape_3.setTransform(-10,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlHgtQB/AlDwgyQDbgjBFCe");
	this.shape_4.setTransform(-9.2,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlYgyQB7BPD9hFQDig+BXCg");
	this.shape_5.setTransform(-8.4,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(13,1,1).p("AllguQCKBpD9hEQDig/BiB3");
	this.shape_6.setTransform(-8.6,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlygqQCZCDD9hGQDig9BtBO");
	this.shape_7.setTransform(-8.8,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(13,1,1).p("AmAg2QCoCeD+hHQDig8B5Ak");
	this.shape_8.setTransform(-9,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(13,1,1).p("AmNhCQC3C4D9hHQDjg8CEgD");
	this.shape_9.setTransform(-9.2,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(13,1,1).p("AmahOQDGDSD9hHQDig9CQgr");
	this.shape_10.setTransform(-9.4,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(13,1,1).p("AmnhbQDVDtD9hHQDig+CbhU");
	this.shape_11.setTransform(-9.6,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(13,1,1).p("Am0hnQDkEHD9hHQDig+Cmh9");
	this.shape_12.setTransform(-9.7,-3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(13,1,1).p("AnBhvQDzEhD9hGQDig/Cxim");
	this.shape_13.setTransform(-9.9,-6.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(13,1,1).p("Am6hkQDvEQD6hAQDlg5Cniq");
	this.shape_14.setTransform(-10.3,-3.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(13,1,1).p("Am0haQDsEAD3g6QDog0Ceiu");
	this.shape_15.setTransform(-10.6,-0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(13,1,1).p("AmthPQDpDuD0gyQDrgwCTix");
	this.shape_16.setTransform(-10.9,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(13,1,1).p("AmmhEQDlDdDygsQDtgrCJi1");
	this.shape_17.setTransform(-11.3,4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(13,1,1).p("Amgg6QDiDMDvglQDwgmCAi5");
	this.shape_18.setTransform(-11.6,7.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(13,1,1).p("AmGgpQDTCRDhgdQDigdB3h9");
	this.shape_19.setTransform(-12.9,11.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(13,1,1).p("AltgXQDFBVDSgUQDUgVBwhC");
	this.shape_20.setTransform(-14.3,16.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlTgGQC2AaDDgMQDFgLBpgI");
	this.shape_21.setTransform(-15.6,20.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ak6ALQCogdC1gEQC2gEBiAx");
	this.shape_22.setTransform(-17,24.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkgAcQCZhZCmAFQCoAFBaBs");
	this.shape_23.setTransform(-18.3,29.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqANQCegyCmAEQCoAFBpA+");
	this.shape_24.setTransform(-17.8,25.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ak0AAQCjgOCmAFQCoAEB4AQ");
	this.shape_25.setTransform(-17.3,21.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ak+gNQCoAWCmAFQCoAECHgb");
	this.shape_26.setTransform(-16.8,17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlFgXQCrAqCnAFQCoAECRgt");
	this.shape_27.setTransform(-16.5,14.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlNggQCwA9CmAEQCoAFCdg/");
	this.shape_28.setTransform(-16.1,12.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlUgqQCzBQCmAFQCpAECnhR");
	this.shape_29.setTransform(-15.8,10.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(13,1,1).p("Albg0QC3BkCmAFQCoAECyhj");
	this.shape_30.setTransform(-15.5,8.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(13,1,1).p("Alig+QC7B4CnAEQCnAFC8h2");
	this.shape_31.setTransform(-15.1,5.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlphHQC+CKCoAFQCmAEDHiH");
	this.shape_32.setTransform(-14.8,3.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlwhRQDCCeCoAFQCmAEDRia");
	this.shape_33.setTransform(-14.4,1.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(13,1,1).p("Al4hbQDGCyCoAEQCmAFDdis");
	this.shape_34.setTransform(-14.1,-0.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlmhAQC9B8CoAEQCmAFDChz");
	this.shape_35.setTransform(-14.9,4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlVglQC0BGCnAEQCoAFCog6");
	this.shape_36.setTransform(-15.8,8.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlDgLQCrAQCmAEQCoAFCOgD");
	this.shape_37.setTransform(-16.6,13.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkyACQCigiCnAEQCoAFB0A0");
	this.shape_38.setTransform(-17.5,19.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkgAcQCZhZCmAFQCoAEBaBt");
	this.shape_39.setTransform(-18.3,24.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkZATQCXhkCrAMQCuAVBDB3");
	this.shape_40.setTransform(-16.9,25.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkSALQCUhwCxASQCzAnAtCC");
	this.shape_41.setTransform(-15.4,27.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkKADQCRh8C3AaQC4A4AVCL");
	this.shape_42.setTransform(-13.9,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Calque 7
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABhDKQlehnEZks");
	this.shape_43.setTransform(-8,39.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUDAQj+kHGLh4");
	this.shape_44.setTransform(-17.3,38.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgVDAQj9kGGKh5");
	this.shape_45.setTransform(-17.3,38.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhXDWQiIkYFdiS");
	this.shape_46.setTransform(-17.8,38.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiNDrQgUkpEwis");
	this.shape_47.setTransform(-19.6,38.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiUDmQgSkoE8ij");
	this.shape_48.setTransform(-20.3,36.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(13,1,1).p("AibDhQgPkoFHiZ");
	this.shape_49.setTransform(-21,34.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(13,1,1).p("AijDcQgMknFTiQ");
	this.shape_50.setTransform(-21.7,33);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiqDXQgJkmFeiH");
	this.shape_51.setTransform(-22.4,31.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(13,1,1).p("AixDSQgHkmFrh9");
	this.shape_52.setTransform(-23.1,29.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai4DNQgEkmF2hz");
	this.shape_53.setTransform(-23.8,28);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjADIQgBklGChq");
	this.shape_54.setTransform(-24.5,26.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjHDDQACkkGNhh");
	this.shape_55.setTransform(-25.2,24.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai0DPQACk1Fnho");
	this.shape_56.setTransform(-25.2,29.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(13,1,1).p("AihDbQAClGFAhv");
	this.shape_57.setTransform(-25.1,35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiNDmQAClVEZh3");
	this.shape_58.setTransform(-25,40.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah6DyQADlmDyh9");
	this.shape_59.setTransform(-25,45.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhmD+QACl2DLiF");
	this.shape_60.setTransform(-24.9,50.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQERQhflrCii2");
	this.shape_61.setTransform(-19.7,52.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(13,1,1).p("AA6EQQi5lGBwjZ");
	this.shape_62.setTransform(-12.8,52.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgVkJQhnDKC3FJ");
	this.shape_63.setTransform(-12.2,51.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgckDQhdC6C1FN");
	this.shape_64.setTransform(-11.6,51.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(13,1,1).p("AA9D+QizlQBUir");
	this.shape_65.setTransform(-11,50.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhIj9QgjCwC5FL");
	this.shape_66.setTransform(-7.2,50.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ahmj9QAOC1C/FG");
	this.shape_67.setTransform(-4.1,50.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACDD+QjFlBhAi6");
	this.shape_68.setTransform(-1.4,50.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiLjzQBBDADWEo");
	this.shape_69.setTransform(-0.5,47.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiUjqQBCDFDnEQ");
	this.shape_70.setTransform(0.5,45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(13,1,1).p("AidjgQBDDLD4D2");
	this.shape_71.setTransform(1.4,42.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(13,1,1).p("AimjXQBEDREJDe");
	this.shape_72.setTransform(2.3,39.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(13,1,1).p("AivjNQBFDUEaDH");
	this.shape_73.setTransform(3.2,36.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai4jDQBGDaErCt");
	this.shape_74.setTransform(4.1,33.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjBi5QBIDfE7CU");
	this.shape_75.setTransform(5,30.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(13,1,1).p("ADLCxQlMh8hJjl");
	this.shape_76.setTransform(5.9,27.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aiqi2QAEDuFRB/");
	this.shape_77.setTransform(2.6,30.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiEi8QhCD3FWCC");
	this.shape_78.setTransform(-1.2,33.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhVjCQiIEAFaCF");
	this.shape_79.setTransform(-5.8,35.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgijIQjNEJFeCI");
	this.shape_80.setTransform(-10.9,38.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABkDPQliiLEQkS");
	this.shape_81.setTransform(-16.4,40.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAVjNQkTEZFhCC");
	this.shape_82.setTransform(-14.3,40.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAXjLQkVEfFhB5");
	this.shape_83.setTransform(-12.2,40.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAZjLQkWEmFfBx");
	this.shape_84.setTransform(-10.1,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43,p:{regX:0,regY:0,rotation:0,x:-8,y:39.8}}]}).to({state:[{t:this.shape_43,p:{regX:2.9,regY:-20.3,rotation:15,x:-5.1,y:19.5}}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_43,p:{regX:0,regY:0,rotation:0,x:-8,y:39.8}}]},1).wait(1));

	// Calque 6
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(13,1,1).p("AA8C4Qi2ieBfjR");
	this.shape_85.setTransform(-15.1,57.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag9jAQgxDkC2Cd");
	this.shape_86.setTransform(-11,55.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhZjJQgDD3C2Cc");
	this.shape_87.setTransform(-7.5,54);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhwjSQArEKC3Ca");
	this.shape_88.setTransform(-4.4,52);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiIjaQBaEcC3CZ");
	this.shape_89.setTransform(-1.5,50);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACgDkQi3iYiIkv");
	this.shape_90.setTransform(1.5,48);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(13,1,1).p("AigjaQB5EwDICF");
	this.shape_91.setTransform(1.7,45.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(13,1,1).p("AihjQQBqExDZBw");
	this.shape_92.setTransform(1.8,43.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(13,1,1).p("AijjHQBbEyDsBd");
	this.shape_93.setTransform(1.9,41.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aiki+QBNEzD8BK");
	this.shape_94.setTransform(2,39.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aili0QA9E0EOA1");
	this.shape_95.setTransform(2.2,37.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(13,1,1).p("AimirQAuE2EfAh");
	this.shape_96.setTransform(2.3,34.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(13,1,1).p("AioiiQAgE3ExAN");
	this.shape_97.setTransform(2.4,32.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACqCZQlCAHgRk4");
	this.shape_98.setTransform(2.5,30.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(13,1,1).p("AibiaQgREyFJAD");
	this.shape_99.setTransform(1.1,32.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiKicQg0EsFQAN");
	this.shape_100.setTransform(-0.5,34.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah4ieQhWEnFYAW");
	this.shape_101.setTransform(-2.4,37.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhjigQh5EhFfAg");
	this.shape_102.setTransform(-4.4,39.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(13,1,1).p("AB9CjQllgqCakb");
	this.shape_103.setTransform(-6.5,41.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAoDGQiHi8BfjP");
	this.shape_104.setTransform(-14.5,45);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQDIQgvjBBfjP");
	this.shape_105.setTransform(-17.8,45.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgpDNQAUjqA/iw");
	this.shape_106.setTransform(-18.7,45.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(13,1,1).p("AglDUQg2j/CQio");
	this.shape_107.setTransform(-19.9,46.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgaDaQh/kTDhig");
	this.shape_108.setTransform(-21.8,47);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhADNQhzkxEWhp");
	this.shape_109.setTransform(-24.4,45.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhmDBQhllPFJgy");
	this.shape_110.setTransform(-27.2,44.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiKC1QhYltF9AF");
	this.shape_111.setTransform(-30.1,43.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiXC0Qg4ltFvAH");
	this.shape_112.setTransform(-30.5,41.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(13,1,1).p("AijCzQgaluFiAJ");
	this.shape_113.setTransform(-31.1,39.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(13,1,1).p("AisCyQAFluFUAM");
	this.shape_114.setTransform(-31.9,37.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai1CxQAkluFHAN");
	this.shape_115.setTransform(-32.7,35.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai+CwQBDluE6AQ");
	this.shape_116.setTransform(-33.6,33.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjHCvQBiluEtAR");
	this.shape_117.setTransform(-34.5,31.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjPCuQCAluEfAU");
	this.shape_118.setTransform(-35.4,29.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjYCuQCflwESAX");
	this.shape_119.setTransform(-36.2,27.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjBDCQB+llEFge");
	this.shape_120.setTransform(-33.9,31.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiqDWQBclaD5hR");
	this.shape_121.setTransform(-31.6,35.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiTDqQA6lQDtiE");
	this.shape_122.setTransform(-29.3,39.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah8D/QAZlGDgi3");
	this.shape_123.setTransform(-27,43.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhlETQgJk6DUjs");
	this.shape_124.setTransform(-24.8,47.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgvEXQhBkqCykD");
	this.shape_125.setTransform(-19.9,47.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAOEbQh3kbCQka");
	this.shape_126.setTransform(-16,46.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAxEYQi8kcCtkT");
	this.shape_127.setTransform(-15.4,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85}]}).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_85}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-81.3,88.7,164.2);


(lib.equilibrium_movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 19
	this.instance = new lib.equilibriumhead();
	this.instance.setTransform(1759.2,-25.5,1,1,0,0,0,0,44.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(344).to({_off:false},0).to({rotation:-8.5},10).wait(23).to({x:1725.2,y:-55.5},7).to({rotation:-15.4,x:1720.2,y:-54.5},5).to({rotation:-8.5,x:1725.2,y:-55.5},5).to({rotation:-15.4,x:1720.2,y:-54.5},6).to({rotation:-8.5,x:1725.2,y:-55.5},6).to({x:1759.2,y:-25.5},6).wait(17).to({x:1725.2,y:-55.5},8).to({x:1685.2,y:-85.5},8).to({x:1675.2},8).to({x:1685.2},9).to({x:1675.2},8).to({x:1685.2},9).to({x:1675.2},14).to({x:1685.2},15).to({_off:true},2).wait(236));

	// Calque 18
	this.instance_1 = new lib.equilibriumdot();
	this.instance_1.setTransform(1807.3,-22.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(344).to({_off:false},0).wait(33).to({rotation:30,x:1776.3,y:-39.6},7).to({x:1774.3,y:-32.6},5).to({x:1776.3,y:-39.6},5).to({x:1774.3,y:-32.6},6).to({x:1776.3,y:-39.6},6).to({rotation:0,x:1807.3,y:-22.5},6).wait(17).to({rotation:30,x:1776.3,y:-39.6},8).to({rotation:-15,x:1732.7,y:-97.1},8).to({rotation:-45,x:1723.2,y:-109.5},8).to({rotation:-15,x:1732.7,y:-97.1},9).to({rotation:-45,x:1723.2,y:-109.5},8).to({rotation:-15,x:1732.7,y:-97.1},9).to({rotation:-45,x:1723.2,y:-109.5},14).to({rotation:-15,x:1732.7,y:-97.1},15).to({_off:true},2).wait(236));

	// Calque 17
	this.instance_2 = new lib.equilibriumdot();
	this.instance_2.setTransform(1807.3,-2.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(344).to({_off:false},0).wait(33).to({rotation:30,x:1766.3,y:-22.3},7).to({x:1764.3,y:-15.3},5).to({x:1766.3,y:-22.3},5).to({x:1764.3,y:-15.3},6).to({x:1766.3,y:-22.3},6).to({rotation:0,x:1807.3,y:-2.5},6).wait(17).to({rotation:30,x:1766.3,y:-22.3},8).to({rotation:-15,x:1737.9,y:-77.8},8).to({rotation:-45,x:1737.4,y:-95.4},8).to({rotation:-15,x:1737.9,y:-77.8},9).to({rotation:-45,x:1737.4,y:-95.4},8).to({rotation:-15,x:1737.9,y:-77.8},9).to({rotation:-45,x:1737.4,y:-95.4},14).to({rotation:-15,x:1737.9,y:-77.8},15).to({_off:true},2).wait(236));

	// Calque 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkeAAII9AA");
	this.shape.setTransform(1759,-12.5);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkhgBQEhgMEiAT");
	this.shape_1.setTransform(1754.4,-16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjgCQEggZEnAo");
	this.shape_2.setTransform(1749.7,-20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(13,1,1).p("AklgEQEgglErA8");
	this.shape_3.setTransform(1745.1,-24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngHQEggwEvBR");
	this.shape_4.setTransform(1740.4,-28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkpgJQEgg8EzBl");
	this.shape_5.setTransform(1735.8,-32.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(13,1,1).p("AksgLQEghIE4B6");
	this.shape_6.setTransform(1731.2,-37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(13,1,1).p("AktgNQEfhUE8CO");
	this.shape_7.setTransform(1726.5,-41.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkugEQEihvE8Cl");
	this.shape_8.setTransform(1726.6,-40.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwADQEliJE8C8");
	this.shape_9.setTransform(1726.7,-39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkxANQEmikE9DS");
	this.shape_10.setTransform(1726.8,-39);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkyAXQEojAE9Dp");
	this.shape_11.setTransform(1726.9,-38.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkzAgQEqjbE9EA");
	this.shape_12.setTransform(1727,-37.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkugFQEhhsE9Ci");
	this.shape_13.setTransform(1726.6,-40.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkvABQEjiAE8C0");
	this.shape_14.setTransform(1726.7,-39.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwAJQEliXE8DH");
	this.shape_15.setTransform(1726.8,-39.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkxAQQEnitE8Da");
	this.shape_16.setTransform(1726.9,-38.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkyAYQEojEE9Dt");
	this.shape_17.setTransform(1726.9,-38.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrgKQEghHE3B3");
	this.shape_18.setTransform(1731.9,-36.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkogIQEfg5EzBf");
	this.shape_19.setTransform(1737.4,-31.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmgGQEggqEtBG");
	this.shape_20.setTransform(1742.8,-26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkgDQEggcEoAu");
	this.shape_21.setTransform(1748.2,-22);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkhgBQEggOEjAW");
	this.shape_22.setTransform(1753.6,-17.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkhAAQEggLEjAQ");
	this.shape_23.setTransform(1755,-16.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkigCQEggVElAi");
	this.shape_24.setTransform(1750.9,-19.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkgEQEggfEpA0");
	this.shape_25.setTransform(1746.8,-23.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkogHQEgg1ExBY");
	this.shape_26.setTransform(1738.7,-30.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqgJQEghAE1Br");
	this.shape_27.setTransform(1734.6,-33.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(13,1,1).p("AksgLQEghKE5B8");
	this.shape_28.setTransform(1730.6,-37.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(13,1,1).p("AktgBQEihIE5Bo");
	this.shape_29.setTransform(1722.1,-45.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(13,1,1).p("AktAJQEkg6E3BD");
	this.shape_30.setTransform(1717.7,-49.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(13,1,1).p("AktAOQEmguE1Af");
	this.shape_31.setTransform(1713.3,-53.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(13,1,1).p("AksAVQEngiEygH");
	this.shape_32.setTransform(1708.9,-57.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(13,1,1).p("AksAiQEpgYEwgr");
	this.shape_33.setTransform(1704.5,-61.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(13,1,1).p("AksAuQEsgLEthQ");
	this.shape_34.setTransform(1700.1,-65.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrA7QErAAEsh1");
	this.shape_35.setTransform(1695.7,-70.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBIQEtAMEqib");
	this.shape_36.setTransform(1691.3,-74.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBNQEtAMEqim");
	this.shape_37.setTransform(1690.7,-75.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBSQEtANEqix");
	this.shape_38.setTransform(1690,-75.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBYQEtAMEqi7");
	this.shape_39.setTransform(1689.4,-76.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBdQEtAMEqjG");
	this.shape_40.setTransform(1688.8,-76.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBiQEtANEqjR");
	this.shape_41.setTransform(1688.2,-77.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBnQEtANEqjb");
	this.shape_42.setTransform(1687.5,-77.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBtQEtAMEqjm");
	this.shape_43.setTransform(1686.9,-78.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrByQEtANEqjx");
	this.shape_44.setTransform(1686.3,-79);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBtQEtANEqjn");
	this.shape_45.setTransform(1686.8,-78.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBpQEtAMEqjd");
	this.shape_46.setTransform(1687.4,-78);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBkQEtAMEqjU");
	this.shape_47.setTransform(1687.9,-77.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBfQEtANEqjL");
	this.shape_48.setTransform(1688.5,-77.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBbQEtAMEqjB");
	this.shape_49.setTransform(1689.1,-76.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBWQEtAMEqi4");
	this.shape_50.setTransform(1689.6,-76.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBRQEtANEqiv");
	this.shape_51.setTransform(1690.2,-75.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBMQEtANEqil");
	this.shape_52.setTransform(1690.7,-75.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBLQEtAMEqih");
	this.shape_53.setTransform(1690.9,-75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBOQEtAMEqin");
	this.shape_54.setTransform(1690.6,-75.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBRQEtAMEqit");
	this.shape_55.setTransform(1690.2,-75.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBUQEtAMEqi0");
	this.shape_56.setTransform(1689.8,-75.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBXQEtAMEqi6");
	this.shape_57.setTransform(1689.5,-76.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBaQEtAMEqjA");
	this.shape_58.setTransform(1689.1,-76.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBgQEtAMEqjM");
	this.shape_59.setTransform(1688.4,-77.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBjQEtAMEqjS");
	this.shape_60.setTransform(1688.1,-77.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBmQEtAMEqjY");
	this.shape_61.setTransform(1687.7,-77.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBpQEtANEqjf");
	this.shape_62.setTransform(1687.3,-78.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBsQEtANEqjl");
	this.shape_63.setTransform(1687,-78.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBvQEtANEqjr");
	this.shape_64.setTransform(1686.6,-78.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBqQEtAMEqjf");
	this.shape_65.setTransform(1687.3,-78.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBnQEtAMEqja");
	this.shape_66.setTransform(1687.6,-77.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBhQEtANEqjP");
	this.shape_67.setTransform(1688.3,-77.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBeQEtANEqjJ");
	this.shape_68.setTransform(1688.6,-77);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBbQEtANEqjD");
	this.shape_69.setTransform(1688.9,-76.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBZQEtAMEqi9");
	this.shape_70.setTransform(1689.3,-76.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBTQEtAMEqiy");
	this.shape_71.setTransform(1689.9,-75.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBQQEtANEqit");
	this.shape_72.setTransform(1690.3,-75.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBNQEtANEqin");
	this.shape_73.setTransform(1690.6,-75.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBKQEtANEqih");
	this.shape_74.setTransform(1690.9,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},344).to({state:[{t:this.shape}]},33).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63,p:{x:1687}}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63,p:{x:1686.9}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74,p:{x:1690.9}}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_74,p:{x:1691}}]},1).to({state:[]},1).wait(236));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(344).to({_off:false},0).wait(33).to({_off:true},1).wait(34).to({_off:false},0).wait(17).to({_off:true},1).wait(316));

	// Calque 15
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(13,1,1).p("AigD0IFAnn");
	this.shape_75.setTransform(1746.8,19.9);
	this.shape_75._off = true;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(13,1,1).p("AinDlQCMjyDDjX");
	this.shape_76.setTransform(1741.2,14.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiuDWQB3jxDmi6");
	this.shape_77.setTransform(1735.7,8.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai1DHQBhjwEKid");
	this.shape_78.setTransform(1730.1,2.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai8C4QBMjvEtiA");
	this.shape_79.setTransform(1724.5,-3.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjDCpQA3juFQhj");
	this.shape_80.setTransform(1718.9,-9.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjKCaQAhjuF0hF");
	this.shape_81.setTransform(1713.4,-14.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjSCLQANjsGXgp");
	this.shape_82.setTransform(1707.8,-20.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjRCiQAnj2F8hN");
	this.shape_83.setTransform(1707.9,-18.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjRC4QBAkAFjhv");
	this.shape_84.setTransform(1707.9,-16.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjQDPQBakJFHiU");
	this.shape_85.setTransform(1708,-13.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjQDlQB0kTEti2");
	this.shape_86.setTransform(1708,-11.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjPD8QCNkcESjb");
	this.shape_87.setTransform(1708.1,-9.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjRCeQAij1GBhG");
	this.shape_88.setTransform(1707.9,-18.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjRCxQA4j9Frhk");
	this.shape_89.setTransform(1707.9,-16.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjQDDQBNkEFUiB");
	this.shape_90.setTransform(1707.9,-15);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjQDWQBjkME+if");
	this.shape_91.setTransform(1708,-13.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjQDpQB4kUEpi9");
	this.shape_92.setTransform(1708,-11.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjJCdQAljuFuhL");
	this.shape_93.setTransform(1714.3,-13.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjBCuQA+jvFFhs");
	this.shape_94.setTransform(1720.8,-7.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai5DAQBXjwEbiP");
	this.shape_95.setTransform(1727.3,-0.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiwDRQBwjwDxix");
	this.shape_96.setTransform(1733.8,6.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(13,1,1).p("AioDjQCJjyDIjS");
	this.shape_97.setTransform(1740.3,13.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(13,1,1).p("AimDnQCPjyC+jb");
	this.shape_98.setTransform(1741.9,14.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(13,1,1).p("AisDaQB8jxDdjC");
	this.shape_99.setTransform(1737.1,9.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiyDNQBpjxD8io");
	this.shape_100.setTransform(1732.2,4.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai/CzQBEjvE7h2");
	this.shape_101.setTransform(1722.4,-5.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjFClQAxjuFahb");
	this.shape_102.setTransform(1717.6,-10.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjLCYQAfjtF4hC");
	this.shape_103.setTransform(1712.7,-15.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai6ChQANjsFohV");
	this.shape_104.setTransform(1705.4,-22.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiiC4QANjtE4iC");
	this.shape_105.setTransform(1703,-25.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiKDOQAMjtEJiu");
	this.shape_106.setTransform(1700.7,-27.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhyDkQAMjtDZja");
	this.shape_107.setTransform(1698.3,-29.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhaD6QAMjuCpkF");
	this.shape_108.setTransform(1695.9,-31.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhCERQAMjvB5ky");
	this.shape_109.setTransform(1693.5,-34);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgqEnQAMjvBKle");
	this.shape_110.setTransform(1691.1,-36.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTE9QANjuAamL");
	this.shape_111.setTransform(1688.7,-38.4);
	this.shape_111._off = true;

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUFDQAMjuAdmX");
	this.shape_112.setTransform(1688.9,-39.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgWFKQANjvAgmk");
	this.shape_113.setTransform(1689,-39.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgSFLQAMjuAZmn");
	this.shape_114.setTransform(1688.7,-39.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgGFNQALjvACmq");
	this.shape_115.setTransform(1687.4,-40);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgJFFQALjvAIma");
	this.shape_116.setTransform(1687.8,-39.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgME9QAMjvANmJ");
	this.shape_117.setTransform(1688.1,-38.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgME/QAMjvANmO");
	this.shape_118.setTransform(1688,-38.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgOE0QAMjvARl4");
	this.shape_119.setTransform(1688.3,-37.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgPE2QAMjvATl8");
	this.shape_120.setTransform(1688.4,-37.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQE4QAMjvAVl/");
	this.shape_121.setTransform(1688.5,-37.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgRE5QAMjuAXmD");
	this.shape_122.setTransform(1688.6,-38.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgSE7QANjuAYmH");
	this.shape_123.setTransform(1688.6,-38.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTE/QANjvAamO");
	this.shape_124.setTransform(1688.7,-38.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTFBQANjuAamT");
	this.shape_125.setTransform(1688.7,-38.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgRFBQAMjuAYmT");
	this.shape_126.setTransform(1688.6,-38.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgRFSQAMjvAXm0");
	this.shape_127.setTransform(1688.6,-40.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgRFHQAMjvAXme");
	this.shape_128.setTransform(1688.6,-39.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgRE8QANjuAWmJ");
	this.shape_129.setTransform(1688.5,-38.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTE/QAMjvAbmO");
	this.shape_130.setTransform(1688.8,-38.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgWE2QANjvAgl8");
	this.shape_131.setTransform(1689,-37.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgVE3QAMjuAfl/");
	this.shape_132.setTransform(1689,-37.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgVE5QANjvAdmC");
	this.shape_133.setTransform(1688.9,-38);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUE6QANjvAcmE");
	this.shape_134.setTransform(1688.9,-38.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTE8QAMjvAbmI");
	this.shape_135.setTransform(1688.8,-38.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUE/QANjvAcmO");
	this.shape_136.setTransform(1688.9,-38.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgVFBQAMjvAfmS");
	this.shape_137.setTransform(1689,-38.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUFHQAMjuAdmf");
	this.shape_138.setTransform(1688.9,-39.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUFKQANjvAbmk");
	this.shape_139.setTransform(1688.8,-39.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgSE5QANjvAYmC");
	this.shape_140.setTransform(1688.6,-38);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgWFCQANjuAgmV");
	this.shape_141.setTransform(1689,-38.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgXExQAMjvAjly");
	this.shape_142.setTransform(1689.2,-37.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgWEyQAMjvAil0");
	this.shape_143.setTransform(1689.1,-37.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgWEzQAMjvAhl2");
	this.shape_144.setTransform(1689.1,-37.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgWE0QANjuAgl5");
	this.shape_145.setTransform(1689,-37.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgVE1QAMjvAfl6");
	this.shape_146.setTransform(1689,-37.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgVE2QAMjuAfl9");
	this.shape_147.setTransform(1689,-37.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgVE3QANjuAel/");
	this.shape_148.setTransform(1688.9,-37.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUE5QAMjvAdmC");
	this.shape_149.setTransform(1688.9,-38);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUE7QANjvAbmG");
	this.shape_150.setTransform(1688.8,-38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_75}]},344).to({state:[{t:this.shape_75}]},33).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[]},1).wait(236));
	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(344).to({_off:false},0).wait(33).to({_off:true},1).wait(34).to({_off:false},0).wait(17).to({_off:true},1).wait(316));
	this.timeline.addTween(cjs.Tween.get(this.shape_111).wait(445).to({_off:false},0).wait(4).to({_off:true},1).wait(12).to({_off:false},0).wait(4).to({_off:true},1).wait(12).to({_off:false},0).wait(10).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(236));

	// Calque 14
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACOEfIkbo9");
	this.shape_151.setTransform(1773.2,16.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiRktIEjJb");
	this.shape_152.setTransform(1768.8,13.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiVk8IErJ5");
	this.shape_153.setTransform(1764.4,10.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(13,1,1).p("AialLIE1KX");
	this.shape_154.setTransform(1760,7.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#FFFFFF").ss(13,1,1).p("AielbIE9K3");
	this.shape_155.setTransform(1755.5,5.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiilqIFFLV");
	this.shape_156.setTransform(1751.1,2.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ainl5IFOLz");
	this.shape_157.setTransform(1746.7,-0.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACsGJIlXsR");
	this.shape_158.setTransform(1742.2,-3.2);
	this.shape_158._off = true;

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FFFFFF").ss(13,1,1).p("AirmIIFXMR");
	this.shape_159.setTransform(1742.2,-3.2);
	this.shape_159._off = true;

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aiml2IFNLt");
	this.shape_160.setTransform(1747.4,0.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFFFFF").ss(13,1,1).p("AihllIFDLL");
	this.shape_161.setTransform(1752.6,3.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiclTIE5Kn");
	this.shape_162.setTransform(1757.7,6.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiXlBIEvKD");
	this.shape_163.setTransform(1762.9,9.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiSkwIElJh");
	this.shape_164.setTransform(1768.1,13);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiNkeIEbI9");
	this.shape_165.setTransform(1773.2,16.3);
	this.shape_165._off = true;

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiQksIEiJZ");
	this.shape_166.setTransform(1769.4,13.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiUk5IEpJz");
	this.shape_167.setTransform(1765.5,11.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiYlGIExKN");
	this.shape_168.setTransform(1761.6,9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiflgIFALB");
	this.shape_169.setTransform(1753.9,4.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FFFFFF").ss(13,1,1).p("AijltIFHLb");
	this.shape_170.setTransform(1750,1.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ainl6IFPL1");
	this.shape_171.setTransform(1746.1,-0.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai4lxQClGGDMFd");
	this.shape_172.setTransform(1739.2,-8.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjElbQCdGFDsEy");
	this.shape_173.setTransform(1736.2,-14.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjRlEQCWGEENEF");
	this.shape_174.setTransform(1733.2,-20.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjdkuQCNGDEuDa");
	this.shape_175.setTransform(1730.2,-26);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjqkXQCFGCFQCt");
	this.shape_176.setTransform(1727.2,-31.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj3kBQB+GBFxCC");
	this.shape_177.setTransform(1724.1,-37.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkDjrQB2GBGRBV");
	this.shape_178.setTransform(1721.1,-43.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#FFFFFF").ss(13,1,1).p("AERDVQmzgqhul/");
	this.shape_179.setTransform(1718.1,-48.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjJQBvF/GyAU");
	this.shape_180.setTransform(1718.1,-49.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi+QBvF/GygC");
	this.shape_181.setTransform(1718.1,-51);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi0QBvF/GygY");
	this.shape_182.setTransform(1718.1,-52.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQirQBvF/Gygt");
	this.shape_183.setTransform(1718.1,-53);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiiQBvF/GyhE");
	this.shape_184.setTransform(1718.1,-53.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQibQBvF/GyhZ");
	this.shape_185.setTransform(1718.1,-54.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiUQBvF/Gyhv");
	this.shape_186.setTransform(1718.1,-55.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#FFFFFF").ss(13,1,1).p("AERBsQmzCFhul+");
	this.shape_187.setTransform(1718.1,-55.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiTQBvF/Gyhy");
	this.shape_188.setTransform(1718.1,-55.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiZQBvF/Gyhf");
	this.shape_189.setTransform(1718.1,-54.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQigQBvF/GyhL");
	this.shape_190.setTransform(1718.1,-54.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQinQBvF/Gyg3");
	this.shape_191.setTransform(1718.1,-53.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQivQBvF/Gygk");
	this.shape_192.setTransform(1718.1,-52.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi3QBvF/GygR");
	this.shape_193.setTransform(1718.1,-51.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjBQBvF/GyAE");
	this.shape_194.setTransform(1718.1,-50.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjKQBvF/GyAW");
	this.shape_195.setTransform(1718.1,-49.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjOQBvF/GyAe");
	this.shape_196.setTransform(1718.1,-49.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjIQBvGAGyAR");
	this.shape_197.setTransform(1718.1,-50.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi7QBvF/GygI");
	this.shape_198.setTransform(1718.1,-51.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi1QBvF/GygV");
	this.shape_199.setTransform(1718.1,-51.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiwQBvF/Gygh");
	this.shape_200.setTransform(1718.1,-52.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQimQBvF/Gyg6");
	this.shape_201.setTransform(1718.1,-53.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQihQBvF/GyhH");
	this.shape_202.setTransform(1718.1,-53.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQidQBvF/GyhT");
	this.shape_203.setTransform(1718.1,-54.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiZQBvF/Gyhg");
	this.shape_204.setTransform(1718.1,-54.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiVQBvF/Gyhs");
	this.shape_205.setTransform(1718.1,-55.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiRQBvF/Gyh5");
	this.shape_206.setTransform(1718.1,-55.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiRQBvF/Gyh6");
	this.shape_207.setTransform(1718.1,-55.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiUQBvF/Gyhu");
	this.shape_208.setTransform(1718.1,-55.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiYQBvF/Gyhi");
	this.shape_209.setTransform(1718.1,-54.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQicQBvF/GyhW");
	this.shape_210.setTransform(1718.1,-54.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQikQBvF/Gyg/");
	this.shape_211.setTransform(1718.1,-53.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQioQBvF/Gyg0");
	this.shape_212.setTransform(1718.1,-53.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQitQBvF/Gygo");
	this.shape_213.setTransform(1718.1,-52.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiyQBvF/Gygc");
	this.shape_214.setTransform(1718.1,-52.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi9QBvF/GygF");
	this.shape_215.setTransform(1718.1,-51.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjDQBvGAGyAH");
	this.shape_216.setTransform(1718.1,-50.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjIQBvF/GyAS");
	this.shape_217.setTransform(1718.1,-50);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjPQBvF/GyAg");
	this.shape_218.setTransform(1718.1,-49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_151}]},344).to({state:[{t:this.shape_151}]},33).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194,p:{y:-50.8}}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194,p:{y:-50.8}}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_196,p:{y:-49.5}}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_194,p:{y:-50.7}}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_196,p:{y:-49.4}}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_218}]},1).to({state:[]},1).wait(236));
	this.timeline.addTween(cjs.Tween.get(this.shape_158).wait(384).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(30).to({_off:false},0).to({_off:true},1).wait(308));
	this.timeline.addTween(cjs.Tween.get(this.shape_159).wait(385).to({_off:false},0).wait(3).to({_off:true},1).wait(1).to({_off:false},0).wait(3).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(340));
	this.timeline.addTween(cjs.Tween.get(this.shape_165).wait(413).to({_off:false},0).wait(15).to({_off:true},1).wait(317));

	// Calque 1
	this.instance_3 = new lib.equilibirum_run("synched",11);
	this.instance_3.setTransform(3820.2,-32);
	this.instance_3._off = true;

	this.instance_4 = new lib.equilibirum_static();
	this.instance_4.setTransform(1764.2,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},221).to({state:[{t:this.instance_3}]},114).to({state:[{t:this.instance_4}]},1).to({state:[]},8).wait(402));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(221).to({_off:false},0).to({x:1790.2,startPosition:37},114,cjs.Ease.get(0.61)).to({_off:true,x:1764.2,mode:"independent"},1).wait(410));

	// Calque 3
	this.instance_5 = new lib.walking_equilibrium("synched",0);
	this.instance_5.setTransform(-6.1,-52,0.81,0.81,0,0,0,-10.5,-29.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({x:1271.9,startPosition:11},89).to({_off:true},1).wait(1).to({_off:false,x:-6.1,startPosition:0},0).to({x:1271.9,startPosition:11},89,cjs.Ease.get(0.64)).to({_off:true},1).wait(549));

	// Calque 4
	this.instance_6 = new lib.okaokaplayhead();
	this.instance_6.setTransform(2.8,-38.1,1,1,0,0,0,0,33.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({_off:true},5).wait(181).to({_off:false,x:1294.8},0).wait(141).to({rotation:15,x:1299.8},6).to({x:1319.8},2).to({x:1344.8},2).to({rotation:14.5,x:1348.7,y:-67.6},6).to({regY:33.9,rotation:18.5,x:1348.8,y:-67.5},5).to({regY:33.8,rotation:7.8,y:-67.6},5).to({regY:33.9,rotation:18.5,y:-67.5},5).to({regY:33.8,rotation:7.8,y:-67.6},5).to({rotation:0,x:1344.8,y:-38.1},3).wait(52).to({rotation:14.5,x:1348.7,y:-67.6},8).to({x:1383.7,y:-92.6},8).to({x:1402.7,y:-93.1},8).to({x:1383.7,y:-92.6},9).to({x:1402.7,y:-93.1},8).to({x:1383.7,y:-92.6},9).to({x:1402.7,y:-93.1},14).to({x:1383.7,y:-92.6},15).to({_off:true},2).wait(236));

	// Calque 5
	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEWAAIorAA");
	this.shape_219.setTransform(3.1,-11.8);
	this.shape_219._off = true;

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVAAIIrAA");
	this.shape_220.setTransform(1305.1,-11.8);
	this.shape_220._off = true;

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkaAHQEaAAEagN");
	this.shape_221.setTransform(1341.4,-17.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkeAOQEeACEfge");
	this.shape_222.setTransform(1342.7,-23.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjAWQEjACEkgt");
	this.shape_223.setTransform(1344,-29.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FFFFFF").ss(13,1,1).p("AknAdQEnADEog9");
	this.shape_224.setTransform(1345.3,-34.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#FFFFFF").ss(13,1,1).p("AksAlQEsADEthM");
	this.shape_225.setTransform(1346.6,-40.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEygsQkyBckwgE");
	this.shape_226.setTransform(1347.9,-46.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwAmQEwAEEyhP");
	this.shape_227.setTransform(1347.9,-45.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwAfQEwAEEyhC");
	this.shape_228.setTransform(1347.9,-45);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwAZQEwAEEyg1");
	this.shape_229.setTransform(1347.9,-44.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwASQEwAEEygn");
	this.shape_230.setTransform(1347.9,-43.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEygLQkyAakwgD");
	this.shape_231.setTransform(1347.9,-43.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYAFQEYAAEZgJ");
	this.shape_232.setTransform(1341.1,-16.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkcALQEcABEdgW");
	this.shape_233.setTransform(1342.1,-20.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfAQQEfACEggh");
	this.shape_234.setTransform(1343,-24.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmAbQEmADEng5");
	this.shape_235.setTransform(1345,-33.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqAhQEqADErhE");
	this.shape_236.setTransform(1345.9,-37.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#FFFFFF").ss(13,1,1).p("AktAnQEtADEuhQ");
	this.shape_237.setTransform(1346.9,-42);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwAfQEwAaExhc");
	this.shape_238.setTransform(1352.3,-50.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwAPQEwAvEyhc");
	this.shape_239.setTransform(1356.6,-54);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwgBQEwBEExhc");
	this.shape_240.setTransform(1361,-57.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwgUQEwBaEyhc");
	this.shape_241.setTransform(1365.4,-61);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwgeQEwBwExhc");
	this.shape_242.setTransform(1369.8,-65.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwgmQEwCFEyhe");
	this.shape_243.setTransform(1374.1,-69.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwgwQEwCcExhe");
	this.shape_244.setTransform(1378.5,-74.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEyAaQkyBekwix");
	this.shape_245.setTransform(1382.9,-78.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aktg9QEpCzEyhQ");
	this.shape_246.setTransform(1384.2,-78.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkphBQEfC0E0hC");
	this.shape_247.setTransform(1385.6,-78.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#FFFFFF").ss(13,1,1).p("AklhGQEVC2E2g0");
	this.shape_248.setTransform(1387,-78.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkhhMQEMC4E3gm");
	this.shape_249.setTransform(1388.3,-79);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdhSQECC6E5gY");
	this.shape_250.setTransform(1389.7,-79);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkZhYQD5C7E6gK");
	this.shape_251.setTransform(1391.1,-78.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVhgQDvC9E8AE");
	this.shape_252.setTransform(1392.4,-78.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FFFFFF").ss(13,1,1).p("AESBpQk+gSjli/");
	this.shape_253.setTransform(1393.8,-78.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVhhQDuC9E9AG");
	this.shape_254.setTransform(1392.6,-78.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYhaQD2C8E7gH");
	this.shape_255.setTransform(1391.4,-78.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkchUQD/C6E6gT");
	this.shape_256.setTransform(1390.1,-79);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfhOQEHC4E4gg");
	this.shape_257.setTransform(1388.9,-79);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjhJQEQC3E3gs");
	this.shape_258.setTransform(1387.7,-79);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmhFQEYC2E1g5");
	this.shape_259.setTransform(1386.5,-78.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqhAQEhC0E0hF");
	this.shape_260.setTransform(1385.3,-78.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aktg9QEpCzEyhS");
	this.shape_261.setTransform(1384.1,-78.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akug7QEsCyExhW");
	this.shape_262.setTransform(1383.6,-78.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aksg+QEnCzEyhO");
	this.shape_263.setTransform(1384.4,-78.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqhAQEiC0EzhG");
	this.shape_264.setTransform(1385.2,-78.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkohDQEdC1E0g+");
	this.shape_265.setTransform(1386,-78.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmhGQEYC2E1g2");
	this.shape_266.setTransform(1386.8,-78.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjhIQERC2E2gu");
	this.shape_267.setTransform(1387.5,-79);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkehPQEGC5E4ge");
	this.shape_268.setTransform(1389.1,-79);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkchSQEAC5E5gW");
	this.shape_269.setTransform(1389.9,-79);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkahWQD7C6E6gO");
	this.shape_270.setTransform(1390.7,-78.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYhaQD2C7E7gG");
	this.shape_271.setTransform(1391.5,-78.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkWhfQDxC9E8AC");
	this.shape_272.setTransform(1392.2,-78.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkUhjQDrC9E+AK");
	this.shape_273.setTransform(1393,-78.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkUhkQDrC+E+AL");
	this.shape_274.setTransform(1393.1,-78.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVhfQDvC8E8AD");
	this.shape_275.setTransform(1392.3,-78.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkXhbQD0C7E8gE");
	this.shape_276.setTransform(1391.6,-78.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkZhXQD6C7E6gM");
	this.shape_277.setTransform(1390.9,-78.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkehQQEEC5E5gb");
	this.shape_278.setTransform(1389.4,-79);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkghNQEJC4E4gi");
	this.shape_279.setTransform(1388.7,-79);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkihKQEPC3E2gq");
	this.shape_280.setTransform(1388,-79);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkhHQEUC2E1gx");
	this.shape_281.setTransform(1387.2,-79);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkohCQEdC0E0hA");
	this.shape_282.setTransform(1385.8,-78.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqhAQEjC0EyhI");
	this.shape_283.setTransform(1385,-78.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aktg+QEpCzEyhP");
	this.shape_284.setTransform(1384.3,-78.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akug7QEtCyEwhX");
	this.shape_285.setTransform(1383.6,-78.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akvg7QEuCyExhY");
	this.shape_286.setTransform(1383.5,-78.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_219}]},11).to({state:[]},5).to({state:[{t:this.shape_219}]},181).to({state:[{t:this.shape_219}]},141).to({state:[{t:this.shape_219}]},6).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_286}]},1).to({state:[]},1).wait(236));
	this.timeline.addTween(cjs.Tween.get(this.shape_219).wait(11).to({_off:false},0).to({_off:true},5).wait(181).to({_off:false,x:1295.1},0).wait(147).to({_off:true},1).wait(1).to({_off:false,x:1315.1},0).to({_off:true},1).wait(1).to({_off:false,x:1340.1},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(316));
	this.timeline.addTween(cjs.Tween.get(this.shape_220).wait(345).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:1327.6},0).to({_off:true},1).wait(30).to({_off:false,x:1340.1},0).wait(50).to({_off:true},1).wait(317));

	// Calque 6
	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACOEWIkbor");
	this.shape_287.setTransform(17.4,16);
	this.shape_287._off = true;

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiQj6QDKDDBXEz");
	this.shape_288.setTransform(1319.6,13.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACTDhQgelRkHhw");
	this.shape_289.setTransform(1329.9,10.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FFFFFF").ss(13,1,1).p("AickCQC9DtB8EY");
	this.shape_290.setTransform(1356.7,9.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#FFFFFF").ss(13,1,1).p("AirjvQDtDEBqEb");
	this.shape_291.setTransform(1359,2.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai5jbQEdCZBWEe");
	this.shape_292.setTransform(1361.3,-4.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjIjIQFMBwBEEh");
	this.shape_293.setTransform(1363.6,-11.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjWi1QF8BGAxEl");
	this.shape_294.setTransform(1365.8,-18.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#FFFFFF").ss(13,1,1).p("ADmCjQgfkpmsgc");
	this.shape_295.setTransform(1368.1,-25.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ajoi0QGdBBA0Eo");
	this.shape_296.setTransform(1368.5,-23.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjsjHQGQBnBJEo");
	this.shape_297.setTransform(1368.8,-21.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjvjZQGBCMBeEn");
	this.shape_298.setTransform(1369.2,-20);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjzjsQF0CyBzEn");
	this.shape_299.setTransform(1369.5,-18.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FFFFFF").ss(13,1,1).p("AD3D/QiIkmlljX");
	this.shape_300.setTransform(1369.9,-16.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiNkVIEbIr");
	this.shape_301.setTransform(1354.4,16);
	this.shape_301._off = true;

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiYkHQCxD3CAEY");
	this.shape_302.setTransform(1356.1,10.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aijj4QDUDYBzEZ");
	this.shape_303.setTransform(1357.8,5.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiujqQD4C5BlEc");
	this.shape_304.setTransform(1359.6,0.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjEjNQFAB6BJEh");
	this.shape_305.setTransform(1363,-9.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjPi/QFkBbA7Ek");
	this.shape_306.setTransform(1364.7,-15.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjaiwQGIA7AtEm");
	this.shape_307.setTransform(1366.4,-20.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjNixQF8A6AfEp");
	this.shape_308.setTransform(1370.5,-27);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai1jBQFMBaAfEp");
	this.shape_309.setTransform(1372.9,-28.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#FFFFFF").ss(13,1,1).p("AidjQQEcB4AfEp");
	this.shape_310.setTransform(1375.3,-30.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiFjfQDsCXAfEo");
	this.shape_311.setTransform(1377.7,-31.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhtjvQC8C2AfEp");
	this.shape_312.setTransform(1380.1,-33.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhVj+QCMDUAfEp");
	this.shape_313.setTransform(1382.5,-34.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag9kNQBdDzAfEo");
	this.shape_314.setTransform(1384.9,-36.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAnEeQggkpgtkS");
	this.shape_315.setTransform(1387.3,-37.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgXkiQAREcAeEp");
	this.shape_316.setTransform(1388.8,-38.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAKEoQgdkpANkm");
	this.shape_317.setTransform(1390.1,-38.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAGEoQgdkpAfkm");
	this.shape_318.setTransform(1390.5,-38.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgEEgQgfkpAzkW");
	this.shape_319.setTransform(1391.7,-38);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgFEgQgfkpA1kW");
	this.shape_320.setTransform(1391.8,-38);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgGEfQgfkpA3kU");
	this.shape_321.setTransform(1391.9,-37.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgHEeQgfkoA5kT");
	this.shape_322.setTransform(1392,-37.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgIEeQgfkpA7kS");
	this.shape_323.setTransform(1392.1,-37.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgCEeQgfkpAwkS");
	this.shape_324.setTransform(1391.5,-37.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#FFFFFF").ss(13,1,1).p("AABEeQgdkpAnkS");
	this.shape_325.setTransform(1391,-37.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAHEoQgdkpAdkm");
	this.shape_326.setTransform(1390.4,-38.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAHEeQgdkpAdkS");
	this.shape_327.setTransform(1390.4,-37.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgEkdQgPESAdEp");
	this.shape_328.setTransform(1390.1,-37.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgOkdQAAESAdEp");
	this.shape_329.setTransform(1389.6,-37.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgWkdQAQESAdEp");
	this.shape_330.setTransform(1388.8,-37.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgekdQAeESAfEp");
	this.shape_331.setTransform(1388,-37.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgikeQAmEUAfEp");
	this.shape_332.setTransform(1387.6,-37.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgekfQAeEXAfEo");
	this.shape_333.setTransform(1388,-38);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgakgQAYEZAdEo");
	this.shape_334.setTransform(1388.4,-38.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTkjQAKEeAdEp");
	this.shape_335.setTransform(1389.1,-38.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgPkkQACEhAdEo");
	this.shape_336.setTransform(1389.5,-38.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgLklQgFEjAdEo");
	this.shape_337.setTransform(1389.8,-38.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#FFFFFF").ss(13,1,1).p("AABkdQgWESAdEp");
	this.shape_338.setTransform(1390.3,-37.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgDkdQgQESAdEp");
	this.shape_339.setTransform(1390.1,-37.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgIkdQgKESAdEp");
	this.shape_340.setTransform(1390,-37.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgNkdQgCESAdEp");
	this.shape_341.setTransform(1389.7,-37.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQkdQAEESAdEp");
	this.shape_342.setTransform(1389.4,-37.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUkdQAMESAdEp");
	this.shape_343.setTransform(1389,-37.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgYkdQATESAeEp");
	this.shape_344.setTransform(1388.7,-37.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgbkdQAaESAdEp");
	this.shape_345.setTransform(1388.3,-37.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgfkdQAfESAgEp");
	this.shape_346.setTransform(1388,-37.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgikdQAmESAfEp");
	this.shape_347.setTransform(1387.6,-37.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgjkdQAoETAfEp");
	this.shape_348.setTransform(1387.5,-37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_287}]},11).to({state:[]},5).to({state:[{t:this.shape_287}]},181).to({state:[{t:this.shape_287}]},141).to({state:[{t:this.shape_287}]},6).to({state:[{t:this.shape_288,p:{x:1319.6}}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_288,p:{x:1342.1}}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_348}]},1).to({state:[]},1).wait(236));
	this.timeline.addTween(cjs.Tween.get(this.shape_287).wait(11).to({_off:false},0).to({_off:true},5).wait(181).to({_off:false,x:1309.4},0).wait(147).to({_off:true},1).wait(3).to({_off:false,x:1354.4},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(316));
	this.timeline.addTween(cjs.Tween.get(this.shape_301).wait(378).to({_off:false},0).wait(50).to({_off:true},1).wait(317));

	// Calque 7
	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#FFFFFF").ss(13,1,1).p("AibDtIE3nZ");
	this.shape_349.setTransform(-10,20.6);
	this.shape_349._off = true;

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#FFFFFF").ss(13,1,1).p("AibDtQDUjVBjkE");
	this.shape_350.setTransform(1292,20.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#FFFFFF").ss(13,1,1).p("AibDtQENi9Aqkc");
	this.shape_351.setTransform(1302,20.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiUEFIEpoJ");
	this.shape_352.setTransform(1328.5,18);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiNEcIEbo3");
	this.shape_353.setTransform(1330.1,15.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiGE0IENpn");
	this.shape_354.setTransform(1331.6,12.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah/FMID/qX");
	this.shape_355.setTransform(1333.2,10.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah4FkIDxrH");
	this.shape_356.setTransform(1334.7,7.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhxF8IDjr3");
	this.shape_357.setTransform(1336.2,4.9);
	this.shape_357._off = true;

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiWD/IEtn9");
	this.shape_358.setTransform(1328.2,18.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiRERIEioh");
	this.shape_359.setTransform(1329.3,16.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiLEiIEYpD");
	this.shape_360.setTransform(1330.5,14.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiBFGIEDqL");
	this.shape_361.setTransform(1332.8,10.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah7FYID3qv");
	this.shape_362.setTransform(1333.9,8.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah2FqIDtrT");
	this.shape_363.setTransform(1335.1,6.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiCFeQCPlBB2l6");
	this.shape_364.setTransform(1339,-2.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiTFAQCtkFB6l6");
	this.shape_365.setTransform(1341.8,-9.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#FFFFFF").ss(13,1,1).p("AikEjQDLjKB+l7");
	this.shape_366.setTransform(1344.5,-16.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai1EFQDpiOCCl7");
	this.shape_367.setTransform(1347.3,-23.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjGDoQEHhUCGl7");
	this.shape_368.setTransform(1350,-30.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjXDKQElgYCKl7");
	this.shape_369.setTransform(1352.8,-37.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjoCrQFDAjCOl7");
	this.shape_370.setTransform(1355.6,-44.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj5CFQFhBfCSl7");
	this.shape_371.setTransform(1358.3,-51.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj/B4QFeBvChl3");
	this.shape_372.setTransform(1359.1,-51.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkFBqQFcCACvlz");
	this.shape_373.setTransform(1359.8,-52.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkLBbQFZCRC+lv");
	this.shape_374.setTransform(1360.6,-53.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkRBNQFXCgDMlq");
	this.shape_375.setTransform(1361.3,-53.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkXA+QFVCxDaln");
	this.shape_376.setTransform(1362,-54.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdAvQFSDBDpli");
	this.shape_377.setTransform(1362.7,-54.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjAgQFQDSD3lf");
	this.shape_378.setTransform(1363.5,-55.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkpAQQFNDiEHla");
	this.shape_379.setTransform(1364.2,-55.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkAeQFQDUD5le");
	this.shape_380.setTransform(1363.6,-55.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfAsQFSDFDsli");
	this.shape_381.setTransform(1362.9,-55);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkZA5QFUC3Dflm");
	this.shape_382.setTransform(1362.2,-54.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkUBHQFXCnDSlp");
	this.shape_383.setTransform(1361.6,-54);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkPBTQFYCaDHlt");
	this.shape_384.setTransform(1361,-53.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkJBgQFaCLC5lw");
	this.shape_385.setTransform(1360.3,-52.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkEBtQFdB8Csl0");
	this.shape_386.setTransform(1359.6,-52.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj+B5QFeBuCfl4");
	this.shape_387.setTransform(1359,-51.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj8B9QFfBpCal5");
	this.shape_388.setTransform(1358.7,-51.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkAB2QFeBxCjl2");
	this.shape_389.setTransform(1359.2,-51.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkDBuQFcB7Crl0");
	this.shape_390.setTransform(1359.6,-52.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkHBmQFcCECzly");
	this.shape_391.setTransform(1360,-52.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkKBeQFaCOC7lw");
	this.shape_392.setTransform(1360.4,-53.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkNBVQFYCXDElt");
	this.shape_393.setTransform(1360.9,-53.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVBFQFWCqDVlp");
	this.shape_394.setTransform(1361.7,-54.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYA8QFVCzDclm");
	this.shape_395.setTransform(1362.1,-54.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkcAzQFUC9Dllk");
	this.shape_396.setTransform(1362.5,-54.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfArQFSDGDtli");
	this.shape_397.setTransform(1363,-55);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkiAiQFQDPD2lf");
	this.shape_398.setTransform(1363.4,-55.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmAZQFPDZD+ld");
	this.shape_399.setTransform(1363.8,-55.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmAYQFPDaD+ld");
	this.shape_400.setTransform(1363.8,-55.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjAhQFQDQD3le");
	this.shape_401.setTransform(1363.4,-55.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkgApQFSDIDvlh");
	this.shape_402.setTransform(1363,-55.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdAxQFUC/Dmlj");
	this.shape_403.setTransform(1362.7,-54.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkWBBQFWCuDXlo");
	this.shape_404.setTransform(1361.9,-54.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkTBJQFXClDQlq");
	this.shape_405.setTransform(1361.5,-53.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkPBRQFXCcDIls");
	this.shape_406.setTransform(1361.1,-53.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkMBZQFZCTDAlu");
	this.shape_407.setTransform(1360.7,-53.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkGBoQFcCCCxlz");
	this.shape_408.setTransform(1359.9,-52.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkDBvQFdB5Cql0");
	this.shape_409.setTransform(1359.5,-52.2);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj/B3QFeBwChl3");
	this.shape_410.setTransform(1359.1,-51.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj8B+QFgBoCZl5");
	this.shape_411.setTransform(1358.7,-51.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj8B/QFgBnCZl6");
	this.shape_412.setTransform(1358.7,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_349}]},11).to({state:[]},5).to({state:[{t:this.shape_349}]},181).to({state:[{t:this.shape_349}]},141).to({state:[{t:this.shape_349}]},6).to({state:[{t:this.shape_350,p:{x:1292}}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350,p:{x:1314.5}}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_412}]},1).to({state:[]},1).wait(236));
	this.timeline.addTween(cjs.Tween.get(this.shape_349).wait(11).to({_off:false},0).to({_off:true},5).wait(181).to({_off:false,x:1282},0).wait(147).to({_off:true},1).wait(3).to({_off:false,x:1327},0).to({_off:true},1).wait(28).to({_off:false},0).wait(52).to({_off:true},1).wait(316));
	this.timeline.addTween(cjs.Tween.get(this.shape_357).wait(354).to({_off:false},0).wait(20).to({_off:true},1).wait(62).to({_off:false},0).to({_off:true},1).wait(308));

	// Calque 9
	this.instance_7 = new lib.okaokaplaydot();
	this.instance_7.setTransform(51.6,-22.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({_off:true},5).wait(181).to({_off:false,x:1343.6},0).wait(147).to({x:1363.6},2).to({x:1388.6},2).to({rotation:-15,x:1391,y:-66.4},6).to({rotation:0,x:1393.6,y:-56.7},5).to({rotation:-15,x:1391,y:-66.4},5).to({rotation:0,x:1393.6,y:-56.7},5).to({rotation:-15,x:1391,y:-66.4},5).to({rotation:0,x:1388.6,y:-22.2},3).wait(52).to({rotation:-15,x:1391,y:-66.4},8).to({x:1426,y:-91.4},8).to({rotation:0,x:1438.5,y:-81.2},8).to({rotation:-15,x:1426,y:-91.4},9).to({rotation:0,x:1438.5,y:-81.2},8).to({rotation:-15,x:1426,y:-91.4},9).to({rotation:0,x:1438.5,y:-81.2},14).to({rotation:-15,x:1426,y:-91.4},15).to({_off:true},2).wait(236));

	// Calque 10
	this.instance_8 = new lib.okaokaplaydot();
	this.instance_8.setTransform(51.6,-2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).to({_off:true},5).wait(181).to({_off:false,x:1343.6},0).wait(147).to({x:1363.6},2).to({x:1388.6},2).to({rotation:-15,x:1396.2,y:-46.8},6).to({rotation:0,x:1393.6,y:-36.5},5).to({rotation:-15,x:1396.2,y:-46.8},5).to({rotation:0,x:1393.6,y:-36.5},5).to({rotation:-15,x:1396.2,y:-46.8},5).to({rotation:0,x:1388.6,y:-2},3).wait(52).to({rotation:-15,x:1396.2,y:-46.8},8).to({x:1431.2,y:-71.8},8).to({rotation:0,x:1438.5,y:-61},8).to({rotation:-15,x:1431.2,y:-71.8},9).to({rotation:0,x:1438.5,y:-61},8).to({rotation:-15,x:1431.2,y:-71.8},9).to({rotation:0,x:1438.5,y:-61},14).to({rotation:-15,x:1431.2,y:-71.8},15).to({_off:true},2).wait(236));

	// Calque 11
	this.instance_9 = new lib.equilibre_planche();
	this.instance_9.setTransform(1540,2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(107).to({_off:false},0).wait(247).to({rotation:-7.7},5).to({rotation:0},5).to({rotation:-7.7},5).to({rotation:0},5).wait(10).to({rotation:9.5},5).to({rotation:0},5).to({rotation:9.5},6).to({rotation:0},6).wait(102).to({_off:true},2).wait(236));

	// Calque 12
	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACQAAQAAA7gqArQgrAqg7AAQg6AAgrgqQgqgrAAg7QAAg7AqgqQArgqA6AAQA7AAArAqQAqAqAAA7g");
	this.shape_413.setTransform(1540,29.1);
	this.shape_413._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_413).wait(107).to({_off:false},0).to({_off:true},403).wait(236));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,-112.2,89.1,162.4);


// stage content:



(lib.balance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_566 = function() {
		if(typeof navigation !== 'undefined'){
			if(typeof navigation._page_script !== 'undefined'){
				if(typeof navigation._page_script.next_motion !== 'undefined'){
					navigation._page_script.next_motion();
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(566).call(this.frame_566).wait(1));

	// Calque 10
	this.instance = new lib.equilibrium_movie("synched",11);
	this.instance.setTransform(451.3,311.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(96).to({x:-1084.7,startPosition:107},0).wait(340).to({regX:1540,regY:43.4,x:455.3,y:355,startPosition:447},0).to({regY:43.5,rotation:-3.2,y:355.1,startPosition:455},8).to({rotation:3.5,startPosition:462},7).to({rotation:0,startPosition:470},8).to({rotation:-3.2,x:455.2,startPosition:487},17).to({regX:1540.1,rotation:1,x:455.3,startPosition:502},15).to({regX:1540,rotation:3.5,startPosition:462},8).to({rotation:0,startPosition:470},27).wait(40));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak3MjQgegSAAglQAAgPAIgPIEHmVQAEgHAAgJQAAgSgNgNQgLgMgSAAIisAAQgaAAgRgSQgSgSAAgZQAAgZASgTQARgSAaAAIIxAAQAZAAASASQASATAAAZQAAAZgSASQgSASgZAAIi6AAIDvHJQAIAPAAAQQAAAkgfARQgVANgZgGQgZgIgMgVIjHmCIkAGJQgLAUgaAJQgIACgIAAQgQAAgPgIgAiQgFQhSAAg5g6Qg6g7AAhSIAAmXQAAhTA6g6QA5g6BSAAIEgAAQBTAAA5A6QA6A6AABTIAAGXQAABSg6A7Qg5A6hTAAgAjBqTQgaAaAAAlIAAF5QAAAlAaAaQAbAbAkAAIEEAAQAlAAAbgbQAagaAAglIAAl5QAAglgagaQgbgbglAAIkEAAQgkAAgbAbg");
	this.shape.setTransform(452.9,268.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(566));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(868.7,487.8,68.4,162.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;