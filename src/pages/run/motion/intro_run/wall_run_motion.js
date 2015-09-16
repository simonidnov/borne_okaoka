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



(lib.wall = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("EhBbAGLMBNqAAAIAAsVIEuAAIAAMVMAwfAAA");
	this.shape.setTransform(-84,-39.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-505.4,-81.5,842.8,84.1);


(lib.tete = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AAjCMIhmgMQgYgDgQgTQgPgTADgZIASiVQACgYAUgQQAUgPAYADIBmAMQAZADAQATQAPAUgDAYIgSCVQgDAZgTAPQgUAPgZgDg");
	this.shape.setTransform(0,-14.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.6,-30.7,46.5,36.2);


(lib.okaoka_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhBhGQB1ACAOCL");
	this.shape.setTransform(7.2,-13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AgEhcQATBsgSBN");
	this.shape_1.setTransform(1.1,-11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("AA8g7QgNCEhqgO");
	this.shape_2.setTransform(-5.5,-14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("AgbhGQA+AygIBb");
	this.shape_3.setTransform(3.4,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-13.2}}]}).to({state:[{t:this.shape,p:{y:-15.7}}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2,p:{y:-14.3}}]},3).to({state:[{t:this.shape_2,p:{y:-16.8}}]},3).to({state:[{t:this.shape_3}]},3).wait(3));

	// Calque 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("Ag1A9QBjAcAIiZ");
	this.shape_4.setTransform(-4.9,-13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AAXBSQASiBhDgi");
	this.shape_5.setTransform(3.3,-12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABPA4QhFh0hYAF");
	this.shape_6.setTransform(8.5,-14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("AgCBXQAMhygKg7");
	this.shape_7.setTransform(0.7,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{y:-13.8}}]}).to({state:[{t:this.shape_4,p:{y:-16.3}}]},3).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6,p:{y:-14.7}}]},3).to({state:[{t:this.shape_6,p:{y:-17.2}}]},3).to({state:[{t:this.shape_7}]},3).wait(3));

	// Calque 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("Ah0ADQB0AcB1gs");
	this.shape_8.setTransform(-0.1,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("Ah0AHQBugCB7gL");
	this.shape_9.setTransform(0.7,-22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ah5AIQB2AiB9g9");
	this.shape_10.setTransform(0.4,-25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1,1).p("AhrANQBrgjBsAP");
	this.shape_11.setTransform(0.2,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{y:-24.6}}]}).to({state:[{t:this.shape_8,p:{y:-27.1}}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10,p:{y:-25.7}}]},3).to({state:[{t:this.shape_10,p:{y:-28.2}}]},3).to({state:[{t:this.shape_11}]},3).wait(3));

	// Calque 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABGB/IhmAOQgZADgTgOQgUgQgEgZIgViTQgDgZAPgUQAQgUAYgDIBngOQAYgEAUAQQAUAOADAZIAUCUQAEAYgPAUQgPAUgZAEg");
	this.shape_12.setTransform(-1.7,-46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(3).to({y:-49.1},0).wait(3).to({y:-44.1},0).wait(3).to({y:-46.6},0).wait(3).to({y:-49.1},0).wait(3).to({y:-41.6},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-63.3,32.8,59.7);


(lib.fail_wall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A/PPnIAA/OMA+eAAAIAAfOg");
	this.shape.setTransform(102.4,-62.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(28).to({_off:false},0).wait(54));

	// Calque 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("A/PPnIAA/OMA+fAAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:22.4,y:-62.7}).wait(76));

	// Calque 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().de(-3.7,-3.7,7.5,7.5);
	this.shape_1.setTransform(-47.4,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoAlQgMgMAAgSQAAgPAMgNQANgMARAAQAQAAAMAMQALAMABANQAFgCAFAAQAIAAAGAGQAHAHAAAIQAAAJgHAGQgGAGgIAAQgJAAgGgGIgEgFIgDAEQgMAMgQAAQgRAAgNgMgAh2AsQgEgEAAgFQAAgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDgABAAoQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgGAAgEgEgABrATQgCgCAAgEQAAgDACgDQADgDAEAAQADAAADADQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDgAAfgeQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_2.setTransform(-40.1,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiFAuQgGgGAAgKQAAgJAGgHQAHgGAKAAQAGAAAFADIAAgCQAAgKAJgJQAJgJANAAQAMAAAJAJQAJAJAAAKQAAANgJAJIgBABIAAABQgBAEgCADQgDACgEAAQgEAAgDgCIAAAAIgDAAQgMAAgIgHQgBAIgFAFQgHAHgJAAQgKAAgHgHgAgIAiQgJgKAAgOQAAgMAJgKQAIgJAOAAQAOAAAJAJQAKAKAAAKQAEgCAEAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFIgCgEIgEADQgJAKgOAAQgOAAgIgKgABLAlQgDgDgBgFQABgFADgDQADgDAFAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgFAAgDgDgACCAEQAAAAgBgBQAAAAAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBgAghgiQgCgDAAgEQAAgFACgDQADgDAFAAQAFAAADADQACADAAAFQAAAEgCADQgDADgFAAQgFAAgDgDgAA8gjQgCgCgBgDQABgDACgCQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_3.setTransform(-40.5,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhPAvQgEgEgBgEQgJAAgHgGIAAABQgCACgDAAIgFgBIgDAEQgFAGgJAAQgIAAgFgGQgGgFAAgIQAAgIAGgGQAFgGAIAAQAJAAAFAGIACACIAAgDQAAgLAIgGQAIgIALAAQAHAAAGACQABgFAEgEQAFgFAJAAQAHAAAGAFQAFAGABAIIAAACQAKAAAHAFQAHAHAAAKQAAAKgHAHIgBABIAAABQgBADgCACQgCACgDAAQgDAAgDgCIgCAAQgJAAgHgFQgBAGgEAFQgFAFgIAAQgIAAgEgFgAASAlQgHgIAAgLQAAgLAHgHQAIgHALAAQAMAAAHAHQAHAGABAKQADgBADAAQAFAAAFAEQADAEAAAFIAAACIADgEQADgCADAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgDAAgDgDQgDgCAAgEIAAgBQgBADgCACQgFAFgFAAQgFAAgFgFIgCgCIgCACQgHAIgMAAQgLAAgIgIgACMACIgBgCIABgBIAEgBIACABIABABIgBACIgCABIgEgBgABUgdIgBgDIABgEIADgBIADABIABAEIgBADIgDABIgDgBgAAKghQgCgCAAgDQAAgDACgCQABgCADAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQABACAAADQAAADgBACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgBgCgAgwgrIgBgDIABgEIAEgBIADABQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_4.setTransform(-42.1,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiTAzQgEgEAAgHQAAgHAEgFQAGgFAHAAQAGAAAFAFIAAgBQAAgJAHgHQAGgGAJAAQAKAAAGAGIAFAGQAEgDAGAAQAGAAAEAEIACACIAAgCQAAgJAGgHQAGgEAKAAQAGAAAEACQAAgEAEgDQAEgFAGAAQAHAAAFAFQACAEAAAFIAAABQAIAAAGAGQAGAFgBAIQABAIgGAGIgCABIAAABIgBAEQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAQgFAAgFgEQgBAFgEADQgEAEgGAAQgGAAgEgEQgCgCgBgDQgBADgDACQgDAEgEAAQgEAAgEgEQgDgDAAgEIAAAAIgCABQgEAFgGAAQgHAAgFgFIgDADQgGAHgKAAQgJAAgGgHIgCgBQgBAFgEAEQgFAFgGAAQgHAAgGgFgAAtAmQgHgGAAgJQAAgJAHgGQAGgGAJAAQAJAAAGAGQAGAGABAIIAEgBQAFAAADADQADADAAAFIAAABIACgDQACgCADAAQADAAACACQACACAAADQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAABQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgBQgBADgCACQgDADgFAAQgEAAgDgDIgCgCIgCABQgGAHgJAAQgJAAgGgHgACUAFIgBgBIABgCIACgBIACABIAAACIAAABIgCABIgCgBgABsgZIgBgBIABgDQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIABABIABADIgBABIgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBgAAsgcQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIADAAIACAAIABAEIgBADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAgAABgzIAAgCIAAgCIACAAIACAAIABACIgBACIgCABIgCgBg");
	this.shape_5.setTransform(-45.2,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7AhQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADIAAgBQAAgGAEgEQAEgEAGAAQAGAAAEAEIADAEQADgCADAAQAFAAACADIABABIAAgCQAAgGADgEQADgCAGAAQAEAAADABQAAgCACgCQADgDAEAAQAEAAADADQADADAAACIAAABQAFAAAEADQAEAEAAAFQAAAFgEAEIgBABIAAAAIgBADIgDABIgDgBIgBAAQgEAAgEgDQAAADgCACQgDADgEAAQgEAAgDgDIgCgDIgCADQgCADgDAAQgCAAgBgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgBABQgCADgFAAQgEAAgDgDIgCACQgEAEgGAAQgGAAgEgEIgBgBQAAADgDADQgDADgFAAQgEAAgDgDgAiAAhQgCgDAAgEQAAgEACgDQADgCAEAAQAEAAACACQADgCADAAQADAAADACIACAEIABgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBIgBgCIgCADQgDADgDAAIgFgBIAAAAQgDADgEAAQgEAAgDgDgAA+AYQgEgEAAgFQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAFIADgBQADAAACACQACACAAADIAAABIABgCIADgBIAEABIABADIgBADQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAAAIgCADQgCACgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAIgBgCIgBABQgEAEgGAAQgGAAgEgEgAhQAbIgBgDIABgEIADgBIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgACBADIgBgBIABgBIABAAIABAAIAAABIAAABIgBABIgBgBgABngPIgBgBIABgCIABAAIABAAIAAACIAAABIgBAAIgBAAgAA+gSIgBgBIABgDIACAAIABAAIABADIgBABIgBABIgCgBgAAiggIAAgBIAAgBIACgBIABABIABABIgBABIgBABIgCgBg");
	this.shape_6.setTransform(-48.6,7.1);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:-47.4,y:7.5}}]},48).to({state:[{t:this.shape_3},{t:this.shape_1,p:{scaleX:0.8,scaleY:0.8,x:-44,y:7.7}}]},2).to({state:[{t:this.shape_4},{t:this.shape_1,p:{scaleX:0.64,scaleY:0.64,x:-42.3,y:8.5}}]},2).to({state:[{t:this.shape_5},{t:this.shape_1,p:{scaleX:0.512,scaleY:0.512,x:-42.3,y:8.5}}]},2).to({state:[{t:this.shape_6},{t:this.shape_1,p:{scaleX:0.328,scaleY:0.328,x:-43.4,y:8.8}}]},2).to({state:[]},2).wait(24));

	// Calque 3
	this.instance = new lib.tete();
	this.instance.setTransform(11,-39.7,1,1,-5.5,0,0,8.8,-12.7);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(3).to({regY:-12.8,rotation:-20.5,x:-5.6,y:-43.9},0).wait(2).to({rotation:-40,x:-28.1,y:-42.3},0).wait(2).to({regX:8.7,rotation:-55,x:-36.1,y:-36.1},0).wait(2).to({regY:-12.7,rotation:-80.7,x:-51.7,y:-22.2},0).wait(2).to({regY:-12.8,rotation:-95.7,x:-60.8,y:-12.8},0).wait(2).to({x:-63.3},0).wait(2).to({x:-65.8},0).wait(2).to({x:-68.3},0).wait(2).to({x:-70.8},0).wait(26));

	// Calque 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AhogSQAoAQBBAFQBDAHAlAI");
	this.shape_7.setTransform(3,-20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AghAAQAFAAA+AA");
	this.shape_8.setTransform(13.3,-19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("Ag8BQQBJhHAxhY");
	this.shape_9.setTransform(-18.3,-25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AglBdQA0hYAXhh");
	this.shape_10.setTransform(-22.2,-22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AAMB6QgDh4gTh7");
	this.shape_11.setTransform(-32.9,-16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("ABHBkQg+hlhPhi");
	this.shape_12.setTransform(-44.9,-17.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("ABfBOQhYhShlhJ");
	this.shape_13.setTransform(-48,-18);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("ABqA7Qhhg4hyg9");
	this.shape_14.setTransform(-50.7,-18.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AB2AoQh2gmh1gq");
	this.shape_15.setTransform(-52.7,-19.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AB3AZQh3gSh2gg");
	this.shape_16.setTransform(-55.3,-19.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AAvB4QgRiShMhd");
	this.shape_17.setTransform(-53.8,-11.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AAACAIAAj/");
	this.shape_18.setTransform(-51,-6.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AgbB2QgMinBFhE");
	this.shape_19.setTransform(-48.1,-5.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("Ag/BAQgfi2CjBN");
	this.shape_20.setTransform(-44.5,0);

	this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},37).to({state:[{t:this.shape_8,p:{rotation:0,x:13.3,y:-19.1}}]},1).to({state:[{t:this.shape_8,p:{rotation:-15,x:2.1,y:-24.5}}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},3).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},4).to({state:[{t:this.shape_20}]},2).wait(11));

	// Calque 6
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AgXhfQAZAdAWCi");
	this.shape_21.setTransform(11.5,-2.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AgChgQAJAfgHCi");
	this.shape_22.setTransform(13.9,-2.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AhHgbQBpg0AmB6");
	this.shape_23.setTransform(-3.3,-18.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("AhOAAQBYhMBFBr");
	this.shape_24.setTransform(-5.7,-20.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AhNA6QAciQB/Aj");
	this.shape_25.setTransform(-17,-23.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AggBXQgxiMB/gh");
	this.shape_26.setTransform(-35.3,-31.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AAYBeQAThehGhd");
	this.shape_27.setTransform(-45.7,-34.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AApBWQARhshkg/");
	this.shape_28.setTransform(-53.2,-34.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("ABJAwQg3hshaAO");
	this.shape_29.setTransform(-61.2,-31);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("ABHAgQhAhQhOAV");
	this.shape_30.setTransform(-65.3,-29.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AgPBXQBKhRhOhc");
	this.shape_31.setTransform(-46.7,-28);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AhIA9QBdg6A0g/");
	this.shape_32.setTransform(-37,-14);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AhhAAQB9AxBGhE");
	this.shape_33.setTransform(-34.7,-4.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AhbgQQCAAyA3ga");
	this.shape_34.setTransform(-35.7,1.1);

	this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},37).to({state:[{t:this.shape_22,p:{rotation:0,x:13.9,y:-2.9}}]},1).to({state:[{t:this.shape_22,p:{rotation:-15,x:6.8,y:-9.1}}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},3).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_34}]},4).to({state:[{t:this.shape_34}]},2).wait(11));

	// Calque 4
	this.instance_1 = new lib.okaoka_run();
	this.instance_1.setTransform(0.5,-22.7,1,1,0,0,0,0,-30.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("AgoBSQBFg8AMhn");
	this.shape_35.setTransform(5,-4.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AgXBSQA8g5gRhq");
	this.shape_36.setTransform(11.5,-4.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AAaBQQAShQhJhP");
	this.shape_37.setTransform(-7.6,-13.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AAwBGQgEhThbg4");
	this.shape_38.setTransform(-8.9,-13.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("ABWAXQhBhKhqAu");
	this.shape_39.setTransform(-16.2,-17.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("ABSgYQhdgihGBc");
	this.shape_40.setTransform(-30.4,-26);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("AAAhZQAfBIgqBr");
	this.shape_41.setTransform(-37,-28.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("AgShdQA6BMgiBv");
	this.shape_42.setTransform(-44.5,-31.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(5,1).p("Ag7hRQBjA1AUBv");
	this.shape_43.setTransform(-54,-32.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(5,1).p("AhPhHQBxAhAuBv");
	this.shape_44.setTransform(-58.5,-31.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(5,1).p("AAVhpQA6CHh2BM");
	this.shape_45.setTransform(-41.4,-23);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(5,1).p("ABigmQg+AmiFAn");
	this.shape_46.setTransform(-34.1,-4.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(5,1).p("ABmgFQh4AzhTg+");
	this.shape_47.setTransform(-33.9,2.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(5,1).p("ABkAkQh/AUhIhe");
	this.shape_48.setTransform(-34.9,3.3);

	this.instance_1.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.shape_35}]},31).to({state:[{t:this.shape_36,p:{rotation:0,x:11.5,y:-4.4}}]},1).to({state:[{t:this.shape_36,p:{rotation:-15,x:4.1,y:-9.9}}]},2).to({state:[{t:this.shape_37}]},2).to({state:[{t:this.shape_38}]},2).to({state:[{t:this.shape_39}]},2).to({state:[{t:this.shape_40}]},2).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},2).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},2).to({state:[{t:this.shape_45}]},3).to({state:[{t:this.shape_46}]},2).to({state:[{t:this.shape_47}]},2).to({state:[{t:this.shape_48}]},2).to({state:[{t:this.shape_48}]},4).to({state:[{t:this.shape_48}]},2).wait(11));

	// Calque 1
	this.instance_2 = new lib.wall();
	this.instance_2.setTransform(312.5,-29,1,1,0,0,0,0,-39.6);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:22.5},31).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.6,-70.9,400,84.1);


// stage content:



(lib.wall_run_motion = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(9).call(this.frame_93).wait(12).call(this.frame_105).wait(146));

	// Calque 4
	this.instance = new lib.fail_wall("synched",6,false);
	this.instance.setTransform(186.3,134.9,1,1,0,0,0,8.6,-27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},230).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,191.8,400,84.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;