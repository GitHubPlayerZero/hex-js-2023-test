/* 認識 setTimeout 特性 */
function testExeOrder()
{
	console.clear();
	
	// 立即函式
	(() => {
		console.log(`1`);	// 執行順序 1
		
		// setTeimout 為非同步
		// 一定都會是最後才執行
		setTimeout(() => {
			console.log(`2`);	// 執行順序 3
			
			// 立即函式
			(() => {
				console.log(`3`);	// 執行順序 4
			}) ();
			
		}, 0);
		
	}) ();
	
	console.log(`4`);	// 執行順序 2
}


function testExeOrder2()
{
	console.clear();
	
	function getName(tag) {
		console.log(`${tag} ==> ${myName}`);
	}
	
	let myName = '小明';
	
	setTimeout(() => {
		myName = '杰倫';
		getName('setTimeout');	// 執行順序 2
	}, 0);
	
	getName('last');	// 執行順序 1
}


// 計算程式運行時間
function countTime()
{
	console.clear();
	
	console.time('計時');	// 開始
	for (let i = 1; i <= 50000; i++) {
		// console.log(i);
	}
	console.log(`我執行完了！`);
	console.timeEnd('計時');	// 結束
}

function testExeOrder3()
{
	console.clear();
	
	// 1.008056640625 ms
	// 0.7509765625 ms
	console.time(`[testExeOrder3] setTimeout 時間`);
	setTimeout(() => {
		console.timeEnd(`[testExeOrder3] setTimeout 時間`);
	}, 0);
}

function testExeOrder4()
{
	console.clear();
	
	console.time(`[testExeOrder4] setTimeout 時間`);
	
	// 164.755126953125 ms
	// 161.218017578125 ms
	// 證實 setTimeout 會放到最後才做
	setTimeout(() => {
		console.timeEnd(`[testExeOrder4] setTimeout 時間`);
	}, 0);
	
	console.log(`執行中...`);
	let id = 0;
	for (let i = 0; i < 100000000; i++) {
		id = parseInt(Math.random() * i);
	}
	console.log(`執行完畢！`);
}



/* 堆疊 */
function testStack()
{
	console.clear();
	
	console.time('早安');
	function eatBreakfast() {
		console.log(`吃早餐`);
	}
	
	function washDishes()
	{
		console.log(`洗餐盤`);
		debugger;
		let dishId = 0;
		for (let i = 0; i < 100000000; i++) {
			dishId = parseInt(Math.random() * i);
		}
		console.log(`dishId = ${dishId}`);
	}
	
	function callSomeone(someone) {
		debugger;
		setTimeout(() => {
			debugger;
			console.log(`打給 ${someone}`);
		}, 5000);
	}
	
	(function goodMorning () {
		eatBreakfast();
		washDishes();
		debugger;
		callSomeone('漂亮阿姨');
	}) ();
	console.timeEnd('早安');
}



/* 模擬非同步 */
function asyncFn(fn, time ) {
	setTimeout(fn, time);
}

function testAsyncFn()
{
	console.clear();
	
	const str = '這是一段非同步的函式';
	
	/*
		順序為 1 -> 3 -> 2
		且出現 2 之前會稍微停頓一下
	*/
	asyncFn(() => {
		console.log(str, 1);
	}, 100);
	asyncFn(() => {
		console.log(str, 2);
	}, 500);
	asyncFn(() => {
		console.log(str, 3);
	}, 100);
	
	
	/*
		把這段解開，增加等待時間，會發現雖然結果不變，但 2 不會停頓而是馬上出現。
		這代表 callback function 在計時結束後就會被準備好，等待堆疊裡的東西被清空才執行，且會按照計時結束的順序排定執行。
	*/
	/* let val = 0;
	for (let i = 1; i <= 1000000000; i++) {
		val = i;
	}
	console.log(`val = ${val}`); */
}

