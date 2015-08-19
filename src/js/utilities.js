/* ------- CALL POPUP SAMPLE CODE -------- */
//utilities.show_popup({color:"#F0F0F0", motion:"paper_ball"}, function(e){console.log(e);});
/* --------------------------------------- */
var utilities = {
    popstage : null,
    show_popup : function(params, callBack){
        navigation._page_script.pause();
        if($('.app_popup').length == 0){
            $('body').append('<div class="app_popup"></div>');
        }else{
            $('.app_popup').html('');
        }
        TweenMax.to($('.app_popup'), .5, {opacity:1});
        var tmp = _.template($('#app_popup_template').html());
        $('.app_popup').append(tmp(params));
        if(typeof params.motion !== "undefined"){
            $('.app_popup .motion').css('display', 'block');
            if(typeof lib[params.motion] === "undefined"){
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
        $('#btn_no').load('./images/assets/cross_button.svg', function(e){
            $('#btn_no svg *').attr('stroke', '#FFFFFF');
        });
        $('#btn_yes').load('./images/assets/valid_button.svg', function(){
            $('#btn_yes svg *').attr('stroke', '#FFFFFF');
        });
        $('.popup_btn').off('click').on('click', function(){
            var btn_pos = $(this).position();
            var selected_color = colors.blue;
            $(this).css({"position":"absolute", "left":btn_pos.left+"px", "top":btn_pos.top+"px"});
            if($(this).attr('id') == 'btn_yes'){
                $('#btn_no').remove();
                selected_color = colors.green;
            }else if($(this).attr('id') == 'btn_no'){
                $('#btn_yes').remove();
                selected_color = colors.red;
            }
            $('.popup_motion').remove();
            var value = $(this).attr('data-value');
            TweenMax.to($(this), .2, {
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
            TweenMax.to($(this).find('svg'), .4, {
                width:180,
                height:180,
                onComplete:function(){
                    callBack(value);
                    utilities.hide_popup();
                },
                ease:Power4.easeOut
            });
        });
        TweenMax.to($('.content_popup'), .5, {css:{top:0}, ease:Back.easeOut});
    },
    play_motion : function(params, target){
        var canvas, exportRoot;
        createjs.MotionGuidePlugin.install();
        canvas = document.getElementById(target);
        exportRoot = new lib[params.motion+"_motion"]();
        this.popstage = new createjs.Stage(canvas);
        this.popstage.addChild(exportRoot);
        this.popstage.update();
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", this.popstage);
    },
    pop_up_motion_callback : function(){
        createjs.Ticker.removeEventListener("tick", this.popstage);
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