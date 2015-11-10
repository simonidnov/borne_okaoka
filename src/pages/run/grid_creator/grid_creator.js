if(typeof require !== "undefined"){
    var fs = require('fs');
    var path = require('path');
}
var log = ""; 
var grid_creator = {
    sizes : {
        grid:{width:4800, height:1600},
        brick:{width:320, height:120},
        columns:0,lines:0, 
        offset:{left:240, top:80}
    },
    _current_level : 0,
    selection:{name:"", type:""},
    elements : {
        physics:{
            floor_collider:{
                picture:"../maps_new/decors/run_decors_floor_collider.png", id:0
            },
            floor_start_collider:{
                picture:"../maps_new/decors/run_decors_floor_start_collider.png", id:1
            },
            floor_end_collider:{
                picture:"../maps_new/decors/run_decors_floor_end_collider.png", id:2
            },
            tremplin_left_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_left_collider.png", id:3
            },
            tremplin_left_start_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_left_start_collider.png", id:4
            },
            tremplin_left_end_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_left_end_collider.png", id:5
            },
            tremplin_right_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_right_collider.png", id:6
            },
            tremplin_right_start_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_right_start_collider.png", id:7
            },
            tremplin_right_end_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_right_end_collider.png", id:8
            },
            tremplin_bottom_left_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_left_collider.png", id:9
            },
            tremplin_bottom_left_start_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_left_start_collider.png", id:10
            },
            tremplin_bottom_left_end_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_left_end_collider.png", id:11
            },
            tremplin_bottom_right_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_right_collider.png", id:12
            },
            tremplin_bottom_right_start_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_right_start_collider.png", id:13
            },
            tremplin_bottom_right_end_collider:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_right_end_collider.png", id:14
            },
            picots_collider:{
                picture:"../maps_new/decors/run_decors_picots_collider.png", id:15
            },
            picots_start_collider:{
                picture:"../maps_new/decors/run_decors_picots_start_collider.png", id:16
            },
            picots_end_collider:{
                picture:"../maps_new/decors/run_decors_picots_end_collider.png", id:17
            },
            watter_collider:{
                picture:"../maps_new/decors/run_decors_watter_collider.png", id:18
            },
            watter_start_collider:{
                picture:"../maps_new/decors/run_decors_watter_start_collider.png", id:19
            },
            watter_end_collider:{
                picture:"../maps_new/decors/run_decors_watter_end_collider.png", id:20
            },
            watter_next_collider:{
                picture:"../maps_new/decors/run_decors_watter_next_collider.png", id:21
            }
        },
        decors :{
            floor:{
                picture:"../maps_new/decors/run_decors_floor.png", id:0
            },
            floor_start:{
                picture:"../maps_new/decors/run_decors_floor_start.png", id:1
            },
            floor_end:{
                picture:"../maps_new/decors/run_decors_floor_end.png", id:2
            },
            tremplin_left:{
                picture:"../maps_new/decors/run_decors_tremplin_left.png", id:3
            },
            tremplin_left_start:{
                picture:"../maps_new/decors/run_decors_tremplin_left_start.png", id:4
            },
            tremplin_left_end:{
                picture:"../maps_new/decors/run_decors_tremplin_left_end.png", id:5
            },
            tremplin_right:{
                picture:"../maps_new/decors/run_decors_tremplin_right.png", id:6
            },
            tremplin_right_start:{
                picture:"../maps_new/decors/run_decors_tremplin_right_start.png", id:7
            },
            tremplin_right_end:{
                picture:"../maps_new/decors/run_decors_tremplin_right_end.png", id:8
            },
            tremplin_bottom_left:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_left.png", id:0
            },
            tremplin_bottom_left_start:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_left_start.png", id:0
            },
            tremplin_bottom_left_end:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_left_end.png", id:0
            },
            tremplin_bottom_right:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_right.png", id:0
            },
            tremplin_bottom_right_start:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_right_start.png", id:0
            },
            tremplin_bottom_right_end:{
                picture:"../maps_new/decors/run_decors_tremplin_bottom_right_end.png", id:0
            },
            picots:{
                picture:"../maps_new/decors/run_decors_picots.png", id:0
            },
            picots_start:{
                picture:"../maps_new/decors/run_decors_picots_start.png", id:0
            },
            picots_end:{
                picture:"../maps_new/decors/run_decors_picots_end.png", id:0
            },
            watter:{
                picture:"../maps_new/decors/run_decors_watter.png", id:0
            },
            watter_start:{
                picture:"../maps_new/decors/run_decors_watter_start.png", id:0
            },
            watter_end:{
                picture:"../maps_new/decors/run_decors_watter_end.png", id:0
            },
            watter_next:{
                picture:"../maps_new/decors/run_decors_watter_next.png", id:0
            }
        },
        elements:{
            circle:{
                picture:"../maps_new/elements/run_decors_element_circle.png", id:0
            },
            triangle:{
                picture:"../maps_new/elements/run_decors_element_triangle.png", id:0
            },
            square:{
                picture:"../maps_new/elements/run_decors_element_square.png", id:0
            },
            parachute:{
                picture:"../maps_new/decors/run_decors_element_parachute.png", id:0
            },
            double_jump:{
                picture:"../maps_new/decors/run_decors_element_double_jump.png", id:0
            },
            invicible:{
                picture:"../maps_new/decors/run_decors_element_invicible.png", id:0
            },
            ball_1:{
                picture:"../maps_new/decors/run_decors_element_ball_1.png", id:0
            },
            ball_2:{
                picture:"../maps_new/decors/run_decors_element_ball_2.png", id:0
            },
            ball_3:{
                picture:"../maps_new/decors/run_decors_element_ball_3.png", id:0
            },
            ball_4:{
                picture:"../maps_new/decors/run_decors_element_ball_4.png", id:0
            },
            ball_5:{
                picture:"../maps_new/decors/run_decors_element_ball_5.png", id:0
            },
            ball_6:{
                picture:"../maps_new/decors/run_decors_element_ball_6.png", id:0
            },
            ball_7:{
                picture:"../maps_new/decors/run_decors_element_ball_7.png", id:0
            },
            ball_8:{
                picture:"../maps_new/decors/run_decors_element_ball_8.png", id:0
            },
            ball_9:{
                picture:"../maps_new/decors/run_decors_element_ball_9.png", id:0
            },
            ball_10:{
                picture:"../maps_new/decors/run_decors_element_ball_10.png", id:0
            },
            enemy_circle:{
                picture:"../maps_new/decors/run_decors_element_enemy_circle.png", id:0
            },
            enemy_square:{
                picture:"../maps_new/decors/run_decors_element_enemy_square.png", id:0
            },
            enemy_triangle:{
                picture:"../maps_new/decors/run_decors_element_enemy_triangle.png", id:0
            }
        }
    },
    init : function(){
        this.sizes.columns = Math.round(this.sizes.grid.width/this.sizes.offset.left);
        this.sizes.lines = Math.round(this.sizes.grid.height/this.sizes.offset.top);
        
        this.create_grid(0);
        this.create_nav();
        this.set_listeners();
        
        $.each(_.keys(grid_creator.elements.physics), function(i, key){
            log+='self.game.load.image("'+key+'", "'+grid_creator.elements.physics[key].picture+'");';
        });
        $.each(_.keys(grid_creator.elements.decors), function(i, key){
            log+='self.game.load.image("'+key+'", "'+grid_creator.elements.decors[key].picture+'");';
        });
        $.each(_.keys(grid_creator.elements.elements), function(i, key){
            log+='self.game.load.image("'+key+'", "'+grid_creator.elements.elements[key].picture+'");';
        });

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
            $('#elements').removeClass('selected');
            $('#decors').removeClass('selected');
            $('.physics').css('display', 'block');
            $('.decors').css('display', 'none');
            $('.level.elements').css('display', 'none');
            $('#level_elements_'+self._current_level).css('display', 'none');
        });
                        
        $('#decors').on('click', function(){
            $('#physics').removeClass('selected');
            $('#elements').removeClass('selected');
            $('#decors').addClass('selected');
            $('.decors').css('display', 'block');
            $('.physics').css('display', 'none');
            $('.level.elements').css('display', 'none');
            $('#level_elements_'+self._current_level).css('display', 'none');
        });
        
        $('#elements').on('click', function(){
            $('#physics').removeClass('selected');
            $('#decors').removeClass('selected');
            $('#elements').addClass('selected');
            $('.decors').css('display', 'none');
            $('.physics').css('display', 'none');
            $('.level.elements').css('display', 'none');
            $('#level_elements_'+self._current_level).css('display', 'block');
        });
        
        $('#save').on('click', function(){
            self.save_levels(0);
        });
        $('#fileinput').on('change', function(){ console.log('change');self.open_level(); });

        $('.add_level').on('click', function(){
            var next_id = $('.content_grid .level.elements').length;
            self.create_grid(next_id);
            //$('.content_grid');
        });
    },
    select_level : function(target){
        this._current_level = target.attr('data-id');
        $('.level_tab').removeClass('selected');
        target.addClass('selected');
        $('.level').css('display', 'none'); 
        $('.level.elements').css('display', 'none');
        $('#level_'+target.attr('data-id')).css('display', 'block');
        //$('#level_elements_'+target.attr('data-id')).css('display', 'block');
    },
    create_elements_grid : function(id){
        if($('#level_elements_'+id).length === 0){
            $('.content_grid').append('<div class="level elements" id="level_elements_'+id+'"></div></div>');
        }
        $('.content_grid').css({
            width:this.sizes.grid.width,
            height:this.sizes.grid.height
        });
        var self = this;
        var columns = this.sizes.grid.width / 60;
        var lines = this.sizes.grid.height / 60;
        var curr_column = 0;
        var curr_line = 0;
        var nb_brick = columns*lines;
        for(var i=0; i<nb_brick; i++){
            $('#level_elements_'+id).append('<div id="element_'+id+'_'+i+'" data-type="" class="element"></div>');
            $('#element_'+id+'_'+i).css({
                left:this.sizes.grid.width - (curr_column * 60),
                top:this.sizes.grid.height - (curr_line * 60)
            });
            $('#element_'+id+'_'+i).on('click', function(){
                self.set_element_properties($(this));
            });
            curr_column++;
            if(curr_column > columns){
                curr_column = 0;
                curr_line++;
            }
        }
        
    },
    create_grid : function(id){
        $('.levels').append('<div class="level_tab" data-name="level_'+id+'" data-id="'+id+'"><div class="label">Level '+id+'</div><div class="destroy">X</div></div>');
        
        if($('#level_'+id).length === 0){
            $('.content_grid').append('<div class="level bricks" id="level_'+id+'"><div class="middle_line"></div></div>');
        }
        var self = this;
        $('.content_grid').css({
            width:this.sizes.grid.width,
            height:this.sizes.grid.height
        });
        $('.level_tab').off('click').on('click', function(){
            self.select_level($(this));
        });
        self.create_elements_grid(id);
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
        $('.level').css('width', ((this.sizes.offset.left * this.sizes.columns) + 320)+'px');
        $('.level').css('height', ((this.sizes.offset.top * this.sizes.lines) + 120)+'px');
        $('.middle_line').css('width', ((this.sizes.offset.left * this.sizes.columns) + 320)+'px');
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
        $.each(_.keys(this.elements.elements), function(i, el){
            $('.draggables .elements').append('<div id="element_el_'+i+'" class="draggable_element"></div>');
            $('#element_el_'+i).css({'background-image':'url('+self.elements.elements[el].picture+')'});
            $('#element_el_'+i).attr({
                'data-type':"elements",
                'data-name':el
            });
            $('#element_el_'+i).on('click', function(){
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
    set_element_properties : function(target){
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
                    for(var i=0; i<self.opened_level[grid].elements.length; i++){
                        $('#'+self.opened_level[grid].elements[i].id).attr({
                            'data-type':self.opened_level[grid].elements[i].type,
                            'data-name':self.opened_level[grid].elements[i].name
                        });
                        // this elements type name picture
                        $('#'+self.opened_level[grid].elements[i].id).css('background-image','url('+self.elements[self.opened_level[grid].elements[i].type][self.opened_level[grid].elements[i].name].picture+')');
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
        for(var l=0; l<$('.level.elements').length; l++){
            datas['level_'+l] = {"tiles":[],"elements":[]};
            for(var i=0; i<$('.level.bricks').eq(l).find('.brick').length; i++){
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
            for(var j=0; j<$('.level.elements').eq(l).find('.element').length; j++){
                if(typeof $('#element_'+l+'_'+j).attr('data-type') !== "undefined" || typeof $('#element_'+l+'_'+i).attr('data-name') !== "undefined"){
                    if($('#element_'+l+'_'+j).attr('data-type') !== "" && $('#element_'+l+'_'+i).attr('data-name') !== ""){
                        datas['level_'+l].elements.push({
                            "name":$('#element_'+l+'_'+j).attr('data-name'), 
                            "type":$('#element_'+l+'_'+j).attr('data-type'),
                            "id":'element_'+l+'_'+j,
                            "position":{
                                "x":parseInt($('#element_'+l+'_'+j).css('left').replace('px', '')),
                                "y":parseInt($('#element_'+l+'_'+j).css('top').replace('px', ''))
                            }
                        });
                    }
                }
                if( l === $('.level.elements').length-1 && j === $('.level.elements').eq(l).find('.element').length-1){
                    var blob = new Blob([JSON.stringify(datas)], {type: "text/plain;charset=utf-8"});
                    saveAs(blob, "level_"+level_id+".json");
                }
            }
        }
    },
    save_levels : function(id){
        if($('.full_content').length === 0){
            $('body').append('<div class="full_content"><div class="progress_content"><div class="status"></div><div class="progress"><div class="bar"></div></div></div></div>');
        }
        var self = this;
        console.log('save_levels ', id);
        //var saved_datas = {};
        $('.full_content .status').html('Save Level Bricks '+id);
        $('.full_content .bar').css('width', ((id*100)/($('.level.elements').length-1))+'%');
        setTimeout(function(){
            saved_datas['level_'+id] = {"tiles":[],"elements":[]};
            $('.full_content .status').html('Save Level Elements '+id);
            $('.full_content .bar').css('width', (((parseInt(id)+.5)*100)/($('.level.elements').length-1))+'%');
            setTimeout(function(){
                self.get_bricks(id, function(){
                    self.get_elements(id, function(){
                        if(id === $('.level.elements').length-1){
                            var blob = new Blob([JSON.stringify(saved_datas)], {type: "text/plain;charset=utf-8"});
                            saveAs(blob, "level_"+id+".json");
                            $('.full_content').remove();
                        }else{
                            id++;
                            self.save_levels(id);
                        }
                    });
                });
            },500);
        },500);
    },
    get_bricks : function(l, callBack){
        for(var i=0; i<$('.level.bricks').eq(l).find('.brick').length; i++){
            if(typeof $('#brick_'+l+'_'+i).attr('data-type') !== "undefined" || typeof $('#brick_'+l+'_'+i).attr('data-name') !== "undefined"){
                if($('#brick_'+l+'_'+i).attr('data-type') !== "" && $('#brick_'+l+'_'+i).attr('data-name') !== ""){
                    saved_datas['level_'+l].tiles.push({
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
            if(i === $('.level.bricks').eq(l).find('.brick').length-1){
                //saved_datas   
                callBack();
            }
        }
    },
    get_elements : function(l, callBack){
        for(var j=0; j<$('.level.elements').eq(l).find('.element').length; j++){
            if(typeof $('#element_'+l+'_'+j).attr('data-type') !== "undefined" || typeof $('#element_'+l+'_'+j).attr('data-name') !== "undefined"){
                if($('#element_'+l+'_'+j).attr('data-type') !== "" && $('#element_'+l+'_'+j).attr('data-name') !== ""){
                    saved_datas['level_'+l].elements.push({
                        "name":$('#element_'+l+'_'+j).attr('data-name'), 
                        "type":$('#element_'+l+'_'+j).attr('data-type'),
                        "id":'element_'+l+'_'+j,
                        "position":{
                            "x":parseInt($('#element_'+l+'_'+j).css('left').replace('px', '')),
                            "y":parseInt($('#element_'+l+'_'+j).css('top').replace('px', ''))
                        }
                    });
                }
            }
            if(j === $('.level.elements').eq(l).find('.element').length-1){
                callBack();
                //var blob = new Blob([JSON.stringify(datas)], {type: "text/plain;charset=utf-8"});
                //saveAs(blob, "level_"+level_id+".json");
            }
        }
    },
    get_levels : function(){
        if(!fs){
            return false;
        }
    }
}
var saved_datas = {};