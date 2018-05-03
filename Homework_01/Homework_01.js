//Задача 1
//Из трех данных чисел выбрать наименьшее.

alert("Задача №1 - Из трех данных чисел выбрать наименьшее")
var num1 = parseInt(prompt("Введите первое число"));
var num2 = parseInt(prompt("Введите второе число"));
var num3 = parseInt(prompt("Введите третье число"));
alert('Вы ввели 3 числа: ' + num1 + '; ' + num2 + '; ' + num3)
if (num1 < num2 && num1 < num3) {
	alert(num1 + " - наименьшее число");
} else if (num2 < num1 && num2 < num3) {
	alert(num2 + " - наименьшее число");
} else {
	alert(num3 + " - наименьшее число");
}

//Задача 2
//Дано целое число, лежащее в диапазоне от -999 до 999. 
//Вывести строку - словесное описание данного числа вида 
//"отрицательное двузначное число", 
//"нулевое число", 
//"положительное однозначное число" и т.д.

alert("Задача №2")
var x = parseInt(prompt("Введите любое целое число от -999 до 999"));
if (x >= -999 && x <= -100) {
	alert("Вы ввели " + x + " - отрицательное трехзначное число");
} else if (x > -100 && x <= -10) {
	alert("Вы ввели " + x + " - отрицательное двузначное число");
} else if (x >= -9 && x <= -1) {
	alert("Вы ввели " + x + " - отрицательное однозначное число");
} else if (x >= 1 && x <= 9) {
	alert("Вы ввели " + x + " - положительное однозначное число");
} else if (x >= 10 && x <= 99) {
	alert("Вы ввели " + x + " - положительное двузначное число");
} else if (x >= 100 && x <= 999) {
	alert("Вы ввели " + x + " - положительное трехзначное число");
} else if (x === 0) {
	alert("Вы ввели " + x + " - нулевое число");
} else if (x > 999 || x < -999) {
	alert('В след.раз внимательно читайте условие, прежде, чем вводить число!');
}

//Задача 3
//Дано целое число в диапазоне 0 - 9. 
//Вывести строку - название соответствующей цифры на русском языке 
//(0 - "ноль", 1 - "один", 2 - "два", ...)

alert("Задача №3")
var y = parseInt(prompt("Введите целое число в диапазоне 0-9"));
if (y === 0) {
	alert("ноль");
} else if (y === 1) {
	alert("один");
} else if (y === 2) {
	alert("два");
} else if (y === 3) {
	alert("три");
} else if (y === 4) {
	alert("четыре");
} else if (y === 5) {
	alert("пять");
} else if (y === 6) {
	alert("шесть");
} else if (y === 7) {
	alert("семь");
} else if (y === 8) {
	alert("восемь");
} else if (y === 9) {
	alert("девять");
} else {
	alert("данного числа нет в заданном диапазоне")
}

//Задача 4

//Дано целое число в диапазоне 1 - 5. 
//Вывести строку - словесное описание соответствующей оценки 
//(1 - "плохо", 2 - "неудовлетворительно", 3 - "удовлетворительно", 
//4 - "хорошо", 5 - "отлично").

alert("Задача №4")
var rating = parseInt(prompt("Поставте оценку по 5-балльной шкале - от 1 до 5"));
if (rating === 1) {
	alert("плохо");
} else if (rating === 2) {
	alert("неудовлетворительно");
} else if (rating === 3) {
	alert("удовлетворительно");
} else if (rating === 4) {
	alert("хорошо");
} else if (rating === 5) {
	alert("отлично");
} else {
	alert('Неверная оценка')
}

//Задача 5

//Проверить истинность высказывания: 

//"Среди трех данных целых чисел есть хоть бы одна пара совпадающих".

//Требуется вывести логическое значение True, если приведенное высказывание для предложенных исходных 
//данных является истинным, и значение False в противном случае.

alert("Задача №5 - Среди трех данных целых чисел есть хоть бы одна пара совпадающих")
var a = parseInt(prompt("Введите первое число"));
var b = parseInt(prompt("Введите второе число"));
var c = parseInt(prompt("Введите третье число"));
if (a === b || b === c || a === c) {
	alert('True')
} else {
	alert('False')
}