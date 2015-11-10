(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 400,
	fps: 40,
	color: "#FFCC00",
	manifest: []
};



// symbols:



(lib.dot = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.maze_intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 15
	this.instance = new lib.dot();
	this.instance.setTransform(18.4,-28.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({x:-18.1,y:-45.5},9).to({x:19.9,y:-44.5},10).to({y:-27.4},6).to({x:0.6},7).to({y:-8.4},11).to({x:-16.5},11).to({x:-19.3,y:-25.5},11).to({x:-18.4},3).to({x:-20.3},3).to({x:-18.4},3).to({x:-20.3},3).to({x:-19.3},2).to({x:-16.5,y:-8.4},14).to({x:18.6,y:-9.4},12).wait(1).to({x:-18.1,y:-45.5},0).to({x:18.4,y:-28.5},11).to({_off:true},26).wait(49));

	// Calque 2
	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(18.4,-20.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({y:-9.2},9).wait(97).to({y:-20.6},11).to({_off:true},26).wait(49));

	// Calque 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhvAAIDfAA");
	this.shape.setTransform(-0.6,-24.2);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("Ah5AAIDzAA");
	this.shape_1.setTransform(-1.5,-25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AiDAAIEHAA");
	this.shape_2.setTransform(-2.4,-26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AiOAAIEdAA");
	this.shape_3.setTransform(-3.2,-28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AiYAAIExAA");
	this.shape_4.setTransform(-4,-29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AiiAAIFFAA");
	this.shape_5.setTransform(-4.9,-30.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AisAAIFZAA");
	this.shape_6.setTransform(-5.8,-31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("Ai2AAIFtAA");
	this.shape_7.setTransform(-6.6,-33);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AjAAAIGBAA");
	this.shape_8.setTransform(-7.5,-34.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AjKAAIGVAA");
	this.shape_9.setTransform(-8.3,-35.5);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AjCAAIGFAA");
	this.shape_10.setTransform(-7.6,-34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("Ai6AAIF1AA");
	this.shape_11.setTransform(-6.9,-33.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AixAAIFjAA");
	this.shape_12.setTransform(-6.2,-32.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AipAAIFTAA");
	this.shape_13.setTransform(-5.5,-31.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("AihAAIFDAA");
	this.shape_14.setTransform(-4.8,-30.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AiZAAIEzAA");
	this.shape_15.setTransform(-4.1,-29.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AiQAAIEhAA");
	this.shape_16.setTransform(-3.4,-28.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AiIAAIERAA");
	this.shape_17.setTransform(-2.7,-27.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("AiAAAIEBAA");
	this.shape_18.setTransform(-2,-26.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("Ah4AAIDxAA");
	this.shape_19.setTransform(-1.3,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},28).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(28).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).wait(25).to({_off:true},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(37).to({_off:false},0).wait(97).to({_off:true},1).wait(85));

	// Calque 11
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("Ag9BbIB7i1");
	this.shape_20.setTransform(-5.7,-11.1);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("Ag2BHIBtiN");
	this.shape_21.setTransform(-6,-12.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AgvAzIBfhl");
	this.shape_22.setTransform(-6.4,-14.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AgoAfIBRg9");
	this.shape_23.setTransform(-6.7,-16.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1).p("AghALIBDgV");
	this.shape_24.setTransform(-7.1,-18.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1).p("AgagHIA1AP");
	this.shape_25.setTransform(-7.5,-19.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1).p("AgTgbIAnA3");
	this.shape_26.setTransform(-7.9,-21.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("AgMguIAZBd");
	this.shape_27.setTransform(-8.2,-23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("AgFhCIAMCF");
	this.shape_28.setTransform(-8.6,-25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AAABXIAAit");
	this.shape_29.setTransform(-8.9,-26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("AAAhWIAACt");
	this.shape_30.setTransform(-8.9,-26.8);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AgEhGIAJCN");
	this.shape_31.setTransform(-8.6,-25.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AgKg2IAVBt");
	this.shape_32.setTransform(-8.3,-23.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AgPglIAgBL");
	this.shape_33.setTransform(-8,-22.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AgVgVIArAr");
	this.shape_34.setTransform(-7.7,-21.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("AgbgFIA3AL");
	this.shape_35.setTransform(-7.5,-19.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AghAKIBDgT");
	this.shape_36.setTransform(-7.1,-18.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AgmAaIBNgz");
	this.shape_37.setTransform(-6.9,-16.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AgsAqIBZhT");
	this.shape_38.setTransform(-6.6,-15.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("AgxA6IBjhz");
	this.shape_39.setTransform(-6.3,-13.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("Ag3BLIBviV");
	this.shape_40.setTransform(-6,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},28).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(28).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).wait(25).to({_off:true},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(38).to({_off:false},0).wait(95).to({_off:true},1).wait(86));

	// Calque 10
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("AgxhaIBjC1");
	this.shape_41.setTransform(5.6,-11.1);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("Ag2hQIBtCh");
	this.shape_42.setTransform(7.1,-11.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(5,1).p("Ag7hGIB3CN");
	this.shape_43.setTransform(8.6,-12.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(5,1).p("AhBg7ICDB3");
	this.shape_44.setTransform(10.1,-13.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(5,1).p("AhGgxICNBj");
	this.shape_45.setTransform(11.6,-14.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(5,1).p("AhLgnICXBP");
	this.shape_46.setTransform(13.1,-15.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(5,1).p("AhQgdIChA7");
	this.shape_47.setTransform(14.6,-16.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(5,1).p("AhWgTICtAn");
	this.shape_48.setTransform(16.2,-16.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(5,1).p("AhbgJIC3AT");
	this.shape_49.setTransform(17.6,-17.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(5,1).p("AhgAAIDBAA");
	this.shape_50.setTransform(19.2,-18.6);
	this.shape_50._off = true;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(5,1).p("AhcgHIC5AP");
	this.shape_51.setTransform(17.9,-17.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(5,1).p("AhXgPICvAf");
	this.shape_52.setTransform(16.7,-17.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(5,1).p("AhTgYICnAx");
	this.shape_53.setTransform(15.5,-16.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(5,1).p("AhPggICfBB");
	this.shape_54.setTransform(14.2,-15.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(5,1).p("AhLgoICXBR");
	this.shape_55.setTransform(13,-15.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(5,1).p("AhGgwICNBh");
	this.shape_56.setTransform(11.7,-14.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(5,1).p("AhCg5ICFBz");
	this.shape_57.setTransform(10.5,-13.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(5,1).p("Ag+hBIB9CD");
	this.shape_58.setTransform(9.3,-13.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(5,1).p("Ag5hJIB0CT");
	this.shape_59.setTransform(8.1,-12.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(5,1).p("Ag1hSIBrCl");
	this.shape_60.setTransform(6.8,-11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41}]},28).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(28).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).wait(25).to({_off:true},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(37).to({_off:false},0).wait(97).to({_off:true},1).wait(85));

	// Calque 8
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(5,1).p("AA0CHIhnAAQgZAAgSgRQgRgSAAgZIAAiVQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAg");
	this.shape_61.setTransform(-0.6,-47.7);
	this.shape_61._off = true;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(5,1).p("AiDhUQAAgcAVgVQAVgTAcAAIB6AAQAeAAAUATQAVAVAAAcIAACpQAAAdgVAUQgUATgeAAIh6AAQgcAAgVgTQgVgUAAgdg");
	this.shape_62.setTransform(-0.5,-45.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(5,1).p("AiWheQAAggAXgWQAZgXAhAAICMAAQAhAAAYAXQAXAWAAAgIAAC+QAAAfgXAXQgYAWghAAIiMAAQghAAgZgWQgXgXAAgfg");
	this.shape_63.setTransform(-0.5,-43.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(5,1).p("AiqhpQAAgiAbgZQAbgZAlAAICfAAQAmAAAaAZQAbAZAAAiIAADTQAAAjgbAYQgaAZgmAAIifAAQglAAgbgZQgbgYAAgjg");
	this.shape_64.setTransform(-0.4,-41.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(5,1).p("Ai9hzQAAgmAegbQAegbAqAAICwAAQAqAAAdAbQAeAbAAAmIAADnQAAAmgeAbQgdAbgqAAIiwAAQgqAAgegbQgegbAAgmg");
	this.shape_65.setTransform(-0.3,-39.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(5,1).p("AjRh9QAAgpAhgeQAhgdAuAAIDDAAQAvAAAgAdQAhAeAAApIAAD7QAAAqghAdQggAdgvAAIjDAAQguAAghgdQghgdAAgqg");
	this.shape_66.setTransform(-0.2,-37);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(5,1).p("AjkiHQAAgtAjggQAlggAyAAIDVAAQAzAAAjAgQAkAgAAAtIAAEPQAAAtgkAgQgjAfgzAAIjVAAQgyAAglgfQgjggAAgtg");
	this.shape_67.setTransform(-0.1,-34.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(5,1).p("Aj4iSQAAgvAngjQAngiA3AAIDnAAQA3AAAnAiQAnAjAAAvIAAEkQAAAxgnAiQgnAig3AAIjnAAQg3AAgngiQgngiAAgxg");
	this.shape_68.setTransform(0,-32.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(5,1).p("AkLicQAAgyApgmQArgkA7AAID5AAQA8AAApAkQAqAmAAAyIAAE5QAAAzgqAlQgpAkg8AAIj5AAQg7AAgrgkQgpglAAgzg");
	this.shape_69.setTransform(0,-30.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(5,1).p("ACGErIkLAAQg/AAgugmQgtgoAAg3IAAlMQAAg2AtgoQAugmA/AAIELAAQBAAAAsAmQAuAoAAA2IAAFMQAAA3guAoQgsAmhAAAg");
	this.shape_70.setTransform(0.1,-28.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(5,1).p("AkfimQAAg2AtgoQAugmA/AAIELAAQBAAAAsAmQAuAoAAA2IAAFMQAAA3guAoQgsAmhAAAIkLAAQg/AAgugmQgtgoAAg3g");
	this.shape_71.setTransform(0.1,-28.3);
	this.shape_71._off = true;

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(5,1).p("AkPieQAAgzAqgmQAsgkA7AAID9AAQA8AAAqAkQArAmAAAzIAAE8QAAA0grAlQgqAlg8AAIj9AAQg7AAgsglQgqglAAg0g");
	this.shape_72.setTransform(0.1,-30.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(5,1).p("Aj/iVQAAgxAogkQApgiA4AAIDtAAQA5AAAoAiQAoAkAAAxIAAErQAAAxgoAkQgoAig5AAIjtAAQg4AAgpgiQgogkAAgxg");
	this.shape_73.setTransform(0,-31.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(5,1).p("AjviNQAAguAmgiQAmggA0AAIDfAAQA1AAAlAgQAmAiAAAuIAAEbQAAAugmAhQglAhg1AAIjfAAQg0AAgmghQgmghAAgug");
	this.shape_74.setTransform(-0.1,-33.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(5,1).p("AjfiFQAAgrAjggQAkgfAxAAIDPAAQAyAAAjAfQAjAgAAArIAAELQAAArgjAgQgjAfgyAAIjPAAQgxAAgkgfQgjggAAgrg");
	this.shape_75.setTransform(-0.2,-35.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(5,1).p("AjPh8QAAgpAggeQAigdAtAAIDBAAQAuAAAgAdQAhAeAAApIAAD5QAAAqghAcQggAeguAAIjBAAQgtAAgigeQgggcAAgqg");
	this.shape_76.setTransform(-0.2,-37.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(5,1).p("Ai/h0QAAgmAegcQAfgbAqAAICxAAQArAAAeAbQAeAcAAAmIAADpQAAAmgeAcQgeAbgrAAIixAAQgqAAgfgbQgegcAAgmg");
	this.shape_77.setTransform(-0.3,-38.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(5,1).p("AivhrQAAgkAbgaQAdgZAmAAICjAAQAnAAAbAZQAcAaAAAkIAADXQAAAkgcAaQgbAZgnAAIijAAQgmAAgdgZQgbgaAAgkg");
	this.shape_78.setTransform(-0.4,-40.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(5,1).p("AifhjQAAggAZgYQAZgYAjAAICUAAQAkAAAZAYQAZAYAAAgIAADHQAAAigZAXQgZAXgkAAIiUAAQgjAAgZgXQgZgXAAgig");
	this.shape_79.setTransform(-0.4,-42.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(5,1).p("AiPhbQAAgdAWgXQAXgVAgAAICFAAQAgAAAXAVQAWAXAAAdIAAC3QAAAfgWAVQgXAVggAAIiFAAQggAAgXgVQgWgVAAgfg");
	this.shape_80.setTransform(-0.5,-44.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(5,1).p("Ah/hSQAAgcAUgUQAUgTAcAAIB3AAQAcAAAUATQAUAUAAAcIAACmQAAAbgUAUQgUATgcAAIh3AAQgcAAgUgTQgUgUAAgbg");
	this.shape_81.setTransform(-0.6,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61}]},28).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(28).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).wait(25).to({_off:true},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(38).to({_off:false},0).wait(95).to({_off:true},1).wait(86));

	// Calque 9
	this.instance_2 = new lib.dot();
	this.instance_2.setTransform(18.4,-20.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AiiE9QgMgHAAgPQAAgGADgGIBnigQACgDAAgDQAAgHgFgFQgFgFgGAAIhFAAQgKAAgHgHQgGgHAAgKQAAgKAGgIQAHgHAKAAIDdAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgHAHgKAAIhHAAIBcC0QADAGAAAHQAAAOgMAHQgJAFgKgDQgJgDgFgIIhMiZIhmCcQgFAIgKADIgGABQgHAAgFgDgACFAzQgHgHAAgKQAAgKAHgIQAIgHAKAAQAKAAAIAHQAGAIABAKQgBAKgGAHQgIAHgKAAQgKAAgIgHgAhhgBQggAAgXgXQgXgXABghIAAihQgBggAXgXQAXgXAgAAIBxAAQAhAAAWAXQAXAXAAAgIAAChQAAAhgXAXQgWAXghAAgAh0kEQgKALAAAOIAACVQAAAPAKAKQAKALAPAAIBlAAQAPAAAKgLQALgKAAgPIAAiVQAAgOgLgLQgKgKgPAAIhlAAQgPAAgKAKg");
	this.shape_82.setTransform(3.3,-32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.instance_2}]}).to({state:[]},28).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-64.1,35.2,64.2);


// stage content:



(lib.maze_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:167});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_142 = function() {
		window['navigation'].intro_motion_stopped();
	}
	this.frame_167 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(142).call(this.frame_142).wait(25).call(this.frame_167).wait(4));

	// Calque 1
	this.instance = new lib.maze_intro("synched",0);
	this.instance.setTransform(439.7,286.9,3.173,3.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(844.2,283.4,111.7,203.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;