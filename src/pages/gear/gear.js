var _okg = null;
function gear(){
    this._debug = true;
    this.gears = [];
    this.grid_infos = {
        size:{
            width:15,
            height:7,
            space:50
        }
    }
    this.init();
}
gear.prototype.init = function(){
    _okg = this;
    this.game = new Phaser.Game(
        window.innerWidth, 
        window.innerHeight, 
        Phaser.CANVAS, 
        'content_gear', 
        { 
            preload : this.preload,
            create: this.create, 
            update: this.update, 
            render: this.render
        }
    );
}
gear.prototype.preload = function(){
    _okg.game.load.image('gear_50', 'pages/gear/images/gears/gear_50.png');
    _okg.game.load.image('gear_95', 'pages/gear/images/gears/gear_95.png');
    _okg.game.load.image('gear_122', 'pages/gear/images/gears/gear_122.png');
    _okg.game.load.physics('gears_map', 'pages/gear/images/gears/gears.json');
}
gear.prototype.create = function(){
    _okg.game.physics.startSystem(Phaser.Physics.P2JS);
    _okg.game.physics.p2.restitution = 1;
    _okg.game.physics.p2.friction = 0;
    _okg.game.physics.p2.gravity.y = 0;

    _okg.game.stage.backgroundColor = navigation._current_interface_color;
    _okg.grid = _okg.game.add.group();
    _okg.grid.position.x = window.innerWidth/2 - ((_okg.grid_infos.size.width * _okg.grid_infos.size.space)/2);
    _okg.grid.position.y = window.innerHeight/2 - ((_okg.grid_infos.size.height * _okg.grid_infos.size.space)/2);
    
    _okg.gear_group = _okg.game.add.group();
    _okg.gear_group.position.x = window.innerWidth/2 - ((_okg.grid_infos.size.width * _okg.grid_infos.size.space)/2);
    _okg.gear_group.position.y = window.innerHeight/2 - ((_okg.grid_infos.size.height * _okg.grid_infos.size.space)/2);
    
    _okg.draw_grid();
    _okg.create_motor();
    _okg.create_gear(100,50,"gear_122");
}
gear.prototype.create_motor = function(){
    _okg.gear_motor = _okg.gear_group.create(0, 0, 'gear_122');
    _okg.game.physics.p2.enable(_okg.gear_motor, _okg._debug);
    _okg.gear_motor.body.clearShapes();
    //_okg.gear_motor.body.setCircle(61);
    _okg.gear_motor.body.loadPolygon('gears_map', "gear_122");
    _okg.gear_motor.body.mass = 100;
    _okg.gear_motor.body.kinematic = true;
}
gear.prototype.create_gear = function(x,y,asset){
    var gear_id = _okg.gears.length;
    _okg.gears[gear_id] = _okg.gear_group.create(x, y, asset);
    _okg.gears[gear_id]._original_position = {x:x, y:y};
    _okg.game.physics.p2.enable(_okg.gears[gear_id], _okg._debug);
    _okg.gears[gear_id].body.clearShapes();
    //_okg.gears[gear_id].body.setCircle(61);
    _okg.gears[gear_id].body.loadPolygon('gears_map', asset);
    _okg.gears[gear_id].body.mass = 100;
    //_okg.gears[gear_id].body.motionState = Phaser.Physics.P2.Body.KINEMATIC;
    //_okg.gears[gear_id].body.kinematic = true;
}
gear.prototype.draw_grid = function(){
    var line = 0;
    var column = 0;
    for(var i = 0; i<(_okg.grid_infos.size.width * _okg.grid_infos.size.height); i++){
        var graphics = _okg.game.add.graphics(
            _okg.grid_infos.size.space * column, 
            _okg.grid_infos.size.space * line
        );
        graphics.lineStyle(0);
        graphics.beginFill(0xFFFFFF, 1);
        graphics.drawCircle(0, 0, 10);
        graphics.endFill();
        column++;
        if(column === _okg.grid_infos.size.width){
            column = 0;
            line++;
        }
        _okg.grid.add(graphics);
    }
}
gear.prototype.update = function(){
    
}
gear.prototype.render = function(){
    _okg.gear_motor.body.rotation+=.01;
    $.each(_okg.gears, function(index, gear){
        gear.body.x = gear._original_position.x;
        gear.body.y = gear._original_position.y;
    });
}
gear.prototype.pause = function(){
    
}
gear.prototype.create_interface = function(){
    this.init();
}
gear.prototype.destroy = function(callBack){
    $('.okaoka_gear').html('');
    callBack();
}