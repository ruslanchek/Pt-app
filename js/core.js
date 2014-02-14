var Atom = function(options){
    var _this = this;

    this.paper = null;

    this.prepare = function (){
        this.paper = Raphael(document.getElementById(options.div_id), options.size, options.size);
    };

    this.colorLuminance = function(hex, lum){
        hex = String(hex).replace(/[^0-9a-f]/gi, '');

        if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }

        lum = lum || 0;

        var rgb = "#", c, i;

        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00"+c).substr(c.length);
        }

        return rgb;
    };

    this.setOrbitAppearDelay = function(i, orbit, delay, method){
        setTimeout(function(){
            method(i, orbit);
        }, delay);
    };

    this.getElectronCoords = function(angle, radius, center){
        var o = {},
            radians_to_degrees = Math.PI / 180,
            angle_ffset = 90;

        o.x = radius * Math.cos((angle - angle_ffset) * radians_to_degrees) + center;
        o.y = radius * Math.sin((angle - angle_ffset) * radians_to_degrees) + center;

        return o;
    };

    this.drawElectrons = function(orbit, radius){
        var electron_size = options.radius / 7.5,
            angle = 0,
            ang_step = 360 / orbit.electrons;

        orbit.electrons_obj = [];

        for(var i = 0, l = orbit.electrons; i < l; i++){
            var x = 0,
                y = 0 - radius,
                coords = this.getElectronCoords(angle, radius, options.size / 2);

            var electron = this.paper.circle(coords.x, coords.y, 0)
                .attr({
                    fill: orbit.color,
                    stroke: 'none'
                })
                .animate({
                    r: electron_size
                }, 400, '>')
                .hover(
                function(){
                    _this.hoverOrbit(orbit);
                },
                function(){
                    _this.unHoverOrbit(orbit);
                }
            );

            electron.orbit_name = orbit.electrons;

            orbit.electrons_obj.push(electron);

            angle += ang_step;
        }
    };

    this.hoverOrbit = function(orbit){
        orbit.animate({
            stroke: options.color
        }, 100, '<>');

        $.each(orbit.electrons_obj, function(key, val){
            val.animate({
                fill: options.color
            }, 100, '<>');

            $('span.orbit[data-element_id="' + options.id + '"][data-element_orbit="' + val.orbit_name + '"]').css({
                background: options.color,
                color: '#fff'
            });
        });
    };

    this.unHoverOrbit = function(orbit){
        orbit.animate({
            stroke: orbit.color
        }, 100, '<>');

        $.each(orbit.electrons_obj, function(key, val){
            val.animate({
                fill: orbit.color
            }, 100, '<>');

            $('span.orbit[data-element_id="' + options.id + '"][data-element_orbit="' + val.orbit_name + '"]').css({
                background: 'none',
                color: '#999'
            });
        });
    };

    this.drawOrbits = function(){
        var step_m = options.radius / 2.4,
            orbits = [],
            lum = 0,
            lum_c = 0; // Temp

        for(var i = 0, l = options.electrons.length; i < l; i++){
            var color = this.colorLuminance('#ddd', lum += lum_c);

            var orbit = _this.paper.circle(options.size / 2, options.size / 2, 1)
                .toBack()
                .attr({
                    fill: '#fff',
                    fillOpacity: 0,
                    stroke: color
                }).hover(
                function(){
                    _this.hoverOrbit(this);
                },
                function(){
                    _this.unHoverOrbit(this);
                }
            );

            orbit.color = color;
            orbit.electrons = options.electrons[i];

            orbits.push(orbit);

            this.setOrbitAppearDelay(i, orbit, 30 * i, function(i, orbit){
                var radius = options.radius + step_m * (i + 1);

                orbit.animate({
                    r: radius
                }, 800, 'elastic');

                setTimeout(function(){
                    _this.drawElectrons(orbit, radius);
                }, 550);
            });
        }
    };

    this.drawCore = function(){
        var circle = this.paper.circle(options.size / 2, options.size / 2, 1)
            .attr({
                fill: options.color,
                stroke: 'none'
            }).animate({
                r: options.radius
            }, 1000, 'elastic');

        var text = this.paper.text(options.size / 2, 65, options.name)
            .attr({
                fill: '#fff'
            }).animate({
                transform: 's' + options.radius / 12
            }, 1000, 'elastic');
    };

    this.draw = function() {
        this.drawCore();

        setTimeout(function(){
            _this.drawOrbits();
        }, 120);
    };

    this.clear = function(){
        if(this.paper){
            this.paper.clear();
        }
    };

    this.init = function() {
        this.prepare();
        this.draw();
    };
};

