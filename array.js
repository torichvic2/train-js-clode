// Задача 1: сумма чисел в массиве
// Напишите функцию `sumArray`, которая принимает массив чисел
// и возвращает сумму всех элементов.
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
console.log(sumArray([1, 2, 3]) );
/*
Задача 2: максимум в массиве

Напишите функцию `findMax`, которая принимает массив чисел
и возвращает самое большое число.
Используйте цикл `for`.

Примеры:
findMax([1, 5, 2, 9, 3]) // 9
findMax([-10, -3, -7])   // -3
findMax([4])             // 4
*/

function findMax(array) {
    let maxElem = array[0];

    for (let i = 1; i < array.length; i++) {
        let currentElem = array[i];

        if (currentElem > maxElem){
            maxElem = currentElem;
        }
    }
    return maxElem;
}

/*
Задача 3: минимум в массиве

Напишите функцию `findMin`, которая принимает массив чисел
и возвращает самое маленькое число.

Используйте цикл `for`.

Примеры:
findMin([1, 5, 2, 9, 3]) // 1
findMin([-10, -3, -7])   // -10
findMin([4])             // 4
*/

function findMin(arr) {
    let minNum = arr[0];

    for(let i = 1; i < arr.length; i++) {
        let currentElem = arr[i];

        if (currentElem < minNum) {
            minNum = currentElem;
        }
    }
    return minNum;
}

/*
Задача 4: количество положительных чисел

Напишите функцию `countPositive`, которая принимает массив чисел
и возвращает количество положительных чисел в массиве.

Положительные числа — это числа больше 0.

Используйте цикл `for`.

Примеры:
countPositive([1, -2, 3, 0, 5]) // 3
countPositive([-1, -2, 0])      // 0
countPositive([4, 7, 9])        // 3
*/

function countPositive(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];

        if (elem > 0) {
            count++;
        }
    }
    return count;
}

/*
Задача 5: проверка наличия элемента

Напишите функцию `includesElement`, которая принимает массив и элемент,
а затем возвращает `true`, если элемент есть в массиве,
и `false`, если элемента нет.

Используйте цикл `for`.

Примеры:
includesElement([1, 2, 3], 2)      // true
includesElement([1, 2, 3], 5)      // false
includesElement(['a', 'b'], 'b')   // true
*/

function includesElement(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];

        if (el === elem) {
            return true;
        }
    }
    return false;
}

/*
Задача 6: индекс элемента

Напишите функцию `findIndex`, которая принимает массив и элемент,
а затем возвращает индекс этого элемента в массиве.

Если элемента нет, функция должна вернуть -1.

Используйте цикл `for`.

Примеры:
findIndex([10, 20, 30], 20)      // 1
findIndex([10, 20, 30], 50)      // -1
findIndex(['a', 'b', 'c'], 'c')  // 2
*/

function findIndex(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        let currEl = arr[i];

        if (currEl === el) {
            return i;
        }
    }
    return -1;
}

/*
Задача 7: только чётные числа

Напишите функцию `filterEven`, которая принимает массив чисел
и возвращает новый массив, содержащий только чётные числа.

Используйте цикл `for`.

Примеры:
filterEven([1, 2, 3, 4, 5, 6]) // [2, 4, 6]
filterEven([1, 3, 5])          // []
filterEven([0, -2, 7, 8])      // [0, -2, 8]
*/

function filterEven(arr) {
    let evenArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num % 2 === 0) {
            evenArr.push(num);
        }
    }
    return evenArr;
}

/*
Задача 8: только нечётные числа

Напишите функцию `filterOdd`, которая принимает массив чисел
и возвращает новый массив, содержащий только нечётные числа.

Используйте цикл `for`.

Примеры:
filterOdd([1, 2, 3, 4, 5, 6]) // [1, 3, 5]
filterOdd([2, 4, 6])          // []
filterOdd([0, -3, 7, 8])      // [-3, 7]
*/

function filterOdd(arr) {
    let oddArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num % 2 !== 0) {
            oddArr.push(num);
        }
    }
    return oddArr;
}


/*
Задача 9: числа больше заданного значения

Напишите функцию `filterGreaterThan`, которая принимает массив чисел
и число `n`.

Функция должна вернуть новый массив, содержащий только числа,
которые больше `n`.

Используйте цикл `for`.

Примеры:
filterGreaterThan([1, 5, 10, 3], 4)    // [5, 10]
filterGreaterThan([-2, 0, 7, 8], 0)    // [7, 8]
filterGreaterThan([1, 2, 3], 10)       // []
*/

function filterGreaterThan(arr, n) {
    let numsGreaterThanN = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num > n) {
            numsGreaterThanN.push(num);
        }
    }
    return numsGreaterThanN;
}


