const myLoading = {
	
	elmtLoadingMask: null,
	
	open: function () {
		console.log('[myLoading] openLoading ......');
		
		myLoading.elmtLoadingMask.classList.add("active");
		document.querySelector("body").classList.add("overflow-hidden");
		
		console.log(`[myLoading] ==>`, myLoading.elmtLoadingMask.classList);
		console.log(`[myLoading] ==>`, document.querySelector("body").classList);
	},
	
	close: function () {
		console.log('[myLoading] closeLoading ...');
		myLoading.elmtLoadingMask.classList.remove("active");
		document.querySelector("body").classList.remove("overflow-hidden");
		
		console.log(`[myLoading] ==>`, myLoading.elmtLoadingMask.classList);
		console.log(`[myLoading] ==>`, document.querySelector("body").classList);
	}
};


function init()
{
	console.log(`[myLoading] DOMContentLoaded ......`);
	
	let elmtLoadingMask = document.querySelector(".loading-mask");
	console.log(`[myLoading] .loading-mask element ==>`, elmtLoadingMask);
	
	// 若沒有 loading 元素，則建立之
	if (!elmtLoadingMask)
	{
		elmtLoadingMask = document.createElement("div");
		elmtLoadingMask.classList.add("loading-mask");
		elmtLoadingMask.appendChild(document.createElement("div")).classList.add("loader");
		
		document.querySelector("body").append(elmtLoadingMask);
		console.log(`[myLoading] build ==>`, elmtLoadingMask);
	}
	
	myLoading.elmtLoadingMask = elmtLoadingMask;
}
init();

/*
	使用 DOMContentLoaded 的寫法，可以讓 script 即使放在 head 也能正常執行。
	但可能會造成一個問題情況是，如果有別的套件有用到此 JS，而它並沒有使用 DOMContentLoaded，那可能會被先執行，這時 loading 就會出錯。
*/
// document.addEventListener("DOMContentLoaded", init);
