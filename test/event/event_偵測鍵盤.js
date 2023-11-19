const elmtResult = document.querySelector("#result");

const keyTypeStyle = {
	"keydown": `<span style="color: blue;">keydown</span>`,
	"keyup": `<span style="color: green;">keyup</span>`,
	"keypress": `<span style="color: red;">keypress</span>`,
};


function clearResult() {
	console.clear();
	elmtResult.innerHTML = '';
}

// 清除結果熱鍵
function clearResultHot(event) {
	if (event.ctrlKey && event.shiftKey && event.code ==='KeyL') {
		clearResult();
		event.preventDefault();
	}
}

function showOneLineResult(str) {
	elmtResult.innerHTML += `${str}<br>`;
}

function showKeyInfo(event)
{
	console.log(event);
	console.log(`    type = ${event.type}`);
	
	showOneLineResult(keyTypeStyle[event.type]);
	
	console.log(`    charCode = ${event.charCode}, keyCode = ${event.keyCode}`);
	showOneLineResult(`&nbsp;&nbsp;&nbsp;&nbsp;charCode = ${event.charCode}, keyCode = ${event.keyCode}`);
	
	console.log(`    code = ${event.code}, key = ${event.key}`);
	showOneLineResult(`&nbsp;&nbsp;&nbsp;&nbsp;code = ${event.code}, key = ${event.key}`);
	
	console.log(`    Ctrl = ${event.ctrlKey}, Shift = ${event.shiftKey}, Alt = ${event.altKey}`);
	showOneLineResult(`&nbsp;&nbsp;&nbsp;&nbsp;Ctrl = ${event.ctrlKey}, Shift = ${event.shiftKey}, Alt = ${event.altKey}`);
	
	window.scrollTo(0, document.body.scrollHeight);
}


document.addEventListener("keydown", function(event) {
	showKeyInfo(event);
	clearResultHot(event);	// 寫在這邊，event.preventDefault() 可同時阻擋 keydown 和 keypress。
});

document.addEventListener("keyup", function(event) {
	showKeyInfo(event);
	showOneLineResult("<br>");
	// clearResultHot(event);
});

document.addEventListener("keypress", function(event) {
	showKeyInfo(event);
});