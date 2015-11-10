var _okg = null;
function screensaver(){
    this.init();
}
screensaver.prototype.init = function(){
    window.localStorage.setItem('menu_page', 0);   
    utilities.hide_popup();
    _okg = this;
    _okg.color = colors.grey;
    TweenMax.to($('.app_content'), .5, {'backgroundColor': colors.blue});
    $('#backbutton').css('display', 'none');
    if(utilities.is_touch_screen()){
        $('body').on('touchstart', function(){
            navigation.router.navigate('page/menu', {trigger:true, replace:true});
        });
    }else{
        $('body').on('click', function(){
            navigation.router.navigate('page/menu', {trigger:true, replace:true});
        });
    }
    this.motions = [
        {name:"drawing", color:"orange"},
        {name:"play_orange", color:"orange"},
        {name:"diversity", color:"purple"},
        {name:"play_purple", color:"purple"},
        {name:"energy", color:"pink"},
        {name:"play_pink", color:"pink"},
        {name:"win", color:"dgreen"},
        {name:"play_dgreen", color:"dgreen"},
        {name:"balance", color:"grey"},
        {name:"play_grey", color:"grey"}
    ];
    /*
        {name:"objectives", color:"sblue"},
        {name:"play_sblue", color:"sblue"},
    */
    this.init_stage();
    //screensaver_canvas
}
screensaver.prototype.init_stage = function(){
    $('#screensaver_page').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#screensaver_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    _okg.stage = new createjs.Stage("screensaver_canvas");
    _okg.stage.autoClear = true;
    _okg.stage.update();
    
    createjs.Touch.enable(_okg.stage);
    createjs.Ticker.addEventListener("tick", _okg.tick);
    createjs.Ticker.setFPS(60)
    
    _okg.play_motion(0);
}
screensaver.prototype.next_motion = function(){
    if(typeof this._current_motion === "undefined"){
        this.play_motion(0);
        return false;
    }
    this._current_motion++;
    if(this._current_motion >= this.motions.length){
        navigation.router.navigate('page/menu', {trigger:true, replace:true});
    }else{
        this.play_motion(this._current_motion);
    }
}
screensaver.prototype.play_motion = function(id){
    this._current_motion = id;
    var motion_id = this.motions[id].name;
    _okg.color = this.motions[id].color;
    var color = this.motions[id].color;
    TweenMax.to($('.app_content'), .5, {'backgroundColor': colors[color]});
    createjs.MotionGuidePlugin.install();
    
    if(typeof this.exportRoot !== "undefined"){
        _okg.stage.removeChild(this.exportRoot);
        delete this.exportRoot;
    }
	this.exportRoot = new lib[motion_id]();
    this.exportRoot.regX = 450;
    this.exportRoot.regY = 300;
    this.exportRoot.x = window.innerWidth/2;
    this.exportRoot.y = window.innerHeight/2;

    _okg.stage.addChild(this.exportRoot);
}
screensaver.prototype.tick = function(){
    _okg.stage.update();
}
screensaver.prototype.pause = function(){
    
}
screensaver.prototype.play = function(){
    
}
screensaver.prototype.destroy = function(callBack){
    /* TRY TO KILL ALL LIBS MOTION LOADED INSIDE THE APP CLEAN MEMORY USAGE */
    lib = null;
    
    if(typeof this.exportRoot !== "undefined"){
        _okg.stage.removeChild(this.exportRoot);
        delete this.exportRoot;
    }
    createjs.Ticker.removeEventListener("tick", _okg.tick);
    
    if(utilities.is_touch_screen()){
        $('body').off('touchstart');
    }else{
        $('body').off('click');
    }
    
    callBack();
}