var navigation = {
    router  : null,
    page_properties : null,
    _current_page_name : null,
    _page_script : null,
    _last_page_menu : 0,
    _switcher_last_date : null,
    _current_interface_color : colors.blue,
    _last_event : new Date().getTime(),
    _nav_sounds:[
        {"label":"global_hit", "file":"./sounds/global_hit.mp3"}
    ],
    settings : {
        "time_off": 60000,
        "audio": {
            "effects": {
                "state": "on",
                "volume": 100
            },
            "music": {
                "state": "on",
                "volume": 100
            },
            "video": {
                "state": "on",
                "volume": 100
            },
            "pages": {
                "screensaver": true,
                "switcher": true,
                "menu": true,
                "drawing": true,
                "dots": true,
                "simplediscs": true,
                "run": true,
                "basketball": true,
                "build_2": true
            }
        }
    },
    init : function(){
        audio_manager.init();
        if(window.localStorage.getItem('okaoka_settings') === null){
            window.localStorage.setItem('okaoka_settings', JSON.stringify(navigation.settings));   
        }else{
            navigation.settings = JSON.parse(window.localStorage.getItem('okaoka_settings'));
        }
        this.set_update_events();
        this.create_routes();
        this.create_back_button();
        
        okaoka_api.init();
    },
    create_back_button : function(){
        var queue = new createjs.LoadQueue();
            queue.on("complete", function(){
                this.destroy(); 
                var canvas, stage, exportRoot;
                    canvas = document.getElementById("exit_button_canvas");
                    exportRoot = new lib.exit_button();
                    stage = new createjs.Stage(canvas);
                    stage.addChild(exportRoot);
                    stage.update();
                    createjs.Ticker.setFPS(lib.properties.fps);
                    createjs.Ticker.addEventListener("tick", stage);
            });
            queue.loadManifest(["images/assets/exit_button/exit_button.js"], true);
            queue.load();
    },
    set_update_events : function(){
        if(utilities.is_touch_screen()){
            $('body').off('touchstart').on('touchstart', navigation.update_event);
        }else{
            $('body').off('mousedown').on('mousedown', navigation.update_event);
        }
    },
    update_event : function(){
        navigation._last_event = new Date().getTime(); 
        window.clearTimeout(this.refreshTimeOut);
        window.clearTimeout(this.activityTimeout);
        this.refreshTimeOut = setTimeout(function(){
            if(typeof gui !== "undefined"){
                gui.Window.get().reload(3);
            }else{
                window.location.reload(true);
            }
        }, 3600000);
        this.activityTimeout = setTimeout(function(){
            navigation.check_activity();
        }, 60000);
    },
    check_activity : function(){
        if(navigation._current_page_name !== "screensaver" && navigation._current_page_name !== "video" && navigation._current_page_name !== "switcher" && navigation._current_page_name !== "settings" && navigation._current_page_name !== "endlessrunner"){
            if(new Date().getTime() - navigation._last_event > 60000){
                navigation.router.navigate('page/screensaver', {trigger:true, replace:true});
                //window.location.href = "index.html/#page/screensaver";
                setTimeout(function(){
                    if(typeof gui !== "undefined"){
                        gui.Window.get().reload(3);
                    }else{
                        window.location.reload(true);
                    }
                },500);
            }
        }
        setTimeout(function(){
            navigation.check_activity();
        }, 60000);
    },
    create_routes : function(){
        var Router = Backbone.Router.extend({
            routes:{
                '':'changepage',
                'page/:name':'changepage',
                'page/:name/intro/:data':'changepage',
                'page/:name/intro/:data/date/:d':'changepage'
            },
            changepage : function(name, intro){
                utilities.destroy_over_motion();
                navigation.intro = true;
                if(typeof intro === "string"){
                    if(intro === "false"){
                        navigation.intro = false;
                    }
                }
                navigation.set_update_events();
                navigation.update_event();
                if(typeof name !== "undefined"){
                    /* EMPTY ALL LIB FROM CREATEJS @ EACH PAGE CHANGE */
                    lib = null;
                    
                    if(typeof gui !== "undefined"){
                        if(typeof gui !== "undefined"){
                            gui.App.clearCache();
                        }
                        window.localStorage.setItem('okaoka_settings', JSON.stringify(navigation.settings));
                    }
                    
                    
                    navigation.create_back_button();
                    
                    if(navigation._page_script === null || typeof navigation._page_script == "undefined"){
                        navigation.load_page(name);
                    }else{
                        if(typeof self._music_ambiance !== "undefined"){
                            audio_manager.destroy_ambiance(navigation._page_script._music_ambiance, function(){
                                audio_manager.destroy_all_sounds();
                            });
                        }else{
                            audio_manager.destroy_all_sounds();
                        }
                        navigation._page_script.destroy(function(){
                            if(typeof _okg === "undefined"){
                                navigation.remove_dependencies();
                                navigation.load_page(name);
                            }else{
                                console.log('clear_page_memory');
                                navigation.clear_page_memory(_okg, function(){
                                    _okg=null;
                                    navigation.remove_dependencies();
                                    navigation.load_page(name);
                                });
                            }
                        });
                    }
                }else{
                }
            }
        });
        Backbone.emulateHTTP = true;
        this.router = new Router();
        Backbone.history.start({ pushState: false });
        var hash = window.location.hash;
        if(hash == ""){
            utilities.save_page_stat("start_up", new Date().getTime());
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
                    navigation.switch_timeout = window.setTimeout(function(){
                        navigation.router.navigate('page/switcher', {trigger:true, replace:true});
                    },5000);
                    navigation._switcher_last_date = new Date().getTime();
                })
                .on('touchend', function(){
                    var date = new Date().getTime();
                    if(date - navigation._switcher_last_date >= 3000){
                        navigation.router.navigate('page/switcher', {trigger:true, replace:true});
                    }
                    window.clearTimeout(navigation.switch_timeout);
                });
        }else{
            $('#switchbutton')
                .off('mousedown')
                .off('mouseup')
                .on('mousedown', function(){
                    navigation.switch_timeout = window.setTimeout(function(){
                        navigation.router.navigate('page/switcher', {trigger:true, replace:true});
                    },5000);
                    navigation._switcher_last_date = new Date().getTime();
                })
                .on('mouseup', function(){
                    var date = new Date().getTime();
                    if(date - navigation._switcher_last_date >= 3000){
                        navigation.router.navigate('page/switcher', {trigger:true, replace:true});
                    }
                    window.clearTimeout(navigation.switch_timeout);
                });
        }
    },
    clear_page_memory : function(object, callBack){
        $.each(_.keys(object), function(index, key){
            object[key] = null;
        });
        if(typeof callBack !== "undefined"){
            object = null;
            callBack();
        }
    },
    remove_dependencies : function(){
        $.each(_.keys(lib), function(index, obj){
            lib[obj] = null;
            delete lib[obj];
        });
        var self = navigation;
        delete self._page_script;
        self._page_script = null;
        $.each(self.page_properties.dependencies, function(index, dependencie){
            delete dependencie.replace('.js', '');
            //console.log("dependencie :: ",  dependencie);
            $('script[src="'+dependencie+'"]').remove();
            //console.log($('script[src="'+dependencie+'"]').length);
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
        utilities.save_page_stat(page, new Date().getTime());
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
                            self.load_sounds(function(){
                                self.init_current_page(function(){
                                });
                            });
                        });
                    });
                });
            }
        });
    },
    load_sounds : function(callBack){
        var self = this;
        if(typeof self.page_properties.sounds !== "undefined"){
            $.each(self.page_properties.sounds, function(i, audio){
                audio_manager.load_sound(audio.file, audio.label);
            });
        }
        callBack();
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
            $('head').append('<script src="'+self.page_properties.dependencies[index]+'"></script>');
        });
        callBack();
        //var queue = new createjs.LoadQueue();
        //    queue.on("complete", function(){this.destroy(); callBack();});
        //    queue.loadManifest(self.page_properties.dependencies, false);
        //    queue.load();
    },
    load_content : function(callBack){
        var self = this;
        $( ".app_content" ).load( "pages/"+self._current_page_name+"/"+self.page_properties.content, function() {
            callBack();
        });
    },
    init_current_page : function(callBack){
        if(typeof this.page_properties.motion !== "undefined" && navigation.intro){
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
        }else{
            setTimeout(function(){
                audio_manager.play_ambiance(navigation.page_properties.label+'_ambiance', -1, function(e){
                    window['navigation']._page_script._music_ambiance = e;
                });
            }, 2500);   
        }
        //TweenMax.to($('.app_content'), .5, {'backgroundColor':colors.dgreen});
        this._page_script = new window[this.page_properties.script_name];
        callBack();
        if(!navigation.intro){
            if(typeof window['navigation']._page_script.create_interface !== "undefined"){
                window['navigation']._page_script.create_interface();
            }
            $('.intro_motion').remove();
            TweenMax.set($('#backbutton'), {scaleX:0, scaleY:0});
            $('#backbutton').css('display', 'block');
            TweenMax.to($('#backbutton'), .5, {scaleX:1, scaleY:1});
            
            setTimeout(function(){
                audio_manager.play_ambiance(navigation.page_properties.label+'_ambiance', -1, function(e){
                    window['navigation']._page_script._music_ambiance = e;
                });
            }, 2500);   
        }
    },
    intro_motion_stopped : function(){
        delete navigation.stage;
        delete navigation.exportRoot;
        TweenMax.to($('.intro_motion'), .8, {opacity:0, onComplete:function(){
            createjs.Ticker.removeEventListener("tick", navigation.stage);
            if(typeof window['navigation']._page_script.create_interface !== "undefined"){
                window['navigation']._page_script.create_interface();
            }
            $('.intro_motion').remove();
            TweenMax.set($('#backbutton'), {scaleX:0, scaleY:0});
            $('#backbutton').css('display', 'block');
            TweenMax.to($('#backbutton'), .5, {scaleX:1, scaleY:1});
            
            setTimeout(function(){
                audio_manager.play_ambiance(navigation.page_properties.label+'_ambiance', -1, function(e){
                    window['navigation']._page_script._music_ambiance = e;
                });
            }, 2500);
        }, ease:Back.easeIn});
    },
    refresh : function(){
        
    },
    destroy : function(){
        
    },
    kill : function(){
        
    }
}