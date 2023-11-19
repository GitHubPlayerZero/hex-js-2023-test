function testBaseArray()
{
	console.log("********** testBaseArray() - Start **********");
	console.log("");

	console.log("====== 陣列宣告 ======");

	// ary
	let ary = []; // 空陣列
	console.log(`ary = ${ary}, length = ${ary.length}`);
	console.log(ary);

	// ary1
	let ary1 = ["Tom", "John", "Marry"];
	console.log(`ary1 = ${ary1}, length = ${ary1.length}`);
	console.log(ary1);

	// ary2
	let ary2 = [21, 18, 25];
	console.log(`ary2 = ${ary2}, length = ${ary2.length}`);
	console.log(ary2);

	// ary3
	let ary3 = ["Tom", 30, ["aa", "bb"]];
	console.log(`ary3 = ${ary3}, length = ${ary3.length}`);
	console.log(ary3);

	// ary4
	let ary4 = ["red", 30,
		["aa", "bb"],
		{
			"name": "Tom",
			"Year": 31
		}
	];
	console.log(`ary4 = ${ary4}, length = ${ary4.length}`);
	console.log(ary4);

	console.log("");
	console.log("====== 陣列讀寫 ======");

	console.log(`ary[1] = ${ary[1]}`);  // 雖然為空陣列, 但取不存在的值並不會有錯誤, 取出的值為 undefined
	console.log(`ary1[0] = ${ary1[0]}`);
	
	console.log("");

	console.log(`---- 寫入 ary1[5] ----`);
	ary1[5] = "Lin";  // 略過中間兩個 index 不會出錯
	console.log(`ary1 = ${ary1}, length = ${ary1.length}`);
	console.log(ary1);

	console.log(`ary1[3] = ${ary1[3]}`);  // 取出被略過的值不會有錯誤, 取出的值為 undefined

	console.log("");
	console.log("********** testBaseArray() - End **********");
}


function testAddRemoveData()
{
	console.log("********** testAddRemoveData() - Start **********");
	console.log("");
	
	let ary = ["Tom", "John", "Marry"];
	console.log(`ary = ${ary}, length = ${ary.length}`);
	console.log(ary);
	
	console.log("");
	console.log("====== pop (移除最後一個) ======");
	console.log(`pop() ==> ${ary.pop()}`);
	console.log(ary);
	
	console.log("");
	console.log("====== shift (移除第一個) ======");
	console.log(`shift() ==> ${ary.shift()}`);
	console.log(ary);
	
	console.log("");
	console.log("====== push (加到最後一個) ======");
	console.log(`push 小月 ==> length = ${ary.push("小月")}`);
	console.log(ary);
	
	console.log("");
	console.log("====== unshift (加到第一個) ======");
	console.log(`unshift 大雄 ==> length = ${ary.unshift("大雄")}`);
	console.log(ary);
	
	console.log("");
	console.log("====== 加入多個元素 ======");
	console.log(`push 小美, 小王 ==> length = ${ary.push("小美", "小王")}`);
	console.log(ary);
	
	console.log("");
	console.log("====== 把陣列清空 ======");
	while (ary.length > 0) {
		console.log(`Remove ==> ${ary.shift()}`);
	}
	console.log(`ary = ${ary}, length = ${ary.length}`);
	console.log(ary);
	
	console.log("");
	console.log("********** testAddRemoveData() - End **********");
}


function testSplice()
{
	console.log("********** testSplice() - Start **********");
	console.log("");
	
	let ary = ["Tom", "John", "Mary", "Bill", "Jack", "Lucy"];
	console.log(`ary = ${ary}, length = ${ary.length}`);
	console.log(ary);
	
	console.log("");
	console.log("====== 由 index 0 開始，刪除 1 個 ======");
	console.log(`Remove ==> ${ary.splice(0, 1)}`);
	console.log(ary);
	
	console.log("");
	console.log("====== 由 index 1 開始，刪除 2 個 ======");
	console.log(`Remove ==> ${ary.splice(1, 2)}`);
	console.log(ary);
	
	console.log("");
	console.log("====== 由 index 1 開始，刪除 0 個，加入 3 個 ======");
	console.log(`Remove ==> ${ary.splice(1, 0, "小美", "小天", "阿杰")}`);
	console.log(ary);
	
	console.log("");
	console.log("====== 由 index 2 開始，刪除 2 個，加入 1 個 ======");
	console.log(`Remove ==> ${ary.splice(2, 2, "阿月")}`);
	console.log(ary);
	
	console.log("");
	console.log("====== 由 index -1 開始，刪除 2 個 ======");
	console.log(`Remove ==> ${ary.splice(-1, 2)}`);	// 實際上最後一個開始只會刪除最後一個
	console.log(ary);
	
	console.log("");
	console.log("====== 由 index -2 開始，刪除 1 個 ======");
	console.log(`Remove ==> ${ary.splice(-2, 1)}`);
	console.log(ary);
	
	console.log("");
	console.log("====== 由 index -1 開始，刪除 0 個，加入 2 個 ======");
	console.log(`Remove ==> ${ary.splice(-1, 0, "大王", "安室")}`);
	console.log(ary);
	
	console.log("");
	console.log("====== 由 index -2 開始，刪除 2 個 ======");
	console.log(`Remove ==> ${ary.splice(-2, 2)}`);
	console.log(ary);
	
	console.log("");
	console.log("====== 由 index 1 開始，刪除全部 ======");
	console.log(`Remove ==> ${ary.splice(1)}`);
	console.log(ary);
	
	console.log("");
	console.log("********** testSplice() - End **********");
}


