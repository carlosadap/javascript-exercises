function add (num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function sum (array) {
	let sum = array.reduce((sum, ele) => sum + ele, 0);
	return sum
}

function multiply (array) {
	let product = array.reduce((sum, ele) => sum * ele, 1);
	return product;
}

function power(num, power) {
	return num**power;
}

function factorial(num) {
	if (num === 0) {
		return 1
	}
	return num*factorial(num-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}