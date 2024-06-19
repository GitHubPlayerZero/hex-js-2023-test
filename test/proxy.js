/* 基本結構測試 */
function testBase()
{
	console.clear();
	
	const obj = {
		name: '小明',
	};
	
	// 沒有設定任何捕獲器
	const handler1 = {};
	const proxyObj1 = new Proxy(obj, handler1);
	console.log(proxyObj1);
	
	console.log(``);
	console.log(`====== 顯示 proxyObj1.name ======`);
	console.log(`proxyObj1.name ==>`, proxyObj1.name);
	
	console.log(``);
	console.log(`====== Set proxyObj1.age as 18 ======`);
	proxyObj1.age = 18;
	console.log(`proxyObj1 ==>`, proxyObj1);
	console.log(`obj ==>`, obj);
	
	console.log(``);
	console.log(`====== Set obj.sex as 'male' ======`);
	obj.sex = 'male';
	console.log(`proxyObj1 ==>`, proxyObj1);
	console.log(`obj ==>`, obj);
}


/* 基本 get、set 測試 */
function testGetSet()
{
	console.clear();
	
	const obj = {
		name: '小明',
	};
	
	// 設定 get、set 捕獲器
	const handler2 = {
		get (target, prop, value) {
			console.log(`[Get] ...`);
			console.log(`[Get] target ==>`, target);
			console.log(`[Get] prop ==>`, prop);
			console.log(`[Get] value ==>`, value);
			return `[proxy] ${target[prop]}`;	// 把值加工後再回傳
		},
		
		set (target, prop, value, receiver) {
			console.log(`[Set] ...`);
			console.log(`[Set] target ==>`, target);
			console.log(`[Set] prop ==>`, prop);
			console.log(`[Set] value ==>`, value);
			console.log(`[Set] receiver ==>`, receiver);
			
			// 若為 age 則 + 3
			if (prop === 'age') {
				target[prop] = value + 3;
			}
			else {
				target[prop] = value;
			}
			
			return true;
		},
	};
	
	const proxyObj2 = new Proxy(obj, handler2);
	console.log(proxyObj2);
	
	console.log(``);
	console.log(`====== 顯示 obj.name ======`);
	console.log(`obj.name ==>`, obj.name);
	
	console.log(``);
	console.log(`====== 顯示 proxyObj2.name ======`);
	console.log(`proxyObj2.name ==>`, proxyObj2.name);
	
	console.log(``);
	console.log(`====== Set obj.sex as 'female' ======`);
	obj.sex = 'female';
	console.log(`proxyObj2 ==>`, proxyObj2);
	console.log(`obj ==>`, obj);
	
	console.log(``);
	console.log(`====== Set proxyObj2.sex as 'male' ======`);
	proxyObj2.sex = 'male';
	console.log(`proxyObj2 ==>`, proxyObj2);
	console.log(`obj ==>`, obj);
	
	console.log(``);
	console.log(`====== Set obj.age as 18 ======`);
	obj.age = 18;
	console.log(`proxyObj2 ==>`, proxyObj2);
	console.log(`obj ==>`, obj);
	
	console.log(``);
	console.log(`====== Set proxyObj2.age as 18 ======`);
	proxyObj2.age = 18;
	console.log(`proxyObj2 ==>`, proxyObj2);
	console.log(`obj ==>`, obj);
}


/* 測試 Get */
function testGet()
{
	console.clear();
	
	const obj = {
		name: '小明',
	};
	console.log(`obj ==>`, obj);
	console.log(``);
	
	console.log(`====== 增加 sex (不可寫、不可配置) ======`);
	
	// 建立不可寫、不可配置的屬性
	Object.defineProperty(obj, 'sex', {
		value: 'male',
		writable: false,
		configurable: false,
	});
	console.log(`obj ==>`, obj);
	
	console.log(``);
	
	console.log(`====== 建立 handler ======`);
	
	const handler = {
		get (target, prop) {
			console.log(`[Get] ...`);
			console.log(`[Get] target ==>`, target);
			console.log(`[Get] prop ==>`, prop);
			return `[proxy] ${target[prop]}`;	// 把值加工後再回傳
		},
	};
	// console.log(`handler.get ==>`, handler.get);
	const proxyObj = new Proxy(obj, handler);
	console.log(`proxyObj ==>`, proxyObj);
	
	const handler2 = {
		get (target, prop) {
			console.log(`[handler2 Get] ...`);
			console.log(`[handler2 Get] target ==>`, target);
			console.log(`[handler2 Get] prop ==>`, prop);
			return target[prop];
		},
	};
	// console.log(`handler2.get ==>`, handler2.get);
	const proxyObj2 = new Proxy(obj, handler2);
	console.log(`proxyObj2 ==>`, proxyObj2);
	
	console.log(``);
	console.log(`顯示 proxyObj.name ...`);
	console.log(`proxyObj.name ==>`, proxyObj.name);
	
	console.log(``);
	console.log(`顯示 proxyObj2.name ...`);
	console.log(`proxyObj2.name ==>`, proxyObj2.name);
	
	console.log(``);
	
	console.log(`顯示 proxyObj.sex ...`);
	/*
		若屬性為不可寫且不可配置，則 get 只能回傳原值，而不能改變它的值，否則會報錯。
		TypeError: 'get' on proxy: property 'sex' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value (expected 'male' but got '[proxy] male')
	*/
	try {
		console.log(`proxyObj.sex ==>`, proxyObj.sex);
	}
	catch (error) {
		console.error(error);
	}
	
	console.log(``);
	console.log(`顯示 proxyObj2.sex ...`);
	console.log(`proxyObj2.sex ==>`, proxyObj2.sex);
	
	console.log(``);
	
	console.log(`====== obj2 繼承 proxyObj2 ======`);
	const obj2 = Object.create(proxyObj2);
	obj2.name = '小華';
	console.log(`obj2 ==>`, obj2);
	console.log(``);
	
	// 若訪問的屬性是本身就有的，就不會使用到 prototype 的 proxy
	console.log(`顯示 obj2.name ...`);
	console.log(`obj2.name ==>`, obj2.name);
	console.log(``);
	
	// 若訪問的屬性是本身沒有的，就會調用 prototype 的 proxy
	console.log(`顯示 obj2.sex ...`);
	console.log(`obj2.sex ==>`, obj2.sex);
	console.log(``);
	console.log(`顯示 obj2.age ...`);
	console.log(`obj2.age ==>`, obj2.age);
}


