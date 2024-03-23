/* 函式基本介紹 */

// 基本測試
function testBase1()
{
	// 可以執行片段程式碼。
	// 可以傳入不同的參數，改變執行結果。
	// 通常使用小寫開頭（大寫函式代表的意義不同）。
	function callSomeone(someone) {
		// 限制作用域，只能在函式內使用。
		var caller = '漂亮阿姨';	
		
		// 函式可以回傳值。
		return `${someone}～哩來哩來！${caller} 叫你`;
	}
	
	// 限制作用域，函式以外無法使用。
	// console.log(caller);	// caller is not defined
	
	// 是一個物件（因此可以加入屬性）。
	callSomeone.myName = '杰倫';
	
	console.log(callSomeone);
	console.log(``);
	console.dir(callSomeone);
	console.log(`callSomeone.myName =`, callSomeone.myName);
	console.log(``);
	
	// 可以重複呼叫。
	console.log("#1: " + callSomeone('小明'));
	console.log(`#2: ${callSomeone('小華')}`);
	console.log("#3:", callSomeone('小強'));
	
	// 呼叫函式時會回傳一個值，所以「呼叫函式」這個動作是一個表達式（expression）。
	let result = callSomeone("大王");
	console.log(`result = ${result}`);
}

// 立即函式
function testImmediateFunc1()
{
	(function () {
		console.log(`我是立即函式`);
	}) ();
}



/* 一級函式 */

// 函式可以作為變數
function testFirstClassVar1()
{
	console.clear();
	
	const fn1 = function () {
		console.log(`函式可以作為變數`);
	}
	console.log(`fn1 =`, fn1);
	fn1();
	
	console.log(``);
	
	const fn2 = function test () {
		return `亦可使用具名函式`;
	}
	console.log(`fn2 =`, fn2);
	console.log(`fn2() ==>`, fn2());
}

// 函式可以作為參數使用（callback function）
function testFirstClassParam1()
{
	console.clear();
	
	function fn(callbackFunc) {
		console.log(`callbackFunc ==>`, callbackFunc);
		callbackFunc();
	}
	
	fn( function () {
		console.log(`我是直接在參數中建立的函式`);
	} );
	console.log(``);
	
	function fn2() {
		console.log(`我是 fn2，我是函式陳述式`);
	}
	fn(fn2);
	console.log(``);
	
	const fn3 = function () {
		console.log(`我是 fn3，我是函式表達式`);
	}
	fn(fn3);
}

// callback function 進階使用 1
function testCallbackFunc1()
{
	console.clear();
	
	function fn(callbackFunc) {
		console.log(`callbackFunc ==>`, callbackFunc);
		const a = '小明';
		const b = '杰倫';
		
		// 透過其它函式先處理一次
		console.log(callbackFunc(a, b));
	}
	
	const getGoodFriend = function getGood (param1, param2) {
		return `${param1} 跟 ${param2} 是好朋友`;
	}
	const getBadFriend = function getBad (param1, param2) {
		return `${param1} 跟 ${param2} 感情不好`;
	}
	
	fn(getGoodFriend);
	console.log(``);
	fn(getBadFriend);
}

// callback function 進階使用 2
function testCallbackFunc2()
{
	console.clear();
	
	function fn (ary, callbackFunc) {
		for (let index = 0; index < ary.length; index++) {
			const element = ary[index];
			// console.log(element);
			callbackFunc(element, index);
		}
	}
	
	fn (
		['小明', '杰倫', '漂亮阿姨'],
		function (item, i) {
			console.log(`第 ${i + 1} 名：${item}`);
		}
	);
}


// 函式可以作為回傳值 - 寫法 1
function testFirstClassReturn1()
{
	console.clear();
	
	function fn() {
		return function () {
			console.log('我是回傳函式');
			return '小明';
		};
	}
	
	// 用變數接收回傳函式
	const result = fn();
	console.log(`result ==>`, result);
	console.log('return ==>', result());
	
	console.log(``);
	
	// 直接執行回傳函式
	console.log('return ==>', fn()());
}

// 函式可以作為回傳值 - 寫法 2
function testFirstClassReturn2()
{
	console.clear();
	
	function fn1() {
		console.log('我是回傳函式');
		return '小華';
	}
	
	function fn2() {
		return fn1;
	}
	
	// 用變數接收回傳函式
	const result = fn2();
	console.log(`result ==>`, result);
	console.log('return ==>', result());
	
	console.log(``);
	
	// 直接執行回傳函式
	console.log('return ==>', fn2()());
}



/* 高階函式 */

// 計算折扣價格
function testHighFunc1()
{
	console.clear();
	
	function 原程式做法()
	{
		function countDiscountPrice(price, discount) {
			return price * discount;
		}
		
		const breadPrice1 = countDiscountPrice(100, 0.8);
		const breadPrice2 = countDiscountPrice(100, 0.7);
		console.log(`breadPrice (8 折) =`, breadPrice1);
		console.log(`breadPrice (7 折) =`, breadPrice2);
		
		const cookiePrice1 = countDiscountPrice(80, 0.8);
		const cookiePrice2 = countDiscountPrice(80, 0.7);
		console.log(`cookiePrice (8 折) =`, cookiePrice1);
		console.log(`cookiePrice (7 折) =`, cookiePrice2);
	}
	
	function 高階函式做法()
	{
		function countDiscountPrice(price) {
			// const originPrice = price;
			console.log(`price = ${price}`);
			return function (discount) {
				return price * discount;
			}
		}
		
		const breadPrice = countDiscountPrice(100);
		console.log(`breadPrice (8 折) =`, breadPrice(0.8));
		console.log(`breadPrice (7 折) =`, breadPrice(0.7));
		
		const cookiePrice = countDiscountPrice(80);
		console.log(`cookiePrice (8 折) =`, cookiePrice(0.8));
		console.log(`cookiePrice (7 折) =`, cookiePrice(0.7));
	}
	
	原程式做法();
	console.log(``);
	高階函式做法();
}



