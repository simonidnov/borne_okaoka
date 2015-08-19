var self;
function palet(){
    self = this;
    
    /* ------- EASEL JS VARS ------- */
    this.player1 = null;
    this.player2 = null;
    this.ball = null;
    this.stage = null;
}
palet.prototype.init = function(){
    self.stage = new createjs.Stage("hockey_canvas");
    
    self.player1 = new createjs.Shape();
    self.player1.graphics.beginFill(colors.red).drawCircle(0,0,50);
    self.player1.on("pressmove",function(e) {
        e.currentTarget.x = e.stageX;
        e.currentTarget.y = e.stageY;
        self.stage.update();
    });
    self.player1.x = 100;
    self.player1.y = window.innerHeight/2;
    
    self.player2 = new createjs.Shape();
    self.player2.graphics.beginFill(colors.green).drawCircle(0,0,50);
    self.player2.on("pressmove",function(e) {
        e.currentTarget.x = e.stageX;
        e.currentTarget.y = e.stageY;
        self.stage.update();
    });
    self.player2.x = window.innerWidth - 100;
    self.player2.y = window.innerHeight/2;
    
    self.ball = new createjs.Shape();
    self.ball.graphics.beginFill("white").drawCircle(0,0,40);
    self.ball.x = window.innerWidth/2;
    self.ball.y = window.innerHeight/2;
    
    self.stage.addChild(self.player1);
    self.stage.addChild(self.player2);
    self.stage.addChild(self.ball);
    self.stage.update();
}
palet.prototype.create_interface = function(){
    $('#hockey_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    $('#debug_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    $('#canvas-container').attr({"width":window.innerWidth, "height":window.innerHeight});
    //this.init();
    this.init_physic();
}
palet.prototype.init_physic = function(){
    // Matter aliases
    var Engine = Matter.Engine,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Common = Matter.Common,
        Constraint = Matter.Constraint,
        RenderPixi = Matter.RenderPixi,
        Events = Matter.Events,
        Bounds = Matter.Bounds,
        Vector = Matter.Vector,
        Vertices = Matter.Vertices,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Query = Matter.Query;

    // MatterTools aliases
    if (window.MatterTools) {
        var Gui = MatterTools.Gui,
            Inspector = MatterTools.Inspector;
    }

    var Demo = {};

    var _engine,
        _gui,
        _inspector,
        _sceneName,
        _mouseConstraint,
        _sceneEvents = [],
        _useInspector = window.location.hash.indexOf('-inspect') !== -1,
        _isMobile = /(ipad|iphone|ipod|android)/gi.test(navigator.userAgent);
    
    Demo.init = function() {
        var container = document.getElementById('canvas-container');

        // some example engine options
        var options = {
            positionIterations: 6,
            velocityIterations: 4,
            enableSleeping: true,
            width:window.innerWidth,
            height:window.innerHeight
        };

        // create a Matter engine
        // NOTE: this is actually Matter.Engine.create(), see the aliases at top of this file
        _engine = Engine.create(container, options);

        // add a mouse controlled constraint
        _mouseConstraint = MouseConstraint.create(_engine);
        World.add(_engine.world, _mouseConstraint);

        // run the engine
        Engine.run(_engine);

        // default scene function name
        _sceneName = 'circleStack';

        // set up a scene with bodies
        Demo[_sceneName]();

        // set up demo interface (see end of this file)
        Demo.initControls();
    };
    
    Demo.circleStack = function() {
        var _world = _engine.world;
        
        Demo.reset();
        
        /*var stack = Composites.stack(100, 100, 1, 1, 20, 0, function(x, y, column, row) {
            return Bodies.circle(x, y, 20);
        });*/
        var ball = Bodies.circle(100, 100, 50);
        
        World.add(_world, ball);
        
        var renderOptions = _engine.render.options;
    };
    
    Demo.mixed = function() {
        var _world = _engine.world;

        Demo.reset();
        var stack = Composites.stack(10, 10, 1, 4, 0, 0, function(x, y, column, row) {
            var sides = Math.round(Common.random(1, 8));

            // triangles can be a little unstable, so avoid until fixed
            // TODO: make triangles more stable
            sides = (sides === 3) ? 4 : sides;

            // round the edges of some bodies
            var chamfer = null;
            if (sides > 2 && Math.random() > 0.7) {
                chamfer = {
                    radius: 10
                };
            }

           /*switch (Math.round(Common.random(0, 1))) {
            case 0:
                if (Math.random() < 0.8) {
                    return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), { chamfer: chamfer });
                } else {
                    return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), { chamfer: chamfer });
                }
                break;*/
            //case 1:
                return Bodies.polygon(x, y, sides, Common.random(25, 50), { chamfer: chamfer });
            //}
        });

        World.add(_world, stack);
        
        var renderOptions = _engine.render.options;
    };
    
    Demo.reset = function() {
        var _world = _engine.world;
        
        World.clear(_world);
        Engine.clear(_engine);

        // clear scene graph (if defined in controller)
        var renderController = _engine.render.controller;
        if (renderController.clear)
            renderController.clear(_engine.render);

        // clear all scene events
        for (var i = 0; i < _sceneEvents.length; i++)
            Events.off(_engine, _sceneEvents[i]);
        _sceneEvents = [];

        // reset id pool
        Common._nextId = 0;

        // reset mouse offset and scale (only required for Demo.views)
        Mouse.setScale(_engine.input.mouse, { x: 1, y: 1 });
        Mouse.setOffset(_engine.input.mouse, { x: 0, y: 0 });

        _engine.enableSleeping = false;
        _engine.world.gravity.y = 0;
        _engine.world.gravity.x = 0;
        _engine.timing.timeScale = 1;

        var offset = 5;
        World.add(_world, [
            Bodies.rectangle(400, -offset, window.innerWidth + 2 * offset, 50.5, { isStatic: true }),
            Bodies.rectangle(400, window.innerHeight + offset, window.innerWidth + 2 * offset, 50.5, { isStatic: true }),
            Bodies.rectangle(window.innerWidth + offset, 300, 50.5, window.innerHeight + 2 * offset, { isStatic: true }),
            Bodies.rectangle(-offset, 300, 50.5, window.innerHeight + 2 * offset, { isStatic: true })
        ]);

        _mouseConstraint = MouseConstraint.create(_engine);
        World.add(_world, _mouseConstraint);
        
        var renderOptions = _engine.render.options;
        renderOptions.wireframes = true;
        renderOptions.hasBounds = false;
        renderOptions.showDebug = false;
        renderOptions.showBroadphase = false;
        renderOptions.showBounds = false;
        renderOptions.showVelocity = false;
        renderOptions.showCollisions = false;
        renderOptions.showAxes = false;
        renderOptions.showPositions = false;
        renderOptions.showAngleIndicator = true;
        renderOptions.showIds = false;
        renderOptions.showShadows = false;
        renderOptions.background = '#fff';

        if (_isMobile)
            renderOptions.showDebug = true;
    };
    
    Demo.initControls = function() {
        var demoSelect = document.getElementById('demo-select'),
            demoReset = document.getElementById('demo-reset');

        // create a Matter.Gui
        if (!_isMobile && Gui) {
            _gui = Gui.create(_engine);

            // need to add mouse constraint back in after gui clear or load is pressed
            Events.on(_gui, 'clear load', function() {
                _mouseConstraint = MouseConstraint.create(_engine);
                World.add(_engine.world, _mouseConstraint);
            });
        }

        // create a Matter.Inspector
        if (!_isMobile && Inspector && _useInspector) {
            _inspector = Inspector.create(_engine);

            Events.on(_inspector, 'import', function() {
                _mouseConstraint = MouseConstraint.create(_engine);
                World.add(_engine.world, _mouseConstraint);
            });

            Events.on(_inspector, 'play', function() {
                _mouseConstraint = MouseConstraint.create(_engine);
                World.add(_engine.world, _mouseConstraint);
            });

            Events.on(_inspector, 'selectStart', function() {
                _mouseConstraint.constraint.render.visible = false;
            });

            Events.on(_inspector, 'selectEnd', function() {
                _mouseConstraint.constraint.render.visible = true;
            });
        }

        // go fullscreen when using a mobile device
        if (_isMobile) {
            var body = document.body;

            body.className += ' is-mobile';
            _engine.render.canvas.addEventListener('touchstart', Demo.fullscreen);

            var fullscreenChange = function() {
                var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;

                // delay fullscreen styles until fullscreen has finished changing
                setTimeout(function() {
                    if (fullscreenEnabled) {
                        body.className += ' is-fullscreen';
                    } else {
                        body.className = body.className.replace('is-fullscreen', '');
                    }
                }, 2000);
            };

            document.addEventListener('webkitfullscreenchange', fullscreenChange);
            document.addEventListener('mozfullscreenchange', fullscreenChange);
            document.addEventListener('fullscreenchange', fullscreenChange);
        }
    };
    
    Demo.init();
}
palet.prototype.destroy = function(callBack){
    self = null;
    callBack();
}