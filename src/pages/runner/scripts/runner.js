function runner(){
    this.game;
    this.platforms;
    this.player;
    this.cursors;
    this.stars;
    this.score = 0;
    this.scoreText;
    this.ground;
    this.ledge = [];
    this.background;
    this.foreground;
    this.scrollPosition = 100;
    this.speed = 800;
    this._isJumping = false;
    this.init();
}
runner.prototype.init = function(){
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'runner_phaser', { 
        preload: this.preload, 
        create: this.create, 
        update: this.update 
    });
}
runner.prototype.preload = function(){
    this.game.load.image('brique', 'assets/brique.png');
    this.game.load.image('obstacle', 'assets/obstacle.png');
    this.game.load.image('foreground', 'assets/foreground.png');
    this.game.load.image('sky', 'assets/sky.png');
    this.game.load.image('ground', 'assets/platform.png');
    this.game.load.image('star', 'assets/star.png');
    this.game.load.spritesheet('dude', 'assets/character2.png', 200, 200);
}
runner.prototype.create = function(){
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    //  A simple background for our game
    //this.background = this.game.add.tileSprite(0, 0, 'sky');
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'sky');
    this.background.tileScale.set(.5);
    this.background.tint = 0x444444;
    
    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.platforms = this.game.add.group();

    //  We will enable physics for any object that is created in this group
    this.platforms.enableBody = true;

    // Here we create the ground.
    this.ground = this.platforms.create(0, this.game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    this.ground.scale.setTo(10, 1);

    //  This stops it from falling away when you jump on it
    this.ground.body.immovable = true;

    /*var line = 0;
    var brick = 0;
    for(var i=0; i<level.length; i++){
        for(var n=0; n<level[i].length; n++){
            if(level[i][n] == 1){
                console.log('brique');
                run.ledge[brick] = this.platforms.create(line*32, n*32, 'brique');
                run.ledge[brick].body.immovable = true;
                run.ledge[brick].scale.setTo(1, 1);
                this.game.physics.arcade.enable(run.ledge[brick]);
            }
            brick++;
        }
        line++;
    }*/
    //  Now let's create two ledges
    run.ledge[0] = this.platforms.create(1000, 500, 'ground');
    run.ledge[0].body.immovable = true;
    run.ledge[0].scale.setTo(1, 1);
    this.game.physics.arcade.enable(run.ledge[0]);
    
    run.ledge[1] = this.platforms.create(150, 250, 'ground');
    run.ledge[1].body.immovable = true;
    this.game.physics.arcade.enable(run.ledge[1]);
    
    // The player and its settings
    this.player = this.game.add.sprite(0, 0, 'dude');
    //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.player);

    //  Player physics properties. Give the little guy a slight bounce.
    this.player.body.bounce.y = 0.1;
    this.player.body.gravity.y = 2500;
    this.player.body.collideWorldBounds = false;
    
    //the camera will follow the player in the world
    //this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON);
    //  Our two animations, walking left and right.
    this.player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
    this.player.animations.add('jump', [1,2,3], 10, false);

    //  Finally some stars to collect
    this.stars = this.game.add.group();

    //  We will enable physics for any star that is created in this group
    this.stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = this.stars.create(i * 70, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    //  The score
    this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    
    
    //  A simple background for our game
    //this.foreground = this.game.add.tileSprite(0, 0, 'foreground');
    this.foreground = this.game.add.tileSprite(0, this.game.height - (1080/2), this.game.width, this.game.height, 'foreground');
    this.foreground.tileScale.set(.5);
    this.foreground.tint = 0x444444;
    
    //  Our controls.
    this.cursors = this.game.input.keyboard.createCursorKeys();
}
runner.prototype.getLedge = function(){
    for(var i=0; i<run.ledge.length; i++){
        console.log(run.ledge[i]);
    }   
}
runner.prototype.update = function(){
    var speed = run.speed;
    //  Collide the player and the stars with the platforms
    this.game.physics.arcade.collide(this.player, this.platforms, function(){console.log('collide');}, null, this);
    //this.game.physics.arcade.collide(this.player, this.platforms);
    this.game.physics.arcade.collide(this.stars, this.platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.game.physics.arcade.overlap(this.player, this.stars, run.collectStar, null, this);
    this.game.physics.arcade.overlap(this.player, this.platforms, run.overlapPlatform, null, this);
    
    this.background.tilePosition.x = -(run.scrollPosition * 0.005);
    this.foreground.tilePosition.x = -(run.scrollPosition * 0.05);
    //  Reset the players velocity (movement)
    //this.platforms.velocity.x = 200;
    //this.player.body.velocity.x = speed;
    this.player.body.x = 100;
    //this.player.body.setZeroVelocity();
    if(this.cursors.up.isDown && this.player.body.touching.down){
        this.player.body.velocity.y = -450;
        this.player.body.gravity.y = 10000;
        this.player.animations.play('jump');
    }else{
        if (this.player.body.touching.down)
        {
            this.player.body.gravity.y = 50;
            this.player.animations.play('left');
        }
    }
    
    
    if (this.cursors.down.isDown)
    {
        this.player.body.velocity.y = 650;
        this.player.body.gravity.y = 500;
    }else{
        this.player.body.gravity.y = 500;
    }
    
    
    for(var i=0; i<run.ledge.length; i++){
        run.ledge[i].body.velocity.x = -speed;
        if(run.ledge[i].body.x < -run.ledge[i].width){
            //run.ledge[i].destroy();
            run.ledge[i].body.x = window.innerWidth;
        }
    }
    /*if (this.cursors.left.isDown)
    {
        //  Move to the left
        this.player.body.velocity.x = -150;

        this.player.animations.play('left');
    }
    else if (this.cursors.right.isDown)
    {
        //  Move to the right
        this.player.body.velocity.x = 150;

        this.player.animations.play('right');
    }
    else
    {
        //  Stand still
        this.player.animations.stop();

        this.player.frame = 4;
    }*/
    
    //this.game.camera.focusOnXY(this.player.x, this.player.y)
    //this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON); 
    
    run.scrollPosition += speed;
    //  Allow the player to jump if they are touching the ground.
    
    
}
runner.prototype.collectStar = function(player, star) {
    star.kill();
    console.log('get star');
    run.score += 10;
    //run.scoreText.text = 'Score: ' + run.score;
}
runner.prototype.overlapPlatform = function(player, plateform){
    //run.speed = 0;
    console.log("error platform");
    if(this.player.body.touching.right) {
        run.speed = 0;
    }
}




var level = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]