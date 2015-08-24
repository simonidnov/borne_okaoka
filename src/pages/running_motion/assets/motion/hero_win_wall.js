(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 75,
	height: 175,
	fps: 24,
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


(lib.bras = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AiTgYQA+ALBMANQBKALBTAO");
	this.shape.setTransform(0,-2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.3,-7.6,34.8,10.1);


(lib.hero_win_wall_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		if(typeof rg !== "undefined"){
			rg.run();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Calque 6
	this.instance = new lib.tete();
	this.instance.setTransform(-6,-37.5,1,1,-9,0,0,8.8,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-60},0).wait(1).to({y:-72.5},0).wait(1).to({y:-117.5},0).wait(1).to({y:-122.5},0).wait(1).to({y:-127.5},0).wait(1).to({y:-132.5},0).wait(1).to({y:-137.5},0).wait(1).to({y:-142.5},0).wait(3).to({y:-137.5},0).wait(1).to({y:-133},0).wait(1).to({y:-125.5},0).wait(1).to({y:-115.5},0).wait(1).to({y:-110.5},0).wait(1).to({y:-98},0).wait(1).to({y:-70.5},0).wait(1).to({y:-50.5},0).wait(1).to({y:-43},0).wait(1));

	// Calque 5
	this.instance_1 = new lib.bras();
	this.instance_1.setTransform(-14.5,-15.2,1,1,-6.7,0,0,0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-36},0).wait(1).to({y:-49.2},0).wait(1).to({y:-94.2},0).wait(1).to({y:-99.2},0).wait(1).to({y:-104.2},0).wait(1).to({y:-109.2},0).wait(1).to({y:-114.2},0).wait(1).to({y:-119.2},0).wait(3).to({y:-114.2},0).wait(1).to({y:-109.7},0).wait(1).to({y:-102.2},0).wait(1).to({y:-92.2},0).wait(1).to({y:-87.2},0).wait(1).to({y:-74.7},0).wait(1).to({y:-47.2},0).wait(1).to({y:-27.2},0).wait(1).to({y:-19.7},0).wait(1));

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AAdhQQAeBzheAu");
	this.shape.setTransform(-19.9,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("ABRi3QARDuizCB");
	this.shape_1.setTransform(-25,-7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AhKhiQB9ANAYC4");
	this.shape_2.setTransform(-9.3,-31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AiahHQC9ACB3CN");
	this.shape_3.setTransform(-1.4,-78.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AiJhvQC9ACBWDd");
	this.shape_4.setTransform(-3,-79.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AhaiDQC9BcgICr");
	this.shape_5.setTransform(-7.8,-81.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AhGiXQC9A8hADz");
	this.shape_6.setTransform(-9.7,-86.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AgtiwQByBzgdDu");
	this.shape_7.setTransform(-12.2,-88.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AgVjIQBGCjgqDu");
	this.shape_8.setTransform(-14.6,-91.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AgEjIQBGCjhaDu");
	this.shape_9.setTransform(-16.3,-91.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AAmjFQASCihgDp");
	this.shape_10.setTransform(-20.8,-91.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("ABBimQgcBkhlDp");
	this.shape_11.setTransform(-24.4,-88.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("ABViRIipEj");
	this.shape_12.setTransform(-27.4,-86.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("ACGhqQhACVjLBA");
	this.shape_13.setTransform(-29.1,-82.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("ACQgmQgmBuj5gw");
	this.shape_14.setTransform(-29.3,-80.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("ABtgaQgkBVi0gz");
	this.shape_15.setTransform(-24.8,-75.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("ABShHQAODPiyhb");
	this.shape_16.setTransform(-20.9,-58.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AgOhzQCGB7ikBs");
	this.shape_17.setTransform(-13.7,-6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AghhSQCHBKiHBb");
	this.shape_18.setTransform(-11.8,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{x:-20.9,y:-58.8}}]},1).to({state:[{t:this.shape_16,p:{x:-23.4,y:-31.3}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

	// Calque 3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("ABDBIQgSh7hzgU");
	this.shape_19.setTransform(-10.1,-1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("ABUBAQgdiKiLAM");
	this.shape_20.setTransform(-8.4,-19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AhWEBQCSmJAbh4");
	this.shape_21.setTransform(-25.6,-15.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AhvHiQDEtLAbh4");
	this.shape_22.setTransform(-28.1,-37.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("Ah8FPQErkXg9mG");
	this.shape_23.setTransform(-28.4,-57.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("Ah8EJQDkiwAVlh");
	this.shape_24.setTransform(-29.4,-68.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("Ah6DYQEHiNgUki");
	this.shape_25.setTransform(-29.1,-79.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("Ah2CuQEUhbguj/");
	this.shape_26.setTransform(-28.2,-89);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("Ah1ChQGQgakYkn");
	this.shape_27.setTransform(-17.3,-95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AgYCvQECj5lDhk");
	this.shape_28.setTransform(-7.9,-93.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AClDHQgflakqgy");
	this.shape_29.setTransform(-0.4,-91.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("ADSF6QiCpGkhit");
	this.shape_30.setTransform(3.1,-67.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("ADmIjQjWscj1kp");
	this.shape_31.setTransform(4.1,-46.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AC9H8QikscjVjb");
	this.shape_32.setTransform(3.2,-42.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("ACfHPQhwsbjNiC");
	this.shape_33.setTransform(1,-38);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("ACBGwQhCqKi/jV");
	this.shape_34.setTransform(-1,-34.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("ABfF0QgKonizjA");
	this.shape_35.setTransform(-3.2,-28.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("ABWDtQgvmCh8hX");
	this.shape_36.setTransform(-6.5,-14.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AA5CBIhxkB");
	this.shape_37.setTransform(-9.5,-5.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AAABfIAAi9");
	this.shape_38.setTransform(-15.2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-58.8,52,68.9);


// stage content:



(lib.hero_win_wall = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.hero_win_wall_1();
	this.instance.setTransform(53.7,138.7,1,1,0,0,0,8.6,-27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(50.3,195.1,52,68.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;