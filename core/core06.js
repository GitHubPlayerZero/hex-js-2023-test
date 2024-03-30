// 在整個腳本下使用嚴格模式時，一定要放在所有程式碼之前才有作用。
// 'use strict';
// console.log(`this ==>`, this);	// 全域 window 物件
// console.log(`window ==>`, window);	// 全域 window 物件
// console.log(`this === window ==>`, this === window);	//true


/* 嚴格模式 */
function testStrictMode()
{
	console.clear();
	
	'use strict';
	
	// 嚴格模式不能用這種寫法
	// a = 1;	// a is not defined
	// 需要宣告變數
	let a = 1;
	// 或是若要寫入全域屬性，只能用這種寫法
	window.a = 1;
	
	console.log(`a = ${a}`);
	console.log(`delete window.a ==>`, delete window.a);
	// console.log(`a = ${a}`);	//  a is not defined
}



/* this */

// 函式本身可以取得這些資訊
// 函式內的 this 跟函式作用域有關係
function testFn1()
{
	console.clear();
	
	function fn(myName)
	{
		// 傳入的第一個參數 (屬於函式本身作用域)
		console.log(`myName ==>`, myName);	// '小明'
		
		// 傳入的所有參數 (屬於函式本身作用域)
		console.log(`arguments ==>`, arguments);	// Arguments(3) ['小明', 1, 2]
		
		// this, 屬於函式本身作用域
		console.log(`this ==>`, this);
		
		// window, 屬於外層的作用域
		console.log(`window ==>`, window);
		
		// 當前的 this 指向 window
		console.log(`this === window ??`, this === window);	// true
		
		debugger;
	}
	
	fn('小明', 1, 2);
}


/*
	全域環境下的 this
	全域本身就有 this，直接指向 window。
	這種 this 不要使用！
*/
window.myName = '全域的小明';
console.log(`myName ==>`, myName);
console.log(`this ==>`, this);
console.log(`this === window ==>`, this === window);
console.log(`this.myName ==>`, this.myName);


// 純粹呼叫函式 (直接呼叫、callback function、立即函式)
// this 會指向全域
function testCallFn1()
{
	console.clear();
	
	console.log(`this ==>`, this);
	console.log(`this.myNameTest123 ==>`, this.myNameTest123);
}


// 嚴格模式下的 this
function testStrictThis()
{
	console.clear();
	
	function useSloppy() {
		console.log(`不嚴格的 this ==>`, this);	// 全域 Window 物件
		console.log(`不嚴格的 window ==>`, window);	// 全域 Window 物件
		console.log(`this === window ==>`, this === window);	// true
	}
	
	function useStrict() {
		"use strict";
		console.log(`嚴格的 this ==>`, this);	// undefined
		console.log(`嚴格的 window ==>`, window);	// 全域 Window 物件
		console.log(`this === window ==>`, this === window);	// false
	}
	
	const obj = {
		myName: "我是 obj",
		useStrict
	};
	
	useSloppy();
	console.log(``);
	useStrict();
	console.log(``);
	console.log(`透過物件呼叫嚴格模式 ......`);
	obj.useStrict();
}


// 物件下的方法
// this 的指向在於如何呼叫它
function testObjThis1()
{
	console.clear();
	
	function callName() {
		return this.myName;
	}
	console.log(callName);
	console.log(`callName() ==>`, callName());	// 全域的小明
	console.log(``);
	
	const family = {
		myName: '小明家',
		callName,
		ming: {
			myName: '小明',
			callName,
		}
	};
	console.log(`family ==>`, family);
	console.log(`family.callName() ==>`, family.callName());	// 小明家
	console.log(`family.ming.callName() ==>`, family.ming.callName());	// 小明
}



/*
	this 與箭頭函式
	箭頭函式沒有自己的 this，箭頭函式的 this 會指向外層作用域的 this。
*/

