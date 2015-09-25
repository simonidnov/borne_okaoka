(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1500,
	height: 800,
	fps: 24,
	color: "#FFCC00",
	manifest: []
};



// symbols:



(lib.walking_hand_01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("Al2AAILtAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-8,91,16);


(lib.walking_foot_1 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("AizikQFPAIAYFB");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-24.5,52.1,49.2);


(lib.head_yellow = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("ADxGAIl9AvQg8AHgxgmQgxglgHg9IhAoHQgIg9AmgxQAngwA8gHIF9gwQA8gHAxAmQAxAmAHA9IBAIGQAIA9gmAxQgmAwg9AIg");
	this.shape.setTransform(0,0,1,1,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Aj5GQQgxglgHg9IhAoHQgIg9AmgxQAngwA8gHIF9gwQA8gHAxAmQAxAmAHA9IBAIGQAIA9gmAxQgmAwg9AIIl9AvIgTABQgxAAgpggg");
	this.shape_1.setTransform(0,0,1,1,6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.9,-53.2,103.1,106.5);


(lib.head = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("ADxGAIl9AvQg8AHgxgmQgxglgHg9IhAoHQgIg9AmgxQAngwA8gHIF9gwQA8gHAxAmQAxAmAHA9IBAIGQAIA9gmAxQgmAwg9AIg");
	this.shape.setTransform(0,0,1,1,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.9,-53.2,103.1,106.5);


(lib.walking_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArYQZMAAAggyIWyAAMAAAAgyg");
	mask.setTransform(-3.4,-6);

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

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = mask;

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

	this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = mask;

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

	this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41}]}).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).wait(1));

	// Calque 4
	this.instance = new lib.head();
	this.instance.setTransform(-1.7,0.3,1,1,0,0,0,0,41.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9,x:-6.7,y:-3.7},2).to({regX:-0.1,rotation:-8.7,x:-10.7,y:-4.7},4).to({rotation:-5.2,y:-3.7},3).to({regX:0,rotation:0,x:-1.7,y:0.3},2).to({rotation:6.7,x:1.8,y:-6.2},3).to({rotation:8.7,y:-10.7},4).to({rotation:8,x:2.8,y:-6.2},3).to({rotation:0,x:-1.7,y:5.3},2).wait(1));

	// Calque 5
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(51,255,0,0)").s().p("ArYQZMAAAggyIWyAAMAAAAgyg");
	this.shape_61.setTransform(-3.4,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.4,-111,146,210);


