console.log(this);
console.log(``);

console.log(`====== 傳統函式單純呼叫與嚴格模式 ======`);
const showThis = function () {
  // "use strict";
  console.log(`this ==>`, this);
  console.log(`window ==>`, window);
  console.log(`this === window ?`, this === window);
};
showThis();
// 結果 1：
// this ==> 全域 window 物件
// window ==> 全域 window 物件
// this === window ? true

// 結果 2（使用嚴格模式）：
// this ==> undefined
// window ==> 全域 window 物件
// this === window ? false

console.log(``);

console.log(`====== 傳統函式與物件 ======`);
console.log(`---- 傳統函式放入物件中呼叫 ----`);
let obj = {
  name: '我是物件 obj',
  showThis,
  obj2: {
    name: '我是物件 obj2',
    showThis,
  },
};
console.log(`## [obj.showThis] ==>`);
obj.showThis();
// 結果:
// this ==> {name: '我是物件 obj', showThis: ƒ}
// window ==> 全域 window 物件
// this === window ? false

console.log(``);

console.log(`## [obj.obj2.showThis] ==>`);
obj.obj2.showThis();
// 結果:
// this ==> {name: '我是物件 obj2', showThis: ƒ}
// window ==> 全域 window 物件
// this === window ? false

console.log(``);

console.log(`---- 從物件中取出再直接呼叫 ----`);
const objShowThis = obj.showThis;
objShowThis();
// 結果：
// this ==> 全域 window 物件
// window ==> 全域 window 物件
// this === window ? true

console.log(``);

console.log(`====== 強制綁定 ======`);

obj = {
  name: '我是物件 obj',
};

console.log(`## [call] ==>`);
showThis.call(obj);
// 結果：
// this ==> {name: '我是物件 obj'}
// window ==> 全域 window 物件
// this === window ? false

console.log(``);

console.log(`## [apply] ==>`);
showThis.apply(obj);
// 結果：
// this ==> {name: '我是物件 obj'}
// window ==> 全域 window 物件
// this === window ? false

console.log(``);

console.log(`## [bind] ==>`);
const bindShowThis = showThis.bind(obj);
bindShowThis();
// 結果：
// this ==> {name: '我是物件 obj'}
// window ==> 全域 window 物件
// this === window ? false

console.log(``);

console.log(`====== 傳統函式單純呼叫 V.S. 放在物件中的差別 ======`);
/**
 * 說明：直接呼叫傳統函式時，其 this 為全域 window 物件；透過物件呼叫時，其 this 被綁定為此物件。
 */

const getThis = function () {
  return this;
};

const john = {
  name: 'John',
  getThis,
};

const may = {
  name: 'May',
  getThis,
};

console.log(`[getThis] ==>`, getThis());  // 結果：[getThis] ==> 全域 Window 物件
console.log(`[john -> getThis] ==>`, john.getThis()); // 結果：[john -> getThis] ==> john 物件
console.log(`[may -> getThis] ==>`, may.getThis()); // 結果：[may -> getThis] ==> may 物件

console.log(``);

console.log(`====== 搭配宣告方式的陷井 ======`);
/**
 * 說明：
 * 直接呼叫傳統函式時，其 this 為全域 window 物件。
 * var 宣告的變數會滲到到全域 window 物件，而 let、const 宣告的變數則不會。
 * 因此在全域 window 中只有 one 而沒有 two。
 */

var one = "one";
const two = "two";

const count = function () {
  console.log(`one ==>`, this.one);
  console.log(`two ==>`, this.two);
};

const counter = {
  one: 'one in Object',
  two: 'two in Object',
  count
};

console.log(`---- 呼叫物件裡的傳統函式 ----`);
counter.count();
// 結果：
// one ==> one in Object
// two ==> two in Object

console.log(``);

console.log(`---- 直接呼叫傳統函式 ----`);
count();
// 結果：
// one ==> one
// two ==> undefined

console.log(``);

console.log(`====== 事件監聽 ======`);

// 內部觸發的按鈕（傳統函式）
document.querySelector("#btnFn").addEventListener("click", function(event) {
  console.log(`# [使用傳統函式的事件監聽器] this ==>`, this); // # [使用傳統函式的事件監聽器] this ==> 此 button DOM 元素
  console.log(`this === event.currentTarget ?`, this === event.currentTarget);  // this === event.currentTarget ? true
  // console.log(`this === event.target ?`, this === event.target);
});

// 內部觸發的按鈕（箭頭函式）
document.querySelector("#btnArrowFn").addEventListener("click", (event) => {
  console.log(`# [使用箭頭函式的事件監聽器] this ==>`, this); // # [使用箭頭函式的事件監聽器] this ==> 全域 window 物件
  console.log(`event.currentTarget ==>`, event.currentTarget);
});

// 外層 div
document.querySelector("#divListenerTest").addEventListener("click", function(event) {
  console.log(`this ==>`, this);
  console.log(`event.target ==>`, event.target);
  console.log(`this === event.currentTarget ?`, this === event.currentTarget);
  console.log(`this === event.target ?`, this === event.target);
});

console.log(``);

console.log(`====== setTimeout 的回呼函式 ======`);

const callbackTest = {
  name: '小明',
  showTimeoutThis () {
    console.log(`[showTimeoutThis] this ==>`, this);
    setTimeout(function () {
      console.log(`傳統函式 setTimeout ==>`, this);
    }, 100);
  },
  showArrowTimeoutThis () {
    console.log(`[showArrowTimeoutThis] this ==>`, this);
    setTimeout(() => {
      console.log(`箭頭函式 setTimeout ==>`, this);
    }, 100);
  }
};

callbackTest.showTimeoutThis();
// 結果：
// [showTimeoutThis] this ==> {name: '小明', showTimeoutThis: ƒ, showArrowTimeoutThis: ƒ}
// 傳統函式 setTimeout ==> 全域 window 物件

console.log(``);

callbackTest.showArrowTimeoutThis();
// 結果：
// [showArrowTimeoutThis] this ==> {name: '小明', showTimeoutThis: ƒ, showArrowTimeoutThis: ƒ}
// 箭頭函式 setTimeout ==> {name: '小明', showTimeoutThis: ƒ, showArrowTimeoutThis: ƒ}

console.log(``);

// const callbackTest = {
//   name: '小明',
//   showThis () {
//     console.log(`[showThis] this ==>`, this);
    
//     setTimeout(() => {
//       console.log(`[showThis -> setTimeout] this ==>`, this);
//     }, 100);
//   },
// };

// callbackTest.showThis();
