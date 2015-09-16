/* ------- CALL POPUP SAMPLE CODE -------- */
//utilities.show_popup({color:"#F0F0F0", motion:"paper_ball"}, function(e){console.log(e);});
/* --------------------------------------- */
var utilities = {
    popstage : null,
    pop_callBack :null,
    pop_option:null,
    show_popup : function(params, callBack){
        utilities.pop_callBack = callBack;
        navigation._page_script.pause();
        if($('.app_popup').length == 0){
            $('body').append('<div class="app_popup"></div>');
        }else{
            $('.app_popup').html('');
        }
        TweenMax.to($('.app_popup'), .5, {opacity:1});
        var tmp = _.template($('#app_popup_template').html());
        if(typeof params.buttons === "undefined"){
            params.buttons = ["no", "yes"];
        }
        $('.app_popup').append(tmp(params));
        if(typeof params.motion !== "undefined"){
            $('.app_popup .motion').css('display', 'block');
            if(typeof lib[params.motion+"_motion"] === "undefined"){
                var queue = new createjs.LoadQueue();
                    queue.on("complete", function(){
                        this.destroy();
                        utilities.play_motion(params, "popup_motion_canvas");
                    });
                    queue.loadManifest(["./motions/"+params.motion+"/"+params.motion+"_motion.js"], false);
                    queue.load();
            }else{
                utilities.play_motion(params, "popup_motion_canvas");
            }
        }
        for(var i=0; i<params.buttons.length; i++){
            $('#btn_'+params.buttons[i]).load('./images/assets/btn_'+params.buttons[i]+'.svg', function(e){
                $(this).find('svg *').attr('stroke', '#FFFFFF');
            });
        }
        $('.popup_btn').off('click').on('click', function(){
            $(this).css({"left":$(this).position().left, "display":"block"});
            $('.popup_btn').css('display','none');
            $(this).css({"position":"absolute", "display":"block"});
            TweenMax.to($(this), .2, {
                css:{"width":"100%", "left":"0", "right":"0"}
            });
            utilities.current_pop_root.gotoAndPlay('choice_'+$(this).attr('data-value'));
            utilities.pop_option = $(this);
        });
        TweenMax.to($('.content_popup'), .5, {css:{top:0}, ease:Back.easeOut});
    },
    play_motion : function(params, target){
        var canvas;
        createjs.MotionGuidePlugin.install();
        canvas = document.getElementById(target);
        this.current_pop_root = new lib[params.motion+"_motion"]();
        this.popstage = new createjs.Stage(canvas);
        this.popstage.addChild(this.current_pop_root);
        this.popstage.update();
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", this.popstage);
    },
    select_pop_option : function(){
        var btn_pos = this.pop_option.position();
        var btn_id = this.pop_option.attr('id');
        var selected_color = navigation._current_interface_color;
        var value = this.pop_option.attr('data-value');
        utilities.pop_callBack(value);
        utilities.hide_popup();
    },
    select_pop_option_old : function(){
        var btn_pos = this.pop_option.position();
        var btn_id = this.pop_option.attr('id');
        var selected_color = navigation._current_interface_color;
        this.pop_option.css(
            {
                "position":"absolute", 
                "left":btn_pos.left+"px", 
                "top":btn_pos.top+"px"
            }
        );
        if(this.pop_option.attr('id') == 'btn_yes'){
            selected_color = colors.green;
        }else if(this.pop_option.attr('id') == 'btn_no'){
            selected_color = colors.red;
        }
        $.each($('.popup_btn'), function(){
            if($(this).attr('id') !== btn_id){
                $(this).remove();
            }
        });
        $('.popup_motion').remove();
        var value = this.pop_option.attr('data-value');
        TweenMax.to(this.pop_option, .2, {
            css:{
                top:0,
                left:0,
                width:"100%",
                height:"100%"
            }
        });
        TweenMax.to($(".content_popup"), .4, {
            css:{
                width:"220px",
                height:"220px",
                backgroundColor:selected_color
            }
        });
        TweenMax.to(this.pop_option.find('svg'), .4, {
            width:180,
            height:180,
            onComplete:function(){
                utilities.pop_callBack(value);
                utilities.hide_popup();
            },
            ease:Power4.easeOut
        });
    },
    pop_up_motion_callback : function(event){
        switch(event){
            case'pause':
                break;
            case'end':
                utilities.select_pop_option();
                createjs.Ticker.removeEventListener("tick", this.popstage);
                break;
            default:
                utilities.select_pop_option();
                createjs.Ticker.removeEventListener("tick", this.popstage);
                break;
        }
    },
    hide_popup : function(hitted){
        if(hitted == 0){
            // Non
        }else{
            // Oui
        }
        TweenMax.to($('.content_popup'), .5, {css:{scaleX:0, scaleY:0}, ease:Back.easeIn, onComplete:function(){
            TweenMax.to($('.app_popup'), .5, {opacity:0, onComplete:function(){
                $('.app_popup').remove();
                navigation._page_script.play();
            }});
        }});
    },
    colorLuminance : function(hex, lum) {
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00"+c).substr(c.length);
        }
        return rgb;
    }
}
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}
var colors = {
    "purple":"#612B9B",
    "green":"#44AC34",
    "orange":"#FF821D",
    "lighblue":"#33CAD2",
    "pink":"#E41694",
    "maroon":"#784217",
    "grey":"#7D868B",
    "red":"#DA0036",
    "fblue":"#0095A7",
    "yellow":"#FFCF00",
    "dgreen":"#008274",
    "sblue":"#465FC4",
    "blue":"#042367",
    "black":"#000000"
}