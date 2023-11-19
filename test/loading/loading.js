function testLoading()
{
	console.clear();
	openLoading();
	
	setTimeout(() => {
		closeLoading();
	}, 5000);
}


function openLoading()
{
	console.log('openLoading ......');
	
	document.querySelector(".loading-mask").classList.add("active");
	document.querySelector("body").classList.add("overflow-hidden");
	
	console.log(document.querySelector(".loading-mask").classList);
	console.log(document.querySelector("body").classList);
}

function closeLoading() {
	console.log('closeLoading ...');
	document.querySelector(".loading-mask").classList.remove("active");
	document.querySelector("body").classList.remove("overflow-hidden");
}
