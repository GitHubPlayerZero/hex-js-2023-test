/* 物件傳參考基本測試 */

// 變數賦值為已存在的物件
function assignExistingObj()
{
	console.clear();
	
	const person = {
		name: '小明'
	};
	const person2 = person;
	person2.name = '杰倫';
	console.log(person.name);	// 杰倫
}

// 函式傳入物件
function testFunObj()
{
	console.clear();
	
	const person = {
		name: '小明'
	};
	
	function fn(obj) {
		obj.name = '漂亮阿姨';
	}
	fn(person);
	console.log(person.name);	// 杰倫
}

// 在陣列裡放的是原始型別，故為傳值而非傳參
function testAryOriginal()
{
	console.clear();
	
	const arr = [1, 2, 3, 4, 5];
	arr.forEach(function (item, index, ary) {
		item *= 2;
		
		// 要直接賦值給陣列才能改變陣列裡的值
		// arr[index] = item * 2;
		// ary[index] = item * 2;
	});
	console.log(arr);
}

// 在陣列裡放的是物件，故為傳參
function testAryObj()
{
	console.clear();
	
	const arr = [
		{num: 1},
		{num: 2},
		{num: 3},
	];
	arr.forEach(function (item) {
		item.num *= 2;
	});
	console.log(arr);
}



/* 物件的概念 */

// 基礎概念
function testObjBase()
{
	console.clear();
	
	const obj = {
		/*
			此結構可描述為：
				key : value
			亦可描述為：
				property name : property value
		*/
		name: '小明',	// 稱為屬性 (property)
		age: 16,	// 值可以使用原始型別
		dogs: ['Bob', 'May'],	// 值可以使用陣列
		
		// 值可以使用物件
		mother: {
			name: 'Merry',
			age: 39
		},
		
		// 值可以使用 function，此時通常會稱為方法 (method)
		go: function () {
			console.log(`你好！`);
		},
	};
	
	console.log(obj);
	
	// 取值 - 點記號
	console.log(`obj.name = ${obj.name}`);	// 小明
	
	// 取值 - 中括號
	console.log(`obj['age'] = ${obj['age']}`);	// 16
	
	const key = 'name';
	console.log(`obj[key] =`, obj[key]);
	
	// 執行 method
	console.log(``);
	console.log(`執行 obj.go() ...`);
	obj.go();
	
	// 使用中括號取得 method
	console.log(``);
	console.log(`執行 obj['go']() ...`);
	obj['go']();
	
	// 加入屬性
	obj.height = 180;
	obj["weight"] = 90;
	
	// 遍歷物件屬性
	console.log(``);
	console.log(`使用 for...in 遍歷 obj`);
	for (const key in obj) {
		if (obj.hasOwnProperty.call(obj, key)) {
			const element = obj[key];
			console.log(`key = ${key}, value = ${element}`);
		}
	}
}


// 進階觀念、可選串連
function testObj2()
{
	console.clear();
	
	const propertyName = 'name';
	
	// 物件下的屬性名稱都是字串
	const obj = {
		姓名: '小明',
		1: 1,
		'1a': '1a',	// 屬性名稱若為數字開頭的文數字，必須用字串包起來
		a1: 'a1',
		// 💖: 'love',	// 不能直接使用 emoji，要轉成字串
		'💖': 'love',
		propertyName: '杰倫',	// 屬性名稱為 "propertyName"
		
		// 屬性名稱要代入變數時，使用中括號
		[propertyName]: '漂亮阿姨',	// 屬性名稱為 "name"
		
		inner: {
			姓名: '內層的物件',
		},
	};
	console.log(obj);
	
	console.log(`obj.propertyName =`, obj.propertyName);	// 杰倫
	console.log(`obj["propertyName"] =`, obj["propertyName"]);	// 杰倫
	console.log(`obj[propertyName] =`, obj[propertyName]);	// 漂亮阿姨
	
	// 屬性名稱為數字開頭時，無法用點記號取值，只能用中括號
	console.log(`obj.a1 =`, obj.a1);
	// console.log(obj.1);	// SyntaxError: missing ) after argument listtoken
	console.log(`obj["1"] =`, obj["1"]);
	// console.log(obj.1a);	// SyntaxError: missing ) after argument list
	console.log(`obj["1a"] =`, obj["1a"]);
	
	// 取得內層物件
	console.log(`obj.inner.姓名 =`, obj.inner.姓名);
	console.log(`obj.inner["姓名"] =`, obj.inner["姓名"]);
	
	// 內層物件不存在
	console.log(`obj.inner2 =`, obj.inner2);	// undefined
	// console.log(`obj.inner2.name =`, obj.inner2.name);	// TypeError: Cannot read properties of undefined (reading 'name')
	
	// 使用「可選串連」避免發生錯誤
	console.log(`obj.inner2?.name =`, obj.inner2?.name);	// undefined
	console.log(`obj?.inner2?.name =`, obj?.inner2?.name);	// undefined
	
	// 可選串連搭配中括號取值
	console.log(`obj?.['inner'] =`, obj?.['inner']);
	console.log(`obj?.['inner']?.["姓名"] =`, obj?.['inner']?.["姓名"]);		// 內層的物件
	console.log(`obj?.['inner']?.姓名 =`, obj?.['inner']?.姓名);		// 內層的物件
	console.log(`obj?.['inner2']?.["姓名"] =`, obj?.['inner2']?.["姓名"]);	// undefined
}



