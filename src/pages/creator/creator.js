function creator(){
    this.init();
}
creator.prototype.init = function(){
    //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.lighblue});
}
creator.prototype.destroy = function(callBack){
    callBack();
}