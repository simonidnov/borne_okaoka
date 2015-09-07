var self = null;
function basketball(){
    this.debug = false;
    self = this;
}
basketball.prototype.init = function(){
    $('#phaser-basketball').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-basketball', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
basketball.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.image('basket_maille', 'pages/basketball/images/basket_maille.png');
    self.game.load.image('basket_maille_collider', 'pages/basketball/images/basket_maille.png');
    self.game.load.image('basket_v_maille_1', 'pages/basketball/images/basket_v_maille_1.png');
    self.game.load.image('ball', 'pages/basketball/images/ball.png');
    self.game.load.image('basket_ground', 'pages/basketball/images/backet_ground.png');
    self.game.load.image('basket_arc', 'pages/basketball/images/basket_arc.png');
    self.game.load.image('attachment', 'pages/basketball/images/atachment.png');
}
basketball.prototype.create = function(){
    self.game.stage.backgroundColor = colors.pink;
    
    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 0;
    self.game.physics.p2.gravity.y = 1000;
    
    self.basket_ground = self.game.add.sprite(0, 0, 'basket_ground');
    self.ball = self.game.add.sprite(0, 0, 'ball');
    
    self.create_basket(window.innerWidth/2-80, window.innerHeight/2);
    
    self.game.physics.p2.enable([ self.ball ], self.debug);
    
    //self.hero.body.fixedRotation = true;
    self.ball.body.setCircle(26);
    self.ball.body.mass=100;
    self.ball.body.onBeginContact.add(self.collision, this);
    self.game.input.onDown.add(self.touchstart, this);
    self.game.input.onUp.add(self.touchend, this);
    //self.ball.body.collides(self.basket, self.basket_mailles[7], this);

}
basketball.prototype.move_basket = function(x, y){
    TweenMax.to(self.basket_ground.position, 1, {x:x,y:y}); 
    TweenMax.to(self.attachments[0].body, 1, {x:x+30,y:y+130}); 
    TweenMax.to(self.attachments[1].body, 1, {x:x+120,y:y+130}); 
    TweenMax.to(self.attachments[2].body, 1, {x:x+75,y:y+130});
    TweenMax.to(self.basket_arc, 1, {x:x+20,y:y+120});
}

basketball.prototype.create_basket = function(posx,posy){
    self.basket = self.game.add.group();
    self.basket_ground.position.x = posx; 
    self.basket_ground.position.y = posy; 
    self.basket_mailles = [];
    
    self.attachments = [];
    
    
    var x = posx+30;
    var y = posy+130;
    
    self.attachments[0] = self.basket.create(x, y-10, 'attachment');
    
    self.basket_mailles[0] = self.basket.create(x, y, 'basket_maille');
    self.basket_mailles[1] = self.basket.create(x, y+20, 'basket_maille');
    self.basket_mailles[2] = self.basket.create(x, y+20, 'basket_maille');
    
    var x = posx+120;
    self.attachments[1] = self.basket.create(x, y-10, 'attachment');
    self.basket_mailles[3] = self.basket.create(x, y, 'basket_maille');
    self.basket_mailles[4] = self.basket.create(x, y+20, 'basket_maille');
    self.basket_mailles[5] = self.basket.create(x, y+20, 'basket_maille');
    
    var x = posx+75;
    self.attachments[2] = self.basket.create(x, y-10, 'attachment');
    self.basket_mailles[6] = self.basket.create(x, y, 'basket_maille');
    self.basket_mailles[7] = self.basket.create(x, y+20, 'basket_maille_collider');
    self.basket_mailles[8] = self.basket.create(x, y+20, 'basket_maille');
    
    for(var i=0; i<3; i++){
        self.game.physics.p2.enable(self.attachments[i], self.debug);
        self.attachments[i].body.mass = 50;
    }
    self.attachments[2].body.clearCollision(true, true);
    
    for(var i=0; i<9; i++){
        self.game.physics.p2.enable(self.basket_mailles[i], self.debug);
        self.basket_mailles[i].body.mass = 1;
        if(i===7){
            //self.basket_mailles[7].body.mass = 1;
        }
    }
    self.basket_mailles[6].body.clearCollision(true, true);
    //self.basket_mailles[7].body.clearCollision(true, false);
    self.basket_mailles[8].body.clearCollision(true, true);
    
    self.attachments[0].body.static = true;
    self.attachments[1].body.static = true;
    self.attachments[2].body.static = true;
    self.basket_mailles[7].body.clearCollision(false, false);
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket_mailles[0], [0, -10], self.attachments[0], [0, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket_mailles[3], [0, -10], self.attachments[1], [0, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket_mailles[6], [0, -10], self.attachments[2], [0, 5], 20000
    );
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket_mailles[1], [0, -10], self.basket_mailles[0], [0, 15], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket_mailles[2], [0, -10], self.basket_mailles[1], [0, 15], 20000
    );
    /* right contraint */
    self.game.physics.p2.createRevoluteConstraint(
        self.basket_mailles[4], [0, -10], self.basket_mailles[3], [0, 15], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket_mailles[5], [0, -10], self.basket_mailles[4], [0, 15], 20000
    );
    /* center contraint */
    self.game.physics.p2.createRevoluteConstraint(
        self.basket_mailles[7], [0, -10], self.basket_mailles[6], [0, 15], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket_mailles[8], [0, -10], self.basket_mailles[7], [0, 15], 20000
    );
    
    /* line 1 contraint */
    self.game.physics.p2.createDistanceConstraint(
        self.basket_mailles[0], self.basket_mailles[6], 40
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket_mailles[1], self.basket_mailles[7], 31
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket_mailles[3], self.basket_mailles[6], 40
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket_mailles[4], self.basket_mailles[7], 31
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket_mailles[3], self.basket_mailles[6], 40
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket_mailles[4], self.basket_mailles[7], 31
    );
    
    self.game.physics.p2.createDistanceConstraint(
        self.basket_mailles[2], self.basket_mailles[8], 31
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket_mailles[5], self.basket_mailles[8], 31
    );
    
    self.basket_arc = self.game.add.sprite(20, 110, 'basket_arc');
    self.basket_arc.position.x = posx+20; 
    self.basket_arc.position.y = posy+110; 
}
basketball.prototype.touchstart = function(evt){
    console.log(evt.pageX);
    var a = evt.pageX - self.ball.position.x;
    var b = evt.pageY - self.ball.position.y;
    var c = Math.sqrt( a*a + b*b );
    console.log(a, ' :: ', ' :: ', b, ' :: ', c);
    self.ball.body.velocity.x = a*2;
    self.ball.body.velocity.y = b*2;
}
basketball.prototype.touchend = function(evt){
    console.log(evt.pageX);
}
basketball.prototype.collision = function(body, bodyB, shapeA, shapeB, equation){
    if(body){
        console.log(body.sprite.key);
        if(body.sprite.key === "basket_maille_collider"){
            //console.log('win :: ', self.ball.body.destroy());
        }
    }
}
basketball.prototype.render = function(){
    
}
basketball.prototype.update = function(){
    
}
basketball.prototype.create_interface = function(){
    console.log('interface');
    this.init();
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
}
basketball.prototype.destroy = function(callBack){
    callBack();
}