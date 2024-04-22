// 送出
document.querySelector("#btnSend").addEventListener("click", function (e) {
	console.clear();
	const name = document.querySelector("#name").value;
	console.log(`name = ${name}`);
	localStorage.setItem("localName", name);
	sessionStorage.setItem("sessionName", name);
});

// 打個招呼吧
document.querySelector("#btnHello").addEventListener("click", function (e) {
	const localName = localStorage.getItem("localName");
	console.log(`Local name = ${localName}`);
	document.querySelector("#helloLocal").textContent = `Hello, ${localName}!`;
	
	const sessionName = sessionStorage.getItem("sessionName");
	console.log(`Session name = ${sessionName}`);
	document.querySelector("#helloSession").textContent = `Hello, ${sessionName}!`;
});



/* 顯示 Local storage、Session storage */
function showStorage()
{
	console.clear();
	
	console.log(`====== Local storage ======`);
	// console.log(window.localStorage);	// window 可省略
	console.log(localStorage);
	
	console.log(``);
	
	console.log(`====== Session storage ======`);
	// console.log(window.sessionStorage);	// window 可省略
	console.log(sessionStorage);
}


/* 清除所有 Local storage、Session storage */
function clearStorage() {
	localStorage.clear();
	sessionStorage.clear();
	showStorage();
}


/* 存入物件 */
function saveObject()
{
	const obj = {
		name: "王大明",
		age: 18,
		身高: 180
	};
	
	const obj2 = ['A', 'B', 'C'];
	
	const obj3 = [
		{name: "A", color: "red"},
		{name: "B", color: "green"},
		{name: "C", color: "blue"}
	];
	
	
	/* 未轉換 */
	localStorage.setItem("local_no_obj", obj);	// [object Object]
	localStorage.setItem("local_no_obj2", obj2);	// A,B,C
	localStorage.setItem("local_no_obj3", obj3);	// [object Object],[object Object],[object Object]
	
	sessionStorage.setItem("session_no_obj", obj);	// [object Object]
	sessionStorage.setItem("session_no_obj2", obj2);	// A,B,C
	sessionStorage.setItem("session_no_obj3", obj3);	// [object Object],[object Object],[object Object]
	
	/* 轉換 */
	localStorage.setItem("local_obj", JSON.stringify(obj));
	localStorage.setItem("local_obj2", JSON.stringify(obj2));
	localStorage.setItem("local_obj3", JSON.stringify(obj3));
	
	sessionStorage.setItem("session_obj", JSON.stringify(obj));
	sessionStorage.setItem("session_obj2", JSON.stringify(obj2));
	sessionStorage.setItem("session_obj3", JSON.stringify(obj3));
}


/* 取出物件 */
function getObject()
{
	console.clear();
	
	/* 未轉換 */
	console.log(`====== 未轉換 ======`);
	console.log(`====== Local storage ======`);
	console.log('local_no_obj ==>', localStorage.getItem("local_no_obj"));
	console.log('local_no_obj2 ==>', localStorage.getItem("local_no_obj2"));
	console.log('local_no_obj3 ==>', localStorage.getItem("local_no_obj3"));
	console.log(``);
	console.log('local_obj ==>', localStorage.getItem("local_obj"));
	console.log('local_obj2 ==>', localStorage.getItem("local_obj2"));
	console.log('local_obj3 ==>', localStorage.getItem("local_obj3"));
	
	console.log(``);
	
	console.log(`====== Session storage ======`);
	console.log('session_no_obj ==>', sessionStorage.getItem("session_no_obj"));
	console.log('session_no_obj2 ==>', sessionStorage.getItem("session_no_obj2"));
	console.log('session_no_obj3 ==>', sessionStorage.getItem("session_no_obj3"));
	console.log(``);
	console.log('session_obj ==>', sessionStorage.getItem("session_obj"));
	console.log('session_obj2 ==>', sessionStorage.getItem("session_obj2"));
	console.log('session_obj3 ==>', sessionStorage.getItem("session_obj3"));
	
	console.log(``);
	
	/* 轉換 */
	console.log(`====== 轉換 ======`);
	console.log(`====== Local storage ======`);
	console.log('local_obj ==>', JSON.parse(localStorage.getItem("local_obj")));
	console.log('local_obj2 ==>', JSON.parse(localStorage.getItem("local_obj2")));
	console.log('local_obj3 ==>', JSON.parse(localStorage.getItem("local_obj3")));
	
	console.log(``);
	
	console.log(`====== Session storage ======`);
	console.log('session_obj ==>', JSON.parse(sessionStorage.getItem("session_obj")));
	console.log('session_obj2 ==>', JSON.parse(sessionStorage.getItem("session_obj2")));
	console.log('session_obj3 ==>', JSON.parse(sessionStorage.getItem("session_obj3")));
}


/* 刪除某個項目 */
function removeLocalItem() {
	removeStorageItem(localStorage, "Local");
}
function removeSessionItem() {
	removeStorageItem(sessionStorage, "Session");
}
function removeStorageItem(storageObj, storageName)
{
	console.clear();
	
	const keyName = document.querySelector("#keyName").value.trim();
	console.log(`keyName = ${keyName}, [${typeof keyName}]`);
	
	// 沒有輸入鍵項, 中斷
	if (!keyName) {
		console.log(`請輸入鍵項！`);
		return;
	}
	
	// 取值
	const val = storageObj.getItem(keyName);
	console.log(`${storageName} storage [${keyName}] ==>`, val);
	
	// 鍵項不存在, 中斷
	if (!val) {
		console.log(`查無此鍵項！`);
		return;
	}
	
	// 移除
	storageObj.removeItem(keyName);
	
	console.log(`刪除完成！`);
}


/* 遍歷項目 */
function traceLocalItem() {
	traceStorageItem(localStorage, "Local");
}
function traceSessionItem() {
	traceStorageItem(sessionStorage, "Session");
}
function traceStorageItem(storageObj, storageName)
{
	console.clear();
	
	console.log(`${storageName} ==>`, storageObj);
	console.log(``);
	
	for (let index = 0; index < storageObj.length; index++) {
		const key = storageObj.key(index);
		console.log(`${index}   ${key} ==> ${storageObj.getItem(key)}`);
	}
}


/* 直接用物件的方式存取 Storage */
const storageObjTester = {
	setItem () {
		console.clear();
		console.log(`[Before]  `, localStorage);
		localStorage.test = "This is object test";
		console.log('[After]  ', localStorage);
		this.getItem();
	},
	
	getItem() {
		console.log(`localStorage.test ==>`, localStorage.test);
	},
	
	removeItem () {
		console.clear();
		console.log(`[Before]  `, localStorage);
		console.log(`delete localStorage.test ==>`, delete localStorage.test);
		this.getItem();
		console.log('[After]  ', localStorage);
	},
	
	keys () {
		console.clear();
		const keys = Object.keys(localStorage);
		console.log(keys);
	},
	
	values () {
		console.clear();
		const values = Object.values(localStorage);
		console.log(values);
	}
};

