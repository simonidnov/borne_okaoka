(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 200,
	fps: 30,
	color: "#FFCC00",
	manifest: []
};



// symbols:



(lib.watter_pool = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1).p("A6eiHQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA4ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACIAAFmEBg6gDeMhGRAAAIAABXQABAAACAAEhg5gDeMBGbAAAIAABXIAAFc");
	this.shape.setTransform(-0.4,-4.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-621.7,-28.2,1242.5,47.3);


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


(lib.running_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 5
	this.instance = new lib.tete();
	this.instance.setTransform(10,-42.5,1,1,-9,0,0,8.8,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:-40},0).wait(2).to({y:-37.5},0).wait(2).to({y:-45},0).wait(2));

	// Calque 4
	this.instance_1 = new lib.bras();
	this.instance_1.setTransform(1.5,-19.2,1,1,-6.7,0,0,0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:-16.2},0).wait(2).to({y:-15.2},0).wait(2).to({y:-21},0).wait(2));

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhKg1QB9ANAYBe");
	this.shape.setTransform(6.7,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AgThPQA4A9gYBh");
	this.shape_1.setTransform(1.1,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AAdhQQAeBzheAu");
	this.shape_2.setTransform(-3.9,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("ABPgxQgsBzhxgS");
	this.shape_3.setTransform(-8.8,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).wait(2));

	// Calque 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AhKAkQB5AmAbh2");
	this.shape_4.setTransform(-8.4,-6.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AggA/QB8g3hthG");
	this.shape_5.setTransform(1,-2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("ABDBIQgSh7hzgU");
	this.shape_6.setTransform(5.9,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("ABVBAQgeiLiLAN");
	this.shape_7.setTransform(7.6,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).wait(2));

	// Calque 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0)").s().p("AlxFtIAArZILjAAIAALZg");
	this.shape_8.setTransform(3.9,-26.2,1.012,1.026);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-63.8,75,75.2);


(lib.fail_water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A/PPnIAA/OMA+eAAAIAAfOg");
	this.shape.setTransform(102.4,-62.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(95));

	// Calque 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A/PPnIAA/OMA+fAAAIAAfOg");
	var mask_graphics_94 = new cjs.Graphics().p("A/PPnIAA/OMA+eAAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:78.4,y:-62.7}).wait(94).to({graphics:mask_graphics_94,x:102.4,y:-62.7}).wait(1));

	// Calque 1
	this.instance = new lib.watter_pool();
	this.instance.setTransform(492.1,24.1,1,1,0,0,0,0,-13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1).p("EBefgDeMhGRAAAIAABXQABAAACAAA85iHQA6gBAwgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAeAZQAwAjAXguQAXgvB3BSQBQAqAtgTQAsgUAWgXQAXgYAWgQQAXgRAUAFQATAGgTAmQgSAnA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACIAAFmEheegDeMBBlAAAIAABXIAAFc");
	this.shape_1.setTransform(136.6,33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1).p("EBefgCyMhGRAAAIAABXQABAAACAAA85hbQA6gBAwgjQAwgnA4ACQACAAABAAQABAAABAAQAVgBAUAFQAhAIAeAZQAwAjAThBQAShABpBoQBbBbAtgSQAtgTAIgJQAJgKAEgGQADgHANASQAMASAXAAQAXAAA1gdQA0gcB/h1QBWhAgOA7QgPA6gEAIQgFAIACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACIAAFmEheegCyMBBlAAAIAABXIAAFc");
	this.shape_2.setTransform(129.1,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,1).p("AyQkzQAAANgEAJQgFAJgNAAQgNAAgJgJQgJgJAAgNQAAgNAFgKQAEgJANAAQANAAAJAJQAJAKAAANgApukzQAAANgJAJQgJAJgNAAQgNAAgJgJQgJgJAAgNQAAgNAJgJQAJgJANAAQANAAAJAJQAJAJAAANgA85gSQA6gBAwgjQAwgnA4ACQACAAABAAQABAAABAAQAVgBATAFQAiAIAeAZQAUARAOgaQAFgVgIgMQgIgMgxgzQgYgYAYgXQAegeAVAtQAdAoAoAqQAyAzAtATQAZAKAYAAQAYAAANgVQAFgJALgeQABgEABgEQAWhFA4AAQAXAAALATQAHALALAfQAdA9BpAAQBDAABDhGQALgMAqgyQAggmAJgKQAVgaAXATQAZAbgZAjQgkAogEATQgEATARAIQAZAJAZAUQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACIAAFmEBefgBpMhGRAAAIAABXQABAAACAAA4ckwQAAAMgHAJQgIAJgPADQgOAEgGgLQgFgLABgNQACgOAHgJQAIgIALAAQALAAAIAIQAHAJAAAMgEheegBpMBBlAAAIAABXIAAFc");
	this.shape_3.setTransform(121.6,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,1).p("A85g3QA6gBAwgjQAwgnA4ACQACAAABAAQABAAABAAQAVgBATAFQAiAIAfAZQAfAXAkAIQAYAEAFgKQAFgLgJgQQgIgRgYgqQgZgrAAgdQAAgeAhAAQAIAAATAQQAhAbAMAJQAuAgAwAMQAeAIAgAAQAdAABAguQBAguAnAAQAgAAARATQAKAKAOAgQAMAbAMANQABABACABQAVATAmAAQAVAAAigVQAAAAABgBQApgZAhgsQAfgpAgghQAgghAdAdQAQAcgIAaQgJAagLAeQgLAfgBAfQgBAfAVAOQAVANAJACQAIACASAAQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACIAAFmEBefgCOMhGRAAAIAABXQABAAACAAEheegCOMBBlAAAIAABXIAAFc");
	this.shape_4.setTransform(114.1,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1.2,1).p("AAGAAQAAACgCACQgCACgCAAQgBAAgCgCQgCgCAAgCQAAgBACgCQACgCABAAQACAAACACQACACAAABg");
	this.shape_5.setTransform(71.5,-31.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.8,1).p("AAJAAQAAADgDADQgDADgDAAQgDAAgDgDQgCgDAAgDQAAgDACgDQADgCADAAQADAAADACQADADAAADg");
	this.shape_6.setTransform(-42.8,-26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.7,1).p("AAJAAQAAADgDACQgDADgDAAQgCAAgDgDQgCgCAAgDQAAgCACgDQADgDACAAQADAAADADQADADAAACg");
	this.shape_7.setTransform(3.4,-27);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1).p("A85hIQA6gBAwgkQAwgnA4ADQACgBABABQABgBABABQAVgBATAFQAiAIAfAYQAvAkA6ABQALgBALgBQAFAAAFgBQAVgJAAglQAAgIgKgfQgKgeAAgMQAAgXALgJQAJgFAVAAQAOAAA+AlQAgAUAbAJQAZAIAWAAQABAAABAAQA4gBAdg7QAPghAIgIQAPgTAZAAQAaAAAMAWQACAFANArQAUBHBPAAQBCAAA/g8QAkghALgIQAbgTAcAAQAjAAAHAsQACAJAAA/QAAAoAfARQAPAJAQABQAHAAAGgBQAGgCAHgDQAPgHAPgKQADgCAEgDQAwgnA4ADQABgBACABQABgBABABQAVgBATAFQAiAIAeAYQAwAkA6ABQA7gBAvgkQAugnA4ADQACgBABABQABgBACABQAUgBAUAFQAhAIAfAYQAvAkA7ABQA6gBAwgkQAwgnA4ADQABgBACABQABgBABABQAVgBATAFQAiAIAeAYQAwAkA6ABQA7gBAvgkQAwgnA4ADQACgBABABQABgBACABQAUgBAUAFQAhAIAfAYQAvAkA7ABQA6gBAwgkQAwgnA4ADQABgBACABQABgBABABQAVgBATAFQAiAIAeAYQAuAjA5ACIAAFmEBefgCgMhGRAAAIAABYQABAAACAAAoEhSQAEgBAEgBQABgBAEgCEheegCgMBBlAAAIAABYIAAFc");
	this.shape_8.setTransform(106.6,26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2,1).p("A85hjQA6gBAwgjQAwgnA4ACQACAAABAAQABAAABAAQAVgBATAFQAiAIAfAZQAvAjA6ABQAggBAcgKQBGgngHgsQgIgsAtAAQAiAAA0ApQAzApA1AAQAyAAAkgrQAUgZAGgGQAPgNAQgLQAPgKAcAKQAcAJAAAnQgBAmAYAeQAZAdAzgHQA0gHAbgQQAOgIANgMQAnglAcAAQAeAAAPArQANAjAUAGQAmAKAdgiQAdgiAbgCQAagBACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACIAAFmEBefgC6MhGRAAAIAABXQABAAACAAEheegC6MBBlAAAIAABXIAAFc");
	this.shape_9.setTransform(99.1,29.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ArTBIQAAgJAKAAQAKAAAAAJQAAAEgCADQgDADgFAAQgJAAgBgKgALCAlIgBgDIgBgFQAAgIAKgBQAKgBAAAKQAAAIgKADgAiEhIQAAgKAKABQAKABAAAJQAAADgDADQgDAEgEAAQgLAAABgLg");
	this.shape_10.setTransform(17.4,-46.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,1).p("EBefgC7MhGRAAAIAABXQABAAACAAAYOhkIAAFnA85hkQA7AAAvgkQAwgnA4ADQACgBABABQABgBACABQAUgBAUAFQAhAIAfAYQAvAkA7AAQAAAAACAAQADAAADAAQANABAeADQApADATAAQA2AAArgqQAXgXAWgLQAUgJATAAQAgAAAkAWQAlAVAmAAQAsAAAUg9QAKggAHgLQAOgTAYAAQAiAAARAXQAHAJAQApQADAHADAGQALAYAQANQAdAWA1AAQARAAAQgEQAYgFAXgNQAngXAgAAQANAAAXgOQAYgNAGgQQAHgPAXA/QAWgVAxACQABgBACABQABgBABABQAVgBATAFQAiAIAeAYQAwAkA6AAQA7AAAvgkQAugnA4ADQACgBABABQABgBACABQAUgBAUAFQAhAIAfAYQAvAkA7AAQA6AAAwgkQAwgnA4ADQABgBACABQABgBABABQAVgBATAFQAiAIAeAYQAwAkA6AAQA7AAAvgkQAwgnA4ADQACgBABABQABgBACABQAUgBAUAFQAhAIAfAYQAvAkA7AAQA6AAAwgkQAwgnA4ADQABgBACABQABgBABABQAVgBATAFQAiAIAeAYQAuAjA5ABEheegC7MBBlAAAIAABXIAAFd");
	this.shape_11.setTransform(91.6,29.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2,1).p("A85hDQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAtAiA3ACQBYALBtghQA5gUApgOQAqgNAagHQBVgUAbhEQAOghAHgJQAQgRAjAAQAaAAAJAlQARBGAJASQAGANAWAeQAWAdBbAmQBaAmBOg2QBNg1AGgDQAggOAjABQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACIAAFmEBefgCaMhGRAAAIAABXQABAAACAAEheegCaMBBlAAAIAABXIAAFc");
	this.shape_12.setTransform(91.6,26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2,1).p("A85gWQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQAFAAAGgBQArgBAxgBQA6gBAbgDQBBgIA0ggQAdgRAZgYQBQhNAWhZQAKglAEgHQAJgPAZAAQAaAAAIAyQAHBGALAoQANAwAdAiQBCBOCWAAQAOAAASgGQACgBABAAQAQgBAPgDQAmgHAigZQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACIAAFmEBefgBtMhGRAAAIAABXQABAAACAAEheegBtMBBlAAAIAABXIAAFc");
	this.shape_13.setTransform(91.6,21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,1).p("A85BSQA7AAAvgkQAwgnA4ADQACgBABABQABgBACABQAUgBAUAFQAhAIAfAYQAvAkB4AHQB4AICFhQQBJglBCiqQBBiqAKBWQAKBWANBBQAUBdAiAdQBABEA+AHQA9AIA7AAQA6AAAwgkQAwgnA4ADQABgBACABQABgBABABQAVgBATAFQAiAIAeAYQAwAkA6AAQA7AAAvgkQAugnA4ADQACgBABABQABgBACABQAUgBAUAFQAhAIAfAYQAvAkA7AAQA6AAAwgkQAwgnA4ADQABgBACABQABgBABABQAVgBATAFQAiAIAeAYQAwAkA6AAQA7AAAvgkQAwgnA4ADQACgBABABQABgBACABQAUgBAUAFQAhAIAfAYQAvAkA7AAQA6AAAwgkQAwgnA4ADQABgBACABQABgBABABQAVgBATAFQAiAIAeAYQAuAjA5ABIAAFpAtTmXQAAAPgKAKQgKAKgPAAQgOAAgLgKQgKgKAAgPQAAgOAKgLQALgKAOAAQAPAAAKAKQAKALAAAOgEBefgADMhGRAAAIAABVQABAAACAAEheegADMBBlAAAIAABVIAAFf");
	this.shape_14.setTransform(91.6,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1).p("A85CHQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAhAYAmAIQAHACAHABIAeAFQAMABAKgBQBYAKBCgMQBCgMAngYQAngYASgSQA7g7AyhNQAjg2AOAAQANAAALAdQAOAqAJAaQAWA+AfAkQAUAYAYALQBEAhAuAIQAsAHArgMQAAAAABAAQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACIAAFoAsPnTQAAAMgIAIQgIAIgMAAQgLAAgIgIQgIgIAAgMQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAALgEBefAAwMhGRAAAIAABXQABAAACAAEheeAAwMBBlAAAIAABXIAAFe");
	this.shape_15.setTransform(91.6,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2,1).p("AqXoDQAAAKgHAHQgHAHgKAAQgKAAgHgHQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKgEBefABdMhGRAAAIAABXQABAAACAAAYOC0IAAFoA15CzIAiAAQAtAFAeAAQBYAABagwQAlgTAlgcQANgKBDg3QAkgcANAAQAEAAAUAcQAaAnAZAZQAKALAMAJQBVBKB5AAQAiAAAEgBQABAAAGgCQA1gDAsggQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACA2dCzIAkAAA2dCzQAHABAHAAQAIAAAOgBA85C0QA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAqAfAyAEEheeABdMBBlAAAIAABXIAAFe");
	this.shape_16.setTransform(91.6,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,1).p("AnyouQAAAGgEAEQgFAFgGAAQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAGgEBefAB/MhGRAAAIAABXQABAAACAAAYODWIAAFoAodDTQAogIAjgZQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACA2DDVIAjAAQAMABAcACQAbABAKABQB+gMBMgXQAmgMAagOQAdgTAPgHQAXgKAnAAQAeAAA7AbQABAAABABQBNAkAUAGQA3AQA9ADQADAAAPABQAVAAArAAApdDTQAQADARAAQAQAAAPgDA2cDVQAGABAHAAQAGAAAGgBA85DWQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAnAdAuAGQAEAAAEAAIAZAAEheeAB/MBBlAAAIAABXIAAFe");
	this.shape_17.setTransform(91.6,-2.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2,1).p("AYOiHQABAAACAAEBefgDeMhGRAAAIAABXIAAFmA1/iIQB8gDBTgjQAmgQAQgHQAJgEADAAQAlgMAtAAQAyAAA4AZQAcAMAYAGQAWAHASAAQARAAAggIQAggHAWAAQAeAAAtATQAdALAXAFQAYAIAcAAQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACA85iHQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAoAeAxAFQACAAADAAQAOAAAOAAA2biIQAFABAHAAQAIAAAIgBEheegDeMBBlAAAIAABXIAAFc");
	this.shape_18.setTransform(91.6,33);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAIQgCgDABgEQAAgRAQADQARADAAANQAAAHgDACQgEADgKAAQgLAAgEgHg");
	this.shape_19.setTransform(53.2,-56.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2,1).p("EBefgDeMhGRAAAIAABXQABAAACAAAYOiHIAAFmA85iHQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQAEAAAFgBIAGAAQBSgFBTgjQAsgTAfgJQAYgHAPAAQAmAAAvAXQAvAWAbAAQAKAAAlgNQAlgOAZAAQABAAACAAQAuABBAAcQBDAcAyAAQAOAAAOgCQAPADAQAAQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAugnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAwAjA6ABQA7gBAvgjQAwgnA4ACQACAAABAAQABAAACAAQAUgBAUAFQAhAIAfAZQAvAjA7ABQA6gBAwgjQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAuAiA5ACEheegDeMBBlAAAIAABXIAAFc");
	this.shape_20.setTransform(91.6,33);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIAFIgBgFQAAgJAJAAQAJABAAAIQAAACgCAEQgDAEgEAAQgFAAgDgFg");
	this.shape_21.setTransform(62.3,-52.5);

	this.instance.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},41).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},37).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:129,y:23.6},41).to({_off:true},1).wait(15).to({_off:false,x:76.5},0).wait(37).to({x:-268.8},0).wait(1));

	// Calque 12
	this.instance_1 = new lib.tete();
	this.instance_1.setTransform(15.1,-42.7,1,1,-9,0,0,8.8,-12.8);
	this.instance_1._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2,1).p("AmRg4QAdApAoAnQAzA0AtASQAZALAXAAQAYAAAOgWQAEgIALgfQABgEABgEQAMgkAVgPQATgQAbAAQAXAAALATQAFALAKAYQABADABADQAbA9BpAAQBBAABAhBQADgDADgDQALgMAqgwQAgglAIgKQAWgbAXAT");
	this.shape_22.setTransform(11.1,7.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AAABTQAAAAAAAAIB6hXQATgPAZAEQAZAEAOASIA6BPIAEAFAjABrQhkhjAjhyAgVgZQgwAZgaAs");
	this.shape_23.setTransform(10.6,1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(2,1).p("AATimQAAAJgHAHQgGAGgIAAQgJAAgHgGQgGgHAAgJQAAgKAGgGQAHgHAJAAQAIAAAGAHQAHAGAAAKgApxCuQAwgnA4ACQABAAACAAQABAAABAAQAVgBATAFQAiAIAeAZQAfAXAkAIQAZAEAEgKQAFgLgIgQQgIgRgZgqQgZgrAAgdQAAgeAiAAQAHAAAUAQQAgAbANAJQAuAgAwAMQAeAIAfAAQAdAABBguQA+guAnAAQAfAAASATQAKAKAOAgQAMAbAMANQABABABABQAWATAlAAQAWAAAhgVQABAAABgBQApgZAggsQAggpAggfQAgghAdAdAJyjAQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGgAmeivQAAAHgFAFQgFAFgHAAQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHg");
	this.shape_24.setTransform(2.3,-1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AB5A9IAdgVQATgPAZAEQAZAEAOAUIAGAHAjoAsQgNgxAQg3");
	this.shape_25.setTransform(7.8,4.6);

	this.instance_1.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},36).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).wait(2).to({rotation:6,x:21.5,y:-35.8},0).wait(1).to({regY:-12.7,rotation:31,x:24,y:-21.6},0).wait(1).to({regY:-12.8,rotation:39.3,x:27.9,y:-8.6},0).wait(1).to({rotation:39.2,x:29.4,y:-3.5},0).wait(1).to({rotation:47.2,x:28.3,y:7},0).wait(1).to({y:14.5},0).to({_off:true},1).wait(51));

	// Calque 11
	this.instance_2 = new lib.bras();
	this.instance_2.setTransform(1.4,-19.4,1,1,8.3,0,0,0,-2.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AiBhgQArBrA+AtQA8AuBegG");
	this.shape_26.setTransform(1.8,-23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AgciPQg/BUAeBlQAfBmBmAA");
	this.shape_27.setTransform(1.4,-23.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AAAiVQhIBKAQBoQAPBqBlAP");
	this.shape_28.setTransform(4.8,-13.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AAciXQhQBAADBqQACBqBiAb");
	this.shape_29.setTransform(3.6,-8.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("AAziXQhZAzgLBqQgNBqBdAo");
	this.shape_30.setTransform(3.2,-0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AhSgyQBGBkBfAB");
	this.shape_31.setTransform(-17.1,7.3);

	this.instance_2.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},36).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30,p:{y:-0.7}}]},1).to({state:[{t:this.shape_30,p:{y:6.8}}]},1).to({state:[{t:this.shape_31}]},1).to({state:[]},1).wait(50));

	// Calque 10
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AAjg5QCJCDj+gS");
	this.shape_32.setTransform(-4.6,-5.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("ABegSQhlBVhWhY");
	this.shape_33.setTransform(-10.5,-9.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("ABbAQQh5A5g8hr");
	this.shape_34.setTransform(-13.9,-13.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("ABHBVQiAg0gNh1");
	this.shape_35.setTransform(-19.3,-27.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AA6BfQh3hGAEh3");
	this.shape_36.setTransform(-14.1,-20.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AAvBlQhuhUATh1");
	this.shape_37.setTransform(-13.4,-18);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AAkBrQhhhjAjhy");
	this.shape_38.setTransform(-12.5,-13.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("AgCAQQACgQADgP");
	this.shape_39.setTransform(-15.6,7.6);

	this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32}]},36).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38,p:{y:-13.3}}]},1).to({state:[{t:this.shape_38,p:{y:-5.8}}]},1).to({state:[]},1).to({state:[{t:this.shape_39}]},2).to({state:[]},1).wait(48));

	// Calque 9
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("AgzBZQBMg6Abh3");
	this.shape_40.setTransform(-6.2,-2.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("AhIBIQBYgjA5hs");
	this.shape_41.setTransform(-12.1,-4.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("AhggUQBoBBBZgl");
	this.shape_42.setTransform(-21.8,-19.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(5,1).p("AhcgeQBcBPBdgY");
	this.shape_43.setTransform(-17.6,-13.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(5,1).p("AhYgnQBUBaBdgM");
	this.shape_44.setTransform(-17.6,-11.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(5,1).p("AhSgyQBGBkBfAB");
	this.shape_45.setTransform(-17.1,-7.7);

	this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},36).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45,p:{y:-7.7}}]},1).to({state:[{t:this.shape_45,p:{y:-0.2}}]},1).to({state:[]},1).wait(51));

	// Calque 5
	this.instance_3 = new lib.running_g("synched",0);
	this.instance_3.setTransform(8.5,-28,1,1,0,0,0,8.6,-27.8);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},36).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.6,-162.7,424,200);


// stage content:



(lib.watter_run_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choice_0:87,choice_1:99});

	// timeline functions:
	this.frame_84 = function() {
		this.gotoAndPlay(1);//utilities.pop_up_motion_callback();
	}
	this.frame_93 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}
	this.frame_105 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(9).call(this.frame_93).wait(12).call(this.frame_105).wait(134));

	// Calque 4
	this.instance = new lib.fail_water("synched",6,false);
	this.instance.setTransform(130.3,132.5,1,1,0,0,0,8.6,-27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},230).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,97.6,424,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;