// Стрелочные функции — задача 2/20

// Условие:
// Дан массив productsArrow2.
//
// Нужно:
// 1. Получить товары дешевле 1000 через filter.
// 2. Использовать стрелочную функцию.
// 3. Сохранить результат в cheapProductsArrow2.
// 4. Вывести cheapProductsArrow2 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 2, title: "Phone", price: 800 },
//   { id: 3, title: "Tablet", price: 500 }
// ]

const productsArrow2 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const cheapProductsArrow2 = productsArrow2.filter(p => p.price < 1000);
console.log(cheapProductsArrow2);

// Стрелочные функции — задача 3/20

// Условие:
// Дан массив usersArrow3.
//
// Нужно:
// 1. Получить массив имён через map.
// 2. Использовать стрелочную функцию.
// 3. Сохранить результат в userNamesArrow3.
// 4. Вывести userNamesArrow3 в консоль.
//
// Ожидаемый вывод:
// ["Alex", "Maria", "Tom"]

const usersArrow3 = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Tom" },
];

const userNamesArrow3 = usersArrow3.map(u => u.name);
console.log(userNamesArrow3);

// Стрелочные функции — задача 4/20

// Условие:
// Дан массив tasksArrow4.
//
// Нужно:
// 1. Проверить, есть ли хотя бы одна невыполненная задача через some.
// 2. Использовать стрелочную функцию.
// 3. Сохранить результат в hasActiveTaskArrow4.
// 4. Вывести hasActiveTaskArrow4 в консоль.
//
// Ожидаемый вывод:
// true

const tasksArrow4 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: true },
];

const hasActiveTaskArrow4 = tasksArrow4.some(t => !t.completed);
console.log(hasActiveTaskArrow4);

// Стрелочные функции — задача 5/20

// Условие:
// Дан массив productsArrow5.
//
// Нужно:
// 1. Проверить, все ли товары есть в наличии через every.
// 2. Товар есть в наличии, если stock больше 0.
// 3. Использовать стрелочную функцию.
// 4. Сохранить результат в allInStockArrow5.
// 5. Вывести allInStockArrow5 в консоль.
//
// Ожидаемый вывод:
// false

const productsArrow5 = [
    { id: 1, title: "Laptop", stock: 3 },
    { id: 2, title: "Phone", stock: 0 },
    { id: 3, title: "Tablet", stock: 5 },
];

const allInStockArrow5 = productsArrow5.every(p => p.stock > 0);
console.log(allInStockArrow5);

// Стрелочные функции — задача 6/20

// Условие:
// Дан массив cartArrow6.
//
// Нужно:
// 1. Посчитать общую сумму корзины через reduce.
// 2. Сумма одного товара: price * quantity.
// 3. Использовать стрелочную функцию.
// 4. Сохранить результат в totalCartArrow6.
// 5. Вывести totalCartArrow6 в консоль.
//
// Ожидаемый вывод:
// 3000

const cartArrow6 = [
    { id: 1, title: "Laptop", price: 1200, quantity: 1 },
    { id: 2, title: "Phone", price: 800, quantity: 2 },
    { id: 3, title: "Case", price: 100, quantity: 2 },
];

const totalCartArrow6 = cartArrow6.reduce((acc, c) => acc + c.price * c.quantity, 0);
console.log(totalCartArrow6);

// Стрелочные функции — задача 7/20

// Условие:
// Дан массив usersArrow7.
//
// Нужно:
// 1. Найти пользователя с role "admin" через find.
// 2. Использовать стрелочную функцию.
// 3. Если пользователь найден, вывести его name.
// 4. Иначе вывести "Admin not found".
//
// Ожидаемый вывод:
// Maria

const usersArrow7 = [
    { id: 1, name: "Alex", role: "user" },
    { id: 2, name: "Maria", role: "admin" },
    { id: 3, name: "Tom", role: "user" },
];

const foundAdmin = usersArrow7.find(u => u.role === "admin");

if (foundAdmin) {
    console.log(foundAdmin.name);
} else {
    console.log("Admin not found");
}

// Стрелочные функции — задача 8/20

// Условие:
// Дан массив usersArrow8.
//
// Нужно:
// 1. Получить активных пользователей через filter.
// 2. Затем получить массив их имён через map.
// 3. Использовать стрелочные функции.
// 4. Сохранить результат в activeUserNamesArrow8.
// 5. Вывести activeUserNamesArrow8 в консоль.
//
// Ожидаемый вывод:
// ["Alex", "Kate"]

const usersArrow8 = [
    { id: 1, name: "Alex", isActive: true },
    { id: 2, name: "Maria", isActive: false },
    { id: 3, name: "Kate", isActive: true },
];

const activeUserNamesArrow8 = usersArrow8.filter(u => u.isActive).map(u => u.name);
console.log(activeUserNamesArrow8);

// Стрелочные функции — задача 9/20

// Условие:
// Дан массив productsArrow9.
//
// Нужно:
// 1. Получить товары категории "tech" через filter.
// 2. Затем получить массив строк:
//    "Laptop - 1200"
//    "Phone - 800"
// 3. Использовать стрелочные функции.
// 4. Сохранить результат в techProductLabelsArrow9.
// 5. Вывести techProductLabelsArrow9 в консоль.
//
// Ожидаемый вывод:
// ["Laptop - 1200", "Phone - 800"]

const productsArrow9 = [
    { id: 1, title: "Laptop", category: "tech", price: 1200 },
    { id: 2, title: "Book", category: "books", price: 20 },
    { id: 3, title: "Phone", category: "tech", price: 800 },
];

const techProductLabelsArrow9 = productsArrow9
    .filter(p => p.category === "tech")
    .map(p => `${p.title} - ${p.price}`);

console.log(techProductLabelsArrow9);

// Стрелочные функции — задача 10/20

// Условие:
// Дан массив productsArrow10.
//
// Нужно:
// 1. Создать новый массив productCardsArrow10 через map.
// 2. В новом массиве должны быть объекты:
//    title
//    isExpensive
// 3. isExpensive должен быть true,
//    если price больше или равен 1000.
// 4. Использовать стрелочную функцию.
// 5. Вывести productCardsArrow10 в консоль.
//
// Ожидаемый вывод:
// [
//   { title: "Laptop", isExpensive: true },
//   { title: "Phone", isExpensive: false },
//   { title: "Tablet", isExpensive: false }
// ]

const productsArrow10 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const productCardsArrow10 = productsArrow10
    .map(p => ({
        title: p.title,
        isExpensive: p.price >= 1000,
    }));

console.log(productCardsArrow10);

// Стрелочные функции — задача 11/20

// Нужно:
// 1. Создать новый массив updatedTasksArrow11 через map.
// 2. В новом массиве у задачи с id 2 completed должен стать true.
// 3. Остальные задачи должны остаться без изменений.
// 4. Исходный массив tasksArrow11 напрямую не изменяй.
// 5. Использовать стрелочную функцию и spread.
// 6. Вывести updatedTasksArrow11.
// 7. Вывести tasksArrow11.

const tasksArrow11 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: false },
];

const updatedTasksArrow11 = tasksArrow11.map(t => t.id === 2 ? {...t, completed: true} : t);

console.log(tasksArrow11);
console.log(updatedTasksArrow11);

// Стрелочные функции — задача 12/20

// Нужно:
// 1. Создать новый массив updatedUsersArrow12 через map.
// 2. В новом массиве у пользователя с id 3 isOnline должен стать true.
// 3. Остальные пользователи должны остаться без изменений.
// 4. Исходный массив usersArrow12 напрямую не изменяй.
// 5. Использовать стрелочную функцию и spread.
// 6. Вывести updatedUsersArrow12.
// 7. Вывести usersArrow12.

