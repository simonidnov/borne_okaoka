var self = null;
function menu(){
    this.page_infos = null;
    this._is_on_drag = false;
    this.init();
    this.replace_request = undefined;
    self = this;
}
menu.prototype.init = function(){
    var self = this;
    TweenMax.to($('#backbutton'), .5, {scaleX:0, scaleY:0, onComplete : function(){
        $('#backbutton').css('display', 'none');
    }});
    TweenMax.to($('.app_content'), .5, {"backgroundColor":utilities.colorLuminance(colors.grey, .5)});
    TweenMax.to($('#backbutton'), .5, {'backgroundColor': utilities.colorLuminance(colors.grey, .5)});
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
menu.prototype.check_bricks = function(){
    if(typeof $('.menu_content') === "undefined"){
       return false;
    }
    if($('.menu_content').position().left > 0){
        var screen = $('.menu_content').find('.menu_screen').eq(0);
        var pl = screen.find('.brick').eq(0).position().left;
        for(var i=0; i<screen.find('.brick').length; i++){
            if(screen.find('.brick').eq(i).position().left === pl){
                screen.find('.brick').eq(i).css(
                    {
                        "left":-$('.menu_content').position().left+"px",
                        "width":screen.find('.brick').eq(screen.find('.brick').length-1).offset().left
                    }
                );       
            }
        }
    }
    if($('.menu_content').position().left < -($('.menu_content').width()-window.innerWidth)){
        var screen = $('.menu_content').find('.menu_screen').eq($('.menu_content').find('.menu_screen').length-1);
        
        var pl = screen.find('.brick').eq(screen.find('.brick').length-1).offset().left;
        for(var i=0; i<screen.find('.brick').length; i++){
            if(screen.find('.brick').eq(i).offset().left === pl){
                screen.find('.brick').eq(i).css(
                    {
                        "width":window.innerWidth-pl
                    }
                );       
            }
        }
    }
    if(typeof self.replace_request !== "undefined"){
        self.replace_request = requestAnimationFrame(self.check_bricks);
    }
}
menu.prototype.display_bricks = function(){
    $('.menu_content').html('');
    var self = this;
    $.each(_.keys(this.page_infos), function(index, page){
        $('.menu_content').append('<div class="menu_screen" id="screen_'+page+'" style="float:left;"></div>');
        self.display_apps(page);
    });
    var startPos=null;
    $('.menu_screen').width(window.innerWidth);
    $('.menu_content').width(window.innerWidth * $('.menu_screen').length+1);
    $('.app_content').append('<div class="left_arrow"></div>');
    $('.app_content').append('<div class="right_arrow"></div>');   
    self.slider = new slider(
        $('.app_content'), 
        $('.menu_content'), 
        $('.menu_screen'), 
        0, 
        self.slider, {
            "start_drag":function(evt){
                self._is_on_drag = true;
                self.replace_request = window.requestAnimationFrame(self.check_bricks);
            }, 
            "stop_drag":function(evt){
                
            }, 
            "dragging":function(evt){
            }, 
            "end_drag":function(evt){
                window.cancelAnimationFrame(self.replace_request);
                self.replace_request = undefined;
                self._is_on_drag = false;
            }
        }
    );
    $('.menu_content').css('left', -(window.innerWidth * navigation._last_page_menu)+'px');
}
menu.prototype.display_apps = function(page){
    var self = this;
    $.each(_.keys(this.page_infos[page]), function(u, app){
        var infos = self.page_infos[page][app];
        infos.position = positions[_.keys(self.page_infos[page]).length][u];
        infos.id = page+'_'+app;
        var tmp = _.template($('#brick_template').html());
        $('#screen_'+page).append(tmp(infos));
        TweenMax.set($('#'+page+'_'+app), {scaleX:0, scaleY:0});
        TweenMax.to($('#'+page+'_'+app), .8, {scaleX:1, scaleY:1, delay:u/10, ease:Quart.easeOut});
        $('#'+page+'_'+app+' .screen_center').css({width:'100%', height:'100%'});
        $('#'+page+'_'+app+' .screen_center').load("./pages/"+infos.name+"/images/game_preview.svg", function(){
            $('#'+page+'_'+app+' .screen_center svg').css({'width':'100%', 'height':'100%'});
            $('#'+page+'_'+app+' .screen_center svg #shadow').attr('fill', $('#'+page+'_'+app).attr('data-color'));
        });
    });
    if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
        $('.brick').off('touchend').on('touchend', function(evt){
            if(!self._is_on_drag){
                self.open_game($(this));
            }
        });
    }else{
        $('.brick').off('click').on('click', function(evt){
            if(self._is_on_drag){
                return false;
            }
            self.open_game($(this));
        });
    }
}
menu.prototype.open_game = function(hitted){
    var time = .7;
    var content = hitted.parent();
    var target  = hitted;
    var page    = hitted.attr('data-name');
    hitted.css('z-index', '99');
    $.each(hitted.parent().find('.brick'), function(b, brick_app){
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
                newPos.height="100%";
            }
            TweenMax.to($(this), time, {
                css:newPos,
                ease:Power4.easeOut,
                delay:.2
            });
        }else{
            navigation._current_interface_color = $(this).css('background-color');
            TweenMax.to($(this).find('svg'), .2, {opacity:0});
            TweenMax.to($(this), time, {
                css:{
                    width:"100%",
                    height:"100%",
                    top:0,
                    left:0
                },
                delay:.2,
                onComplete:function(){
                    navigation.router.navigate('page/'+page, {trigger:true, replace:true});
                },
                ease:Power4.easeOut
            });
        }
    });
    TweenMax.to($('.app_content'), .5, {'backgroundColor': hitted.attr('data-color')});
    TweenMax.to($('#backbutton'), .5, {'backgroundColor': hitted.attr('data-color')});
}
menu.prototype.get_picture_uri = function(name){
    return "../../pages/"+name+"/images/"+name.png;
}
menu.prototype.pause = function(){
    
}
menu.prototype.play = function(){
    
}
menu.prototype.destroy = function(callBack){
    self.slider.destroy();
    $('.brick').off('touchend, click');
    callBack();
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
    ],
    6:[
        {width:"40%", height:"60%", left:0, top:0},
        {width:"40%", height:"40%", left:0, top:"60%"},
        {width:"30%", height:"50%", left:"40%", top:0},
        {width:"30%", height:"50%", left:"70%", top:0},
        {width:"30%", height:"50%", left:"40%", top:"50%"},
        {width:"30%", height:"50%", left:"70%", top:"50%"}
    ]
};