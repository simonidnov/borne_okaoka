game.module(
    'game.objects'
)
.body(function() {
    
game.createClass('Player', {
    onGround: false,

    init: function(x, y) {
        this.started = false;
        this.sprite = game.Animation.fromFrames('running');
        this.sprite.animationSpeed = 0.4;
        this.sprite.anchor.set(0.5, 0.6);
        this.sprite.play();

        this.runTextures = this.sprite.textures;
        this.jumpUpTextures = [game.Texture.fromFrame('run0000')];
        this.jumpDownTextures = [game.Texture.fromFrame('run0001')];
        this.hitTextures = [game.Texture.fromFrame('run0002')];

        this.body = new game.Body({
            position: {
                x: x,
                y: y
            },
            mass: 1,
            collisionGroup: 0,
            // 1 = floor
            // 2 = pickup
            // 3 = obstacle
            // 4 = oneway
            collideAgainst: [1, 2, 3, 4],
            velocityLimit: {
                x: 0,
                y: 1000
            }
        });
        this.body.collide = this.collide.bind(this);

        this.sprite.position.set(x, this.body.position.y);

        var shape = new game.Rectangle(80, 190);
        this.body.addShape(shape);
        game.scene.world.addBody(this.body);
        game.scene.addObject(this);
    },

    jump: function() {
        if (!this.onGround || this.killed) return;
        if(typeof _parent_frame._okg._jump_sound === "undefined"){
            _parent_frame.audio_manager.play_sound('run_jump', 0, function(e){
                _parent_frame._okg._jump_sound = e;
            });
        }else{
            _parent_frame._okg._jump_sound.play(0);
        }
        this.sprite.textures = this.jumpUpTextures;
        this.body.velocity.y = -this.body.velocityLimit.y;
        var self = this;
        var velocity = {y:-this.body.velocityLimit.y};
        _parent_frame.TweenMax.to(velocity, .5, {y:2, onUpdate:function(){
            self.body.velocity.y = self.body.velocity.y-20;
        }, onComplete:function(){
            self.parachute();
        }});
        this.body.mass = 1;
        this.onGround = false;
    },
    parachute : function(){
        //console.log('parachute');
        /*var self = this;
        var velocity = {y:300};
        _parent_frame.TweenMax.to(velocity, 8, {y:0, onUpdate:function(){
            self.body.velocity.y = -(velocity.y);
            console.log(self.body.velocity.y);
        }, onComplete:function(){
        }});*/
    },
    collide: function(other) {
        if (other.collisionGroup === 1) {
            this.body.velocity.y = 0;
            this.body.mass = 0;
            this.onGround = true;
        }
        else if (other.collisionGroup === 2) {
            if(typeof _parent_frame._okg._pieces_sound === "undefined"){
                _parent_frame.audio_manager.play_sound('run_piece', 0, function(e){
                    _parent_frame._okg._pieces_sound = e;    
                });
            }else{
                _parent_frame._okg._pieces_sound.stop();
                _parent_frame._okg._pieces_sound.play();
            }
            other.parent.remove();
            
            if(other.parent.sprite.texture.baseTexture.imageUrl.indexOf('triangle') !== -1){
                _parent_frame._okg.get_piece('triangle');
            }
            if(other.parent.sprite.texture.baseTexture.imageUrl.indexOf('circle') !== -1){
                _parent_frame._okg.get_piece('circle');
            }
            if(other.parent.sprite.texture.baseTexture.imageUrl.indexOf('square') !== -1){
                _parent_frame._okg.get_piece('square');
            }
            return false;
        }
        else if (other.collisionGroup === 3) {
            var num = Math.random();
            if(num < .3){
                this.kill("picots");
            }else if (num < .7){
                this.kill("watter");
            }else{
                this.kill("wall");    
            }
            return false;
        }
        else if (other.collisionGroup === 5) {
            this.kill("picots");
            return false;
        }
        else if (other.collisionGroup === 6) {
            this.kill("watter");
            return false;
        }
        else if (other.collisionGroup === 4) {
            if (this.body.last.y + this.body.shape.height / 2 <= other.position.y - other.shape.height / 2) {
                this.body.velocity.y = 0;
                this.onGround = true;
            }
            else return false;
        }
        return true;
    },

    kill: function(type) {
        _parent_frame.audio_manager.play_sound('run_died', 0, function(){});
        if(typeof _parent_frame._okg._running_sound !== "undefined"){
            _parent_frame._okg._running_sound.stop();
        }
        
        this.killed = true;
        this.body.mass = 1;
        game.scene.world.removeBodyCollision(this.body);
        this.body.velocity.y = -this.body.velocityLimit.y / 2;
        this.sprite.textures = this.hitTextures;
        game.scene.addTimer(2000, function() {
            // Restart game
            _parent_frame._okg.died(type);
            //game.system.setScene('Main');
        });
    },
    start : function(){
        this.started = true;
    },
    update: function() {
        if(this.started){
            if(typeof this.distance === "undefined"){
                this.distance = 0;
            }
            if(!this.killed){
                this.distance += .05;
            }
        }
        _parent_frame._okg.update_distance(Math.ceil(this.distance));
        // Update sprite position
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = this.body.position.y;

        if (this.killed) return;

        if (this.body.velocity.y > 0) this.onGround = false;

        // Update sprite textures
        if (!this.onGround && this.body.velocity.y > 0 && this.sprite.textures !== this.jumpDownTextures) {
            this.sprite.textures = this.jumpDownTextures;
            if(typeof _parent_frame._okg._running_sound !== "undefined"){
                _parent_frame._okg._running_sound.stop();
            }
        }
        if (this.onGround && this.sprite.textures !== this.runTextures) {
            this.sprite.textures = this.runTextures;
            _parent_frame.audio_manager.play_sound('run_run', -1, function(e){
                _parent_frame._okg._running_sound = e;
            });
        }
    }
});

game.createClass('Circle_coin', {
    init: function(x, y) {
        this.sprite = new game.Sprite('circle.png');
        //this.sprite = game.Animation.fromFrames('coin-gold');
        //this.sprite.animationSpeed = 0.2;
        //this.sprite.anchor.set(0.5, 0.5);
        //this.sprite.play();
//
        this.body = new game.Body({
            position: {
                x: x + this.sprite.width,
                y: y
            },
            collisionGroup: 2
        });
//  
        this.name = "circle";
        this.body.parent = this;
        this.body.velocity.x = -1000;
        var shape = new game.Rectangle(40, 60);
        this.body.addShape(shape);
        game.scene.objectContainer.addChild(this.sprite);
        game.scene.world.addBody(this.body);
        game.scene.addObject(this);
        
    },

    remove: function() {
        game.scene.world.removeBody(this.body);
        game.scene.objectContainer.removeChild(this.sprite);
        game.scene.removeObject(this);
    },

    update: function() {
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = this.body.position.y;

        if (this.body.position.x + this.sprite.width / 2 < 0) this.remove();
    }
});
    
game.createClass('Square_coin', {
    init: function(x, y) {
        this.sprite = new game.Sprite('square.png');
        //this.sprite = game.Animation.fromFrames('coin-gold');
        //this.sprite.animationSpeed = 0.2;
        //this.sprite.anchor.set(0.5, 0.5);
        //this.sprite.play();
//
        this.body = new game.Body({
            position: {
                x: x + this.sprite.width,
                y: y
            },
            collisionGroup: 2
        });
//
        this.name = "square";
        this.body.parent = this;
        this.body.velocity.x = -1000;
        var shape = new game.Rectangle(40, 60);
        this.body.addShape(shape);
        game.scene.objectContainer.addChild(this.sprite);
        game.scene.world.addBody(this.body);
        game.scene.addObject(this);
        
    },

    remove: function() {
        game.scene.world.removeBody(this.body);
        game.scene.objectContainer.removeChild(this.sprite);
        game.scene.removeObject(this);
    },

    update: function() {
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = this.body.position.y;

        if (this.body.position.x + this.sprite.width / 2 < 0) this.remove();
    }
});
    
game.createClass('Triangle_coin', {
    init: function(x, y) {
        this.sprite = new game.Sprite('triangle.png');
        //this.sprite = game.Animation.fromFrames('coin-gold');
        //this.sprite.animationSpeed = 0.2;
        //this.sprite.anchor.set(0.5, 0.5);
        //this.sprite.play();
//
        this.body = new game.Body({
            position: {
                x: x + this.sprite.width,
                y: y
            },
            collisionGroup: 2
        });

        this.name = "triangle";
        this.body.parent = this;
        this.body.velocity.x = -1000;
        var shape = new game.Rectangle(40, 60);
        this.body.addShape(shape);
        game.scene.objectContainer.addChild(this.sprite);
        game.scene.world.addBody(this.body);
        game.scene.addObject(this);
    },

    remove: function() {
        game.scene.world.removeBody(this.body);
        game.scene.objectContainer.removeChild(this.sprite);
        game.scene.removeObject(this);
    },

    update: function() {
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = this.body.position.y;

        if (this.body.position.x + this.sprite.width / 2 < 0) this.remove();
    }
});

game.createClass('Tires', {
    name : "wall",
    init: function(x, y) {
        this.sprite = new game.Sprite('tires.png');
        this.sprite.anchor.set(0.5, 0.5);

        this.body = new game.Body({
            position: {
                x: x + this.sprite.width,
                y: y
            },
            collisionGroup: 3
        });

        this.body.velocity.x = -1000;
        var shape = new game.Rectangle(this.sprite.width, this.sprite.height);
        this.body.addShape(shape);
        game.scene.objectContainer.addChild(this.sprite);
        game.scene.world.addBody(this.body);
        game.scene.addObject(this);
    },

    remove: function() {
        game.scene.world.removeBody(this.body);
        game.scene.objectContainer.removeChild(this.sprite);
        game.scene.removeObject(this);
    },

    update: function() {
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = this.body.position.y;

        if (this.body.position.x + this.sprite.width / 2 < 0) this.remove();
    }
});

game.createClass('Oneway', {
    name : "platform",
    init: function(x, y) {
        this.sprite = new game.Sprite('oneway.png');
        this.sprite.anchor.set(0.5, 0.5);
        
        this.body = new game.Body({
            position: {
                x: x + this.sprite.width,
                y: y
            },
            collisionGroup: 4
        });
        //console.log(game.debugDraw);
        //game.debugDraw().drawBodySprite(this.sprite, this.body);
        //game.debugDraw = this.body;
        this.body.velocity.x = -1000;
        var shape = new game.Rectangle(this.sprite.width, this.sprite.height);
        this.body.addShape(shape);
        game.scene.objectContainer.addChild(this.sprite);
        game.scene.world.addBody(this.body);
        game.scene.addObject(this);
    },

    remove: function() {
        game.scene.world.removeBody(this.body);
        game.scene.objectContainer.removeChild(this.sprite);
        game.scene.removeObject(this);
    },

    update: function() {
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = this.body.position.y;

        if (this.body.position.x + this.sprite.width / 2 < 0) this.remove();
    }
});

});


