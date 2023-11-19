/***   作業 1 填答區開始   **/

// true
// true
// true

// false
// true

// false
// true
// false

/***   作業 1 填答區結束   **/



/***   作業 2 填答區開始   **/

// false
// true
// true

// true
// true
// false

// true

/***   作業 2 填答區結束   **/



/***   作業 3 填答區開始   **/

// m 為：3
// 原因是：因為 2 > 1 為 true，所以執行了 m = 3。

// n 為：15
// 原因是：因為判斷為 true，所以執行了 n += 10。

/***   作業 3 填答區結束   **/



/***   作業 4 填答區開始   **/

let childHeight = 133;
let restaurantChildHeight = 120;
let bill = 600;

if (childHeight > restaurantChildHeight) {
	bill += 300;
}

console.log(`他們總共支付了 ${bill} 元`);

/***   作業 4 填答區結束   **/



/***   作業 5 填答區開始   **/

const appleRequiredNumber = 5;

let badge = 3;
let appleBuyNumber = 4;

if (appleBuyNumber === appleRequiredNumber) {
	badge += 3;
}
else {
	badge += 1;
}

console.log(`小華一共得了 ${badge} 個徽章`);

/***   作業 5 填答區結束   **/



/***   作業 6 填答區開始   **/

// true
// false
// true

// 是否有折扣資格
// true
// 原因是：hamNum > 10，條件運算子為 OR，只要有一個條件達成即成立。

/***   作業 6 填答區結束   **/



/***   作業 7 填答區開始   **/

let weight = 60;

if (weight >= 80) {
	console.log("過重");
}
else if (weight >= 60) {
	console.log("正常");
}
else if (weight >= 40) {
	console.log("過輕");
}
else {
	console.log("還活著嗎？");
}

/***   作業 7 填答區結束   **/



/***   作業 8 填答區開始   **/

let giftNum = 200;
let giftPriceRule = 399;
let bobPrice = 500;
let bobIsVip = false;

if (bobPrice >= giftPriceRule && bobIsVip === true) {
	console.log("客戶您好，您有符合贈品資格");
	giftNum --;
} else {
	console.log("客戶您好，您沒有符合贈品資格");
}

console.log(`贈品還剩下 ${giftNum} 個`);

/***   作業 8 填答區結束   **/



/***   作業 9 填答區開始   **/

let mingMoney = 870000;
let mingBill = 5000;

const taxRange1 = 540000;
const taxRange2 = 1000000;

const taxRate1 = 0.3;
const taxRate2 = 0.5;
const taxRate3 = 0.8;

if (mingMoney <= taxRange1) {
	mingBill += mingMoney * taxRate1;
}
else if (mingMoney <= taxRange2) {
	mingBill += mingMoney * taxRate2;
}
else {
	mingBill += mingMoney * taxRate3;
}

console.log(`小明總共需支付 ${mingBill} 元帳單`);

/***   作業 9 填答區結束   **/



/***   作業 10 填答區開始   **/

const scissors = "剪刀";
const stone = "石頭";
const cloth = "布";

let playerA = scissors;
let playerB = scissors;
console.log(`playerA = ${playerA}, playerB = ${playerB}`);

if (playerA === scissors)
{
	if (playerB === scissors) {
		console.log("平手");
	}
	else if (playerB === stone) {
		console.log("B 勝");
	}
	else if (playerB === cloth) {
		console.log("A 勝");
	}
	else {
		console.log("B 醜一！");
	}
}
else if (playerA === stone)
{
	if (playerB === scissors) {
		console.log("A 勝");
	}
	else if (playerB === stone) {
		console.log("平手");
	}
	else if (playerB === cloth) {
		console.log("B 勝");
	}
	else {
		console.log("B 醜一！");
	}
}
else if (playerA === cloth)
{
	if (playerB === scissors) {
		console.log("B 勝");
	}
	else if (playerB === stone) {
		console.log("A 勝");
	}
	else if (playerB === cloth) {
		console.log("平手");
	}
	else {
		console.log("B 醜一！");
	}
}
else {
	console.log("A 醜一！");
}

/***   作業 10 填答區結束   **/