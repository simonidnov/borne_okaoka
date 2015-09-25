var self = null;
function screensaver(){
    this.init();
}
screensaver.prototype.init = function(){
    self = this;
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
        {name:"play", color:"blue"},
        {name:"drawing", color:"orange"},
        {name:"play", color:"blue"},
        {name:"diversity", color:"purple"},
        {name:"play", color:"blue"},
        {name:"energy", color:"pink"},
        {name:"play", color:"blue"},
        {name:"objectives", color:"sblue"},
        {name:"play", color:"blue"},
        {name:"win", color:"dgreen"},
        {name:"play", color:"blue"},
        {name:"balance", color:"grey"}
    ];
    this.init_stage();
    //screensaver_canvas
}
screensaver.prototype.init_stage = function(){
    $('#screensaver_page').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#screensaver_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    self.stage = new createjs.Stage("screensaver_canvas");
    self.stage.autoClear = true;
    self.stage.update();
    
    createjs.Touch.enable(self.stage);
    createjs.Ticker.addEventListener("tick", self.tick);
    createjs.Ticker.setFPS(60)
    
    self.play_motion(0);
}
screensaver.prototype.next_motion = function(){
    if(typeof this._current_motion === "undefined"){
        this.play_motion(0);
        return false;
    }
    this._current_motion++;
    if(this._current_motion >= this.motions.length){
        this.play_motion(0);
    }else{
        this.play_motion(this._current_motion);
    }
}
screensaver.prototype.play_motion = function(id){
    this._current_motion = id;
    var motion_id = this.motions[id].name;
    var color = this.motions[id].color;
    
    TweenMax.to($('.app_content'), .5, {'backgroundColor': colors[color]});
    createjs.MotionGuidePlugin.install();
    
    if(typeof this.exportRoot !== "undefined"){
        self.stage.removeChild(this.exportRoot);
        delete this.exportRoot;
    }
	this.exportRoot = new lib[motion_id]();
    this.exportRoot.regX = 450;
    this.exportRoot.regY = 300;
    this.exportRoot.x = window.innerWidth/2;
    this.exportRoot.y = window.innerHeight/2;

    self.stage.addChild(this.exportRoot);
}
screensaver.prototype.tick = function(){
    self.stage.update();
}
screensaver.prototype.pause = function(){
    
}
screensaver.prototype.play = function(){
    
}
screensaver.prototype.destroy = function(callBack){
    if(typeof this.exportRoot !== "undefined"){
        self.stage.removeChild(this.exportRoot);
        delete this.exportRoot;
    }
    createjs.Ticker.removeEventListener("tick", self.tick);
    
    if(utilities.is_touch_screen()){
        $('body').off('touchstart');
    }else{
        $('body').off('click');
    }
    
    callBack();
}