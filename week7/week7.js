/* let datas = [
	{
		"id": 0,
		"name": "肥宅心碎賞櫻3日",
		"imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
		"area": "高雄",
		"description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
		"group": 87,
		"price": 1400,
		"rate": 10
	},
	{
		"id": 1,
		"name": "貓空纜車雙程票",
		"imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		"area": "台北",
		"description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
		"group": 99,
		"price": 240,
		"rate": 2
	},
	{
		"id": 2,
		"name": "台中谷關溫泉會1日",
		"imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		"area": "台中",
		"description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
		"group": 20,
		"price": 1765,
		"rate": 7
	}
]; */
let datas = [];


const genHtmlCard = (info) => 
	`<li class="ticketCard">
		<div class="ticketCard-img">
			<a href="#">
				<img src="${info.imgUrl}" alt="${info.name}">
			</a>
			<div class="ticketCard-region">${info.area}</div>
			<div class="ticketCard-rank">${info.rate}</div>
		</div>
		<div class="ticketCard-content">
			<div>
				<h3>
					<a href="#" class="ticketCard-name">${info.name}</a>
				</h3>
				<p class="ticketCard-description">
					${info.description}
				</p>
			</div>
			<div class="ticketCard-info">
				<p class="ticketCard-num">
					<span><i class="fas fa-exclamation-circle"></i></span>
					剩下最後 <span id="ticketCard-num"> ${info.group} </span> 組
				</p>
				<p class="ticketCard-price">
					TWD <span id="ticketCard-price">$${info.price}</span>
				</p>
			</div>
		</div>
	</li>`;


// 取得元素
const getElement = selector => document.querySelector(selector);


function renderChart()
{
	const chart = c3.generate({
		bindto: "#chart",
		data: {
			columns: getChartData(),
			type: 'donut',
			color: function (color, item) {
				switch (item) {
					case '台北':
						return '#26BFC7';
					case '台中':
						return '#5151D3';
					case '高雄':
						return '#E68619';
					default:
						return color;
				}
			},
		},
		donut: {
			title: "套票地區比重",
			width: 10,	// 甜甜圈本身的寬度
			label: { show: false },
		},
		size: {
			width: 216,
			height: 183,
		},
	});
}

function getChartData()
{
	// 統計地區數量
	const countData = {};
	
	datas.forEach(function (item) {
		if (countData[item.area]) {
			countData[item.area] ++;
		}
		else {
			countData[item.area] = 1;
		}
	});
	// console.log(`countData ==>`, countData);
	
	
	// 轉成圖表資料
	const chartDatas = Object.entries(countData);
	
	
	// 排序
	const areaWeightData = {
		台北: 1,
		台中: 2,
		高雄: 3,
		'': 999,
	};
	
	chartDatas.sort(function (a, b) {
		return areaWeightData[a[0]] - areaWeightData[b[0]];
	});
	// console.log(chartDatas);
	
	
	return chartDatas;
}


function renderCardArea(datas)
{
	let html = '';
	datas.forEach(function (item) {
		html += genHtmlCard(item);
	});
	
	getElement(".ticketCard-area").innerHTML = html;
}


function search(region)
{
	let filterDatas = datas;
	
	// 有選擇地區
	if (region) {
		filterDatas = datas.filter(function (item) {
			return item.area === region;
		});
	}
	
	getElement("#resultCount").textContent = filterDatas.length;
	renderCardArea(filterDatas);
}


function add()
{
	const obj = {
		"id": getNextId(),
		"name": getElement("#ticketName").value,
		"imgUrl": getElement("#ticketImgUrl").value,
		"area": getElement("#ticketRegion").value,
		"description": getElement("#ticketDescription").value,
		"group": getElement("#ticketNum").value,
		"price": getElement("#ticketPrice").value,
		"rate": getElement("#ticketRate").value
	};
	datas.push(obj);
	// console.log(datas);
	
	// 清空表單
	getElement(".addTicket-form").reset();
	
	// 重新產出圖表
	renderChart();
	
	// 重新搜尋
	getElement(".regionSearch").value = "";
	search("");
}

function getNextId() {
	let id = -1;
	if (datas.length > 0) {
		id = datas.reduce((acc, item) => Math.max(acc, item.id), 0);
	}
	return ++id;
}


// initial
function init()
{
	axios.get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json")
		.then (function (res) {
			// console.log(res);
			datas = res.data.data;
			renderChart(datas);
			renderCardArea(datas);
		})
		.catch (function (err) {
			console.log(err);
		});
	
	getElement(".addTicket-btn").addEventListener("click", function (event) {
		add();
	});
	
	getElement(".regionSearch").addEventListener("change", function (event) {
		// console.log(this);
		search(this.value);
	});
}

init();
