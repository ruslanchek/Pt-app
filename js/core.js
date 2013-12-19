var core = {
	data: data_source,
	row_num: 0,

	init: function() {
		this.drawElements();
		this.bindCoordinatesIndicator();
	},
	
	bindCoordinatesIndicator: function() {
		$('.elements .element').hover(function() {
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
	
	getElementsForPeriod: function(period_num){
		return jQuery.grep(this.data.elements, function(elm) {
		  	return elm.period == period_num;
		});
	},
	
	createElementHTML: function(data){
		return '<div class="element unit-' + data.width + ' row-height" data-id="' + data.id + '" data-period="' + data.period + '" data-group="' + data.group + '" data-row="' + this.row_num + '" data-sub="' + data.sub + '">' + 
					'<a href="#">' + 
						'<span class="sub">' + data.sub + '</span>' + 
						'<span class="number">' + data.number + '</span>' + 
						'<span class="name element-type-' + data.type + '">' + data.name + '</span>' + 
						'<span class="title">' + data.title + '</span>' + 
						'<span class="mass">' + data.mass + '</span>' + 
					'</a>' + 
				'</div>';
	},
	
	createSpacerHTML: function(data){
		var html = '',
			i = 0;
		
		while(i < data.width){
		 	html += '<div class="spacer unit-1 row-height" data-id="' + data.id + '" data-period="' + data.period + '" data-group="' + data.group + '" data-row="' + this.row_num + '"><span></span></div>';
		 	i++;
		}
	
		return html;
	},
	
	drawElementsRows: function(period_num) {
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
			
			if(elements[i].spacer === true){
				html += this.createSpacerHTML(elements[i]);
			}else{
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
	}
}

$(function() {
	core.init();
});