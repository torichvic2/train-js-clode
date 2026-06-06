"use strict";

// Задача 1 на тему "Создание и чтение свойств"

// Условие:
// Создай объект user.
// В объекте должны быть свойства:
// name со значением "Alex"
// age со значением 25
// city со значением "Seoul"
//
// Выведи в консоль отдельно:
// имя пользователя
// возраст пользователя
// город пользователя
//
// Ожидаемый вывод:
// Alex
// 25
// Seoul

const user = {
    name: "Alex",
    age: 25,
    city: "Seoul",
};

console.log(user.name);
console.log(user.age);
console.log(user.city);

// Задача 2 на тему "Создание и чтение свойств"

// Условие:
// Создай объект book.
// В объекте должны быть свойства:
// title со значением "JavaScript Basics"
// author со значением "Ivan Petrov"
// year со значением 2024
//
// Выведи в консоль отдельно:
// название книги
// автора книги
// год выпуска книги
//
// Ожидаемый вывод:
// JavaScript Basics
// Ivan Petrov
// 2024

const book = {
    title: "JavaScript Basics",
    author: "Ivan Petrov",
    year: 2024,
};

console.log(book.title);
console.log(book.author);
console.log(book.year);

// Задача 3 на тему "Создание и чтение свойств"

// Условие:
// Создай объект car.
// В объекте должны быть свойства:
// brand со значением "Toyota"
// model со значением "Camry"
// color со значением "black"
//
// Выведи в консоль отдельно:
// марку машины
// модель машины
// цвет машины
//
// Ожидаемый вывод:
// Toyota
// Camry
// black

const car = {
    brand: "Toyota",
    model: "Camry",
    color: "black",
};

console.log(car.brand);
console.log(car.model);
console.log(car.color);

// Задача 4 на тему "Создание и чтение свойств"

// Условие:
// Создай объект student.
// В объекте должны быть свойства:
// name со значением "Mila"
// grade со значением 5
//
// Выведи в консоль одну строку:
// Mila получила оценку 5
//
// Ожидаемый вывод:
// Mila получила оценку 5

const student = {
    name: "Mila",
    grade: 5,
};

console.log(`${student.name} получила оценку ${student.grade}`);

// Задача 5 на тему "Создание и чтение свойств"

// Условие:
// Создай объект product.
// В объекте должны быть свойства:
// title со значением "Laptop"
// price со значением 1200
//
// Выведи в консоль одну строку:
// Товар: Laptop, цена: 1200
//
// Ожидаемый вывод:
// Товар: Laptop, цена: 1200

const product = {
    title: "Laptop",
    price: 1200,
};

console.log(`Товар: ${product.title}, цена: ${product.price}`);

// Задача 6 на тему "Создание и чтение свойств"

// Условие:
// Создай объект user.
// В объекте должны быть свойства:
// name со значением "John"
// age со значением 30
//
// Сохрани значение свойства name в отдельную переменную userName.
// Затем выведи переменную userName в консоль.
//
// Ожидаемый вывод:
// John

const user_1 = {
    name: "John",
    age: 30,
};

const userName = user_1.name;
console.log(userName);

// Задача 7 на тему "Создание и чтение свойств"

// Условие:
// Создай объект userTask7.
// В объекте должны быть свойства:
// name со значением "Kate"
// isOnline со значением true
//
// Выведи в консоль значение свойства isOnline.
//
// Ожидаемый вывод:
// true

const userTask7 = {
    name: "Kate",
    isOnline: true,
};

console.log(userTask7.isOnline);

// Задача 8 на тему "Создание и чтение свойств"

// Условие:
// Создай объект userTask8.
// В объекте должны быть свойства:
// name со значением "Leo"
// isOnline со значением true
//
// Если пользователь онлайн, выведи в консоль:
// Leo is online
//
// Ожидаемый вывод:
// Leo is online

const userTask8 = {
    name: "Leo",
    isOnline: true,
};

if (userTask8.isOnline) {
    console.log(`${userTask8.name} is online`);
}

// Задача 9 на тему "Изменение, добавление, удаление свойств"

// Условие:
// Создай объект userTask9.
// В объекте должны быть свойства:
// name со значением "Anna"
// age со значением 20
//
// Измени значение свойства age на 21.
// Выведи в консоль весь объект userTask9.
//
// Ожидаемый вывод:
// { name: "Anna", age: 21 }

const userTask9 = {
    name: "Anna",
    age: 20,
};

userTask9.age = 21;
console.log(userTask9);

// Задача 10 на тему "Изменение, добавление, удаление свойств"

// Условие:
// Создай объект userTask10.
// В объекте должны быть свойства:
// name со значением "Max"
// age со значением 28
//
// Добавь объекту новое свойство email со значением "max@mail.com".
// Выведи в консоль весь объект userTask10.
//
// Ожидаемый вывод:
// { name: "Max", age: 28, email: "max@mail.com" }

const userTask10 = {
    name: "Max",
    age: 28,
};

userTask10.email = "max@mail.com";
console.log(userTask10);

// Задача 11 на тему "Изменение, добавление, удаление свойств"

// Условие:
// Создай объект userTask11.
// В объекте должны быть свойства:
// name со значением "Sara"
// age со значением 22
// city со значением "Paris"
//
// Удали свойство city.
// Выведи в консоль весь объект userTask11.
//
// Ожидаемый вывод:
// { name: "Sara", age: 22 }

const userTask11 = {
    name: "Sara",
    age: 22,
    city: "Paris",
};

delete userTask11.city;
console.log(userTask11);

// Задача 12 на тему "Изменение, добавление, удаление свойств"

// Условие:
// Создай объект productTask12.
// В объекте должны быть свойства:
// title со значением "Phone"
// price со значением 800
//
// Измени цену товара на 750.
// Выведи в консоль строку:
// Phone costs 750
//
// Ожидаемый вывод:
// Phone costs 750

const productTask12 = {
    title: "Phone",
    price: 800,
};

productTask12.price = 750;
console.log(`${productTask12.title} costs ${productTask12.price}`);

// Задача 13 на тему "Изменение, добавление, удаление свойств"

// Условие:
// Создай объект productTask13.
// В объекте должны быть свойства:
// title со значением "Tablet"
// price со значением 600
//
// Добавь объекту новое свойство isAvailable со значением true.
// Если товар доступен, выведи в консоль строку:
// Tablet is available
//
// Ожидаемый вывод:
// Tablet is available

const productTask13 = {
    title: "Tablet",
    price: 600,
};

productTask13.isAvailable = true;

if (productTask13.isAvailable) {
    console.log(`${productTask13.title} is available`);
}

// Задача 14 на тему "Изменение, добавление, удаление свойств"

// Условие:
// Создай объект profileTask14.
// В объекте должны быть свойства:
// name со значением "Nick"
// age со значением 35
// password со значением "12345"
//
// Удали свойство password.
// Выведи в консоль весь объект profileTask14.
//
// Ожидаемый вывод:
// { name: "Nick", age: 35 }

const profileTask14 = {
    name: "Nick",
    age: 35,
    password: "12345",
};

delete profileTask14.password;
console.log(profileTask14);

// Задача 15 на тему "Изменение, добавление, удаление свойств"

// Условие:
// Создай объект userTask15.
// В объекте должны быть свойства:
// name со значением "Olga"
// age со значением 27
// city со значением "Moscow"
//
// Измени:
// age на 28
// city на "Berlin"
//
// Выведи в консоль строку:
// Olga, 28, Berlin
//
// Ожидаемый вывод:
// Olga, 28, Berlin

const userTask15 = {
    name: "Olga",
    age: 27,
    city: "Moscow",
};

userTask15.age = 28;
userTask15.city = "Berlin";

console.log(`${userTask15.name}, ${userTask15.age}, ${userTask15.city}`);

// Задача 16 на тему "Изменение, добавление, удаление свойств"

// Условие:
// Создай пустой объект user16.
// Затем добавь ему свойства:
// name со значением "Tom"
// age со значением 19
// city со значением "London"
//
// Выведи в консоль весь объект user16.
//
// Ожидаемый вывод:
// { name: "Tom", age: 19, city: "London" }

const user16 = {};

user16.name = "Tom";
user16.age = 19;
user16.city = "London";

console.log(user16);

// Задача 17 на тему "Квадратные скобки и динамические ключи"

// Условие:
// Создай объект user17.
// В объекте должны быть свойства:
// name со значением "Alice"
// age со значением 24
//
// Выведи в консоль значение свойства name через квадратные скобки.
//
// Ожидаемый вывод:
// Alice

const user17 = {
    name: "Alice",
    age: 24,
};

console.log(user17["name"]);

// Задача 18 на тему "Квадратные скобки и динамические ключи"

// Условие:
// Создай объект user18.
// В объекте должны быть свойства:
// name со значением "Bob"
// age со значением 31
//
// Создай переменную key18 со значением "age".
// Выведи в консоль значение свойства, имя которого хранится в key18.
//
// Ожидаемый вывод:
// 31

const user18 = {
    name: "Bob",
    age: 31,
};

const key18 = "age";
console.log(user18[key18]);

// Задача 19 на тему "Квадратные скобки и динамические ключи"

// Условие:
// Создай пустой объект user19.
// Создай переменную key19 со значением "email".
//
// Добавь в объект user19 новое свойство,
// имя которого хранится в переменной key19,
// со значением "bob@mail.com".
//
// Выведи в консоль весь объект user19.
//
// Ожидаемый вывод:
// { email: "bob@mail.com" }

const user19 = {};
const key19 = "email";

user19[key19] = "bob@mail.com";

console.log(user19);

// Задача 20 на тему "Квадратные скобки и динамические ключи"

// Условие:
// Создай объект user20.
// В объекте должно быть свойство "user name" со значением "Chris".
// Обрати внимание: в названии свойства есть пробел.
//
// Выведи в консоль значение свойства "user name" через квадратные скобки.
//
// Ожидаемый вывод:
// Chris

