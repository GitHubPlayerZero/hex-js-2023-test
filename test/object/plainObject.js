console.log(`Object.prototype ==>`, Object.prototype);
console.log(``);

// 物件字面值
const obj1 = {
  name: 'obj1',
};

// 使用 Object 構造函式
const obj2 = new Object();
obj2.name = 'obj2';

// 使用 Object.create 並給入 Object 原型
const obj3 = Object.create(Object.prototype);
obj3.name = 'obj3';

// 使用 Object.create 並給入 null
const nullObj = Object.create(null);
nullObj.name = 'null obj';

// 使用 Object.create 並給入 Symbol
const symbolObj = Object.create(Symbol);
symbolObj.name = 'Symbol obj';

// 使用 Object.create 並給入 Date
const dateObj = Object.create(Date);
dateObj.name = 'Date obj';

// 使用 Object.create 並給入 Math
const mathObj = Object.create(Math);
mathObj.name = 'Math obj';

// 構造函式
function ConstructorFn () {
  this.name = `Constructor Function`;
}
const cf = new ConstructorFn();

// Class
class TestClass {
  constructor() {
    this.name = 'Test Class';
  }
}
const testClass = new TestClass();

// 日期物件
const date = new Date();

// 陣列
const ary = [];

// 函式
const fn = function () { };

const strObj = new String('String Object');

const testAry = [obj1, obj2, obj3, nullObj, symbolObj, dateObj, mathObj, cf, testClass, date, ary, fn, strObj, Math, true, "", 0, NaN, null, undefined];
testAry.forEach((item, index) => {
  console.log(`## ${index + 1} ==>`, item);
  console.log(`typeof ==>`, typeof item);

  try {
    console.log(`Object.getPrototypeOf ==>`, Object.getPrototypeOf(item));
    console.log(`與 Object.prototype 相等 ?`, Object.getPrototypeOf(item) === Object.prototype);
  }
  catch (error) {
    console.error(error);
  }

  console.log(`Object.prototype.toString ==>`, Object.prototype.toString(item));
  console.log(`Object.prototype.toString.call ==>`, Object.prototype.toString.call(item));
  console.log(``);
});
