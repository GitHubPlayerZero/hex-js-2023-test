const cb = navigator.clipboard;

function getClipboardData(event) {
	return event.clipboardData || window.clipboardData;
}

function copyCode(id)
{
	const text = document.querySelector(id).textContent;
	
	cb.writeText(text)
		.catch (error => {
			console.error(error);
		});
}


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



/* Sample 1 */
document.querySelectorAll(".myfun-input1").forEach(function (item)
{
	// 聚焦輸入框時，若內容為 0 則自動清空
	item.addEventListener("focus", function (event) {
		if (item.value === "0") {
			item.value = "";
		}
	});
	
	// 禁止輸入 - 號
	item.addEventListener("keypress", function (event) {
		if (event.key === "-") {
			event.preventDefault();
		}
	});
	
	// 檢查貼上的內容，只有符合規則的內容才允許貼上
	item.addEventListener("paste", function (event) {
		const clipboardData = getClipboardData(event);
		const text = clipboardData.getData('text/plain');
		
		if (!isPositiveNumber(text)) {
			event.preventDefault();
		}
	});
	
	// 若內容為空則自動補為 0
	item.addEventListener("blur", function (event) {
		const element = event.target;
		if (element.value.length <= 0) {
			element.value = 0;
		}
	});
});


