function useLoading()
{
	const elemLoading = document.querySelector(".loading");
	let elemActive;
	
	function open() {
		elemLoading.classList.add("active");
		elemActive = document.activeElement;
		console.log(`active element ==>`, elemActive);
		elemActive.blur();	// 使激活中的元素失去焦點
	}
	
	function close() {
		elemLoading.classList.remove("active");
		elemActive.focus();	// 讓元素回復激活
	}
	
	return {
		open, close,
	};
}

/* loading 測試 */
const loading = useLoading();
	
const elemTestForm = document.querySelector("#testForm");

elemTestForm.addEventListener("keydown", (event) => {
	console.log(`監聽 keydown...`);
	console.log(`event ==>`, event);
});

elemTestForm.addEventListener("submit", (event) =>
{
	loading.open();
	
	event.preventDefault();
	console.log(`監聽 submit...`);
	console.log(`event ==>`, event);
	// alert("submit!");
	
	setTimeout(() => {
		loading.close();
	}, 5000);
});
