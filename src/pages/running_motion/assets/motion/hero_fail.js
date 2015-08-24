(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 75,
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


(lib.bras = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AiTgYQA+ALBMANQBKALBTAO");
	this.shape.setTransform(0,-2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.3,-7.6,34.8,10.1);


(lib.hero_fail_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		if(typeof self !== "undefined"){
			self.pause();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Calque 5
	this.instance = new lib.tete();
	this.instance.setTransform(1,-42.5,1,1,-9,0,0,8.8,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:11,y:-40},0).wait(2).to({regY:-12.7,rotation:10.2,x:22.7,y:-34.6},0).wait(2).to({rotation:25.2,x:23.9,y:-29.2},0).wait(2).to({regX:8.7,regY:-12.8,rotation:30.9,x:23.7,y:-27.3},0).wait(3).to({regX:8.8,regY:-12.7,rotation:48.4,x:26.5,y:-16.1},0).wait(2).to({rotation:63.4,x:23.9,y:-3.9},0).wait(1).to({rotation:78.4,x:21.1,y:3.4},0).wait(1).to({rotation:82.6,x:19.8,y:4.7},0).wait(38));

	// Calque 4
	this.instance_1 = new lib.bras();
	this.instance_1.setTransform(-7.5,-19.2,1,1,-6.7,0,0,0,-2.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhRhmQAgAuA7AvQA+AsAKBE");
	this.shape.setTransform(-1.1,-18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("Ag0h4QAUA0AsA+QAvA6gHBF");
	this.shape_1.setTransform(-3.3,-19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("Agph9QAPA3AmBBQApA/gPBE");
	this.shape_2.setTransform(-4.2,-20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AgLhyQAFBOAGAiQAHAhAFBU");
	this.shape_3.setTransform(-0.6,-17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AAihtQgaBIgHAjQgFAhgdBP");
	this.shape_4.setTransform(-2.3,-15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("ABJhZQg0A6gUAdQgRAdg4A/");
	this.shape_5.setTransform(-0.8,-16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("ABig8QhDAlgdAWQgZAVhKAp");
	this.shape_6.setTransform(2.3,-18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("ABuggQhKATgiANQgeANhRAU");
	this.shape_7.setTransform(3.6,-20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("ABahHQg/AtgaAZQgWAYhEAx");
	this.shape_8.setTransform(-0.5,-15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AA1hlQgnBCgOAiQgJAfgrBI");
	this.shape_9.setTransform(-1.1,-10.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AAHhyQgHBMAAAkQABAigHBT");
	this.shape_10.setTransform(-0.3,-4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AgNhvQAZBGABAlQADAhgKBT");
	this.shape_11.setTransform(-1.7,-4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("Agyg6QA5gdAcAcQAdAcgVBo");
	this.shape_12.setTransform(-5.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regY:-2.6,rotation:-6.7,x:-7.5,y:-19.2}}]}).to({state:[{t:this.instance_1,p:{regY:-2.5,rotation:8.3,x:-2.5,y:-16.6}}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},19).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},5).to({state:[{t:this.shape_12}]},2).wait(4));

	// Calque 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AAQhNQAdBVhFBG");
	this.shape_13.setTransform(-11.5,-3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("ABlhNQAaBDjmBY");
	this.shape_14.setTransform(-13.6,-3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("ABOgwQgZAhiCBA");
	this.shape_15.setTransform(-10.4,-5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("ABYgaQghAaiOAb");
	this.shape_16.setTransform(-15.5,-10);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("ABagRQgkAUiQAP");
	this.shape_17.setTransform(-17.4,-11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("ABhAQQhkAVhdg5");
	this.shape_18.setTransform(-15.9,-13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("ABWA9QiHgVgkhk");
	this.shape_19.setTransform(-18.1,-18.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("AAwBUQhyg6AWht");
	this.shape_20.setTransform(-13.3,-24.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AASBlQhFh+BBhL");
	this.shape_21.setTransform(-5.7,-31.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AgkBeQgHiHBRg0");
	this.shape_22.setTransform(2.2,-34.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("Ag7BaQAgijBXgQ");
	this.shape_23.setTransform(4.5,-34.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("Ag8BSQAPiSBqgR");
	this.shape_24.setTransform(4.6,-33.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AARBmQg1hyAfhZ");
	this.shape_25.setTransform(-8.8,-28.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("ABLA2Qh5gSgchZ");
	this.shape_26.setTransform(-15.5,-15.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("ABWgpQgdBliOgV");
	this.shape_27.setTransform(-15.1,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},3).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},19).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_27}]},5).to({state:[{t:this.shape_27}]},2).wait(4));

	// Calque 6
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("Ag4BQQBIhEAphb");
	this.shape_28.setTransform(-15.6,-2.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AhpAtQCcgNA3hM");
	this.shape_29.setTransform(-14,-6.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("AhQAhQBagPBHgy");
	this.shape_30.setTransform(-15,-12.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AhWAJQBaAKBTge");
	this.shape_31.setTransform(-18.3,-17.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AhXAAQBZARBWgW");
	this.shape_32.setTransform(-19.4,-19.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AhXgeQBYA1BXAI");
	this.shape_33.setTransform(-17,-21);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AgzhLQAIBoBfAv");
	this.shape_34.setTransform(-13.2,-26.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("AAFhVQgsBbA2BP");
	this.shape_35.setTransform(-6,-30.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AAmhNQhKAogBBz");
	this.shape_36.setTransform(5.5,-33.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AA7g1QhWgDgfBv");
	this.shape_37.setTransform(10.8,-33);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("ABKgjQhWggg9Bu");
	this.shape_38.setTransform(12.3,-31.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("ABBgXQhaghgnBZ");
	this.shape_39.setTransform(12.4,-30.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("AAzgtQhigFgDBh");
	this.shape_40.setTransform(4,-27.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("AAHhMQgvBVA2BE");
	this.shape_41.setTransform(-6,-24.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("AhJATQBhACAygo");
	this.shape_42.setTransform(-13.9,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},3).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},2).to({state:[{t:this.shape_40}]},19).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},2).to({state:[{t:this.shape_42}]},5).to({state:[{t:this.shape_42}]},2).wait(4));

	// Calque 7
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ah/A3IAAgDQAAgGADgDQAEgEAGAAQAEAAADACQABgNAJgJQALgLAPAAQANAAAKAIQAJgJAMgCQABgRAOgOQANgQAWAAQAVAAAPAQIAGAHQAGgCAHAAQAVAAAOAOQAPANAAAUQAAAQgJANgAhgghQgEgDAAgGQAAgEAEgFQAEgDAFAAQAFAAADADQAEAFAAAEQAAAGgEADQgDAEgFAAQgFAAgEgEgAgWghQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDAEgFAAQgEAAgEgEg");
	this.shape_43.setTransform(-3.2,4.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AB2A1IgBgCIAAAAIgCACIjNAAIAAgCIgBgCQAAgNAJgJQAJgIAMgBQAGABAFACQgDgHAAgIQAAgMAJgKQAKgJAOAAQAOAAAHAJQAFAFADAGQAKgJAOABIACAAIAAgGQAAgIAGgGQAGgGAIAAQAJAAAGAGIAEAFQAGgCAHAAQAUAAANANQAOAOAAASIAAACIAIgBQALAAAIAIQAIAIAAALIgBAIIgBACgAiJA1IgBgCQgCgDAAgFQAAgJAHgIQAHgGAKAAQAJAAAHAGQAHAIAAAJQAAAFgBADIgBACgAinA1IgBgCIAAgBQAAgDADgDQACgCAEAAQADAAADACQACADAAADIAAABIAAACgAhAgmQgCgBAAgEQAAgCACgCQACgCADAAQADAAACACQACACAAACQAAAEgCABQgCACgDAAQgDAAgCgCgAiKgmQgCgDAAgDQAAgDACgCQADgDADAAQADAAACADQADACAAADQAAADgDADQgCACgDAAQgDAAgDgCg");
	this.shape_44.setTransform(-8.2,4.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEA0IgDgCIgBACIhYAAIAAgFQAAgKAHgHQAHgHAKABQAKgBAHAHIAEAGIACgCQAFgFAGAAIAAAAIADgDIAAAAQgGgBgEgGQgHgGAAgIQAAgHAHgGQAGgHAIAAQAKAAAFAHQAEADACAFQAJgIAJAAQAKAAAIAHQAJgGALAAQALAAAJAGIAFgHQANgNAUAAQASAAANANQAOALAAAUQAAARgLAMgAiOA0IAAgBQAAgHAEgEQAEgEAHgBQAGABAFAEQAEAEAAAHIAAABgAAjgLQgDgEAAgFQAAgGADgDQAEgFAGAAQAFAAAEAFQAEADAAAGQAAAFgEAEQgEADgFAAQgGAAgEgDgAhJgpIgBgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIADgBIADABIACADIgCADQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgCgAiSgqQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIACgFIADgBIADABIACAFQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_45.setTransform(-8.1,4.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhkAxIgCgBIgCABIgHAAIgEgCIgBABIgBABIgLAAIgCgBQgCgCAAgEQAAgEACgDQAEgCADAAIAFABQAAgDACgCQAEgDAFAAIACAAIAFgGQAGgGAIAAQAIAAAHAGIACAEQAIgHAJAAQAFAAAFACQACgHAFgFQAJgHAMAAQAMAAAGAHQAGAFABAGIABAAQAHAAAGAFQACgIAHgGQAIgJAMAAQAFgLAJgJQASgSAZAAQAaAAASASQASASAAAXQAAAQgHAMgAirAxIgBgEQAAgGAEgFQAEgEAHAAQAGAAAFAEQAEAFAAAGIAAAEgAh9gQQgEgEAAgGQAAgFAEgEQAEgEAGAAQAGAAADAEQAEAEAAAFQAAAGgEAEQgDAEgGAAQgGAAgEgEgAgtgeQgEgDAAgFQAAgEAEgDQADgDAEAAQAEAAADADQAEADAAAEQAAAFgEADQgDADgEAAQgEAAgDgDg");
	this.shape_46.setTransform(-9.1,4.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().de(-2.5,-2.5,5,5);
	this.shape_47.setTransform(-0.8,8.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().de(-1.4,-1.4,2.9,2.9);
	this.shape_48.setTransform(-4.1,9.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().de(-2.4,-2.4,4.9,4.9);
	this.shape_49.setTransform(-10,8.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().de(-1.7,-1.7,3.4,3.4);
	this.shape_50.setTransform(-13.2,8.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().de(-1.3,-1.3,2.7,2.7);
	this.shape_51.setTransform(-19.2,9.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().de(-0.9,-0.9,1.9,1.9);
	this.shape_52.setTransform(-25.3,9.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().de(-0.7,-0.7,1.5,1.5);
	this.shape_53.setTransform(-23,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().de(-0.7,-0.7,1.4,1.4);
	this.shape_54.setTransform(-14.5,-1.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().de(-3.7,-3.7,7.4,7.4);
	this.shape_55.setTransform(3.4,6.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().de(-2,-2,4,4);
	this.shape_56.setTransform(10,9.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().de(-1.9,-1.9,3.8,3.8);
	this.shape_57.setTransform(2.6,9.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().de(-1.8,-1.8,3.6,3.6);
	this.shape_58.setTransform(-0.8,8.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().de(-2.4,-2.4,4.9,4.9);
	this.shape_59.setTransform(-15.7,8.7,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43}]},20).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},2).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},2).to({state:[{t:this.shape_45}]},2).to({state:[{t:this.shape_46}]},2).to({state:[{t:this.shape_55,p:{scaleX:1,scaleY:1,x:3.4,y:6.9}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:-14.5,y:-1.4}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:-23,y:0}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:-25.3,y:9.9}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:-19.2,y:9.3}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:-13.2,y:8.9}},{t:this.shape_49,p:{x:-10,y:8.3,scaleX:1,scaleY:1}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:-4.1,y:9.2}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:-0.8,y:8.1}}]},2).to({state:[{t:this.shape_55,p:{scaleX:0.64,scaleY:0.64,x:-4.6,y:8.4}},{t:this.shape_54,p:{scaleX:0.64,scaleY:0.64,x:-17.6,y:-5.9}},{t:this.shape_53,p:{scaleX:0.64,scaleY:0.64,x:-27.5,y:-3}},{t:this.shape_52,p:{scaleX:0.64,scaleY:0.64,x:-29.8,y:9.8}},{t:this.shape_51,p:{scaleX:0.64,scaleY:0.64,x:-23.7,y:9.3}},{t:this.shape_50,p:{scaleX:0.64,scaleY:0.64,x:-17.7,y:9}},{t:this.shape_59,p:{scaleX:0.64,scaleY:0.64,x:-15.7,y:8.7}},{t:this.shape_48,p:{scaleX:0.64,scaleY:0.64,x:-9.4,y:9.9}},{t:this.shape_47,p:{scaleX:0.64,scaleY:0.64,x:-7.3,y:9.2}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:-0.8,y:8.8}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:2.6,y:9.8}},{t:this.shape_49,p:{x:6.3,y:9.1,scaleX:1,scaleY:1}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:10,y:9.3}}]},2).to({state:[{t:this.shape_55,p:{scaleX:0.41,scaleY:0.41,x:-9,y:9}},{t:this.shape_54,p:{scaleX:0.512,scaleY:0.512,x:-17.5,y:-10.5}},{t:this.shape_53,p:{scaleX:0.512,scaleY:0.512,x:-29,y:-6}},{t:this.shape_51,p:{scaleX:0.64,scaleY:0.64,x:-26.7,y:9.9}},{t:this.shape_50,p:{scaleX:0.41,scaleY:0.41,x:-21.7,y:9.7}},{t:this.shape_59,p:{scaleX:0.512,scaleY:0.512,x:-20.1,y:9.4}},{t:this.shape_48,p:{scaleX:0.41,scaleY:0.41,x:-12,y:9.9}},{t:this.shape_47,p:{scaleX:0.41,scaleY:0.41,x:-10.7,y:9.5}},{t:this.shape_58,p:{scaleX:0.64,scaleY:0.64,x:-6.6,y:9.2}},{t:this.shape_57,p:{scaleX:0.64,scaleY:0.64,x:-4.4,y:9.9}},{t:this.shape_49,p:{x:-2,y:9.4,scaleX:0.64,scaleY:0.64}},{t:this.shape_56,p:{scaleX:0.64,scaleY:0.64,x:0.4,y:9.5}}]},2).to({state:[]},2).wait(13));

	// Calque 1
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0)").s().p("AlxFtIAArZILjAAIAALZg");
	this.shape_60.setTransform(3.9,-26.2,1.012,1.026);

	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-63.8,75,75.2);


// stage content:
(lib.hero_fail = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.hero_fail_1();
	this.instance.setTransform(42.2,35.9,1,1,0,0,0,8.6,-27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(37.5,37.4,75,75.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;