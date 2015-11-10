(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 200,
	fps: 50,
	color: "#0095A7",
	manifest: []
};



// symbols:



(lib.where_dot = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-6.2,12.5,12.5);


(lib.where_capsule = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkADXIAAitQAAhoBMhMQBLhMBpAAQBqAABLBMQBMBMAABoIAACtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.7,-21.5,51.5,43);


(lib.where_bar = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj9AtQgTgBgOgNQgMgNAAgSQAAgRAMgOQANgMATgBIH8AAQATAAANANQANAOAAARQAAASgNANQgNANgTABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-4.5,60,9);


(lib.number_hand_dgreen = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7).p("EAHpgjGIAAg9IAAgFIAAgdQAAg8gqgqQgrgrg8AAQg7AAgrArQgRARgLAVQgBACgBADQgMAZgBAeIAAg1IAAgFIAAggQAAg8gqgrQgrgrg8AAQg5AAgrArQgpAqgCA5IAAogIAAgFIAAgIQAAg8gqgrQgrgrg8AAQg7AAgrArQgqArAAA8IAAJgIAAAFIAAADIAACVEADHgkpIAAAEEAHpgjGIAAAGEgF6glMQhFhIhCglQgFgDgGgDQgXgMgXgIQhhghg0A8Qg9BFAlBUQATArAeAcQB8CBBqEbQAjBcAgBsQARA3ARA9QAVBQAxBCQAxBCBEAtMAAABFFIMeAAMAAAhFnQBGg7AihaQAghUAAhqIAApMQAAg9gmgpQgmgrg7AAQg7AAglArQgRATgJAWQgBACgBABQgJAYgBAcEgBZgmDIAAgE");
	this.shape.setTransform(4.6,218.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0095A7").s().p("EgCwAxGMAAAhFFQhEgsgxhDQgxhCgVhQQgRg9gRg4QgghrgjhcQhqkbh8iBQgegcgTgrQglhUA9hFQA0g8BhAhQAXAIAXAMIALAGQBCAlBFBIIAACVIAAiVIAAgDIAAgFIAApgQAAg8AqgrQArgqA7AAQA8AAArAqQAqArAAA8IAAAIIAAAFIAAIgIAAAEIAAgEQACg5ApgpQArgrA5gBQA8ABArArQAqAqAAA8IAAAgIAAAFIAAA1QABgeAMgZIACgFQALgVARgRQArgrA7AAQA8AAArArQAqAqAAA9IAAAcIAAAFIAAA9IAAAGIAAgGQABgcAJgYIACgDQAJgWARgTQAlgrA7AAQA7AAAmArQAmApAAA9IAAJMQAABqggBUQgiBZhGA8MAAABFngEADHgkkIAAgFg");
	this.shape_1.setTransform(4.6,218.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#485DA7").s().p("AH8FWIgHgHIAAgFIAHAHIAFAEIgCAEIgDgDgAmCDoQgXgggjgXQgdgUgcgEIgLgGQAhABAjAYQAjAXAXAgIAUAcIAAAFgADTDvIAPgCIgCAFIgNACgAhNlTIAAgFQAHASAAAUIAAACQAAgSgHgRg");
	this.shape_2.setTransform(3.4,-45.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.7,-99.2,167.6,635.6);


(lib.where_container_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// where_bar
	this.instance = new lib.where_bar();
	this.instance.setTransform(0,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// where_capsule
	this.instance_1 = new lib.where_capsule();
	this.instance_1.setTransform(-0.2,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:6},8).to({y:-14},11).wait(1));

	// where_dot
	this.instance_2 = new lib.where_dot();
	this.instance_2.setTransform(-0.2,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-35.5,60,71);


(lib.where_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// where_bar
	this.instance = new lib.where_bar();
	this.instance.setTransform(0,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// where_capsule
	this.instance_1 = new lib.where_capsule();
	this.instance_1.setTransform(-0.2,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:6},8).to({y:-14},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-35.5,60,71);


(lib.where_tuto_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// number_hand_dgreen
	this.instance = new lib.number_hand_dgreen();
	this.instance.setTransform(-1.9,28,0.467,0.467,-21.3,0,0,-14.4,-75.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({regX:-14.5,rotation:16.6,x:93.1,y:-67},17).wait(3).to({regX:-14.4,scaleX:0.42,scaleY:0.42,rotation:16.6},0).wait(8).to({regX:-14.5,scaleX:0.46,scaleY:0.46},0).wait(1).to({x:33.1,y:-42},8).wait(87).to({rotation:-13.4,x:-24.9,y:-73.4},7).wait(4).to({regX:-14.6,scaleX:0.42,scaleY:0.42,rotation:-13.4,x:-25},0).to({regX:-14.5,scaleX:0.46,scaleY:0.46,x:-24.9},9).wait(4).to({y:26.6},13).wait(6));

	// where_container
	this.instance_1 = new lib.where_container("single",0);
	this.instance_1.setTransform(89.9,-95.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({mode:"synched",loop:false},0).wait(8).to({startPosition:8},0).wait(1).to({mode:"single"},0).wait(7).to({startPosition:8},0).to({startPosition:8},7).to({startPosition:8},6).wait(5).to({startPosition:8},0).to({x:-29.9,y:-167.1},7).to({x:-139.9,y:-95.1},7).wait(35).to({mode:"synched",loop:false},0).wait(28).to({startPosition:0},0).wait(8).to({mode:"single",startPosition:8},0).wait(7).to({startPosition:8},0).to({startPosition:8},10).to({startPosition:8},8).wait(8).to({startPosition:8},0).to({x:-29.9,y:-37.1},12).to({x:89.6,y:-95.1},11).wait(27).to({mode:"synched",loop:false},0).wait(19));

	// where_container_dot
	this.instance_2 = new lib.where_container_dot("single",0);
	this.instance_2.setTransform(-25,-95.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({mode:"synched",loop:false},0).wait(8).to({startPosition:8},0).wait(1).to({mode:"single"},0).wait(7).to({startPosition:8},0).to({x:-79.9,y:-150.1},7).to({x:-139.9,y:-95.1},6).wait(5).to({startPosition:8},0).to({x:-29.9,y:-30.1},7).to({x:90.1,y:-95.1},7).wait(35).to({x:89.6,mode:"synched",loop:false},0).wait(28).to({startPosition:0},0).wait(8).to({mode:"single",startPosition:8},0).wait(7).to({startPosition:8},0).to({x:30.1,y:-163.1},10).to({x:-25.4,y:-95.1},8).wait(58).to({mode:"synched",loop:false},0).wait(19));

	// where_container
	this.instance_3 = new lib.where_container("single",0);
	this.instance_3.setTransform(-139.9,-95.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({mode:"synched",loop:false},0).wait(8).to({startPosition:8},0).wait(1).to({mode:"single"},0).wait(7).to({startPosition:8},0).to({x:-79.9,y:-49.1},7).to({x:-25.4,y:-95.1},6).wait(54).to({mode:"synched",loop:false},0).wait(28).to({startPosition:0},0).wait(8).to({mode:"single",startPosition:8},0).wait(7).to({startPosition:8},0).to({x:33.1,y:-42.8},10).to({x:89.6,y:-95.1},8).wait(8).to({x:90.1},0).to({x:-29.9,y:-163.1},12).to({x:-139.9,y:-95.1},11).wait(27).to({mode:"synched",loop:false},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.9,-130.6,318.5,434.9);


// stage content:



(lib.where_tuto_popup_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choice_0:248});

	// timeline functions:
	this.frame_247 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_249 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(247).call(this.frame_247).wait(2).call(this.frame_249).wait(1));

	// Calque 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,0,3).p("A/YAAMA+xAAA");
	this.shape.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(250));

	// Calque 14
	this.instance = new lib.where_tuto_motion("synched",0,false);
	this.instance.setTransform(228.7,192.9,1,1,0,0,0,2.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},248).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.6,161.5,407,425.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;