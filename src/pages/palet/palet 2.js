var self;
function palet(){
    self = this;
    /* ------ DEFAULT PHYSIC PROPERTIES FOR ALL ------ */
    this.phisyc = {
        density:1,
        restitution:0.5,
        friction:0.1,
        velocity:{x:120, y:180}
    }
    
    /* ------- BOX2D JS VARS ------- */
    this.box2dUtils;		// classe utilitaire
	this.world; 			// "monde" 2dbox
	this.canvas;			// notre canvas
	this.canvasWidth;	// largeur du canvas
	this.canvasHeight;	// hauteur du canvas
	this.context;		// contexte 2d
	this.SCALE = 30;		// Èchelle
	
    this.physiclistener = null;
	// "Includes" box2dweb
	this.b2Vec2 = Box2D.Common.Math.b2Vec2;
	this.b2AABB = Box2D.Collision.b2AABB;
	this.b2Body = Box2D.Dynamics.b2Body;
    this.b2Listener = Box2D.Dynamics.b2ContactListener;
    
    this.b2player1 = null;
    this.b2player2 = null;
    this.b2ball = null;
    
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
        //self.box2dUtils.createMouseJoint(self.world, self.b2player1.GetBody(), e.stageX, e.stageY, {});
        self.stage.update();
    });
    self.player1.x = 100;
    self.player1.y = window.innerHeight/2;
    
    self.player2 = new createjs.Shape();
    self.player2.graphics.beginFill(colors.green).drawCircle(0,0,50);
    self.player2.on("pressmove",function(e) {
        e.currentTarget.x = e.stageX;
        e.currentTarget.y = e.stageY;
        //self.box2dUtils.createMouseJoint(self.world, self.b2player2.GetBody(), e.stageX, e.stageY, {});
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
    
    self.set_physic_engine();
}
palet.prototype.create_interface = function(){
    $('#hockey_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    $('#debug_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    this.init_b2d();
    this.init();
}
palet.prototype.impulse = function(angle, impulse){
    self.b2ball.GetBody().ApplyImpulse(
        new self.b2Vec2(-10, -12),                   // vecteur d'impulsion
        self.b2ball.GetBody().GetWorldCenter()  // point d'application  
    ); 
}
palet.prototype.init_b2d = function(){
    this.box2dUtils = new Box2dUtils(this.SCALE);
    // RÈcupÈrer la canvas, ses propriÈtÈs et le contexte 2d
    this.canvas = $('#debug_canvas').get(0);
    this.canvasWidth = parseInt(this.canvas.width);
	this.canvasHeight = parseInt(this.canvas.height);
    this.canvasPosition = $(this.canvas).position();
    this.context = this.canvas.getContext('2d');
    this.world = this.box2dUtils.createWorld(this.context);
}
palet.prototype.set_physic_engine = function(){
    self.clearWorld(function(reset){
		if (reset) {
			self.setWorldBounds();
            self.b2player1 = self.box2dUtils.createBall(self.world, 100, window.innerHeight/2, 50, 'static', 'player1');
            self.b2player1.SetDensity(self.phisyc.density);
            self.b2player1.SetRestitution(self.phisyc.restitution);
            self.b2player1.SetFriction(self.phisyc.friction);
            self.b2player1.GetBody().SetLinearVelocity(self.phisyc.velocity);
            self.b2player1.GetBody().SetSleepingAllowed(false);	// l'objet player n'est pas autorisÈ ‡ passer au repos
            self.b2player1.GetBody().SetFixedRotation(true);
            
            self.b2joint1 = self.box2dUtils.createBall(self.world, 100, window.innerHeight/2, 50, 'static', 'joint1');
            //self.box2dUtils.createDistanceJoint(self.world, self.b2player1, self.b2joint1, {});
            
            self.b2player2 = self.box2dUtils.createBall(self.world, window.innerWidth - 100, window.innerHeight/2, 50, 'static', 'player2');
            self.b2player2.SetDensity(self.phisyc.density);
            self.b2player2.SetRestitution(self.phisyc.restitution);
            self.b2player2.SetFriction(self.phisyc.friction);
            self.b2player2.GetBody().SetLinearVelocity(self.phisyc.velocity);
            self.b2player2.GetBody().SetSleepingAllowed(false);	// l'objet player n'est pas autorisÈ ‡ passer au repos
            self.b2player2.GetBody().SetFixedRotation(true);
            
            self.b2joint2 = self.box2dUtils.createBall(self.world, window.innerWidth - 100, window.innerHeight/2, 50, 'static', 'joint2');
            //self.box2dUtils.createDistanceJoint(self.world, self.b2player2, self.b2joint2, {});
            
            
            self.b2ball = self.box2dUtils.createBall(self.world, window.innerWidth/2, window.innerHeight/2, 40, 'dynamic', 'ball');
            self.b2ball.SetDensity(self.phisyc.density);
            self.b2ball.SetRestitution(self.phisyc.restitution);
            self.b2ball.SetFriction(self.phisyc.friction);
            //self.b2ball.GetBody().SetLinearVelocity(self.phisyc.velocity);
            self.b2ball.GetBody().SetSleepingAllowed(false);	// l'objet player n'est pas autorisÈ ‡ passer au repos
            self.b2ball.GetBody().SetFixedRotation(true);
            
            //Add listeners for contact
            self.physiclistener = new self.b2Listener;
            
            self.physiclistener.BeginContact = function(contact) {
                var first_collider = contact.GetFixtureA().GetUserData();
                var second_collider = contact.GetFixtureB().GetUserData();
                var first_pos = contact.GetFixtureA().GetBody().GetPosition();
                var second_pos = contact.GetFixtureB().GetBody().GetPosition();
                if(first_collider === "ball" || second_collider === "ball"){
                    if(first_collider.indexOf('player') != -1 || second_collider.indexOf('player') != -1){
                        var px = first_pos.x - second_pos.x;
                        var py = first_pos.x - second_pos.y;
                        var rad = Math.atan2(py, px);
                        var angle = rad * (180 / Math.PI);
                        
                        var force = 100;
                        var imp = new self.b2Vec2(
                            (Math.cos(angle * Math.PI/180)) * force,
                            (Math.sin(angle * Math.PI/180)) * force
                        );
                        console.log((Math.cos(angle * Math.PI/180)) * force);
                        console.log((Math.sin(angle * Math.PI/180)) * force);
                        //var imp = 50 * imp;
                        self.b2ball.GetBody().ApplyImpulse(imp, self.b2ball.GetBody().GetWorldCenter());
                        console.log('angle ::: ', angle);
                    }
                }
            }

            self.physiclistener.EndContact = function(contact) {
                //console.log("EndContact :: ", contact.GetFixtureA().GetUserData());
            }

            self.physiclistener.PostSolve = function(contact, impulse) {
                if (contact.GetFixtureA().GetBody().GetUserData() == 'ball' || contact.GetFixtureB().GetBody().GetUserData() == 'ball') {
                    var impulse = impulse.normalImpulses[0];
                    if (impulse < 0.2) return; //threshold ignore small impacts
                    self.world.ball.impulse = impulse > 0.6 ? 0.5 : impulse;
                    console.log(self.world.ball.impulse);
                }
            }

            self.physiclistener.PreSolve = function(contact, oldManifold) {
                // PreSolve
                //console.log("PreSolve");
            }

            self.world.SetContactListener(self.physiclistener);
		}
	}); 
}
palet.prototype.clearWorld = function(callback) {
	clearInterval(self.intervalId);
	for (var j = self.world.GetJointList() ; j; j = j.GetNext()) {
		self.world.DestroyJoint(j);
	}
	for (var b = self.world.GetBodyList() ; b; b = b.GetNext()) {
		self.world.DestroyBody(b);
	}
	self.intervalId = window.setInterval(self.update, 1000 / 60);
	callback(true);
}
palet.prototype.update = function() {
    //self.b2player2.GetBody().SetPosition({x:e.currentTarget.x/self.SCALE, y:e.currentTarget.y/self.SCALE});
    
    var ballPos = self.b2ball.GetBody().GetPosition();
    self.ball.x = ballPos.x * self.SCALE;
    self.ball.y = ballPos.y * self.SCALE;
    
    /*var p1Pos = self.b2player1.GetBody().GetPosition();
    self.player1.x = p1Pos.x * self.SCALE;
    self.player1.y = p1Pos.y * self.SCALE;
    
    var p2Pos = self.b2player2.GetBody().GetPosition();
    self.player2.x = p2Pos.x * self.SCALE;
    self.player2.y = p2Pos.y * self.SCALE;*/
    
    self.b2player1.GetBody().SetPosition({x:self.player1.x/self.SCALE, y:self.player1.y/self.SCALE});
    self.b2player2.GetBody().SetPosition({x:self.player2.x/self.SCALE, y:self.player2.y/self.SCALE});
        
    
	self.world.Step(1 / 60,  10, 10);
	self.world.DrawDebugData();
	self.world.ClearForces();
    
    self.stage.update();
}
palet.prototype.setWorldBounds = function() {
	// CrÈer le "sol" et le "plafond" de notre environnement physique
	ground = self.box2dUtils.createBox(self.world, 0, self.canvasHeight - 5, self.canvasWidth, 10, null, true, 'ground');
	ground.SetDensity(self.phisyc.density);
    ground.SetRestitution(self.phisyc.restitution);
    ground.SetFriction(self.phisyc.friction);
    ground.GetBody().SetLinearVelocity(self.phisyc.velocity);
    ground.GetBody().SetSleepingAllowed(false);	// l'objet player n'est pas autorisÈ ‡ passer au repos
    ground.GetBody().SetFixedRotation(true);
    
    ceiling = self.box2dUtils.createBox(self.world, 0, -5, self.canvasWidth, 10, null, true, 'ceiling');
	ceiling.SetDensity(self.phisyc.density);
    ceiling.SetRestitution(self.phisyc.restitution);
    ceiling.SetFriction(self.phisyc.friction);
    ceiling.GetBody().SetLinearVelocity(self.phisyc.velocity);
    ceiling.GetBody().SetSleepingAllowed(false);	// l'objet player n'est pas autorisÈ ‡ passer au repos
    ceiling.GetBody().SetFixedRotation(true);
	// CrÈer les "murs" de notre environnement physique
	leftWall = self.box2dUtils.createBox(self.world, -5, 0, 10, self.canvasHeight, null, true, 'leftWall');
	leftWall.SetDensity(self.phisyc.density);
    leftWall.SetRestitution(self.phisyc.restitution);
    leftWall.SetFriction(self.phisyc.friction);
    leftWall.GetBody().SetLinearVelocity(self.phisyc.velocity);
    leftWall.GetBody().SetSleepingAllowed(false);	// l'objet player n'est pas autorisÈ ‡ passer au repos
    leftWall.GetBody().SetFixedRotation(true);
	
    rightWall = self.box2dUtils.createBox(self.world, self.canvasWidth + 5, 0, 10, self.canvasHeight, null, true, 'rightWall');
    rightWall.SetDensity(self.phisyc.density);
    rightWall.SetRestitution(self.phisyc.restitution);
    rightWall.SetFriction(self.phisyc.friction);
    rightWall.GetBody().SetLinearVelocity(self.phisyc.velocity);
    rightWall.GetBody().SetSleepingAllowed(false);	// l'objet player n'est pas autorisÈ ‡ passer au repos
    rightWall.GetBody().SetFixedRotation(true);
	
}
palet.prototype.destroy = function(callBack){
    this.b2player1 = null;
    this.b2player2 = null;
    this.b2ball = null;
    this.player1 = null;
    this.player2 = null;
    this.ball = null;
    this.stage = null;
    clearInterval(self.intervalId);
    self = null;
    callBack();
}