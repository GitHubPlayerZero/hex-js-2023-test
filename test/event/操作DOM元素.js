const boxElmt = document.querySelector(".box");


// 增加元素在最後
function addElmtLast()
{
	console.clear();
	
	// 方式一
	const textNode1 = document.createTextNode(`我是用 appendChild() 增加的段落 1`);
	const pElmt1 = document.createElement(`p`);
	pElmt1.appendChild(textNode1);
	console.log(pElmt1);
	console.log(pElmt1.innerHTML);
	boxElmt.appendChild(pElmt1);
	
	console.log(``);
	
	// 方式二
	const pElmt2 = document.createElement(`p`);
	pElmt2.textContent = `我是用 appendChild() 增加的段落 2`;
	console.log(pElmt2);
	console.log(pElmt2.innerHTML);
	boxElmt.appendChild(pElmt2);
	
	console.log(``);
	
	/* // 方式三 (不能這樣用)
	// DOMException: Failed to execute 'createElement' on 'Document': The tag name provided ('<p>我是新增加的段落 A3</p>') is not a valid name.
	const pElmt3 = document.createElement(`<p>我是新增加的段落 A3</p>`);
	boxElmt.appendChild(pElmt3); */
	
	// 方式四: insertAdjacentElement
	const pElmt4 = document.createElement(`p`);
	pElmt4.textContent = `我是用 insertAdjacentElement() 增加的段落`;
	console.log(pElmt4);
	console.log(pElmt4.innerHTML);
	boxElmt.insertAdjacentElement("beforeend", pElmt4);
	
	console.log(``);
	
	// 方式五: insertAdjacentHTML
	const pHtmlText = `<p>我是用 insertAdjacentHTML() 增加的段落</p>`;
	console.log(`pHtmlText = ${pHtmlText}`);
	boxElmt.insertAdjacentHTML("beforeend", pHtmlText);
}


// 增加元素在最前
function addElmtFirst()
{
	console.clear();
	
	// 方式一: 需要仰賴取得第一個元素，才能 insert 在它之前
	const pElmt1 = document.createElement("p");
	pElmt1.textContent = `我是用 insertBefore() 增加的段落（需倚賴 p1）`;
	console.log(pElmt1);
	console.log(pElmt1.innerHTML);
	boxElmt.insertBefore(pElmt1, document.querySelector("#p1"));
	
	console.log(``);
	
	// 方式二: insertAdjacentElement
	const pElmt2 = document.createElement("p");
	pElmt2.textContent = `我是用 insertAdjacentElement() 增加的段落`;
	console.log(pElmt2);
	console.log(pElmt2.innerHTML);
	boxElmt.insertAdjacentElement("afterbegin", pElmt2);
	
	console.log(``);
	
	// 方式三: insertAdjacentHTML
	const pHtmlText = `<p>我是用 insertAdjacentHTML() 增加的段落</p>`;
	console.log(`pHtmlText = ${pHtmlText}`);
	boxElmt.insertAdjacentHTML("afterbegin", pHtmlText);
}


// 增加元素在 p1 之後
function addElmtAfterP1()
{
	console.clear();
	
	const p1Elmt = document.querySelector("#p1");
	const p2Elmt = document.querySelector("#p2");
	
	// 方式 1: insertAdjacentElement，加入 p1 之後
	const pElmt1 = document.createElement("p");
	const textNode1 = document.createTextNode("我是 p1 用 insertAdjacentElement beforeend 增加的段落");
	pElmt1.appendChild(textNode1);
	console.log(pElmt1);
	console.log(pElmt1.innerHTML);
	p1Elmt.insertAdjacentElement("beforeend", pElmt1);
	
	console.log(``);
	
	const textNode2_1 = document.createTextNode(`我是 p1 用 insertAdjacentElement afterend 增加的段落`);
	const textNode2_2 = document.createTextNode(`（注意：beforeend 和 afterend 的結果雖然看起來一樣，但實際結構是不同的，這邊要用 afterend 才是正確的結構)`);
	const brElmt = document.createElement("br");
	
	const pElmt2 = document.createElement("p");
	pElmt2.appendChild(textNode2_1);
	pElmt2.appendChild(brElmt);
	pElmt2.appendChild(textNode2_2);
	console.log(pElmt2);
	console.log(`innerHTML ==>`, pElmt2.innerHTML);
	console.log(`childNodes ==>`, pElmt2.childNodes);
	console.log(`textContent ==>`, pElmt2.textContent);
	p1Elmt.insertAdjacentElement("afterend", pElmt2);
	
	console.log(``);
	console.log(``);
	
	
	// 方式 2: insertAdjacentHTML，加入 p2 之前
	const pHtmltext1 = `<p>我是 p2 用 insertAdjacentHTML afterbegin 增加的段落</p>`;
	console.log(`pHtmltext1 = ${pHtmltext1}`);
	p2Elmt.insertAdjacentHTML("afterbegin", pHtmltext1);
	
	console.log(``);
	
	let pHtmltext2 = `<p>我是 p2 用 insertAdjacentHTML beforebegin 增加的段落<br>（注意：afterbegin 和 beforebegin 的結果雖然看起來一樣，但實際結構是不同的，這邊要用 beforebegin 才是正確的結構)</p>`;
	console.log(`pHtmltext2 = ${pHtmltext2}`);
	p2Elmt.insertAdjacentHTML("beforebegin", pHtmltext2);
	
	console.log(``);
	
	console.log(`boxElmt.childNodes ==>`, boxElmt.childNodes);
}


// 刪除 p2
function removeP2()
{
	
}

removeP2();


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