const usersArrow12 = [
    { id: 1, name: "Alex", isOnline: false },
    { id: 2, name: "Maria", isOnline: false },
    { id: 3, name: "Tom", isOnline: false },
];

const updatedUsersArrow12 = usersArrow12.map(u => u.id === 3 ? {...u, isOnline: true} : u);

// Стрелочные функции — задача 13/20

// Нужно:
// 1. Создать новый массив updatedProductsArrow13 через map.
// 2. В новом массиве у товара с id 1 price должен стать 1100.
// 3. Остальные товары должны остаться без изменений.
// 4. Исходный массив productsArrow13 напрямую не изменяй.
// 5. Использовать стрелочную функцию и spread.

const productsArrow13 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const updatedProductsArrow13 = productsArrow13.map(p => p.id === 1 ? {...p, price: 1100 } : p);

// Стрелочные функции — задача 14/20

// Условие:
// Дан массив productsArrow14.
//
// Нужно:
// 1. Получить товары категории "tech" через filter.
// 2. Затем создать карточки через map.
// 3. В карточке должны быть свойства:
//    title
//    label
// 4. label должен быть строкой "Laptop - 1200".
// 5. Использовать стрелочные функции.

const productsArrow14 = [
    { id: 1, title: "Laptop", category: "tech", price: 1200 },
    { id: 2, title: "Book", category: "books", price: 20 },
    { id: 3, title: "Phone", category: "tech", price: 800 },
];

const productCardsArrow14 = productsArrow14.filter(p => p.category === "tech")
    .map(p => ({
        title: p.title,
        label: `${p.title} - ${p.price}`
    }));

// Стрелочные функции — задача 15/20

// Условие:
// Дан массив cartArrow15.
//
// Нужно:
// 1. Посчитать общую сумму корзины через reduce.
// 2. Сумма одного товара: price * quantity.
// 3. Использовать стрелочную функцию.
//
// Ожидаемый результат:
// 3000

const cartArrow15 = [
    { id: 1, title: "Laptop", price: 1200, quantity: 1 },
    { id: 2, title: "Phone", price: 800, quantity: 2 },
    { id: 3, title: "Case", price: 100, quantity: 2 },
];

const cartTotal15 = cartArrow15.reduce((acc, c) => acc + c.price * c.quantity, 0);

// Стрелочные функции — задача 16/20

// Условие:
// Дан массив tasksArrow16.
//
// Нужно:
// 1. Через reduce создать объект statsArrow16.
// 2. В statsArrow16 должны быть свойства:
//    total
//    completed
//    active

const tasksArrow16 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: true },
];

const statsArrow16 = tasksArrow16.reduce((acc, t) =>
{       acc.total += 1;
    if (t.completed === true) {
        acc.completed++
    } else {
        acc.active++
    }
    return acc;
}, {
    total: 0,
    completed: 0,
    active: 0,
})

console.log(statsArrow16);

// Стрелочные функции — задача 17/20

// Условие:
// Дан объект stateArrow17.
//
// Нужно:
// 1. Создать новый объект updatedStateArrow17.
// 2. В новом объекте у пользователя с id 2
//    isOnline должен стать true.
// 3. Исходный объект stateArrow17 не изменяй.
// 4. Использовать стрелочные функции, map и spread.

const stateArrow17 = {
    users: [
        { id: 1, name: "Alex", isOnline: false },
        { id: 2, name: "Maria", isOnline: false },
        { id: 3, name: "Tom", isOnline: false },
    ],
    activeUserId: 2,
};

const updatedStateArrow17 = {...stateArrow17, users:
    stateArrow17.users.map(u => u.id === 2 ? {...u, isOnline: true } : u)
};

// Стрелочные функции — задача 18/20

// Условие:
// Дан объект stateArrow18.
//
// Нужно:
// 1. Создать новый объект updatedStateArrow18.
// 2. В новом объекте у задачи с id 2
//    completed должен стать true.
// 3. stats.completed должен увеличиться на 1.
// 4. stats.active должен уменьшиться на 1.
// 5. Исходный объект stateArrow18 не изменяй.
// 6. Использовать стрелочные функции, map и spread.

const stateArrow18 = {
    todos: [
        { id: 1, title: "Watch", completed: true },
        { id: 2, title: "Practice", completed: false },
        { id: 3, title: "Rest", completed: false },
    ],
    stats: {
        completed: 1,
        active: 2,
    },
};

const updatedStateArrow18 = {...stateArrow18,
    todos:
    stateArrow18.todos.map(t => t.id === 2 ? {...t, completed: true} : t),
    stats:
        {
            ...stateArrow18.stats,
            completed: stateArrow18.stats.completed + 1,
            active: stateArrow18.stats.active - 1,
        }
};

// Стрелочные функции — задача 19/20

// Условие:
// Дан массив productsArrow19.
//
// Нужно:
// 1. Получить товары категории "tech" и с stock больше 0.
// 2. Преобразовать их в карточки.
// 3. Посчитать сумму цен этих товаров.
// 4. Использовать стрелочные функции.
// 5. Карточка должна иметь свойства:
//    title
//    label

const productsArrow19 = [
    { id: 1, title: "Laptop", category: "tech", price: 1200, stock: 3 },
    { id: 2, title: "Book", category: "books", price: 20, stock: 10 },
    { id: 3, title: "Tablet", category: "tech", price: 500, stock: 0 },
    { id: 4, title: "Phone", category: "tech", price: 800, stock: 5 },
];

const filteredProductsArrow19 = productsArrow19.filter(p => p.category === "tech" && p.stock > 0);

const productsCardArrow19 = filteredProductsArrow19.map(p => ({
        title: p.title,
        label: `${p.title} - ${p.price}`
    }));

const totalCartProductsArrow19 = filteredProductsArrow19.reduce((acc, p) => {
    return acc + p.price;
}, 0)

// Стрелочные функции — задача 20/20

// Условие:
// Дан объект shopArrow20.
//
// Нужно:
// 1. Найти пользователя с id 2.
// 2. Получить его заказы.
// 3. Создать карточки заказов.
// 4. Посчитать сумму заказов.
// 5. Создать summaryArrow20.
// 6. Использовать стрелочные функции.

const shopArrow20 = {
    users: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Maria" },
        { id: 3, name: "Tom" },
    ],
    orders: [
        { id: 1, userId: 1, total: 1200 },
        { id: 2, userId: 2, total: 1600 },
        { id: 3, userId: 2, total: 200 },
        { id: 4, userId: 3, total: 500 },
    ],
};

const foundedUser = shopArrow20.users.find(u => u.id === 2);

let foundedUserOrders = [];

if (foundedUser) {
    foundedUserOrders = shopArrow20.orders.filter(o => o.userId === foundedUser.id);
}

const orderCardsArrow20 = foundedUserOrders.map(o => ({
    id: o.id,
    label: `Order ${o.id} - ${o.total}`,
}));

const totalSum = foundedUserOrders.reduce((acc, p) => { return acc + p.total }, 0);

const summaryArrow20 = {
    userName: foundedUser.name,
    ordersCount: foundedUserOrders.length,
    total: totalSum,
};

console.log(foundedUser);
console.log(orderCardsArrow20);
console.log(summaryArrow20);

// Callback — задача 1/20

// Условие:
// Напиши функцию runCallback.
// Функция должна принимать один параметр callback.
// Внутри функции runCallback нужно вызвать callback.
//
// Создай функцию sayHello,
// которая выводит в консоль строку "Hello".
//
// Вызови runCallback и передай туда sayHello.
//
// Ожидаемый вывод:
// Hello

function runCallback(callback) {
     callback();
}

