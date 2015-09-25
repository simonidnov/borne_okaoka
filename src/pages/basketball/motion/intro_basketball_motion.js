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



// stage content:
(lib.intro_basketball_motion = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AngEeQgUgJgKgQQgLgQAAgUIAsAAQAAAjAqAAQAQAAAJgGQAIgHAAgLQAAgNgIgGQgJgHgXgHQgXgIgNgHQglgUAAghQAAgRAKgOQAKgNASgIQASgHAXAAQAXAAASAIQASAIAKAPQAJAPAAATIgrAAQAAgOgKgIQgJgIgRAAQgQAAgJAGQgJAHAAALQAAALALAHQAKAHAVAGQAlALARARQARARAAAZQAAAbgUAQQgVAQgkAAQgYAAgVgJgAMAEkIAAjWIAsAAIAACyIBeAAIAAAkgAJeEkIAAjWIAsAAIAACyIBeAAIAAAkgAIcEkIgPgsIhNAAIgOAsIgvAAIBPjWIApAAIBQDWgAIBDUIgahQIgbBQIA1AAgADWEkIAAjWIBLAAQAmAAAUAPQAUAPAAAdQAAAQgIAMQgIALgOAGQAQAEAKANQAJAMAAASQAAAfgTAQQgUAPgkABgAECEAIAlAAQAQAAAJgHQAIgHAAgNQAAgegeAAIgoAAgAECCoIAgAAQAigBAAgaQAAgOgJgGQgIgHgSAAIgfAAgABQEkIAAiyIhBAAIAAgkICuAAIAAAkIhBAAIAACygAiKEkIAAjWICMAAIAAAkIhgAAIAAAzIBUAAIAAAiIhUAAIAAA5IBhAAIAAAkgAjPEkIg2hWIgXAZIAAA9IgsAAIAAjWIAsAAIAABhIBJhhIA2AAIhLBfIBOB3gApDEkIgOgsIhNAAIgPAsIgvAAIBQjWIAoAAIBQDWgApdDUIgbhQIgaBQIA1AAgAuJEkIAAjWIBLAAQAnAAAUAPQAUAPAAAdQAAAQgIAMQgIALgPAGQARAEAJANQAKAMAAASQAAAfgUAQQgTAPglABgAtdEAIAmAAQAPAAAJgHQAJgHAAgNQAAgegeAAIgpAAgAtdCoIAhAAQAhgBAAgaQAAgOgIgGQgJgHgSAAIgfAAgAjAhYQgVgMgMgYQgLgYAAgeIAAgLQAAgfALgYQAMgYAUgNQAVgNAbAAQAaAAAVANQAVANALAYQALAYAAAfIAAAJQAAAggLAYQgLAXgUANQgVANgbAAQgbAAgUgNgAizjwQgMARgBAhIAAAKQAAAhAMASQAMASAXAAQAWAAAMgRQAMgSAAghIAAgKQAAgigMgRQgMgSgWAAQgWAAgMASgAkuhOIgohOIgjAAIAABOIgsAAIAAjVIBQAAQAlAAAVARQAUARAAAeQAAAWgJAPQgKAOgTAJIAuBXIAAACgAl5i/IAkAAQAQAAAJgJQAJgIAAgPQAAgPgIgJQgJgIgRAAIgkAAgAorhOIAAixIhAAAIAAgkICtAAIAAAkIhBAAIAACxgAqwhOIhWiMIAACMIgsAAIAAjVIAsAAIBWCNIAAiNIAsAAIAADVgAuGhOIAAjVIAsAAIAADVg");
	this.shape.setTransform(147.5,110.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(256.9,181.1,181.3,59.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;