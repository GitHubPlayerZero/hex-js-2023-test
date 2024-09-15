// action
function doFormAction(event) {
	console.log(`你執行了 form action！`);
	console.log(`event ==>`, event);
	alert(`你執行了 form action！`);
}

// onsubmit
function doFormSubmit(event) {
	console.log(`你執行了 form submit！`);
	console.log(`event ==>`, event);
	alert(`你執行了 form submit！`);
}


// 檢核
function checkForm(form)
{
	console.log("執行表單檢核！");
	console.log(`form ==>`, form);
	alert("執行表單檢核！");
	
	if (!form) {
		alert("請傳入 form！");
		return false;
	}
	
	// 資料 - 有設定 required 的欄位們
	const elemRequiredList = form.querySelectorAll("[required]");
	// console.log(`elemRequiredList ==>`, elemRequiredList);
	
	for (let i = 0; i < elemRequiredList.length; i++) {
		const item = elemRequiredList[i];
		if (!item.value) {
			alert(`不可為空！`);
			item.focus();
			return false;
		}
	}
	
	console.log("檢核成功！");
	return true;
}


// form submit listener
function listenFormSubmit(event) {
	console.log(`你監聽了 submit！`);
	console.log(`event ==>`, event);
	alert(`你監聽了 submit！`);
	
	if (checkForm(event.target)) {
		console.log(`檢核成功，執行 AJAX 動作`);
		alert("檢核成功，執行 AJAX 動作")
	}
	else {
		console.log(`檢核有誤！不執行 AJAX 動作`);
		alert("檢核有誤！不執行 AJAX 動作")
	}
}


/* 使用 JS 定義 onsubmit 動作 */
// form HTML onsubmit
function doHtmlOnsubmit(event) {
	console.log(``);
	console.log(`你以 HTML 執行了 onsubmit！`);
	console.log(`event ==>`, event);
	alert("你以 HTML 執行了 onsubmit！");
	return checkForm(event);
}

// 加入 JS onsubmit
function addJsOnsubmit()
{
	// 使用 JS 定義 onsubmit 動作
	document.querySelector("#formOnsubmit").onsubmit = function(event) {
		console.log(``);
		console.log(`你以 JS 執行了 onsubmit！ HTML 的 onsubmit 被覆蓋了！`);
		console.log(`event ==>`, event);
		alert("你以 JS 執行了 onsubmit！ HTML 的 onsubmit 被覆蓋了！");
		return checkForm(event.target);
	}
}


/**
 * 開／關 form 的 HTML 驗證功能
 * @param {String} formId - form 的 id
 * @param {Boolean} isValidate - 是不是要開啟驗證功能？  
 * 		true - 開啟驗證功能，即要拿掉 noValidate 屬性，需設定 noValidate = false。  
 * 		false - 關閉驗證功能，即要加上 noValidate 屬性，需設定 noValidate = true。
 */
function enableHtmlValidate(formId, isValidate) {
	document.querySelector(`#${formId}`).noValidate = !isValidate;
}


/* 觀察所有動作執行順序 */
const elemFormExecution = document.querySelector("#formExecution");

// 元素 - 執行過程
const elemExecution = document.querySelector("#execution");

// 寫入執行過程
function writeExecution(text) {
	elemExecution.innerHTML += `<li>${text}</li>`;
}
// 清除執行過程
function clearExecution() {
	elemExecution.textContent = "";
	console.clear();
}

// 送出
function clickExecutionSubmit(event) {
	console.log(``);
	console.log(`我是 submit button 的 HTML onclick...`);
	console.log(`event ==>`, event);
	writeExecution("我是 submit button 的 HTML onclick");
}

// form onsubmit
function doExecutionSubmit(event) {
	console.log(``);
	console.log(`我是 form 的 HTML onsubmit...`);
	console.log(`event ==>`, event);
	writeExecution("我是 form 的 HTML onsubmit");
}

// form action
function doExecutionAction(event) {
	console.log(``);
	console.log(`我是 form 的 action...`);
	console.log(`event ==>`, event);
	writeExecution("我是 form 的 action");
}

