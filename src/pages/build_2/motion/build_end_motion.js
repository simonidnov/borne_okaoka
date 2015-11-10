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


(lib.equilibriumhead = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAG5QirAAh8hvQh8hxgUisQgQi2BwiMQB0iLC0gVIAvgDQCrgBB8B1QCABvAQCpIAAADQAUCzh0CMQh4CUi0APgAjPhxQh4ANAACJQAQB8BcBUQBgBVB7AAIAfgFQB8gLBQhZIgUAFIggAAQhwAAhEhQQgyg9gIhQQgWh6huAAIgUAAgAgPiYQA6A7AMBYQAcCGB4gPQBMgIAgg9QAUgrgIgjQgMh8hchUQhchTh/AAIgjAAQhwALhYBZIAQAAIAfgCQBrAABCBKgAjTBRQg8gTAMg+QAIgcAcgNQAYgMAcAJQAcAHAMAYQAMAWgIAcQgPAxgpAAQgNAAgPgFgACnA5QgcgHgMgdQgMgVAIgcQAUhBBAAVQAcAHAMAdQAMAXgIAbQgPAwgpAAQgNAAgPgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.2,-44.2,88.5,88.4);


(lib.equilibriumdot = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9AAQABgYATgRQARgTAYgBQAZABARATQATARABAYQAAA+g+AAQg9AAAAg+g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-6.2,12.4,12.4);