function sayHello() {
    console.log("Hello");
}

runCallback(sayHello);

// Callback — задача 2/20

// Условие:
// Напиши функцию runAction.
// Функция должна принимать один параметр action.
// Внутри функции runAction нужно вызвать action.
//
// Создай функцию showMessage,
// которая выводит в консоль строку "Action started".
//
// Вызови runAction и передай туда showMessage.
//
// Ожидаемый вывод:
// Action started

function runAction(action) {
    action();
}

function showMessage() {
    console.log("Action started");
}

runAction(showMessage);

// Callback — задача 3/20

// Условие:
// Напиши функцию execute.
// Функция должна принимать один параметр fn.
// Внутри функции execute нужно вызвать fn.
//
// Вызови execute и передай туда стрелочную функцию,
// которая выводит в консоль строку "Executed".
//
// Ожидаемый вывод:
// Executed

function execute(fn) {
    fn();
}

execute(() => {
    console.log("Executed");
});

// Callback — задача 4/20

// Условие:
// Напиши функцию repeatTwice.
// Функция должна принимать один параметр callback.
// Внутри функции repeatTwice нужно вызвать callback два раза.
//
// Создай функцию sayHi,
// которая выводит в консоль строку "Hi".
//
// Вызови repeatTwice и передай туда sayHi.
//
// Ожидаемый вывод:
// Hi
// Hi

function repeatTwice(callback) {
    callback();
    callback();
}

function sayHi() {
    console.log("Hi");
}

repeatTwice(sayHi);

// Callback — задача 5/20

// Условие:
// Напиши функцию runIfTrue.
// Функция должна принимать два параметра:
// condition
// callback
//
// Если condition равно true,
// нужно вызвать callback.
// Если condition равно false,
// callback вызывать не нужно.
//
// Создай функцию showSuccess,
// которая выводит в консоль строку "Success".
//
// Вызови runIfTrue(true, showSuccess).
//
// Ожидаемый вывод:
// Success

function runIfTrue(condition, callback) {
    if (condition) {
        callback();
    }
}

function showSuccess() {
    console.log("Success");
}

runIfTrue(true, showSuccess);

// Callback — задача 6/20

// Условие:
// Напиши функцию runWithName.
// Функция должна принимать два параметра:
// name
// callback
//
// Внутри runWithName нужно вызвать callback
// и передать в него name.
//
// Создай функцию showName,
// которая принимает параметр name
// и выводит его в консоль.
//
// Вызови runWithName("Alex", showName).
//
// Ожидаемый вывод:
// Alex

function runWithName(name, callback) {
    callback(name);
}

function showName(name) {
    console.log(name);
}

runWithName("Alex", showName);


// Callback — задача 7/20

// Условие:
// Напиши функцию runWithNumber.
// Функция должна принимать два параметра:
// number
// callback
//
// Внутри runWithNumber нужно вызвать callback
// и передать в него number.
//
// Создай функцию showDouble,
// которая принимает number
// и выводит в консоль число, умноженное на 2.
//
// Вызови runWithNumber(5, showDouble).
//
// Ожидаемый вывод:
// 10

function runWithNumber(number, callback) {
    callback(number);
}

function showDouble(number) {
    console.log(number * 2);
}

runWithNumber(5, showDouble);

// Callback — задача 8/20

// Условие:
// Напиши функцию runWithUser.
// Функция должна принимать два параметра:
// user
// callback
//
// Внутри runWithUser нужно вызвать callback
// и передать в него user.
//
// Создай объект user8:
// name: "Maria"
// age: 30
//
// Вызови runWithUser и передай туда user8
// и стрелочную функцию, которая выводит имя пользователя.
//
// Ожидаемый вывод:
// Maria

const user8 = {
    name: "Maria",
    age: 30,
};

function runWithUser(user, callback) {
    callback(user);
}

runWithUser(user8, user => {
    console.log(
        user.name)
});

// Callback — задача 9/20

// Условие:
// Напиши функцию runWithArray.
// Функция должна принимать два параметра:
// array
// callback
//
// Внутри runWithArray нужно вызвать callback
// и передать в него array.
//
// Создай массив numbers9: [1, 2, 3].
//
// Вызови runWithArray и передай туда numbers9
// и стрелочную функцию, которая выводит длину массива.
//
// Ожидаемый вывод:
// 3

function runWithArray(array, callback) {
    callback(array);
}

const numbers9 = [1,2,3];

runWithArray(numbers9, number => {
    console.log(number.length)
});

// Callback — задача 10/20

// Условие:
// Напиши функцию runWithElement.
// Функция должна принимать три параметра:
// array
// index
// callback
//
// Внутри runWithElement нужно взять элемент массива по index
// и передать этот элемент в callback.
//
// Создай массив users10:
// ["Alex", "Maria", "Tom"]
//
// Вызови runWithElement(users10, 1, ...)
// и передай callback, который выводит элемент.
//
// Ожидаемый вывод:
// Maria

function runWithElement(array, index, callback) {
    callback(array[index]);
}

const users10 = ["Alex", "Maria", "Tom"];

runWithElement(users10, 1, user => {
    console.log(user);
});

// Callback — задача 11/20

// Условие:
// Напиши функцию calculate.
// Функция должна принимать три параметра:
// a
// b
// callback
//
// Внутри calculate нужно вернуть результат вызова callback(a, b).
//
// Создай функцию add,
// которая принимает два числа и возвращает их сумму.
//
// Вызови calculate(5, 3, add)
// и выведи результат в консоль.
//
// Ожидаемый вывод:
// 8

function calculate(a, b, callback) {
    return callback(a, b);
}

function add(num1, num2) {
    return num1 + num2;
}

console.log(calculate(5, 3, add));

// Callback — задача 12/20

// Условие:
// Напиши функцию calculate12.
// Функция должна принимать три параметра:
// a
// b
// callback
//
// Внутри calculate12 нужно вернуть результат вызова callback(a, b).
//
// Вызови calculate12(10, 4, ...)
// и передай стрелочную функцию,
// которая возвращает разницу a - b.
//
// Выведи результат в консоль.
//
// Ожидаемый вывод:
// 6

function calculate12(a, b, callback) {
    return callback(a, b);
}

console.log(calculate12(10, 4, (a, b) => a - b ));

// Callback — задача 13/20

// Условие:
// Напиши функцию transform.
// Функция должна принимать два параметра:
// value
// callback
//
// Внутри transform нужно вернуть результат вызова callback(value).
//
// Вызови transform(10, ...)
// и передай стрелочную функцию,
// которая умножает значение на 2.
//
// Выведи результат в консоль.
//
// Ожидаемый вывод:
// 20

function transform(value, callback) {
    return callback(value);
}

console.log(transform(10, a => a * 2));

// Callback — задача 14/20

// Условие:
// Напиши функцию checkValue.
// Функция должна принимать два параметра:
// value
// callback
//
// Внутри checkValue нужно вернуть результат вызова callback(value).
//
// Вызови checkValue(18, ...)
// и передай callback,
// который возвращает true, если значение больше или равно 18.
//
// Выведи результат в консоль.
//
// Ожидаемый вывод:
// true

function checkValue(value, callback) {
    return callback(value);
}

console.log(checkValue(18, a => a >= 18 ));

// Callback — задача 15/20

// Условие:
// Напиши функцию processUser15.
// Функция должна принимать два параметра:
// user
// callback
//
// Внутри processUser15 нужно вернуть результат вызова callback(user).
//
// Создай объект user15:
// name: "Alex"
// age: 25
//
// Вызови processUser15(user15, ...)
// и передай callback,
// который возвращает строку:
// "Alex, 25"
//
// Выведи результат в консоль.
//
// Ожидаемый вывод:
// Alex, 25

