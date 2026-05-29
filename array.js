// Напишите функцию `sumArray`, которая принимает массив чисел
// и возвращает сумму всех элементов.
//
//     Для перебора используйте цикл `for`.
//
//     Пример:
// sumArray([1, 2, 3, 4]) // 10
// sumArray([-1, 5, 2])   // 6

function sumArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let elem = array[i];

        sum += Number(elem);
    }
    return sum;
}