var core = {
	data: data_source,
	row_num: 0,
	current_z_index: 1001,
	
	bindCoordinatesIndicator: function () {
		$('.elements .element').hover(function () {
			var row = $(this).data('row'),
				group = $(this).data('group'),
				sub = $(this).data('sub');
				
			$('.elements .header-row .col-num, .elements .row-num').removeClass('hl');
			$('.elements .row-num[data-row="' + row + '"]').addClass('hl');
			$('.elements .header-row .col-num[data-group="' + group + '"]').addClass('hl').find('span i').html(sub);
			
		}, function () {
			$('.elements .header-row .col-num, .elements .row-num').removeClass('hl');
		});
	},
	
	getElementsForPeriod: function (period_num) {
		return jQuery.grep(this.data.elements, function(elm) {
		  	return elm.period == period_num;
		});
	},
	
	getElementMassHtml: function(mass, isotope_mass){
		var html = '';
		
		if(mass > 0){
			if(isotope_mass === true){
				html = '[' + mass + ']';
			}else{
				html = mass;
			}
		}
		
		return html;
	},
	
	createElementHTML: function (data) {
		return '<div class="element unit-' + data.width + ' row-height' + ((data.compressed === true) ? ' compressed' : '') + ((data.temporary === true) ? ' temporary' : '') + '" data-id="' + data.id + '" data-period="' + data.period + '" data-group="' + data.group + '" data-row="' + data.row + '" data-sub="' + data.sub + '" data-number="' + data.number + '">' + 
					'<a href="#">' + 
						'<span class="sub">' + data.sub + '</span>' + 
						'<span class="number">' + data.number + '</span>' + 
						'<span class="name element-type-' + data.type + '">' + data.name + '</span>' + 
						'<span class="title">' + data.title + '</span>' + 
						'<span class="mass">' + this.getElementMassHtml(data.mass, data.isotope_mass) + '</span>' +
					'</a>' + 
				'</div>';
	},
	
	createAdditionalElementHTML: function (data) {			
		return '<div class="element unit-1 row-height' + ((data.compressed === true) ? ' compressed' : '') + ((data.temporary === true) ? ' temporary' : '') + '" data-id="' + data.id + '" data-number="' + data.number + '">' + 
					'<a href="#">' + 
						'<span class="number">' + data.number + '</span>' + 
						'<span class="name element-type-' + data.type + '">' + data.name + '</span>' + 
						'<span class="title">' + data.title + '</span>' + 
						'<span class="mass">' + this.getElementMassHtml(data.mass, data.isotope_mass) + '</span>' +
					'</a>' + 
				'</div>';
	},
	
	createSpacerHTML: function (data) {
		var html = '',
			i = 0;
		
		while(i < data.width){
		 	html += '<div class="spacer unit-1 row-height" data-id="' + data.id + '" data-period="' + data.period + '" data-group="' + data.group + '" data-row="' + data.row + '"><span></span></div>';
		 	i++;
		}
	
		return html;
	},
	
	createLinkHTML: function (data) {
		return '<div class="element link unit-' + data.width + ' row-height' + ((data.compressed === true) ? ' compressed' : '') + '" data-id="' + data.id + '" data-period="' + data.period + '" data-group="' + data.group + '" data-row="' + data.row + '" data-sub="' + data.sub + '">' + 
					'<a href="#">' + 
						'<span class="sub">' + data.sub + '</span>' + 
						'<span class="number">' + data.number + '</span>' + 
						'<span class="name element-type-' + data.type + '">' + data.name + '</span>' + 
						'<span class="title">' + data.title + '</span>' + 
					'</a>' + 
				'</div>';
	
		return html;
	},
	
	createVoidnessHTML: function (data) {
		return '<div class="element voidness unit-' + data.width + ' row-height' + ((data.compressed === true) ? ' compressed' : '') + '" data-id="' + data.id + '" data-period="' + data.period + '" data-group="' + data.group + '" data-row="' + data.row + '" data-sub="' + data.sub + '">' + 
					'<a href="#">' + 
						'<span class="sub">' + data.sub + '</span>' + 
						'<span class="number">' + data.number + '</span>' +
					'</a>' + 
				'</div>';
	
		return html;
	},
	
	drawElementsRows: function (period_num) {
		var html = '',
			count = 0,
			elements = this.getElementsForPeriod(period_num);
			
		html += '<div class="row row-height">';
		
		this.row_num++;
		
		html += '<span class="row-num row-height" data-row="' + this.row_num + '"><span>' + this.row_num + '</span></span>';
		
		for(var i = 0, l = elements.length; i < l; i++){
			if(count < 11){
				count++;
			}else{
				count = 0;
				
				this.row_num++;
				
				html += '</div>';
				html += '<div class="row-breaker"></div>';
				html += '<div class="row row-height">';
				
				html += '<span class="row-num row-height" data-row="' + this.row_num + '"><span>' + this.row_num + '</span></span>';
			}
			
			if (elements[i].spacer === true){
				html += this.createSpacerHTML(elements[i]);
				
			} else if (elements[i].link === true){
				html += this.createLinkHTML(elements[i]);
				
			} else if (elements[i].voidness === true){
				html += this.createVoidnessHTML(elements[i]);
				
			} else {
				html += this.createElementHTML(elements[i]);
			}
		}
		
		html += '</div>';
		
		return html;
	},
	
	drawElements: function() {		
		$('.elements .period-row').each(function(){
			$(this).find('.period-content').html(core.drawElementsRows($(this).data('period')));
		});
	},
	
	drawAdditionals: function(type) {
		var html = '',
			elements = this.data[type];
	
		for(var i = 0, l = elements.length; i < l; i++){	
			if (elements[i].spacer === true){
				html += this.createSpacerHTML(elements[i]);
				
			} else {
				html += this.createAdditionalElementHTML(elements[i]);
			}
		}
		
		$('.' + type + '-content').html(html);
	},
	
	goFromElementLink: function($obj){
		var st = 0;
	
		switch($obj.data('id')){
			case 79 : {
				st = $('.lanthanides').offset().top
			} break;
			
			case 102 : {
				st = $('.actinides').offset().top
			} break;
			
			case 124 : {
				st = $('.superactinides').offset().top
			} break;
		}
		
		$('html, body').animate({
            scrollTop: st
        }, 600, "swing");
	},
	
	getElmByNumber: function(number){
		var e1 = jQuery.grep(this.data.elements, function(elm) {
		  	return elm.number == number;
		});
		
		var e2 = jQuery.grep(this.data.lanthanides, function(elm) {
		  	return elm.number == number;
		});
		
		var e3= jQuery.grep(this.data.actinides, function(elm) {
		  	return elm.number == number;
		});
		
		var e4 = jQuery.grep(this.data.superactinides, function(elm) {
		  	return elm.number == number;
		});
		
		if(e1[0]) return {element: e1[0], group: 'elements'};
		if(e2[0]) return {element: e2[0], group: 'lanthanides'};
		if(e3[0]) return {element: e3[0], group: 'actinides'};
		if(e4[0]) return {element: e4[0], group: 'superactinides'};
	},
	
	generateElementWindowHTML: function(e){
        var e_rows_html = '',
            e_html = '';

        if(e.element.electrons && e.element.electrons.length > 0){
            var e_rows = '';

            for(var i = 0, l = e.element.electrons.length; i < l; i++){
                e_rows += '<span class="orbit" data-element_id="' + e.element.id + '" data-element_orbit="' + e.element.electrons[i] + '">' + e.element.electrons[i] + '</span>';
            }

            e_rows_html = '<div class="electrons">' + e_rows + '<i class="show-electrons icon icon-dot-circled" data-id="' + e.element.id + '"></i></div>';

            e_html =    '<div class="ew-electrons" data-id="' + e.element.id + '">' +
                            '<div class="title">' + e.element.title + '</div>' +
                            '<div class="electrons">' +
                                e_rows +
                                '<i class="close-electrons icon-info" data-id="' + e.element.id + '"></i>' +
                            '</div>' +

                            '<div class="electrons-canvas" id="ec_' + e.element.id + '"></div>' +
                        '</div>';
        }

		var html = '<div class="element-window" data-id="' + e.element.id + '">' +
						'<div class="ew-content">' +
                            e_html +

                            '<div class="controls">' +
								//'<span class="handle icon-th" title="Двигать"></span>' +
								'<a href="#" class="close-me icon-cancel" data-id="' + e.element.id + '" title="Закрыть"></a>' +
							'</div>' +
							
							'<div class="info">' + 
								(( e.element.sub ) ? '<div class="sub">' + e.element.sub + '</div>' : '') +
								'<div class="number">' + e.element.number + '</div>' +
								'<div class="name element-type-' + e.element.type + '">' + e.element.name + '</div>' +
								'<div class="title">' + e.element.title + '</div>' +
								'<div class="mass">' + this.getElementMassHtml(e.element.mass, e.element.isotope_mass) + '</div>' +
                                e_rows_html +
							'</div>' +
						'</div>' + 
					'</div>';
		
		return $('<div/>').html(html).contents();
	},

    closeElementInfo: function($ew, $obj){
        if(!$ew.hasClass('animated')){
            $ew.removeClass('appear').addClass('disappear');

            $ew.animate({
                top: $obj.find('a').offset().top - $ew.height() / 2 + $obj.find('a').height() / 2,
                left: $obj.find('a').offset().left - $ew.width() / 2 + $obj.find('a').width() / 2
            }, 410);

            setTimeout(function(){
                $ew.remove();
            }, 410);
        }
    },

    showElectrons: function(id, e){
        var $o = $('.ew-electrons[data-id="' + id + '"]');

        if(!e.atom){
            e.atom = new Atom({
                id: id,
                div_id: 'ec_' + id,
                size: 250,
                name: e.element.name,
                radius: 30,
                color: $('.element[data-id="'+ id +'"] .name').css('color'),
                electrons: e.element.electrons
            });
        }

        e.atom.clear();
        e.atom.init();

        $o.show();
    },

    hideElectrons: function(id){
        var $o = $('.ew-electrons[data-id="' + id + '"]');

        $o.hide();
    },
	
	openElementInfo: function($obj){
		var element = this.getElmByNumber($obj.data('number')),
			$ew = this.generateElementWindowHTML(element);

        var id = element.element.id;

		$('body').append($ew);

        $ew.find('.close-me').off('click').on('click', function(e){
            e.preventDefault();
            core.closeElementInfo($(this).parent().parent().parent(), $obj);
        });

        $ew.find('.show-electrons[data-id="' + id + '"]').on('click', function(){
            core.showElectrons($(this).data('id'), element);
        });

        $ew.find('.close-electrons[data-id="' + id + '"]').on('click', function(){
            core.hideElectrons($(this).data('id'));
        });
		
		this.current_z_index++;

		$ew.css({
			top: $obj.find('a').offset().top - $ew.height() / 2 + $obj.find('a').height() / 2,
			left: $obj.find('a').offset().left - $ew.width() / 2 + $obj.find('a').width() / 2,
			zIndex: this.current_z_index
		});
				
		setTimeout(function(){
			$ew.addClass('appear animated');

            setTimeout(function(){
                $ew.removeClass('animated');
            }, 410);
		}, 50);
		
		$ew.draggable({
			addClasses: false
		});
		
		$ew.on('mousedown', function(){
			core.current_z_index++;
		
			$(this).addClass('dragging').css({
				zIndex: core.current_z_index
			});
		});
		
		$ew.on('mouseup', function(){
			$(this).removeClass('dragging');
		});
		
		$ew.on('dblclick', function(){
            core.closeElementInfo($ew, $obj);
		});
	},
	
	bindControls: function(){
		$('.elements .element.link a').off('click').on('click', function(e){
			core.goFromElementLink($(this).parent());
			e.preventDefault();
		});
		
		$('.elements .element').not('.link, .disabled, .spacer').find('a').off('click').on('click', function(e){
			core.openElementInfo($(this).parent());
			e.preventDefault();
		});
	},
	
	openElementByNumber: function(number){	
		$('.elements .element[data-number="' + number + '"]').find('a').trigger('click');
	},
	
	init: function() {
		this.drawElements();
		this.bindCoordinatesIndicator();
		this.drawAdditionals('lanthanides');
		this.drawAdditionals('actinides');
		this.drawAdditionals('superactinides');
		this.bindControls();

        var timer;

        $(window).on('scroll.hoverd', function(){
            clearTimeout(timer);

            if(!$('body').hasClass('disable-hover')){
                $('body').addClass('disable-hover');
            }

            timer = setTimeout(function(){
                $('body').removeClass('disable-hover');
            }, 300);
        });
	}
};

$(function() {
	core.init();
});