const user20 = {
    "user name": "Chris",
};

console.log(user20["user name"]);

// Задача 21 на тему "Квадратные скобки и динамические ключи"

// Условие:
// Создай объект product21.
// В объекте должны быть свойства:
// title со значением "Monitor"
// price со значением 300
// brand со значением "LG"
//
// Создай переменную selectedKey21 со значением "brand".
// Выведи в консоль значение свойства,
// имя которого хранится в selectedKey21.
//
// Ожидаемый вывод:
// LG

const product21 = {
    title: "Monitor",
    price: 300,
    brand: "LG",
};

const selectedKey21 = "brand";

console.log(product21[selectedKey21]);

// Задача 22 на тему "Квадратные скобки и динамические ключи"

// Условие:
// Напиши функцию getValue22.
// Функция должна принимать два параметра:
// obj
// key
//
// Функция должна возвращать значение свойства объекта obj,
// имя которого хранится в параметре key.
//
// Создай объект user22:
// name со значением "Diana"
// age со значением 26
//
// Вызови функцию getValue22 с объектом user22 и ключом "name".
// Выведи результат в консоль.
//
// Ожидаемый вывод:
// Diana

function getValue22(obj, key) {
    return obj[key];
}

const user22 = {
    name: "Diana",
    age: 26,
};

console.log(getValue22(user22, "name"));

// Задача 23 на тему "Проверка свойств"

// Условие:
// Создай объект user23.
// В объекте должны быть свойства:
// name со значением "Alex"
// age со значением 25
//
// Проверь через оператор in, есть ли в объекте свойство "name".
// Выведи результат проверки в консоль.
//
// Ожидаемый вывод:
// true

const user23 = {
    name: "Alex",
    age: 25,
};

console.log("name" in user23);

// Задача 24 на тему "Проверка свойств"

// Условие:
// Создай объект user24.
// В объекте должны быть свойства:
// name со значением "Maria"
// age со значением 29
//
// Проверь через hasOwnProperty,
// есть ли у объекта собственное свойство "age".
// Выведи результат проверки в консоль.
//
// Ожидаемый вывод:
// true

const user24 = {
    name: "Maria",
    age: 29,
};

console.log(user24.hasOwnProperty("age"));

// Задача 25 на тему "Проверка свойств"

// Условие:
// Создай объект user25.
// В объекте должно быть свойство:
// name со значением "Tom"
//
// Проверь, есть ли в объекте свойство "city".
// Если свойства "city" нет, добавь его со значением "London".
//
// Выведи в консоль весь объект user25.
//
// Ожидаемый вывод:
// { name: "Tom", city: "London" }

const user25 = {
    name: "Tom",
};

if (!("city" in user25)) {
    user25.city = "London";
}

console.log(user25);

// Задача 26 на тему "Проверка свойств"

// Условие:
// Напиши функцию hasKey26.
// Функция должна принимать два параметра:
// obj
// key
//
// Функция должна возвращать true,
// если в объекте obj есть свойство с именем key.
// Иначе функция должна возвращать false.
//
// Создай объект user26:
// name со значением "Nina"
// age со значением 33
//
// Вызови функцию hasKey26 с объектом user26 и ключом "age".
// Выведи результат в консоль.
//
// Ожидаемый вывод:
// true

function hasKey26(obj, key) {
    return key in obj;
}

const user26 = {
    name: "Nina",
    age: 33,
};

console.log(hasKey26(user26, "age"));


// Задача 27 на тему "Перебор объекта через for...in"

// Условие:
// Создай объект user27.
// В объекте должны быть свойства:
// name со значением "Alex"
// age со значением 25
// city со значением "Seoul"
//
// С помощью цикла for...in выведи в консоль все ключи объекта.
//
// Ожидаемый вывод:
// name
// age
// city

const user27 = {
    name: "Alex",
    age: 25,
    city: "Seoul",
};

for (const key in user27) {
    console.log(key);
}

// Задача 28 на тему "Перебор объекта через for...in"

// Условие:
// Создай объект user28.
// В объекте должны быть свойства:
// name со значением "Maria"
// age со значением 30
// city со значением "Madrid"
//
// С помощью цикла for...in выведи в консоль все значения объекта.
//
// Ожидаемый вывод:
// Maria
// 30
// Madrid

const user28 = {
    name: "Maria",
    age: 30,
    city: "Madrid",
};

for (const key in user28) {
    console.log(user28[key]);
}

// Задача 29 на тему "Перебор объекта через for...in"

// Условие:
// Создай объект user29.
// В объекте должны быть свойства:
// name со значением "Oleg"
// age со значением 40
// city со значением "Kyiv"
//
// С помощью цикла for...in выведи в консоль пары ключ: значение.
//
// Ожидаемый вывод:
// name: Oleg
// age: 40
// city: Kyiv

const user29 = {
    name: "Oleg",
    age: 40,
    city: "Kyiv",
};

for (const key in user29) {
    console.log(`${key}: ${user29[key]}`);
}

// Задача 30 на тему "Перебор объекта через for...in"

// Условие:
// Создай объект user30.
// В объекте должны быть свойства:
// name со значением "Lena"
// age со значением 23
// city со значением "Rome"
//
// Посчитай количество свойств в объекте с помощью for...in.
// Выведи результат в консоль.
//
// Ожидаемый вывод:
// 3

const user30 = {
    name: "Lena",
    age: 23,
    city: "Rome",
};


let counter30 = 0;
for (const key in user30) {
        counter30++;
}
console.log(counter30);

// Задача 31 на тему "Перебор объекта через for...in"

// Условие:
// Создай объект scores31.
// В объекте должны быть свойства:
// math со значением 90
// english со значением 85
// history со значением 75
//
// Посчитай сумму всех значений объекта с помощью for...in.
// Выведи результат в консоль.
//
// Ожидаемый вывод:
// 250

const scores31 = {
    math: 90,
    english: 85,
    history: 75,
};

let result31 = 0;
for (const key in scores31) {
    result31 += scores31[key];
}

console.log(result31);

// Задача 32 на тему "Перебор объекта через for...in"

// Условие:
// Создай объект user32.
// В объекте должны быть свойства:
// name со значением "Kate"
// age со значением 28
// city со значением "Berlin"
//
// Создай пустой объект copy32.
// С помощью for...in скопируй все свойства из user32 в copy32.
//
// Выведи в консоль copy32.
//
// Ожидаемый вывод:
// { name: "Kate", age: 28, city: "Berlin" }

const user32 = {
    name: "Kate",
    age: 28,
    city: "Berlin",
};

const copy32 = {};

for (const key in user32) {
    copy32[key] = user32[key];
}

console.log(copy32);

// Задача 33 на тему "Вложенные объекты"

// Условие:
// Создай объект user33.
// В объекте должны быть свойства:
// name со значением "Alex"
// address со значением объекта.
//
// Внутри address должны быть свойства:
// city со значением "Seoul"
// street со значением "Main Street"
//
// Выведи в консоль весь объект user33.
//
// Ожидаемый вывод:
// {
//   name: "Alex",
//   address: {
//     city: "Seoul",
//     street: "Main Street"
//   }
// }

const user33 = {
    name: "Alex",
    address: {
        city: "Seoul",
        street: "Main Street",
    },
};

console.log(user33);

// Задача 34 на тему "Вложенные объекты"

// Условие:
// Создай объект user34.
// В объекте должны быть свойства:
// name со значением "Maria"
// address со значением объекта.
//
// Внутри address должны быть свойства:
// city со значением "Madrid"
// street со значением "Gran Via"
//
// Выведи в консоль только город пользователя.
//
// Ожидаемый вывод:
// Madrid

const user34 = {
    name: "Maria",
    address: {
        city: "Madrid",
        street: "Gran Via",
    },
};

console.log(user34.address.city);

// Задача 35 на тему "Вложенные объекты"

// Условие:
// Создай объект user35.
// В объекте должны быть свойства:
// name со значением "Tom"
// address со значением объекта.
//
// Внутри address должны быть свойства:
// city со значением "London"
// street со значением "Baker Street"
//
// Измени город на "Manchester".
// Выведи в консоль весь объект user35.
//
// Ожидаемый вывод:
// {
//   name: "Tom",
//   address: {
//     city: "Manchester",
//     street: "Baker Street"
//   }
// }

const user35 = {
    name: "Tom",
    address: {
        city: "London",
        street: "Baker Street",
    },
};

user35.address.city = "Manchester";
console.log(user35);

// Задача 36 на тему "Вложенные объекты"

// Условие:
// Создай объект user36.
// В объекте должны быть свойства:
// name со значением "Nina"
// address со значением объекта.
//
// Внутри address должны быть свойства:
// city со значением "Rome"
// street со значением "Via Roma"
//
// Добавь внутрь address новое свойство country со значением "Italy".
// Выведи в консоль весь объект user36.
//
// Ожидаемый вывод:
// {
//   name: "Nina",
//   address: {
//     city: "Rome",
//     street: "Via Roma",
//     country: "Italy"
//   }
// }

const user36 = {
    name: "Nina",
    address: {
        city: "Rome",
        street: "Via Roma",
    },
};

user36.address.country = "Italy";
console.log(user36);

// Задача 37 на тему "Вложенные объекты"

// Условие:
// Создай объект user37.
// В объекте должны быть свойства:
// name со значением "Oleg"
// address со значением объекта.
//
// Внутри address должны быть свойства:
// city со значением "Kyiv"
// street со значением "Khreshchatyk"
//
// Проверь, есть ли внутри address свойство "city".
// Выведи результат проверки в консоль.
//
// Ожидаемый вывод:
// true

const user37 = {
    name: "Oleg",
    address: {
        city: "Kyiv",
        street: "Khreshchatyk",
    },
};

console.log("city" in user37.address);


