/*1. Создать функцию которая выводит время 
в html и обновляет значения каждую секунду. 
Время выводить в формате чч:мм:cc, при этом 
часы, минуты и секунды отобразить разными цветами.*/

var parent = document.createElement('h1');
document.body.appendChild(parent);
parent.style.fontSize = '100px';

var hours = document.createElement('span');
parent.appendChild(hours);

var min = document.createElement('span');
parent.appendChild(min);

var sec = document.createElement('span');
parent.appendChild(sec);

function getTime() {
	var clock = new Date();
	var myHours = clock.getHours();
	var myMinutes = clock.getMinutes();
	var mySeconds = clock.getSeconds();
	if (myHours <= 9) myHours = "0" + myHours;
	if (myMinutes <= 9) myMinutes = "0" + myMinutes;
	if (mySeconds <= 9) mySeconds = "0" + mySeconds;

	hours.innerText = myHours + ':';
	min.innerText = myMinutes + ':';
	sec.innerText = mySeconds;

	hours.style.color = '#' + (Math.floor(Math.random() * 256) + 1).toString(16) +
 (Math.floor(Math.random() * 256) + 1).toString(16) + (Math.floor(Math.random() * 256) + 1).toString(16);
 	min.style.color = '#' + (Math.floor(Math.random() * 256) + 1).toString(16) +
 (Math.floor(Math.random() * 256) + 1).toString(16) + (Math.floor(Math.random() * 256) + 1).toString(16);
 	sec.style.color = '#' + (Math.floor(Math.random() * 256) + 1).toString(16) +
 (Math.floor(Math.random() * 256) + 1).toString(16) + (Math.floor(Math.random() * 256) + 1).toString(16);
	setTimeout('getTime()', 1000);
}
window.onload = getTime();



/*2. Создать объект «Товар» включающий:
- свойства, такие как фото, артикул, 
описание и т.п.;
- метод, которому при вызове передается 
id пустого div элемента и в этот html 
элемент данный метод создаст и внесёт 
все необходимые html элементы, стили, 
и содержание для отображения 
всей информации хранящихся в свойствах 
объекта о данном товаре. Дизайн оформления 
информации в html о товаре – 
это ваше творчество.*/

var div = document.createElement('div');
document.body.appendChild(div);
div.id = 'prod';
var product = {
	photo: "http://www.zveruga.net/upload/medialibrary/586/tovary-dlya-koshek.jpg",
	name: 'Товар',
	artikul: 'арт.123456',
	description: "Какое-то описание товара",
	makeProd: function(id) {
		var id = document.getElementById('prod');
		id.innerHTML = `<h2>${this.name}</h2><div><img src=${this.photo} width = "200px"></div><div>${this.artikul}</div><div>${this.description}</div>`;

	}
}

product.makeProd('prod');


/*3. Создать светофор (красный, желтый, 
зелёный). Переключать цвет у светофора 
через каждые 2 сек сверху вниз и снизу вверх. */

	var elem = document.getElementById('svetofor');
	for (var i = 0; i < 3; i++) {
		var div = document.createElement('div');
		elem.appendChild(div);
		div.id = 'circle';
	}
	elem.children[0].style.background = "red";
	elem.children[1].style.background = "yellow";
	elem.children[2].style.background = "green";

function traffic_light(){
	setTimeout (function traffic_light_stop() {
			elem.children[0].style.opacity = '1';
		}, 2000);
	setTimeout (function traffic_light_stop() {
			elem.children[0].style.opacity = '0.2';
		}, 4000);
	setTimeout (function traffic_light_ready() {
			elem.children[1].style.opacity = '1';
		}, 4000);
	setTimeout (function traffic_light_ready() {
			elem.children[1].style.opacity = '0.2';
		}, 6000);
	setTimeout (function traffic_light_go() {
			elem.children[2].style.opacity = '1';
		}, 6000);
	setTimeout (function traffic_light_go() {
			elem.children[2].style.opacity = '0.2';
		}, 8000);
	setTimeout (function traffic_light_ready() {
			elem.children[1].style.opacity = '1';
		}, 8000);
	setTimeout (function traffic_light_ready() {
			elem.children[1].style.opacity = '0.2';
		}, 10000);
};
setInterval(traffic_light, 8000);
traffic_light();
