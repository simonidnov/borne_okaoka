var _okg = null;
function maze(){
    this._direction = {angle:0, distance:0, position:{x:0, y:0}};
    this.brick=null;
    this.element = [];
    this.first_brick = null;
    this.last_brick = null;
    this._tile_size = 50;
    this._init_pos = {x:0, y:0}
    this._time_lap = 60000;
    this.maze_level = [];
    this.playlist_uri = "/playlist/";   
    this.playlist = null;
    this._current_maze = 0;
    this._joy  = null;
    this.init();
    this.game_infos = {
        great:0,
        wrong:0
    }
    _okg = this;
}
maze.prototype.init = function(){
    //this.create_interface();
}
maze.prototype.pause = function(){
    
}
maze.prototype.play = function(){
    
}
maze.prototype.hit = function(e){
    //console.log(e);
}
maze.prototype.draw_level = function(){
    this.maze_level = this.generateSquareMaze(11);
    var first_brick = null;new createjs.Shape();
    
    _okg.game.input.onDown.add(_okg.hit, this);
    
    _okg.brick = _okg.game.add.physicsGroup(Phaser.Physics.ARCADE);
    _okg.element = _okg.game.add.physicsGroup(Phaser.Physics.ARCADE);
    TweenMax.set(_okg.brick, {alpha:0});
    TweenMax.set(_okg.element, {alpha:0});
    //_okg.game.input.onDown.add(toggle, this);
   
    for(var i=0; i<this.maze_level.length; i++){
        for(var l=0; l<this.maze_level[i].length; l++){
            if(this.maze_level[i][l]){
                var s = _okg.brick.create(this._init_pos.x+(this._tile_size*i), this._init_pos.y+(this._tile_size*l), 'wall');
            }else{
                if(_okg.first_brick === null){
                    var first = {line:i,column:l};
                    _okg.first_brick = '';
                }
                var last = {line:i,column:l};
                
                var num = Math.random();
                if(num < .1){
                    _okg.element.create(this._init_pos.x+(this._tile_size*i), this._init_pos.y+(this._tile_size*l), 'circle');
                }else if(num < .2){
                    _okg.element.create(this._init_pos.x+(this._tile_size*i), this._init_pos.y+(this._tile_size*l), 'square');
                }else if(num < .3){
                    _okg.element.create(this._init_pos.x+(this._tile_size*i), this._init_pos.y+(this._tile_size*l), 'triangle');
                }
                
            }
        }
        if(i === this.maze_level.length-1){
            _okg.last_brick = _okg.game.add.sprite(this._init_pos.x+(this._tile_size*last.line), this._init_pos.y+(this._tile_size*last.column), 'end');
            _okg.game.physics.arcade.enable(_okg.last_brick);
            _okg.last_brick.body.velocity.set(0, 0);
            _okg.last_brick.body.bounce.set(1);
            _okg.last_brick.body.immovable = true;
            _okg.last_brick.body.collideWorldBounds = false;
            _okg.last_brick.body.allowGravity = false;
            TweenMax.set(_okg.last_brick, {alpha:0});
            
            
            _okg.first_brick = _okg.game.add.sprite(this._init_pos.x+(this._tile_size*first.line), this._init_pos.y+(this._tile_size*first.column), 'hero');
            TweenMax.set(_okg.first_brick, {alpha:0});
            _okg.game.physics.arcade.enable(_okg.first_brick);
            _okg.first_brick.body.velocity.set(0, 0);
            _okg.first_brick.body.bounce.set(1);
            _okg.first_brick.body.enable = true;
            _okg.first_brick.body.collideWorldBounds = false;  
            _okg.first_brick.body.allowGravity = true;
            _okg.first_brick.body.immovable = false;
            _okg.first_brick.body.bounce = 0;
            
            setTimeout(function(){
                if(_okg.brick.getBounds().width > window.innerWidth && _okg.brick.getBounds().width > window.innerHeight){
                    // SI LA MAP EST PLUS GRANDE QUE L'ECRAN EN HAUTEUR ET LARGEUR
                    _okg.game.camera.follow(_okg.first_brick);
                }else{
                    if(_okg.brick.getBounds().width > window.innerWidth || _okg.brick.getBounds().width > window.innerHeight){
                        if(_okg.brick.getBounds().width > window.innerWidth){
                            // SI LA MAP EST PLUS GRANDE QUE L'ECRAN EN LARGEUR
                            //follow x only
                            //center maze y
                            _okg.first_brick.y = _okg.first_brick.x+window.innerHeight/2 - (_okg.brick.getBounds().height/2);
                            _okg.last_brick.y = _okg.last_brick.x+window.innerHeight/2 - (_okg.brick.getBounds().height/2);
                            _okg.game.camera.follow(_okg.first_brick, Phaser.Camera.FOLLOW_PLATFORMER);
                            _okg.brick.y = window.innerHeight/2 - (_okg.brick.getBounds().height/2);
                            _okg.element.y = window.innerHeight/2 - (_okg.brick.getBounds().height/2);
                        }else{
                            // SI LA MAP EST PLUS GRANDE QUE L'ECRAN EN HAUTEUR
                            //follow y only
                            //center maze x
                            _okg.first_brick.x = _okg.first_brick.x+window.innerWidth/2 - (_okg.brick.getBounds().width/2);
                            _okg.game.camera.follow(_okg.first_brick, Phaser.Camera.FOLLOW_TOPDOWN);
                            _okg.brick.x = window.innerWidth/2 - (_okg.brick.getBounds().width/2);
                            _okg.element.x = window.innerWidth/2 - (_okg.brick.getBounds().width/2);
                        }
                    }else{
                        // SI LA MAP EST PLUS PETITE QUE L'ECRAN
                        _okg.first_brick.y = _okg.first_brick.x+window.innerHeight/2 - (_okg.brick.getBounds().height/2);
                        _okg.first_brick.x = _okg.first_brick.x+window.innerWidth/2 - (_okg.brick.getBounds().width/2);
                        
                        _okg.last_brick.y = _okg.last_brick.x+window.innerHeight/2 - (_okg.brick.getBounds().height/2);
                        _okg.last_brick.x = _okg.last_brick.x+window.innerWidth/2 - (_okg.brick.getBounds().width/2);
                        //center maze x y
                        _okg.brick.y = window.innerHeight/2 - (_okg.brick.getBounds().height/2);
                        _okg.brick.x = window.innerWidth/2 - (_okg.brick.getBounds().width/2);
                        _okg.element.y = window.innerHeight/2 - (_okg.brick.getBounds().height/2);
                        _okg.element.x = window.innerWidth/2 - (_okg.brick.getBounds().width/2);
                        
                    }
                }
                TweenMax.to(_okg.element, .5, {alpha:1});
                TweenMax.to(_okg.brick, .5, {alpha:1});
                TweenMax.to(_okg.first_brick, .5, {alpha:1});
                TweenMax.to(_okg.last_brick, .5, {alpha:1});
            }, 500);
        }
    }
    _okg.element.setAll('body.collideWorldBounds', false);
    _okg.element.setAll('body.allowGravity', false);
    _okg.element.setAll('body.enable', true);
    _okg.element.setAll('body.immovable', true);
    
    _okg.brick.setAll('body.collideWorldBounds', false);
    _okg.brick.setAll('body.allowGravity', false);
    _okg.brick.setAll('body.enable', true);
    _okg.brick.setAll('body.immovable', true);
	//_okg.brick.setAll('body.bounce.x', 1);
	//_okg.brick.setAll('body.bounce.y', 1);
}
maze.prototype.create_interface = function(){
    $('#maze_canvas')
        .css({"width":window.innerWidth, "height":window.innerHeight})
        .attr({"width":window.innerWidth, "height":window.innerHeight});
    
    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'maze_canvas', { preload: this.preload, create: this.create, update: this.update, render: this.render });
    
    this._task_bar = new css_task_bar(
        {
            target:"task_bar",
            inputs:{
                chronos:{
                    icon:"pages/simplediscs/images/great.png",
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
maze.prototype.preload = function(){
    _okg.game.load.image('wall', 'pages/maze/images/assets/wall.png');
    _okg.game.load.image('end', 'pages/maze/images/assets/end.png');
    _okg.game.load.image('hero', 'pages/maze/images/assets/hero.png');
    _okg.game.load.image('circle', 'pages/run/maps_new/elements/run_decors_element_circle.png');
    _okg.game.load.image('square', 'pages/run/maps_new/elements/run_decors_element_square.png');
    _okg.game.load.image('triangle', 'pages/run/maps_new/elements/run_decors_element_triangle.png');
   
}
maze.prototype.create = function(){
    _okg.game.world.setBounds(0, 0, 2400, 2400);
    _okg.game.stage.backgroundColor = navigation._current_interface_color;
    _okg.game.physics.startSystem(Phaser.Physics.ARCADE);
    _okg.game.physics.arcade.gravity.y = 0;
    _okg.draw_level();
    _okg.cursors = _okg.game.input.keyboard.createCursorKeys();
    
    _okg._joy = new joystick('', function(e){
        _okg._direction = e;
    })
}
maze.prototype.update = function(){
    //this.physics.arcade.velocityFromRotation(this.stick.rotation, this.stick.force * maxSpeed, this.sprite.body.velocity);
    if(_okg.first_brick !== null && _okg.first_brick !== ""){
        _okg.game.physics.arcade.collide(_okg.first_brick, _okg.brick);
        if(_okg._direction){
            _okg.first_brick.body.velocity.x = _okg._direction.position.x * 2;
            _okg.first_brick.body.velocity.y = _okg._direction.position.y * 2;
        }
        if(!_okg._joy._is_down){
            _okg._joy._joystick.x = _okg.game.input.worldX; //_okg.game.input.mousePointer.x;
            _okg._joy._joystick.y = _okg.game.input.worldY; //_okg.game.input.mousePointer.y;
        }
        _okg.game.physics.arcade.collide(_okg.last_brick, _okg.first_brick, _okg.end_collision, null, this);
        _okg.game.physics.arcade.collide(_okg.element, _okg.first_brick, _okg.element_collision, null, this);

        /*    _okg.game.physics.arcade.collide(_okg.first_brick, _okg.brick);
        
        
        if (_okg.cursors.up.isDown)
        {
            _okg.first_brick.body.velocity.y = -200;
        }
        else if (_okg.cursors.down.isDown)
        {
            _okg.first_brick.body.velocity.y = 200;
        }

        if (_okg.cursors.left.isDown)
        {
            _okg.first_brick.body.velocity.x = -200;
        }
        else if (_okg.cursors.right.isDown)
        {
            _okg.first_brick.body.velocity.x = 200;
        }*/
    }
}
maze.prototype.element_collision = function(e, u){
    console.log(':::::::::::::::::::::::::::::  win ::::::::::::::::::::: ', u);
    //_okg.last_brick.kill();
    u.kill();
}
maze.prototype.end_collision = function(){
    console.log(':::::::::::::::::::::::::::::  win :::::::::::::::::::::');
    _okg.last_brick.kill();
}
maze.prototype.render = function(){
    
}
maze.prototype.destroy = function(callBack){
    $('#task_bar').remove();
    $('.okaoka_maze').html('');
    callBack();
}
maze.prototype.generateSquareMaze = function(dimension) {
    function iterate(field, x, y) {
        field[x][y] = false;
        while(true) {
            directions = [];
            if(x > 1 && field[x-2][y] == true) {
                directions.push([-1, 0]);
            }
            if(x < field.dimension - 2 && field[x+2][y] == true) {
                directions.push([1, 0]);
            }
            if(y > 1 && field[x][y-2] == true) {
                directions.push([0, -1]);
            }
            if(y < field.dimension - 2 && field[x][y+2] == true) {
                directions.push([0, 1]);
            }
            if(directions.length == 0) {
                return field;
            }
            dir = directions[Math.floor(Math.random()*directions.length)];
            field[x+dir[0]][y+dir[1]] = false;
            field = iterate(field, x+dir[0]*2, y+dir[1]*2);
        }
    }

    // Initialize the field.
    var field = new Array(dimension);
    field.dimension = dimension;
    for(var i = 0; i < dimension; i++) {
        field[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++) {
            field[i][j] = true;
        }
    }

    // Gnerate the maze recursively.
    field = iterate(field, 1, 1);
    
    return field;

}