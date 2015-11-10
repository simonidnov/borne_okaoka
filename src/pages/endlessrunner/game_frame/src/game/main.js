var _parent_frame = window.parent;
game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.objects'
)
.body(function() {
game.Loader.inject({
    backgroundColor: 0xE41694,
    barBg : 0xE41694,
    bgColor :0xE41694,
    initStage: function() {
        //this.start();
        this.bar = new game.Graphics();
        this.bar.beginFill(0xffffff, 0);
        this.bar.drawRect(0, 0, 260, 40);

        this.bar.position.x = game.system.width / 2 - (260 / 2);
        this.bar.position.y = game.system.height / 2 - (40 / 2);

        this.bar.scale.x = this.percent / 100;

        game.system.stage.addChild(this.bar);
    },

    onPercentChange: function() {
        this.bar.scale.x = this.percent / 100;
    }
});
game.createScene('Main', {
    backgroundColor: 0xE41694,
    init: function() {
        this.started = false;
        this.world = new game.World(0, 2000);
        var floorBody = new game.Body({
            position: {
                x: game.system.width / 2,
                y: game.system.height - 40
            },
            collisionGroup: 1
        });
        var floorShape = new game.Rectangle(game.system.width, 50);
        floorBody.addShape(floorShape);
        this.world.addBody(floorBody);

        var bg = new game.Sprite('01_sky_moon.png').addTo(this.stage);
        this.addParallax('03_city.png', 150, -200);
        this.addParallax('04_city.png', 100, -300);
        this.addParallax('05_trees.png', 100, -400);
        this.addParallax('05_bush.png', 50, -500);
        this.addParallax('platform.png', 0, -1000);

        this.objectContainer = new game.Container().addTo(this.stage);
        this.playerContainer = new game.Container().addTo(this.stage);

        this.player = new game.Player(400, game.system.height - 400);
        this.player.sprite.addTo(this.playerContainer);

        this.addTimer(1500, this.spawnRandomObject.bind(this), true);
        this.spawnRandomObject();
        var self = this;
        _parent_frame.utilities.show_popup(
            {color:_parent_frame.navigation._current_interface_color, motion:"intro_run", buttons:["play"]}, 
            function(e){
                /*setTimeout(function(){
                    self.started = true;
                    self.player.start();
                }, 2000);*/
            }
        );
    },

    spawnRandomObject: function() {
        if(!this.started){
            return false;
        }
        var rand = Math.random();
        var randY = window.innerHeight-130 - (Math.random() * 400);
        if (rand < 0.1) {
            for(var i=0; i<10; i++){
                var circle_coin = new game.Circle_coin(game.system.width+(80*i), randY);
            }
        }
        else if (rand < 0.2) {
            for(var i=0; i<10; i++){
                var square_coin = new game.Square_coin(game.system.width+(80*i), randY);
            }
        }
        else if (rand < 0.3) {
            for(var i=0; i<10; i++){
                var triangle_coin = new game.Triangle_coin(game.system.width+(80*i), randY);
            }
        }
        else if (rand < 0.5) {
            var oneway = new game.Watter(game.system.width, window.innerHeight - 60);
            //window.innerHeight - 300 - (Math.random() * 150));
        }
        else if (rand < 0.7) {
            var oneway = new game.Picots(game.system.width, window.innerHeight - 60);
        }
        else {
            var tires = new game.Tires(game.system.width, window.innerHeight - 170);
        }
    },

    addParallax: function(texture, pos, speed) {
        var sprite = new game.TilingSprite(texture, game.system.width);
        sprite.speed.x = speed;
        sprite.position.y = game.system.height - sprite.height - pos;
        this.addObject(sprite);
        this.stage.addChild(sprite);
    },

    mousedown: function() {
        _parent_frame.navigation.update_event();
        this.player.jump();
        var self = this;
        if(!this.started){
            setTimeout(function(){
                self.started = true;
                self.player.start();
            }, 2000);
        }
    },
    mouseup: function() {
        console.log('up');
        _parent_frame.TweenMax.killAll();
    },
    keydown: function(key) {
        if (key === 'SPACE') this.player.jump();
    }
});

});
