var _okg = null;
function video(){
    this.playlist_uri = "/playlist/";   
    this.playlist = null;
    this._current_video = 0;
    this.init();
}
video.prototype.init = function(){
    if(window.localStorage.getItem('okaoka_settings') === null){
        window.localStorage.setItem('okaoka_settings', JSON.stringify(navigation.settings));   
    }else{
        navigation.settings = JSON.parse(window.localStorage.getItem('okaoka_settings'));
    }
    if(typeof navigation.settings.playlist === "undefined"){
        navigation.settings.playlist = {"uri":"", "local_uri":this.playlist_uri};
    }
    if(typeof navigation.settings.playlist.local_uri === "undefined"){
        navigation.settings.playlist.local_uri = this.playlist_uri;
    }
    $('#backbutton').css('display','none');
    this.playlist_uri = navigation.settings.playlist.local_uri;
    _okg = this;
    this.open_playlist();
}
video.prototype.open_playlist = function(){
    if(typeof require === "undefined"){
        this.connexion_error();
        return false;   
    }
    if(typeof _node === "undefined"){
        _node = new node_utilities();  
    }
    _node.read_file(this.playlist_uri+"scenario.xml", function(err, data){
        if (err) {
            _okg.connexion_error();
            return false;
        }
        var parser = new DOMParser();
        _okg.playlist = parser.parseFromString(data, "text/xml");
        _okg.play_vid(_okg._current_video);
    });
}
video.prototype.connexion_error = function(){
    $('.connexion_error').css('display', 'block');
}
video.prototype.play_vid = function(id){
    if(typeof _node === "undefined"){
        _node = new node_utilities();  
    }
    $('.okaoka_player').css('display', 'block');
    var file_name = _okg.playlist.getElementsByTagName('SCENARIO')[0].getElementsByTagName('VIDEO')[id].getAttribute('FILE');
    var file_uri = _node.get_user_home()+_okg.playlist_uri+file_name;
    
    $('.okaoka_player').html('<video width="'+window.innerWidth+'" height="'+window.innerHeight+'" id="myVideo" autoplay="autoplay" style="width:auto; height:100%; max-height: 100%; max-width: 100%; position:absolute; left:0; right:0; top:0; bottom:0; margin:auto;"><source src="file://'+file_uri+'" type="'+_okg.playlist.getElementsByTagName('SCENARIO')[0].getElementsByTagName('VIDEO')[id].getAttribute('type')+'"></video>');
    document.getElementById('myVideo').addEventListener('ended',_okg.videoEventEnded,false);
    if(navigation.settings.audio.video.state === "on"){
        document.getElementById('myVideo').volume = navigation.settings.audio.video.volume;
    }else{
        document.getElementById('myVideo').volume = 0;
    }
}
video.prototype.videoEventEnded = function(e){
    _okg._current_video++;
    if(_okg._current_video > _okg.playlist.getElementsByTagName('SCENARIO')[0].getElementsByTagName('VIDEO').length-1){
        _okg._current_video = 0;
    }
    _okg.play_vid(_okg._current_video);
}
video.prototype.play = function(){
    
}
video.prototype.pause = function(){
    
}
video.prototype.create_interface = function(){
    this.init();
}
video.prototype.destroy = function(callBack){
    if(document.getElementById('myVideo') !== null){
        document.getElementById('myVideo').removeEventListener('ended',_okg.videoEventEnded,false);
    }
    $('.okaoka_player').html('');
    callBack();
}