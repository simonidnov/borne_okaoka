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



(lib.tete = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AAjCMIhmgMQgYgDgQgTQgPgTADgZIASiVQACgYAUgQQAUgPAYADIBmAMQAZADAQATQAPAUgDAYIgSCVQgDAZgTAPQgUAPgZgDg");
	this.shape.setTransform(0,-14.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.6,-30.7,46.5,36.2);


(lib.basket_panneau = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7).p("AkykzIJlAAIAAJnIplAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.3,-34.3,68.6,68.6);


(lib.basket_filet = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(8,1,1).p("AmXAAIMvAA");
	this.shape.setTransform(0,-31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6).p("AGEk1IhmDJIkhAAIAAjJAgDEDIAAixIDpAAIAACxIAABBAgDFBIAAg+IDpAAAgDBSIAAi+IkaAAIA4C+IAACxIAABBAEehsIg4C+AmDk1IBmDJAjlBSIDiAAAjlEDIDiAA");
	this.shape_1.setTransform(0.6,-0.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.8,-35.1,89.7,69.9);


(lib.ball = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.2,20.5,20.5);


(lib.okaoka_dunk_end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 8
	this.instance = new lib.ball();
	this.instance.setTransform(28.7,-46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:17.1,y:-71.6},10).to({x:12.8,y:-79.6},1).to({x:8,y:-87.2},1).to({x:2.7,y:-94.4},1).to({x:-3.6,y:-100.9},1).to({x:-11.5,y:-105.5},1).to({x:-20.9,y:-104.8},1).to({x:-28.5,y:-98.5},1).to({x:-33.9,y:-90.3},1).to({x:-37.9,y:-81.6},1).to({x:-50.4,y:-66.6},6).to({x:-52.9},4).to({x:-27.9,y:-59.1},8).to({x:-25.4},6).to({x:-40.5,y:-43.8},8).wait(1));

	// Calque 1
	this.instance_1 = new lib.tete();
	this.instance_1.setTransform(7,-28,1,1,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:4.5,y:-35.5},10).to({rotation:-9},9).to({rotation:-0.7,x:12.8,y:-20.5},32).wait(1));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AinBDQAuAKBUgKQBSgLB7h/");
	this.shape.setTransform(11.5,-26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AimBOQAyAJBWgOQBUgQBxiJ");
	this.shape_1.setTransform(11.5,-28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AilBaQA1AHBZgUQBXgUBmiT");
	this.shape_2.setTransform(11.5,-30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AikBkQA5AGBbgYQBZgZBcie");
	this.shape_3.setTransform(11.5,-31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AijBwQA8ADBegdQBbgdBSio");
	this.shape_4.setTransform(11.5,-33.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AiiB6QA/ACBhgiQBdgiBIiy");
	this.shape_5.setTransform(11.5,-34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AihCFQBEAABggmQBignA9i8");
	this.shape_6.setTransform(11.4,-36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AigCQQBHgCBigrQBlgrAzjH");
	this.shape_7.setTransform(11.4,-37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AifCbQBKgEBlgwQBngvApjS");
	this.shape_8.setTransform(11.4,-39.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AieClQBOgFBng1QBpg0Afjb");
	this.shape_9.setTransform(11.3,-41);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AidCwQBRgHBqg5QBrg6AVjl");
	this.shape_10.setTransform(11.3,-42.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AiYCnQBRgJBog8QBjg3AVjR");
	this.shape_11.setTransform(11.3,-41.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AiSCeQBRgMBlg+QBbg0AUi9");
	this.shape_12.setTransform(11.2,-40.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AiMCWQBQgPBjhBQBTgxATiq");
	this.shape_13.setTransform(11.2,-38.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("AiHCNQBQgRBhhEQBLguATiW");
	this.shape_14.setTransform(11.1,-37.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AiBCEQBPgTBfhHQBCgqATiD");
	this.shape_15.setTransform(11.1,-36.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("Ah7B7QBOgVBdhKQA6gmAShw");
	this.shape_16.setTransform(11,-35.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("Ah2ByQBOgXBchNQAxgkAShb");
	this.shape_17.setTransform(11,-34);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AhwBqQBOgaBZhQQApggARhJ");
	this.shape_18.setTransform(10.9,-32.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AhqBhQBNgdBXhQQAhggAQg0");
	this.shape_19.setTransform(10.9,-31.5);
	this.shape_19._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(19).to({_off:false},0).wait(1).to({x:11.2,y:-31.1},0).wait(1).to({x:11.5,y:-30.6},0).wait(1).to({x:11.8,y:-30.1},0).wait(1).to({x:12.1,y:-29.6},0).wait(1).to({x:12.4,y:-29.2},0).wait(1).to({x:12.8,y:-28.7},0).wait(1).to({x:13.1,y:-28.2},0).wait(1).to({x:13.4,y:-27.8},0).wait(1).to({x:13.7,y:-27.3},0).wait(1).to({x:14,y:-26.8},0).wait(1).to({x:14.3,y:-26.4},0).wait(1).to({x:14.6,y:-25.9},0).wait(1).to({x:14.9,y:-25.4},0).wait(1).to({x:15.3,y:-25},0).wait(1).to({x:15.6,y:-24.5},0).wait(1).to({x:15.9,y:-24},0).wait(1).to({x:16.2,y:-23.6},0).wait(1).to({x:16.5,y:-23.1},0).wait(1).to({x:16.8,y:-22.6},0).wait(1).to({x:17.1,y:-22.1},0).wait(1).to({x:17.4,y:-21.7},0).wait(1).to({x:17.8,y:-21.2},0).wait(1).to({x:18.1,y:-20.7},0).wait(1).to({x:18.4,y:-20.3},0).wait(1).to({x:18.7,y:-19.8},0).wait(1).to({x:19,y:-19.3},0).wait(1).to({x:19.3,y:-18.9},0).wait(1).to({x:19.6,y:-18.4},0).wait(1).to({x:19.9,y:-17.9},0).wait(1).to({x:20.3,y:-17.5},0).wait(1).to({x:20.6,y:-17},0).wait(1).to({x:20.9,y:-16.5},0).wait(1));

	// Calque 3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("ABAhhIh/DD");
	this.shape_20.setTransform(0.2,-3.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("Ag5BiQBChiAxhh");
	this.shape_21.setTransform(1.4,-4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AgyBhQBFhiAghf");
	this.shape_22.setTransform(2.7,-4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AgsBhQBJhkAQhd");
	this.shape_23.setTransform(4,-5.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("AglBhQBMhlgBhc");
	this.shape_24.setTransform(5.2,-6.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AggBgQBPhlgRha");
	this.shape_25.setTransform(6.7,-7.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AgdBgQBThnghhY");
	this.shape_26.setTransform(8.2,-8.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AgbBfQBWhogxhV");
	this.shape_27.setTransform(9.9,-9.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AgZBfQBZhphAhU");
	this.shape_28.setTransform(11.7,-10);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AgYBfQBdhqhQhT");
	this.shape_29.setTransform(13.5,-10.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("AgXhdQBgBQhgBr");
	this.shape_30.setTransform(15.3,-11.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AgXBeQBghrhghQ");
	this.shape_31.setTransform(16.3,-12.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AgihdQBgBQgkBr");
	this.shape_32.setTransform(21.4,-14.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AgihgQBgBWgnBr");
	this.shape_33.setTransform(22,-14.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AghhkQBgBdgpBs");
	this.shape_34.setTransform(22.5,-14.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("AgghnQBgBkgtBr");
	this.shape_35.setTransform(23.1,-14.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AgfhqQBgBqgwBr");
	this.shape_36.setTransform(23.6,-14.2);
	this.shape_36._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30,p:{x:15.3,y:-11.7}}]},1).to({state:[{t:this.shape_31,p:{x:16.3,y:-12.3}}]},1).to({state:[{t:this.shape_31,p:{x:17.2,y:-13}}]},1).to({state:[{t:this.shape_31,p:{x:18.1,y:-13.6}}]},1).to({state:[{t:this.shape_30,p:{x:19.1,y:-14.2}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(19).to({_off:false},0).wait(1).to({x:23.9,y:-13.8},0).wait(1).to({x:24.3,y:-13.3},0).wait(1).to({x:24.6,y:-12.8},0).wait(1).to({x:24.9,y:-12.3},0).wait(1).to({x:25.2,y:-11.9},0).wait(1).to({x:25.5,y:-11.4},0).wait(1).to({x:25.8,y:-10.9},0).wait(1).to({x:26.1,y:-10.5},0).wait(1).to({x:26.4,y:-10},0).wait(1).to({x:26.8,y:-9.5},0).wait(1).to({x:27.1,y:-9.1},0).wait(1).to({x:27.4,y:-8.6},0).wait(1).to({x:27.7,y:-8.1},0).wait(1).to({x:28,y:-7.7},0).wait(1).to({x:28.3,y:-7.2},0).wait(1).to({x:28.6,y:-6.7},0).wait(1).to({x:28.9,y:-6.3},0).wait(1).to({x:29.3,y:-5.8},0).wait(1).to({x:29.6,y:-5.3},0).wait(1).to({x:29.9,y:-4.8},0).wait(1).to({x:30.2,y:-4.4},0).wait(1).to({x:30.5,y:-3.9},0).wait(1).to({x:30.8,y:-3.4},0).wait(1).to({x:31.1,y:-3},0).wait(1).to({x:31.4,y:-2.5},0).wait(1).to({x:31.8,y:-2},0).wait(1).to({x:32.1,y:-1.6},0).wait(1).to({x:32.4,y:-1.1},0).wait(1).to({x:32.7,y:-0.6},0).wait(1).to({x:33,y:-0.2},0).wait(1).to({x:33.3,y:0.3},0).wait(1).to({x:33.6,y:0.8},0).wait(1));

	// Calque 4
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AhNBpICbjR");
	this.shape_37.setTransform(-8.8,-2.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AhLBoQBUhnBDhn");
	this.shape_38.setTransform(-7.8,-3.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("AhIBmQBahjA3ho");
	this.shape_39.setTransform(-6.9,-3.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("AhGBlQBhhhAsho");
	this.shape_40.setTransform(-6,-4.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("AhDBkQBnhfAgho");
	this.shape_41.setTransform(-5.1,-5.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("AhBBjQBuhcAVhp");
	this.shape_42.setTransform(-4.1,-6.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(5,1).p("Ag+BiQB0hZAJhq");
	this.shape_43.setTransform(-3.2,-6.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(5,1).p("Ag8BhQB8hXgDhq");
	this.shape_44.setTransform(-2.3,-7.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(5,1).p("Ag6BgQCChVgOhq");
	this.shape_45.setTransform(-1.3,-8.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(5,1).p("Ag5BeQCJhRgahq");
	this.shape_46.setTransform(-0.3,-9.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(5,1).p("Ag4BdQCPhOgmhr");
	this.shape_47.setTransform(0.9,-9.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(5,1).p("Ag1BfQCKhQgoht");
	this.shape_48.setTransform(2.2,-9.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(5,1).p("AgyBgQCGhSgrht");
	this.shape_49.setTransform(3.6,-10.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(5,1).p("AgvBhQCBhSguhv");
	this.shape_50.setTransform(4.9,-10.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(5,1).p("AgsBiQB8hUgxhv");
	this.shape_51.setTransform(6.3,-10.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(5,1).p("AgpBkQB4hWg0hx");
	this.shape_52.setTransform(7.7,-10.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(5,1).p("AgnBlQB0hXg3hy");
	this.shape_53.setTransform(9.1,-10.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(5,1).p("AgkBmQBvhYg6hz");
	this.shape_54.setTransform(10.5,-10.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(5,1).p("AghBnQBqhZg9h0");
	this.shape_55.setTransform(11.9,-10.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(5,1).p("AgfBpQBmhchAh1");
	this.shape_56.setTransform(13.3,-10.9);
	this.shape_56._off = true;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(5,1).p("AgfBpQBmhbhAh2");
	this.shape_57.setTransform(13.6,-10.5);
	this.shape_57._off = true;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(5,1).p("AgfBoQBmhbhAh1");
	this.shape_58.setTransform(15.2,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37}]}).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(19).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,x:15.5,y:-7.6},0).wait(1).to({x:15.8,y:-7.2},0).to({_off:true},1).wait(5).to({_off:false,x:17.7,y:-4.4},0).wait(1).to({x:18,y:-3.9},0).wait(1).to({x:18.3,y:-3.4},0).to({_off:true},1).wait(4).to({_off:false,x:19.9,y:-1.1},0).to({_off:true},1).wait(2).to({_off:false,x:20.8,y:0.3},0).to({_off:true},1).wait(4).to({_off:false,x:22.4,y:2.7},0).wait(1).to({x:22.7,y:3.1},0).wait(1).to({x:23,y:3.6},0).wait(1).to({x:23.3,y:4.1},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(20).to({_off:false},0).wait(1).to({x:14,y:-10},0).wait(1).to({x:14.3,y:-9.5},0).wait(1).to({x:14.6,y:-9},0).wait(1).to({x:14.9,y:-8.6},0).to({_off:true},1).wait(3).to({_off:false,x:16.1,y:-6.7},0).wait(1).to({x:16.5,y:-6.2},0).wait(1).to({x:16.8,y:-5.8},0).wait(1).to({x:17.1,y:-5.3},0).wait(1).to({x:17.4,y:-4.8},0).to({_off:true},1).wait(3).to({_off:false,x:18.6,y:-3},0).wait(1).to({x:19,y:-2.5},0).wait(1).to({x:19.3,y:-2},0).wait(1).to({x:19.6,y:-1.5},0).to({_off:true},1).wait(1).to({_off:false,x:20.2,y:-0.6},0).wait(1).to({x:20.5,y:-0.1},0).to({_off:true},1).wait(1).to({_off:false,x:21.1,y:0.8},0).wait(1).to({x:21.5,y:1.3},0).wait(1).to({x:21.8,y:1.7},0).wait(1).to({x:22.1,y:2.2},0).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-69,58.1,79.6);


(lib.okaoka_dunk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1A2QgWgXgBgfQABgeAWgXQAXgWAegBQAgABAWAWQAWAXAAAeQAAAfgWAXQgWAWggABQgegBgXgWg");
	this.shape.setTransform(28.7,-46.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// Calque 1
	this.instance = new lib.tete();
	this.instance.setTransform(7,-28,1,1,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Calque 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AinBDQAuAKBUgKQBSgLB7h/");
	this.shape_1.setTransform(11.5,-26.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(20));

	// Calque 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("ABAhhIh/DD");
	this.shape_2.setTransform(0.2,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(20));

	// Calque 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AhNBpICbjR");
	this.shape_3.setTransform(-8.8,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-69,57.5,79.6);


(lib.okaoka_dribble = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6,p:{y:-6.2}}]},2).to({state:[{t:this.shape_6,p:{y:-12.2}}]},2).to({state:[{t:this.shape_6,p:{y:-14.7}}]},2).wait(2));

	// Calque 1
	this.instance = new lib.tete();
	this.instance.setTransform(15,-42,1,1,-9,0,0,8.8,-12.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:0,regY:0,rotation:-1.5,x:6.3,y:-25.5},0).wait(2).to({rotation:6,x:5.8,y:-23},0).wait(2).to({x:8.3,y:-21.5},0).wait(4).to({y:-20.5},0).wait(2).to({rotation:-1.2,x:5.8,y:-23},0).wait(2).to({rotation:0.5,x:4.8,y:-25.7},0).wait(2).to({rotation:-2.8,x:4.5,y:-28},0).wait(2).to({rotation:-8.2},0).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).wait(2));

	// Calque 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AhFhaQCCACAJCz");
	this.shape_16.setTransform(6.2,-3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AgnhlQBOA2ABCV");
	this.shape_17.setTransform(3.2,-2.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AAThrQgOAzgWCk");
	this.shape_18.setTransform(-3.6,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AA6hWIhzCt");
	this.shape_19.setTransform(-7.2,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("ABEhaIiHC1");
	this.shape_20.setTransform(-9.5,-0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("ABRghQgbBZiGgc");
	this.shape_21.setTransform(-9.4,-5.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AALg0QBoBTilAW");
	this.shape_22.setTransform(-0.9,-4.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AglhLQB1AjhBB0");
	this.shape_23.setTransform(3.6,-3.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("Ag8hWQCFAagOCT");
	this.shape_24.setTransform(5.2,-4.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AhGhTQCdARgSCW");
	this.shape_25.setTransform(6.2,-4.5);

	this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).wait(2));

	// Calque 4
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AhNBpICbjR");
	this.shape_26.setTransform(-8.8,-2.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AhNA3QBmAbA1iM");
	this.shape_27.setTransform(-8.8,-7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AhCAwQDKAUhph1");
	this.shape_28.setTransform(-4.9,-5.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AAhBJQAjhihsgv");
	this.shape_29.setTransform(2.8,-1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("AA3BXQALh0h5g5");
	this.shape_30.setTransform(3,-1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AAwBYQgMh+hTgx");
	this.shape_31.setTransform(3.6,-0.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AgTBYQA6h7gcg0");
	this.shape_32.setTransform(-0.9,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AguBhQB2h7ghhG");
	this.shape_33.setTransform(-4.2,-1.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AgxBqQBsh7gKhY");
	this.shape_34.setTransform(-5.9,-2.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("Ag8BpIB5jR");
	this.shape_35.setTransform(-7,-2.4);

	this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},2).wait(2));

	// Calque 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(211,35,138,0)").s().p("Al2F3IAArtILsAAIAALtg");
	this.shape_36.setTransform(1.1,-26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-63.6,75,75);


// stage content:
(lib.basketball_game_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:84});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_84 = function() {
		window['navigation'].intro_motion_stopped();
	}
	this.frame_116 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(84).call(this.frame_84).wait(32).call(this.frame_116).wait(180));

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(8,1,1).p("AmXAAIMvAA");
	this.shape.setTransform(470.6,3.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(84).to({_off:false},0).wait(212));

	// Calque 1
	this.instance = new lib.basket_filet();
	this.instance.setTransform(1738.6,34.6,1,1,0,0,0,0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6600").ss(8,1,1).p("AmXAAIMvAA");
	this.shape_1.setTransform(470.6,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(6).p("AEehsIg4C+IAACxIAABBAGEk1IhmDJIkhAAIkaAAIA4C+IAACxIDiAAIAAixIDpAAAjlBSIDiAAIAAi+IAAjJAmDk1IBmDJAjlEDIAABBAgDFBIAAg+IDpAA");
	this.shape_2.setTransform(471.2,34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(6).p("AGEk1IhmDJIg4C+IAACxIAABBAgDhsIAAjJAgDBSIAAi+IkaAAIA4C+IDiAAIDpAAAmDk1IBmDJAgDFBIAAg+IDpAAAjlEDIAABBAjlEDIDiAAIAAixAjlBSIAACxAEehsIkhAA");
	this.shape_3.setTransform(471.2,34.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(6).p("ADwhpIhLC9IBLCxIAABBAGPkzIifDKIkqAAIk/AAIBPC9IDwAAIAAi9IA/jKAl5kzIAADKAjaEFIDfAAIg/ixIDfAAAjaEFIAABBAAFFEIAAg/IDrAAAkqBUIBQCx");
	this.shape_4.setTransform(470.9,33.8,1,1,0,0,0,0.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(6).p("AGikxIjpDKIgyC9IB9CxIAABBAhdBWIDkAAAhdBWIAAi9IB2jKAmXhnIBEC9ID2AAAllkxIgyDKAAZFGIAAg/Ih2ixAjHEHIAABBAjHEHIDgAAIDrAAAhdhnIk6AAAlTBWICMCxAC5hnIkWAA");
	this.shape_5.setTransform(468.2,33.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(6).p("ADgD/IA3BBACahwIAAC+IBGCxAhKBOIDkAAACahwIjkAAIlTAAIBAC+IB4CxIDcAAIhBixIAAi+IB2jJAlSk5IhLDJAAsE9Ig1g+IDpAAAjlD/IAyBBAldBOIETAAAG2k5IkcDJ");
	this.shape_6.setTransform(467,34.5,1,1,0,0,0,0.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(6).p("ADuD/IA3BBACohwIAAC+IBGCxAg8BOIDkAAACohwIjkAAIlxAAIA2C+ICgCxIDaAAIg/ixIAAi+IB2jJAlEk5IhpDJAA6E9Ig3g+IDrAAAl3BOIE7AAAjXD/IAyBBAHEk5IkcDJ");
	this.shape_7.setTransform(465.4,34.5,1,1,0,0,0,0.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(6).p("ADzD/IA3BBAg3hwIB2jJAg3BOIAAi+Il7AAIA2C+IFFAAIDkAAIBGCxACthwIjkAAACthwIAAC+Ak/k5IhzDJAA/E9Ig3g+Ig/ixAl8BOICqCxIAyBBAjSD/IDaAAIDrAAAHJk5IkcDJ");
	this.shape_8.setTransform(464.9,34.5,1,1,0,0,0,0.5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(6).p("ADiD+IA8BBAChhwIhBC9ICCCxAh1BNIDVAAAChhwIkWAAIkwAAIA1C9ID7AAIAAi9ICojKAlLk6IhaDKAAzE9Ig1g/IhzixAjkD+IDiAAIDkAAAjkD+IA3BBAlwBNICMCxAG8k6IkbDK");
	this.shape_9.setTransform(466.1,34.5,1,1,0,0,0,0.5,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(6).p("ADthsIhBC+IAACxIAABBAGGk1IiZDJIjuAAIk6AAIAhC+IDiAAIA3i+IAAjJAmBk1IBGDJAkaEDIAABGAg4FBIAAg+IAAixIDkAAAkaBSIAACxIDiAAIDkAA");
	this.shape_10.setTransform(471,34.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(6).p("AEih1Ig3C+IhBCxIAABBAGEk+IhiDJIjrAAIlTAAIA3C+Ig3CxIgyBBAjlBJIDiAAIA6i+Ig6jJAmDk+IBnDJAg6E4IAAg+IA3ixIDuAAAkcD6IDiAAIDkAA");
	this.shape_11.setTransform(471.2,35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(6).p("AFHh3IAAC9IhkCxIg8BBAGClBIg7DKIkTAAIkbAAIA8C9IDfAAIAAi9Ig6jKAjiD3IDcAAIA6ixIETAAAg9E2IA3g/IDpAAAjiD3IhQBGAirBGIg3CxAmGlBICfDK");
	this.shape_12.setTransform(471.5,35.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(6).p("AFGh9IAlC9IhNCxIhnBVAGAlHIg6DKIjwAAIkDAAIAmC9IDdAAIAAi9IhdjKAgZE8IBMhLIAjixIEVAAAi8DxIDvAAIDrAAAi8DxIhLA3AiHBAIg1CxAmHlHIDaDK");
	this.shape_13.setTransform(471.6,35.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(6).p("AF/h6IAAC+IgsCxIhQBSAF/lDIAADJIj0AAIkUAAIA3C+IDdAAIAAi+IiUjJAhwD1IhSBBAhwD1ID7AAIAAixID0AAABAFAIBLhLIDIAAAhSBEIgeCxAmJlDIEADJ");
	this.shape_14.setTransform(471.8,35.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(6).p("AFwh5IAcC+IgzCxIhGBSAFwlCIAADJIjzAAIkDAAIA6C+IDJAAIAAi+IiUjJAA+FBIA/hLIAAixIEPAAAhtD2IhQBBAhtD2IDqAAIDcAAAhMBFIghCxAmXlCIERDJ");
	this.shape_15.setTransform(473.2,35.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(6).p("AGOh6IAAC+IgwCxIhVBSAFmlDIAoDJIkbAAIjnAAIAvC+IC4AAIAAi+IiUjJAheD1IhQBBAheD1IDRAAIAAixIEbAAAA0FAIA/hLIDrAAAhFBEIgZCxAmhlDIEtDJ");
	this.shape_16.setTransform(473.9,35.5,1,1,0,0,0,-0.3,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(6).p("AGFh5IAZC9Ig4CxIhBBVAFdlDIAoDKIkcAAIjnAAIBLC9ICcAAIAAi9IiUjKAhTD1IhVA/AA8FAIAthLIAAixIE1AAAhTD1IC8AAID9AAAgzBEIggCxAmrlDIEtDK");
	this.shape_17.setTransform(475.2,35.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(6).p("AGBh5IAgC9Ig/CxIhBBVAFZlDIAoDKIkcAAIjnAAIBLC9ICcAAIAAi9IiUjKAhXD1IhVA/AA4FAIAthLIAAixIE8AAAhXD1IC8AAID9AAAg3BEIggCxAmvlDIEtDK");
	this.shape_18.setTransform(475.6,35.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(6).p("ACpBDIgti+IkUAAIA+C+IAACxIhSBBAF+h7IkCAAIiojJACpBDIDuAAIgzCxAF+h7IAZC+AFblEIAjDJACpD0IC7AAIhDBXACpD0IAAixAmslEIEUDJAhaD0IEDAAAhaBDIEDAAABWE/IBThL");
	this.shape_19.setTransform(474.8,35.6,1,1,0,0,0,-0.5,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(6).p("AF7igIAJC+IgjDZIhSB4AF7lpIAADJIkeAAIkHAcIA5CiIAACxIDxAoIDhAAACcAeIDoAAABdigIhpjJAA4FWIBIhfIAcjZIg/i+AhxDPIg+BXAmMlpIDiDlAhxAeIENAA");
	this.shape_20.setTransform(472.1,39.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(6).p("AGAiiIguC9IgjDZIgcB4AGAlsIAADKIkeAAIkIAbIA6CiIDuAAIggi9IhqjKAANF0IBDiAIAyjZIDQAAAiUDEIDkAwIDfAAAiUDEIg1BgAhsAbIgoCpAmIlsIDiDl");
	this.shape_21.setTransform(471.7,39.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(6).p("AGAiiIg9DYIg8DaIgeBkAGAlsIAADKIkeAAIkIAbIA6CiIDuAAIggi9IhqjKAANF0IBDiAIAyjZIDBAbAiUDEIDkAwIC3AcAiUDEIg1BgAhsAbIgoCpAmIlsIDiDl");
	this.shape_22.setTransform(471.7,39.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(6).p("AGBl/IgpDoIgoDnIhBDSIgjBpABRAIIgkjDIjwAhIAeCiID2AAIDfBIAAti7Ig0jEAgYFgIAxh6IA4jeAi6CqIDTA8IDWA8Ai6CqIgxBkAmHl/IDEDlAilAIIgVCiAFYiXIkrgk");
	this.shape_23.setTransform(471.6,41.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(6).p("AEyioIg0DUIgzDXIghB6AGClxIhQDJIkZAAIjsAcIAACiIDsAAIAAi+IgejJAg3EmIA3hRIDLAuAjdDVIDdAAIAZi/IDlAWAjTAWIgKC/Ig+BHAmFlxICyDl");
	this.shape_24.setTransform(471.4,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},62).to({state:[{t:this.shape_2},{t:this.shape_1}]},22).to({state:[{t:this.shape_3},{t:this.shape_1}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_1}]},1).to({state:[{t:this.shape_1},{t:this.shape_8}]},1).to({state:[{t:this.shape_1},{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(182));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:470.6},62).to({_off:true},22).wait(212));

	// running
	this.instance_1 = new lib.okaoka_dribble("synched",6);
	this.instance_1.setTransform(532,327.3,2,2,0,0,0,37.5,37.5);

	this.instance_2 = new lib.okaoka_dunk("synched",0);
	this.instance_2.setTransform(552,307.3,2,2,0,0,0,37.5,37.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.okaoka_dunk_end("synched",0,false);
	this.instance_3.setTransform(622,238.3,2,2,0,0,0,37.5,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},46).to({state:[{t:this.instance_2}]},16).to({state:[{t:this.instance_3}]},1).wait(233));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({x:622,y:238.3,startPosition:16},16).to({_off:true},1).wait(233));

	// Calque 2
	this.instance_4 = new lib.basket_panneau();
	this.instance_4.setTransform(1738.5,-45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:470.5},62).wait(234));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(834.1,120.6,1399.4,354.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;