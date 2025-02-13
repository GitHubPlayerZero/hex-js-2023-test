const elmtResult = document.querySelector("#result");

const processError = (error) => {
	console.log(`error ==>`);
	console.log(error);
};

const processFinally = () => {
	console.log(`Test finish!`);
};


/*
	111年新竹縣政府核定公教人員退休人數：
	https://data.gov.tw/dataset/160436
	https://ws.hsinchu.gov.tw/001/Upload/1/opendata/8774/1936/7ec4b43f-41f0-4c44-ae7e-16cefda2a282.json
	
	臺北市公共藝術：
	https://data.gov.tw/dataset/134270
	https://publicart.taipei/service/artgetdata.ashx?District_tw=&completeinstallYear=&site_tw=
	
	市政網站整合平台之熱門活動：
	https://data.gov.tw/dataset/121340
	https://www.gov.taipei/OpenData.aspx?SN=DD102593FDB1A032
	
	臺北市文化資產：
	https://data.gov.tw/dataset/121275
	https://iheritage.gov.taipei/data/api/designation/data
*/
const openData = {
	"111年新竹縣政府核定公教人員退休人數": "https://ws.hsinchu.gov.tw/001/Upload/1/opendata/8774/1936/7ec4b43f-41f0-4c44-ae7e-16cefda2a282.json",	// 少
	"市政網站整合平台之熱門活動": "https://www.gov.taipei/OpenData.aspx?SN=DD102593FDB1A032",	// 中
	"臺北市公共藝術": "https://publicart.taipei/service/artgetdata.ashx?District_tw=&completeinstallYear=&site_tw=",		// 多
	"高雄市現任里長名冊": "https://api.kcg.gov.tw/api/service/get/ac5377e2-8084-4379-a929-1a2eafee64cd",	// 多
	"訓練就業中心各就服站台據點JSON格式": "https://www.ktec.gov.tw/site_api.php?type=json",	// 403
};


// 基本 GET 測試 - 六角 API
function testGet(event)
{
	elmtResult.textContent = "";
	console.clear();

	console.log(`axios ==>`);
	console.log(axios);
	console.log(``);

	axios.get("https://hexschool.github.io/ajaxHomework/data.json")
		// handle success
		.then(function (response) {
			console.log(`response ==>`);
			console.log(response);
			console.log(``);

			console.log(`response.status ==>`, response.status);
			console.log(`response.statusText ==>`, response.statusText);
			console.log(``);

			console.log(`response.data ==>`);
			console.log(response.data);
			console.log(``);

			console.log(`response.hreaders ==>`);
			console.log(response.headers);
			console.log(``);

			console.log(`response.config ==>`);
			console.log(response.config);
			console.log(``);

			// 顯示資料
			elmtResult.textContent += response.data[0].name;
		})
		// handle error
		.catch(processError)
		// always executed
		.finally(processFinally);

	elmtResult.textContent += "AJAX 是非同步的...我先跑了！";
}


// 基本 POST 測試 - 六角 API
function testPost(action)
{
	console.log(`action = ${action}`);
	
	const url = `https://hex-escape-room.herokuapp.com/api/user/${action}`;
	console.log(`url = ${url}`);
	
	const data = {
		email: document.querySelector("#account").value,
		password: document.querySelector("#password").value
	};
	console.log('傳送資料 ==>', data);
	
	axios.post(url, data)
		.then(processPostResponse)
		.catch(processError)
		.finally(processFinally);
}

function processPostResponse(res)
{
	console.log(`response ==>`, res);
	
	const data = res.data;
	console.log(`data ==>`, data);
	
	let msg = '';
	data.success ? msg += `成功！` : msg += `失敗！`;
	msg += data.message;
	
	document.querySelector(".highlight").textContent = msg;
}

function testSignup() {
	console.clear();
	testPost('signup');
}
function testSignin() {
	console.clear();
	testPost('signin');
}


// 同步測試（async、await）- 取得政府開放資料 (非同步)
function getOpenData()
{
	console.clear();
	console.log(`[getOpenData] begin ......`);
	
	const dataType = document.querySelector("input[name='asyncDataType']:checked").value;
	console.log(`@ Data Type = ${dataType}`);
	const url = openData[dataType];
	console.log(`@ URL = ${url}`);
	
	try
	{
		axios.get(url)
			.then (function (res) {
				console.log(`response ==>`, res);
				console.log(`data ==>`, res.data);
			})
			// 非同步的 ajax 錯誤只能在這邊 catch
			.catch (function (error) {
				console.log(`Axios Error ==>`);
				console.log(error);
			})
			.finally (function () {
				console.log(`====== Axios Finally ======`);
			});
	}
	// 無法 catch 非同步的 ajax 錯誤
	catch (err) {
		console.log(`try catch error ==>`);
		console.log(err);
	}
	
	console.log(`[getOpenData] finish ! (這是最後一行，但因為非同步，會在 axios 之前就執行)`);
}


