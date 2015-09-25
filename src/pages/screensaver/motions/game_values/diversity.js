(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 600,
	fps: 60,
	color: "#612B9B",
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


(lib.monsieurtrianglehead = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAPkSIExIlIp/AAg");
	this.shape.setTransform(2,-1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.5,-35,77,68);


(lib.monsieurcirclehead = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AFKAAQAACIhhBhQhhBhiIAAQiHAAhhhhQhhhhAAiIQAAiHBhhhQBhhhCHAAQCIAABhBhQBhBhAACHg");
	this.shape.setTransform(0.8,-2.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.7,-42.2,79,79);


(lib.DIVERSITYHEAD = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AGrAAQAACxh9B9Qh9B+ixAAQiwAAh9h+Qh9h9AAixQAAiwB9h9QB9h+CwAAQCxAAB9B+QB9B9AACwgAjMjKIGSAAIAAGSImSAAg");
	this.shape.setTransform(1.6,-0.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.6,-50.1,98.6,98.6);


(lib.winning_dance_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 5
	this.instance = new lib.okaokaplaydot();
	this.instance.setTransform(57.8,12.7,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:60.9,y:50.8},4).wait(6).to({rotation:0,x:57.8,y:15.6},4).to({rotation:-90,x:59.6,y:-34.8},3).to({rotation:-105,x:50.2,y:-30.9},3).to({rotation:-90,x:59.5,y:-30.5},4).to({rotation:0,x:57.6,y:13.5},5).wait(1));

	// Calque 6
	this.instance_1 = new lib.okaokaplaydot();
	this.instance_1.setTransform(57.8,37,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:54.6,y:74.2},4).wait(6).to({rotation:0,x:57.8,y:39.8},4).to({rotation:-90,x:83.8,y:-34.8},3).to({rotation:-105,x:73.6,y:-37.2},3).to({rotation:-90,x:83.7,y:-30.5},4).to({rotation:0,x:57.6,y:37.8},5).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("Al2AAILtAA");
	this.shape.setTransform(-0.4,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(16,1).p("AmehpQClCXF2gRQDPgEBTBR");
	this.shape_1.setTransform(-4.4,26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(16,1).p("AnGjTQBXEvH8ghQEZgJAhCi");
	this.shape_2.setTransform(-8.4,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(16,1).p("Anuk9QAJHHKCgyQFigNgRDz");
	this.shape_3.setTransform(-12.4,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(16,1).p("AoXmoQhFJhMIhEQGsgQhDFE");
	this.shape_4.setTransform(-16.3,24.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(16,1).p("AoEmrQhrJYMPg1QGsgQhEFE");
	this.shape_5.setTransform(-15.1,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(16,1).p("AnvmuQiRJPMVglQGsgRhEFE");
	this.shape_6.setTransform(-14,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(16,1).p("AnZmyQi3JHMbgWQGsgQhEFE");
	this.shape_7.setTransform(-13,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(16,1).p("AmeB9QBUh2DuASQFWAYClit");
	this.shape_8.setTransform(6.7,27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(16,1).p("AnGD7QATjsFHAkQHMAwBnld");
	this.shape_9.setTransform(13.9,27.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(16,1).p("AnrF5QgulhGhA2QJBBGAooM");
	this.shape_10.setTransform(20.8,27.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(16,1).p("AnkF8QgulhGhA2QJZAvABn7");
	this.shape_11.setTransform(20.1,27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(16,1).p("AndGAQguliGhA2QJwAYglnr");
	this.shape_12.setTransform(19.4,27.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(16,1).p("AnZGDQgulhGhA2QKIAAhMna");
	this.shape_13.setTransform(19,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(16,1).p("AncGBQguliGhA2QJ2ASgvnn");
	this.shape_14.setTransform(19.3,27.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(16,1).p("AngF+QgulhGhA2QJkAjgSnz");
	this.shape_15.setTransform(19.7,27.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(16,1).p("AnmF8QguliGhA2QJTA2ALoB");
	this.shape_16.setTransform(20.3,27.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(16,1).p("AnVEtQgHkbFrAsQH6A4BOmi");
	this.shape_17.setTransform(16.7,27.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(16,1).p("Am+DiQAgjUE2AgQGzArBzk6");
	this.shape_18.setTransform(12.5,27.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(16,1).p("AmmCWQBHiNEAAVQFuAdCYjQ");
	this.shape_19.setTransform(8.2,27.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(16,1).p("AmOBLQBuhGDKAKQEnAPC+ho");
	this.shape_20.setTransform(3.9,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Calque 2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(16,1).p("AjCk5IGFJ0");
	this.shape_21.setTransform(12.6,58.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(16,1).p("AjHkmQCJFhEGDs");
	this.shape_22.setTransform(15.6,60.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(16,1).p("AjNkTQBQGKFLCc");
	this.shape_23.setTransform(18.7,63);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(16,1).p("AjSj/QAVGxGQBO");
	this.shape_24.setTransform(21.8,65.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(16,1).p("AjXjsQgkHaHVgC");
	this.shape_25.setTransform(24.7,67.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(16,1).p("AjWjpQglHUHVgB");
	this.shape_26.setTransform(24.8,67.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(16,1).p("AjVjnQgnHQHVgC");
	this.shape_27.setTransform(24.9,67.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(16,1).p("AjUjkQgpHLHVgC");
	this.shape_28.setTransform(24.9,68.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(16,1).p("AjWjnQglHQHVgC");
	this.shape_29.setTransform(24.8,67.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(16,1).p("AjYjpQgiHUHVgB");
	this.shape_30.setTransform(24.7,67.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(16,1).p("AjajsQgeHaHUgC");
	this.shape_31.setTransform(24.5,67.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(16,1).p("AjUj/QAZGxGQBO");
	this.shape_32.setTransform(21.6,65.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(16,1).p("AjOkTQBSGKFLCc");
	this.shape_33.setTransform(18.6,63);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(16,1).p("AjIkmQCLFhEGDs");
	this.shape_34.setTransform(15.6,60.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(16,1).p("AjhkQQEUDNCvFU");
	this.shape_35.setTransform(19.8,63.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(16,1).p("AkBjlQFnBdCcFu");
	this.shape_36.setTransform(26.9,68.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(16,1).p("Akgi7QG5gRCIGI");
	this.shape_37.setTransform(34.1,73.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(16,1).p("Akgi5QG5gkCIGa");
	this.shape_38.setTransform(34.1,73.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(16,1).p("Akgi4QG5g1CIGr");
	this.shape_39.setTransform(34.1,73.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(16,1).p("Akgi1QG5hICIG9");
	this.shape_40.setTransform(34.1,73.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(16,1).p("Akbi4QGug1CJGs");
	this.shape_41.setTransform(34.7,73.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(16,1).p("AkVi6QGjgiCIGa");
	this.shape_42.setTransform(35.3,73.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(16,1).p("AkQi8QGYgPCJGJ");
	this.shape_43.setTransform(35.8,73.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(16,1).p("AkKi+QGNAFCIF3");
	this.shape_44.setTransform(36.4,73.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(16,1).p("Aj8jWQFkBCCUFr");
	this.shape_45.setTransform(31.6,70.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(16,1).p("AjtjvQE7CACgFf");
	this.shape_46.setTransform(26.9,67.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(16,1).p("AjfkIQETC/CsFS");
	this.shape_47.setTransform(22.1,64.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(16,1).p("AjQkhQDqD9C3FG");
	this.shape_48.setTransform(17.3,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// Calque 3
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(16,1).p("AC0j2IlnHt");
	this.shape_49.setTransform(-15.9,66.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(16,1).p("AjLDkQC4kcDfir");
	this.shape_50.setTransform(-18.3,68.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(16,1).p("AjiDRQC6lCELhf");
	this.shape_51.setTransform(-20.7,70.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(16,1).p("Aj6C+QC+loE3gT");
	this.shape_52.setTransform(-23,72.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(16,1).p("AETinQlkg5jBGP");
	this.shape_53.setTransform(-25.4,74);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(16,1).p("AkSCvQDBmPFkA5");
	this.shape_54.setTransform(-25.4,74);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(16,1).p("Ai5DxQD7ioB4k5");
	this.shape_55.setTransform(-15.3,66.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(16,1).p("Ai/DsQFEhZA7l+");
	this.shape_56.setTransform(-14.7,67.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(16,1).p("ADFjmQADHDmMAJ");
	this.shape_57.setTransform(-14.2,68);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(16,1).p("AjEDmQGMgJgDnD");
	this.shape_58.setTransform(-14.2,68);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(16,1).p("AjCDlQGMgJgHnA");
	this.shape_59.setTransform(-14.4,68.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(16,1).p("Ai/DkQGMgKgNm9");
	this.shape_60.setTransform(-14.7,68.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(16,1).p("Ai9DjQGMgKgSm7");
	this.shape_61.setTransform(-14.9,68.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(16,1).p("AC7jhQAWG5mMAJ");
	this.shape_62.setTransform(-15.1,68.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(16,1).p("Ai5DmQFhg5ASmS");
	this.shape_63.setTransform(-15.3,68);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(16,1).p("Ai3DqQE1hoA6lr");
	this.shape_64.setTransform(-15.5,67.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(16,1).p("Ai2DuQEJiYBklD");
	this.shape_65.setTransform(-15.6,67.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(16,1).p("Ai0DyQDdjHCMkc");
	this.shape_66.setTransform(-15.8,66.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_49}]},1).wait(1));

	// Calque 4
	this.instance_2 = new lib.DIVERSITYHEAD();
	this.instance_2.setTransform(-1.7,0.3,1,1,0,0,0,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:7.7,y:14.3},4).wait(6).to({rotation:0,y:0.3},4).to({rotation:-7.5,x:8.3,y:10.3},3).wait(7).to({rotation:0,x:-1.7,y:0.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,-91.3,114.6,190.4);


(lib.monsieurTRIANGLERUN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// okaokaplayhead
	this.instance = new lib.monsieurtrianglehead();
	this.instance.setTransform(-7.8,-10.9,1,1,6,0,0,-1.4,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:28.8,rotation:-4.7,x:-18.3,y:-18.9},13).to({rotation:-4.7,y:-8.9},7).to({regX:-0.1,rotation:4.6,x:-13.3,y:-13.9},6).to({regX:0,rotation:5,y:-18.8},6).to({regX:-1.4,regY:29.6,rotation:6,x:-7.8,y:-10.9},7).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEoAaQklAgkqhb");
	this.shape.setTransform(-14.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngfQEpBbEmgo");
	this.shape_1.setTransform(-14.2,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngdQEpBbEmgw");
	this.shape_2.setTransform(-14.2,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngcQEpBbEmg4");
	this.shape_3.setTransform(-14.2,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngaQEpBbEmg/");
	this.shape_4.setTransform(-14.2,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngZQEpBbEmhF");
	this.shape_5.setTransform(-14.2,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngYQEpBbEmhN");
	this.shape_6.setTransform(-14.2,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngXQEpBbEmhU");
	this.shape_7.setTransform(-14.2,10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngVQEpBbEmhc");
	this.shape_8.setTransform(-14.2,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngQQEpBbEmhk");
	this.shape_9.setTransform(-14.2,8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngMQEpBbEmhr");
	this.shape_10.setTransform(-14.2,7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngHQEpBbEmhz");
	this.shape_11.setTransform(-14.2,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngCQEpBbEmh7");
	this.shape_12.setTransform(-14.2,4.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEogmQkmCDkphd");
	this.shape_13.setTransform(-14.2,3.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(13,1,1).p("AknAAQEpBdEmiD");
	this.shape_14.setTransform(-14.2,5.2);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngHQEoBjEnh+");
	this.shape_15.setTransform(-14.2,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngQQEnBqEoh5");
	this.shape_16.setTransform(-14.2,13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngaQEmByEph0");
	this.shape_17.setTransform(-14.2,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngfQElB6Eqhw");
	this.shape_18.setTransform(-14.2,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngiQEjCBEshr");
	this.shape_19.setTransform(-14.2,11.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEogDQktBlkiiI");
	this.shape_20.setTransform(-14.2,10.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngmQEhCIEuhl");
	this.shape_21.setTransform(-14.2,8.6);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEogDQkuBlkhiI");
	this.shape_22.setTransform(-14.2,0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(13,1,1).p("AknglQEjCCEshd");
	this.shape_23.setTransform(-14.2,2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngkQEkB7ErhT");
	this.shape_24.setTransform(-14.2,5.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngjQEmB1EphJ");
	this.shape_25.setTransform(-14.2,7.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngjQEnBvEog/");
	this.shape_26.setTransform(-14.2,9.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkngiQEnBoEog1");
	this.shape_27.setTransform(-14.2,12.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(13,1,1).p("AknghQEoBhEngq");
	this.shape_28.setTransform(-14.2,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13,p:{y:3.7}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13,p:{y:13.7}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(14).to({_off:false},0).wait(1).to({y:6.6},0).wait(1).to({y:8},0).wait(1).to({y:9.4},0).wait(1).to({y:10.9},0).wait(1).to({y:12.3},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(27).to({_off:false},0).wait(1).to({y:6.9},0).wait(1).to({y:5.3},0).wait(1).to({y:3.6},0).wait(1).to({y:1.9},0).to({_off:true},1).wait(8));

	// Calque 5
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiSD0QgFlZEqiO");
	this.shape_29.setTransform(-28.7,52);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhrD/QgwlOEOiu");
	this.shape_30.setTransform(-23.1,50.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag/EJQhblBDyjQ");
	this.shape_31.setTransform(-18.1,49.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgNETQiHk1DWjw");
	this.shape_32.setTransform(-13.6,48.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAlEdQiwkoC7kR");
	this.shape_33.setTransform(-9.5,47);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABWEVQj3jyBvk3");
	this.shape_34.setTransform(-4.5,45.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABxEJQkXjOBDlC");
	this.shape_35.setTransform(-1.2,47.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ahzj/QgxFCEfC9");
	this.shape_36.setTransform(-0.6,45.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiCj3QgfFDEnCs");
	this.shape_37.setTransform(-0.1,43.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiQjuQgNFDEvCa");
	this.shape_38.setTransform(0.2,41.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiejmQAGFEE3CI");
	this.shape_39.setTransform(0.6,38.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(13,1,1).p("AirjdQAYFEE/B3");
	this.shape_40.setTransform(0.8,36.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai4jVQAqFEFHBn");
	this.shape_41.setTransform(1.1,34.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(13,1,1).p("ADGDNQlPhVg8lE");
	this.shape_42.setTransform(1.3,32.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjDi+QA8FEFLA5");
	this.shape_43.setTransform(1.1,32.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjBiwQA8FEFHAd");
	this.shape_44.setTransform(0.9,32.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai+iiQA8FEFBAB");
	this.shape_45.setTransform(0.7,32.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai8iVQA8FEE9gb");
	this.shape_46.setTransform(0.5,32.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai6iKQA8FEE5g3");
	this.shape_47.setTransform(0.3,32.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai4iBQA8FEE1hS");
	this.shape_48.setTransform(0.1,33.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(13,1,1).p("AC3BeQkxBug8lE");
	this.shape_49.setTransform(-0.2,33.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiNiSQgaE9E3ga");
	this.shape_50.setTransform(-4.9,35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(13,1,1).p("AB2C5Qk+g6Bvk3");
	this.shape_51.setTransform(-10.9,37.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(13,1,1).p("AA7DUQj3jTD7jU");
	this.shape_52.setTransform(-20.9,38.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUDMQi6kJEqiP");
	this.shape_53.setTransform(-22.4,43.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhaCxQhqkmE5g7");
	this.shape_54.setTransform(-27.7,41.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiWCWQgalDFIAb");
	this.shape_55.setTransform(-33.9,39);
	this.shape_55._off = true;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiVCiQgYlGFFAD");
	this.shape_56.setTransform(-33.2,32.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiVCwQgUlJFAgW");
	this.shape_57.setTransform(-32.4,35.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiUC+QgRlNE7gu");
	this.shape_58.setTransform(-31.7,38.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiTDLQgPlQE3hF");
	this.shape_59.setTransform(-30.9,42.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiTDZQgMlTEzhe");
	this.shape_60.setTransform(-30.1,45.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiSDmQgIlVEuh3");
	this.shape_61.setTransform(-29.4,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_29}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(26).to({_off:false},0).wait(1).to({y:37.3},0).wait(1).to({y:35.6},0).wait(1).to({y:34},0).wait(1).to({y:32.3},0).wait(1).to({y:30.6},0).wait(1).to({y:29},0).to({_off:true},1).wait(7));

	// Calque 6
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACDCNQkiAcAgk3");
	this.shape_62.setTransform(-1.1,41.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhFikQhtEaEWAv");
	this.shape_63.setTransform(-9.1,44.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABPC8QkKh6C5j9");
	this.shape_64.setTransform(-18.1,46.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhZCiQhokRE1gy");
	this.shape_65.setTransform(-26.7,47.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiMCDQgckiE3Ag");
	this.shape_66.setTransform(-31.7,42.2);
	this.shape_66._off = true;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiLCWQgQkeEngN");
	this.shape_67.setTransform(-32.5,40);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiJCpQgEkYEXg6");
	this.shape_68.setTransform(-32.3,41.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiHC+QAIkTEHho");
	this.shape_69.setTransform(-32.1,42.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiFDSQATkOD4iV");
	this.shape_70.setTransform(-31.9,44.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiDDmQAfkIDpjD");
	this.shape_71.setTransform(-31.7,45.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiCD6QAskDDZjv");
	this.shape_72.setTransform(-31.6,47.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiAEOQA4kADJkb");
	this.shape_73.setTransform(-31.4,48.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhbEaQAWkCChkx");
	this.shape_74.setTransform(-23.9,48.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag1EmQgMkFB4lG");
	this.shape_75.setTransform(-16.5,48.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAQErQg9j+A4lX");
	this.shape_76.setTransform(-17.8,48.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAbEqQhNj5Ahla");
	this.shape_77.setTransform(-7.9,47);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag8khQAMFZBtDq");
	this.shape_78.setTransform(-6.9,47.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABjEaQiLjcg6lX");
	this.shape_79.setTransform(-6.4,48.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhpkJQA6FXCZC8");
	this.shape_80.setTransform(-5.7,45.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ahwj5QA5FXCoCc");
	this.shape_81.setTransform(-5,42);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah4jpQA6FXC2B8");
	this.shape_82.setTransform(-4.3,38.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah+jZQA5FXDEBc");
	this.shape_83.setTransform(-3.6,35.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiGjKQA6FXDTA+");
	this.shape_84.setTransform(-2.9,32.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACOC7Qjhgeg6lX");
	this.shape_85.setTransform(-2.2,29);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiLizQAtFSDqAW");
	this.shape_86.setTransform(-2,30.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiJitQAgFODzAN");
	this.shape_87.setTransform(-1.8,32.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiIinQAUFJD9AF");
	this.shape_88.setTransform(-1.6,34.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiGigQAGFEEHgD");
	this.shape_89.setTransform(-1.4,36.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiEiaQgHFAEQgL");
	this.shape_90.setTransform(-1.3,38.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiCiUQgTE7EZgU");
	this.shape_91.setTransform(-1.1,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62}]}).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_62}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(4).to({_off:false},0).wait(1).to({x:-31.8,y:41.8},0).wait(1).to({x:-31.9,y:41.3},0).wait(1).to({x:-32.1,y:40.9},0).wait(1).to({x:-32.2,y:40.5},0).wait(1).to({x:-32.3,y:40.1},0).wait(1).to({x:-32.4,y:39.6},0).wait(1).to({x:-32.5,y:39.2},0).wait(1).to({x:-32.6,y:38.8},0).wait(1).to({x:-32.7,y:38.4},0).to({_off:true},1).wait(26));

	// okaokaplaydot
	this.instance_1 = new lib.okaokaplaydot();
	this.instance_1.setTransform(35.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:30.5,y:-18},13).to({y:-8},7).wait(6).to({y:-18},6).to({x:35.5,y:8.5},7).wait(1));

	// okaokaplaydot
	this.instance_2 = new lib.okaokaplaydot();
	this.instance_2.setTransform(35.5,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:36,y:2.7},13).to({y:12.7},7).wait(6).to({y:2.7},6).to({x:35.5,y:28.7},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.3,-78.8,92.1,161.9);


(lib.monsieurcircledance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 6
	this.instance = new lib.okaokaplaydot();
	this.instance.setTransform(-46.1,13.5,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:60,x:3.2,y:-52.4},4).to({x:1.8,y:-56.7},5).to({rotation:0,x:-46.1,y:10.6},3).to({rotation:-30,x:-75.1,y:26.6},4).to({rotation:-15,x:-72.2,y:25.4},5).to({rotation:0,x:-46.1,y:13.5},4).wait(1));

	// Calque 5
	this.instance_1 = new lib.okaokaplaydot();
	this.instance_1.setTransform(-46.1,37.8,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:60,x:-17.8,y:-40.3},4).to({x:-19.2,y:-44.6},5).to({rotation:0,x:-46.1,y:34.9},3).to({rotation:-30,x:-63,y:47.6},4).to({rotation:-15,x:-65.9,y:48.8},5).to({rotation:0,x:-46.1,y:37.8},4).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("Al0ABQIYABDRgC");
	this.shape.setTransform(11.5,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(16,1).p("Alzg8QG1B2EyAD");
	this.shape_1.setTransform(18.1,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(16,1).p("Alyh7QFUDsGRAK");
	this.shape_2.setTransform(24.6,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(16,1).p("Alxi5QDyFhHxAS");
	this.shape_3.setTransform(31.2,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(16,1).p("Alwj4QCQHYJRAZ");
	this.shape_4.setTransform(37.7,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(16,1).p("AlrkAQCMHjJLAe");
	this.shape_5.setTransform(37.4,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(16,1).p("AlmkIQCJHvJEAi");
	this.shape_6.setTransform(37.1,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(16,1).p("AlhkRQCFH7I+Ao");
	this.shape_7.setTransform(36.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(16,1).p("AlckZQCCIHI3As");
	this.shape_8.setTransform(36.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(16,1).p("AlXkhQB/ITIwAw");
	this.shape_9.setTransform(36.2,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(16,1).p("AlhjAQEIFiG7Af");
	this.shape_10.setTransform(27.9,8.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(16,1).p("AlqheQGPCwFHAN");
	this.shape_11.setTransform(19.7,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(16,1).p("AlzA5QIfgpDIhI");
	this.shape_12.setTransform(5.8,20.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(16,1).p("AlxBxQImhTC9iO");
	this.shape_13.setTransform(0.1,16.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(16,1).p("AlvCpQIsh9CzjU");
	this.shape_14.setTransform(-5.6,11.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(16,1).p("AltDhQIzinCoka");
	this.shape_15.setTransform(-11.3,7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(16,1).p("AloDrQIyiqCfkr");
	this.shape_16.setTransform(-12.1,6.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(16,1).p("AljD0QIxitCWk6");
	this.shape_17.setTransform(-12.9,5.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(16,1).p("AleD9QIwiuCNlL");
	this.shape_18.setTransform(-13.6,5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(16,1).p("AlZEGQIwixCDla");
	this.shape_19.setTransform(-14.4,4.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(16,1).p("AlUEQQIvi0B6lr");
	this.shape_20.setTransform(-15.2,3.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(16,1).p("AlcDMQIpiHCQkQ");
	this.shape_21.setTransform(-8.5,8.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(16,1).p("AlkCIQIjhZCmi2");
	this.shape_22.setTransform(-1.8,14.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(16,1).p("AlsBFQIdgtC8hc");
	this.shape_23.setTransform(4.8,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Calque 2
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(16,1).p("AiVlBIErKD");
	this.shape_24.setTransform(22,57.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(16,1).p("AiAlNIEBKb");
	this.shape_25.setTransform(25.1,56.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(16,1).p("AhrlZIDXKz");
	this.shape_26.setTransform(28.2,54.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(16,1).p("AhXllICuLL");
	this.shape_27.setTransform(31.3,53.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(16,1).p("AhClxICFLj");
	this.shape_28.setTransform(34.3,52.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(16,1).p("AhDlxQAuF5BYFq");
	this.shape_29.setTransform(34.3,52.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(16,1).p("AhDlxQAYGBBvFi");
	this.shape_30.setTransform(34.2,52.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(16,1).p("AhElxQADGJCGFa");
	this.shape_31.setTransform(34.1,52.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(16,1).p("AhElxQgTGSCeFR");
	this.shape_32.setTransform(33.9,52.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(16,1).p("AhClwQgoGZC1FI");
	this.shape_33.setTransform(33.5,52.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(16,1).p("AhglhQAXF8CqFH");
	this.shape_34.setTransform(29.9,54.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(16,1).p("Ah7lRQBYFeCeFF");
	this.shape_35.setTransform(26,55.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(16,1).p("AikkOQDLDYB+FF");
	this.shape_36.setTransform(19.5,54.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(16,1).p("Ai0jcQECBuBnFL");
	this.shape_37.setTransform(16.9,51.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(16,1).p("AjEipQE5AEBQFP");
	this.shape_38.setTransform(14.3,48.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(16,1).p("AjUhrQFwhmA5FU");
	this.shape_39.setTransform(11.7,44.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(16,1).p("AjYhhQF1h3A8FY");
	this.shape_40.setTransform(12.8,43.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(16,1).p("AjbhWQF5iIA+Fc");
	this.shape_41.setTransform(13.9,41.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(16,1).p("AjfhMQF+iZBBFg");
	this.shape_42.setTransform(14.9,40.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(16,1).p("AjjhBQGDipBEFj");
	this.shape_43.setTransform(16,38.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(16,1).p("Ajng2QGIi6BHFn");
	this.shape_44.setTransform(17.1,37.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(16,1).p("AjSiMQFKg7BbFd");
	this.shape_45.setTransform(18.3,44.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(16,1).p("Ai+jLQEOBEBuFT");
	this.shape_46.setTransform(19.6,48.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(16,1).p("AipkGQDRDDCCFK");
	this.shape_47.setTransform(20.8,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

	// Calque 3
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(16,1).p("ACrj1IlVHr");
	this.shape_48.setTransform(-5.8,66.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(16,1).p("AjKDRQCmkWDviL");
	this.shape_49.setTransform(-4.2,60.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(16,1).p("AjqCsQChk3E0gg");
	this.shape_50.setTransform(-2.6,54.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(16,1).p("AkLCNQCdlXF6BL");
	this.shape_51.setTransform(-0.9,47.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(16,1).p("AEshDQm/i2iYF4");
	this.shape_52.setTransform(0.7,39.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(16,1).p("AkjB4QCVlsGyC+");
	this.shape_53.setTransform(0.6,38.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(16,1).p("AkaBxQCSlfGjDF");
	this.shape_54.setTransform(0.5,37.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(16,1).p("AkSBqQCPlTGWDO");
	this.shape_55.setTransform(0.4,35.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(16,1).p("AkKBjQCMlGGJDV");
	this.shape_56.setTransform(0.3,34.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(16,1).p("AEDAAQl8jdiJE5");
	this.shape_57.setTransform(0.2,33.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(16,1).p("AjkB3QCUkiE1BB");
	this.shape_58.setTransform(-1.8,46.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(16,1).p("AjHC0QCgkMDvhb");
	this.shape_59.setTransform(-3.8,56.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(16,1).p("AiNEVQCfkkB8kF");
	this.shape_60.setTransform(-8.7,63.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(16,1).p("AhwE0QCVlVBMkS");
	this.shape_61.setTransform(-11.6,60.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(16,1).p("AhTFSQCLmFAcke");
	this.shape_62.setTransform(-14.5,57.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(16,1).p("AA2lwQATEsiAG1");
	this.shape_63.setTransform(-17.3,54.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(16,1).p("Ag7FxQCemmg0k7");
	this.shape_64.setTransform(-16.9,54.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(16,1).p("AhAFyQC7mXhUlM");
	this.shape_65.setTransform(-16.4,54.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(16,1).p("AhGFyQDZmIh1lb");
	this.shape_66.setTransform(-15.8,54.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(16,1).p("AhMFyQD2l5iWlq");
	this.shape_67.setTransform(-15.2,54);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(16,1).p("AALlxQC2F3kTFs");
	this.shape_68.setTransform(-14.6,54);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(16,1).p("AhaFTQD5lOhelX");
	this.shape_69.setTransform(-13.8,57.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(16,1).p("AhsE0QDfkxgGk2");
	this.shape_70.setTransform(-12,60.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(16,1).p("AiLEVQDEkUBTkV");
	this.shape_71.setTransform(-8.9,63.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48}]}).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_48}]},1).wait(1));

	// Calque 4
	this.instance_2 = new lib.monsieurcirclehead();
	this.instance_2.setTransform(8.4,9.9,1.2,1.2,3.1,0,0,-0.1,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:41.5,rotation:28.8,x:38.5,y:4.5},4).to({regX:0.1,rotation:33.2,x:42.7,y:4.8},5).to({regX:-0.1,regY:41.6,rotation:3.1,x:12.7,y:9.9},3).to({rotation:-29.1,x:-17.7,y:2.5},4).to({rotation:-35.1,x:-25.4,y:1.4},5).to({rotation:3.1,x:8.4,y:9.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-93.1,115.6,192.2);


(lib.monsieurcircle_walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// okaokaplayhead
	this.instance = new lib.monsieurcirclehead();
	this.instance.setTransform(-12.8,-38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-48.7},4).to({y:-33.7},4).wait(3).to({y:-38.7},4).to({y:-48.7},5).to({y:-33.7},3).wait(3).to({y:-38.7},4).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEUAAIonAA");
	this.shape.setTransform(-12.7,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkTAAIInAA");
	this.shape_1.setTransform(-12.7,8.9);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3).to({_off:false,y:1.4},0).to({_off:true},1).wait(3).to({_off:false,y:16.4},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:11.4},0).to({_off:true},1).wait(4).to({_off:false,y:1.4},0).to({_off:true},1).wait(2).to({_off:false,y:16.4},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:11.4},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1).to({y:6.4},0).wait(1).to({y:3.9},0).to({_off:true},1).wait(1).to({_off:false,y:5.1},0).wait(1).to({y:8.9},0).wait(1).to({y:12.6},0).to({_off:true},1).wait(1).to({_off:false,y:16.4},0).wait(1).to({_off:true},1).wait(1).to({_off:false,y:15.1},0).wait(1).to({y:13.9},0).wait(1).to({y:12.6},0).to({_off:true},1).wait(1).to({_off:false,y:9.4},0).wait(1).to({y:7.4},0).wait(1).to({y:5.4},0).wait(1).to({y:3.4},0).to({_off:true},1).wait(1).to({_off:false,y:6.4},0).wait(1).to({y:11.4},0).to({_off:true},1).wait(1).to({_off:false,y:16.4},0).wait(1).to({_off:true},1).wait(1).to({_off:false,y:15.1},0).wait(1).to({y:13.9},0).wait(1).to({y:12.6},0).to({_off:true},1).wait(1));

	// Calque 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACNCpQk4AeAilx");
	this.shape_2.setTransform(4.4,36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiJijQgiFxE4gv");
	this.shape_3.setTransform(4.4,32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiJidQgiFxE4hA");
	this.shape_4.setTransform(4.4,29.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiJiWQgiFxE4hS");
	this.shape_5.setTransform(4.4,26.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACNB9Qk4BjAilx");
	this.shape_6.setTransform(4.4,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhxicQhDFSEygb");
	this.shape_7.setTransform(2,28.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhWivQhlEyErAu");
	this.shape_8.setTransform(-0.7,34.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag6jEQiGETElB2");
	this.shape_9.setTransform(-3.5,39.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABbDaQkfi/Coj0");
	this.shape_10.setTransform(-6.5,45.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAkCnQjki4EGiV");
	this.shape_11.setTransform(-16.5,40.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhGC7QhvkBEbh1");
	this.shape_12.setTransform(-19.7,42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(13,1,1).p("AicDQQAJlKEwhV");
	this.shape_13.setTransform(-25.2,44.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(13,1,1).p("AijDHQAek6EphT");
	this.shape_14.setTransform(-25.8,42.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiqC9QA0kpEghQ");
	this.shape_15.setTransform(-26.5,40.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiwC0QBIkZEZhO");
	this.shape_16.setTransform(-27.2,38.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai3CqQBdkIEShL");
	this.shape_17.setTransform(-27.9,35.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai8CrQBhkIEYhN");
	this.shape_18.setTransform(-28.4,34);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjACrQBjkGEehP");
	this.shape_19.setTransform(-28.8,32);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjFCsQBnkGEkhR");
	this.shape_20.setTransform(-29.3,30.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjJCsQBqkEEphT");
	this.shape_21.setTransform(-29.7,28.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjOCtQBtkEEwhV");
	this.shape_22.setTransform(-30.2,26.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(13,1,1).p("AioDJQBNknEEhq");
	this.shape_23.setTransform(-26.4,34);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiDDmQAtlKDaiA");
	this.shape_24.setTransform(-22.7,41.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhdECQANltCuiW");
	this.shape_25.setTransform(-18.9,49.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgEECQgljkA8kf");
	this.shape_26.setTransform(-11.4,49.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAyECQhvkCANkB");
	this.shape_27.setTransform(-4.5,49.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABPEEQiNkDgRkE");
	this.shape_28.setTransform(-1.4,49.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhejtQAEEgC5C7");
	this.shape_29.setTransform(0.1,46.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhtjWQgIE6DjBz");
	this.shape_30.setTransform(1.6,42.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah7jAQgVFWEOAr");
	this.shape_31.setTransform(3,39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Calque 6
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(13,1,1).p("AibCPQAdk1EaAa");
	this.shape_32.setTransform(-26.1,41.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiiCLQAqktEaAa");
	this.shape_33.setTransform(-26.7,38.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(13,1,1).p("AioCHQA2klEbAa");
	this.shape_34.setTransform(-27.3,35.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiuCEQBCkeEbAa");
	this.shape_35.setTransform(-27.9,33);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai0CAQBPkXEaAa");
	this.shape_36.setTransform(-28.6,30.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(13,1,1).p("AilCfQA3kVEUgo");
	this.shape_37.setTransform(-26.7,35.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiVC/QAekUENhp");
	this.shape_38.setTransform(-24.9,39.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiFDfQAFkSEGir");
	this.shape_39.setTransform(-23.1,44.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah1D/QgTkRD/js");
	this.shape_40.setTransform(-21.4,49.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAeD/QhukRBdjs");
	this.shape_41.setTransform(-10.8,49.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgpkCQhFEiCsDj");
	this.shape_42.setTransform(-5.2,49.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABjEHQjqi0AslZ");
	this.shape_43.setTransform(-0.2,50.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ahij3QgsFQD3Cf");
	this.shape_44.setTransform(0.5,47.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhpjoQgrFGEECL");
	this.shape_45.setTransform(1.2,44.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhwjZQgrE8ESB3");
	this.shape_46.setTransform(1.9,41.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(13,1,1).p("AB9DLQkehjAqky");
	this.shape_47.setTransform(2.6,39.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiBi/QghFHEnA4");
	this.shape_48.setTransform(3.6,36.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiKi0QgXFcEuAN");
	this.shape_49.setTransform(4.5,33);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiTiqQgOFxE2ge");
	this.shape_50.setTransform(5.4,30);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(13,1,1).p("AicijQgFGFE+hJ");
	this.shape_51.setTransform(6.3,27.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(13,1,1).p("AClCHQlFB0gEma");
	this.shape_52.setTransform(7.1,24.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah3ioQgzF3Epgq");
	this.shape_53.setTransform(2.6,30.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhCi5QhpFUEMAf");
	this.shape_54.setTransform(-2.7,37.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABIDNQjvhpCfkw");
	this.shape_55.setTransform(-8.5,44.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABVC0Qk4iTEEjU");
	this.shape_56.setTransform(-12.8,43.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhPDLQhIkUD4iB");
	this.shape_57.setTransform(-19.2,46.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag5DGQjCkfF3hs");
	this.shape_58.setTransform(-21.9,48.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhXC4QiKkkFghL");
	this.shape_59.setTransform(-22.4,46.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhzCqQhSkqFJgp");
	this.shape_60.setTransform(-23.1,45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiKCcQgakvExgI");
	this.shape_61.setTransform(-24.3,43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_32}]},1).wait(1));

	// okaokaplaydot
	this.instance_1 = new lib.okaokaplaydot();
	this.instance_1.setTransform(35.5,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-11.5},4).to({y:8},4).wait(3).to({y:0},4).to({y:-16.5},5).to({y:8.5},3).wait(3).to({y:3},4).wait(1));

	// okaokaplaydot
	this.instance_2 = new lib.okaokaplaydot();
	this.instance_2.setTransform(35.5,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:8.7},4).to({y:28.2},4).wait(3).to({y:20.2},4).to({y:3.7},5).to({y:28.7},3).wait(3).to({y:23.2},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-80.9,93.3,143.5);


(lib.monsieurcircle = function() {
	this.initialize();

	// okaokaplayhead
	this.instance = new lib.monsieurcirclehead();
	this.instance.setTransform(-12.8,-38.7);

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEWAAIorAA");
	this.shape.setTransform(-12.9,18.9);

	// okaokaplaydot
	this.instance_1 = new lib.okaokaplaydot();
	this.instance_1.setTransform(35.5,8.5);

	// okaokaplaydot
	this.instance_2 = new lib.okaokaplaydot();
	this.instance_2.setTransform(35.5,28.7);

	// Calque 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACOEWIkbor");
	this.shape_1.setTransform(1.3,46.7);

	// Calque 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(13,1,1).p("AibDtIE3nZ");
	this.shape_2.setTransform(-26.1,51.3);

	this.addChild(this.shape_2,this.shape_1,this.instance_2,this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.5,-80.9,93.3,162.5);


(lib.monsieurcarreegyptian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 5
	this.instance = new lib.okaokaplaydot();
	this.instance.setTransform(57.8,12.7,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:65.1,y:-10.1},4).wait(12).to({y:38.5},5).to({y:37.9},3).wait(6).to({x:58.2,y:17.1},3).wait(1));

	// Calque 6
	this.instance_1 = new lib.okaokaplaydot();
	this.instance_1.setTransform(57.8,37,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:65.1,y:14.2},4).wait(12).to({y:62.8},5).to({y:62.2},3).wait(6).to({x:58.2,y:41.4},3).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("Al2AAILtAA");
	this.shape.setTransform(-0.4,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(16,1).p("AmNA3IBVAAIBRgyIG1AAIBkg7IBcAA");
	this.shape_1.setTransform(-0.1,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(16,1).p("AmlBvIBjAAIA3hkIICAAIBCh5IBtAA");
	this.shape_2.setTransform(0.3,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(16,1).p("Am9CmIBzAAIAbiWIJOAAIAhi1IB+AA");
	this.shape_3.setTransform(0.7,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(16,1,1).p("AnVDeICBAAIAAjIIKbAAIAAjzICPAA");
	this.shape_4.setTransform(1.1,24.8);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(16,1,1).p("AnWCGICFAAIAAh2IKaAAIAAiVICOAA");
	this.shape_5.setTransform(0.8,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(16,1,1).p("AnYAuICJAAIAAgkIKbAAIAAg3ICNAA");
	this.shape_6.setTransform(0.6,26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(16,1,1).p("AnZgoICNAAIAAAsIKaAAIAAAlICMAA");
	this.shape_7.setTransform(0.3,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(16,1,1).p("AnbiAICRAAIAACAIKbAAIAACBICLAA");
	this.shape_8.setTransform(0.1,27.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(16,1,1).p("AncjYICVAAIAADSIKaAAIAADfICKAA");
	this.shape_9.setTransform(-0.2,27.8);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(16,1,1).p("Am6iPIB+AAIAmCMII0AAIApCUIB0AA");
	this.shape_10.setTransform(-0.3,27.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(16,1,1).p("AmYhHIBnAAIBMBGIHNAAIBSBJIBfAA");
	this.shape_11.setTransform(-0.4,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:false},0).wait(12).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(21).to({_off:false},0).wait(9).to({_off:true},1).wait(3));

	// Calque 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(16,1).p("AjCk5IGFJ0");
	this.shape_12.setTransform(12.6,58.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(16,1).p("AjAkaQDqDlCXFQ");
	this.shape_13.setTransform(12.7,61.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(16,1).p("Ai+j6QETCOBqFn");
	this.shape_14.setTransform(12.9,64.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(16,1).p("Ai9jbQE9A4A+F/");
	this.shape_15.setTransform(13.1,68.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(16,1).p("Ai7i6QFmgfARGW");
	this.shape_16.setTransform(13.2,71.1);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(16,1).p("Ai7i6QFmgeARGV");
	this.shape_17.setTransform(13.2,71.1);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(16,1).p("Ai7jUQEeBoBZFB");
	this.shape_18.setTransform(13.2,68.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(16,1).p("Ai7juQDWDuChDu");
	this.shape_19.setTransform(13.2,66.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(16,1).p("Ai7kHQCQF1DnCa");
	this.shape_20.setTransform(13.2,63.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(16,1).p("Ai7kgQBIH7EvBG");
	this.shape_21.setTransform(13.2,61.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(16,1).p("Ai7k6QAAKDF3gP");
	this.shape_22.setTransform(13.2,58.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(16,1).p("Ai7k6QABKDF2gP");
	this.shape_23.setTransform(13.2,58.6);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(16,1).p("Ai9k5QBBIUE6Bg");
	this.shape_24.setTransform(13,58.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(16,1).p("Ai/k5QCCGnD9DN");
	this.shape_25.setTransform(12.8,58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_12}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(4).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(5).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(22).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(4));

	// Calque 3
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(16,1).p("AC0j2IlnHt");
	this.shape_26.setTransform(-15.9,66.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(16,1).p("AivEJQDhjLB+lG");
	this.shape_27.setTransform(-17.3,64.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(16,1).p("AiqEbQEPifBGmW");
	this.shape_28.setTransform(-18.8,62.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(16,1).p("AimEtQE9hzAQnm");
	this.shape_29.setTransform(-20.2,60.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(16,1).p("ACgk+QAoI3lrBH");
	this.shape_30.setTransform(-21.5,59.1);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(16,1).p("AijFAQFrhHgoo3");
	this.shape_31.setTransform(-21.5,59.1);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(16,1).p("AihEmQEwiLATnA");
	this.shape_32.setTransform(-21.7,61.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(16,1).p("AihENQD0jQBPlJ");
	this.shape_33.setTransform(-21.7,64.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(16,1).p("AihDzQC5kSCKjU");
	this.shape_34.setTransform(-21.7,66.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(16,1).p("AigDaQB/lWDChd");
	this.shape_35.setTransform(-21.8,69.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(16,1).p("AChi/Qj+gahDGb");
	this.shape_36.setTransform(-21.8,71.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(16,1).p("AigDCQBEmbD9Aa");
	this.shape_37.setTransform(-21.8,71.6);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(16,1).p("AimDTQBplkDkhB");
	this.shape_38.setTransform(-19.8,69.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(16,1).p("AitDlQCPktDMic");
	this.shape_39.setTransform(-17.9,68.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_26}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(4).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(5).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(22).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(4));

	// Calque 4
	this.instance_2 = new lib.monsieurtrianglehead();
	this.instance_2.setTransform(-0.5,12,1.21,1.21,0,0,0,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.2,scaleY:1.2,rotation:-15,x:-7.7,y:6.4},4).to({x:-11.7},3).to({x:-8.7,y:9.6},3).to({rotation:-10.5,x:-16.7,y:12.6},3).to({rotation:0,x:-27.8},3).to({rotation:15,x:4.3,y:6},5).to({rotation:20.2,x:9.3,y:5.9},3).to({rotation:15,x:4.3,y:6},3).to({rotation:20.2,x:9.3,y:5.9},3).to({scaleX:1.21,scaleY:1.21,rotation:0,x:-0.5,y:12},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-80.4,111.2,179.5);


(lib.monsieurcarre_static = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 7
	this.instance = new lib.okaokaplaydot();
	this.instance.setTransform(35.5,8.5);

	this.instance_1 = new lib.okaokaplaydot();
	this.instance_1.setTransform(35.5,28.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdEYIE3nYAABkXIkVAAAEeETIkdoqAEXkXIkWAA");
	this.shape.setTransform(-13.1,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(32));

	// okaokaplayhead
	this.instance_2 = new lib.monsieurtrianglehead();
	this.instance_2.setTransform(-13.8,-9.8,1,1,0,0,0,-1.4,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-74.5,90.7,156.1);


// stage content:
(lib.diversity = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_703 = function() {
		if(typeof navigation !== 'undefined'){
			if(typeof navigation._page_script !== 'undefined'){
				if(typeof navigation._page_script.next_motion !== 'undefined'){
					navigation._page_script.next_motion();
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(703).call(this.frame_703).wait(2));

	// Calque 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgPgPIAfAAIAAAfIgfAAg");
	this.shape.setTransform(453.3,227.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgYgYIAxAAIAAAxIgxAAg");
	this.shape_1.setTransform(453.3,227.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(13,1,1).p("AggghIBBAAIAABDIhBAAg");
	this.shape_2.setTransform(453.3,227.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgogpIBRAAIAABTIhRAAg");
	this.shape_3.setTransform(453.3,227.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_4.setTransform(453.3,227.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag5g6IBzAAIAAB1IhzAAg");
	this.shape_5.setTransform(453.3,227.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhChCICFAAIAACFIiFAAg");
	this.shape_6.setTransform(453.3,227.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhKhKICVAAIAACVIiVAAg");
	this.shape_7.setTransform(453.3,227.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhShTICmAAIAACnIimAAg");
	this.shape_8.setTransform(453.3,227.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhbhbIC3AAIAAC3Ii3AAg");
	this.shape_9.setTransform(453.3,227.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhjhjIDIAAIAADHIjIAAg");
	this.shape_10.setTransform(453.3,227.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhshsIDZAAIAADZIjZAAg");
	this.shape_11.setTransform(453.3,227.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah0h0IDpAAIAADpIjpAAg");
	this.shape_12.setTransform(453.3,227.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah9h9ID7AAIAAD7Ij7AAg");
	this.shape_13.setTransform(453.3,227.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiFiFIELAAIAAELIkLAAg");
	this.shape_14.setTransform(453.3,227.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiOiOIEdAAIAAEdIkdAAg");
	this.shape_15.setTransform(453.3,227.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiWiWIEtAAIAAEtIktAAg");
	this.shape_16.setTransform(453.3,227.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(13,1,1).p("AieieIE9AAIAAE9Ik9AAg");
	this.shape_17.setTransform(453.3,227.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(13,1,1).p("AininIFPAAIAAFPIlPAAg");
	this.shape_18.setTransform(453.3,227.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},392).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[]},5).to({state:[]},289).wait(1));

	// Calque 9
	this.instance = new lib.monsieurcircle_walk("synched",0);
	this.instance.setTransform(-277.8,262.2,1,1,0,0,180,-3.2,0);

	this.instance_1 = new lib.monsieurcircle("synched",0);
	this.instance_1.setTransform(282.2,270.2,1,1,0,0,180,-3.2,0);

	this.instance_2 = new lib.monsieurcircledance("synched",25);
	this.instance_2.setTransform(272.6,243.4,0.832,0.832,0,0,0,-10.5,-29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},114).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},202).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_2}]},97).wait(252));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:282.2},114).to({_off:true},1).wait(590));

	// carré
	this.instance_3 = new lib.monsieurTRIANGLERUN("synched",0);
	this.instance_3.setTransform(1374.1,255.3,1,1,0,0,0,-3.2,0);
	this.instance_3._off = true;

	this.instance_4 = new lib.monsieurcarre_static("synched",3);
	this.instance_4.setTransform(633.9,267,1,1,0,0,0,-3.2,0);

	this.instance_5 = new lib.monsieurcarreegyptian("synched",29);
	this.instance_5.setTransform(634.4,239.6,0.863,0.863,0,0,0,-10.5,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},75).to({state:[{t:this.instance_3}]},114).to({state:[{t:this.instance_4,p:{x:633.9}}]},1).to({state:[{t:this.instance_5,p:{scaleX:0.863,scaleY:0.863,x:634.4,y:239.6,startPosition:29}}]},51).to({state:[{t:this.instance_4,p:{x:653.9}}]},40).to({state:[{t:this.instance_5,p:{scaleX:0.895,scaleY:0.895,x:635.9,y:233.9,startPosition:33}}]},172).to({state:[]},251).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).to({x:653.9,y:267,startPosition:34},114).to({_off:true},1).wait(515));

	// Calque 6
	this.instance_6 = new lib.okaokaplayhead();
	this.instance_6.setTransform(452.8,261.9,1,1,0,0,0,0,33.8);
	this.instance_6._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhvlQIDfAAQCgAAAACgIAAFiQAACgigAAIjfAAQigAAAAigIAAliQAAigCgAAg");
	this.shape_19.setTransform(453.8,228.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkTinQAAifCcgGQBwgGBxAAQCfAAAGCdQAFCuAACvQAACficAGQhwAGhxAAQifAAgGidQgFiuAAivg");
	this.shape_20.setTransform(453.8,228.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYidQAAieCagMQBvgLBzAAQCeAAAMCZQALCqAACtQAACeiZAMQhwAMhyAAQifAAgMiaQgLiqAAitg");
	this.shape_21.setTransform(453.8,228.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdiSQAAieCXgSQBvgRB0AAQCeAAARCWQASCmAACrQAACeiXARQhuARh1AAQieAAgRiWQgSimAAiqg");
	this.shape_22.setTransform(453.8,228.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkiiJQAAidCUgXQBvgYB2AAQCdAAAXCUQAYCiAACpQAACdiUAXQhuAYh3AAQidAAgYiUQgXiiAAipg");
	this.shape_23.setTransform(453.8,228.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akmh/QAAidCQgdQBugdB5AAQCcAAAdCRQAdCeAACnQAACdiQAdQhuAdh5AAQidAAgciRQgdidAAiog");
	this.shape_24.setTransform(453.8,228);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akrh1QAAicCOgjQBtgjB6AAQCcAAAjCOQAjCZAACmQAACciOAjQhtAjh6AAQicAAgjiOQgjiZAAimg");
	this.shape_25.setTransform(453.7,228);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkwhrQAAicCLgoQBtgpB8AAQCbAAAoCLQAqCVAACkQAACciLAoQhtAph8AAQibAAgqiLQgoiVAAikg");
	this.shape_26.setTransform(453.8,228);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ak0hiQAAiaCHgvQBtguB+AAQCaAAAvCHQAuCSAACiQAACbiHAuQhtAvh+AAQibAAguiIQguiRAAijg");
	this.shape_27.setTransform(453.7,228);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ak5hXQAAiaCEg1QBtg0CAAAQCZAAA1CEQA0COAAChQAACZiEA1QhtA0iAAAQiaAAg0iEQg0iOAAigg");
	this.shape_28.setTransform(453.7,227.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ak+hNQAAiaCBg6QBsg6CCAAQCZAAA6CBQA6CJAACgQAACZiBA6QhsA6iCAAQiZAAg6iBQg6iJAAifg");
	this.shape_29.setTransform(453.7,227.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlChEQAAiYB+hAQBrhACEAAQCZAABAB+QA/CFAACeQAACYh+BAQhrBAiEAAQiZAAg/h+QhAiFAAieg");
	this.shape_30.setTransform(453.7,227.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlHg6QAAiYB6hFQBshGCGAAQCXAABGB7QBGCBAACcQAACYh7BFQhrBGiGAAQiYAAhGh7QhFiBAAicg");
	this.shape_31.setTransform(453.7,227.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlMgwQAAiXB4hMQBrhLCIAAQCXAABLB3QBMB9AACbQAACXh4BLQhrBMiIAAQiXAAhLh4QhMh9AAiag");
	this.shape_32.setTransform(453.7,227.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlQgmQAAiXB0hRQBqhRCKAAQCXAABRB1QBRB4AACaQAACWh1BRQhqBRiJAAQiXAAhRh1QhRh4AAiZg");
	this.shape_33.setTransform(453.7,227.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlVgcQAAiWBxhXQBqhXCMAAQCWAABXByQBXB0AACXQAACWhyBXQhqBXiLAAQiWAAhXhyQhXh0AAiXg");
	this.shape_34.setTransform(453.7,227.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlagSQAAiVBuhdQBqhdCOAAQCVAABdBvQBdBwAACWQAACVhvBcQhpBdiOAAQiVAAhdhuQhdhxAAiVg");
	this.shape_35.setTransform(453.7,227.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlegIQAAiVBrhjQBphiCQAAQCUAABiBrQBjBtAACTQAACVhrBiQhpBjiQAAQiVAAhihsQhihsAAiTg");
	this.shape_36.setTransform(453.7,227.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(13,1,1).p("AFkAAQAACThoBpQhpBoiTAAQiSAAhphoQhohpAAiTQAAiSBohpQBphoCSAAQCTAABpBoQBoBpAACSg");
	this.shape_37.setTransform(453.7,227.6);

	this.instance_7 = new lib.winning_dance_3("synched",0);
	this.instance_7.setTransform(445.1,239.2,0.868,0.868,0,0,0,-10.5,-29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},102).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_6}]},11).to({state:[{t:this.instance_6}]},55).to({state:[{t:this.instance_6}]},8).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_6}]},20).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_6}]},23).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},44).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},43).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.shape_19}]},11).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.instance_7}]},5).to({state:[]},289).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(102).to({rotation:15},7).to({regX:-0.1,regY:33.9,rotation:0,x:442.7,y:262},11).wait(55).to({regY:33.8,rotation:-15,x:462.7},8).to({rotation:0,x:464.7},6).wait(20).to({x:453.7},6).wait(23).to({rotation:15,x:467.7,y:251.9},4).wait(44).to({regY:33.7,rotation:0,x:453.7,y:261.9},0).to({y:251.9},3).to({y:261.9},3).to({y:251.9},3).to({y:261.9},3).to({y:251.9},3).to({y:261.9},3).to({y:251.9},3).to({y:261.9},3).wait(5).to({x:441.7},4).wait(43).to({x:453.7},0).to({y:251.9},3).to({y:261.9},3).to({y:251.9},3).to({y:261.9},3).to({y:251.9},3).to({y:261.9},3).to({_off:true},11).wait(313));

	// Calque 5
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEWAAIorAA");
	this.shape_38.setTransform(453.1,288.2);
	this.shape_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1).to({_off:false},0).to({_off:true},414).wait(290));

	// Calque 4
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACOEWIkbor");
	this.shape_39.setTransform(467.4,316);
	this.shape_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1).to({_off:false},0).to({_off:true},414).wait(290));

	// Calque 3
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(13,1,1).p("AibDtIE3nZ");
	this.shape_40.setTransform(440,320.6);
	this.shape_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1).to({_off:false},0).to({_off:true},414).wait(290));

	// Calque 7
	this.instance_8 = new lib.okaokaplaydot();
	this.instance_8.setTransform(501.6,277.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},415).wait(290));

	// Calque 2
	this.instance_9 = new lib.okaokaplaydot();
	this.instance_9.setTransform(501.6,298);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},415).wait(290));

	// Calque 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ak3MjQgegSAAglQAAgPAIgPIEHmVQAEgHAAgJQAAgSgNgNQgLgMgSAAIisAAQgaAAgRgSQgSgSAAgZQAAgZASgTQARgSAaAAIIxAAQAZAAASASQASATAAAZQAAAZgSASQgSASgZAAIi6AAIDvHJQAIAPAAAQQAAAkgfARQgVANgZgGQgZgIgMgVIjHmCIkAGJQgLAUgaAJQgIACgIAAQgQAAgPgIgAiQgFQhSAAg5g6Qg6g7AAhSIAAmXQAAhTA6g6QA5g6BSAAIEgAAQBTAAA5A6QA6A6AABTIAAGXQAABSg6A7Qg5A6hTAAgAjBqTQgaAaAAAlIAAF5QAAAlAaAaQAbAbAkAAIEEAAQAlAAAbgbQAagaAAglIAAl5QAAglgagaQgbgbglAAIkEAAQgkAAgbAbg");
	this.shape_41.setTransform(452.9,268.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).to({_off:true},1).wait(704));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127.2,481.3,830.6,168.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;