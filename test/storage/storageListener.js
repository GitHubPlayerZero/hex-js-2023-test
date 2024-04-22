/* Storage 事件 */
window.addEventListener("storage", function (event) {
	console.log(event);
	console.log(`Storage 鍵項 (event.key) ==> ${event.key}`);
	console.log(`原值 (event.oldValue) ==> ${event.oldValue}`);
	console.log(`新值 (event.newValue) ==> ${event.newValue}`);
	console.log(`觸發的頁面 (event.url) ==> ${event.url}`);
	console.log(`Storage 物件 (event.storageArea) ==>`, event.storageArea);
	console.log(``);
});

function testLocalListener()
{
	const key = document.querySelector("#keyName2").value;
	const value = document.querySelector("#keyValue2").value;
	console.log(`key = ${key}, value = ${value}`);
	
	return {
		setItem () {
			console.log(`localStorage setItem [${key} = ${value}]`);
			localStorage.setItem(key, value);
		},
		removeItem () {
			console.log(`localStorage removeItem [${key}]`);
			localStorage.removeItem(key);
		},
		setObjProperty () {
			console.log(`localStorage set object property [${key} = ${value}]`);
			localStorage[key] = value;
		},
		removeObjProperty () {
			console.log(`localStorage remove object property [${key}]`);
			delete localStorage[key];
		}
	};
}

