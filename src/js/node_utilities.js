function node_utilities(){
}

node_utilities.prototype.init_device = function(){
    this.os = require('os');
    this.gui = require('nw.gui');
    this.win = gui.Window.get();
    this.platform = require('./components/platform');
    //this.settings = require('./components/settings');
    //this.windowBehaviour = require('./components/window-behaviour');
    //this.dispatcher = require('./components/dispatcher');
}
node_utilities.prototype.get_user_ip = function(callBack){
    var infos = [];
    var ifaces = this.os.networkInterfaces();
    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;
        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }

            if (alias >= 1) {
                infos.push({"ifname":alias, "iface":iface});
                // this single interface has multiple ipv4 addresses
            } else {
                infos.push({"ifname":ifname, "iface":iface});
                // this interface has only one ipv4 adress
            }
        });
    });
    callBack(infos);
}

/* ---------------- USER FILES SYSTEM AND USER UTILS FUNCTIONS ------------ */
/* ---- RECUPERER LA RACINE DE DOSSIER DE L'UTILISATEUR ----- */
node_utilities.prototype.get_user_home = function() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}
node_utilities.prototype.init_fileSystem = function(){
    this.fs = require('fs');
    this.path = require('path');
}
node_utilities.prototype.create_folder = function(directory, callBack){
    if(typeof this.fs === 'undefined'){
        this.init_fileSystem();
    }
    this.fs.mkdir(this.get_user_home()+'/'+directory, 0777, true, function (err) {
        if (err) {
            callBack(err);
        } else {
            callBack(directory);
        }
    });
}
node_utilities.prototype.save_picture = function(bitmapData, base_filname, datas, callBack){
    if(typeof require === "undefined"){
        return {"error":"require is not defined"};
    }
    if(typeof this.fs === 'undefined'){
        this.init_fileSystem();
    }
    this.create_folder('okaoka', function(){
    });
    this.create_folder('okaoka/pictures', function(){
    });
    var filename = new Date().getTime()+'_'+base_filname+'_'+Math.random()*1000+'.png';
    this.write_file(this.get_user_home()+'/okaoka/pictures', filename, bitmapData, 'binary', function(e){
    });
    this.insert_datas(
        "pictures", 
        {
            "filename":
            {
                "type":"TEXT",
                "value":filename
            }, 
            "votes":{
                "type":"TEXT",
                "value":0
            }, 
        },
        function(e){
            callBack(e);
        }
    );
}
node_utilities.prototype.write_file = function(folder, filename, imageData, type, callBack){
    if(typeof type === "undefined"){
        type = 'binary';
    }
    if(typeof this.fs === 'undefined'){
        this.init_fileSystem();
    }
    //imageData.replace('data:image/png;base64,', '');
    var base64Data = imageData.replace(/^data:image\/png;base64,/, "");
    this.fs.writeFile(folder+'/'+filename, base64Data, 'base64', function(err){
        callBack(err);
        if (err) throw err
    })
}
node_utilities.prototype.read_file = function(filename, callBack){
    if(typeof this.fs === 'undefined'){
        this.init_fileSystem();
    }
    this.fs.readFile(this.get_user_home()+filename, 'utf8', function(err, data){
        if (err) {
            callBack(err, data);
            throw err;
        }
        callBack(err, data);
    });
}


/* ---------------- SQLITE UTILS INSERT AND SELECT FUNCTION --------------- */
node_utilities.prototype.open_database = function(){
    this.db = openDatabase('okaoka', '1.0', 'okaoka database', 2 * 1024 * 1024);
}
/* -------------------------- INSERT SQL SAMPLE CODE ---------------------- */
/*    
    window[instance_name].insert_datas(
        'table_name', 
        {
            var_1:{
                type:"INT", 
                value="1"
            },
            var_2:{
                type:"TEXT",
                value:"a sample text to insert"
            },
            var_3:{
                type:"CHAR(50)",
                value:"limited sample char 50 max"
            }
        }
    );
*/
/* ------------------------------------------------------------------------- */
node_utilities.prototype.insert_datas = function(table, datas, callBack){
    this.open_database();
    var keys = "";
    var vals = "";
    $.each(_.keys(datas), function(i, key){
        keys += key;
        vals += '"'+datas[key].value+'"';
        if(i < _.keys(datas).length-1){
            keys += ", ";
            vals += ", ";
        }
    });
    /*if(typeof datas['saved'] === "undefined"){
        keys+=", saved";
        vals+=', "false"';
    }*/
    console.log("keys :: ", keys);
    console.log("vals :: ", vals);
    this.db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS '+table+' (id unique, '+keys+')');
        console.log('INSERT INTO '+table+' ('+keys+') VALUES ('+vals+')');
        tx.executeSql('INSERT INTO '+table+' ('+keys+') VALUES ('+vals+')');
    });
    this.close_database();
    
    callBack({"code":200, "status":"success"});
}

/* -------------------------- GET SQL SAMPLE CODE ---------------------- */
/*    
    window[instance_name].get_datas(
        'table_name', 
        {
            where:{
                id      : 1,
                var_1   : 1, 
                var_2   : 'a sample text to insert', 
                var_3   : 'limited sample char 50 max'
            }
        },
        function(){}
    );
*/
/* ------------------------------------------------------------------------- */
node_utilities.prototype.get_datas = function(table, datas, callBack){
    var call = false;
    this.open_database();
    var where = "";
    if(typeof datas.where !== "undefined"){
        $.each(_.keys(datas.where), function(i, key){
            if(where === ""){
                where = " WHERE "+key+"='"+datas.where[key]+"'";
            }else{
                where+= " AND "+key+"='"+datas.where[key]+"'";
            }
        });
    }
    var limit = "";
    if(typeof datas.limit !== "undefined"){
        limit = " LIMIT "+datas.limit;
        delete datas.limit;
    }
    console.log("SELECT * FROM "+table+""+where+""+limit);
    this.db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM "+table+""+where+""+limit, [], function (tx, results) {
            var len = results.rows.length, i;
            var datas = [];
            for (i = 0; i < len; i++) {
                datas.push(results.rows.item(i));
            }
            callBack({"code":200, "status":"success", "datas":datas});
            call = true;
        });
    });
    this.close_database();
    setTimeout(function(){
        if(!call){
            callBack({"code":300, "status":"error", "message":"La base de donnée ne répond pas."});
        }
    }, 5000);
}
node_utilities.prototype.execute = function(request, callBack){
    var call = false;
    this.open_database();
    this.db.transaction(function (tx) {
        tx.executeSql(request, [], function (tx, results) {
            var len = results.rows.length, i;
            var datas = [];
            for (i = 0; i < len; i++) {
                datas.push(results.rows.item(i));
            }
            callBack({"code":200, "status":"success", "datas":datas});
            call = true;
        });
    });
    this.close_database();
    setTimeout(function(){
        if(!call){
            callBack({"code":300, "status":"error", "message":"La base de donnée ne répond pas."});
        }
    }, 5000);
}
node_utilities.prototype.update_saved_datas = function(table, callBack){
    this.execute("UPDATE "+table+" SET saved = 'true'", function(e){
        callBack(e);
    });
}
node_utilities.prototype.close_database = function(){
    
}