function processUser15(user, callback) {
    return callback(user);
}

const user15 = {
    name: "Alex",
    age: 25,
};

console.log(processUser15(user15, u => `${u.name}, ${u.age}`));

// Callback — задача 16/20

// Условие:
// Напиши функцию forEach16.
// Функция должна принимать два параметра:
// array
// callback
//
// Внутри forEach16 нужно пройтись по массиву.
// Для каждого элемента нужно вызвать callback
// и передать в него:
// element
// index
//
// Функция forEach16 ничего не возвращает.
//
// Создай массив names16:
// ["Alex", "Maria", "Tom"]
//
// Вызови forEach16(names16, ...)
// и передай callback,
// который выводит:
// 0: Alex
// 1: Maria
// 2: Tom
//
// Ожидаемый вывод:
// 0: Alex
// 1: Maria
// 2: Tom

function forEach16(array, callback) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        callback(element, index);
    }
}

const names16 = ["Alex", "Maria", "Tom"];

forEach16(names16, (element, index) => {
    console.log(`${index}: ${element}`);
});

// Callback — задача 17/20

// Условие:
// Напиши функцию map17.
// Функция должна принимать два параметра:
// array
// callback
//
// Внутри map17 нужно создать новый массив.
// Нужно пройтись по array.
// Для каждого элемента вызвать callback(element, index).
// Результат вызова callback добавить в новый массив.
// В конце вернуть новый массив.
//
// Создай массив numbers17:
// [1, 2, 3]
//
// Вызови map17(numbers17, ...)
// и передай callback,
// который умножает каждое число на 2.
//
// Выведи результат.
//
// Ожидаемый вывод:
// [2, 4, 6]

function map17(array, callback) {
    let arr = [];

    for(let ind = 0; ind < array.length; ind++) {
        let el = array[ind];
        arr.push(callback(el, ind));
    }
    return arr;
}

const numbers17 = [1, 2, 3];

console.log(map17(numbers17, (el, ind) => el * 2));

// Callback — задача 18/20

// Условие:
// Напиши функцию filter18.
// Функция должна принимать два параметра:
// array
// callback
//
// Внутри filter18 нужно создать новый массив.
// Нужно пройтись по array.
// Для каждого элемента вызвать callback(element, index).
// Если callback вернул true,
// добавить исходный element в новый массив.
// В конце вернуть новый массив.
//
// Создай массив numbers18:
// [1, 2, 3, 4, 5]
//
// Вызови filter18(numbers18, ...)
// и передай callback,
// который оставляет только нечётные числа.
//
// Выведи результат.
//
// Ожидаемый вывод:
// [1, 3, 5]

function filter18(array, callback) {
    let newArr = [];

    for (let ind = 0; ind < array.length; ind++) {
        let el = array[ind];

        if (callback(el, ind)) {
            newArr.push(el)
        }
    }
    return newArr;
}

const numbers18 = [1, 2, 3, 4, 5];

console.log(filter18(numbers18, (el, ind) => el % 2 === 1));

// Callback — задача 19/20

// Условие:
// Напиши функцию find19.
// Функция должна принимать два параметра:
// array
// callback
//
// Нужно пройтись по array.
// Для каждого элемента вызвать callback(element, index).
// Если callback вернул true,
// сразу вернуть этот element.
// Если ничего не найдено,
// вернуть undefined.
//
// Создай массив
//
// Вызови find19(users19, ...)
// и передай callback,
// который ищет пользователя с id 2.
//
// Выведи результат.
//
// Ожидаемый вывод:
// { id: 2, name: "Maria" }

function find19(array, callback) {
    for (let ind = 0; ind < array.length; ind++) {
        let el = array[ind];
        if (callback(el, ind))  {
            return el;
        }
    }
    return undefined;
}

const users19 =
    [
        { id: 1, name: "Alex" },
        { id: 2, name: "Maria" },
        { id: 3, name: "Tom" }
    ]

console.log(find19(users19, (el, ind) => el.id === 2));

// Callback — задача 20/20

// Условие:
// Напиши функцию some20.
// Функция должна принимать два параметра:
// array
// callback
//
// Нужно пройтись по array.
// Для каждого элемента вызвать callback(element, index).
// Если callback вернул true,
// сразу вернуть true.
// Если ни один элемент не подошёл,
// вернуть false.
//
// Создай массив
//
// Вызови some20(tasks20, ...)
// и передай callback,
// который проверяет, есть ли невыполненная задача.
//
// Выведи результат.
//
// Ожидаемый вывод:
// true

function some20(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const el = array[i]

        if(callback(el, i)) {
            return true;
        }
    }
    return false;
}

tasks20 =
    [
        { id: 1, completed: true },
        { id: 2, completed: false },
        { id: 3, completed: true }
    ]

console.log(some20(tasks20, (el, i) => el.completed === false));

/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:




 // Должен вывести: [1, 3, 5]
*/

const filter = (array, callback) => {
    let arr = [];

    for (let index = 0; index < array.length; index++) {
        let element = array[index];

        if (callback(element, index)) {
            arr.push(element);
        }
    }
    return arr;
}

const numbers = [1, 2, 3, 4, 5];
const oddNumbers = filter(numbers, (element, index) => {
    return element % 2 !== 0
});
console.log(oddNumbers);

const library = [
    { title: "Убийство в Восточном экспрессе", author: "Агата Кристи", genre: "детектив" },
    { title: "Ведьмак", author: "Анджей Сапковский", genre: "фэнтези" },
    { title: "Научное мышление", author: "Карл Поппер", genre: "наука" },
    { title: "Властелин колец", author: "Дж. Р. Р. Толкиен", genre: "фэнтези" },
    { title: "1984", author: "Джордж Оруэлл", genre: "дистопия" }
];


const fantasyBooks = library.filter((book) => {
    if (book.genre === "фэнтези") {
        return book;
    }
});

console.log("Фэнтезийные книги в библиотеке:", fantasyBooks)


// Смешанная практика — задача 1/30

// Условие:
// Дан массив usersPractice1.
//
// Нужно:
// 1. Получить всех активных пользователей старше или равных 18 лет.
// 2. Создать массив карточек.
// 3. В каждой карточке должны быть свойства:
//    name
//    label
// 4. label должен быть строкой:
//    "Alex, 25"
// 5. Исходный массив usersPractice1 не изменяй.
// 6. Выведи массив карточек.
//
// Ожидаемый результат:
// [
//   { name: "Alex", label: "Alex, 25" },
//   { name: "Kate", label: "Kate, 28" }
// ]

const usersPractice1 = [
    { id: 1, name: "Alex", age: 25, isActive: true },
    { id: 2, name: "Tom", age: 17, isActive: true },
    { id: 3, name: "Maria", age: 30, isActive: false },
    { id: 4, name: "Kate", age: 28, isActive: true },
];

const adultUsersPractice1 = usersPractice1
    .filter(user => user.age >= 18 && user.isActive)
    .map(user => ({
        name: user.name,
        label: `${user.name}, ${user.age}`,
    }));

console.log(adultUsersPractice1);

// Смешанная практика — задача 2/30

// Условие:
// Дан массив productsPractice2.
//
// Нужно:
// 1. Найти товар с id 2.
// 2. Если товар найден, создать новый массив updatedProductsPractice2.
// 3. В новом массиве у товара с id 2 price должен стать 750.
// 4. Остальные товары должны остаться без изменений.
// 5. Исходный массив productsPractice2 не изменяй.
// 6. Выведи найденный товар.
// 7. Выведи updatedProductsPractice2.
//
// Ожидаемый updatedProductsPractice2:
// [
//   { id: 1, title: "Laptop", price: 1200 },
//   { id: 2, title: "Phone", price: 750 },
//   { id: 3, title: "Tablet", price: 500 }
// ]