// Задача 38 на тему "Массивы объектов"

// Условие:
// Дан массив users38.
// Выведи в консоль весь массив users38.

const users38 = [
    { name: "Alex", age: 25 },
    { name: "Maria", age: 30 },
    { name: "Tom", age: 19 },
];

for (const user38 of users38) {
    console.log(user38);
}

// Задача 39 на тему "Массивы объектов"

// Условие:
// Дан массив users39.
// Выведи в консоль имя первого пользователя.
//
// Ожидаемый вывод:
// Alex

const users39 = [
    { name: "Alex", age: 25 },
    { name: "Maria", age: 30 },
    { name: "Tom", age: 19 },
];

console.log(users39[0].name);

// Задача 40 на тему "Массивы объектов"

// Условие:
// Дан массив users40.
// С помощью цикла for...of выведи в консоль имена всех пользователей.
//
// Ожидаемый вывод:
// Alex
// Maria
// Tom

const users40 = [
    { name: "Alex", age: 25 },
    { name: "Maria", age: 30 },
    { name: "Tom", age: 19 },
];

for (const user40 of users40) {
    console.log(user40.name);
}

// Задача 41 на тему "Массивы объектов"

// Условие:
// Дан массив users41.
// Найди пользователя с именем "Maria".
// Выведи в консоль весь объект найденного пользователя.
//
// Ожидаемый вывод:
// { name: "Maria", age: 30 }

const users41 = [
    { name: "Alex", age: 25 },
    { name: "Maria", age: 30 },
    { name: "Tom", age: 19 },
];

for (const user41 of users41) {
    if (user41.name === "Maria") {
        console.log(user41);
    }
}

// Задача 42 на тему "Массивы объектов"

// Условие:
// Дан массив users42.
// Найди всех пользователей старше 18 лет.
// Добавь их в новый массив adults42.
// Выведи adults42 в консоль.
//
// Ожидаемый вывод:
// [
//   { name: "Alex", age: 25 },
//   { name: "Maria", age: 30 }
// ]

const users42 = [
    { name: "Alex", age: 25 },
    { name: "Maria", age: 30 },
    { name: "Tom", age: 17 },
];

const adults42 = [];

for (const user42 of users42) {
    if (user42.age > 18) {
        adults42.push(user42);
    }
}

console.log(adults42);

// Задача 43 на тему "Массивы объектов"

// Условие:
// Дан массив products43.
// Посчитай сумму цен всех товаров.
// Выведи результат в консоль.
//
// Ожидаемый вывод:
// 2500

const products43 = [
    { title: "Laptop", price: 1200 },
    { title: "Phone", price: 800 },
    { title: "Tablet", price: 500 },
];

let total43 = 0;

for (const product43 of products43) {
    total43 += product43.price;
}

console.log(total43);

// Задача 44 на тему "Массивы объектов"

// Условие:
// Дан массив products44.
// Создай новый массив titles44,
// в который попадут только названия товаров.
// Выведи titles44 в консоль.
//
// Ожидаемый вывод:
// ["Laptop", "Phone", "Tablet"]

const products44 = [
    { title: "Laptop", price: 1200 },
    { title: "Phone", price: 800 },
    { title: "Tablet", price: 500 },
];

const titles44 = [];

for (const product44 of products44) {
    titles44.push(product44.title);
}

console.log(titles44);

// Задача 45 на тему "Массивы объектов"

// Условие:
// Дан массив users45.
// Найди пользователя с id 2.
// Измени его свойство isOnline на true.
// Выведи весь массив users45 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 1, name: "Alex", isOnline: false },
//   { id: 2, name: "Maria", isOnline: true },
//   { id: 3, name: "Tom", isOnline: false }
// ]

const users45 = [
    { id: 1, name: "Alex", isOnline: false },
    { id: 2, name: "Maria", isOnline: false },
    { id: 3, name: "Tom", isOnline: false },
];

for (const user45 of users45) {
    if (user45.id === 2) {
        user45.isOnline = true;
    }
}

console.log(users45);

// Задача 46 на тему "Ссылочный тип данных, копирование, мутации"

// Условие:
// Дан объект user46.
// Создай переменную copy46 и присвой ей user46.
// Измени copy46.name на "Maria".
// Выведи в консоль user46.name.
//
// Ожидаемый вывод:
// Maria

const user46 = {
    name: "Alex",
    age: 25,
};

const copy46 = user46;
copy46.name = "Maria";
console.log(user46.name);

// Задача 47 на тему "Ссылочный тип данных, копирование, мутации"

// Условие:
// Дан объект user47.
// Создай поверхностную копию объекта через spread.
// Назови копию copy47.
// Измени copy47.name на "Maria".
// Выведи в консоль user47.name и copy47.name.
//
// Ожидаемый вывод:
// Alex
// Maria

const user47 = {
    name: "Alex",
    age: 25,
};

const copy47 = { ...user47 };
copy47.name = "Maria";

console.log(user47.name);
console.log(copy47.name);

// Задача 48 на тему "Ссылочный тип данных, копирование, мутации"

// Условие:
// Дан объект user48.
// Создай поверхностную копию объекта через Object.assign.
// Назови копию copy48.
// Измени copy48.age на 30.
// Выведи в консоль user48.age и copy48.age.
//
// Ожидаемый вывод:
// 25
// 30

const user48 = {
    name: "Alex",
    age: 25,
};

const copy48 = Object.assign({}, user48);
copy48.age = 30;

console.log(user48.age);
console.log(copy48.age);

// Задача 49 на тему "Ссылочный тип данных, копирование, мутации"

// Условие:
// Даны объекты base49, info49 и contacts49.
// Объедини их в новый объект user49 через Object.assign.
// Выведи user49 в консоль.
//
// Ожидаемый вывод:
// {
//   name: "Alex",
//   age: 25,
//   city: "Seoul",
//   email: "alex@mail.com"
// }

const base49 = {
    name: "Alex",
};

const info49 = {
    age: 25,
    city: "Seoul",
};

const contacts49 = {
    email: "alex@mail.com",
};

const user49 = Object.assign({}, base49, info49, contacts49);
console.log(user49);

// Задача 50 на тему "Ссылочный тип данных, копирование, мутации"

// Условие:
// Даны объекты first50 и second50.
// Объедини их в новый объект result50 через Object.assign.
// Обрати внимание: в обоих объектах есть свойство role.
// Выведи result50 в консоль.
//
// Ожидаемый вывод:
// { name: "Alex", role: "admin", age: 25 }

const first50 = {
    name: "Alex",
    role: "user",
};

const second50 = {
    role: "admin",
    age: 25,
};

const result50 = Object.assign({}, first50, second50);

console.log(result50);

// Задача 51 на тему "Ссылочный тип данных, копирование, мутации"

// Условие:
// Дан объект product51.
// Создай копию copy51 через spread.
// Измени цену в copy51 на 900.
// Выведи в консоль product51.price и copy51.price.
//
// Ожидаемый вывод:
// 800
// 900

const product51 = {
    title: "Phone",
    price: 800,
};

const copy51 = { ...product51 };
copy51.price = 900;

console.log(product51.price);
console.log(copy51.price);

// Задача 52 на тему "Ссылочный тип данных, копирование, мутации"

// Условие:
// Дан объект user52 с вложенным объектом address.
// Создай копию copy52 через spread.
// Измени copy52.address.city на "Busan".
// Выведи в консоль user52.address.city и copy52.address.city.
//
// Ожидаемый вывод:
// Busan
// Busan

const user52 = {
    name: "Alex",
    address: {
        city: "Seoul",
    },
};

const copy52 = { ...user52 };
copy52.address.city = "Busan";

console.log(user52.address.city);
console.log(copy52.address.city);

// Задача 53 на тему "ООП и инкапсуляция"

// Условие:
// Создай объект user53.
// В объекте должно быть свойство:
// name со значением "Alex"
//
// Также в объекте должен быть метод sayHello.
// Метод должен выводить в консоль строку:
// Hello
//
// Вызови метод sayHello.
//
// Ожидаемый вывод:
// Hello

const user53 = {
    name: "Alex",
    sayHello: function() {
        console.log("Hello");
    },
};

user53.sayHello();

// Задача 54 на тему "ООП и инкапсуляция"

// Условие:
// Создай объект user54.
// В объекте должно быть свойство:
// name со значением "Maria"
//
// Также в объекте должен быть метод sayHello.
// Метод должен выводить в консоль строку:
// Hello, Maria
//
// Внутри метода используй this.name.
//
// Вызови метод sayHello.
//
// Ожидаемый вывод:
// Hello, Maria

const user54 = {
    name: "Maria",
    sayHello: function() {
        console.log(`Hello, ${this.name}`);
    },
};

user54.sayHello();

// Задача 55 на тему "ООП и инкапсуляция"

// Условие:
// Создай объект counter55.
// В объекте должно быть свойство:
// value со значением 0
//
// Добавь метод increase.
// Метод должен увеличивать value на 1.
//
// Добавь метод decrease.
// Метод должен уменьшать value на 1.
//
// Вызови:
// increase
// increase
// decrease
//
// Затем выведи counter55.value в консоль.
//
// Ожидаемый вывод:
// 1

const counter55 = {
    value: 0,
    increase: function() {
        this.value++;
    },
    decrease: function() {
        this.value--;
    },
};

counter55.increase();
counter55.increase();
counter55.decrease();

console.log(counter55.value);

// Задача 56 на тему "ООП и инкапсуляция"

// Условие:
// Создай объект bankAccount56.
// В объекте должно быть свойство:
// balance со значением 1000
//
// Добавь метод deposit.
// Метод должен принимать параметр amount
// и увеличивать balance на amount.
//
// Добавь метод withdraw.
// Метод должен принимать параметр amount
// и уменьшать balance на amount.
//
// Вызови:
// deposit(500)
// withdraw(200)
//
// Затем выведи bankAccount56.balance в консоль.
//
// Ожидаемый вывод:
// 1300

