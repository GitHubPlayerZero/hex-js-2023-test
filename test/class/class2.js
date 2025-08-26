// https://codepen.io/codepenplayer/pen/JodBbPW

/* 父類別 */
class Father {
  #name = "大杰"; // 私有欄位
  static #age = 63; // 靜態私有欄位 (只能由靜態方法存取)
  
  // 顯示非靜態欄位值
  showName() {
    console.dir(this);
    console.log("#fatherName ==>", this.#name);
  }
  
  // 顯示靜態欄位值 (使用 this)
  static showAge() {
    console.dir(this);
    console.log("#fatherAge ==>", this.#age);
  }
  
  // 顯示靜態欄位值 (直接使用類別)
  static showAge2() {
    console.dir(this);
    console.log("#fatherAge ==>", Father.#age);
  }
}

/* 子類別 */
class Child extends Father {
  // 顯示父類別非靜態欄位值
  showFatherName() {
    this.showName();
  }
  
  // 顯示父類別靜態欄位值 (父類別使用 this)
  static showFatherAge() {
    this.showAge();
  }
  
  // 顯示父類別靜態欄位值 (父類別直接使用類別)
  static showFatherAge2() {
    this.showAge2();
  }
}

/* 使用父類別 */
// 使用實例
const father = new Father();
father.showName();
console.log(``);

// 直接使用類別
Father.showAge();
console.log(``);
Father.showAge2();
console.log(``);

console.log(``);

/* 使用子類別 */
// 使用實例
const child = new Child();
child.showFatherName();
console.log(``);

// 直接使用類別
try {
  Child.showFatherAge();
}
catch (error) {
  console.error(error);
}
console.log(``);

Child.showFatherAge2();
