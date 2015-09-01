var self = null;
function discs(){
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.cubes = {};
    this.preview = null;
    this.cube_size = 3;
    this._current_level = Math.floor(Math.random()*discs_levels.length);
    this._good_response = 0;
    this.colors = [];
    this.screen_size = {width:1200, height:600};
    this.party = {hits:0, great:0, wrong:0, start:new Date().getTime(), delay:6000};
    this.is_mouse_down = false;
    self = this;
    this.init();
}
discs.prototype.init = function(){
    
}
discs.prototype.create_interface = function(){
    $('#choice_4').css({
        "left":self.screen_size.width/2,
        "top":0,
        "width":self.screen_size.width/4,
        "height":self.screen_size.height/2
    });
    $('#choice_3').css({
        "left":self.screen_size.width/2 + (self.screen_size.width/4),
        "top":0,
        "width":self.screen_size.width/4,
        "height":self.screen_size.height/2
    });
    $('#choice_2').css({
        "left":self.screen_size.width/2,
        "top":self.screen_size.height/2,
        "width":self.screen_size.width/4,
        "height":self.screen_size.height/2
    });
    $('#choice_1').css({
        "left":self.screen_size.width/2 + (self.screen_size.width/4),
        "top":self.screen_size.height/2,
        "width":self.screen_size.width/4,
        "height":self.screen_size.height/2
    });
    $('#choice_1, #choice_2, #choice_3, #choice_4').on('click', function(){
        if(parseInt($(this).attr('data-response')) === self._good_response){
            self.play_good();
            self.party.great++;
        }else{
            self.play_wrong();
            self.party.wrong++;
        }
        self.party.hits++;
        self.create_level();
    });
        
    self.scene = new THREE.Scene();
    //self.camera = new THREE.OrthographicCamera( self.screen_size.width / - 2, self.screen_size.width / 2, self.screen_size.height / 2, self.screen_size.height / - 2, 1, 1000 );
	//self.camera = new THREE.PerspectiveCamera( 75, self.screen_size.width/self.screen_size.height, 0.1, 10000 );
    var aspect = self.screen_size.width / self.screen_size.height;
    var d = 20;
    self.camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, 1, 1000 );
    self.camera.position.set( 0, 0, 0 ); // all components equal
    
    //CanvasRenderer
	self.renderer = new THREE.WebGLRenderer();
    self.renderer.setClearColor( 0x465FC4 );
    self.renderer.setPixelRatio( window.devicePixelRatio );
    self.renderer.setSize( self.screen_size.width, self.screen_size.height );
	$('.app_content').append( self.renderer.domElement );
    
    $('.app_content canvas').attr('id', 'canvas_game');
    self.create_level();
    self.launch_game();
    self.camera.position.z = 50;

    document.addEventListener( 'mousedown', self.onDocumentMouseDown, false );
    document.addEventListener( 'touchstart', self.onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', self.onDocumentTouchMove, false );
    
	self.render();
}
discs.prototype.launch_game = function(){
    self.party = {hits:0, great:0, wrong:0, start:new Date().getTime(), delay:30000};
}
discs.prototype.play_good = function(){
    TweenMax.set($('#good'), {scaleX:0, scaleY:0});
    $('#good').css('display', 'block');
    TweenMax.to($('#good'), .3, {scaleX:1, scaleY:1, ease:Back.easeOut, onComplete:function(){
        TweenMax.to($('#good'), .3, {scaleX:0, scaleY:0, ease:Back.easeIn, onComplete:function(){
            TweenMax.set($('#good'), {scaleX:0, scaleY:0});
        }, delay:.1});
    }});
}
discs.prototype.play_wrong = function(){
    TweenMax.set($('#wrong'), {scaleX:0, scaleY:0});
    $('#wrong').css('display', 'block');
    TweenMax.to($('#wrong'), .3, {scaleX:1, scaleY:1, ease:Elastic.easeOut, onComplete:function(){
        TweenMax.to($('#wrong'), .3, {scaleX:0, scaleY:0, ease:Back.easeIn, onComplete:function(){
            TweenMax.set($('#wrong'), {scaleX:0, scaleY:0});
        }, delay:.1});
    }});
}
discs.prototype.destroy_all = function(){
    $.each(_.keys(self.cubes), function(i, cube){
        var cur_cube = self.scene.getObjectByName("cube_"+cube); 
        cur_cube.geometry.dispose();
        //cur_cube.material.dispose();
        //cur_cube.texture.dispose();
        self.scene.remove( cur_cube );
        delete cur_cube;
    });
    var preview = self.scene.getObjectByName("preview");
    self.scene.remove(preview);
    delete preview;
    var choice_1 = self.scene.getObjectByName("choice_1");
    self.scene.remove(choice_1);
    delete choice_1;
    var choice_2 = self.scene.getObjectByName("choice_2");
    self.scene.remove(choice_2);
    delete choice_2;
    var choice_3 = self.scene.getObjectByName("choice_3");
    self.scene.remove(choice_3);
    delete choice_3;
    var choice_4 = self.scene.getObjectByName("choice_4");
    self.scene.remove(choice_4);
    delete choice_4;
}
discs.prototype.create_level = function(){
    if(typeof self.preview !== undefined){
        self.destroy_all();
        //self.scene.remove( self.preview );
    }
    delete self.cubes;
    self.cubes = {};
    self.colors = [
        parseInt(colors[_.keys(colors)[1]].replace('#', '')),
        0xfff000,
        0xffff00,
        0xffff00
    ];
    self._current_level = Math.floor(Math.random()*discs_levels.length);
    
    /*
    self._current_level++;
    if(self._current_level === discs_levels.length){
        self._current_level = 0;
    }
    */
    
    var other_levels = [];
    for(var i=0; i<discs_levels.length; i++){
        if(i!== self._current_level){
            other_levels.push(i);
        }
    }
    self.create_preview();
    var p = 0;
    var l = 0;
    var next_level = self._current_level+1;
    self._good_response = Math.floor(Math.random()*4)+1;
    for(var i=1; i<5; i++){
        if(i === self._good_response){
            self.create_choices(i, self._current_level);
        }else{
            if(next_level === discs_levels.length){
                next_level = 0;
            }
            /* RANDOM PHASE TEST */
            //var lvl_random = Math.floor(Math.random()*other_levels.length);
            //self.create_choices(other_levels[lvl_random]);
            self.create_choices(i, next_level);
            next_level++;
        }
    }
    var ref = {x:((self.screen_size.width))/100, y:((self.screen_size.width))/100};
    self['choice_1'].position.x = 11;
    self['choice_1'].position.y = 8;
    self['choice_2'].position.x = 30;
    self['choice_2'].position.y = 8;
    
    self['choice_3'].position.x = 11;
    self['choice_3'].position.y = -12;
    self['choice_4'].position.x = 30;
    self['choice_4'].position.y = -12;
    
    TweenMax.to(self.preview.scale,.4,{x:1,y:1,z:1, delay:.2});
    TweenMax.to(self.choice_1.scale,.4,{x:1,y:1,z:1, delay:.3});
    TweenMax.to(self.choice_2.scale,.4,{x:1,y:1,z:1, delay:.4});
    TweenMax.to(self.choice_3.scale,.4,{x:1,y:1,z:1, delay:.5});
    TweenMax.to(self.choice_4.scale,.4,{x:1,y:1,z:1, delay:.6});
        
    $('.choice').css('display', 'block');
}
discs.prototype.create_preview = function(){
    self.preview = new THREE.Object3D();//create an empty container
    self.preview.name = "preview";
    self.scene.add( self.preview );
    self.preview.scale.x = self.preview.scale.y = self.preview.scale.z = 0;
    
    /* construction du socle */
    var circle_geom = new THREE.CircleGeometry( 10, 36 );
    var circle_mat = new THREE.MeshBasicMaterial({
        color:0xffffff
    });
    var circle = new THREE.Mesh( circle_geom, circle_mat );
    circle.position.y = -2;
    circle.rotation.x = -(Math.PI / 2);
    /* ajout d'un point pour l'angle du socle */
    var dot_geom = new THREE.CircleGeometry( 1, 3 );
    var dot_mat = new THREE.MeshBasicMaterial({
        color:0xffffff
    });
    var dot = new THREE.Mesh( dot_geom, dot_mat );
    dot.position.y = -11;
    dot.rotation.z = .6;
    circle.add(dot);
    self.preview.add(circle);
    
    self.preview.position.x = -20;
    self.preview.position.y = -4;
	//self.camera.lookAt( self.scene.position );
    self.preview.rotation.x = .4;
    
    var startX = -((self.cube_size*2) - (self.cube_size/2));
    var startY = 0;
    var startZ = -((self.cube_size*2) - (self.cube_size/2));
    var setX = 0;
    var setY = 0;
    var setZ = 0;
    //discs_levels[self._current_level;
    for(var y=0; y<discs_levels[self._current_level].length; y++){
        for(var x=0; x<discs_levels[self._current_level][y].length; x++){
            for(var z=0; z<discs_levels[self._current_level][y][x].length; z++){
                if(discs_levels[self._current_level][y][x][z] > 0){
                    var geometry = new THREE.BoxGeometry(
                        self.cube_size,self.cube_size,self.cube_size,0,0,0
                    );
                    var material = new THREE.MeshBasicMaterial(
                        { 
                            color: parseInt(self.colors[discs_levels[self._current_level][y][x][z]]),
                            vertexColors :0xFFF000,
                            skinning :false,
                            wireframeLinewidth :2,
                            map: new THREE.ImageUtils.loadTexture("../../pages/discs/images/rect_borders.png")
                            //wireframe :true
                        }
                    );
                    var current_cube = _.keys(self.cubes).length;
                    self.cubes[current_cube] = new THREE.Mesh( geometry, material );
                    self.cubes[current_cube].material.shading = THREE.SmoothShading;
                    self.cubes[current_cube].position.x = setX + startX;
                    self.cubes[current_cube].position.y = setY + startY;
                    self.cubes[current_cube].position.z = setZ + startZ;
                    self.cubes[current_cube].name = "cube_"+current_cube;
                    self.preview.add( self.cubes[current_cube] );
                }
                setX+=self.cube_size;
                if(setX === self.cube_size*4){
                    setZ+=self.cube_size;
                    setX =0;
                }
                if(setZ === self.cube_size*4){
                    setZ =0;
                    setY+=self.cube_size;
                }   
            }    
        }
    }
}
discs.prototype.create_choices = function(id, lvl_id){
    if(typeof self["choice_"+id] !== undefined){
        self.scene.remove( self["choice_"+id] );
    }
    self["choice_"+id] = new THREE.Object3D();//create an empty container
    self.scene.add( self["choice_"+id] );
    self["choice_"+id].scale.x = self["choice_"+id].scale.y = self["choice_"+id].scale.z = 0;
    self["choice_"+id].name = "choice_"+id;
    self["choice_"+id].rotation.x = .4;
    self["choice_"+id].rotation.y = .8;
    
    /* construction du socle */
    var circle_geom = new THREE.CircleGeometry( 6, 36 );
    var circle_mat = new THREE.MeshBasicMaterial({
        color:0xffffff
    });
    var circle = new THREE.Mesh( circle_geom, circle_mat );
    circle.position.y = -1;
    circle.rotation.x = -(Math.PI / 2);
    /* ajout d'un point pour l'angle du socle */
    var dot_geom = new THREE.CircleGeometry( 1, 3 );
    var dot_mat = new THREE.MeshBasicMaterial({
        color:0xffffff
    });
    var dot = new THREE.Mesh( dot_geom, dot_mat );
    dot.position.y = -7;
    dot.rotation.z = .6;
    circle.add(dot);
    self["choice_"+id].add(circle);
    
    var choice_size = 2;
    var startX = -((choice_size*2) - (choice_size/2));
    var startY = 0;
    var startZ = -((choice_size*2) - (choice_size/2));
    var setX = 0;
    var setY = 0;
    var setZ = 0;
    //discs_levels[self._current_level;
    for(var y=0; y<discs_levels[lvl_id].length; y++){
        for(var x=0; x<discs_levels[lvl_id][y].length; x++){
            for(var z=0; z<discs_levels[lvl_id][y][x].length; z++){
                var num = discs_levels[lvl_id][y][x][z];
                /*if(real === false){
                    num = Math.floor(Math.random()*2);
                }*/
                if(num > 0){
                    var geometry = new THREE.BoxGeometry(
                        choice_size,
                        choice_size,
                        choice_size,
                        0,
                        0,
                        0
                    );
                    var material = new THREE.MeshBasicMaterial(
                        { 
                            color: parseInt(self.colors[num]),
                            vertexColors :0xFFF000,
                            skinning :false,
                            wireframeLinewidth :2,
                            map: new THREE.ImageUtils.loadTexture("../../pages/discs/images/rect_borders.png")
                            //wireframe :true
                        }
                    );
                    var current_cube = _.keys(self.cubes).length;
                    self.cubes[current_cube] = new THREE.Mesh( geometry, material );
                    
                    self.cubes[current_cube].material.shading = THREE.SmoothShading;
                    
                    self.cubes[current_cube].position.x = setX + startX;
                    self.cubes[current_cube].position.y = setY + startY;
                    self.cubes[current_cube].position.z = setZ + startZ;
                    self.cubes[current_cube].name = 'cube_'+current_cube;
                    self["choice_"+id].add( self.cubes[current_cube] );
                }
                setX+=choice_size;
                if(setX === choice_size*4){
                    setZ+=choice_size;
                    setX =0;
                }
                if(setZ === choice_size*4){
                    setZ =0;
                    setY+=choice_size;
                }   
            }    
        }
    }
}

