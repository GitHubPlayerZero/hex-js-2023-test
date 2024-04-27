const getAryData1 = () => [5, 12, 8, 130, 44];
const getAryData2 = () => ["Tom", "John", "Mary", "Bill", "Jack", "Lucy"];

const getObjAryData1 = () => [
	{ name: "小美", age: 20, sex: "female" },
	{ name: "羅賓", age: 25, sex: "male" },
	{ name: "宜靜", age: 18, sex: "female" },
	{ name: "杰倫", age: 30, sex: "male" }
];


/* 基本陣列宣告與讀寫 */
function testBaseArray()
{
	console.clear();
	
	console.log("********** testBaseArray() - Start **********");
	console.log("");

	console.log("========= 陣列宣告 =========");

	// ary
	let ary = []; // 空陣列
	console.log(`ary ==>`, ary);
	console.log(`length = ${ary.length}`);
	
	console.log(``);

	// ary1
	let ary1 = ["Tom", "John", "Mary"];
	console.log(`ary1 ==>`, ary1);
	console.log(`length = ${ary1.length}`);
	
	console.log(``);
	
	// ary2
	let ary2 = getAryData1();
	console.log(`ary2 ==>`, ary2);
	console.log(`length = ${ary2.length}`);

	console.log(``);
	
	// ary3
	let ary3 = ["Tom", 30, ["aa", "bb"]];
	console.log(`ary3 ==>`, ary3);
	console.log(`length = ${ary3.length}`);
	
	console.log(``);
	
	// ary4
	let ary4 = [
		"red", 30,
		["aa", "bb"],
		{
			"name": "Tom",
			"Year": 31
		}
	];
	console.log(`ary4 ==>`, ary4);
	console.log(`length = ${ary4.length}`);
	
	console.log(``);

	console.log("========= 陣列讀寫 =========");

	console.log(`ary[1] = ${ary[1]}`);  // 雖然為空陣列, 但取不存在的值並不會有錯誤, 取出的值為 undefined
	console.log(`ary1[0] = ${ary1[0]}`);
	
	console.log("");

	console.log(`---- 寫入 ary1[5] ----`);
	ary1[5] = "Lin";  // 略過中間兩個 index 不會出錯
	console.log(`ary1 ==>`, ary1);
	console.log(`length = ${ary1.length}`);
	
	// 取出被略過的值不會有錯誤, 取出的值為 undefined
	console.log(`ary1[3] = ${ary1[3]}`);
	console.log(`ary1[4] = ${ary1[4]}`);
	
	console.log(`ary1[5] = ${ary1[5]}`);

	console.log("");
	console.log("********** testBaseArray() - End **********");
}


/* 新增、刪除元素 (第一個或最後一個) */
function testAddRemoveData()
{
	console.clear();
	
	console.log("********** testAddRemoveData() - Start **********");
	console.log("");
	
	let ary = ["Tom", "John", "Marry"];
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
	// 從頭開始循序移除元素
	while (ary.length > 0) {
		console.log(`Remove ==> ${ary.shift()}`);
	}
	console.log(ary);
	
	console.log("");
	console.log("********** testAddRemoveData() - End **********");
}


/* 新增、刪除元素 (指定位置 splice) */
function testSplice()
{
	console.clear();
	
	console.log("********** testSplice() - Start **********");
	console.log("");
	
	let ary = getAryData2();
	console.log(ary);
	
	console.log("");
	
	console.log("====== 由 index 0 開始，刪除 1 個 ======");
	console.log(`Remove ==>`, ary.splice(0, 1));
	console.log(ary);
	
	console.log("");
	
	console.log("====== 由 index 1 開始，刪除 2 個 ======");
	console.log(`Remove ==>`, ary.splice(1, 2));
	console.log(ary);
	
	console.log("");
	
	console.log("====== 由 index 1 開始，刪除 0 個，加入 3 個 ======");
	// 會加在指定的 index 元素之前
	console.log(`Remove ==>`, ary.splice(1, 0, "小美", "小天", "阿杰"));
	console.log(ary);
	
	console.log("");
	
	console.log("====== 由 index 2 開始，刪除 2 個，加入 1 個 ======");
	console.log(`Remove ==>`, ary.splice(2, 2, "阿月"));
	console.log(ary);
	
	console.log("");
	
	console.log("====== 由 index -1 開始，刪除 2 個 ======");
	// 實際上最後一個開始只會刪除最後一個
	console.log(`Remove ==>`, ary.splice(-1, 2));
	console.log(ary);
	
	console.log("");
	
	console.log("====== 由 index -2 開始，刪除 1 個 ======");
	console.log(`Remove ==>`, ary.splice(-2, 1));
	console.log(ary);
	
	console.log("");
	
	console.log("====== 由 index -1 開始，刪除 0 個，加入 2 個 ======");
	console.log(`Remove ==>`, ary.splice(-1, 0, "大王", "安室"));
	console.log(ary);
	
	console.log("");
	
	console.log("====== 由 index -2 開始，刪除 2 個 ======");
	console.log(`Remove ==>`, ary.splice(-2, 2));
	console.log(ary);
	
	console.log("");
	
	console.log("====== 由 index 1 開始，刪除全部 ======");
	console.log(`Remove ==>`, ary.splice(1));
	console.log(ary);
	
	console.log("");
	console.log("********** testSplice() - End **********");
}


