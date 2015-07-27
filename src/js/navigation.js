var navigation = {
    router  : null,
    page_properties : null,
    _current_page_name : null,
    _page_script : null,
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
            navigation.router.navigate('page/menu', {trigger:true, replace:true});
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
            queue.on("complete", callBack);
            queue.loadManifest(self.page_properties.styles, false);
            queue.load();
    },
    load_dependencies : function(callBack){
        var self = this;
        $.each(self.page_properties.dependencies, function(index, dependencie){
            self.page_properties.dependencies[index] = "pages/"+self._current_page_name+"/"+dependencie;
        });
        var queue = new createjs.LoadQueue();
            queue.on("complete", callBack);
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
        $('#backbutton').css('display', 'block');
        this._page_script = new window[this.page_properties.script_name];
        callBack();
    },
    refresh : function(){
        
    },
    destroy : function(){
        
    },
    kill : function(){
        
    }
}