// 測試一：立即執行函式
function testArrowIIFE1()
{
	console.clear();
	
	(() => {
		console.log("#1", this);
	}) ();
	
	console.log(``);
	
	(function () {
		console.log("#2 傳統函式", this);
		
		(() => {
			console.log("#2 箭頭函式", this);
		}) ();
	}) ();
}


// 測試二：物件
function testArrowObj1()
{
	console.clear();
	
	const family = {
		myThis: this,
		myName: '小明家',
		callNameFunc() {
			return this.myName;
		},
		callNameArrow: () => {
			return this.myName;
		},
		
		later () {
			console.log("later this ==>", this);
			
			setTimeout(function () {
				console.log(``);
				console.log("later 傳統函式 ==>", this.myName);	// 全域的小明
			}, 100);
			
			setTimeout(() => {
				console.log(``);
				console.log("later 箭頭函式 ==>", this.myName);	// 小明家
			}, 100);
		},
		
		later2 () {
			(() => {
				console.log('later2 this #1 ==>', this);	// family 物件
				setTimeout(() => {
					console.log(``);
					console.log(`later2 this #2 ==>`, this);	// family 物件
				}, 100);
			}) ();
		},
		
		ming: {
			myThis: this,
			myName: '小明',
			
			callIIFE() {
				console.log(``);
				console.log("ming.callIIFE this ==>", this);
				
				(function () {
					console.log("ming.callIIFE 傳統函式 ==>", this.myName);	// 全域的小明
				}) ();
				
				(() => {
					console.log("ming.callIIFE 箭頭函式 ==>", this.myName);	// 小明
				}) ();
			},
		}
	};
	
	console.log(`family ==>`, family);
	
	// 傳統函式看前方的物件
	console.log(`family.callNameFunc() ==>`, family.callNameFunc());	// 小明家
	
	// 箭頭函式看上層
	console.log(`family.callNameArrow() ==>`, family.callNameArrow());	// 全域的小明
	
	console.log(``);
	
	/*
		1. callback function 沒有前方的物件，因此傳統函式的 this 為全域 window。
		2. 箭頭函式看上層。
			上層是 later 函式，later 為傳統函式，其 this 作用域看前方物件，即為 family 物件。
			因此其中的箭頭函式 this 亦為 family 物件。
	*/
	family.later();
	console.log(``);
	
	/*
		1. callback function 沒有前方的物件，因此傳統函式的 this 為全域 window。
		2. 箭頭函式看上層。
			上層是 callIIFE 函式，callIIFE 為傳統函式，其 this 作用域看前方物件，即為 family.ming 物件。
			因此其中的箭頭函式 this 亦為 family.ming 物件。
	*/
	family.ming.callIIFE();
	
	console.log(``);
	family.later2();
}



/*
	this 應用：模擬 Vue 物件操作
	1. 元件初始化
	2. 取得資料並更新文字
	3. 進行渲染
*/
function imitateVue()
{
	console.clear();
	
	var component =
	{
		text: "這是一段文字",
		el: document.getElementById("root"),
		
		getData ()
		{
			console.log(this.text);	// 這是一段文字
			console.log(``);
			
			// 從遠端取得資料
			
			// 此做法無法存取到 component 的 text
			/* setTimeout(function () {
				console.log(this);	// 全域 window
			}, 1000); */
			
			// 將 this 存進變數
			const that = this;	// 傳參考
			setTimeout(function () {
				console.log(`that ==>`, that);
				console.log(`that.text ==>`, that.text);
				that.text = '這是被替換掉的文字';
				that.processData();
				that.render();
			}, 1000);
			
			// 箭頭函式沒有自己的 this，會使用外層的作用域的 this
			/* setTimeout(() => {
				console.log(this);	// component
				console.log(this.text);	// 這是一段文字
			}, 1000); */
		},
		
		processData () {
			this.text = `[Component] ${this.text}`;
		},
		
		render () {
			console.log(``);
			console.log(`我要渲染到畫面上`);
			console.log(this.text);
			this.el.textContent = this.text;
		},
		
		init () {
			console.log(`init ...`);
			this.getData();
		}
	};
	console.log(`component ==>`, component);
	component.init();
	
	console.log(``);
	
	
	/*
		複製 component，將之渲染到 root2。
		由於 component 的操作都是使用 "this"，而不是直接指定為 "component"，因此可以直接複製到另一個物件使用。
	*/
	const component2 = {
		...component,
		
		// 取代原本的 el
		el: document.querySelector("#root2"),
		
		// 取代原本的 processData
		processData () {
			this.text = `[Component2] ${this.text}`;
		},
	};
	console.log(`component2 ==>`, component2);
	component2.init();
}