(lib.equilibre_planche = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("A4IAAMAwRAAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161,-6.5,322,13);


(lib.build_en_motion_balance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.equilibriumhead();
	this.instance.setTransform(1675.2,-85.5,1,1,-8.5,0,0,0,44.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:1685.2},3).to({x:1675.2},8).to({x:1685.2},9).to({x:1675.2},14).to({x:1685.2},15).to({x:1675.2},17).to({x:1685.2},18).to({x:1675.2},24).to({x:1685.2},31).to({_off:true},19).wait(129));

	// Calque 2
	this.instance_1 = new lib.equilibriumdot();
	this.instance_1.setTransform(1723.2,-109.5,1,1,-45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({rotation:-15,x:1732.7,y:-97.1},3).to({rotation:-45,x:1723.2,y:-109.5},8).to({rotation:-15,x:1732.7,y:-97.1},9).to({rotation:-45,x:1723.2,y:-109.5},14).to({rotation:-15,x:1732.7,y:-97.1},15).to({rotation:-45,x:1723.2,y:-109.5},17).to({rotation:-15,x:1732.7,y:-97.1},18).to({rotation:-45,x:1723.2,y:-109.5},24).to({rotation:-15,x:1732.7,y:-97.1},31).to({_off:true},19).wait(129));

	// Calque 3
	this.instance_2 = new lib.equilibriumdot();
	this.instance_2.setTransform(1737.4,-95.4,1,1,-45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({rotation:-15,x:1737.9,y:-77.8},3).to({rotation:-45,x:1737.4,y:-95.4},8).to({rotation:-15,x:1737.9,y:-77.8},9).to({rotation:-45,x:1737.4,y:-95.4},14).to({rotation:-15,x:1737.9,y:-77.8},15).to({rotation:-45,x:1737.4,y:-95.4},17).to({rotation:-15,x:1737.9,y:-77.8},18).to({rotation:-45,x:1737.4,y:-95.4},24).to({rotation:-15,x:1737.9,y:-77.8},31).to({_off:true},19).wait(129));

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBWQEtAMEqi4");
	this.shape.setTransform(1689.6,-76.1);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBRQEtANEqiv");
	this.shape_1.setTransform(1690.2,-75.7);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBMQEtANEqil");
	this.shape_2.setTransform(1690.7,-75.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBIQEtAMEqib");
	this.shape_3.setTransform(1691.3,-74.7);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBNQEtAMEqim");
	this.shape_4.setTransform(1690.7,-75.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBSQEtANEqix");
	this.shape_5.setTransform(1690,-75.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBYQEtAMEqi7");
	this.shape_6.setTransform(1689.4,-76.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBdQEtAMEqjG");
	this.shape_7.setTransform(1688.8,-76.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBiQEtANEqjR");
	this.shape_8.setTransform(1688.2,-77.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBnQEtANEqjb");
	this.shape_9.setTransform(1687.5,-77.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBtQEtAMEqjm");
	this.shape_10.setTransform(1686.9,-78.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrByQEtANEqjx");
	this.shape_11.setTransform(1686.3,-79);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBtQEtANEqjn");
	this.shape_12.setTransform(1686.8,-78.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBpQEtAMEqjd");
	this.shape_13.setTransform(1687.4,-78);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBkQEtAMEqjU");
	this.shape_14.setTransform(1687.9,-77.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBfQEtANEqjL");
	this.shape_15.setTransform(1688.5,-77.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBbQEtAMEqjB");
	this.shape_16.setTransform(1689.1,-76.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBLQEtAMEqih");
	this.shape_17.setTransform(1690.9,-75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBOQEtAMEqin");
	this.shape_18.setTransform(1690.6,-75.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBRQEtAMEqit");
	this.shape_19.setTransform(1690.2,-75.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBUQEtAMEqi0");
	this.shape_20.setTransform(1689.8,-75.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBXQEtAMEqi6");
	this.shape_21.setTransform(1689.5,-76.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBaQEtAMEqjA");
	this.shape_22.setTransform(1689.1,-76.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBgQEtAMEqjM");
	this.shape_23.setTransform(1688.4,-77.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBjQEtAMEqjS");
	this.shape_24.setTransform(1688.1,-77.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBmQEtAMEqjY");
	this.shape_25.setTransform(1687.7,-77.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBpQEtANEqjf");
	this.shape_26.setTransform(1687.3,-78.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBsQEtANEqjl");
	this.shape_27.setTransform(1687,-78.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBvQEtANEqjr");
	this.shape_28.setTransform(1686.6,-78.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBqQEtAMEqjf");
	this.shape_29.setTransform(1687.3,-78.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBnQEtAMEqja");
	this.shape_30.setTransform(1687.6,-77.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBhQEtANEqjP");
	this.shape_31.setTransform(1688.3,-77.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBeQEtANEqjJ");
	this.shape_32.setTransform(1688.6,-77);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBbQEtANEqjD");
	this.shape_33.setTransform(1688.9,-76.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBZQEtAMEqi9");
	this.shape_34.setTransform(1689.3,-76.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBTQEtAMEqiy");
	this.shape_35.setTransform(1689.9,-75.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBQQEtANEqit");
	this.shape_36.setTransform(1690.3,-75.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBNQEtANEqin");
	this.shape_37.setTransform(1690.6,-75.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBKQEtANEqih");
	this.shape_38.setTransform(1690.9,-75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBNQEtAMEqil");
	this.shape_39.setTransform(1690.7,-75.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBPQEtANEqir");
	this.shape_40.setTransform(1690.4,-75.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBSQEtAMEqiv");
	this.shape_41.setTransform(1690.1,-75.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBUQEtANEqi1");
	this.shape_42.setTransform(1689.8,-76);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBXQEtAMEqi5");
	this.shape_43.setTransform(1689.5,-76.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBZQEtANEqi/");
	this.shape_44.setTransform(1689.2,-76.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBcQEtAMEqjD");
	this.shape_45.setTransform(1688.9,-76.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBhQEtAMEqjN");
	this.shape_46.setTransform(1688.3,-77.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBjQEtANEqjT");
	this.shape_47.setTransform(1688,-77.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBmQEtAMEqjX");
	this.shape_48.setTransform(1687.7,-77.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBoQEtANEqjd");
	this.shape_49.setTransform(1687.5,-78);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBrQEtAMEqjh");
	this.shape_50.setTransform(1687.2,-78.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBwQEtAMEqjr");
	this.shape_51.setTransform(1686.6,-78.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBwQEtAMEqjs");
	this.shape_52.setTransform(1686.6,-78.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBrQEtANEqjj");
	this.shape_53.setTransform(1687.1,-78.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBmQEtANEqjZ");
	this.shape_54.setTransform(1687.7,-77.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBiQEtAMEqjP");
	this.shape_55.setTransform(1688.2,-77.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBYQEtANEqi9");
	this.shape_56.setTransform(1689.3,-76.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBTQEtANEqiz");
	this.shape_57.setTransform(1689.9,-75.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBPQEtAMEqip");
	this.shape_58.setTransform(1690.4,-75.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBKQEtAMEqig");
	this.shape_59.setTransform(1691,-74.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBJQEtANEqif");
	this.shape_60.setTransform(1691.1,-74.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBLQEtANEqij");
	this.shape_61.setTransform(1690.9,-75.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBfQEtAMEqjJ");
	this.shape_62.setTransform(1688.6,-77);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBgQEtANEqjN");
	this.shape_63.setTransform(1688.4,-77.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBvQEtAMEqjp");
	this.shape_64.setTransform(1686.7,-78.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBwQEtANEqjt");
	this.shape_65.setTransform(1686.5,-78.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBxQEtAMEqju");
	this.shape_66.setTransform(1686.4,-78.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBuQEtANEqjp");
	this.shape_67.setTransform(1686.8,-78.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBtQEtAMEqjl");
	this.shape_68.setTransform(1686.9,-78.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBqQEtAMEqjg");
	this.shape_69.setTransform(1687.2,-78.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBkQEtANEqjV");
	this.shape_70.setTransform(1687.9,-77.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBfQEtAMEqjK");
	this.shape_71.setTransform(1688.5,-77);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBeQEtAMEqjH");
	this.shape_72.setTransform(1688.7,-76.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBcQEtANEqjF");
	this.shape_73.setTransform(1688.9,-76.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBbQEtAMEqjC");
	this.shape_74.setTransform(1689,-76.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBVQEtANEqi3");
	this.shape_75.setTransform(1689.7,-76.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBTQEtAMEqix");
	this.shape_76.setTransform(1690,-75.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBQQEtAMEqis");
	this.shape_77.setTransform(1690.3,-75.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBOQEtANEqip");
	this.shape_78.setTransform(1690.5,-75.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBMQEtAMEqij");
	this.shape_79.setTransform(1690.8,-75.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBJQEtAMEqie");
	this.shape_80.setTransform(1691.1,-74.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBIQEtANEqid");
	this.shape_81.setTransform(1691.2,-74.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBMQEtAMEqik");
	this.shape_82.setTransform(1690.8,-75.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBPQEtAMEqiq");
	this.shape_83.setTransform(1690.4,-75.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBQQEtAMEqir");
	this.shape_84.setTransform(1690.3,-75.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkrBSQEtAMEqiw");
	this.shape_85.setTransform(1690.1,-75.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9,p:{x:1687.5}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12,p:{x:1686.8}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{x:1687}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27,p:{x:1686.9}}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33,p:{x:1688.9}}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36,p:{x:1690.3}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38,p:{x:1690.9}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_38,p:{x:1691}}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_12,p:{x:1686.9}}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_12,p:{x:1686.8}}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61,p:{x:1690.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_36,p:{x:1690.2}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_33,p:{x:1689}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_9,p:{x:1687.5}}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_9,p:{x:1687.6}}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_38,p:{x:1691}}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_38,p:{x:1691}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_61,p:{x:1690.8}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_36,p:{x:1690.3}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_76}]},1).to({state:[]},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(7).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false,x:1690.1},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(9).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(34).to({_off:false},0).to({_off:true},1).wait(54).to({_off:false},0).to({_off:true},1).wait(147));

	// Calque 5
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgOEyQANjuAQl1");
	this.shape_86.setTransform(1688.2,-37.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgPE2QAMjvATl8");
	this.shape_87.setTransform(1688.4,-37.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgRE6QAMjvAXmE");
	this.shape_88.setTransform(1688.6,-38.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTE9QANjuAamL");
	this.shape_89.setTransform(1688.7,-38.4);
	this.shape_89._off = true;

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgKFAQALjvAKmQ");
	this.shape_90.setTransform(1687.9,-38.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgCFCQAKjugHmV");
	this.shape_91.setTransform(1687.1,-38.9);
	this.shape_91._off = true;

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAOFEQAMjugqmZ");
	this.shape_92.setTransform(1685.2,-39.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgMk6QAjGHgNDu");
	this.shape_93.setTransform(1685.6,-38.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAGEzQAMjvgbl1");
	this.shape_94.setTransform(1686,-37.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgHE4QAKjvAGl/");
	this.shape_95.setTransform(1687.6,-37.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgKErQAKjuALln");
	this.shape_96.setTransform(1687.9,-36.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgMEvQAMjvANlu");
	this.shape_97.setTransform(1688,-37);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgLEtQALjvAMlq");
	this.shape_98.setTransform(1687.9,-36.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgLEuQALjuAMlt");
	this.shape_99.setTransform(1688,-37);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgMEwQAMjvAOlw");
	this.shape_100.setTransform(1688.1,-37.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgNEyQAMjvAPl0");
	this.shape_101.setTransform(1688.2,-37.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgOEzQANjuAQl3");
	this.shape_102.setTransform(1688.3,-37.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgPE1QANjvASl6");
	this.shape_103.setTransform(1688.3,-37.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQE3QANjvATl+");
	this.shape_104.setTransform(1688.4,-37.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQE4QAMjuAVmB");
	this.shape_105.setTransform(1688.5,-37.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgSE7QAMjuAZmH");
	this.shape_106.setTransform(1688.7,-38.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgLEsQALjuALlp");
	this.shape_107.setTransform(1687.9,-36.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgLEuQALjvAMlr");
	this.shape_108.setTransform(1688,-36.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgMEwQAMjuAOlx");
	this.shape_109.setTransform(1688.1,-37.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgOEzQANjvAQl2");
	this.shape_110.setTransform(1688.2,-37.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgPE0QANjuARl5");
	this.shape_111.setTransform(1688.3,-37.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgPE1QANjuASl7");
	this.shape_112.setTransform(1688.4,-37.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQE4QAMjvAVmA");
	this.shape_113.setTransform(1688.5,-37.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgRE5QAMjuAXmD");
	this.shape_114.setTransform(1688.6,-38.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgRE7QAMjvAYmG");
	this.shape_115.setTransform(1688.6,-38.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgSE8QAMjvAZmI");
	this.shape_116.setTransform(1688.7,-38.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgKEsQAKjvALlo");
	this.shape_117.setTransform(1687.9,-36.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgLEsQALjuAMlp");
	this.shape_118.setTransform(1687.9,-36.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgLEtQALjuAMlr");
	this.shape_119.setTransform(1688,-36.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgLEuQALjvAMls");
	this.shape_120.setTransform(1688,-36.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgMEvQAMjuANlv");
	this.shape_121.setTransform(1688.1,-37);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgMEwQAMjvANlw");
	this.shape_122.setTransform(1688.1,-37.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgNExQAMjuAPlz");
	this.shape_123.setTransform(1688.2,-37.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgOE0QAMjvARl4");
	this.shape_124.setTransform(1688.3,-37.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQE2QANjuATl9");
	this.shape_125.setTransform(1688.4,-37.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQE3QANjuAUl/");
	this.shape_126.setTransform(1688.4,-37.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgRE5QANjuAWmD");
	this.shape_127.setTransform(1688.5,-38);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgRE6QAMjuAYmF");
	this.shape_128.setTransform(1688.6,-38.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgSE7QANjuAYmH");
	this.shape_129.setTransform(1688.6,-38.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTE8QANjuAamJ");
	this.shape_130.setTransform(1688.7,-38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_86}]},6).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102,p:{y:-37.5}}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105,p:{y:-37.9}}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111,p:{y:-37.5}}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_102,p:{y:-37.4}}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_111,p:{y:-37.6}}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_105,p:{y:-38}}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[]},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_89).wait(9).to({_off:false},0).wait(4).to({_off:true},1).wait(12).to({_off:false},0).wait(10).to({_off:true},1).wait(18).to({_off:false},0).wait(13).to({_off:true},1).wait(21).to({_off:false},0).wait(20).to({_off:true},1).wait(34).to({_off:false},0).wait(18).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(15).to({_off:false},0).wait(1).to({_off:true},1).wait(21).to({_off:false},0).wait(1).to({_off:true},1).wait(30).to({_off:false},0).wait(1).to({_off:true},1).wait(40).to({_off:false},0).wait(1).to({_off:true},1).wait(179));

	// Calque 6
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi3QBvF/GygR");
	this.shape_131.setTransform(1718.1,-51.7);
	this.shape_131._off = true;

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjBQBvF/GyAE");
	this.shape_132.setTransform(1718.1,-50.8);
	this.shape_132._off = true;

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjKQBvF/GyAW");
	this.shape_133.setTransform(1718.1,-49.8);
	this.shape_133._off = true;

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(13,1,1).p("AERDVQmzgqhul/");
	this.shape_134.setTransform(1718.1,-48.8);
	this.shape_134._off = true;

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjJQBvF/GyAU");
	this.shape_135.setTransform(1718.1,-49.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi+QBvF/GygC");
	this.shape_136.setTransform(1718.1,-51);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi0QBvF/GygY");
	this.shape_137.setTransform(1718.1,-52.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQirQBvF/Gygt");
	this.shape_138.setTransform(1718.1,-53);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiiQBvF/GyhE");
	this.shape_139.setTransform(1718.1,-53.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQibQBvF/GyhZ");
	this.shape_140.setTransform(1718.1,-54.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiUQBvF/Gyhv");
	this.shape_141.setTransform(1718.1,-55.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(13,1,1).p("AERBsQmzCFhul+");
	this.shape_142.setTransform(1718.1,-55.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiTQBvF/Gyhy");
	this.shape_143.setTransform(1718.1,-55.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiZQBvF/Gyhf");
	this.shape_144.setTransform(1718.1,-54.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQigQBvF/GyhL");
	this.shape_145.setTransform(1718.1,-54.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQinQBvF/Gyg3");
	this.shape_146.setTransform(1718.1,-53.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQivQBvF/Gygk");
	this.shape_147.setTransform(1718.1,-52.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjOQBvF/GyAe");
	this.shape_148.setTransform(1718.1,-49.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjIQBvGAGyAR");
	this.shape_149.setTransform(1718.1,-50.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi7QBvF/GygI");
	this.shape_150.setTransform(1718.1,-51.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi1QBvF/GygV");
	this.shape_151.setTransform(1718.1,-51.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiwQBvF/Gygh");
	this.shape_152.setTransform(1718.1,-52.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQimQBvF/Gyg6");
	this.shape_153.setTransform(1718.1,-53.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQihQBvF/GyhH");
	this.shape_154.setTransform(1718.1,-53.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQidQBvF/GyhT");
	this.shape_155.setTransform(1718.1,-54.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiZQBvF/Gyhg");
	this.shape_156.setTransform(1718.1,-54.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiVQBvF/Gyhs");
	this.shape_157.setTransform(1718.1,-55.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiRQBvF/Gyh5");
	this.shape_158.setTransform(1718.1,-55.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiRQBvF/Gyh6");
	this.shape_159.setTransform(1718.1,-55.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiUQBvF/Gyhu");
	this.shape_160.setTransform(1718.1,-55.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiYQBvF/Gyhi");
	this.shape_161.setTransform(1718.1,-54.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQicQBvF/GyhW");
	this.shape_162.setTransform(1718.1,-54.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQikQBvF/Gyg/");
	this.shape_163.setTransform(1718.1,-53.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQioQBvF/Gyg0");
	this.shape_164.setTransform(1718.1,-53.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQitQBvF/Gygo");
	this.shape_165.setTransform(1718.1,-52.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiyQBvF/Gygc");
	this.shape_166.setTransform(1718.1,-52.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi9QBvF/GygF");
	this.shape_167.setTransform(1718.1,-51.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjDQBvGAGyAH");
	this.shape_168.setTransform(1718.1,-50.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjIQBvF/GyAS");
	this.shape_169.setTransform(1718.1,-50);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjPQBvF/GyAg");
	this.shape_170.setTransform(1718.1,-49.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjEQBvF/GyAL");
	this.shape_171.setTransform(1718.1,-50.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi/QBvF/GyAA");
	this.shape_172.setTransform(1718.1,-50.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi6QBvF/GygK");
	this.shape_173.setTransform(1718.1,-51.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi1QBvF/GygU");
	this.shape_174.setTransform(1718.1,-51.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQixQBvF/Gyge");
	this.shape_175.setTransform(1718.1,-52.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQioQBvF/Gygz");
	this.shape_176.setTransform(1718.1,-53.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQilQBvF/Gyg9");
	this.shape_177.setTransform(1718.1,-53.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQidQBvF/GyhS");
	this.shape_178.setTransform(1718.1,-54.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiaQBvF/Gyhc");
	this.shape_179.setTransform(1718.1,-54.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiXQBvF/Gyhm");
	this.shape_180.setTransform(1718.1,-55);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiTQBvF/Gyhx");
	this.shape_181.setTransform(1718.1,-55.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiQQBvF/Gyh7");
	this.shape_182.setTransform(1718.1,-55.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiQQBvF/Gyh8");
	this.shape_183.setTransform(1718.1,-55.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiWQBvF/Gyho");
	this.shape_184.setTransform(1718.1,-55);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQicQBvF/GyhV");
	this.shape_185.setTransform(1718.1,-54.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQijQBvF/GyhC");
	this.shape_186.setTransform(1718.1,-53.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQizQBvF/Gyga");
	this.shape_187.setTransform(1718.1,-52.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi8QBvF/GygG");
	this.shape_188.setTransform(1718.1,-51.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjFQBvF/GyAM");
	this.shape_189.setTransform(1718.1,-50.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjQQBvF/GyAi");
	this.shape_190.setTransform(1718.1,-49.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjNQBvF/GyAc");
	this.shape_191.setTransform(1718.1,-49.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjCQBvF/GyAG");
	this.shape_192.setTransform(1718.1,-50.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi7QBvF/GygJ");
	this.shape_193.setTransform(1718.1,-51.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQixQBvF/Gygf");
	this.shape_194.setTransform(1718.1,-52.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiuQBvGAGygn");
	this.shape_195.setTransform(1718.1,-52.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQioQBvF/Gyg1");
	this.shape_196.setTransform(1718.1,-53.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQilQBvF/Gyg8");
	this.shape_197.setTransform(1718.1,-53.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiYQBvF/Gyhh");
	this.shape_198.setTransform(1718.1,-54.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiSQBvF/Gyh3");
	this.shape_199.setTransform(1718.1,-55.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiQQBvF/Gyh+");
	this.shape_200.setTransform(1718.1,-55.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiPQBvF/GyiA");
	this.shape_201.setTransform(1718.1,-55.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiSQBvF/Gyh1");
	this.shape_202.setTransform(1718.1,-55.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiWQBvF/Gyhp");
	this.shape_203.setTransform(1718.1,-55.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiXQBvF/Gyhk");
	this.shape_204.setTransform(1718.1,-54.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiZQBvF/Gyhe");
	this.shape_205.setTransform(1718.1,-54.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQibQBvF/GyhY");
	this.shape_206.setTransform(1718.1,-54.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQifQBvF/GyhN");
	this.shape_207.setTransform(1718.1,-54.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQinQBvF/Gyg2");
	this.shape_208.setTransform(1718.1,-53.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQipQBvF/Gygx");
	this.shape_209.setTransform(1718.1,-53.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQisQBvF/Gygr");
	this.shape_210.setTransform(1718.1,-52.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiuQBvF/Gygl");
	this.shape_211.setTransform(1718.1,-52.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQiwQBvF/Gygg");
	this.shape_212.setTransform(1718.1,-52.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi4QBvF/GygP");
	this.shape_213.setTransform(1718.1,-51.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi9QBvF/GygE");
	this.shape_214.setTransform(1718.1,-51.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjAQBvF/GyAC");
	this.shape_215.setTransform(1718.1,-50.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjDQBvF/GyAI");
	this.shape_216.setTransform(1718.1,-50.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjGQBvF/GyAO");
	this.shape_217.setTransform(1718.1,-50.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjMQBvGAGyAZ");
	this.shape_218.setTransform(1718.1,-49.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjRQBvF/GyAk");
	this.shape_219.setTransform(1718.1,-49.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjTQBvF/GyAo");
	this.shape_220.setTransform(1718.1,-49);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjSQBvGAGyAl");
	this.shape_221.setTransform(1718.1,-49.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjNQBvGAGyAb");
	this.shape_222.setTransform(1718.1,-49.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjLQBvF/GyAY");
	this.shape_223.setTransform(1718.1,-49.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQjEQBvF/GyAK");
	this.shape_224.setTransform(1718.1,-50.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQi+QBvF/GygD");
	this.shape_225.setTransform(1718.1,-51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_131}]},6).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135,p:{y:-49.9}}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_148,p:{y:-49.5}}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154,p:{y:-53.9}}]},1).to({state:[{t:this.shape_155,p:{y:-54.4}}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_148,p:{y:-49.4}}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_170,p:{y:-49.4}}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172,p:{y:-50.9}}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_154,p:{y:-54}}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_170,p:{y:-49.3}}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_135,p:{y:-49.9}}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197,p:{y:-53.6}}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_155,p:{y:-54.3}}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_155,p:{y:-54.3}}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_154,p:{y:-53.9}}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_197,p:{y:-53.5}}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217,p:{y:-50.3}}]},1).to({state:[{t:this.shape_135,p:{y:-50}}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_148,p:{y:-49.4}}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_170,p:{y:-49.3}}]},1).to({state:[{t:this.shape_148,p:{y:-49.5}}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_135,p:{y:-50}}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_217,p:{y:-50.2}}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_172,p:{y:-51}}]},1).to({state:[{t:this.shape_225}]},1).to({state:[]},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_131).wait(6).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.shape_132).wait(7).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,y:-50.7},0).to({_off:true},1).wait(56).to({_off:false,y:-50.8},0).to({_off:true},1).wait(73).to({_off:false,y:-50.7},0).to({_off:true},1).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.shape_133).wait(8).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false,y:-49.9},0).to({_off:true},1).wait(30).to({_off:false,y:-49.8},0).to({_off:true},1).wait(64).to({_off:false},0).to({_off:true},1).wait(139));
	this.timeline.addTween(cjs.Tween.get(this.shape_134).wait(9).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(34).to({_off:false},0).to({_off:true},1).wait(54).to({_off:false},0).to({_off:true},1).wait(147));

	// Calque 10
	this.instance_3 = new lib.okaokaplayhead();
	this.instance_3.setTransform(1402.7,-93.1,1,1,14.5,0,0,0,33.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:1383.7,y:-92.6},3).to({x:1402.7,y:-93.1},8).to({x:1383.7,y:-92.6},9).to({x:1402.7,y:-93.1},14).to({x:1383.7,y:-92.6},15).to({x:1402.7,y:-93.1},17).to({x:1383.7,y:-92.6},18).to({x:1402.7,y:-93.1},24).to({x:1383.7,y:-92.6},31).to({_off:true},19).wait(129));

	// Calque 11
	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmhFQEYC2E1g5");
	this.shape_226.setTransform(1386.5,-78.9);
	this.shape_226._off = true;

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqhAQEhC0E0hF");
	this.shape_227.setTransform(1385.3,-78.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aktg9QEpCzEyhS");
	this.shape_228.setTransform(1384.1,-78.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FFFFFF").ss(13,1,1).p("AEyAaQkyBekwix");
	this.shape_229.setTransform(1382.9,-78.5);
	this.shape_229._off = true;

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aktg9QEpCzEyhQ");
	this.shape_230.setTransform(1384.2,-78.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkphBQEfC0E0hC");
	this.shape_231.setTransform(1385.6,-78.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FFFFFF").ss(13,1,1).p("AklhGQEVC2E2g0");
	this.shape_232.setTransform(1387,-78.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkhhMQEMC4E3gm");
	this.shape_233.setTransform(1388.3,-79);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdhSQECC6E5gY");
	this.shape_234.setTransform(1389.7,-79);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkZhYQD5C7E6gK");
	this.shape_235.setTransform(1391.1,-78.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVhgQDvC9E8AE");
	this.shape_236.setTransform(1392.4,-78.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#FFFFFF").ss(13,1,1).p("AESBpQk+gSjli/");
	this.shape_237.setTransform(1393.8,-78.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVhhQDuC9E9AG");
	this.shape_238.setTransform(1392.6,-78.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYhaQD2C8E7gH");
	this.shape_239.setTransform(1391.4,-78.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkchUQD/C6E6gT");
	this.shape_240.setTransform(1390.1,-79);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfhOQEHC4E4gg");
	this.shape_241.setTransform(1388.9,-79);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjhJQEQC3E3gs");
	this.shape_242.setTransform(1387.7,-79);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akug7QEsCyExhW");
	this.shape_243.setTransform(1383.6,-78.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aksg+QEnCzEyhO");
	this.shape_244.setTransform(1384.4,-78.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqhAQEiC0EzhG");
	this.shape_245.setTransform(1385.2,-78.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkohDQEdC1E0g+");
	this.shape_246.setTransform(1386,-78.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmhGQEYC2E1g2");
	this.shape_247.setTransform(1386.8,-78.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjhIQERC2E2gu");
	this.shape_248.setTransform(1387.5,-79);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkehPQEGC5E4ge");
	this.shape_249.setTransform(1389.1,-79);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkchSQEAC5E5gW");
	this.shape_250.setTransform(1389.9,-79);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkahWQD7C6E6gO");
	this.shape_251.setTransform(1390.7,-78.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYhaQD2C7E7gG");
	this.shape_252.setTransform(1391.5,-78.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkWhfQDxC9E8AC");
	this.shape_253.setTransform(1392.2,-78.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkUhjQDrC9E+AK");
	this.shape_254.setTransform(1393,-78.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkUhkQDrC+E+AL");
	this.shape_255.setTransform(1393.1,-78.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVhfQDvC8E8AD");
	this.shape_256.setTransform(1392.3,-78.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkXhbQD0C7E8gE");
	this.shape_257.setTransform(1391.6,-78.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkZhXQD6C7E6gM");
	this.shape_258.setTransform(1390.9,-78.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkehQQEEC5E5gb");
	this.shape_259.setTransform(1389.4,-79);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkghNQEJC4E4gi");
	this.shape_260.setTransform(1388.7,-79);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkihKQEPC3E2gq");
	this.shape_261.setTransform(1388,-79);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkhHQEUC2E1gx");
	this.shape_262.setTransform(1387.2,-79);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkohCQEdC0E0hA");
	this.shape_263.setTransform(1385.8,-78.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqhAQEjC0EyhI");
	this.shape_264.setTransform(1385,-78.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aktg+QEpCzEyhP");
	this.shape_265.setTransform(1384.3,-78.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akug7QEtCyEwhX");
	this.shape_266.setTransform(1383.6,-78.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akvg7QEuCyExhY");
	this.shape_267.setTransform(1383.5,-78.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aktg9QEpCzEyhR");
	this.shape_268.setTransform(1384.1,-78.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akrg/QElC0EyhK");
	this.shape_269.setTransform(1384.8,-78.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkphBQEgC0EzhD");
	this.shape_270.setTransform(1385.4,-78.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FFFFFF").ss(13,1,1).p("AknhDQEbC1E0g9");
	this.shape_271.setTransform(1386.1,-78.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmhFQEXC1E2g2");
	this.shape_272.setTransform(1386.7,-78.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjhIQESC3E2gw");
	this.shape_273.setTransform(1387.4,-79);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkihKQEOC3E3gp");
	this.shape_274.setTransform(1388,-79);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkghNQEJC4E4gj");
	this.shape_275.setTransform(1388.7,-79);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkehQQEFC5E4gc");
	this.shape_276.setTransform(1389.3,-79);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkchTQEAC6E5gV");
	this.shape_277.setTransform(1389.9,-79);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkbhWQD8C7E6gP");
	this.shape_278.setTransform(1390.6,-78.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkZhZQD4C7E7gI");
	this.shape_279.setTransform(1391.2,-78.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkXhdQDzC8E8gC");
	this.shape_280.setTransform(1391.8,-78.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVhgQDuC8E9AF");
	this.shape_281.setTransform(1392.5,-78.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkThkQDqC+E9AL");
	this.shape_282.setTransform(1393.1,-78.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkXhdQDzC8E8gB");
	this.shape_283.setTransform(1392,-78.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkahXQD7C7E6gN");
	this.shape_284.setTransform(1390.8,-78.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdhRQEDC5E4gZ");
	this.shape_285.setTransform(1389.5,-79);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkhHQEUC3E2gz");
	this.shape_286.setTransform(1387.1,-79);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkohCQEdC0E0g+");
	this.shape_287.setTransform(1385.9,-78.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akrg/QElC0EyhM");
	this.shape_288.setTransform(1384.7,-78.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akvg7QEuCyExhZ");
	this.shape_289.setTransform(1383.3,-78.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akug8QEsCyExhU");
	this.shape_290.setTransform(1383.8,-78.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqhAQEiC0EzhH");
	this.shape_291.setTransform(1385.1,-78.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkohDQEcC1E1g9");
	this.shape_292.setTransform(1386.1,-78.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkhIQESC3E2gw");
	this.shape_293.setTransform(1387.4,-79);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkghOQEJC5E4gi");
	this.shape_294.setTransform(1388.8,-79);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkahWQD8C7E5gP");
	this.shape_295.setTransform(1390.6,-78.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYhbQD2C8E7gG");
	this.shape_296.setTransform(1391.5,-78.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkUhjQDsC+E9AJ");
	this.shape_297.setTransform(1392.9,-78.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkThlQDpC+E9AN");
	this.shape_298.setTransform(1393.3,-78.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkShmQDoC+E9AP");
	this.shape_299.setTransform(1393.4,-78.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkUhiQDtC9E8AI");
	this.shape_300.setTransform(1392.7,-78.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkWheQDxC9E8AA");
	this.shape_301.setTransform(1392,-78.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkXhcQD0C8E7gD");
	this.shape_302.setTransform(1391.7,-78.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkZhYQD5C7E6gL");
	this.shape_303.setTransform(1391,-78.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkahWQD8C6E6gO");
	this.shape_304.setTransform(1390.6,-78.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkchUQD/C6E6gS");
	this.shape_305.setTransform(1390.3,-79);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdhTQEBC6E5gW");
	this.shape_306.setTransform(1389.9,-79);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkehRQEEC5E5gZ");
	this.shape_307.setTransform(1389.6,-79);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkehPQEFC5E4gd");
	this.shape_308.setTransform(1389.2,-79);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfhOQEHC5E5gh");
	this.shape_309.setTransform(1388.9,-79);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkhhMQELC4E4gk");
	this.shape_310.setTransform(1388.5,-79);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkhhLQENC4E2go");
	this.shape_311.setTransform(1388.1,-79);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkihJQEPC3E2gs");
	this.shape_312.setTransform(1387.8,-79);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjhIQESC2E1gv");
	this.shape_313.setTransform(1387.4,-78.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkhHQEUC2E1gy");
	this.shape_314.setTransform(1387.1,-78.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#FFFFFF").ss(13,1,1).p("AklhFQEWC1E1g2");
	this.shape_315.setTransform(1386.7,-78.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmhEQEZC1E0g6");
	this.shape_316.setTransform(1386.4,-78.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkohCQEeC1EzhB");
	this.shape_317.setTransform(1385.7,-78.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkqhAQEhC0EzhF");
	this.shape_318.setTransform(1385.3,-78.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akrg/QEkCzEzhI");
	this.shape_319.setTransform(1385,-78.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akrg+QEmCzEyhM");
	this.shape_320.setTransform(1384.6,-78.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aktg9QEpCyEyhP");
	this.shape_321.setTransform(1384.3,-78.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akug8QErCyExhT");
	this.shape_322.setTransform(1383.9,-78.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akvg7QEtCyExhX");
	this.shape_323.setTransform(1383.6,-78.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akwg6QEwCxExha");
	this.shape_324.setTransform(1383.2,-78.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akwg6QEwCxExhc");
	this.shape_325.setTransform(1383,-78.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akwg6QEwCxExhb");
	this.shape_326.setTransform(1383.2,-78.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aktg8QEqCyExhT");
	this.shape_327.setTransform(1384,-78.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aksg+QEmCzEzhM");
	this.shape_328.setTransform(1384.6,-78.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akrg/QElC0EyhL");
	this.shape_329.setTransform(1384.7,-78.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#FFFFFF").ss(13,1,1).p("Akrg/QEkCzEzhJ");
	this.shape_330.setTransform(1384.9,-78.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkphBQEgC0E0hE");
	this.shape_331.setTransform(1385.4,-78.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkphCQEfC1EzhC");
	this.shape_332.setTransform(1385.7,-78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_226}]},6).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239,p:{x:1391.4}}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261,p:{x:1388}}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270,p:{x:1385.4}}]},1).to({state:[{t:this.shape_271,p:{x:1386.1}}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276,p:{x:1389.3}}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282,p:{x:1393.1}}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_282,p:{x:1393.2}}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_239,p:{x:1391.4}}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_261,p:{x:1387.9}}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_276,p:{x:1389.2}}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_282,p:{x:1393.1}}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_239,p:{x:1391.3}}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_271,p:{x:1386}}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_270,p:{x:1385.5}}]},1).to({state:[{t:this.shape_332}]},1).to({state:[]},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_226).wait(6).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.shape_229).wait(9).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(34).to({_off:false},0).to({_off:true},1).wait(54).to({_off:false},0).to({_off:true},1).wait(147));

	// Calque 12
	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgOkdQAAESAdEp");
	this.shape_333.setTransform(1389.6,-37.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgWkdQAQESAdEp");
	this.shape_334.setTransform(1388.8,-37.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgekdQAeESAfEp");
	this.shape_335.setTransform(1388,-37.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAnEeQggkpgtkS");
	this.shape_336.setTransform(1387.3,-37.8);
	this.shape_336._off = true;

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgXkiQAREcAeEp");
	this.shape_337.setTransform(1388.8,-38.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAKEoQgdkpANkm");
	this.shape_338.setTransform(1390.1,-38.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAGEoQgdkpAfkm");
	this.shape_339.setTransform(1390.5,-38.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgEEgQgfkpAzkW");
	this.shape_340.setTransform(1391.7,-38);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgFEgQgfkpA1kW");
	this.shape_341.setTransform(1391.8,-38);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgGEfQgfkpA3kU");
	this.shape_342.setTransform(1391.9,-37.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgHEeQgfkoA5kT");
	this.shape_343.setTransform(1392,-37.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgIEeQgfkpA7kS");
	this.shape_344.setTransform(1392.1,-37.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgCEeQgfkpAwkS");
	this.shape_345.setTransform(1391.5,-37.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#FFFFFF").ss(13,1,1).p("AABEeQgdkpAnkS");
	this.shape_346.setTransform(1391,-37.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAHEoQgdkpAdkm");
	this.shape_347.setTransform(1390.4,-38.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAHEeQgdkpAdkS");
	this.shape_348.setTransform(1390.4,-37.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgEkdQgPESAdEp");
	this.shape_349.setTransform(1390.1,-37.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgikeQAmEUAfEp");
	this.shape_350.setTransform(1387.6,-37.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgekfQAeEXAfEo");
	this.shape_351.setTransform(1388,-38);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgakgQAYEZAdEo");
	this.shape_352.setTransform(1388.4,-38.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTkjQAKEeAdEp");
	this.shape_353.setTransform(1389.1,-38.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgPkkQACEhAdEo");
	this.shape_354.setTransform(1389.5,-38.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgLklQgFEjAdEo");
	this.shape_355.setTransform(1389.8,-38.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#FFFFFF").ss(13,1,1).p("AABkdQgWESAdEp");
	this.shape_356.setTransform(1390.3,-37.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgDkdQgQESAdEp");
	this.shape_357.setTransform(1390.1,-37.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgIkdQgKESAdEp");
	this.shape_358.setTransform(1390,-37.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgNkdQgCESAdEp");
	this.shape_359.setTransform(1389.7,-37.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQkdQAEESAdEp");
	this.shape_360.setTransform(1389.4,-37.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgUkdQAMESAdEp");
	this.shape_361.setTransform(1389,-37.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgYkdQATESAeEp");
	this.shape_362.setTransform(1388.7,-37.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgbkdQAaESAdEp");
	this.shape_363.setTransform(1388.3,-37.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgfkdQAfESAgEp");
	this.shape_364.setTransform(1388,-37.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgikdQAmESAfEp");
	this.shape_365.setTransform(1387.6,-37.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgjkdQAoETAfEp");
	this.shape_366.setTransform(1387.5,-37.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#FFFFFF").ss(13,1,1).p("AggkeQAiEVAfEo");
	this.shape_367.setTransform(1387.8,-38);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgdkfQAdEXAeEo");
	this.shape_368.setTransform(1388.1,-38.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgakgQAZEZAdEo");
	this.shape_369.setTransform(1388.4,-38.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgYkhQAUEbAdEo");
	this.shape_370.setTransform(1388.6,-38.2);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgVkiQAOEdAdEo");
	this.shape_371.setTransform(1388.9,-38.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTkjQAJEeAeEp");
	this.shape_372.setTransform(1389.2,-38.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgQkkQAEEgAdEp");
	this.shape_373.setTransform(1389.4,-38.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgNklQgCEiAdEp");
	this.shape_374.setTransform(1389.7,-38.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgKkmQgHEkAdEp");
	this.shape_375.setTransform(1389.9,-38.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#FFFFFF").ss(13,1,1).p("AACkdQgXESAdEp");
	this.shape_376.setTransform(1390.3,-37.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAAkdQgUESAdEp");
	this.shape_377.setTransform(1390.2,-37.8);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgFkdQgOESAdEp");
	this.shape_378.setTransform(1390.1,-37.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgJkdQgIESAdEp");
	this.shape_379.setTransform(1389.9,-37.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgMkdQgDESAdEp");
	this.shape_380.setTransform(1389.7,-37.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgPkdQACESAdEp");
	this.shape_381.setTransform(1389.5,-37.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgSkdQAIESAdEp");
	this.shape_382.setTransform(1389.2,-37.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgVkdQAOESAdEp");
	this.shape_383.setTransform(1388.9,-37.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgYkdQAUESAdEp");
	this.shape_384.setTransform(1388.6,-37.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgakdQAZESAdEp");
	this.shape_385.setTransform(1388.4,-37.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgdkdQAdESAeEp");
	this.shape_386.setTransform(1388.1,-37.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#FFFFFF").ss(13,1,1).p("AggkdQAiESAfEp");
	this.shape_387.setTransform(1387.8,-37.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgjkdQAoESAfEp");
	this.shape_388.setTransform(1387.5,-37.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgkkdQAqETAfEo");
	this.shape_389.setTransform(1387.4,-37.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgikdQAmETAfEp");
	this.shape_390.setTransform(1387.6,-37.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#FFFFFF").ss(13,1,1).p("AghkeQAjEVAgEo");
	this.shape_391.setTransform(1387.8,-38);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgfkfQAgEWAfEp");
	this.shape_392.setTransform(1387.9,-38);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgckgQAbEYAeEp");
	this.shape_393.setTransform(1388.3,-38.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgakhQAYEaAdEp");
	this.shape_394.setTransform(1388.4,-38.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTkiQAKEdAdEp");
	this.shape_395.setTransform(1389.1,-38.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgSkjQAHEfAeEo");
	this.shape_396.setTransform(1389.3,-38.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgOkkQAAEhAdEo");
	this.shape_397.setTransform(1389.6,-38.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgMklQgDEiAdEp");
	this.shape_398.setTransform(1389.7,-38.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgIkmQgKElAdEo");
	this.shape_399.setTransform(1390,-38.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#FFFFFF").ss(13,1,1).p("AAEkdQgZESAdEp");
	this.shape_400.setTransform(1390.3,-37.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgBkdQgTESAdEp");
	this.shape_401.setTransform(1390.2,-37.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgHkdQgLESAdEp");
	this.shape_402.setTransform(1390,-37.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgKkdQgHESAdEp");
	this.shape_403.setTransform(1389.9,-37.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgLkdQgFESAdEp");
	this.shape_404.setTransform(1389.8,-37.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgPkdQABESAdEp");
	this.shape_405.setTransform(1389.6,-37.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgSkdQAHESAeEp");
	this.shape_406.setTransform(1389.3,-37.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgTkdQAKESAdEp");
	this.shape_407.setTransform(1389.1,-37.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgXkdQASESAdEp");
	this.shape_408.setTransform(1388.7,-37.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgZkdQAVESAdEp");
	this.shape_409.setTransform(1388.6,-37.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgakdQAYESAdEp");
	this.shape_410.setTransform(1388.4,-37.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgckdQAbESAeEp");
	this.shape_411.setTransform(1388.3,-37.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#FFFFFF").ss(13,1,1).p("AghkdQAkESAfEp");
	this.shape_412.setTransform(1387.7,-37.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgkkdQAqESAfEp");
	this.shape_413.setTransform(1387.4,-37.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#FFFFFF").ss(13,1,1).p("AglkdQAsESAfEp");
	this.shape_414.setTransform(1387.3,-37.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgkkdQArESAfEp");
	this.shape_415.setTransform(1387.4,-37.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgkkdQApETAgEo");
	this.shape_416.setTransform(1387.5,-37.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgjkdQAoETAfEo");
	this.shape_417.setTransform(1387.5,-37.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#FFFFFF").ss(13,1,1).p("AghkeQAkEVAfEo");
	this.shape_418.setTransform(1387.7,-37.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgfkfQAhEWAfEp");
	this.shape_419.setTransform(1387.9,-38);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgfkfQAfEWAgEp");
	this.shape_420.setTransform(1388,-38);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#FFFFFF").ss(13,1,1).p("AgekfQAeEXAeEo");
	this.shape_421.setTransform(1388.1,-38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_333}]},6).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_368}]},1).to({state:[]},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_336).wait(9).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(34).to({_off:false},0).to({_off:true},1).wait(54).to({_off:false},0).to({_off:true},1).wait(147));

	// Calque 13
	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkJBgQFaCLC5lw");
	this.shape_422.setTransform(1360.3,-52.9);
	this.shape_422._off = true;

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkEBtQFdB8Csl0");
	this.shape_423.setTransform(1359.6,-52.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj+B5QFeBuCfl4");
	this.shape_424.setTransform(1359,-51.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj5CFQFhBfCSl7");
	this.shape_425.setTransform(1358.3,-51.1);
	this.shape_425._off = true;

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj/B4QFeBvChl3");
	this.shape_426.setTransform(1359.1,-51.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkFBqQFcCACvlz");
	this.shape_427.setTransform(1359.8,-52.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkLBbQFZCRC+lv");
	this.shape_428.setTransform(1360.6,-53.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkRBNQFXCgDMlq");
	this.shape_429.setTransform(1361.3,-53.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkXA+QFVCxDaln");
	this.shape_430.setTransform(1362,-54.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdAvQFSDBDpli");
	this.shape_431.setTransform(1362.7,-54.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjAgQFQDSD3lf");
	this.shape_432.setTransform(1363.5,-55.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkpAQQFNDiEHla");
	this.shape_433.setTransform(1364.2,-55.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkAeQFQDUD5le");
	this.shape_434.setTransform(1363.6,-55.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfAsQFSDFDsli");
	this.shape_435.setTransform(1362.9,-55);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkZA5QFUC3Dflm");
	this.shape_436.setTransform(1362.2,-54.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkUBHQFXCnDSlp");
	this.shape_437.setTransform(1361.6,-54);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkPBTQFYCaDHlt");
	this.shape_438.setTransform(1361,-53.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj8B9QFfBpCal5");
	this.shape_439.setTransform(1358.7,-51.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkAB2QFeBxCjl2");
	this.shape_440.setTransform(1359.2,-51.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkDBuQFcB7Crl0");
	this.shape_441.setTransform(1359.6,-52.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkHBmQFcCECzly");
	this.shape_442.setTransform(1360,-52.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkKBeQFaCOC7lw");
	this.shape_443.setTransform(1360.4,-53.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkNBVQFYCXDElt");
	this.shape_444.setTransform(1360.9,-53.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVBFQFWCqDVlp");
	this.shape_445.setTransform(1361.7,-54.1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYA8QFVCzDclm");
	this.shape_446.setTransform(1362.1,-54.4);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkcAzQFUC9Dllk");
	this.shape_447.setTransform(1362.5,-54.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfArQFSDGDtli");
	this.shape_448.setTransform(1363,-55);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkiAiQFQDPD2lf");
	this.shape_449.setTransform(1363.4,-55.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmAZQFPDZD+ld");
	this.shape_450.setTransform(1363.8,-55.6);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmAYQFPDaD+ld");
	this.shape_451.setTransform(1363.8,-55.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjAhQFQDQD3le");
	this.shape_452.setTransform(1363.4,-55.4);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkgApQFSDIDvlh");
	this.shape_453.setTransform(1363,-55.1);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdAxQFUC/Dmlj");
	this.shape_454.setTransform(1362.7,-54.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkWBBQFWCuDXlo");
	this.shape_455.setTransform(1361.9,-54.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkTBJQFXClDQlq");
	this.shape_456.setTransform(1361.5,-53.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkPBRQFXCcDIls");
	this.shape_457.setTransform(1361.1,-53.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkMBZQFZCTDAlu");
	this.shape_458.setTransform(1360.7,-53.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkGBoQFcCCCxlz");
	this.shape_459.setTransform(1359.9,-52.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkDBvQFdB5Cql0");
	this.shape_460.setTransform(1359.5,-52.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj/B3QFeBwChl3");
	this.shape_461.setTransform(1359.1,-51.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj8B+QFgBoCZl5");
	this.shape_462.setTransform(1358.7,-51.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj8B/QFgBnCZl6");
	this.shape_463.setTransform(1358.7,-51.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj+B4QFeBvCfl4");
	this.shape_464.setTransform(1359,-51.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkBByQFdB2Cml1");
	this.shape_465.setTransform(1359.4,-52.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkEBrQFcB+Ctlz");
	this.shape_466.setTransform(1359.7,-52.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkHBlQFbCFC0lx");
	this.shape_467.setTransform(1360.1,-52.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkKBeQFaCNC7lv");
	this.shape_468.setTransform(1360.4,-53);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkNBXQFZCVDClt");
	this.shape_469.setTransform(1360.8,-53.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQBRQFYCcDJlr");
	this.shape_470.setTransform(1361.1,-53.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkSBKQFWCkDQlq");
	this.shape_471.setTransform(1361.5,-53.9);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVBDQFVCsDWlo");
	this.shape_472.setTransform(1361.8,-54.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYA8QFUC0Ddln");
	this.shape_473.setTransform(1362.1,-54.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkbA1QFTC7Dklk");
	this.shape_474.setTransform(1362.5,-54.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkeAtQFSDDDrli");
	this.shape_475.setTransform(1362.8,-54.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkhAmQFRDLDylg");
	this.shape_476.setTransform(1363.2,-55.2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkkAfQFQDSD5le");
	this.shape_477.setTransform(1363.5,-55.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmAXQFPDbD/lc");
	this.shape_478.setTransform(1363.9,-55.7);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#FFFFFF").ss(13,1,1).p("AknAXQFPDbEAlc");
	this.shape_479.setTransform(1363.9,-55.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkhAlQFRDMDylg");
	this.shape_480.setTransform(1363.2,-55.2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkcAzQFUC9Dllj");
	this.shape_481.setTransform(1362.6,-54.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkXBAQFWCvDZln");
	this.shape_482.setTransform(1361.9,-54.3);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkMBaQFZCSDAlu");
	this.shape_483.setTransform(1360.6,-53.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkGBnQFbCDCyly");
	this.shape_484.setTransform(1360,-52.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkBBzQFdB1Cml2");
	this.shape_485.setTransform(1359.3,-52.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj8B/QFgBmCYl5");
	this.shape_486.setTransform(1358.7,-51.4);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj7CBQFgBkCXl6");
	this.shape_487.setTransform(1358.6,-51.4);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj9B9QFfBpCcl4");
	this.shape_488.setTransform(1358.8,-51.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkDBuQFdB7Cql1");
	this.shape_489.setTransform(1359.6,-52.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkNBXQFZCWDClu");
	this.shape_490.setTransform(1360.8,-53.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkPBSQFYCbDHls");
	this.shape_491.setTransform(1361,-53.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkTBIQFWCmDRlp");
	this.shape_492.setTransform(1361.5,-54);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVBEQFWCrDVlo");
	this.shape_493.setTransform(1361.8,-54.2);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkbA0QFTC8Dklk");
	this.shape_494.setTransform(1362.5,-54.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkfAqQFSDHDtlh");
	this.shape_495.setTransform(1363,-55.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmAaQFQDYD9ld");
	this.shape_496.setTransform(1363.7,-55.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkoAVQFQDdEBlc");
	this.shape_497.setTransform(1364,-55.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkoAUQFPDeEClb");
	this.shape_498.setTransform(1364,-55.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkmAYQFPDaD+lc");
	this.shape_499.setTransform(1363.8,-55.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#FFFFFF").ss(13,1,1).p("AklAcQFQDWD7le");
	this.shape_500.setTransform(1363.6,-55.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkjAgQFQDRD3le");
	this.shape_501.setTransform(1363.4,-55.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkhAkQFQDNDzlf");
	this.shape_502.setTransform(1363.3,-55.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkgAoQFSDJDvlh");
	this.shape_503.setTransform(1363.1,-55.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkeAsQFSDEDslh");
	this.shape_504.setTransform(1362.9,-55);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkdAwQFTDBDolj");
	this.shape_505.setTransform(1362.7,-54.9);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkcA0QFUC8Dllk");
	this.shape_506.setTransform(1362.5,-54.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkaA4QFUC4Dhll");
	this.shape_507.setTransform(1362.3,-54.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkYA8QFUCzDdlm");
	this.shape_508.setTransform(1362.1,-54.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkVBDQFWCsDVlp");
	this.shape_509.setTransform(1361.8,-54.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkSBLQFXCjDOlr");
	this.shape_510.setTransform(1361.4,-53.8);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkQBPQFXCeDKlr");
	this.shape_511.setTransform(1361.2,-53.7);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkPBTQFYCaDHls");
	this.shape_512.setTransform(1361,-53.5);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkLBaQFZCSC/lu");
	this.shape_513.setTransform(1360.6,-53.2);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkIBiQFbCJC3lx");
	this.shape_514.setTransform(1360.2,-52.9);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkFBpQFcCBCvlz");
	this.shape_515.setTransform(1359.8,-52.6);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkEBsQFcB9Ctl0");
	this.shape_516.setTransform(1359.7,-52.4);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkCBwQFdB5Col1");
	this.shape_517.setTransform(1359.5,-52.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkBB0QFeB0Cll2");
	this.shape_518.setTransform(1359.3,-52);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj+B7QFfBrCel4");
	this.shape_519.setTransform(1358.9,-51.7);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj8B+QFgBoCZl6");
	this.shape_520.setTransform(1358.7,-51.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj6CCQFfBjCWl6");
	this.shape_521.setTransform(1358.5,-51.3);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj6CEQFhBhCTl7");
	this.shape_522.setTransform(1358.4,-51.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj6CCQFgBjCVl7");
	this.shape_523.setTransform(1358.5,-51.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj8B/QFgBnCYl6");
	this.shape_524.setTransform(1358.7,-51.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj9B8QFfBqCcl4");
	this.shape_525.setTransform(1358.8,-51.6);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#FFFFFF").ss(13,1,1).p("Aj+B7QFfBsCel5");
	this.shape_526.setTransform(1358.9,-51.7);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkAB0QFdB0Ckl2");
	this.shape_527.setTransform(1359.3,-52);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkBByQFdB2Cml2");
	this.shape_528.setTransform(1359.3,-52.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkCBxQFdB3Col1");
	this.shape_529.setTransform(1359.4,-52.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#FFFFFF").ss(13,1,1).p("AkFBrQFcB+Cvlz");
	this.shape_530.setTransform(1359.8,-52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_422}]},6).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426,p:{y:-51.8}}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467,p:{x:1360.1}}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469,p:{y:-53.3}}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_426,p:{y:-51.8}}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_467,p:{x:1360.1}}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_469,p:{y:-53.4}}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_467,p:{x:1360}}]},1).to({state:[{t:this.shape_515,p:{y:-52.6}}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_426,p:{y:-51.9}}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_515,p:{y:-52.5}}]},1).to({state:[]},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_422).wait(6).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.shape_425).wait(9).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(34).to({_off:false},0).to({_off:true},1).wait(54).to({_off:false},0).to({_off:true},1).wait(147));

	// Calque 14
	this.instance_4 = new lib.okaokaplaydot();
	this.instance_4.setTransform(1438.5,-81.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({rotation:-15,x:1426,y:-91.4},3).to({rotation:0,x:1438.5,y:-81.2},8).to({rotation:-15,x:1426,y:-91.4},9).to({rotation:0,x:1438.5,y:-81.2},14).to({rotation:-15,x:1426,y:-91.4},15).to({rotation:0,x:1438.5,y:-81.2},17).to({rotation:-15,x:1426,y:-91.4},18).to({rotation:0,x:1438.5,y:-81.2},24).to({rotation:-15,x:1426,y:-91.4},31).to({_off:true},19).wait(129));

	// Calque 15
	this.instance_5 = new lib.okaokaplaydot();
	this.instance_5.setTransform(1438.5,-61);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({rotation:-15,x:1431.2,y:-71.8},3).to({rotation:0,x:1438.5,y:-61},8).to({rotation:-15,x:1431.2,y:-71.8},9).to({rotation:0,x:1438.5,y:-61},14).to({rotation:-15,x:1431.2,y:-71.8},15).to({rotation:0,x:1438.5,y:-61},17).to({rotation:-15,x:1431.2,y:-71.8},18).to({rotation:0,x:1438.5,y:-61},24).to({rotation:-15,x:1431.2,y:-71.8},31).to({_off:true},19).wait(129));

	// Calque 16
	this.instance_6 = new lib.equilibre_planche();
	this.instance_6.setTransform(1540,2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).wait(139).to({_off:true},19).wait(129));

	// Calque 17
	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#FFFFFF").ss(13,1,1).p("ACQAAQAAA7gqArQgrAqg7AAQg6AAgrgqQgqgrAAg7QAAg7AqgqQArgqA6AAQA7AAArAqQAqAqAAA7g");
	this.shape_531.setTransform(1540,29.1);
	this.shape_531._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_531).wait(6).to({_off:false},0).to({_off:true},158).wait(129));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1327.8,-179.4,424.2,229.5);


// stage content:



(lib.build_end_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choice_0:192});

	// timeline functions:
	this.frame_189 = function() {
		this.gotoAndPlay(1);//utilities.pop_up_motion_callback();
	}
	this.frame_198 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(189).call(this.frame_189).wait(9).call(this.frame_198).wait(1));

	// Calque 4
	this.instance = new lib.build_en_motion_balance("synched",6,false);
	this.instance.setTransform(198,182.6,0.8,0.8,0,0,0,1540.4,43.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AngEeQgUgJgKgQQgLgQAAgUIAsAAQAAAjAqAAQAQAAAJgGQAIgHAAgLQAAgNgIgGQgJgHgXgHQgXgIgNgHQglgUAAghQAAgRAKgOQAKgNASgIQASgHAXAAQAXAAASAIQASAIAKAPQAJAPAAATIgrAAQAAgOgKgIQgJgIgRAAQgQAAgJAGQgJAHAAALQAAALALAHQAKAHAVAGQAlALARARQARARAAAZQAAAbgUAQQgVAQgkAAQgYAAgVgJgAMAEkIAAjWIAsAAIAACyIBeAAIAAAkgAJeEkIAAjWIAsAAIAACyIBeAAIAAAkgAIcEkIgPgsIhNAAIgOAsIgvAAIBPjWIApAAIBQDWgAIBDUIgahQIgbBQIA1AAgADWEkIAAjWIBLAAQAmAAAUAPQAUAPAAAdQAAAQgIAMQgIALgOAGQAQAEAKANQAJAMAAASQAAAfgTAQQgUAPgkABgAECEAIAlAAQAQAAAJgHQAIgHAAgNQAAgegeAAIgoAAgAECCoIAgAAQAigBAAgaQAAgOgJgGQgIgHgSAAIgfAAgABQEkIAAiyIhBAAIAAgkICuAAIAAAkIhBAAIAACygAiKEkIAAjWICMAAIAAAkIhgAAIAAAzIBUAAIAAAiIhUAAIAAA5IBhAAIAAAkgAjPEkIg2hWIgXAZIAAA9IgsAAIAAjWIAsAAIAABhIBJhhIA2AAIhLBfIBOB3gApDEkIgOgsIhNAAIgPAsIgvAAIBQjWIAoAAIBQDWgApdDUIgbhQIgaBQIA1AAgAuJEkIAAjWIBLAAQAnAAAUAPQAUAPAAAdQAAAQgIAMQgIALgPAGQARAEAJANQAKAMAAASQAAAfgUAQQgTAPglABgAtdEAIAmAAQAPAAAJgHQAJgHAAgNQAAgegeAAIgpAAgAtdCoIAhAAQAhgBAAgaQAAgOgIgGQgJgHgSAAIgfAAgAjAhYQgVgMgMgYQgLgYAAgeIAAgLQAAgfALgYQAMgYAUgNQAVgNAbAAQAaAAAVANQAVANALAYQALAYAAAfIAAAJQAAAggLAYQgLAXgUANQgVANgbAAQgbAAgUgNgAizjwQgMARgBAhIAAAKQAAAhAMASQAMASAXAAQAWAAAMgRQAMgSAAghIAAgKQAAgigMgRQgMgSgWAAQgWAAgMASgAkuhOIgohOIgjAAIAABOIgsAAIAAjVIBQAAQAlAAAVARQAUARAAAeQAAAWgJAPQgKAOgTAJIAuBXIAAACgAl5i/IAkAAQAQAAAJgJQAJgIAAgPQAAgPgIgJQgJgIgRAAIgkAAgAorhOIAAixIhAAAIAAgkICtAAIAAAkIhBAAIAACxgAqwhOIhWiMIAACMIgsAAIAAjVIAsAAIBWCNIAAiNIAsAAIAADVgAuGhOIAAjVIAsAAIAADVg");
	this.shape.setTransform(147.5,110.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance}]},21).to({state:[{t:this.instance}]},24).to({state:[{t:this.shape}]},108).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:43.6,rotation:-3.5,startPosition:20},14).to({rotation:2.5,startPosition:35},15).to({regX:1540.3,regY:43.5,rotation:-3.5,x:197.9},15).to({regX:1540.2,rotation:2.2,startPosition:56},21).to({regX:1540.3,regY:43.4,rotation:0},24).to({_off:true},108).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(227.4,109,339.9,178.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;