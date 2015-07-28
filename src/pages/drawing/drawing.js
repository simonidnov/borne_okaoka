function drawing(){
    this.base = "pages/drawing/";
    this.init();
}
drawing.prototype.init = function(){
    var canvas, stage, exportRoot;

    canvas = document.getElementById("motion_canvas");
    exportRoot = new lib.drawing_motion();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
    //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.dgreen});
}
drawing.prototype.destroy = function(callBack){
    callBack();
}