/*
Задача 10: строки длиннее заданного значения

Напишите функцию `filterLongStrings`, которая принимает массив строк
и число `n`.

Функция должна вернуть новый массив, содержащий только строки,
длина которых больше `n`.

Используйте цикл `for`.

Примеры:
filterLongStrings(['cat', 'apple', 'hi', 'banana'], 3) // ['apple', 'banana']
filterLongStrings(['a', 'bb', 'ccc'], 2)               // ['ccc']
filterLongStrings(['js', 'css'], 5)                    // []
*/

function filterLongStrings(arr, n) {
    let stringsLongerThanN = [];

    for (let i = 0; i < arr.length; i++) {
        let currString = arr[i];

        if (currString.length > n) {
            stringsLongerThanN.push(currString);
        }
    }
    return stringsLongerThanN;
}


/*
Задача 11: умножить все числа на 2

Напишите функцию `multiplyByTwo`, которая принимает массив чисел
и возвращает новый массив, где каждое число умножено на 2.

Исходный массив изменять не нужно.

Используйте цикл `for`.

Примеры:
multiplyByTwo([1, 2, 3])       // [2, 4, 6]
multiplyByTwo([-1, 0, 5])      // [-2, 0, 10]
multiplyByTwo([])              // []
*/

function multiplyByTwo(arr) {
    let arrOfMultiplyByTwo = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        arrOfMultiplyByTwo.push(num * 2);
    }
    return arrOfMultiplyByTwo;
}


/*
Задача 12: длины строк

Напишите функцию `getStringLengths`, которая принимает массив строк
и возвращает новый массив с длинами этих строк.

Используйте цикл `for`.

Примеры:
getStringLengths(['cat', 'apple', 'hi']) // [3, 5, 2]
getStringLengths(['', 'js'])             // [0, 2]
getStringLengths([])                     // []
*/

function getStringLengths(arr) {
    let arrStringLengths = [];

    for (let i = 0; i < arr.length; i++) {
        let currStringLength = arr[i].length;
        arrStringLengths.push(currStringLength);
    }
    return arrStringLengths;
}

/*
Задача 13: заменить отрицательные числа на 0

Напишите функцию `replaceNegativeWithZero`, которая принимает массив чисел
и возвращает новый массив, где все отрицательные числа заменены на 0,
а остальные числа остаются без изменений.

Исходный массив изменять не нужно.

Используйте цикл `for`.

Примеры:
replaceNegativeWithZero([1, -2, 3, -4]) // [1, 0, 3, 0]
replaceNegativeWithZero([-1, -5, 0])    // [0, 0, 0]
replaceNegativeWithZero([2, 4, 6])      // [2, 4, 6]
*/

function replaceNegativeWithZero (arr) {
    let replacedNegativeWithZeroArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num >= 0) {
        replacedNegativeWithZeroArr.push(num);
        } else {
            replacedNegativeWithZeroArr.push(0);
        }
    }
    return replacedNegativeWithZeroArr;
}


/*
Задача 14: массив квадратов

Напишите функцию `squareNumbers`, которая принимает массив чисел
и возвращает новый массив, где каждое число возведено в квадрат.

Исходный массив изменять не нужно.

Используйте цикл `for`.

Примеры:
squareNumbers([1, 2, 3])       // [1, 4, 9]
squareNumbers([-2, 0, 5])      // [4, 0, 25]
squareNumbers([])              // []
*/

function squareNumbers(arr) {
    let squareNumbersArr = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        squareNumbersArr.push(el ** 2);
    }
    return squareNumbersArr;
}


/*
Задача 15: количество повторений элемента

Напишите функцию `countOccurrences`, которая принимает массив и элемент,
а затем возвращает, сколько раз этот элемент встречается в массиве.

Используйте цикл `for`.

Примеры:
countOccurrences([1, 2, 2, 3, 2], 2)       // 3
countOccurrences(['a', 'b', 'a'], 'a')     // 2
countOccurrences([true, false, true], true) // 2
countOccurrences([1, 2, 3], 5)             // 0
*/

function countOccurrences(arr, el) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let currElem = arr[i];

        if (el === currElem) {
            count += 1;
        }
    }
    return count;
}

/*
Задача 16: уникальные элементы

Напишите функцию `findUniqueElements`, которая принимает массив
и возвращает новый массив, содержащий только уникальные элементы
из исходного массива.

Порядок элементов должен сохраниться.

Используйте цикл `for`.
Можно использовать свою функцию `includesElement`.

Примеры:
findUniqueElements([1, 2, 3, 2, 1, 4]) // [1, 2, 3, 4]
findUniqueElements(['a', 'b', 'a'])    // ['a', 'b']
findUniqueElements([true, true, false]) // [true, false]
*/

function findUniqueElements(arr) {
    let uniqueElementsArr = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        if(includesElement(uniqueElementsArr, el) === false) {
            uniqueElementsArr.push(el);
        }
    }
    return uniqueElementsArr;
}

