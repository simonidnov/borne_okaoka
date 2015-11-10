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



(lib.where_capsule_intro = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(12,1).p("ADhDTInBAAIAAjjQAHhKA3g5QA+g9BVgCIAfAAQBWACA9A9QA3A5AHBKg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-27.1,57,54.3);


(lib.dot = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.where_motion_intrp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 15
	this.instance = new lib.dot();
	this.instance.setTransform(18.4,-28.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({rotation:-90,x:-3.8,y:-29.3},13).wait(1).to({scaleX:2,scaleY:2,x:-8.9,y:-3.5},13).wait(38).to({x:-0.1},1).wait(44).to({_off:true},1).wait(60));

	// Calque 2
	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(18.4,-20.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({rotation:-90,x:4.1,y:-29.3},13).wait(1).to({scaleX:2,scaleY:2,x:6.9,y:-3.5},13).wait(38).to({_off:true},1).wait(105));

	// Calque 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhvAAIDfAA");
	this.shape.setTransform(-0.6,-24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AhxAAIDjAA");
	this.shape_1.setTransform(-0.6,-24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("AhzAAIDnAA");
	this.shape_2.setTransform(-0.6,-24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("Ah1AAIDrAA");
	this.shape_3.setTransform(-0.6,-24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("Ah3AAIDvAA");
	this.shape_4.setTransform(-0.7,-24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("Ah5AAIDzAA");
	this.shape_5.setTransform(-0.7,-24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("Ah7AAID3AA");
	this.shape_6.setTransform(-0.7,-24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("Ah9AAID7AA");
	this.shape_7.setTransform(-0.7,-24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("Ah/AAID/AA");
	this.shape_8.setTransform(-0.7,-24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AiBAAIEDAA");
	this.shape_9.setTransform(-0.7,-24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AiDAAIEHAA");
	this.shape_10.setTransform(-0.7,-24.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AiFAAIELAA");
	this.shape_11.setTransform(-0.7,-24.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AiHAAIEPAA");
	this.shape_12.setTransform(-0.7,-24.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AiJAAIETAA");
	this.shape_13.setTransform(-0.7,-24.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5.6,1).p("AiUAAIEpAA");
	this.shape_14.setTransform(-0.9,-21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(6.1,1).p("AifAAIE/AA");
	this.shape_15.setTransform(-1,-19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(6.6,1).p("AipAAIFTAA");
	this.shape_16.setTransform(-1.2,-17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(7.2,1).p("Ai0AAIFpAA");
	this.shape_17.setTransform(-1.3,-14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(7.7,1).p("Ai/AAIF/AA");
	this.shape_18.setTransform(-1.5,-12.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(8.3,1).p("AjJAAIGTAA");
	this.shape_19.setTransform(-1.7,-10.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(8.8,1).p("AjUAAIGpAA");
	this.shape_20.setTransform(-1.8,-7.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(9.3,1).p("AjfAAIG/AA");
	this.shape_21.setTransform(-2,-5.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(9.9,1).p("AjpAAIHTAA");
	this.shape_22.setTransform(-2.1,-3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(10.4,1).p("Aj0AAIHpAA");
	this.shape_23.setTransform(-2.3,-0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(10.9,1).p("Aj/AAIH/AA");
	this.shape_24.setTransform(-2.4,1.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(11.5,1).p("AkKAAIIVAA");
	this.shape_25.setTransform(-2.6,3.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(12,1).p("AkUAAIIpAA");
	this.shape_26.setTransform(-2.7,6.3);
	this.shape_26._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},28).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[]},26).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(55).to({_off:false},0).wait(90).to({_off:true},26).wait(28));

	// Calque 11
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1).p("Ag9BbIB7i1");
	this.shape_27.setTransform(-5.7,-11.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1).p("Ag4BTIBxil");
	this.shape_28.setTransform(-5.2,-12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1).p("AgzBKIBniT");
	this.shape_29.setTransform(-4.7,-12.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1).p("AgvBCIBfiD");
	this.shape_30.setTransform(-4.2,-13.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,1).p("AgqA6IBVhz");
	this.shape_31.setTransform(-3.7,-14.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1).p("AglAyIBLhj");
	this.shape_32.setTransform(-3.3,-15.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1).p("AggApIBBhS");
	this.shape_33.setTransform(-2.8,-16.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1).p("AgbAhIA3hB");
	this.shape_34.setTransform(-2.3,-17.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,1).p("AgXAZIAvgx");
	this.shape_35.setTransform(-1.8,-18.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1).p("AgSARIAlgh");
	this.shape_36.setTransform(-1.4,-19.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,1).p("AgNAIIAbgQ");
	this.shape_37.setTransform(-0.9,-20.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1).p("AgIABIARgB");
	this.shape_38.setTransform(-0.4,-21.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,1).p("AgDgGIAHAN");
	this.shape_39.setTransform(0.1,-22.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1).p("AAAAPIAAgd");
	this.shape_40.setTransform(0.6,-23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},28).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[]},1).wait(157));

	// Calque 10
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,1).p("AgxhaIBjC1");
	this.shape_41.setTransform(5.6,-11.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,1).p("AgthSIBbCl");
	this.shape_42.setTransform(5.2,-12);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(5,1).p("AgphJIBTCT");
	this.shape_43.setTransform(4.8,-12.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(5,1).p("AglhBIBLCD");
	this.shape_44.setTransform(4.4,-13.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(5,1).p("Aghg5IBDBz");
	this.shape_45.setTransform(4,-14.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(5,1).p("AgdgxIA8Bj");
	this.shape_46.setTransform(3.7,-15.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(5,1).p("AgZgpIA0BS");
	this.shape_47.setTransform(3.3,-16.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(5,1).p("AgWggIAtBB");
	this.shape_48.setTransform(2.9,-17.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(5,1).p("AgSgYIAlAx");
	this.shape_49.setTransform(2.5,-18.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(5,1).p("AgOgQIAdAh");
	this.shape_50.setTransform(2.1,-19.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(5,1).p("AgKgIIAVAQ");
	this.shape_51.setTransform(1.7,-20.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(5,1).p("AgGAAIANAB");
	this.shape_52.setTransform(1.3,-21.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(5,1).p("AgCAHIAFgN");
	this.shape_53.setTransform(0.9,-22.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(5,1).p("AAAgOIAAAd");
	this.shape_54.setTransform(0.6,-23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41}]},28).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[]},1).wait(157));

	// Calque 8
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(5,1).p("AA0CHIhnAAQgZAAgSgRQgRgSAAgZIAAiVQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZIAACVQAAAZgRASQgSARgZAAg");
	this.shape_55.setTransform(-0.6,-47.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(5,1).p("AhvhFQAAgYARgSQATgSAXAAIBmAAQAfAFALAKQAHAHAFAIQAHAMABAOQAAALAAAMIAAB9QAAATgIAPQgEADgEAEQgSAOgZAAIhmAAQgYAAgSgOQgOgLgFgOQgBgGAAgHg");
	this.shape_56.setTransform(-0.6,-48.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(5,1).p("AhvhAQAAgYAQgSQAUgRAVgBIBlAAQAfAEAMAKQAHAGAFAIQAIALABAOQABALAAALIAAB7QAAATgHAPQgDADgFADQgTALgYAAIhlAAQgXAAgTgLQgOgJgIgLQAAgGAAgGg");
	this.shape_57.setTransform(-0.6,-48.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(5,1).p("Ahvg7QAAgYAQgRQATgSAVgBIBkAAQAfADAMAJQAHAFAFAIQAIALADAOQABAKAAALIAAB6QAAASgFAPQgEADgEACQgUAIgYAAIhjAAQgXAAgTgIQgPgHgKgIQAAgGAAgGg");
	this.shape_58.setTransform(-0.6,-49.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(5,1).p("Ahvg2QAAgXAQgSQATgSAVgBIBhAAQAfACAMAIQAHAFAGAHQAJALADANQACAKAAALIAAB5QAAARgDAQQgFABgEABQgVAGgXAAIhiAAQgWAAgTgGQgQgEgMgGQAAgFAAgGg");
	this.shape_59.setTransform(-0.6,-49.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(5,1).p("AhvgxQAAgXAPgRQATgSAUgCIBhAAQAeABANAHQAHAFAHAHQAJAKADANQADAKAAALIAAB2QAAARgCAQQgEABgFAAQgVADgXAAIhhAAQgUAAgVgDQgPgCgPgDQAAgFAAgGg");
	this.shape_60.setTransform(-0.6,-50.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(5,1).p("ABwBpIjfAAIAAiVQAAgZARgSQASgRAZAAIBnAAQAZAAASARQARASAAAZg");
	this.shape_61.setTransform(-0.6,-50.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(5,1).p("AhvgnQAAgaAUgUQATgTAbAAIBbAAQAbAAAUATQATAUAAAaIAACQIjfAAg");
	this.shape_62.setTransform(-0.6,-50.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(5,1).p("AhvgiQABgcAUgVQAWgVAdAAIBPAAQAeAAAVAVQAUAVABAcIAACLIjfAAg");
	this.shape_63.setTransform(-0.6,-50.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(5,1).p("AhvgcQABgeAWgXQAYgXAgAAIBBAAQAhAAAXAXQAWAXABAeIAACFIjfAAg");
	this.shape_64.setTransform(-0.6,-50.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(5,1).p("AhvgXQACggAXgYQAagZAjAAIA0AAQAjAAAZAZQAXAYACAgIAACAIjfAAg");
	this.shape_65.setTransform(-0.6,-50.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(5,1).p("AhvgSQACghAZgaQAbgbAmAAIAnAAQAmAAAbAbQAZAaACAhIAAB7IjfAAg");
	this.shape_66.setTransform(-0.6,-50.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(5,1).p("AhvgNQADgjAagbQAdgcAogBIAbAAQApABAcAcQAaAbADAjIAAB2IjfAAg");
	this.shape_67.setTransform(-0.6,-50.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(5,1).p("ABwBpIjfAAIAAhwQADglAcgdQAfgeArgBIAOAAQArABAeAeQAcAdADAlg");
	this.shape_68.setTransform(-0.6,-50.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(5.6,1).p("Ah4gIQAEgoAdgeQAighAugBIAPAAQAvABAhAhQAdAeAEAoIAAB5IjxAAg");
	this.shape_69.setTransform(-0.8,-50.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(6.1,1).p("AiBgJQAEgrAgghQAkgjAxgBIAQAAQAyABAjAjQAhAhAEArIAACCIkDAAg");
	this.shape_70.setTransform(-0.9,-50.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(6.6,1).p("AiJgJQAEguAigjQAmglA0gCIASAAQA2ACAlAlQAiAjAEAuIAACLIkTAAg");
	this.shape_71.setTransform(-1.1,-49.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(7.2,1).p("AiSgKQAFgwAkgmQAognA4gCIATAAQA4ACAoAnQAkAmAFAwIAACUIklAAg");
	this.shape_72.setTransform(-1.2,-49.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(7.7,1).p("AibgLQAFgzAngnQAqgrA8gBIAUAAQA7ABArArQAmAnAFAzIAACdIk3AAg");
	this.shape_73.setTransform(-1.4,-49.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(8.3,1).p("AijgMQAFg2ApgpQAtgtA+gBIAVAAQA/ABAtAtQAoApAFA2IAACmIlHAAg");
	this.shape_74.setTransform(-1.5,-48.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(8.8,1).p("AisgMQAGg5AqgsQAwgvBBgBIAXAAQBCABAvAvQAqAsAFA5IAACuIlYAAg");
	this.shape_75.setTransform(-1.7,-48.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(9.3,1).p("Ai0gMQAFg8AtguQAygyBEgBIAYAAQBGABAxAyQAsAuAGA8IAAC2IlpAAg");
	this.shape_76.setTransform(-1.8,-48.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(9.9,1).p("Ai9gOQAGg+AugwQA1g0BIgCIAZAAQBJACA0A0QAuAwAGA+IAADBIl7AAg");
	this.shape_77.setTransform(-2,-48);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(10.4,1).p("AjGgOQAHhBAwgzQA3g2BMgCIAaAAQBMACA2A2QAwAzAHBBIAADJImNAAg");
	this.shape_78.setTransform(-2.1,-47.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(10.9,1).p("AjOgOQAHhFAyg0QA6g5BOgCIAcAAQBPACA4A5QAzA0AGBFIAADRImdAAg");
	this.shape_79.setTransform(-2.3,-47.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(11.5,1).p("AjXgPQAHhHA1g3QA7g7BSgCIAdAAQBTACA6A7QA1A3AHBHIAADaImvAAg");
	this.shape_80.setTransform(-2.4,-47.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(12,1).p("ADhDTInBAAIAAjjQAIhKA3g5QA+g9BVgCIAeAAQBWACA9A9QA3A5AHBKg");
	this.shape_81.setTransform(-2.6,-46.8);
	this.shape_81._off = true;

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(12,1).p("AjggQQAIhKA3g5QA+g9BVgCIAeAAQBWACA9A9QA3A5AHBKIAADjInBAAg");
	this.shape_82.setTransform(-2.6,-46.8);
	this.shape_82._off = true;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(12,1).p("AjjgMQAEhKA0g7QA7g+BUgGIAegBQBWgBA/A6QA5A2AJBKIAJDhIm9ARg");
	this.shape_83.setTransform(-3.5,-27.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(12,1).p("AjogIQABhKAyg8QA5hBBTgJIAggCQBTgFBBA3QA6A0ANBJIASDgIm6Aig");
	this.shape_84.setTransform(-4.3,-30.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(12,1).p("AjrgFQgChJAvg+QA1hDBTgMIAggEQBSgIBDA1QA9AxAPBIIAbDeIm3A1g");
	this.shape_85.setTransform(-5.2,-32.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(12,1).p("AjvAAQgFhJAthAQAyhFBTgPIAfgFQBSgMBFAyQA+AvASBHIAkDcIm0BGg");
	this.shape_86.setTransform(-6.1,-35.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(12,1).p("AjyACQgIhHAqhBQAwhHBRgTIAfgGQBRgOBHAvQBBAsAVBGIAsDbImwBXg");
	this.shape_87.setTransform(-7.1,-38.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(12,1).p("Aj2AHQgKhHAnhDQAthJBRgWIAfgHQBQgSBJAsQBCAqAYBFIA1DaImtBog");
	this.shape_88.setTransform(-8,-41.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(12,1).p("Aj4AMQgOhGAlhFQAqhLBQgZIAfgJQBQgVBLApQBEAoAbBEIA9DYImpB6g");
	this.shape_89.setTransform(-9,-43.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(12,1).p("Aj7ASQgRhHAjhGQAnhNBQgdIAegJQBRgZBLAmQBGAlAeBEIBGDWImmCMg");
	this.shape_90.setTransform(-10,-46.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(12,1).p("AD1BQImjCdIhQjWQgThGAfhJQAlhOBPggIAegLQBRgcBNAjQBHAjAhBDg");
	this.shape_91.setTransform(-11.9,-49.5,1,1,0,0,0,-0.9,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(12,1).p("Aj+AXQgThGAfhJQAlhOBPggIAegLQBRgcBNAjQBHAjAhBDIBPDUImjCdg");
	this.shape_92.setTransform(-11,-49.5);
	this.shape_92._off = true;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(12,1).p("Aj8ASQgRhGAihHQAnhNBPgdIAegKQBSgZBLAlQBGAlAeBEIBJDVImnCPg");
	this.shape_93.setTransform(-10.2,-47.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(12,1).p("Aj5AOQgPhGAkhGQAphLBQgbIAegJQBQgWBMAoQBEAmAcBFIBBDXImoCAg");
	this.shape_94.setTransform(-9.4,-44.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(12,1).p("Aj3AKQgMhHAmhEQArhKBRgYIAegIQBRgUBKArQBDApAZBEIA6DZImrByg");
	this.shape_95.setTransform(-8.6,-42.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(12,1).p("Aj1AGQgJhHAohDQAthIBSgVIAegHQBRgRBJAtQBBAqAXBGIAzDaImuBkg");
	this.shape_96.setTransform(-7.8,-40.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(12,1).p("AjyACQgIhHArhBQAwhHBRgSIAfgGQBSgPBGAvQBAAtAVBGIAsDbImxBWg");
	this.shape_97.setTransform(-7,-38.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(12,1).p("AjvAAQgFhJAshAQAyhFBTgPIAfgFQBRgMBGAyQA+AuATBHIAkDdImzBHg");
	this.shape_98.setTransform(-6.2,-35.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(12,1).p("AjsgDQgDhKAug+QA1hEBTgMIAfgEQBSgJBEAzQA9AxAQBIIAdDdIm1A5g");
	this.shape_99.setTransform(-5.5,-33.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(12,1).p("AjpgHQAAhJAwg9QA3hCBUgKIAfgDQBTgGBCA2QA7AyAOBJIAWDfIm4Aqg");
	this.shape_100.setTransform(-4.8,-31.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(12,1).p("AjmgKQAChKAzg7QA5hBBUgHIAggCQBTgEBAA5QA6A1AMBIIAODhIm7Acg");
	this.shape_101.setTransform(-4,-29.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(12,1).p("AjjgNQAFhKA1g6QA7g/BVgEIAegBQBVgBA/A7QA4A2AKBKIAHDiIm9AOg");
	this.shape_102.setTransform(-3.3,-27.1);

	this.instance_2 = new lib.where_capsule_intro();
	this.instance_2.setTransform(-2.6,-24.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55}]},28).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},6).to({state:[]},26).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(55).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false,y:-24.9},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(30).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(56).to({_off:false},0).wait(13).to({_off:true},1).wait(1).to({_off:false,y:-45.1},0).wait(1).to({y:-43.4},0).wait(1).to({y:-41.7},0).wait(1).to({y:-40.1},0).wait(1).to({y:-38.4},0).wait(1).to({y:-36.7},0).wait(1).to({y:-35},0).wait(1).to({y:-33.3},0).wait(1).to({y:-31.6},0).wait(1).to({y:-30},0).wait(1).to({y:-28.3},0).wait(1).to({y:-26.6},0).to({_off:true},1).wait(1).to({_off:false,y:-24.9},0).wait(8).to({_off:true},1).wait(32).to({_off:false},0).wait(12).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_92).wait(103).to({_off:false},0).wait(9).to({_off:true},1).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({_off:false},0).to({rotation:30,x:23.6,y:-64.7},6).to({_off:true},26).wait(28));

	// Calque 9
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AiiE9QgMgHAAgPQAAgGADgGIBnigQACgDAAgDQAAgHgFgFQgFgFgGAAIhFAAQgKAAgHgHQgGgHAAgKQAAgKAGgIQAHgHAKAAIDdAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgHAHgKAAIhHAAIBcC0QADAGAAAHQAAAOgMAHQgJAFgKgDQgJgDgFgIIhMiZIhmCcQgFAIgKADIgGABQgHAAgFgDgACFCEQgHgIAAgKQAAgKAHgHQAIgHAKAAQAKAAAIAHQAGAHABAKQgBAKgGAIQgIAHgKAAQgKAAgIgHgACFAzQgHgHAAgKQAAgKAHgIQAIgHAKAAQAKAAAIAHQAGAIABAKQgBAKgGAHQgIAHgKAAQgKAAgIgHgAhhgBQggAAgXgXQgXgXABghIAAihQgBggAXgXQAXgXAgAAIBxAAQAhAAAWAXQAXAXAAAgIAAChQAAAhgXAXQgWAXghAAgAh0kEQgKALAAAOIAACVQAAAPAKAKQAKALAPAAIBlAAQAPAAAKgLQALgKAAgPIAAiVQAAgOgLgLQgKgKgPAAIhlAAQgPAAgKAKg");
	this.shape_103.setTransform(3.3,-32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_103).to({_off:true},28).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-64.1,35.2,64.2);


// stage content:



(lib.where_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:169});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_144 = function() {
		window['navigation'].intro_motion_stopped();
	}
	this.frame_169 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(144).call(this.frame_144).wait(25).call(this.frame_169).wait(2));

	// Calque 1
	this.instance = new lib.where_motion_intrp("synched",0);
	this.instance.setTransform(439.7,286.9,3.173,3.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(844.2,283.4,111.7,203.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;