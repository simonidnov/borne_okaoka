function running(){
    this.base = "pages/drawing/";
    this.exportRoot = null;
    this.stage = null;
    this.init();
}
running.prototype.init = function(){
    
}
running.prototype.create_interface = function(){
    console.log('interface');
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
}
running.prototype.destroy = function(callBack){
    callBack();
}