/*
Задача 17: объединить два массива

Напишите функцию `mergeArrays`, которая принимает два массива
и возвращает новый массив, содержащий сначала все элементы первого массива,
а потом все элементы второго массива.

Используйте циклы `for`.
Не используйте `concat`.

Примеры:
mergeArrays([1, 2], [3, 4])          // [1, 2, 3, 4]
mergeArrays(['a'], ['b', 'c'])       // ['a', 'b', 'c']
mergeArrays([], [1, 2])              // [1, 2]
*/

function mergeArrays (arr1, arr2) {
    let twoArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let elem = arr1[i];
        twoArr.push(elem);
    }

    for (let j = 0; j < arr2.length; j++) {
        let elem = arr2[j];
        twoArr.push(elem);
    }
    return twoArr;
}


/*
Задача 18: объединить два массива без дублей

Напишите функцию `mergeUniqueArrays`, которая принимает два массива
и возвращает новый массив, содержащий элементы из обоих массивов,
но без повторений.

Порядок должен сохраниться: сначала уникальные элементы из первого массива,
потом уникальные элементы из второго массива, которых ещё нет в результате.

Используйте циклы `for`.
Можно использовать `includesElement`.

Примеры:
mergeUniqueArrays([1, 2, 3], [3, 4, 5])     // [1, 2, 3, 4, 5]
mergeUniqueArrays(['a', 'b'], ['b', 'c'])   // ['a', 'b', 'c']
mergeUniqueArrays([1, 1, 2], [2, 3, 3])     // [1, 2, 3]
*/

function mergeUniqueArrays (arr1, arr2) {
    let uniqueArrs = [];

    for (let i = 0; i < arr1.length; i++) {
        let el = arr1[i];
        if (!includesElement(uniqueArrs, el) ) {
            uniqueArrs.push(el);
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        let el = arr2[j];

        if (!includesElement(uniqueArrs, el) ) {
            uniqueArrs.push(el);
        }
    }
    return uniqueArrs;
}


/*
Задача 19: найти дубликаты

Напишите функцию `findDuplicates`, которая принимает массив
и возвращает новый массив с элементами, которые встречаются больше одного раза.

Каждый дубликат должен попасть в результат только один раз.
Порядок должен сохраниться по первому повторному появлению.

Используйте циклы `for`.
Можно использовать `includesElement`.

Примеры:
findDuplicates([1, 2, 3, 2, 1, 4])      // [2, 1]
findDuplicates(['a', 'b', 'a', 'c', 'b']) // ['a', 'b']
findDuplicates([1, 2, 3])               // []
*/

function findDuplicates (arr) {
    let seen = [];
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        if (!includesElement(seen, el) ) {
            seen.push(el);
        } else if (!includesElement(duplicates, el)) {
            duplicates.push(el);
        }
    }
    return duplicates;
}

/*
Задача 20: общие элементы двух массивов

Напишите функцию `findCommonElements`, которая принимает два массива
и возвращает новый массив с элементами, которые есть и в первом,
и во втором массиве.

Каждый общий элемент должен попасть в результат только один раз.
Порядок должен сохраниться по первому массиву.

Используйте циклы `for`.
Можно использовать `includesElement`.

Примеры:
findCommonElements([1, 2, 3], [2, 3, 4])        // [2, 3]
findCommonElements(['a', 'b', 'c'], ['b', 'd']) // ['b']
findCommonElements([1, 1, 2], [1, 2, 2])        // [1, 2]
*/

function findCommonElements (arr1, arr2) {
    let commonArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            let el2 = arr2[j];

            if (el1 === el2 && !includesElement(commonArr, el1) ) {
                commonArr.push(el1);
            }
        }
    }
    return commonArr;
}


/*
Задача 21: сравнить два массива

Напишите функцию `areArraysEqual`, которая принимает два массива
и возвращает `true`, если массивы полностью одинаковые.

Массивы считаются одинаковыми, если:
- у них одинаковая длина;
- элементы на одинаковых индексах равны друг другу.

Используйте цикл `for`.

Примеры:
areArraysEqual([1, 2, 3], [1, 2, 3])      // true
areArraysEqual([1, 2, 3], [1, 2, 4])      // false
areArraysEqual([1, 2], [1, 2, 3])         // false
areArraysEqual(['a', 'b'], ['a', 'b'])    // true
*/

function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        let el2 = arr2[i];

        if (el1 !== el2) {
            return false;
        }
    }
    return true;
}


/*
Задача 22: самое частое значение

Напишите функцию `findMostFrequent`, которая принимает массив
и возвращает элемент, который встречается чаще всего.

Если таких элементов несколько, верните тот, который встретился раньше.

Используйте циклы `for`.
Можно использовать функцию `countOccurrences`.

Примеры:
findMostFrequent([1, 2, 2, 3, 2])        // 2
findMostFrequent(['a', 'b', 'a', 'c'])   // 'a'
findMostFrequent([1, 1, 2, 2])           // 1
*/

    function findMostFrequent(arr) {
        let mostFrequentEl = arr[0];
        let maxCount = countOccurrences(arr, arr[0]);

        for (let i = 1; i < arr.length; i++) {
            let currEl = arr[i];
            let currCount = countOccurrences(arr, currEl)

            if (currCount > maxCount) {
                maxCount = currCount;
                mostFrequentEl = currEl;
            }
        }
        return mostFrequentEl;
    }

