console.log(`====== 構造函式 (Constructor Function) ======`);

function TestFn (name) {
  this.name = name;
  this.myThis = this;
}

const testFn = new TestFn("構造函式測試");
console.log(`myThis ==>`, testFn.myThis);
// 結果：myThis ==> TestFn {name: '構造函式測試', myThis: TestFn}

console.log(``);

console.log(`====== Class ======`);

class TestClass {
  myThis = this;

  constructor(name) {
    this.name = name;
  }
}

const testClass1 = new TestClass("Class 測試 1");
console.log(`#1 testClass1.myThis ==>`, testClass1.myThis);
const testClass2 = new TestClass("Class 測試 2");
console.log(`#2 testClass2.myThis ==>`, testClass2.myThis);
const testClass3 = new TestClass("Class 測試 3");
console.log(`#3 testClass3.myThis ==>`, testClass3.myThis);
// 結果：
// #1 testClass1.myThis ==> TestClass {myThis: TestClass, name: 'Class 測試 1'}
// #2 testClass2.myThis ==> TestClass {myThis: TestClass, name: 'Class 測試 2'}
// #3 testClass3.myThis ==> TestClass {myThis: TestClass, name: 'Class 測試 3'}

console.log(``);
