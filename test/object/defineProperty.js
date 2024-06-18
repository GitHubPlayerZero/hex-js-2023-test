const elmtCode = document.querySelector(".result");

function showResult(obj) {
	elmtCode.textContent = JSON.stringify(obj);
}


/**
 * 測試所有
 * @param { Object } obj 
 * @param { string } property 
 */
function testAll(obj, property) {
	testBase(obj, property);
	deleteProperty(obj, property);
}

/**
 * 測試修改與遍歷
 * @param { Object } obj 
 * @param { string} property 
 */
function testBase(obj, property) {
	modifyProperty(obj, property);
	testEntries(obj);
}

/**
 * 遍歷屬性
 * @param { Object } obj 
 */
function testEntries(obj) {
	console.log(``);
	console.log(`遍歷 ...`);
	console.log(`Object.entries(obj) ==>`, Object.entries(obj));
}

/**
 * 修改屬性
 * @param { Object } obj 
 * @param { string} property 
 */
function modifyProperty(obj, property) {
	console.log(``);
	console.log(`修改屬性 obj[${property}] ... `, obj[property] = '小華');
	console.log(`obj ==>`, obj);
}

/**
 * 刪除屬性
 * @param { Object } obj 
 * @param { string} property 
 */
function deleteProperty(obj, property) {
	console.log(``);
	console.log(`刪除 ...`);
	console.log(`delete obj[${property}] ==>`, delete obj[property]);
	console.log(`obj ==>`, obj);
}


/**
 * 測試 defineProperty
 * @returns 包含所有測試方法的 Object
 */
function createDefinePropertyTest()
{
	console.clear();
	
	const obj = {
		age: 20,
	};
	console.log(`obj ==>`, obj);
	showResult(obj);
	
	
	/* 加入預設屬性 */
	function addDefaultProperty()
	{
		console.log(``);
		console.log(`加入預設屬性 ...`);
		
		const descriptor = Object.create(null);
		Object.defineProperty(obj, 'default', descriptor);
		console.log(`obj ==>`, obj);
		
		testAll(obj, 'default');
		
		console.log(``);
		
		/*
			原 configurable 為 false 則無法修改，會發生錯誤：
			TypeError: Cannot redefine property: default
		*/
		console.log(`重新設定 configurable 為 true ...`);
		
		try {
			Object.defineProperty(obj, 'default', {
				configurable: true,
			});
		}
		catch (error) {
			console.error(error);
		}
		
		showResult(obj);
	}
	
	
	/* 加入可列舉屬性 */
	function addEnumerableProperty()
	{
		console.log(``);
		console.log(`加入可列舉屬性 ...`);
		
		Object.defineProperty(obj, 'enum', {
			value: '可列舉屬性',
			enumerable: true,
		});
		console.log(`obj ==>`, obj);
		
		testAll(obj, 'enum');
		
		showResult(obj);
	}
	
	
	/* 加入可修改屬性 */
	function addWritableProperty()
	{
		console.log(``);
		console.log(`加入可修改屬性 ...`);
		
		Object.defineProperty(obj, 'writable', {
			value: '可修改屬性',
			enumerable: true,
			writable: true,
		});
		console.log(`obj ==>`, obj);
		
		testAll(obj, 'writable');
		
		showResult(obj);
	}
	
	
	/* 加入可刪除屬性 */
	function addDeletableProperty()
	{
		console.log(``);
		console.log(`加入可刪除屬性 ...`);
		
		Object.defineProperty(obj, 'deletable', {
			value: '可刪除屬性',
			enumerable: true,
			configurable: true,
		});
		console.log(`obj ==>`, obj);
		
		testBase(obj, 'deletable');
		
		showResult(obj);
	}
	
	// 刪除
	function deleteDeletableProperty() {
		console.log(``);
		console.log(`刪除 ...`);
		deleteProperty(obj, 'deletable');
		showResult(obj);
	}
	
	
	return {
		addDefaultProperty,
		addEnumerableProperty,
		addWritableProperty,
		addDeletableProperty,
		deleteDeletableProperty,
	};
}

let definePropertyTest;
function buildDefinePropertyTest() {
	definePropertyTest = createDefinePropertyTest();
	document.querySelector("#definePropertyArea").style.display = "";
}


/**
 * 測試 defineProperties
 * @returns 包含所有測試方法的 Object
 */
