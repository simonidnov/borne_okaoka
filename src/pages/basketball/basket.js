function Box(t, e, s, i, a, n, o, l) {
    0 != l.length && (this.waypoints = l), this.sizeX = i, this.sizeY = a, this.angleks = o || 0, this.bitMap = t.add.bitmapData(this.sizeX, this.sizeY), this.drawTexture = function() {
        n ? (this.bitMap.ctx.fillStyle = this.bitMap.ctx.createPattern(t.cache.getImage("rock_texture"), "repeat"), this.bitMap.key = "rock") : (this.bitMap.ctx.fillStyle = this.bitMap.ctx.createPattern(t.cache.getImage("box_texture"), "repeat"), this.bitMap.key = "box"), this.bitMap.ctx.fillRect(0, 0, this.sizeX, this.sizeY)
    }, this.drawLines = function() {
        for (var t = 0; t < this.sizeX; t += 6) this.bitMap.ctx.fillRect(t, 0, 2, 2), this.bitMap.ctx.fillRect(t, this.sizeY - 2, 2, 2);
        for (var t = 0; t < this.sizeY; t += 6) this.bitMap.ctx.fillRect(0, t, 2, 2), this.bitMap.ctx.fillRect(this.sizeX - 2, t, 2, 2)
    }, this.drawTexture(), this.bitMap.ctx.fillStyle = n ? "#FF1212" : "#00FFFF", this.drawLines(), Phaser.Sprite.call(this, t, e, s, this.bitMap), this.game.physics.p2.enable(this), this.body.angle = this.angleks, this.body.mass = 50, n && (this.body.kinematic = !0), this.waypoints && (this.moving = new moving(this, this.waypoints, t)), this.game.add.existing(this)
}

function itemholder(t, e) {
    this.sprite = t.add.sprite(BallGame.WIDTH / 2, BallGame.HEIGHT / 2, e), this.name = e, this.sprite.anchor.x = .5, this.sprite.anchor.y = .5, this.sprite.inputEnabled = !0, this.sprite.input.enableDrag(), this.sprite.events.onInputDown.add(function() {
        t.setLastTouch(this)
    }, this), this.destroy = function() {
        this.sprite.kill()
    }, this.getJSON = function() {
        return '{"object":"' + this.name + '","x_pos":"' + this.sprite.x + '","y_pos":"' + this.sprite.y + '"}'
    }, this.activate = function() {}, this.deactivate = function() {}
}

function dynamicitemholder(t, e, s, i) {
    this.game = t, this.angle = 0, this.bitMap = t.add.bitmapData(BallGame.WIDTH, BallGame.HEIGHT), this.name = e, this.sizeX = s, this.sizeY = i, this.x = BallGame.WIDTH / 2, this.y = BallGame.HEIGHT / 2, this.bitMap.ctx.fillStyle = "box_dynamic" == this.name ? "#00FFFF" : "#FF1212", this.draw = function() {
        this.bitMap.clear();
        for (var t = this.x - this.sizeX / 2; t < this.x + this.sizeX / 2; t += 10) this.bitMap.ctx.fillRect(t, this.y - this.sizeY / 2, 3, 3), this.bitMap.ctx.fillRect(t, this.y + this.sizeY / 2, 3, 3);
        for (var t = this.y - this.sizeY / 2; t < this.y + this.sizeY / 2; t += 10) this.bitMap.ctx.fillRect(this.x - this.sizeX / 2, t, 3, 3), this.bitMap.ctx.fillRect(this.x + this.sizeX / 2, t, 3, 3)
    }, this.draw(), this.dragBitMap = t.add.bitmapData(this.sizeX, this.sizeX), this.dragSprite = t.add.sprite(this.x, this.y, this.dragBitMap), this.dragSprite.anchor.x = .5, this.dragSprite.anchor.y = .5, this.dragSprite.inputEnabled = !0, this.dragSprite.input.enableDrag(), this.dragSprite.events.onDragStart.add(function() {
        t.setLastTouch(this), t.dragging = this
    }, this), this.dragSprite.events.onDragStop.add(function() {
        t.dragging = null
    }, this), this.updatePosition = function() {
        this.sprite.x = this.dragSprite.x, this.sprite.y = this.dragSprite.y
    }, this.sprite = t.add.sprite(this.x, this.y, this.bitMap), this.sprite.anchor.x = .5, this.sprite.anchor.y = .5, this.sprite.inputEnabled = !1, this.rotationsprite = t.add.sprite(0, 0, "rotation_arrow"), this.rotationsprite.x = s / 2, this.rotationsprite.y = 0, this.sprite.addChild(this.rotationsprite), this.rotationsprite.inputEnabled = !0, this.rotationsprite.input.priorityID = 1, this.rotationsprite.events.onInputDown.add(function() {
        t.setLastTouch(this), t.rotating = this
    }, this), this.rotationsprite.events.onInputUp.add(function() {
        t.rotating = null
    }, this), this.rotate = function() {
        var e = t.input.x - this.sprite.x,
            s = t.input.y - this.sprite.y,
            i = 180 * Math.atan2(s - 0, e - 0) / Math.PI;
        this.angle = i, this.sprite.angle = i, this.dragSprite.angle = i
    }, this.waypointSprite = t.add.sprite(0, 0, "editor_waypoint"), this.waypointSprite.x = -s / 2 - 20, this.waypointSprite.y = 0, this.sprite.addChild(this.waypointSprite), this.waypointSprite.inputEnabled = !0, this.resizesprite = t.add.sprite(0, 0, "resize_arrow"), this.updateResizeCoords = function() {
        this.resizesprite.x = s / 2, this.resizesprite.y = i / 2
    }, this.updateResizeCoords(), this.resizesprite.inputEnabled = !0, this.resizesprite.input.priorityID = 1, this.resizesprite.events.onInputDown.add(function() {
        t.setLastTouch(this), t.resizing = this
    }, this), this.sprite.addChild(this.resizesprite), this.resizesprite.events.onInputUp.add(function() {
        t.resizing = null
    }, this), this.destroy = function() {
        this.sprite.destroy(), this.resizesprite.destroy(), this.dragSprite.destroy(), this.waypointsGroup.destroy(), this.waypointSprite.destroy()
    }, this.resize = function() {
        localpointer = t.input.getLocalPosition(this.sprite, t.input.activePointer), this.sizeX = Math.max(1, 2 * localpointer.x), this.sizeY = Math.max(1, 2 * localpointer.y), this.rotationsprite.x = this.sizeX / 2, this.waypointSprite.x = -this.sizeX / 2 - 20, this.resizesprite.x = this.sizeX / 2, this.resizesprite.y = this.sizeY / 2, this.dragBitMap.resize(parseInt(this.sizeX), parseInt(this.sizeY))
    }, this.waypointsGroup = this.game.add.group(), this.waypointSprite.events.onInputDown.add(function() {
        t.setLastTouch(this);
        var e = t.add.sprite(this.dragSprite.x, this.dragSprite.y, "waypoint_point");
        e.anchor.setTo(.5, .5), e.inputEnabled = !0, e.input.enableDrag(), this.waypointsGroup.add(e)
    }, this), this.waypointSprite.events.onInputUp.add(function() {}, this), this.activate = function() {
        this.waypointsGroup.visible = !0
    }, this.deactivate = function() {
        this.waypointsGroup.visible = !1
    }, this.getJSON = function() {
        for (var t = '"waypoints":[', e = 0; e < this.waypointsGroup.length; e++) t += '{"x":' + this.waypointsGroup.getAt(e).x + ', "y":' + this.waypointsGroup.getAt(e).y + "}", e != this.waypointsGroup.length - 1 && (t += ",");
        return t += "]", '{"object":"' + this.name + '","x_pos":"' + this.dragSprite.x + '","y_pos":"' + this.dragSprite.y + '","x_size":"' + this.sizeX + '","y_size":"' + this.sizeY + '","angle":"' + this.angle + '",' + t + "}"
    }
}

