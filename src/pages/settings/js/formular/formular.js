function formular(form_id, callBack){
    this._form = form_id;
    this._callBack = callBack;
    var self = this;
    this.files = {};
    this._current_input = null;
    $("#"+form_id+" label span").on('tap, click', function(){
        $('#'+$(this).parent().attr('for')).focus();
    });
    $.each($('#'+form_id+' input[type="file"]'), function(index, file){
        $(this).on('change', function(e){
            var input = this;
            var url = $(this).val();
            var input_file = $(this);
            var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
            if (this.files && this.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) 
            {
                var reader = new FileReader();
                reader.onload = function (e) {
                    self.files[input_file.attr('id')] = e.target.result;
                    callBack({"status":"unchecked", "datas": self.get_form_datas()});
                }
                reader.readAsDataURL(input.files[0]);
            }
            else
            {
                alert('error');
            }
        }); 
    });
    $.each($('#'+form_id+' input[type="text"], #'+form_id+' input[type="tel"], #'+form_id+' input[type="number"], #'+form_id+' input[type="password"], #'+form_id+' input[type="date"]'), function(index, input){
        self.setInputLabel($('#'+input.id));
        
        $('#'+self._form+' #'+input.id).on('focus', function(){
            $(this).addClass('focused');
            var label = $("label[for='"+$(this).attr('id')+"'] span");
            if(!label.hasClass('edit')){
                label.addClass('edit');
            }
        });
        $('#'+self._form+' #'+input.id).on('blur', function(){
            if($(this).hasClass('focused')){
                $(this).removeClass('focused');
            }
            var find = "'";
            var re = new RegExp(find, 'g');
            $(this).val($(this).val().replace(re, '’'));
            self.setInputLabel($(this));
            callBack({"status":"unchecked", "datas": self.get_form_datas()});
        });
        
        if(typeof $('#'+self._form+' #'+input.id).attr('data-minlentgh') != "undefined"){
            $('#'+self._form+' #'+input.id).on('keyup', function(e){
            });
        }
    });
    $.each($('#'+form_id+' textarea'), function(index, area){
        self.setInputLabel($('#'+area.id));
        
        $('#'+self._form+' #'+area.id).on('focus', function(){
            $(this).addClass('focused');
            var label = $("label[for='"+$(this).attr('id')+"'] span");
            if(!label.hasClass('edit')){
                label.addClass('edit');
            }
        });
        $('#'+self._form+' #'+area.id).on('blur', function(){
            if($(this).hasClass('focused')){
                $(this).removeClass('focused');
            }
            self.setInputLabel($(this));
            callBack({"status":"unchecked", "datas": self.get_form_datas()});
        });
        if(typeof $('#'+self._form+' #'+area.id).attr('data-minlentgh') != "undefined"){
            $('#'+self._form+' #'+area.id).on('keyup', function(e){
            });
        }
    });
    /* CREATE SLIDERS */
    $.each($('#'+self._form+' .slide_bar'), function(index, slider){
        if(typeof $(this).attr('data-value') !== "undefined"){
            var w = (parseInt($(this).attr('data-value')) * $(this).width()) / 100;
            $(this).find('.cursor').css('left', w+'px');
            $(this).find('.progress_bar').css('width', (w+$(this).find('.cursor').width())+'px');
        }
        self.create_slider($(this));
    });
    /* CREATE SWITCHERS */
    $.each($('#'+self._form+' .switch'), function(index, check){
        $('#'+self._form+' #'+check.id).on('tap, click', function(e){
            if($(this).hasClass('checked')){
                $(this).removeClass('checked');
                $(this).attr('data-checked', 'false');
            }else{
                $(this).addClass('checked');
                $(this).attr('data-checked', 'true');
            }
            callBack({"status":"unchecked", "datas": self.get_form_datas()});
        });
    });
    var radio_list_selector;
    /* CREATE Radio */
    $.each($('#'+self._form+' .radio_list'), function(index, list){
        radio_list_selector = list.id;
        $.each($('#'+self._form+' #'+radio_list_selector+' .radio'), function(index, radio){
            $('#'+self._form+' #'+radio.id).attr('data-list', radio_list_selector);
            $('#'+self._form+' #'+radio.id).on('tap, click', function(e){
                if($(this).hasClass('checked')){
                
                    $(this).removeClass('checked');
                    $(this).attr('data-checked', 'false');
                
                }else{
                    
                    $.each($(this).parent().parent().find('.radio'), function(index, radios){
                        $(this).removeClass('checked');
                        $(this).attr('data-checked', 'false');
                    });
                    
                    $(this).addClass('checked');
                    $(this).attr('data-checked', 'true');
                }
                callBack({"status":"unchecked", "datas": self.get_form_datas()});
            });
        });
    });
    
    $.each($('#'+form_id+' .tabs'), function(index, tabs){
        tab_list_selector = tabs.id;
        if($('#'+self._form+' #'+tab_list_selector).attr('data-type') == "radio"){
            $.each($('#'+self._form+' #'+tab_list_selector+' .tab'), function(index, tab){
                $(tab).attr('data-list', tab_list_selector);
                $(tab).on('tap, click', function(e){
                    if(!$(this).hasClass('checked')){
                        $.each($(this).parent().find('.tab'), function(index, radios){
                            $(this).removeClass('checked');
                            $(this).attr('data-checked', 'false');
                        });
                        $(this).addClass('checked');
                        $(this).attr('data-checked', 'true');
                    }
                    callBack({"status":"unchecked", "datas": self.get_form_datas()});
                });
            });
        }else{
            /* this is a check tab type : */
            $.each($('#'+self._form+' #'+tab_list_selector+' .tab'), function(index, tab){
                $(tab).attr('data-list', tab_list_selector);
                $(tab).on('tap, click', function(e){
                    if(!$(this).hasClass('checked')){
                        $(this).addClass('checked');
                        $(this).attr('data-checked', 'true');
                    }else{
                        $(this).removeClass('checked');
                        $(this).attr('data-checked', 'false');
                    }
                    callBack({"status":"unchecked", "datas": self.get_form_datas()});
                });
            });
        }
    });   
    
    /* CREATE Checbox */
    $.each($('#'+self._form+' .checkbox'), function(index, check){
        $('#'+self._form+' #'+check.id).on('tap, click', function(e){
            if($(this).hasClass('checked')){
                $(this).removeClass('checked');
                $(this).attr('data-checked', 'false');
            }else{
                $(this).addClass('checked');
                $(this).attr('data-checked', 'true');
            }
            callBack({"status":"unchecked", "datas": self.get_form_datas()});
        });
    });
    $.each($('#'+self._form).find('.picture_upload'), function(index, picture){
        var photo1 = new photo(function(){
        
        });
        $(picture).parent().find('.picture_canvas').on('tap, click', function(e){
            var target = $(this);
            photo1.Pick(function(obj){
                target.parent().find('.picture_upload').css('background-image', 'url('+obj.imageURI+')');
                self.percentProgress = 0;
                self.fileUpload(obj);
            });
        });
    });
    $.each($('#'+self._form).find('[data-for]'), function(index, label){
        $(label).on('tap, click', function(){
            var forel = $('#'+$(this).attr('data-for'));
            if(forel.hasClass('checked')){
                forel.removeClass('checked').attr('data-checked', 'false');
            }else{
                if(forel.hasClass('radio')){
                    $.each($(this).parent().parent().find('.radio'), function(index, radios){
                        $(this).removeClass('checked').attr('data-checked', 'false');
                    });
                }
                forel.addClass('checked').attr('data-checked', 'true');
            }
            callBack({"status":"unchecked", "datas": self.get_form_datas()});
        });
    });
    
    if($('#'+form_id+' div[data-validate]').length == 1){
        $('#'+form_id+' div[data-validate]').on('tap, click', function(){
            self.validate(callBack);
        });
    }
    
    if($('#'+form_id+' .color_picker_button').length > 0){
        this.create_color_picker();
        $.each($('#'+form_id+' .color_picker_button'), function(index, color_picker){
            $('#'+form_id+' .color_picker_button').on('tap, click', function(){
                self.current_color_picker = $(this);
                self.open_color_picker();
            });
        });
    }
}
formular.prototype.create_slider = function(_target){
    var self = this;
    if(utilities.is_touch_screen()){
        _target.on('touchstart', function(evt){
            _target.attr('data-drag', 'true');
        });
        _target.on('touchmove', function(evt){
            if(_target.attr('data-drag') === "true"){
                var pos = (evt.originalEvent.touches[0].pageX - _target.offset().left) - $(this).find('.cursor').width()/2;
                if(pos <= 0){
                    pos = 0;
                }
                if(pos >= (_target.width() - $(this).find('.cursor').width())){
                    pos = (_target.width() - $(this).find('.cursor').width());
                }
                _target.find('.progress_bar').css('width', pos+$(this).find('.cursor').width());
                $(this).find('.cursor').css('left', pos); 
            }
        });
        _target.on('touchend', function(evt){
            if( _target.attr('data-drag') === 'true'){
                var pos = (evt.originalEvent.changedTouches[0].pageX - _target.offset().left);
                if(pos <= 0){
                    pos = 0;
                }
                if(pos >= (_target.width() - $(this).find('.cursor').width())){
                    pos = (_target.width() - $(this).find('.cursor').width());
                }
                _target.find('.progress_bar').css('width', pos+$(this).find('.cursor').width());
                _target.find('.cursor').css('left', pos); 
                var percent = (pos * 100)/_target.width();
                _target.attr('data-value', percent);
                self._callBack({"status":"unchecked", "datas": self.get_form_datas()});
            }
            _target.attr('data-drag', 'false');
        });
    }else{
        _target.on('mousedown', function(){
            _target.attr('data-drag', 'true');
        });
        _target.on('mousemove', function(evt){
            if(_target.attr('data-drag') === "true"){
                var pos = (evt.pageX - _target.offset().left) - $(this).find('.cursor').width()/2;
                if(pos <= 0){
                    pos = 0;
                }
                if(pos >= (_target.width() - $(this).find('.cursor').width())){
                    pos = (_target.width() - $(this).find('.cursor').width());
                }
                _target.find('.progress_bar').css('width', pos+$(this).find('.cursor').width());
                $(this).find('.cursor').css('left', pos); 
            }
        });
        _target.on('mouseleave', function(evt){
            if( _target.attr('data-drag') === 'true'){
                var pos = (evt.pageX - _target.offset().left);
                if(pos <= 0){
                    pos = 0;
                }
                if(pos >= (_target.width() - $(this).find('.cursor').width())){
                    pos = (_target.width() - $(this).find('.cursor').width());
                }
                _target.find('.progress_bar').css('width', pos+$(this).find('.cursor').width());
                _target.find('.cursor').css('left', pos); 
                var percent = (pos * 100)/_target.width();
                _target.attr('data-value', percent);
                self._callBack({"status":"unchecked", "datas": self.get_form_datas()});
            }
            _target.attr('data-drag', 'false');
        });
        _target.on('click', function(evt){
            _target.attr('data-drag', 'false');
            var pos = (evt.pageX - _target.offset().left);
            if(pos <= 0){
                pos = 0;
            }
            if(pos >= (_target.width() - $(this).find('.cursor').width())){
                pos = (_target.width() - $(this).find('.cursor').width());
            }
            _target.find('.progress_bar').css('width', pos+$(this).find('.cursor').width());
            $(this).find('.cursor').css('left', pos); 
            var percent = (pos * 100)/_target.width();
            _target.attr('data-value', percent);
            self._callBack({"status":"unchecked", "datas": self.get_form_datas()});
        });
    }
}
formular.prototype.open_color_picker = function(){
    var self = this;
    if($('#'+self._form+' .f_color_picker').hasClass('closed')){
        $('#'+self._form+' .f_color_picker').removeClass('closed');
    }
    var pos = self.current_color_picker.parent().position();
    $('#'+self._form+' .f_color_picker').css({"width":$('#'+self._form).width()+'px', "left":"0px", "top": pos.top});
}
formular.prototype.close_color_picker = function(){
    var self = this;
    if(!$('#'+self._form+' .f_color_picker').hasClass('closed')){
        $('#'+self._form+' .f_color_picker').addClass('closed');
    }
    this._callBack({"status":"unchecked", "datas": this.get_form_datas()});
}
formular.prototype.create_color_picker = function(){
    var self = this;
    if($('#'+self._form+' .f_color_picker').length == 0){
        $('#'+self._form).append('<div class="f_color_picker closed"></div>');
        $.each(_.keys(colors), function(index, colorname){
            $.each(colors[colorname], function(c, colorhex){
                $('#'+self._form+' .f_color_picker').append('<div id="color_'+index+'_'+c+'" class="colorer" style="background-color:'+colorhex+';"></div>'); 
                if(colorhex == "none"){
                    $('#color_'+index+'_'+c).addClass('no-color');
                }
                $('#'+self._form+' #color_'+index+'_'+c).on('tap, click', function(){
                    self.current_color_picker.css('background-color', $(this).css('background-color'));
                    self.close_color_picker();
                });
            });
        });
    }
}
formular.prototype.setInputLabel = function(input){
    var self = this;
    var label = $("label[for='"+input.attr('id')+"'] span");
    if($('#'+input.attr('id')).val() == ""){
        if(label.hasClass('edit')){
            label.removeClass('edit');
        }
    }else{
        if(!label.hasClass('edit')){
            label.addClass('edit');
        }
    }
}
formular.prototype.check_label_vals = function(){
    $.each($('textarea, input'), function(index, area){
        var label = $("label[for='"+$(this).attr('id')+"'] span");
        if($(this).val() != "" && !label.hasClass('edit')){
            label.addClass('edit');
        }
    });
}
formular.prototype.destroy = function(){
    var self = this;
    $.each($('#'+this._form+' input'), function(index, input){
        $('#'+self._form+' #'+input.id).off('focus');
        $('#'+self._form+' #'+input.id).off('blur');
        $("#"+self._form+" label span").off('tap, click');
    });
}
formular.prototype.validate = function(callBack){
    var self = this;
    var error = [];
    var form_datas = self.get_form_datas();
    $.each($('#'+self._form+' input[type="text"], #'+self._form+' input[type="tel"], #'+self._form+' input[type="number"], #'+self._form+' input[type="password"], #'+self._form+' input[type="date"]'), function(index, input){
        if(typeof $('#'+self._form+' #'+input.id).attr('data-required') != "undefined"){
            if($('#'+self._form+' #'+input.id).attr('data-required') == "true" && $('#'+self._form+' #'+input.id).val() == ""){
                if(!$('#'+self._form+' #'+input.id).hasClass('error')){
                    $('#'+self._form+' #'+input.id).addClass('error');
                    error.push({"input":input.id});
                    callBack({"status":"error", "error":error, "datas": form_datas});
                    self.check_message($('#'+self._form+' #'+input.id));
                    return false;
                }
            }else{
                if($('#'+self._form+' #'+input.id).hasClass('error')){
                    $('#'+self._form+' #'+input.id).removeClass('error');
                }
            }
            if($('#'+self._form+' #'+input.id).attr('data-required') == "true" && typeof $('#'+self._form+' #'+input.id).attr('data-minlength') != "undefined"){
                if($('#'+self._form+' #'+input.id).val().length < parseInt($('#'+self._form+' #'+input.id).attr('data-minlength'))){
                    if(!$('#'+self._form+' #'+input.id).hasClass('error')){
                        $('#'+self._form+' #'+input.id).addClass('error');
                    }
                    error.push({"input":input.id});
                    callBack({"status":"error", "error":error, "datas": form_datas});
                    self.check_message($('#'+self._form+' #'+input.id));
                    return false;
                }else{
                    if($('#'+self._form+' #'+input.id).hasClass('error')){
                        $('#'+self._form+' #'+input.id).removeClass('error');
                    }
                }
            }
        }
        
        var testvalue = $('#'+self._form+' #'+input.id).val();
        if(typeof $('#'+self._form+' #'+input.id).attr('data-regex') != "undefined"){
            var reg = new RegExp($('#'+self._form+' #'+input.id).attr('data-regex'));
            if(!reg.test(testvalue)){
                if(!$('#'+self._form+' #'+input.id).hasClass('error')){
                    $('#'+self._form+' #'+input.id).addClass('error');
                }
                error.push({"input":input.id});
                callBack({"status":"error", "error":error, "datas": form_datas});
                self.check_message($('#'+self._form+' #'+input.id));
                $('#'+self._form+' #'+input.id).val(testvalue);
                return false;
            }else{
                if($('#'+self._form+' #'+input.id).hasClass('error')){
                    $('#'+self._form+' #'+input.id).removeClass('error');
                    $('#'+self._form+' #'+input.id).addClass('valid');
                    setTimeout(function(){
                        $('#'+self._form+' #'+input.id).removeClass('valid');
                    },200);
                }
            }
        }
        $('#'+self._form+' #'+input.id).val(testvalue);
    });
    form_datas.validated = true;
    callBack({"status":"success", "datas": form_datas});
}
formular.prototype.redraw_list_val = function(datas, target_id){
    $('#'+target_id).html('<div class="tabval"><div class="btn add center" id="add_tabval">+</div></div>');
    $.each(datas, function(index, val){
        $('#'+target_id).prepend('<div class="list_val" id="list_val_'+index+'" data-id="'+index+'"><input type="text" value="'+datas[index].label+'"/><input type="text" value="'+datas[index].link+'"/><div class="btn" id="rm_prop_'+index+'" data-id="'+index+'">-</div></div>');
        
        $('#'+target_id+' #list_val_'+index).on('tap, click', function(){
            $('#'+target_id+' #list_val_'+$(this).attr('data-id')).remove();
        });
    });
    
    $('#'+target_id+' #add_tabval').on('tap, click', function(){
        var key = $('#'+target_id+' .tabval').length;
        $(this).before('<div class="list_val" id="list_val_'+key+' data-id="'+key+'"><input type="text" value=""/><input type="text" value=""/><div class="btn" id="rm_prop_'+key+'" data-id="'+key+'">-</div></div>');
        
        $('#'+target_id+' #rm_prop_'+key).on('tap, click', function(){
            $('#'+target_id+' #list_val_'+$(this).attr('data-id')).remove();
        });
    });
    $('#'+target_id).sortable();
}
formular.prototype.redraw_tab_val = function(datas, target_id, prop){
    var self = this;
    $('#'+target_id).html('<div class="tabval"><div class="btn add center" id="add_tabval">+</div></div>');
    $.each(_.keys(datas), function(index, key){
        $('#'+target_id).prepend('<div class="tabval" id="tabval_'+index+'"><input id="tabval_key_'+index+'" type="text" class="tab autoCompleteTabNav" value="'+key+'"/><input id="tabval_val_'+index+'" type="text" class="val" value="'+datas[key]+'"/><div class="btn" id="rm_prop_'+index+'" data-id="'+index+'">-</div></div>');
        $('#'+target_id+' #rm_prop_'+index).on('tap, click', function(){
            $('#'+target_id+' #tabval_'+$(this).attr('data-id')).remove();
        });
        $('#'+target_id+' #rm_prop_'+index).on('blur', function(){
            self._callBack({"status":"unchecked", "datas": self.get_form_datas()});
        });
    });
    
    $('#'+target_id+' #add_tabval').on('tap, click', function(){
        var key = $('#'+target_id+' .tabval').length;
        $(this).before( '<div class="tabval" id="tabval_'+key+'"><input id="tabval_key_'+key+'" type="text" class="tab autoCompleteTabNav" value=""/><input id="tabval_val_'+key+'" type="text" class="val" value=""/><div class="btn" id="rm_prop_'+key+'" data-id="'+key+'">-</div></div>' );
        $('#'+target_id+' #rm_prop_'+key).on('tap, click', function(){
            $('#'+target_id+' #tabval_'+$(this).attr('data-id')).remove();
        });
        $('#'+target_id+' #rm_prop_'+key).on('blur', function(){
            self._callBack({"status":"unchecked", "datas": self.get_form_datas()});
        });
        self.create_autoComplete_events();
    });
    if($('#prop_tab_val').length == 0){
        $('body').append('<div id="prop_tab_val"></div>');
    }
    self.create_autoComplete_events();
}
formular.prototype.create_autoComplete_events = function(){
    var self = this;
    $('.autoCompleteTabNav').off('focus').off('blur').on('focus', function(){
        self._current_input = $(this);
    }).on('blur', function(){
        $('#prop_tab_val').css('display', 'none');
    }).autocomplete({
        minChars: 1,
        source: function(term, suggest){
            $('.prop_tab_item').off('click');
            $('#prop_tab_val').html('');
            term = term.term.toLowerCase();
            var choices = _.keys(css_properties_list.general);
            var suggestions = [];
            for (i=0;i<choices.length;i++){
                if(choices[i].toLowerCase().indexOf(term) != -1){
                    $('#prop_tab_val').append('<div id="prop_'+i+'" data-value="'+choices[i]+'" class="prop_tab_item">'+choices[i]+'</div>');
                    suggestions.push(choices[i]);
                    $('#prop_'+i).on('click, mouseenter', function(){
                        self._current_input.val($(this).attr('data-value'));
                    });
                }
            }
            if(suggestions.length > 0){
                var p = self._current_input.offset();
                $('#prop_tab_val').css({'display':'table', 'top': p.top, 'left': p.left});
            }
            suggest(suggestions);
        }
    });
}
formular.prototype.get_form_datas = function(){
    var datas = {};
    var self = this;
    $.each($('#'+self._form+' input[type="file"]'), function(index, file){
         datas[file.id] = self.files[file.id];
    });
    $.each($('#'+self._form+' input[type="text"], #'+self._form+' input[type="tel"], #'+self._form+' input[type="number"], #'+self._form+' input[type="password"], #'+self._form+' input[type="date"]'), function(index, input){
        if(!$(this).hasClass('tab') && !$(this).hasClass('val')){
            datas[input.id] = $('#'+self._form+' #'+input.id).val();   
        }
    });
    $.each($('.tab_val'), function(index, tab_val){
        datas[$(this).attr('id')] = {};
        $.each($('#'+tab_val.id+' .tabval'), function(t, tabval){
            var tab = $(this).find('.tab').val();
            var val = $(this).find('.val').val();
            datas[tab_val.id][tab] = val;
        });
    });
    $.each($('#'+self._form+' textarea'), function(index, area){
        datas[area.id] = $('#'+self._form+' #'+area.id).val();
    });
    
    $.each($('#'+self._form+' .switch'), function(index, check){
        datas[check.id] = $('#'+self._form+' #'+check.id).hasClass('checked');
    });
    var radio_list_selector;
    $.each($('#'+self._form+' .radio_list'), function(index, list){
        radio_list_selector = list.id;
        datas[radio_list_selector] = null;
        $.each($('#'+self._form+' #'+radio_list_selector+' .radio'), function(index, radio){
            if($('#'+self._form+' #'+radio.id).hasClass('checked')){
                datas[radio_list_selector] = index;
            }
        });
    });
    $.each($('#'+self._form+' .tabs'), function(index, tabs){
        tab_list_selector = tabs.id;
        datas[tab_list_selector] = null;
        if($(this).attr('data-type') == "radio"){
            $.each($('#'+self._form+' #'+tab_list_selector+' .tab'), function(index, tab){
                if($(tab).hasClass("checked")){
                    datas[tab_list_selector] = index;
                }
            });
        }else{
            datas[tab_list_selector] = [];
            $.each($('#'+self._form+' #'+tab_list_selector+' .tab'), function(index, tab){
                if($(tab).hasClass("checked")){
                    datas[tab_list_selector][index] = true;
                }else{
                    datas[tab_list_selector][index] = false;
                }
            });
        }
    });
    $.each($('#'+self._form+' .checkbox'), function(index, check){
        datas[check.id] = $('#'+self._form+' #'+check.id).hasClass('checked');
    });
    $.each($('#'+self._form+' .color_picker_button'), function(index, color_picker){
        datas[color_picker.id] = $('#'+self._form+' #'+color_picker.id).css('background-color');
    });
    $.each($('#'+self._form+' .slide_bar'), function(index, slider){
        datas[slider.id] = $('#'+self._form+' #'+slider.id).attr('data-value');
    });
    return datas;
}
formular.prototype.check_message = function(input){
    var self = this;
    if(typeof input.attr('data-message') != 'undefined'){
        if($('#'+self._form+ ' .messageerror').length == 0){
            $('#'+self._form).append('<div class="messageerror"><h4></h4></div>');
            $('#'+self._form+ ' .messageerror').on('tap, click', function(){
                TweenLite.to($('#'+self._form+ ' .messageerror'), .5, {
                    css:{
                        "height":"0px"
                    },
                    ease:Power4.easeIn
                });
            });
        }
        $('#'+self._form+ ' .messageerror p').html(input.attr('data-message'));
        TweenLite.to($('#'+self._form+ ' .messageerror'), .5, {
            css:{
                "height":$('#'+self._form+ ' .messageerror p').height()+40
            },
            ease:Power4.easeIn,
            onComplete : function(){
                TweenLite.to($('#'+self._form+ ' .messageerror'), .5, {
                    css:{
                        "height":"0px"
                    },
                    delay:5,
                    ease:Power4.easeIn
                });
            }
        });
    }
}


