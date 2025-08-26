class Father1 {
  #fatherName = "王大杰";
  static #fatherAge = 50;
  static fatherHello = "father say hi!";
  
  constructor() {}
  
  #getMyName() {
    return this.#fatherName;
  }
  getFatherName() {
    return this.#getMyName();
  }
  
  #setMyName(name) {
    this.#fatherName = name;
  }
  setFatherName(name) {
    this.#setMyName(name);
  }
  
  getMyAge() {
    return Father1.#fatherAge;
  }
  
  // 非 static 的方法若使用到 static 的欄位，必須直接用 class 名稱去取得欄位
  sayMyHi() {
    return Father1.fatherHello;
    // return this.fatherHello; // 使用 this 取得欄位為 undefined
  }
  // 若方法為 static，就可以使用 this 去取得欄位
  static sayStaticHi() {
    return this.fatherHello;
    // return Father.fatherHello; // 也仍然可以使用 class 名稱去取得欄位
  }
}

class Child1 extends Father1 {
  constructor() {
    super();
  }
  
  getName() {
    return this.getFatherName();
  }
  
  setName(name) {
    this.setFatherName(name);
  }
  
  getAge() {
    return this.getMyAge();
  }
  
  static sayHi() {
    return this.fatherHello;
  }
}


const father = new Father1();
console.log(`father name ==>`, father.getFatherName());
father.setFatherName("王杰");
console.log(`father name ==>`, father.getFatherName());
console.log(`father my age ==>`, father.getMyAge());
console.log(`father say my hi ==>`, father.sayMyHi());
console.log(`father say static hi ==>`, Father1.sayStaticHi());

console.log(``);

const child = new Child1();
console.log(`child get father name ==>`, child.getName());
child.setName("王阿杰");
console.log(`child get father name ==>`, child.getName());
console.log(`father my age ==>`, child.getMyAge());
console.log(`child getAge ==>`, child.getAge());
console.log(`child sayHi ==>`, Child1.sayHi());