const bankAccount56 = {
    balance: 1000,
    deposit: function(amount) {
        this.balance += amount;
    },
    withdraw: function(amount) {
        this.balance -= amount;
    },
};
bankAccount56.deposit(500);
bankAccount56.withdraw(200);

console.log(bankAccount56.balance);

// Задача 57 на тему "ООП и инкапсуляция"

// Условие:
// Напиши функцию createUser57.
// Функция должна принимать параметр name.
//
// Функция должна возвращать объект.
// В возвращаемом объекте должно быть свойство name
// со значением параметра name.
//
// Также в объекте должен быть метод sayHello.
// Метод должен выводить:
// Hello, Alex
//
// Создай пользователя user57,
// вызвав createUser57("Alex").
//
// Вызови user57.sayHello().
//
// Ожидаемый вывод:
// Hello, Alex

function createUser57(name) {
    return {
        name,
        sayHello: function() {
            console.log(`Hello, ${this.name}`);
        },
    };
}

const user57 = createUser57("Alex");
user57.sayHello();


// Задача 58 на тему "ООП и инкапсуляция"

// Условие:
// Напиши функцию createSecret58.
// Внутри функции создай переменную secret
// со значением "JavaScript".
//
// Функция должна возвращать объект с методом getSecret.
// Метод getSecret должен возвращать значение переменной secret.
//
// Создай объект secret58 через вызов createSecret58().
// Выведи в консоль результат вызова secret58.getSecret().
//
// Ожидаемый вывод:
// JavaScript

function createSecret58() {
    const secret = "JavaScript";

    return {
        getSecret: function() {
            return secret;
        },
    };
}

const secret58 = createSecret58();

console.log(secret58.getSecret());

// Задача 59 на тему "ООП и инкапсуляция"

// Условие:
// Напиши функцию createCounter59.
// Внутри функции создай переменную value со значением 0.
//
// Функция должна возвращать объект с тремя методами:
//
// increase:
// увеличивает value на 1
//
// decrease:
// уменьшает value на 1
//
// getValue:
// возвращает текущее значение value
//
// Создай счётчик counter59 через вызов createCounter59().
//
// Вызови:
// increase()
// increase()
// decrease()
//
// Выведи в консоль результат counter59.getValue().
//
// Ожидаемый вывод:
// 1

function createCounter59() {
    let value = 0;

    return {
        increase: function() {
            value++;
        },
        decrease: function() {
            value--;
        },
        getValue: function() {
            return value;
        },
    };
}

const counter59 = createCounter59();

counter59.increase();
counter59.increase();
counter59.decrease();

console.log(counter59.getValue());

// Задача 60 на тему "ООП и инкапсуляция"

// Условие:
// Создай класс User60.
// В классе должен быть constructor,
// который принимает параметр name.
//
// Внутри constructor создай свойство name
// со значением параметра name.
//
// Создай объект user60 через new User60("Alex").
// Выведи user60.name в консоль.
//
// Ожидаемый вывод:
// Alex

class User60 {
    constructor(name) {
        this.name = name;
    }
}

const user60 = new User60("Alex");

console.log(user60.name);

// Задача 61 на тему "ООП и инкапсуляция"

// Условие:
// Создай класс User61.
// В классе должен быть constructor,
// который принимает два параметра:
// name
// age
//
// Внутри constructor создай свойства:
// name со значением параметра name
// age со значением параметра age
//
// Создай объект user61 через new User61("Maria", 30).
// Выведи в консоль весь объект user61.
//
// Ожидаемый вывод:
// User61 { name: "Maria", age: 30 }

class User61 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const user61 = new User61("Maria", 30);
console.log(user61);

// Задача 62 на тему "ООП и инкапсуляция"

// Условие:
// Создай класс User62.
// В классе должен быть constructor,
// который принимает параметр name.
//
// Внутри constructor создай свойство name.
//
// Добавь метод sayHello.
// Метод должен выводить в консоль строку:
// Hello, Alex
//
// Внутри метода используй this.name.
//
// Создай объект user62 через new User62("Alex").
// Вызови user62.sayHello().
//
// Ожидаемый вывод:
// Hello, Alex

class User62 {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
}

const user62 = new User62("Alex");
user62.sayHello();

// Задача 63 на тему "ООП и инкапсуляция"

// Условие:
// Создай класс Product63.
// В классе должен быть constructor,
// который принимает два параметра:
// title
// price
//
// Внутри constructor создай свойства:
// title
// price
//
// Добавь метод changePrice.
// Метод должен принимать параметр newPrice
// и изменять свойство price на newPrice.
//
// Создай объект product63 через new Product63("Phone", 800).
// Вызови product63.changePrice(900).
// Выведи product63.price в консоль.
//
// Ожидаемый вывод:
// 900

class Product63 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    changePrice(newPrice) {
        this.price = newPrice;
    }
}

const product63 = new Product63("Phone", 800);
product63.changePrice(900);
console.log(product63.price);

// Задача 64 на тему "ООП и инкапсуляция"

// Условие:
// Создай класс TodoList64.
//
// В constructor создай свойство todos
// со значением пустого массива.
//
// Добавь метод addTodo.
// Метод должен принимать параметр text
// и добавлять text в массив todos.
//
// Добавь метод removeLastTodo.
// Метод должен удалять последний элемент из массива todos.
//
// Создай объект todoList64 через new TodoList64().
//
// Вызови:
// addTodo("Learn objects")
// addTodo("Learn classes")
// removeLastTodo()
//
// Выведи todoList64.todos в консоль.
//
// Ожидаемый вывод:
// ["Learn objects"]

class TodoList64 {
    constructor() {
        this.todos = [];
    }
    addTodo(text) {
        this.todos.push(text);
    }
    removeLastTodo() {
        this.todos.pop();
    }
}

const todoList64 = new TodoList64();
todoList64.addTodo("Learn objects");
todoList64.addTodo("Learn classes");
todoList64.removeLastTodo();
console.log(todoList64.todos);

// Задача 65 на тему "Практика как во фронтенде: объекты настроек"

// Условие:
// Дан объект settings65.
// Измени тему с "light" на "dark".
// Выведи весь объект settings65 в консоль.
//
// Ожидаемый вывод:
// { theme: "dark", language: "ru", notifications: true }

const settings65 = {
    theme: "light",
    language: "ru",
    notifications: true,
};

settings65.theme = "dark";
console.log(settings65);


// Задача 66 на тему "Практика как во фронтенде: объекты настроек"

// Условие:
// Дан объект settings66.
// Если язык равен "en", измени его на "ru".
// Выведи settings66.language в консоль.
//
// Ожидаемый вывод:
// ru

const settings66 = {
    theme: "dark",
    language: "en",
    notifications: true,
};

if (settings66.language === "en") {
    settings66.language = "ru";
}

console.log(settings66.language);

// Задача 67 на тему "Практика как во фронтенде: объекты настроек"

// Условие:
// Дан объект permissions67.
// Проверь, есть ли у пользователя право "canEdit".
// Если canEdit равно true, выведи:
// Edit mode enabled
//
// Ожидаемый вывод:
// Edit mode enabled

const permissions67 = {
    canView: true,
    canEdit: true,
    canDelete: false,
};

if (permissions67.canEdit) {
    console.log("Edit mode enabled");
}

// Задача 68 на тему "Практика как во фронтенде: объекты настроек"

// Условие:
// Дан объект notifications68.
// Если email равно false, измени email на true.
// Выведи весь объект notifications68 в консоль.
//
// Ожидаемый вывод:
// { email: true, sms: false, push: true }

const notifications68 = {
    email: false,
    sms: false,
    push: true,
};

if (!notifications68.email) {
    notifications68.email = true;
}

console.log(notifications68);

// Задача 69 на тему "Практика как во фронтенде: объекты настроек"

// Условие:
// Дан объект profileSettings69.
// Добавь новое свойство timezone со значением "Asia/Seoul".
// Выведи весь объект profileSettings69 в консоль.
//
// Ожидаемый вывод:
// {
//   username: "alex_dev",
//   theme: "dark",
//   timezone: "Asia/Seoul"
// }

const profileSettings69 = {
    username: "alex_dev",
    theme: "dark",
};

profileSettings69.timezone = "Asia/Seoul";

console.log(profileSettings69);

// Задача 70 на тему "Практика как во фронтенде: массивы объектов глубже"

// Условие:
// Дан массив users70.
// Найди пользователя с id 3.
// Выведи в консоль имя найденного пользователя.
//
// Ожидаемый вывод:
// Tom

const users70 = [
    { id: 1, name: "Alex", age: 25 },
    { id: 2, name: "Maria", age: 30 },
    { id: 3, name: "Tom", age: 19 },
];

for (const user70 of users70) {
    if (user70.id === 3) {
        console.log(user70.name);
    }
}

// Задача 71 на тему "Практика как во фронтенде: массивы объектов глубже"

// Условие:
// Дан массив products71.
// Найди все товары, у которых price меньше 1000.
// Добавь их в новый массив cheapProducts71.
// Выведи cheapProducts71 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 2, title: "Phone", price: 800 },
//   { id: 3, title: "Tablet", price: 500 }
// ]

const products71 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const cheapProducts71 = [];

for (const product71 of products71) {
    if (product71.price < 1000) {
        cheapProducts71.push(product71);
    }
}

console.log(cheapProducts71);

// Задача 72 на тему "Практика как во фронтенде: массивы объектов глубже"

// Условие:
// Дан массив tasks72.
// Найди задачу с id 2.
// Измени её status на "done".
// Выведи весь массив tasks72 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 1, title: "Read", status: "done" },
//   { id: 2, title: "Practice", status: "done" },
//   { id: 3, title: "Rest", status: "todo" }
// ]