/* forEach */
function testForEach()
{
	console.clear();
	
	console.log("********** testForEach() - Start **********");
	console.log("");
	
	console.log(`====== 純值陣列 ======`);
	
	let ary = getAryData1();
	console.log(ary);
	
	console.log("");
	console.log(`---- 每個元素 + 2 ----`);
	ary.forEach(function (item, index, array) {
		console.log(`item = ${item}, index = ${index}, array = ${array}`);
		
		// 純值為傳值，直接對元素處理並不會影响到陣列內容，需要直接對陣列做處理才能改變陣列內容
		// item += 2;
		array[index] = item + 2;
	});
	console.log(ary);

	console.log("");
	console.log(`---- 累加 ----`);
	let total = 0;
	ary.forEach(function (item) {
		total += item;
	});
	console.log(`total = ${total}`);
	
	console.log(``);
	
	console.log(`====== 物件陣列 ======`);
	
	const ary2 = getObjAryData1();
	console.log("ary2 ==>", JSON.stringify(ary2));
	console.log(``);
	
	// 物件為傳參，直接對元素屬性處理也會改變陣列裡的物件元素
	console.log(`---- 每個 age + 10 ----`);
	ary2.forEach((item, index) => {
		console.log(`${index}:`, item);
		item.age += 10;
	});
	console.log(ary2);
	
	console.log("");
	console.log("********** testForEach() - End **********");
}


/* includes */
function testIncludes()
{
	console.clear();
	
	console.log("********** testIncludes() - Start **********");
	console.log("");
	
	console.log(`====== 純值陣列 ======`);
	const ary1 = getAryData1();
	ary1[ary1.length] = undefined;
	ary1[ary1.length] = NaN;
	ary1[ary1.length] = null;
	console.log(ary1);
	
	console.log(``);
	
	console.log(`ary1.includes(12) ==>`, ary1.includes(12));	// true
	console.log(`ary1.includes(44) ==>`, ary1.includes(44));	// true
	console.log(`ary1.includes(29) ==>`, ary1.includes(29));	// false
	console.log(`ary1.includes(undefined) ==>`, ary1.includes(undefined));	// true
	console.log(`ary1.includes(NaN) ==>`, ary1.includes(NaN));	// true
	console.log(`ary1.includes(null) ==>`, ary1.includes(null));	// true
	
	console.log(``);
	
	// 由 fromIndex 開始查找
	console.log(`---- 給入 fromIndex ----`);
	console.log(`ary1.includes(8) ==>`, ary1.includes(8));	// true
	console.log(`ary1.includes(8, 1) ==>`, ary1.includes(8, 1));	// true
	console.log(`ary1.includes(8, 2) ==>`, ary1.includes(8, 2));	// true
	console.log(`ary1.includes(8, 3) ==>`, ary1.includes(8, 3));	// false
	console.log(`ary1.includes(null, 7) ==>`, ary1.includes(null, 7));	// true
	console.log(`ary1.includes(null, 8) ==>`, ary1.includes(null, 8));	// false
	console.log(`ary1.includes(null, 100) ==>`, ary1.includes(null, 100));	// false
	
	console.log(``);
	
	// 負數的 fromIndex 會由最後開始往前推，最後一個元素的 index 由 -1 開始
	console.log(`---- 負數的 fromIndex ----`);
	console.log(`ary1.includes(null, -1) ==>`, ary1.includes(null, -1));	// true
	console.log(`ary1.includes(NaN, -2) ==>`, ary1.includes(NaN, -2));	// true
	console.log(`ary1.includes(8, -1) ==>`, ary1.includes(8, -1));	// false
	console.log(`ary1.includes(8, -5) ==>`, ary1.includes(8, -5));	// true (8 由 index -5 開始)
	console.log(`ary1.includes(8, -6) ==>`, ary1.includes(8, -6));	// true
	console.log(`ary1.includes(8, -7) ==>`, ary1.includes(8, -7));	// true
	console.log(`ary1.includes(8, -100) ==>`, ary1.includes(8, -100));	// true
	
	console.log(``);
	
	console.log(`====== 物件陣列 ======`);
	
	const ary2 = getObjAryData1();
	console.log(ary2);
	
	console.log(``);
	
	console.log(`---- 與 ary2[1] 比較 ----`);
	console.log(`ary2[1] ==>`, ary2[1]);
	
	console.log(``);
	
	console.log(`---- 建立一個相同內容的物件 ----`);
	let comparedObj = JSON.parse( JSON.stringify( ary2[1] ) );
	console.log(`comparedObj ==>`, comparedObj);
	
	// 物件為傳參，即使內容一樣仍不會被視為相同的物件
	console.log(`comparedObj === ary2[1] ==>`, comparedObj === ary2[1]);	// false
	console.log(`ary2.includes(comparedObj) ==>`, ary2.includes(comparedObj));	// false
	
	console.log(``);
	
	console.log(`---- 直接將 ary2[1] 賦予 comparedObj ----`);
	comparedObj = ary2[1];
	console.log(`comparedObj ==>`, comparedObj);
	console.log(`comparedObj === ary2[1] ==>`, comparedObj === ary2[1]);	// true
	console.log(`ary2.includes(comparedObj) ==>`, ary2.includes(comparedObj));	// true
	
	console.log("");
	console.log("********** testIncludes() - End **********");
}


