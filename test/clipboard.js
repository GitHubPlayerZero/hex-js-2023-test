const cb = navigator.clipboard;
console.log(`clipboard ==>`, cb);


/* 對剪貼簿寫入純文字內容 */

// Promise 寫法
function writeTextClipboard(text)
{
	console.clear();
	
	// const text = "Hello clipboard !";
	console.log(`text = ${text}`);
	
	cb.writeText(text)
		.then (() => {
			console.log(`寫入剪貼簿!`);
		})
		.catch (error => {
			console.error(error);
		});
}

// async / await 寫法
/* async function writeTextClipboard(text)
{
	console.clear();
	
	// const text = "Hello clipboard !";
	console.log(`text = ${text}`);
	
	try {
		await cb.writeText(text);
		console.log(`寫入剪貼簿!`);
	}
	catch (error) {
		console.error(error);
	}
} */


// 將 input text 的文字寫入剪貼簿
function writeInputText() {
	const text = document.querySelector("#text1").value;
	writeTextClipboard(text);
}

// 將 textarea 的文字寫入剪貼簿
function writeTextarea() {
	const text = document.querySelector("#textarea1").value;
	writeTextClipboard(text);
}

// 將選取的文字寫入剪貼簿
function writeSelection() {
	const text = document.getSelection().toString();
	writeTextClipboard(text);
}



/* 讀取剪貼簿純文字內容 */

// Promise 寫法
function readText()
{
	console.clear();
	
	cb.readText()
		.then (text => {
			console.log(`text = ${text}`);
			document.querySelector("#result1").value = text;
		})
		.catch (error => {
			console.error(error);
		});
}

// async / await 寫法
/* async function readText()
{
	console.clear();
	
	try {
		const text = await cb.readText();
		console.log(`text = ${text}`);
		document.querySelector("#result1").value = text;
	}
	catch (error) {
		console.error(error);
	};
} */



/* copy、cut、paste 事件監聽 */

function getClipboardData(event)
{
	/*
		Chrome 使用 event.clipboardData，IE 使用 window.clipboardData。
		P.S. 經過測試，目前的 Chrome、Edge、Firefox 均使用 event.clipboardData。
		
		window.clipboardData 被認為會有安全性問題，因為它允許讀取剪貼簿中的所有內容。
		因此若要可以跨瀏覽器，又要兼顧安全性，可以使用此種寫法。
		先判斷 event.clipboardData，若有此物件即會被返回，不會再繼續判斷；若沒有才會再繼續判斷並返回 window.clipboardData。
		
		參考文章：https://stackoverflow.com/questions/20509061/window-clipboarddata-getdatatext-doesnt-work-in-chrome
	*/
	const clipboardData = event.clipboardData || window.clipboardData;
	
	console.log(`event.clipboardData ==>`, event.clipboardData);
	console.log(`window.clipboardData ==>`, window.clipboardData);
	console.log(`clipboardData ==>`, clipboardData);
	
	return clipboardData;
}


/* copy、cut、paste 事件監聽 */
document.querySelector("#eventP1").addEventListener("copy", function (event) {
	console.log('copy 動作', event);
	const clipboardData = getClipboardData(event);
	console.log('value ==>', clipboardData.getData('text/plain'));	// copy 不會有值
	console.log(`選取的文字 ==>`, document.getSelection().toString());
	console.log(``);
});

document.querySelector("#eventTextarea1").addEventListener("paste", function (event) {
	console.log('paste 動作', event);
	const clipboardData = getClipboardData(event);
	console.log('value ==>', clipboardData.getData('text/plain'));
	console.log(``);
});

document.querySelector("#eventTextarea1").addEventListener("cut", function (event) {
	console.log('cut 動作', event);
	const clipboardData = getClipboardData(event);
	console.log('value ==>', clipboardData.getData('text/plain'));	// cut 不會有值
	console.log(``);
});


/* copy、cut、paste 事件屏蔽 */
document.querySelector("#eventP2").addEventListener("copy", function (event) {
	console.log('copy 動作', event);
	event.preventDefault();
	console.log(`阻擋了 copy！`);
	console.log(``);
});

