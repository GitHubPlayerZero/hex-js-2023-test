const elmtResult = document.querySelector("#result");

const processError = (error) => {
	console.log(`error ==>`);
	console.log(error);
};

const processFinally = () => {
	console.log(`Test finish!`);
}


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


function getOpenDataJson()
{
	console.clear();
	
	const openData = {
		"高雄市現任里長名冊": "https://api.kcg.gov.tw/api/service/get/ac5377e2-8084-4379-a929-1a2eafee64cd",
		"訓練就業中心各就服站台據點JSON格式": "https://www.ktec.gov.tw/site_api.php?type=json",
	};
	
	const dataType = document.querySelector("input[name='dataType']:checked").value;
	// console.log(dataType);
	const dataUrl = openData[dataType];
	// console.log(dataUrl);
	
	axios.get(dataUrl)
		.then (function (res) {
			console.log(res);
		})
		.catch (processError)
		.finally (processFinally);
}


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
function test()
{
	console.clear();
	
	// 111年新竹縣政府核定公教人員退休人數
	const url1 = "https://ws.hsinchu.gov.tw/001/Upload/1/opendata/8774/1936/7ec4b43f-41f0-4c44-ae7e-16cefda2a282.json";
	
	// 臺北市公共藝術
	const url2 = "https://publicart.taipei/service/artgetdata.ashx?District_tw=&completeinstallYear=&site_tw=";
	
	// 市政網站整合平台之熱門活動
	const url3 = "https://www.gov.taipei/OpenData.aspx?SN=DD102593FDB1A032";
	
	// 臺北市文化資產
	// 403
	const url4 = "https://iheritage.gov.taipei/data/api/designation/data";
	
	let data1;	// 111年新竹縣政府核定公教人員退休人數
	let data2;
	let data3;
	let data4;
	
	// axios.get(url4, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
	axios.get(url4)
		.then (function (res) {
			console.log(`url1 ==>`, res);
			data1 = res.data;
			console.log(`data1 ==>`, data1);
			console.log(``);
		})
		.catch (processError)
		.finally (function () {
			console.log(`====== Finally ======`);
			console.log(`data1 ==>`, data1);
			console.log(`data2 ==>`, data2);
			console.log(`data3 ==>`, data3);
			console.log(`data4 ==>`, data4);
		});
}
// test();


// function testAsync()
async function testAsync()
{
	const url = "https://iheritage.gov.taipei/data/api/designation/data";
	
	try {
		// axios.get(url)
		await axios.get(url)
		.then (function (res) {
			console.log(`url1 ==>`, res);
			data1 = res.data;
			console.log(`data1 ==>`, data1);
			console.log(``);
		})
		// 1. 非同步的 ajax 錯誤只能在這邊 catch
		// 2. 同步的 ajax 若有自己 catch，就不會跑到 try catch
		.catch (function (error) {
			console.log(`axios error ==>`);
			console.log(error);
		})
		.finally (function () {
			console.log(`====== Finally ======`);
		});
	}
	// 1. 無法 catch 非同步的 ajax 錯誤
	// 2. 同步的 ajax 若自己沒有 catch，這邊才會 catch 到
	catch (err) {
		console.log(`try catch error ==>`);
		console.log(err);
	}
	
	console.log(`test2 finish!`);
}
testAsync();