/*
Задача 23: удалить элементы второго массива из первого

Напишите функцию `removeElements`, которая принимает два массива:
`arr1` и `arr2`.

Функция должна вернуть новый массив, содержащий только те элементы из `arr1`,
которых нет в `arr2`.

Используйте цикл `for`.
Можно использовать `includesElement`.

Примеры:
removeElements([1, 2, 3, 4], [2, 4])      // [1, 3]
removeElements(['a', 'b', 'c'], ['b'])    // ['a', 'c']
removeElements([1, 1, 2, 3], [1])         // [2, 3]
*/

function removeElements(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];

        if(!includesElement(arr2, el1) ) {
            result.push(el1);
        }
    }
    return result;
}

/*
Задача 24: пузырьковая сортировка по возрастанию

Напишите функцию `bubbleSortAsc`, которая принимает массив чисел
и возвращает новый массив, отсортированный по возрастанию.

Исходный массив изменять не нужно.

Используйте вложенные циклы `for`.
Не используйте `sort`.

Примеры:
bubbleSortAsc([5, 2, 9, 1, 3]) // [1, 2, 3, 5, 9]
bubbleSortAsc([3, 2, 1])       // [1, 2, 3]
bubbleSortAsc([])              // []
*/

function bubbleSortAsc(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] > result[j + 1]) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

/*
Задача 25: пузырьковая сортировка по убыванию

Напишите функцию `bubbleSortDesc`, которая принимает массив чисел
и возвращает новый массив, отсортированный по убыванию.

Исходный массив изменять не нужно.

Используйте вложенные циклы `for`.
Не используйте `sort`.

Примеры:
bubbleSortDesc([5, 2, 9, 1, 3]) // [9, 5, 3, 2, 1]
bubbleSortDesc([1, 2, 3])       // [3, 2, 1]
bubbleSortDesc([])              // []
*/

function bubbleSortDesc(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] < result[j + 1]) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

/*
Задача 26: второй максимум без сортировки

Напишите функцию `findSecondMax`, которая принимает массив чисел
и возвращает второе по величине число.

Сортировку использовать нельзя.
Считаем, что в массиве минимум 2 числа.

Используйте цикл `for`.

Примеры:
findSecondMax([5, 2, 9, 1, 3]) // 5
findSecondMax([10, 7, 8])      // 8
findSecondMax([1, 2])          // 1
*/

function findSecondMax(arr) {
let max = arr[0];
let secondMax = arr[1];

    if (max < secondMax) {
        max = arr[1];
        secondMax = arr[0];
    }

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax) {
        secondMax = arr[i];
    }
}
return secondMax;
}

/*
Задача 27: сдвиг массива вправо на 1

Напишите функцию `shiftRightByOne`, которая принимает массив
и возвращает новый массив, где все элементы сдвинуты вправо на 1.

Последний элемент должен стать первым.

Исходный массив изменять не нужно.

Используйте цикл `for`.
Не используйте `pop`, `unshift`, `slice`.

Примеры:
shiftRightByOne([1, 2, 3, 4])     // [4, 1, 2, 3]
shiftRightByOne(['a', 'b', 'c'])  // ['c', 'a', 'b']
shiftRightByOne([5])              // [5]
*/

function shiftRightByOne(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return [];
    }

    newArr.push(arr[arr.length - 1]);

    for(let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

/*
Задача 28: сдвиг массива вправо на k

Напишите функцию `shiftRightByK`, которая принимает массив и число `k`
и возвращает новый массив, где все элементы сдвинуты вправо на `k` позиций.

Элементы, которые “вышли” справа, должны перейти в начало массива.

Исходный массив изменять не нужно.

Используйте циклы `for`.
Не используйте `pop`, `unshift`, `slice`.

Примеры:
shiftRightByK([1, 2, 3, 4], 2)     // [3, 4, 1, 2]
shiftRightByK(['a', 'b', 'c'], 1)  // ['c', 'a', 'b']
shiftRightByK([1, 2, 3], 3)        // [1, 2, 3]
*/

function shiftRightByK(arr, k) {
    let newArr = [];

    if (arr.length === 0) {
        return [];
    }

    let shift = k % arr.length;

        for (let i = arr.length - shift; i < arr.length; i++) { // i = 3, i < 3, i++
            newArr.push(arr[i]) // 0 + 1
        }

        for (let i = 0; i < arr.length - shift; i++) { //i = 0, i < 3, i++
            newArr.push(arr[i])
        }
    return newArr;
}

// ЗАДАЧИ НА ВЛОЖЕННЫЕ ЦИКЛЫ ОТ ПРОСТОГО ДО СЛОЖНОГО

/*
Задача 1: вывести все пары элементов

Напишите функцию `getAllPairs`, которая принимает два массива
и возвращает новый массив строк со всеми парами элементов.

Каждый элемент первого массива должен соединиться с каждым элементом второго массива.

Используйте вложенные циклы `for`.

Примеры:
getAllPairs(['A', 'B'], [1, 2])
// ['A-1', 'A-2', 'B-1', 'B-2']

getAllPairs(['x'], ['a', 'b', 'c'])
// ['x-a', 'x-b', 'x-c']

getAllPairs([], [1, 2])
// []
*/

function getAllPairs(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            let el2 = arr2[j];

            newArr.push( el1 + '-' + el2);
        }
    }
    return newArr;
}