const productsPractice2 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const selectedProductPractice2 = productsPractice2.find(p => p.id === 2);

const updatedProductsPractice2 = productsPractice2.map(p =>
    p.id === 2 ? ({ ...p, price: 750 }) : p);

console.log(selectedProductPractice2);
console.log(updatedProductsPractice2);

// Смешанная практика — задача 3/30
// Контекст:
// В приложении задач пользователь отметил задачу "Practice JS" выполненной.
// Нужно подготовить новое состояние для UI.
//
// Задача:
// 1. Найди задачу с id 2.
// 2. Подготовь новый массив задач, где у этой задачи completed = true.
// 3. Старый массив tasksPractice3 менять нельзя.
// 4. Подготовь объект statsPractice3:
//    total — общее количество задач
//    completed — количество выполненных задач после обновления
//    active — количество невыполненных задач после обновления
// 5. Выведи найденную задачу, новый массив задач и statsPractice3.

const tasksPractice3 = [
    { id: 1, title: "Watch lesson", completed: true },
    { id: 2, title: "Practice JS", completed: false },
    { id: 3, title: "Rest", completed: false },
];

const foundTask3 = tasksPractice3.find(t => t.id === 2);
const uploadedTasks3 = tasksPractice3.map(t => t.id === 2 ? {
    ...t,
    completed: true,
} : t);

const statsPractice3 = uploadedTasks3.reduce((acc, t) => {
    acc.total += 1;

    if (t.completed === true) {
        acc.completed += 1;
    } else {
        acc.active += 1;
    }
    return acc;
}, {
    total: 0,
    completed: 0,
    active: 0,
});


console.log(foundTask3);
console.log(uploadedTasks3);
console.log(statsPractice3);

// Смешанная практика — задача 4/30
// Контекст:
// На странице поста пользователь поставил лайк.
// Нужно подготовить новое состояние поста для интерфейса.
//
// Задача:
// 1. Если likedByMe === false, увеличь likes на 1 и сделай likedByMe true.
// 2. Если likedByMe уже true, пост должен остаться без изменений.
// 3. Исходный объект postPractice4 менять нельзя.
// 4. Подготовь новый объект updatedPostPractice4.
// 5. Выведи старый пост и обновлённый пост.

const postPractice4 = {
    id: 1,
    title: "Objects in JS",
    likes: 5,
    likedByMe: false,
};

 const updatedPostPractice4 = postPractice4.likedByMe ?
     postPractice4
     : {...postPractice4,
     likes: postPractice4.likes + 1,
     likedByMe: true };

console.log(postPractice4);
console.log(updatedPostPractice4);

// Смешанная практика — задача 5/30
// Контекст:
// В корзине пользователь увеличил количество товара Phone.
// Нужно подготовить новое состояние корзины и пересчитать итоговую сумму.
//
// Задача:
// 1. У товара с id 2 увеличь quantity на 1.
// 2. Исходный массив cartPractice5 менять нельзя.
// 3. Подготовь новый массив updatedCartPractice5.
// 4. Подготовь число totalPractice5 — итоговую сумму корзины после обновления.
// 5. Выведи updatedCartPractice5 и totalPractice5.

const cartPractice5 = [
    { id: 1, title: "Laptop", price: 1200, quantity: 1 },
    { id: 2, title: "Phone", price: 800, quantity: 1 },
    { id: 3, title: "Case", price: 100, quantity: 2 },
];

const updatedCartPractice5 = [...cartPractice5].map(c => c.id === 2 ? {...c, quantity: c.quantity + 1} : c);

const totalPractice5 = updatedCartPractice5.reduce((acc, c) => {
    acc += c.price * c.quantity;
    return acc;
}, 0);

console.log(updatedCartPractice5);
console.log(totalPractice5);

// Смешанная практика — задача 6/30
// Контекст:
// В интерфейсе комментариев нужно показать только комментарии текущего пользователя
// и краткую статистику по ним.
//
// Задача:
// 1. Получи комментарии пользователя с userId 10.
// 2. Подготовь массив cardsPractice6.
//    В каждой карточке должны быть:
//    id
//    text
//    label в формате "Comment 1: Good"
// 3. Подготовь объект statsPractice6:
//    count — количество комментариев пользователя
//    likes — сумма лайков этих комментариев
// 4. Исходный массив commentsPractice6 менять нельзя.
// 5. Выведи cardsPractice6 и statsPractice6.

const commentsPractice6 = [
    { id: 1, userId: 10, text: "Good", likes: 2 },
    { id: 2, userId: 20, text: "Thanks", likes: 1 },
    { id: 3, userId: 10, text: "Useful", likes: 5 },
];

const foundUserId10 = commentsPractice6.filter(u => u.userId === 10);

const cardsPractice6 = foundUserId10.map(c => ({
    id: c.id,
    text: c.text,
    label: `Comment ${c.id}: ${c.text}`,
}));

const statsPractice6 = foundUserId10.reduce((acc,s) => {
    acc.likes += s.likes;
    acc.count += 1;
        return acc;
}, {
    count: 0,
    likes: 0,
});

console.log(cardsPractice6);
console.log(statsPractice6);

// Смешанная практика — задача 7/30
// Контекст:
// В форме регистрации нужно проверить поля и подготовить состояние формы.
//
// Задача:
// 1. Проверь, все ли поля заполнены.
//    Поле считается заполненным, если value не равен "".
// 2. Подготовь объект formStatePractice7:
//    isValid — true/false
//    errors — массив ошибок
// 3. Если форма невалидна, добавь в errors строку "All fields are required".
// 4. Исходный массив fieldsPractice7 менять нельзя.
// 5. Выведи formStatePractice7.

const fieldsPractice7 = [
    { name: "email", value: "test@mail.com" },
    { name: "password", value: "12345" },
    { name: "city", value: "" },
];

const isValid = fieldsPractice7.every(f => f.value !== "");

const formStatePractice7 = {
    isValid,
    errors: isValid ? [] : ["All fields are required"],
};

console.log(isValid);
console.log(formStatePractice7);

// Смешанная практика — задача 8/30
// Контекст:
// В приложении нужно отобразить настройки пользователя в виде списка,
// чтобы вывести их в UI.
//
// Задача:
// 1. Преобразуй объект settingsPractice8 в массив settingsListPractice8.
// 2. Каждый элемент массива должен быть объектом:
//    key
//    value
//    label
// 3. label должен быть строкой "theme: dark".
// 4. Исходный объект settingsPractice8 менять нельзя.
// 5. Выведи settingsListPractice8.

const settingsPractice8 = {
    theme: "dark",
    language: "ru",
    notifications: true,
};

const settingsListPractice8 = Object.entries(settingsPractice8).map(([key, value]) => {
    return {key: key, value: value, label: `${key}: ${value}`};
});

console.log(settingsListPractice8);

// Смешанная практика — задача 9/30
// Контекст:
// С сервера пришёл объект с данными пользователя.
// Нужно подготовить компактную карточку профиля для UI.
//
// Задача:
// 1. Проверь, что responsePractice9.status равен "success".
// 2. Если статус успешный, подготовь объект profileCardPractice9.
// 3. В карточке должны быть:
//    name
//    city
//    email
//    skillsCount
// 4. skillsCount — количество навыков.
// 5. Если статус неуспешный, profileCardPractice9 должен быть null.
// 6. Выведи profileCardPractice9.

const responsePractice9 = {
    status: "success",
    data: {
        user: {
            profile: {
                name: "Alex",
                city: "Seoul",
            },
            contacts: {
                email: "alex@mail.com",
            },
            skills: ["HTML", "CSS", "JavaScript"],
        },
    },
};

