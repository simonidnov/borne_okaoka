var audio_manager = {
    default_sounds : [
        {"label":"hit", "file":"./sounds/hit.ogg"},
        {"label":"popup_open", "file":"./sounds/popup_open.ogg"},
        {"label":"popup_close", "file":"./sounds/popup_close.ogg"}
    ],
    sounds : [],
    ambiance_sounds : [],
    init:function(){
        createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
        createjs.Sound.alternateExtensions = ["mp3"];
        $.each(audio_manager.default_sounds, function(i, audio){
            audio_manager.load_sound(audio.file, audio.label);
        });
    },
    load_sound : function(uri, id, callBack){
        var callBack = callBack;
        createjs.Sound.on("fileload", createjs.proxy(function(e){
            createjs.Sound.setDefaultPlayProps(id, {pan: 0.0001});
            if(typeof callBack !== "undefined"){
                callBack();
            }
        }, (this)));
        createjs.Sound.registerSound(uri, id);
    },
    destroy_all_sounds : function(){
        $.each(audio_manager.sounds, function(i, audio){
            audio.stop();
            delete audio; 
        });
        $.each(audio_manager.ambiance_sounds, function(i, audio){
            audio.stop();
            delete audio; 
        });
        audio_manager.ambiance_sounds = [];
        audio_manager.sounds = [];
        $.each(audio_manager.default_sounds, function(i, audio){
            audio_manager.load_sound(audio.file, audio.label);
        });
    },
    play_ambiance : function(id, repeat, callBack, _current_sound){
        /* active all ambiance //return false; */
        return false;
        /* active all ambiance //comment */
        if(!navigation.settings.audio.pages[navigation.page_properties.label]){
            return false;
        }
        if(navigation.settings.audio.music.state !== "on"){
            return false;
        }
        if(typeof this.ambiance_sounds[this.ambiance_sounds.length-1] !== "undefined"){
            if(this.ambiance_sounds[this.ambiance_sounds.length-1].playState === "playSucceeded"){
                return false;
            }
        }
        if(typeof _current_sound === "undefined"){
            var _current_sound = this.ambiance_sounds.length;
        }
        this.ambiance_sounds[_current_sound] = createjs.Sound.play(id);
        this.ambiance_sounds[_current_sound].volume = 0;
        this.ambiance_sounds[_current_sound].on("complete", createjs.proxy(function(){
            audio_manager.stop_sound(id);
            audio_manager.play_ambiance(id, repeat, callBack, _current_sound);
        }, this));
        callBack(this.ambiance_sounds[_current_sound], repeat);
        TweenMax.to(this.ambiance_sounds[_current_sound], 20, {volume:(navigation.settings.audio.music.volume / 100)});
    },
    destroy_ambiance : function(sound, callBack){
        TweenMax.to(sound, 2, {volume:0, onComplete:function(){
            sound.stop();
            delete sound;
            callBack();
        }});
    },
    /*
    TEST AUDIO function
    audio_manager.init();
    audio_manager.load_sound('/sounds/beep9.mp3','bip');
    audio_manager.play_sound('bip', 0, function(e){});
    */
    play_sound : function(id, repeat, callBack, _current_sound){
        if(typeof navigation.page_properties === "undefined" || navigation.page_properties === null){
            return false;
        }
        if(!navigation.settings.audio.pages[navigation.page_properties.label]){
            return false;
        }
        if(navigation.settings.audio.effects.state !== "on"){
            return false;
        }
        if(typeof _current_sound === "undefined"){
            var _current_sound = this.sounds.length;
        }
        this.sounds[_current_sound] = createjs.Sound.play(id);
        if(repeat === -1){
            if(typeof this.sounds[_current_sound] !== "undefined"){
                this.sounds[_current_sound].on("complete", createjs.proxy(function(){
                    audio_manager.stop_sound(id);
                    audio_manager.play_sound(id, repeat, callBack, _current_sound);
                }, this));
            }
        }else if(repeat>0){
            if(typeof this.sounds[_current_sound] !== "undefined"){
                this.sounds[_current_sound].on("complete", createjs.proxy(function(){
                    repeat--;
                    audio_manager.stop_sound(id);
                    audio_manager.play_sound(id, repeat, callBack, _current_sound);
                }, this));
            }
        }else if(repeat===0){
            if(typeof this.sounds[_current_sound] !== "undefined"){
                this.sounds[_current_sound].on("complete", createjs.proxy(function(){
                    if(typeof audio_manager.sounds[_current_sound] !== "undefined"){
                        setTimeout(function(){
                            if(typeof audio_manager.sounds[_current_sound] !== "undefined"){
                                audio_manager.sounds[_current_sound].stop();
                            }
                        },300);
                    }
                }, this));
            }
        }
        this.sounds[_current_sound].volume = navigation.settings.audio.effects.volume / 100;
        callBack(this.sounds[_current_sound], repeat);
    },
    stop_sound : function(id){
        createjs.Sound.stop(id);
    },
    stop_all_sound : function(){
        
    }
}