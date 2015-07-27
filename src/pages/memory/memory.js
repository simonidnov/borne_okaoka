function memory(){
    this.init();
}
memory.prototype.init = function(){
    //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.lighblue});
}
memory.prototype.destroy = function(callBack){
    callBack();
}