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
const getElement = (selector) => document.querySelector(selector);

function renderCardArea(datas) {
  let html = "";
  datas.forEach(function (item) {
    html += genHtmlCard(item);
  });

  getElement(".ticketCard-area").innerHTML = html;
}

function search(region) {
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

function add() {
  const obj = {
    id: getNextId(),
    name: getElement("#ticketName").value,
    imgUrl: getElement("#ticketImgUrl").value,
    area: getElement("#ticketRegion").value,
    description: getElement("#ticketDescription").value,
    group: getElement("#ticketNum").value,
    price: getElement("#ticketPrice").value,
    rate: getElement("#ticketRate").value
  };
  datas.push(obj);
  // console.log(datas);

  // 清空表單
  getElement(".addTicket-form").reset();

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
(function () {
  axios
    .get(
      "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json"
    )
    .then(function (res) {
      // console.log(res);
      datas = res.data.data;
      renderCardArea(datas);
    })
    .catch(function (err) {
      console.log(err);
    });

  getElement(".addTicket-btn").addEventListener("click", function (event) {
    add();
  });

  getElement(".regionSearch").addEventListener("change", function (event) {
    // console.log(this);
    search(this.value);
  });
  
})();
