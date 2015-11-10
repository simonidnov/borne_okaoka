(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 200,
	fps: 50,
	color: "#FFCC01",
	manifest: []
};



// symbols:



(lib.triangle = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41694").s().p("AoBGeIHzs7IIQM7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.5,-41.5,103,83);


(lib.rect = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44AC34").s().p("AnfAAIHfnfIHgHfIngHgg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-48,96.2,96.2);


(lib.dots_hand_hit = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7).p("EAHpgjGIAAg9IAAgFIAAgdQAAg8gqgqQgrgrg8AAQg7AAgrArQgRARgLAVQgBACgBADQgMAZgBAeIAAg1IAAgFIAAggQAAg8gqgrQgrgrg8AAQg5AAgrArQgpAqgCA5IAAogIAAgFIAAgIQAAg8gqgrQgrgrg8AAQg7AAgrArQgqArAAA8IAAJgIAAAFIAAADQhFhIhCglQgFgDgGgDQgXgMgXgIQhhghg0A8Qg9BFAlBUQATArAeAcQB8CBBqEbQAjBcAgBsQARA3ARA9QAVBQAxBCQAxBCBEAtMAAABFFIMeAAMAAAhFnQBGg7AihaQAghUAAhqIAApMQAAg9gmgpQgmgrg7AAQg7AAglArQgRATgJAWQgBACgBABQgJAYgBAcIAAAGEADHgkpIAAAEEgBZgmDIAAgEEgF6glMIAACV");
	this.shape.setTransform(4.6,218.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC01").s().p("EgCwAxGMAAAhFFQhEgsgxhDQgxhCgVhQQgRg9gRg4QgghrgjhcQhqkbh8iBQgegcgTgrQglhUA9hFQA0g8BhAhQAXAIAXAMIALAGQBCAlBFBIIAACVIAAiVIAAgDIAAgFIAApgQAAg8AqgrQArgqA7AAQA8AAArAqQAqArAAA8IAAAIIAAAFIAAIgQACg5ApgpQArgrA5gBQA8ABArArQAqAqAAA8IAAAgIAAAFIAAA1QABgeAMgZIACgFQALgVARgRQArgrA7AAQA8AAArArQAqAqAAA9IAAAcIAAAFIAAA9QABgcAJgYIACgDQAJgWARgTQAlgrA7AAQA7AAAmArQAmApAAA9IAAJMQAABqggBUQgiBZhGA8MAAABFngEAHpgjAIAAgGgEADHgkkIAAgFgEgBZgmDIAAgEg");
	this.shape_1.setTransform(4.6,218.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#485DA7").s().p("AH8FWIgHgHIAAgFIAHAHIAFAEIgCAEIgDgDgAmCDoQgXgggjgXQgdgUgcgEIgLgGQAhABAjAYQAjAXAXAgIAUAcIAAAFgADTDvIAPgCIgCAFIgNACgAhNlTIAAgFQAHASAAAUIAAACQAAgSgHgRg");
	this.shape_2.setTransform(3.4,-45.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.7,-99.2,167.6,635.6);


(lib.circle_purple = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AkwExQh/h/AAiyQAAixB/h/QB/h/CxAAQCyAAB/B/QB/B/AACxQAACyh/B/Qh/B/iyAAQixAAh/h/g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.2,-43.2,86.4,86.4);


(lib.dots_motion_intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dots_hand_hit
	this.instance = new lib.dots_hand_hit();
	this.instance.setTransform(18.3,623.8,1.5,1.5,23.7,0,0,-14.5,-75.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({regY:-75.7,rotation:-21.3,x:78.3,y:-396.6},34).wait(30).to({x:-85.7,y:-582.6},21).wait(2).to({scaleX:1.35,scaleY:1.35,x:-85.8},0).to({x:-75.1,y:-300},47).wait(6).to({scaleX:1.49,scaleY:1.49},0).wait(18).to({regX:-14.6,rotation:-36.3,x:-425.2,y:-578},14).wait(9).to({regX:-14.5,scaleX:1.34,scaleY:1.34,x:-425.1},0).to({rotation:-6.3,x:-424.4,y:-436.7},10).wait(12).to({rotation:-6.3},0).to({x:-264.4},22).wait(8).to({regX:-14.6,scaleX:1.47,scaleY:1.47,x:-264.6},0).wait(21).to({rotation:23.7,x:111.9,y:-331.5},13).wait(16).to({rotation:-6.3,x:-88.2,y:-273.5},10).wait(2).to({scaleX:1.32,scaleY:1.32,rotation:-6.3,x:-88.1},0).to({y:-433.5},13).to({x:-260.1},13).to({y:-289.5},12).to({x:-80.1},13).wait(7).to({scaleX:1.46,scaleY:1.46},0).wait(31).to({rotation:17.2,x:185.3,y:712},17,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// Calque 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E41594").ss(20,1,0,3).p("AiJAAIETAA");
	this.shape.setTransform(-246.2,-291.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E41594").ss(20,1,0,3).p("AjKAAIGVAA");
	this.shape_1.setTransform(-239.7,-291.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E41594").ss(20,1,0,3).p("AkLAAIIXAA");
	this.shape_2.setTransform(-233.2,-291.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E41594").ss(20,1,0,3).p("AlMAAIKZAA");
	this.shape_3.setTransform(-226.7,-291.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E41594").ss(20,1,0,3).p("AmNAAIMbAA");
	this.shape_4.setTransform(-220.2,-291.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E41594").ss(20,1,0,3).p("AnOAAIOdAA");
	this.shape_5.setTransform(-213.7,-291.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E41594").ss(20,1,0,3).p("AoPAAIQfAA");
	this.shape_6.setTransform(-207.2,-291.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E41594").ss(20,1,0,3).p("ApQAAIShAA");
	this.shape_7.setTransform(-200.7,-291.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E41594").ss(20,1,0,3).p("AqRAAIUjAA");
	this.shape_8.setTransform(-194.2,-291.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E41594").ss(20,1,0,3).p("ArSAAIWlAA");
	this.shape_9.setTransform(-187.7,-291.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E41594").ss(20,1,0,3).p("AsTAAIYnAA");
	this.shape_10.setTransform(-181.2,-291);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E41594").ss(20,1,0,3).p("AtUAAIapAA");
	this.shape_11.setTransform(-174.7,-290.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E41594").ss(20,1,0,3).p("ArBAAIWDAA");
	this.shape_12.setTransform(-159.9,-290.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E41594").ss(20,1,0,3).p("AotAAIRbAA");
	this.shape_13.setTransform(-145.2,-290.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E41594").ss(20,1,0,3).p("AmZAAIMzAA");
	this.shape_14.setTransform(-130.4,-290.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E41594").ss(20,1,0,3).p("AkGAAIINAA");
	this.shape_15.setTransform(-115.6,-290.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#E41594").ss(20,1,0,3).p("AhyAAIDlAA");
	this.shape_16.setTransform(-100.9,-290.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},374).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},45).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(6));

	// Calque 14
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAiIIAAER");
	this.shape_17.setTransform(-260.1,-419.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E41594").ss(20,1,0,3).p("AAADGIAAmL");
	this.shape_18.setTransform(-260.1,-413.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAEDIAAoF");
	this.shape_19.setTransform(-260.1,-407.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAFBIAAqA");
	this.shape_20.setTransform(-260.1,-401.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAF9IAAr5");
	this.shape_21.setTransform(-260.1,-395.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAG7IAAt1");
	this.shape_22.setTransform(-260.1,-389.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAH4IAAvv");
	this.shape_23.setTransform(-260.1,-383);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAI1IAAxp");
	this.shape_24.setTransform(-260.1,-376.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAJyIAAzj");
	this.shape_25.setTransform(-260.1,-370.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAquIAAVd");
	this.shape_26.setTransform(-260.1,-364.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAI2IAAxr");
	this.shape_27.setTransform(-260.1,-352.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAG8IAAt3");
	this.shape_28.setTransform(-260.1,-340.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAFDIAAqF");
	this.shape_29.setTransform(-260.1,-328.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#E41594").ss(20,1,0,3).p("AAADJIAAmR");
	this.shape_30.setTransform(-260.1,-316);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAhOIAACd");
	this.shape_31.setTransform(-260.1,-303.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},363).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},53).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[]},1).wait(11));

	// Calque 13
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#44AC34").ss(20,1,0,3).p("Ai4AAIFxAA");
	this.shape_32.setTransform(-411.9,-441.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#44AC34").ss(20,1,0,3).p("AjbAAIG3AA");
	this.shape_33.setTransform(-408.4,-441.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#44AC34").ss(20,1,0,3).p("Aj/AAIH/AA");
	this.shape_34.setTransform(-404.8,-441.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#44AC34").ss(20,1,0,3).p("AkjAAIJHAA");
	this.shape_35.setTransform(-401.2,-441.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#44AC34").ss(20,1,0,3).p("AlHAAIKPAA");
	this.shape_36.setTransform(-397.6,-441.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#44AC34").ss(20,1,0,3).p("AlrAAILXAA");
	this.shape_37.setTransform(-394,-441.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#44AC34").ss(20,1,0,3).p("AmPAAIMfAA");
	this.shape_38.setTransform(-390.4,-441.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#44AC34").ss(20,1,0,3).p("AmyAAINmAA");
	this.shape_39.setTransform(-386.8,-441.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#44AC34").ss(20,1,0,3).p("AnWAAIOtAA");
	this.shape_40.setTransform(-383.2,-441.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#44AC34").ss(20,1,0,3).p("An6AAIP1AA");
	this.shape_41.setTransform(-379.7,-441.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#44AC34").ss(20,1,0,3).p("AoeAAIQ9AA");
	this.shape_42.setTransform(-376.1,-441.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#44AC34").ss(20,1,0,3).p("ApCAAISFAA");
	this.shape_43.setTransform(-372.5,-441.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#44AC34").ss(20,1,0,3).p("ApmAAITNAA");
	this.shape_44.setTransform(-368.9,-441.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#44AC34").ss(20,1,0,3).p("AqKAAIUVAA");
	this.shape_45.setTransform(-365.3,-441.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#44AC34").ss(20,1,0,3).p("AqtAAIVbAA");
	this.shape_46.setTransform(-361.7,-441.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#44AC34").ss(20,1,0,3).p("ArSAAIWkAA");
	this.shape_47.setTransform(-358.1,-441.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#44AC34").ss(20,1,0,3).p("Ar1AAIXrAA");
	this.shape_48.setTransform(-354.6,-441.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#44AC34").ss(20,1,0,3).p("AsZAAIYzAA");
	this.shape_49.setTransform(-351,-441.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#44AC34").ss(20,1,0,3).p("As9AAIZ7AA");
	this.shape_50.setTransform(-347.4,-441.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#44AC34").ss(20,1,0,3).p("AraAAIW1AA");
	this.shape_51.setTransform(-337.5,-441.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#44AC34").ss(20,1,0,3).p("Ap4AAITxAA");
	this.shape_52.setTransform(-327.7,-441.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#44AC34").ss(20,1,0,3).p("AoVAAIQrAA");
	this.shape_53.setTransform(-317.8,-441.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#44AC34").ss(20,1,0,3).p("AlQAAIKhAA");
	this.shape_54.setTransform(-298.1,-441.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#44AC34").ss(20,1,0,3).p("AjtAAIHbAA");
	this.shape_55.setTransform(-288.2,-441.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#44AC34").ss(20,1,0,3).p("AiLAAIEXAA");
	this.shape_56.setTransform(-278.4,-441.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#E41594").ss(20,1,0,3).p("ACRAAIkhAA");
	this.shape_57.setTransform(-103.8,-431.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#E41594").ss(20,1,0,3).p("AjQAAIGhAA");
	this.shape_58.setTransform(-110.3,-432);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#E41594").ss(20,1,0,3).p("AkQAAIIhAB");
	this.shape_59.setTransform(-116.7,-432.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#E41594").ss(20,1,0,3).p("AlRgBIKjAC");
	this.shape_60.setTransform(-123.2,-432.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#E41594").ss(20,1,0,3).p("AmRgBIMjAD");
	this.shape_61.setTransform(-129.6,-432.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#E41594").ss(20,1,0,3).p("AnSgCIOlAF");
	this.shape_62.setTransform(-136.1,-432.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#E41594").ss(20,1,0,3).p("AoSgCIQlAG");
	this.shape_63.setTransform(-142.5,-432.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#E41594").ss(20,1,0,3).p("ApTgDISnAH");
	this.shape_64.setTransform(-148.9,-432.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#E41594").ss(20,1,0,3).p("AqTgEIUnAJ");
	this.shape_65.setTransform(-155.4,-432.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#E41594").ss(20,1,0,3).p("ArUgFIWpAL");
	this.shape_66.setTransform(-161.8,-432.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#E41594").ss(20,1,0,3).p("AsUgFIYpAL");
	this.shape_67.setTransform(-168.3,-432.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#E41594").ss(20,1,0,3).p("ANVAHI6pgN");
	this.shape_68.setTransform(-174.7,-432.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#E41594").ss(20,1,0,3).p("Aq5gFIVzAL");
	this.shape_69.setTransform(-190.2,-432.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#E41594").ss(20,1,0,3).p("AoegDIQ9AH");
	this.shape_70.setTransform(-205.8,-433);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#E41594").ss(20,1,0,3).p("AmDgCIMHAF");
	this.shape_71.setTransform(-221.3,-433.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#E41594").ss(20,1,0,3).p("AjoAAIHRAB");
	this.shape_72.setTransform(-236.8,-433.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#E41594").ss(20,1,0,3).p("ABNAAIiZAA");
	this.shape_73.setTransform(-252.3,-433.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32}]},246).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39,p:{x:-386.8}}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},21).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_39,p:{x:-307.9}}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[]},1).to({state:[{t:this.shape_57}]},56).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},60).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[]},1).wait(16));

	// Calque 12
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#663399").ss(20,1,0,3).p("AAAiVIAAEr");
	this.shape_74.setTransform(-87.3,-576.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#663399").ss(20,1,0,3).p("AAACzIAAll");
	this.shape_75.setTransform(-87.3,-574);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#663399").ss(20,1,0,3).p("AAADRIAAmh");
	this.shape_76.setTransform(-87.3,-571);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#663399").ss(20,1,0,3).p("AAADvIAAnd");
	this.shape_77.setTransform(-87.3,-568);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#663399").ss(20,1,0,3).p("AAAEMIAAoY");
	this.shape_78.setTransform(-87.3,-565);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#663399").ss(20,1,0,3).p("AAAEqIAApT");
	this.shape_79.setTransform(-87.3,-562.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#663399").ss(20,1,0,3).p("AAAFIIAAqP");
	this.shape_80.setTransform(-87.3,-559.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#663399").ss(20,1,0,3).p("AAAFmIAArL");
	this.shape_81.setTransform(-87.3,-556.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#663399").ss(20,1,0,3).p("AAAGEIAAsH");
	this.shape_82.setTransform(-87.3,-553.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#663399").ss(20,1,0,3).p("AAAGiIAAtC");
	this.shape_83.setTransform(-87.3,-550.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#663399").ss(20,1,0,3).p("AAAG/IAAt9");
	this.shape_84.setTransform(-87.3,-547.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#663399").ss(20,1,0,3).p("AAAHdIAAu5");
	this.shape_85.setTransform(-87.3,-544.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#663399").ss(20,1,0,3).p("AAAH7IAAv1");
	this.shape_86.setTransform(-87.3,-541.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#663399").ss(20,1,0,3).p("AAAIYIAAww");
	this.shape_87.setTransform(-87.3,-538.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#663399").ss(20,1,0,3).p("AAAI2IAAxr");
	this.shape_88.setTransform(-87.3,-535.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#663399").ss(20,1,0,3).p("AAAJUIAAyn");
	this.shape_89.setTransform(-87.3,-532.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#663399").ss(20,1,0,3).p("AAAJyIAAzj");
	this.shape_90.setTransform(-87.3,-529.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#663399").ss(20,1,0,3).p("AAAKQIAA0f");
	this.shape_91.setTransform(-87.3,-526.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#663399").ss(20,1,0,3).p("AAAKuIAA1b");
	this.shape_92.setTransform(-87.3,-523.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#663399").ss(20,1,0,3).p("AAALLIAA2V");
	this.shape_93.setTransform(-87.3,-520.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#663399").ss(20,1,0,3).p("AAALpIAA3R");
	this.shape_94.setTransform(-87.3,-517.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#663399").ss(20,1,0,3).p("AAAMHIAA4N");
	this.shape_95.setTransform(-87.3,-514.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#663399").ss(20,1,0,3).p("AAAMlIAA5J");
	this.shape_96.setTransform(-87.3,-511.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#663399").ss(20,1,0,3).p("AAANCIAA6D");
	this.shape_97.setTransform(-87.3,-508.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#663399").ss(20,1,0,3).p("AAANgIAA6/");
	this.shape_98.setTransform(-87.3,-505.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#663399").ss(20,1,0,3).p("AAAN+IAA77");
	this.shape_99.setTransform(-87.3,-502.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#663399").ss(20,1,0,3).p("AAAOcIAA83");
	this.shape_100.setTransform(-87.3,-499.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#663399").ss(20,1,0,3).p("AAAO6IAA9z");
	this.shape_101.setTransform(-87.3,-496.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#663399").ss(20,1,0,3).p("AAAPXIAA+t");
	this.shape_102.setTransform(-87.3,-493.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#663399").ss(20,1,0,3).p("AAAP1IAA/p");
	this.shape_103.setTransform(-87.3,-490.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#663399").ss(20,1,0,3).p("AAAQTMAAAggl");
	this.shape_104.setTransform(-87.3,-487.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#663399").ss(20,1,0,3).p("AAAQxMAAAghh");
	this.shape_105.setTransform(-87.3,-484.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#663399").ss(20,1,0,3).p("AAAROMAAAgib");
	this.shape_106.setTransform(-87.3,-481.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#663399").ss(20,1,0,3).p("AAARsMAAAgjX");
	this.shape_107.setTransform(-87.3,-478.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#663399").ss(20,1,0,3).p("AAASKMAAAgkT");
	this.shape_108.setTransform(-87.3,-475.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#663399").ss(20,1,0,3).p("AAASoMAAAglP");
	this.shape_109.setTransform(-87.3,-472.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#663399").ss(20,1,0,3).p("AAATFMAAAgmJ");
	this.shape_110.setTransform(-87.3,-469.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#663399").ss(20,1,0,3).p("AAATjMAAAgnF");
	this.shape_111.setTransform(-87.3,-466.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#663399").ss(20,1,0,3).p("AAAUBMAAAgoB");
	this.shape_112.setTransform(-87.3,-463.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#663399").ss(20,1,0,3).p("AAAUfMAAAgo9");
	this.shape_113.setTransform(-87.3,-460.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#663399").ss(20,1,0,3).p("AAAU9MAAAgp5");
	this.shape_114.setTransform(-87.3,-457.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#663399").ss(20,1,0,3).p("AAAVaMAAAgqz");
	this.shape_115.setTransform(-87.3,-454.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#663399").ss(20,1,0,3).p("AAAV4MAAAgrv");
	this.shape_116.setTransform(-87.3,-451.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#663399").ss(20,1,0,3).p("AAA2VMAAAAsr");
	this.shape_117.setTransform(-87.3,-448.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#663399").ss(20,1,0,3).p("AAAIZIAAww");
	this.shape_118.setTransform(-87.3,-359.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#663399").ss(20,1,0,3).p("AAAiyIAAFl");
	this.shape_119.setTransform(-87.3,-323.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAjvIAAHf");
	this.shape_120.setTransform(-430.4,-565);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAEuIAApc");
	this.shape_121.setTransform(-430.4,-558.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAFtIAArZ");
	this.shape_122.setTransform(-430.4,-552.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAGrIAAtV");
	this.shape_123.setTransform(-430.4,-546.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAHqIAAvT");
	this.shape_124.setTransform(-430.4,-540.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAIoIAAxP");
	this.shape_125.setTransform(-430.4,-533.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAJnIAAzN");
	this.shape_126.setTransform(-430.4,-527.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAKlIAA1J");
	this.shape_127.setTransform(-430.4,-521.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAArjIAAXH");
	this.shape_128.setTransform(-430.4,-515.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAJLIAAyV");
	this.shape_129.setTransform(-430.4,-499.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAGzIAAtl");
	this.shape_130.setTransform(-430.4,-484.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAEaIAAoz");
	this.shape_131.setTransform(-430.4,-469.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#44AC34").ss(20,1,0,3).p("AAAiBIAAED");
	this.shape_132.setTransform(-430.4,-454.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#E41594").ss(20,1,0,3).p("AAABLIAAiV");
	this.shape_133.setTransform(-89.3,-298.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAiDIAAEH");
	this.shape_134.setTransform(-89.3,-304.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAi8IAAF5");
	this.shape_135.setTransform(-89.3,-309.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAj1IAAHs");
	this.shape_136.setTransform(-89.3,-315.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAkvIAAJf");
	this.shape_137.setTransform(-89.3,-321.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAloIAALR");
	this.shape_138.setTransform(-89.3,-327);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAmhIAAND");
	this.shape_139.setTransform(-89.3,-332.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAnbIAAO3");
	this.shape_140.setTransform(-89.3,-338.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAoUIAAQp");
	this.shape_141.setTransform(-89.3,-344.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#E41594").ss(20,1,0,3).p("AAApNIAASb");
	this.shape_142.setTransform(-89.3,-350);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAqHIAAUP");
	this.shape_143.setTransform(-89.3,-355.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#E41594").ss(20,1,0,3).p("AAALBIAA2B");
	this.shape_144.setTransform(-89.3,-361.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#E41594").ss(20,1,0,3).p("AAApIIAASR");
	this.shape_145.setTransform(-89.3,-373.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAnQIAAOi");
	this.shape_146.setTransform(-89.3,-385.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAlZIAAKz");
	this.shape_147.setTransform(-89.3,-397.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#E41594").ss(20,1,0,3).p("AAAjhIAAHD");
	this.shape_148.setTransform(-89.3,-409.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#E41594").ss(20,1,0,3).p("AAABrIAAjV");
	this.shape_149.setTransform(-89.3,-421.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_74}]},130).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81,p:{y:-556.1}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93,p:{y:-520.4}}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99,p:{y:-502.5}}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105,p:{y:-484.6}}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111,p:{y:-466.8}}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},6).to({state:[{t:this.shape_117}]},10).to({state:[{t:this.shape_111,p:{y:-431}}]},1).to({state:[{t:this.shape_105,p:{y:-413.2}}]},1).to({state:[{t:this.shape_99,p:{y:-395.3}}]},1).to({state:[{t:this.shape_93,p:{y:-377.5}}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_81,p:{y:-341.7}}]},1).to({state:[{t:this.shape_119}]},1).to({state:[]},1).to({state:[{t:this.shape_120}]},25).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_128}]},51).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[]},1).to({state:[{t:this.shape_133}]},50).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},68).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[]},1).wait(21));

	// triangle
	this.instance_1 = new lib.triangle();
	this.instance_1.setTransform(-427,-304.2,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(406).to({scaleX:0.1,scaleY:0.1},9).to({_off:true},1).wait(1));

	// triangle
	this.instance_2 = new lib.triangle();
	this.instance_2.setTransform(-260.9,-304.2,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(350).to({scaleX:1.2,scaleY:1.2},0).wait(57).to({scaleX:1,scaleY:1},0).to({scaleX:0.1,scaleY:0.1},9).to({_off:true},1).wait(3));

	// triangle
	this.instance_3 = new lib.triangle();
	this.instance_3.setTransform(-260.9,-593.4,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(273).to({y:-447.4},9).wait(58).to({scaleX:1.2,scaleY:1.2},0).wait(67).to({scaleX:1,scaleY:1},0).to({scaleX:0.1,scaleY:0.1},9).to({_off:true},1).wait(5));

	// circle_purple
	this.instance_4 = new lib.circle_purple();
	this.instance_4.setTransform(-87.3,-305.9,0.1,0.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.triangle();
	this.instance_5.setTransform(-87.3,-305.9,0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(155).to({scaleX:1.2,scaleY:1.2},0).wait(6).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:0.11,scaleY:0.11},6).to({_off:true},1).wait(252));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(203).to({_off:false},0).to({scaleX:1,scaleY:1},6).wait(126).to({scaleX:1.2,scaleY:1.2},0).wait(90).to({scaleX:1,scaleY:1},0).to({scaleX:0.1,scaleY:0.1},9).to({_off:true},1).wait(7));

	// circle_purple
	this.instance_6 = new lib.circle_purple();
	this.instance_6.setTransform(-87.3,-445.9,0.1,0.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.triangle();
	this.instance_7.setTransform(-87.3,-445.9,0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(134).to({scaleX:1.2,scaleY:1.2},0).wait(29).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:0.11,scaleY:0.11},6).to({_off:true},1).wait(252));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(200).to({_off:false},0).to({scaleX:1,scaleY:1},6).wait(141).to({scaleX:1.2,scaleY:1.2},0).wait(76).to({scaleX:1,scaleY:1},0).to({scaleX:0.1,scaleY:0.1},9).to({_off:true},1).wait(9));

	// circle_purple
	this.instance_8 = new lib.circle_purple();
	this.instance_8.setTransform(-87.3,-591.9,0.1,0.1);
	this.instance_8._off = true;

	this.instance_9 = new lib.triangle();
	this.instance_9.setTransform(-87.3,-591.9,0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(112).to({scaleX:1.2,scaleY:1.2},0).wait(53).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:0.11,scaleY:0.11},6).to({_off:true},1).wait(252));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(197).to({_off:false},0).to({scaleX:1,scaleY:1},6).wait(193).to({scaleX:1.2,scaleY:1.2},8).wait(17).to({scaleX:1,scaleY:1},0).to({scaleX:0.1,scaleY:0.1},9).to({_off:true},1).wait(11));

	// rect
	this.instance_10 = new lib.rect();
	this.instance_10.setTransform(-264.3,-441.1,0.1,0.1);
	this.instance_10._off = true;

	this.instance_11 = new lib.triangle();
	this.instance_11.setTransform(-264.3,-591.1,0.1,0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(252).to({scaleX:1.2,scaleY:1.2},0).wait(8).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:0.1,scaleY:0.1},5).to({_off:true},1).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(307).to({_off:false},0).to({scaleX:1,scaleY:1},5).wait(87).to({scaleX:1.2,scaleY:1.2},8).wait(12).to({scaleX:1,scaleY:1},0).to({scaleX:0.1,scaleY:0.1},9).to({_off:true},1).wait(13));

	// rect
	this.instance_12 = new lib.rect();
	this.instance_12.setTransform(-430.4,-441.1,0.1,0.1);
	this.instance_12._off = true;

	this.instance_13 = new lib.triangle();
	this.instance_13.setTransform(-430.4,-441.1,0.1,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(221).to({scaleX:1.2,scaleY:1.2},0).wait(41).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:0.1,scaleY:0.1},5).to({_off:true},1).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(304).to({_off:false},0).to({scaleX:1,scaleY:1},5).wait(93).to({scaleX:1.2,scaleY:1.2},8).wait(7).to({scaleX:1,scaleY:1},0).to({scaleX:0.1,scaleY:0.1},9).to({_off:true},1).wait(15));

	// rect
	this.instance_14 = new lib.rect();
	this.instance_14.setTransform(-430.4,-589.1,0.1,0.1);

	this.instance_15 = new lib.triangle();
	this.instance_15.setTransform(-430.4,-589.1,0.1,0.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1,scaleY:1},7).wait(213).to({scaleX:1.2,scaleY:1.2},0).wait(52).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:0.1,scaleY:0.1},5).to({_off:true},1).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(302).to({_off:false},0).to({scaleX:1,scaleY:1},5).wait(97).to({scaleX:1.2,scaleY:1.2},8).wait(3).to({scaleX:1,scaleY:1},0).to({scaleX:0.1,scaleY:0.1},9).to({_off:true},1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-435.2,-593.9,9.6,9.6);


// stage content:



(lib.dots_tuto_popup_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choice_0:454});

	// timeline functions:
	this.frame_453 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_455 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(453).call(this.frame_453).wait(2).call(this.frame_455).wait(1));

	// Calque 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,0,3).p("A/YAAMA+xAAA");
	this.shape.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(456));

	// Calque 14
	this.instance = new lib.dots_motion_intro("synched",0,false);
	this.instance.setTransform(284.3,236.9,0.311,0.311,0,0,0,3.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},454).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.6,150.7,407,151.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;