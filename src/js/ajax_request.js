var ajax_request = {
    _ajax : null,
    _base_url : "http://rx1930mut009.d01.local/api/okaoka/",
    _format : 'json',
    _callBack : null,
    init : function(){
        this._ajax = $();
    },
    get : function(uri, params, callBack){
        this.call(uri, "GET", params, callBack);
    },
    put : function(uri, params, callBack){
        this.call(uri, "PUT", params, callBack);
    },
    post : function(uri, params, callBack){
        this.call(uri, "POST", params, callBack);
    },
    delete : function(uri, params, callBack){
        this.call(uri, "delete", params, callBack);
    },
    call : function(uri, type, datas, callBack){
        this._callBack = callBack;
        $.ajax({
            url: this._base_url+uri,
            type: type,
            data: datas,
            dataType: this._format,
            timeout: 10000,
        }).done(this.success)
          .fail(this.fail)
          .always(this.always);
    },
    always : function(e){
    },
    success : function(e){
        ajax_request._callBack(e);
    },
    fail : function(error){
        if(error.statusText === "timeout") {
            console.log('le service n\'a pas répondu dans des délais suffisant, veuillez réessayer plus tard');
        }else{
            console.log('Une erreur est survenue lors du chargement de votre webservice');
        }
    }
}