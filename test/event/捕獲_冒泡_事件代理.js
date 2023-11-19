document.querySelector("body").addEventListener("click", function (event) {
	console.log(`hello body`);
	console.log(event);
	console.log(`@ event.eventPhase = ${event.eventPhase}`);
	console.dir(event.target);
	console.log(`@ event.target.type = ${event.target.type}`);
	console.log(event.target.onclick);
	console.log(`@ event.target.getAttribute("type") = ${event.target.getAttribute("type")}`);
	console.log(event.target.getAttribute("onclick"));
	
	// event.stopPropagation();
}, true);