/* 閉包（Closure） */

/* 記憶體測試 */

// 產生一段很長的字串
function randomString(length)
{
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.random() * charactersLength);
	}
	
	return result;
}

/*
	以下記憶體測試必須放在全域才能測出效果，欲測試時再打開。
*/
// const demoData = [];	// 把字串推到陣列裡
// 記憶體快照：2.7 MB

// 測試一
/* for (let i = 0; i < 1000; i++) {
	demoData.push(randomString(1000));
} */
// 記憶體快照：22.4 MB
// console.log(demoData);	// 會影响記憶體運作，故不開啟

// 測試二
/* function fn() {
	for (let i = 0; i < 1000; i++) {
		demoData.push(randomString(1000));
	}
}
fn(); */
// 記憶體快照：22.4 MB


// 測試 1：區域變數
// 記憶體快照：2.7 MB
function testClosure1()
{
	const demoData = [];	// 區域變數會被釋放
	for (let i = 0; i < 1000; i++) {
		demoData.push(randomString(1000));
	}
}

// 測試 2：setTimeout 使用區域變數
function testClosure2()
{
	const demoData = [];
	for (let i = 0; i < 1000; i++) {
		demoData.push(randomString(1000));
	}
	
	/*
		當 setTimeout 有用到外層的變數時，在結束前記憶體不會被釋放。
		記憶體快照：22.4 MB
	*/
	setTimeout(() => {
		debugger;
		demoData;
	}, 0);
}

// 測試 3：setTimeout 沒有使用到區域變數
function testClosure3()
{
	const demoData = [];
	for (let i = 0; i < 1000; i++) {
		demoData.push(randomString(1000));
	}
	
	/*
		setTimeout 沒有用到外層的變數，因此雖然 setTimeout 還沒結束，但記憶體已被釋放。
		記憶體快照：2.7 MB
	*/
	setTimeout(() => {
		debugger;
		let a = 1;
	}, 0);
}



/* 高階函式寫法 */

/*
	透過高階函式（回傳函式）特性，將作用域內的變數儲存不被釋放。
	1. 封裝重複使用（保留記憶體以供重複調用）。
	2. 每次呼叫 sellBread() 都是獨立的作用域，變數是獨立的，不會彼此影响。
	3. 隱藏變數，保護商業邏輯，印出內層函式時看不到外層的變數，如 breadPrice。
*/

// 測試 4：賣麵包
function testClosure4()
{
	console.clear();
	
	function sellBread(day)
	{
		const breadPrice = 100;
		let count = 0;
		
		return function (num) {
			count += num;
			console.log(`[Day ${day}] 賣出了 ${count} 個麵包，總共賺了 ${breadPrice * count} 元！`);
		}
	}
	
	const day1Counter = sellBread(1);
	console.log(`counter ==>`, day1Counter);
	day1Counter(1);
	day1Counter(5);
	day1Counter(3);
	
	console.log(``);
	
	const day2Counter = sellBread(2);
	console.log(`counter ==>`, day2Counter);
	day2Counter(1000);
	day2Counter(2000);
}


// 測試 5：私有方法
// 記帳簿：可以存錢、花錢，可以取得有多少錢的值
function testClosure5()
{
	console.clear();
	
	function recordDeposit(initValue)
	{
		let money = initValue;
		
		return {
			increase: function (value) {
				money += value;
			},
			decrease: function (value) {
				money -= value;
			},
			getValue: function () {
				return money;
			}
		};
	}
	
	const myWallet = recordDeposit(1000);
	console.log(myWallet);
	myWallet.increase(1000);
	myWallet.decrease(500);
	console.log(`我的錢包 =`, myWallet.getValue());
	
	const rayWallet = recordDeposit(5000);
	rayWallet.increase(3000);
	rayWallet.decrease(4000);
	console.log(`Ray 的錢包 =`, rayWallet.getValue());
}


// 測試 6：私有方法 2
// MDN 範例
function testClosure6()
{
	console.clear();
	
	// 使用立即執行函式回傳一個物件
	const Counter = (function () {
		
		let privateCounter = 0;
		
		function changeBy(val) {
			privateCounter += val;
		}
		
		return {
			add: function () {
				changeBy(1);
			},
			reduce: function () {
				changeBy(-1);
			},
			getValue: function () {
				return privateCounter;
			}
		};
		
	}) ();
	
	// Counter 看不到其 add、reduce 所呼叫的函式的內容，也看不到變數 privateCounter
	console.log(Counter);
	console.log(Counter.add);
	console.log(``);
	
	console.log(Counter.getValue());	// 0
	Counter.add();
	Counter.add();
	console.log(Counter.getValue());	// 2
	Counter.reduce();
	console.log(Counter.getValue());	// 1
}



/* Class 簡單體驗 */
// 改寫記帳簿範例
class DepositBook
{
	constructor (initValue) {
		this.money = initValue;
	}
	increase (value) {
		this.money += value;
	}
	decrease (value) {
		this.money -= value;
	}
	getValue () {
		return this.money;
	}
}

function testClass()
{
	console.clear();
	
	const myWallet = new DepositBook(1000);
	console.log(myWallet);
	myWallet.increase(3000);
	myWallet.decrease(2000);
	console.log(`我的錢包 =`, myWallet.getValue());
}