const tasks72 = [
    { id: 1, title: "Read", status: "done" },
    { id: 2, title: "Practice", status: "todo" },
    { id: 3, title: "Rest", status: "todo" },
];

for (const task72 of tasks72) {
    if (task72.id === 2) {
        task72.status = "done";
    }
}

console.log(tasks72);


// Задача 73 на тему "Практика как во фронтенде: массивы объектов глубже"

// Условие:
// Дан массив users73.
// Создай новый массив activeUsers73.
// В него должны попасть только пользователи,
// у которых isActive равно true.
//
// Выведи activeUsers73 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 1, name: "Alex", isActive: true },
//   { id: 3, name: "Tom", isActive: true }
// ]

const users73 = [
    { id: 1, name: "Alex", isActive: true },
    { id: 2, name: "Maria", isActive: false },
    { id: 3, name: "Tom", isActive: true },
];


const activeUsers73 = [];

for (const user73 of users73) {
    if (user73.isActive) {
        activeUsers73.push(user73);
    }
}

console.log(activeUsers73);

// Задача 74 на тему "Практика как во фронтенде: массивы объектов глубже"

// Условие:
// Дан массив cart74.
// Посчитай общую стоимость товаров в корзине.
// У каждого товара есть price и quantity.
// Общая стоимость одного товара:
// price * quantity
//
// Выведи итоговую сумму в консоль.
//
// Ожидаемый вывод:
// 2600

const cart74 = [
    { title: "Laptop", price: 1200, quantity: 1 },
    { title: "Phone", price: 800, quantity: 2 },
    { title: "Case", price: 100, quantity: 2 },
];

let sum74 = 0;

for (const item74 of cart74) {
    sum74 += (item74.price * item74.quantity);
}

console.log(sum74);

// Задача 75 на тему "Практика как во фронтенде: массивы объектов глубже"

// Условие:
// Дан массив users75.
// Проверь, есть ли в массиве пользователь с именем "Maria".
// Если такой пользователь есть, выведи:
// User found
//
// Ожидаемый вывод:
// User found

const users75 = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Tom" },
];

for (const user75 of users75) {
    if (user75.name === "Maria") {
        console.log("User found");
    }
}

// Задача 76 на тему "Практика как во фронтенде: корзина товаров"

// Условие:
// Дан массив cart76.
//
// Нужно:
// 1. Найти товар с id 2.
// 2. Увеличить его quantity на 1.
// 3. Найти товар с id 4.
// 4. Если товара с id 4 нет в корзине,
//    добавить его в cart76:
//    { id: 4, title: "Headphones", price: 300, quantity: 1 }
// 5. Посчитать общую сумму корзины.
//    Стоимость каждого товара считается так:
//    price * quantity
// 6. Вывести в консоль весь массив cart76.
// 7. Вывести в консоль итоговую сумму.
//
// Ожидаемый итоговый массив:
// [
//   { id: 1, title: "Laptop", price: 1200, quantity: 1 },
//   { id: 2, title: "Phone", price: 800, quantity: 2 },
//   { id: 3, title: "Case", price: 100, quantity: 2 },
//   { id: 4, title: "Headphones", price: 300, quantity: 1 }
// ]
//
// Ожидаемая сумма:
// 3300

const cart76 = [
    { id: 1, title: "Laptop", price: 1200, quantity: 1 },
    { id: 2, title: "Phone", price: 800, quantity: 1 },
    { id: 3, title: "Case", price: 100, quantity: 2 },
];

for (const item76 of cart76) {
    if (item76.id === 2) {
        item76.quantity += 1;
    }
}

let hasProduct76 = false;

for (const item76 of cart76) {
    if (item76.id === 4) {
        hasProduct76 = true;
    }
}

if (!hasProduct76) {
    cart76.push({
        id: 4,
        title: "Headphones",
        price: 300,
        quantity: 1,
    });
}

let sum = 0;

for (const item76 of cart76) {
    sum += (item76.price * item76.quantity);
}
console.log(cart76);
console.log(sum);

// Задача 77 на тему "Практика как во фронтенде: todo list"

// Условие:
// Дан массив todos77.
//
// Нужно:
// 1. Добавить новую задачу:
//    { id: 4, title: "Review objects", completed: false }
// 2. Найти задачу с id 2.
// 3. Изменить у неё completed на true.
// 4. Удалить задачу с id 1.
// 5. Посчитать количество незавершённых задач.
// 6. Вывести в консоль итоговый массив todos77.
// 7. Вывести в консоль количество незавершённых задач.
//
// Ожидаемый итоговый массив:
// [
//   { id: 2, title: "Practice JS", completed: true },
//   { id: 3, title: "Take a break", completed: false },
//   { id: 4, title: "Review objects", completed: false }
// ]
//
// Ожидаемое количество незавершённых задач:
// 2

const todos77 = [
    { id: 1, title: "Watch lesson", completed: true },
    { id: 2, title: "Practice JS", completed: false },
    { id: 3, title: "Take a break", completed: false },
];

todos77.push({
    id: 4,
    title: "Review objects",
    completed: false,
});

for (const task of todos77) {
    if (task.id === 2) {
        task.completed = true;
    }
}

for (let i = 0; i < todos77.length; i++) {
    if (todos77[i].id === 1) {
        todos77.splice(i, 1);
        break;
    }
}

let count77 = 0;

for (const task of todos77) {
    if (task.completed === false) {
        count77++;
    }
}

console.log(todos77);
console.log(count77);

// Задача 78 на тему "Практика как во фронтенде: профиль пользователя"

// Условие:
// Дан объект profile78.
//
// Нужно:
// 1. Изменить город пользователя на "Busan".
// 2. Добавить в contacts новое свойство phone со значением "+82-10-0000-0000".
// 3. Проверить, есть ли в contacts свойство email.
// 4. Если email есть, вывести в консоль строку:
//    Email: alex@mail.com
// 5. Вывести в консоль строку профиля:
//    Alex from Busan
// 6. Вывести в консоль весь объект profile78.

const profile78 = {
    name: "Alex",
    address: {
        city: "Seoul",
        country: "South Korea",
    },
    contacts: {
        email: "alex@mail.com",
    },
};

profile78.address.city = "Busan";
profile78.contacts.phone = "+82-10-0000-0000";

if ("email" in profile78.contacts) {
    console.log(`Email: ${profile78.contacts.email}`);
}

console.log(`${profile78.name} from ${profile78.address.city}`);
console.log(profile78);

// Задача 79 на тему "Практика как во фронтенде: комментарии"

// Условие:
// Дан массив comments79.
//
// Нужно:
// 1. Найти все комментарии пользователя с userId 10.
// 2. Добавить их в новый массив userComments79.
// 3. Посчитать сумму лайков этих комментариев.
// 4. Найти комментарий с id 3.
// 5. Изменить у него likedByMe на true.
// 6. Вывести userComments79 в консоль.
// 7. Вывести сумму лайков в консоль.
// 8. Вывести весь массив comments79 в консоль.

const comments79 = [
    { id: 1, userId: 10, text: "Great lesson", likes: 5, likedByMe: false },
    { id: 2, userId: 20, text: "Thanks", likes: 3, likedByMe: false },
    { id: 3, userId: 10, text: "Need more practice", likes: 2, likedByMe: false },
];

const userComments79 = [];

for (const obj of comments79) {
        if (obj.userId === 10) {
            userComments79.push(obj)
        }
}

let sumOfLikes = 0;

for (const obj of comments79) {
        if (obj.userId === 10) {
            sumOfLikes += obj.likes;
    }
}

for (const obj of comments79) {
        if (obj.id === 3) {
            obj.likedByMe = true;
        }
}

console.log(userComments79);
console.log(sumOfLikes);
console.log(comments79);

// Задача 80 на тему "Практика как во фронтенде: API response"

// Условие:
// Дан объект response80.
//
// Нужно:
// 1. Проверить, что status равен "success".
// 2. Если статус успешный,
//    создать объект userCard80.
// 3. В userCard80 должны быть свойства:
//    name
//    city
//    email
// 4. Значения нужно взять из response80.
// 5. Вывести userCard80 в консоль.
//
// Ожидаемый вывод:
// {
//   name: "Alex",
//   city: "Seoul",
//   email: "alex@mail.com"
// }

const response80 = {
    status: "success",
    data: {
        user: {
            id: 1,
            profile: {
                name: "Alex",
                city: "Seoul",
            },
            contacts: {
                email: "alex@mail.com",
            },
        },
    },
};

if (response80.status === "success") {
    const userCard80 = {
        name: response80.data.user.profile.name,
        city: response80.data.user.profile.city,
        email: response80.data.user.contacts.email,
    };
    console.log(userCard80);
}

// Задача 81 на тему "Практика как во фронтенде: API response"

// Условие:
// Дан объект response81.
//
// Нужно:
// 1. Проверить, что response81.status равен "success".
// 2. Проверить, что у пользователя есть contacts.
// 3. Если contacts есть,
//    добавить в объект userInfo81 свойства:
//    name
//    email
//    phone
// 4. Если phone отсутствует,
//    записать в phone строку "No phone".
// 5. Вывести userInfo81 в консоль.
//
// Ожидаемый вывод:
// {
//   name: "Maria",
//   email: "maria@mail.com",
//   phone: "No phone"
// }

const response81 = {
    status: "success",
    data: {
        user: {
            profile: {
                name: "Maria",
            },
            contacts: {
                email: "maria@mail.com",
            },
        },
    },
};

let isSuccess81 = false;

if (response81.status === "success") {
    isSuccess81 = true;
}

let hasContacts81 = false;

if ("contacts" in response81.data.user) {
    hasContacts81 = true;
}

if (isSuccess81 && hasContacts81) {
    const userInfo81 = {
        name: response81.data.user.profile.name,
        email: response81.data.user.contacts.email,
        phone: "No phone",
    };
    console.log(userInfo81);
}

