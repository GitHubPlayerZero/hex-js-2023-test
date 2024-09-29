// documentElement 框線
function toggleDocBorder() {
	document.documentElement.classList.toggle("border-doc");
}

// body 框線
function toggleBodyBorder() {
	document.body.classList.toggle("border-body");
}


// 基本範例
function testBase()
{
	/* 內容沒有超出父容器 */
	const elemDivNoOverflow = document.querySelector("#divNoOverflow");
	
	// offset
	document.querySelector("#dnoOffsettWidth").textContent = elemDivNoOverflow.offsetWidth;
	document.querySelector("#dnoOffsettHeight").textContent = elemDivNoOverflow.offsetHeight;
	// client
	document.querySelector("#dnoClientWidth").textContent = elemDivNoOverflow.clientWidth;
	document.querySelector("#dnoClientHeight").textContent = elemDivNoOverflow.clientHeight;
	// scroll
	document.querySelector("#dnoScrollWidth").textContent = elemDivNoOverflow.scrollWidth;
	document.querySelector("#dnoScrollHeight").textContent = elemDivNoOverflow.scrollHeight;
	
	
	/* 內容超出父容器，沒有設定 overfow */
	const elemDivNoScroll = document.querySelector("#divNoScroll");
	
	// offset
	document.querySelector("#dnsOffsettWidth").textContent = elemDivNoScroll.offsetWidth;
	document.querySelector("#dnsOffsettHeight").textContent = elemDivNoScroll.offsetHeight;
	// client
	document.querySelector("#dnsClientWidth").textContent = elemDivNoScroll.clientWidth;
	document.querySelector("#dnsClientHeight").textContent = elemDivNoScroll.clientHeight;
	// scroll
	document.querySelector("#dnsScrollWidth").textContent = elemDivNoScroll.scrollWidth;
	document.querySelector("#dnsScrollHeight").textContent = elemDivNoScroll.scrollHeight;
	
	
	/* 內容超出父容器，設定 overfow 為 auto */
	const elemDivScroll = document.querySelector("#divScroll");
	
	// offset
	document.querySelector("#dsOffsettWidth").textContent = elemDivScroll.offsetWidth;
	document.querySelector("#dsOffsettHeight").textContent = elemDivScroll.offsetHeight;
	// client
	document.querySelector("#dsClientWidth").textContent = elemDivScroll.clientWidth;
	document.querySelector("#dsClientHeight").textContent = elemDivScroll.clientHeight;
	// scroll
	document.querySelector("#dsScrollWidth").textContent = elemDivScroll.scrollWidth;
	document.querySelector("#dsScrollHeight").textContent = elemDivScroll.scrollHeight;
}


// 取得整個畫面的大小
function getFullPageSize()
{
	// window.screen.width
	document.querySelector("#windowScreenWidth").textContent = window.screen.width;
	document.querySelector("#windowScreenHeight").textContent = window.screen.height;
	// window.screen.availWidth
	document.querySelector("#windowScreenAvailWidth").textContent = window.screen.availWidth;
	document.querySelector("#windowScreenAvailHeight").textContent = window.screen.availHeight;
	
	// document.documentElement.clientWidth
	document.querySelector("#docClientWidth").textContent = document.documentElement.clientWidth;
	document.querySelector("#docClientHeight").textContent = document.documentElement.clientHeight;
	// document.documentElement.offsetWidth
	document.querySelector("#docOffsetWidth").textContent = document.documentElement.offsetWidth;
	document.querySelector("#docOffsetHeight").textContent = document.documentElement.offsetHeight;
	// document.documentElement.scrollWidth
	document.querySelector("#docScrollWidth").textContent = document.documentElement.scrollWidth;
	document.querySelector("#docScrollHeight").textContent = document.documentElement.scrollHeight;
	
	// document.body.clientWidth
	document.querySelector("#bodyClientWidth").textContent = document.body.clientWidth;
	document.querySelector("#bodyClientHeight").textContent = document.body.clientHeight;
	// document.body.offsetWidth
	document.querySelector("#bodyOffsetWidth").textContent = document.body.offsetWidth;
	document.querySelector("#bodyOffsetHeight").textContent = document.body.offsetHeight;
	// document.body.scrollWidth
	document.querySelector("#bodyScrollWidth").textContent = document.body.scrollWidth;
	document.querySelector("#bodyScrollHeight").textContent = document.body.scrollHeight;
}


// 熱鍵
document.addEventListener("keyup", (event) => {
	// console.log(event);
	
	if (event.altKey)
	{
		if (event.key === "1") {
			// console.log(`觸發 html 框線！`);
			toggleDocBorder();
			
		}
		else if (event.key === "2") {
			// console.log(`觸發 body 框線！`);
			toggleBodyBorder();
		}
		else if (event.code === "KeyR") {
			testBase();
			getFullPageSize();
		}
	}
});


document.addEventListener("DOMContentLoaded", (event) => {
	testBase();
	getFullPageSize();
});