/* 陣列 */

// 奇怪的手法
function testArrayStrangeness()
{
	console.clear();
	
	const arr = ['小明', '杰倫', '漂亮阿姨'];
	console.log(`原始 ==>`);
	console.table(arr);
	
	console.log(``);
	
	arr.name = '小明的朋友';
	// arr.push('小明的朋友');	// 正確做法
	console.log(`加入 arr.name ==>`);
	console.table(arr);
	
	console.log(``);
	
	arr[5] = '小明的媽媽';
	// arr.push('小明的媽媽');	// 正確做法
	console.log(`加入 arr[5] ==>`);
	console.table(arr);
	console.log(arr);
	console.log(`arr.length =`, arr.length);
	
	console.log(`forEach ==>`);
	arr.forEach(function (item, index) {
		console.log(index, item);
	});
	console.log(`arr[3] ==>`, arr[3]);
	console.log(`arr[4] ==>`, arr[4]);
}

// 迴圈
function testArrayLoop()
{
	console.clear();
	
	const arr = ['小明', '杰倫', '漂亮阿姨'];
	console.table(arr);
	console.log(``);
	
	console.log(`for...loop ==>`);
	for (let index = 0; index < arr.length; index++) {
		console.log(index, arr[index]);
	}
	
	console.log(``);
	
	console.log('forEach ==>');
	arr.forEach(function (item, index, array) {
		console.log(item, index, array);
	});
}



/* 物件傳參 */

/*
	基本測試
	變數賦值物件、永遠指向自己
*/
function testBaseObjRef()
{
	console.clear();
	
	const person = {
		name: '小明',
		inner: {
			name: '小明的內心世界',
		},
	};
	const person2 = person;
	person2.name = '杰倫';
	console.log(person.name);	// 杰倫
	console.log(person2.inner);
	console.log(``);
	
	// 即使兩個內容完全一樣的物件，其相比仍為 false
	console.log(`{} === {} ==>`, {} === {});
	console.log(`{} == {} ==>`, {} == {});
	
	// 由於將 person 直接賦值給 person2，兩者共用同一個記憶體空間，因此會相等
	console.log(`person === person2 ==>`, person === person2);
	console.log(``);
	
	person.另一個人 = person;
	console.log(`person.另一個人 = person; ==>`);
	console.log(person);
	console.log(`person.另一個人.name ==>`, person.另一個人.name);
}

// 函式也是物件
function testObjFn()
{
	console.clear();
	
	const fn = function () {};
	const fn2 = fn;
	fn.myName = '我是小明';
	console.log(`fn2.myName ==>`, fn2.myName);	// 我是小明
	console.dir(fn2);
}