function supports_html5_storage() {
    try {
        return "localStorage" in window && null !== window.localStorage
    } catch (t) {
        return !1
    }
}

function gofull() {
    this.scale.startFullScreen(!0), this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE
}

function init() {}

function startFullscreen() {
    var t = document.getElementById("peli");
    t.webkitRequestFullScreen ? t.webkitRequestFullScreen() : t.mozRequestFullScreen(), console.log("fullscreen!")
}
var BallGame = {};
BallGame.WIDTH = 1280, BallGame.HEIGHT = 720, BallGame.Boot = function() {}, BallGame.Boot.prototype = {
    preload: function() {
        this.load.image("loading_bar", "assets/loading_bar.png"), this.load.json("worlds", "levels/worlds.json")
    },
    create: function() {
        BallGame.JSONworlds = this.cache.getJSON("worlds").worlds, this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.scale.setScreenSize(!0), this.state.start("PreloadJSON")
    }
}, BallGame.Level = function() {
    this.ball = null, this.basket = null, this.levelInfo = null, this.id = null, this.worldId = null, this.intialpointerX = null, this.intialpointerY = null, this.trajectoryBitmap = null, this.trajectoryImage = null, this.trajectorySprite = null, this.touchdown = !1, this.ball_startx = null, this.ball_starty = null, this.currentBounds1, this.scalefactor = 1, this.firstBall, this.o_mcamera, this.pointText = null, this.textTween = null, this.opacityTween = null, this.score = 0, this.scoreboard = null, this.pauseGroup, this.gamePause, this.ballCount, this.highscore
}, BallGame.Level.prototype = {
    init: function(t, e, s) {
        null != t ? this.levelInfo = t : (this.levelInfo = BallGame.JSONworlds[s].levels[e], this.id = e, this.worldId = s)
    },
    preload: function() {},
    create: function() {
        this.balldrop = this.add.audio("balldrop"), this.balldrop.allowMultiple = !0, this.balldrop.addMarker("hit", 0, .3), this.score = 0, this.gamePause = !1, this.highscore = !1, this.pointstyle = {
            font: "44px UbuntuTitling-Bold-webfont",
            fill: "#ffffff",
            stroke: "black",
            strokeThickness: 3,
            align: "center"
        }, this.customTimer = this.game.time.create(!1), this.customTimer.resume(), this.customTimer.running = !0, this.setupDisplayGroups(), BallGame.BALL_DAMPING_VALUE = .1, this.time.advancedTiming = !0, this.firstBall = !0, this.currentBounds1 = new Phaser.Rectangle(-500, -500, 2e3, 2e3), this.world.bounds = this.currentBounds1, this.camerabounds = new Phaser.Rectangle(0, 0, 1920, 720), this.camera.bounds = this.camerabounds, this.tausta = new SunGroupBackground(this), this.backObjects.add(this.tausta);
        var t = this.add.button(25, 25, "pausebutton", function() {
            this.pauseGame()
        }, this);
        t.alpha = .6, this.uiobjects.add(t), this.uiobjects.fixedToCamera = !0, this.physics.startSystem(Phaser.Physics.P2JS), this.game.physics.p2.paused = !1, this.physics.p2.gravity.y = 1100, this.physics.p2.restitution = .8, this.physics.p2.friction = 5, this.readJSON(), this.ballCount = 3, this.addBall(), this.trajectoryBitmap = this.make.bitmapData(BallGame.WIDTH, BallGame.HEIGHT), this.trajectorySprite = this.add.sprite(0, 0, this.trajectoryBitmap), this.trajectorySprite.anchor.x = .5, this.trajectorySprite.anchor.y = .5, this.scoreboard = new Scoreboard(this), this.pointText = this.game.add.text(this.basket.x - 10, this.basket.y - 100, "100", this.pointstyle), this.pointText.anchor.x = .5, this.pointText.anchor.y = .5, this.pointText.alpha = 0, this.textTween = this.add.tween(this.pointText).to({
            y: this.pointText.y - 100
        }, 500, Phaser.Easing.Linear.None, !0, 0, 0), this.opacityTween = this.add.tween(this.pointText).to({
            alpha: 0
        }, 400, Phaser.Easing.Linear.None, !0, 0, 0)
    },
    pauseGame: function() {
        this.pauseGroup.pauseOn()
    },
    scoreEvent: function(t) {
        this.score++, this.pointText.alpha = 1, this.pointText.y = t.y - 100, this.pointText.updateTransform(), this.textTween.start(0), this.opacityTween.start(100), 3 == this.score && this.levelFinished()
    },
    levelFinished: function() {
        1 != this.scoreboard.visible && (null != this.id && (this.score > BallGame.localData.getLevelData(this.worldId, this.id) && (this.highscore = !0), BallGame.localData.save(this.worldId, this.id, this.score)), this.scoreboard.show())
    },
    lastBallCheck: function() {
        0 == this.ballCount && (this.customTimer.add(4 * Phaser.Timer.SECOND, this.levelFinished, this).autoDestroy = !0)
    },
    setupDisplayGroups: function() {
        this.stageGroup = this.add.group(), this.frontObjects = this.add.group(), this.backObjects = this.add.group(), this.uiobjects = this.add.group(), this.stageGroup.add(this.backObjects), this.stageGroup.add(this.frontObjects), this.pauseGroup = new PauseMenu(this), this.uiobjects.add(this.pauseGroup)
    },
    readJSON: function() {
        for (var t = this.levelInfo.objects.length, e = 0; t > e; e++) {
            var s = this.levelInfo.objects[e],
                i = s.waypoints ? s.waypoints : [];
            switch (this.levelInfo.objects[e].object) {
                case "basketball_place":
                    this.ball_startx = s.x_pos, this.ball_starty = s.y_pos;
                    break;
                case "box_static":
                    var a = new Box(this, s.x_pos, s.y_pos, s.x_size, s.y_size, !0, s.angle, i);
                    this.backObjects.add(a);
                    break;
                case "box_dynamic":
                    var n = new Box(this, s.x_pos, s.y_pos, s.x_size, s.y_size, !1, s.angle, i);
                    this.backObjects.add(n);
                    break;
                case "hoop_place":
                    var o = new BasketObject(this, parseInt(s.x_pos), parseInt(s.y_pos), i);
                    this.basket = o, this.frontObjects.add(o), o.z = 1e3
            }
        }
    },
    update: function() {
        this.touchdown && this.drawTrajectory()
    },
    render: function() {},
    set: function(t) {
        this.initialpointerX = t.x + 150, this.initialpointerY = t.y - 150, this.ball = new Ball(this, this.ball_startx, this.ball_starty), this.backObjects.add(this.ball), this.ball.set(), this.touchdown = !0
    },
    launch: function() {
        var t = this.getLaunchForceX(),
            e = this.getLaunchForceY();
        this.ball.launch(t, e), this.touchdown = !1
    },
    addBall: function() {
        if (this.ballCount > 0) {
            this.ballCount--;
            var t = new BallObject(this, this.ball_startx, this.ball_starty);
            this.backObjects.add(t)
        }
    },
    drawTrajectory: function() {
        var t = this.ball.x,
            e = this.ball.y;
        this.trajectorySprite.x = t, this.trajectorySprite.y = e;
        var s = BallGame.BALL_DAMPING_VALUE;
        this.trajectoryBitmap.ctx.fillStyle = "#FFFFFF", this.trajectoryBitmap.clear(), correctionFactor = .99;
        for (var i = 0; 1.5 > i; i += .11) {
            var a = (this.ball.getLaunchForceX(), this.ball.getLaunchForceY(), (this.ball.getLaunchForceX() - this.ball.getLaunchForceX() * s * i) * i * correctionFactor),
                n = (this.ball.getLaunchForceY() - this.ball.getLaunchForceY() * s * i) * i * correctionFactor - -550 * i * i;
            a = BallGame.WIDTH / 2 + a, n = BallGame.HEIGHT / 2 + n, this.trajectoryBitmap.ctx.fillRect(a, n, 3, 3)
        }
    },
    getLaunchForceX: function() {
        return 2 * -(this.input.x - this.initialpointerX)
    },
    getLaunchForceY: function() {
        return 2 * -(this.input.y - this.initialpointerY)
    },
    camera_move: function(t) {
        t.timeDown && (t.isDown && !t.targetObject && 0 == this.touchdown && (this.o_mcamera && (console.log("HERE!"), this.camera.x += this.o_mcamera.x - t.position.x), this.o_mcamera = t.position.clone()), t.isUp && (this.o_mcamera = null))
    }
}, PauseMenu = function(t) {
    Phaser.Group.call(this, t), this.game.add.existing(this), this.pause = !1;
    var e = this.game.add.bitmapData(150, BallGame.HEIGHT);
    e.ctx.fillStyle = "black", e.ctx.fillRect(0, 0, 150, BallGame.HEIGHT);
    var s = this.create(-150, 0, e);
    s.alpha = .8;
    this.game.add.button();
    this.retrybutton = this.game.add.button(-125, 200, "retrylevel_button", function() {
        null == this.game.id ? this.game.state.start("Level", !0, !1, this.game.levelInfo, null, null) : this.game.state.start("Level", !0, !1, null, this.game.id, this.game.worldId)
    }, this), this.add(this.retrybutton), this.levelmenubutton = this.game.add.button(-125, 325, "levelmenu_button", function() {
        this.game.state.start("LevelMenu", !0, !1, this.game.worldId)
    }, this), this.add(this.levelmenubutton), this.mute_button = new MuteButton(this.game, -125, BallGame.HEIGHT - 125), this.add(this.mute_button);
    var i = "" + (this.game.worldId + 1) + "-" + (this.game.id + 1);
    this.pauseMenuTextStyle = {
        font: "44px UbuntuTitling-Bold-webfont",
        fill: "#ffffff",
        stroke: "black",
        strokeThickness: 3,
        align: "center"
    }, this.levelText = this.game.add.text(-105, 135, i, this.pauseMenuTextStyle), this.add(this.levelText), this.pauseMenuTween = this.game.add.tween(this).to({
        x: 150
    }, 250, Phaser.Easing.Cubic.Out, !1, 0, 0), this.pauseMenuTween2 = this.game.add.tween(this).to({
        x: 0
    }, 250, Phaser.Easing.Cubic.Out, !1, 0, 0), this.pauseMenuTween.onComplete.add(function() {}, this), this.pauseMenuTween2.onComplete.add(function() {}, this)
}, PauseMenu.prototype = Object.create(Phaser.Group.prototype), PauseMenu.prototype.constructor = PauseMenu, PauseMenu.prototype.pauseOn = function() {
    console.log("pause!"), 0 == this.pause ? (this.game.customTimer.pause(), this.pause = !0, this.game.gamePause = !0, this.game.physics.p2.paused = !0, this.pauseMenuTween.start(0)) : (this.game.customTimer.resume(), this.pause = !1, this.game.gamePause = !1, this.game.physics.p2.paused = !1, this.pauseMenuTween2.start(0))
}, Scoreboard = function(t) {
    Phaser.Group.call(this, t), this.game.add.existing(this), this.blackBackground = this.game.make.bitmapData(BallGame.WIDTH, BallGame.HEIGHT), this.blackBackground.ctx.fillStyle = "black", this.blackBackground.ctx.fillRect(0, 0, BallGame.WIDTH, BallGame.HEIGHT), this.image = this.game.add.image(0, 0, this.blackBackground), this.image.anchor.setTo(.5, .5), this.image.alpha = .7, this.add(this.image), this.scoreboardBitmap = this.game.make.bitmapData(500, BallGame.HEIGHT), this.scoreboardBitmap.ctx.fillStyle = "black", this.scoreboardBitmap.ctx.fillRect(0, 0, 500, BallGame.HEIGHT), this.scoreboard = this.create(0, 0, this.scoreboardBitmap), this.scoreboard.anchor.setTo(.5, .5), this.scoreboardstyle = {
        font: "44px UbuntuTitling-Bold-webfont",
        fill: "#ffffff",
        stroke: "black",
        strokeThickness: 3,
        align: "center"
    }, this.scoreText = this.game.add.text(-180, 50, "", this.scoreboardstyle), this.add(this.scoreText), this.x = BallGame.WIDTH / 2, this.y = BallGame.HEIGHT / 2, this.visible = !1, this.alpha = 0, this.retrybutton = this.game.add.button(150, 200, "retrylevel_button", function() {
        null == this.game.id ? this.game.state.start("Level", !0, !1, this.game.levelInfo, null, null) : this.game.state.start("Level", !0, !1, null, this.game.id, this.game.worldId)
    }, this), this.retrybutton.anchor.x = .5, this.retrybutton.anchor.y = .5, this.add(this.retrybutton), this.levelmenuButton = this.game.add.button(-150, 200, "levelmenu_button", function() {
        this.game.state.start("LevelMenu", !0, !1, this.game.worldId)
    }, this), this.levelmenuButton.anchor.x = .5, this.levelmenuButton.anchor.y = .5, this.add(this.levelmenuButton), this.opacityTween = this.game.add.tween(this).to({
        alpha: 1
    }, 200, Phaser.Easing.Linear.None, !1, 0, 0)
}, Scoreboard.prototype = Object.create(Phaser.Group.prototype), Scoreboard.prototype.constructor = Scoreboard, Scoreboard.prototype.show = function() {
    this.visible = !0, this.opacityTween.start(0);
    var t = this.game.worldId;
    null != this.game.id && BallGame.JSONworlds[t].levels.length - 1 > this.game.id && (this.game.score > 0 || BallGame.localData.getLevelData(this.game.worldId, this.game.id) > 0) && (null == BallGame.localData.getLevelData(this.game.worldId, this.game.id + 1) && BallGame.localData.save(this.game.worldId, this.game.id + 1, 0), this.nextlevelbutton = this.game.add.button(0, 200, "nextlevel_button", function() {
        this.game.state.start("Level", !0, !1, null, this.game.id + 1, this.game.worldId)
    }, this), this.nextlevelbutton.anchor.x = .5, this.nextlevelbutton.anchor.y = .5, this.add(this.nextlevelbutton)), this.number = this.game.score, this.opacityTween.onComplete.add(function() {
        this.createStarAnimation()
    }, this), this.game.highscore && this.scoreText.setText("NEW HIGHSCORE!")
}, Scoreboard.prototype.createStarAnimation = function() {
    if (this.number > 0) {
        var t = this.game.score - this.number;
        console.log("order on: " + t);
        var e = 1,
            s = 0,
            i = -100,
            a = -150 + 150 * t;
        0 == t && (s -= 15), 1 == t && (e = 1.3, i = -130), 2 == t && (s += 15);
        var n = this.create(0, 0, "endscreen_star");
        this.number--, n.anchor.setTo(.5, .5), n.alpha = 0, n.scale.x = .6, n.scale.y = .6;
        var o = (this.game.add.tween(n).to({
            alpha: 1,
            y: i,
            x: a,
            angle: s
        }, 400, Phaser.Easing.Elastic.Out, !0, 0, 0), this.game.add.tween(n.scale).to({
            x: e,
            y: e
        }, 300, Phaser.Easing.Linear.None, !0, 0, 0));
        o.onComplete.add(this.createStarAnimation, this)
    }
}, BasketObject = function(t, e, s) {
    Phaser.Sprite.call(this, t, e, s, "simple_basket"), this.game.physics.p2.enable(this), this.game.add.existing(this), this.body.kinematic = !0, this.body.clearShapes(), this.body.addCircle(6, -62, 0, 0), this.body.addCircle(6, 62, 0, 0), this.netArray = [], this.createChains(3, this.x, this.y + 18, this, 124), this.trigger1 = null, this.trigger2 = null, this.createTriggers(), this.hoopBitMap = this.game.add.bitmapData(244, 200), this.netSprite = this.game.add.sprite(this.x, this.y + 100, this.hoopBitMap), this.netSprite.anchor.setTo(.5, .5)
}, BasketObject.prototype = Object.create(Phaser.Sprite.prototype), BasketObject.prototype.constructor = BasketObject, BasketObject.prototype.createTriggers = function() {
    this.trigger2 = this.game.add.sprite(this.x, this.y - 35, "trigger"), this.trigger2.anchor.x = .5, this.trigger1 = this.game.add.sprite(this.x, this.y + 35, "trigger"), this.trigger1.anchor.x = .5, this.trigger1.visible = !1, this.trigger2.visible = !1
}, BasketObject.prototype.update = function() {}, BasketObject.prototype.createChains = function(t, e, s, i, a) {
    for (var n, o, l = 0; 2 > l; l++) {
        for (var h, r = 30, u = 2e4, c = 0; t > c; c++) {
            var d = -a / 2 + l * a,
                p = e + d,
                g = s + c * r;
            newRect = this.game.add.sprite(p, g, "kori_naru"), this.game.physics.p2.enable(newRect), newRect.body.damping = .9, 0 == c ? this.game.physics.p2.createRevoluteConstraint(newRect, [0, -16], this, [l * a - 61, 3], u) : newRect.body.mass = t / c, h && this.game.physics.p2.createRevoluteConstraint(newRect, [0, -16], h, [0, 16], u), 1 == c && (0 == l ? n = newRect : o = newRect), this.netArray.push(newRect), h = newRect
        }
        h = null
    }
    var m = this.game.physics.p2.createDistanceConstraint(n, o, 62);
    m.upperLimitEnabled = !0, m.lowerLimitEnabled = !0, m.upperLimit = 5, m.lowerLimit = .5
}, BasketObject.prototype.drawHoopNet = function() {
    this.hoopBitMap.cls();
    for (var t = 0; 3 > t; t++) {
        this.hoopBitMap.ctx.fillStyle = "white", this.hoopBitMap.ctx.beginPath();
        var e = 124,
            s = 0;
        this.hoopBitMap.ctx.moveTo(this.netArray[t].x + e - this.x, this.netArray[t].y - this.y + s), this.hoopBitMap.ctx.lineTo(this.netArray[t + 3].x + e - this.x, this.netArray[t + 3].y - this.y + s), this.hoopBitMap.ctx.stroke()
    }
}, BallObject = function(t, e, s) {
    this.hit1 = !1, this.hit2 = !1, this.scored = !1, Phaser.Sprite.call(this, t, e, s, "basketball"), this.game.time.events.add(.1 * Phaser.Timer.SECOND, function() {
        this.hit2 = !1
    }, this).autoDestroy = !0, this.anchor.setTo(.5, .5), this.alpha = 0, this.opacityTween = this.game.add.tween(this).to({
        alpha: 1
    }, 200, Phaser.Easing.Linear.None, !0, 100, 0, !1), this.inputEnabled = !0, this.game.add.existing(this), this.set(), this.events.onInputDown.add(function() {
        0 == this.game.gamePause && (this.game.ball = this, this.game.touchdown = !0)
    }, this), this.events.onInputUp.add(function() {
        0 == this.game.gamePause && (this.game.physics.p2.enable(this), this.body.setCircle(31), this.body.mass = 10, this.body.damping = 2.75 * BallGame.BALL_DAMPING_VALUE, t.touchdown = !1, this.launch(this.getLaunchForceX(), this.getLaunchForceY()), this.game.firstBall = !1, this.inputEnabled = !1, this.body.onBeginContact.add(this.hitEvent, this), this.game.addBall())
    }, this), this.hit1 = !1, this.hit2 = !1
}, BallObject.prototype = Object.create(Phaser.Sprite.prototype), BallObject.prototype.constructor = BallObject, BallObject.prototype.launch = function(t, e) {
    this.body.data.gravityScale = 1, this.body.velocity.x = t, this.body.velocity.y = e, this.game.lastBallCheck()
}, BallObject.prototype.hitEvent = function(t, e, s, i) {
    if (t) {
        var a = Phaser.Point.distance(new Phaser.Point(i[0].bodyB.velocity[0], i[0].bodyB.velocity[1]), new Phaser.Point(i[0].bodyA.velocity[0], i[0].bodyA.velocity[1]));
        if (a > 5) {
            var n = a / 50;
            this.game.balldrop.play("hit", null, n), "string" == typeof t.sprite.key
        }
    }
}, BallObject.prototype.getLaunchForceX = function() {
    this.game.input.getLocalPosition(this, this.game.input.activePointer);
    return 5 * -(this.game.input.x - this.x)
}, BallObject.prototype.getLaunchForceY = function() {
    var t = this.game.input.getLocalPosition(this, this.game.input.activePointer);
    return 5 * -t.y
}, BallObject.prototype.set = function() {}, BallObject.prototype.update = function() {
    this.scored || (this.overlap(this.game.basket.trigger2) ? this.hit2 = !0 : this.overlap(this.game.basket.trigger1) && this.hit2 && (console.log("KORI!!!" + this), this.game.scoreEvent(this), this.scored = !0))
}, Box.prototype = Object.create(Phaser.Sprite.prototype), Box.prototype.constructor = Box, moving = function(t, e, s) {
    var i, a = t.position.clone(),
        n = [],
        o = 100;
    this.game = s;
    for (var l = 0; l < e.length + 1; l++) i = l == e.length ? t.position : new Phaser.Point(e[l].x, e[l].y), n.push(new moveInfo(a, i, o)), a = i;
    this.moveToPoint = function() {
        var e = n[h].velocityX,
            s = n[h].velocityY;
        t.body.velocity.x = e, t.body.velocity.y = s, this.game.customTimer.add(Phaser.Timer.SECOND * n[h].timetomove, this.moveToPoint, this), h == n.length - 1 ? h = 0 : h++
    };
    var h = 0;
    this.moveToPoint()
};
var moveInfo = function(t, e, s) {
        var i = Phaser.Point.distance(t, e),
            a = t.angle(e, !1);
        this.velocity = Phaser, this.velocityX = s * Math.cos(a), this.velocityY = s * Math.sin(a), this.timetomove = i / s
    },
    OldBasketLevel = null;
