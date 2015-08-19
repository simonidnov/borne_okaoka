var self;
function palet(){
    this.score = {"player1":0, "player2":0};
    this.game = null;
    this.fixture = [];
    self = this;
}
palet.prototype.init = function(){
    $('#phaser-example').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
palet.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    
    self.game.load.image('goalwall', 'pages/palet/assets/pics/goalwall.png');
    self.game.load.image('goal1', 'pages/palet/assets/pics/goal_1.png');
    self.game.load.image('goal2', 'pages/palet/assets/pics/goal_2.png');
    self.game.load.image('player1', 'pages/palet/assets/pics/player1.png');
    self.game.load.image('player2', 'pages/palet/assets/pics/player2.png');
    self.game.load.image('ball', 'pages/palet/assets/pics/ball.png');

    self.game.load.physics('physicsData', 'pages/palet/assets/physics/sprites.json');
}
palet.prototype.create = function(){
    self.game.stage.backgroundColor = navigation._current_interface_color;

    self.game.physics.startSystem(Phaser.Physics.P2JS);
    self.game.physics.p2.restitution = 0.9;
    
    self.goal1 = self.game.add.sprite(0, (window.innerHeight/2), 'goal1');
    self.goal2 = self.game.add.sprite(window.innerWidth, (window.innerHeight/2), 'goal2');
    
    self.gwt1 = self.game.add.sprite(0, (window.innerHeight/2 - 150), 'goalwall');
    self.gwb1 = self.game.add.sprite(0, (window.innerHeight/2 + 150), 'goalwall');
    
    self.gwt2 = self.game.add.sprite(window.innerWidth, (window.innerHeight/2 - 150), 'goalwall');
    self.gwb2 = self.game.add.sprite(window.innerWidth, (window.innerHeight/2 + 150), 'goalwall');
    
    self.ball    = self.game.add.sprite(window.innerWidth/2, window.innerHeight/2, 'ball');
    self.player1 = self.game.add.sprite(80, window.innerHeight/2, 'player1');
    self.player2 = self.game.add.sprite(window.innerWidth - 80, window.innerHeight/2, 'player2');
    
    self.game.physics.p2.enable([ self.gwt1, self.gwb1, self.gwt2, self.gwb2, self.goal1, self.goal2, self.player1, self.player2, self.ball ], false);
    
    //self.goal1.body.setCircle(50);
    //self.goal2.body.setCircle(50);
    self.gwt1.body.kinematic = true;
    self.gwb1.body.kinematic = true;
    self.gwt2.body.kinematic = true;
    self.gwb2.body.kinematic = true;
    self.goal1.body.kinematic = true;
    self.goal2.body.kinematic = true;
    
    self.player1.body.setCircle(50);
    self.player2.body.setCircle(50);
    self.ball.body.setCircle(50);
    
    self.player1.inputEnabled = true;
    self.player1.input.enableDrag(true);
    
    self.player2.inputEnabled = true;
    self.player2.input.enableDrag(true);
    
    self.mouseBody = new p2.Body();
    self.game.physics.p2.world.addBody(self.mouseBody);
    
    self.pointer1Body = new p2.Body();
    self.game.physics.p2.world.addBody(self.pointer1Body);
    
    self.pointer2Body = new p2.Body();
    self.game.physics.p2.world.addBody(self.pointer2Body);
    
    self.cursors = self.game.input.keyboard.createCursorKeys();
    
    self.ball.body.onBeginContact.add(self.blockHit, this);
    if ("ontouchstart" in window) {
        self.game.input.addPointer();
        self.game.input.addPointer();
        self.game.input.addPointer();
        self.game.input.addPointer();    
    }else{
        self.game.input.onDown.add(self.click, this);
        self.game.input.onUp.add(self.release, this);
        self.game.input.addMoveCallback(self.move, this);
    }
    //self.game.input.touch.touchStartCallback = this.onTouchDown;
    //self.game.input.touch.onTouchStart(self.click, this);
    //self.game.input.touch.onTouchEnd(self.release, this);
    //self.game.input.touch.onTouchMove(self.release, this);
}
palet.prototype.click = function(pointer) {
    var bodies = self.game.physics.p2.hitTest(pointer.position, [ self.player1.body, self.player2.body ]);
    
    // p2 uses different coordinate system, so convert the pointer position to p2's coordinate system
    var physicsPos = [self.game.physics.p2.pxmi(pointer.position.x), self.game.physics.p2.pxmi(pointer.position.y)];
    
    if (bodies.length)
    {
        var clickedBody = bodies[0];
        
        var localPointInBody = [0, 0];
        // this function takes physicsPos and coverts it to the body's local coordinate system
        clickedBody.toLocalFrame(localPointInBody, physicsPos);
        
        // use a revoluteContraint to attach mouseBody to the clicked body
        self.mouseConstraint = this.game.physics.p2.createRevoluteConstraint(self.mouseBody, [0, 0], clickedBody, [self.game.physics.p2.mpxi(localPointInBody[0]), self.game.physics.p2.mpxi(localPointInBody[1]) ]);
    }   

}