// 惡搞 parseInt
function spoofParseInt()
{
	console.clear();
	
	console.log(`window.parseInt === Number.parseInt ==>`, window.parseInt === Number.parseInt);
	console.log(`Number.parseInt('100元') ==>`, Number.parseInt('100元'));	// 100
	console.log(`parseInt('100元') ==>`, parseInt('100元'));	// 100 (window 可省略)
	console.log(``);
	
	const 轉數值 = parseInt;
	console.log(`轉數值('100元') ==>`, 轉數值('100元'));	// 100
	console.log(``);
	
	// 將 parseInt 重新賦值為 null
	console.log(`parseInt = null;`);
	parseInt = null;
	console.log(`Number.parseInt('100元') ==>`, Number.parseInt('100元'));	// 100
	console.log(`轉數值('100元') ==>`, 轉數值('100元'));	// 100
	// console.log(`parseInt('100元') ==>`, parseInt('100元'));	// TypeError: parseInt is not a function
	console.log(``);
	
	// 害死人
	parseInt = function (num) {
		return Number.parseInt(num) * 2;
	}
	console.log(`害死人做法...`);
	console.log(`parseInt ==>`, parseInt);
	console.log(`parseInt('100元') ==>`, parseInt('100元'));
	
	parseInt = Number.parseInt;	// 改回來以避免後續測試有問題
}

// 深層物件
function testDeepObj()
{
	console.clear();
	
	const family = {
		name: '小明家',
		Ming: {
			name: '小明',
		}
	};
	console.log(family);
	
	// 將 family.Ming 賦值給 Ming
	const Ming = family.Ming;
	console.log(`Ming === family.Ming ==>`, Ming === family.Ming);	// true
	console.log(``);
	
	// Ming 增加一個方法，也會影响到 family.Ming
	Ming.go = function () {
		return '小明快跑';
	};
	console.log(`family.Ming.go() ==>`, family.Ming.go());	// 小明快跑
	console.log(``);
	
	// 透過函式設定物件的 name 屬性
	function fn(obj) {
		obj.name = '漂亮阿姨';
	}
	console.log(`family.Ming.name ==>`, family.Ming.name);	// 小明
	console.log(`After fn(obj) ...`);
	console.log(`family.Ming.name ==>`, family.Ming.name);	// 漂亮阿姨
	console.log(``);
	
	
	// 在函式中對物件重新賦值
	function fn2(obj) {
		console.log(`[fn2 Before]`, `obj === Ming ==>`, obj === Ming);
		
		// obj 被重新賦值，就會變成新的物件，與原本的物件斷開關係
		obj = {
			name: '杰倫'
		};
		obj.name = '阿水';
		
		console.log(`fn2 obj ==>`, obj);
		console.log(`[fn2 After]`, `obj === Ming ==>`, obj === Ming);
	}
	fn2(Ming);
	console.log(`family.Ming.name ==>`, family.Ming.name);	// 漂亮阿姨
	console.log(`Ming.name ==>`, Ming.name);	// 漂亮阿姨
}


// 拷貝
function testCopy()
{
	function getData() {
		return {
			testUndefined: undefined,
			testNull: null,
			name: '佛傑家',
			member: [
				{name: '洛伊德'},
				{name: '約兒'},
				{name: '安妮亞'},
				{name: '彭德'}
			],
			sayHello: function () {
				console.log(`大家好，我們是 ` + this.name);
			}
		};
	}
	
	/*
		淺層拷貝
		1. 只會拷貝第一層物件
		2. 可以拷貝函式
		3. 會拷貝值為 undefined 的屬性
		4. 會拷貝值為 null 的屬性
	*/
	console.log(`======= 淺拷貝 =======`);
	const family = getData();
	
	// 方法一：展開
	// const newFamily = {...family};
	
	// 方法二
	const newFamily = Object.assign({}, family);
	
	console.log(`family === newFamily ==>`, family === newFamily);
	console.log(`family.member === newFamily.member ==>`, family.member === newFamily.member);
	
	newFamily.name = '次子家';
	newFamily.member[0] = '小明來亂了';
	
	// 淺拷貝只能拷貝第一層物件，因此 name 不會彼此影响，但 member 就會影响。
	console.log(`family ==>`, family);
	console.log(`newFamily ==>`, newFamily);
	
	console.log(``);
	
	/*
		深層拷貝
		1. 不管幾層物件都可以拷貝
		2. 無法拷貝函式
		3. 不會拷貝值為 undefined 的屬性
		4. 會拷貝值為 null 的屬性
	*/
	console.log(`======= 深拷貝 =======`);
	const family2 = getData();
	
	console.log(`先轉成 JSON 字串...`);
	let newFamily2 = JSON.stringify(family2);
	console.log(`newFamily2 ==>`, newFamily2);
	
	console.log(``);
	console.log(`再轉成 JSON 物件...`);
	newFamily2 = JSON.parse(newFamily2);
	console.log(`newFamily2 ==>`, newFamily2);
	
	console.log(``);
	console.log(`family2 === newFamily2 ==>`, family2 === newFamily2);
	
	newFamily2.name = '次子家2';
	newFamily2.member[0] = '小明來亂了2';
	
	console.log(`family2 ==>`, family2);
	console.log(`newFamily2 ==>`, newFamily2);
}



