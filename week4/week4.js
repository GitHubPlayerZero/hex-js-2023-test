/*
	BMI 公式：體重 (公斤) / 身高 (公尺) 平方
	小數：有的網站是取小數點後 1 位無條件捨去，有的是無條件進位，這邊決定取到小數點後 2 位四捨五入。
	
	條件：
	體重過輕：BMI < 18.5
	正常範圍：18.5 ≦ BMI ＜ 24
	過重：24 ≦ BMI ＜ 27
	輕度肥胖：27 ≦ BMI ＜ 30
	中度肥胖：30 ≦ BMI ＜ 35
	重度肥胖：BMI ≧ 35
*/

console.clear();

const bmiStatesData = {
	"overThin": {
		"state": "過輕",
		"color": "藍色"
	},
	"normal": {
		"state": "正常",
		"color": "紅色"
	},
	"overWeight": {
		"state": "過重",
		"color": "澄色"
	},
	"mildFat": {
		"state": "輕度肥胖",
		"color": "黃色"
	},
	"moderateFat": {
		"state": "中度肥胖",
		"color": "黑色"
	},
	"severeFat": {
		"state": "重度肥胖",
		"color": "綠色"
	},
}

let bmiHistoryData = [];

// 檢查是否為有效數字：可以接受大於 1 的數值型態以及內容為數值的字串型態
// const isNumber = num => (typeof num === 'number' || num instanceof Number) && !Number.isNaN(num) && num !== Infinity;
const isValidNumber = num => num > 1 && num < Infinity;

// 計算 BMI
const calculateBmi = (height, weight) => (weight / ((height / 100) ** 2)).toFixed(2);

function processBmi(height, weight)
{
	if (!(isValidNumber(height) && isValidNumber(weight))) {
		throw "您的數值輸入錯誤，請重新輸入";
	}
	
	const bmi = calculateBmi(height, weight);
	let stateInfo;
	
	if (bmi < 18.5) {
		stateInfo = bmiStatesData.overThin;
	}
	else if (bmi < 24) {
		stateInfo = bmiStatesData.normal;
	}
	else if (bmi < 27) {
		stateInfo = bmiStatesData.overWeight;
	}
	else if (bmi < 30) {
		stateInfo = bmiStatesData.mildFat;
	}
	else if (bmi < 35) {
		stateInfo = bmiStatesData.moderateFat;
	}
	else {
		stateInfo = bmiStatesData.severeFat;
	}
	
	bmiHistoryData.push({
		height, weight, bmi, stateInfo
	});
	
	return stateInfo;
}


function printBmi(height, weight)
{
	try {
		const stateData = processBmi(height, weight);
		console.log(`您的體重${stateData.state}，健康指數為${stateData.color}`);
	}
	catch (e) {
		console.log(e);
	}
}

function showHistoryData() {
	const count = bmiHistoryData.length;
	const latestData = bmiHistoryData[count - 1];
	console.log(`您總共計算 ${count} 次 BMI 紀錄，最後一次 BMI 指數為 ${latestData.bmi}，體重${latestData.stateInfo.state}！健康指數為${latestData.stateInfo.color}！`);
}



printBmi(178, 20);	// 6.31 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi('178', '20');	// 6.31 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70);	// 22.0 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85);	// 26.8 印出 console.log 文字為「您的體重過重，健康指數為澄色」
showHistoryData();	// 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」
printBmi(178, 90);	// 28.4 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
printBmi(178, 110);	// 34.7 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
printBmi(178, 130);	// 41.0 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
printBmi("身高","體重");	// 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
showHistoryData();
