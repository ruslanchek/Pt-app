var core = {
	data: data_source,
	row_num: 0,
	
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
	
	createElementHTML: function (data) {
		var mass = '';
		
		if(data.mass > 0){
			if(data.isotope_mass === true){
				mass = '[' + data.mass + ']';
			}else{
				mass = data.mass;
			}
		}
	
		return '<div class="element unit-' + data.width + ' row-height' + ((data.compressed === true) ? ' compressed' : '') + ((data.temporary === true) ? ' temporary' : '') + '" data-id="' + data.id + '" data-period="' + data.period + '" data-group="' + data.group + '" data-row="' + data.row + '" data-sub="' + data.sub + '" data-number="' + data.number + '">' + 
					'<a href="#">' + 
						'<span class="sub">' + data.sub + '</span>' + 
						'<span class="number">' + data.number + '</span>' + 
						'<span class="name element-type-' + data.type + '">' + data.name + '</span>' + 
						'<span class="title">' + data.title + '</span>' + 
						'<span class="mass">' + mass + '</span>' +
					'</a>' + 
				'</div>';
	},
	
	createAdditionalElementHTML: function (data) {
		var mass = '';
		
		if(data.mass > 0){
			if(data.isotope_mass === true){
				mass = '[' + data.mass + ']';
			}else{
				mass = data.mass;
			}
		}
			
		return '<div class="element unit-1 row-height' + ((data.compressed === true) ? ' compressed' : '') + ((data.temporary === true) ? ' temporary' : '') + '" data-id="' + data.id + '" data-number="' + data.number + '">' + 
					'<a href="#">' + 
						'<span class="number">' + data.number + '</span>' + 
						'<span class="name element-type-' + data.type + '">' + data.name + '</span>' + 
						'<span class="title">' + data.title + '</span>' + 
						'<span class="mass">' + mass + '</span>' +
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
	
	openElementInfo: function($obj){
		var element = this.getElmByNumber($obj.data('number')),
			$clone = $obj.addClass('cloned').clone();
			
		$clone.addClass('clone').appendTo('body');
		
		$clone.css({
			top: $obj.find('a').offset().top - $clone.height() / 2 + $obj.find('a').height() / 2,
			left: $obj.find('a').offset().left - $clone.width() / 2 + $obj.find('a').width() / 2
		});
		
		setTimeout(function () {
			$clone.addClass('appear all-320-ease-out-back');
		}, 50);
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
	
	init: function() {
		this.drawElements();
		this.bindCoordinatesIndicator();
		this.drawAdditionals('lanthanides');
		this.drawAdditionals('actinides');
		this.drawAdditionals('superactinides');
		this.bindControls();
	}
}

$(function() {
	core.init();
});