/* 閉包 */
export function store (name, init)
{
	let money = init;
	
	return {
		increase (val) {
			console.log(`${name} 存入 ${val}`);
			money += val;
		},
		getMoney () {
			return money;
		},
		showMoney () {
			console.log(`${name} 的存款有 ${money}`);
		},
		getName () {
			return name;
		}
	};
}



/* 函式建構子 */
export function Dog(color, name) {
	this.color = color;
	this.name = name;
}
Dog.prototype.walk = function () {
	console.log(`${this.name} 走路`);
};



/* Class */
export class Store
{
	constructor (name, money) {
		this.name = name;
		this.money = money;
	}
	
	increase (val) {
		console.log(`${this.name} 存入 ${val}`);
		this.money += val;
	}
	
	showMoney () {
		console.log(`${this.name} 的存款有 ${this.money}`);
	}
}
