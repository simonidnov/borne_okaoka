var navigation = {
    router  : null,
    page_properties : null,
    _current_page_name : null,
    _page_script : null,
    _last_page_menu : 0,
    _current_interface_color : colors.blue,
    init : function(){
        this.create_routes();
    },
    create_routes : function(){
        var Router = Backbone.Router.extend({
            routes:{
                '':'changepage',
                'page/:name':'changepage'
            },
            changepage : function(name){
                if(typeof name != "undeinfed"){
                    if(navigation._page_script === null || typeof navigation._page_script == "undefined"){
                        navigation.load_page(name);
                    }else{
                        navigation._page_script.destroy(function(){
                            navigation.remove_dependencies();
                            navigation.load_page(name);
                        });
                    }
                }else{
                    console.log('GET HOME PAGE ');
                }
            }
        });
        Backbone.emulateHTTP = true;
        this.router = new Router();
        Backbone.history.start();
        this.router.navigate('page/screensaver', {trigger:true, replace:true});
        $('#backbutton').off('tap, click').on('tap, click', function(){
            utilities.show_popup({color:navigation._current_interface_color, motion:"exit_game"}, function(e){
                if(e == 1){
                    navigation.router.navigate('page/menu', {trigger:true, replace:true});
                }
            });
        });
    },
    remove_dependencies : function(){
        var self = navigation;
        delete self._page_script;
        self._page_script = null;
        $.each(self.page_properties.dependencies, function(index, dependencie){
            delete dependencie.replace('.js', '');
            $('script[src="pages/'+self._current_page_name+'/'+dependencie+'"]').remove();
        });
        $.each(self.page_properties.styles, function(index, style){
            $('link[href="pages/'+self._current_page_name+'/'+style+'"]').remove();
        });
        $('.app_content').html('');
        $('head script').remove();
        $('head style').remove();
        self.page_properties = null;
    },
    load_page : function(page){
        if(page === null){
            return false;
        }
        //_current_interface_color
        TweenMax.to($('.app_content'), .5, {"backgroundColor"   :   navigation._current_interface_color});
        TweenMax.to($('#backbutton'), .5, {'backgroundColor'    :   navigation._current_interface_color});
        var self = this;
        self._current_page_name = page;
        $.ajax({
            dataType: "json",
            url: 'pages/'+page+'/descriptor.json',
            data: {},
            success: function(datas){
                self.page_properties = datas;
                self.load_styles(function(){
                    self.load_dependencies(function(){
                        self.load_content(function(){
                            self.init_current_page(function(){
                            });
                        });
                    });
                });
            }
        });
    },
    load_styles : function(callBack){
        var self = this;
        $.each(self.page_properties.styles, function(index, style){
            self.page_properties.styles[index] = "pages/"+self._current_page_name+"/"+style;
        });
        var queue = new createjs.LoadQueue();
            queue.on("complete", function(){this.destroy(); callBack();});
            queue.loadManifest(self.page_properties.styles, false);
            queue.load();
    },
    load_dependencies : function(callBack){
        var self = this;
        $.each(self.page_properties.dependencies, function(index, dependencie){
            self.page_properties.dependencies[index] = "pages/"+self._current_page_name+"/"+dependencie;
        });
        var queue = new createjs.LoadQueue();
            queue.on("complete", function(){this.destroy(); callBack();});
            queue.loadManifest(self.page_properties.dependencies, false); // Note the 2nd argument that tells the queue not to start loading yet
            queue.load();
    },
    load_content : function(callBack){
        var self = this;
        $( ".app_content" ).load( "pages/"+self._current_page_name+"/"+self.page_properties.content, function() {
            callBack();
        });
    },
    init_current_page : function(callBack){
        if(typeof this.page_properties.motion !== "undefined"){
            $('.app_content').append('<div class="intro_motion" id="motion_draw"><canvas id="motion_canvas" width="900" height="400" style="background-color:rgba(0,0,0,0);"></canvas></div>');
            var self = this;
            
            TweenMax.set($('.intro_motion'), {scaleX:0, scaleY:0});
            TweenMax.to($('.intro_motion'), .5, {scaleX:1, scaleY:1, onComplete:function(){

            }, ease:Back.easeOut});
            //var canvas, stage, exportRoot;

            canvas = document.getElementById("motion_canvas");
            this.exportRoot = new lib[this.page_properties.motion]();
            this.stage = new createjs.Stage(canvas);
            this.stage.addChild(this.exportRoot);
            this.stage.update();
            //lib.properties.fps
            createjs.Ticker.setFPS(40);
            createjs.Ticker.addEventListener("tick", this.stage);
        }
        //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.dgreen});
        this._page_script = new window[this.page_properties.script_name];
        callBack();
    },
    intro_motion_stopped : function(){
        delete navigation.stage;
        delete navigation.exportRoot;
        //TweenMax.to($('.intro_motion'), .3, {rotation:20});
        TweenMax.to($('.intro_motion'), .8, {opacity:0, onComplete:function(){
            createjs.Ticker.removeEventListener("tick", navigation.stage);
            //createjs.Ticker.removeEventListener("tick", window['navigation']._page_script.stage);
            //delete window['navigation']._page_script.stage;
            //delete window['navigation']._page_script.exportRoot;
            if(typeof window['navigation']._page_script.create_interface !== "undefined"){
                window['navigation']._page_script.create_interface();
            }
            $('.intro_motion').remove();
            TweenMax.set($('#backbutton'), {scaleX:0, scaleY:0});
            $('#backbutton').css('display', 'block');
            TweenMax.to($('#backbutton'), .5, {scaleX:1, scaleY:1});
        }, ease:Back.easeIn});
    },
    refresh : function(){
        
    },
    destroy : function(){
        
    },
    kill : function(){
        
    }
}