function testCallbackHell()
{
	console.clear();
	
	const str = '這是一段非同步的函式';
	
	asyncFn(() => {
		console.log(str, 1);
		asyncFn(() => {
			console.log(str, 2);
			asyncFn(() => {
				console.log(str, 3)
			}, 100);
		}, 500);
	}, 100);
}



/*
	Random user
	https://randomuser.me/
*/
function testRandomUser()
{
	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		success: function (data) {
			console.log(data);
		}
	});
}



/* Promise 基礎介紹 */

/*
	一般程式
	使用一般程式寫法，不特別使用 setTimeout 製造非同步效果，僅測試 Promise 寫法與特性。
*/
// 基本 Promise 測試 - 同步
function testBasePromise()
{
	console.clear();
	
	function myPromiseFn() {
		return new Promise((resolve, reject) => {
			console.log(`[myPromiseFn] start...`);
			resolve('Promise 完成');
		});
	}
	
	console.log(`start...`);
	console.log(``);
	
	const res1 = myPromiseFn();
	console.log(1, res1);	// Promise 物件
	console.log(``);
	
	myPromiseFn().then(res => {
		// 會最後才顯示，這代表 Promise 本身即為一個異步做法，無關乎裡面的程式寫法。
		console.log(2, res);	// 'Promise 完成'
	});
	console.log(``);
	
	console.log(`finish!`);
}


// 基本 Promise 測試 1
function testPromiseFn1()
{
	console.clear();
	
	function myPromiseFn()
	{
		/*
			1. 因為是函式建構子，所以可以 new。
				這邊是想要建構實體，因此用 new。
				不使用 new 是直接調用函式。
			2. 會帶兩個函式參數，分別代表 resolve (成功)、reject (失敗)。
				參數名稱可以自己改變，但通常會使用相同的名稱。
		*/
		return new Promise((resolve, reject) => {
			// resolve(1);
			
			// 可以放入非同步
			setTimeout(() => {
				resolve('成功');
			}, 3000);
		});
	}
	
	myPromiseFn()
		// 成功會對應 then，參數有 response，名稱可以自訂。
		.then((response) => {
			console.log(response);
		});
	
	
	/* console 會先被執行 */
	console.log(myPromiseFn);
	console.log(``);
	
	/*
		console 會出現：Promise {<pending>}
		在時間結束前將之展開，可以看到 PromiseState 為 "pending"；PromiseResult 為 undefined。
		在時間結束後才展開，可以看到 PromiseState 為 "fulfilled"；PromiseResult 為 "成功"。
	*/
	console.log(myPromiseFn());
	console.log(``);
}


// 基本 Promise 測試 2
function basePromiseFn1(status)
{
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (status) {
				console.log(`[basePromiseFn1] resolve!`);
				resolve('成功');
			} else {
				console.log(`[basePromiseFn1] reject!`);
				reject('失敗');
			}
		}, 500);
	});
}

function testPromiseFn2()
{
	console.clear();
	
	// 成功
	basePromiseFn1(true)
		.then((response) => {
			console.log(`測試成功 ==>`, response);
		});
	
	// 失敗
	basePromiseFn1(false)
		.catch((error) => {
			console.log(`測試失敗 ==>`, error);
		});
}


// 巢狀寫法 (通常不會這樣寫)
function testNestedPromise()
{
	console.clear();
	
	basePromiseFn1(true)
		.then(res => {
			console.log(1, res);
			basePromiseFn1(true)
				.then(res => {
					console.log(2, res);
					basePromiseFn1(true)
						.then(res => {
							console.log(3, res);
						})
				})
		});
}


// 連續呼叫寫法
function testContinuousPromise()
{
	console.clear();
	console.log(`start...`);
	
	/*
		第一次執行
		因為會 return 一個 Promise 物件，可以用變數去接收，之後再對此變數操作。
	*/
	const exe1 = basePromiseFn1(true);
	console.log('exe1', exe1);
	console.log(``);
	
	const exe2 = exe1.then (res => {
		console.log(1, res);	// 第一次結果
		
		// 第二次執行，原理同第一次執行
		return basePromiseFn1(true);
	});
	console.log('exe2', exe2);
	console.log(``);
	
	const exe3 = exe2.then (res => {
		console.log(2, res);	// 第二次結果
		return basePromiseFn1(true);	// 第三次執行
	});
	console.log('exe3', exe3);
	console.log(``);
	
	exe3.then (res => {
		console.log(3, res);	// 第三次結果
	});
	
	console.log(`finish!`);
	console.log(``);
}


