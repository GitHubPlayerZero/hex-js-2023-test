const bindObj = {
  name: '我是用於顯性綁定的物件'
};

console.log(`===== 全域下的箭頭函式 =====`);
const showThis = () => {
  console.log(this);
};
showThis();  // 全域 window 物件

console.log(``);

console.log(`---- 透過顯性綁定呼叫 ----`);
console.log(`# call ==>`);
showThis.call(bindObj); // 全域 window 物件
console.log(`# apply ==>`);
showThis.apply(bindObj);  // 全域 window 物件
console.log(`# bind ==>`);
const showBindThis = showThis.bind(bindObj);
showBindThis(); // 全域 window 物件

console.log(``);

console.log(`===== 物件中的箭頭函式 =====`);
const obj = {
  name: '我是物件 obj',
  myThis: this,
  getThis: () => {
    return this;
  },
};

console.log(`## obj.getThis() ==>`, obj.getThis()); // 全域 window 物件
console.log(`## obj.myThis ==>`, obj.myThis);  // 全域 window 物件
console.log(obj.getThis() === obj.myThis); // true


console.log(``);

const john = {
  name: 'John'
};

function fn () {
  console.log(`[fn] this ==>`, this);

  const may = {
    name: 'may',
    myThis: this,
  };

  return may;
}

console.log(`## 1`);
console.log(`myThis ==>`, fn().myThis);
console.log(``);
console.log(`## 2`);
console.log(`myThis ==>`, fn.call(john).myThis);

console.log(``);

console.log(`===== 傳統函式中的箭頭函式 =====`);
function showFnArrowThis () {
  console.log(`[showFnArrowThis] this ==>`, this);
  (() => {
    console.log(`[showFnArrowThis 箭頭函式] this ==>`, this);
  })();
}

console.log(`---- 直接呼叫 ----`);
showFnArrowThis();
// 執行結果：
// [showFnArrowThis] this ==> 全域 window 物件
// [showFnArrowThis 箭頭函式] this ==> 全域 window 物件

console.log(``);

console.log(`---- 透過物件呼叫 ----`);
const fnArrowObj = {
  name: '存放傳統函式及其箭頭函式的物件',
  showFnArrowThis,
};
fnArrowObj.showFnArrowThis();
// 執行結果：
// [showFnArrowThis] this ==> {name: '存放傳統函式及其箭頭函式的物件', showFnArrowThis: ƒ}
// [showFnArrowThis 箭頭函式] this ==> {name: '存放傳統函式及其箭頭函式的物件', showFnArrowThis: ƒ}

console.log(``);

console.log(`---- 透過顯性綁定呼叫 ----`);
showFnArrowThis.call(bindObj);
// 執行結果：
// [showFnArrowThis] this ==> {name: '我是用於顯性綁定的物件'}
// [showFnArrowThis 箭頭函式] this ==> {name: '我是用於顯性綁定的物件'}


console.log(``);