/* indexOf、lastIndexOf */
function testIndexOf_LastIndexOf()
{
	console.clear();
	
	console.log("********** testIndexOf_LastIndexOf() - Start **********");
	console.log(``);
	
	console.log(`====== 純值陣列 ======`);
	const ary1 = getAryData1();
	ary1[ary1.length] = undefined;
	ary1[ary1.length] = NaN;
	ary1[ary1.length] = 12;
	ary1[ary1.length] = null;
	console.log(ary1);
	
	console.log(``);
	
	console.log(`-- indexOf() --`);
	console.log(`ary1.indexOf(5) ==>`, ary1.indexOf(5));	// 0
	console.log(`ary1.indexOf(12) ==>`, ary1.indexOf(12));	// 1
	console.log(`ary1.indexOf(130) ==>`, ary1.indexOf(130));	// 3
	console.log(`ary1.indexOf(99) ==>`, ary1.indexOf(99));	// -1
	console.log(`ary1.indexOf(undefined) ==>`, ary1.indexOf(undefined));	// 5
	console.log(`ary1.indexOf(NaN) ==>`, ary1.indexOf(NaN));	// -1
	console.log(`ary1.indexOf(null) ==>`, ary1.indexOf(null));	// 8
	
	console.log(``);
	
	console.log(`-- lastIndexOf() --`);
	console.log(`ary1.lastIndexOf(5) ==>`, ary1.lastIndexOf(5));	// 0
	console.log(`ary1.lastIndexOf(12) ==>`, ary1.lastIndexOf(12));	// 7
	console.log(`ary1.lastIndexOf(99) ==>`, ary1.lastIndexOf(99));	// -1
	console.log(`ary1.lastIndexOf(undefined) ==>`, ary1.lastIndexOf(undefined));	// 5
	console.log(`ary1.lastIndexOf(NaN) ==>`, ary1.lastIndexOf(NaN));	// -1
	console.log(`ary1.lastIndexOf(null) ==>`, ary1.lastIndexOf(null));	// 8
	
	console.log(``);
	
	console.log(`---- 給入 fromIndex ----`);
	console.log(`-- indexOf() --`);
	console.log(`ary1.indexOf(44, 3) ==>`, ary1.indexOf(44, 3));	// 4
	console.log(`ary1.indexOf(44, 4) ==>`, ary1.indexOf(44, 4));	// 4
	console.log(`ary1.indexOf(44, 5) ==>`, ary1.indexOf(44, 5));	// -1
	
	console.log(`-- lastIndexOf() --`);
	console.log(`ary1.lastIndexOf(44, 3) ==>`, ary1.lastIndexOf(44, 3));	// -1
	console.log(`ary1.lastIndexOf(44, 4) ==>`, ary1.lastIndexOf(44, 4));	// 4
	console.log(`ary1.lastIndexOf(44, 5) ==>`, ary1.lastIndexOf(44, 5));	// 4
	
	console.log(``);
	
	console.log(`-- 臨界值測試，觀察 indexOf、lastIndexOf 結果 --`);
	console.log(`ary1.indexOf(5, 0) ==>`, ary1.indexOf(5, 0));	// 0
	console.log(`ary1.lastIndexOf(5, 0) ==>`, ary1.lastIndexOf(5, 0));	// 0
	console.log(`ary1.indexOf(130, 0) ==>`, ary1.indexOf(130, 0));	// 3
	console.log(`ary1.lastIndexOf(130, 0) ==>`, ary1.lastIndexOf(130, 0));	// -1
	console.log(`ary1.indexOf(130, 100) ==>`, ary1.indexOf(130, 100));	// -1
	console.log(`ary1.lastIndexOf(130, 100) ==>`, ary1.lastIndexOf(130, 100));	// 3
	
	console.log(``);
	
	console.log(`-- 對於重複的元素，觀察 indexOf、lastIndexOf 結果 --`);
	console.log(`ary1.indexOf(12, 0) ==>`, ary1.indexOf(12, 0));	// 7
	console.log(`ary1.indexOf(12, 4) ==>`, ary1.indexOf(12, 4));	// 7
	console.log(`ary1.lastIndexOf(12, 4) ==>`, ary1.lastIndexOf(12, 4));	// 1
	console.log(`ary1.lastIndexOf(12, 100) ==>`, ary1.lastIndexOf(12, 100));	// 1
	
	console.log(``);
	console.log("********** testIndexOf_LastIndexOf() - End **********");
}