// 同步測試（async、await）- 取得政府開放資料 (同步)
async function getOpenDataAsync()
{
	console.clear();
	console.log(`[getOpenDataAsync] begin ......`);
	
	const dataType = document.querySelector("input[name='asyncDataType']:checked").value;
	console.log(`@ Data Type = ${dataType}`);
	const url = openData[dataType];
	console.log(`@ URL = ${url}`);
	
	try
	{
		await axios.get(url)
			.then (function (res) {
				console.log(`response ==>`, res);
				console.log(`data ==>`, res.data);
			})
			// 同步的 ajax 若有自己 catch，就不會跑到 try catch
			.catch (function (error) {
				console.log(`Axios Error ==>`);
				console.log(error);
			})
			.finally (function () {
				console.log(`====== Axios Finally ======`);
			});
	}
	// 同步的 ajax 若自己沒有 catch，這邊才會 catch 到
	catch (err) {
		console.log(`try catch error ==>`);
		console.log(err);
	}
	
	console.log(`[getOpenDataAsync] finish ! (這是最後一行，設定為同步時，此行會在 axios 之後執行)`);
}



const multipleTestUrls = [
	{
		name: "111年新竹縣政府核定公教人員退休人數",
		url: openData["111年新竹縣政府核定公教人員退休人數"],
	},
	{
		name: "高雄市現任里長名冊",
		url: openData.高雄市現任里長名冊,
	},
	{
		name: "臺北市公共藝術",
		url: openData.臺北市公共藝術
	},
];

// 同步測試（async、await）- 多個依序同步 (寫法 1) (完全依序執行)
// 在 function 裡直接寫死依序執行 axios
async function testAsyncMultiple1()
{
	console.clear();
	console.log(`[testAsyncMultiple1] begin ......`);
	
	try
	{
		console.log(``);
		console.log(`========== ${multipleTestUrls[0].name} ==========`);
		let url = multipleTestUrls[0].url;
		console.log(`@ URL = ${url}`);
		
		await axios.get(url)
			.then (function (res) {
				console.log(`response ==>`, res);
				console.log(`data ==>`, res.data);
			})
			.catch (function (error) {
				console.log(`Axios Error ==>`);
				console.log(error);
			})
			.finally (function () {
				console.log(`====== Axios Finally ======`);
			});
		
		
		console.log(``);
		console.log(`========== ${multipleTestUrls[1].name} ==========`);
		url = multipleTestUrls[1].url;
		console.log(`@ URL = ${url}`);
		
		await axios.get(url)
			.then (function (res) {
				console.log(`response ==>`, res);
				console.log(`data ==>`, res.data);
			})
			.catch (function (error) {
				console.log(`Axios Error ==>`);
				console.log(error);
			})
			.finally (function () {
				console.log(`====== Axios Finally ======`);
			});
		
		
		// console.log(``);
		// console.log(`========== 訓練就業中心各就服站台據點JSON格式 (502 Bad Gateway) ==========`);
		// url = openData.訓練就業中心各就服站台據點JSON格式;
		// console.log(`@ URL = ${url}`);
		
		// await axios.get(url)
		// 	.then (function (res) {
		// 		console.log(`response ==>`, res);
		// 		console.log(`data ==>`, res.data);
		// 	})
		// 	.catch (function (error) {
		// 		console.log(`Axios Error ==>`);
		// 		console.log(error);
		// 	})
		// 	.finally (function () {
		// 		console.log(`====== Axios Finally ======`);
		// 	});
		
		
		console.log(``);
		console.log(`========== ${multipleTestUrls[2].name} ==========`);
		url = multipleTestUrls[2].url;
		console.log(`@ URL = ${url}`);
		
		await axios.get(url)
			.then (function (res) {
				console.log(`response ==>`, res);
				console.log(`data ==>`, res.data);
			})
			.catch (function (error) {
				console.log(`Axios Error ==>`);
				console.log(error);
			})
			.finally (function () {
				console.log(`====== Axios Finally ======`);
			});
	}
	catch (err) {
		console.log(`try catch error ==>`);
		console.log(err);
	}
	
	console.log(``);
	console.log(`[testAsyncMultiple1] finish ! (這是最後一行，設定為同步時，此行會在 axios 之後執行)`);
}


