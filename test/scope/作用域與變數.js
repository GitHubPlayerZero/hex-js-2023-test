console.log(`====== 在 JS 全域宣告變數 ======`);
var aGlobalVar = "全域裡的 var";
var aGlobalVar = "全域裡的 var2";
let globalLet = "全域裡的 let";
// let globalLet = "全域裡的 let2";  // SyntaxError: Identifier 'globalLet' has already been declared
const globalConst = "全域裡的 const";
// const globalConst = "全域裡的 const"; // SyntaxError: Identifier 'globalConst' has already been declared
console.log(`aGlobalVar ==>`, aGlobalVar, `| window.aGlobalVar ==>`, window.aGlobalVar);  // aGlobalVar ==> 區塊裡的 var2 | window.aGlobalVar ==> 區塊裡的 var2
console.log(`globalLet ==>`, globalLet, `| window.globalLet ==>`, window.globalLet);  // globalLet ==> 區塊裡的 let | window.globalLet ==> undefined
console.log(`globalConst ==>`, globalConst, `| window.globalConst ==>`, window.globalConst);  // globalConst ==> 區塊裡的 const | window.globalConst ==> undefined
// debugger;
/**
 * 測試結果說明：
 * var：
 *   1. 全域的 var 變數會滲透到 window，會被放到 Global Scope 中。
 *   2. 可以被重複宣告。
 * let、const：
 *   1. 不會滲透到 window，它們宣告的全域變數會被放到 Script Scope 中。
 *   2. 不能重複宣告。
 */

console.log(``);

console.log(`====== 在區塊裡宣告變數 ======`);
{
  var aBlockVar = "區塊裡的 var";
  let blockLet = "區塊裡的 let";
  const blockConst = "區塊裡的 const";
  // debugger;
}
console.log(`aBlockVar ==>`, aBlockVar, `| window.aBlockVar ==>`, window.aBlockVar);  // aBlockVar ==> 區塊裡的 var | window.aBlockVar ==> 區塊裡的 var
try { console.log(`blockLet ==>`, blockLet); } catch (error) { console.error(error); }  // ReferenceError: blockLet is not defined
try { console.log(`blockConst ==>`, blockConst); } catch (error) { console.error(error); }  // ReferenceError: blockConst is not defined
/**
 * 測試結果說明：
 * var：
 *   由於 var 最小的作用域為「函式」，因此在單純區塊中的 var 會往上層滲透。
 *   此範例往上層即為全域，因此會滲透到 window，會被放到 Global Scope 中。
 * let、const：
 *   其最小作用域可到「區塊」，因此會被放到 Block Scope 中。
 */

console.log(``);

console.log(`====== 在函式裡宣告變數 ======`);
function fun () {
  console.log(`[fun] this ==>`, this);  // Window 物件
  var funVar = "函式裡的 var";
  let funLet = "函式裡的 let";
  const funConst = "函式裡的 const";
  // debugger;
}
function testFun () {
  fun();
  try { console.log(`funVar ==>`, funVar); } catch (error) { console.error(error); }  // ReferenceError: funVar is not defined
  try { console.log(`funLet ==>`, funLet); } catch (error) { console.error(error); }  // ReferenceError: funLet is not defined
  try { console.log(`funConst ==>`, funConst); } catch (error) { console.error(error); }  // ReferenceError: funConst is not defined
}
/**
 * 測試結果說明：var、let、const 均會被放到 Local Scope 中。
 */

console.log(``);

console.log(`====== 在函式裡的區塊宣告變數 ======`);
function moduleFun2 () {
  if (true) {
    var funBlockVar = "函式裡的區塊的 var";
    let funBlockLet = "函式裡的區塊的 let";
    const funBlockConst = "函式裡的區塊的 const";
    debugger;
  }
  console.log(`funBlockVar ==>`, funBlockVar, `| window.funBlockVar ==>`, window.funBlockVar);  // funBlockVar ==> 函式裡的區塊的 var | window.funBlockVar ==> undefined
  try { console.log(`funBlockLet ==>`, funBlockLet); } catch (error) { console.error(error); }  // ReferenceError: funBlockLet is not defined
  try { console.log(`funBlockConst ==>`, funBlockConst); } catch (error) { console.error(error); }  // ReferenceError: funBlockConst is not defined
  debugger;
}
function testModuleFun2 () {
  moduleFun2();
  console.log(`在函式外...`);
  try { console.log(`funBlockVar ==>`, funBlockVar); } catch (error) { console.error(error); }  // ReferenceError: funBlockVar is not defined
  try { console.log(`funBlockLet ==>`, funBlockLet); } catch (error) { console.error(error); }  // ReferenceError: funBlockLet is not defined
  try { console.log(`funBlockConst ==>`, funBlockConst); } catch (error) { console.error(error); }  // ReferenceError: funBlockConst is not defined
}
/**
 * 測試結果說明：
 * var：
 *   由於 var 為「函式」作用域，因此在單純區塊中的 var 會往上層滲透。
 *   此範例往上層為函式，因此會被放到 Local Scope 中。
 * let、const：
 *   作用域為「區塊」，因此會被放到 Block Scope 中。
 */

console.log(``);