function testForEach()
{
	console.log("********** testForEach() - Start **********");
	console.log("");
	
	let ary = [23, 54, 17, 36, 1, 44];
	console.log(ary);
	
	console.log("");
	console.log(`====== 每個元素 + 2 ======`);
	ary.forEach(function (item, index, array) {
		console.log(`item = ${item}, index = ${index}, array = ${array}`);
		ary[index] = item + 2;
	});
	console.log(ary);

	console.log("");
	console.log(`====== 累加 ======`);
	let total = 0;
	ary.forEach(function (item) {
		total += item;
	});
	console.log(`total = ${total}`);
	
	console.log("");
	console.log("********** testForEach() - End **********");
}


function testFilter()
{
	console.log("********** testFilter() - Start **********");
	console.log("");
	
	console.log("====== 選出大於 23 的元素 ======");
	let ary1 = [23, 54, 17, 36, 1, 44];
	console.log(ary1);
	
	let newAry1 = ary1.filter(function (item, index, array) {
		console.log(`item = ${item}, index = ${index}, array = ${array}`);
		return item > 23;
	});
	
	console.log(`Result ==> ${newAry1}`);
	console.log(newAry1);	// (3) [54, 36, 44]
	console.log(`原陣列 = ${ary1}`);
	
	
	console.log("");
	console.log("====== 過濾 JSON 無效的項目 ======");
	let ary2 = [
		{ id: 15 },
		{ id: -1 },
		{ id: 0 },
		{ id: 3 },
		{ id: 12.2 },
		{},
		{ id: null },
		{ id: Infinity },
		{ id: NaN },
		{ id: "undefined" },
		{ id: new Number("20") }
	];
	console.log(ary2);
	
	let newAry2 = ary2.filter(function (item)
	{
		let id = item.id;
		console.log(id);
		
		if ((typeof id === 'number' || id instanceof Number) && !Number.isNaN(id) && id !== Infinity) {
			return true;
		}
		
		return false;
	});
	console.log("Result ==>");
	console.log(newAry2);
	
	
	console.log("");
	console.log("====== 過濾重複項目 ======");
	let ary3 = ['Bill', 'Alice', 'Cherry', 'Eden', 'Alice', 'Frank', 'Gorge', 'Eden'];
	console.log(ary3);
	
	let newAry3 = ary3.filter(function (item, index, array) {
		console.log(`item = ${item}, index = ${index}`);
		console.log(`    indexOf(${item}) = ${array.indexOf(item)}`);
		return array.indexOf(item) === index;
	});
	
	console.log(`Result ==> ${newAry3}`);
	console.log(newAry3);	// (6) ['Bill', 'Alice', 'Cherry', 'Eden', 'Frank', 'Gorge']
	
	
	console.log("");
	console.log("********** testFilter() - End **********");
}