/* 測試 set */
function testSet()
{
	console.clear();
	
	const obj = {
		name: '小明',
		age: 18,
	};
	
	// 建立不可寫、不可配置的屬性
	Object.defineProperty(obj, 'sex', {
		value: 'male',
		writable: false,
		configurable: false,
	});
	
	console.log(`obj ==>`, obj);
	console.log(``);
	
	console.log(`====== 建立 handler ======`);
	const handler = {
		set(target, prop, value, receiver) {
			console.log(`[Set] target ==>`, target);
			console.log(`[Set] prop ==>`, prop);
			console.log(`[Set] value ==>`, value);
			console.log(`[Set] receiver ==>`, receiver);
			
			if (typeof value === 'string') {
				target[prop] = `[proxy] ${value}`;
			}
			else {
				target[prop] = value + 3;
			}
			
			return true;
		},
	};
	
	const proxyObj = new Proxy(obj, handler);
	console.log(`proxyObj ==>`, proxyObj);
	console.log(``);
	
	console.log(`====== Set name ======`);
	console.log(`Set proxyObj.name as '小華' ...`);
	proxyObj.name = '小華';
	console.log(`proxyObj ==>`, proxyObj);
	console.log(``);
	
	console.log(`====== Set age ======`);
	console.log(`Set proxyObj.age as 20 ...`);
	proxyObj.age = 20;
	console.log(`proxyObj ==>`, proxyObj);
	console.log(``);
	
	console.log(`====== Set sex ======`);
	console.log(`Set proxyObj.sex as 'female' ...`);
	
	/*
		由於 sex 為不可寫、不可配置的屬性，因此不能修改，會出錯。
		TypeError: 'set' on proxy: trap returned truish for property 'sex' which exists in the proxy target as a non-configurable and non-writable data property with a different value
	*/
	try {
		proxyObj.sex = 'female';
	}
	catch (error) {
		console.error(error);
	}
	console.log(`proxyObj ==>`, proxyObj);
	console.log(``);
	
	console.log(`====== obj2 繼承 proxyObj ======`);
	const obj2 = Object.create(proxyObj, {
		name: {
			value: '波斯頓',
			configurable: true,
			writable: true,
			enumerable: true,
		},
	});
	console.log(`obj2 ==>`, obj2);
	console.log(``);
	
	// 修改自己本身有的屬性，不會調用繼承的 proxy
	console.log(`====== Set name ======`);
	console.log(`Set obj2.name as '宙斯' ...`);
	obj2.name = '宙斯';
	console.log(`obj2 ==>`, obj2);
	console.log(`obj ==>`, obj);
	console.log(``);
	
	/*
		修改自己本身沒有的屬性，會調用繼承的 proxy。
		在這種情況下，target 為父物件 obj，而 obj2 為 receiver。
		因此這邊會變成修改了父物件 obj 的 age...
	*/
	console.log(`====== Set age ======`);
	console.log(`Set obj2.age as 12 ...`);
	obj2.age = 12;
	console.log(`obj2 ==>`, obj2);
	console.log(`obj ==>`, obj);
	console.log(``);
}


/* 模仿 Vue 3 功能 */
function imitateVue3()
{
	console.clear();
	
	const render = (prop, data) => {
		const target = document.querySelector("#app");
		target.innerHTML = `${prop}: ${data}`;
	};
	
	const handler = {
		get(obj, prop, value) {
			console.log('get:', obj, prop, value);
			return obj[prop];
		},
		set(obj, prop, newVal) {
			console.log('set:', obj, prop, newVal);
			obj[prop] = newVal;
			render(prop, newVal);
			return newVal;
		}
	};
	
	const proxyObj = new Proxy({}, handler);
	console.log(`Set proxyObj.name ...`, proxyObj.name = '小明');
	console.log(`proxyObj ==>`, proxyObj);
}