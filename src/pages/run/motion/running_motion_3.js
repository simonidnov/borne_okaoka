(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 400,
	fps: 40,
	color: "#E41694",
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


(lib.monsieurcirclehead = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AFKAAQAACIhhBhQhhBhiIAAQiHAAhhhhQhhhhAAiIQAAiHBhhhQBhhhCHAAQCIAABhBhQBhBhAACHg");
	this.shape.setTransform(0.8,-2.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.7,-42.2,79,79);


(lib.monsieurcarrehead = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfkfII/AAIAAI/Io/AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.3,-35.3,70.6,70.6);


(lib.head_pink = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("ADIGXImAAHQg9ABgtgrQgsgqgBg+IgKoLQgBg8ArgtQArgsA9gBIGAgIQA9AAAtAqQAsArABA9IAKILQABA9grAsQgqAtg+ABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41694").s().p("AkhF0QgtgqgBg+IgJoLQgCg8ArgtQArgsA+gBIF/gIQA9AAAsAqQAtArABA9IAJILQACA9grAsQgrAtg9ABImAAHIgEAAQg6AAgrgqg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-54.5,120.2,105.2);


(lib.head = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16,1).p("ADxGAIl9AvQg8AHgxgmQgxglgHg9IhAoHQgIg9AmgxQAngwA8gHIF9gwQA8gHAxAmQAxAmAHA9IBAIGQAIA9gmAxQgmAwg9AIg");
	this.shape.setTransform(0,0,1,1,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.9,-53.2,103.1,106.5);


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
	this.instance = new lib.head_pink();
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
p.nominalBounds = new cjs.Rectangle(-100.4,-100.7,170.6,199);


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


(lib.monsieurcarre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// okaokaplayhead
	this.instance = new lib.monsieurcarrehead();
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
p.nominalBounds = new cjs.Rectangle(-50.3,-79,92.1,162);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9,x:-6.7,y:-3.7},2).to({regX:-0.1,rotation:-8.7,x:-10.7,y:-4.7},4).to({rotation:-5.2,y:-3.7},3).to({regX:0,rotation:0,x:-1.7,y:0.3},2).to({rotation:6.7,x:1.8,y:-6.2},3).to({rotation:8.7,y:-10.7},4).to({rotation:7.9,x:2.8,y:-6.2},3).to({rotation:0,x:-1.7,y:5.3},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-94.4,104.4,193.5);


// stage content:



(lib.running_motion_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:161});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_122 = function() {
		window['navigation'].intro_motion_stopped();
	}
	this.frame_161 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(122).call(this.frame_122).wait(39).call(this.frame_161).wait(98));

	// Calque 2
	this.instance = new lib.okaokaplayhead();
	this.instance.setTransform(452.8,211.9,1,1,0,0,0,0,33.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({_off:true},1).wait(233));

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEWAAIorAA");
	this.shape.setTransform(453.1,238.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25).to({_off:false},0).to({_off:true},1).wait(233));

	// Calque 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACOEWIkbor");
	this.shape_1.setTransform(467.4,266);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25).to({_off:false},0).to({_off:true},1).wait(233));

	// Calque 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(13,1,1).p("AibDtIE3nZ");
	this.shape_2.setTransform(440,270.6);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(25).to({_off:false},0).to({_off:true},1).wait(233));

	// Calque 6
	this.instance_1 = new lib.copiewalking_05("synched",0);
	this.instance_1.setTransform(443.9,188,0.81,0.81,0,0,0,-10.5,-29.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({x:1643.9},77).to({_off:true},1).wait(155));

	// Calque 8
	this.instance_2 = new lib.okaokaplaydot();
	this.instance_2.setTransform(501.6,227);

	this.instance_3 = new lib.okaokaplaydot();
	this.instance_3.setTransform(501.6,248);

	this.instance_4 = new lib.monsieurcarre("synched",34);
	this.instance_4.setTransform(-1242.5,232.1,0.922,0.922,0,0,180,-3.3,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},26).to({state:[{t:this.instance_4}]},35).to({state:[{t:this.instance_4}]},113).to({state:[]},1).to({state:[]},83).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(61).to({_off:false},0).to({x:1241.2},113).to({_off:true},1).wait(84));

	// Calque 9
	this.instance_5 = new lib.monsieurcircle_walk("synched",0);
	this.instance_5.setTransform(-1113,239.8,0.887,0.887,0,0,180,-3.2,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61).to({_off:false},0).to({x:1370.7},113).to({_off:true},1).wait(84));

	// Calque 10
	this.instance_6 = new lib.walking_07();
	this.instance_6.setTransform(-974.8,197.9,0.807,0.807,0,0,0,-10.6,-29.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(61).to({_off:false},0).to({x:1508.8},113).to({_off:true},1).wait(84));

	// Calque 11
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ak3MjQgegSAAglQAAgPAIgPIEHmVQAEgHAAgJQAAgSgNgNQgLgMgSAAIisAAQgaAAgRgSQgSgSAAgZQAAgZASgTQARgSAaAAIIxAAQAZAAASASQASATAAAZQAAAZgSASQgSASgZAAIi6AAIDvHJQAIAPAAAQQAAAkgfARQgVANgZgGQgZgIgMgVIjHmCIkAGJQgLAUgaAJQgIACgIAAQgQAAgPgIgAiQgFQhSAAg5g6Qg6g7AAhSIAAmXQAAhTA6g6QA5g6BSAAIEgAAQBTAAA5A6QA6A6AABTIAAGXQAABSg6A7Qg5A6hTAAgAjBqTQgaAaAAAlIAAF5QAAAlAaAaQAbAbAkAAIEEAAQAlAAAbgbQAagaAAglIAAl5QAAglgagaQgbgbglAAIkEAAQgkAAgbAbg");
	this.shape_3.setTransform(452.9,218.9);

	this.instance_7 = new lib.walking_06();
	this.instance_7.setTransform(-857.3,214,0.625,0.625,0,0,0,-10.4,-29.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[]},25).to({state:[{t:this.instance_7}]},36).to({state:[{t:this.instance_7}]},113).to({state:[]},84).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(61).to({_off:false},0).to({x:1626.4},113).to({_off:true},84).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(868.7,337.8,89.1,162.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;