// 執行 submit()
function testSubmit() {
	elemFormExecution.submit();
}
// 執行 requestSubmit()
function testRequestSubmit() {
	elemFormExecution.requestSubmit();
}


// 透過 listener 提交表單共用方法
function addSubmitListener(form) {
	// console.log(`form ==>`, form);
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		console.clear();
		console.log(`透過 listener 提交表單...`);
		console.log(`event ==>`, event);
		alert("透過 listener 提交表單！");
	});
}


// initial
(function () {
	
	/* form */
	// 現代化的開發方式：addEventListener
	// 沒有使用 preventDefault()
	document.querySelector("#formListenerNoPrevent").addEventListener("submit", (event) => {
		console.clear();
		listenFormSubmit(event);
	});
	// 使用 preventDefault()
	document.querySelector("#formListenerWithPrevent").addEventListener("submit", (event) => {
		console.clear();
		event.preventDefault();
		listenFormSubmit(event);
	});
	
	// submit()、requestSubmit()
	document.querySelector("#formTestSubmit").addEventListener("submit", (event) => {
		event.preventDefault();
		console.clear();
		console.log(`測試 submit()、requestSubmit()...`);
		console.log(`event ==>`, event);
		alert("透過 submit listener 提交");
	})
	
	// form 的特性 - 隱式提交
	addSubmitListener(document.querySelector("#formImplicit1"));
	addSubmitListener(document.querySelector("#formImplicit2"));
	addSubmitListener(document.querySelector("#formImplicit3"));
	addSubmitListener(document.querySelector("#formImplicit4"));
	addSubmitListener(document.querySelector("#formImplicit5"));
	
	
	/* button */
	// 觀察所有動作執行順序 - 送出按鈕 listener
	document.querySelector("#btnExecutionSubmit").addEventListener("click", (event) => {
		console.log(``);
		console.log(`我是 submit button 的 listener...`);
		console.log(`event ==>`, event);
		writeExecution("我是 submit button 的 listener");
	});
	// 觀察所有動作執行順序 - submit listener
	elemFormExecution.addEventListener("submit", (event) => {
		console.log(``);
		console.log(`我是 form submit 的 listener...`);
		console.log(`event ==>`, event);
		writeExecution("我是 form submit 的 listener");
	})
	
	// 就想要使用隱式提交的方式 - 偽裝成 button 的 a 連結
	document.querySelector("#submitLink").addEventListener("click", (event) => {
		event.preventDefault();
		document.querySelector("#formImplicit5").requestSubmit();
	})
	
	
	const elemFormEvent = document.querySelector("#formEvent");
	const elemInputTextEvent = document.querySelector("#inputTextEvent");

	elemFormEvent.addEventListener("keydown", (event) => {
		console.log(`[form] keydown`);
		// console.log(`[form] event.target ==>`, event.target);
		// console.log(``);
	});
	// 觸發 form 的 keypress 之後，就會觸發 submit
	elemFormEvent.addEventListener("keypress", (event) => {
		console.log(`[form] keypress`);
		// console.log(`[form] event.target ==>`, event.target);
		// console.log(``);
	});
	elemFormEvent.addEventListener("keyup", (event) => {
		console.log(`[form] keyup`);
		// console.log(`[form] event.target ==>`, event.target);
		// console.log(``);
	});
	elemFormEvent.addEventListener("submit", (event) => {
		event.preventDefault();
		console.log(`[form] submit`);
		// console.log(`[form] event.target ==>`, event.target);
		// console.log(``);
	});
	
	elemInputTextEvent.addEventListener("keydown", (event) => {
		console.log(`[input text] keydown`);
		// console.log(`[input text] event.target ==>`, event.target);
		// console.log(``);
	});
	elemInputTextEvent.addEventListener("keypress", (event) => {
		console.log(`[input text] keypress`);
		// console.log(`[input text] event.target ==>`, event.target);
		// console.log(``);
	});
	elemInputTextEvent.addEventListener("keyup", (event) => {
		console.log(`[input text] keyup`);
		// console.log(`[input text] event.target ==>`, event.target);
		// console.log(``);
	});
	
}) ();