/* find、findLast、findIndex、findLastIndex */
function testFind_Last_Index()
{
	console.clear();
	
	console.log("********** testFind_Last_Index() - Start **********");
	console.log("");
	
	let result1, result2;
	
	console.log(`====== 純值陣列 ======`);
	const ary1 = getAryData1();
	console.log(ary1);
	
	console.log(``);
	
	
	console.log(`---- 找大於 10 的項目 ----`);
	
	function findOverTen(item, index) {
		console.log(`${index}:`, item);
		return item > 10;
	}
	
	console.log(`-- find() --`);
	result1 = ary1.find(findOverTen);
	console.log(`result1 = ${result1}`);
	
	console.log(``);
	
	console.log(`-- findIndex() --`);
	console.log(`index ==>`, ary1.findIndex(findOverTen));
	
	console.log(``);
	
	console.log(`-- findLast() --`);
	result2 = ary1.findLast(findOverTen);
	console.log(`result2 = ${result2}`);
	
	console.log(``);
	
	console.log(`-- findLastIndex() --`);
	console.log(`index ==>`, ary1.findLastIndex(findOverTen));
	
	console.log(``);
	
	
	console.log(`---- 找小於 1 的項目 ----`);
	
	const findLessOne = (item, index) => {
		console.log(`${index}:`, item);
		return item < 1;
	};
	
	console.log(`-- find() --`);
	result1 = ary1.find(findLessOne);
	console.log(`result1 = ${result1}`);
	
	console.log(``);
	
	console.log(`-- findIndex() --`);
	console.log(`index ==>`, ary1.findIndex(findLessOne));
	
	console.log(``);
	
	console.log(`-- findLast() --`);
	result2 = ary1.findLast(findLessOne);
	console.log(`result2 = ${result2}`);
	
	console.log(``);
	
	console.log(`-- findLastIndex() --`);
	console.log(`index ==>`, ary1.findLastIndex(findLessOne));
	
	console.log(``);
	
	
	console.log(`====== 物件陣列 ======`);
	const ary2 = getObjAryData1();
	console.log(ary2);
	
	console.log(``);
	
	
	console.log(`---- 找宜靜 ----`);
	
	const findName = (item, index) => {
		console.log(`${index}:`, item);
		return item.name === "宜靜";
	};
	
	console.log(`-- find() --`);
	// result1 = ary2.find(item => item.name === "宜靜");
	result1 = ary2.find(findName);
	console.log(`result1 =`, result1);
	
	console.log(``);
	
	console.log(`-- findIndex() --`);
	console.log(`index ==>`, ary2.findIndex(findName));
	
	console.log(``);
	
	console.log(`-- findLast() --`);
	result2 = ary2.findLast(findName);
	console.log(`result2 =`, result2);
	
	console.log(``);
	
	console.log(`-- findLastIndex() --`);
	console.log(`index ==>`, ary2.findLastIndex(findName));
	
	console.log(``);
	
	
	console.log(`---- 找年紀大於 20 歲的人 ----`);
	
	// 使用解構賦值寫法
	const findYear = ({age}) => age > 20;
	
	console.log(`-- find() --`);
	result1 = ary2.find(findYear);
	console.log(`result1 =`, result1);
	
	console.log(``);
	
	console.log(`-- findIndex() --`);
	console.log(`index ==>`, ary2.findIndex(findYear));
	
	console.log(``);
	
	console.log(`-- findLast() --`);
	result2 = ary2.findLast(findYear);
	console.log(`result2 =`, result2);
	
	console.log(``);
	
	console.log(`-- findLastIndex() --`);
	console.log(`index ==>`, ary2.findLastIndex(findYear));
	
	console.log(``);
	
	
	console.log(`---- 找女性 ----`);
	// result1 = ary2.find(function (item, index) {
	// 	console.log(`${index}:`, item);
	// 	return item.sex === "female";
	// });
	
	// 解構賦值寫法
	// result1 = ary2.find(function ({sex}, index) {
	// 	console.log(`${index}:`, sex);
	// 	return sex === "female";
	// });
	
	// 解構賦值寫法 2
	// result1 = ary2.find(function ({sex, name}, index) {
	// 	console.log(`${index}:`, sex, name);
	// 	return sex === "female";
	// });
	
	// 解構賦值寫法 3 (參數順序不影响)
	// result1 = ary2.find(function ({name, sex}, index) {
	// 	console.log(`${index}:`, name, sex);
	// 	return sex === "female";
	// });
	
	// 解構賦值 + 箭頭函式
	const findFemale = ({name, sex}, index) => {
		console.log(`${index}:`, name, sex);
		return sex === "female";
	};
	
	console.log(`-- find() --`);
	result1 = ary2.find(findFemale);
	console.log(`result1 =`, result1);
	
	console.log(``);
	
	console.log(`-- findIndex() --`);
	console.log(`index ==>`, ary2.findIndex(findFemale));
	
	console.log(``);
	
	console.log(`-- findLast() --`);
	result2 = ary2.findLast(findFemale);
	console.log(`result2 =`, result2);
	
	console.log(``);
	
	console.log(`-- findLastIndex() --`);
	console.log(`index ==>`, ary2.findLastIndex(findName));
	
	console.log(``);
	
	
	// 物件為傳參，若修改結果物件的內容，原陣列也會跟著改變
	console.log(`====== 修改 result1, result2 屬性 (name) ======`);
	result1.name += " (result1)";
	result2.name += " (result2)";
	console.log(ary2);
	
	console.log(``);
	console.log("********** testFind_Last_Index() - End **********");
}


