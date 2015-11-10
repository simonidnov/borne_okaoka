var okaoka_api = {
    position:null,
    _user : null,
    init : function(){
        /*if(window.localStorage.getItem('last_upload') === null){
            window.localStorage.setItem('last_upload', new Date().getTime());   
        }else{
            if(parseInt(window.localStorage.getItem('last_upload')) + (86400000/2) < new Date().getTime()){
                return false;
            }
        }*/
        if(typeof require === "undefined"){
            return false;
        }
        if(typeof _node === "undefined"){
            _node = new node_utilities();
            _node.init_device();
        }
        this.set_user();
        this.get_location(function(){
            console.log('location ok');
            _node.get_datas('oka_user', {}, function(e){
                console.log('user datas ok ', e);
                if(e.code !== 200){
                    okaoka_api.create_user();
                }else{
                    console.log('start update infos');
                    okaoka_api._user = e.datas[0];
                    okaoka_api.save_scoring();
                    okaoka_api.save_stats();
                    setTimeout(function(){
                        okaoka_api.update_user();
                        okaoka_api.post_pictures();
                    },10000);
                }
            });
        });
    },
    generate_uid : function(){
        if(typeof require === "undefined"){
            return false;
        }
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();   
    },
    create_user : function(){
        
        if(typeof require === "undefined"){
            return false;
        }
        var infos = {
            uid : this.generate_uid(),
            name : "",
            ip : "",
            mac : "",
            hostname : _node.os.hostname(),
            architecture : _node.os.arch(),
            total_memory : _node.os.totalmem(),
            free_memory : _node.os.freemem(),
            processors : _node.os.cpus().length,
            processor_model : _node.os.cpus()[0].model,
            processor_speed : _node.os.cpus()[0].speed,
            release_version : _node.os.release(),
            uptime : _node.os.uptime(),
            platform : _node.os.platform(),
            location : ""
        };
        infos.location = okaoka_api.position.coords.latitude+':'+okaoka_api.position.coords.longitude;
        _node.get_user_ip(function(e){
            infos.ip = e[0].iface.address
        });
        ajax_request.post("users", infos, function(e){
            infos.user_id = e.user_id;
            okaoka_api._user = infos;
            var user_datas = {};
            $.each(_.keys(infos), function(index, key){
                user_datas[key] = {"type":"TEXT", "value":infos[key]};
            });
            setTimeout(function(){
                _node.insert_datas('oka_user', user_datas, function(e){
                });
            },100);
        });
    },
    update_user : function(){
        
        if(typeof require === "undefined"){
            return false;
        }
        if(okaoka_api._user === null){
            okaoka_api.set_user();
        }
        if(typeof _node === "undefined"){
            _node = new node_utilities();
            _node.init_device();
        }
        var infos = {
            hostname : _node.os.hostname(),
            architecture : _node.os.arch(),
            total_memory : _node.os.totalmem(),
            free_memory : _node.os.freemem(),
            processors : _node.os.cpus().length,
            processor_model : _node.os.cpus()[0].model,
            processor_speed : _node.os.cpus()[0].speed,
            release_version : _node.os.release(),
            uptime : _node.os.uptime(),
            platform : _node.os.platform(),
        };
        infos.location = okaoka_api.position.coords.latitude+':'+okaoka_api.position.coords.longitude;
        _node.get_user_ip(function(e){
            infos.ip = e[0].iface.address
        });
        infos.user_id = okaoka_api._user.user_id;
        ajax_request.put("users", infos, function(e){});
    },
    save_scoring : function(){
        
        if(typeof require === "undefined"){
            return false;
        }
        /* TODO ET ALL INSTALLED GAME NAME LIST */
        $.ajax({
            dataType: "json",
            url: './pages/menu/pages_menu.json',
            data: {},
            success: function(datas){
                var game_list = {pages:[]};
                $.each(_.keys(datas), function(index, page){
                    $.each(_.keys(datas[page]), function(u, game){
                        game_list.pages.push(datas[page][game]['name']);
                        console.log(datas[page][game]['name']);
                    });
                });
                for(var i=0; i<game_list.pages.length; i++){
                    okaoka_api.save_game_score(game_list.pages[i]);
                }
            }
        });
    },
    save_game_score : function(game_name){
        
        if(typeof require === "undefined"){
            return false;
        }
        console.log("save_game_score :::: ", game_name);
        if(okaoka_api._user === null){
            okaoka_api.set_user();
        }
        if(game_name === "drawing"){
            return false;
        }
        _node.get_datas(
            game_name, 
            {
                where:{
                    "saved":"false"
                }
            },
            function(e){
                if(e.code !== 200){
                    //ALTER TABLE stats ADD COLUMN saved {type};
                    _node.execute('ALTER TABLE '+game_name+' ADD COLUMN saved TEXT DEFAULT "false"', function(){});
                }else{
                    /* HAVE TO UPLOAD ALL GAME SCORE WHERE STATUS SAVED = FALSE */
                    ajax_request.post(
                        'score', 
                        {
                            "user_id":okaoka_api._user.user_id, 
                            "game_name":game_name, 
                            "datas":e.datas
                        }, function(e){
                            
                        }
                    );
                    console.log(game_name);
                    /* SET ALL GAME SCORE 'game_name' ON POSTED STATUS SAVED TRUE */
                    _node.update_saved_datas(game_name, function(e){
                        console.log("update_saved_datas ::: ", e);
                    });
                }
            }
        )
    },
    save_stats : function(){
        
        if(typeof require === "undefined"){
            return false;
        }
        if(okaoka_api._user === null){
            okaoka_api.set_user();
        }
        /* get stats game where not uploaded */
        _node.get_datas(
            "stats", 
            {
                where:{
                    "saved":"false"
                }
            },
            function(e){
                /* SI LE CODE DE RETOUR N'EST PAS = 200 ON AJOUTE LA COLUMN SAVED A LA TABLE */
                if(e.code !== 200){
                    //ALTER TABLE stats ADD COLUMN saved {type};
                    _node.execute("ALTER TABLE stats ADD COLUMN saved TEXT DEFAULT 'false'", function(){});
                }else{
                    /* HAVE TO UPLOAD ALL STATS WHERE STATUS SAVED = FALSE */
                    ajax_request.post(
                        'stats', 
                        {
                            "user_id":okaoka_api._user.user_id, 
                            "datas":e.datas
                        }, 
                        function(e){
                            /* SET ALL STATS ON POSTED STATUS SAVED TRUE */
                            _node.update_saved_datas("stats", function(e){
                            });
                        }
                    );
                }
            }
        );
    },
    set_user : function(){
        
        if(typeof require === "undefined"){
            return false;
        }
        _node.get_datas('oka_user', {}, function(e){
            if(e.code !== 200){
                okaoka_api.create_user();
                return false;
            }else{
                okaoka_api._user = e.datas[0];
                return true;
            }
        });
        return true;
    },
    post_pictures : function(){
        
        if(typeof require === "undefined"){
            return false;
        }
        if(okaoka_api._user === null){
            okaoka_api.set_user();
        }
        /* upload pictures */
        /* STEP 1 GET PICTURE LIST */
        _node.get_datas('pictures', {where:{"saved":"false"}}, function(e){
            if(e.code !== 200){
                /* ALTER TABLE ADD SAVED VALUE DEFAULT TO FALSE */
                _node.execute("ALTER TABLE pictures ADD COLUMN saved TEXT DEFAULT 'false'", function(){});
            }else{
                /* STEP 2 SEND IT ONE BY ONE */
                $.each(e.datas, function(index, picture){
                    if(typeof _node.fs === 'undefined'){
                        _node.init_fileSystem();
                    }
                    var bitmap = _node.fs.readFileSync(_node.get_user_home()+'/okaoka/pictures/'+picture.filename);
                    // convert binary data to base64 encoded string
                    var base64 = new Buffer(bitmap).toString('base64');
                    
                    var formData = new FormData();
                    formData.append("bitmap", base64);
                    formData.append("user_id", okaoka_api._user.user_id);
                    var request = new XMLHttpRequest();
                    request.open("POST", ajax_request._base_url+"picture");
                    request.send(formData);
                });
                _node.update_saved_datas("pictures", function(e){});
            }
        });
        
        /* STEP 3 SET IT TO STATE SAVED TRUE */
    },
    get_location : function(callBack){
        
        if(typeof require === "undefined"){
            return false;
        }
        var self =this,
            response = false;
        $.get('https://maps.googleapis.com/maps/api/browserlocation/json?browser=chromium&sensor=true', function(data) { 
            var position = {
                coords : {
                    latitude : data.location.lat,
                    longitude : data.location.lng
                }
            };
            okaoka_api.position = position;
            callBack(position);
            response = true;
        });  
        setTimeout(function(){
            if(!response){
                callBack({});
            }
        },5000);
    }             
}