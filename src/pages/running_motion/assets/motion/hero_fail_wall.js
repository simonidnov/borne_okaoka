(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 115,
	height: 75,
	fps: 30,
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


(lib.hero_fail_wall_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		if(typeof self !== "undefined"){
			self.pause();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Calque 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().de(-3.7,-3.7,7.5,7.5);
	this.shape.setTransform(-24.4,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAlQgMgMAAgSQAAgPAMgNQANgMARAAQAQAAAMAMQALAMABAOQAFgDAFAAQAIAAAGAGQAHAHAAAIQAAAJgHAGQgGAGgIAAQgJAAgGgGIgEgFIgDAEQgMAMgQAAQgRAAgNgMgAh2AsQgEgEAAgFQAAgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDgABAAoQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgGAAgEgEgABrATQgCgCAAgEQAAgDACgDQADgDAEAAQADAAADADQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDgAAfgeQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(-17.1,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiEAuQgHgGAAgKQAAgJAHgHQAGgGAJAAQAHAAAFADIAAgCQAAgKAJgJQAJgJAMAAQANAAAJAJQAJAJAAAKQAAANgJAJIgCABIAAABQAAAEgCADQgDACgEAAQgEAAgDgCIgEAAQgLAAgIgHQgBAIgGAFQgGAHgKAAQgJAAgGgHgAgIAiQgKgKAAgOQAAgMAKgKQAIgJAOAAQAOAAAKAJQAJAKABAKQADgCAEAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgFgFIgDgEIgCADQgKAKgOAAQgOAAgIgKgABLAlQgDgDAAgFQAAgFADgDQADgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgFAAgDgDgACCAEQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAABQgBAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAgggiQgDgDgBgEQABgFADgDQADgDAEAAQAEAAADADQAEADAAAFQAAAEgEADQgDADgEAAQgEAAgDgDgAA7gjQgCgCAAgDQAAgDACgCQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAg");
	this.shape_2.setTransform(-17.5,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQAvQgDgEgBgEQgJAAgHgFIAAAAQgCACgEAAIgDgBIgEAEQgFAGgJAAQgIAAgGgGQgFgFAAgIQAAgIAFgGQAGgGAIAAQAJAAAFAGIADACIgBgDQAAgLAIgGQAIgIAMAAQAGAAAGADQABgGAEgEQAGgFAHAAQAJAAAFAFQAGAGgBAIIAAACQAKAAAIAFQAHAHAAAKQAAAKgHAHIgCABIAAABQAAADgBACQgCACgEAAQgDAAgCgCIgEAAQgIAAgHgFQgBAGgEAFQgFAFgIAAQgHAAgGgFgAASAlQgIgIAAgLQAAgLAIgHQAIgHALAAQALAAAIAHQAIAGAAAKQACgBAEAAQAGAAADAEQAEAEABAFIAAACQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQADgCAEAAQADAAACACQADADAAAEQAAAEgDACQgCADgDAAQgEAAgDgDQgDgCAAgEIAAgBQgBADgDACQgDAFgGAAQgGAAgEgFIgBgCIgDACQgIAIgLAAQgLAAgIgIgACNACIgBgCIABgBIACgBIADABIABABIgBACIgDABIgCgBgABUgdIgBgDIABgEIADgBIADABIABAEIgBADIgDABIgDgBgAAJghQgCgCAAgDQAAgDACgCQACgCAEAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABQACACAAADQAAADgCACQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgCgCgAgwgrIgBgDIABgEIADgBIADABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(-19.1,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiSAzQgFgEAAgHQAAgHAFgFQAFgFAGAAQAIAAAEAFIAAgBQAAgJAGgHQAHgGAJAAQAKAAAHAGIAEAGQAEgDAFAAQAHAAAEAEIACACIAAgCQAAgJAGgHQAGgEAKAAQAFAAAFACQABgEADgDQAEgFAHAAQAGAAAEAFQADAEAAAFIAAABQAIAAAGAGQAFAFABAIQgBAIgFAGIgCABIAAABIgBAEQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAIgCAAQgFAAgGgEQAAAFgDADQgFAEgGAAQgGAAgEgEQgCgCgBgDQgBADgCACQgDAEgFAAQgEAAgEgEQgDgDAAgEIgCABQgEAFgHAAQgGAAgFgFIgCADQgHAHgKAAQgJAAgHgHIgBgBQgBAFgEAEQgEAFgIAAQgGAAgFgFgAAsAmQgFgGAAgJQAAgJAFgGQAHgGAJAAQAJAAAGAGQAGAGAAAIIAFgBQAFAAADADQADADAAAFIAAABIACgDQACgCADAAQADAAACACQACACAAADQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgDAAQgDAAgCgCQgCgCgBgDIAAgBQAAADgCACQgDADgFAAQgEAAgEgDIgBgCIgCABQgGAHgJAAQgJAAgHgHgACUAFIAAgBIAAgCIACgBIABABIABACIgBABIgBABIgCgBgABsgZIgBgBIABgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACABIAAADIAAABIgCABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBgAArgcQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAEAAIADAAIAAAEIAAADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAABgzIgBgCIABgCIACAAIACAAIABACIgBACIgCABIgCgBg");
	this.shape_4.setTransform(-22.2,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7AhQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADIAAgBQAAgGAEgEQAEgEAGAAQAGAAAEAEIADAEQADgCADAAQAFAAACADIABABIAAgCQAAgGADgEQADgCAGAAQAEAAADABQAAgCACgCQADgDAEAAQAEAAADADQADADAAACIAAABQAFAAAEADQAEAEAAAFQAAAFgEAEIgBABIAAAAIgBADIgDABIgDgBIgBAAQgEAAgEgDQAAADgCACQgDADgEAAQgEAAgDgDIgCgDIgCADQgCADgDAAQgCAAgBgDQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgBABQgCADgFAAQgEAAgDgDIgCACQgEAEgGAAQgGAAgEgEIgBgBQAAADgDADQgDADgFAAQgEAAgDgDgAiAAhQgCgDAAgEQAAgEACgDQADgCAEAAQAEAAACACQADgCADAAQADAAADACIACAEIABgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBIgBgCIgCADQgDADgDAAIgFgBIAAAAQgDADgEAAQgEAAgDgDgAA+AYQgEgEAAgFQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAFIADgBQADAAACACQACACAAADIAAABIABgCIADgBIAEABIABADIgBADQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAAAIgCADQgCACgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAIgBgCIgBABQgEAEgGAAQgGAAgEgEgAhQAbIgBgDIABgEIADgBIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgACBADIgBgBIABgBIABAAIABAAIAAABIAAABIgBABIgBgBgABngPIgBgBIABgCIABAAIABAAIAAACIAAABIgBAAIgBAAgAA+gSIgBgBIABgDIACAAIABAAIABADIgBABIgBABIgCgBgAAiggIAAgBIAAgBIACgBIABABIABABIgBABIgBABIgCgBg");
	this.shape_5.setTransform(-25.6,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape,p:{scaleX:1,scaleY:1,x:-24.4,y:7.5}}]},11).to({state:[{t:this.shape_2},{t:this.shape,p:{scaleX:0.8,scaleY:0.8,x:-21,y:7.7}}]},2).to({state:[{t:this.shape_3},{t:this.shape,p:{scaleX:0.64,scaleY:0.64,x:-19.3,y:8.5}}]},2).to({state:[{t:this.shape_4},{t:this.shape,p:{scaleX:0.512,scaleY:0.512,x:-19.3,y:8.5}}]},2).to({state:[{t:this.shape_5},{t:this.shape,p:{scaleX:0.328,scaleY:0.328,x:-20.4,y:8.8}}]},2).to({state:[]},2).wait(14));

	// Calque 4
	this.instance = new lib.tete();
	this.instance.setTransform(34,-39.7,1,1,-5.5,0,0,8.8,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regY:-12.8,rotation:-20.5,x:17.4,y:-43.9},0).wait(2).to({rotation:-40,x:-5.1,y:-42.3},0).wait(2).to({regX:8.7,rotation:-55,x:-13.1,y:-36.1},0).wait(2).to({regY:-12.7,rotation:-80.7,x:-28.7,y:-22.2},0).wait(2).to({regY:-12.8,rotation:-95.7,x:-37.8,y:-12.8},0).wait(2).to({x:-40.3},0).wait(2).to({x:-42.8},0).wait(2).to({x:-45.3},0).wait(2).to({x:-47.8},0).wait(16));

	// Calque 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AhogSQAoAQBBAFQBDAHAlAI");
	this.shape_6.setTransform(26,-20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("AghAAQAEAAA/AA");
	this.shape_7.setTransform(36.3,-19.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AggAJQAEgCA9gP");
	this.shape_8.setTransform(25.1,-24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("Ag9BQQBKhHAxhY");
	this.shape_9.setTransform(4.7,-25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AgmBdQA1hYAYhh");
	this.shape_10.setTransform(0.8,-22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AALB6QgCh4gUh7");
	this.shape_11.setTransform(-9.9,-16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("ABHBkQg+hlhPhi");
	this.shape_12.setTransform(-21.9,-17.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("ABeBOQhXhShlhJ");
	this.shape_13.setTransform(-25,-18);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("ABqA7Qhhg4hyg9");
	this.shape_14.setTransform(-27.7,-18.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AB2AoQh2gmh1gq");
	this.shape_15.setTransform(-29.7,-19.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AB3AZQh3gSh2gg");
	this.shape_16.setTransform(-32.3,-19.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AAvB4QgRiShMhd");
	this.shape_17.setTransform(-30.8,-11.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AAACAIAAj/");
	this.shape_18.setTransform(-28,-6.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AgbB2QgMioBFhD");
	this.shape_19.setTransform(-25.1,-5.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("Ag/BAQgfi2CjBN");
	this.shape_20.setTransform(-21.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},3).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},4).to({state:[{t:this.shape_20}]},2).wait(1));

	// Calque 6
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AgXhfQAZAdAWCi");
	this.shape_21.setTransform(34.5,-2.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AgChgQAJAfgHCi");
	this.shape_22.setTransform(36.9,-2.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AgZhcQASAbAhCe");
	this.shape_23.setTransform(29.7,-9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("AhHgbQBpg0AmB6");
	this.shape_24.setTransform(19.7,-18.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AhOAAQBYhMBFBr");
	this.shape_25.setTransform(17.3,-20.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AhNA6QAciQB/Aj");
	this.shape_26.setTransform(6,-23.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AggBXQgxiMB/gh");
	this.shape_27.setTransform(-12.3,-31.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AAYBeQAThehGhd");
	this.shape_28.setTransform(-22.7,-34.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AApBWQARhshkg/");
	this.shape_29.setTransform(-30.2,-34.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("ABJAwQg3hshaAO");
	this.shape_30.setTransform(-38.2,-31);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("ABHAgQhBhQhNAV");
	this.shape_31.setTransform(-42.3,-29.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AgPBXQBKhRhOhc");
	this.shape_32.setTransform(-23.7,-28);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AhIA9QBdg6A0g/");
	this.shape_33.setTransform(-14,-14);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AhhAAQB9AxBGhE");
	this.shape_34.setTransform(-11.7,-4.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("AhbgQQCAAyA3ga");
	this.shape_35.setTransform(-12.7,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},3).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_35}]},4).to({state:[{t:this.shape_35}]},2).wait(1));

	// Calque 7
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AgoBSQBFg8AMhn");
	this.shape_36.setTransform(28,-4.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AgXBSQA8g6gRhp");
	this.shape_37.setTransform(34.5,-4.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AgKBVQArhIgqhh");
	this.shape_38.setTransform(28.1,-9.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("AAaBQQAShQhJhP");
	this.shape_39.setTransform(15.4,-13.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("AAwBGQgEhThbg4");
	this.shape_40.setTransform(14.1,-13.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("ABWAYQhBhLhqAu");
	this.shape_41.setTransform(6.8,-17.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("ABSgYQhdgihGBc");
	this.shape_42.setTransform(-7.4,-26);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(5,1).p("AAAhZQAfBIgqBr");
	this.shape_43.setTransform(-14,-28.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(5,1).p("AgShdQA6BMgiBv");
	this.shape_44.setTransform(-21.5,-31.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(5,1).p("Ag7hRQBjA1AUBv");
	this.shape_45.setTransform(-31,-32.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(5,1).p("AhPhHQBxAhAuBv");
	this.shape_46.setTransform(-35.5,-31.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(5,1).p("AAVhpQA6CHh2BM");
	this.shape_47.setTransform(-18.4,-23);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(5,1).p("ABigmQg+AmiFAn");
	this.shape_48.setTransform(-11.1,-4.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(5,1).p("ABmgFQh4AzhTg+");
	this.shape_49.setTransform(-10.9,2.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(5,1).p("ABkAkQiAAUhHhe");
	this.shape_50.setTransform(-11.9,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},2).to({state:[{t:this.shape_39}]},2).to({state:[{t:this.shape_40}]},2).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},2).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},2).to({state:[{t:this.shape_45}]},2).to({state:[{t:this.shape_46}]},2).to({state:[{t:this.shape_47}]},3).to({state:[{t:this.shape_48}]},2).to({state:[{t:this.shape_49}]},2).to({state:[{t:this.shape_50}]},2).to({state:[{t:this.shape_50}]},4).to({state:[{t:this.shape_50}]},2).wait(1));

	// Calque 1
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0)").s().p("AlxFtIAArZILjAAIAALZg");
	this.shape_51.setTransform(-16,-26.2,1.552,1.026);

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63.7,132.2,75);


// stage content:
(lib.hero_fail_wall = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.hero_fail_wall_1();
	this.instance.setTransform(82.2,35.9,1,1,0,0,0,8.6,-27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(57.6,37.5,132.1,75);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;