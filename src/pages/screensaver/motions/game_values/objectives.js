(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 600,
	fps: 60,
	color: "#465FC4",
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


(lib.objectiveshead = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAHQgDgCAAgFQAAgDADgEQAEgDADAAQAEAAADADQAEAEAAADQAAAFgEACQgDAEgEAAQgDAAgEgEg");
	this.shape.setTransform(0.1,-0.1,4.28,4.28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglAlQgPgQAAgVQAAgVAPgPQARgQAUAAQAWAAAPAQQAQAPAAAVQAAAVgQAQQgPAQgWAAQgUAAgRgQgAgXgXQgKAKAAANQAAAOAKAKQALAKAMAAQAOAAAKgKQAKgKAAgOQAAgNgKgKQgKgKgOAAQgMAAgLAKg");
	this.shape_1.setTransform(0.1,0,4.28,4.28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEBFQgdgdAAgoQAAgoAdgcQAdgdAnAAQApAAAcAdQAdAcAAAoQAAAogdAdQgcAdgpAAQgnAAgdgdgAgxgxQgVAVAAAcQAAAdAVAVQAVAVAcAAQAdAAAVgVQAVgVAAgdQAAgcgVgVQgVgVgdAAQgcAAgVAVg");
	this.shape_2.setTransform(0,0,4.28,4.28);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.2,-42.2,84.5,84.6);


(lib.lune = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AOOAAQAAF5kLEKQkKELl5AAQl4AAkKkLQkLkKAAl5QAAl4ELkKQEKkLF4AAQF5AAEKELQELEKAAF4g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqCKDQkLkLABl4QgBl3ELkLQELkLF3ABQF4gBELELQELELgBF3QABF4kLELQkLELl4gBQl3ABkLkLg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-97.5,195,195);


// stage content:
(lib.objectives = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_274 = function() {
		if(typeof navigation !== 'undefined'){
			if(typeof navigation._page_script !== 'undefined'){
				if(typeof navigation._page_script.next_motion !== 'undefined'){
					navigation._page_script.next_motion();
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(274).call(this.frame_274).wait(2));

	// Calque 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAHQgDgCAAgFQAAgDADgEQAEgDADAAQAEAAADADQAEAEAAADQAAAFgEACQgDAEgEAAQgDAAgEgEg");
	this.shape.setTransform(453.2,229.1,0.856,0.856);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAJQgEgDgBgGQABgEAEgEQADgEAFAAQAFAAAFAEQADAEAAAEQAAAGgDADQgFAEgFAAQgFAAgDgEg");
	this.shape_1.setTransform(453.2,229.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAMQgGgFABgHQgBgFAGgGQAFgFAGAAQAGAAAGAFQAGAGAAAFQAAAHgGAFQgGAFgGAAQgGAAgFgFg");
	this.shape_2.setTransform(453.2,229.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAIAAAHAGQAGAHAAAHQAAAJgGAGQgHAGgIAAQgIAAgGgGg");
	this.shape_3.setTransform(453.2,229.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRARQgHgHAAgKQAAgJAHgIQAHgHAKAAQAJAAAIAHQAIAIAAAJQAAAKgIAHQgIAIgJAAQgKAAgHgIg");
	this.shape_4.setTransform(453.2,229.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAIgJALAAQALAAAJAJQAJAJAAAKQAAAMgJAIQgJAJgLAAQgLAAgIgJg");
	this.shape_5.setTransform(453.2,229.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAXQgKgJAAgOQAAgMAKgJQAJgLANAAQANAAAKALQAKAJAAAMQAAAOgKAJQgKAKgNAAQgNAAgJgKg");
	this.shape_6.setTransform(453.2,229.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAZQgMgKAAgPQAAgNAMgMQAJgLAPAAQAPAAAKALQAMAMAAANQAAAPgMAKQgKAMgPAAQgPAAgJgMg");
	this.shape_7.setTransform(453.2,229.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAcQgNgLAAgRQAAgPANgMQAKgNARAAQAQAAAMANQANAMAAAPQAAARgNALQgMANgQAAQgRAAgKgNg");
	this.shape_8.setTransform(453.2,229.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAfQgOgMAAgTQAAgQAOgOQAMgOASAAQARAAAOAOQAOAOAAAQQAAATgOAMQgOAOgRAAQgSAAgMgOg");
	this.shape_9.setTransform(453.2,229.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{scaleX:0.856,scaleY:0.856,y:229.1}}]},45).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape,p:{scaleX:4.28,scaleY:4.28,y:229.2}}]},1).to({state:[]},1).to({state:[]},219).wait(1));

	// Calque 9
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAlQgPgQAAgVQAAgVAPgPQARgQAUAAQAWAAAPAQQAQAPAAAVQAAAVgQAQQgPAQgWAAQgUAAgRgQgAgXgXQgKAKAAANQAAAOAKAKQALAKAMAAQAOAAAKgKQAKgKAAgOQAAgNgKgKQgKgKgOAAQgMAAgLAKg");
	this.shape_10.setTransform(453.1,229.3,0.948,0.948);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvAvQgUgTAAgcQAAgcAUgTQAUgUAbAAQAcAAAVAUQATATAAAcQAAAcgTATQgVAVgcAAQgbAAgUgVgAgegfQgMAOAAARQAAASAMAMQAOANAQAAQASAAANgNQAMgMAAgSQAAgRgMgOQgNgMgSAAQgQAAgOAMg");
	this.shape_11.setTransform(453.1,229.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag8A8QgZgZAAgjQAAgjAZgZQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAZQgaAZgjAAQgiAAgagZgAgmgnQgQASAAAVQAAAXAQAPQARAQAVABQAXgBAQgQQAQgPAAgXQAAgVgQgSQgQgPgXAAQgVAAgRAPg");
	this.shape_12.setTransform(453.1,229.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIBJQgfgfAAgqQAAgqAfgeQAfgeApgBQArABAfAeQAeAeAAAqQAAAqgeAfQgfAfgrgBQgpABgfgfgAgugvQgTAUAAAbQAAAcATASQAUAUAaAAQAcAAATgUQAUgSAAgcQAAgbgUgUQgTgUgcAAQgaAAgUAUg");
	this.shape_13.setTransform(453.1,229.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhVBVQgkgkAAgxQAAgyAkgjQAkgjAxAAQAyAAAkAjQAkAjAAAyQAAAxgkAkQgkAkgyAAQgxAAgkgkgAg2g3QgXAYAAAfQAAAgAXAXQAYAXAegBQAgABAXgXQAXgXAAggQAAgfgXgYQgXgXggAAQgeAAgYAXg");
	this.shape_14.setTransform(453.2,229.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhiBiQgogqAAg4QAAg5AogoQAqgpA4AAQA5AAAqApQAoAoAAA5QAAA4goAqQgqApg5AAQg4AAgqgpgAg/g/QgaAbAAAkQAAAlAaAaQAcAaAjAAQAlAAAagaQAbgaAAglQAAgkgbgbQgagbglAAQgjAAgcAbg");
	this.shape_15.setTransform(453.2,229.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhuBuQgugvAAg/QAAhBAugtQAvgtA/gBQBAABAwAtQAtAtAABBQAAA/gtAvQgwAvhAgBQg/ABgvgvgAhHhHQgdAfAAAoQAAAqAdAdQAfAdAoAAQAqAAAegdQAdgdAAgqQAAgogdgfQgegegqAAQgoAAgfAeg");
	this.shape_16.setTransform(453.2,229.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ah7B7Qgzg1AAhGQAAhIAzgzQA0gyBHAAQBIAAA0AyQAzAzAABIQAABGgzA1Qg0AzhIAAQhHAAg0gzgAhPhPQghAiAAAtQAAAuAhAhQAiAhAtgBQAvABAhghQAhghAAguQAAgtghgiQghgigvAAQgtAAgiAig");
	this.shape_17.setTransform(453.2,229.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiICIQg4g6AAhOQAAhPA4g4QA6g4BOAAQBPAAA6A4QA4A4AABPQAABOg4A6Qg6A4hPAAQhOAAg6g4gAhXhYQgkAmAAAyQAAAzAkAkQAmAkAxAAQA0AAAkgkQAkgkAAgzQAAgygkgmQgkgkg0AAQgxAAgmAkg");
	this.shape_18.setTransform(453.2,229.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiUCUQg+g/AAhVQAAhXA+g9QA/g8BVgBQBXABA+A8QA+A9gBBXQABBVg+A/Qg+A+hXgBQhVABg/g+gAhfhgQgoAqAAA2QAAA3AoAoQApAoA2AAQA5AAAngoQAogoAAg3QAAg2gogqQgngog5AAQg2AAgpAog");
	this.shape_19.setTransform(453.2,229.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AihChQhDhEAAhdQAAheBDhCQBFhDBcAAQBeAABFBDQBCBCAABeQAABdhCBEQhFBCheAAQhcAAhFhCgAhnhpQgrAtAAA8QAAA8ArArQAsArA7AAQA9AAArgrQArgrAAg8QAAg8grgtQgrgqg9gBQg7ABgsAqg");
	this.shape_20.setTransform(453.2,229.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},40).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},6).to({state:[]},219).wait(1));

	// Calque 13
	this.instance = new lib.lune();
	this.instance.setTransform(1131.3,-647.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(164).to({scaleX:0.77,scaleY:0.77,x:710.4,y:96},25).to({scaleX:0.14,scaleY:0.14,x:530.4,y:286.9},18).wait(69));

	// Mode Isolation
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhEBFQgdgdAAgoQAAgoAdgcQAdgdAnAAQApAAAcAdQAdAcAAAoQAAAogdAdQgcAdgpAAQgnAAgdgdgAgxgxQgVAVAAAcQAAAdAVAVQAVAVAcAAQAdAAAVgVQAVgVAAgdQAAgcgVgVQgVgVgdAAQgcAAgVAVg");
	this.shape_21.setTransform(453.1,229.3,4.28,4.28);

	this.instance_1 = new lib.objectiveshead();
	this.instance_1.setTransform(453.1,229.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},37).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_1}]},18).to({state:[{t:this.instance_1}]},51).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},13).to({state:[]},85).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).wait(69).to({x:433.1},7).to({x:406.1,y:244.3},7).to({x:385.1,y:257.3},25).to({x:397.8,y:243.8},12).to({x:453.1,y:229.3},13).to({_off:true},85).wait(2));

	// Calque 6
	this.instance_2 = new lib.okaokaplayhead();
	this.instance_2.setTransform(452.8,261.9,1,1,0,0,0,0,33.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhvlQIDfAAQCgAAAACgIAAFiQAACfigAAIjfAAQigAAAAifIAAliQAAigCgAAg");
	this.shape_22.setTransform(452.8,228.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkSirQAAigCfgDQBwgEBvAAQCgAAADCfQAECvAACwQAACfifAEQhvADhxAAQifAAgDieQgEiwAAivg");
	this.shape_23.setTransform(452.8,228.2);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(12.9,1,1).p("AkVilQAAifCdgHQBwgHBxAAQCfAAAHCdQAHCuAACuQAACgidAGQhwAHhxAAQigAAgGidQgHitAAivg");
	this.shape_24.setTransform(452.8,228.2);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(12.8,1,1).p("AkYifQAAigCbgKQBwgKByAAQCfAAAKCbQALCsAACtQAACgicAKQhvAKhzAAQifAAgKibQgKisAAitg");
	this.shape_25.setTransform(452.9,228.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(12.7,1,1).p("AkgiRQAAifCXgSQBwgUB1AAQCfAAATCXQATCmAACsQAACeiXATQhvATh2AAQifAAgTiWQgTimAAisg");
	this.shape_26.setTransform(452.9,228.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(12.5,1,1).p("AkoiCQAAifCTgcQBugcB6AAQCeAAAcCTQAcCgAACpQAACfiTAcQhuAch6AAQieAAgdiTQgbigAAipg");
	this.shape_27.setTransform(453,228.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(12.3,1,1).p("AkwhzQAAieCOglQBvglB9AAQCdAAAlCPQAlCaAACnQAACeiOAlQhvAlh8AAQieAAgliPQgliaAAing");
	this.shape_28.setTransform(453,228.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(12.2,1,1).p("Ak4hlQAAidCKguQBvguB/AAQCeAAAtCLQAuCUAACmQAACdiKAtQhuAuiAAAQidAAguiKQguiUAAimg");
	this.shape_29.setTransform(453,228.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(12,1,1).p("AlAhWQAAidCGg3QBug3CDAAQCdAAA2CGQA3CPAACkQAACciGA3QhuA3iDAAQidAAg2iGQg3iPAAijg");
	this.shape_30.setTransform(453.1,228.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(11.8,1,1).p("AlJhHQAAicCChAQBuhACHAAQCcAABACCQBACJAAChQAACdiCA/QhuBAiHAAQicAAhAiCQhAiJAAihg");
	this.shape_31.setTransform(453.2,228.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(11.7,1,1).p("AlRg5QAAicB+hIQBthJCKAAQCcAABJB9QBJCEAACfQAACch/BIQhsBJiKAAQidAAhIh9QhJiDAAigg");
	this.shape_32.setTransform(453.2,228.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(11.5,1,1).p("AlZgqQAAibB5hSQBuhSCNAAQCcAABQB5QBTB+AACeQAACbh6BRQhtBSiOAAQibAAhRh5QhSh+AAidg");
	this.shape_33.setTransform(453.3,229);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(11.4,1,1).p("AlhgcQAAiaB1hbQBuhaCQAAQCbAABaB1QBbB4AACbQAACbh1BaQhtBaiRAAQiaAAhbh1Qhbh3AAicg");
	this.shape_34.setTransform(453.3,229.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(11.2,1,1).p("AlpgNQAAiaBxhkQBthjCUAAQCaAABjBxQBkByAACZQAACahxBkQhsBjiVAAQiaAAhjhxQhkhxAAiag");
	this.shape_35.setTransform(453.3,229.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(11,1,1).p("AFyAAQAACZhtBsQhsBtiZAAQiYAAhshtQhthsAAiZQAAiYBthsQBshtCYAAQCZAABsBtQBtBsAACYg");
	this.shape_36.setTransform(453.4,229.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_22}]},4).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).to({state:[]},237).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(6).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(251));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(7).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(250));

	// Calque 5
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEWAAIorAA");
	this.shape_37.setTransform(453.1,288.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkbASQEkADETgn");
	this.shape_38.setTransform(455.1,286.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkgAlQEzAGEOhP");
	this.shape_39.setTransform(457.1,284.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmA3QFDAJEKh3");
	this.shape_40.setTransform(459.2,283);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(13,1,1).p("AksBKQFSAMEGig");
	this.shape_41.setTransform(461.2,281.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkxBdQFhAPECjJ");
	this.shape_42.setTransform(463.2,279.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(13,1,1).p("AE4hwQj+DylxgS");
	this.shape_43.setTransform(465.2,277.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(13,1,1).p("AliCrQGSAcEzlz");
	this.shape_44.setTransform(469.6,271.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(13,1,1).p("AmODnQG0AmFpn2");
	this.shape_45.setTransform(473.9,265.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(13,1,1).p("Am5EjQHVAwGep4");
	this.shape_46.setTransform(478.3,259.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(13,1,1).p("AnlFfQH3A6HUr7");
	this.shape_47.setTransform(482.6,253.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(13,1,1).p("AoQGaQIZBEIIt8");
	this.shape_48.setTransform(487,247.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ao8HWQI8BOI9v/");
	this.shape_49.setTransform(491.3,241.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(13,1,1).p("ApnISQJeBYJxyB");
	this.shape_50.setTransform(495.7,235.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(13,1,1).p("AqTJOQKABiKn0E");
	this.shape_51.setTransform(500,229.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aq+KKQKhBsLc2G");
	this.shape_52.setTransform(504.4,223.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(13,1,1).p("ArpLGQLCB2MR4J");
	this.shape_53.setTransform(508.7,217);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(13,1,1).p("AsVMBQLlCANG6K");
	this.shape_54.setTransform(513.1,210.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(13,1,1).p("AtAM9QMGCKN78N");
	this.shape_55.setTransform(517.4,204.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(13,1,1).p("AtsN5QMoCUOx+P");
	this.shape_56.setTransform(521.7,198.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(13,1,1).p("AuXO1UANKACeAPlggS");
	this.shape_57.setTransform(526.1,192.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(13,1,1).p("AvDPwUANsACoAQbgiT");
	this.shape_58.setTransform(530.4,186.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(13,1,1).p("AwDRKUAN6ACwASNglQ");
	this.shape_59.setTransform(536.9,177.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(13,1,1).p("AxDSkUAOKAC3AT9goL");
	this.shape_60.setTransform(543.3,168.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(13,1,1).p("AyET/UAOZAC+AVvgrH");
	this.shape_61.setTransform(549.7,159.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(13,1,1).p("AzEVYUAOoADGAXhguC");
	this.shape_62.setTransform(556.1,150.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(13,1,1).p("A0EWyUAO4ADOAZRgw+");
	this.shape_63.setTransform(562.6,141.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(13,1,1).p("A1FYMUAPHADVAbEgz5");
	this.shape_64.setTransform(569,132.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(13,1,1).p("A2FZmUAPWADdAc1g22");
	this.shape_65.setTransform(575.4,123.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(13,1,1).p("A3FbBUAPlADjAemg5x");
	this.shape_66.setTransform(581.9,114);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(13,1,1).p("A4FcbUAP0ADrAgXg8t");
	this.shape_67.setTransform(588.3,104.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(13,1,1).p("A5Gd1UAQDADyAiJg/o");
	this.shape_68.setTransform(594.7,95.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(13,1,1).p("A6GfOUAQTAD7Aj6hCk");
	this.shape_69.setTransform(601.1,86.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgbGAgoUAQiAECAlrhFg");
	this.shape_70.setTransform(607.6,77.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgcGAiDUAQwAEJAndhIc");
	this.shape_71.setTransform(614,68.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgdGAjcUAQ/AERApOhLX");
	this.shape_72.setTransform(620.4,59.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgeHAk3UARPAEYArAhOT");
	this.shape_73.setTransform(626.8,50.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgfHAmQUAReAEgAsxhRP");
	this.shape_74.setTransform(633.3,41.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(13,1,1).p("EggHAnrUARtAEnAuihUL");
	this.shape_75.setTransform(639.7,32.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(13,1,1).p("EghIApEUAR9AEvAwUhXG");
	this.shape_76.setTransform(646.1,23.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgiIAqeUASMAE2AyFhaB");
	this.shape_77.setTransform(652.6,14.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgjIAr4UASbAE+Az2hc+");
	this.shape_78.setTransform(659,5.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgkJAtSUASqAFFA1phf5");
	this.shape_79.setTransform(665.4,-3.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(13,1,1).p("EglJAusUAS5AFNA3ahi1");
	this.shape_80.setTransform(671.8,-12.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgmJAwGUATJAFUA5Khlw");
	this.shape_81.setTransform(678.3,-22);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgnJAxgUATXAFcA68hot");
	this.shape_82.setTransform(684.7,-31.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgoKAy7UATnAFiA8uhro");
	this.shape_83.setTransform(691.1,-40.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgpKA0UUAT2AFrA+fhuk");
	this.shape_84.setTransform(697.5,-49.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgqKA1uUAUFAFyBAQhxf");
	this.shape_85.setTransform(704,-58.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgrKA3IUAUUAF6BCBh0b");
	this.shape_86.setTransform(710.4,-67.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgsKA4iUAUjAGBBDzh3X");
	this.shape_87.setTransform(716.8,-76.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgtLA58UAUzAGIBFkh6S");
	this.shape_88.setTransform(723.2,-85.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(13,1,1).p("EguLA7WUAVBAGQBHWh9O");
	this.shape_89.setTransform(729.7,-94.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgvMA8wUAVRAGXBJIiAK");
	this.shape_90.setTransform(736.1,-103.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgwMA+KUAVgAGeBK5iDF");
	this.shape_91.setTransform(742.5,-112.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgxMA/kUAVvAGmBMqiGB");
	this.shape_92.setTransform(749,-121.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgyMBA+UAV+AGtBObiI8");
	this.shape_93.setTransform(755.4,-130.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(13,1,1).p("EAzNhCrUhQMCL4gWNgG1");
	this.shape_94.setTransform(761.8,-139.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgzMBCfUAV5AFpBQgiK1");
	this.shape_95.setTransform(761.8,-139.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgzMBCmUAVkAEcBQ1iJw");
	this.shape_96.setTransform(761.8,-139.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgzMBCtUAVQADPBRJiIs");
	this.shape_97.setTransform(761.8,-139.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgzMBCzUAU8ACCBRdiHo");
	this.shape_98.setTransform(761.8,-139.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgzMBC4UAUnAA1BRyiGk");
	this.shape_99.setTransform(761.8,-138.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgzMBC8UAUTgAXBSGiFg");
	this.shape_100.setTransform(761.8,-138.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(13,1,1).p("EAzNhC/UhSbCEcgT+ABj");
	this.shape_101.setTransform(761.8,-137.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgzgBDKUAUlgB2BSciEd");
	this.shape_102.setTransform(759.9,-137);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgzzBDTUAVMgCJBSbiEc");
	this.shape_103.setTransform(758,-136.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg0GBDcUAVygCbBSbiEc");
	this.shape_104.setTransform(756,-135.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg0aBDmUAWZgCuBSciEd");
	this.shape_105.setTransform(754.1,-134.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg0tBDvUAXAgDBBSbiEc");
	this.shape_106.setTransform(752.2,-133.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1ABD4UAXmgDTBSbiEc");
	this.shape_107.setTransform(750.2,-132.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(13,1,1).p("EA1UhEAUhSbCEcgYMADl");
	this.shape_108.setTransform(748.3,-131.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1UBEEUAYKgELBSfiD8");
	this.shape_109.setTransform(748.3,-131.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1UBEHUAYHgExBSiiDc");
	this.shape_110.setTransform(748.2,-130.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1VBEJUAYFgFVBSmiC8");
	this.shape_111.setTransform(748.2,-130.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1VBEMUAYCgF8BSpiCb");
	this.shape_112.setTransform(748.2,-130.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1VBEOUAX/gGgBStiB7");
	this.shape_113.setTransform(748.1,-130.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1WBERUAX9gHGBSwiBb");
	this.shape_114.setTransform(748.1,-129.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1WBEUUAX6gHsBSziA7");
	this.shape_115.setTransform(748,-129.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1XBEWUAX4gIRBS3iAa");
	this.shape_116.setTransform(748,-129.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1XBEZUAX1gI3BS6h/6");
	this.shape_117.setTransform(748,-129.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1YBEbUAXygJbBS+h/a");
	this.shape_118.setTransform(747.9,-128.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1YBEeUAXwgKBBTBh+6");
	this.shape_119.setTransform(747.9,-128.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1YBEhUAXsgKnBTFh+a");
	this.shape_120.setTransform(747.8,-128.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1ZBEjUAXrgLLBTIh96");
	this.shape_121.setTransform(747.8,-128);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1ZBEmUAXngLyBTMh9Z");
	this.shape_122.setTransform(747.8,-127.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1ZBEoUAXlgMWBTPh85");
	this.shape_123.setTransform(747.7,-127.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1aBErUAXjgM8BTSh8Z");
	this.shape_124.setTransform(747.7,-127.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1aBEuUAXfgNiBTWh75");
	this.shape_125.setTransform(747.6,-127);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1bBEwUAXdgOHBTah7Y");
	this.shape_126.setTransform(747.6,-126.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1bBEzUAXagOtBTdh64");
	this.shape_127.setTransform(747.6,-126.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1cBE1UAXYgPRBTgh6Y");
	this.shape_128.setTransform(747.5,-126.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1cBE4UAXWgP3BTjh54");
	this.shape_129.setTransform(747.5,-126);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1cBE7UAXSgQdBTnh5Y");
	this.shape_130.setTransform(747.4,-125.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1dBE9UAXQgRBBTrh44");
	this.shape_131.setTransform(747.4,-125.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg1dBFAUAXNgRoBTuh4X");
	this.shape_132.setTransform(747.4,-125.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(13,1,1).p("EA1ehFBUhTxB33gXKASM");
	this.shape_133.setTransform(747.3,-124.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(13,1,1).p("Eg0EBCuUAW/gRfBRLhz8");
	this.shape_134.setTransform(739.2,-111.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgyrBAZUAWzgQwBOkhwB");
	this.shape_135.setTransform(731.1,-97.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgxSA+EUAWogQCBL9hsF");
	this.shape_136.setTransform(723,-83.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FFFFFF").ss(13,1,1).p("Egv5A7vUAWcgPTBJXhoK");
	this.shape_137.setTransform(714.9,-70);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgugA5bUAWRgOmBGwhkP");
	this.shape_138.setTransform(706.8,-56.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgtHA3GUAWGgN3BEIhgU");
	this.shape_139.setTransform(698.7,-42.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgruA0xUAV7gNJBBihcY");
	this.shape_140.setTransform(690.6,-28.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgqUAydUAVugMbA+7hYe");
	this.shape_141.setTransform(682.5,-15.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ego7AwIUAVigLtA8VhUi");
	this.shape_142.setTransform(674.4,-1.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgniAtzUAVXgK+A5uhQn");
	this.shape_143.setTransform(666.2,12.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgmJAreUAVMgKQA3HhMr");
	this.shape_144.setTransform(658.1,26);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgkwApKUAVBgJiA0fhIx");
	this.shape_145.setTransform(650,39.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FFFFFF").ss(13,1,1).p("EgjWAm1UAU0gIzAx5hE2");
	this.shape_146.setTransform(641.9,53.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FFFFFF").ss(13,1,1).p("Egh9AkgUAUpgIFAvShA6");
	this.shape_147.setTransform(633.8,67.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FFFFFF").ss(13,1,1).p("EggkAiLUAUdgHWAssg8/");
	this.shape_148.setTransform(625.7,80.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#FFFFFF").ss(13,1,1).p("A/Lf2UAUSgGoAqFg5D");
	this.shape_149.setTransform(617.6,94.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FFFFFF").ss(13,1,1).p("A9ydiUAUHgF6Aneg1J");
	this.shape_150.setTransform(609.5,108.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FFFFFF").ss(13,1,1).p("A8YbNUAT6gFMAk3gxN");
	this.shape_151.setTransform(601.4,122.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(13,1,1).p("A6/Y4UATvgEdAiQgtS");
	this.shape_152.setTransform(593.3,135.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FFFFFF").ss(13,1,1).p("A5mWjUATkgDuAfpgpY");
	this.shape_153.setTransform(585.2,149.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(13,1,1).p("A4NUPUATYgDBAdDglc");
	this.shape_154.setTransform(577.1,163.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#FFFFFF").ss(13,1,1).p("A20R6UATNgCTAacghg");
	this.shape_155.setTransform(568.9,177);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FFFFFF").ss(13,1,1).p("A1aPlQTBhkX19l");
	this.shape_156.setTransform(560.9,190.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#FFFFFF").ss(13,1,1).p("A0BNRQS1g3VO5q");
	this.shape_157.setTransform(552.7,204.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FFFFFF").ss(13,1,1).p("ASpq7QypVvyoAI");
	this.shape_158.setTransform(544.6,218.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ax3KVQR3gIR40h");
	this.shape_159.setTransform(539.7,222);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#FFFFFF").ss(13,1,1).p("AxHJuQRHgHRIzU");
	this.shape_160.setTransform(534.9,225.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFFFFF").ss(13,1,1).p("AwWJHQQWgGQWyH");
	this.shape_161.setTransform(530,229.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFFFFF").ss(13,1,1).p("AvlIgQPlgGPmw5");
	this.shape_162.setTransform(525.1,233.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#FFFFFF").ss(13,1,1).p("Au0H5QO0gGO1vr");
	this.shape_163.setTransform(520.2,237.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFFFFF").ss(13,1,1).p("AuDHSQODgFOEue");
	this.shape_164.setTransform(515.3,241.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FFFFFF").ss(13,1,1).p("AtSGrQNSgFNTtQ");
	this.shape_165.setTransform(510.4,245.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFFFFF").ss(13,1,1).p("AshGEQMhgEMisE");
	this.shape_166.setTransform(505.5,249.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FFFFFF").ss(13,1,1).p("ArwFeQLwgELxq2");
	this.shape_167.setTransform(500.6,253.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aq/E3QK/gELApp");
	this.shape_168.setTransform(495.7,257);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#FFFFFF").ss(13,1,1).p("AqOEQQKOgDKPoc");
	this.shape_169.setTransform(490.8,260.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FFFFFF").ss(13,1,1).p("ApdDpQJdgCJenP");
	this.shape_170.setTransform(486,264.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#FFFFFF").ss(13,1,1).p("AotDCQItgCIumB");
	this.shape_171.setTransform(481.1,268.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FFFFFF").ss(13,1,1).p("An7CbQH7gCH8kz");
	this.shape_172.setTransform(476.2,272.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#FFFFFF").ss(13,1,1).p("AnLB0QHLgBHMjm");
	this.shape_173.setTransform(471.3,276.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#FFFFFF").ss(13,1,1).p("AmaBNQGagBGbiY");
	this.shape_174.setTransform(466.4,280.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#FFFFFF").ss(13,1,1).p("AlpAmQFpAAFqhL");
	this.shape_175.setTransform(461.5,284.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#FFFFFF").ss(13,1,1).p("AE5AAIpxAA");
	this.shape_176.setTransform(456.6,288.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},67).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[]},68).wait(1));

	// Calque 4
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACOEWIkbor");
	this.shape_177.setTransform(467.4,316);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiEkVQCREOB4Ed");
	this.shape_178.setTransform(466.5,316);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah8kUQCXEEBiEl");
	this.shape_179.setTransform(465.6,315.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhzkUQCcD8BLEt");
	this.shape_180.setTransform(464.8,315.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhqkUQCgDzA1E2");
	this.shape_181.setTransform(463.9,315.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhhkUQClDqAeE+");
	this.shape_182.setTransform(463,315.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABaEUQgJlGiqjh");
	this.shape_183.setTransform(462.1,315.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhZkTQCqDhAJFG");
	this.shape_184.setTransform(462.1,315.8);
	this.shape_184._off = true;

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhtkLQDSDQAJFH");
	this.shape_185.setTransform(460.1,316.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiBkCQD6C+AJFH");
	this.shape_186.setTransform(458.1,317.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiVj5QEiCtAJFH");
	this.shape_187.setTransform(456.1,318.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#FFFFFF").ss(13,1,1).p("AipjxQFKCcAJFH");
	this.shape_188.setTransform(454.1,319.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai9joQFyCLAJFG");
	this.shape_189.setTransform(452.1,320.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjRjgQGaB6AJFH");
	this.shape_190.setTransform(450.1,321);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FFFFFF").ss(13,1,1).p("ADmDYQgIlHnDho");
	this.shape_191.setTransform(448.1,321.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjmjWQHFBmAIFH");
	this.shape_192.setTransform(448,322);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjojVQHJBkAIFG");
	this.shape_193.setTransform(447.8,322.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjqjTQHMBgAJFH");
	this.shape_194.setTransform(447.6,322.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjrjSQHPBeAIFH");
	this.shape_195.setTransform(447.5,322.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjtjRQHSBcAJFH");
	this.shape_196.setTransform(447.3,322.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjujPQHVBZAIFG");
	this.shape_197.setTransform(447.2,322.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjwjOQHZBWAIFH");
	this.shape_198.setTransform(447,322.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjyjMQHcBTAIFH");
	this.shape_199.setTransform(446.9,322.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjzjLQHfBRAIFG");
	this.shape_200.setTransform(446.7,323);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj0jKQHhBOAJFH");
	this.shape_201.setTransform(446.6,323.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj2jIQHlBLAIFG");
	this.shape_202.setTransform(446.4,323.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj4jHQHoBJAJFG");
	this.shape_203.setTransform(446.2,323.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj5jGQHrBGAIFH");
	this.shape_204.setTransform(446.1,323.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj7jFQHuBEAJFH");
	this.shape_205.setTransform(445.9,323.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj8jDQHxBBAIFG");
	this.shape_206.setTransform(445.8,323.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj+jCQH0A+AJFH");
	this.shape_207.setTransform(445.6,324);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj/jBQH3A8AIFH");
	this.shape_208.setTransform(445.5,324.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkBjAQH7A6AIFH");
	this.shape_209.setTransform(445.3,324.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkDi+QH+A2AJFH");
	this.shape_210.setTransform(445.1,324.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkEi9QIBA0AIFH");
	this.shape_211.setTransform(445,324.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkGi8QIEAyAJFG");
	this.shape_212.setTransform(444.8,324.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkHi6QIHAvAIFG");
	this.shape_213.setTransform(444.7,324.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkJi5QILAsAIFH");
	this.shape_214.setTransform(444.5,324.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkLi4QIOAqAIFH");
	this.shape_215.setTransform(444.4,325);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FFFFFF").ss(13,1,1).p("AENC3QgIlGoRgn");
	this.shape_216.setTransform(444.2,325.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkHi6QIBAxAOFE");
	this.shape_217.setTransform(445.1,324.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkCi+QHyA7ATFC");
	this.shape_218.setTransform(446.1,324.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj9jCQHiBEAZFB");
	this.shape_219.setTransform(447,324);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj4jFQHTBNAeE/");
	this.shape_220.setTransform(447.9,323.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjzjJQHDBWAkE9");
	this.shape_221.setTransform(448.8,323.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjtjNQGzBhAoE6");
	this.shape_222.setTransform(449.8,322.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjpjRQGkBqAuE5");
	this.shape_223.setTransform(450.7,322.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjkjVQGVB0AzE2");
	this.shape_224.setTransform(451.6,322.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjejYQGFB9A5E0");
	this.shape_225.setTransform(452.6,321.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjZjcQF1CHA+Ey");
	this.shape_226.setTransform(453.5,321.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjUjgQFmCQBDEx");
	this.shape_227.setTransform(454.4,321.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjPjkQFWCaBJEv");
	this.shape_228.setTransform(455.3,320.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjKjnQFHCjBOEs");
	this.shape_229.setTransform(456.3,320.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjFjrQE3CtBUEq");
	this.shape_230.setTransform(457.2,320);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FFFFFF").ss(13,1,1).p("AjAjvQEoC3BZEo");
	this.shape_231.setTransform(458.1,319.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai7jzQEZDABeEn");
	this.shape_232.setTransform(459,319.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ai2j2QEJDKBkEk");
	this.shape_233.setTransform(460,318.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aixj6QD6DTBpEi");
	this.shape_234.setTransform(460.9,318.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aisj+QDqDdBvEg");
	this.shape_235.setTransform(461.8,318.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#FFFFFF").ss(13,1,1).p("AinkCQDbDnB0Ee");
	this.shape_236.setTransform(462.8,317.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#FFFFFF").ss(13,1,1).p("AihkGQDLDwB5Ed");
	this.shape_237.setTransform(463.7,317.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FFFFFF").ss(13,1,1).p("AidkJQC8D5B+Ea");
	this.shape_238.setTransform(464.6,317.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiXkNQCsEDCDEY");
	this.shape_239.setTransform(465.5,316.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiTkRQCdENCKEW");
	this.shape_240.setTransform(466.5,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_177}]},67).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_177}]},1).to({state:[]},86).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_184).wait(75).to({_off:false},0).wait(49).to({_off:true},1).wait(1).to({_off:false},0).wait(5).to({_off:true},1).wait(144));

	// Calque 3
	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FFFFFF").ss(13,1,1).p("AibDtIE3nZ");
	this.shape_241.setTransform(440,320.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiQDsQCijrCAjs");
	this.shape_242.setTransform(441.1,320.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiGDrQCpjpBkjt");
	this.shape_243.setTransform(442.2,320.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah7DrQCwjnBHju");
	this.shape_244.setTransform(443.2,320.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhwDqQC2jlArju");
	this.shape_245.setTransform(444.3,320.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhlDqQC9jkAOjv");
	this.shape_246.setTransform(445.4,320.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhbDpQDEjhgOjw");
	this.shape_247.setTransform(446.5,320.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhbDpQDEjigOjv");
	this.shape_248.setTransform(446.5,320.2);
	this.shape_248._off = true;

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhPDpQC1jigYjv");
	this.shape_249.setTransform(447.8,320.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhFDpQCojigjjv");
	this.shape_250.setTransform(449.2,320.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag7DpQCbjigujv");
	this.shape_251.setTransform(450.6,320.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgyDpQCNjig5jv");
	this.shape_252.setTransform(452.2,320.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgpDpQB/jihDjv");
	this.shape_253.setTransform(453.7,320.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FFFFFF").ss(13,1,1).p("AghDpQByjihOjv");
	this.shape_254.setTransform(455.3,320.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgaDpQBkjhhXjw");
	this.shape_255.setTransform(457.1,320.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAxDiQAojxiSjS");
	this.shape_256.setTransform(453.5,316.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag5jhQCSDSgoDx");
	this.shape_257.setTransform(451.5,318.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhOjcQCvC6gUD/");
	this.shape_258.setTransform(447,320.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhljXQDLCjAAEM");
	this.shape_259.setTransform(444.7,321);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah9jRQDoCLATEY");
	this.shape_260.setTransform(442.5,321.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACXDNQgoklkFh0");
	this.shape_261.setTransform(440.3,321.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiVjKQEFB0AmEh");
	this.shape_262.setTransform(440.2,321.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiVjIQEFB0AmEd");
	this.shape_263.setTransform(440.2,321.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiVjGQEGB0AlEZ");
	this.shape_264.setTransform(440.2,321.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiUjEQEFB0AkEV");
	this.shape_265.setTransform(440.1,322);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiUjCQEFB0AkER");
	this.shape_266.setTransform(440.1,322.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiTjAQEFB0AiEN");
	this.shape_267.setTransform(440,322.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiTi+QEFB0AiEJ");
	this.shape_268.setTransform(440,322.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiTi8QEGB0AhEF");
	this.shape_269.setTransform(440,322.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiSi6QEFB0AgEB");
	this.shape_270.setTransform(439.9,323);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiSi4QEFB0AgD9");
	this.shape_271.setTransform(439.9,323.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiRi2QEFB0AeD5");
	this.shape_272.setTransform(439.8,323.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiRi0QEFB0AeD1");
	this.shape_273.setTransform(439.8,323.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiRiyQEFB0AeDx");
	this.shape_274.setTransform(439.8,323.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiQiwQEFB0AcDt");
	this.shape_275.setTransform(439.7,324);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiQiuQEFB0AcDp");
	this.shape_276.setTransform(439.7,324.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiPisQEFB0AaDl");
	this.shape_277.setTransform(439.6,324.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiPiqQEFB0AaDh");
	this.shape_278.setTransform(439.6,324.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiOioQEFB0AZDd");
	this.shape_279.setTransform(439.6,324.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiOimQEFB0AYDZ");
	this.shape_280.setTransform(439.5,325);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiOikQEFB0AYDV");
	this.shape_281.setTransform(439.5,325.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiNiiQEFB0AWDR");
	this.shape_282.setTransform(439.4,325.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiNigQEFB0AWDN");
	this.shape_283.setTransform(439.4,325.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiNieQEFB0AVDJ");
	this.shape_284.setTransform(439.4,325.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiMicQEFB0AUDF");
	this.shape_285.setTransform(439.3,326);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACNCbQgUjBkFh0");
	this.shape_286.setTransform(439.3,326.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiIimQD+CMATDB");
	this.shape_287.setTransform(439.7,325);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiEizQD2CmATDB");
	this.shape_288.setTransform(440,323.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#FFFFFF").ss(13,1,1).p("AiBjAQDvDAAUDB");
	this.shape_289.setTransform(440.4,322.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FFFFFF").ss(13,1,1).p("AB+DNQgUjDjnjW");
	this.shape_290.setTransform(440.8,321.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah5jPQDfDcAUDD");
	this.shape_291.setTransform(441.2,320.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah1jRQDYDhATDD");
	this.shape_292.setTransform(441.6,320.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhxjVQDQDnATDD");
	this.shape_293.setTransform(442,320.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhtjXQDIDsATDD");
	this.shape_294.setTransform(442.3,320.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhpjaQDADyATDD");
	this.shape_295.setTransform(442.7,319.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhmjdQC5D4ATDD");
	this.shape_296.setTransform(443.1,319.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhhjgQCwD+ATDD");
	this.shape_297.setTransform(443.5,319.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhejiQCpECAUDD");
	this.shape_298.setTransform(443.9,319);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhajlQChEIAUDD");
	this.shape_299.setTransform(444.3,318.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhWjoQCZEOAUDD");
	this.shape_300.setTransform(444.7,318.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhSjrQCSEUATDD");
	this.shape_301.setTransform(445.1,318.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhOjuQCKEZATDD");
	this.shape_302.setTransform(445.5,317.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhKjwQCCEeATDD");
	this.shape_303.setTransform(445.8,317.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhGjzQB6EkATDD");
	this.shape_304.setTransform(446.2,317.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FFFFFF").ss(13,1,1).p("AhDj2QBzEqATDD");
	this.shape_305.setTransform(446.6,317);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag+j5QBqEwATDD");
	this.shape_306.setTransform(447,316.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ag7j8QBjE2AUDD");
	this.shape_307.setTransform(447.4,316.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#FFFFFF").ss(13,1,1).p("AA4D/QgUjDhbk6");
	this.shape_308.setTransform(447.8,316.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgyETQCLjXg0lO");
	this.shape_309.setTransform(442.5,316.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#FFFFFF").ss(13,1,1).p("Ah2EiQDlj/AIlE");
	this.shape_310.setTransform(440.3,318.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_241}]},67).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256,p:{x:453.5,y:316.8}}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_256,p:{x:449.5,y:320.8}}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_241}]},1).to({state:[]},86).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_248).wait(75).to({_off:false},0).wait(49).to({_off:true},1).wait(151));

	// Calque 7
	this.instance_3 = new lib.okaokaplaydot();
	this.instance_3.setTransform(501.6,277.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({y:337.8},4).to({x:521.6,y:307.8},4).to({y:342.8},4).wait(148).to({x:524.1},2).to({x:521.6},3).to({x:524.8,y:340.3},3).to({x:521.6,y:342.8},3).to({y:337.8},6).to({y:317.8},6).to({rotation:-82.2,x:503.6,y:280},7).to({rotation:-97.2,x:509.5,y:274.5},3).to({rotation:-89.8,x:505.5,y:277.8},3).wait(24));

	// Calque 2
	this.instance_4 = new lib.okaokaplaydot();
	this.instance_4.setTransform(501.6,298);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56).to({y:348},4).to({y:328},4).to({y:343},4).wait(148).to({x:504.1},2).to({x:501.6},3).to({x:504.8,y:340.5},3).to({x:501.6,y:343},3).to({y:338},6).to({y:318},6).to({rotation:-82.2,x:501.1,y:299.8},7).to({rotation:-97.2,x:512.2,y:294.3},3).to({rotation:-89.8,x:505.7,y:297.8},3).wait(24));

	// Calque 1
	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("Ak3MjQgegSAAglQAAgPAIgPIEHmVQAEgHAAgJQAAgSgNgNQgLgMgSAAIisAAQgaAAgRgSQgSgSAAgZQAAgZASgTQARgSAaAAIIxAAQAZAAASASQASATAAAZQAAAZgSASQgSASgZAAIi6AAIDvHJQAIAPAAAQQAAAkgfARQgVANgZgGQgZgIgMgVIjHmCIkAGJQgLAUgaAJQgIACgIAAQgQAAgPgIgAiQgFQhSAAg5g6Qg6g7AAhSIAAmXQAAhTA6g6QA5g6BSAAIEgAAQBTAAA5A6QA6A6AABTIAAGXQAABSg6A7Qg5A6hTAAgAjBqTQgaAaAAAlIAAF5QAAAlAaAaQAbAbAkAAIEEAAQAlAAAbgbQAagaAAglIAAl5QAAglgagaQgbgbglAAIkEAAQgkAAgbAbg");
	this.shape_311.setTransform(452.9,268.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_311).to({_off:true},1).wait(275));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(868.7,-444.6,810.1,1094.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;