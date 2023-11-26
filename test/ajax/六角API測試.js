const apiPath = "zhu001";

const processFinally = () => console.log(`## Test finish!`);

const processError = error => {
	console.log(`error ==>`);
	console.log(error);
	console.log(`error message = ${error.message}`);
	console.log(`error response ==>`, error?.response?.data);
	console.log(`response message = ${error?.response?.data?.message}`);
};

const getAuthority = () => {
	return {
		headers: {
			authorization: document.querySelector("#token").value
		}
	}
};


// 取得產品列表
document.querySelector("#btnGetProducts").addEventListener("click", getProducts);

function getProducts(e)
{
	console.clear();
	console.log(`取得產品列表 ...`);
	
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/products`;
	console.log(`url ==> ${url}`);
	
	axios.get(url)
		.then(function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
			console.log(`products ==>`, res.data.products);
		})
		.catch(processError)
		.finally(processFinally);
}


// 取得購物車列表
document.querySelector("#btnGetCarts").addEventListener("click", getCarts);

function getCarts(e)
{
	console.clear();
	console.log(`取得購物車列表 ...`);
	
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/carts`;
	console.log(`url ==> ${url}`);
	
	axios.get(url)
		.then(function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
			console.log(`carts ==>`, res.data.carts);
		})
		.catch(processError)
		.finally(processFinally);
}


// 加入購物車
document.querySelector("#btnPostCart").addEventListener("click", postCart);

function postCart(e)
{
	console.clear();
	console.log(`加入購物車 ...`);
	
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/carts`;
	console.log(`url ==> ${url}`);
	
	const data = {
		"data": {
			"productId": "7ZswM5rstD5x6k4WhjHQ",	// Antony 床邊桌
			// "productId": "Ej8NObTqfZKhZqwyKxon",	// Louvre 單人床架
			// "productId": "alUPjkZqnrv3NM5pD7vT",	// Jordan 雙人床架／雙人加大
			"quantity": 3
		}
	};
	console.log(`data ==>`, data);
	
	axios.post(url, data)
		.then(function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
			console.log(`response carts ==>`, res.data?.carts);
		})
		.catch (processError)
		.finally (processFinally);
}


// 編輯購物車產品數量
document.querySelector("#btnPatchQuantity").addEventListener("click", patchQuantity);

function patchQuantity(e)
{
	console.clear();
	console.log(`編輯購物車產品數量 ...`);
	
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/carts`;
	console.log(`url ==> ${url}`);
	
	const data = {
		"data": {
			// "id": "aaa",
			"id": "0v5z6oarYRdZKXZ3YrTx",
			// "id": "xIvXQyOUyiTlXazcPG4x",
			"quantity": 4
		}
	};
	console.log(`data ==>`, data);
	
	axios.patch(url, data)
		.then (function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
		})
		.catch (processError)
		.finally (processFinally);
}


// 刪除購物車內特定產品
document.querySelector("#btnDeleteCart").addEventListener("click", deleteCart);

function deleteCart(e)
{
	console.clear();
	console.log(`刪除購物車內特定產品 ...`);
	
	const orderId = "IDpFaGSBj95z0gX9fhMz";
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/carts/${orderId}`;
	console.log(`url ==> ${url}`);
	
	axios.delete(url)
		.then (function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
			console.log(`response data message ==>`, res.data?.message);
			console.log(`response carts ==>`, res.data?.carts);
		})
		.catch (processError)
		.finally (processFinally);
}


// 清除購物車內全部產品
document.querySelector("#btnDeleteCartAll").addEventListener("click", deleteCartAll);

function deleteCartAll(e)
{
	console.clear();
	console.log(`清除購物車內全部產品 ...`);
	
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/carts`;
	console.log(`url ==> ${url}`);
	
	axios.delete(url)
		.then (function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
			console.log(`response data message ==>`, res.data?.message);
			console.log(`response carts ==>`, res.data?.carts);
		})
		.catch (processError)
		.finally (processFinally);
}


// 送出購買訂單
document.querySelector("#btnPostOrder").addEventListener("click", postOrder);

function postOrder(e)
{
	console.clear();
	console.log(`送出購買訂單 ...`);
	
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/orders`;
	console.log(`url ==> ${url}`);
	
	const data = {
		"data": {
			"user": {
				"name": "六角學院2",
				"tel": "07-5313506",
				"email": "hexschool@hexschool.com",
				"address": "高雄市六角學院路",
				"payment": "Apple Pay"
			}
		}
	};
	console.log(`data ==>`, data);
	
	axios.post(url, data)
		.then(function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
		})
		.catch(processError)
		.finally(processFinally);
}


// 取得訂單列表
document.querySelector("#btnGetOrders").addEventListener("click", getOrders);

function getOrders(e)
{
	console.clear();
	console.log(`取得訂單列表 ...`);
	
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/admin/${apiPath}/orders`;
	console.log(`url ==> ${url}`);
	
	axios.get(url, getAuthority())
		.then (function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
		})
		.catch (processError)
		.finally (processFinally);
}


// 修改訂單狀態
document.querySelector("#btnPutPaid").addEventListener("click", putPaid);

function putPaid(e)
{
	console.clear();
	console.log(`修改訂單狀態 ...`);
	
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/admin/${apiPath}/orders`;
	console.log(`url ==> ${url}`);
	
	const data = {
		"data": {
			"id": "NVy4pq0oxTZehrruamit",
			"paid": true
		}
	};
	console.log(`data ==>`, data);
	
	axios.put(url, data, getAuthority())
		.then (function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
		})
		.catch (processError)
		.finally (processFinally);
}


// 刪除特定訂單
document.querySelector("#btnDeleteOrder").addEventListener("click", deleteOrder);

function deleteOrder(e)
{
	console.clear();
	console.log(`刪除特定訂單 ...`);
	
	// const orderId = "aaaa";	// 400 找不到該筆訂單，因此無法刪除 RRR ((((；゜Д゜)))
	const orderId = "DyzrDCQsZTmUK9x2RvNj";
	
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/admin/${apiPath}/orders/${orderId}`;
	console.log(`url ==> ${url}`);
	
	axios.delete(url, getAuthority())
		.then (function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
		})
		.catch (processError)
		.finally (processFinally);
}


// 刪除全部訂單
document.querySelector("#btnDeleteOrderAll").addEventListener("click", deleteOrderAll);

function deleteOrderAll(e)
{
	console.clear();
	console.log(`刪除全部訂單 ...`);
	
	const url = `https://livejs-api.hexschool.io/api/livejs/v1/admin/${apiPath}/orders`;
	console.log(`url ==> ${url}`);
	
	axios.delete(url, getAuthority())
		.then (function (res) {
			console.log(res);
			console.log(`response data ==>`, res.data);
		})
		.catch (processError)
		.finally (processFinally);
}


function init() {
	document.querySelector("#token").focus();
}
init();