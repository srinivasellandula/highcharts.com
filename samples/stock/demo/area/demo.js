$(function() {
	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function(data) {

		// Create the chart
		$('#container').highcharts('StockChart', {
			

			rangeSelector : {
				selected : 1
			},

			title : {
				text : 'AAPL Stock Price'
			},

			series : [{
				name : 'AAPL Stock Price',
				data : data,
				type : 'area',
				threshold : null,
				tooltip : {
					valueDecimals : 2
				},
				fillColor : {
					linearGradient : {
						x1: 0, 
						y1: 0, 
						x2: 0, 
						y2: 1
					},
					stops : [[0, Highcharts.getOptions().colors[0]], [1, 'rgba(0,0,0,0)']]
				}
			}]
		});
	});
});
