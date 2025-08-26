console.log(`====== 構造函式 (Constructor Function) ======`);

function TestFn (name) {
  this.name = name;

  // 傳統函式
  this.showThis = function () {
    console.log(`[showThis] this ==>`, this);
  }

  // 箭頭函式
  this.showArrowThis = () => {
    console.log('[showArrowThis] this ==>', this);
  }
}

const testFn = new TestFn("構造函式測試");

console.log(`----- 測試傳統函式 -----`);
// 透過實例呼叫函式
console.log(`# 透過實例呼叫函式`);
testFn.showThis();  // [showThis] this ==> TestFn {name: '構造函式測試', myThis: TestFn, showThis: ƒ}

// 將函式取出使用簡易呼叫（Simple Call）
console.log(`# 將函式取出使用簡易呼叫`);
const showThis = testFn.showThis;
showThis(); // [showThis] this ==> 全域 window 物件

console.log(``);

console.log(`----- 測試箭頭函式 -----`);
// 透過實例呼叫函式
console.log(`# 透過實例呼叫函式`);
testFn.showArrowThis();  // [showArrowThis] this ==> TestFn {name: '構造函式測試', showThis: ƒ, showArrowThis: ƒ}

// 將函式取出使用簡易呼叫（Simple Call）
console.log(`# 將函式取出使用簡易呼叫`);
const showArrowThis = testFn.showArrowThis;
showArrowThis(); // [showArrowThis] this ==> TestFn {name: '構造函式測試', showThis: ƒ, showArrowThis: ƒ}

console.log(``);

console.log(`====== Class ======`);

class TestClass {
  constructor(name) {
    this.name = name;
  }

  // 傳統函式
  showThis () {
    console.log(`[showThis] this ==>`, this);
  }

  // 箭頭函式
  showArrowThis = () => {
    console.log('[showArrowThis] this ==>', this);
  }
}

const testClass = new TestClass("Class 測試");

console.log(`----- 測試傳統函式 -----`);
// 透過實例呼叫函式
console.log(`# 透過實例呼叫函式`);
testClass.showThis();  // [showThis] this ==> TestClass {name: 'Class 測試', showArrowThis: ƒ}

// 將函式取出使用簡易呼叫（Simple Call）
console.log(`# 將函式取出使用簡易呼叫`);
const showClassThis = testClass.showThis;
showClassThis();  // [showThis] this ==> undefined

console.log(``);

console.log(`----- 測試箭頭函式 -----`);
// 透過實例呼叫函式
console.log(`# 透過實例呼叫函式`);
testClass.showArrowThis();  // [showArrowThis] this ==> TestClass {name: 'Class 測試', showArrowThis: ƒ}

// 將函式取出使用簡易呼叫（Simple Call）
console.log(`# 將函式取出使用簡易呼叫`);
const showClassArrowThis = testClass.showArrowThis;
showClassArrowThis();  // [showArrowThis] this ==> TestClass {name: 'Class 測試', showArrowThis: ƒ}

console.log(``);



// ----------- 有趣的題目 -----------
// var name = "全域";

// function Girl(name) {
//   this.name = name;
//   // this.showName = function () {
//   //   console.log(this.name);
//   // };
//   this.showName = () => {
//     console.log(this.name);
//   };
// }

// const may = new Girl("May");
// may.showName(); // #1
// const showGirlName = may.showName;
// showGirlName(); // #2

// console.log(``);

// class Boy {
//   constructor(name) {
//     this.name = name;
//   }
//   // showName() {
//   //   console.log(this.name);
//   // }
//   showName = () => {
//     console.log(this.name);
//   }
// }

// const john = new Boy("John");
// john.showName();
// const showBoyName = john.showName;
// showBoyName();
