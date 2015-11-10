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



(lib.dots_okaoka_circle = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2A2QgWgWgBggQABgfAWgXQAXgWAfgBQAgABAWAWQAYAXAAAfQAAAggYAWQgWAYggAAQgfAAgXgYg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.8,-7.8,15.6,15.6);


(lib.dots_intro_triangle = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AACgzIA8BnIh7AAg");
	this.shape.setTransform(0,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9A0IA/hnIA8Bng");
	this.shape_1.setTransform(0,-0.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-6.8,14.5,12.5);


(lib.dots_intro_rect = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(20,1,1).p("AAAmPIGQGPImQGQImPmQg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmPAAIGPmOIGQGOImQGPg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100.1,100);


(lib.dots_intro_okaoka_head = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AicmtIE5AAQDIAAAADIIAAHLQAADIjIAAIk5AAQjIAAAAjIIAAnLQAAjIDIAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.2,-50.5,86.5,101.1);


// stage content:
(lib.dots_motion_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:178});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_171 = function() {
		if(typeof window['navigation'] !== "undefined"){
			window['navigation'].intro_motion_stopped();
		}
	}
	this.frame_178 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(171).call(this.frame_171).wait(7).call(this.frame_178).wait(38));

	// Calque 7
	this.instance = new lib.dots_okaoka_circle();
	this.instance.setTransform(524.1,196.1);

	this.instance_1 = new lib.dots_intro_rect();
	this.instance_1.setTransform(189.6,273.9,0.223,0.223,0,0,0,0,40.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({x:519.6,y:146.7},0).wait(1).to({x:513.6,y:98.5},0).wait(1).to({x:505.4,y:50.9},0).wait(1).to({x:493.2,y:3.1},0).wait(1).to({x:474.3,y:-41.7},0).wait(1).to({x:437.4,y:-74},0).wait(1).to({x:383.6,y:-54.6},0).wait(1).to({x:343.3,y:-11.1},0).wait(1).to({x:311.7,y:34.7},0).wait(1).to({x:284,y:81.4},0).wait(1).to({x:258.7,y:128.3},0).wait(1).to({x:235,y:175.6},0).wait(1).to({x:212.5,y:223.1},0).wait(1).to({x:190.1,y:270.2},0).to({_off:true},8).wait(170));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,y:221.7},6).to({scaleX:1.45,scaleY:1.45},4).to({scaleX:1.74,scaleY:1.74},3).to({regY:39.8,scaleX:1.47,scaleY:1.47,x:189.8,y:273.4},5).to({y:243.4},3).to({x:190.2,y:277.6},3).wait(146));

	// Calque 6
	this.instance_2 = new lib.dots_okaoka_circle();
	this.instance_2.setTransform(524.1,221.6);

	this.instance_3 = new lib.dots_intro_triangle();
	this.instance_3.setTransform(742.6,278,1.705,1.705,0,0,0,0,4.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({x:529.3,y:196.9},0).wait(1).to({x:534.5,y:173.2},0).wait(1).to({x:540,y:149.6},0).wait(1).to({x:545.7,y:126.1},0).wait(1).to({x:551.7,y:102.6},0).wait(1).to({x:558.1,y:79.3},0).wait(1).to({x:565,y:56.1},0).wait(1).to({x:572.5,y:33.1},0).wait(1).to({x:580.8,y:10.5},0).wait(1).to({x:590.1,y:-11.6},0).wait(1).to({x:601.3,y:-32.9},0).wait(1).to({x:616.1,y:-52.3},0).wait(1).to({x:638.8,y:-61.4},0).wait(1).to({x:662.5,y:-42.4},0).wait(1).to({x:677.1,y:-15.3},0).wait(1).to({x:687.5,y:11.4},0).wait(1).to({x:695.8,y:37.8},0).wait(1).to({x:703,y:64},0).wait(1).to({x:709.4,y:90},0).wait(1).to({x:715.2,y:116},0).wait(1).to({x:720.5,y:141.9},0).wait(1).to({x:725.5,y:167.6},0).wait(1).to({x:730.1,y:193.4},0).wait(1).to({x:734.5,y:219},0).wait(1).to({x:738.6,y:244.6},0).wait(1).to({x:742.6,y:270.2},0).to({_off:true},33).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83).to({_off:false},0).to({scaleX:9.37,scaleY:9.37,y:242.5},5).to({regY:4.5,scaleX:11.32,scaleY:11.32,y:241.4},6).to({regY:4.6,scaleX:9.37,scaleY:9.37,y:278.5},7).to({y:248.5},3).to({scaleX:10.76,scaleY:10.76,y:278.3},3).wait(109));

	// tete
	this.instance_4 = new lib.dots_intro_okaoka_head();
	this.instance_4.setTransform(463.2,176.8,1,1,0,0,0,0,43.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AicmtIE5AAQDIAAAADIIAAHLQAADIjIAAIk5AAQjIAAAAjIIAAnLQAAjIDIAAg");
	this.shape.setTransform(463.2,133.7);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al1jIQAAjJDBgSQCcgSChAAQDJAAASDBQASDcAADhQAADIjBATQicASihAAQjJAAgSjBQgSjcAAjhg");
	this.shape_1.setTransform(463.3,134);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmHirQAAjKC6gkQCbglCnAAQDKAAAkC7QAlDRAADeQAADKi7AkQiaAkioAAQjJAAgli6QgkjRAAjeg");
	this.shape_2.setTransform(463.4,134.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmUi3QAAjRDDgjQChgjCtAAQDSAAAjDDQAjDbAADoQAADRjDAjQihAjitAAQjSAAgjjDQgjjbAAjog");
	this.shape_3.setTransform(463.3,128.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AnEiJQAAjbC+hGQClhGC/AAQDbAABGC+QBGDRAADqQAADci+BGQikBGjAAAQjbAAhGi+QhGjRAAjrg");
	this.shape_4.setTransform(463.5,122.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("An0haQAAjlC5hpQCohpDRAAQDlAABpC5QBpDGAADuQAADki5BpQioBpjRAAQjlAAhpi5QhpjFAAjug");
	this.shape_5.setTransform(463.6,116.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AokgsQAAjuC0iMQCsiMDjAAQDuAACLC0QCMC6AADyQAADti0CMQirCMjjAAQjuAAiMi0QiMi6AAjxg");
	this.shape_6.setTransform(463.7,111.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AJUAAQAAD2iuCvQivCvj3AAQj1AAivivQivivAAj2QAAj2CvivQCvivD1AAQD3AACvCvQCuCvAAD2g");
	this.shape_7.setTransform(463.9,105.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("ApTAAQAAj2CvivQCvivD1AAQD3AACvCvQCuCvAAD2QAAD2iuCvQivCvj3AAQj1AAivivQivivAAj2g");
	this.shape_8.setTransform(463.9,108.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("ApTAAQAAj2CvivQCvivD1AAQD3AACvCvQCuCvAAD2QAAD3iuCvQivCvj3AAQj1AAivivQivivAAj3g");
	this.shape_9.setTransform(463.9,111.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AozAAQAAjoCmilQClilDoAAQDpAAClClQClClAADoQAADpilClQilCljpAAQjoAAililQimilAAjpg");
	this.shape_10.setTransform(463.9,121.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AoRAAQAAjaCbicQCcibDaAAQDcAACbCbQCbCcAADaQAADbibCbQibCcjcAAQjaAAicicQibibAAjbg");
	this.shape_11.setTransform(463.9,128.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AHxAAQAADNiSCSQiSCSjNAAQjNAAiSiSQiRiSAAjNQAAjMCRiTQCSiRDNAAQDNAACSCRQCSCTAADMg");
	this.shape_12.setTransform(463.9,135.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AnwAAQAAjMCRiTQCSiRDNAAQDNAACSCRQCSCTAADMQAADNiSCSQiSCSjNAAQjNAAiSiSQiRiSAAjNg");
	this.shape_13.setTransform(463.9,159);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AnwAAQAAjMCRiSQCSiSDNAAQDNAACSCSQCSCSAADMQAADNiSCSQiSCSjNAAQjNAAiSiSQiRiSAAjNg");
	this.shape_14.setTransform(463.9,182.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AHxAAQAADNiSCSQiSCSjNAAQjNAAiSiSQiRiSAAjNQAAjMCRiSQCSiSDNAAQDNAACSCSQCSCSAADMg");
	this.shape_15.setTransform(463.9,228.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AJtAAQAAEBi2C2Qi2C2kBAAQkAAAi3i2Qi1i2AAkBQAAkAC1i3QC3i1EAAAQEBAAC2C1QC2C3AAEAg");
	this.shape_16.setTransform(463.9,228.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Am3G3Qi1i2AAkBQAAkAC1i2QC3i3EAABQEBgBC2C3QC2C2AAEAQAAEBi2C2Qi2C3kBAAQkAAAi3i3g");
	this.shape_17.setTransform(463.9,228.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("ApsAAQAAkAC1i3QC3i2EAAAQEBAAC2C2QC2C3AAEAQAAEBi2C2Qi2C2kBAAQkAAAi3i2Qi1i2AAkBg");
	this.shape_18.setTransform(463.9,222.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("ApsAAQAAkAC1i3QC3i2EAAAQEBAAC2C2QC2C3AAEAQAAEBi2C2Qi2C3kBAAQkAAAi3i3Qi1i2AAkBg");
	this.shape_19.setTransform(463.9,215.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Am3G3Qi1i2AAkBQAAkAC1i3QC3i1EAgBQEBABC2C1QC2C3AAEAQAAEBi2C2Qi2C2kBAAQkAAAi3i2g");
	this.shape_20.setTransform(463.9,215.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("ApsAAQAAkAC1i3QC3i1EAAAQEBAAC2C1QC2C3AAEAQAAEBi2C2Qi2C2kBAAQkAAAi3i2Qi1i2AAkBg");
	this.shape_21.setTransform(463.9,208.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Am3G3Qi1i2AAkBQAAkAC1i2QC3i3EAAAQEBAAC2C3QC2C2AAEAQAAEBi2C2Qi2C2kBABQkAgBi3i2g");
	this.shape_22.setTransform(463.9,208.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Am3G3Qi1i2AAkBQAAkAC1i3QC3i1EAgBQEBABC2C1QC2C3AAEAQAAEBi2C2Qi2C3kBgBQkAABi3i3g");
	this.shape_23.setTransform(463.9,195.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AJtAAQAAEBi2C2Qi2C2kBAAQkAAAi3i2Qi1i2AAkBQAAkAC1i3QC3i2EAAAQEBAAC2C2QC2C3AAEAg");
	this.shape_24.setTransform(463.9,188.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Am3G3Qi1i2AAkBQAAkAC1i3QC3i1EAAAQEBAAC2C1QC2C3AAEAQAAEBi2C2Qi2C3kBgBQkAABi3i3g");
	this.shape_25.setTransform(463.9,196.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},17).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},11).to({state:[{t:this.instance_4}]},32).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_4}]},39).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:105.8}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7,p:{y:113.8}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14,p:{y:182.3}}]},1).to({state:[{t:this.shape_14,p:{y:205.5}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_17,p:{y:228.8}},{t:this.shape_16,p:{y:228.8}}]},1).to({state:[{t:this.shape_17,p:{y:222.1}},{t:this.shape_18,p:{y:222.1}}]},1).to({state:[{t:this.shape_20,p:{y:215.4}},{t:this.shape_19,p:{y:215.4}}]},1).to({state:[{t:this.shape_22,p:{y:208.8}},{t:this.shape_21,p:{y:208.8}}]},1).to({state:[{t:this.shape_22,p:{y:202.1}},{t:this.shape_18,p:{y:202.1}}]},1).to({state:[{t:this.shape_23},{t:this.shape_19,p:{y:195.4}}]},1).to({state:[{t:this.shape_20,p:{y:188.8}},{t:this.shape_24}]},1).to({state:[{t:this.shape_25,p:{y:196.8}},{t:this.shape_21,p:{y:196.8}}]},1).to({state:[{t:this.shape_25,p:{y:204.8}},{t:this.shape_21,p:{y:204.8}}]},1).to({state:[{t:this.shape_25,p:{y:212.8}},{t:this.shape_21,p:{y:212.8}}]},1).to({state:[{t:this.shape_17,p:{y:220.8}},{t:this.shape_16,p:{y:220.8}}]},1).to({state:[{t:this.shape_22,p:{y:217.4}},{t:this.shape_19,p:{y:217.4}}]},1).to({state:[{t:this.shape_25,p:{y:214.1}},{t:this.shape_18,p:{y:214.1}}]},1).to({state:[{t:this.shape_17,p:{y:210.8}},{t:this.shape_16,p:{y:210.8}}]},1).to({state:[{t:this.shape_25,p:{y:214.1}},{t:this.shape_18,p:{y:214.1}}]},1).to({state:[{t:this.shape_22,p:{y:217.4}},{t:this.shape_19,p:{y:217.4}}]},1).to({state:[{t:this.shape_17,p:{y:220.8}},{t:this.shape_16,p:{y:220.8}}]},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({regY:43,rotation:8.5,x:471.7},7).to({regY:43.1,rotation:-6.5,x:464},3).to({rotation:-14.5,x:454,y:186.8},11).wait(32).to({regX:0.1,rotation:15.5,x:479.1,y:182.8},9).wait(39).to({regX:0,rotation:0,x:463.2,y:176.8},6).to({_off:true},5).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(129).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(130).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(71));

	// bras
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AlnAAILPAA");
	this.shape_26.setTransform(463,209);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AltgNQFpgMFyAp");
	this.shape_27.setTransform(464.8,210.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al0gcQFqgWF/BT");
	this.shape_28.setTransform(466.6,211.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al7gqQFsgiGLB+");
	this.shape_29.setTransform(468.4,212.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmBg5QFtguGXCq");
	this.shape_30.setTransform(470.2,213.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmIhHQFug6GjDV");
	this.shape_31.setTransform(471.9,215.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmPhWQFvhEGwD/");
	this.shape_32.setTransform(473.7,216.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmWhkQFxhQG8Eq");
	this.shape_33.setTransform(475.5,217.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmmgoQGTgYG6Bt");
	this.shape_34.setTransform(476.5,211.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Am2ATQG2AfG3hN");
	this.shape_35.setTransform(477.5,204.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AnGBPQHXBYG2kL");
	this.shape_36.setTransform(478.5,198.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Am/BSQHOBIGxj7");
	this.shape_37.setTransform(477.5,198.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Am3BUQHFA4Gqjq");
	this.shape_38.setTransform(476.3,199.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmwBWQG8AoGljZ");
	this.shape_39.setTransform(475.3,200);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmpBXQGzAZGgjJ");
	this.shape_40.setTransform(474.2,200.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmhBYQGqAIGZi3");
	this.shape_41.setTransform(473.1,201.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmaBYQGigHGTin");
	this.shape_42.setTransform(472,202);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmTBXQGZgWGOiX");
	this.shape_43.setTransform(470.9,202.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmLBWQGQglGHiG");
	this.shape_44.setTransform(469.8,203.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmEBWQGHg2GCh1");
	this.shape_45.setTransform(468.7,204.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al9BVQF+hFF9hl");
	this.shape_46.setTransform(467.6,205.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al2BVILtip");
	this.shape_47.setTransform(466.5,205.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al3BIQF6hWF1g5");
	this.shape_48.setTransform(467.3,206.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al5A7QF/haF0ga");
	this.shape_49.setTransform(468,207);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al7AtQGFhcFyAD");
	this.shape_50.setTransform(468.7,207.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al8AkQGKhfFwAg");
	this.shape_51.setTransform(469.4,207.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al+AeQGPhiFuA/");
	this.shape_52.setTransform(470.2,207.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmAAbQGUhlFtBa");
	this.shape_53.setTransform(470.9,207);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmBAQQGZhoFqB4");
	this.shape_54.setTransform(471.6,207.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmDABQGehrFpCW");
	this.shape_55.setTransform(472.3,208.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmFgMQGjhwFoC0");
	this.shape_56.setTransform(473,208.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AmAgKQGZhdFoCV");
	this.shape_57.setTransform(471.4,208.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al7gIQGPhKFoB3");
	this.shape_58.setTransform(469.7,208.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Al2gFQGFg4FoBZ");
	this.shape_59.setTransform(468,208.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AlxgDQF7glFoA6");
	this.shape_60.setTransform(466.4,208.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AlsgBQFxgTFoAd");
	this.shape_61.setTransform(464.7,209);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AkaAAII1AA");
	this.shape_62.setTransform(464.1,226.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjOAAIGdAA");
	this.shape_63.setTransform(465.3,244.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiCAAIEFAA");
	this.shape_64.setTransform(466.4,262.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Ag2AAIBtAA");
	this.shape_65.setTransform(467.5,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_26}]},17).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},32).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},39).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},32).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[]},1).wait(55));

	// Calque 3
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("ACxFbIlhq1");
	this.shape_66.setTransform(480.8,243.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiwlaQDEFaCdFb");
	this.shape_67.setTransform(480.8,243.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiwlaQDYFXCJFe");
	this.shape_68.setTransform(480.8,243.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiwlaQDsFVB1Fg");
	this.shape_69.setTransform(480.8,243.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiwlaQEAFSBhFj");
	this.shape_70.setTransform(480.8,243.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiwlaQEUFRBNFk");
	this.shape_71.setTransform(480.8,243.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiwlaQEoFOA5Fn");
	this.shape_72.setTransform(480.8,243.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("ACxFbQgllpk8lM");
	this.shape_73.setTransform(480.8,243.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiwlaQENFRBUFk");
	this.shape_74.setTransform(480.8,243.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiwlaQDeFWCDFf");
	this.shape_75.setTransform(480.8,243.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiulcQCoFhC2FY");
	this.shape_76.setTransform(480.9,243.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AitldQCeFmC9FV");
	this.shape_77.setTransform(481.1,243.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AirleQCUFsDDFR");
	this.shape_78.setTransform(481.2,243.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiqlgQCLFyDKFP");
	this.shape_79.setTransform(481.4,243.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiolhQCBF4DQFL");
	this.shape_80.setTransform(481.6,243);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AinljQB4F/DXFI");
	this.shape_81.setTransform(481.7,242.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AillkQBtGFDeFE");
	this.shape_82.setTransform(481.9,242.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AijlmQBjGLDkFC");
	this.shape_83.setTransform(482,242.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiilnQBaGRDrE+");
	this.shape_84.setTransform(482.2,242.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiglpQBQGXDxE7");
	this.shape_85.setTransform(482.4,242.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("ACgFrQj4k4hHmd");
	this.shape_86.setTransform(482.5,242.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiflqQBbGNDkFI");
	this.shape_87.setTransform(482.5,242.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiflqQBvF+DQFX");
	this.shape_88.setTransform(482.5,242.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiflqQCCFuC9Fn");
	this.shape_89.setTransform(482.5,242.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiflqQCWFfCpF2");
	this.shape_90.setTransform(482.5,242.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiflqQCpFQCWGF");
	this.shape_91.setTransform(482.5,242.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiflqQC9FACCGV");
	this.shape_92.setTransform(482.5,242.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiflqQDQEwBvGl");
	this.shape_93.setTransform(482.5,242.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiflqQDkEgBbG1");
	this.shape_94.setTransform(482.5,242.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("ACgFrQhHnFj4kQ");
	this.shape_95.setTransform(482.5,242.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiilnQDsEcBZGz");
	this.shape_96.setTransform(482.2,242.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AikllQDfEqBqGh");
	this.shape_97.setTransform(481.9,242.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AinliQDTE2B8GP");
	this.shape_98.setTransform(481.6,243);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiqlfQDHFCCOF9");
	this.shape_99.setTransform(481.3,243.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AitldQC8FPCfFs");
	this.shape_100.setTransform(481.1,243.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiKkQIEVIh");
	this.shape_101.setTransform(477.9,253.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AhkjFIDJGL");
	this.shape_102.setTransform(475,262.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("Ag+h7IB9D3");
	this.shape_103.setTransform(472.1,271.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AAZAyIgxhj");
	this.shape_104.setTransform(469.2,281.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66}]}).to({state:[{t:this.shape_66}]},17).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},32).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_95}]},39).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},32).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[]},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(17).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(96).to({_off:false},0).wait(32).to({_off:true},1).wait(59));

	// Calque 2
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqIGLpT");
	this.shape_105.setTransform(447.9,248.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQDXkhC1ky");
	this.shape_106.setTransform(447.9,248.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQDpkYCjk7");
	this.shape_107.setTransform(447.9,248.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQD8kPCQlE");
	this.shape_108.setTransform(447.9,248.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQEOkGB+lN");
	this.shape_109.setTransform(447.9,248.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQEgj9BslW");
	this.shape_110.setTransform(447.9,248.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQEyjzBalg");
	this.shape_111.setTransform(447.9,248.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQFFjqBGlp");
	this.shape_112.setTransform(447.9,248.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQEGkFCGlO");
	this.shape_113.setTransform(447.9,248.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQDIkfDEk0");
	this.shape_114.setTransform(447.9,248.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQCLk3EAkc");
	this.shape_115.setTransform(447.9,248.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQCEk8EIkX");
	this.shape_116.setTransform(447.9,248.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQB9lBEPkS");
	this.shape_117.setTransform(447.9,248.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQB2lHEWkM");
	this.shape_118.setTransform(447.9,248.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQBwlMEckH");
	this.shape_119.setTransform(447.9,248.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQBplREjkC");
	this.shape_120.setTransform(447.9,248.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQBilWEqj9");
	this.shape_121.setTransform(447.9,248.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQBblbExj4");
	this.shape_122.setTransform(447.9,248.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQBTlgE5jz");
	this.shape_123.setTransform(447.9,248.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQBNllE/ju");
	this.shape_124.setTransform(447.9,248.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQBGlqFGjp");
	this.shape_125.setTransform(447.9,248.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQA/lvFMjk");
	this.shape_126.setTransform(447.9,248.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQBbliExjx");
	this.shape_127.setTransform(447.9,248.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQB2lWEWj9");
	this.shape_128.setTransform(447.9,248.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQCSlJD6kK");
	this.shape_129.setTransform(447.9,248.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQCtk8DfkX");
	this.shape_130.setTransform(447.9,248.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQDHkvDFkk");
	this.shape_131.setTransform(447.9,248.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQDjklCpku");
	this.shape_132.setTransform(447.9,248.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQD/kYCNk7");
	this.shape_133.setTransform(447.9,248.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQEakLBylI");
	this.shape_134.setTransform(447.9,248.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQE2j+BVlV");
	this.shape_135.setTransform(447.9,248.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQEjkGBplN");
	this.shape_136.setTransform(447.9,248.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQEQkNB8lG");
	this.shape_137.setTransform(447.9,248.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQD9kUCPk/");
	this.shape_138.setTransform(447.9,248.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQDqkcCik3");
	this.shape_139.setTransform(447.9,248.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AjFEqQDYkjC0kw");
	this.shape_140.setTransform(447.9,248.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AiaDpIE1nR");
	this.shape_141.setTransform(452.3,256.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AhvCoIDflP");
	this.shape_142.setTransform(456.6,265.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AhDBnICHjN");
	this.shape_143.setTransform(460.9,273.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(15,1,0,3).p("AgYAmIAxhL");
	this.shape_144.setTransform(465.2,282.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105}]}).to({state:[{t:this.shape_105}]},17).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},32).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_135}]},39).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_105}]},32).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[]},1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(869.5,283.2,112.4,202.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;