console.log(`====== 在 Module 全域宣告變數 ======`);
console.log(`[Module] this ==>`, this); // [Module] this ==> undefined
console.log(`[Module] window ==>`, window); // Window 物件
var aModuleGlobalVar = "Module 全域裡的 var";
let moduleGlobalLet = "Module 全域裡的 let";
const moduleGlobalConst = "全域裡的 const";
console.log(`aModuleGlobalVar ==>`, aModuleGlobalVar, `| window.aModuleGlobalVar ==>`, window.aModuleGlobalVar);  // aModuleGlobalVar ==> Module 全域裡的 var | window.aModuleGlobalVar ==> undefined
console.log(`moduleGlobalLet ==>`, moduleGlobalLet, `| window.moduleGlobalLet ==>`, window.moduleGlobalLet);  // moduleGlobalLet ==> Module 全域裡的 let | window.moduleGlobalLet ==> undefined
console.log(`moduleGlobalConst ==>`, moduleGlobalConst, `| window.moduleGlobalConst ==>`, window.moduleGlobalConst);  // moduleGlobalConst ==> 全域裡的 const | window.moduleGlobalConst ==> undefined
// debugger;
/**
 * 測試結果說明：Module 裡宣告的全域變數，不管是 var、let、const 都會在 Module Scope 裡，不會滲透到 Global Scope。
 */

console.log(``);

console.log(`====== 在 Module 區塊裡宣告變數 ======`);
{
  var aModuleBlockVar = "Module 區塊裡的 var";
  let moduleBlockLet = "Module 區塊裡的 let";
  const moduleBlockConst = "Module 區塊裡的 const";
  // debugger;
}
console.log(`aModuleBlockVar ==>`, aModuleBlockVar, `| window.aModuleBlockVar ==>`, window.aModuleBlockVar);  // aModuleBlockVar ==> Module 區塊裡的 var | window.aModuleBlockVar ==> undefined
try { console.log(`moduleBlockLet ==>`, moduleBlockLet); } catch (error) { console.error(error); }  // ReferenceError: moduleBlockLet is not defined
try { console.log(`moduleBlockConst ==>`, moduleBlockConst); } catch (error) { console.error(error); }  // ReferenceError: moduleBlockConst is not defined
/**
 * 測試結果說明：
 * var：
 *   由於 var 為函式作用域，因此會往上層滲透。
 *   但由於是在模組模式中，因此也只能滲透到 Module Scope，而不會到 Global Scope。
 * let、const：為塊級作用域，因此會被放到 Block Scope 中。
 */

console.log(``);

console.log(`====== 在 Module 函式裡宣告變數 ======`);
function moduleFun () {
  console.log(`[Module function] this ==>`, this);  // [Module function] this ==> undefined
  console.log(`[Module function] window ==>`, window);  // Window 物件
  var aModuleFunVar = "Module 函式裡的 var";
  let moduleFunLet = "Module 函式裡的 let";
  const moduleFunConst = "Module 函式裡的 const";
  // debugger;
}
function testModuleFun () {
  moduleFun();
  try { console.log(`aModuleFunVar ==>`, aModuleFunVar, `| window.aModuleFunVar ==>`, window.aModuleFunVar); } catch (error) { console.error(error); }  // ReferenceError: aModuleFunVar is not defined
  try { console.log(`moduleFunLet ==>`, moduleFunLet); } catch (error) { console.error(error); }  // ReferenceError: moduleFunLet is not defined
  try { console.log(`moduleFunConst ==>`, moduleFunConst); } catch (error) { console.error(error); }  // ReferenceError: moduleFunConst is not defined
}
testModuleFun();
/**
 * 測試結果說明：var、let、const 都會在 Local Scope 中。
 */

console.log(``);

console.log(`====== 在 Module 函式裡的區塊宣告變數 ======`);
function moduleFun2 () {
  if (true) {
    var aModuleFunBlockVar = "Module 函式裡的區塊的 var";
    let moduleFunBlockLet = "Module 函式裡的區塊的 let";
    const moduleFunBlockConst = "Module 函式裡的區塊的 const";
    // debugger;
  }
  console.log(`aModuleFunBlockVar ==>`, aModuleFunBlockVar, `| window.aModuleFunBlockVar ==>`, window.aModuleFunBlockVar);  // aModuleFunBlockVar ==> Module 函式裡的區塊的 var | window.aModuleFunBlockVar ==> undefined
  try { console.log(`moduleFunBlockLet ==>`, moduleFunBlockLet); } catch (error) { console.error(error); }  // ReferenceError: moduleFunBlockLet is not defined
  try { console.log(`moduleFunBlockConst ==>`, moduleFunBlockConst); } catch (error) { console.error(error); }  // ReferenceError: moduleFunBlockConst is not defined
  // debugger;
}
function testModuleFun2 () {
  moduleFun2();
  console.log(`在函式外...`);
  try { console.log(`aModuleFunBlockVar ==>`, aModuleFunBlockVar); } catch (error) { console.error(error); }  // ReferenceError: aModuleFunBlockVar is not defined
  try { console.log(`moduleFunBlockLet ==>`, moduleFunBlockLet); } catch (error) { console.error(error); }  // ReferenceError: moduleFunBlockLet is not defined
  try { console.log(`moduleFunBlockConst ==>`, moduleFunBlockConst); } catch (error) { console.error(error); }  // ReferenceError: moduleFunBlockConst is not defined
}
testModuleFun2();
/**
 * 測試結果說明：
 * var：
 *   由於 var 為「函式」作用域，因此在單純區塊中的 var 會往上層滲透。
 *   此範例往上層為函式，因此會被放到 Local Scope 中。
 * let、const：
 *   作用域為「區塊」，因此會被放到 Block Scope 中。
 */

console.log(``);