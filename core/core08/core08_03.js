/* 預設匯出其它範例 */

/* 直接匯出 */
// export default 123;	// 數字
// export default "你好";	// 字串

// export default () => {
// 	console.log(`我是預設匯出的箭頭函式`);
// };


/* 先宣告再匯出 */
// const hello = "我是先宣告再匯出的預設匯出字串";

function hello () {
	console.log("我是先宣告再匯出的預設匯出函式");
}

export default hello;