/* filter (篩選) */
function testFilter()
{
	console.clear();
	
	console.log("********** testFilter() - Start **********");
	console.log("");
	
	console.log("====== 選出大於 23 的元素 ======");
	let ary1 = [23, 54, 17, 36, 1, 44];
	console.log(ary1);
	console.log(``);
	
	let newAry1 = ary1.filter(function (item, index, array) {
		console.log(`item = ${item}, index = ${index}, array = ${array}`);
		return item > 23;
	});
	
	console.log(``);
	console.log(`Result ==>`, newAry1);	// (3) [54, 36, 44]
	
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
	console.log(``);
	
	let newAry2 = ary2.filter(function (item, index) {
		let id = item.id;
		const result = (typeof id === 'number' || id instanceof Number) && !Number.isNaN(id) && id !== Infinity;
		console.log(`${index}:`, id, `==> ${result}`);
		return result;
	});
	
	console.log(``);
	console.log("Result ==>", newAry2);
	
	console.log("");
	
	
	console.log("====== 過濾重複項目 ======");
	let ary3 = ['Bill', 'Alice', 'Cherry', 'Eden', 'Alice', 'Frank', 'Gorge', 'Eden'];
	console.log(ary3);
	console.log(``);
	
	let newAry3 = ary3.filter(function (item, index, array) {
		console.log(`${index}:`, item);
		console.log(`    indexOf(${item}) = ${array.indexOf(item)}`);
		return array.indexOf(item) === index;
	});
	console.log(``);
	console.log(`Result ==>`, newAry3);
	
	console.log("");
	console.log("********** testFilter() - End **********");
}


