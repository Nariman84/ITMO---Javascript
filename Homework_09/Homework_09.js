/*1. Даны несколько div элементов на html.
По первому нажатию на каждый div 
он перекрашивается зеленым цветом, 
при повторном нажатии перекрашивается 
обратно и так далее каждый клик 
происходит чередование цвета.*/

function changeColor (id){
	var el_div = document.getElementById(id);
	if (el_div.style.backgroundColor != 'green') {
		el_div.style.backgroundColor = 'green';
	} else {
		el_div.style.backgroundColor = '#00bcd4';
	}
}


/*2. Реализовать счётчик нажатий на 
кнопку: Дана кнопка внутри неё 
записана цифра. При клике на 
кнопку – её значение должно 
увеличиваться на единицу.*/

var i = 0;
function counter() {
	var button = document.getElementById('button');
	i++;
	button.innerText = 'Меня нажали ' + i + ' раз(-а)';
}