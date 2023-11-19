// 題目1：相加產生器 (+)
function add(val1, val2) {
	return val1 + val2;
}

function test1() {
	console.log(`${add(1, 1)}`);
	console.log(`${add(2, 2)}`);
	console.log(`${add(3, 3)}`);
}


// 題目2：相減產生器 (-)
function subtract(val1, val2) {
	return val1 - val2;
}

function test2() {
	console.log(`${subtract(1, 1)}`);
	console.log(`${subtract(2, 3)}`);
	console.log(`${subtract(8, 3)}`);
}


// 題目3：相乘三次 (*)
function multiply3Times(val) {
	return val ** 3;
}

function test3() {
	console.log(`${multiply3Times(3)}`);
	console.log(`${multiply3Times(0)}`);
	console.log(`${multiply3Times(9)}`);
}


// 題目4：取 2 的餘數（%）
function remainder(val) {
	return val % 2;
}

function test4() {
	console.log(`${remainder(3)}`);
	console.log(`${remainder(2)}`);
	console.log(`${remainder(8)}`);
}


// 題目5：取 2 的餘數 + 判斷是否可整除 (% + 結果判斷)
function isDivisible(val) {
	return remainder(val) ? "未整除" : "已整除";
}

function test5() {
	console.log(`${isDivisible(3)}`);
	console.log(`${isDivisible(2)}`);
	console.log(`${isDivisible(8)}`);
}


// 題目6：我要存錢(區域變數、全域變數)
let bankMoney = 0;
function addBankMoney(num) {
	bankMoney += num;
}

function test6()
{
	[1, 50, 10].forEach(function (item) {
		addBankMoney(item);
		console.log(`bankMoney 值為 ${bankMoney}`);
	});
}


// 題目7：簡單計算機
function calculate(val1, val2, operator)
{
	if (operator === '+') {
		return val1 + val2;
	}
	else if  (operator === '-') {
		return val1 - val2;
	}
	else if  (operator === '*') {
		return val1 * val2;
	}
	else if  (operator === '/') {
		return val1 / val2;
	}
	
	return NaN;
}

function test7() {
	console.log(`${calculate(3, 5, '+')}`);
	console.log(`${calculate(4, 2, '-')}`);
	console.log(`${calculate(7, 9, '*')}`);
	console.log(`${calculate(5, 5, '/')}`);
}


// 題目8：簡單計算機 + 顯示算式過程
function calculateProcess(val1, val2, operator) {
	console.log(`${val1} ${operator} ${val2} = ${calculate(val1, val2, operator)}`);
}

function test8() {
	calculateProcess(3, 5, '+');
	calculateProcess(4, 2, '-');
	calculateProcess(7, 9, '*');
	calculateProcess(5, 5, '/');
}


// 題目9：商業邏輯題：增加服務費
function serviceCharge(num) {
	return num * 1.05;
}

function test9() {
	const total = serviceCharge(100);
	console.log(`您總計費用為 ${total}`);
}


// 題目10：重構題：消除重複，抽離變因
function serviceCharge2(num) {
	return num * 0.1;
}
function sixAngleCalculate(num) {
	const subTotal = num * 100;
	// const serviceCharge = subTotal * 0.1;
	const serviceCharge = serviceCharge2(subTotal);
	const total = subTotal + serviceCharge;
	return total;
}
function eightAngleCalculate(num) {
	const subTotal = num * 800;
	// const serviceCharge = subTotal * 0.1;
	const serviceCharge = serviceCharge2(subTotal);
	const total = subTotal + serviceCharge;
	return total;
}

function test10()
{
	console.log("重構方式一...");
	
	[1, 3].forEach(function (item) {
		console.log(`吃 ${item} 碗冰，去六角冰店要 ${sixAngleCalculate(item)} 元，去八角冰店要 ${eightAngleCalculate(item)} 元`);
	});
	
	console.log("");
	console.log(`八角好貴貴 T___T，我要去六角吃～ ^___^`);
	console.log(`有執事女僕好棒棒 A____A`);
}


// 題目10-2：重構題：消除重複，抽離變因（方式二）
/*
  說明：
  主要邏輯模式都是一樣的，只有價格不同。
  1. 可以把邏輯拉出成為一個共用 function，價格、數量的部份以參數傳入。
  2. 另外提供六角、八角的 function，此兩個 function 主要是呼叫共用 function，並將自己的金額、數量傳入。
*/
function checkout(price, num) {
	const subTotal = num * price;
	const serviceCharge = subTotal * 0.1;
	const total = subTotal + serviceCharge;
	return total;
}
function sixAngleCalculate2(num) {
	const price = 100;
	return checkout(price, num);
}
function eightAngleCalculate2(num) {
	const price = 800;
	return checkout(price, num);
}

function test10_2()
{
	console.log("重構方式二...");
	
	[1, 3].forEach(function (item) {
		console.log(`吃 ${item} 碗冰，去六角冰店要 ${sixAngleCalculate2(item)} 元，去八角冰店要 ${eightAngleCalculate2(item)} 元`);
	});
	
	console.log("");
	console.log(`八角還是好貴貴 T___T，我還是要去六角吃～ ^___^`);
	console.log(`有執事女僕真讚讚 A____A`);
}

