(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 75,
	height: 75,
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


(lib.poison = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AANC8QgIgIgEgKIg7iLQgKgXAJgVQAJgWAYgLIBdgqQAXgKAXAJQAXAJAKAXIA9CJQAEAJABAKQAAAEAAAEQAAAJgEAKQgKAXgWAKIhgAqQgXAKgXgJQgMgFgJgJQBuCQA1gnQAygngOiTAA5kYQgyBmgHBrIi4h4g");
	this.shape.setTransform(-1.5,-29.1,1,1,0,0,0,0,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-62.8,54.7,65.3);


(lib.bras = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AiTgYQA+ALBMANQBKALBTAO");
	this.shape.setTransform(0,-2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.3,-7.6,34.8,10.1);


(lib.hero_win_watter_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_55 = function() {
		if(typeof rg !== "undefined"){
			rg.run();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(1));

	// Calque 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBrQgygpgHgCQgrgMgrgZQgqgZAAgLQAAhXCABgQAtAiApArQAnApAAAKQAAAIgFAGQgGAGgJAAQgCAAgugpgAB3AsIAAgjQAAhKAwg8QATgYAOACQAPACAAAkQAAAHgfBbQggBZgDAAQgZAAgFgig");
	this.shape.setTransform(19.5,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADLCeQAAgZgBgHQgEgOgJgSQgHgPAAgHQAAgbAPgSQANgRATgBQAUgCANAPQAPASAAAiQAAAUgKAkQgPAzgXAAQgWAAgEgXgAiYCBQgMgYgCgVQAAhBA8AzQAVASAUAZQATAYAAAHQAAAPgCADQgFAOgXAAQgzAAgZgvgAlAAQQgFgMgBgHQAAgqAoAKQAoAJAAAeQAAAPgKAKQgNAMgZAAQgQAAgKgZgADthWQgEgKAEgLQAAgTAOgVQAOgVARgIQAtgWAABNQAAAVgFALQgLAWgiAAQgiAAgGgTg");
	this.shape_1.setTransform(10.8,5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhZEGQgFgkgCgLQgFgVgXgTQgWgRAAgQQAAgWAUgDQASgCAbANQBBAhAAAqQAAAVgLAeQgNAngTAAQgVAAgJgfgAETD4QgXgcAAgYIgKACQgMgJgFgTIgDgSQAAghAjgpQAjgqAABLQAAAwARAmQASAmAAARQAAAHgFAGQgGAIgJAAQgLAAgVgZgAjUBbIgHgFIgCgPQAMgWAPAGQANAFAAAMQAAAHgFAGQgGAIgJAAQgIAAgDgCgAmLgOQgCgHABgIQAAgfAeAGQAeAFAAAXQAAALgLAHQgMAIgRAAQgPAAgEgOgAFMjuQgCgJACgJQAAggAhgEQAggEAAAhQAAAQgJAMQgLAPgUAAQgWAAgDgSg");
	this.shape_2.setTransform(3.3,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACjEwQgGgJAAgMQAAg6A/gYQAZgKARAGQAUAGAAAWQAAAUgXAgQgbAogjAAQgYAAgKgNgAhgElIAAgRQAAgtA0gMQAWgGAOAHQAPAIAAAUQAAAKgHALQgIANgQAAQgQAAgFgLIgBgNQgCADACAcQADASgcAAQgVAAgEgOgAACDPQgCgUACgVQAAhiBJAvQAkAYAkAsQAAATgTAHQgSAGg/AGQAAAagUAAQgVAAgEgogAjZDJIgHgFIgCgPQAMgWAPAFQANAFAAAMQAAAHgFAHQgGAHgJAAQgIAAgDgBgAmqBqIgHgFIgDgPQAMgWAPAFQANAFAAANQAAAGgFAHQgGAHgJAAQgHAAgDgBgAgBAzIgIgFIgCgPQAMgWAOAFQAMAFAAANQAAAGgFAHQgGAHgJAAQgHAAgBgBgAGQkeQgDgFAAgGQAAgVAUACQAUACAAARQAAAHgFAHQgGAHgJAAQgNAAgEgKg");
	this.shape_3.setTransform(-4.7,-9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB4DyQgIgXgCgUQAAgVALgGQALgGAPAJQAmAWAAAuQAAAYgCAGQgEARgRAAQgbAAgPgwgAi9EbIgHgFIgCgPQAMgWAPAFQANAFAAANQAAAHgFAGQgGAIgJAAQgIAAgDgCgAnkD4IgHgFIgDgPQAMgWAPAGQANAFAAAMQAAAHgFAGQgGAIgJAAQgHAAgDgCgAA2BEIgHgEIgCgPQAOgXAOAGQAMAEAAANQAAAHgFAGQgGAIgJAAQgIAAgDgCgAHJkCQgCgFAAgGQAAgWAUACQAUACAAASQAAAHgFAGQgGAIgJAAQgNAAgFgKg");
	this.shape_4.setTransform(-18,-21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWBcQgHgNAAgNQAAgaAMgMQAMgKAPAFQAoANAAA4QABAZgZAAQgiAAgOgZgAhUhOIgHgEIgDgPQANgXAOAGQANAEABANQAAAHgGAGQgGAIgIAAQgIAAgDgCg");
	this.shape_5.setTransform(-14.5,-11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAKQgEgKgBgKQABgZAhAFQAjAFgBAZQABAggjAAQgTAAgKgWg");
	this.shape_6.setTransform(-15,-10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJASIgHgFIgDgNQANgWAMAFQANAFAAAMQAAAGgEAGQgHAHgIAAQgGAAgDgBg");
	this.shape_7.setTransform(-25,-14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABnBUQgHgugCgIIgWgqQgKgUgEgOQgYADgkgBQhbBHgKAAQgOAAgEgLQgOALgJAAQgTAAAAgWQAAgEAVgWQAbgdAdgXQBLg8A0ALQAOgMAsAdQBCAqAAAcQAAAdgVAAIgnglQAxBkAAAvQAAAJgEAGQgGAIgKAAQgVAAgKgrgAgmhGIAHgEIgEAAIgDAEg");
	this.shape_8.setTransform(15.5,12.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABtCtIgHgFIgCgPQAOgWANAFQAMAFAAAMQAAAHgEAHQgHAHgJAAQgHAAgDgBgABoBdIgHgFQgDgdgShJQgQhDgBgnIAAAAQgmgDg5gBQgHAKgfAPQgsAWgLAQQgKATgMAQQgZAegSAAQgHAAgDgBIgHgDIgCgPQApg1A1gvQAUgSAPgKIAAgCQAAgRAqgIQAngGAyAFQCEAOABA1QAAAHgGAGQgGAHgIAAQgUAAgCgGIgFgOQgJgHgdgFIACADQAmBOAABDQABATgBAOQgDAdgRAAQgIAAgDgBgAC4gZIgHgFIgDgPQAOgWAOAFQANAFAAANQgBAHgFAGQgFAHgKAAQgHAAgDgBg");
	this.shape_9.setTransform(16,-5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ADYEsIgHgFIgCgPQAOgWAOAFQAMAEAAANQAAAIgFAGQgGAHgJAAQgIAAgDgBgAlCDhIgHgFIgCgPQAMgWAPAFQANAEAAANQAAAIgFAGQgGAHgJAAQgIAAgDgBgADJB4IgHgFIgCgPQAOgWAOAFQAMAFAAANQAAAHgFAGQgGAHgJAAQgIAAgDgBgAEuBaIgHgFIgDgPQANgWAPAFQAMAFAAANQAAAHgFAGQgGAHgJAAQgHAAgDgBgAkBAjIgHgFIgCgPQAMgUAPAFQANADAAANQAAAHgFAGQgGAHgJAAQgIAAgDgBgACIAZIgHgFIgChJQAAhTAWgBIABAAIgDgJQgTg6gBgoIhHAAQhEAAhJBMIgwA0QgWAYgLAAQgNAAgFgKQgCgFAAgGQAAghA1grQATgQAXgOQgFgDgDgFQgCgFAAgGQAAgWBNgYQBUgcBDAUQAMACAFAHQAIAIAAAMIAAAAQAHAOAKAXQArBjAAAxQABAOgBANQgEAYgQAAQgIAAgDgBIgHgFIgCgNQABASgBAPQgEAngVAAQgIAAgDgBg");
	this.shape_10.setTransform(10.8,-11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZFNIglhrIADARQAIApAAAIQgDAWgRAAQgSAAgFgPQgCgGAAgTQgkgOgEgpQADgvgDgVIgBgEIgLALQgGAGgMAAQgRAAgIglQgEgRgBgQQAAghAGgFQAKgIAYA1QArgEAXALQgBgVAAhAIAAhHQABgeATgCQAUgCAAAjIgCBIQgBAsADAcQAGA+AuB3IAuB0QAAAJgIAGQgGAFgGAAQgWAAgehRgACrCYIgHgFIgCgPQAOgWAOAFQAMAFAAANQAAAHgFAGQgGAIgJAAQgIAAgDgCgAFqAlIgHgEIgDgPQANgVAPAEQAMAEAAANQAAAHgFAGQgGAIgJAAQgHAAgDgCgAguACQgCgIACgIQAAgkAUgEQAUgEAAAsQACANgCAHQgDASgRAAQgRAAgDgWgAl+AWIgHgEIgCgPQAMgVAPAGQANAEAAALQAAAHgFAGQgGAIgJAAQgIAAgDgCgABCgLIgHgEIgCgPQAMgXAPAGQANAEAAANQAAAHgFAGQgGAIgJAAQgIAAgDgCgADbgyIgCABQgEAAgDgDQgZgJgngpIgYgcIAAADIAAAgQgEAagQAAQgRAAgDgdQgCgOACgQQAAg6AUgCQAGAAAEAFIARgcQAcgsACgNQALg+ARAaIAAABQABgnACgTQAJhUAcA1IAAElIAGANIABADQAIAIAAAHQAAAGgGAGQgGAHgIAAIgDgBgAC7h4IACABIgBgCIgBABgAjniuQgCgNACgNQAAgyAUgCQAUgBAAA1IAAAcQgEAXgQAAQgRAAgDgZgAkaicIgHgEIgCgPQAMgXAPAGQANAEAAANQAAAHgFAGQgGAIgJAAQgIAAgDgCg");
	this.shape_11.setTransform(10.8,-5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjeF5IgHgFIgCgPQAOgWAOAFQAMAEAAANQAAAHgFAHQgGAHgJAAQgIAAgDgBgACcFqIgHgFIgCgPQAOgWAOAFQAMAEAAANQAAAHgFAHQgGAHgJAAQgIAAgDgBgAAVEVIgHgFIgCgPQAMgWAPAFQANAFAAAMQAAAHgFAHQgGAHgJAAQgIAAgDgBgAGND3IgHgFIgDgPQANgWAPAFQAMAFAAAMQAAAHgFAHQgGAHgJAAQgHAAgDgBgAjoD3IgHgFQgFgggBgrIgChPQgKAKgMAAQgTAAgDgTQgCgKACgLQAAgvATguQAVgzAFBwIAAACQAogIAAAlQACgBADgIQABgFAOAAQAPAAAEAOIABAPQAAAVgQBFQgTBWgUAAQgIAAgDgBgAkzDeIgHgFIgCgPQAMgWAPAFQANAFAAAMQAAAIgFAGQgGAHgJAAQgIAAgDgBgACcA0IgHgFIgCgPQAOgWAOAFQAMAFAAANQAAAGgFAHQgGAHgJAAQgIAAgDgBgAmhAMIgHgFIgCgNQAMgWAPAFQANAFAAANQAAAFgFAGQgGAHgJAAQgIAAgDgBgACXhbIgHgFQgCgPAAggQAAguALgnQAGg3Aeg8QAQgfAKgDQAMgEAAAhQAAAXgQBMQgPBJgPARQgPBFgEAAQgIAAgDgBgAlQjSQgUgNAAgIQAAgaAoAKQAoAKAAAVQAAALgJAGQgGAEgIAAQgQAAgVgPgAmAksQgCgFAAgGQAAgVAUACQAUACAAARQAAAHgFAHQgGAHgJAAQgNAAgFgKg");
	this.shape_12.setTransform(12.8,-20.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhyIEIgHgFIgDgPQANgWAOAFQAOAFAAAMQgBAIgFAGQgFAHgKAAQgHAAgDgBgABUHNIgHgFIgDgPQAMgWAPAFQANAFABAMQAAAHgGAHQgGAHgIAAQgIAAgDgBgAh8FXQgBgKABgLQABhjAshoQATgqANgIQAOgHgBAoQABAKgjB9QgiB9gCAAQgRAAgDgTgAF7FkIgHgFIgDgPQAOgWAOAFQANAFAAANQgBAHgFAGQgFAHgKAAQgHAAgDgBgAEdD3QgCgQACgQIACgkQACggAAgPQAEgzATAWQARAVABAUQgGCFgTAAQgRAAgDgegAl2DOIgHgFIgDgPQANgWAOAFQANAFABANQAAAHgGAGQgGAHgIAAQgIAAgDgBgAFTgWIgHgFIgBgEQgCgDABgIQgBgaAhgtQAggtABAyQgBAKgRAlQgTAogIAAQgIAAgDgBgAmPneIgHgFIgCgPQAMgWAPAFQANAFgBANQABAHgGAGQgGAHgIAAQgIAAgDgBg");
	this.shape_13.setTransform(-8,-48.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABgF9IgHgFIgCgPQAMgWAPAFQANAFAAANQAAAHgFAGQgGAIgJAAQgIAAgDgCgAHSFfIgHgFIgCgPQANgWAPAFQAMAFAAANQAAAHgFAGQgGAIgJAAQgHAAgEgCgAiICjQgCgUACgSQAAhUAUAAQAUAAAABUQACAXgCASQgDAlgRAAQgRAAgDgogADtChQgCgJACgKQAAgmAUACQAUABAAAjQAAAQgBAFQgEAPgPAAQgRAAgDgRgAnnAzIgHgEIgCgPQAKgXAQAGQAOAFAAAMQAAAHgFAGQgGAIgJAAQgIAAgDgCgAidhrIgHgEIgCgPQAMgYAPAGQANAFAAANQAAAHgFAGQgGAIgJAAQgIAAgDgCgAERktQgBgDAAgKQAAgWAeggQAeggAAAsQAAAJgSAdQgSAcgEAAQgPAAgEgLg");
	this.shape_14.setTransform(-7.2,-40.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjuEWQgCgUACgWQAAhZAUAAQAUAAAABYIAAAuQgEAmgQAAQgRAAgDgpgACQEgIgHgFIgCgPQAMgWAPAFQANAFAAAMQAAAIgFAGQgGAHgJAAQgIAAgDgBgAC0jCQgUgHAAgOQAAgJAGgFQANgJApAEQAUAEAAAPQAAAIgGAFQgFAGgJACgAjBksQAAgRAUgBQAUgBAAATQAAAIgFAGQgGAHgJAAQgUAAAAgVg");
	this.shape_15.setTransform(4,-50.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXD/QgCgfACgdQAAgfATgiQATgigBBGQAAAdAIApQAHApAAASQAAALgHAGQgGAFgGAAQgZAAgIg+gAgakeQgDgFAAgGQAAgVAVACQARACABARQAAAHgGAHQgEAHgIAAQgNAAgFgKg");
	this.shape_16.setTransform(-16.5,-17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJASIgHgFIgDgNQANgWAMAFQANAFABAMQAAAGgGAGQgGAHgIAAQgGAAgDgBg");
	this.shape_17.setTransform(-17.5,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_8}]},14).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).wait(10));

	// Calque 5
	this.instance = new lib.tete();
	this.instance.setTransform(16.2,-47.6,1,1,6,0,0,8.8,-12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AhkhmIBfgqQAVgKAXAJQAXAJAKAXIA9CJQAKAWgJAYQgKAXgWAKIhgAqQgVAKgXgJQgXgKgKgWIg9iJQgKgXAJgXQAJgWAYgLg");
	this.shape_18.setTransform(15.3,12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AAACQIhhglQgXgJgKgXQgKgWAJgYIA4iLQAIgWAXgLQAYgKAVAJIBhAmQAXAJAKAXQAKAYgJAWIg3CLQgJAYgXAJQgWAKgXgKg");
	this.shape_19.setTransform(8.6,31.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("AAACRIhhgmQgXgJgKgWQgKgXAJgYIA4iLQAIgWAXgLQAYgKAVAJIBhAmQAXAJAKAXQAKAXgJAXIg3CLQgJAYgXAJQgWAKgXgJg");
	this.shape_20.setTransform(8.6,6.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AAACRIhhgmQgXgJgKgWQgKgXAJgYIA4iLQAIgWAXgLQAYgKAVAKIBhAlQAXAJAKAXQAKAYgJAWIg3CLQgJAYgXAJQgWAKgXgJg");
	this.shape_21.setTransform(8.6,-13.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AglCMIhUg+QgUgOgEgZQgDgYAOgTIBah5QAOgUAZgFQAYgDATAOIBVA+QAUAPADAZQAEAZgPASIhZB6QgPAUgZADQgWADgVgOg");
	this.shape_22.setTransform(10,-27.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AhHB9IhChRQgPgUABgYQAEgXATgQIB3heQAQgQAaACQAZAEAPATIBCBRQAPAUgCAXQgEAZgTAPIh2BfQgRAQgZgEQgYgDgQgTg");
	this.shape_23.setTransform(11,-46);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("AhlBlIgrhfQgJgVAHgXQAKgWAXgLICJg9QAWgKAYAJQAXAKAKAWIArBgQAJAVgJAXQgKAXgVAKIiJA9QgXALgXgKQgXgJgKgYg");
	this.shape_24.setTransform(12.6,-64.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("Ah8BHIgRhlQgDgYANgVQAPgTAagFICTgWQAYgEAVAOQAUAQAEAYIAQBlQAEAZgPAUQgQAUgXAEIiUAXQgZAEgUgPQgTgPgEgZg");
	this.shape_25.setTransform(13.8,-87.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AiQAAIAlhgQAKgXAWgMQAXgJAYAJICKA4QAXAIALAXQAJAYgJAUIglBiQgJAXgXAKQgYAJgWgIIiLg3QgYgJgJgXQgJgWAIgXg");
	this.shape_26.setTransform(14.9,-95.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AiLgkIA+hUQAPgUAYgFQAYgDATAOIB5BaQAUAOAFAZQADAYgPATIg9BVQgOAUgZAEQgZACgSgOIh6hZQgVgPgDgZQgDgVAOgVg");
	this.shape_27.setTransform(14.9,-99.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AhyhWIBZg3QAVgNAWAEQAYAGAOAWIBOB+QAOAVgFAZQgHAYgVANIhYA4QgVANgWgGQgZgHgNgUIhQh/QgNgVAGgYQAGgXAVgOg");
	this.shape_28.setTransform(12.2,-101.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AhXhxIBhgfQAZgGAVAJQAWANAJAYIApCPQAIAXgLAXQgNAWgXAGIhiAgQgYAHgWgMQgVgOgIgWIgsiQQgHgXAMgWQAMgVAYgHg");
	this.shape_29.setTransform(11.3,-79.8);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("Ag2iEIBmgEQAZAAASAPQASARACAaIADCUQABAZgQATQgTASgYAAIhnAFQgYABgSgSQgRgTgCgXIgFiWQgBgZASgRQAQgSAaAAg");
	this.shape_30.setTransform(6.9,-45.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_18,p:{y:12.1}}]},1).to({state:[{t:this.shape_18,p:{y:24.6}}]},1).to({state:[{t:this.shape_18,p:{y:43.1}}]},1).to({state:[]},1).to({state:[{t:this.shape_19}]},18).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28,p:{y:-101.5}}]},2).to({state:[{t:this.shape_28,p:{y:-93.5}}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:41.7,x:24.1,y:-51.9},0).wait(1).to({rotation:56.7,x:22.8},0).wait(1).to({regX:8.7,rotation:101.7,x:16.7,y:-52},0).wait(3).to({y:-55.5},0).wait(1).to({y:-62},0).wait(1).to({rotation:107.4,x:15.5,y:-61.7},0).wait(1).to({regY:-12.9,rotation:116.7,x:13.6,y:-61.5},0).wait(1).to({regY:-12.8,rotation:125.7,x:11.7,y:-54},0).wait(1).to({rotation:131.7,x:10.3,y:-44},0).wait(1).to({regY:-12.9,rotation:138.2,x:9.2,y:-29},0).wait(1).to({regY:-12.8,rotation:141.2,x:8.6,y:-14.2},0).wait(1).to({rotation:146.9,x:7.6,y:0.5},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(48).to({_off:false},0).wait(1).to({y:-71.8},0).wait(1).to({y:-64.8},0).wait(1).to({y:-57.3},0).wait(1).to({y:-49.8},0).to({_off:true},2).wait(2));

	// Calque 4
	this.instance_1 = new lib.bras();
	this.instance_1.setTransform(2.1,-27.3,1,1,8.3,0,0,0.1,-2.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AAjiXQhaB3AbBQQAaBRAMAX");
	this.shape_31.setTransform(-3.6,-62.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("ABghsQitAfgSC6");
	this.shape_32.setTransform(2.6,-76.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("ACKhOQiCgVg8A8Qg+A5gXBC");
	this.shape_33.setTransform(6.8,-83.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AC8A9Qi8jFi7B9");
	this.shape_34.setTransform(19.9,-85.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("ABmB8QAAiDhEgzQhDg0hEgM");
	this.shape_35.setTransform(32.1,-78.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AAXCMQBdhshqhoQgcgdgvgm");
	this.shape_36.setTransform(39,-74.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AhYCYQC+AUgOh4QgPh2gbhY");
	this.shape_37.setTransform(35.6,-72.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AhgB3QC/A8AChjQABhhg0h8");
	this.shape_38.setTransform(34.7,-67.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("ABXDEQCrA7AXg+QAWg+hhh4AkcgRICajP");
	this.shape_39.setTransform(11.9,-73.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("ABDDHQCfBWAgg6QAgg6hNiFAkLhFIC5i0");
	this.shape_40.setTransform(10.8,-65.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("AAzDGQCWBlAmg1QAlg2g+iNAj8hnIDLig");
	this.shape_41.setTransform(10.1,-54.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("AAhDCQCJB1AsgwQArgyguiTAjqiMIDbiI");
	this.shape_42.setTransform(9.7,-39);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(5,1).p("AAYC/QCDB8AuguQAugvgniVAjhicIDhh8");
	this.shape_43.setTransform(9.5,-23.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(5,1).p("AAGC4QB2CIAygpQAzgrgYiYAjQi7IDshl");
	this.shape_44.setTransform(9.4,-7.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(5,1).p("AgCC0QBuCOA1gnQA0gogRiaAjHjJIDxhZ");
	this.shape_45.setTransform(9.4,7.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(5,1).p("AC0htQAWizhCgKQhBgJhfB4AAwErIjohs");
	this.shape_46.setTransform(4.5,37);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(5,1).p("ADGhQQBDing9gaQg8gah9BbAgiEYIjGil");
	this.shape_47.setTransform(5,-20.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(5,1).p("ADFgqQBsiQg0gpQgzgpiQA4Ah4D1IiVjT");
	this.shape_48.setTransform(5.9,-39.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(5,1).p("AC0ADQCOhtgog1Qgng1iaARAjKDIIhYjw");
	this.shape_49.setTransform(8.1,-58.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(5,1).p("ACVA+QCmhFgYg9QgZg9iYgYAkOCZIgXj+");
	this.shape_50.setTransform(10.2,-84.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(5,1).p("ABuCzQCzAWAKhCQAIhBh3heAkrAwIBtjo");
	this.shape_51.setTransform(8.9,-99.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(5,1).p("ABFD8QCMg3Agg1QAgg1AUhpAkkhFIBHi3");
	this.shape_52.setTransform(9.3,-100.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(5,1).p("AiPBSQCghJAsgeQAsghAngb");
	this.shape_53.setTransform(21.5,-82.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(5,1).p("AifAqQCtgdAzgSQAzgUAsgQ");
	this.shape_54.setTransform(15.4,-59.3);
	this.shape_54._off = true;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(5,1).p("AilgFQCvAPA2gGQA2gEAwgE");
	this.shape_55.setTransform(5.6,-24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45,p:{y:7.5}}]},1).to({state:[{t:this.shape_45,p:{y:20}}]},1).to({state:[{t:this.shape_45,p:{y:38.5}}]},1).to({state:[]},1).to({state:[{t:this.shape_46,p:{y:37}}]},18).to({state:[{t:this.shape_46,p:{y:12}}]},1).to({state:[{t:this.shape_46,p:{y:-8}}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53,p:{y:-82.8}}]},2).to({state:[{t:this.shape_53,p:{y:-74.8}}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(48).to({_off:false},0).wait(1).to({y:-51.3},0).wait(1).to({y:-44.3},0).wait(1).to({y:-36.8},0).wait(1).to({y:-29.3},0).to({_off:true},2).wait(2));

	// Calque 3
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(5,1).p("AgohfQCFAfhWCg");
	this.shape_56.setTransform(3.2,-10.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(5,1).p("AA/hfQAgBviiBQ");
	this.shape_57.setTransform(-6.3,-30.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(5,1).p("AB8hEQg4CUi/gM");
	this.shape_58.setTransform(-10.2,-43.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(5,1).p("AB5hPQhCDGivgx");
	this.shape_59.setTransform(-6.8,-55.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(5,1).p("AB/gmQhwB7iNhK");
	this.shape_60.setTransform(-7.5,-59.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(5,1).p("ACNgsQhxCOiohT");
	this.shape_61.setTransform(-8.8,-62.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(5,1).p("AB0gaIjnA1");
	this.shape_62.setTransform(-6.3,-70.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(5,1).p("AB2gPIjrAf");
	this.shape_63.setTransform(-6.5,-72.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(5,1).p("ABuAAIjbAA");
	this.shape_64.setTransform(-5.6,-75.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(5,1).p("ABtARIjZgh");
	this.shape_65.setTransform(-5.1,-70.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(5,1).p("ABqAcIjTg3");
	this.shape_66.setTransform(-4.5,-62.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(5,1).p("ABmAoIjLhP");
	this.shape_67.setTransform(-3.6,-49.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(5,1).p("ABkAtIjHhZ");
	this.shape_68.setTransform(-3.1,-34.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(5,1).p("ABfA3Ii9ht");
	this.shape_69.setTransform(-1.9,-21.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(5,1).p("ABcA8Ii3h3");
	this.shape_70.setTransform(-1.3,-6.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(5,1).p("AgWhrIAtDW");
	this.shape_71.setTransform(7.1,56.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(5,1).p("AgWhrIAtDX");
	this.shape_72.setTransform(7.1,31.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(5,1).p("AgWhqIAtDW");
	this.shape_73.setTransform(7.1,11.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(5,1).p("AAFhtIgJDb");
	this.shape_74.setTransform(2,-3.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(5,1).p("AAihoIhCDQ");
	this.shape_75.setTransform(-2.9,-25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(5,1).p("AA8hbIh3C3");
	this.shape_76.setTransform(-6.2,-47.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(5,1).p("ABShJIijCS");
	this.shape_77.setTransform(-8.7,-76.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(5,1).p("ABsgWIjXAs");
	this.shape_78.setTransform(-10.3,-96.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(5,1).p("ABuAFIjbgJ");
	this.shape_79.setTransform(-8.9,-107.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(5,1).p("ABtgLQiHg8hSBp");
	this.shape_80.setTransform(-14.4,-117);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(5,1).p("AAhiRQhHBcAGDH");
	this.shape_81.setTransform(-22.6,-91.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(5,1).p("AgUiNQgYCGBGCV");
	this.shape_82.setTransform(-23.1,-64.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(5,1).p("AhbhyQAlCSCSBS");
	this.shape_83.setTransform(-14.7,-41);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(5,1).p("AhugVQBZBXCEhV");
	this.shape_84.setTransform(-2.5,-26.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(5,1).p("AhpBEQB3AdBcip");
	this.shape_85.setTransform(6.5,-19.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(5,1).p("AhCBlQBfgdAmis");
	this.shape_86.setTransform(14.1,-11.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(5,1).p("AhdBWQCAgRA7ia");
	this.shape_87.setTransform(-0.6,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56}]}).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70,p:{y:-6.7}}]},1).to({state:[{t:this.shape_70,p:{y:5.8}}]},1).to({state:[{t:this.shape_70,p:{y:24.3}}]},1).to({state:[]},1).to({state:[{t:this.shape_71}]},18).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},2).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},2).wait(2));

	// Calque 2
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(5,1).p("AhlCLQCQiyA7hj");
	this.shape_88.setTransform(-11.1,-5.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(5,1).p("AiBgTQBhBGCig0");
	this.shape_89.setTransform(-13,-39.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(5,1).p("AiNhFQBlB+C2AO");
	this.shape_90.setTransform(-12,-57.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(5,1).p("AiDg7QA/B7DIgF");
	this.shape_91.setTransform(-8,-69.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(5,1).p("AhdheQAPCSCsAr");
	this.shape_92.setTransform(-4.1,-73);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(5,1).p("AhehgQAaCOCjAz");
	this.shape_93.setTransform(-4.3,-76.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(5,1).p("Ag5haQAqBoBKBN");
	this.shape_94.setTransform(-0.6,-82.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(5,1).p("AgwhfQAfBrBCBU");
	this.shape_95.setTransform(0.3,-83.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(5,1).p("AgghmQAOBvAzBe");
	this.shape_96.setTransform(2.1,-85.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(5,1).p("AgPhqQgDBxAjBk");
	this.shape_97.setTransform(4.1,-79.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(5,1).p("AgBhrQgQBvAZBo");
	this.shape_98.setTransform(5.3,-70.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(5,1).p("AAJhrQgaBsAOBr");
	this.shape_99.setTransform(7.1,-55.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(5,1).p("AANhqQggBqAJBr");
	this.shape_100.setTransform(8.1,-41);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(5,1).p("AAXhpQgrBogCBq");
	this.shape_101.setTransform(10,-26.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(5,1).p("AAchnQgvBmgIBp");
	this.shape_102.setTransform(10.8,-11.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(5,1).p("AhdA1QBpglBShE");
	this.shape_103.setTransform(-4.7,50.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(5,1).p("AhoAbQBvgIBigt");
	this.shape_104.setTransform(-7.9,-12.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(5,1).p("AhrgEQBtATBqgS");
	this.shape_105.setTransform(-10.3,-35.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(5,1).p("AhngbQBmAvBpAI");
	this.shape_106.setTransform(-10.6,-59.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(5,1).p("Ahcg1QBWBIBjAj");
	this.shape_107.setTransform(-9.9,-89.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(5,1).p("Ag0hcQAlBoBEBR");
	this.shape_108.setTransform(-4.8,-108.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(5,1).p("AgahnQAIBvAtBg");
	this.shape_109.setTransform(-0.7,-117);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(5,1).p("AB1gRQiKhChfB8");
	this.shape_110.setTransform(18.8,-129.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(5,1).p("ABnBfQhUiYh5gl");
	this.shape_111.setTransform(34.7,-110.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(5,1).p("AAgB6QgIiOg3hl");
	this.shape_112.setTransform(48.6,-76.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(5,1).p("AhZBNQC7AggJi9");
	this.shape_113.setTransform(43.8,-45.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(5,1).p("AiGAYQDiA+AriB");
	this.shape_114.setTransform(38.8,-36.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(5,1).p("AhcgNQBgAdBZgC");
	this.shape_115.setTransform(34.6,-25.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(5,1).p("AhqhKQBzAdBiB4");
	this.shape_116.setTransform(31.5,-14.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(5,1).p("Ag9hwQCNAygVCv");
	this.shape_117.setTransform(15,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88}]}).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102,p:{y:-11.2}}]},1).to({state:[{t:this.shape_102,p:{y:1.3}}]},1).to({state:[{t:this.shape_102,p:{y:19.8}}]},1).to({state:[]},1).to({state:[{t:this.shape_103,p:{y:50.8}}]},18).to({state:[{t:this.shape_103,p:{y:25.8}}]},1).to({state:[{t:this.shape_103,p:{y:5.8}}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},2).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},2).wait(2));

	// Calque 8
	this.instance_2 = new lib.poison();
	this.instance_2.setTransform(15.9,40.8,1,1,0,0,0,3.2,-29.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({rotation:-135,guide:{path:[15.9,41,12.7,129.6,6.6,41.2]}},17).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-67.9,64.9,78.6);


// stage content:



(lib.hero_win_watter = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.hero_win_watter_1();
	this.instance.setTransform(43.7,38.7,1,1,0,0,0,8.6,-27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(48.7,36,64.9,78.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;