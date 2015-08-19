function discs(){
    this.init();
}
discs.prototype.init = function(){
    
}
discs.prototype.create_interface = function(){
    console.log('interface');
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
    //TweenMax.set($('#drawing_page'), {scaleX:0, scaleY:1});
    //TweenMax.to($('#drawing_page'), .7, {scaleX:1, scaleY:1, onComplete:function(){
        
    //}, ease:Power4.easeOut});
}
discs.prototype.pause = function(){
}
discs.prototype.play = function(){
}
discs.prototype.destroy = function(callBack){
    callBack();
}