// Задача 82 на тему "Практика как во фронтенде: API response"

// Условие:
// Дан объект response82.
//
// Нужно:
// 1. Проверить, что status равен "success".
// 2. Создать массив orderTitles82.
// 3. Добавить в него названия всех товаров из orders.
// 4. Посчитать общую сумму всех заказов.
//    У каждого заказа есть price и quantity.
//    Сумма одного заказа: price * quantity
// 5. Вывести orderTitles82 в консоль.
// 6. Вывести итоговую сумму в консоль.
//
// Ожидаемый вывод:
// ["Laptop", "Phone", "Case"]
// 3000

const response82 = {
    status: "success",
    data: {
        orders: [
            { id: 1, title: "Laptop", price: 1200, quantity: 1 },
            { id: 2, title: "Phone", price: 800, quantity: 2 },
            { id: 3, title: "Case", price: 100, quantity: 2 },
        ],
    },
};

if (response82.status === "success") {
    const orderTitles82 = [];
    let totalPrice = 0;

    for (const order of response82.data.orders) {
        orderTitles82.push(order.title);
    }

    for (const order of response82.data.orders) {
        totalPrice += order.price * order.quantity;
    }
    console.log(orderTitles82);
    console.log(totalPrice);
}

// Задача 83 на тему "Практика как во фронтенде: API response"

// Условие:
// Дан объект response83.
//
// Нужно:
// 1. Проверить, что status равен "success".
// 2. Найти пользователя с id 2 внутри users.
// 3. Изменить его city на "Busan".
// 4. Создать объект selectedUser83.
// 5. В selectedUser83 должны быть свойства:
//    id
//    name
//    city
// 6. Вывести selectedUser83 в консоль.
// 7. Вывести весь response83 в консоль.
//
// Ожидаемый selectedUser83:
// { id: 2, name: "Maria", city: "Busan" }

const response83 = {
    status: "success",
    data: {
        users: [
            { id: 1, profile: { name: "Alex", city: "Seoul" } },
            { id: 2, profile: { name: "Maria", city: "Madrid" } },
            { id: 3, profile: { name: "Tom", city: "London" } },
        ],
    },
};


let selectedUser83;
if (response83.status === "success") {
    for (const user83 of response83.data.users) {
        if (user83.id === 2) {
            user83.profile.city = "Busan";
            selectedUser83 = {
                id: user83.id,
                name: user83.profile.name,
                city: user83.profile.city,
            };
            break;
        }
    }
}

console.log(selectedUser83);
console.log(response83);

// Задача 84 на тему "Практика как во фронтенде: состояние интерфейса"

// Условие:
// Дан объект uiState84.
//
// Нужно:
// 1. Изменить activeTab на "profile".
// 2. Если isModalOpen равно false,
//    изменить isModalOpen на true.
// 3. Увеличить notificationsCount на 1.
// 4. Вывести весь uiState84 в консоль.
//
// Ожидаемый вывод:
// {
//   activeTab: "profile",
//   isModalOpen: true,
//   notificationsCount: 4
// }

const uiState84 = {
    activeTab: "home",
    isModalOpen: false,
    notificationsCount: 3,
};

uiState84.activeTab = "profile";

if (!uiState84.isModalOpen) {
    uiState84.isModalOpen = true;
}

uiState84.notificationsCount++;

console.log(uiState84);

// Задача 85 на тему "Практика как во фронтенде: состояние интерфейса"

// Условие:
// Дан массив posts85.
//
// Нужно:
// 1. Найти пост с id 2.
// 2. Если likedByMe равно false,
//    изменить likedByMe на true
//    и увеличить likes на 1.
// 3. Вывести весь массив posts85 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 1, title: "Intro", likes: 3, likedByMe: false },
//   { id: 2, title: "Objects", likes: 6, likedByMe: true },
//   { id: 3, title: "Arrays", likes: 10, likedByMe: false }
// ]

const posts85 = [
    { id: 1, title: "Intro", likes: 3, likedByMe: false },
    { id: 2, title: "Objects", likes: 5, likedByMe: false },
    { id: 3, title: "Arrays", likes: 10, likedByMe: false },
];

for (const post85 of posts85) {
    if (post85.id === 2) {
        if (!post85.likedByMe) {
            post85.likedByMe = true;
            post85.likes++;
        }
        break;
    }
}
console.log(posts85);

// Задача 86 на тему "Практика как во фронтенде: состояние интерфейса"

// Условие:
// Дан объект modal86.
//
// Нужно:
// 1. Если modal86.isOpen равно false,
//    открыть модальное окно:
//    isOpen сделать true.
// 2. Записать в content строку "Settings".
// 3. Добавить новое свойство openedAt
//    со значением "2026-06-04".
// 4. Вывести modal86 в консоль.
//
// Ожидаемый вывод:
// {
//   isOpen: true,
//   content: "Settings",
//   openedAt: "2026-06-04"
// }

const modal86 = {
    isOpen: false,
    content: "",
};

if (!modal86.isOpen) {
    modal86.isOpen = true;
}

modal86.content = "Settings";
modal86.openedAt = "2026-06-04";

console.log(modal86);

// Задача 87 на тему "Практика как во фронтенде: состояние интерфейса"

// Условие:
// Дан массив tabs87.
//
// Нужно:
// 1. Найти вкладку с id "profile".
// 2. Сделать её active: true.
// 3. У всех остальных вкладок сделать active: false.
// 4. Вывести весь массив tabs87 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: "home", title: "Home", active: false },
//   { id: "profile", title: "Profile", active: true },
//   { id: "settings", title: "Settings", active: false }
// ]

const tabs87 = [
    { id: "home", title: "Home", active: true },
    { id: "profile", title: "Profile", active: false },
    { id: "settings", title: "Settings", active: false },
];

for (const tab87 of tabs87) {
    if (tab87.id === "profile") {
        tab87.active = true;
    } else {
        tab87.active = false;
    }
}

console.log(tabs87);

// Задача 88 на тему "Практика как во фронтенде: состояние интерфейса"

// Условие:
// Дан объект form88.
//
// Нужно:
// 1. Проверить, что поле email не пустое.
// 2. Проверить, что поле password не пустое.
// 3. Если оба поля заполнены,
//    изменить isValid на true.
// 4. Если хотя бы одно поле пустое,
//    добавить в errors строку "All fields are required".
// 5. Вывести form88 в консоль.
//
// Ожидаемый вывод:
// {
//   fields: {
//     email: "test@mail.com",
//     password: "12345"
//   },
//   errors: [],
//   isValid: true
// }

const form88 = {
    fields: {
        email: "test@mail.com",
        password: "12345",
    },
    errors: [],
    isValid: false,
};

if (form88.fields.email && form88.fields.password) {
    form88.isValid = true;
} else {
    form88.errors.push("All fields are required");
}

console.log(form88);

// Задача 89 на тему "Практика как во фронтенде: состояние интерфейса"

// Условие:
// Дан объект player89.
//
// Нужно:
// 1. Если isPlaying равно false,
//    изменить isPlaying на true.
// 2. Увеличить currentTime на 15.
// 3. Если currentTime стал больше duration,
//    записать в currentTime значение duration.
// 4. Вывести player89 в консоль.
//
// Ожидаемый вывод:
// {
//   isPlaying: true,
//   currentTime: 100,
//   duration: 100
// }

const player89 = {
    isPlaying: false,
    currentTime: 90,
    duration: 100,
};

if (!player89.isPlaying) {
    player89.isPlaying = true;
}

player89.currentTime += 15;

if (player89.currentTime > player89.duration) {
    player89.currentTime = player89.duration;
}

console.log(player89);

// Задача 90 на тему "Практика как во фронтенде: мини-сценарий профиль"

// Условие:
// Дан объект user90.
//
// Нужно:
// 1. Изменить город пользователя на "Busan".
// 2. Добавить новый навык "React" в массив skills.
// 3. Проверить, есть ли у пользователя email.
// 4. Если email есть, создать строку contact90:
//    "Contact: alex@mail.com"
// 5. Создать объект publicProfile90.
//    В нём должны быть свойства:
//    name
//    city
//    skillsCount
//    contact
// 6. skillsCount должен быть количеством навыков.
// 7. contact должен быть равен contact90.
// 8. Вывести publicProfile90 в консоль.
// 9. Вывести весь user90 в консоль.
//
// Ожидаемый publicProfile90:
// {
//   name: "Alex",
//   city: "Busan",
//   skillsCount: 3,
//   contact: "Contact: alex@mail.com"
// }

const user90 = {
    name: "Alex",
    address: {
        city: "Seoul",
    },
    contacts: {
        email: "alex@mail.com",
    },
    skills: ["HTML", "CSS"],
};

user90.address.city = "Busan";
user90.skills.push("React");

let contact90 = "";

if ("email" in user90.contacts) {
    contact90 = `Contact: ${user90.contacts.email}`;
}

let skillCount = user90.skills.length;

const publicProfile90 = {
    name: user90.name,
    city: user90.address.city,
    skillsCount: skillCount,
    contact: contact90,
};

console.log(publicProfile90);
console.log(user90);

// Задача 91 на тему "Практика как во фронтенде: мини-сценарий корзина"

// Условие:
// Дан массив cart91.
//
// Нужно:
// 1. Найти товар с id 2.
// 2. Увеличить его quantity на 2.
// 3. Найти товар с id 3.
// 4. Если товара с id 3 нет,
//    добавить:
//    { id: 3, title: "Mouse", price: 50, quantity: 1 }
// 5. Создать массив expensiveItems91,
//    куда попадут товары с price больше или равно 100.
// 6. Посчитать общую сумму корзины.
// 7. Вывести cart91.
// 8. Вывести expensiveItems91.
// 9. Вывести итоговую сумму.
//
// Ожидаемый cart91:
// [
//   { id: 1, title: "Keyboard", price: 100, quantity: 1 },
//   { id: 2, title: "Monitor", price: 300, quantity: 3 },
//   { id: 3, title: "Mouse", price: 50, quantity: 1 }
// ]
//
// Ожидаемый expensiveItems91:
// [
//   { id: 1, title: "Keyboard", price: 100, quantity: 1 },
//   { id: 2, title: "Monitor", price: 300, quantity: 3 }
// ]
//
// Ожидаемая сумма:
// 1050