/*
	鏈接寫法
	其實鏈接寫法只是將連續呼叫直接串寫在一起。
*/
function testLinkedPromise()
{
	console.clear();
	console.log(`start...`);
	
	basePromiseFn1(true)	// 第一次執行
		.then (res => {
			console.log(1, res);	// 第一次結果
			return basePromiseFn1(true);	// 第二次執行
		})
		.then (res => {
			console.log(2, res);	// 第二次結果
			return basePromiseFn1(true);	// 第三次執行
		})
		.then (res => {
			console.log(3, res);	// 第三次結果
		});
	
	console.log(`finish!`);
}

/*
	鏈接 - catch、finally
	中間有失敗就會直接跑到最後的 catch
	不管成功或失敗，最後都會執行 finally
*/
function testLinkedPromiseCatch1()
{
	console.clear();
	
	basePromiseFn1(true)	// 第一次執行
		.then (res => {
			console.log(1, res);	// 第一次結果
			// return basePromiseFn1(true);	// 第二次執行
			return basePromiseFn1(false);	// 第二次執行
		})
		.then (res => {
			console.log(2, res);	// 第二次結果
			return basePromiseFn1(true);	// 第三次執行
			// return basePromiseFn1(false);	// 第三次執行
		})
		// 如果把 catch 安插在中間，就會跑到這個 catch，其後的 then 雖然會繼續被執行，但是沒有效用 (undefined)。
		/* .catch (error => {
			console.log(`error1`, error);
		}) */
		.then (res => {
			console.log(3, res);	// 第三次結果
		})
		.catch (error => {
			console.log(`error2`, error);
		})
		.finally (() => {
			console.log(`This is finally!`);
		});
}

// 鏈接
// catch 呼叫 Promise (通常不會這樣處理)
function testLinkedPromiseCatch2()
{
	console.clear();
	
	basePromiseFn1(true)
		.then (res => {
			console.log(1, res);
			return basePromiseFn1(false);
		})
		.catch (error => {
			console.log(error);
			return basePromiseFn1(true);
		})
		.then (res => {
			console.log(`After catch ==>`, res);
		});
}


/* Promise 實戰方法 */
/* axios */

// 基本測試
function testBaseAxios()
{
	axios.get('https://randomuser.me/api/')	// success
	// axios.get('https://randomuser.me/ap/')	// fail
		.then (res => {
			console.log(res);
			console.log(``);
			const data = res.data.results[0];
			console.log(`data ==>`, data);
			console.log(data.email);
			
			// 解構寫法
			const {email} = data;
			console.log(`email ==>`, email);
		})
		.catch (error => {
			console.log(error);
			console.log(``);
			console.log(`message ==>`, error.message);
		});
}


/*
	連續依序請求 (鏈接)
	1. 第一筆是隨機取得。
	2. 第二筆是使用第一筆的 seed 取得。
*/
function testLinkedAxios()
{
	console.clear();
	
	axios.get('https://randomuser.me/api/')
		.then (res => {
			console.log(`第一次 ==>`, res);
			console.log(res.data.results[0].email);
			
			const seed = res.data.info.seed;
			console.log(`seed = ${seed}`);
			
			return axios.get(`https://randomuser.me/api/?seed=${seed}`);
		})
		.then (res => {
			console.log(``);
			console.log(`第二次 ==>`, res);
			console.log(res.data.results[0].email);
		});
}



/* Promise 物件方法 */