function createDefinePropertiesTest()
{
	console.clear();
	
	const obj = {};
	console.log(`obj ==>`, obj);
	showResult(obj);
	
	
	/* 加入多個屬性 */
	function addMultiProperties()
	{
		console.log(``);
		console.log(`加入多個屬性 ...`);
		
		Object.defineProperties(obj, {
			default: {},
			enum: {
				value: '可列舉屬性',
				enumerable: true,
			},
			writable: {
				value: '可列舉、可修改屬性',
				enumerable: true,
				writable: true,
			},
			deletable: {
				value: '可列舉、可刪除屬性',
				enumerable: true,
				configurable: true,
			},
		});
		console.log(`obj ==>`, obj);
		
		showResult(obj);
	}
	
	
	/* 遍歷 */
	function listProperties() {
		testEntries(obj);
	}
	
	
	/* 修改所有屬性 */
	function modifyProperties()
	{
		for (const key in obj) {
			modifyProperty(obj, key);
		}
		showResult(obj);
	}
	
	
	/* 刪除所有屬性 */
	function deleteProperties()
	{
		for (const key in obj) {
			deleteProperty(obj, key);
		}
		showResult(obj);
	}
	
	
	return {
		addMultiProperties,
		listProperties,
		modifyProperties,
		deleteProperties,
	};
}

let definePropertiesTest;
function buildDefinePropertiesTest() {
	definePropertiesTest = createDefinePropertiesTest();
	document.querySelector("#definePropertiesArea").style.display = "";
}


// 測試 Getter / Setter
function createGetterSetterTest()
{
	console.clear();
	
	const obj = {
		name: '小明',
		age: 20,
		sex: "男",
	};
	console.log(`obj ==>`, obj);
	showResult(obj);
	
	
	/**
	 * 設定 age 的 Getter
	 * 此為錯誤方式，會讓 age 的值變成 undefined，而每當呼叫 obj.age 時都會變成呼叫 Getter
	 */
	function setAgeGetter()
	{
		console.log(``);
		console.log(`設定 age 的 Getter ...`);
		
		Object.defineProperty(obj, 'age', {
			get() {
				console.log(`我是 age 的 Getter ...`);
				// return this.age;	// 會造成無窮迴圈
			},
		});
		
		console.log(`obj ==>`, obj);
		showResult(obj);
	}
	
	// 呼叫 age
	function callAge() {
		console.log(``);
		console.log(`obj.age ===>`, obj.age);
	}
	
	
	/**
	 * 設定 age 的 Setter
	 * 此為錯誤方式，會讓 age 的值變成 undefined，而每當賦值給 obj.age 時，都會變成呼叫 Setter
	 */
	function setAgeSetter()
	{
		console.log(``);
		console.log(`設定 age 的 Setter ...`);
		
		Object.defineProperty(obj, 'age', {
			set(num) {
				console.log(`我是 age 的 Setter ...`, num);
				// this.age = num;	// 會造成無窮迴圈
			}
		});
		
		console.log(`obj ==>`, obj);
		showResult(obj);
	}
	
	// 設定 age
	function setAge() {
		console.log(``);
		console.log(`Set obj.age as ...`, obj.age = 12);
		console.log(`obj ==>`, obj);
		showResult(obj);
	}
	
	
	/**
	 * 設定 weight 的 Getter / Setter
	 * 建立 _weight 為真正存放資料的屬性；weight 為 Getter、Setter。
	 */
	function setWeightGetterSetter()
	{
		console.log(``);
		console.log(`設定 weight 的 Getter / Setter ...`);
		
		Object.defineProperties(obj, {
			
			"_weight": {
				value: 80,
				enumerable: true,
				writable: true,
				configurable: true,
			},
			
			weight: {
				get () {
					console.log(`我是 weight 的 Getter ...`);
					return this._weight;
				},
				
				set (num) {
					console.log(`我是 weight 的 Setter ...`);
					console.log(`Set weight as ==>`, num);
					this._weight = num;
				},
			},
		});
		
		console.log(`obj ==>`, obj);
		testEntries(obj);
		showResult(obj);
	}
	
	// 呼叫 weight
	function callWeight() {
		console.log(``);
		console.log(`obj.weight ==> ${obj.weight}`);
	}
	
	// 增加 weight
	function addWeight() {
		console.log(``);
		console.log(`最近吃太多，體重增加 1 ...`);
		obj.weight ++;
		console.log(`obj ==>`, obj);
		showResult(obj);
	}
	
	
	return {
		callAge,
		setAge,
		setAgeGetter,
		setAgeSetter,
		setWeightGetterSetter,
		callWeight,
		addWeight,
	};
}

let getterSetterTest;
function buildGetterSetterTest() {
	getterSetterTest = createGetterSetterTest();
	document.querySelector("#getterSetterArea").style.display = "";
}


/**
 * 測試 preventExtensions
 * @returns 包含所有測試方法的 Object
 */