/*
Задача 2: найти одинаковые пары

Напишите функцию `findEqualPairs`, которая принимает два массива
и возвращает новый массив строк с парами одинаковых элементов.

Если элемент из первого массива равен элементу из второго массива,
добавьте строку в формате 'элемент=элемент'.

Используйте вложенные циклы `for`.

Примеры:
findEqualPairs([1, 2, 3], [2, 3, 4])
// ['2=2', '3=3']

findEqualPairs(['a', 'b'], ['b', 'c'])
// ['b=b']

findEqualPairs([1, 2], [3, 4])
// []
*/

function findEqualPairs(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];

        for(let j = 0; j < arr2.length; j++) {
            let el2 = arr2[j];

            if (el1 === el2) {
                newArr.push(el1 + '=' + el2);
            }
        }
    }
    return newArr;
}

/*
Задача 3: общие элементы двух массивов без дублей

Напишите функцию `findCommonUnique`, которая принимает два массива
и возвращает новый массив с элементами, которые есть и в первом,
и во втором массиве.

Каждый общий элемент должен попасть в результат только один раз.
Порядок должен сохраниться по первому массиву.

Используйте вложенные циклы `for`.
Можно использовать `includesElement`, если нужно.

Примеры:
findCommonUnique([1, 2, 3], [2, 3, 4])
// [2, 3]

findCommonUnique(['a', 'b', 'a'], ['a', 'c'])
// ['a']

findCommonUnique([1, 1, 2], [1, 2, 2])
// [1, 2]
*/

function findCommonUnique(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            let el2 = arr2[j];

            if (el1 === el2 && !includesElement(newArr, el1)) {
                newArr.push(el1);
            }
        }
    }
    return newArr;
}

/*
Задача 4: найти дубликаты в одном массиве

Напишите функцию `findDuplicatesNested`, которая принимает массив
и возвращает новый массив с элементами, которые встречаются больше одного раза.

Каждый дубликат должен попасть в результат только один раз.
Порядок должен сохраниться по первому повторному обнаружению.

Используйте вложенные циклы `for`.
Можно использовать `includesElement`.

Примеры:
findDuplicatesNested([1, 2, 3, 2, 1, 4])
// [1, 2] или [2, 1] — зависит от логики обхода, главное без повторов

findDuplicatesNested(['a', 'b', 'a', 'c', 'b'])
// ['a', 'b']

findDuplicatesNested([1, 2, 3])
// []
*/

function findDuplicatesNested(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let el1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let el2 = arr[j];

            if (el1 === el2 && !includesElement(newArr, el1)) {
                newArr.push(el1);
            }
        }
    }
    return newArr;
}

/*
Задача 5: посчитать количество одинаковых пар

Напишите функцию `countEqualPairs`, которая принимает массив
и возвращает количество пар одинаковых элементов.

Пара считается по индексам: если два одинаковых значения стоят
на разных индексах, это одна пара.

Используйте вложенные циклы `for`.

Примеры:
countEqualPairs([1, 1, 1])       // 3
// пары: индекс 0-1, 0-2, 1-2

countEqualPairs([1, 2, 1, 2])    // 2
// пары: две единицы и две двойки

countEqualPairs([1, 2, 3])       // 0
*/

function countEqualPairs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let el1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let el2 = arr[j];

            if (el1 === el2) {
                count++;
            }
        }
    }
    return count;
}

/*
Задача 6: пары чисел с заданной суммой

Напишите функцию `findPairsWithSum`, которая принимает массив чисел
и число `target`.

Функция должна вернуть новый массив строк с парами чисел,
сумма которых равна `target`.

Пару записывайте в формате 'a+b'.

Используйте вложенные циклы `for`.
Один и тот же индекс нельзя использовать дважды.

Примеры:
findPairsWithSum([1, 2, 3, 4], 5)
// ['1+4', '2+3']

findPairsWithSum([1, 1, 2, 3], 4)
// ['1+3', '1+3']

findPairsWithSum([5, 6, 7], 20)
// []
*/

function findPairsWithSum(arr, target) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];

            if (num1 + num2 === target) {
                newArr.push(num1 + '+' + num2);
            }
        }
    }
    return newArr;
}