/* new 運算子的 this 指向 */
// 構造函式 (Constructor Function)
function testConstructorFunc1()
{
	console.clear();
	
	// 一張藍圖、設計稿
	function Person(name) {
		this.name = name;
		console.log(`Person this ==>`, this);
		// debugger;
		
		/*
			1. 若沒有回傳值，則會回傳此物件本身。
			2. 回傳非物件，仍會回傳此物件本身。
			3. 回傳一個物件，會替代物件本身的回傳。
		*/
		// return `我是 ${this.name}`;
		// return {say: `我是 ${this.name}`};
	}
	
	// 透過 new 才能建立出圖藍的實體物件，此實體物件的 this 即指向物件本身。
	new Person("什麼都沒有");
	console.log(``);
	
	const person1 = new Person('小明');
	console.log(`person1 ==>`, person1);
	
	console.log(``);
	
	const person2 = new Person('杰倫');
	console.log(`person2 ==>`, person2);
}



/* 原型鏈 */

// 哪裡會看到原型？
// 任何一個物件都會看到
function testPrototype1()
{
	console.clear();
	
	const buttonList = document.querySelectorAll(".test-prototype button");
	console.dir(buttonList);	// 原型為 NodeList
	console.log(NodeList.prototype);
	console.log(``);
	
	const arr = [1, 2, 3, 4, 5];
	console.dir(arr);	// 原型為 Array
	console.log(Array.prototype);
}


// 自訂義原型 1
function customizePrototype1()
{
	console.clear();
	
	const arr = [1, 2, 3, 4, 5];
	
	// 可以在 prototype 加入新的方法
	console.log(`在 Array 的 prototype 裡加入 getLast 方法 ...`);
	Array.prototype.getLast = function () {
		console.log(`getLast this ==>`, this);
		return this[this.length - 1];	// 回傳最後一個元素
	};
	
	console.log(`Array.prototype ==>`, Array.prototype);
	console.log(`Array.prototype.getLast ==>`, Array.prototype.getLast);
	console.log(``);
	
	console.log(`執行 getLast() ...`);
	console.log(`arr.getLast() ==>`, arr.getLast());
}

// 自訂義原型 2
function customizePrototype2()
{
	console.clear();
	
	String.prototype.轉數值 = function () {
		console.log(`轉數值 this ==>`, this);
		return Number.parseInt(this);
	};
	console.log(`String.prototype ==>`, String.prototype);
	console.log(``);
	
	const test = "100元";
	console.log(`${test}.轉數值() ...`);
	console.log(`結果 ==>`, test.轉數值());
}



/* 函式建構子 */

