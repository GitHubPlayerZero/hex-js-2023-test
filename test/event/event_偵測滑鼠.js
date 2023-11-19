// click
document.querySelector("#btnClick").addEventListener("click", function(event) {
	console.log(event);
	alert("你觸發了 click");
});

// double click
document.querySelector("#btnDoubleClick").addEventListener("dblclick", function(event) {
	console.log(event);
	alert("你觸發了 double click！");
});


// mouse over
document.querySelector(".mouseoever-area").addEventListener("mouseover", function(event) {
	console.log(event);
	console.log(`    clientX = ${event.clientX}, clientY = ${event.clientY}`);
	document.querySelector("#coordinateX").textContent = event.clientX;
	document.querySelector("#coordinateY").textContent = event.clientY;
});