const isSuccess = responsePractice9.status === "success";
let profileCardPractice9;
if (isSuccess) {
    profileCardPractice9 = {
        name: responsePractice9.data.user.profile.name,
        city: responsePractice9.data.user.profile.city,
        email: responsePractice9.data.user.contacts.email,
        skillsCount: responsePractice9.data.user.skills.length,
    };
} else {
    profileCardPractice9 = null;
}

console.log(profileCardPractice9);

// Смешанная практика — задача 10/30
// Контекст:
// На странице каталога нужно показать только доступные товары
// и подготовить summary для верхней панели.
//
// Задача:
// 1. Получи товары, у которых stock > 0.
// 2. Подготовь массив productCardsPractice10.
//    В карточке должны быть:
//    id
//    title
//    label в формате "Laptop - 1200"
// 3. Подготовь объект catalogSummaryPractice10:
//    availableCount — количество доступных товаров
//    totalValue — сумма price всех доступных товаров
// 4. Исходный массив productsPractice10 менять нельзя.
// 5. Выведи productCardsPractice10 и catalogSummaryPractice10.

const productsPractice10 = [
    { id: 1, title: "Laptop", price: 1200, stock: 3 },
    { id: 2, title: "Phone", price: 800, stock: 0 },
    { id: 3, title: "Tablet", price: 500, stock: 5 },
];

const availableProductsPractice10 = productsPractice10.filter(p => p.stock > 0);
const productCardsPractice10 = availableProductsPractice10.map(p => ({
        id: p.id,
        title: p.title,
        label: `${p.title} - ${p.price}`,
    }));
const catalogSummaryPractice10 = availableProductsPractice10.reduce((acc, p) => {
    acc.availableCount += 1;
    acc.totalValue += p.price;
    return acc;
},{
    availableCount: 0,
    totalValue: 0,
});

console.log(productCardsPractice10);
console.log(availableProductsPractice10);
console.log(catalogSummaryPractice10);


// Смешанная практика — задача 11/30
// Контекст:
// В приложении есть список пользователей и выбранный пользователь.
// Нужно подготовить состояние для UI после смены выбранного пользователя.
//
// Задача:
// 1. Найди пользователя с id 3.
// 2. Подготовь новый массив users,
//    где у пользователя с id 3 isSelected = true,
//    а у всех остальных isSelected = false.
// 3. Подготовь объект uiStatePractice11:
//    selectedUserName — имя выбранного пользователя
//    users — новый массив пользователей
// 4. Исходный массив usersPractice11 менять нельзя.
// 5. Выведи uiStatePractice11.

const usersPractice11 = [
    { id: 1, name: "Alex", isSelected: true },
    { id: 2, name: "Maria", isSelected: false },
    { id: 3, name: "Tom", isSelected: false },
];

const foundUserId = usersPractice11.find(u => u.id === 3);
const users = usersPractice11.map(u => ({
    ...u,
    isSelected: u.id === 3
}));
const uiStatePractice11 = {
    selectedUserName: foundUserId.name,
    users,
};

console.log(usersPractice11);
console.log(uiStatePractice11);

// Смешанная практика — задача 12/30
// Контекст:
// В приложении уведомлений пользователь нажал "Mark all as read".
// Нужно подготовить новое состояние уведомлений.
//
// Задача:
// 1. Подготовь новый массив notifications,
//    где у всех уведомлений read = true.
// 2. Подготовь объект notificationsStatePractice12:
//    notifications — новый массив уведомлений
//    unreadCount — количество непрочитанных уведомлений после обновления
// 3. Исходный массив notificationsPractice12 менять нельзя.
// 4. Выведи notificationsStatePractice12.

const notificationsPractice12 = [
    { id: 1, text: "Welcome", read: true },
    { id: 2, text: "Update available", read: false },
    { id: 3, text: "New message", read: false },
];

const notifications = notificationsPractice12.map(n => ({...n, read: true}));
const unreadNotifications = notifications.filter(n => !n.read).length;

const notificationsStatePractice12 = {
    notifications,
    unreadCount: unreadNotifications,
};

console.log(notificationsPractice12);
console.log(notifications);
console.log(notificationsStatePractice12);

// Смешанная практика — задача 13/30
// Контекст:
// В корзине пользователь удалил товар.
// Нужно подготовить новое состояние корзины для UI.
//
// Задача:
// 1. Удали товар с id 2.
// 2. Исходный массив cartPractice13 менять нельзя.
// 3. Подготовь новый массив updatedCartPractice13.
// 4. Подготовь объект cartSummaryPractice13:
//    itemsCount — общее количество позиций после удаления
//    total — итоговая сумма после удаления
// 5. Выведи updatedCartPractice13 и cartSummaryPractice13.

const cartPractice13 = [
    { id: 1, title: "Laptop", price: 1200, quantity: 1 },
    { id: 2, title: "Phone", price: 800, quantity: 2 },
    { id: 3, title: "Case", price: 100, quantity: 2 },
];

const updatedCartPractice13 = cartPractice13.filter(c => c.id !== 2);
const cartSummaryPractice13 = updatedCartPractice13.reduce((acc, c) => {
    acc.itemsCount += 1;
    acc.total += c.price * c.quantity;
    return acc;
}, {
    itemsCount: 0,
    total: 0,
});

console.log(updatedCartPractice13);
console.log(cartSummaryPractice13);

// Смешанная практика — задача 14/30
// Контекст:
// В UI нужно показать бейдж "Admin online",
// если в системе есть активный админ.
//
// Задача:
// 1. Проверь, есть ли пользователь с role "admin" и isOnline true.
// 2. Подготовь объект badgePractice14:
//    visible — true/false
//    text — если бейдж видим, "Admin online", иначе "".
// 3. Исходный массив usersPractice14 менять нельзя.
// 4. Выведи badgePractice14.

const usersPractice14 = [
    { id: 1, name: "Alex", role: "user", isOnline: true },
    { id: 2, name: "Maria", role: "admin", isOnline: false },
    { id: 3, name: "Kate", role: "admin", isOnline: true },
];

const isAdmin = usersPractice14.some(u => u.role === "admin" && u.isOnline);
const badgePractice14 = isAdmin ? {
    visible: true,
    text: "Admin online" }
    : {
        visible: false,
        text: "" } ;

console.log(badgePractice14);

// Смешанная практика — задача 15/30
// Контекст:
// В профиле пользователя нужно подготовить публичные данные,
// не включая приватные поля.
//
// Задача:
// 1. Создай объект publicUserPractice15.
// 2. В него должны попасть все свойства userPractice15,
//    кроме password.
// 3. Исходный объект userPractice15 менять нельзя.
// 4. Выведи publicUserPractice15.

const userPractice15 = {
    id: 1,
    name: "Alex",
    email: "alex@mail.com",
    password: "secret123",
};

const {password, ...publicUserPractice15} = userPractice15;

console.log(userPractice15);
console.log(publicUserPractice15);

// Смешанная практика — задача 16/30
// Контекст:
// С сервера пришёл список заказов.
// Нужно подготовить данные для страницы "Мои заказы".
//
// Задача:
// 1. Получи только заказы пользователя с userId 2.
// 2. Подготовь массив orderCardsPractice16.
//    В карточке должны быть:
//    id
//    label в формате "Order #2: 1600"
// 3. Подготовь summaryPractice16:
//    ordersCount — количество заказов пользователя
//    total — сумма заказов пользователя
// 4. Исходный массив ordersPractice16 менять нельзя.
// 5. Выведи orderCardsPractice16 и summaryPractice16.