// 同步測試（async、await）- 多個依序同步 (寫法 2) (無法真正達到需求)
// 使用 forEach 執行 axios
function testAsyncMultiple2()
{
	console.clear();
	console.log(`[testAsyncMultiple2] begin ......`);
	
	try
	{
		multipleTestUrls.forEach( async function (item, index) {
			console.log(``);
			console.log(`========== 測試 ${index + 1}：${item.name} ==========`);
			console.log(`@ URL ==> ${item.url}`);
			
			await axios.get(item.url)
				.then (function (res) {
					console.log(`response ==>`, res);
					console.log(`data ==>`, res.data);
				})
				.catch (function (error) {
					console.log(`Axios Error ==>`);
					console.log(error);
				})
				.finally (function () {
					console.log(`====== Axios Finally ======`);
				});
		} );
	}
	catch (err) {
		console.log(`try catch error ==>`);
		console.log(err);
	}
	
	console.log(`[testAsyncMultiple2] finish ! (這是最後一行，設定為同步時，此行會在 axios 之後執行)`);
}
/*
	綜合兩種寫法來看，寫法 1 才是真正想要達到的效果。
	這代表 async、await 的寫法有一些眉角，推測可能多一層就會失效…… 需要對 async、await 有更多瞭解。
*/


// 同步（axios.all） - 寫法 1
// 基礎認識
function testAxiosAll1()
{
	console.clear();
	
	axios.all([
		/*
			沒有寫 .then，其結果會傳送給 axios.spread()。
		*/
		axios
			.get(multipleTestUrls[2].url),
			// .get(multipleTestUrls[2].url)
			// .then (res => {
			// 	console.log(``);
			// 	console.log(`========== ${multipleTestUrls[2].name} ==========`);
			// 	console.log(`[Sub] Axios Response ==>`, res);
			// })
			// .catch (error => {
			// 	console.log(`[Sub] Axios Error ==>`, error);
			// })
			// .finally (() => {
			// 	console.log(`========== ${multipleTestUrls[2].name} Finally ==========`);
			// }),
		
		/*
			有寫 .then，其結果不會傳送給 axios.spread()，axios.spread() 的對應參數會是 undefined。
		*/
		axios
			// .get(multipleTestUrls[0].url),
			.get(multipleTestUrls[0].url)
			.then (res => {
				console.log(``);
				console.log(`========== ${multipleTestUrls[0].name} ==========`);
				console.log(`[Sub] Axios Response ==>`, res);
				console.log(`this ==>`, this);
			})
			.catch (error => {
				console.log(`[Sub] Axios Error ==>`, error);
			})
			.finally (() => {
				console.log(`========== ${multipleTestUrls[0].name} Finally ==========`);
			}),
		
		/*
			Error
			1. 沒有寫 .then，但因為此 API 會發生錯誤，所以會跑到 .catch。
			2. 有寫自己的 .catch 時會使用自己的，沒有的話就會使用外層 axios 的 .catch。
			3. 因為發生錯誤，axios.spread() 的對應參數會是 undefined。
		*/
		axios
			// .get(openData.訓練就業中心各就服站台據點JSON格式),
			.get(openData.訓練就業中心各就服站台據點JSON格式)
			// .then (res => {
			// 	console.log(``);
			// 	console.log(`========== 訓練就業中心各就服站台據點JSON格式 (error) ==========`);
			// 	console.log(`[Sub] Axios Response ==>`, res);
			// })
			.catch (error => {
				console.log(`[Sub] Axios Error ==>`, error);
			})
			.finally (() => {
				console.log(`========== 訓練就業中心各就服站台據點JSON格式 (error) Finally ==========`);
			}),
			
		/*
			沒有寫 .then，其結果會傳送給 axios.spread()。
		*/
		axios
			// .get(multipleTestUrls[1].url),
			.get(multipleTestUrls[1].url)
			// .then (res => {
			// 	console.log(``);
			// 	console.log(`========== ${multipleTestUrls[1].name} ==========`);
			// 	console.log(`[Sub] Axios Response ==>`, res);
			// })
			.catch (error => {
				console.log(`[Sub] Axios Error ==>`, error);
			})
			.finally (() => {
				console.log(`========== ${multipleTestUrls[1].name} Finally ==========`);
			}),
	])
		.then (
			/*
				1. spread() 中的函式，在請求全部完成後會調用，且請求回傳的結果會按順序對應參數，可以使用「其餘參數」的寫法來接收。
				2. 在 all() 裡的 axios 如果已有自己寫 then（catch、finally 不算），則這邊對應的參數回傳值會是 undefined。
			*/
			axios.spread( function (...arg) {
				console.log(``);
				console.log(`[testAxiosAll1] Axios Result ==>`);
				console.log(`this ==>`, this);
				console.log(arg);
				console.log(`[testAxiosAll1] 全部結束！`);
			} )
		)
		/*
			如果 all 裡的 axios 有發生錯誤，且沒有自己寫 catch 的話，就會跑到這邊來。
			而這也等同於所有 axios 無法繼續正常處理。
		*/
		.catch (function (error) {
			console.log(`[testAxiosAll1] Axios Error ==>`);
			console.log(error);
		})
		.finally (function () {
			console.log(`========== [testAxiosAll1] Axios Finally ==========`);
		})
}