/*
	all
	等待全部結果回來
	同時發出請求，等待結果全部回來後再統一執行。
	但中間只要有一個出錯就會當成錯誤，需要全部都成功才算成功。
*/
function testPromiseAll()
{
	console.clear();
	console.log(`start...`);
	
	// console.dir(Promise);
	Promise.all([
		axios.get('https://randomuser.me/api/'),
		axios.get('https://randomuser.me/api/'),	// success
		// axios.get('https://randomuser.me/ap/'),	// fail
		axios.get('https://randomuser.me/api/')
	])
		.then (resAry => {
			console.log(resAry);
		})
		.catch (error => {
			console.log(error);
		});
	
	console.log(`finish!`);
}

/*
	allSettled
	等待全部結果回來
	同時發出請求，等待結果全部回來後再統一執行。
	1. 與 all 相比，會再多包一層物件。
		多了一個自己的 status 屬性，存放 Promise 的狀態，記錄此筆是成功 (fulfilled) 或失敗 (rejected)。
		原本的結果，成功會放到 value 屬性中，失敗會放到 reason 屬性中。
	2. 即使中間有發生錯誤，依然會正常回來，但會記錄此筆的 status 為 "rejected"。
*/
function testPromiseAllSettled()
{
	console.clear();
	console.log(`start...`);
	
	// console.dir(Promise);
	Promise.allSettled([
		axios.get('https://randomuser.me/api/'),
		// axios.get('https://randomuser.me/api/'),	// success
		axios.get('https://randomuser.me/ap/'),	// fail
		axios.get('https://randomuser.me/api/')
	])
		.then (resAry => {
			console.log(resAry);
		});
	
	console.log(`finish!`);
}



/* async / await */

function timePromise(time = 500)
{
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`[timePromise] time ==> ${time}`);
			resolve(`[${time}] 完成`);
		}, time);
	});
}

/*
	基本測試
	1. await 一定要搭配 async。
	2. await 可以把 Promise 轉為同步，亦即需等待其執行完才會繼續往下執行。
*/
async function testAsyncPromise()
{
	console.clear();
	console.log(`[基本測試] start...`);
	
	const res1 = await timePromise();
	console.log(`res1 ==>`, res1);
	
	console.log(`[基本測試] finish!`);
}

// 箭頭函式寫法
const testAsyncPromise2 = async () =>
{
	console.clear();
	console.log(`[箭頭函式] start...`);
	
	const res1 = await timePromise();
	console.log(`res1 ==>`, res1);
	
	console.log(`[箭頭函式] finish!`);
};

// 立即函式寫法
function testAsyncPromise3()
{
	(async () => {
		console.clear();
		console.log(`[立即函式] start...`);
		
		const res1 = await timePromise();
		console.log(`res1 ==>`, res1);
		
		console.log(`[立即函式] finish!`);
	}) ();
}

/*
	基本測試 - 失敗
	失敗需要用 catch 去接，否則程式會被異常中斷。
*/
async function testAsyncPromiseFail()
{
	function promiseFail()
	{
		return new Promise((resolve, reject) => {
			console.log(`[promiseFail] start...`);
			reject(`失敗`);
		});
	}

	console.clear();
	console.log(`start...`);
	
	// fail 需用 catch 接
	try {
		const res1 = await promiseFail();
		console.log(`res1 ==>`, res1);
	}
	catch (error) {
		console.log(`有用 catch 接 ==>`, error);
	}
	
	console.log(``);
	
	// 若沒有用 catch 接，程式會被 Exception 中斷
	const res2 = await promiseFail();
	console.log(`res2 ==>`, res2);
	
	console.log(`finish!`);
}


// 測試多個 Promise 均同步
async function testAsyncPromiseMulti1()
{
	console.clear();
	console.log(`start...`);
	
	const res1 = await timePromise();
	console.log(1, res1);	// #1
	
	const res2 = await timePromise(2000);
	console.log(2, res2);	// #2
	
	const res3 = await timePromise();
	console.log(3, res3);	// #3
	
	console.log(`finish!`);	// #4
}

