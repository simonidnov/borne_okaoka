function drawing(){
    this.base = "pages/drawing/";
    this.exportRoot = null;
    this.stage = null;
    this.init();
}
drawing.prototype.init = function(){
    var canvas, stage, exportRoot;

    canvas = document.getElementById("motion_canvas");
    this.exportRoot = new lib.drawing_motion();

    this.stage = new createjs.Stage(canvas);
    this.stage.addChild(this.exportRoot);
    this.stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", this.stage);
    //createjs.Ticker.addEventListener("stop", function(){alert('stopped');});
    //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.dgreen});
}
drawing.prototype.create_interface = function(){
    console.log('interface');
    //create template game
}
drawing.prototype.destroy = function(callBack){
    callBack();
}