/*
Задача 7: пары чисел с заданным произведением

Напишите функцию `findPairsWithProduct`, которая принимает массив чисел
и число `target`.

Функция должна вернуть новый массив строк с парами чисел,
произведение которых равно `target`.

Пару записывайте в формате 'a*b'.

Используйте вложенные циклы `for`.
Один и тот же индекс нельзя использовать дважды.

Примеры:
findPairsWithProduct([1, 2, 3, 4, 6], 12)
// ['2*6', '3*4']

findPairsWithProduct([2, 2, 3], 4)
// ['2*2']

findPairsWithProduct([1, 5, 10], 100)
// []
*/

function findPairsWithProduct(arr, target) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];

            if (num1 * num2 === target) {
                newArr.push(num1 + '*' + num2);
            }
        }
    }
    return newArr;
}


/*
Задача 8: проверить, есть ли дубликаты

Напишите функцию `hasDuplicates`, которая принимает массив
и возвращает `true`, если в массиве есть хотя бы один повторяющийся элемент,
и `false`, если все элементы уникальны.

Используйте вложенные циклы `for`.

Примеры:
hasDuplicates([1, 2, 3, 2])      // true
hasDuplicates(['a', 'b', 'c'])   // false
hasDuplicates([true, false, true]) // true
*/

function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currEl = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let elems = arr[j];

            if (currEl === elems) {
                return true;
            }
        }
    }
    return false;
}


/*
Задача 9: удалить дубликаты через вложенный цикл

Напишите функцию `removeDuplicatesNested`, которая принимает массив
и возвращает новый массив без повторяющихся элементов.

Порядок первого появления должен сохраниться.

Используйте вложенные циклы `for`.
Не используйте `includesElement`, `indexOf`, `Set`.

Примеры:
removeDuplicatesNested([1, 2, 1, 3, 2])      // [1, 2, 3]
removeDuplicatesNested(['a', 'b', 'a'])      // ['a', 'b']
removeDuplicatesNested([true, true, false])  // [true, false]
*/

function removeDuplicatesNested(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currEl = arr[i];
        let isAlreadyExist = false;

        for(let j = 0; j < result.length; j++) {
            let resultEl = result[j];

            if (currEl === resultEl) {
                isAlreadyExist = true;
            }
        }
        if (!isAlreadyExist) {
            result.push(currEl);
        }
    }
    return result;
}


/*
Задача 10: пузырьковая сортировка по убыванию

Напишите функцию `bubbleSortDesc`, которая принимает массив чисел
и возвращает новый массив, отсортированный по убыванию.

Исходный массив изменять не нужно.

Используйте вложенные циклы `for`.
Не используйте `sort`.

Примеры:
bubbleSortDesc([5, 2, 9, 1, 3]) // [9, 5, 3, 2, 1]
bubbleSortDesc([1, 2, 3])       // [3, 2, 1]
bubbleSortDesc([])              // []
*/

function bubbleSortDesc(arr) {
    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let num = arr[i];
        result.push(num);
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if ( result[j] < result[j + 1] ) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result
}



/*
Задача 11: найти второй максимум через сравнения

Напишите функцию `findSecondMaxNested`, которая принимает массив чисел
и возвращает второе по величине число.

Можно сначала отсортировать массив по убыванию через вложенные циклы,
а потом вернуть элемент с индексом 1.

Считаем, что в массиве минимум 2 числа.

Используйте вложенные циклы `for`.
Не используйте `sort`.

Примеры:
findSecondMaxNested([5, 2, 9, 1, 3]) // 5
findSecondMaxNested([10, 7, 8])      // 8
findSecondMaxNested([1, 2])          // 1
*/

function findSecondMaxNested(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] < result[j + 1]) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result[1];
}

/*
Неделя 8
Метод: push
Задача 1: добавить элемент в конец

Напишите функцию `addToEnd`, которая принимает массив и элемент,
добавляет элемент в конец массива и возвращает массив.

Используйте метод `push`.

Примеры:
addToEnd([1, 2], 3)        // [1, 2, 3]
addToEnd(['a', 'b'], 'c')  // ['a', 'b', 'c']
addToEnd([], true)         // [true]
*/

function addToEnd (arr, el) {
    arr.push(el);
    return arr;
}
/*
Неделя 8
Метод: push
Задача 2: добавить несколько элементов в конец

Напишите функцию `addManyToEnd`, которая принимает массив `arr`
и массив `elements`.

Функция должна добавить все элементы из `elements` в конец `arr`
и вернуть `arr`.

Используйте метод `push` и цикл `for`.

Примеры:
addManyToEnd([1, 2], [3, 4])        // [1, 2, 3, 4]
addManyToEnd(['a'], ['b', 'c'])     // ['a', 'b', 'c']
addManyToEnd([], [true, false])     // [true, false]
*/

