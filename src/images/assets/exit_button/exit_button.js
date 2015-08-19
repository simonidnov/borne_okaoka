(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 100,
	height: 100,
	fps: 24,
	color: "#003333",
	manifest: []
};



// symbols:



(lib.poignee = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape.setTransform(0,-3.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,-6.3,6.3,6.3);


(lib.exit_button_breaked = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
		var self = this;
		setTimeout(function(){
			self.play();
		},2000);
	}
	this.frame_13 = function() {
		this.stop();
		var self = this;
		var delay = (Math.round(Math.random()*10000)+2000);
		setTimeout(function(){
			self.play();
		},12000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(5).call(this.frame_13).wait(1));

	// poignee
	this.instance = new lib.poignee();
	this.instance.setTransform(-6.7,-39.2,1,1,0,0,0,0,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:10.2,y:-28.9},8).to({x:-6.7,y:-39.2},5).wait(1));

	// cadre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADyFCInjAAIAAqDIHjAAg");
	this.shape.setTransform(9,-42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADylHIAAKDInPAMIAAgMIgUAAIAAqDgAjdE8IAAp3IHPgM");
	this.shape_1.setTransform(9,-41.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADylOIAAKEIm7AZIAAgZIgoAAIAAqEgAjJE2IAAprIG7gZ");
	this.shape_2.setTransform(9,-41);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADylUIAAKDImnAmIAAgmIg8AAIAAqDgAi1EvIAApdIGngm");
	this.shape_3.setTransform(9,-40.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADylaIAAKDImTAyIAAgyIhQAAIAAqDgAihgiQgJgMgCgQIgNiYQgBgYAQgUQAEgFAFgEIAAgdIGTgyAihEpIAAlLIAAjp");
	this.shape_4.setTransform(9,-39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1,1).p("AD0lgIAAKDIl/A+IAAgwIAAgOIAAi8IAAhlIgIACQgYAEgVgMQgUgPgEgYIgXh+IgEgXQgDgSAHgQQADgGADgFQAPgUAYgEIA3gKIAAgTgAjvjiIAAh+IHjAAAi9BwIAygJAiXFLIAMgaAiLEjIhkAAIAAnMAiLACIAAkR");
	this.shape_5.setTransform(8.8,-39.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1,1).p("AESlnIAAKEIlrBLIAAhLIAAhCIAAh0IAAhnIhGASQgYAHgVgMQgCgCgDgBQgSgLgFgVIgniSQgGgYAMgWQANgVAYgGIATgGIBTgWQATgEASAHIAAgSgAjRj3IAAhwIHjAAAi/CCIBmgbAhxEdIAYhCAiGFZIAVg8IhgAAIAAkTAhZEdIgYAAAhZAAIAAkK");
	this.shape_6.setTransform(5.8,-38.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("AEwltIAAKDIlYBYIAAhYIg6AAIhRAAIAAiIIAAhqQgTAEgSgIQgXgLgJgWIgziOQgIgXAKgWQALgXAXgIIBUgfIAPgFQAYgIAWAKQAWAKAJAXIAvCFIAAi+gAizj6IAAhzIHjAAAgogbQgKATgWAIIhjAhQgEACgEABAgogbIAAg8AgoBcIAAh3AhiEWIAkiHIAWAUIAAhHAjBCTIAOgFICLgyAh2FkIAUhOAgoEWIAAhz");
	this.shape_7.setTransform(2.8,-37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAIBFIAAlUIFFhkIAAKDIlFBkIAAhkIAAhFgAiWjvIAAiEIHjAAAiWjvQATAIAJAUIBACJQALAXgJAYQgIAWgXAKIg/AcIggAPQgXAMgXgJQgYgJgKgWIhAiHQgLgXAJgXQAIgYAXgKIBggtQAWgKAYAJQACAAADACgAjCCkIAsgVIAAhuAhVEQIhBAAIAAiBICehKAhVEQIAUh8IBJA3AhlFuIAQheAAIEQIhdAA");
	this.shape_8.setTransform(-0.1,-37.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1,1).p("AEdlpIAAKDIlkBQIAAhQIAAhxIAAhEIAAhmIhcAZQgSAGgRgGQgGgCgFgCQgVgMgIgWIgriRQgHgYALgWQANgVAXgHIArgNIAAhzgAhHjtIAAgsIFkhQAjGj2IA7gSQAXgHAWAMQAPAIAIAOAhrEaIAkhxAiBFeIAWhEAhHEaIgkAAIhbAAIAAkCAjACJIB5gkAhHgBIAAjs");
	this.shape_9.setTransform(4.7,-38.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADylfIAAKDImEA8IAAgfIAAgdIAAi/IAAhlQgSAAgQgLQgUgPgEgYIgWiWQgDgYAPgUQAPgUAYgEIAdgEIAAgTgAi0BqIAigFAiUFGIACgFAiSEkIhfAAIAAqDIHjAAAiSAAIAAkQ");
	this.shape_10.setTransform(9,-39.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADylVIAAKDImjAoIAAgoIhAAAIAAqDgAixEuIAApbIGjgo");
	this.shape_11.setTransform(9,-40.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADylLIAAKDInDAUIAAgUIggAAIAAqDgAjRE4IAApvIHDgU");
	this.shape_12.setTransform(9,-41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-77,53.5,69.5);


// stage content:



(lib.exit_button = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.exit_button_breaked();
	this.instance.setTransform(45.5,51,1,1,0,0,0,0,-37.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(77.8,61.2,53.5,69.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;