// 測試多個 Promise，只有第一個同步
async function testAsyncPromiseMulti2()
{
	console.clear();
	console.log(`start...`);
	
	const res1 = await timePromise(1000);
	console.log(1, res1);	// #1
	
	timePromise().then(res => console.log(2, res));	// #3
	timePromise().then(res => console.log(3, res));	// #4
	
	console.log(`finish!`);	// #2
}

/*
	測試多個 Promise，只有最後一個同步。
	1. setTimeout 的時間可由外部傳入，這邊特別分別設定來觀察結果：
		第 1 個：3000
		第 2 個：1000
		第 3 個：2000
	2. 由於第 3 個有設定 await，所以其後的程式會等待。
	3. 一般來說，非同步的結果通常都會最後才執行 (stack 清空後)。
		由執行結果發現，第 2 個最先出現，其次才是第 3 個。
		這代表，當程式在等待時，stack 沒有可執行的程式，而第 2 個比較早執行完，就被安插進來了。
*/
async function testAsyncPromiseMulti3()
{
	console.clear();
	console.log(`start...`);
	
	timePromise(3000).then(res => {console.log(1, res);});	// #4
	timePromise(1000).then(res => {console.log(2, res);});	// #1
	
	const res1 = await timePromise(2000);
	console.log(3, res1);	// #2
	
	console.log(`finish!`);	// #3
}


/*
	測試將 setTimeout 設為同步
	只能將 Promise 轉換為同步，無法轉換其它非同步的做法，如：直接使用 setTimeout。
*/
async function testAsyncTimeout()
{
	function myTimeout() {
		setTimeout(() => {
			console.log(`setTimeout starting......`);
			return 'setTimeout finish!';
		}, 500);
	}
	
	console.clear();
	console.log(`start...`);
	
	const res1 = await myTimeout();
	console.log(1, res1);
	
	console.log(`finish!`);
}


// async function 本身是 Promise
function showAsync() {
	console.log(`async function 本身是 ==>`, testAsyncPromise());
}

// 以調用 Promise 的方式調用 async function
function testAsyncPromise4()
{
	console.clear();
	
	async function getData(status)
	{
		try {
			const res = await basePromiseFn1(status);
			console.log(`getData() ==>`, res);
			return res;
		}
		catch (error) {
			console.log(`getData() error ==>`, error);
			throw error;
		}
	}
	
	// 成功
	getData(true)
		.then (res => {
			console.log(1, `getData().then ==>`, res);
			console.log(``);
		});
	
	// 失敗
	getData(false)
		.then (res => {
			console.log(2, `getData().then ==>`, res);
		})
		.catch (error => {
			console.log(2, `getData().catch ==>`, error);
		});
}

// async 處理 axios 同步
async function testAsyncAxios()
{
	console.clear();
	console.log(`start...`);
	
	try
	{
		const res1 = await axios.get('https://randomuser.me/api/');
		console.log(1, res1);
		console.log(`result ==>`, res1.data.results[0]);
		
		const seed = res1.data.info.seed;
		console.log(`seed = ${seed}`);
		console.log(``);
		
		const res2 = await axios.get(`https://randomuser.me/api/?seed=${seed}`);
		console.log(2, res2);
		console.log(`result ==>`, res2.data.results[0]);
		
		const res3 = await axios.get('https://randomuser.me/ap/');
		console.log(3, res3);
		console.log(`result ==>`, res3.data.results[0]);
	}
	catch (error) {
		console.log(`error ==>`, error);
	}
	
	console.log(`finish!`);
}

// async + Promise.all
async function testAsyncPromiseAll()
{
	console.clear();
	console.log(`start...`);
	
	try
	{
		const results = await Promise.all([
			axios.get('https://randomuser.me/api/'),
			axios.get('https://randomuser.me/api/'),
			// axios.get('https://randomuser.me/ap/'),	// fail
			axios.get('https://randomuser.me/api/')
		]);
		
		console.log(results);
	}
	catch (error) {
		console.log(`error ==>`, error);
	}
	
	console.log(`finish!`);
}

