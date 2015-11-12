var _okg;
function build(){
    _okg = this;
    this._debug = false;
    this.gameInfo = {
        status : "play",
        pieces : 0,
        height : 0,
        weight : 0
    }
    this.start_position = {original:{x:0, y:0}, event:{x:0, y:0}};
    this.end_position = {x:0, y:0};
    this.maps_array = [
        {key:'piece_1', color:'pink', mass:5, size:{w:2,h:3}, initial_pos:{x:2, y:1}},
        {key:'piece_1', color:'pink', mass:5, size:{w:2,h:3}, initial_pos:{x:2, y:1}},
        {key:'piece_2', color:'dgreen', mass:5, size:{w:3,h:3}, initial_pos:{x:2, y:1}},
        {key:'piece_3', color:'lightblue', mass:4, size:{w:3,h:2}},
        {key:'piece_4', color:'orange', mass:3, size:{w:3,h:1}},
        {key:'piece_5', color:'red', mass:1, size:{w:1,h:1}},
        {key:'piece_6', color:'sblue', mass:5, size:{w:3,h:3}},
        {key:'piece_7', color:'purple', mass:4, size:{w:2,h:2}},
        {key:'piece_8', color:'maroon', mass:2, size:{w:2,h:1}},
        {key:'piece_9', color:'grey', mass:3, size:{w:2,h:2}},
        {key:'piece_10', color:'yellow', mass:4, size:{w:3,h:2}},
        {key:'piece_11', color:'sblue', mass:5, size:{w:3,h:3}},
        {key:'piece_12', color:'dblue', mass:5, size:{w:2,h:3}},
        {key:'piece_13', color:'yellow', mass:5, size:{w:3,h:3}},
        {key:'piece_14', color:'lightblue', mass:5, size:{w:3,h:3}}
    ];
    this.shapes = [];
    this.explosion = [];
    this.colors = _.clone(colors);
    delete this.colors.blue;
    delete this.colors.black;
    delete this.colors.green;
    this._current_color = 0;
    this.init();
}
build.prototype.init = function(){
    
}
build.prototype.get_color = function(){
    if(_okg._current_color >= _.keys(_okg.colors).length){
        _okg._current_color = 0;
    }
    var colorer = _okg.colors[_.keys(_okg.colors)[_okg._current_color]];
    return colorer;
}
build.prototype.create_interface = function(){
    $('#build_canvas').attr({width:window.innerWidth, height:window.innerHeight});
    _okg.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'build_canvas', { preload: _okg.preload, create: _okg.create, render: _okg.render });
}
build.prototype.preload = function(){
    _okg.game.load.image('floor', 'pages/build_2/images/assets/floor.png');
    _okg.game.load.image('circle_50', 'pages/build_2/images/assets/circle_50.png');
    _okg.game.load.image('bar', 'pages/build_2/images/assets/bar.png');
    _okg.game.load.image('arrow', 'pages/build_2/images/arrow.png');
    _okg.game.load.image('pieces_grid', 'pages/build_2/images/pieces_grid.png');
    
    _okg.game.load.image('icon_height', 'pages/build_2/images/icon_height.png');
    _okg.game.load.image('icon_bricks', 'pages/build_2/images/icon_bricks.png');
    _okg.game.load.image('icon_weight', 'pages/build_2/images/icon_weight.png');
    
    _okg.game.load.image('piece_1', 'pages/build_2/images/pieces/piece_1.png');
    _okg.game.load.image('piece_2', 'pages/build_2/images/pieces/piece_2.png');
    _okg.game.load.image('piece_3', 'pages/build_2/images/pieces/piece_3.png');
    _okg.game.load.image('piece_4', 'pages/build_2/images/pieces/piece_4.png');
    _okg.game.load.image('piece_5', 'pages/build_2/images/pieces/piece_5.png');
    _okg.game.load.image('piece_6', 'pages/build_2/images/pieces/piece_6.png');
    _okg.game.load.image('piece_7', 'pages/build_2/images/pieces/piece_7.png');
    _okg.game.load.image('piece_8', 'pages/build_2/images/pieces/piece_8.png');
    _okg.game.load.image('piece_9', 'pages/build_2/images/pieces/piece_9.png');
    _okg.game.load.image('piece_10', 'pages/build_2/images/pieces/piece_10.png');
    _okg.game.load.image('piece_11', 'pages/build_2/images/pieces/piece_11.png');
    _okg.game.load.image('piece_12', 'pages/build_2/images/pieces/piece_12.png');
    _okg.game.load.image('piece_13', 'pages/build_2/images/pieces/piece_13.png');
    _okg.game.load.image('piece_14', 'pages/build_2/images/pieces/piece_14.png');
    
    _okg.game.load.image('square_yellow', 'pages/build_2/images/squares/square_yellow.png');
    _okg.game.load.image('square_sblue', 'pages/build_2/images/squares/square_sblue.png');
    _okg.game.load.image('square_dblue', 'pages/build_2/images/squares/square_dblue.png');
    _okg.game.load.image('square_lightblue', 'pages/build_2/images/squares/square_lightblue.png');
    _okg.game.load.image('square_dgreen', 'pages/build_2/images/squares/square_dgreen.png');
    _okg.game.load.image('square_orange', 'pages/build_2/images/squares/square_orange.png');
    _okg.game.load.image('square_purple', 'pages/build_2/images/squares/square_purple.png');
    _okg.game.load.image('square_red', 'pages/build_2/images/squares/square_red.png');
    _okg.game.load.image('square_grey', 'pages/build_2/images/squares/square_grey.png');
    _okg.game.load.image('square_red', 'pages/build_2/images/squares/square_red.png');
    _okg.game.load.image('square_pink', 'pages/build_2/images/squares/square_pink.png');
    _okg.game.load.image('square_maroon', 'pages/build_2/images/squares/square_maroon.png');
    
    _okg.game.load.image("replay_btn", "./images/assets/btn_replay_green.png");
    _okg.game.load.image("stats_btn", "./images/assets/btn_podium_green.png");
    
    _okg.game.load.physics('maps', 'pages/build_2/images/pieces/pieces.json');
}
build.prototype.create = function(){
    //_okg.game.time.events.loop(Phaser.Timer.SECOND / 20, _okg.moveBody, this);
    //_okg.game.time.events.loop(Phaser.Timer.SECOND * 2, _okg.clean_game, this);
    _okg.game.world.setBounds(0, -80000, window.innerWidth, 80000);
    
    _okg.game.camera.setSize(window.innerWidth, window.innerHeight);
    //_okg.game.world.setBounds(-4000, -2500, 800000, 2500);
    _okg.game.stage.scaleMode = Phaser.scaleModes.DEFAULT;
    
    _okg.game.stage.backgroundColor = colors.green;
    
    //_okg.game.world.scale.x = _okg.game.world.scale.y = .6;
    
    _okg.game.physics.startSystem(Phaser.Physics.P2JS);
    _okg.game.physics.p2.restitution = 0;
    _okg.game.physics.p2.friction = 1000;
    //_okg.game.physics.p2.world.defaultContactMaterial.friction = 0.3;
    _okg.game.physics.p2.gravity.y = 200;
    
    _okg.grids = _okg.game.add.group();
    _okg.decors = _okg.game.add.group();
    _okg.createGrids();
    _okg.createFloor();
    
    _okg.task_bar = _okg.game.add.group();
    _okg.create_taskbar();
    
    _okg.construction = _okg.game.add.group();
    for(var i=0; i<4; i++){
        _okg.createShape(i, "left");
    }
    for(var i=0; i<4; i++){
        _okg.createShape(i, "right");
    }
    /* SHOW INTRO POPUP */
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"build_intro_popup", buttons:["play"]}, 
        function(e){
        }
    );
}
build.prototype.create_taskbar = function(){
    _okg.task_bar.fixedToCamera = true;
    //_okg.task_bar.alpha = 0;
    _okg.height_icon = _okg.task_bar.create(0, 0, 'icon_height');
    _okg.height_icon.x = (window.innerWidth/2) - 105;
    
    _okg.bricks_icons = _okg.task_bar.create(0, 0, 'icon_bricks');
    _okg.bricks_icons.x = (window.innerWidth/2) - 25;
    
    _okg.weight_icon = _okg.task_bar.create(0, 0, 'icon_weight');
    _okg.weight_icon.x = (window.innerWidth/2) + 60;
    
    _okg.height_icon.y = _okg.bricks_icons.y = _okg.weight_icon.y = 20;
    
    _okg.height_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    
    _okg.bricks_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    
    _okg.weight_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "100 35px Roboto", fill: '#FFFFFF', align:"center"}));
    
    _okg.height_text.y = _okg.bricks_text.y = _okg.weight_text.y = 80;
    setTimeout(function(){
        _okg.height_text.x = _okg.height_icon.getBounds().x + (_okg.height_icon.getBounds().width/2) - (_okg.height_text.getBounds().width/2);
        _okg.bricks_text.x = _okg.bricks_icons.getBounds().x + (_okg.bricks_icons.getBounds().width/2) - (_okg.bricks_text.getBounds().width/2);
        _okg.weight_text.x = _okg.weight_icon.getBounds().x + (_okg.weight_icon.getBounds().width/2) - (_okg.weight_text.getBounds().width/2);
    }, 10);   
}
build.prototype.replace_texts = function(){
    _okg.height_text.x = _okg.height_icon.getBounds().x + (_okg.height_icon.getBounds().width/2) - (_okg.height_text.getBounds().width/2);
    _okg.bricks_text.x = _okg.bricks_icons.getBounds().x + (_okg.bricks_icons.getBounds().width/2) - (_okg.bricks_text.getBounds().width/2);
    _okg.weight_text.x = _okg.weight_icon.getBounds().x + (_okg.weight_icon.getBounds().width/2) - (_okg.weight_text.getBounds().width/2);
}
build.prototype.createGrids = function(){
    _okg.grids.fixedToCamera = true;
    _okg.grid_left_1 = _okg.grids.create(50+75, window.innerHeight - 450 + 75, 'pieces_grid');
    _okg.grid_left_1.anchor.setTo(0.5, 0.5);
    _okg.grid_left_2 = _okg.grids.create(50+75, window.innerHeight - 250 + 75, 'pieces_grid');
    _okg.grid_left_2.anchor.setTo(0.5, 0.5);
    _okg.grid_left_3 = _okg.grids.create(250+75, window.innerHeight - 450 + 75, 'pieces_grid');
    _okg.grid_left_3.anchor.setTo(0.5, 0.5);
    _okg.grid_left_4 = _okg.grids.create(250+75, window.innerHeight - 250 + 75, 'pieces_grid');
    _okg.grid_left_4.anchor.setTo(0.5, 0.5);
    
    _okg.grid_right_1 = _okg.grids.create(window.innerWidth - 200 +75, window.innerHeight - 450 + 75, 'pieces_grid');
    _okg.grid_right_1.anchor.setTo(0.5, 0.5);
    _okg.grid_right_2 = _okg.grids.create(window.innerWidth - 200 +75, window.innerHeight - 250 + 75, 'pieces_grid');
    _okg.grid_right_2.anchor.setTo(0.5, 0.5);
    _okg.grid_right_3 = _okg.grids.create(window.innerWidth - 400 +75, window.innerHeight - 450 + 75, 'pieces_grid');
    _okg.grid_right_3.anchor.setTo(0.5, 0.5);
    _okg.grid_right_4 = _okg.grids.create(window.innerWidth - 400 +75, window.innerHeight - 250 + 75, 'pieces_grid');
    _okg.grid_right_4.anchor.setTo(0.5, 0.5);
    
}
build.prototype.createFloor = function(){
    _okg.floor = _okg.decors.create(0, 0, 'floor');
    _okg.game.physics.p2.enable(_okg.floor, _okg._debug);
    _okg.floor.body.sensor = false;
    _okg.floor.body.static = true;
    _okg.floor.body.mass = 10000;
    _okg.floor.body.x = window.innerWidth/2;
    _okg.floor.body.y = (_okg.game.world.getBounds().height) - 300;
    _okg.floor.body.onBeginContact.add(_okg.collision_floor, this);
    
    _okg.base = _okg.decors.create(0, 0, 'circle_50');
    _okg.game.physics.p2.enable(_okg.base, _okg._debug);
    _okg.base.body.clearShapes();
    _okg.base.body.setCircle(25);
    _okg.base.body.static = true;
    _okg.base.body.mass = 1000;
    _okg.base.body.x = window.innerWidth/2;
    _okg.base.body.y = (_okg.floor.body.y) - (_okg.floor.getBounds().height/2)-25;
    
    _okg.bar = _okg.decors.create(0, 0, 'bar');
    _okg.game.physics.p2.enable(_okg.bar, _okg._debug);
    _okg.bar.body.mass = 600;
    _okg.bar.body.x = window.innerWidth/2;
    _okg.bar.body.y = (_okg.base.body.y) - (_okg.bar.getBounds().height);
    
    _okg.bar.body.onBeginContact.add(_okg.collision_bar, this);
    //_okg.game.camera.follow(_okg.base);
    var constraint = _okg.game.physics.p2.createLockConstraint(_okg.bar, _okg.base, [0, -50], 0);
    var constraint1 = _okg.game.physics.p2.createGearConstraint(_okg.bar, _okg.base, 0, 1);

    _okg.drop_line_bmp = _okg.game.add.bitmapData(window.innerWidth, 5);
    /*_okg.drop_line_bmp.ctx.beginPath();
    _okg.drop_line_bmp.ctx.lineWidth = "2";
    _okg.drop_line_bmp.ctx.strokeStyle = 'white';
    _okg.drop_line_bmp.ctx.setLineDash([10,3]);
    _okg.drop_line_bmp.ctx.moveTo(window.innerWidth/2 - 400, 2);
    _okg.drop_line_bmp.ctx.lineTo(window.innerWidth/2 + 400, 2);
    _okg.drop_line_bmp.ctx.stroke();
    _okg.drop_line_bmp.ctx.closePath();*/
    _okg.drop_line = _okg.decors.create(0, 0, _okg.drop_line_bmp); 
    _okg.drop_line.alpha = .5;
    _okg.drop_line.position.y = _okg.bar.body.y - 25;
        
    _okg.arrow = _okg.decors.create(0, 0, 'arrow');
    _okg.arrow.anchor.setTo(0.5, 0.5);
    _okg.arrow.x = window.innerWidth/2;
    _okg.arrow.y = (_okg.floor.body.y) - (_okg.floor.getBounds().height/2)-250;
    _okg.arrow.alpha = .5;
    TweenMax.to(_okg.arrow, 2, {alpha:.1, yoyo:true, repeat:-1});
    //_okg.game.physics.p2.createGearConstraint(_okg.base, _okg.bar, 0, 2);
    //_okg.game.physics.p2.createRevoluteConstraint(
    //    _okg.bar, [_okg.bar.getBounds().width/2, 0], _okg.base, [25, 0], 20000
    //);
}
build.prototype.global_scale = function(scale){
    _okg.game.world.scale.x = _okg.game.world.scale.y = scale;
}
build.prototype.collision_bar = function(body, bodyB, shapeA, shapeB, equation){
    if(body.sprite.key.indexOf('piece_') !== -1){
        if(_okg.arrow){
            _okg.arrow.kill();
            delete _okg.arrow;
        }
    }
}
build.prototype.collision_floor = function(body, bodyB, shapeA, shapeB, equation){
    if(_okg.gameInfo.status !== "lose"){
        if(body.sprite.key.indexOf('square_') === -1){
            _okg.destroy_element(body.sprite, 0);
            _okg.gameInfo.status = "lose";
            _okg.last_brick = _okg.bar;
            for(var i=0; i<_okg.shapes.length; i++){
                _okg.destroy_element(_okg.shapes[i], i);
            }
            _okg.end_game();
        }
    }
}
var logbody = null;
build.prototype.collision_block = function(body, bodyB, shapeA, shapeB, equation){
    if(body === null){
        return false;   
    }
    if(typeof body !== "undefined"){
        if(typeof body.sprite !== "undefined"){
            if(!body.sprite.body.collided){
                body.sprite.body.collided = true;
                var h = body.sprite.body.y - 25;
                if(h < _okg.gameInfo.height){
                    _okg.gameInfo.height = body.sprite.body.y - 25;
                    _okg.update_scores();
                }
                if(typeof _okg._sound_block === "undefined"){
                    audio_manager.play_sound('build_2_drop', 0, function(e){
                        _okg._sound_block = e;
                    });
                }else{
                    _okg._sound_block.play();   
                }
            }
        }
    }
}
build.prototype.update_scores = function(){
    var pos = {y:_okg.drop_line.position.y};
    TweenMax.to(pos, .5, {y:_okg.gameInfo.height, onUpdate:function(){
        _okg.drop_line.position.y = pos.y;
    }});
    _okg.height_text.text = Math.abs(Math.round(_okg.gameInfo.height/10)); 
    _okg.weight_text.text = Math.round(_okg.gameInfo.weight); 
    _okg.bricks_text.text = Math.round(_okg.gameInfo.pieces); 
    _okg.replace_texts();
}
var last_destroyed = null;
build.prototype.destroy_element = function(body, delay){
    last_destroyed = body;
    _okg.game.physics.p2.gravity.y = 1000;
    var element = _okg.maps_array[body.map_id];
    setTimeout(function(){
        if(typeof element === "undefined"){
            return false;
        }
        if(element === null){
            return false;
        }
        if(typeof element.mass !== "undeifned"){
            for(var i=0; i<(element.mass*2); i++){
                var current_shape = _okg.explosion.length;
                _okg.explosion[current_shape] = _okg.construction.create(body.x, body.y, 'square_'+element.color);
                _okg.game.physics.p2.enable(_okg.explosion[current_shape], _okg._debug);
                _okg.explosion[current_shape].body.mass = 400;
                _okg.explosion[current_shape].body.velocity.y = -400;
            }
            body.kill();
        }
        audio_manager.play_sound('build_2_explode', 0, function(e){});
        
    }, (delay*100));
}
build.prototype.createShape = function(pos, position){
    var rotation = Math.ceil(Math.random()*4);
    var scale = 1;
    var e_h = ((91*4)*scale);
    var sh_random = Math.ceil(Math.random()*(_okg.maps_array.length-1));
    _okg.currentShape = _okg.maps_array[sh_random].key;
    var current_shape = _okg.shapes.length;
    var sw = 4-_okg.maps_array[sh_random].size.w;
    var sh = _okg.maps_array[sh_random].size.h;
    var start_x = window.innerWidth/2 - ((_okg.maps_array.length/2)*100);
    
    if(position === "left"){
        var pos_x = _okg["grid_left_"+(pos+1)].position.x;
        var pos_y = _okg["grid_left_"+(pos+1)].position.y;
    }else{
        var pos_x = _okg["grid_right_"+(pos+1)].position.x;
        var pos_y = _okg["grid_right_"+(pos+1)].position.y;
    }
    _okg.shapes[current_shape] = _okg.construction.create(pos_x, pos_y, _okg.currentShape);
    _okg.shapes[current_shape].scale.x = _okg.shapes[current_shape].scale.y = scale;
    
    _okg.shapes[current_shape].anchor.setTo(0.5, 0.5);
    switch(rotation){
        case 0:
            _okg.shapes[current_shape].initial_angle = 0;
            break;
        case 1:
            _okg.shapes[current_shape].initial_angle = 90;
            _okg.shapes[current_shape].angle = 90;
            break;
        case 2:
            _okg.shapes[current_shape].initial_angle = 180;
            _okg.shapes[current_shape].angle = 180;
            break;
        default:
            _okg.shapes[current_shape].initial_angle = 0;
            break;
    }
    _okg.shapes[current_shape].inputEnabled = true;
    _okg.shapes[current_shape].input.enableDrag(false, true);
    _okg.shapes[current_shape].events.onDragStart.add(_okg.startDrag, this);
    _okg.shapes[current_shape].events.onDragStop.add(_okg.stopDrag, this); 
    _okg.shapes[current_shape].fixedToCamera = true;
    
    _okg.shapes[current_shape].map_id = sh_random;
    _okg.shapes[current_shape].pos = pos;
    _okg.shapes[current_shape].initial_position = position;
}
build.prototype.getDistance = function(){
    var x1 = _okg.start_position.event.x;
    var x2 = _okg.end_position.x;
    var y1 = _okg.start_position.event.y;
    var y2 = _okg.end_position.y;
    var distance = Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    return distance;
}
build.prototype.startDrag = function(sprite, pointer){
    navigation.set_update_events();
    _okg.start_position.original.x = sprite.position.x;
    _okg.start_position.original.y = sprite.position.y;
    _okg.start_position.event.x = pointer.clientX;
    _okg.start_position.event.y = pointer.clientY;
    sprite.scale.x = sprite.scale.y = 1;
}
build.prototype.stopDrag = function(sprite, pointer){
    _okg.end_position.x = pointer.clientX;
    _okg.end_position.y = pointer.clientY;
    if(_okg.getDistance() > 150){
        sprite.fixedToCamera = false;
        sprite.inputEnabled = false;
        _okg.game.physics.p2.enable(sprite, _okg._debug);
        _okg.last_brick = sprite;
        sprite.body.mass = _okg.maps_array[sprite.map_id].mass * 200;
        sprite.body.clearShapes();
        sprite.body.loadPolygon('maps', _okg.maps_array[sprite.map_id].key);
        _okg.last_brick.body.angle = _okg.last_brick.initial_angle;
        _okg.createShape(sprite.pos, sprite.initial_position);
        //_okg.gameInfo.pieces++;
        sprite.body.collided = false;
        sprite.body.onBeginContact.add(_okg.collision_block, this);
        
        _okg.gameInfo.pieces++;
        _okg.gameInfo.weight += _okg.maps_array[sprite.map_id].mass;
        _okg.update_scores();
    }else{
        sprite.position.x = _okg.start_position.original.x;
        sprite.position.y = _okg.start_position.original.y;
    }
    return false;
}
build.prototype.render = function(){
    if(_okg.game.paused){
        return false;
    }
    if(typeof _okg.last_brick !== "undefined" && _okg.gameInfo.status !== "lose"){
        /* TODO LOOKING FOR _okg.gameInfo.height */
        var np = {
            x:_okg.last_brick.position.x,
            y:_okg.last_brick.position.y - window.innerHeight/2
        }
        /*var np = {
            x:_okg.last_brick.position.x,
            y:_okg.bar.position.y+_okg.gameInfo.height-200
        }*/
        var current_cam_pos = _okg.game.camera.position;
        /* TODO KILL ALL TWEEN */
        TweenMax.to(current_cam_pos, .5, {
            y:np.y,
            x:np.x,
            onUpdate : function(){
                _okg.game.camera.setPosition(0, current_cam_pos.y);
            }
        });     
    }else{
        if(typeof _okg.last_brick !== "undefined"){
            var np = {
                x:_okg.last_brick.position.x,
                y:_okg.last_brick.position.y
            }
            _okg.game.camera.setPosition(0, np.y);
        }
    }
    //_okg.scale = (window.innerHeight / (_okg.construction.getBounds().height+300)).toFixed(2);
    //if(_okg.scale>1){
    //    _okg.scale = 1;
    //}
}
build.prototype.end_game = function(){
    TweenMax.killAll();
    _okg.gameInfo.status = "lose";
    audio_manager.play_sound('build_2_end_game', 0, function(e){});
    //_okg.game.camera.setPosition(0, _okg.bar.position.y);
    setTimeout(function(){
        _okg.task_bar.fixedToCamera = false;
        TweenMax.to(_okg.task_bar, .8, {y:_okg.game.camera.position.y - _okg.task_bar.getBounds().height, onComplete:function(){
            if(typeof _okg === "undefined"){
                return false;
            }
            _okg.total_text = _okg.task_bar.add(_okg.game.make.text(0, 0, '0',  { font: "700 100px Roboto", fill: '#FFFFFF', align:"center"}));
            _okg.total_text.text = "000";
            _okg.total_text.y = 120;
            _okg.total_text.alpha = 0;
            _okg.total_text.x = window.innerWidth/2 - (_okg.total_text.getBounds().width/2);
            TweenMax.to(_okg.total_text, .5, {alpha:1});
            var total = Math.ceil(Math.abs(_okg.gameInfo.height)/100 + _okg.gameInfo.pieces + _okg.gameInfo.weight);
            var scored = {total:0};
            /* todo : create end motion */
            utilities.create_over_motion({
                size:{width:400, height:200},
                position:{x:((window.innerWidth/2)-200), y:((window.innerHeight/2) - 300)},
                motion:"build_end_motion"
            }, function(){
            });
            audio_manager.play_sound('total_count', 0, function(e){});
            TweenMax.to(scored, 2.5, {
                total : total,
                delay:.6,
                onUpdate : function(){
                    if(typeof _okg === "undefined"){
                        return false;
                    }
                    var score = "";
                    var num = Math.ceil(scored.total);
                    if(num.toString().length < 3){
                        var dif = 5 - num.toString().length;
                        for(var i=0; i<dif; i++){
                            score+="0";
                        }
                    }
                    _okg.total_text.y = 120;
                    _okg.total_text.x = window.innerWidth/2 - (_okg.total_text.getBounds().width/2);
                    score+= num.toString();
                    _okg.total_text.text = score;
                },
                ease:Power4.easeOut,
                onComplete:function(){
                    if(typeof _okg === "undefined"){
                        return false;
                    }
                    _okg.stat_button = _okg.game.add.button(_okg.game.camera.position.x - 120, _okg.game.camera.position.y + 150, 'stats_btn', _okg.show_stats, this);
                    _okg.replay_button = _okg.game.add.button(_okg.game.camera.position.x + 20, _okg.game.camera.position.y + 150, 'replay_btn', _okg.replay_game, this);

                    utilities.save_score_game('build_2', Math.ceil(total));

                    _okg.stat_button.scale.x = _okg.stat_button.scale.y = _okg.replay_button.scale.x = _okg.replay_button.scale.y = 0;
                    var sc = {s:0};
                    TweenMax.to(sc, .5, {s:1, onUpdate:function(){
                        _okg.stat_button.scale.x = _okg.stat_button.scale.y = _okg.replay_button.scale.x = _okg.replay_button.scale.y = sc.s;
                    }});
                }
            });
        }});
    }, 3000);
    //_okg.bitmap.context.clearRect(0,0,window.innerWidth, window.innerHeight);
}
build.prototype.replay_game = function(){
    utilities.destroy_over_motion();
    window.location.href =  "#page/"+navigation._current_page_name+"/intro/false/date/"+new Date().getTime();;
    gui.Window.get().reload(3);
}
build.prototype.show_stats = function(){
    var total_score = Math.ceil(Math.abs(_okg.gameInfo.height)/100 + _okg.gameInfo.pieces + _okg.gameInfo.weight);
    utilities.show_score_game('build_2', total_score);   
}
build.prototype.pause = function(){
    _okg.game.paused = true;
}
build.prototype.play = function(){
    _okg.game.paused = false;
}
build.prototype.destroy = function(callBack){
    TweenMax.killAll();
    _okg.game.destroy();
    utilities.destroy_over_motion();
    callBack();
}