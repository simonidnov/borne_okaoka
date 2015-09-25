var navigation = {
    router  : null,
    page_properties : null,
    _current_page_name : null,
    _page_script : null,
    _last_page_menu : 0,
    _switcher_last_date : null,
    _current_interface_color : colors.blue,
    _last_event : new Date().getTime(),
    settings : {
        "time_off":60000,
        "audio":{
            "effects":{
                "state":"on",
                "volume":100
            },
            "music":{
                "state":"on",
                "volume":100
            },
            "video":{
                "state":"on",
                "volume":100
            }
        },
        "data_storage":{
            "ws_uri":"http://okaoka.landscape-viewer.com/",
            "get":{
                "playlist":"playlist",
                "scores":"scores",
                "stats":"stats"
            },
            "post":{
                "pictures":"pictures",
                "scores":"scores",
                "stats":"stats"
            }
        }
    },
    init : function(){
        if(window.localStorage.getItem('okaoka_settings') === null){
            window.localStorage.setItem('okaoka_settings', JSON.stringify(navigation.settings));   
        }else{
            navigation.settings = JSON.parse(window.localStorage.getItem('okaoka_settings'));
        }
        //document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
        if(utilities.is_touch_screen()){
            $('body').on('touchstart', navigation.update_event);
        }else{
            $('body').on('mousedown', navigation.update_event);
        }
        this.check_activity();
        this.create_routes();
    },
    update_event : function(){
        navigation._last_event = new Date().getTime();  
    },
    check_activity : function(){
        if(navigation._current_page_name !== "screensaver" && navigation._current_page_name !== "video"  && navigation._current_page_name !== "switcher"){
            if(new Date().getTime() - navigation._last_event > 30000){
                //navigation.router.navigate('page/screensaver', {trigger:true, replace:true});
            }
        }
        setTimeout(function(){
            navigation.check_activity();
        }, 30000);
    },
    create_routes : function(){
        var Router = Backbone.Router.extend({
            routes:{
                '':'changepage',
                'page/:name':'changepage'
            },
            changepage : function(name){
                console.log('change page ', name);
                if(typeof name !== "undefined"){
                    console.log('name is defined');
                    if(navigation._page_script === null || typeof navigation._page_script == "undefined"){
                        console.log('load');
                        navigation.load_page(name);
                    }else{
                        console.log('destroy');
                        navigation._page_script.destroy(function(){
                            console.log('remove_dependencies');
                            navigation.remove_dependencies();
                            console.log('load_page ', name);
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
        Backbone.history.start({ pushState: false });
        var hash = window.location.hash;
        if(hash == ""){
            hash = 'page/switcher';
        }else{
            hash.replace('#', '');
        }
        this.router.navigate(hash, {trigger:true, replace:true});
        delete hash;
        $('#backbutton').off('tap, click').on('tap, click', function(){
            utilities.show_popup({color:navigation._current_interface_color, motion:"exit_game", buttons:["no", "yes"]}, function(e){
                if(e == 1){
                    navigation.router.navigate('page/menu', {trigger:true, replace:true});
                }
            });
        });
        if(utilities.is_touch_screen()){
            $('#switchbutton')
                .off('touchstart')
                .off('touchend')
                .on('touchstart', function(){
                    navigation._switcher_last_date = new Date().getTime();
                })
                .on('touchend', function(){
                    var date = new Date().getTime();
                    if(date - navigation._switcher_last_date >= 3000){
                        navigation.router.navigate('page/switcher', {trigger:true, replace:true});
                    }
                });
        }else{
            $('#switchbutton')
                .off('mousedown')
                .off('mouseup')
                .on('mousedown', function(){
                    navigation._switcher_last_date = new Date().getTime();
                })
                .on('mouseup', function(){
                    var date = new Date().getTime();
                    if(date - navigation._switcher_last_date >= 3000){
                        navigation.router.navigate('page/switcher', {trigger:true, replace:true});
                    }
                });
        }
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
        console.log('load page :: ', page );
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
                if(typeof datas.color !== "undefined"){
                    self._current_interface_color = colors[datas.color];
                    TweenMax.to($('.app_content'), .5, {"backgroundColor"   :   navigation._current_interface_color});
                    TweenMax.to($('#backbutton'), .5, {'backgroundColor'    :   navigation._current_interface_color});
                }
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
        console.log('init_current_page');
        if(typeof this.page_properties.motion !== "undefined"){
            $('.app_content').append('<div class="intro_motion" id="motion_draw" style="width:'+window.innerWidth+'px; height:'+window.innerHeight+'px;"><canvas id="motion_canvas" width="'+window.innerWidth+'" height="'+window.innerHeight+'" style="background-color:rgba(0,0,0,0);"></canvas></div>');
            var self = this;
            $('#backbutton').css('display','none');
            TweenMax.set($('.intro_motion'), {scaleX:0, scaleY:0});
            TweenMax.to($('.intro_motion'), .5, {scaleX:1, scaleY:1, onComplete:function(){

            }, ease:Back.easeOut});
            //var canvas, stage, exportRoot;

            canvas = document.getElementById("motion_canvas");
            this.exportRoot = new lib[this.page_properties.motion]();
            this.stage = new createjs.Stage(canvas);
            this.exportRoot.regX = 450;
            this.exportRoot.regY = 200;
            this.exportRoot.x = window.innerWidth/2;
            this.exportRoot.y = window.innerHeight/2;
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