// 建立 session cookie
// 瀏覽器關閉會自動刪除 (實測好像沒有)
function createSessionCookie() {
	document.cookie = "test1=Hello";
	document.cookie = "test2=World";
}

// 建立維持 5 分鐘的 cookie
function createFiveMinutesCookie() {
	document.cookie = "userName=Tom; max-age=300";
}


// 查看所有 cookie
function showAllCookies() {
	const allCookies = document.cookie;
	console.log(`allCookies ==>`, allCookies);
}

// 查看 test1、test2
function showTest1Test2() {
	const test1 = document.cookie.replace(
		/(?:(?:^|.*;\s*)test1\s*\=\s*([^;]*).*$)|^.*$/,
		"$1",
	);
	const test2 = document.cookie.replace(
		/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/,
		"$1",
	);
	
	console.log(`test1 ==>`, test1);
	console.log(`test2 ==>`, test2);
}


// 更新 test1 期限為一分鐘
function updateTest1() {
	// 設定 max-age，以秒為單位
	// document.cookie = "test1=Hello; max-age=60";
	
	// 設定 expires，須設定為 UTC 格式
	const expirationDate = new Date();
	expirationDate.setMinutes(expirationDate.getMinutes() + 1);
	document.cookie = `test1=Hello; expires=${expirationDate.toUTCString()}`;
}


/* 刪除 cookie */
// 設定一個過期的時間即失效
function removeCookie(name) {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
// max-age 設為 0 即失效
function removeCookie2(name) {
	document.cookie = `${name}=; max-age=0`;
}