BallGame.LevelEditor = function() {
    this.ball = null, this.itemMenuGroup = null, this.style = null, this.objectList = null, this.lastTouch = null, this.resizing = null, this.dragging = null, this.rotating = null
}, BallGame.LevelEditor.prototype = {
    preload: function() {
        this.load.image("basketball_place", "assets/editor/basketball_62_place.png"), this.load.image("hoop_place", "assets/editor/kori_place.png"), this.load.image("resize_arrow", "assets/editor/resize_arrow.png"), this.load.image("rotation_arrow", "assets/editor/rotation_arrow.png"), this.load.image("editor_waypoint", "assets/editor/waypoint.png"), this.load.image("waypoint_point", "assets/editor/waypoint_point.png")
    },
    create: function() {
        this.objectList = [], this.style = {
            font: "15px Arial",
            fill: "#ff0044",
            align: "center"
        }, this.itemMenuGroup = new Phaser.Group(this, null, "itemimenu", !1, !1, 0), this.physics.startSystem(Phaser.Physics.P2JS), this.physics.p2.gravity.y = 1100, this.physics.p2.restitution = .8, this.physics.p2.friction = 5, this.itemMenu()
    },
    update: function() {
        this.resizing && this.resizing.resize(), this.dragging && this.dragging.updatePosition(), this.rotating && this.rotating.rotate()
    },
    render: function() {
        this.resizing && this.resizing.draw()
    },
    itemMenu: function() {
        var t = [];
        t.push("basketball_place", "hoop_place", "box_static", "box_dynamic");
        for (var e = 0; e < t.length; e++) this.itemMenuItem(t[e], BallGame.WIDTH / 2, 15 * e);
        var s = this.add.text(BallGame.WIDTH / 2 + 150, 0, "delete last", this.style);
        s.inputEnabled = !0, s.events.onInputDown.add(function() {
            this.destroyLastItem()
        }, this);
        var i = this.add.text(BallGame.WIDTH / 2 + 150, 15, "delete all", this.style);
        i.inputEnabled = !0, i.events.onInputDown.add(function() {
            this.destroyAllItems()
        }, this);
        var a = this.add.text(BallGame.WIDTH / 2 - 150, 0, "Save JSON", this.style);
        a.inputEnabled = !0, a.events.onInputDown.add(function() {
            console.log(this.saveJSON())
        }, this);
        var n = this.add.text(BallGame.WIDTH / 2 - 250, 0, "Play Level", this.style);
        n.inputEnabled = !0, n.events.onInputDown.add(function() {
            var t = JSON.parse(this.saveJSON());
            this.playLevel(t)
        }, this)
    },
    playLevel: function(t) {
        OldBasketLevel = t;
        window.open("index.html", "level test", "status=0,directories=0,toolbar=0,menubar=0,location=0,resizable=0,width=1280,height=720")
    },
    itemMenuItem: function(t, e, s) {
        var i = this.add.text(e, s, t, this.style);
        i.inputEnabled = !0, i.events.onInputDown.add(function() {
            this.createItem(t)
        }, this)
    },
    createItem: function(t) {
        var e;
        "basketball_place" == t || "hoop_place" == t ? (e = new itemholder(this, t, this), this.objectList.push(e), this.setLastTouch(e)) : (e = new dynamicitemholder(this, t, 150, 150), this.objectList.push(e), this.setLastTouch(e))
    },
    destroyAllItems: function() {
        for (var t = 0; t < this.objectList.length; t++) this.objectList[t].destroy();
        this.objectList = [], this.lastTouch = null
    },
    destroyLastItem: function() {
        null != this.lastTouch && (this.objectList.splice(this.objectList.indexOf(this.lastTouch), 1), this.lastTouch.destroy(), this.lastTouch = null)
    },
    saveJSON: function() {
        var t = this.objectList.length,
            e = "oma",
            s = '{"name":"' + e + '",';
        s += '"objects":[';
        for (var i = 0; t > i; i++) s += this.objectList[i].getJSON() + ",";
        return s = s.substring(0, s.length - 1), s += "]}"
    },
    lastItem: function() {},
    setLastTouch: function(t) {
        this.lastTouch != t && null != this.lastTouch && this.lastTouch.deactivate(), this.lastTouch = t, this.lastTouch.activate()
    }
}, gameLocalData = function() {
    this.save = function(t, e, s) {
        (this.getLevelData(t, e) < s || null == this.getLevelData(t, e)) && (localStorage["BallGame.world." + t + ".level." + e] = s)
    }, this.getLevelData = function(t, e) {
        return null != localStorage["BallGame.world." + t + ".level." + e] ? parseInt(localStorage["BallGame.world." + t + ".level." + e]) : null
    }, this.getWorldStars = function(t) {
        for (var e = 0, s = 0; s < BallGame.JSONworlds[t].levels.length; s++) null != localStorage["BallGame.world." + t + ".level." + s] && (e += parseInt(localStorage["BallGame.world." + t + ".level." + s]));
        return e
    }, this.muteOn = function() {
        console.log("mute paalla"), localStorage["BallGame.mute"] = 1, console.log(localStorage["BallGame.mute"])
    }, this.muteOff = function() {
        console.log("mute pois paalta"), localStorage["BallGame.mute"] = 0, console.log(localStorage["BallGame.mute"])
    }, this.muteStatus = function() {
        return localStorage["BallGame.mute"]
    }
}, BallGame.localData = new gameLocalData, BallGame.LevelMenu = function() {
    this.index
}, BallGame.LevelMenu.prototype = {
    init: function(t) {
        this.index = t, console.log("INDEXI ON" + t)
    },
    preload: function() {},
    create: function() {
        this.numberstyle = {
            font: "44px UbuntuTitling-Bold-webfont",
            fill: "#ffffff",
            stroke: "black",
            strokeThickness: 3,
            align: "center"
        }, this.background1 = 0 == this.index ? new SunGroupBackground(this, 0) : new SunGroupBackground(this, 1), this.style = {
            font: "24px ubuntu_titlingbold",
            fill: "#ff0044",
            align: "center"
        }, null == BallGame.localData.getLevelData(this.index, 0) && BallGame.localData.save(this.index, 0, 0), this.loadLevels(), this.unlockAllLevels(), this.levelEditor(), this.backButton = this.game.add.button(25, 25, "back_button", function(t, e, s) {
            s && this.state.start("WorldMenu")
        }, this, 0, 0, 1)
    },
    update: function() {},
    loadLevels: function() {
        console.log("loytyyko levelit: " + this.index), console.log(BallGame.JSONworlds), console.log(BallGame.JSONworlds[0].levels.length);
        for (var t = 0; t < BallGame.JSONworlds[this.index].levels.length; t++) {
            var e = 7,
                s = 135 + t % e * 165,
                i = 225 + 165 * Math.floor(t / e);
            new levelButton(this, s, i, t, !1)
        }
    },
    levelEditor: function() {
        var t = this.add.text(BallGame.WIDTH - 200, 100, "level editor", this.style);
        t.inputEnabled = !0, t.events.onInputDown.add(function() {
            this.state.start("LevelEditor")
        }, this)
    },
    fullscreen: function() {
        var t = this.add.text(BallGame.WIDTH - 200, 300, "refresh screen", this.style);
        t.inputEnabled = !0, t.events.onInputDown.add(function() {
            this.scale.refresh()
        }, this)
    },
    deleteLocalData: function() {
        var t = this.add.text(BallGame.WIDTH - 200, 350, "delete Local data", this.style);
        t.inputEnabled = !0, t.events.onInputDown.add(function() {
            localStorage.clear()
        }, this)
    },
    unlockAllLevels: function() {
        var t = this.add.text(BallGame.WIDTH - 200, 400, "unlock levels", this.style);
        t.inputEnabled = !0, t.events.onInputDown.add(function() {
            for (var t = 0; t < BallGame.JSONworlds[this.index].levels.length; t++) BallGame.localData.save(this.index, t, 0)
        }, this)
    }
}, levelButton = function(t, e, s, i, a) {
    if (Phaser.Group.call(this, t), this.game.add.existing(this), this.stars = 0, this.button, null == BallGame.localData.getLevelData(this.game.index, i) ? a = !0 : this.stars = BallGame.localData.getLevelData(this.game.index, i), a) this.button = this.create(0, 0, "lock_button");
    else {
        this.button = this.game.add.button(0, 0, "level_button", function(t, e, s) {
            s && this.game.state.start("Level", !0, !1, null, i, this.game.index)
        }, this, 0, 0, 1), this.levelnumber = this.game.add.text(0, 0, "" + (i + 1), this.game.numberstyle), this.levelnumber.anchor.x = .5, this.levelnumber.anchor.y = .5, this.levelnumber.y += 2, this.levelnumber.x += 2, this.button.addChild(this.levelnumber), this.add(this.button);
        for (var n = 0; n < this.stars; n++) {
            var o = this.game.add.sprite(-23 + 23 * n, 50, "little_star");
            o.anchor.setTo(.5, .5), this.button.addChild(o)
        }
    }
    this.button.anchor.setTo(.5, .5), this.x = e, this.y = s
}, levelButton.prototype = Object.create(Phaser.Group.prototype), levelButton.prototype.constructor = levelButton, BallGame.MainMenu = function() {
    this.ball = null, this.ground = null
}, BallGame.MainMenu.prototype = {
    preload: function() {},
    create: function() {
        this.tausta = new SunGroupBackground(this, 1), this.smallerCloud = this.add.sprite(400, 250, "big_cloud"), this.smallerCloud.scale.x = .6, this.smallerCloud.scale.y = .6, console.log(this.smallerCloud), this.bigCloud = this.add.sprite(56, 180, "big_cloud"), this.hoop = this.add.sprite(850, 56, "mainmenu_hoop"), this.bitmapground = this.add.bitmapData(BallGame.WIDTH, 166), this.bitmapground.ctx.fillStyle = "black", this.bitmapground.ctx.fillRect(0, 0, BallGame.WIDTH, 166), this.ground = this.add.sprite(0, BallGame.HEIGHT - 166, this.bitmapground), this.physics.startSystem(Phaser.Physics.ARCADE), this.physics.arcade.gravity.y = 1100, this.currentBounds1 = new Phaser.Rectangle(0, 0, BallGame.WIDTH, BallGame.HEIGHT - 166), this.physics.arcade.bounds = this.currentBounds1, this.ball = this.add.sprite(1e3, 200, "mainmenu_ball"), this.physics.arcade.enable(this.ball, Phaser.Physics.ARCADE), this.ball.body.collideWorldBounds = !0, this.ball.body.bounce.set(.95), this.ball.body.velocity.x = -150, this.playButton = this.add.button(BallGame.WIDTH / 2, BallGame.HEIGHT / 2, "play_game", function(t, e, s) {
            s && BallGame.game.state.start("WorldMenu")
        }, this, 0, 0, 1), this.playButton.anchor.setTo(.5, .5), this.settingsMenu = new SettingsSlider(this), this.settingsButton = this.add.button(BallGame.WIDTH - 65, 65, "settings_button", function() {
            this.settingsMenu.show()
        }, this), this.settingsButton.anchor.setTo(.5, .5), BallGame.backgroundMusic.isPlaying || BallGame.backgroundMusic.play()
    },
    update: function() {
        this.smallerCloud.x > BallGame.WIDTH && (this.smallerCloud.x = -210), this.bigCloud.x > BallGame.WIDTH && (this.bigCloud.x = -350), this.bigCloud.x += .2, this.smallerCloud.x += .13, this.physics.arcade.collide(this.ball1, this.ground)
    },
    render: function() {}
}, SettingsSlider = function(t) {
    Phaser.Group.call(this, t);
    var e = this.create(BallGame.WIDTH - 65, -25, "settings_slider_bg");
    e.anchor.x = .5, e.alpha = .6, this.add(e), this.mutebutton = new MuteButton(this.game, BallGame.WIDTH - 65, 165), this.mutebutton.anchor.setTo(.5, .5), this.add(this.mutebutton), this.deleteData = new DeleteDataScreen(this.game), this.deleteDataButton = this.game.add.button(BallGame.WIDTH - 65, 280, "deletedata_button", function() {
        this.deleteData.show()
    }, this), this.deleteDataButton.anchor.setTo(.5, .5), this.add(this.deleteDataButton), this.infoscreen = this.create(0, 0, "infoscreen"), this.infoscreen.y = -15, this.infoscreen.visible = !1, this.infoscreen.alpha = 0, this.showInfoScreenTween = this.game.add.tween(this.infoscreen).to({
        alpha: 1
    }, 250, Phaser.Easing.Cubic.InOut, !1, 0, 0), this.hideInfoScreenTween = this.game.add.tween(this.infoscreen).to({
        alpha: 0
    }, 250, Phaser.Easing.Cubic.InOut, !1, 0, 0), this.infoButton = this.game.add.button(BallGame.WIDTH - 65, 395, "info_button", function() {
        this.infoscreen.visible = !0, this.showInfoScreenTween.start(0), this.infoscreen.bringToTop(), this.infoscreen.inputEnabled = !0, this.infoscreen.events.onInputDown.add(function() {
            this.hideInfoScreenTween.start(0), this.infoscreen.inputEnabled = !1
        }, this)
    }, this), this.infoButton.anchor.setTo(.5, .5), this.add(this.infoButton), this.add(this.infoscreen), this.y = -330, console.log(this.y + " tama y on group"), this.slided = !1, this.showSettingsTween = this.game.add.tween(this).to({
        y: 15
    }, 400, Phaser.Easing.Quartic.InOut, !1, 0, 0), this.hideSettingsTween = this.game.add.tween(this).to({
        y: -330
    }, 400, Phaser.Easing.Quartic.InOut, !1, 0, 0)
}, SettingsSlider.prototype = Object.create(Phaser.Group.prototype), SettingsSlider.prototype.constructor = SettingsSlider, SettingsSlider.prototype.show = function() {
    this.slided ? (this.infoscreen.visible = !1, this.infoscreen.inputEnabled = !1, this.hideSettingsTween.start(0), this.slided = !1) : (this.showSettingsTween.start(0), this.slided = !0)
}, SunGroupBackground = function(t, e) {
    Phaser.Group.call(this, t), console.log("theme on: " + e), 1 == e ? (this.tausta = this.create(0, 0, "orangebg"), this.aurinko = this.create(980, 447, "orangebg_sun")) : (this.tausta = this.create(0, 0, "bluebg"), this.aurinko = this.create(670, 167, "bluebg_sun")), this.aurinko.anchor.x = .5, this.aurinko.anchor.y = .5
}, SunGroupBackground.prototype = Object.create(Phaser.Group.prototype), SunGroupBackground.prototype.constructor = SunGroupBackground, SunGroupBackground.prototype.update = function() {
    this.aurinko.angle += .05
}, DeleteDataScreen = function(t) {
    Phaser.Group.call(this, t), this.deletePopup = this.create(0, 0, "deletescreen"), this.scale.x = .6, this.scale.y = .6, this.deletePopup.anchor.setTo(.5, .5), this.showing = !1, this.alpha = 0, this.deleteTextStyle = {
        font: "44px UbuntuTitling-Bold-webfont",
        fill: "#ffffff",
        stroke: "black",
        strokeThickness: 3,
        align: "center"
    }, this.deleteText = this.game.add.text(-250, 250, "Game progression deleted.", this.deleteTextStyle), this.add(this.deleteText), this.deleteText.alpha = 0, this.fadeOutDeleteTextTween = this.game.add.tween(this.deleteText).to({
        alpha: 0
    }, 1500, Phaser.Easing.Cubic.InOut, !1, 0, 0), this.deletebutton = this.game.add.button(-125, 60, "delete_data_yes", function(t, e, s) {
        s && (localStorage.clear(), this.deleteText.alpha = 1, this.fadeOutDeleteTextTween.start(0))
    }, this, 0, 0, 1), this.deletebutton.anchor.setTo(.5, .5), this.add(this.deletebutton), this.cancelbutton = this.game.add.button(125, 60, "delete_data_no", function() {
        this.hide()
    }, this, 0, 0, 1), this.cancelbutton.anchor.setTo(.5, .5), this.add(this.cancelbutton), this.showPopupTween = this.game.add.tween(this).to({
        alpha: 1
    }, 250, Phaser.Easing.Cubic.InOut, !1, 0, 0), this.hidePopupTween = this.game.add.tween(this).to({
        alpha: 0
    }, 250, Phaser.Easing.Cubic.InOut, !1, 0, 0), this.scaleUpTween = this.game.add.tween(this.scale).to({
        x: 1,
        y: 1
    }, 250, Phaser.Easing.Cubic.InOut, !1, 0, 0), this.scaleDownTween = this.game.add.tween(this.scale).to({
        x: .6,
        y: .6
    }, 250, Phaser.Easing.Cubic.InOut, !1, 0, 0), this.x = BallGame.WIDTH / 2, this.y = BallGame.HEIGHT / 2
}, DeleteDataScreen.prototype = Object.create(Phaser.Group.prototype), DeleteDataScreen.prototype.constructor = DeleteDataScreen, DeleteDataScreen.prototype.show = function() {
    this.showing = !0, this.showPopupTween.start(0), this.scaleUpTween.start(0), this.deletePopup.inputEnabled = !0, this.deletePopup.events.onInputDown.add(function() {
        this.hide()
    }, this)
}, DeleteDataScreen.prototype.hide = function() {
    this.hidePopupTween.start(0), this.scaleDownTween.start(0), this.deletePopup.inputEnabled = !1
}, MuteButton = function(t, e, s) {
    Phaser.Button.call(this, t, e, s, "mutebutton", function() {
        this.game.sound.mute ? (this.game.sound.mute = !1, this.frame = 0, BallGame.localData.muteOff()) : (this.game.sound.mute = !0, this.frame = 1, BallGame.localData.muteOn())
    }), 1 == BallGame.localData.muteStatus() ? (this.game.sound.mute = !0, this.frame = 1) : (this.game.sound.mute = !1, this.frame = 0), this.game.add.existing(this)
}, MuteButton.prototype = Object.create(Phaser.Button.prototype), MuteButton.prototype.constructor = MuteButton, BallGame.PreloadJSON = function() {}, BallGame.PreloadJSON.prototype = {
    preload: function() {
        for (var t = 0; t < BallGame.JSONworlds.length; t++) {
            var e = BallGame.JSONworlds[t].source;
            this.load.json("world" + (t + 1), e)
        }
    },
    create: function() {
        this.state.start("PreloadState")
    },
    update: function() {}
}, BallGame.PreloadState = function() {}, BallGame.PreloadState.prototype = {
    preload: function() {
        this.loading_bar = this.add.sprite((BallGame.WIDTH - 311) / 2, (BallGame.HEIGHT - 27) / 2, "loading_bar"), this.load.setPreloadSprite(this.loading_bar), this.load.image("levelmenu", "assets/levelmenu_name.png");
        for (var t = 0; t < BallGame.JSONworlds.length; t++) {
            var e = BallGame.JSONworlds[t],
                s = (e.source, this.cache.getJSON("world" + (1 + t)).levels),
                i = "worldImage" + (t + 1);
            BallGame.JSONworlds[t].levels = s, BallGame.JSONworlds[t].image = i, this.load.image(i, e.imageUrl)
        }
        this.load.image("basketball", "assets/basketball_62.png"), this.load.image("pausebutton", "assets/level_pausebutton.png"), this.load.image("rock_texture", "assets/rock_texture.png"), this.load.image("box_texture", "assets/box_texture.png"), this.load.image("simple_basket", "assets/simple_basket.png"), this.load.image("kori_naru", "assets/kori_naru.png"), this.load.image("trigger", "assets/trigger.png"), this.load.image("scoreboard", "assets/scoreboard.png"), this.load.image("nextlevel_button", "assets/nextlevel_button.png"), this.load.image("retrylevel_button", "assets/levelbutton_refresh.png"), this.load.image("levelmenu_button", "assets/levelmenu_button.png"), this.load.spritesheet("back_button", "assets/back_button_spritesheet_150_75.png", 150, 75), this.load.spritesheet("level_button", "assets/levelmenu_level_button_cyan_spritesheet.png", 100, 100), this.load.image("lock_button", "assets/levelmenu_lock_button.png"), this.load.image("little_star", "assets/levelmenu_star.png"), this.load.spritesheet("play_game", "assets/play_game_button_spritesheet_222_219.png", 222, 219), this.load.image("bluebg", "assets/backgrounds/bluebg.png"), this.load.image("bluebg_sun", "assets/backgrounds/bluebg_sun.png"), this.load.image("orangebg", "assets/backgrounds/orangebg.png"), this.load.image("orangebg_sun", "assets/backgrounds/orangebg_sun.png"), this.load.image("sky", "assets/sky_1080p.png"), this.load.image("mainmenu_sun", "assets/mainmenu/sun.png"), this.load.image("mainmenu_ball", "assets/mainmenu/ball_36.png"), this.load.image("mainmenu_hoop", "assets/mainmenu/hoop.png"), this.load.image("mainmenu_background", "assets/mainmenu/background.png"), this.load.image("big_cloud", "assets/mainmenu/big_cloud.png"), this.load.audio("balldrop", "assets/sounds/ball_ground.mp3"), this.load.audio("background_music", "assets/sounds/background_music_loop.mp3"), this.load.spritesheet("mutebutton", "assets/mutebutton.png", 100, 100), this.load.image("endscreen_star", "assets/endscreen_star.png"), this.load.image("settings_button", "assets/settings_button.png"), this.load.image("deletedata_button", "assets/deletedata_button.png"), this.load.image("info_button", "assets/info_button.png"), this.load.image("settings_slider_bg", "assets/settings_slider_bg.png"), this.load.image("infoscreen", "assets/infoscreen.png"), this.load.image("deletescreen", "assets/settingsmenu/deletescreen.png"), this.load.spritesheet("delete_data_yes", "assets/settingsmenu/delete_button_yes_286_49.png", 143, 49), this.load.spritesheet("delete_data_no", "assets/settingsmenu/delete_button_no_286_49.png", 143, 49)
    },
    create: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.scale.setScreenSize(!0), BallGame.backgroundMusic = BallGame.game.add.audio("background_music", .6, !0), BallGame.backgroundMusic.allowMultiple = !1, this.set()
    },
    update: function() {},
    set: function() {
        if (console.log("jup"), null != window.opener) {
            if (null != window.opener.OldBasketLevel) {
                var t = window.opener.OldBasketLevel;
                console.log(JSON.stringify(t)), this.state.start("Level", !0, !1, t, null)
            }
        } else this.state.start("MainMenu"), this.scale.refresh()
    }
}, BallGame.WorldMenu = function() {
    this.worlds
}, BallGame.WorldMenu.prototype = {
    preload: function() {},
    create: function() {
        this.worlds = [], this.tausta = new SunGroupBackground(this, 1), this.starTextStyle = {
            font: "24px Tahoma",
            fill: "#ffffff",
            align: "center"
        }, this.readWorldJSON(), this.backButton = this.game.add.button(25, 25, "back_button", function(t, e, s) {
            s && this.state.start("MainMenu")
        }, this, 0, 0, 1)
    },
    update: function() {},
    readWorldJSON: function() {
        for (var t = 0; t < BallGame.JSONworlds.length; t++) new worldButton(this, 300 + 200 * t, 400, BallGame.JSONworlds[t].image, t)
    }
}, worldButton = function(t, e, s, i, a) {
    this.index = a, Phaser.Group.call(this, t), this.game.add.existing(this), this.button = this.game.add.button(e, s, i, function(t, e, s) {
        s && BallGame.game.state.start("LevelMenu", !0, !1, this.index)
    }, this), this.button.anchor.setTo(.5, .5);
    var n = 3 * BallGame.JSONworlds[a].levels.length,
        o = BallGame.localData.getWorldStars(a),
        l = "" + o + "/" + n;
    this.stars = this.game.add.text(0, 80, l, this.game.starTextStyle), this.stars.anchor.x = .5, this.stars.anchor.y = .5, this.starIcon = this.game.add.sprite(0, this.stars.y - 30, "little_star"), this.starIcon.anchor.x = .5, this.starIcon.anchor.y = .5, this.button.addChild(this.stars), this.button.addChild(this.starIcon)
}, worldButton.prototype = Object.create(Phaser.Group.prototype), worldButton.prototype.constructor = worldButton;