function build(){
    this.init();
}
build.prototype.init = function(){
    //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.lighblue});
}
build.prototype.destroy = function(callBack){
    callBack();
}