(lib.walking_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUgDQAAgKAUADQAVACAAAKQAAAFgDACQgEADgOAAQgJAAgLgPgAgFAAIAAABIANgBQgEAAgJAAg");
	this.shape.setTransform(-18.9,96.8,0.723,0.723);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAAQAAgGARADIABADQgBADgDABIgMAAIAAABQgCAAAAgFg");
	this.shape_1.setTransform(-19.3,97.5,0.723,0.723);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAAQAAgBAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAIABABIAHAAIACAEIgBAEIgEACIgGgGg");
	this.shape_2.setTransform(-42.2,97.1,0.723,0.723);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAHIAAgIQAAgJACgCQAFgEAVABIABAKQAAAFgEAPIgCABIgGABQgNAAgEgKg");
	this.shape_3.setTransform(-50,96.6,0.723,0.723);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABhBvQg1gCgYgEIgZgEIgNAGIgmAAQgEgCAAgEIgQAIIh5AAQgZgCgIgCQgJgDAAgIIgBgBQgVAQgQAAQgSAAgEgHIAAgIQAAgMAIgBQAYgFAdgQQAHgEAMgOQAJgLAUgFQAdgJAeAKQATAGAWAPIAfAQQAMAFAOADQgQgSgYgWQgdgZAAgeQAAgxAZgWQAUgTAjAEQAdAEAVAUQAVAUANARQAMARAOAKQA6A4AIAGQBEAxBOANQgIAHgPgGQgcAAgZgCQgPAAgbAJgAgUBfQAAAFADgDIABgBIgBgDQAAAAgBAAQgBAAAAABQAAAAgBAAQAAABAAAAg");
	this.shape_4.setTransform(-17.7,87.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ak0CKIAAghIAGgFIAOAAQADACAGAHIAGAHQAJAAAdgOIAfgQIAUgQQAUgPATgBQAuABAQAHQAaASAhATIAZAAIgbgiQgRgSgSgKQgMgIgFgIQgCgEgCgMQgCgNgOgEQgIgCgMgCIAAgpQgWgRgEgFQgPgSAAgZQAAgPAFgCQAmACAIAQQABADAAAYQAAASAKAPIABAAIAHgFQAUgOAGgEQAmgUAyAaQAZALASAWQAaAgAHAGQAJAHAGAJIALASQAEAIAOAMQALAJAMAIQAgAWAkAOQAnAQAeAAIADABQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAEgIADQgMAFgWABIgVgBQg8gCgDgBIipAAQgEgBgQgCIgvAAIgVADIhiAAIgIgCIhMAAQgDABgTAGQgSAGgEgBIgIgBg");
	this.shape_5.setTransform(-21.5,85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkaCeQghgIgsABQgGgFAAgDQAAgRANAAQAbAAAMAHIAIAIQAGAABWggQBPgcAaAAQAHAAALADQgQgIgKgMQgNgQAAgVQABgZAHgMQANgZAigGIARgGQAJgCAoACQAHABAJAFQAJADANABQA0AEAWAKIAdAVQASALAOAdQAJAVAlAPQAQAGAKALIASAVQAaAaBSAIIADAAIAAADIAAADIgBABIgoAAIgZgHIghAJQgHAAgjgGQgkgHgWgFQA5ASiAgPIgEAAIgtACQAaARhmgNIgCAAIgmgFIilARgAizgIIgBgKIABgKIAIgLQAmAAAIAEQAEAEADABQgDAGgKAEIgMAFQgBACgCAHQgCAGgJAAQgRAAgFgIgAhyhKIgCgSQAAgzAcgMQALgFAJAHQAIAIAAARQAAAHgIAFQgOAJgHAHIgHAOQgHANgHAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_6.setTransform(-26.9,82.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbCzQgRgEg1gHQgsgGgJgEQAMgNAfAAQAcAAAKAGIAJAHIAZAAIACgCIAAgEQAAgIg2gLQg2gKAAgFQAAgRAWgEQAhgFBgAPIADABIAIAAIASgCQABgJAIgCQgIgDgMAAIgfgCIgVgBIgDgDIADgFQACgDAEAAQgEgFgBgEIgBgIQAAgFAHgJQAGgKAAgDIgDgHQgCgFgBAAQgOAAgGAKIgOARIgNAAQgFgBgBgCIgBgDQAAgBAAgBQAAgBABAAQAAgBAAAAQAAgBABAAIACgBIAAgKQgcgCgJAYQgKAZgXAAQgPAAgEgLIAAgLQAAgVACgFQAFgRAUgIQAKgDAJgJIAQgNQAUgNAyAQQA4ABAiAcQAcAZAAAcQAAAJgHAPIgGALIAiAGIBMABIADAAIABAEIAAACIgBABIgRABQgNAMgEAGQAQAFAMAHIATAKQAOAHAZADIABAAIAFABIANAAIACgBIADABIABABIASAAIADAAIAAADIAAADIgBABIgVAAQgBAHgEAAQgDAAgEgEQgCgCgDgBIgEgBIgBAAQgDAAgDACIgGADIg9AAIgFgCIhuAAQgOACgSAFgAkgCsIgCgBQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgJAbgUQAagTAFAAQAOABABAJIgDAPQAAAHALAFQAJAEAdAGQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBABQgbAAgQgDQgJAAgJACIgLADgAjhAYQgDgEAAgEIACgIQADgGACgCIANAAQAEABACAFIABAHQAAAFgBADIgFAIIgBABIgDABQgKAAgEgHgAh2h7QgFgFAAgWQAAgQADgHQAEACAAAHQAHgOAOABQANABAAAJQAAALgGAPQgHAQgGACg");
	this.shape_7.setTransform(-24.4,80.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABIC6IgBgBQAIgKAAgSQgCgVABgLQALgBAcAWQAcAWAJAAIAVAAQAEgHAJABQAKABADgIIADgKQACgHAFAAQAIAAAEALIAIAQIBEAAQACADAAAEIAMABIADAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAAADIgBABQgQAAgFACIhuAAQgDgDAAgEIgfAHQgZAFgiAAIgUgBgAksC7QgGgJgHgFQgDgCAAgIQAAgIABgBIAXgIIAQAAIAKAHQAGAGACAAQAzgFASgEIAAgTQADgFANgBQALgBACgHQgBgFABgFQACgGADgCIAoAAIgIgLQgBgBAAgNQAAgKANgQQAPgSAOAAQAJAAAGAGIAHAIQAYAHAKggQAGgRADgCQAHgIAKAGIAAAVQAAAQgJA7QAAADAEAFIABABQAFgCAVAPQAgAXAAAYIAAAMIgBABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBAEIgkAAIgcgFIhEAAIgGABIigAAIgWAFIgUAEgAirAXQgLgFACgMQAAhNBIALQAaAFAYAPQAWAOAAALIAAAHQgCACgEAAQgDAAgEgDQgEgCgCAAIgSAAIgFAIQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgPgFQgQgHgFAAQgKAAgMAOIgRAWgAiEiJIgBgfQgBgJAEgDQAEAGAAAHIgBAKQACAMAjAHIADABIABAEQAAAGgFAJQgGALgIAAQgUAAgHgegAh0h2QAFACAKgBIABgBIgQAAgAhfiAIABgCIgGAAQACACADAAgAhNibQgCgHAAgDQAAgFACgFQADgLAJAAIAAAOQAAAGgCAGQgDAFAAAIIgEACIgDgKg");
	this.shape_8.setTransform(-27,79.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkaDRIglgGQgEgCAAgFQAAgFAGgMQAIgQANAAQAOAAAJAFQAFAFAEAIIBIgBQASgCAEgKQAEgJAIAAQAFABAcAJIAbAJQAgAAAMgiIAJgZQAGgMAKgBQABAJgCARQAAALACADIAWAQIAOAPQAQALAUgBIACAEQgEADgSAFIgXAIIjBAAIgKACgACPDLIgKgFIg2AAIgDABIgIABQAAAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQgHgaAAgGQAAgNACgJQABgBAFAAQAGAAAXAWQAaAaAHAGIAgAAQAHgBADgEIAFgHQAFgGAKAAIANAAIgCgNQAAgEAVAAQAXAAAAgPIgDgUQAAgLAKgBQAJgCAHAOIARAjQAMAWAVAMIgEAEQgCABgVgDIhWAAQgPABgNAEIgRAHgAhdCJIABgSQAAgGgBgFIgYADQgNgBgEgHIAAgJQAAgLACgBQABgEALgLQAkAIAJAOQAFAGAAATIAAAOQgCAKgMAAIgJgBgAgMAzQgUgDgCgEQgBAAAAgIIgGgSQAAgZAWAPQAVARAAAPQAAAIgCADgAhdgEIAAgLIAIAAIABAFIgBAGIAAABIgEAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAgAjKgMIAAgIQAAgxAggEQAMgBAKAHQAKAFAAAIIgBAGQgBADgEAEQgbgGgEAUIgCAPQgEAHgJAAQgKAAgCgHgAi4g6IgBACIAAAAIADgDgAh+glIAAgVIAKAAIABAHIgDAOIAAABIgDAAQgCAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBgAiAiVQgEgDABgKQgBgJABgJQADgRAPACIACAjQgBAIgDADgAhBi5QgCgCABgGIAAgIQAAgCAFgFIANAAIACACQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQABAFgGAGQgFAHgEAAIgGgBgAg6jIIgBABIAAAKIACgFQABgEACgCIAAAAIgEAAg");
	this.shape_9.setTransform(-28.3,77.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AEwCOIgDgFQgCADgNAAQgGAAgrgHIg0AAIgXACIgDABQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgBgGIgqAGQgcAFgZAAIg1gCQgEgBAAgNIABgPQADgMAEAAIA9AiQABAAAIgGQAHgHAEgBQAlAAAMgJQALgKASAAIADgGIAEgEIApgBQAIgyAhAmIAeAlQASAVALAFQAAAEgEAAQgEAAgDgDgABTCFIgBABIAMgCIgHAAIgBgBIgDACgAjlCNQgDgBgBgFQABgGAEgMQAFgOAEAAQADAAAHAEIAHAFQAAgZACgKQADgNAHgJIAAgDQAEgMANAGIABgCIABAFIAAADIACAGIgEAWIgEAUQACAIADAGQAPAbAwgJQAAABABAAQAAAAABABQAAAAABABQAAAAAAABIgBAEIgcAAIghgIIAAACQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgigBIgIAEgAizA3IABgCIgCAAIABACgAk6BwIAAgHQAAgYANANIAMATQAAADgCADQgFACgGAAQgKAAgCgJgAkzByIADgBIAAgDIABgFQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBAAgBAAgAiNAfQAAgDgDgDIAKgIIAMgHQAmgPAQAIQAJAEAAAJIgBAEIgDACQhAADgFADIABADQAAABgFABIgFgCgAipANQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgOAOgJQANgJAAAOQAAAHgDAHQgEAMgKAAQgIAAgCgEgAjGh+QAAgPAMgCQAMgDAAANQAAAOgPAAQgJAAAAgHg");
	this.shape_10.setTransform(-27.6,83.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkHBPIgGgCIgGgCIAzgaIA2gcIAPgCQASgCAOgEQAHgDALgKQAGgHANABQALAAAfAGQAGACABAFIAAAHQAAAFgDAFQgEAEAAAJIArABIAAgLQAFAAAGACIAOAAQAIgHABgPQABgNAFgFQAmgCAKgCQAFgBAAgDQAAgIgHgLQgGgKAAgOQAAglAfAfQAQAPATAXQAGAAADgCIAEgDIAVAAQAOASASAjQAXAhAqATQgDAEgEAAQgJAAgKgGIgBAAIgmAAIgCgBIhwgBQgSgFgFAAIgYACIgVACIhwAAIgMAGIADACIADAEQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAIhBACg");
	this.shape_11.setTransform(-24,90.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiGBbIgWgEIgtgGIg9gBQgKgCgCgDQgBgBAAgFQAAgHABgBQAFgEAUgBIAKgNQAJgMAEAAQAGAAALADIAPAAIAKgFQAXgKAWgHQBCgSAAAdQAAALgWAMQgJAGgHAFIANAKQAKAAALgHQALgHALAAQAQAAAGAGIAHAIIACgTQADgSAHAAQAEAAAKAGQALAHADAAQAGACAJAFIAJAEIAHAAIABgCQgEgTgOghQgNgbAAgDQAAgNAQgWQAUgdAYAEQAMAHAMAVQAOAaAJAJQAZABAEAIIABACQAJgDALAKQAMAJANATQAoAsAmASIABADQgBADgGAAQgEAAgFgCQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAQgIAAAFgEQgFgDgyAAIgkAFIhvAAIgiADIhBABIgVADg");
	this.shape_12.setTransform(-24.4,90.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkCBdQgFgGAAgHQAAgLBNghQBJggANAAQAoAAANAaQAHAOADAEQAIAIARAAQAGAAAFgCQADgDAAgCQAAgUgQgWQgSgUAAgYQAAgxAcgOQAngVBaBNQAXAnAoAcQAMAJAXAaQASAVAXAMIAAACIgEABQgFAAgFgEQAAADgEABQggAAgCgBIk1AAIg8AHIgtAAIgJAEQgGABgMAAQgUAAgJgMg");
	this.shape_13.setTransform(-24.9,88.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// Calque 4
	this.instance = new lib.head_yellow();
	this.instance.setTransform(3.8,5.3,1,1,-11.5,0,0,0,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20.3},2).to({y:10.3},3).to({y:25.3},2).to({y:10.3},2).wait(1));

	// Calque 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(16,1).p("AobgfQIqCUGeBkQGeBjxjoj");
	this.shape_14.setTransform(-38.4,-4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(16,1).p("AoWhZQITEVGmBMQGnBMxapj");
	this.shape_15.setTransform(-38.4,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(16,1).p("AoRiUQH7GWGvA0QGxA0xTqj");
	this.shape_16.setTransform(-38.4,6.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(16,1).p("AoUhaQIAEzGvA0QGxA0xWpR");
	this.shape_17.setTransform(-38.6,7.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(16,1).p("AoWghQIFDRGvA0QGxA0xZoA");
	this.shape_18.setTransform(-38.9,8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(16,1).p("AoYAWQIKBwGvA0QGxA0xdmt");
	this.shape_19.setTransform(-39.2,8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(16,1).p("AoVg+QIDECGvA0QGxA0xYoo");
	this.shape_20.setTransform(-38.8,10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(16,1).p("AoQg2QH5D/GvA0QGxA0xfoy");
	this.shape_21.setTransform(-38.3,9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(16,1).p("AoOAlQH2BsGvA0QGxA0xrnC");
	this.shape_22.setTransform(-38.2,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{y:6.5}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_16,p:{y:11.5}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(1));

	// Calque 2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(16,1).p("Ajgh8QFoicBZG9");
	this.shape_23.setTransform(39.5,40.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(16,1).p("AhRklQEQCfi1Gs");
	this.shape_24.setTransform(25.2,57.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(16,1).p("AgwjsQC3FBidCY");
	this.shape_25.setTransform(21.9,66.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(16,1).p("ABlj2QBOFBknCs");
	this.shape_26.setTransform(6.8,62.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(16,1).p("AiaDNQFQhNgdlM");
	this.shape_27.setTransform(1.6,56);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(16,1).p("ADHiiQgTFWl6gS");
	this.shape_28.setTransform(-3,49.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(16,1).p("AjZBvQGRCMAimN");
	this.shape_29.setTransform(-4.9,55.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(16,1).p("ADtiOQgxHDmnkG");
	this.shape_30.setTransform(-6.7,62.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(16,1).p("ABMjEQCzELmCB+");
	this.shape_31.setTransform(9.3,52.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(16,1).p("AiQi0QFYgehBGK");
	this.shape_32.setTransform(31.5,51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23}]}).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).wait(1));

	// Calque 3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(16,1).p("ACTieQBSFsmFg3");
	this.shape_33.setTransform(2.2,43.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(16,1).p("AhDjHQEECNjvEC");
	this.shape_34.setTransform(23.8,48);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(16,1).p("AiijYQE6AGALGr");
	this.shape_35.setTransform(33.3,59.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(16,1).p("AjHjPQFcgeAzG/");
	this.shape_36.setTransform(37,55.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(16,1).p("AjrjEQF9hDBaHU");
	this.shape_37.setTransform(40.6,51);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(16,1).p("AkQi2QGfhoCCHo");
	this.shape_38.setTransform(44.3,46.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(16,1).p("AjRjWQE3AmBsGH");
	this.shape_39.setTransform(38,57);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(16,1).p("AiTjsQDQCyBXEn");
	this.shape_40.setTransform(31.8,66.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(16,1).p("AAQk1QAvD6heFx");
	this.shape_41.setTransform(15.3,59);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(16,1).p("AB2jvQBlHDlmAc");
	this.shape_42.setTransform(5.1,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.4,-99.5,170.6,197.8);


(lib.walking_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("AlQB6IKhjz");
	this.shape.setTransform(-9.7,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(16,1).p("AlXBlIKvjJ");
	this.shape_1.setTransform(-7.8,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(16,1).p("AldBQIK7if");
	this.shape_2.setTransform(-5.9,28.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(16,1).p("AldBPIK7id");
	this.shape_3.setTransform(-6.8,29.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(16,1).p("AldBNIK8iZ");
	this.shape_4.setTransform(-7.8,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(16,1).p("AleBLIK9iV");
	this.shape_5.setTransform(-8.8,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(16,1).p("AleBKIK9iT");
	this.shape_6.setTransform(-9.8,31.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(16,1).p("AlfBEIK/iI");
	this.shape_7.setTransform(-9.5,30.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(16,1).p("AlgA/ILBh9");
	this.shape_8.setTransform(-9.3,29.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(16,1).p("AlYBdIKxi5");
	this.shape_9.setTransform(-9.5,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Calque 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(16,1).p("AlGibQHjAICqEv");
	this.shape_10.setTransform(17.3,49.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(16,1).p("AkdjZQGzBXCIFc");
	this.shape_11.setTransform(13.2,55.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(16,1).p("Aj0kYQGECnBlGK");
	this.shape_12.setTransform(9.1,61.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(16,1).p("Ai5kZQFmC6ANF5");
	this.shape_13.setTransform(3.2,62);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(16,1).p("AiFkZQFIDMhLFn");
	this.shape_14.setTransform(-2,62.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(16,1).p("AhgkaQEqDeiiFX");
	this.shape_15.setTransform(-5.7,62.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(16,1).p("AhFkaQENDwj5FF");
	this.shape_16.setTransform(-8.4,62.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(16,1).p("AAskaQDGDYlkFd");
	this.shape_17.setTransform(-19.9,62.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(16,1).p("AAtkaQE8FPoMDm");
	this.shape_18.setTransform(-20,62.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(16,1).p("Ah7jPQIuErpHB0");
	this.shape_19.setTransform(-3,54.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(16,1).p("AjRjUQG5B5gXEw");
	this.shape_20.setTransform(5.6,55.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Calque 3
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(16,1).p("ABrkSQA9FfkdDG");
	this.shape_21.setTransform(-4.1,63.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(16,1).p("AhZEKQEPjZiLk6");
	this.shape_22.setTransform(2.3,62.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(16,1).p("AgbkAQDWEVj/Ds");
	this.shape_23.setTransform(9.5,61.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(16,1).p("AhyjcQFFCHiHEx");
	this.shape_24.setTransform(5.7,58.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(16,1).p("Ah9iCQEEAOgJD2");
	this.shape_25.setTransform(11.9,57.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(16,1).p("Aimg+QDyhyBbER");
	this.shape_26.setTransform(17.1,55.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(16,1).p("AjVhqQEngpCFED");
	this.shape_27.setTransform(17.8,60.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(16,1).p("AjFicQDwAWCbEj");
	this.shape_28.setTransform(16.2,65.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(16,1).p("Ai1jMQC6BVCxFE");
	this.shape_29.setTransform(14.6,70.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(16,1).p("Ag+kSQDhDNivFY");
	this.shape_30.setTransform(-1.3,65.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(16,1).p("AgJkOQAnE1gkDo");
	this.shape_31.setTransform(-2.4,64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(1));

	// Calque 4
	this.instance = new lib.head();
	this.instance.setTransform(-21.7,10.3,1,1,-20.5,0,0,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,rotation:-13.5,x:-15.1,y:6},2).to({regX:0,rotation:-11.7,x:-17.2,y:10.3},4).to({regY:41.5,rotation:-10.7,x:-17.5,y:6.8},2).to({regY:41.4,rotation:-20.5,x:-21.7,y:10.3},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-99.4,153.1,198.5);


(lib.walking_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.walking_hand_01();
	this.instance.setTransform(-0.4,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:-5.4,y:8.6},3).to({rotation:0,x:-0.4,y:26.1},3).to({y:11.1},3).to({rotation:-15,y:5.1},3).to({rotation:0,y:26.1},3).to({y:17.1},2).wait(1));

	// Calque 2
	this.instance_1 = new lib.walking_foot_1();
	this.instance_1.setTransform(-3.6,35.9,1,1,0,0,0,-18.1,-16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-18.2,rotation:-30.5,y:31},3).to({rotation:51.5,x:-3.5,y:45.9},3).to({rotation:117.2,y:30.9},3).to({rotation:132.2,y:25.9},3).to({rotation:51.5,y:45.9},3).to({regX:-18.1,rotation:0,x:-3.6,y:35.9},2).wait(1));

	// Calque 3
	this.instance_2 = new lib.walking_foot_1();
	this.instance_2.setTransform(-3.5,35.9,1,1,97.3,0,0,-18.1,-16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:127.3,y:30.9},3).to({rotation:22.3,y:46},3).to({rotation:-7.7,y:31},3).to({regY:-16.7,rotation:-22.7,y:26},3).to({regY:-16.6,rotation:22.3,y:46},3).to({rotation:97.3,y:35.9},2).wait(1));

	// Calque 4
	this.instance_3 = new lib.head();
	this.instance_3.setTransform(-1.7,-4.7,1,1,0,0,0,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-15,x:-11.7,y:-10.2},3).to({rotation:0,x:-1.7,y:4.8},3).to({y:-10.2},3).to({rotation:-15,x:-6.7,y:-15.2},3).to({rotation:0,x:-1.7,y:4.8},3).to({y:-4.7},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-99.4,108.4,180.1);


(lib.walking_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("Al2AAILtAA");
	this.shape.setTransform(-0.4,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:15.8},0).wait(1).to({y:14.6},0).wait(1).to({y:13.3},0).wait(1).to({y:12.1},0).wait(1).to({y:13.3},0).wait(1).to({y:14.6},0).wait(1).to({y:15.8},0).wait(1).to({y:17.1},0).wait(2).to({y:27.1},0).wait(1));

	// Calque 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(16,1).p("AizikQFPAIAYFB");
	this.shape_1.setTransform(14.5,52.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(16,1).p("AAdjjIg5HH");
	this.shape_2.setTransform(-6.5,58.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(16,1).p("AAbjjIg0HH");
	this.shape_3.setTransform(-6.7,67.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({y:51.2},0).wait(1).to({y:50},0).wait(1).to({y:48.7},0).wait(1).to({y:47.5},0).wait(1).to({y:48.7},0).wait(1).to({y:50},0).wait(1).to({y:51.2},0).wait(1).to({y:52.5},0).to({_off:true},1).wait(2));

	// Calque 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(16,1).p("ACfikQgdFEkgAF");
	this.shape_4.setTransform(-19.5,52.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(16,1).p("AieClQEggFAdlE");
	this.shape_5.setTransform(-19.5,51.2);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(16,1).p("AhKiuQDEAng+E2");
	this.shape_6.setTransform(4,53.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(16,1).p("AhNixQC5AvgkE0");
	this.shape_7.setTransform(3.8,62.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{y:52.5}}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4,p:{y:47.5}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4,p:{y:52.5}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1).to({_off:false},0).wait(1).to({y:50},0).wait(1).to({y:48.7},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({y:50},0).wait(1).to({y:51.2},0).to({_off:true},1).wait(3));

	// Calque 4
	this.instance = new lib.head();
	this.instance.setTransform(-1.7,-4.7,1,1,0,0,0,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-9.7},4).to({y:-4.7},4).wait(1).to({y:5.3},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-99.4,104.4,176.5);


(lib.walking_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("Al2AAILtAA");
	this.shape.setTransform(-0.4,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// Calque 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(16,1).p("Ai6jkQFxBgAEFq");
	this.shape_1.setTransform(11.8,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(16,1).p("AjRj7QF3B+AsF5");
	this.shape_2.setTransform(14.1,52.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(16,1).p("AjnkQQF8CaBTGH");
	this.shape_3.setTransform(16.3,54.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(16,1).p("Aj9kmQGBC3B7GW");
	this.shape_4.setTransform(18.6,56.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(16,1).p("AkUk8QGHDUCiGl");
	this.shape_5.setTransform(20.8,58.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(16,1).p("Ajgk7QFNDkB0GT");
	this.shape_6.setTransform(15.6,58.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(16,1).p("Airk6QERD0BGGB");
	this.shape_7.setTransform(10.3,58.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(16,1).p("Ah3k5QDXEFAYFu");
	this.shape_8.setTransform(5.1,58.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(16,1).p("AhDk4QCbEVgWFc");
	this.shape_9.setTransform(-0.1,58.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(16,1).p("Agbk3QBfElhDFK");
	this.shape_10.setTransform(-4.1,58.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(16,1).p("AgIk3QBgElh5FK");
	this.shape_11.setTransform(-6,58.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(16,1).p("AALk3QBiElicFK");
	this.shape_12.setTransform(-8.1,58.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(16,1).p("AAfk3QBhEli+FK");
	this.shape_13.setTransform(-10.1,58.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(16,1).p("AhaE4QD7lKhikl");
	this.shape_14.setTransform(-13.3,58.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(16,1).p("ABfk3QBiElk3FK");
	this.shape_15.setTransform(-16.5,58.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(16,1).p("Ah2E4QE3lKhikl");
	this.shape_16.setTransform(-16.5,58.3);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(16,1).p("Ah/EqQFLkuhikl");
	this.shape_17.setTransform(-17.6,56.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(16,1).p("AiJEcQFfkUhikj");
	this.shape_18.setTransform(-18.6,55.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(16,1).p("AiSEOQFzj4hikj");
	this.shape_19.setTransform(-19.7,54.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(16,1).p("AicEAQGHjchikj");
	this.shape_20.setTransform(-20.7,52.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(16,1).p("ACUjxQBiEjmbDA");
	this.shape_21.setTransform(-21.8,51.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(16,1).p("AA9jsQBiEjj2C2");
	this.shape_22.setTransform(-13.1,50.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(16,1).p("AhFj9QBgEiAqDa");
	this.shape_23.setTransform(0.1,52.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(16,1).p("AhXj9QCwEFgBD3");
	this.shape_24.setTransform(1.9,52.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(16,1).p("Ahsj9QD/DpgsET");
	this.shape_25.setTransform(4,52.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(16,1).p("AiEj9QFODLhWEx");
	this.shape_26.setTransform(6.4,52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(15).to({_off:false},0).wait(3).to({_off:true},1).wait(11));

	// Calque 3
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(16,1).p("AC9kGQiwFOjJC/");
	this.shape_27.setTransform(-15,64.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(16,1).p("AjCEIQDvjKCWlF");
	this.shape_28.setTransform(-14.4,64.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(16,1).p("AjJEJQEXjWB8k7");
	this.shape_29.setTransform(-13.7,64.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(16,1).p("AjPELQE8jjBjkx");
	this.shape_30.setTransform(-13.1,64.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(16,1).p("ADWkLQhJEoliDv");
	this.shape_31.setTransform(-12.5,64.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(16,1).p("AjJDvQFji4Awkl");
	this.shape_32.setTransform(-13.8,61.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(16,1).p("Ai9DRQFliAAWkh");
	this.shape_33.setTransform(-15.1,59.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(16,1).p("AixC0QFmhKgDkd");
	this.shape_34.setTransform(-16.4,56.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(16,1).p("AimCWQFngSgdka");
	this.shape_35.setTransform(-17.6,54);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(16,1).p("ACWh6QA1EWlngl");
	this.shape_36.setTransform(-18.7,51.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(16,1).p("ABOieQA2EWjcAn");
	this.shape_37.setTransform(-11.5,55.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(16,1).p("AhAitQC+A/haEc");
	this.shape_38.setTransform(2.9,56.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(16,1).p("Ahli+QDnBbgfEi");
	this.shape_39.setTransform(6.6,58.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(16,1).p("AiciRQFXgFghEo");
	this.shape_40.setTransform(12.1,58.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(16,1).p("AidioQFEgKgJFb");
	this.shape_41.setTransform(12.2,61.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(16,1).p("Aifi0QEjAUAcFV");
	this.shape_42.setTransform(12.4,62.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(16,1).p("AihjAQECAyBBFP");
	this.shape_43.setTransform(12.6,63.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(16,1).p("AijjMQDfBQBoFJ");
	this.shape_44.setTransform(12.8,64.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(16,1).p("AiljYQC+BvCNFC");
	this.shape_45.setTransform(13,65.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(16,1).p("AinjkQCfCNCwE8");
	this.shape_46.setTransform(13.2,67.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(16,1).p("AiHjlQCFCSCKE5");
	this.shape_47.setTransform(10,67.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(16,1).p("AhnjmQBrCYBkE1");
	this.shape_48.setTransform(6.8,67.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(16,1).p("AhHjnQBSCdA9Ey");
	this.shape_49.setTransform(3.6,67.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(16,1).p("AgnjoQA5CiAWEv");
	this.shape_50.setTransform(0.4,67.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(16,1).p("AgKjpQAgCogREr");
	this.shape_51.setTransform(-2.5,67.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(16,1).p("AApkMQAJDzhaEm");
	this.shape_52.setTransform(-5.3,63.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(16,1).p("ABJkOQAJDyibEr");
	this.shape_53.setTransform(-8.5,63.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(16,1).p("AhdEYQDCkrgHkE");
	this.shape_54.setTransform(-10.4,63);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(16,1).p("AhxEiQDokrgGkY");
	this.shape_55.setTransform(-12.2,62.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(16,1).p("ACGkqQADEpkOEs");
	this.shape_56.setTransform(-14,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).wait(1));

	// Calque 4
	this.instance = new lib.head();
	this.instance.setTransform(-1.7,0.3,1,1,0,0,0,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-94.4,104.4,193.5);


(lib.walking_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("Al2AAILtAA");
	this.shape.setTransform(-0.4,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:24.6},0).wait(1).to({y:22.1},0).wait(1).to({y:20.8},0).wait(1).to({y:19.6},0).wait(1).to({y:18.3},0).wait(1).to({y:17.1},0).wait(1).to({y:18.7},0).wait(1).to({y:20.4},0).wait(1).to({y:22.1},0).wait(1).to({y:24.6},0).wait(1).to({y:27.1},0).wait(1).to({y:23.7},0).wait(1).to({y:20.4},0).wait(1).to({y:17.1},0).wait(1).to({y:15.8},0).wait(1).to({y:14.6},0).wait(1).to({y:13.3},0).wait(1).to({y:12.1},0).wait(1).to({y:13.7},0).wait(1).to({y:15.4},0).wait(1).to({y:17.1},0).wait(1).to({y:24.6},0).wait(1).to({y:32.1},0).wait(1));

	// Calque 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(16,1).p("Agfk5IA/J0");
	this.shape_1.setTransform(-3.7,58.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(16,1).p("AiEkGQDTEGA2EH");
	this.shape_2.setTransform(6.4,50.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(16,1).p("AjpjTQGHDTBNDU");
	this.shape_3.setTransform(16.6,43.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(16,1).p("AjyjMQGHDSBeDH");
	this.shape_4.setTransform(17.4,41.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(16,1).p("Aj6jFQGHDSBuC5");
	this.shape_5.setTransform(18.2,39.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(16,1).p("AkCi/QGHDTB+Cs");
	this.shape_6.setTransform(19,37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(16,1).p("AkKi3QGHDSCOCe");
	this.shape_7.setTransform(19.8,35.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(16,1).p("Aj/jBQGHDSB4Cx");
	this.shape_8.setTransform(18.7,38.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(16,1).p("Aj0jKQGHDSBiDD");
	this.shape_9.setTransform(17.6,40.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(16,1).p("AAqkbQAcEKh0Eu");
	this.shape_10.setTransform(-11.2,55.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(16,1).p("ACEj7QALGqkSBN");
	this.shape_11.setTransform(-20.2,52.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(16,1).p("AChjYQA3Hdl/gx");
	this.shape_12.setTransform(-23.1,38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(16,1).p("AikDBQFrBBglnK");
	this.shape_13.setTransform(-23.2,36);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(16,1).p("AijCtQFZBTgTm5");
	this.shape_14.setTransform(-23.3,33.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(16,1).p("AiiCYQFFBkgBmn");
	this.shape_15.setTransform(-23.2,30.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(16,1).p("ACiidQgRGVkyh1");
	this.shape_16.setTransform(-23.2,27.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(16,1).p("AiiCgQFMBegHmt");
	this.shape_17.setTransform(-23.3,31.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(16,1).p("AikC6QFlBIgenF");
	this.shape_18.setTransform(-23.3,35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(16,1).p("AhzD8QEVhTg2mk");
	this.shape_19.setTransform(-17.8,49.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(16,1).p("AA1khQA3FsitDX");
	this.shape_20.setTransform(-12.3,61.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Calque 3
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(16,1).p("AA1jqIhpHV");
	this.shape_21.setTransform(-10.6,67.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(16,1).p("AiPC6QDghqA/kJ");
	this.shape_22.setTransform(-12.5,56.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(16,1).p("ADqiJQhIEomLgW");
	this.shape_23.setTransform(-14.5,46.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(16,1).p("AjoB9QGIAqBJko");
	this.shape_24.setTransform(-14.4,44.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(16,1).p("AjnBvQGGBABJko");
	this.shape_25.setTransform(-14.2,42.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(16,1).p("AjlBhQGDBVBIko");
	this.shape_26.setTransform(-14.1,40.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(16,1).p("ADlhsQhIEomBhr");
	this.shape_27.setTransform(-14,38.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(16,1).p("AjmBlQGEBOBJko");
	this.shape_28.setTransform(-14.2,40.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(16,1).p("AjnB4QGHAyBIko");
	this.shape_29.setTransform(-14.3,43.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(16,1).p("AgjjJQCPC0iPDf");
	this.shape_30.setTransform(-1.6,64.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(16,1).p("Ah4jHQDUBLAdFE");
	this.shape_31.setTransform(6.9,64);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(16,1).p("AjIiQQEpAPBoES");
	this.shape_32.setTransform(14.9,48.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(16,1).p("AjMiDQEpAPBwD4");
	this.shape_33.setTransform(15.4,46);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(16,1).p("AjRh1QEqAPB5Dc");
	this.shape_34.setTransform(15.8,43.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(16,1).p("AjVhpQEpAPCCDE");
	this.shape_35.setTransform(16.3,40.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(16,1).p("AjZhbQEpAPCKCo");
	this.shape_36.setTransform(16.7,38.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(16,1).p("AjUhtQEpAPB/DM");
	this.shape_37.setTransform(16.1,41.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(16,1).p("AjOh+QEpAPB0Du");
	this.shape_38.setTransform(15.5,45.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(16,1).p("AiHitQDHBpBIDy");
	this.shape_39.setTransform(8.4,58.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(16,1).p("AhGjJQBlDBAoDS");
	this.shape_40.setTransform(1.9,69.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).wait(1));

	// Calque 4
	this.instance = new lib.head();
	this.instance.setTransform(-1.7,0.3,1,1,0,0,0,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.7},2).to({y:-9.7},4).to({y:-4.7},3).to({y:0.3},2).to({y:-9.7},3).to({y:-14.7},4).to({y:-9.7},3).to({y:5.3},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-94.4,104.4,193.5);


(lib.copiewalking_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.instance = new lib.head();
	this.instance.setTransform(-1.7,0.3,1,1,0,0,0,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9,x:-6.7,y:-3.7},2).to({regX:-0.1,rotation:-8.7,x:-10.7,y:-4.7},4).to({rotation:-5.2,y:-3.7},3).to({regX:0,rotation:0,x:-1.7,y:0.3},2).to({rotation:6.7,x:1.8,y:-6.2},3).to({rotation:8.7,y:-10.7},4).to({rotation:8,x:2.8,y:-6.2},3).to({rotation:0,x:-1.7,y:5.3},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-94.4,104.4,193.5);


// stage content:



(lib.walking_okaoka = function() {
	this.initialize();

	// Calque 4
	this.instance = new lib.walking_09();
	this.instance.setTransform(607.5,112,1,1,0,0,0,-76.5,-111);

	this.instance_1 = new lib.walking_07();
	this.instance_1.setTransform(465.1,193.8,1,1,0,0,0,-10.5,-29.7);

	this.instance_2 = new lib.walking_06();
	this.instance_2.setTransform(61.5,619.2,0.216,0.216,0,0,0,-10.4,-29.7);

	this.instance_3 = new lib.copiewalking_05();
	this.instance_3.setTransform(280,193.8,1,1,0,0,0,-10.5,-29.7);

	this.instance_4 = new lib.walking_04();
	this.instance_4.setTransform(160.3,621.8,0.216,0.216,0,0,0,-10.4,-29.7);

	this.instance_5 = new lib.walking_03();
	this.instance_5.setTransform(128.3,621.8,0.216,0.216,0,0,0,-10.7,-29.7);

	this.instance_6 = new lib.walking_02();
	this.instance_6.setTransform(97,619.2,0.216,0.216,0,0,0,-10.4,-29.7);

	this.instance_7 = new lib.walking_01();
	this.instance_7.setTransform(98,193.8,1,1,0,0,0,-10.5,-29.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1).p("Eh2OAZUMDsdAAAEh2OgZTMDsdAAA");
	this.shape.setTransform(753.7,483.2);

	this.addChild(this.shape,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(745.5,512,1516.5,535);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;