function css_task_bar(infos){
    this._game_name = infos.game_name;
    this._inputs = infos.inputs;
    if($('#task_bar').length === 0){
        $('body').append('<div id="task_bar" class="task_bar" style="width:'+((_.keys(this._inputs).length)*80)+'px;"></div>');
    }
    this._target = $('#'+infos.target);
    this.create();
}
css_task_bar.prototype.create = function(){
    var self = this;
    $.each(_.keys(this._inputs), function(index, key){
        self._target.append('<div class="input" id="input_'+key+'" data-key="'+key+'"></div>');
        $('#input_'+key).append('<div class="icon"><img src="'+self._inputs[key].icon+'" height="50"/></div>');
        $('#input_'+key).append('<div class="value">'+self._inputs[key].default_value+'</div>');
    });
    self._target.append('<div class="total_score">00000</div>');
    self._target.append('<div class="score_button"></div>');
    self._target.append('<div class="replay_button"></div>');
}
css_task_bar.prototype.end_game = function(motion, total){
    console.log(total);
    TweenMax.set($('.score_button'), {scaleX:0, scaleY:0});
    TweenMax.set($('.replay_button'), {scaleX:0, scaleY:0});
    $('.total_score').css('display', 'block');
    $('.score_button').css('display', 'block');
    $('.replay_button').css('display', 'block');
    var total_text = {text:0};
    audio_manager.play_sound('total_count', 0, function(e){});
    TweenMax.to(total_text, 2, {text:total, onUpdate:function(){
        var total_str = "";
        if(Math.ceil(total_text.text).toString().length < 5){
            var dif = 5 - Math.ceil(total_text.text).toString().length;
            for(var i=0; i<dif; i++){
                total_str+="0";
            }
        }
        total_str+=Math.ceil(total_text.text);
        $('.total_score').html(total_str);
    }});
    TweenMax.to($(this._target), .5, {css:{"top":(window.innerHeight/2)-50}, onComplete:function(){
        utilities.create_over_motion({
            size:{width:400, height:200},
            position:{x:((window.innerWidth/2)-200), y:((window.innerHeight/2) - 300)},
            motion:motion
        }, function(){
        });
    }});
    TweenMax.to($('.score_button'), .5, {scaleX:1, scaleY:1});
    TweenMax.to($('.replay_button'), .5, {scaleX:1, scaleY:1, delay:.3});
    var self = this;
    utilities.save_score_game(this._game_name, total);
    $('.score_button').on('click', function(){
        utilities.show_score_game(self._game_name, total);
    });
    $('.replay_button').on('click', function(){
        window.location.href = "#page/"+navigation._current_page_name+"/intro/false/date/"+new Date().getTime();
        gui.Window.get().reload(3);
    });
}
css_task_bar.prototype.destroy = function(){
    this._target.remove();
}