// 同步（axios.all） - 寫法 2
// 將各個子 AJAX 寫成 function 回傳 axios
function getData1()
{
	console.log(`[getData1] ...`);
	return axios
		.get(multipleTestUrls[2].url);
		// .get(multipleTestUrls[2].url)
		// .then (res => {
		// 	console.log(``);
		// 	console.log(`========== ${multipleTestUrls[2].name} ==========`);
		// 	console.log(`[Sub] Axios Response ==>`, res);
		// })
		// .catch (error => {
		// 	console.log(`[Sub] Axios Error ==>`, error);
		// })
		// .finally (() => {
		// 	console.log(`========== ${multipleTestUrls[2].name} Finally ==========`);
		// });
}
function getData2()
{
	console.log(`[getData2] ...`);
	return axios
		// .get(multipleTestUrls[0].url);
		.get(multipleTestUrls[0].url)
		.then (res => {
			console.log(``);
			console.log(`========== ${multipleTestUrls[0].name} ==========`);
			console.log(`[Sub] Axios Response ==>`, res);
			console.log(`this ==>`, this);
		})
		.catch (error => {
			console.log(`[Sub] Axios Error ==>`, error);
		})
		.finally (() => {
			console.log(`========== ${multipleTestUrls[0].name} Finally ==========`);
		});
}
//Error
function getData3()
{
	console.log(`[getData3] ...`);
	return axios
		// .get(openData.訓練就業中心各就服站台據點JSON格式);
		.get(openData.訓練就業中心各就服站台據點JSON格式)
		// .then (res => {
		// 	console.log(``);
		// 	console.log(`========== 訓練就業中心各就服站台據點JSON格式 (error) ==========`);
		// 	console.log(`[Sub] Axios Response ==>`, res);
		// })
		.catch (error => {
			console.log(`[Sub] Axios Error ==>`, error);
		})
		.finally (() => {
			console.log(`========== 訓練就業中心各就服站台據點JSON格式 (error) Finally ==========`);
		});
}
function getData4()
{
	console.log(`[getData4] ...`);
	return axios
		// .get(multipleTestUrls[1].url);
		.get(multipleTestUrls[1].url)
		// .then (res => {
		// 	console.log(``);
		// 	console.log(`========== ${multipleTestUrls[1].name} ==========`);
		// 	console.log(`[Sub] Axios Response ==>`, res);
		// })
		.catch (error => {
			console.log(`[Sub] Axios Error ==>`, error);
		})
		.finally (() => {
			console.log(`========== ${multipleTestUrls[1].name} Finally ==========`);
		});
}

function testAxiosAll2()
{
	console.clear();
	
	axios.all([
		getData1(),
		getData2(),
		getData3(),
		getData4(),
	])
		.then (
			axios.spread( function (...arg) {
				console.log(``);
				console.log(`[testAxiosAll2] Axios Result ==>`);
				console.log(`this ==>`, this);
				console.log(arg);
				console.log(`[testAxiosAll2] 全部結束！`);
			} )
		)
		.catch (function (error) {
			console.log(`[testAxiosAll2] Axios Error ==>`);
			console.log(error);
		})
		.finally (function () {
			console.log(`========== [testAxiosAll2] Axios Finally ==========`);
		})
}


// 同步（axios.all） - 寫法 3
// 使用已定義好的 URL 陣列
function testAxiosAll3()
{
	console.clear();
	
	axios.all(
		// 使用 map() 產生新的 axios 陣列
		multipleTestUrls.map(function (item) {
			return axios
					.get(item.url)
					.finally(() => {
						console.log(`========== [${item.name}] Finally ==========`);
					});
		})
	)
		.then (
			axios.spread( function (...arg) {
				console.log(``);
				console.log(`[testAxiosAll3] Axios Result ==>`);
				console.log(`this ==>`, this);
				console.log(arg);
				console.log(`[testAxiosAll3] 全部結束！`);
			} )
		)
		.catch (function (error) {
			console.log(`[testAxiosAll3] Axios Error ==>`);
			console.log(error);
		})
		.finally (function () {
			console.log(`========== [testAxiosAll3] Axios Finally ==========`);
		})
}

