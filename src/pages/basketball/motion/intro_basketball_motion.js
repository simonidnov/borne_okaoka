(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 200,
	fps: 30,
	color: "#465FC4",
	manifest: []
};



// symbols:



(lib.hand_basket = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7).p("EADHgkpIAAhaQAAg8gqgrQgrgrg8AAQg5AAgrArQgpAqgCA5IAAotQAAg8gqgrQgrgrg8AAQg7AAgrArQgqArAAA8IAAJoIAACVEADHgkpIAAAEEAHpgjGIAAhfQAAg8gqgqQgrgrg8AAQg7AAgrArQgRARgLAVQgBACgBADQgMAZgBAeEgF6glMQhFhIhCglQgFgDgGgDQgXgMgXgIQhhghg0A8Qg9BFAlBUQATArAeAcQB8CBBqEbQAjBcAgBrQARA4ARA9QAVBQAxBCQAxBCBEAtMAAABFGIMeAAMAAAhFoQBGg8AihZQAghUAAhqIAApMQAAg9gmgpQgmgrg7AAQg7AAglArQgRASgJAXQgBACgBABQgJAYgBAcIAAAGEgBZgmDIAAgE");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#465FC4").s().p("EgCwAxGMAAAhFFQhEgtgxhCQgxhCgVhQQgRg9gRg4QgghrgjhcQhqkbh8iBQgegcgTgrQglhTA9hGQA0g8BhAhQAXAIAXAMIALAGQBCAlBFBIIAACVIAAiVIAApoQAAg8AqgqQArgsA7ABQA8gBArAsQAqAqAAA8IAAItQACg5ApgpQArgrA5gBQA8ABArArQAqAqAAA8IAABaIAAAFIAAgFQABgdAMgaIACgFQALgUARgSQArgrA7AAQA8AAArArQAqAqAAA9IAABeIAAAGIAAgGQABgcAJgXIACgEQAJgXARgSQAlgrA7AAQA7AAAmArQAmApAAA9IAAJMQAABqggBUQgiBahGA7MAAABFngEgBZgmDIAAgEg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.3,-317.8,167.6,635.6);


