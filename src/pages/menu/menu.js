function menu(){
    this.page_infos = null;
    this._is_on_drag = false;
    this.init();
}
menu.prototype.init = function(){
    var self = this;
    TweenMax.to($('#backbutton'), .5, {scaleX:0, scaleY:0, onComplete : function(){
        $('#backbutton').css('display', 'none');
    }});
    // $('.app_content').css('background-color', colors.blue);
    //_current_interface_color
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
menu.prototype.display_bricks = function(){
    $('.menu_content').html('');
    var self = this;
    $.each(_.keys(this.page_infos), function(index, page){
        $('.menu_content').append('<div class="menu_screen" id="screen_'+page+'" style="float:left;"></div>');
        self.display_apps(page);
    });
    var startPos=null;
    //Draggable.create(".menu_content", {type:"x", edgeResistance:0.15, bounds:".menu_content", lockAxis:true, throwProps:true});
    $('.menu_screen').width(window.innerWidth);
    $('.menu_content').width(window.innerWidth * $('.menu_screen').length+1);
    self.slider = new slider($('.app_content'), $('.menu_content'), $('.menu_screen'));
    /*Draggable.create(".menu_content", {
		bounds:'.app_content',
		edgeResistance:0.65,
		type:"x",
		throwProps:true,
        autoScroll:true,
		liveSnap:false,
		snap:{
			x: function(endValue) {
				//return (snap || liveSnap) ? Math.round(endValue / gridWidth) * gridWidth : endValue;
			},
			y: function(endValue) {
				//return (snap || liveSnap) ? Math.round(endValue / gridHeight) * gridHeight : endValue;
			}
		}
	});*/
    /*$('.menu_content').on('mousedown', function(e){
        console.log('start');
        //TweenMax.killAll();
        startPos = e.pageX;
    });
    $('.menu_content').on('mouseup', function(e){
        console.log('stop');
        var endPos = e.pageX;
        if(Math.abs(startPos - endPos) > 20){
            self._is_on_drag = true; 
        }
        self.replace_page(startPos, endPos);
    });*/
    /*$('.menu_content').draggable({
        axis:'x', 
        start:function(e){
            TweenMax.killAll();
            startPos = e.pageX; 
        }, 
        stop:function(e){
            var endPos = e.pageX;
            if(Math.abs(startPos - endPos) > 20){
                self._is_on_drag = true; 
            }
            self.replace_page(startPos, endPos);
        }
    });*/
    $('.menu_content').css('left', -(window.innerWidth * navigation._last_page_menu)+'px');
}
menu.prototype.replace_page = function(startPos, endPos){
    console.log('replace');
    console.log(startPos," > ",endPos);
    TweenMax.killAll();
    var self = this;
    var time = .5;
    if( $('.menu_content').position().left > 0 ){
        console.log('replace > 0');
        TweenMax.to($('.menu_content'), time, {left:0, ease:Back.easeOut, onComplete:function(){
            self._is_on_drag = false;
        }});
        navigation._last_page_menu = 0;
        return false; 
    }else{
        console.log('replace < 0');
        if($('.menu_screen').last().offset().left < 0){
            TweenMax.to($('.menu_content'), time, {left:-($('.menu_screen').last().position().left), ease:Back.easeOut, onComplete:function(){
                self._is_on_drag = false;
            }});
            return false;
        }
        var num_screen = $('.menu_screen').length;
        var wv = window.innerWidth;
        $.each($('.menu_screen'), function(m, c){
            if(startPos > endPos){
                console.log('startPos > endPos');
                if($(this).offset().left < 0 && $(this).offset().left > -(window.innerWidth) && Math.abs(startPos - endPos) > (window.innerWidth/2)-(window.innerWidth/4)){
                    console.log('prout');
                    TweenMax.to($('.menu_content'), time, {left:-($('.menu_screen').eq(m+1).position().left)+'px', ease:Back.easeOut, onComplete:function(){
                        self._is_on_drag = false;
                        navigation._last_page_menu = Math.abs($('.menu_content').position().left) / window.innerWidth;
                    }});
                    return false;
                }else if($(this).offset().left > -(window.innerWidth)){
                    console.log('fart');
                    TweenMax.to($('.menu_content'), time, {left:-($(this).position().left)+'px', ease:Back.easeOut, onComplete:function(){
                        self._is_on_drag = false;
                        navigation._last_page_menu = Math.abs($('.menu_content').position().left) / window.innerWidth;
                    }});
                    return false;
                }
            }else{
                console.log('startPos < endPos');
                if($(this).offset().left > -(window.innerWidth/2)-(window.innerWidth/4)){
                    TweenMax.to($('.menu_content'), time, {left:-($(this).position().left)+'px', ease:Back.easeOut, onComplete:function(){
                        self._is_on_drag = false;
                        navigation._last_page_menu = Math.abs($('.menu_content').position().left) / window.innerWidth;
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
        /*var s = $('#'+page+'_'+app).width()/1.5;
        if($('#'+page+'_'+app).width() > $('#'+page+'_'+app).height()){
            s = $('#'+page+'_'+app).height()/1.5;   
        }*/
        TweenMax.set($('#'+page+'_'+app), {scaleX:0, scaleY:0});
        TweenMax.to($('#'+page+'_'+app), .8, {scaleX:1, scaleY:1, delay:u/10, ease:Quart.easeOut});
        //$('#'+page+'_'+app+' .screen_center').css({width:$('#'+page+'_'+app).width()+'px', height:$('#'+page+'_'+app).height()+'px'});
        $('#'+page+'_'+app+' .screen_center').css({width:'100%', height:'100%'});
        $('#'+page+'_'+app+' .screen_center').load("./pages/"+infos.name+"/images/game_preview.svg", function(){
            $('#'+page+'_'+app+' .screen_center svg').css({'width':'100%', 'height':'100%'});
            $('#'+page+'_'+app+' .screen_center svg #shadow').attr('fill', $('#'+page+'_'+app).attr('data-color'));
        });
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
        TweenMax.to($('.app_content'), .5, {'backgroundColor': $(this).attr('data-color')});
        TweenMax.to($('#backbutton'), .5, {'backgroundColor': $(this).attr('data-color')});
    });
}
menu.prototype.get_picture_uri = function(name){
    return "../../pages/"+name+"/images/"+name.png;
}
menu.prototype.pause = function(){
    
}
menu.prototype.play = function(){
    
}
menu.prototype.destroy = function(callBack){
    //$('.menu_content').draggable('disable');
    $('.brick').off('tap, click');
    //TweenMax.to($('.screen_center'), .5, {top:"150%", ease:Power4.easeIn, onComplete:function(){
    //TweenMax.to($('.screen_center'), .5, {opacity:0, ease:Power4.easeIn, onComplete:function(){
        callBack();
    //}});
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