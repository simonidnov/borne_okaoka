function drawing(){
    this.init();
}
drawing.prototype.init = function(){
    //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.dgreen});
}
drawing.prototype.destroy = function(callBack){
    callBack();
}