/* 連續賦值的陷井 */

// 物件的連續賦值
function testObjContinuousAssignment()
{
	console.clear();
	
	let a = { x: 1 }
	let b = a;
	a.y = a = { x: 2 };
	
	/*
		a = { x: 2 } 為賦值運算子，會回傳「值」，即回傳 {x: 2}，因此 a.y 會被賦予 {x: 2}。
		那為何 a.y 會是 undefined 呢？
	*/
	/*
		卡斯伯老師的說明：
		這段程式的解析雖是由右至左，但實際執行卻幾乎是同時。
		因此 a.y 執行賦值時，a 尚未被重新賦值，此時 a.y 的 a 會是原物件（0x01），因此 a.y 加在了原物件上。
		而後當 a 被重新賦值時，其成為了一個新物件（0x02），因此沒有 a.y。
	*/
	/*
		我覺得更為精確的說明：
		搞懂JavaScript中的连续赋值：https://cloud.tencent.com/developer/article/1093667
		ECMA 文檔：https://262.ecma-international.org/5.1/#sec-11.13.1
		
		賦值運算子在一開始，等號左右兩邊就會先被解析出來，因此等號左邊被賦值的變數，是已經被定義好的，因此 a.y、a 會代表原物件。
		但因為 {x: 2} 為新的物件，a = {x: 2} 又是整個變數重新賦值的運算，因此 a 被更改指向了新物件。
		而 a.y 的賦值只是屬性的賦值，故 a.y 仍是指向原物件。
	*/
	console.log(a.y);	// undefined
	console.log(`b === a ==>`, b === a);	// false
	console.log(`b.y === a ==>`, b.y === a);	// true
	console.log(`b.y ==>`, b.y);	// {x: 2}
}

// 其它連續賦值題目
function testContinuousAssignment()
{
	console.clear();
	
	(function () {
		var a = b = 1;
	}) ();
	
	// console.log(a);	// ReferenceError: a is not defined
	
	console.log(`b =`, b);	// 1，變成了全域 window 下的屬性
	delete window.b;	// 刪除 window 屬性
	// console.log(b);	// ReferenceError: b is not defined
}



/* 物件的陣列方法 */
function testObjectAry()
{
	console.clear();
	
	const family = {
		Ming: {
			name: '小明',
		},
		Jay: {
			name: '杰倫'
		},
		Auntie: {
			name: '漂亮阿姨'
		}
	};
	console.log(family);
	console.log(``);
	
	
	// Object.entries
	console.log(`Object.entries 基本測試...`);
	const obj = {
		aaa: 'AAA',
		bbb: 'BBB',
		ccc: 'CCC',
	};
	console.log(obj);
	console.log(Object.entries(obj));
	console.log(``);
	
	console.log(`Object.entries(family) ==>`);
	console.log(Object.entries(family));
	console.log(``);
	
	
	// Object.keys
	const keys = Object.keys(family);
	console.log(`Object.keys(family) ==>`);
	console.table(keys);
	keys.forEach(function (key, index) {
		console.log(index, `key =`, key);
		console.log(`value =`, family[key]);
	});
	console.log(``);
	
	
	// Object.values
	const values = Object.values(family);
	console.log(`Object.values(family) ==>`);
	console.table(values);
	values.forEach(function (value, index) {
		console.log(index, value);
	});
	console.log(``);
}

