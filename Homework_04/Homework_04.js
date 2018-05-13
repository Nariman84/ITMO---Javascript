/*1.
Заданы два массива 
A = [ 12, 4, 3, 10, 1, 20 ]  
B = [-3, -7, -100, -33] 
необходимо их объединить 
в один массив C добавив 
массив B в конец(в начало) A. */

var A = [12, 4, 3, 10, 1, 20];
var B = [-3, -7, -100, -33];
var C1 = [];
var C2 = [];
//массив B в конце А:
C1 = A.concat(B);
//массив B в начале A:
C2 = B.concat(A);
alert(C1);
alert(C2);

/*2.
Одномерным массивом задана доска 3 на 3 
var area = 
[ null, null, null, null, null, null, null, null, null ]

Необходимо сформировать игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 

При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 

Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
*/
var area = [0, null, 1, null, 0, 0, 1, null, null];
var container = `<table border="1"><tr height = "50" align = "center">`;
	for(var i = 0; i < 3; i++) {
		if (area[i] === 0) {
			container += `<td width="50">O</td>`;
		} else if (area[i] === 1) {
			container += `<td width="50">X</td>`;
		} else if (area[i] === null) {
			container += `<td width="50"></td>`;
		}
	}
	container += `</tr>`;
	container += `<tr height = "50" align = "center">`;
	for(var i = 3; i < 6; i++) {
		if (area[i] === 0) {
			container += `<td>O</td>`;
		} else if (area[i] === 1) {
			container += `<td >X</td>`;
		} else if (area[i] === null) {
			container += `<td></td>`;
		}
	}
	container += `</tr>`;
	container += `<tr height = "50" align = "center">`;
	for(var i = 6; i < 9; i++) {
		if (area[i] === 0) {
			container += `<td>O</td>`;
		} else if (area[i] === 1) {
			container += `<td>X</td>`;
		} else if (area[i] === null) {
			container += `<td></td>`;
		}
	}
	container += `</tr></table>`;
	document.write(container);


/*3.
Задан массив  - [12,4,3,10,1,20]. 
Удалить из него наименьшее и наибольшее значение.*/

var arr = [12, 4, 3, 10, 1, 20];
var min = arr[0];
var max = arr[0];
for (i = 1; i < arr.length; i++) {
	if (arr[i] < min) {
		min = arr[i];
	}
}
for (i = 1; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i];
	}
}
console.log(max);
console.log(min);
function f(elem, index, arr) {
	return (elem > min && elem < max);
}
console.log(arr.filter(f));



/*4. Задан массив - [12,4,3,10,1,20]. 
Необходимо отсортировать его в порядке возрастания, 
при этом не использовать готовый метод sort 
и методы разобранные на занятии.
Снабдите комментариями каждую строку.*/

//Сортировка вставками (Insertion Sort)
var arr = [12, 4, 3, 10, 1, 20];        //Исходный неотсортированный массив.
for (i = 1; i < arr.length-1; i++) {    //в цикле по порядку перебираем 
                                        //элементы массива, начиная со
                                        //второго элемента (i = 1). Число 12 (i = 0) - первый
                                        //элемент неотсортированного массива становится первым элементом отсортированнного.
	var elem = arr[i];					//Переменная elem - число, которое перемещается
										//в отсортированную часть массива.
	var j = i;							//переменная j - индекс отсортированной части массива
	while (j > 0 && arr[j-1] > elem) {	//пока индекс j > 0 и первый элемент отсотрированного массива > elem,
		arr[j] = arr[j-1];				//присваиваем ко второму элементу первый (перемещаем элемент, который
										//больше переменной elem, на одну позицию вправо).
		j--;							//Обновляется счетчик, чтобы продолжить движение по отсотритрованной части массива,
										//если элемент (arr[j-1]) больше elem.
	}
	arr[j] = elem;						//вставляем переменную elem в положение j, если условие цикла While не выполняетя
}
console.log(arr)						//выводим отсортированный массив.