/* map */
function testMap()
{
	console.clear();
	
	console.log("********** testMap() - Start **********");
	console.log("");
	
	console.log("====== 所有元素都 double ======");
	const ary = [1, 2, 4, 9, 16];
	console.log(ary);
	
	const doubleAry = ary.map(function (item, index, array) {
		console.log(`${index}:`, item);
		return item ** 2;
	});
	console.log(`Result ==>`, doubleAry);
	
	console.log("");
	
	
	console.log("====== 開根號 ======");
	console.log(doubleAry);
	
	// const sqrtAry = doubleAry.map(Math.sqrt);
	const sqrtAry = Array.prototype.map.call(doubleAry, Math.sqrt);	// 另一種寫法
	console.log(`Result ==>`, sqrtAry);
	
	console.log("");
	
	
	console.log("====== 將字串轉換為 byte 陣列 ======");
	const str = "Hello World! 世界你好！";
	console.log(`str = ${str}`);
	
	// 字串不是陣列，若要使用 map 需使用此種寫法
	const charCodeAry = Array.prototype.map.call(str, function (item, index) {
		let charCode = item.charCodeAt();
		console.log(`${index}:`, item, `==> charCode = ${charCode}, codePointAt = ${item.codePointAt()}`);
		return charCode;
	});
	console.log(`Result ==>`, charCodeAry);
	
	console.log("");
	
	
	console.log("====== 取得所有 button 的 value ======");
	const elmtBtns = document.querySelectorAll("input[type=button]");
	console.log(elmtBtns);
	
	// const btnValues = elmtBtns.map(function (item) {
	// 	return item.value;
	// });
	
	// elmtBtns 的 prototype 是 NodeList，因此無法直接使用 map，要改用此寫法。
	const btnValues = Array.prototype.map.call(elmtBtns, function (item) {
		return item.value;
	});
	console.log("Result ==>", btnValues);
	
	console.log("");
	
	
	console.log("====== 分別取出物件的不同屬性值 ======");
	const shoppingCart = [
		{ itemName: "Book", price: 220 },
		{ itemName: "Bag", price: 350 }
	];
	console.log(shoppingCart);
	const itemNames = shoppingCart.map(item => item.itemName);
	const discounts = shoppingCart.map(item => item.price * 0.5);
	console.log(`所有項目 ==>`, itemNames);
	console.log(`打五折後 ==>`, discounts);
	
	console.log("");
	
	
	console.log("====== 將多個陣列組成物件 ======");
	const items = ["book", "cap", "bag"];
	const prices = [125, 76, 390];
	console.log(`items ==>`, items);
	console.log(`prices ==>`, prices);
	
	const products = items.map(function (elmt, index) {
		return {
			itemName: elmt,
			price: prices[index]
		};
	});
	console.log("Result ==>", products);
	
	console.log("");
	console.log("********** testMap() - End **********");
}


