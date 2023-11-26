/*
// let myName = "May";	// 不會滲透到 window，所以 showName2() 無法取到值
// myName = "May";	// 成為全域 window 屬性，showName2() 可以取到值
var myName = "May";	// 成為全域 window 變數，showName2() 可以取到值

const testObj = {
	myName: "John",
	getName: function() {
		return this.myName;	// John
	},
	getName2: () => this.myName,	// 取 window 的屬性或變數
	getAge: function() {
		return this.age;
	},
	age: 18,
};

console.log(`showName() ==> ${testObj.getName()}`);
delete window.myName;	// 可以刪除屬性，無法刪除變數
console.log(`showName2() ==> ${testObj.getName2()}`);
*/


/* // textContent V.S. innerText
const elmtP1 = document.querySelector("#p1");
console.log(`elmtP1.textContent ==>`, elmtP1.textContent);
console.log(`elmtP1.innerText ==>`, elmtP1.innerText); */


// /* 修改 H1 文字內容 */
// const elmtH1 = document.querySelector("h1");
// console.log(`H1 before ==>`, elmtH1.textContent);
// elmtH1.textContent = "變更 H1";
// console.log(`H1 after ==>`, elmtH1.textContent);


// /* 修改 list 內容 */
// const userName = "小明";
// const list = document.querySelector(".list");

// // 直接把內容全替換掉
// list.innerHTML = `
// 	<li>比爾</li>
// 	<li>${userName}</li>`;

// // 接續原內容
// list.innerHTML += `<li>阿杰</li>`;

// console.log(`list.innerHTML ==>`, list.innerHTML);
// console.log(`list.outerHTML ==>`, list.outerHTML);


// /* 增加 list2、list3 */
// const elmtLi = document.createElement("li");
// elmtLi.appendChild(document.createTextNode("aaa"));

// const list2 = list.cloneNode();	// 預設不會複製節點內容
// list2.setAttribute("class", "list2");
// list2.appendChild(elmtLi);

// const list3 = list.cloneNode(true);	// 給入參數 true 會複製節點內容
// list3.setAttribute("class", "list3");
// // list3.appendChild(elmtLi);	// 如果直接 append 元素，會將元素由 list2 移轉過來
// list3.appendChild(elmtLi.cloneNode(true));

// document.body.appendChild(list2);
// document.body.appendChild(list3);


/* const elmtTestDiv = document.querySelector("#test");
let str = "";
for (let i = 1; i <= 6000; i++) {
	console.log(i);
	str += `<p>test ${i}</p>`;
	// elmtTestDiv.innerHTML = str;
}
elmtTestDiv.innerHTML = str; */



/* let dataObj = {
	無黨籍: 0,
	國民黨: 0,
	民進黨: 0,
};

dataObj.無黨籍 += 2;

if (dataObj.aaa) {
	console.log(`111`);
	dataObj.aaa ++;
} else {
	console.log(`222`);
	dataObj.aaa = 1;
} */


/* function sleep(waitSec)
{
	const waitMillisec = waitSec * 1000;
	let start = new Date().getTime();
	console.log(`start...... ${new Date()}`);
	
	while (new Date().getTime() - start <= waitMillisec) {
		;
	}
	
	console.log(`end...... ${new Date()}`);
} */




// console.log(document.querySelector(".list"));
// console.log(document.querySelector(".list").tagName);
// console.log(document.querySelector(".list").getAttribute("class"));
// console.log(document.querySelector(".list").classList);

// console.log(document.querySelector("[data-num]"));
// console.log(document.querySelectorAll("[data-num]"));
console.log(document.querySelector("[data-num]").tagName);
console.log(document.querySelector("[data-num]").type);
console.log(document.querySelector("[data-num]").value);
console.log(document.querySelector("[data-num]").getAttribute("value"));
console.log(document.querySelector("[data-num]").getAttribute("data-num"));
console.log(document.querySelector("[data-num]").dataset.num);

document.querySelector(".list").addEventListener("click", function (e) {
	const elmt = e.target;
	const num = elmt.getAttribute("data-num");
	console.log(elmt);
	console.log(num);
	if (num) {
		console.log(`yes!`);
	}
	else {
		console.log(`no!!`);
	}
});

