var self;
function build(){
    self = this;
    this.stage = null;
    this.foot = null;
    this.floor = null;
    this.background = null;
    this.foregrounc = null;
    this.groundMatrix = new createjs.Matrix2D();
    this.foregroundMatrix = new createjs.Matrix2D();
    this.colors = _.clone(colors);
    delete this.colors.blue;
    delete this.colors.black;
    delete this.colors.green;
    this._base_height = 300;
    this._movable_motion = null;
    this._current_color = 0;
    this._current_width = 400;
    this._current_height = 70;
    this.rounded = 5;
    this._current_pos_x = window.innerWidth/2 - this._current_width/2;
    this._bricks = 1;
    this.container = null;
    this.movable = null;
    this.can_hit = true;
    this.init();
}
build.prototype.init = function(){
    //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.lighblue});
}
build.prototype.get_color = function(){
    if(self._current_color >= _.keys(self.colors).length){
        self._current_color = 0;
    }
    var colorer = self.colors[_.keys(self.colors)[self._current_color]];
    return colorer;
}
build.prototype.create_interface = function(){
    $('#build_canvas').attr({width:window.innerWidth, height:window.innerHeight});
    
    manifest = [
			{src: "pages/build/images/background.png", id: "ground"},
			{src: "pages/build/images/foreground.png", id: "groundup"}
		];
    loader = new createjs.LoadQueue(false);
    loader.addEventListener("complete", self.handleComplete);
    loader.loadManifest(manifest, true);
}
build.prototype.handleComplete = function(){
    self.stage = new createjs.Stage("build_canvas");
    self.stage.autoClear = true;
    
    self.groundImg = loader.getResult("ground");
    self.background = new createjs.Shape();
	self.background.graphics
        .beginBitmapFill(self.groundImg, "repeat", self.groundMatrix)
        .drawRect(0, 0, window.innerWidth, window.innerHeight);
	self.background.tileW = self.groundImg.width;
    self.stage.addChild(self.background);
    
    self.foregroundImg = loader.getResult("groundup");
    self.background = new createjs.Shape();
	self.background.graphics
        .beginBitmapFill(self.foregroundImg, "repeat-x", self.foregroundMatrix)
        .drawRect(0, 0, window.innerWidth, window.innerHeight);
	self.background.tileW = self.foregroundImg.width;
	self.background.tileH = self.foregroundImg.height;
    self.stage.addChild(self.background);
    
    self.container = new createjs.Container();
    self.stage.addChild(self.container);
    
    var graphics = new createjs.Graphics()
    .beginFill("#FFFFFF")
    .drawRoundRect(
        0, 
        0, 
        window.innerWidth, 
        100,
        self.rounded
    );
    self.floor = new createjs.Shape(graphics);
    self.floor.x = 0;
    self.floor.y = window.innerHeight;
    
    self.foot = new createjs.Bitmap("pages/build/images/foot.png");
    self.foot.width = self._current_width;
    self.foot.height = self._current_width;
    self.foot.x = ((window.innerWidth/2) - (self._current_width/2));
    self.foot.y = - self._current_width;
    
    var graphics = new createjs.Graphics()
    .beginFill(self.get_color())
    .drawRoundRect(
        0, 
        0, 
        self._current_width, 
        self._current_height,
        self.rounded
    );
    var shape = new createjs.Shape(graphics);
    shape.x = ((window.innerWidth/2) - (self._current_width/2));
    shape.y = - self._current_height;
    
    self.container.addChild(self.floor);
    self.container.addChild(self.foot);
    self.container.addChild(shape);
    
    /* set floor to y window.innerHeight - 150 */
    TweenMax.to(self.floor, .5, {y:(window.innerHeight - 100), ease:Quart.easeOut, onComplete:function(){
        /* set foot to y window.innerHeight - self._current_width with motion or bebond */
        TweenMax.to(self.foot, 1, {y:(window.innerHeight - self._base_height), ease:Bounce.easeOut, onComplete:function(){}});
        /* set first shape to y window.innerHeight - self._current_height - 400 with motion bebond */
        TweenMax.to(shape, 1, {
            y:(window.innerHeight - self._current_height - self._base_height), 
            ease:Bounce.easeOut, 
            onComplete:function(){
                /* create movable after game settings */
                self._current_color++;
                self.create_movable();
                $('#build_canvas').on('mousedown', function(){
                    self.drop_movable();
                });
                self.replace_oka();
            },
            delay:.4
        });
    }});
    
    createjs.Ticker.framerate = 60;
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", self.tick);
}
build.prototype.create_movable = function(){
    self._bricks++;
    var graphics = new createjs.Graphics()
    .beginFill(self.get_color())
    .drawRoundRect(
        0, 
        0, 
        self._current_width, 
        self._current_height,
        self.rounded
    );
    self.movable = new createjs.Shape(graphics);
    self.movable.x = 0;
    self.movable.y = (window.innerHeight-self._base_height) - (self._current_height * self._bricks);
    self.container.addChild(self.movable);
    self.move_right();
}
build.prototype.drop_movable = function(){
    self.can_hit = false;
    
    var dif = self.movable.x - self._current_pos_x;
    if(Math.abs(dif) < 2){
        dif = 0;
        self.movable.x = self._current_pos_x;
    }
    var pos = {x:self.movable.x, y:self.movable.y, w:self._current_width, h:self._current_height};
    var place = "";
    
    if(dif < 5){
        console.log('super');
    }
    if(dif > 5 && dif < 10){
        console.log('pas mal');
    }
    if(dif === 0){
        console.log("perfect");
    }else if(dif < 0){
        place = "before";
        pos.x = self._current_pos_x;
        pos.w = self._current_width - Math.abs(dif);
        self._current_width = pos.w;
        self._current_pos_x = pos.x;
    }else if(dif > 0){
        place = "after";
        self._current_pos_x = self.movable.x;
        pos.w = self._current_width - Math.abs(dif);
        self._current_width = self._current_width - Math.abs(dif);
    }
    
    TweenMax.killTweensOf(self.movable);
    self.container.removeChild(self.movable);
    
    if(self._current_width <= 0){
        self.die();
        return false;
    }
    
    switch(place){
        case "before":
            if(Math.abs(dif) >= 10){
                var graph = new createjs.Graphics()
                .beginFill(self.get_color())
                .drawRoundRect(
                    0, 
                    0, 
                    Math.abs(dif), 
                    pos.h,
                    self.rounded
                );
                var breaked = new createjs.Shape(graph);
                breaked.x = pos.x - Math.abs(dif);
                breaked.y = pos.y;

                self.container.addChild(breaked);
                TweenMax.to(breaked, .8, {
                    rotation : 260,
                    y : pos.y + window.innerHeight/2,
                    x : pos.x - Math.abs(dif) - 200,
                    ease:Back.easeIn,
                    onComplete : function(){
                        self.container.removeChild(breaked);
                    }
                });
            }
            break;
        case "after":
            if(Math.abs(dif) >= 10){
                var graph = new createjs.Graphics()
                .beginFill(self.get_color())
                .drawRoundRect(
                    0, 
                    0, 
                    Math.abs(dif), 
                    pos.h,
                    self.rounded
                );
                var breaked = new createjs.Shape(graph);
                breaked.x = pos.x + pos.w + Math.abs(dif);
                breaked.y = pos.y;

                self.container.addChild(breaked);
                TweenMax.to(breaked, .8, {
                    rotation : 260,
                    y : pos.y + window.innerHeight/2,
                    x : pos.x + pos.w + Math.abs(dif) + 200,
                    ease:Back.easeIn,
                    onComplete : function(){
                        self.container.removeChild(breaked);
                    }
                });
            }
            break;
    }
    var graphics = new createjs.Graphics()
        .beginFill(self.get_color())
        .drawRoundRect(
            pos.x, 
            pos.y, 
            pos.w, 
            pos.h,
            self.rounded
        );
    var shape = new createjs.Shape(graphics);
    self.container.addChild(shape);
    self._current_color++;

    var posY = window.innerHeight - (self._current_height * self._bricks);
    self.replace_oka();
    if(pos.w >= 10){
        setTimeout(function(){
            self.can_hit = true;
            self.create_movable();
            self.move_right();
        },500);
    }else{
        self.die();
        //alert('die');
    }
}
build.prototype.replace_oka = function(){
    if((self._current_height * self._bricks) + self._base_height > window.innerHeight/2){
        TweenMax.to(self.container, .5, {y : (self._base_height + (self._current_height * self._bricks)) - window.innerHeight/2});
        TweenMax.to(self.groundMatrix, .5, {ty : ((self._base_height + (self._current_height * self._bricks)) - window.innerHeight/2)/2});
        TweenMax.to(self.foregroundMatrix, .5, {ty : ((self._base_height + (self._current_height * self._bricks)) - window.innerHeight/2) * 1.2});
    }
}
build.prototype.die = function(){
    console.log('die');
    var h = self._bricks * self._current_height + self._base_height;
    var s = window.innerHeight / h;
    var rh = window.innerHeight * s;
    var rw = window.innerWidth * s;
    var floorw = window.innerWidth+(window.innerWidth*s)*self._bricks;
    self.floor.graphics.clear().beginFill("#FFFFFF").drawRect(0,0,floorw,100);
    self.floor.x = (window.innerWidth / 2) - (floorw / 2);
    TweenMax.to(self.container, 1, {
        scaleX : s,
        scaleY : s,
        y:window.innerHeight - rh,
        x:window.innerWidth/2 - rw/2
    });
    TweenMax.to(self.foregroundMatrix, 1, {ty : 0});
    TweenMax.to(self.groundMatrix, 1, {ty : 0});
}
build.prototype.move_left = function(){
    self._movable_motion = TweenMax.to(self.movable, 2, {x:0, ease:Linear.easeInOut, onComplete:function(){
        self.move_right();
    }});
}
build.prototype.move_right = function(){
    self._movable_motion = TweenMax.to(self.movable, 2, {x:(window.innerWidth - self._current_width), ease:Linear.easeInOut, onComplete:function(){
        self.move_left();
    }});
}
build.prototype.tick = function() {
    if(self === null){
        return false;
    }
    self.groundMatrix.tx -= .1 * self._bricks;
    self.stage.update();
}
build.prototype.clear = function(){
    self.stage.removeAllChildren();
    self.stage.update();
}
build.prototype.pause = function(){
    if(self._movable_motion){
        self._movable_motion.pause();
    }
    //TweenMax.killTweensOf(self.movable);
}
build.prototype.play = function(){
    if(self._movable_motion){
        self._movable_motion.play();
    }
    //self.move_left();
}
build.prototype.destroy = function(callBack){
    createjs.Ticker.removeEventListener('tick', self.tick);
    callBack();
}