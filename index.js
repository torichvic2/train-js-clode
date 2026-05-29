// Функция removeElement
// Напишите функцию removeElement, которая принимает массив и элемент, а затем возвращает новый массив без указанного элемента. Для перебора элементов используйте цикл for.
//
// Входные данные:
//
//     array: Массив, из которого нужно удалить элемент. Массив может содержать любые типы данных.
//     element: Элемент, который нужно удалить из массива.
//     Выходные данные:
//
//     Новый массив, который не содержит указанный элемент.
const array = ['a', 'b', 'c', 1, 2, 3];

function removeElement(array, element) {

    let newArr = [];

    for(let i = 0; i < array.length; i++) {
        let elem = array[i];
        if(element !== elem) {
        newArr.push(elem);
        }
}
    return newArr;
}

let result = removeElement(array, 'a');
console.log(result);