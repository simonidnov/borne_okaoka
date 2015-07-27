function screensaver(){
    this.init();
}
screensaver.prototype.init = function(){
    var self = this;
    TweenMax.to($('.app_content'), .5, {'backgroundColor': colors.blue});
    $('#logo_center').load('./images/assets/okaoka.svg', function(e){
        $('#logo_center svg').attr("class", 'center_svg');
        //$('#logo_center svg').css({"width":"80%", "height":"80%", "position":"absolute", "margin":"0 auto"});
    });
    $('#backbutton').css('display', 'none');
    $('body').on('tap, click', function(){
        navigation.router.navigate('page/menu', {trigger:true, replace:true});
        //self.destroy();
    });
    var h = window.innerHeight / 4;
    TweenMax.to($('#logo_center'), .5, {
        css:{
            "height":h+"px",
            "width":h+"px"
        },
        ease:Back.easeOut
    });
}
screensaver.prototype.destroy = function(callBack){
    $('body').off('tap, click');
    TweenMax.to($('#logo_center'), .5, {
        css:{
            "height":"0px",
            "width":"0px"
        },
        ease:Back.easeIn,
        onComplete : function(){
            callBack();
        }
    });
}