palet.prototype.release = function() {
    self.game.physics.p2.removeConstraint(self.mouseConstraint);
}

palet.prototype.move = function(pointer) {
    self.mouseBody.position[0] = self.game.physics.p2.pxmi(pointer.position.x);
    self.mouseBody.position[1] = self.game.physics.p2.pxmi(pointer.position.y);
}
palet.prototype.update = function(){
    self.player1.body.setZeroVelocity();
    self.player2.body.setZeroVelocity();
    if (self.cursors.left.isDown)
    {
        self.player1.body.moveLeft(200);
    }
    else if (self.cursors.right.isDown)
    {
        self.player1.body.moveRight(200);
    }

    if (self.cursors.up.isDown)
    {
        self.player1.body.moveUp(200);
    }
    else if (self.cursors.down.isDown)
    {
        self.player1.body.moveDown(200);
    }
    
    if(self.game.input.pointer1.isDown){
        var p1b1 = self.game.physics.p2.hitTest(
            self.game.input.pointer1.position, 
            [ self.player1.body ]
        );
        var p1b2 = self.game.physics.p2.hitTest(
            self.game.input.pointer1.position, 
            [ self.player2.body ]
        );
        if (p1b1.length)
        {
            if(typeof _.findWhere(self.fixture, {pointer:"pointer1"}) !== "undefined"){
                if(_.findWhere(self.fixture, {pointer:"pointer1"}).player !== "player1"){
                    self.fixture = _.without(self.fixture, _.findWhere(self.fixture, {pointer:"pointer1"}));
                    self.fixture.push({"pointer":"pointer1", "player":"player1"});
                }
            }else{
                self.fixture.push({"pointer":"pointer1", "player":"player1"});
            }
            //self.player1.body.x = self.game.input.pointer1.position.x;
            //self.player1.body.y = self.game.input.pointer1.position.y;
        }
        if (p1b2.length)
        {
            if(typeof _.findWhere(self.fixture, {pointer:"pointer1"}) !== "undefined"){
                if(_.findWhere(self.fixture, {pointer:"pointer1"}).player !== "player2"){
                    self.fixture = _.without(self.fixture, _.findWhere(self.fixture, {pointer:"pointer1"}));
                    self.fixture.push({"pointer":"pointer1", "player":"player2"});
                }
            }else{
                self.fixture.push({"pointer":"pointer1", "player":"player2"});
            }
            //self.player2.body.x = self.game.input.pointer1.position.x;
            //self.player2.body.y = self.game.input.pointer1.position.y;
        }
    }else{
        self.fixture = _.without(self.fixture, _.findWhere(self.fixture, {pointer:"pointer1"}));
    }
    
    if(self.game.input.pointer2.isDown){
        var p2b1 = self.game.physics.p2.hitTest(
            self.game.input.pointer2.position, 
            [ self.player1.body ]
        );
        var p2b2 = self.game.physics.p2.hitTest(
            self.game.input.pointer2.position, 
            [ self.player2.body ]
        );
        if (p2b1.length)
        {
            if(typeof _.findWhere(self.fixture, {pointer:"pointer2"}) !== "undefined"){
                if(_.findWhere(self.fixture, {pointer:"pointer2"}).player !== "player1"){
                    self.fixture = _.without(self.fixture, _.findWhere(self.fixture, {pointer:"pointer2"}));
                    self.fixture.push({"pointer":"pointer2", "player":"player1"});
                }
            }else{
                self.fixture.push({"pointer":"pointer2", "player":"player1"});
            }
            //self.player1.body.x = self.game.input.pointer2.position.x;
            //self.player1.body.y = self.game.input.pointer2.position.y;
        }
        if (p2b2.length)
        {
            if(typeof _.findWhere(self.fixture, {pointer:"pointer2"}) !== "undefined"){
                if(_.findWhere(self.fixture, {pointer:"pointer2"}).player !== "player2"){
                    self.fixture = _.without(self.fixture, _.findWhere(self.fixture, {pointer:"pointer2"}));
                    self.fixture.push({"pointer":"pointer2", "player":"player2"});
                }
            }else{
                self.fixture.push({"pointer":"pointer2", "player":"player2"});
            }
            //self.player2.body.x = self.game.input.pointer2.position.x;
            //self.player2.body.y = self.game.input.pointer2.position.y;
        }
    }else{
        self.fixture = _.without(self.fixture, _.findWhere(self.fixture, {pointer:"pointer2"}));   
    }
    $.each(self.fixture, function(index, fix){
        self[self.fixture[index].player].body.x = self.game.input[self.fixture[index].pointer].x;
        self[self.fixture[index].player].body.y = self.game.input[self.fixture[index].pointer].y;
    });
}
palet.prototype.render = function(){
    /*self.game.debug.pointer(self.game.input.mousePointer);
    self.game.debug.pointer(self.game.input.pointer1);
    self.game.debug.pointer(self.game.input.pointer2);
    self.game.debug.pointer(self.game.input.pointer3);
    self.game.debug.pointer(self.game.input.pointer4);
    self.game.debug.pointer(self.game.input.pointer5);
    self.game.debug.pointer(self.game.input.pointer6);*/
    /* UNCOMMENT TO LOAG FPS GAME */
    //console.log(self.game.time.fps);
}
palet.prototype.blockHit = function(body, bodyB, shapeA, shapeB, equation) {
    if(body){
        var goal = false;
        if(body.sprite.key === "goal1"){
            self.score.player2 = self.score.player2+1;
            goal = true;
        }
        if(body.sprite.key === "goal2"){
            self.score.player1 = self.score.player1+1;
            goal = true;
        }
        if(goal){
            self.fixture = [];
            self.game.add.tween(self.player1.body).to(
                {y: window.innerHeight/2, x: 100}, 
                500,
                Phaser.Easing.Linear.None).start();
            
            self.game.add.tween(self.player2.body).to(
                {y: window.innerHeight/2, x: window.innerWidth - 100}, 
                500,
                Phaser.Easing.Linear.None).start();
            
            //self.game.add.tween(self.ball.body).to(
            //    {y: window.innerHeight/2, x: window.innerWidth/2}, 
            //    500,
            //    Phaser.Easing.Linear.None).start();
            self.player1.body.setZeroVelocity();
            self.player2.body.setZeroVelocity();
            self.ball.body.setZeroVelocity();
            self.ball.body.setZeroForce();
            self.ball.body.x = window.innerWidth/2;
            self.ball.body.y = window.innerHeight/2;
        }
    }
}
palet.prototype.create_interface = function(){
    this.init();
}
palet.prototype.pause = function(){
}
palet.prototype.play = function(){
}
palet.prototype.destroy = function(callBack){
    if(self.game){
        self.game.destroy();
    }
    self = null;
    callBack();
}