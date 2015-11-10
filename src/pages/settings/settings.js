var _okg = null;
function settings(){
    _okg = this;
    this.scroll = null;
    this.form = null;
    this.stats = null;
    this.list_datas = null;
    this.pages = null;
    this.games_list = null;
    this.init();
}
settings.prototype.init = function(){
    $.ajax({
        dataType: "json",
        url: './pages/menu/pages_menu.json',
        data: {},
        success: function(datas){
            _okg.games_list = datas;
            _okg.create_games_settings();
            setTimeout(function(){
                _okg.create_form();
            },500);
        }
    });
    utilities.hide_popup();
    $('#backbutton').css('display','none');
    this.init_stage();
}
settings.prototype.create_form = function(){
    if(utilities.is_touch_screen()){
        $('#show_web_dev_tool').on('touchstart', function(){
            if(typeof gui !== "undefined"){
                gui.Window.get().showDevTools();
            }
        });
        $('#back_button').on('touchstart', function(){
            navigation.router.navigate('page/switcher', {trigger:true, replace:true}); 
        });
    }else{
        $('#show_web_dev_tool').on('click', function(){
            if(typeof gui !== "undefined"){
                gui.Window.get().showDevTools();
            }
        });
        $('#back_button').on('click', function(){
            navigation.router.navigate('page/switcher', {trigger:true, replace:true}); 
        });
    }
    if(navigation.settings.audio.video.state !== "on"){
        $('#check_video_sound').removeClass('checked');
    }
    if(navigation.settings.audio.effects.state !== "on"){
        $('#check_event_sound').removeClass('checked');
    }
    if(navigation.settings.audio.music.state !== "on"){
        $('#check_ambiance_sound').removeClass('checked');
    }
    $('#video_volume').attr('data-value', navigation.settings.audio.video.volume);
    $('#ambiance_volume').attr('data-value', navigation.settings.audio.music.volume);
    $('#event_volume').attr('data-value', navigation.settings.audio.effects.volume);
    /* load stats from sqlite */
    this.form = new formular('settings_form', function(e){
        /* ------- SET AUDIO EFFECTS ------ */
        if(e.datas.check_event_sound){
            navigation.settings.audio.effects.state = "on";
        }else{
            navigation.settings.audio.effects.state = "off";
        }
        navigation.settings.audio.effects.volume = Math.round(e.datas.event_volume);
        
        /* ------- SET AUDIO MUSIC ------ */
        if(e.datas.check_ambiance_sound){
            navigation.settings.audio.music.state = "on";
        }else{
            navigation.settings.audio.music.state = "off";
        }
        navigation.settings.audio.music.volume = Math.round(e.datas.ambiance_volume);
        
        /* ------- SET AUDIO VIDEO ------ */
        if(e.datas.check_video_sound){
            navigation.settings.audio.video.state = "on";
        }else{
            navigation.settings.audio.video.state = "off";
        }
        navigation.settings.audio.video.volume = Math.round(e.datas.video_volume);
        
        /* ------- SET PAGE PRIVATE AUDIO SETTING ------ */
        for(var i=0; i<_okg.games_names.length; i++){
            if(e.datas['check_'+_okg.games_names[i]+'_sound']){
                navigation.settings.audio.pages[_okg.games_names[i]] = true;
            }else{
                navigation.settings.audio.pages[_okg.games_names[i]] = false;
            }
        }
        /* ------- SAVE SETTINGS PARAMS ------ */
        window.localStorage.setItem('okaoka_settings', JSON.stringify(navigation.settings));
        
        navigation.update_event();
    });
    this.scroll = new IScroll('#settings_scroll', { click: true });
    _okg.get_stats();
    _okg.set_device_infos();
}
settings.prototype.create_games_settings = function(){
    if(typeof navigation.settings.audio.pages === "undefined"){
       navigation.settings.audio.pages = {};
    }
    _okg.games_names = ["screensaver","switcher","menu"];
    $.each(_.keys(_okg.games_list), function(i, page){
        $.each(_.keys(_okg.games_list[page]), function(u, game){
            _okg.games_names.push(_okg.games_list[page][game].name); 
        });
    });
    setTimeout(function(){
        for(var i=0; i<_okg.games_names.length; i++){
            if(typeof navigation.settings.audio.pages[_okg.games_names[i]] === "undefined"){
                navigation.settings.audio.pages[_okg.games_names[i]] = true;
            }
            if(navigation.settings.audio.pages[_okg.games_names[i]]){
                $('#game_set').append('<div class="line"><div class="switch small left checked" id="check_'+_okg.games_names[i]+'_sound"><div class="dot"></div></div><h4 data-for="check_'+_okg.games_names[i]+'_sound">Activer le son pour le jeu <b>'+_okg.games_names[i]+'</b></h4></div>');
            }else{
                $('#game_set').append('<div class="line"><div class="switch small left" id="check_'+_okg.games_names[i]+'_sound"><div class="dot"></div></div><h4 data-for="check_'+_okg.games_names[i]+'_sound">Activer le son pour le jeu <b>'+_okg.games_names[i]+'</b></h4></div>');
            }
        }
        window.localStorage.setItem('okaoka_settings', JSON.stringify(navigation.settings));
    },100);
}
settings.prototype.get_stats = function(){
    if(typeof require === "undefined"){
        /* display require node error */
    }else{
        if(typeof _node === "unedefined"){
            _node = new node_utilities();
        }
        _node.get_datas(
            "stats", 
            {},
            function(e){
                //callBack(e);
                _okg.stats = e.datas;
                _okg.list_datas = _.sortBy(e.datas, 'date').reverse();
                _okg.pages = _.groupBy(_okg.list_datas, "page");
                /* display stats */
                var cols = [];
                $.each(_.keys(_okg.pages), function(i, key){
                    cols.push([key, _okg.pages[key].length])
                });
                var chart_browser = c3.generate({
                    bindto: '#page_stat_graph',
                    data: {
                        columns: cols,
                        type : 'donut',
                        onclick: function (d, i) { 
                            _okg.show_page_stat(d.id); 
                        },
                        onmouseover: function (d, i) {  },
                        onmouseout: function (d, i) {  }
                    },
                    donut: {
                        title: "Pages Visitées"
                    }
                });
                _okg.scroll.refresh();
            }
        );
    }
}   
settings.prototype.show_page_stat = function(page){
    var time = 0;
    var nb_visits = 0;
    $.each(_okg.stats, function(i, stat){
        if(stat.page === page && i<_okg.stats.length-2){
            nb_visits++;
            time += _okg.stats[i+1].date - _okg.stats[i].date;
        }
    });
    var timelap = time/nb_visits;
    $('#page_name').html("nom de la page : "+page);
    $('#nb_visits').html("Nombre de visites : "+nb_visits);
    $('#timelap').html("temps moyen passé : "+(timelap/1000).toFixed(2)+'sec');
    $('#total_time').html("Temps total : "+(time/1000).toFixed(2)+'sec');
    _okg.scroll.refresh();
}
settings.prototype.set_device_infos = function(){
    if(typeof require === "undefined"){
        /* display require node error */
        $('#device_infos').append('<div class="small_title">REQUIRE IS NOT AVAILABLE TRY IT LATER</div>');
    }else{
        if(typeof _node === "unedefined"){
            _node = new node_utilities();
        }
        _node.init_device();
        $('#device_infos').append('<div class="small_title">hostname            : '+_node.os.hostname()+'</div>');
        $('#device_infos').append('<div class="small_title">architecture        : '+_node.os.arch()+'</div>');
        $('#device_infos').append('<div class="small_title">mémoire totale      : '+_node.os.totalmem()+'</div>');
        $('#device_infos').append('<div class="small_title">mémoire libre       : '+_node.os.freemem()+'</div>');
        $('#device_infos').append('<div class="small_title">processeurs         : '+(_node.os.cpus().length)+'</div>');
        $('#device_infos').append('<div class="small_title">processeurs model   : '+(_node.os.cpus()[0].model)+'</div>');
        $('#device_infos').append('<div class="small_title">processeurs vitesse : '+(_node.os.cpus()[0].speed)+'</div>');
        $('#device_infos').append('<div class="small_title">release             : '+_node.os.release()+'</div>');
        $('#device_infos').append('<div class="small_title">uptime              : '+_node.os.uptime()+'</div>');
        $('#device_infos').append('<div class="small_title">platform            : '+_node.os.platform()+'</div>');

        $('#device_infos').append('<div id="memory_stat_graph"></div>');

        var memory_stat = c3.generate({
            bindto: '#memory_stat_graph',
            data: {
                columns: [
                    ['mémoire utilisée', _node.os.totalmem() - _node.os.freemem()],
                    ['mémoire libre', _node.os.freemem()]
                ],
                type : 'donut',
                onclick: function (d, i) { 
                    _okg.show_page_stat(d.id); 
                },
                onmouseover: function (d, i) {  },
                onmouseout: function (d, i) {  }
            },
            donut: {
                title: "Memory stat"
            }
        });
        _okg.scroll.refresh();
    }
}
settings.prototype.init_stage = function(){
    
}
settings.prototype.pause = function(){
    
}
settings.prototype.play = function(){
    
}
settings.prototype.destroy = function(callBack){
    callBack();
}