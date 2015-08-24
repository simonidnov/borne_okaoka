var self = null;
var rg = null;
function running(){
    this.speed = 10;
    this.stage = null;
    this.hero = null;
    this.motion_is_playing = false;
    this.floor = [];
    this._current_obstacle = null;
    this._jumping_state = "invicible";
    this.stageSize = {
        width:window.innerWidth, 
        height:window.innerHeight, 
        floorHeight:window.innerHeight-(window.innerHeight/2+200),
        hero_x: 300
    };
    rg = this;
    self = this;
}
running.prototype.init = function(){
    $('#motion-runner').css({width:window.innerWidth+"px", height:window.innerHeight+"px"});
    $('#runningCanvas').attr('width', window.innerWidth+"px");
    $('#runningCanvas').attr('height', window.innerHeight+"px");
    self.stage = new createjs.Stage("runningCanvas");
    self.create_floor();
    self.create_watter_floor();
    createjs.Ticker.addEventListener("tick", self.handleTick);
    createjs.Ticker.setFPS(60);
    self.create_hero();
}
running.prototype.create_hero = function(){
    self.hero = new lib.hero_run();
    self.stage.addChild(self.hero);
    self.hero.x = self.stageSize.hero_x;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75;
    self.hero.setBounds(0,0,75,75);
}
running.prototype.create_floor = function(){
    var curFloor = self.floor.length;
    var floor_pos_x = 0;
    if(curFloor > 0){
        floor_pos_x = self.floor[curFloor-1].x + self.floor[curFloor-1].getBounds().width;
    }
    self.floor[curFloor] = new createjs.Shape();
    self.floor[curFloor].graphics.setStrokeStyle(2);
    self.floor[curFloor].graphics.beginStroke("#FFFFFF");
    /* --- DRAW FLOOR --- */
    self.floor[curFloor].graphics.moveTo(0, self.stageSize.height - self.stageSize.floorHeight);
    self.floor[curFloor].graphics.lineTo(self.stageSize.width, self.stageSize.height - self.stageSize.floorHeight);
    /* --- DRAW CEIL ---- */
    self.floor[curFloor].graphics.moveTo(0, self.stageSize.height/2 - 200);
    self.floor[curFloor].graphics.lineTo(self.stageSize.width, self.stageSize.height/2 - 200);
    
    self.floor[curFloor].graphics.endStroke();
    
    self.stage.addChild(self.floor[curFloor]);
    self.floor[curFloor].x = floor_pos_x;
    self.floor[curFloor].type = "floor";
    self.floor[curFloor].name = "floor";
    self.floor[curFloor].setBounds(0,0,self.stageSize.width,self.stageSize.height);
}
running.prototype.setFPS = function(fps){
    var curfps = {fps:createjs.Ticker.getFPS()};
    TweenMax.to(curfps, .3, {fps:fps, onUpdate:function(){
        createjs.Ticker.setFPS(Math.round(curfps.fps));
    }});
}
running.prototype.handleTick = function(){
    $.each(self.floor, function(i, floor){
        if(typeof self.floor[i] != "undefined"){
            self.floor[i].x-=self.speed;
            if(self.floor[i].x < -self.floor[i].getBounds().width){
                self.stage.removeChild(self.floor[i]);
                self.floor.splice(i, 1);
            }
            if(self.floor[i].type === "obstacle" && self.floor[i].x === self.hero.x+80){
                //self.setFPS(12);
                self._current_obstacle = self.floor[i];
                if(!self.motion_is_playing){
                    self.motion_is_playing = true;
                    switch(self._jumping_state){
                        case 'win':
                            self.floor[i].gotoAndPlay("win");
                            self.win_watter();
                            break;
                        case 'fail':
                            self.floor[i].gotoAndPlay("fail");
                            self.fail_watter();
                            break;
                        case 'fail_life':
                            self.floor[i].gotoAndPlay("fail_life");
                            self.fail_life_watter();
                            break;
                        case 'invicible':
                            self.floor[i].gotoAndPlay("invicible");
                            self.invicible();
                            break;
                    }
                    setTimeout(function(){
                        self.motion_is_playing = false;
                        //self.setFPS(50);
                    },3500);
                }
            }
        }
    });
    if(self.floor[self.floor.length-1].x <= self.stageSize.width - self.floor[self.floor.length-1].getBounds().width){
        if(self.floor[self.floor.length-1].type === "obstacle"){
            self.create_floor(); 
        }else{
            self.create_watter_floor(); 
        }
    }
    self.stage.update();
}
running.prototype.update = function(){
    
}
running.prototype.create_interface = function(){
    this.init();
}
running.prototype.setSpeed = function(s){
    self.speed = s;
}
running.prototype.play = function(){
    createjs.Ticker.addEventListener('tick', self.handleTick);
}
running.prototype.pause = function(){
    createjs.Ticker.removeEventListener('tick', self.handleTick);
}
running.prototype.destroy = function(callBack){
    createjs.Ticker.removeEventListener('tick', self.handleTick);
    delete self.stage;
    callBack();
}
/* ------------------ HERO STATE MOTIONS ----------------- */
running.prototype.run = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_run();
    self.hero.x = self.stageSize.hero_x;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75; 
    self.stage.addChild(self.hero);  
    self.hero.setBounds(0,0,75,75);
}
/* STAIR */
running.prototype.flip = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_flip();
    self.hero.x = self.stageSize.hero_x;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75;   
    self.stage.addChild(self.hero); 
    self.hero.setBounds(0,0,75,75);
}
running.prototype.fail = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_fail();
    self.hero.x = self.stageSize.hero_x;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75; 
    self.stage.addChild(self.hero);   
    self.hero.setBounds(0,0,75,75);
}
running.prototype.fail_life = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_fail_life();
    self.hero.x = self.stageSize.hero_x;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75; 
    self.stage.addChild(self.hero);   
    self.hero.setBounds(0,0,75,75);
}
/* WALL */
running.prototype.fail_wall = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_fail_wall();
    self.hero.x = self.stageSize.hero_x-50;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75;   
    self.stage.addChild(self.hero); 
    self.hero.setBounds(0,0,75,75);
}
running.prototype.win_wall = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_win_wall();
    self.hero.x = self.stageSize.hero_x;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75-100;  
    self.stage.addChild(self.hero);  
    self.hero.setBounds(0,0,75,175);
}
running.prototype.fail_life_wall = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_fail_life_wall();
    self.hero.x = self.stageSize.hero_x;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75;   
    self.stage.addChild(self.hero); 
    self.hero.setBounds(0,0,75,75);
}
/* WATTER */
running.prototype.fail_watter = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_fail_watter();
    self.hero.x = self.stageSize.hero_x-50;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75;  
    self.stage.addChild(self.hero);  
    self.hero.setBounds(0,0,75,75);
}
running.prototype.win_watter = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_win_watter();
    self.hero.x = self.stageSize.hero_x - 30;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75;   
    self.stage.addChild(self.hero); 
    self.hero.setBounds(0,0,75,75);
}
running.prototype.fail_life_watter = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_fail_life_watter();
    self.hero.x = self.stageSize.hero_x;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75;   
    self.stage.addChild(self.hero); 
    self.hero.setBounds(0,0,75,75);
}
/* INVICIBLE */
running.prototype.invicible = function(){
    self.stage.removeChild(self.hero);
    delete self.hero;
    self.hero = new lib.hero_invicible();
    self.hero.x = self.stageSize.hero_x;
    self.hero.y = self.stageSize.height-self.stageSize.floorHeight-75;   
    self.stage.addChild(self.hero); 
    self.hero.setBounds(0,0,75,75);
}
/* ---------------------- SPECIAL FLOOR OBSTACLE -------------------- */
running.prototype.create_watter_floor = function(){
    curFloor = self.floor.length;
    var fposx = self.stageSize.width;
    if(self.floor[curFloor-1] != "undefined"){
        fposx = self.floor[curFloor-1].x + self.floor[curFloor-1].getBounds().width;
        if(curFloor>1){
            fposx += self.speed;
        }
    }
    self.floor[curFloor] = new lib.watter_floor();
    self.floor[curFloor].x = fposx;
    self.floor[curFloor].y = self.stageSize.height-self.stageSize.floorHeight-600; 
    self.stage.addChild(self.floor[curFloor]); 
    self.floor[curFloor].type = "obstacle";
    self.floor[curFloor].name = "watter";
    self.floor[curFloor].setBounds(0,0,400,800);
}