/* removeEventListener */

// 禁止 keydown
function stopKeydown(event, name) {
	const log = name === undefined ? '' : `#${name}`;
	console.log(`${log} [stopKeydown] 你按下了鍵盤 ==>`, event.target);
	console.log(`${log} [code] = ${event.code}, [key] = ${event.key}`);
	event.preventDefault();
	event.stopPropagation();
}

// 加入禁止 keydown 監聽
function listenStopKeydown(elem) {
	console.log(`listenStopKeydown...`);
	// elem.addEventListener("keydown", stopKeydown, true);
	elem.addEventListener("keydown", stopKeydown, { capture: true });	// 也可以這樣寫
}
// 移除禁止 keydown 監聽
function removeStopKeydown(elem) {
	console.log(`removeStopKeydown...`);
	elem.removeEventListener("keydown", stopKeydown, true);
}


// 監聽 keydown 1
function keydown1(event, name) {
	const log = name === undefined ? '' : `#${name}`;
	console.log(`${log} [keydown1] 你按下了鍵盤 ==>`, event.target);
	console.log(`${log} [code] = ${event.code}, [key] = ${event.key}`);
	// console.log(event);
	// console.log(`[keydown1] [event.target] ==>`, event.target);
	// console.log(`[keydown1] [code] ==> ${event.code}, [key] ==> ${event.key}`);
	// console.log(``);
}
// 監聽 keydown 2
function keydown2(event, name) {
	const log = name === undefined ? '' : `#${name}`;
	console.log(`${log} [keydown2] 你按下了鍵盤 ==>`, event.target);
	console.log(`${log} [code] = ${event.code}, [key] = ${event.key}`);
	// console.log(event);
	// console.log(`[keydown2] [event.target] ==>`, event.target);
	// console.log(`[keydown2] [code] ==> ${event.code}, [key] ==> ${event.key}`);
	// console.log(``);
}

// 加入 keydown1 監聽
function listenKeydown1(elem) {
	console.log(`listenKeydown1...`);
	elem.addEventListener("keydown", keydown1);
}
// 加入 keydown2 監聽
function listenKeydown2(elem) {
	console.log(`listenKeydown2...`);
	elem.addEventListener("keydown", keydown2);
	
	// 此寫法會造成無法移除
	// elem.addEventListener("keydown", (event) => {
	// 	keydown2(event);
	// });
}

// 移除 keydown1 監聽
function removeKeydown1(elem) {
	console.log(`removeKeydown1...`);
	elem.removeEventListener("keydown", keydown1);
}
// 移除 keydown2 監聽
function removeKeydown2(elem) {
	console.log(`removeKeydown2...`);
	elem.removeEventListener("keydown", keydown2);
	
	// 此寫法無法移除
	// elem.removeEventListener("keydown", (event) => {
	// 	keydown2(event);
	// });
}



/* AbortController, AbortSignal */

let stopKeydownController;
let keydownController1Document;
let keydownController1Text1;
let keydownController1Text2;
let keydownController2Text1;
let keydownController2Text2;

// 加入禁止 keydown 監聽
function listenStopKeydownAbort(elem, name) {
	console.log(`listenStopKeydownAbort...`);
	stopKeydownController = new AbortController();
	
	elem.addEventListener(
		"keydown", 
		// stopKeydown,
		(event) => {
			stopKeydown(event, name);
		}, 
		{
			capture: true,
			signal: stopKeydownController.signal,
		}
	);
}
// 移除禁止 keydown 監聽
function removeStopKeydownAbort(elem) {
	console.log(`removeStopKeydownAbort...`);
	// elem.removeEventListener("keydown", stopKeydown, true);
	if (stopKeydownController) {
		stopKeydownController.abort();
	}
}

// 加入 keydown1 監聽
// for document
function listenKeydownAbort1Document(elem, name) {
	console.log(`listenKeydownAbort1Document...`);
	keydownController1Document = new AbortController();
	
	elem.addEventListener(
		"keydown", 
		(event) => {
			keydown1(event, name);
		}, 
		{ signal: keydownController1Document.signal }
	);
}
// for text1
function listenKeydownAbort1Text1(elem, name) {
	console.log(`listenKeydownAbort1Text1...`);
	keydownController1Text1 = new AbortController();
	
	elem.addEventListener(
		"keydown", 
		(event) => {
			keydown1(event, name);
		}, 
		{ signal: keydownController1Text1.signal }
	);
}
// for text2
function listenKeydownAbort1Text2(elem, name) {
	console.log(`listenKeydownAbort1Text2...`);
	keydownController1Text2 = new AbortController();
	
	elem.addEventListener(
		"keydown", 
		(event) => {
			keydown1(event, name);
		}, 
		{ signal: keydownController1Text2.signal }
	);
}


// 加入 keydown2 監聽
// for text1
function listenKeydownAbort2Text1(elem, name) {
	console.log(`listenKeydownAbort2Text1...`);
	keydownController2Text1 = new AbortController();
	
	elem.addEventListener(
		"keydown", 
		(event) => {
			keydown2(event, name);
		},
		{ signal: keydownController2Text1.signal }
	);
}
// for text2
function listenKeydownAbort2Text2(elem, name) {
	console.log(`listenKeydownAbort2Text2...`);
	keydownController2Text2 = new AbortController();
	
	elem.addEventListener(
		"keydown", 
		(event) => {
			keydown2(event, name);
		},
		{ signal: keydownController2Text2.signal }
	);
}

// 移除 keydown1 監聽
// for Document
function removeKeydownAbort1Document() {
	console.log(`removeKeydownAbort1Document...`);
	if (keydownController1Document) {
		keydownController1Document.abort();
	}
}
// for text1
function removeKeydownAbort1Text1() {
	console.log(`removeKeydownAbort1Text1...`);
	if (keydownController1Text1) {
		keydownController1Text1.abort();
	}
}
// for text2
function removeKeydownAbort1Text2() {
	console.log(`removeKeydownAbort1Text2...`);
	if (keydownController1Text2) {
		keydownController1Text2.abort();
	}
}

// 移除 keydown2 監聽
// for text1
function removeKeydownAbort2Text1() {
	console.log(`removeKeydownAbort2Text1...`);
	if (keydownController2Text1) {
		keydownController2Text1.abort();
	}
}
// for text2
function removeKeydownAbort2Text2() {
	console.log(`removeKeydownAbort2Text2...`);
	if (keydownController2Text2) {
		keydownController2Text2.abort();
	}
}
