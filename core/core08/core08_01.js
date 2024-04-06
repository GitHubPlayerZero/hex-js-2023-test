/*
	具名匯出
	1. 一個檔案可以有多個。
	2. 需要宣告。
*/

/* 直接匯出 */
export const exptVariable = "我是具名匯出的變數";

export function exptFunc() {
	console.log("我是具名匯出的函式");
};


/* 先宣告再匯出 */
const exptVariable2 = "我是具名匯出的變數2，我先宣告再匯出";

function exptFunc2() {
	console.log(`我是具名匯出的函式2，我先宣告再匯出`);
}

export {exptVariable2, exptFunc2};




/*
	預設匯出 (函式)
	1. 一個檔案只能有一個。
	2. 不宣告。
*/
export default function () {
	console.log("我是預設匯出的函式");
};

