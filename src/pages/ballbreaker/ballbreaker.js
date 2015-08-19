var self = null;
function ballbreaker(){
    this.ball;
    this.paddle;
    this.bricks;
    this.ballOnPaddle = true;
    this.lives = 3;
    this.score = 0;
    this.scoreText;
    this.livesText;
    this.introText;
    this.s;
    self = this;
}
ballbreaker.prototype.init = function(){
    $('#phaser-ballbreaker').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-ballbreaker', { preload: self.preload, create: self.create, update: self.update, render: self.render });
}
ballbreaker.prototype.preload = function(){
    self.game.time.advancedTiming = true;
    self.game.load.atlas(
        'breakout', 
        'pages/ballbreaker/assets/breakout.png', 
        'pages/ballbreaker/assets/breakout.json'
    );
    self.game.load.image('brick', 'pages/ballbreaker/assets/brick.png');
}
ballbreaker.prototype.create = function(){
    self.game.physics.startSystem(Phaser.Physics.ARCADE);

    //  We check bounds collisions against all walls other than the bottom one
    self.game.physics.arcade.checkCollision.down = false;

    //self.s = self.game.add.tileSprite(0, 0, 800, 600, 'starfield');

    self.bricks = self.game.add.group();
    self.bricks.enableBody = true;
    self.bricks.physicsBodyType = Phaser.Physics.ARCADE;

    var brick;

    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < 15; x++)
        {
            brick = self.bricks.create(120 + (x * 36), 100 + (y * 52), 'brick');
            //brick = self.bricks.create(120 + (x * 36), 100 + (y * 52), 'breakout', 'brick_' + (y+1) + '_1.png');
            brick.body.bounce.set(1);
            brick.body.immovable = true;
        }
    }

    self.paddle = self.game.add.sprite(self.game.world.centerX, 500, 'breakout', 'paddle_big.png');
    self.paddle.anchor.setTo(0.5, 0.5);

    self.game.physics.enable(self.paddle, Phaser.Physics.ARCADE);

    self.paddle.body.collideWorldBounds = true;
    self.paddle.body.bounce.set(1);
    self.paddle.body.immovable = true;

    self.ball = self.game.add.sprite(self.game.world.centerX, self.paddle.y - 16, 'breakout', 'ball_1.png');
    self.ball.anchor.set(0.5);
    self.ball.checkWorldBounds = true;

    self.game.physics.enable(self.ball, Phaser.Physics.ARCADE);

    self.ball.body.collideWorldBounds = true;
    self.ball.body.bounce.set(1);

    //self.ball.animations.add('spin', [ 'pages/ballbreaker/assets/ball_1.png', 'pages/ballbreaker/assets/ball_2.png', 'pages/ballbreaker/assets/ball_3.png', 'pages/ballbreaker/assets/ball_4.png', 'pages/ballbreaker/assets/ball_5.png' ], 50, true, false);

    self.ball.events.onOutOfBounds.add(self.ballLost, this);

    self.scoreText = self.game.add.text(32, 550, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });
    self.livesText = self.game.add.text(680, 550, 'lives: 3', { font: "20px Arial", fill: "#ffffff", align: "left" });
    self.introText = self.game.add.text(self.game.world.centerX, 400, '- click to start -', { font: "40px Arial", fill: "#ffffff", align: "center" });
    self.introText.anchor.setTo(0.5, 0.5);

    self.game.input.onDown.add(self.releaseBall, this);
}
ballbreaker.prototype.render = function(){
    
}
ballbreaker.prototype.update = function(){
    //  Fun, but a little sea-sick inducing :) Uncomment if you like!
    // s.tilePosition.x += (game.input.speed.x / 2);

    self.paddle.x = self.game.input.x;

    if (self.paddle.x < 24)
    {
        self.paddle.x = 24;
    }
    else if (self.paddle.x > self.game.width - 24)
    {
        self.paddle.x = self.game.width - 24;
    }

    if (self.ballOnPaddle)
    {
        self.ball.body.x = self.paddle.x;
    }
    else
    {
        self.game.physics.arcade.collide(self.ball, self.paddle, self.ballHitPaddle, null, this);
        self.game.physics.arcade.collide(self.ball, self.bricks, self.ballHitBrick, null, this);
    }
}
ballbreaker.prototype.releaseBall = function() {
    if (self.ballOnPaddle)
    {
        self.ballOnPaddle = false;
        self.ball.body.velocity.y = -300;
        self.ball.body.velocity.x = -75;
        self.ball.animations.play('spin');
        self.introText.visible = false;
    }
}
ballbreaker.prototype.ballLost = function() {

    self.lives--;
    self.livesText.text = 'vies: ' + self.lives;

    if (self.lives === 0)
    {
        self.gameOver();
    }
    else
    {
        self.ballOnPaddle = true;

        self.ball.reset(self.paddle.body.x + 16, self.paddle.y - 16);
        
        self.ball.animations.stop();
    }

}
ballbreaker.prototype.gameOver = function() {

    self.ball.body.velocity.setTo(0, 0);
    
    self.introText.text = 'Game Over!';
    self.introText.visible = true;

}
ballbreaker.prototype.ballHitBrick = function(_ball, _brick) {

    _brick.kill();

    self.score += 10;

    self.scoreText.text = 'score: ' + self.score;

    //  Are they any bricks left?
    if (self.bricks.countLiving() == 0)
    {
        //  New level starts
        self.score += 1000;
        self.scoreText.text = 'score: ' + self.score;
        self.introText.text = '- Next Level -';

        //  Let's move the ball back to the paddle
        self.ballOnPaddle = true;
        self.ball.body.velocity.set(0);
        self.ball.x = self.paddle.x + 16;
        self.ball.y = self.paddle.y - 16;
        self.ball.animations.stop();

        //  And bring the bricks back from the dead :)
        self.bricks.callAll('revive');
    }

}
ballbreaker.prototype.ballHitPaddle = function(_ball, _paddle) {

    var diff = 0;

    if (_ball.x < _paddle.x)
    {
        //  Ball is on the left-hand side of the paddle
        diff = _paddle.x - _ball.x;
        _ball.body.velocity.x = (-10 * diff);
    }
    else if (_ball.x > _paddle.x)
    {
        //  Ball is on the right-hand side of the paddle
        diff = _ball.x -_paddle.x;
        _ball.body.velocity.x = (10 * diff);
    }
    else
    {
        //  Ball is perfectly in the middle
        //  Add a little random X to stop it bouncing straight up!
        _ball.body.velocity.x = 2 + Math.random() * 8;
    }

}
ballbreaker.prototype.create_interface = function(){
    console.log('interface');
    this.init();
    //create template game
    //var tmp = _.template($('#drawing_interface').html());
    //$('.app_content').append(tmp({}));
}
ballbreaker.prototype.destroy = function(callBack){
    callBack();
}