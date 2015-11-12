function joystick(target, callBack){
    this._target = target;
    this._callBack = callBack;
    this._joystick = _okg.game.add.group();
    this._joystick.x = 300;
    this._joystick.y = 300;
    this._back = null;
    this._draggable = null;
    this._line = null;
    this.draw_controller();
    this._is_down = false;
    //this._joystick.game.world = null;
}
joystick.prototype.init = function(){
    
},
joystick.prototype.draw_controller = function(){
    //this._back = _okg.game.add.graphics(0, 0);
    //this._back.lineStyle(0);
    //this._back.beginFill(0xFFFF0B, 0.5);
    //this._back.drawCircle(0, 0, 200);
    //this._back.endFill();
    //this._joystick.add(this._back);
    
    var bounds = new Phaser.Rectangle(-100, -100, 200, 200);
    //var bounds = new Phaser.Circle(0, 0, 200);
    _okg.game.debug.geom(bounds,'#cfffff');
    
    var graphics = _okg.game.add.graphics(bounds.x, bounds.y);
    //graphics.beginFill(0x000077, 0);
    //graphics.drawRect(0, 0, bounds.width, bounds.height);
    //this._joystick.add(graphics);
    
    
    /*this._draggable = _okg.game.add.graphics(0, 0);
    
    this._draggable.lineStyle(0);
    this._draggable.beginFill(0xFFFFFF, 1);
    this._draggable.drawCircle(0, 0, 100);
    this._draggable.endFill();*/
    this._draggable = _okg.game.add.sprite(0, 0);
    
    this._line = _okg.game.add.graphics(0, 0);
    this._joystick.add(this._line);
    
    var circle = _okg.game.add.graphics(0, 0);
    circle.lineStyle(0);
    circle.beginFill(0xFFFFFF, .1);
    circle.drawCircle(0, 0, 100);
    circle.beginFill(0xFFFFFF, 1);
    circle.drawCircle(0, 0, 10);
    circle.endFill();
    this._draggable.addChild(circle);
    
    this._draggable.anchor.set(0.5);
    this._joystick.add(this._draggable);
    
    this._draggable.inputEnabled = true;
    //this._draggable.input.boundsRect = bounds;
    this._draggable.input.enableDrag(true);
    this._draggable.events.onDragStart.add(this.drag_start);
    this._draggable.events.onDragUpdate.add(this.drag_update);
    this._draggable.events.onDragStop.add(this.drag_stop);
    

}
joystick.prototype.drag_start = function(){
    TweenMax.killAll();
}
joystick.prototype.drag_update = function(sprite, pointer, dragX, dragY, snapPoint){
    var b, a;
    a = {x:sprite.position.x,y:sprite.position.y};
    b = {x:0,y:0};
    _okg._joy._line.clear();
    _okg._joy._callBack(_okg._joy.distance(a, b));
    _okg._joy._is_down = true;
    _okg._joy._line.beginFill(0xFFFFFF, 1);
    _okg._joy._line.drawCircle(0, 0, 10);
    _okg._joy._line.endFill();
    _okg._joy._line.lineStyle(10, "0xFFFFFF", 1);
    _okg._joy._line.moveTo(a.x, a.y);
    _okg._joy._line.lineTo(b.x, b.y);
}
joystick.prototype.distance = function(a, b){
    var angleRadian = Math.atan2(a.x - b.x, a.y - b.y);
    var angleDegree = angleRadian * (180 / Math.PI);
    return {angle:angleDegree, distance:Math.sqrt((a.x -= b.x) * a.x + (a.y -= b.y) * a.y), position:a};
}
joystick.prototype.drag_stop = function(){
    _okg._joy._line.clear();
    _okg._joy._is_down = false;
    TweenMax.to(_okg._joy._draggable, .7, {x:0, y:0, onUpdate:function(){
        a = {x:_okg._joy._draggable.position.x,y:_okg._joy._draggable.position.y};
        b = {x:0,y:0};
        _okg._joy._callBack(_okg._joy.distance(a, b));
    }, onComplete : function(){
        a = {x:0, y:0};
        b = {x:0, y:0};
        _okg._joy._callBack(_okg._joy.distance(a, b));
    }});
}
joystick.prototype.destroy = function(){
    this._joystick.destroy();
}