const ordersPractice16 = [
    { id: 1, userId: 1, total: 1200 },
    { id: 2, userId: 2, total: 1600 },
    { id: 3, userId: 2, total: 200 },
    { id: 4, userId: 3, total: 500 },
];

const foundOrdersUserId = ordersPractice16.filter(u => u.userId === 2);
const orderCardsPractice16 = foundOrdersUserId.map(u => ({
    id: u.id,
    label: `Order #${u.id}: ${u.total}`,
}));
const summaryPractice16 = foundOrdersUserId.reduce((acc, c) => {
    acc.ordersCount += 1;
    acc.total += c.total;
    return acc;
}, {
    ordersCount: 0,
    total: 0,
});

console.log(orderCardsPractice16);
console.log(summaryPractice16);

// Смешанная практика — задача 17/30
// Контекст:
// В настройках пользователь переключил язык интерфейса.
// Нужно подготовить новый объект настроек.
//
// Задача:
// 1. Создай новый объект updatedSettingsPractice17.
// 2. В нём language должен стать "en".
// 3. Остальные настройки должны остаться без изменений.
// 4. Исходный объект settingsPractice17 менять нельзя.
// 5. Выведи старые и новые настройки.

const settingsPractice17 = {
    theme: "dark",
    language: "ru",
    notifications: true,
};

const updatedSettingsPractice17 = {...settingsPractice17, language: "en"};

console.log(settingsPractice17);
console.log(updatedSettingsPractice17);

// Смешанная практика — задача 18/30
// Контекст:
// В приложении профиля пользователь изменил город.
// Данные профиля вложены в объект user.
//
// Задача:
// 1. Создай новый объект updatedUserPractice18.
// 2. В нём profile.city должен стать "Busan".
// 3. Остальные данные должны остаться без изменений.
// 4. Исходный объект userPractice18 менять нельзя.
// 5. Выведи старого и нового пользователя.

const userPractice18 = {
    id: 1,
    profile: {
        name: "Alex",
        city: "Seoul",
    },
    contacts: {
        email: "alex@mail.com",
    },
};

const updatedUserPractice18 = {...userPractice18, profile: {
    ...userPractice18.profile,
        city: "Busan",
    }};

console.log(userPractice18);
console.log(updatedUserPractice18);


// Смешанная практика — задача 20/30
// Контекст:
// В списке пользователей нужно показать только тех,
// кто может получить доступ к закрытому разделу.
//
// Задача:
// 1. Пользователь получает доступ, если:
//    age >= 18
//    и isBlocked === false.
// 2. Подготовь массив allowedUsersPractice20.
// 3. В массиве должны быть только пользователи с доступом.
// 4. Подготовь массив allowedUserCardsPractice20.
//    В карточке должны быть:
//    id
//    label в формате "Alex (25)"
// 5. Исходный массив usersPractice20 менять нельзя.
// 6. Выведи allowedUserCardsPractice20.

const usersPractice20 = [
    { id: 1, name: "Alex", age: 25, isBlocked: false },
    { id: 2, name: "Tom", age: 17, isBlocked: false },
    { id: 3, name: "Maria", age: 30, isBlocked: true },
    { id: 4, name: "Kate", age: 22, isBlocked: false },
];

const allowedUsersPractice20 = usersPractice20.filter(u => u.age >=18 && !u.isBlocked);
const allowedUserCardsPractice20 = allowedUsersPractice20.map(u => ({
    id: u.id,
    label: `${u.name} (${u.age})`,
}));

console.log(allowedUserCardsPractice20);

// Смешанная практика — задача 21/30
// Контекст:
// В каталоге нужно показать сообщение,
// если есть хотя бы один товар не в наличии.
//
// Задача:
// 1. Проверь, есть ли товар со stock === 0.
// 2. Подготовь объект stockBadgePractice21:
//    visible — true/false
//    text — если есть товар не в наличии, "Some products are out of stock",
//           иначе "".
// 3. Исходный массив productsPractice21 менять нельзя.
// 4. Выведи stockBadgePractice21.

const productsPractice21 = [
    { id: 1, title: "Laptop", stock: 3 },
    { id: 2, title: "Phone", stock: 0 },
    { id: 3, title: "Tablet", stock: 5 },
];

const isStock = productsPractice21.some(p => p.stock === 0);
let stockBadgePractice21;

if (isStock) {
     stockBadgePractice21 = {
        visible: true,
        text: "Some products are out of stock",
    };
} else { stockBadgePractice21 = {
    visible: false,
    text: "",
};
}

console.log(stockBadgePractice21);

// Смешанная практика — задача 22/30
// Контекст:
// В форме нужно показать список ошибок.
// Ошибки приходят объектом, где ключ — имя поля,
// а значение — текст ошибки.
//
// Задача:
// 1. Преобразуй объект errorsPractice22 в массив errorListPractice22.
// 2. Каждый элемент массива должен быть объектом:
//    field
//    message
//    label в формате "email: Email is required"
// 3. Исходный объект errorsPractice22 менять нельзя.
// 4. Выведи errorListPractice22.

const errorsPractice22 = {
    email: "Email is required",
    password: "Password is too short",
};

const errorListPractice22 = Object.entries(errorsPractice22).map(([key, value]) => ({
    field: key,
    message: value,
    label: `${key}: ${value}`,
}));

console.log(errorListPractice22);

// Смешанная практика — задача 23/30
// Контекст:
// В профиле пользователя нужно отобразить список навыков,
// но сначала нужно нормализовать строки.
//
// Задача:
// 1. Подготовь массив normalizedSkillsPractice23.
// 2. Каждый навык должен быть:
//    без пробелов по краям
//    в нижнем регистре
// 3. Удали пустые строки.
// 4. Исходный массив skillsPractice23 менять нельзя.
// 5. Выведи normalizedSkillsPractice23.

const skillsPractice23 = [" HTML ", "CSS", "", " JavaScript ", "React"];

const normalizedSkillsPractice23 = skillsPractice23.map(s => s
    .trim()
    .toLowerCase())
    .filter(s => s !== "");

console.log(normalizedSkillsPractice23);

// Смешанная практика — задача 24/30
// Контекст:
// В поиске товаров пользователь ввёл строку.
// Нужно показать товары, название которых содержит поисковый запрос.
//
// Задача:
// 1. Нормализуй searchQueryPractice24:
//    убери пробелы по краям
//    переведи в нижний регистр.
// 2. Получи товары, title которых содержит поисковый запрос.
// 3. Поиск должен быть нечувствительным к регистру.
// 4. Исходный массив productsPractice24 менять нельзя.
// 5. Выведи найденные товары.

const searchQueryPractice24 = " phone ";

const productsPractice24 = [
    { id: 1, title: "Laptop" },
    { id: 2, title: "Phone" },
    { id: 3, title: "Headphones" },
];

const normalizedSearchQueryPractice24 = searchQueryPractice24.trim().toLowerCase();

const searchProductList = productsPractice24.filter(p => p.title.toLowerCase().includes(normalizedSearchQueryPractice24));
console.log(searchProductList);


// Смешанная практика — задача 25/30
// Контекст:
// Нужно подготовить безопасный публичный список пользователей,
// чтобы не отдавать приватные поля в UI.
//
// Задача:
// 1. Создай массив publicUsersPractice25.
// 2. В каждый объект должны попасть все поля пользователя,
//    кроме password.
// 3. Исходный массив usersPractice25 менять нельзя.
// 4. Выведи publicUsersPractice25.

const usersPractice25 = [
    { id: 1, name: "Alex", email: "alex@mail.com", password: "111" },
    { id: 2, name: "Maria", email: "maria@mail.com", password: "222" },
];

