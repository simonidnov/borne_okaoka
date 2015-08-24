(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 90,
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


(lib.star = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBUIhpA4IA4hpIhygjIBygiIg4hpIBpA4IAihyIAjByIBpg4Ig4BpIByAiIhyAjIA4BpIhpg4IgjByg");
	this.shape.setTransform(0,-19.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-39.7,39.8,39.8);


(lib.bras = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AiTgYQA+ALBMANQBKALBTAO");
	this.shape.setTransform(0,-2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.3,-7.6,34.8,10.1);


(lib.hero_fail_life_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var ms = this;
		ms.stop();
		if(typeof rg !== "undefined"){
			rg.pause();
		}
		setTimeout(function(){
			ms.play();
			if(typeof rg !== "undefined"){
				rg.play();
			}
		}, 500);
	}
	this.frame_47 = function() {
		if(typeof rg !== "undefined"){
			rg.run();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(46).call(this.frame_47).wait(1));

	// Calque 4
	this.instance = new lib.star();
	this.instance.setTransform(-10,5.5,0.6,0.6,0,0,0,0,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,x:-14,y:8.5},0).wait(1).to({x:-24.5,y:5.5},0).to({_off:true},1).wait(45));

	// Calque 7
	this.instance_1 = new lib.tete();
	this.instance_1.setTransform(-2,-42.5,1,1,-9,0,0,8.8,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:8,y:-40},0).wait(2).to({regY:-12.7,rotation:10.2,x:19.7,y:-34.6},0).wait(2).to({rotation:25.2,x:20.9,y:-29.2},0).wait(2).to({regX:8.7,regY:-12.8,rotation:30.9,x:20.7,y:-27.3},0).wait(3).to({regX:8.8,regY:-12.7,rotation:48.4,x:23.5,y:-16.1},0).wait(2).to({rotation:63.4,x:20.9,y:-3.9},0).wait(1).to({rotation:78.4,x:18.1,y:3.4},0).wait(1).to({rotation:82.6,x:16.8,y:4.7},0).wait(23).to({regY:-12.6,rotation:127.6,x:10.5,y:-2.4},0).wait(2).to({rotation:178.6,x:1.7,y:-18.4},0).wait(2).to({regX:8.9,rotation:290.6,x:13.9,y:-42.1},0).wait(2).to({regX:9,regY:-12.5,rotation:320.6,x:12.4,y:-42.6},0).wait(2).to({rotation:350.6,x:9,y:-39.3},0).wait(2));

	// Calque 8
	this.instance_2 = new lib.bras();
	this.instance_2.setTransform(-10.5,-19.2,1,1,-6.7,0,0,0,-2.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhRhmQAgAuA7AvQA+AsAKBE");
	this.shape.setTransform(-4.1,-18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("Ag0h4QAUA0AsA+QAvA6gHBF");
	this.shape_1.setTransform(-6.3,-19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("Agph9QAPA3AmBBQApA/gPBE");
	this.shape_2.setTransform(-7.2,-20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AgLhyQAFBOAGAiQAHAhAFBU");
	this.shape_3.setTransform(-3.6,-17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AAhhtQgaBIgHAjQgEAhgdBP");
	this.shape_4.setTransform(-5.3,-15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("ABJhZQg0A6gUAdQgRAdg4A/");
	this.shape_5.setTransform(-3.8,-16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("ABig8QhDAlgdAWQgZAVhKAp");
	this.shape_6.setTransform(-0.7,-18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("ABuggQhKATgiANQgeANhRAU");
	this.shape_7.setTransform(0.6,-20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("ABmA2QhDgngggOQgggLhIgr");
	this.shape_8.setTransform(16.8,-31.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AAWBxQgMhMgKgiQgJgggMhT");
	this.shape_9.setTransform(28.3,-31.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AhKBcQA0g4AWgdQARgcA7hG");
	this.shape_10.setTransform(28.3,-24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AhuApQBJgVAhgPQAegPBVge");
	this.shape_11.setTransform(16.1,-20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AiBgIQBOAIAlAAQAkAABsAJ");
	this.shape_12.setTransform(2.9,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regY:-2.6,rotation:-6.7,x:-10.5,y:-19.2}}]}).to({state:[{t:this.instance_2,p:{regY:-2.5,rotation:8.3,x:-5.5,y:-16.6}}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},19).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).wait(2));

	// Calque 9
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AAQhNQAdBVhFBG");
	this.shape_13.setTransform(-14.5,-3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("ABlhNQAaBDjmBY");
	this.shape_14.setTransform(-16.6,-3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("ABOgwQgZAhiCBA");
	this.shape_15.setTransform(-13.4,-5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("ABYgaQghAaiOAb");
	this.shape_16.setTransform(-18.5,-10);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("ABagRQgkAUiQAP");
	this.shape_17.setTransform(-20.4,-11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("ABhAQQhkAVhdg5");
	this.shape_18.setTransform(-18.9,-13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("ABWA9QiHgVgkhk");
	this.shape_19.setTransform(-21.1,-18.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("AAwBUQhyg6AWht");
	this.shape_20.setTransform(-16.3,-24.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AASBlQhFh+BBhL");
	this.shape_21.setTransform(-8.7,-31.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AgkBeQgHiHBRg0");
	this.shape_22.setTransform(-0.8,-34.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("Ag7BaQAgijBXgQ");
	this.shape_23.setTransform(1.5,-34.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("Ag8BSQAPiSBqgR");
	this.shape_24.setTransform(1.6,-33.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AhkAbQBxhbBYBA");
	this.shape_25.setTransform(26.6,-41.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AhKhEQCPAeAGBr");
	this.shape_26.setTransform(40.9,-29.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("Ag2hlQCMA4gnCT");
	this.shape_27.setTransform(40.7,-12.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AgOhwQBdB1hqBt");
	this.shape_28.setTransform(22.7,-4.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AgzhDQBRAaAWBt");
	this.shape_29.setTransform(8.9,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},3).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},19).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).wait(2));

	// Calque 10
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("Ag4BQQBIhEAphb");
	this.shape_30.setTransform(-18.6,-2.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AhpAtQCcgNA3hM");
	this.shape_31.setTransform(-17,-6.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AhQAhQBagPBHgy");
	this.shape_32.setTransform(-18,-12.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AhWAJQBaAKBTge");
	this.shape_33.setTransform(-21.3,-17.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AhXAAQBZARBWgW");
	this.shape_34.setTransform(-22.4,-19.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("AhXgeQBYA1BXAI");
	this.shape_35.setTransform(-20,-21);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AgzhLQAIBoBfAv");
	this.shape_36.setTransform(-16.2,-26.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AAFhVQgsBbA2BP");
	this.shape_37.setTransform(-9,-30.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AAmhNQhKAogBBz");
	this.shape_38.setTransform(2.5,-33.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("AA7g1QhWgDgfBv");
	this.shape_39.setTransform(7.8,-33);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("ABKgjQhWggg9Bu");
	this.shape_40.setTransform(9.3,-31.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("ABBgXQhaghgnBZ");
	this.shape_41.setTransform(9.4,-30.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("ABDAfQgrhXhaAl");
	this.shape_42.setTransform(30,-32.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(5,1).p("AAPBEQAqhXhUgw");
	this.shape_43.setTransform(37.9,-22);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(5,1).p("AgoA7QBdgVgOhg");
	this.shape_44.setTransform(26.2,-11.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(5,1).p("Ag/AcQBbAdAkha");
	this.shape_45.setTransform(7.5,-9.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(5,1).p("AhsgeQBgBtB5hV");
	this.shape_46.setTransform(-7.3,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},3).to({state:[{t:this.shape_36}]},2).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},19).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},2).to({state:[{t:this.shape_45}]},2).to({state:[{t:this.shape_46}]},2).wait(2));

	// Calque 11
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ah/A3IAAgDQAAgGADgDQAEgEAGAAQAEAAADACQABgNAJgJQALgLAPAAQANAAAKAIQAJgJAMgCQABgRAOgOQANgQAWAAQAVAAAPAQIAGAHQAGgCAHAAQAVAAAOAOQAPANAAAUQAAAQgJANgAhgghQgEgDAAgGQAAgEAEgFQAEgDAFAAQAFAAADADQAEAFAAAEQAAAGgEADQgDAEgFAAQgFAAgEgEgAgWghQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDAEgFAAQgEAAgEgEg");
	this.shape_47.setTransform(-6.2,4.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AB2A1IgBgCIAAAAIgCACIjNAAIAAgCIgBgCQAAgNAJgJQAJgIAMgBQAGABAFACQgDgHAAgIQAAgMAJgKQAKgJAOAAQAOAAAHAJQAFAFADAGQAKgJAOABIACAAIAAgGQAAgIAGgGQAGgGAIAAQAJAAAGAGIAEAFQAGgCAHAAQAUAAANANQAOAOAAASIAAACIAIgBQALAAAIAIQAIAIAAALIgBAIIgBACgAiJA1IgBgCQgCgDAAgFQAAgJAHgIQAHgGAKAAQAJAAAHAGQAHAIAAAJQAAAFgBADIgBACgAinA1IgBgCIAAgBQAAgDADgDQACgCAEAAQADAAADACQACADAAADIAAABIAAACgAhAgmQgCgBAAgEQAAgCACgCQACgCADAAQADAAACACQACACAAACQAAAEgCABQgCACgDAAQgDAAgCgCgAiKgmQgCgDAAgDQAAgDACgCQADgDADAAQADAAACADQADACAAADQAAADgDADQgCACgDAAQgDAAgDgCg");
	this.shape_48.setTransform(-11.2,4.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEA0IgCgCIgCACIhXAAIgBgFQAAgKAHgHQAHgHAKABQAKgBAHAHIAFAGIABgCQAEgFAGAAIABAAIADgDIABAAQgHgBgFgGQgGgGAAgIQAAgHAGgGQAGgHAJAAQAJAAAHAHQADADACAFQAJgIAJAAQAKAAAJAHQAIgGAMAAQALAAAIAGIAFgHQAOgNASAAQAUAAANANQANALAAAUQAAARgLAMgAiOA0IAAgBQAAgHAEgEQAEgEAHgBQAGABAFAEQAEAEAAAHIAAABgAAkgLQgEgEAAgFQAAgGAEgDQAEgFAFAAQAGAAADAFQAEADAAAGQAAAFgEAEQgDADgGAAQgFAAgEgDgAhJgpIgCgDQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIADgBIADABIABADIgBADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgCgAiTgqQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIABgFIAEgBIADABIACAFQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_49.setTransform(-11.1,4.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhlAxIgBgBIgBABIgIAAIgEgCIgBABIgBABIgLAAIgCgBQgCgCAAgEQAAgEACgDQADgCAFAAIADABQABgDACgCQADgDAFAAIAEAAIADgGQAHgGAIAAQAJAAAFAGIAEAEQAGgHAKAAQAFAAAFACQACgHAFgFQAJgHAMAAQAMAAAGAHQAFAFADAGIAAAAQAHAAAGAFQADgIAFgGQAJgJAMAAQAEgLAKgJQASgSAZAAQAaAAASASQASASAAAXQAAAQgHAMgAisAxIAAgEQAAgGAEgFQAFgEAGAAQAGAAAFAEQAFAFAAAGIgBAEgAh9gQQgEgEAAgGQAAgFAEgEQAEgEAGAAQAGAAAEAEQADAEAAAFQAAAGgDAEQgEAEgGAAQgGAAgEgEgAgugeQgDgDAAgFQAAgEADgDQAEgDAEAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgEAAgEgDg");
	this.shape_50.setTransform(-12.1,4.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().de(-2.5,-2.5,5,5);
	this.shape_51.setTransform(-3.8,8.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().de(-1.4,-1.4,2.9,2.9);
	this.shape_52.setTransform(-7.1,9.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().de(-2.4,-2.4,4.9,4.9);
	this.shape_53.setTransform(-13,8.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().de(-1.7,-1.7,3.4,3.4);
	this.shape_54.setTransform(-16.2,8.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().de(-1.3,-1.3,2.7,2.7);
	this.shape_55.setTransform(-22.2,9.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().de(-0.9,-0.9,1.9,1.9);
	this.shape_56.setTransform(-28.3,9.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().de(-0.7,-0.7,1.5,1.5);
	this.shape_57.setTransform(-26,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().de(-0.7,-0.7,1.4,1.4);
	this.shape_58.setTransform(-17.5,-1.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().de(-3.7,-3.7,7.4,7.4);
	this.shape_59.setTransform(0.4,6.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().de(-2,-2,4,4);
	this.shape_60.setTransform(7,9.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().de(-1.9,-1.9,3.8,3.8);
	this.shape_61.setTransform(-0.4,9.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().de(-1.8,-1.8,3.6,3.6);
	this.shape_62.setTransform(-3.8,8.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().de(-2.4,-2.4,4.9,4.9);
	this.shape_63.setTransform(-18.7,8.7,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_47}]},20).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},2).to({state:[{t:this.shape_47}]},2).to({state:[{t:this.shape_48}]},2).to({state:[{t:this.shape_49}]},2).to({state:[{t:this.shape_50}]},2).to({state:[{t:this.shape_59,p:{scaleX:1,scaleY:1,x:0.4,y:6.9}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:-17.5,y:-1.4}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:-26,y:0}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:-28.3,y:9.9}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:-22.2,y:9.3}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:-16.2,y:8.9}},{t:this.shape_53,p:{x:-13,y:8.3,scaleX:1,scaleY:1}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:-7.1,y:9.2}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:-3.8,y:8.1}}]},2).to({state:[{t:this.shape_59,p:{scaleX:0.64,scaleY:0.64,x:-7.6,y:8.4}},{t:this.shape_58,p:{scaleX:0.64,scaleY:0.64,x:-20.6,y:-5.9}},{t:this.shape_57,p:{scaleX:0.64,scaleY:0.64,x:-30.5,y:-3}},{t:this.shape_56,p:{scaleX:0.64,scaleY:0.64,x:-32.8,y:9.8}},{t:this.shape_55,p:{scaleX:0.64,scaleY:0.64,x:-26.7,y:9.3}},{t:this.shape_54,p:{scaleX:0.64,scaleY:0.64,x:-20.7,y:9}},{t:this.shape_63,p:{scaleX:0.64,scaleY:0.64,x:-18.7,y:8.7}},{t:this.shape_52,p:{scaleX:0.64,scaleY:0.64,x:-12.4,y:9.9}},{t:this.shape_51,p:{scaleX:0.64,scaleY:0.64,x:-10.3,y:9.2}},{t:this.shape_62,p:{scaleX:1,scaleY:1,x:-3.8,y:8.8}},{t:this.shape_61,p:{scaleX:1,scaleY:1,x:-0.4,y:9.8}},{t:this.shape_53,p:{x:3.3,y:9.1,scaleX:1,scaleY:1}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:7,y:9.3}}]},2).to({state:[{t:this.shape_59,p:{scaleX:0.41,scaleY:0.41,x:-12,y:9}},{t:this.shape_58,p:{scaleX:0.512,scaleY:0.512,x:-20.5,y:-10.5}},{t:this.shape_57,p:{scaleX:0.512,scaleY:0.512,x:-32,y:-6}},{t:this.shape_55,p:{scaleX:0.64,scaleY:0.64,x:-29.7,y:9.9}},{t:this.shape_54,p:{scaleX:0.41,scaleY:0.41,x:-24.7,y:9.7}},{t:this.shape_63,p:{scaleX:0.512,scaleY:0.512,x:-23.1,y:9.4}},{t:this.shape_52,p:{scaleX:0.41,scaleY:0.41,x:-15,y:9.9}},{t:this.shape_51,p:{scaleX:0.41,scaleY:0.41,x:-13.7,y:9.5}},{t:this.shape_62,p:{scaleX:0.64,scaleY:0.64,x:-9.6,y:9.2}},{t:this.shape_61,p:{scaleX:0.64,scaleY:0.64,x:-7.4,y:9.9}},{t:this.shape_53,p:{x:-5,y:9.4,scaleX:0.64,scaleY:0.64}},{t:this.shape_60,p:{scaleX:0.64,scaleY:0.64,x:-2.6,y:9.5}}]},2).to({state:[]},2).wait(8));

	// Calque 1
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0)").s().p("AlxFtIAArZILjAAIAALZg");
	this.shape_64.setTransform(11.4,-26.2,1.214,1.026);

	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-63.8,90,81.3);


// stage content:
(lib.hero_fail_life = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.hero_fail_life_1();
	this.instance.setTransform(42.2,35.9,1,1,0,0,0,8.6,-27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(45,37.4,90,81.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;