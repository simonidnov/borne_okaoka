function discs(){
    this.init();
}
discs.prototype.init = function(){
    //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.orange});
}
discs.prototype.destroy = function(callBack){
    callBack();
}