{
	const sampleDatas = [
		['data1', 30, 200, 100, 400, 150, 250],
		['data2', 50, 20, 10, 40, 15, 25]
	];
	
	// Sample - Chart
	{
		const chart = c3.generate({
			bindto: '#chartSample',
			data: {
				columns: sampleDatas
			}
		});
		
		console.log(chart);
	}
	
	// Sample - Customize Chart
	// 增加 y2 軸線, 對齊 data2 資料
	{
		const chart = c3.generate({
			bindto: '#chartSample2',
			data: {
				columns: sampleDatas,
				axes: {
					data2: 'y2' // ADD
				}
			},
			axis: {
				y2: {
					show: true // ADD
				}
			}
		});
	}
	
	// Sample - Show Axis Label
	// 增加軸線說明
	{
		const chart = c3.generate({
			bindto: '#chartSample3',
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 50, 20, 10, 40, 15, 25]
				],
				axes: {
					data2: 'y2'
				}
			},
			axis: {
				x: {
					label: {
						text: '這是 X 軸',
						position: 'outer-middle'
					}
				},
				y: {
					label: { // ADD
						text: '這是 Y 軸',
						position: 'outer-middle'
					}
				},
				y2: {
					show: true,
					label: { // ADD
						text: '這是 Y2 軸',
						position: 'outer-middle'
					}
				}
			}
		});
	}
}


// Sample - Donut Chart
{
	const chart = c3.generate({
		bindto: "#donutSample1",
		data: {
			columns: [
				['data1', 30],
				['data2', 60],
				['data3', 10],
			],
			colors: {
				data1: '#ff0',
				data3: 'gray',
			},
			type: 'donut',
			// onclick: function (d, i) { console.log("onclick", d, i); },
			// onmouseover: function (d, i) { console.log("onmouseover", d, i); },
			// onmouseout: function (d, i) { console.log("onmouseout", d, i); }
		},
		donut: {
			title: "這是 Donut Chart",
			width: 10,	// 甜甜圈本身的寬度
			label: { show: false },
		},
		// 如果同時設定了 data.colors，則會以 data.colors 為優先，沒有設定的部份會按順序使用此設定
		color: {
			pattern: ['red', '#00ff00', '#00f']
		},
		size: {
			width: 500,
			// height: 160
		}
	});
	
	console.log(chart);
	console.log(chart.data.colors());	// 列出資料顏色
	
	// 可以事後改變顏色
	// chart.data.colors({data1: "#000"});
	
	// 事後改變大小
	// chart.resize({
	// 	width: 155.81,
	// 	height: 160
	// });
}