/* sort (排序) */
function testSort()
{
	console.clear();
	
	console.log("********** testSort() - Start **********");
	console.log("");
	
	let ary1 = ['D', 'b', 'A', 'c', 'E', 'G', 'C', 'a', 'g', 'd', 'B', 'e', 'f', 'F'];
	let ary2 = [100, 23, 54, 5, 17, 36, 1, 44, 9];
	console.log(`ary1 ==>`, ary1);
	console.log(`ary2 ==>`, ary2);
	
	console.log("");
	
	
	console.log("====== 預設排序 ======");
	// 陣列將根據各個元素轉為字串後的每一個字元之 Unicode 編碼位置值進行排序
	ary1.sort();
	ary2.sort();
	console.log(`ary1 ==>`, ary1);
	console.log(`ary2 ==>`, ary2);
	
	console.log("");
	
	
	console.log("====== 自定排序 - 數字由小至大排序 ======");
	ary2.sort(function (a, b) {
		return a - b;	// 小於 0，a 排 b 前面；大於 0，a 排 b 後面
	});
	console.log(`ary2 ==>`, ary2);
	
	console.log("");
	
	
	console.log("====== 自定排序 - 數字由大至小排序 ======");
	ary2.sort(function (a, b) {
		return b - a;
	});
	console.log(`ary2 ==>`, ary2);
	
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


/* reverse、toReversed (反轉) */
function testReverse()
{
	console.clear();
	
	console.log("********** testReverse() - Start **********");
	console.log("");
	
	console.log(`====== reverse() ======`);
	const ary1 = ['A', 'B', 'C'];
	console.log(`ary1 ==>`, ary1);
	
	console.log(`ary1.reverse() ==>`, ary1.reverse());
	console.log(`原陣列 ==>`, ary1);	// 原陣列也會改變
	
	console.log(``);
	
	console.log(`====== toReversed() ======`);
	const ary2 = ['A', 'B', 'C'];
	console.log(`ary2 ==>`, ary2);
	console.log(`ary2.toReversed() ==>`, ary2.toReversed());
	console.log(`原陣列 ==>`, ary2);	// 不會改變原陣列
	
	console.log(``);
	
	console.log(`====== 物件陣列 ======`);
	console.log(`---- reverse() ----`);
	const ary3 = getObjAryData1();
	console.log(`ary3 ==>`, JSON.stringify(ary3));
	console.log(`ary3.reverse() ==>`, ary3.reverse());
	console.log(`原陣列 ==>`, ary3);
	
	console.log(``);
	console.log(`---- toReversed() ----`);
	const ary4 = getObjAryData1();
	console.log(`ary4 ==>`, JSON.stringify(ary4));
	console.log(`ary4.reverse() ==>`, ary4.toReversed());
	console.log(`原陣列 ==>`, ary4);
	
	console.log("");
	console.log("********** testReverse() - End **********");
}


/* concat (合併陣列) */
function testConcat()
{
	console.clear();
	
	console.log("********** testConcat() - Start **********");
	console.log("");
	
	const ary1 = ['a', 'b', 'c'];
	const ary2 = ['d', 'e', 'f'];
	const ary3 = [1, 2, 3, 4];
	console.log(`ary1 ==>`, ary1);
	console.log(`ary2 ==>`, ary2);
	console.log(`ary3 ==>`, ary3);
	
	console.log("");
	
	console.log("====== 合併多個陣列 ======");
	console.log(`合併 ary1, ary2 ==>`, ary1.concat(ary2));
	console.log(`合併 ary1, ary2, ary3 ==>`, ary1.concat(ary2, ary3));
	
	console.log("");
	
	console.log("====== 合併非陣列 ======");
	console.log(`ary1.concat(10, 'aa') ==>`, ary1.concat(10, 'aa'));
	
	console.log("");
	
	console.log("====== 合併陣列及非陣列 ======");
	console.log(`ary1.concat(10, 'aa', ary3) ==>`, ary1.concat(10, 'aa', ary3));
	
	console.log("");
	
	
	console.log("====== 合併巢狀陣列 (淺拷貝) ======");
	const ary4 = [[1], 'test'];
	const ary5 = [2, ['aaa', 'bbb']];
	console.log(`ary4 ==>`, ary4);
	console.log(`ary5 ==>`, ary5);
	
	let result = ary4.concat(ary5);
	console.log(`合併結果 ==>`, result);
	
	console.log("");
	
	console.log("---- 驗證淺拷貝 ----");
	ary4[0].push('a');
	console.log(`改變 ary4 第一個元素 (陣列物件加入 'a') ==>`, ary4);
	
	// 因為為淺拷貝，因此第二層的物件為傳參
	console.log(`合併結果自動改變 ==>`, result);
	
	console.log("");
	console.log("********** testConcat() - End **********");
}


/* reduce */
function testReduce()
{
	console.clear();
	
	console.log("********** testReduce() - Start **********");
	console.log("");
	
	console.log("====== 累加 ======");
	
	let ary1 = [36, 5, 100, -1];
	console.log(`ary1 ==>`, ary1);
	
	console.log("");
	
	const sum = (accu, item, index) => {
		console.log(`${index}: accu = ${accu}, item = ${item}`);
		return accu + item;
	}
	
	console.log(`---- 沒給入 initialValue ----`);
	console.log(`結果 ==>`, ary1.reduce(sum));
	
	console.log("");
	
	console.log("---- 給入 initialValue = 1 ----");
	console.log(`結果 ==>`, ary1.reduce(sum, 1));
	
	console.log("");
	
	console.log("---- 給入 initialValue = '' (字串累加) ----");
	console.log(`結果 ==>`, ary1.reduce(sum, ''));
	
	console.log("");
	
	console.log("====== 物件累加 ======");
	const obj1 = [{ num: 1 }, { num: 2 }, { num: 3 }];
	console.log(`obj1 ==>`, obj1);
	
	console.log(`結果 ==>`, obj1.reduce(function (accu, item, index) {
		console.log(`${index}: accu ==>`, accu, `item ==>`, item);
		return accu + item.num;
	}, 0));
	
	console.log(``);
	
	console.log("====== 取最大值 ======");
	// ary1.reduce((accu, item) => Math.max(accu, item));	// 箭頭函式寫法
	console.log(`結果 ==>`, ary1.reduce(function(accu, item, index) {
		console.log(`${index}: accu = ${accu}, item = ${item}`);
		return Math.max(accu, item);
	}));
	
	console.log("");
	
	
	console.log(`====== 邊界值測試 (取最大值) ======`);
	const getMax = (acc, item, index) => {
		console.log(`${index}: acc ==>`, acc, `, item ==>`, item);
		return Math.max(acc, item);
	};
	
	let testAry = [1, 100];
	console.log(`testAry ==>`, testAry);
	
	console.log(`---- 沒有初始值 ----`);
	console.log(`結果 ==>`, testAry.reduce(getMax));
	
	console.log(`---- 初始值 50 ----`);
	console.log(`結果 ==>`, testAry.reduce(getMax, 50));
	
	console.log(`---- 初始值 150 ----`);
	console.log(`結果 ==>`, testAry.reduce(getMax, 150));
	
	console.log(``);
	
	testAry = [50];
	console.log(`testAry ==>`, testAry);
	
	console.log(`---- 沒有初始值 ----`);
	console.log(`結果 ==>`, testAry.reduce(getMax));	// 直接回傳陣列結果，沒有跑 callback function
	
	console.log(`---- 初始值 10 ----`);
	console.log(`結果 ==>`, testAry.reduce(getMax, 10));
	
	console.log(``);
	
	testAry = [];
	console.log(`testAry ==>`, testAry);
	
	console.log(`---- 初始值 10 ----`);
	console.log(`結果 ==>`, testAry.reduce(getMax, 10));	// 直接回傳初始值，沒有跑 callback function
	
	console.log(`---- 沒有初始值 ----`);
	// TypeError: Reduce of empty array with no initial value
	try {
		console.log(`結果 ==>`, testAry.reduce(getMax));
	}
	catch (e) {
		console.error(e);
	}
	
	console.log(``);
	
	
	console.log("====== 配合使用 concat 攤平二維陣列 ======");
	const ary2 = [
		['a', 'b'],
		// {name: "Tom", age: 18},	// concat 無法攤平物件
		[1, 2, 3],
		['C', 'D']
	];
	console.log(`ary2 ==>`, ary2);
	console.log(``);
	
	console.log(`結果 ==>`, ary2.reduce(function (accu, item, index) {
		console.log(`${index}: accu =`, accu, `, item =`, item);
		return accu.concat(item);
	}));
	
	console.log(``);
	
	console.log(`---- 箭頭函式 + 給入初始值 ----`);
	console.log(`結果 ==>`, ary2.reduce((accu, item, index) => {
		console.log(`${index}: accu =`, accu, `, item =`, item);
		return accu.concat(item);
	}, []));
	
	console.log(``);
	
	
	// 若要完全攤平 N 維陣列，需要寫成遞迴
	console.log("====== 攤平超過二維陣列 (超過的部份沒有攤) ======");
	const ary3 = [
		['a', 'b'],
		[1, 2, [99, 100], 3],	// 無法攤平 [99, 100]
		['C', 'D']
	];
	console.log(`ary3 ==>`, ary3);
	console.log(``);
	
	console.log(`結果 ==>`, ary3.reduce(function (accu, item, index) {
		console.log(`${index}: accu =`, accu, `, item =`, item);
		return accu.concat(item);
	}, []));
	
	console.log(``);
	
	console.log(`====== 統計名字出現的次數 ======`);
	const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Bruce", "Alice"];
	console.log(`names ==>`, names);
	
	console.log(`結果 ==>`, names.reduce((statistics, name, index) => {
		
		console.log(`${index}: statistics ==>`, statistics, `, name ==>`, name);
		
		// let count = statistics[name] ? statistics[name] : 0;
		let count = statistics[name] ?? 0;	// 使用 空值合併運算符 寫法
		
		// 寫法 1
		/* statistics[name] = count + 1;
		return statistics; */
		
		// 寫法 2：利用重複的屬性會後蓋前的特性
		return {
			... statistics,
			[name]: count + 1,
		};
		
	}, {}));
	
	console.log(``);
	
	console.log(`====== 去除重複 ======`);
	const duplicateArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d"];
	console.log(`duplicateArray ==>`, duplicateArray);
	
	console.log(`結果 ==>`, duplicateArray.reduce((acc, item, index) => {
		console.log(`${index}: acc ==>`, acc, `, item ==>`, item);
		if (!acc.includes(item)) {
			acc.push(item);
		}
		return acc;
	}, []));
	
	console.log("");
	console.log("********** testReduce() - End **********");
}