function addManyToEnd(arr, elements) {
    for (let i = 0; i < elements.length; i++) {
        let el = elements[i];
        arr.push(el);
    }
    return arr;
}

/*
Неделя 8
Метод: pop
Задача 3: удалить последний элемент

Метод `pop` удаляет последний элемент массива и возвращает его.

Напишите функцию `removeLast`, которая принимает массив
и удаляет из него последний элемент.

Функция должна вернуть изменённый массив.

Используйте метод `pop`.

Примеры:
removeLast([1, 2, 3])       // [1, 2]
removeLast(['a', 'b'])      // ['a']
removeLast([])              // []
*/

function removeLast(arr) {
    arr.pop();
    return arr;
}

/*
Неделя 8
Метод: pop
Задача 4: получить последний элемент

Напишите функцию `getLastElement`, которая принимает массив
и возвращает последний элемент массива.

Используйте метод `pop`.

Примеры:
getLastElement([1, 2, 3])       // 3
getLastElement(['a', 'b'])      // 'b'
getLastElement([])              // undefined
*/

function getLastElement(arr) {
    let removedEl = arr.pop();
    return removedEl;
}

/*
Неделя 8
Метод: shift
Задача 5: удалить первый элемент

Напишите функцию `removeFirst`, которая принимает массив
и удаляет из него первый элемент.

Функция должна вернуть изменённый массив.

Используйте метод `shift`.

Примеры:
removeFirst([1, 2, 3])       // [2, 3]
removeFirst(['a', 'b'])      // ['b']
removeFirst([])              // []
*/

function removeFirst(arr) {
    arr.shift();
    return arr;
}

/*
Неделя 8
Метод: shift
Задача 6: получить первый элемент

Напишите функцию `getFirstElement`, которая принимает массив
и возвращает первый элемент массива.

Используйте метод `shift`.

Примеры:
getFirstElement([1, 2, 3])       // 1
getFirstElement(['a', 'b'])      // 'a'
getFirstElement([])              // undefined
*/

function getFirstElement(arr) {
    let firstElem = arr.shift()
    return firstElem;
}

/*
Неделя 8
Метод: unshift
Задача 7: добавить элемент в начало

Напишите функцию `addToStart`, которая принимает массив и элемент,
добавляет элемент в начало массива и возвращает массив.

Используйте метод `unshift`.

Примеры:
addToStart([2, 3], 1)        // [1, 2, 3]
addToStart(['b', 'c'], 'a')  // ['a', 'b', 'c']
addToStart([], true)         // [true]
*/

function addToStart(arr, el) {
    arr.unshift(el);
    return arr;
}

/*
Неделя 8
Метод: unshift
Задача 8: добавить несколько элементов в начало

Напишите функцию `addManyToStart`, которая принимает массив `arr`
и массив `elements`.

Функция должна добавить все элементы из `elements` в начало `arr`
в том же порядке.

Используйте метод `unshift` и цикл `for`.

Примеры:
addManyToStart([3, 4], [1, 2])        // [1, 2, 3, 4]
addManyToStart(['c'], ['a', 'b'])     // ['a', 'b', 'c']
addManyToStart([], [true, false])     // [true, false]
*/

function addManyToStart(arr, elements) {
    for (let i = elements.length - 1; i >= 0; i--) {
        let el = elements[i];
        arr.unshift(el);
    }
    return arr;
}

/*
Неделя 8
Метод: includes
Задача 9: проверить наличие элемента

Напишите функцию `hasElement`, которая принимает массив и элемент,
и возвращает `true`, если элемент есть в массиве,
и `false`, если элемента нет.

Используйте метод `includes`.

Примеры:
hasElement([1, 2, 3], 2)       // true
hasElement([1, 2, 3], 5)       // false
hasElement(['a', 'b'], 'b')    // true
*/

function hasElement(arr, el) {
    return arr.includes(el);
}

/*
Неделя 8
Метод: includes
Задача 10: проверить наличие запрещённого слова

Напишите функцию `hasForbiddenWord`, которая принимает массив слов `words`
и строку `word`.

Функция должна вернуть `true`, если `word` есть в массиве `words`,
и `false`, если его нет.

Используйте метод `includes`.

Примеры:
hasForbiddenWord(['spam', 'scam', 'fake'], 'spam') // true
hasForbiddenWord(['spam', 'scam', 'fake'], 'hello') // false
hasForbiddenWord([], 'spam') // false
*/

function hasForbiddenWord(words, word) {
    return words.includes(word);
}

/*
Неделя 8
Метод: indexOf
Задача 11: найти индекс элемента

Напишите функцию `getElementIndex`, которая принимает массив и элемент,
и возвращает индекс этого элемента.

Если элемента нет, функция должна вернуть -1.

Используйте метод `indexOf`.

Примеры:
getElementIndex([10, 20, 30], 20)      // 1
getElementIndex([10, 20, 30], 50)      // -1
getElementIndex(['a', 'b', 'c'], 'c')  // 2
*/