discs.prototype.render = function(){
    if(new Date().getTime() >= self.party.start+self.party.delay){
        cancelAnimationFrame(self.render);
        alert('fin de la partie hits : '+self.party.hits+' greats : '+self.party.great+' wrongs : '+self.party.wrong+' stats ');
        return false;//cancelAnimationFrame(self.render);// Stop the animation
    }else{
        self.set_rotation_preview();
        self.renderer.render(self.scene, self.camera);
        requestAnimationFrame( self.render );
    }
}
discs.prototype.set_rotation_preview = function(){
    if(self.is_mouse_down){
        var group = self.preview;
        group.rotation.y += ( targetRotationX - group.rotation.y ) * 0.1;
        finalRotationY = (targetRotationY - group.rotation.x); 
        /*if (group.rotation.x  <= 1 && group.rotation.x >= -1 ) {
            group.rotation.x += finalRotationY * 0.1;
        }
        if (group.rotation.x  > 1 ) {
            group.rotation.x = 1
        }
        if (group.rotation.x  < -1 ) {
            group.rotation.x = -1
        }*/
    }else{
        if(typeof self.preview !== "undefined"){
            self.preview.rotation.y += 0.05;
            finalRotationY = self.preview.rotation.y;
            targetRotationX = self.preview.rotation.y;
        }
    }
    for(var i=1; i<5; i++){
        self['choice_'+i].rotation.y -= 0.01;
    }
}
discs.prototype.pause = function(){
}
discs.prototype.play = function(){
}
discs.prototype.destroy = function(callBack){
    if(typeof self.preview !== undefined){
        self.destroy_all();
        //self.scene.remove( self.preview );
    }
    cancelAnimationFrame(self.render);// Stop the animation
    
    //self.renderer.domElement.addEventListener('dblclick', null, false); //remove listener to render
    self.scene = null;
    self.projector = null;
    self.camera = null;
    self.controls = null;
    
    document.removeEventListener( 'mousemove', self.onDocumentMouseMove, false );
    document.removeEventListener( 'mouseup', self.onDocumentMouseUp, false );
    document.removeEventListener( 'mouseout', self.onDocumentMouseOut, false );
    callBack();
}