/*
	狗：使用藍圖來創造它
	
	藍圖 (函式建構子)：
	1. 定義固有屬性：毛色、名字 -> 會佔用記憶體
	2. 定義方法 (共用)：走、叫 -> 會共用記憶體方法
*/
function testDog()
{
	console.clear();
	
	// 函式建構子 (藍圖)
	function Dog(color, name)
	{
		this.color = color;
		this.name = name;
		
		// 不會存在於 prototype 中，會隨著 new 被建立一份出來
		this.直接定義在裡面的方法 = function () {
			console.log("我是直接定義在裡面的方法");
		};
	}
	
	Dog.prototype.walk = function () {
		console.log(`${this.name}走路`);
	};
	
	console.dir(Dog);	// 藍圖
	
	// prototype 裡不會有直接定義在 Dog 裡的方法
	console.log(`Dog.prototype ==>`, Dog.prototype);
	console.log(``);
	
	console.log(`====== 小白 ======`);
	const 小白 = new Dog('白色', '小白');
	console.dir(小白);	// 實體
	
	console.log(`小白.直接定義在裡面的方法 ==>`, 小白.直接定義在裡面的方法);
	console.log(`呼叫 ==>`);
	小白.直接定義在裡面的方法()
	console.log(``);
	
	console.log(`小白.walk ==>`, 小白.walk);
	console.log(`呼叫 ==>`);
	小白.walk()
	console.log(``);
	
	
	console.log(`====== 小黃 ======`);
	const 小黃 = new Dog('黃色', '小黃');
	console.log(小黃);	// 實體
	小黃.walk();
	console.log(``);
	
	/*
		藉由以下測試，可以得知：
		1. 直接定義在建構函式裡的方法，會隨著 new 被建立出來，不同的實體都會有自己的一份。
		2. 定義在 prototype 裡的方法，只會有一份，不同的實體會共用同一份。
	*/
	console.log(`小白 和 小黃 的「直接定義在裡面的方法」是相等的嗎 ?`, 小白.直接定義在裡面的方法 == 小黃.直接定義在裡面的方法);
	console.log(`小白 和 小黃 定義在 prototype 的「walk」是相等的嗎 ?`, 小白.walk === 小黃.walk);
}


// 函式建構子的繼承
function testFunctionExtends()
{
	console.clear();
	
	// 頂層
	function 人力資源 (companyName) {
		this.company = companyName || '社畜人力資源有限公司';
	}
	人力資源.prototype.getSalary = function () {
		console.log(`${this.name} 領薪水 ${this.salary} 元囉～`);
	}
	console.dir(人力資源);
	
	// 主管、社畜層
	function 主管 (name, salary = 2000) {
		人力資源.call(this, '社畜人力資源有限公司');
		this.name = name;
		this.salary = salary;
	}
	主管.prototype = Object.create(人力資源.prototype);
	主管.prototype.constructor = 主管;
	主管.prototype.manage = function () {
		console.log(`${this.name} 開始管理團隊`);
	};
	console.dir(主管);
	
	function 社畜 (name, salary = 1000) {
		人力資源.call(this, '社畜人力資源有限公司');
		this.name = name;
		this.salary = salary;
	}
	社畜.prototype = Object.create(人力資源.prototype);
	社畜.prototype.constructor = 社畜;
	社畜.prototype.work = function () {
		console.log(`${this.name} 獻出他的肝`);
	};
	console.dir(社畜);
	
	console.log(``);
	
	const 老闆 = new 主管 ("老闆", 30000);
	console.log(`老闆 ==>`, 老闆);
	老闆.manage();
	老闆.getSalary();
	console.log(``);
	
	const 主管1 = new 主管 ("主管1");
	console.log(`主管1 ==>`, 主管1);
	主管1.manage();
	主管1.getSalary();
	console.log(``);
	
	const 社畜1 = new 社畜 ("社畜1");
	console.log(`社畜1 ==>`, 社畜1);
	社畜1.work();
	社畜1.getSalary();
}



/* Class */

// 改寫狗範例為 Class
function testDogClass()
{
	console.clear();
	
	class Dog
	{
		constructor(color, name) {
			console.log(`constructor #1`, this);
			this.color = color;
			console.log(`constructor #2`, this);
			this.name = name;
			console.log(`constructor #3`, this);
		}
		
		// 會放在 class 裡，隨著 new 被建立出來，不同的實體都會有自己的一份。
		直接定義在裡面的方法1 = function () {
			console.log("我是直接定義在裡面的方法 1");
		};
		
		// 會放在 prototype 裡，只會有一份，不同的實體會共用同一份。
		直接定義在裡面的方法2 () {
			console.log("我是直接定義在裡面的方法 2");
		};
	}
	Dog.prototype.walk = function () {
		console.log(`${this.name}走路`);
	};
	Dog.prototype.bark = function () {
		console.log(`${this.name}吠叫`);
	};
	console.dir(Dog);
	console.log(Dog.prototype);
	console.log(``);
	
	const 小白 = new Dog('白色', '小白');
	console.log(``);
	console.dir(小白);
	小白.直接定義在裡面的方法1();
	小白.直接定義在裡面的方法2();
	console.log(``);
	
	const 小黃 = new Dog('黃色', '小黃');
	console.log(``);
	console.log(小黃);
}