const cart91 = [
    { id: 1, title: "Keyboard", price: 100, quantity: 1 },
    { id: 2, title: "Monitor", price: 300, quantity: 1 },
];

let hasItem91 = false;

for (const item91 of cart91) {
    if (item91.id === 3) {
        hasItem91 = true;
        break;
    }
}

if (!hasItem91) {
    cart91.push({
        id: 3,
        title: "Mouse",
        price: 50,
        quantity: 1,
    });
}

const expensiveItems91 = [];
let totalPrice91 = 0;

for (const item91 of cart91) {
    if (item91.id === 2) {
        item91.quantity += 2;
    }
    if (item91.price >= 100) {
        expensiveItems91.push(item91);
    }

    totalPrice91 += (item91.price * item91.quantity);
}
console.log(cart91);
console.log(expensiveItems91);
console.log(totalPrice91);


// Задача 92 на тему "Практика как во фронтенде: мини-сценарий todo"

// Условие:
// Дан массив todos92.
//
// Нужно:
// 1. Добавить новую задачу:
//    { id: 4, title: "Repeat objects", completed: false }
// 2. Найти задачу с id 2 и изменить completed на true.
// 3. Удалить задачу с id 1.
// 4. Создать массив visibleTodos92,
//    куда попадут только задачи с completed false.
// 5. Создать объект stats92:
//    total — общее количество задач после удаления
//    completed — количество выполненных задач
//    active — количество невыполненных задач
// 6. Вывести todos92.
// 7. Вывести visibleTodos92.
// 8. Вывести stats92.
const todos92 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: false },
];

const visibleTodos92 = [];
let completed = 0;
let active = 0;

todos92.push({
    id: 4,
    title: "Repeat objects",
    completed: false,
});


for (let i = 0; i < todos92.length; i++) {
    if (todos92[i].id === 1) {
        todos92.splice(i, 1);
        break;
    }
}

for (const task92 of todos92) {
    if (task92.id === 2) {
        task92.completed = true;
    }

    if (task92.completed === false) {
        visibleTodos92.push(task92);
    }
}


for (const task92 of todos92) {
    if (task92.completed === true) {
        completed++;
    }

    if (task92.completed === false) {
        active++;
    }
}

let total = todos92.length;

const stats92 = {
    total,
    completed,
    active,
};

console.log(todos92);
console.log(visibleTodos92);
console.log(stats92);

// Задача 93 на тему "Практика как во фронтенде: мини-сценарий каталог"

// Условие:
// Дан массив products93.
//
// Нужно:
// 1. Найти товар с id 2.
// 2. Изменить его price на 750.
// 3. Добавить всем товарам новое свойство inStock.
//    Если stock больше 0, inStock должен быть true.
//    Если stock равен 0, inStock должен быть false.
// 4. Создать массив availableProducts93,
//    куда попадут только товары с inStock true.
// 5. Создать массив productCards93.
//    В него должны попасть объекты для отображения.
//    У каждого объекта должны быть свойства:
//    title
//    price
//    label
// 6. label должен быть строкой:
//    "Laptop - 1200"
//    "Phone - 750"
//    и так далее.
// 7. Вывести products93.
// 8. Вывести availableProducts93.
// 9. Вывести productCards93.
const products93 = [
    { id: 1, title: "Laptop", price: 1200, stock: 3 },
    { id: 2, title: "Phone", price: 800, stock: 5 },
    { id: 3, title: "Tablet", price: 500, stock: 0 },
];

for (const product93 of products93) {
    if (product93.id === 2) {
        product93.price = 750;
        break;
    }
}

for (const product93 of products93) {
    product93.inStock = false;

    if (product93.stock > 0) {
        product93.inStock = true;
    } else if (product93.stock === 0) {
        product93.inStock = false;
    }
}

const availableProducts93 = [];

for (const product93 of products93) {
   if (product93.inStock === true) {
       availableProducts93.push(product93);
   }
}

const productCards93 = [];

for (const product93 of products93) {
    productCards93.push({
        title: product93.title,
        price: product93.price,
        label: `${product93.title} - ${product93.price}`,
    });
}

console.log(products93);
console.log(availableProducts93);
console.log(productCards93);


// Задача 94 на тему "Практика как во фронтенде: мини-сценарий комментарии"

// Условие:
// Дан объект post94.
//
// Нужно:
// 1. Увеличить likes на 1,
//    только если likedByMe равно false.
// 2. После увеличения likes изменить likedByMe на true.
// 3. Добавить новый комментарий в comments:
//    { id: 3, userId: 10, text: "Great explanation", likes: 0 }
// 4. Найти все комментарии пользователя с userId 10.
// 5. Добавить их в массив userComments94.
// 6. Посчитать общее количество лайков у всех комментариев.
// 7. Создать объект summary94.
//    В нём должны быть свойства:
//    title
//    likes
//    commentsCount
//    userCommentsCount
//    commentsLikes
// 8. Вывести post94.
// 9. Вывести userComments94.
// 10. Вывести summary94.
const post94 = {
    id: 1,
    title: "Objects in JS",
    likes: 5,
    likedByMe: false,
    comments: [
        { id: 1, userId: 10, text: "Very useful", likes: 2 },
        { id: 2, userId: 20, text: "Thanks", likes: 1 },
    ],
};

if (!post94.likedByMe) {
    post94.likes++;
    post94.likedByMe = true;
}

post94.comments.push({
    id: 3,
    userId: 10,
    text: "Great explanation",
    likes: 0,
});

const userComments94 = [];

for (let i = 0; i < post94.comments.length; i++) {
    if (post94.comments[i].userId === 10) {
        userComments94.push(post94.comments[i]);
    }
}

let sumOfLikes94 = 0;

for (const comment of post94.comments) {
    sumOfLikes94 += comment.likes;
}

const summary94 = {
    title: post94.title,
    likes: post94.likes,
    commentsCount: post94.comments.length,
    userCommentsCount: userComments94.length,
    commentsLikes: sumOfLikes94,
};

console.log(post94);
console.log(userComments94);
console.log(summary94);

// Повтор 1/15 на тему "for...of vs индекс"

// Условие:
// Дан массив usersRepeat1.
//
// Нужно:
// 1. С помощью for...of вывести имена всех пользователей.
// 2. С помощью обычного цикла с индексом вывести строки:
//    "Index 0: Alex"
//    "Index 1: Maria"
//    "Index 2: Tom"

const usersRepeat1 = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Tom" },
];

for (const userRepeat1 of usersRepeat1) {
    console.log(userRepeat1.name);
}

for (let i = 0; i < usersRepeat1.length; i++) {
    console.log(`Index ${i}: ${usersRepeat1[i].name}`);
}

// Повтор 2/15 на тему "for...of vs индекс"

// Условие:
// Дан массив tasksRepeat2.
//
// Нужно:
// 1. С помощью for...of найти задачу с id 2
//    и изменить completed на true.
// 2. С помощью обычного цикла с индексом
//    вывести каждый элемент в формате:
//    "0 - Read"
//    "1 - Practice"
//    "2 - Rest"
//
// Ожидаемый tasksRepeat2 после изменения:
// [
//   { id: 1, title: "Read", completed: false },
//   { id: 2, title: "Practice", completed: true },
//   { id: 3, title: "Rest", completed: false }
// ]

const tasksRepeat2 = [
    { id: 1, title: "Read", completed: false },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: false },
];

for (const taskRepeat2 of tasksRepeat2) {
    if (taskRepeat2.id === 2) {
        taskRepeat2.completed = true;
        break;
    }
}

for (let i = 0; i < tasksRepeat2.length; i++) {
    console.log(`${i} - ${tasksRepeat2[i].title}`);
}

console.log(tasksRepeat2);


// Повтор 3/15 на тему "for...of vs индекс"

// Условие:
// Дан массив productsRepeat3.
//
// Нужно:
// 1. Найти товар с id 3 и изменить price на 450.
// 2. Вывести каждый товар в формате:
//    "0: Laptop"
//    "1: Phone"
//    "2: Tablet"
// 3. Вывести весь массив productsRepeat3.
//
// Ожидаемый productsRepeat3 после изменения:
// [
//   { id: 1, title: "Laptop", price: 1200 },
//   { id: 2, title: "Phone", price: 800 },
//   { id: 3, title: "Tablet", price: 450 }
// ]

const productsRepeat3 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

for (const productRepeat3 of productsRepeat3) {
    if (productRepeat3.id === 3) {
        productRepeat3.price = 450;
        break;
    }
}

for (let i = 0; i < productsRepeat3.length; i++) {
    console.log(`${i}: ${productsRepeat3[i].title}`);
}

console.log(productsRepeat3);


// Повтор 4/15 на тему "Удаление через splice"

// Условие:
// Дан массив usersRepeat4.
//
// Нужно:
// 1. Удалить пользователя с id 2.
// 2. Вывести весь массив usersRepeat4.
//
// Ожидаемый usersRepeat4 после удаления:
// [
//   { id: 1, name: "Alex" },
//   { id: 3, name: "Tom" }
// ]

const usersRepeat4 = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Tom" },
];

for (let i = 0; i < usersRepeat4.length; i++) {
    if (usersRepeat4[i].id === 2) {
        usersRepeat4.splice(i, 1);
    }
}
console.log(usersRepeat4);


// Повтор 5/15 на тему "Удаление через splice"