function testMap()
{
	console.log("********** testMap() - Start **********");
	console.log("");
	
	console.log("====== 所有元素都 double ======");
	const ary = [1, 2, 4, 9, 16];
	console.log(ary);
	
	const doubleAry = ary.map(function (item, index, array) {
		console.log(`item = ${item}, index = ${index}, array = ${array}`);
		return item ** 2;
	});
	console.log(`Result ==>`);
	console.log(doubleAry);
	console.log(`原陣列 = ${ary}`);
	
	
	console.log("");
	console.log("====== 開根號 ======");
	console.log(doubleAry);
	
	// const sqrtAry = doubleAry.map(Math.sqrt);
	const sqrtAry = Array.prototype.map.call(doubleAry, Math.sqrt);	// 另一種寫法
	console.log(`Result ==>`);
	console.log(sqrtAry);
	
	
	console.log("");
	console.log("====== 將字串轉換為 byte 陣列 ======");
	const str = "Hello World! 世界你好！";
	console.log(`str = ${str}`);
	
	// 字串不是陣列，若要使用 map 需使用此種寫法
	const charCodeAry = Array.prototype.map.call(str, function (x) {
		let charCode = x.charCodeAt();
		console.log(`char = ${x} ==> charCode = ${charCode}, codePointAt = ${x.codePointAt()}`);
		return charCode;
	});
	console.log(`Result ==>`);
	console.log(charCodeAry);
	
	
	console.log("");
	console.log("====== 取得所有 button 的 value ======");
	const btnElmts = document.querySelectorAll("input[type=button]");
	console.log(btnElmts);
	
	// const btnValues = btnElmts.map(function (item) {
	// 	return item.value;
	// });
	
	// btnElmts 的 prototype 是 NodeList，因此無法直接使用 map，要改用此寫法。
	const btnValues = Array.prototype.map.call(btnElmts, function (item) {
		return item.value;
	});
	console.log("Result ==>");
	console.log(btnValues);
	
	
	console.log("");
	console.log("====== 分別取出物件的不同屬性值 ======");
	const shoppingCart = [
		{ itemName: "Book", price: 220 },
		{ itemName: "Bag", price: 350 }
	];
	console.log(shoppingCart);
	const itemNames = shoppingCart.map(item => item.itemName);
	const discounts = shoppingCart.map(item => item.price * 0.5);
	console.log(`所有項目 = ${itemNames}`);
	console.log(`打五折後 = ${discounts}`);
	
	
	console.log("");
	console.log("====== 將多個陣列組成物件 ======");
	const items = ["book", "cap", "bag"];
	const prices = [125, 76, 390];
	console.log(`items = ${items}`);
	console.log(`prices = ${prices}`);
	
	const products = items.map(function (elmt, index) {
		return {
			itemName: elmt,
			price: prices[index]
		};
	});
	console.log("Result ==>");
	console.log(products);
	
	
	console.log("");
	console.log("********** testMap() - End **********");
}


function testSort()
{
	console.log("********** testSort() - Start **********");
	console.log("");
	
	let ary1 = ['D', 'b', 'A', 'c', 'E', 'G', 'C', 'a', 'g', 'd', 'B', 'e', 'f', 'F'];
	let ary2 = [100, 23, 54, 5, 17, 36, 1, 44, 9];
	console.log(`ary1 = ${ary1}`);
	console.log(`ary2 = ${ary2}`);
	
	console.log("");
	console.log("====== 預設排序 ======");
	ary1.sort();
	ary2.sort();
	console.log(`ary1 = ${ary1}`);
	console.log(`ary2 = ${ary2}`);
	
	
	console.log("");
	console.log("====== 自定排序 - 數字由小至大排序 ======");
	ary2.sort(function (a, b) {
		return a - b;	// 小於 0，a 排 b 前面；大於 0，a 排 b 後面
	});
	console.log(`ary2 = ${ary2}`);
	
	
	console.log("");
	console.log("====== 自定排序 - 數字由大至小排序 ======");
	ary2.sort(function (a, b) {
		return b - a;
	});
	console.log(`ary2 = ${ary2}`);
	
	
	console.log("");
	console.log("====== 排序物件 ======");
	let obj = [
		{ name: "Edward", value: 21 },
		{ name: "ebson", value: 10 },
		{ name: "Sharpe", value: 37 },
		{ name: "And", value: 45 },
		{ name: "The", value: -12 },
		{ name: "Magnetic", value: 13 },
		{ name: "Zeros", value: 37 },
	];
	console.log(obj);
	
	console.log("");
	console.log("---- value 由小至大排序 ----");
	let obj2 = obj.filter(x => true);	// 複製一份出來，不要影响原陣列
	obj2.sort(function(a, b) {
		return a.value - b.value;
	});
	console.log(obj2);
	
	console.log("");
	console.log("---- name 由小至大排序 ----");
	let obj3 = obj.map(x => x);
	obj3.sort(function (a, b)
	{
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	})
	console.log(obj3);
	
	console.log("");
	console.log("---- name 由小至大排序 (忽略大小寫) ----");
	let obj4 = obj.filter(x => true);
	obj4.sort(function (a, b)
	{
		const nameA = a.name.toUpperCase();
		const nameB = b.name.toUpperCase();
		
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	})
	console.log(obj4);
	
	
	console.log("");
	console.log("********** testSort() - End **********");
}


