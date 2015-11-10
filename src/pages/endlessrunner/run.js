var _okg = null;
var run  = function(){
    _okg=this;
    _task_bar = null;
}
run.prototype.init = function(){
    if(typeof require !== "undefined"){
        $('#game_content').css({"width":window.innerWidth+"px", "height":window.innerHeight+"px"}).attr('src', '/pages/endlessrunner/game_frame/index.html');
    }else{
        $('#game_content').css({"width":window.innerWidth+"px", "height":window.innerHeight+"px"}).attr('src', 'pages/endlessrunner/game_frame/index.html');
    }
    this._task_bar = new css_task_bar(
        {
            target:"task_bar",
            inputs:{
                distance:{
                    icon:"pages/run/maps_new/decors/run_decors_element_distance.png",
                    default_value:"0"
                },
                circle:{
                    icon:"pages/run/maps_new/elements/run_decors_element_circle.png",
                    default_value:"0"
                },
                square:{
                    icon:"pages/run/maps_new/elements/run_decors_element_square.png",
                    default_value:"0"
                },
                triangle:{
                    icon:"pages/run/maps_new/elements/run_decors_element_triangle.png",
                    default_value:"0"
                }
            }
        }
    );
}
run.prototype.end_game = function(type){
    //
    var score = parseInt($('#input_triangle .value').html()) +
                parseInt($('#input_square .value').html()) +
                parseInt($('#input_circle .value').html()) +
                parseInt($('#input_distance .value').html());
    var motion = "";
    switch(type){
        case "picots":
            motion = "picots_run_motion";
            break;
        case "watter":
            motion = "watter_run_motion";
            break;
        case "wall":
            motion = "wall_run_motion";
            break;
        default:
            motion = "picots_run_motion";
            break;
    }
    this._task_bar.end_game(motion, score, "run");
}
run.prototype.create_interface = function(){
    this.init();
}
run.prototype.play = function(){
    
}
run.prototype.pause = function(){
    
}
run.prototype.died = function(type){
    TweenMax.to($('#game_content'), .5, {opacity:0, onComplete:function(){
        $('#game_content').attr('src', '');
        _okg.end_game(type);
    }});
}
run.prototype.get_piece = function(name){
    switch(name){
        case 'circle':
            $('#input_circle .value').html(parseInt($('#input_circle .value').html())+1);
            break;
        case 'square':
            $('#input_square .value').html(parseInt($('#input_square .value').html())+1);
            break;
        case 'triangle':
            $('#input_triangle .value').html(parseInt($('#input_triangle .value').html())+1);
            break;
    }
}
run.prototype.update_distance = function(distance){
    $('#input_distance .value').html(distance);
}
run.prototype.destroy = function(callBack){
    this._task_bar.destroy();
    callBack();
}