// Class 的繼承
function testClassExtends()
{
	console.clear();
	
	class Life
	{
		constructor (type) {
			this.type = type || "人";
		}
		
		getType () {
			return this.type;
		}
	}
	console.log(`Life.prototype ==>`, Life.prototype);
	
	class Animal extends Life
	{
		constructor(color, name, type) {
			console.log("Animal constructor ==>", color, name, type);
			super(type);
			this.color = color;
			this.name = name;
			// this.type = type || "人";
		}
		
		walk () {
			console.log(`${this.name}會走`);
		}
		
		showSuperpower () {
			console.log(`${this.name}的超能力：${this.superpower || "無"}`);
		}
	}
	console.log(`Animal.prototype ==>`, Animal.prototype);
	
	class Dog extends Animal
	{
		constructor (color, name) {
			super(color, name, "狗");
		}
		
		bark () {
			console.log(`${this.name}汪汪叫`);
		}
		
		setSuperpower (superpower) {
			console.log(`設定超能力中...`);
			this.superpower = superpower;
		}
	}
	console.log(`Dog.prototype ==>`, Dog.prototype);
	
	class Cat extends Animal
	{
		constructor (color, name) {
			super(color, name, "貓");
		}
		
		meow () {
			console.log(`${this.name}喵喵叫`);
		}
		
		setSuperpower (superpower) {
			console.log(`設定超能力中...`);
			this.superpower = superpower;
		}
	}
	console.log(`Cat.prototype ==>`, Cat.prototype);
	
	class Human extends Animal
	{
		/* 若沒有呼叫父類別的建構子，或者是在呼叫父建構子之前就存取 this，會報錯。 */
		// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
		/* constructor (color, name) {
			// super(color, name);
			this.color = color;
			this.name = name;
			// super(color, name);
		} */
		
		// 這樣是可以執行的，只是就不會設定 color、name，它們會變成 undefined。
		/* constructor () {
			super();
		} */
		
		/* 也可以不定義自己的 constructor，那麼就會直接使用父類別的建構子。 */
		
		speak () {
			console.log(`${this.name}會說話`);
		}
	}
	console.log(`Human.prototype ==>`, Human.prototype);
	
	console.log(``);
	
	const 小白 = new Dog('白色', '小白');
	console.dir(小白);
	console.log(`小白是 ${小白.getType()}`);
	小白.walk();
	小白.bark();
	小白.showSuperpower();
	小白.setSuperpower("雷霆吼");
	小白.showSuperpower();
	console.log(``);
	
	const 小黃 = new Dog('黃色', '小黃');
	console.dir(小黃);
	console.log(`小黃是 ${小黃.getType()}`);
	小黃.walk();
	小黃.bark();
	小黃.setSuperpower("衝撞力");
	小黃.showSuperpower();
	console.log(``);
	
	const 小黑 = new Cat('黑色', '小黑');
	console.dir(小黑);
	console.log(`小黑是 ${小黑.getType()}`);
	小黑.walk();
	小黑.meow();
	小黑.setSuperpower("塞奶");
	小黑.showSuperpower();
	console.log(``);
	
	const 阿華 = new Human('黃色', '阿華');
	console.dir(阿華);
	console.log(`阿華是 ${阿華.getType()}`);
	阿華.walk();
	阿華.speak();
	阿華.showSuperpower();
	console.log(``);
}

