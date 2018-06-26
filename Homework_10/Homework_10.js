/*1. Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.*/

function Tovar(nameProd, priceProd) {
	this.name = nameProd;
	this.price = priceProd;
}

function Basket () {
	this._arrProduct = [];
	this._amountProd = 0;
	this._sumProd = 0;

	this.addProd = function(addP) {
		this._arrProduct.push(addP); //добавление товара в корзину (массив);
		this._amountProd++;	//подсчет количества добавленного товара;
		this._sumProd += addP.price; //общая сумма;
	}

	this.getSumProd = function() {
		return 'Количество добавленного товара: ' + this._amountProd;
	}

	this.getAmountProd = function() {
		return 'Сумма товаров: ' + this._sumProd;
	}
}

var prod1 = new Tovar('guitar', 100);
var prod2 = new Tovar('srtings', 500);
var prod3 = new Tovar('srtings', 300);
var basket = new Basket();
basket.addProd(prod1);
basket.addProd(prod2);
basket.addProd(prod3);

console.log(basket.getSumProd());
console.log(basket.getAmountProd());



/*2. Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства отнаследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке 
вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
Интересы: музыка, программирование. 
Обучается в ИТМО.»*/

function Man (name, age, sex, ...hobby) {
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.hobby = hobby;

	this.toSrting = function() {
		return `Человек: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.hobby}.`
	}
}

function Student (name, age, sex, university, ...hobby) {
	Man.call(this, name, age, sex, ...hobby);
	this.university = university;

	this.toSrting = function() {
		return `Студент: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.hobby}. Обучается в ${this.university}`;
	}
}

var man = new Man('Иван', 25, 'м', 'Музыка', 'программирование');
var man1 = new Man('Саша', 20, 'м', 'Музыка', 'программирование', 'ретроавтомобили');
var stud = new Student('Маша', 19, 'ж', 'ИТМО', 'Музыка', 'программирование', 'шоппинг');
console.log(man.toSrting());
console.log(man1.toSrting());
console.log(stud.toSrting());