function testReverse()
{
	console.log("********** testReverse() - Start **********");
	console.log("");
	
	let ary = ['A', 'B', 'C'];
	console.log(`${ary}`);
	
	let newAry1 = ary.reverse();
	console.log(`反轉 ==> ${newAry1}`);
	console.log(`原陣列 = ${ary}`);	// 原陣列也會改變
	
	console.log("");
	console.log("********** testReverse() - End **********");
}


function testConcat()
{
	console.log("********** testConcat() - Start **********");
	console.log("");
	
	const ary1 = ['a', 'b', 'c'];
	const ary2 = ['d', 'e', 'f'];
	const ary3 = ['g', 'h', 'i'];
	console.log(`ary1 = ${ary1}`);
	console.log(`ary2 = ${ary2}`);
	console.log(`ary3 = ${ary3}`);
	
	console.log("");
	console.log("====== 合併多個陣列 ======");
	console.log(`合併 ary1, ary2 ==> ${ary1.concat(ary2)}`);
	console.log(`合併 ary1, ary2, ary3 ==> ${ary1.concat(ary2, ary3)}`);
	
	console.log("");
	console.log("====== 合併非陣列 ======");
	console.log(`ary1.concat(10, 'aa') ==> ${ary1.concat(10, 'aa')}`);
	
	console.log("");
	console.log("====== 合併陣列及非陣列 ======");
	console.log(`ary1.concat(10, 'aa', ary3) ==> ${ary1.concat(10, 'aa', ary3)}`);
	
	
	console.log("");
	console.log("====== 合併巢狀陣列 (淺拷貝) ======");
	const ary4 = [[1]];
	const ary5 = [2, [3]];
	console.log(`ary4 ==>`);
	console.log(ary4);
	console.log(`ary5 ==>`);
	console.log(ary5);
	
	let result = ary4.concat(ary5);
	console.log(`合併結果 ==>`);
	console.log(result);
	
	console.log("");
	console.log("---- 驗證淺拷貝 ----");
	console.log(`改變 ary4 第一個元素 (陣列物件加入 'a') ==>`);
	ary4[0].push('a');
	console.log(ary4);
	console.log(`合併結果自動改變 ==>`);
	console.log(result);
	
	
	console.log("");
	console.log("********** testConcat() - End **********");
}


function testReduce()
{
	console.log("********** testReduce() - Start **********");
	console.log("");
	
	let ary1 = [36, 5, 100, -1];
	console.log(`ary1 = ${ary1}`);
	
	console.log("");
	console.log("====== 累加 (沒給入 initialValue) ======");
	let result = ary1.reduce(function(accu, item, index, array) {
		console.log(`accu = ${accu}, item = ${item}, index = ${index}, array = ${array}`);
		return accu + item;
	});
	console.log(`結果 ==> ${result}`);
	
	
	console.log("");
	console.log("====== 字串累加 (給入 initialValue = '') ======");
	result = ary1.reduce(function(accu, item, index, array) {
		console.log(`accu = ${accu}, item = ${item}, index = ${index}, array = ${array}`);
		return accu + item;
	}, '');
	console.log(`結果 ==> ${result}`);
	
	
	console.log("");
	console.log("====== 取最大值 ======");
	result = ary1.reduce(function(accu, item, index) {
		console.log(`accu = ${accu}, item = ${item}, index = ${index}`);
		return Math.max(accu, item);
	});
	// result = ary1.reduce((accu, item) => Math.max(accu, item));	// 箭頭函式寫法
	console.log(`結果 ==> ${result}`);
	
	
	console.log("");
	console.log("====== 攤平多維陣列 ======");
	const ary2 = [
		['a', 'b'],
		[1, 2, 3],
		['C', 'D']
	];
	console.log(`ary2 ==>`);
	console.log(ary2);
	
	/* result = ary2.reduce(function (accu, item) {
		console.log(`accu = ${accu}, item = ${item}`);
		return accu.concat(item);
	}); */
	// 另一種寫法：箭頭函式、給入初始值
	result = ary2.reduce((accu, item) => accu.concat(item), []);
	console.log(`結果 ==> ${result}`);
	
	
	// TODO
	
	
	
	
	console.log("");
	console.log("********** testReduce() - End **********");
}