function createPreventExtensionsTest()
{
	console.clear();
	
	const obj = {
		name: '小明',
		age: 18,
		score: {
			數學: 90,
			英文: 70,
		},
	};
	console.log(`obj ==>`, obj);
	console.log(`obj.score ==>`, obj.score);
	
	console.log(``);
	
	console.log(`set preventExtensions ...`);
	Object.preventExtensions(obj);
	console.log(`Object.isExtensible(obj) ==>`, Object.isExtensible(obj));
	
	testEntries(obj);
	
	showResult(obj);
	
	
	/* 修改屬性 */
	function modifyName() {
		modifyProperty(obj, 'name');
		showResult(obj);
	}
	
	/* 刪除屬性 */
	function deleteAge() {
		deleteProperty(obj, 'age');
		showResult(obj);
	}
	
	/* 增加屬性 */
	function addProperty() {
		console.log(``);
		console.log(`增加屬性 obj.deposit ... `, obj.deposit = 2000);
		console.log(`obj ==>`, obj);
		showResult(obj);
	}
	
	/* 增加子物件屬性 */
	function addScoreProperty() {
		console.log(``);
		console.log(`增加子物件屬性 obj.score.國文 ... `, obj.score.國文 = 50);
		console.log(`obj.score ==>`, obj.score);
		showResult(obj);
	}
	
	
	/* 使用 defineProperty 修改屬性 */
	function useDefinePropertyModify()
	{
		console.log(``);
		console.log(`使用 defineProperty 修改屬性 (name) ...`);
		
		Object.defineProperty(obj, 'name', {
			value: 'bbb',
		});
		
		console.log(`obj ==>`, obj);
		showResult(obj);
	}
	
	
	/* 使用 defineProperty 新增屬性 */
	function useDefinePropertyAdd()
	{
		console.log(``);
		console.log(`使用 defineProperty 新增屬性 (sex) ...`);
		
		// TypeError: Cannot define property sex, object is not extensible
		try {
			Object.defineProperty(obj, 'sex', {
				value: 'male',
			});
		}
		catch (error) {
			console.error(error);
		}
		
		console.log(`obj ==>`, obj);
		showResult(obj);
	}
	
	
	return {
		modifyName,
		deleteAge,
		addProperty,
		addScoreProperty,
		useDefinePropertyModify,
		useDefinePropertyAdd,
	};
}

let preventExtensionsTest;
function buildPreventExtensionsTest() {
	preventExtensionsTest = createPreventExtensionsTest();
	document.querySelector("#preventExtensionsArea").style.display = "";
}


/**
 * 測試 seal 及 freeze
 */
class SealFreezeTester
{
	static MODE_SEAL = 'seal';
	static MODE_FREEZE = 'freeze';
	
	constructor() {}
	
	test (testMode)
	{
		console.clear();
		
		if (!testMode) {
			throw new Error("必須給入 testMode！");
		}
		
		const obj = {
			test1: '小明 1',
			test2: '小明 2',
		};
		console.log(`obj ==>`, obj);
		
		console.log(`isFrozen ??`, Object.isFrozen(obj));
		console.log(`isSealed ??`, Object.isSealed(obj));
		console.log(`isExtensible ??`, Object.isExtensible(obj));
		
		
		/* 先使用 test1 做測試 */
		console.log(``);
		console.log(`====== test1 ======`);
		
		testEntries(obj);
		modifyProperty(obj, 'test1');
		
		console.log(``);
		console.log(`更改配置 test1 為不可列舉 ...`);
		Object.defineProperty(obj, 'test1', {
			enumerable: false,
		});
		console.log(`obj ==>`, obj);
		testEntries(obj);
		
		deleteProperty(obj, 'test1');
		
		console.log(``);
		console.log(`增加屬性 test3 ...`);
		obj.test3 = 'aaa';
		console.log(`obj ==>`, obj);
		
		
		/* 設定為 testMode */
		console.log(``);
		console.log(`====== 設定為 ${testMode} ======`);
		if (SealFreezeTester.MODE_SEAL === testMode) {
			Object.seal(obj);
		} else {
			Object.freeze(obj);
		}
		console.log(`isFrozen ??`, Object.isFrozen(obj));
		console.log(`isSealed ??`, Object.isSealed(obj));
		console.log(`isExtensible ??`, Object.isExtensible(obj));
		
		
		/* 使用 test2 做測試 */
		console.log(``);
		console.log(`====== test2 ======`);
		
		testEntries(obj);
		modifyProperty(obj, 'test2');
		
		console.log(``);
		console.log(`更改配置 test2 為不可列舉 ...`);
		
		// TypeError: Cannot redefine property: test2
		try {
			Object.defineProperty(obj, 'test2', {
				enumerable: false,
			});
		}
		catch (error) {
			console.error(error);
		}
		console.log(`obj ==>`, obj);
		testEntries(obj);
		
		deleteProperty(obj, 'test2');
		
		console.log(``);
		console.log(`增加屬性 test4 ...`);
		try {
			obj.test4 = 'bbb';
		}
		catch (error) {
			console.error(error);
		}
		console.log(`obj ==>`, obj);
	}
}

const tester = new SealFreezeTester();
function testSeal() {
	tester.test(SealFreezeTester.MODE_SEAL);
}
function testFreeze() {
	tester.test(SealFreezeTester.MODE_FREEZE);
}

