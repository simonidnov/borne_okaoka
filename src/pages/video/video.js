var self = null;
function video(){
    this.playlist_uri = "/playlist/";   
    this.playlist = null;
    this._current_video = 0;
    this.init();
}
video.prototype.init = function(){
    console.log('init video');
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
    self = this;
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
            self.connexion_error();
            return false;
        }
        console.log(data);
        var parser = new DOMParser();
        self.playlist = parser.parseFromString(data, "text/xml");
        self.play_vid(self._current_video);
    });
}
video.prototype.connexion_error = function(){
    $('.connexion_error').css('display', 'block');
}
video.prototype.play_vid = function(id){
    console.log(id);
    if(typeof _node === "undefined"){
        _node = new node_utilities();  
    }
    $('.okaoka_player').css('display', 'block');
    var file_name = self.playlist.getElementsByTagName('SCENARIO')[0].getElementsByTagName('VIDEO')[id].getAttribute('FILE');
    var file_uri = _node.get_user_home()+self.playlist_uri+file_name;
    
    $('.okaoka_player').html('<video width="'+window.innerWidth+'" height="'+window.innerHeight+'" id="myVideo"  autoplay="autoplay" src="file://'+file_uri+'" type="'+self.playlist.getElementsByTagName('SCENARIO')[0].getElementsByTagName('VIDEO')[id].getAttribute('type')+'"></video>');
    document.getElementById('myVideo').addEventListener('ended',self.videoEventEnded,false);
}
video.prototype.videoEventEnded = function(e){
    self._current_video++;
    if(self._current_video > self.playlist.getElementsByTagName('SCENARIO')[0].getElementsByTagName('VIDEO').length-1){
        self._current_video = 0;
    }
    self.play_vid(self._current_video);
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
        document.getElementById('myVideo').removeEventListener('ended',self.videoEventEnded,false);
    }
    $('.okaoka_player').html('');
    callBack();
}