/* ------ ADD MOUSE EVENTS ON DOCUMENT OR ROTATE PREVIEW -------- */
var targetRotationX = 0;
var targetRotationOnMouseDownX = 0;
 
var targetRotationY = 0;
var targetRotationOnMouseDownY = 0;
 
var mouseX = 0;
var mouseXOnMouseDown = 0;
 
var mouseY = 0;
var mouseYOnMouseDown = 0;

var windowHalfX = 0;
var windowHalfY = 0;


setTimeout(function(){
    windowHalfX = self.screen_size.width / 2;
    windowHalfY = self.screen_size.height / 2;
}, 500);
var finalRotationY;

discs.prototype.onDocumentMouseDown = function( event ) {
    console.log("down");
    self.is_mouse_down = true;
    
    event.preventDefault();
    
    document.addEventListener( 'mousemove', self.onDocumentMouseMove, false );
    document.addEventListener( 'mouseup', self.onDocumentMouseUp, false );
    document.addEventListener( 'mouseout', self.onDocumentMouseOut, false );
    
    mouseXOnMouseDown = event.clientX - windowHalfX;
    targetRotationOnMouseDownX = targetRotationX;
    
    mouseYOnMouseDown = event.clientY - windowHalfY;
    targetRotationOnMouseDownY = targetRotationY;
    
}