const publicUsersPractice25 = usersPractice25.map(u => {
    const { password, ...usersPractice25 } = u;
    return usersPractice25
})

console.log(publicUsersPractice25);

// Смешанная практика — задача 26/30
// Контекст:
// В приложении нужно добавить новый комментарий к посту
// и обновить summary поста.
//
// Задача:
// 1. Создай новый объект updatedPostPractice26.
// 2. В comments добавь новый комментарий:
//    { id: 3, userId: 10, text: "Great", likes: 0 }
// 3. В summary.commentsCount увеличь значение на 1.
// 4. Исходный объект postPractice26 менять нельзя.
// 5. Выведи updatedPostPractice26.

const postPractice26 = {
    id: 1,
    title: "Objects",
    comments: [
        { id: 1, userId: 10, text: "Useful", likes: 2 },
        { id: 2, userId: 20, text: "Thanks", likes: 1 },
    ],
    summary: {
        commentsCount: 2,
    },
};

const updatedPostPractice26 = {...postPractice26,
    comments:
       [...postPractice26.comments, { id: 3, userId: 10, text: "Great", likes: 0 }]
    ,
    summary:
        {
            ...postPractice26.summary,
            commentsCount: postPractice26.summary.commentsCount + 1,
        }
};

console.log(updatedPostPractice26);

// Смешанная практика — задача 27/30
// Контекст:
// Пользователь лайкнул комментарий внутри поста.
// Нужно подготовить новый объект поста для UI.
//
// Задача:
// 1. Создай updatedPostPractice27.
// 2. У комментария с id 2 увеличь likes на 1.
// 3. Остальные комментарии должны остаться без изменений.
// 4. Исходный объект postPractice27 менять нельзя.
// 5. Выведи updatedPostPractice27.

const postPractice27 = {
    id: 1,
    title: "Callbacks",
    comments: [
        { id: 1, text: "Good", likes: 2 },
        { id: 2, text: "Useful", likes: 5 },
    ],
};

const updatedPostPractice27 = {...postPractice27, comments:
    postPractice27.comments.map(c => c.id === 2 ? {...c, likes: c.likes + 1} : c)
}

console.log(updatedPostPractice27);

// Смешанная практика — задача 28/30
// Контекст:
// Нужно подготовить список товаров для отображения,
// но скрыть служебные поля.
//
// Задача:
// 1. Создай publicProductsPractice28.
// 2. В каждый объект должны попасть все поля,
//    кроме internalCode.
// 3. Исходный массив productsPractice28 менять нельзя.
// 4. Выведи publicProductsPractice28.

const productsPractice28 = [

    { id: 1, title: "Laptop", price: 1200, internalCode: "A-100" },
    { id: 2, title: "Phone", price: 800, internalCode: "B-200" },
];

const publicProductsPractice28 = productsPractice28.map(p => {
    const { internalCode, ...publicProduct } = p;
    return publicProduct;
});

console.log(publicProductsPractice28);

// Смешанная практика — задача 29/30
// Контекст:
// Нужно подготовить данные для dashboard.
// Есть пользователи и задачи.
// Нужно собрать summary для верхней панели.
//
// Задача:
// 1. Посчитай количество активных пользователей.
// 2. Посчитай количество выполненных задач.
// 3. Посчитай количество невыполненных задач.
// 4. Подготовь объект dashboardSummaryPractice29:
//    activeUsers
//    completedTasks
//    activeTasks
// 5. Исходные массивы менять нельзя.
// 6. Выведи dashboardSummaryPractice29.

const usersPractice29 = [
    { id: 1, name: "Alex", isActive: true },
    { id: 2, name: "Maria", isActive: false },
    { id: 3, name: "Tom", isActive: true },
];

const tasksPractice29 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: true },
];

const activeUsersPractice29 = usersPractice29.reduce((acc, u) => {
    if (u.isActive) {
        acc.activeUsers += 1;
    }
    return acc;
},{
    activeUsers: 0
});

const tasksStatesPractice29 = tasksPractice29.reduce((acc, t) => {
    if (t.completed) {
        acc.completed += 1;
    } else {
        acc.active += 1;
    }
    return acc;
}, {
    completed: 0,
    active: 0,
});

const dashboardSummaryPractice29 = {
    activeUsers: activeUsersPractice29.activeUsers,
    completedTasks: tasksStatesPractice29.completed,
    activeTasks: tasksStatesPractice29.active,
};



console.log(dashboardSummaryPractice29);

// Смешанная практика — задача 30/30
// Контекст:
// Нужно подготовить данные для страницы пользователя:
// профиль, заказы, карточки заказов и summary.
//
// Задача:
// 1. Найди пользователя с id 2.
// 2. Получи заказы этого пользователя.
// 3. Подготовь массив orderCardsPractice30.
//    В карточке должны быть:
//    id
//    label в формате "Order #2 — 1600"
// 4. Подготовь объект userPagePractice30:

// 5. Если пользователь не найден,
//    userPagePractice30 должен быть null.
// 6. Исходный объект dataPractice30 менять нельзя.
// 7. Выведи userPagePractice30.

const dataPractice30 = {
    users: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Maria" },
        { id: 3, name: "Tom" },
    ],
    orders: [
        { id: 1, userId: 1, total: 1200 },
        { id: 2, userId: 2, total: 1600 },
        { id: 3, userId: 2, total: 200 },
        { id: 4, userId: 3, total: 500 },
    ],
};

const foundUserIdPractice30 = dataPractice30.users.find(u => u.id === 2);
const orderCardsPractice30 = dataPractice30.orders
    .filter(o => o.userId === 2)
    .map(o => ({
        id: o.id,
        label: `Order #${o.id} - ${o.total}`,
    }));

const totalUserOrdersPractice30 = dataPractice30.orders.reduce((acc, o) => {
    if (o.userId === foundUserIdPractice30.id) {
        acc += o.total;
    }
    return acc;
}, 0);

let userPagePractice30;
if (foundUserIdPractice30) {
     userPagePractice30 = {
        userName: foundUserIdPractice30.name,
        ordersCount: orderCardsPractice30.length,
        total: totalUserOrdersPractice30,
        orderCards: orderCardsPractice30,
    };
} else {
     userPagePractice30 = null;
}

console.log(userPagePractice30);

// Смешанная практика — задача 19/30
// Контекст:
// В todo-приложении пользователь удалил задачу.
// Нужно подготовить новое состояние приложения.
//
// Задача:
// 1. Удали задачу с id 2.
// 2. Исходный объект statePractice19 менять нельзя.
// 3. Подготовь новый объект updatedStatePractice19.
// 4. В updatedStatePractice19:
//    todos — новый массив без задачи id 2
//    stats.total — количество задач после удаления
//    stats.completed — количество выполненных задач после удаления
//    stats.active — количество невыполненных задач после удаления
// 5. Выведи updatedStatePractice19.

const statePractice19 = {
    todos: [
        { id: 1, title: "Watch", completed: true },
        { id: 2, title: "Practice", completed: false },
        { id: 3, title: "Rest", completed: false },
    ],
    stats: {
        total: 3,
        completed: 1,
        active: 2,
    },
};

const updatedTodosPractice19 = statePractice19.todos.filter(t => t.id !== 2);

const updatedStats = updatedTodosPractice19.reduce((acc, t) => {
    acc.total += 1;

    if (t.completed) {
        acc.completed += 1;
    } else if (!t.completed){
        acc.active += 1;
    }
    return acc;
}, {
    total: 0,
    completed: 0,
    active: 0,
});

const updatedStatePractice19 =
    {...statePractice19,
        todos: updatedTodosPractice19,
        stats: updatedStats,
    };

console.log(updatedStatePractice19);