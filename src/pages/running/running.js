function running(){
    this.init();
}
running.prototype.init = function(){
    //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.yellow});
}
running.prototype.destroy = function(callBack){
    callBack();
}