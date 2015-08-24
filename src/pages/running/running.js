var self = null;
function running(){
    this._current_level = 1;
    this._current_ceiling_level = 1;
    this._total_levels = 9;
    this.levels = [];
    this.levels_enemy = [];
    this.levels_ceiling = [];
    this.levels_ceiling_enemy = [];
    this.jumping = 0;
    this.downPos = {x:0, y:0};
    this.gameInfo = {start_date:0, distance:0};
    this.lifes = {count:5, date:0};
    self = this;
}
running.prototype.init = function(){
    $('#phaser-runner').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-runner', { preload: self.preload, create: self.create, update: self.update, render: self.render });
    
    for(var i=0; i<self.lifes.count; i++){
        $('.hearts').prepend('<div class="heart" id="heart_'+(i+1)+'"></div>');
        $('#heart_'+(i+1)).load('pages/running/assets/utils/heart.svg');
    }
}
running.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.image('hero', 'pages/running/assets/hero.png');
    self.game.load.spritesheet('runner', 'pages/running/assets/motions/runner_sprite.png', 100, 100);
    
    self.game.load.image('groundenemylevel1', 'pages/running/assets/ground_enemy/decors_all_level1.png');
    self.game.load.image('groundenemylevel2', 'pages/running/assets/ground_enemy/decors_all_level2.png');
    self.game.load.image('groundenemylevel3', 'pages/running/assets/ground_enemy/decors_all_level3.png');
    self.game.load.image('groundenemylevel4', 'pages/running/assets/ground_enemy/decors_all_level4.png');
    self.game.load.image('groundenemylevel5', 'pages/running/assets/ground_enemy/decors_all_level5.png');
    self.game.load.image('groundenemylevel6', 'pages/running/assets/ground_enemy/decors_all_level6.png');
    self.game.load.image('groundenemylevel7', 'pages/running/assets/ground_enemy/decors_all_level7.png');
    self.game.load.image('groundenemylevel8', 'pages/running/assets/ground_enemy/decors_all_level8.png');
    self.game.load.image('groundenemylevel9', 'pages/running/assets/ground_enemy/decors_all_level9.png');
    self.game.load.physics('groundenemylevelDatas', 'pages/running/assets/ground_enemy/runner_ground_enemy_level.json');
    
    self.game.load.image('groundlevel1', 'pages/running/assets/ground/decors_all_level1.png');
    self.game.load.image('groundlevel2', 'pages/running/assets/ground/decors_all_level2.png');
    self.game.load.image('groundlevel3', 'pages/running/assets/ground/decors_all_level3.png');
    self.game.load.image('groundlevel4', 'pages/running/assets/ground/decors_all_level4.png');
    self.game.load.image('groundlevel5', 'pages/running/assets/ground/decors_all_level5.png');
    self.game.load.image('groundlevel6', 'pages/running/assets/ground/decors_all_level6.png');
    self.game.load.image('groundlevel7', 'pages/running/assets/ground/decors_all_level7.png');
    self.game.load.image('groundlevel8', 'pages/running/assets/ground/decors_all_level8.png');
    self.game.load.image('groundlevel9', 'pages/running/assets/ground/decors_all_level9.png');
    self.game.load.physics('groundlevelDatas', 'pages/running/assets/ground/runner_ground_level.json');
    
    self.game.load.image('ceilingenemylevel1', 'pages/running/assets/ceiling_enemy/decors_all_level1.png');
    self.game.load.image('ceilingenemylevel2', 'pages/running/assets/ceiling_enemy/decors_all_level2.png');
    self.game.load.image('ceilingenemylevel3', 'pages/running/assets/ceiling_enemy/decors_all_level3.png');
    self.game.load.image('ceilingenemylevel4', 'pages/running/assets/ceiling_enemy/decors_all_level4.png');
    self.game.load.image('ceilingenemylevel5', 'pages/running/assets/ceiling_enemy/decors_all_level5.png');
    self.game.load.image('ceilingenemylevel6', 'pages/running/assets/ceiling_enemy/decors_all_level6.png');
    self.game.load.image('ceilingenemylevel7', 'pages/running/assets/ceiling_enemy/decors_all_level7.png');
    self.game.load.image('ceilingenemylevel8', 'pages/running/assets/ceiling_enemy/decors_all_level8.png');
    self.game.load.image('ceilingenemylevel9', 'pages/running/assets/ceiling_enemy/decors_all_level9.png');
    self.game.load.physics('ceilingenemylevelDatas', 'pages/running/assets/ceiling_enemy/runner_ceiling_enemy_level.json');
    
    self.game.load.image('ceilinglevel1', 'pages/running/assets/ceiling/decors_all_level1.png');
    self.game.load.image('ceilinglevel2', 'pages/running/assets/ceiling/decors_all_level2.png');
    self.game.load.image('ceilinglevel3', 'pages/running/assets/ceiling/decors_all_level3.png');
    self.game.load.image('ceilinglevel4', 'pages/running/assets/ceiling/decors_all_level4.png');
    self.game.load.image('ceilinglevel5', 'pages/running/assets/ceiling/decors_all_level5.png');
    self.game.load.image('ceilinglevel6', 'pages/running/assets/ceiling/decors_all_level6.png');
    self.game.load.image('ceilinglevel7', 'pages/running/assets/ceiling/decors_all_level7.png');
    self.game.load.image('ceilinglevel8', 'pages/running/assets/ceiling/decors_all_level8.png');
    self.game.load.image('ceilinglevel9', 'pages/running/assets/ceiling/decors_all_level9.png');
    self.game.load.physics('ceilinglevelDatas', 'pages/running/assets/ceiling/runner_ceiling_level.json');
}
running.prototype.create = function(){
    self.game.world.setBounds(-1000, -1000, 2000, 2000);
    
    self.game.stage.backgroundColor = colors.pink;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 0;
    self.game.physics.p2.gravity.y = 1000;
    
    self.hero = self.game.add.sprite(100, 200, 'hero');
    
    self.decors = self.game.add.group();
    
    /*self.hero = self.game.add.sprite(100, 200, 'runner');
    self.hero.scale.set(1);
    self.hero.smoothed = true;
    self.hero.animations.add('run', [0,1,2,3,4,5], 10, true);
    self.hero.play('run');*/
    
    self.game.physics.p2.enable([ self.hero ], false);
    
    //self.hero.body.fixedRotation = true;
    //self.hero.body.setCircle(45);
    
    self.create_ground_level();
    self.create_ceiling_level();
    
    self.hero.body.onBeginContact.add(self.collision, this);
    
    self.game.input.onDown.add(self.jump, this);
    self.game.input.onUp.add(self.upsidedown, this);
    
    self.gameInfo.start_date = new Date().getTime();
}
running.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body){
        if(body.sprite.key.indexOf('enemy') != -1 && (new Date().getTime() - self.lifes.date) > 2500){
            console.log(body, bodyB, shapeA, shapeB, equation);
            $('#heart_'+self.lifes.count+' path').attr('fill', '#FFFFFF');
            self.lifes.count--;
            self.lifes.date = new Date().getTime();
            if(self.lifes.count <= 0){
                console.log('you hit enemy, so you lose !');
            }
            self.game.paused = true;
            setTimeout(function(){
                console.log('outch !');
                self.game.paused = false;
            }, 2000);
        }
        if(body.sprite.key.indexOf('ceilinglevel') != -1){
            self.jumping = 0;
        }
        if(body.sprite.key.indexOf('groundlevel') != -1){
            self.jumping = 0;    
        }
    }
}
running.prototype.create_ground_level = function(){
    var prevPosX = 0;
    if(self.levels.length > 0){
        var prevPosX = self.levels[self.levels.length-1].body.x + (self.levels[self.levels.length-1].body.sprite.width/2) - 20;
    }
    var original_posX = 2000;
    self.levels[self.levels.length] = self.game.add.sprite(
        prevPosX+2000, 
        window.innerHeight - 200, 
        'groundlevel'+self._current_level
    );
    self.game.physics.p2.enable([ self.levels[self.levels.length-1] ], false);
    self.levels[self.levels.length-1].body.clearShapes();
	self.levels[self.levels.length-1].body.loadPolygon('groundlevelDatas', 'decors_all_level'+self._current_level);
    self.levels[self.levels.length-1].body.kinematic = true;
    self.decors.add(self.levels[self.levels.length-1]);
    
    self.levels_enemy[self.levels_enemy.length] = self.game.add.sprite(
        prevPosX+2000, 
        window.innerHeight - 200, 
        'groundenemylevel'+self._current_level
    );
    self.game.physics.p2.enable([ self.levels_enemy[self.levels_enemy.length-1] ], false);
    self.levels_enemy[self.levels_enemy.length-1].body.clearShapes();
	self.levels_enemy[self.levels_enemy.length-1].body.loadPolygon('groundenemylevelDatas', 'decors_all_level'+self._current_level);
    self.levels_enemy[self.levels_enemy.length-1].body.kinematic = true;
    
    self.decors.add(self.levels_enemy[self.levels_enemy.length-1]);
    self._current_level++;
    if(self._current_level > self._total_levels){
        self._current_level = 1;
    }
}
running.prototype.create_ceiling_level = function(){
    var prevPosX = 0;
    if(self.levels_ceiling.length > 0){
        var prevPosX = self.levels_ceiling[self.levels_ceiling.length-1].body.x + (self.levels_ceiling[self.levels_ceiling.length-1].body.sprite.width/2) - 20;
    }
    var original_posX = 2000;
    self.levels_ceiling[self.levels_ceiling.length] = self.game.add.sprite(
        prevPosX+2000, 
        250, 
        'ceilinglevel'+self._current_ceiling_level
    );
    self.game.physics.p2.enable([ self.levels_ceiling[self.levels_ceiling.length-1] ], false);
    self.levels_ceiling[self.levels_ceiling.length-1].body.clearShapes();
	self.levels_ceiling[self.levels_ceiling.length-1].body.loadPolygon('ceilinglevelDatas', 'decors_all_level'+self._current_ceiling_level);
    self.levels_ceiling[self.levels_ceiling.length-1].body.kinematic = true;
    self.decors.add(self.levels_ceiling[self.levels_ceiling.length-1]);
    
    self.levels_ceiling_enemy[self.levels_ceiling_enemy.length] = self.game.add.sprite(
        prevPosX+2000, 
        250, 
        'ceilingenemylevel'+self._current_ceiling_level
    );
    self.game.physics.p2.enable([ self.levels_ceiling_enemy[self.levels_ceiling_enemy.length-1] ], false);
    self.levels_ceiling_enemy[self.levels_ceiling_enemy.length-1].body.clearShapes();
	self.levels_ceiling_enemy[self.levels_ceiling_enemy.length-1].body.loadPolygon('ceilingenemylevelDatas', 'decors_all_level'+self._current_ceiling_level);
    self.levels_ceiling_enemy[self.levels_ceiling_enemy.length-1].body.kinematic = true;
    self.decors.add(self.levels_ceiling_enemy[self.levels_ceiling_enemy.length-1]);
    
    self._current_ceiling_level++;
    if(self._current_ceiling_level > self._total_levels){
        self._current_ceiling_level = 1;
    }
}
running.prototype.jump = function(evt){
    if(self.lifes.count <= 0){
        return false;
    }
    self.downPos = {x:evt.pageX, y:evt.pageY};
    if(self.jumping < 2){
        if(self.game.physics.p2.gravity.y > 0){
            self.hero.body.velocity.y = -500;
        }else{
            self.hero.body.velocity.y = 500;
        }
    }
    self.jumping++;
}
running.prototype.upsidedown = function(evt){
    var dist = self.downPos.y - evt.pageY;
    if(dist > 100){
        self.game.physics.p2.gravity.y = -1000;
    }else if(dist < -100){
        self.game.physics.p2.gravity.y = 1000;
    }
}
running.prototype.render = function(){
    var vitesse = 800;
    if(self.lifes.count <= 0){
        vitesse = 0;
    }else{
        if(!self.game.paused){
            self.gameInfo.last_date = new Date().getTime();
            self.gameInfo.distance = (self.gameInfo.last_date - self.gameInfo.start_date) / 100;
            $('.distance').html(Math.round(self.gameInfo.distance)+"m");
        }
        self.hero.body.x = 200;
    }
    for(var i=0; i<self.levels.length; i++){
        self.levels[i].body.moveLeft(vitesse);
        var sw = self.levels[i].body.sprite.width;
        if(self.levels[i].body.x <= -(sw)){
            self.levels[i].kill();
        }
        
        self.levels_enemy[i].body.moveLeft(vitesse);
        var sw = self.levels_enemy[i].body.sprite.width;
        if(self.levels_enemy[i].body.x <= -(sw)){
            self.levels_enemy[i].kill();
        }
    }
    if(self.levels[self.levels.length-1].body.x <= ((-self.levels[self.levels.length-1].body.sprite.width/2)+window.innerWidth)){
        self.create_ground_level();
    }
    
    for(var i=0; i<self.levels_ceiling.length; i++){
        self.levels_ceiling[i].body.moveLeft(vitesse);
        var sw = self.levels_ceiling[i].body.sprite.width;
        if(self.levels_ceiling[i].body.x <= -(sw)){
            self.levels_ceiling[i].kill();
        }
        
        self.levels_ceiling_enemy[i].body.moveLeft(vitesse);
        var sw = self.levels_ceiling_enemy[i].body.sprite.width;
        if(self.levels_ceiling_enemy[i].body.x <= -(sw)){
            self.levels_ceiling_enemy[i].kill();
        }
    }
    if(self.levels_ceiling[self.levels_ceiling.length-1].body.x <= ((-self.levels_ceiling[self.levels_ceiling.length-1].body.sprite.width/2)+window.innerWidth)){
        self.create_ceiling_level();
    }
}
running.prototype.update = function(){
    
}
running.prototype.create_interface = function(){
    this.init();
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
}
running.prototype.pause = function(){
    self.game.paused = true;
}
running.prototype.play = function(){
    self.game.paused = false;
}
running.prototype.destroy = function(callBack){
    delete this._current_level;
    delete this._current_ceiling_level;
    delete this._total_levels;
    delete this.levels;
    delete this.levels_enemy;
    delete this.levels_ceiling;
    delete this.levels_ceiling_enemy;
    delete this.jumping;
    delete this.downPos;
    delete this.gameInfo;
    delete this.lifes;
    self.game.destroy();
    callBack();
}