/*var colors = {
    "blue":["#06adc0","#40b3c4","#5dbac9","#73c0cf","#88c8d4","#9bcfda","#afd7e0","#c2dfe6","#d5e9ed","#e8f2f4"],
    "green":["#76be4b","#85c258","#92c869","#9fcd7b","#9fcd7b","#acd38d","#b9d99d","#c6e0af","#e1eed5","#eef5e7"],
    "pink":["#ee6a83","#f0798c","#f18796","#f395a1","#f4a3ac","#f6b1b7","#f8c0c4","#f9cfd1","#fbdede","#fdecec"],
    "lightblue":["#00bbd1","#38c0d5","#59c6d9","#71ccdc","#88d2e1","#9bd9e5","#b0e0e9","#c3e6ee","#d6eef2","#e8f5f7"],
    "bluedark":["#00b1a7","#00b7ae","#41bdb5","#60c4bd","#7acbc5","#90d2cd","#a7dad6","#bce2df","#d1ebe8","#e6f4f1"],
    "yellow":["#fec630","#feca43","#ffcf5a","#ffd470","#ffd984","#ffdf96","#ffe4a9","#ffeabd","#fff0d1","#fff6e5"],
    "white":["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],
    "black":["#000000","#403f41","#58585a","#6c6e70","#808284","#929497","#a7a9ab","#bbbdbf","#d1d2d4","#e5e6e7"],
    "trsp":["none","none","none","none","none","none","none","none","none","none"]
}*/