game.createClass('Picots', {
    name : "picots",
    init: function(x, y) {
        this.sprite = new game.Sprite('picots.png');
        this.sprite.anchor.set(0.5, 0.5);

        this.body = new game.Body({
            position: {
                x: x + this.sprite.width,
                y: y
            },
            collisionGroup: 3
        });

        this.body.velocity.x = -1000;
        var shape = new game.Rectangle(this.sprite.width, this.sprite.height);
        this.body.addShape(shape);
        game.scene.objectContainer.addChild(this.sprite);
        game.scene.world.addBody(this.body);
        game.scene.addObject(this);
    },

    remove: function() {
        game.scene.world.removeBody(this.body);
        game.scene.objectContainer.removeChild(this.sprite);
        game.scene.removeObject(this);
    },

    update: function() {
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = this.body.position.y;

        if (this.body.position.x + this.sprite.width / 2 < 0) this.remove();
    }
});


game.createClass('Watter', {
    name : "watter",
    init: function(x, y) {
        this.sprite = new game.Sprite('picots.png');
        this.sprite.anchor.set(0.5, 0.5);

        this.body = new game.Body({
            position: {
                x: x + this.sprite.width,
                y: y
            },
            collisionGroup: 3
        });

        this.body.velocity.x = -1000;
        var shape = new game.Rectangle(this.sprite.width, this.sprite.height);
        this.body.addShape(shape);
        game.scene.objectContainer.addChild(this.sprite);
        game.scene.world.addBody(this.body);
        game.scene.addObject(this);
    },

    remove: function() {
        game.scene.world.removeBody(this.body);
        game.scene.objectContainer.removeChild(this.sprite);
        game.scene.removeObject(this);
    },

    update: function() {
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = this.body.position.y;

        if (this.body.position.x + this.sprite.width / 2 < 0) this.remove();
    }
});
