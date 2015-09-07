if(typeof require !== "undefined"){
    var fs = require('fs');
    var path = require('path');
}
var grid_creator = {
    sizes : {
        grid:{width:4800, height:1600},
        brick:{width:160, height:60},
        columns:0,lines:0, 
        offset:{left:120, top:40}
    },
    selection:{name:"", type:""},
    elements : {
        physics:{
            fl_ph:{picture:"../maps/small_maps/fl_ph.png", id:0},
            fl_ph_n:{picture:"../maps/small_maps/fl_ph_n.png", id:0},
            fl_ph_f:{picture:"../maps/small_maps/fl_ph_f.png", id:0},
            fl_ph_l:{picture:"../maps/small_maps/fl_ph_l.png", id:0},
            tr_tl_ph:{picture:"../maps/small_maps/tr_tl_ph.png", id:0},
            tr_tr_ph:{picture:"../maps/small_maps/tr_tr_ph.png", id:0},
            tr_tr_ph_f:{picture:"../maps/small_maps/tr_tr_ph_f.png", id:0},
            tr_tl_ph_f:{picture:"../maps/small_maps/tr_tl_ph_f.png", id:0},
            tr_bl_ph:{picture:"../maps/small_maps/tr_bl_ph.png", id:0},
            tr_bl_ph_f:{picture:"../maps/small_maps/tr_bl_ph_f.png", id:0},
            tr_br_ph:{picture:"../maps/small_maps/tr_br_ph.png", id:0},
            tr_br_ph_f:{picture:"../maps/small_maps/tr_br_ph_l.png", id:0},
            wt_ph:{picture:"../maps/small_maps/wt_ph.png", id:0},
            wt_ph_f:{picture:"../maps/small_maps/wt_ph_f.png", id:0},
            wt_ph_fn:{picture:"../maps/small_maps/wt_ph_fn.png", id:0},
            wt_ph_l:{picture:"../maps/small_maps/wt_ph_l.png", id:0},
            wt_ph_n:{picture:"../maps/small_maps/wt_ph_n.png", id:0},
            wt_ph_pn:{picture:"../maps/small_maps/wt_ph_pn.png", id:0},
            wt_ph_fn:{picture:"../maps/small_maps/wt_ph_fn.png", id:0},
            pc_ph:{picture:"../maps/small_maps/pc_ph.png", id:0},
            pc_ph_f:{picture:"../maps/small_maps/pc_ph_f.png", id:0},
            pc_ph_l:{picture:"../maps/small_maps/pc_ph_l.png", id:0}
        },
        decors :{
            fl:{picture:"../maps/small_maps/fl.png", id:0},
            fl_f:{picture:"../maps/small_maps/fl_f.png", id:0},
            fl_l:{picture:"../maps/small_maps/fl_l.png", id:0},
            tr_tl:{picture:"../maps/small_maps/tr_tl.png", id:0},
            tr_tl_f:{picture:"../maps/small_maps/tr_tl_f.png", id:0},
            tr_bl:{picture:"../maps/small_maps/tr_bl.png", id:0},
            tr_bl_f:{picture:"../maps/small_maps/tr_bl_f.png", id:0},
            tr_tr:{picture:"../maps/small_maps/tr_tr.png", id:0},
            tr_tr_f:{picture:"../maps/small_maps/tr_tr_f.png", id:0},
            tr_br:{picture:"../maps/small_maps/tr_br.png", id:0},
            tr_br_f:{picture:"../maps/small_maps/tr_br_l.png", id:0},
            wt:{picture:"../maps/small_maps/wt.png", id:0},
            wt_f:{picture:"../maps/small_maps/wt_f.png", id:0},
            wt_l:{picture:"../maps/small_maps/wt_l.png", id:0},
            wt_n:{picture:"../maps/small_maps/wt_n.png", id:0},
            pc:{picture:"../maps/small_maps/pc.png", id:0},
            pc_f:{picture:"../maps/small_maps/pc_f.png", id:0},
            pc_l:{picture:"../maps/small_maps/pc_l.png", id:0}
        }
    },
    init : function(){
        this.sizes.columns = (this.sizes.grid.width/this.sizes.offset.left);
        this.sizes.lines = (this.sizes.grid.height/this.sizes.offset.top);
        this.create_grid(0);
        this.create_nav();
        this.set_listeners();
    },
    set_listeners : function(){
        var self = this;
        $('#expand').on('click', function(){
            if($('.draggables').height() === 80){
                $(this).html('reduce');
                $('.draggables').css('height','240px');
            }else{
                $(this).html('expand');
                $('.draggables').css('height','80px');
            }
        });
        $('#physics').on('click', function(){
            $('#physics').addClass('selected');
            $('#decors').removeClass('selected');
            $('.physics').css('display', 'block');
            $('.decors').css('display', 'none');
        });
                        
        $('#decors').on('click', function(){
            $('#physics').removeClass('selected');
            $('#decors').addClass('selected');
            $('.decors').css('display', 'block');
            $('.physics').css('display', 'none');
        });
        
        $('#save').on('click', function(){
            self.save_level(0);
        });
        $('#fileinput').on('change', function(){ console.log('change');self.open_level(); });

        $('.add_level').on('click', function(){
            var next_id = $('.content_grid .level').length;
            self.create_grid(next_id);
            //$('.content_grid');
        });
    },
    select_level : function(target){
        $('.level_tab').removeClass('selected');
        target.addClass('selected');
        $('.level').css('display', 'none'); 
        $('#level_'+target.attr('data-id')).css('display', 'block');
    },
    create_grid : function(id){
        $('.levels').append('<div class="level_tab" data-name="level_'+id+'" data-id="'+id+'"><div class="label">Level '+id+'</div><div class="destroy">X</div></div>');
        
        if($('#level_'+id).length === 0){
            $('.content_grid').append('<div class="level" id="level_'+id+'"><div class="middle_line"></div></div>');
        }
        var self = this;
        $('.content_grid').css({
            width:this.sizes.grid.width,
            height:this.sizes.grid.height
        });
        $('.level_tab').off('click').on('click', function(){
            self.select_level($(this));
        });

        var curr_column = 0;
        var curr_line = 0;
        var nb_brick = this.sizes.columns*this.sizes.lines;
        for(var i=0; i<nb_brick; i++){
            $('#level_'+id).append('<div id="brick_'+id+'_'+i+'" data-type="" class="brick"></div>');
            $('#brick_'+id+'_'+i).css({
                left:this.sizes.grid.width - (curr_column * this.sizes.offset.left),
                top:this.sizes.grid.height - (curr_line * this.sizes.offset.top)
            });
            $('#brick_'+id+'_'+i).on('click', function(){
                self.set_properties($(this));
            });
            curr_column++;
            if(curr_column > this.sizes.columns){
                curr_column = 0;
                curr_line++;
            }
        }
    },
    create_nav : function(){
        var self = this;
        $.each(_.keys(this.elements.physics), function(i, el){
            $('.draggables .physics').append('<div id="element_ph_'+i+'" class="draggable"></div>');
            $('#element_ph_'+i).css({'background-image':'url('+self.elements.physics[el].picture+')'});
            $('#element_ph_'+i).attr({
                'data-type':"physics",
                'data-name':el
            });
            $('#element_ph_'+i).on('click', function(){
                self.select_type($(this));
            });
        });
        $.each(_.keys(this.elements.decors), function(i, el){
            $('.draggables .decors').append('<div id="element_dc_'+i+'" class="draggable"></div>');
            $('#element_dc_'+i).css({'background-image':'url('+self.elements.decors[el].picture+')'});
            $('#element_dc_'+i).attr({
                'data-type':"decors",
                'data-name':el
            });
            $('#element_dc_'+i).on('click', function(){
                self.select_type($(this));
            });
        });
    },
    select_type : function(target){
        $('.draggable').removeClass('selected');
        target.addClass('selected');
        this.selection.name = target.attr('data-name');
        this.selection.type = target.attr('data-type');
    },
    set_properties : function(target){
        if(target.attr("data-type") === this.selection.type){
            target.attr({
                'data-type': "",
                'data-name': ""
            });
            target.css({'background-image': 'none'});
            target.removeClass('setted');
        }else{
            target.attr({
                'data-type': this.selection.type,
                'data-name': this.selection.name
            });
            target.css({
                'background-image': 'url('+this.elements[this.selection.type][this.selection.name].picture+')'
            });
            target.addClass('setted');
        }
    },
    open_level : function(){
        var self = this;
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            alert('The File APIs are not fully supported in this browser.');
            return;
        }   

        input = document.getElementById('fileinput');
        if (!input) {
            alert("Um, couldn't find the fileinput element.");
        }
        else if (!input.files) {
            alert("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            alert("Please select a file before clicking 'Load'");               
        }
        else {
            file = input.files[0];
            fr = new FileReader();
            fr.onload = function(){
                self.opened_level = JSON.parse(fr.result);
                console.log(fr.result);
                /* create grids from array */
                /* first delete and recreate grid */
                $('.content_grid').html('');
                $('.level_tab').remove();
                $.each(_.keys(self.opened_level), function(i, grid){
                    self.create_grid(i);
                    for(var i=0; i<self.opened_level[grid].tiles.length; i++){
                        $('#'+self.opened_level[grid].tiles[i].id).attr({
                            'data-type':self.opened_level[grid].tiles[i].type,
                            'data-name':self.opened_level[grid].tiles[i].name
                        });
                        // this elements type name picture
                        $('#'+self.opened_level[grid].tiles[i].id).css('background-image','url('+self.elements[self.opened_level[grid].tiles[i].type][self.opened_level[grid].tiles[i].name].picture+')');
                    }
                });
                /* second applik display */
                $('.level_tab').eq(0).addClass('selected');
                $('.level').css('display', 'none');
                $('#level_0').css('display', 'block');
                
            };
            //fr.readAsText(file);
            fr.readAsText(file);
        }
    },
    save_level : function(level_id){
        var datas = {};
        for(var l=0; l<$('.level').length; l++){
            datas['level_'+l] = {"tiles":[]};
            for(var i=0; i<$('.level').eq(l).find('.brick').length; i++){
                if(typeof $('#brick_'+l+'_'+i).attr('data-type') !== "undefined" || typeof $('#brick_'+l+'_'+i).attr('data-name') !== "undefined"){
                    if($('#brick_'+l+'_'+i).attr('data-type') !== "" && $('#brick_'+l+'_'+i).attr('data-name') !== ""){
                        datas['level_'+l].tiles.push({
                            "name":$('#brick_'+l+'_'+i).attr('data-name'), 
                            "type":$('#brick_'+l+'_'+i).attr('data-type'),
                            "id":'brick_'+l+'_'+i,
                            "position":{
                                "x":parseInt($('#brick_'+l+'_'+i).css('left').replace('px', '')),
                                "y":parseInt($('#brick_'+l+'_'+i).css('top').replace('px', ''))
                            }
                        });   
                    }
                }
            }
        }
        var blob = new Blob([JSON.stringify(datas)], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "level_"+level_id+".json");
    },
    get_levels : function(){
        if(!fs){
            return false;
        }
    }
}