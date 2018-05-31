/*1 Подключить стороннюю библиотеку для построения графиков.
Построить график функции y = f(x):
y = 5/x, при x>=1;
y = x*x – 4*x, при x < 1.
Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
Расчёт функции y = f(x) реализовать в виде отдельной функции.*/

/*function f(x) {
	if (x < 1)
		return x * x - 4 * x;
	else (x >= 1)
		return 5 / x;
};
var line = {
	x: [],
	y: [],
	type: 'scatter',
};
for (var i = -5; i <= 5; i += 0.01) {
	line.x.push(i);
	line.y.push(f(i));
};
var data = [line];
Plotly.newPlot('placeholder', data);*/

/*2 Подключить стороннюю библиотеку для юнит тестирования.
Написать несколько тестов для функции, рассчитывающей y = 1/x + sqrt(x).*/

function y(x) {
	let y = 1 / x + x ** 0.5;
	return y;
}
describe ('positive test', function() {
	let input_X = 25;
	let result_Y = 5.04;
	let msg = "Вывести результат вычисления y при x = " + input_X + ". Результат 5.04";
	it (msg, function() {
		var res = y(input_X);
		expect(res).toBe(5.04);
	});
});

describe ('Negative test_01', function() {
	let input_X = 0;
	let result_Y = Infinity;
	let msg = "Вывести результат вычисления y при x = " + input_X + ". Результат Infinity";
	it (msg, function() {
		var res = y(input_X);
		expect(res).toBe(Infinity);
	});
});

describe ('Negative test_02', function() {
	let input_X = -5;
	let result_Y = NaN;
	let msg = "Вывести результат вычисления y при x = " + input_X + ". Результат NaN";
	it (msg, function() {
		var res = y(input_X);
		expect(res).toEqual(NaN);
	});
});


/*3 Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
Библиотека должна обладать следующими методами:
- поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов переданного массива;
- создание копии (клонирование) переданного массива.*/