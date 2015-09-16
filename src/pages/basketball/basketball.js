var self = null;
function basketball(){
    this.debug = true;
    this.player1 = {points:0, balls:[]};
    this.player2 = {points:0, balls:[]};
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
    self.game.physics.p2.restitution = 1;
    self.game.physics.p2.friction = 10;
    self.game.physics.p2.gravity.y = 1000;
    
    self.basket = {};
    self.basket.ground = self.game.add.sprite(0, 0, 'basket_ground');
    
    //self.basket_ground = self.game.add.sprite(0, 0, 'basket_ground');
    self.balls = self.game.add.group();
    self.create_ball(1);
    //self.player1.balls[balls.length] = self.balls.create(0, 0, 'ball');
    
    //self.create_basket(window.innerWidth/2-80, window.innerHeight/2);
    self.create_basket2();
    self.move_basket2(window.innerWidth/2, window.innerHeight/2);
    //self.game.physics.p2.enable([ self.ball ], self.debug);
    
    //self.hero.body.fixedRotation = true;
    /*self.game.input.onDown.add(self.touchstart, this);
    self.game.input.onHold.add(self.touchmove, this);
    self.game.input.onUp.add(self.touchend, this);*/
    
    //$('#phaser-basketball canvas').on('touchstart', self.touchstart);
    //$('#phaser-basketball canvas').on('touchmove', self.touchmove);
    //$('#phaser-basketball canvas').on('touchend', self.touchend);
    $('#phaser-basketball canvas').on('mousedown', self.touchstart);
    $('#phaser-basketball canvas').on('mousemove', self.touchmove);
    $('#phaser-basketball canvas').on('mouseup', self.touchend);
    //self.ball.body.collides(self.basket, self.basket_mailles[7], this);
    
    self.bitmap = self.game.add.bitmapData(this.game.width, this.game.height);
    self.bitmap.context.fillStyle = 'rgb(255, 255, 255)';
    self.bitmap.context.strokeStyle = 'rgb(255, 255, 255)';
    self.game.add.image(0, 0, self.bitmap);
}
basketball.prototype.move_basket2 = function(x, y){
    self.basket.attachment.body.x = x;
    self.basket.attachment.body.y = y;
}
basketball.prototype.move_basket = function(x, y){
    TweenMax.to(self.basket_ground.position, 1, {x:x,y:y}); 
    TweenMax.to(self.attachments[0].body, 1, {x:x+30,y:y+130}); 
    TweenMax.to(self.attachments[1].body, 1, {x:x+120,y:y+130}); 
    TweenMax.to(self.attachments[2].body, 1, {x:x+75,y:y+130});
    TweenMax.to(self.basket_arc, 1, {x:x+20,y:y+120});
}
basketball.prototype.create_basket2 = function(posx,posy){
    self.basket.attachment = self.game.add.sprite(100, 100, 'attachment');
    
    self.basket.attach1 = self.game.add.sprite(-50, 50, 'attachment');
    self.basket.attach2 = self.game.add.sprite(0, 50, 'attachment');
    self.basket.attach3 = self.game.add.sprite(50, 50, 'attachment');
    
    self.basket.maille1 = self.game.add.sprite(-50, 55, 'basket_maille');
    self.basket.maille2 = self.game.add.sprite(-50, 75, 'basket_maille');
    self.basket.maille3 = self.game.add.sprite(-50, 95, 'basket_maille');
    
    self.basket.maille4 = self.game.add.sprite(0, 55, 'basket_maille');
    self.basket.maille5 = self.game.add.sprite(0, 75, 'basket_maille_collider');
    self.basket.maille6 = self.game.add.sprite(0, 95, 'basket_maille');
    
    self.basket.maille7 = self.game.add.sprite(50, 55, 'basket_maille');
    self.basket.maille8 = self.game.add.sprite(50, 75, 'basket_maille');
    self.basket.maille9 = self.game.add.sprite(50, 95, 'basket_maille');
    
    self.basket.arc = self.game.add.sprite(0, 0, 'basket_arc');

    $.each(_.keys(self.basket), function(i, key){
        self.game.physics.p2.enable(self.basket[key], self.debug);
        self.basket[key].body.mass = 50;
    });
    self.basket.attachment.body.static = true;
    self.basket.attachment.body.clearCollision(true, true);
    self.basket.ground.body.clearCollision(true, true);
    self.basket.arc.body.clearCollision(true, true);
    self.basket.attach2.body.clearCollision(true, true);
    self.basket.maille4.body.clearCollision(true, true);
    self.basket.maille6.body.clearCollision(true, true);
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.ground, [0, 0], self.basket.attachment, [0, 0], 20000
    );
    self.game.physics.p2.createGearConstraint(self.basket.ground, self.basket.attachment, 0, 2);
    self.game.physics.p2.createGearConstraint(self.basket.ground, self.basket.arc, 0, 2);
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.arc, [0, 0], self.basket.ground, [0, 50], 20000
    );
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.attach1, [0, 0], self.basket.arc, [-50, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.attach2, [0, 0], self.basket.arc, [0, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.attach3, [0, 0], self.basket.arc, [50, 5], 20000
    );
    //self.basket.arc.body.setZeroRotation(20);
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.arc, [0, 0], self.basket.attachment, [0, 50], 20000
    );
    
    /* mailles */
    self.basket.maille1.body.mass = 50;
    self.basket.maille2.body.mass = 50;
    self.basket.maille3.body.mass = 50;
    self.basket.maille4.body.mass = 10;
    self.basket.maille5.body.mass = .1;
    self.basket.maille6.body.mass = 1;
    self.basket.maille7.body.mass = 50;
    self.basket.maille8.body.mass = 50;
    self.basket.maille9.body.mass = 50;
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille1, [0, -15], self.basket.attach1, [0, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille2, [0, -15], self.basket.maille1, [0, 15], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille3, [0, -15], self.basket.maille2, [0, 15], 20000
    );
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille4, [0, -15], self.basket.attach2, [0, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille5, [0, -15], self.basket.maille4, [0, 15], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille6, [0, -15], self.basket.maille5, [0, 15], 20000
    );
    
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille7, [0, -15], self.basket.attach3, [0, 5], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille8, [0, -15], self.basket.maille7, [0, 15], 20000
    );
    self.game.physics.p2.createRevoluteConstraint(
        self.basket.maille9, [0, -15], self.basket.maille8, [0, 15], 20000
    );
    
    /* distance mailles */
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille1, self.basket.maille4, 40
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille7, self.basket.maille4, 40
    );
    
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille2, self.basket.maille5, 25
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille8, self.basket.maille5, 30
    );
    
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille3, self.basket.maille6, 25
    );
    self.game.physics.p2.createDistanceConstraint(
        self.basket.maille9, self.basket.maille6, 30
    );
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
    self._is_down = true;
}
basketball.prototype.touchend = function(evt){
    self._is_down = false;
    console.log(evt.pageX);
    var current_ball = self.player1.balls[self.player1.balls.length-1];
    self.game.physics.p2.enable(current_ball, self.debug);
    
    current_ball.body.setCircle(26);
    current_ball.body.mass=50;
    current_ball.body.onBeginContact.add(self.collision, this);
    current_ball.body.collision_list = [];
    
    var a = evt.pageX - current_ball.position.x;
    var b = evt.pageY - current_ball.position.y;
    var c = Math.sqrt( a*a + b*b );
    
    console.log(a, ' :: ', ' :: ', b, ' :: ', c);
    
    current_ball.body.velocity.x = a*2;
    current_ball.body.velocity.y = b*2;
    
    //var point = new Phaser.Point(80, window.innerHeight-80);
    //console.log(velocityFromAngle(45, c, point));
    self.create_ball(1);
}
basketball.prototype.touchmove = function(evt){
    self.draw_trajectory(evt.pageX, evt.pageY);
}
basketball.prototype.draw_trajectory = function(posx, posy) {
    var ballpos = {x:80, y:window.innerHeight-80};
    var a = posx - ballpos.x;
    var b = posy - ballpos.y;
    var c = Math.sqrt( a*a + b*b );
    
    var angleRadian = Math.atan2(posx - ballpos.x, posy - ballpos.y);
    var angleDegree = angleRadian * (180 / Math.PI);
    distance= Math.sqrt(posx*ballpos.x + posy*ballpos.y);
    /* bullet_speed = la distance entre la touch et la position de la balle */
    self.BULLET_SPEED = -distance * 2;
    /* theta = angle entre la balle et la position du cursor */
    var theta = angleRadian;
    /* on applique la gravité définie lors du create game */
    self.GRAVITY = self.game.physics.p2.gravity.y;
    // Clear the bitmap
    self.bitmap.context.clearRect(0, 0, self.game.width, self.game.height);
    // Set fill style to white
    self.bitmap.context.fillStyle = 'rgba(255, 255, 255, 0.5)';
    // Calculate a time offset. This offset is used to alter the starting
    var MARCH_SPEED = 60;
    // time of the draw loop so that the dots are offset a little bit each
    self.timeOffset = self.timeOffset + 1 || 0;
    //self.timeOffset = self.timeOffset % MARCH_SPEED;

    // Just a variable to make the trajectory match the actual track a little better.
    // The mismatch is probably due to rounding or the physics engine making approximations.
    var correctionFactor = 0.99;

    // Draw the trajectory
    // http://en.wikipedia.org/wiki/Trajectory_of_a_projectile#Angle_required_to_hit_coordinate_.28x.2Cy.29
    var x = 0, y = 0;
    for(var t = 0 + self.timeOffset/(1000*MARCH_SPEED/60); t < 3; t += 0.03) {
        x = self.BULLET_SPEED * t * Math.cos(theta) * correctionFactor;
        y = self.BULLET_SPEED * t * Math.sin(theta) * correctionFactor - 0.5 * self.GRAVITY * t * t;
        self.bitmap.context.fillRect(x + ballpos.x, ballpos.y - y, 3, 3);
        if (y < -15) break;
    }

    self.bitmap.dirty = true;
};
basketball.prototype.create_ball = function(player){
    if(player === 1){
        self.player1.balls[self.player1.balls.length] = self.balls.create(80, window.innerHeight-80, 'ball');
    }
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