function getElementIndex(arr, el) {
    return arr.indexOf(el);
}

/*
Неделя 8
Метод: indexOf
Задача 12: проверить, есть ли элемент после указанного индекса

Напишите функцию `hasElementAfterIndex`, которая принимает массив `arr`,
элемент `el` и индекс `startIndex`.

Функция должна вернуть `true`, если элемент есть в массиве,
начиная поиск с индекса `startIndex`.
Если элемента нет — вернуть `false`.

Используйте метод `indexOf` со вторым аргументом.

Примеры:
hasElementAfterIndex(['a', 'b', 'a', 'c'], 'a', 1) // true
hasElementAfterIndex(['a', 'b', 'a', 'c'], 'a', 3) // false
hasElementAfterIndex([10, 20, 30], 20, 2)          // false
*/

function hasElementAfterIndex(arr, el, startIndex) {
    if (arr.indexOf(el, startIndex) === - 1) {
        return false;
    } else {
        return true;
    }
}

/*
Метод: slice
Задача 13: получить часть массива

Напишите функцию `getPartOfArray`, которая принимает массив `arr`,
индекс `start` и индекс `end`.

Функция должна вернуть часть массива от `start` до `end`,
не включая `end`.

Используйте метод `slice`.

Примеры:
getPartOfArray(['a', 'b', 'c', 'd'], 1, 3) // ['b', 'c']
getPartOfArray([1, 2, 3, 4], 0, 2)         // [1, 2]
getPartOfArray([1, 2, 3, 4], 2, 4)         // [3, 4]
*/

function getPartOfArray(arr, start, end) {
    return arr.slice(start, end);
}

/*
Неделя 8
Метод: slice
Задача 14: скопировать массив

Напишите функцию `copyArray`, которая принимает массив
и возвращает его копию.

Используйте метод `slice`.

Примеры:
copyArray([1, 2, 3])       // [1, 2, 3]
copyArray(['a', 'b'])      // ['a', 'b']
copyArray([])              // []
*/

function copyArray(arr) {
   return arr.slice();
}

/*
Неделя 8
Метод: splice
Задача 15: удалить элементы

Напишите функцию `removeElementsBySplice`, которая принимает массив `arr`,
индекс `start` и количество элементов `count`.

Функция должна удалить `count` элементов, начиная с индекса `start`,
и вернуть изменённый массив.

Используйте метод `splice`.

Примеры:
removeElementsBySplice(['a', 'b', 'c', 'd'], 1, 2) // ['a', 'd']
removeElementsBySplice([1, 2, 3, 4], 0, 1)         // [2, 3, 4]
removeElementsBySplice([1, 2, 3], 1, 0)            // [1, 2, 3]
*/

function removeElementsBySplice (arr, start, count) {
    arr.splice(start, count)
    return arr;
}

/*
Неделя 8
Метод: splice
Задача 16: вставить элемент по индексу

Напишите функцию `insertElement`, которая принимает массив `arr`,
индекс `index` и элемент `el`.

Функция должна вставить `el` в массив на позицию `index`
и вернуть изменённый массив.

Используйте метод `splice`.

Примеры:
insertElement(['a', 'c'], 1, 'b')       // ['a', 'b', 'c']
insertElement([1, 2, 4], 2, 3)          // [1, 2, 3, 4]
insertElement([], 0, 'start')           // ['start']
*/

function insertElement(arr, index, el) {
    arr.splice(index, 0, el)
    return arr;
}

/*
Неделя 8
Методы: concat + join
Задача 17: объединить слова и сделать строку

Напишите функцию `makeSentence`, которая принимает два массива слов:
`words1` и `words2`.

Функция должна:
1. Объединить массивы через `concat`.
2. Превратить результат в строку через `join`.
3. Слова должны быть разделены пробелом.

Примеры:
makeSentence(['Hello'], ['world'])              // 'Hello world'
makeSentence(['I', 'love'], ['JavaScript'])     // 'I love JavaScript'
makeSentence([], ['Hi'])                        // 'Hi'
*/

function makeSentence(words1, words2) {
    let string = words1.concat(words2).join(' ');
    return string;
}

/*
Неделя 8
Методы: reverse + sort
Задача 18: отсортировать по возрастанию и развернуть

Напишите функцию `sortAndReverse`, которая принимает массив чисел.

Функция должна:
1. Создать копию массива через `slice`.
2. Отсортировать копию по возрастанию через `sort`.
3. Развернуть отсортированную копию через `reverse`.
4. Вернуть результат.

Исходный массив изменять не нужно.

Примеры:
sortAndReverse([5, 2, 9, 1]) // [9, 5, 2, 1]
sortAndReverse([10, 3, 7])   // [10, 7, 3]
sortAndReverse([])           // []
*/

function sortAndReverse(arr) {
    return arr.slice().sort( (a, b) => a - b).reverse();
}