// Условие:
// Дан массив tasksRepeat5.
//
// Нужно:
// 1. Удалить задачу с id 1.
// 2. Добавить новую задачу:
//    { id: 4, title: "Review", completed: false }
// 3. Вывести весь массив tasksRepeat5.
//
// Ожидаемый tasksRepeat5:
// [
//   { id: 2, title: "Practice", completed: false },
//   { id: 3, title: "Rest", completed: false },
//   { id: 4, title: "Review", completed: false }
// ]

const tasksRepeat5 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: false },
];

for (let i = 0; i < tasksRepeat5.length; i++) {
    if (tasksRepeat5[i].id === 1) {
        tasksRepeat5.splice(i, 1);
        break;
    }
}

tasksRepeat5.push({
    id: 4,
    title: "Review",
    completed: false,
});

console.log(tasksRepeat5);

// Повтор 6/15 на тему "Удаление через splice"

// Условие:
// Дан массив productsRepeat6.
//
// Нужно:
// 1. Удалить товар с id 2.
// 2. Посчитать сумму цен оставшихся товаров.
// 3. Вывести весь массив productsRepeat6.
// 4. Вывести сумму.
//
// Ожидаемый productsRepeat6:
// [
//   { id: 1, title: "Laptop", price: 1200 },
//   { id: 3, title: "Tablet", price: 500 }
// ]
//
// Ожидаемая сумма:
// 1700

const productsRepeat6 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

for (let i = 0; i < productsRepeat6.length; i++) {
    if (productsRepeat6[i].id === 2) {
        productsRepeat6.splice(i, 1);
        break;
    }
}

let totalRepeat6 = 0;

for (const productRepeat6 of productsRepeat6) {
    totalRepeat6 += productRepeat6.price;
}

console.log(productsRepeat6);
console.log(totalRepeat6);

// Повтор 7/15 на тему "Проверка свойства через in"

// Условие:
// Дан объект userRepeat7.
//
// Нужно:
// 1. Проверить, есть ли свойство email внутри contacts.
// 2. Если email есть, вывести:
//    alex@mail.com
//
// Ожидаемый вывод:
// alex@mail.com

const userRepeat7 = {
    name: "Alex",
    contacts: {
        email: "alex@mail.com",
    },
};

if ("email" in userRepeat7.contacts) {
    console.log(userRepeat7.contacts.email);
}

// Повтор 8/15 на тему "Проверка свойства через in"

// Условие:
// Дан объект responseRepeat8.
//
// Нужно:
// 1. Проверить, есть ли свойство profile внутри user.
// 2. Если profile есть, вывести имя пользователя.
//
// Ожидаемый вывод:
// Maria

const responseRepeat8 = {
    status: "success",
    data: {
        user: {
            profile: {
                name: "Maria",
            },
        },
    },
};

if ("profile" in responseRepeat8.data.user) {
    console.log(responseRepeat8.data.user.profile.name);
}

// Повтор 9/15 на тему "Проверка свойства через in"

// Условие:
// Дан объект settingsRepeat9.
//
// Нужно:
// 1. Проверить, есть ли свойство theme внутри preferences.
// 2. Если theme есть, изменить его на "dark".
// 3. Вывести весь объект settingsRepeat9.
//
// Ожидаемый settingsRepeat9:
// {
//   user: "Alex",
//   preferences: {
//     theme: "dark",
//     language: "ru"
//   }
// }

const settingsRepeat9 = {
    user: "Alex",
    preferences: {
        theme: "light",
        language: "ru",
    },
};

if ("theme" in settingsRepeat9.preferences) {
    settingsRepeat9.preferences.theme = "dark";
}

console.log(settingsRepeat9);

// Повтор 10/15 на тему "Boolean-выражения"

// Условие:
// Дан объект productRepeat10.
//
// Нужно:
// 1. Добавить новое свойство inStock.
// 2. Если stock больше 0, inStock должен быть true.
// 3. Иначе inStock должен быть false.
// 4. Вывести productRepeat10.
//
// Ожидаемый productRepeat10:
// { title: "Phone", stock: 5, inStock: true }

const productRepeat10 = {
    title: "Phone",
    stock: 5,
};

if (productRepeat10.stock > 0) {
    productRepeat10.inStock = true;
} else {
    productRepeat10.inStock = false;
}

console.log(productRepeat10);

// Повтор 11/15 на тему "Boolean-выражения"

// Условие:
// Дан массив productsRepeat11.
//
// Нужно:
// 1. Каждому товару добавить свойство inStock.
// 2. Если stock больше 0, inStock должен быть true.
// 3. Иначе inStock должен быть false.
// 4. Вывести productsRepeat11.
//
// Ожидаемый productsRepeat11:
// [
//   { title: "Laptop", stock: 2, inStock: true },
//   { title: "Tablet", stock: 0, inStock: false },
//   { title: "Phone", stock: 5, inStock: true }
// ]

const productsRepeat11 = [
    { title: "Laptop", stock: 2 },
    { title: "Tablet", stock: 0 },
    { title: "Phone", stock: 5 },
];

for (const productRepeat11 of productsRepeat11) {
    if (productRepeat11.stock > 0) {
        productRepeat11.inStock = true;
    } else {
        productRepeat11.inStock = false;
    }
}

console.log(productsRepeat11);

// Повтор 12/15 на тему "Boolean-выражения"

// Условие:
// Дан массив usersRepeat12.
//
// Нужно:
// 1. Каждому пользователю добавить свойство canEnter.
// 2. Если age больше или равен 18 и isBlocked равно false,
//    canEnter должен быть true.
// 3. Иначе canEnter должен быть false.
// 4. Вывести usersRepeat12.
//
// Ожидаемый usersRepeat12:
// [
//   { name: "Alex", age: 25, isBlocked: false, canEnter: true },
//   { name: "Tom", age: 17, isBlocked: false, canEnter: false },
//   { name: "Maria", age: 30, isBlocked: true, canEnter: false }
// ]

const usersRepeat12 = [
    { name: "Alex", age: 25, isBlocked: false },
    { name: "Tom", age: 17, isBlocked: false },
    { name: "Maria", age: 30, isBlocked: true },
];

for (const userRepeat12 of usersRepeat12) {
    if (userRepeat12.age >= 18 && !userRepeat12.isBlocked) {
        userRepeat12.canEnter = true;
    } else {
        userRepeat12.canEnter = false;
    }
}

console.log(usersRepeat12);

// Повтор 13/15 на тему "Массив vs объект внутри массива"

// Условие:
// Дан массив usersRepeat13.
//
// Нужно:
// 1. Найти пользователя с id 2.
// 2. Изменить его city на "Busan".
// 3. Вывести имя этого пользователя.
// 4. Вывести весь массив usersRepeat13.
//
// Ожидаемый вывод имени:
// Maria
//
// Ожидаемый usersRepeat13:
// [
//   { id: 1, name: "Alex", city: "Seoul" },
//   { id: 2, name: "Maria", city: "Busan" },
//   { id: 3, name: "Tom", city: "London" }
// ]

const usersRepeat13 = [
    { id: 1, name: "Alex", city: "Seoul" },
    { id: 2, name: "Maria", city: "Madrid" },
    { id: 3, name: "Tom", city: "London" },
];

for (let i = 0; i < usersRepeat13.length; i++) {
    if (usersRepeat13[i].id === 2) {
        usersRepeat13[i].city = "Busan";

        console.log(usersRepeat13[i].name);

        break;
    }
}

console.log(usersRepeat13);

// Повтор 14/15 на тему "Массив vs объект внутри массива"

// Условие:
// Дан объект responseRepeat14.
//
// Нужно:
// 1. Найти заказ с id 2 внутри orders.
// 2. Изменить его status на "paid".
// 3. Вывести весь объект responseRepeat14.
//
// Ожидаемый orders после изменения:
// [
//   { id: 1, total: 1200, status: "paid" },
//   { id: 2, total: 800, status: "paid" },
//   { id: 3, total: 500, status: "pending" }
// ]

const responseRepeat14 = {
    status: "success",
    data: {
        orders: [
            { id: 1, total: 1200, status: "paid" },
            { id: 2, total: 800, status: "pending" },
            { id: 3, total: 500, status: "pending" },
        ],
    },
};

for (let i = 0; i < responseRepeat14.data.orders.length; i++) {
    if (responseRepeat14.data.orders[i].id === 2) {
        responseRepeat14.data.orders[i].status = "paid";
        break;
    }
}

console.log(responseRepeat14);

// Повтор 15/15 на тему "Массив vs объект внутри массива"

// Условие:
// Дан объект dashboardRepeat15.
//
// Нужно:
// 1. Найти виджет с id "tasks" внутри widgets.
// 2. Изменить его count на 12.
// 3. Найти виджет с id "messages".
// 4. Если он найден, добавить ему новое свойство hasUnread.
//    Если count больше 0, hasUnread должен быть true.
//    Иначе hasUnread должен быть false.
// 5. Вывести весь объект dashboardRepeat15.
//
// Ожидаемый widgets:
// [
//   { id: "tasks", title: "Tasks", count: 12 },
//   { id: "messages", title: "Messages", count: 3, hasUnread: true },
//   { id: "alerts", title: "Alerts", count: 0 }
// ]

const dashboardRepeat15 = {
    user: "Alex",
    widgets: [
        { id: "tasks", title: "Tasks", count: 5 },
        { id: "messages", title: "Messages", count: 3 },
        { id: "alerts", title: "Alerts", count: 0 },
    ],
};

for (let i = 0; i < dashboardRepeat15.widgets.length; i++) {
    let widget = dashboardRepeat15.widgets[i];

    if (widget.id === "tasks") {
        widget.count = 12;
    }

    if (widget.id === "messages") {
        if (widget.count > 0) {
            widget.hasUnread = true;
        } else {
            widget.hasUnread = false;
        }
    }
}

console.log(dashboardRepeat15);
