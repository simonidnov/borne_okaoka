function menu(){
    console.log('new menu');
    this.page_infos = null;
    this._is_on_drag = false;
    this.init();
}
menu.prototype.init = function(){
    var self = this;
    $('#backbutton').css('display', 'none');
   // $('.app_content').css('background-color', colors.blue);
    TweenMax.to($('.app_content'), .5, {"backgroundColor":utilities.colorLuminance(colors.grey, .5)});
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
    $('.menu_content').html('');
    var self = this;
    $.each(_.keys(this.page_infos), function(index, page){
        $('.menu_content').append('<div class="menu_screen" id="screen_'+page+'" style="left:'+(index*100)+'%;"></div>');
        self.display_apps(page);
    });
    var startPos=null;
    $('.menu_content').draggable({
        axis:'x', 
        start:function(e){
            TweenMax.killAll();
            startPos = e.pageX;
            console.log('start drag'); 
            self._is_on_drag = true; 
        }, 
        stop:function(e){
            var endPos = e.pageX;
            self.replace_page(startPos, endPos);
        }
    });
}
menu.prototype.replace_page = function(startPos, endPos){
    var self = this;
    var time = .5;
    if( $('.menu_content').position().left > 0 ){
        TweenMax.to($('.menu_content'), time, {left:0, ease:Back.easeOut, onComplete:function(){
            self._is_on_drag = false;
        }});
        return false; 
    }else{
        var num_screen = $('.menu_screen').length;
        var wv = window.innerWidth;
        $.each($('.menu_screen'), function(m, c){
            if(startPos > endPos){
                if($(this).position().left > 0 && $(this).offset().left < (window.innerWidth/2)+(window.innerWidth/4)){
                    TweenMax.to($('.menu_content'), time, {left:-($(this).position().left)+'px', ease:Back.easeOut, onComplete:function(){
                        self._is_on_drag = false;
                    }});
                }else{
                    var prevScreen = $('.menu_screen').eq(m-1);
                    TweenMax.to($('.menu_content'), time, {left:-(prevScreen.position().left)+'px', ease:Back.easeOut, onComplete:function(){
                        self._is_on_drag = false;
                    }});
                }
            }else{
                if($(this).offset().left > -(window.innerWidth/2)-(window.innerWidth/4)){
                    TweenMax.to($('.menu_content'), time, {left:-($(this).position().left)+'px', ease:Back.easeOut, onComplete:function(){
                        self._is_on_drag = false;
                    }});
                    return false;
                }
            }
        });
    }
}
menu.prototype.display_apps = function(page){
    var self = this;
    $.each(_.keys(this.page_infos[page]), function(u, app){
        var infos = self.page_infos[page][app];
        infos.position = positions[_.keys(self.page_infos[page]).length][u];
        infos.id = page+'_'+app;
        var tmp = _.template($('#brick_template').html());
        $('#screen_'+page).append(tmp(infos));
        var s = $('#'+page+'_'+app).width();
        if($('#'+page+'_'+app).width() > $('#'+page+'_'+app).height()){
            s = $('#'+page+'_'+app).height();   
        }
        TweenMax.set($('#'+page+'_'+app), {scaleX:0, scaleY:0});
        TweenMax.to($('#'+page+'_'+app), .8, {scaleX:1, scaleY:1, delay:u/10, ease:Quart.easeOut});
        $('#'+page+'_'+app+' .screen_center').css({width:s+'px', height:s+'px'});
    });
    var time = .7;
    $('.brick').off('tap, click').on('tap, click', function(){
        if(self._is_on_drag){
            return false;
        }
        var content = $(this).parent();
        var target  = $(this);
        var page    = $(this).attr('data-name');
        $(this).css('z-index', '99');
        $.each($(this).parent().find('.brick'), function(b, brick_app){
            if($(this).attr('id') != target.attr('id')){
                var newPos = {left:0, top:$(this).position().top, width:$(this).width(), height:$(this).height()};
                if($(this).position().left < target.position().left){
                    newPos.left = -($(this).width())+'px';
                }else if($(this).position().left == target.position().left){
                    if($(this).position().top < target.position().top){
                        newPos.top = -($(this).height())+'px';
                    }else{
                        newPos.top = window.innerHeight+'px';
                    }
                    newPos.left = 0;
                    newPos.width = "100%";
                }else{
                    newPos.left = (window.innerWidth)+'px';
                }
                if($(this).position().top == target.position().top){
                    newPos.top = 0;
                    console.log('top egual');
                    newPos.height="100%";
                }
                TweenMax.to($(this), time, {
                    css:newPos,
                    ease:Power4.easeOut
                });
            }else{
                TweenMax.to($(this), time, {
                    css:{
                        width:"100%",
                        height:"100%",
                        top:0,
                        left:0
                    }, 
                    onComplete:function(){
                        navigation.router.navigate('page/'+page, {trigger:true, replace:true});
                    },
                    ease:Power4.easeOut
                });
            }
        });
        TweenMax.to($('.app_content'), .5, {'backgroundColor': $(this).attr('data-color')});
    });
}
menu.prototype.get_picture_uri = function(name){
    return "../../pages/"+name+"/images/"+name.png;
}
menu.prototype.destroy = function(callBack){
    $('.menu_content').draggable('disable');
    $('.brick').off('tap, click');
    TweenMax.to($('.screen_center'), .5, {scaleX:0, scaleY:0, ease:Back.easeIn, onComplete:function(){
        callBack();
    }});
}

var positions = {
    1:[
        {width:"100%", height:"100%", left:0, top:0}
    ],
    2:[
        {width:"40%", height:"100%", left:0, top:0},
        {width:"60%", height:"100%", left:"40%", top:0}
    ],
    3:[
        {width:"40%", height:"100%", left:0, top:0},
        {width:"60%", height:"50%", left:"40%", top:0},
        {width:"60%", height:"50%", left:"40%", top:"50%"}
    ],
    4:[
        {width:"40%", height:"100%", left:0, top:0},
        {width:"60%", height:"50%", left:"40%", top:0},
        {width:"30%", height:"50%", left:"40%", top:"50%"},
        {width:"30%", height:"50%", left:"70%", top:"50%"}
    ],
    5:[
        {width:"25%", height:"50%", left:0, top:0},
        {width:"25%", height:"50%", left:0, top:"50%"},
        {width:"50%", height:"100%", left:"25%", top:0},
        {width:"25%", height:"50%", left:"75%", top:0},
        {width:"25%", height:"50%", left:"75%", top:"50%"}
    ]
};