discs.prototype.onDocumentMouseMove = function( event ) {
    
    self.is_mouse_down = true;
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
    
    targetRotationY = targetRotationOnMouseDownY + (mouseY - mouseYOnMouseDown) * 0.02;
    targetRotationX = targetRotationOnMouseDownX + (mouseX - mouseXOnMouseDown) * 0.02;
    
}
 
discs.prototype.onDocumentMouseUp = function( event ) {
    self.is_mouse_down = false;
    document.removeEventListener( 'mousemove', self.onDocumentMouseMove, false );
    document.removeEventListener( 'mouseup', self.onDocumentMouseUp, false );
    document.removeEventListener( 'mouseout', self.onDocumentMouseOut, false );
    
}
 
discs.prototype.onDocumentMouseOut = function( event ) {
    
    self.is_mouse_down = false;
    document.removeEventListener( 'mousemove', self.onDocumentMouseMove, false );
    document.removeEventListener( 'mouseup', self.onDocumentMouseUp, false );
    document.removeEventListener( 'mouseout', self.onDocumentMouseOut, false );
    
}
 
discs.prototype.onDocumentTouchStart = function( event ) {
    
    if ( event.touches.length == 1 ) {
        self.is_mouse_down = true;
       
        event.preventDefault();
        
        mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
        targetRotationOnMouseDownX = targetRotationX;
        
        mouseYOnMouseDown = event.touches[ 0 ].pageY - windowHalfY;
        targetRotationOnMouseDownY = targetRotationY;
        
    }
    
}
discs.prototype.onDocumentTouchMove = function( event ) {
    if ( event.touches.length == 1 ) {
        
        self.is_mouse_down = true;
        event.preventDefault();
        
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        targetRotationX = targetRotationOnMouseDownX + ( mouseX - mouseXOnMouseDown ) * 0.05;
        
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
        targetRotationY = targetRotationOnMouseDownY + (mouseY - mouseYOnMouseDown) * 0.05;
        
    }
}