(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 400,
	fps: 40,
	color: "#999999",
	manifest: []
};



// symbols:



// stage content:
(lib.dots_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:3});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_2 = function() {
		if(typeof window['navigation'] !== "undefined"){
			window['navigation'].intro_motion_stopped();
		}
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(2));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoHPuQgmgWAAguQAAgTAKgTIFKn8QAEgJAAgLQABgXgRgPQgOgQgWAAIjYAAQgfAAgXgXQgWgWAAgfQAAggAWgYQAXgWAfAAILBAAQAfAAAWAWQAXAYgBAgQABAfgXAWQgWAXgfAAIjoAAIEqI8QAJATAAAVQABAsgmAXQgbAPghgHQgdgKgRgbIj2nkIlEHuQgPAZgfALQgLADgKAAQgUAAgSgLgAGoGjQgWgYABggQgBgfAWgYQAXgWAhAAQAgAAAXAWQAXAYAAAfQAAAggXAYQgXAWggAAQghAAgXgWgAGoCkQgWgYABggQgBgfAWgYQAXgWAhAAQAgAAAYAWQAWAYAAAfQAAAggWAYQgYAWggAAQghAAgXgWgAk2gHQhmAAhIhJQhJhJAAhnIAAn/QAAhnBJhJQBIhJBmAAIFqAAQBnAABHBJQBKBJgBBnIAAH/QABBnhKBJQhHBJhnAAgAlzs7QghAhAAAuIAAHZQAAAuAhAhQAhAhAuAAIFHAAQAuAAAhghQAhghAAguIAAnZQAAgughghQghghguAAIlHAAQguAAghAhg");
	this.shape.setTransform(476,185.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(870.2,283.4,111.7,203.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;