(lib.basket_basket = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7).p("AjZjZIGzAAIAAGzImzAAg");
	this.shape.setTransform(-0.1,-38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6600").ss(8,1,1).p("AkhAAIJDAA");
	this.shape_1.setTransform(0,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(6).p("AgCBRIClAAIAACxADLhuIjNAAIAAjKAgCBRIAAi/IjIAAIAoC/IAACxIAABBADLhuIgoC/AgCECIClAAIAABBAgCFBIAAg/IAAixAEUk4IhJDKAkTk4IBJDKAiiBRICgAAAiiECICgAA");
	this.shape_2.setTransform(0.4,27.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-63.6,66,126.8);


(lib.basket_ball_orange = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AiGCHQg5g4AAhPQAAhOA5g4QA4g5BOAAQBPAAA4A5QA5A4AABOQAABPg5A4Qg4A5hPAAQhOAAg4g5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-19.2,38.5,38.5);


(lib.basket_intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand_basket
	this.instance = new lib.hand_basket();
	this.instance.setTransform(-193.9,165.6,0.45,0.45,0,0,0,4.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({y:85.6},20).wait(20).to({scaleX:0.41,scaleY:0.41,y:65.6},0).to({x:-115.9,y:-18.4},43).wait(25).to({scaleX:0.51,scaleY:0.51,y:31.6},0).wait(80).to({y:171.6},31).wait(82));

	// basket_basket
	this.instance_1 = new lib.basket_basket();
	this.instance_1.setTransform(21.9,53.8,1,1,0,0,0,0,-0.2);
	this.instance_1._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(8,1,1).p("AkhAAIJDAA");
	this.shape.setTransform(21.9,-119.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6).p("AgChuIAAjKAgChuIjIAAIAoC/ICgAAIClAAIAACxAEUk4IhJDKIjNAAAiiECIAABBAgCECIClAAIAABBAgCFBIAAg/IAAixIAAi/AiiECICgAAAiiBRIAACxADLhuIgoC/AkTk4IBJDK");
	this.shape_1.setTransform(22.3,-88.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.shape_1},{t:this.shape}]},137).to({state:[{t:this.instance_1}]},117).to({state:[{t:this.instance_1}]},42).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({y:-136.2},12).to({y:-116.2},7).to({_off:true},137).wait(117).to({_off:false},0).to({y:53.8},42).wait(8));

	// basket_ball_orange
	this.instance_2 = new lib.basket_ball_orange();
	this.instance_2.setTransform(-210.8,-57.3,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.25,scaleY:1.25},9).to({scaleX:1,scaleY:1},7).wait(138).to({guide:{path:[-210.6,-57.4,-114.6,-276,2.6,-140.6]}},26).to({x:22.3,y:-170.4},4).to({x:32.3,y:-166.4},4).to({x:42.3,y:-146.4},4).to({x:32.3,y:-156.4},5).to({x:22.3},3).to({y:28.6},22).to({_off:true},75).wait(50));

	// Calque 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_86 = new cjs.Graphics().p("AxNLEISK/gIQSJZIyLffg");
	var mask_graphics_87 = new cjs.Graphics().p("AxOLEISL/fIQRJYIyKfgg");
	var mask_graphics_88 = new cjs.Graphics().p("AxOLDISL/eIQRJZIyKffg");
	var mask_graphics_89 = new cjs.Graphics().p("AxNLEISK/fIQSJYIyLfgg");
	var mask_graphics_90 = new cjs.Graphics().p("AxOLDISL/eIQSJZIyLffg");
	var mask_graphics_91 = new cjs.Graphics().p("AxNLDISK/fIQRJaIyKfeg");
	var mask_graphics_92 = new cjs.Graphics().p("AxNLDISK/fIQSJZIyLffg");
	var mask_graphics_93 = new cjs.Graphics().p("AxOLEISL/fIQRJYIyKffg");
	var mask_graphics_94 = new cjs.Graphics().p("AxOLEISL/fIQRJZIyKffg");
	var mask_graphics_95 = new cjs.Graphics().p("AxNLDISK/fIQSJaIyLffg");
	var mask_graphics_96 = new cjs.Graphics().p("AxOLEISL/fIQRJZIyKffg");
	var mask_graphics_97 = new cjs.Graphics().p("AxNLDISK/fIQRJaIyKffg");
	var mask_graphics_98 = new cjs.Graphics().p("AxOLDISL/fIQRJZIyKffg");
	var mask_graphics_99 = new cjs.Graphics().p("AxOLEISL/gIQRJZIyKffg");
	var mask_graphics_100 = new cjs.Graphics().p("AxNLEISK/fIQSJYIyLfgg");
	var mask_graphics_101 = new cjs.Graphics().p("AxNLEISK/fIQSJZIyLffg");
	var mask_graphics_102 = new cjs.Graphics().p("AxOLEISL/fIQRJYIyKfgg");
	var mask_graphics_103 = new cjs.Graphics().p("AxOLEISL/fIQSJZIyLffg");
	var mask_graphics_104 = new cjs.Graphics().p("AxOLDISL/fIQRJaIyKffg");
	var mask_graphics_105 = new cjs.Graphics().p("AxNLDISK/fIQSJZIyLffg");
	var mask_graphics_106 = new cjs.Graphics().p("AxNLEISK/fIQSJYIyLffg");
	var mask_graphics_107 = new cjs.Graphics().p("AxOLEISL/fIQRJZIyKffg");
	var mask_graphics_108 = new cjs.Graphics().p("AxOLEISL/fIQRJYIyKffg");
	var mask_graphics_109 = new cjs.Graphics().p("AxOLEISL/fIQSJZIyLffg");
	var mask_graphics_110 = new cjs.Graphics().p("AxOLDISL/fIQRJaIyKffg");
	var mask_graphics_111 = new cjs.Graphics().p("AxNLDISK/fIQSJZIyLffg");
	var mask_graphics_112 = new cjs.Graphics().p("AxNLEISK/gIQSJZIyLffg");
	var mask_graphics_113 = new cjs.Graphics().p("AxOLEISL/fIQRJYIyKfgg");
	var mask_graphics_114 = new cjs.Graphics().p("AxNLEISK/gIQSJZIyLffg");
	var mask_graphics_115 = new cjs.Graphics().p("AxOLEISL/fIQSJYIyLfgg");
	var mask_graphics_116 = new cjs.Graphics().p("AxNLDISK/eIQRJZIyKffg");
	var mask_graphics_117 = new cjs.Graphics().p("AxNLDISK/fIQSJaIyLfeg");
	var mask_graphics_118 = new cjs.Graphics().p("AxOLDISL/fIQRJZIyKffg");
	var mask_graphics_119 = new cjs.Graphics().p("AxOLEISL/fIQRJYIyKffg");
	var mask_graphics_120 = new cjs.Graphics().p("AxNLDISK/fIQSJZIyLffg");
	var mask_graphics_121 = new cjs.Graphics().p("AxOLEISL/fIQRJYIyKffg");
	var mask_graphics_122 = new cjs.Graphics().p("AxNLEISK/fIQRJZIyKffg");
	var mask_graphics_123 = new cjs.Graphics().p("AxOLDISL/fIQRJaIyKffg");
	var mask_graphics_124 = new cjs.Graphics().p("AxOLDISL/fIQRJZIyKffg");
	var mask_graphics_125 = new cjs.Graphics().p("AxNLEISK/gIQSJZIyLffg");
	var mask_graphics_126 = new cjs.Graphics().p("AxNLEISK/fIQSJYIyLfgg");
	var mask_graphics_127 = new cjs.Graphics().p("AxOLEISL/gIQRJZIyKffg");
	var mask_graphics_128 = new cjs.Graphics().p("AxNLEISK/fIQRJYIyKfgg");
	var mask_graphics_129 = new cjs.Graphics().p("AxOLDISL/eIQRJZIyKffg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_graphics_86,x:-285.9,y:62}).wait(1).to({graphics:mask_graphics_87,x:-283.2,y:58.2}).wait(1).to({graphics:mask_graphics_88,x:-280.6,y:54.3}).wait(1).to({graphics:mask_graphics_89,x:-278,y:50.5}).wait(1).to({graphics:mask_graphics_90,x:-275.4,y:46.7}).wait(1).to({graphics:mask_graphics_91,x:-272.7,y:42.8}).wait(1).to({graphics:mask_graphics_92,x:-270.1,y:39}).wait(1).to({graphics:mask_graphics_93,x:-267.5,y:35.1}).wait(1).to({graphics:mask_graphics_94,x:-264.9,y:31.3}).wait(1).to({graphics:mask_graphics_95,x:-262.2,y:27.4}).wait(1).to({graphics:mask_graphics_96,x:-259.6,y:23.6}).wait(1).to({graphics:mask_graphics_97,x:-257,y:19.8}).wait(1).to({graphics:mask_graphics_98,x:-254.3,y:15.9}).wait(1).to({graphics:mask_graphics_99,x:-251.7,y:12.1}).wait(1).to({graphics:mask_graphics_100,x:-249.1,y:8.2}).wait(1).to({graphics:mask_graphics_101,x:-246.5,y:4.4}).wait(1).to({graphics:mask_graphics_102,x:-243.8,y:0.6}).wait(1).to({graphics:mask_graphics_103,x:-241.2,y:-3.3}).wait(1).to({graphics:mask_graphics_104,x:-238.6,y:-7.1}).wait(1).to({graphics:mask_graphics_105,x:-235.9,y:-11}).wait(1).to({graphics:mask_graphics_106,x:-233.3,y:-14.8}).wait(1).to({graphics:mask_graphics_107,x:-230.7,y:-18.7}).wait(1).to({graphics:mask_graphics_108,x:-228.1,y:-22.5}).wait(1).to({graphics:mask_graphics_109,x:-225.4,y:-26.3}).wait(1).to({graphics:mask_graphics_110,x:-222.8,y:-30.2}).wait(1).to({graphics:mask_graphics_111,x:-220.2,y:-34}).wait(1).to({graphics:mask_graphics_112,x:-217.6,y:-37.9}).wait(1).to({graphics:mask_graphics_113,x:-214.9,y:-41.7}).wait(1).to({graphics:mask_graphics_114,x:-212.3,y:-45.5}).wait(1).to({graphics:mask_graphics_115,x:-209.7,y:-49.4}).wait(1).to({graphics:mask_graphics_116,x:-207,y:-53.2}).wait(1).to({graphics:mask_graphics_117,x:-204.4,y:-57.1}).wait(1).to({graphics:mask_graphics_118,x:-201.8,y:-60.9}).wait(1).to({graphics:mask_graphics_119,x:-199.2,y:-64.8}).wait(1).to({graphics:mask_graphics_120,x:-196.5,y:-68.6}).wait(1).to({graphics:mask_graphics_121,x:-193.9,y:-72.4}).wait(1).to({graphics:mask_graphics_122,x:-191.3,y:-76.3}).wait(1).to({graphics:mask_graphics_123,x:-188.6,y:-80.1}).wait(1).to({graphics:mask_graphics_124,x:-186,y:-84}).wait(1).to({graphics:mask_graphics_125,x:-183.4,y:-87.8}).wait(1).to({graphics:mask_graphics_126,x:-180.8,y:-91.7}).wait(1).to({graphics:mask_graphics_127,x:-178.1,y:-95.5}).wait(1).to({graphics:mask_graphics_128,x:-175.5,y:-99.3}).wait(1).to({graphics:mask_graphics_129,x:-172.9,y:-103.2}).wait(25).to({graphics:null,x:0,y:0}).wait(193));

	// Calque 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-100.8,6.8,2.1,6.8).ss(6).p("AyIKsUAQOgk8AUHAbv");
	this.shape_2.setTransform(-94.6,-125.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(7).p("AjZjZIGzAAIAAGzImzAAg");
	this.shape_3.setTransform(21.8,-154.2);

	this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},86).to({state:[]},68).to({state:[{t:this.shape_3}]},26).to({state:[]},117).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.7,-59.2,3.8,3.8);


// stage content:



(lib.intro_basketball_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choice_0:347});

	// timeline functions:
	this.frame_344 = function() {
		this.gotoAndPlay(1);//utilities.pop_up_motion_callback();
	}
	this.frame_353 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(344).call(this.frame_344).wait(9).call(this.frame_353).wait(1));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,0,3).p("A/YAAMA+xAAA");
	this.shape.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(354));

	// Calque 1
	this.instance = new lib.basket_intro("synched",0,false);
	this.instance.setTransform(262.9,212.6,1,1,0,0,0,2.8,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(354));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.6,254.4,407,48.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;