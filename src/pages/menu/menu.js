function menu(){
    this.page_infos = null;
    this.init();
}
menu.prototype.init = function(){
    var self = this;
    $('.app_content').css('background-color', colors.blue);
    this.load_infos();
}
menu.prototype.load_infos = function(){
    var self = this;
    $.ajax({
        dataType: "json",
        url: './pages/menu/pages_menu.json',
        data: {},
        success: function(datas){
            self.page_infos = datas;
            self.display_bricks();
        }
    });
}
menu.prototype.display_bricks = function(){
    var self = this;
    $.each(_.keys(this.page_infos), function(index, page){
        var infos = self.page_infos[page];
        infos.position = positions[index];
        var tmp = _.template($('#brick_template').html());
        $('.app_content').append(tmp(infos));
    });
}
menu.prototype.get_picture_uri = function(name){
    return "../../pages/"+name+"/images/"+name.png;
}
menu.prototype.destroy = function(callBack){
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

var positions = [
    {width:"40%", height:"100%"},
    {width:"60%", height:"50%"},
    {width:"30%", height:"50%"},
    {width:"30%", height:"50%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"},
    {width:"50%", height:"100%"}
];