document.querySelector("#eventTextarea2").addEventListener("paste", function (event) {
	console.log('paste 動作', event);
	event.preventDefault();
	console.log(`阻擋了 paste！`);
	console.log(``);
});

document.querySelector("#eventTextarea2").addEventListener("cut", function (event) {
	console.log('cut 動作', event);
	event.preventDefault();
	console.log(`阻擋了 cut！`);
	console.log(``);
});



/* 改變 copy 文字 */
document.querySelector("#eventP3").addEventListener("copy", function (event)
{
	console.clear();
	console.log('copy 動作', event);
	
	console.log(`先阻擋 copy ...`);
	event.preventDefault();
	
	console.log(`再改變內容 ...`);
	const clipboardData = getClipboardData(event);
	clipboardData.setData('text/plain', `再複製打手手哦！😈`);
	
	console.log(``);
});

document.querySelector("#eventP4").addEventListener("copy", function (event)
{
	console.clear();
	console.log('copy 動作', event);
	
	console.log(`先阻擋 copy ...`);
	event.preventDefault();
	
	console.log(`取得選取的文字最後加上來源 ...`);
	let text = window.getSelection().toString();
	text += '\n\n來源：恭禧發財💰';
	console.log(`text = ${text}`);
	console.log(``);
	
	console.log(`再改變內容 ...`);
	const clipboardData = getClipboardData(event);
	clipboardData.setData('text/plain', text);
	
	console.log(``);
});



/* 應用 1：製作複製、貼上按鈕 */
document.querySelector("#test1P1").addEventListener("copy", function (event) {
	console.log(`阻止複製！`);
	event.preventDefault();
});

function copy()
{
	console.clear();
	
	const text = window.getSelection();
	
	navigator.clipboard.writeText(text)
		.then (() => {
			console.log(`複製完成！`);
		})
		.catch (error => {
			console.log(error);
		});
}

function paste()
{
	console.clear();
	
	navigator.clipboard.readText()
		.then (text => {
			console.log(`text = ${text}`);
			document.querySelector("#test1Textarea1").textContent = text;
		})
		.catch (error => {
			console.log(error);
		});
}



/* 應用 2：限制 input 輸入 */

// TODO 若能用正則判斷應該會更好
function isNumber(val)
{
	const str = String(val);
	
	if (str.length <= 0 || str.includes(" ")) {
		return false;
	}
	
	const num = Number(str);
	
	if (Number.isNaN(num) || num === Infinity) {
		return false;
	}
	
	return true;
}

// 判斷是否為正數
const isPositiveNumber = val => (isNumber(val) && Number(val) >= 0) ? true : false;

function getFormatNumber(val)
{
	if (isNumber(val)) {
		return Number(val);
	}
	else {
		return 0;
	}
}


const elmtNumber1 = document.querySelector("#number1");
// console.log(elmtNumber1);

// 聚焦輸入框時，若內容為 0 則自動清空
elmtNumber1.addEventListener("focus", function (event) {
	if (elmtNumber1.value === "0") {
		elmtNumber1.value = "";
	}
});

// 禁止輸入 - 號
elmtNumber1.addEventListener("keypress", function (event) {
	console.log('keypress', event);
	if (event.key === "-") {
		console.log("禁止輸入 - 號！");
		event.preventDefault();
	}
});

// 檢查貼上的內容，只有符合規則的內容才允許貼上
elmtNumber1.addEventListener("paste", function (event) {
	console.log('paste', event);
	const clipboardData = getClipboardData(event);
	const text = clipboardData.getData('text/plain');
	console.log(`text = ${text}`);
	
	if (!isPositiveNumber(text)) {
		event.preventDefault();
	}
});

// 若內容為空則自動補為 0
elmtNumber1.addEventListener("blur", function (event) {
	if (elmtNumber1.value.length <= 0) {
		elmtNumber1.value = 0;
	}
});

