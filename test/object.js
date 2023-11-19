const obj1 = {
	台北: 2,
	高雄: 1,
	台中: 3,
};
console.log(obj1);

const ary1 = Object.entries(obj1);
console.log(ary1);

console.log(``);
console.log(``);


const obj2 = {
	台北: {
		count: 2,
		name: ['John', 'Mary']
	},
	高雄: {
		count: 1,
		name: ['Tom']
	},
	台中: {
		count: 3,
		name: ['Cherry', 'Luis', 'Meggi']
	},
};
console.log(obj2);

const ary2 = Object.entries(obj2);
console.log(ary2);

console.log(``);
console.log(``);


const obj3 = {
	台北: ['a', 2, 'ccc'],
	高雄: ['b', 1, true],
	台中: ['c', 3, false],
};
console.log(obj3);

const ary3 = Object.entries(obj3);
console.log(ary3);

