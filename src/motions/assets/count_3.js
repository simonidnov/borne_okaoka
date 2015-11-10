(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFCC00",
	manifest: []
};



// symbols:



(lib.trois = function() {
	this.initialize();

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(14,1,1).p("AOCAAQAAFzkHEIQkHEHl0AAQlyAAkIkHQkHkIAAlzQAAlzEHkHQEIkHFyAAQF0AAEHEHQEHEHAAFzg");
	this.shape.setTransform(-0.7,1.2);

	// Calque 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkLHPQhmhUAAiKIDUAAQAAA8AtAmQAtAmBCAAQBJAAArgoQArgoAAhCQAAigiuAAIhwAAIAAijIBxAAQBOAAAngoQAngpAAhCQAAhBgmgkQgngkhBAAQg9AAgpAiQgpAhAAA1IjUAAQAAhTAuhCQAshDBSglQBQglBiAAQCnAABgBRQBgBRAACOQAABJgtA9QgtA+hIAhQBaAeAtBBQAsBAAABYQAACOhoBWQhoBVioAAQigAAhlhUg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-95.6,193.6,193.6);


(lib.tiretplaymotioneclat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgeAAIA9AA");
	this.shape.setTransform(135.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhTAAICnAA");
	this.shape_1.setTransform(142.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiHAAIEPAA");
	this.shape_2.setTransform(150,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai8AAIF5AA");
	this.shape_3.setTransform(157.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjwAAIHhAA");
	this.shape_4.setTransform(164.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkAAIJKAA");
	this.shape_5.setTransform(171.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkvAAIJfAA");
	this.shape_6.setTransform(173.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ak5AAIJzAA");
	this.shape_7.setTransform(175.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlDAAIKHAA");
	this.shape_8.setTransform(177.7,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlNAAIKbAA");
	this.shape_9.setTransform(179.7,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlXAAIKvAA");
	this.shape_10.setTransform(181.8,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(13,1,1).p("AliAAILFAA");
	this.shape_11.setTransform(183.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlsAAILZAA");
	this.shape_12.setTransform(186,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(13,1,1).p("Al2AAILtAA");
	this.shape_13.setTransform(188,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(13,1,1).p("AmAAAIMBAA");
	this.shape_14.setTransform(190.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ak4AAIJxAA");
	this.shape_15.setTransform(197.5,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(13,1,1).p("AinAAIFPAA");
	this.shape_16.setTransform(212.2,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhfAAIC/AA");
	this.shape_17.setTransform(219.5,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgXAAIAvAA");
	this.shape_18.setTransform(226.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:164.3}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_4,p:{x:204.8}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126.1,-6.5,19.4,13);


(lib.deux = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(14,1,1).p("AOCAAQAAFzkHEIQkHEHl0AAQlyAAkIkHQkHkIAAlzQAAlzEHkHQEIkHFyAAQF0AAEHEHQEHEHAAFzg");
	this.shape.setTransform(-0.7,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlhIcIAAiRIFZlwQBFhMAig5QAig6gBg0QABhHgkgpQgkgphBABQhIAAgpAxQgqAxABBRIjVAAQAAhhAvhRQAuhQBVguQBVguBsAAQCjAABbBPQBbBPAACRQAABOgpBSQgpBRhjBtIjxD/IHJAAIAACrg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-95.6,193.6,193.6);


(lib.chronosinside = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(14,0,1).p("AKomrIE2GGAJ/GRIp/AAIAAm2AqnmrIk2GG");
	this.shape.setTransform(0,-43.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(14,1,1).p("AOCAAQAAF0kHEHQkHEHl0AAQlzAAkHkHQkHkHAAl0QAAlzEHkHQEHkHFzAAQF0AAEHEHQEHEHAAFzg");
	this.shape_1.setTransform(0.3,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.1,-96.8,212.2,193.6);


(lib._1 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(14,1,1).p("AOCAAQAAFzkHEIQkHEHl0AAQlyAAkIkHQkHkIAAlzQAAlzEHkHQEIkHFyAAQF0AAEHEHQEHEHAAFzg");
	this.shape.setTransform(-0.7,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUIVIAAsvIj7BOIAAiqIG4ieIAXAAIAAQpg");
	this.shape_1.setTransform(-9,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-95.6,193.6,193.6);


(lib.playmotioneclat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.tiretplaymotioneclat("synched",0,false);
	this.instance.setTransform(0,0,1,1,45);

	this.instance_1 = new lib.tiretplaymotioneclat("synched",0,false);
	this.instance_1.setTransform(0,0,1,1,90);

	this.instance_2 = new lib.tiretplaymotioneclat("synched",0,false);
	this.instance_2.setTransform(0,0,1,1,135);

	this.instance_3 = new lib.tiretplaymotioneclat("synched",0,false);
	this.instance_3.setTransform(0,0,1,1,-180);

	this.instance_4 = new lib.tiretplaymotioneclat("synched",0,false);
	this.instance_4.setTransform(0,0,1,1,-135);

	this.instance_5 = new lib.tiretplaymotioneclat("synched",0,false);
	this.instance_5.setTransform(0,0,1,1,-90);

	this.instance_6 = new lib.tiretplaymotioneclat("synched",0,false);
	this.instance_6.setTransform(0,0,1,1,-45);

	this.instance_7 = new lib.tiretplaymotioneclat("synched",0,false);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.4,-145.4,290.9,290.9);


(lib.chronos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.chronosinside();
	this.instance.setTransform(-0.9,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.5},3).to({rotation:-2},3).to({rotation:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-95.6,212.2,193.6);


// stage content:



(lib.count_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		if(typeof audio_manager !== "undefined"){
			audio_manager.play_sound('chronos_count', 0, function(){});
		}
	}
	this.frame_73 = function() {
		if(typeof audio_manager !== "undefined"){
			audio_manager.play_sound('chronos_count', 0, function(){});
		}
	}
	this.frame_137 = function() {
		if(typeof audio_manager !== "undefined"){
			audio_manager.play_sound('chronos_count', 0, function(){});
		}
	}
	this.frame_196 = function() {
		if(typeof audio_manager !== "undefined"){
			audio_manager.play_sound('chronos_start', 0, function(){});
		}
	}
	this.frame_252 = function() {
		this.stop();
		if(typeof utilities !== "undefined"){
			utilities.countCallBack();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(64).call(this.frame_73).wait(64).call(this.frame_137).wait(59).call(this.frame_196).wait(56).call(this.frame_252).wait(1));

	// Calque 5
	this.instance = new lib.playmotioneclat("synched",0);
	this.instance.setTransform(275,200,0.781,0.781);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},20).wait(44).to({_off:false},0).to({_off:true},20).wait(44).to({_off:false},0).to({_off:true},20).wait(39).to({_off:false},0).to({_off:true},20).wait(37));

	// 1
	this.instance_1 = new lib.chronos();
	this.instance_1.setTransform(275,200,0.078,0.078);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(187).to({_off:false},0).to({scaleX:0.78,scaleY:0.78},9).wait(50).to({scaleX:0.08,scaleY:0.08},5).to({_off:true},1).wait(1));

	// 1
	this.instance_2 = new lib._1();
	this.instance_2.setTransform(275,200,0.078,0.078);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(128).to({_off:false},0).to({scaleX:0.78,scaleY:0.78},9).wait(50).to({scaleX:0.08,scaleY:0.08},5).to({_off:true},1).wait(60));

	// deux
	this.instance_3 = new lib.deux();
	this.instance_3.setTransform(275,200,0.078,0.078);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({scaleX:0.78,scaleY:0.78},9).wait(50).to({scaleX:0.08,scaleY:0.08},5).to({_off:true},1).wait(124));

	// trois
	this.instance_4 = new lib.trois();
	this.instance_4.setTransform(275,200,0.078,0.078);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.78,scaleY:0.78},9).wait(50).to({scaleX:0.08,scaleY:0.08},5).to({_off:true},1).wait(188));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(542.4,392.6,15.1,15.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;