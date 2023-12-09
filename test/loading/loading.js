let elmtLoadingMask;

document.addEventListener("DOMContentLoaded", function (e)
{
	console.log(`DOMContentLoaded ......`);
	
	elmtLoadingMask = document.querySelector(".loading-mask");
	console.log(`.loading-mask element ==>`, elmtLoadingMask);
	
	// 若沒有 loading 元素，則建立之
	if (!elmtLoadingMask)
	{
		elmtLoadingMask = document.createElement("div");
		elmtLoadingMask.classList.add("loading-mask");
		elmtLoadingMask.appendChild(document.createElement("div")).classList.add("loader");
		
		document.querySelector("body").append(elmtLoadingMask);
		console.log(`build ==>`, elmtLoadingMask);
	}
});


function openLoading()
{
	console.log('openLoading ......');
	
	// elmtLoadingMask.classList.remove("d-none");	// 方式一
	elmtLoadingMask.classList.add("active");	// 方式二
	document.querySelector("body").classList.add("overflow-hidden");
	
	console.log(elmtLoadingMask.classList);
	console.log(document.querySelector("body").classList);
}

function closeLoading() {
	console.log('closeLoading ...');
	// elmtLoadingMask.classList.add("d-none");	// 方式一
	elmtLoadingMask.classList.remove("active");	// 方式二
	document.querySelector("body").classList.remove("overflow-hidden");
	
	console.log(elmtLoadingMask.classList);
	console.log(document.querySelector("body").classList);
}


function testLoading()
{
	console.log(``);
	console.log(`========== testLoading ==========`);
	
	openLoading();
	
	setTimeout(() => {
		closeLoading();
	}, 5000);
}

function testMyLoading()
{
	console.log(``);
	console.log(`========== testLoading ==========`);
	
	myLoading.open();
	
	setTimeout(() => {
		myLoading.close();
	}, 5000);
}