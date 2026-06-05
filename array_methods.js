// Метод find — задача 1/40

// Условие:
// Дан массив usersFind1.
//
// Нужно:
// 1. Найти пользователя с id 2 через find.
// 2. Сохранить результат в переменную foundUserFind1.
// 3. Вывести foundUserFind1 в консоль.
//
// Ожидаемый вывод:
// { id: 2, name: "Maria" }

const usersFind1 = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Tom" },
];

let foundUserFind1;

foundUserFind1 = usersFind1.find(function(user) {
    return user.id === 2;
});

console.log(foundUserFind1);

// Метод find — задача 2/40

// Условие:
// Дан массив productsFind2.
//
// Нужно:
// 1. Найти товар с title "Phone" через find.
// 2. Сохранить результат в переменную foundProductFind2.
// 3. Вывести foundProductFind2 в консоль.
//
// Ожидаемый вывод:
// { id: 2, title: "Phone", price: 800 }

const productsFind2 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const foundProductFind2 = productsFind2.find(function(product) {
    return product.title === "Phone";
});

console.log(foundProductFind2);

// Метод find — задача 3/40

// Условие:
// Дан массив tasksFind3.
//
// Нужно:
// 1. Найти первую задачу, у которой completed равно false.
// 2. Сохранить результат в переменную firstActiveTaskFind3.
// 3. Вывести firstActiveTaskFind3 в консоль.
//
// Ожидаемый вывод:
// { id: 2, title: "Practice", completed: false }

const tasksFind3 = [
    { id: 1, title: "Watch lesson", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: false },
];

const firstActiveTaskFind3 = tasksFind3.find(function(task) {
    return task.completed === false;
});

console.log(firstActiveTaskFind3);

// Метод find — задача 4/40

// Условие:
// Дан массив usersFind4.
//
// Нужно:
// 1. Найти пользователя с role "admin".
// 2. Сохранить результат в переменную adminFind4.
// 3. Если пользователь найден, вывести его name.
// 4. Если пользователь не найден, вывести:
//    Admin not found
//
// Ожидаемый вывод:
// Maria

const usersFind4 = [
    { id: 1, name: "Alex", role: "user" },
    { id: 2, name: "Maria", role: "admin" },
    { id: 3, name: "Tom", role: "user" },
];

const adminFind4 = usersFind4.find(function(user) {
    return user.role === "admin";
});

if (adminFind4) {
    console.log(adminFind4.name);
} else {
     console.log("Admin not found");
}

// Метод find — задача 5/40

// Условие:
// Дан массив productsFind5.
//
// Нужно:
// 1. Найти первый товар, у которого price меньше 700.
// 2. Сохранить результат в переменную cheapProductFind5.
// 3. Если товар найден, изменить его isSelected на true.
// 4. Вывести весь массив productsFind5.
//
// Ожидаемый productsFind5:
// [
//   { id: 1, title: "Laptop", price: 1200, isSelected: false },
//   { id: 2, title: "Phone", price: 800, isSelected: false },
//   { id: 3, title: "Tablet", price: 500, isSelected: true }
// ]

const productsFind5 = [
    { id: 1, title: "Laptop", price: 1200, isSelected: false },
    { id: 2, title: "Phone", price: 800, isSelected: false },
    { id: 3, title: "Tablet", price: 500, isSelected: false },
];

const cheapProductFind5 = productsFind5.find(function(product) {
    return product.price < 700;
});

if (cheapProductFind5) {
    cheapProductFind5.isSelected = true;
}

console.log(productsFind5);

// Метод find — задача 6/40

// Условие:
// Дан массив usersFind6.
//
// Нужно:
// 1. Найти пользователя с email "tom@mail.com".
// 2. Сохранить результат в переменную foundUserFind6.
// 3. Если пользователь найден, изменить его isOnline на true.
// 4. Если пользователь не найден, вывести:
//    User not found
// 5. Вывести весь массив usersFind6.
//
// Ожидаемый usersFind6:
// [
//   { id: 1, name: "Alex", email: "alex@mail.com", isOnline: false },
//   { id: 2, name: "Maria", email: "maria@mail.com", isOnline: false },
//   { id: 3, name: "Tom", email: "tom@mail.com", isOnline: true }
// ]

const usersFind6 = [
    { id: 1, name: "Alex", email: "alex@mail.com", isOnline: false },
    { id: 2, name: "Maria", email: "maria@mail.com", isOnline: false },
    { id: 3, name: "Tom", email: "tom@mail.com", isOnline: false },
];

const foundUserFind6 = usersFind6.find(function(user) {
    return user.email === "tom@mail.com";
});

if (foundUserFind6) {
    foundUserFind6.isOnline = true;
} else {
    console.log("User not found");
}

console.log(usersFind6);

// Метод filter — задача 7/40

// Условие:
// Дан массив usersFilter7.
//
// Нужно:
// 1. Получить всех пользователей старше или равных 18 лет через filter.
// 2. Сохранить результат в переменную adultsFilter7.
// 3. Вывести adultsFilter7 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 1, name: "Alex", age: 25 },
//   { id: 3, name: "Maria", age: 30 }
// ]

const usersFilter7 = [
    { id: 1, name: "Alex", age: 25 },
    { id: 2, name: "Tom", age: 17 },
    { id: 3, name: "Maria", age: 30 },
];

const adultsFilter7 = usersFilter7.filter(function(user) {
    return user.age >= 18;
});

console.log(adultsFilter7);

// Метод filter — задача 8/40

// Условие:
// Дан массив productsFilter8.
//
// Нужно:
// 1. Получить все товары, у которых price меньше 1000.
// 2. Сохранить результат в переменную cheapProductsFilter8.
// 3. Вывести cheapProductsFilter8 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 2, title: "Phone", price: 800 },
//   { id: 3, title: "Tablet", price: 500 }
// ]

const productsFilter8 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const cheapProductsFilter8 = productsFilter8.filter(function(product) {
    return product.price < 1000;
});

console.log(cheapProductsFilter8);

// Метод filter — задача 9/40

// Условие:
// Дан массив tasksFilter9.
//
// Нужно:
// 1. Получить все невыполненные задачи.
// 2. Сохранить результат в переменную activeTasksFilter9.
// 3. Вывести activeTasksFilter9 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 2, title: "Practice", completed: false },
//   { id: 3, title: "Rest", completed: false }
// ]

const tasksFilter9 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: false },
];

const activeTasksFilter9 = tasksFilter9.filter(function(task) {
    return task.completed === false;
});

console.log(activeTasksFilter9);

// Метод filter — задача 10/40

// Условие:
// Дан массив usersFilter10.
//
// Нужно:
// 1. Получить всех пользователей,
//    у которых role равен "user"
//    и isActive равен true.
// 2. Сохранить результат в переменную activeUsersFilter10.
// 3. Вывести activeUsersFilter10 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 1, name: "Alex", role: "user", isActive: true },
//   { id: 4, name: "Kate", role: "user", isActive: true }
// ]

const usersFilter10 = [
    { id: 1, name: "Alex", role: "user", isActive: true },
    { id: 2, name: "Maria", role: "admin", isActive: true },
    { id: 3, name: "Tom", role: "user", isActive: false },
    { id: 4, name: "Kate", role: "user", isActive: true },
];

const activeUsersFilter10 = usersFilter10.filter(function(user) {
    return user.role === "user" && user.isActive === true;
});

console.log(activeUsersFilter10);

// Метод filter — задача 11/40

// Условие:
// Дан массив commentsFilter11.
//
// Нужно:
// 1. Получить все комментарии пользователя с userId 10.
// 2. Сохранить результат в переменную userCommentsFilter11.
// 3. Вывести userCommentsFilter11 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 1, userId: 10, text: "Good", likes: 2 },
//   { id: 3, userId: 10, text: "Useful", likes: 5 }
// ]

const commentsFilter11 = [
    { id: 1, userId: 10, text: "Good", likes: 2 },
    { id: 2, userId: 20, text: "Thanks", likes: 1 },
    { id: 3, userId: 10, text: "Useful", likes: 5 },
];

const userCommentsFilter11 = commentsFilter11.filter(function(comment) {
    return comment.userId === 10;
});

console.log(userCommentsFilter11);

// Метод filter — задача 12/40

// Условие:
// Дан массив productsFilter12.
//
// Нужно:
// 1. Получить все товары,
//    у которых category равен "tech"
//    и stock больше 0.
// 2. Сохранить результат в переменную availableTechProductsFilter12.
// 3. Вывести availableTechProductsFilter12 в консоль.
//
// Ожидаемый вывод:
// [
//   { id: 1, title: "Laptop", category: "tech", stock: 3 },
//   { id: 4, title: "Phone", category: "tech", stock: 5 }
// ]

const productsFilter12 = [
    { id: 1, title: "Laptop", category: "tech", stock: 3 },
    { id: 2, title: "Book", category: "books", stock: 10 },
    { id: 3, title: "Tablet", category: "tech", stock: 0 },
    { id: 4, title: "Phone", category: "tech", stock: 5 },
];

const availableTechProductsFilter12 = productsFilter12.filter(function(product) {
    return product.category === "tech" && product.stock > 0;
});

console.log(availableTechProductsFilter12);

// Метод map — задача 13/40

// Условие:
// Дан массив usersMap13.
//
// Нужно:
// 1. Получить массив имён пользователей через map.
// 2. Сохранить результат в переменную userNamesMap13.
// 3. Вывести userNamesMap13 в консоль.
//
// Ожидаемый вывод:
// ["Alex", "Maria", "Tom"]

const usersMap13 = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Tom" },
];

const userNamesMap13 = usersMap13.map(function(user) {
    return user.name;
});

console.log(userNamesMap13);

// Метод map — задача 14/40

// Условие:
// Дан массив productsMap14.
//
// Нужно:
// 1. Получить массив названий товаров через map.
// 2. Сохранить результат в переменную productTitlesMap14.
// 3. Вывести productTitlesMap14 в консоль.
//
// Ожидаемый вывод:
// ["Laptop", "Phone", "Tablet"]

const productsMap14 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const productTitlesMap14 = productsMap14.map(function(product) {
    return product.title;
});

console.log(productTitlesMap14);

// Метод map — задача 15/40

// Условие:
// Дан массив productsMap15.
//
// Нужно:
// 1. Создать массив productLabelsMap15.
// 2. В нём должны быть строки в формате:
//    "Laptop - 1200"
//    "Phone - 800"
//    "Tablet - 500"
// 3. Используй map.
// 4. Выведи productLabelsMap15 в консоль.
//
// Ожидаемый вывод:
// ["Laptop - 1200", "Phone - 800", "Tablet - 500"]

const productsMap15 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const productLabelsMap15 = productsMap15.map(function(product) {
    return `${product.title} - ${product.price}`;
});

console.log(productLabelsMap15);

// Метод map — задача 16/40

// Условие:
// Дан массив usersMap16.
//
// Нужно:
// 1. Создать массив userCardsMap16.
// 2. В нём должны быть объекты с двумя свойствами:
//    name
//    label
// 3. label должен быть строкой:
//    "Alex, 25"
//    "Maria, 30"
//    "Tom, 19"
// 4. Используй map.
// 5. Выведи userCardsMap16 в консоль.
//
// Ожидаемый вывод:
// [
//   { name: "Alex", label: "Alex, 25" },
//   { name: "Maria", label: "Maria, 30" },
//   { name: "Tom", label: "Tom, 19" }
// ]

const usersMap16 = [
    { id: 1, name: "Alex", age: 25 },
    { id: 2, name: "Maria", age: 30 },
    { id: 3, name: "Tom", age: 19 },
];

const userCardsMap16 = usersMap16.map(function(user) {
    return {
        name: user.name,
        label: `${user.name}, ${user.age}`,
    };
});

console.log(userCardsMap16);

// Метод map — задача 17/40

// Условие:
// Дан массив productsMap17.
//
// Нужно:
// 1. Создать массив productCardsMap17.
// 2. В нём должны быть объекты с такими свойствами:
//    title
//    price
//    isExpensive
// 3. isExpensive должен быть true,
//    если price больше или равен 1000.
//    Иначе false.
// 4. Используй map.
// 5. Выведи productCardsMap17 в консоль.
//
// Ожидаемый вывод:
// [
//   { title: "Laptop", price: 1200, isExpensive: true },
//   { title: "Phone", price: 800, isExpensive: false },
//   { title: "Tablet", price: 500, isExpensive: false }
// ]

const productsMap17 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const productCardsMap17 = productsMap17.map(function(product) {
    return {
        title: product.title,
        price: product.price,
        isExpensive: product.price >= 1000,
    };
});

console.log(productCardsMap17);

// Метод map — задача 18/40

// Условие:
// Дан массив tasksMap18.
//
// Нужно:
// 1. Создать новый массив updatedTasksMap18.
// 2. В новом массиве у задачи с id 2
//    completed должен стать true.
// 3. Остальные задачи должны остаться без изменений.
// 4. Исходный массив tasksMap18 напрямую не изменяй.
// 5. Используй map.
// 6. Выведи updatedTasksMap18.
// 7. Выведи tasksMap18.
//
// Ожидаемый updatedTasksMap18:
// [
//   { id: 1, title: "Watch", completed: true },
//   { id: 2, title: "Practice", completed: true },
//   { id: 3, title: "Rest", completed: false }
// ]

const tasksMap18 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: false },
];

const updatedTasksMap18 = tasksMap18.map(function(task) {
    if (task.id === 2) {
        return {
            id: task.id,
            title: task.title,
            completed: true,
        };
    }
    return task;
});

console.log(updatedTasksMap18);
console.log(tasksMap18);

// Метод some — задача 19/40

// Условие:
// Дан массив usersSome19.
//
// Нужно:
// 1. Проверить, есть ли хотя бы один пользователь онлайн.
// 2. Сохранить результат в переменную hasOnlineUserSome19.
// 3. Вывести hasOnlineUserSome19 в консоль.
//
// Ожидаемый вывод:
// true

const usersSome19 = [
    { id: 1, name: "Alex", isOnline: false },
    { id: 2, name: "Maria", isOnline: true },
    { id: 3, name: "Tom", isOnline: false },
];

const hasOnlineUserSome19 = usersSome19.some(function(user) {
    return user.isOnline;
});

console.log(hasOnlineUserSome19);

// Метод some — задача 20/40

// Условие:
// Дан массив productsSome20.
//
// Нужно:
// 1. Проверить, есть ли хотя бы один товар,
//    у которого stock равен 0.
// 2. Сохранить результат в переменную hasOutOfStockProductSome20.
// 3. Вывести hasOutOfStockProductSome20 в консоль.
//
// Ожидаемый вывод:
// true

const productsSome20 = [
    { id: 1, title: "Laptop", stock: 3 },
    { id: 2, title: "Phone", stock: 0 },
    { id: 3, title: "Tablet", stock: 5 },
];

const hasOutOfStockProductSome20 = productsSome20.some(function(product) {
    return product.stock === 0;
});

console.log(hasOutOfStockProductSome20);

// Метод some — задача 21/40

// Условие:
// Дан массив tasksSome21.
//
// Нужно:
// 1. Проверить, есть ли хотя бы одна невыполненная задача.
// 2. Сохранить результат в переменную hasActiveTaskSome21.
// 3. Вывести hasActiveTaskSome21 в консоль.
//
// Ожидаемый вывод:
// true

const tasksSome21 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: true },
];

const hasActiveTaskSome21 = tasksSome21.some(function(task) {
    return task.completed === false;
});

console.log(hasActiveTaskSome21);

// Метод some — задача 22/40

// Условие:
// Дан массив cartSome22.
//
// Нужно:
// 1. Проверить, есть ли в корзине товар с id 3.
// 2. Сохранить результат в переменную hasProductSome22.
// 3. Если товар есть, вывести:
//    Product exists
// 4. Иначе вывести:
//    Product not found
//
// Ожидаемый вывод:
// Product exists

const cartSome22 = [
    { id: 1, title: "Laptop" },
    { id: 2, title: "Phone" },
    { id: 3, title: "Tablet" },
];

const hasProductSome22 = cartSome22.some(function(cart) {
    return cart.id === 3;
});

if (hasProductSome22) {
    console.log("Product exists");
} else {
    console.log("Product not found");
}

// Метод some — задача 23/40

// Условие:
// Дан массив usersSome23.
//
// Нужно:
// 1. Проверить, есть ли пользователь с role "admin"
//    и isActive true.
// 2. Сохранить результат в переменную hasActiveAdminSome23.
// 3. Вывести hasActiveAdminSome23 в консоль.
//
// Ожидаемый вывод:
// true

const usersSome23 = [
    { id: 1, name: "Alex", role: "user", isActive: true },
    { id: 2, name: "Maria", role: "admin", isActive: false },
    { id: 3, name: "Kate", role: "admin", isActive: true },
];

const hasActiveAdminSome23 = usersSome23.some(function(user) {
    return user.role === "admin" && user.isActive;
});

console.log(hasActiveAdminSome23);

// Метод every — задача 24/40

// Условие:
// Дан массив tasksEvery24.
//
// Нужно:
// 1. Проверить, все ли задачи выполнены.
// 2. Сохранить результат в переменную allCompletedEvery24.
// 3. Вывести allCompletedEvery24 в консоль.
//
// Ожидаемый вывод:
// true

const tasksEvery24 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: true },
    { id: 3, title: "Rest", completed: true },
];

const allCompletedEvery24 = tasksEvery24.every(function(task) {
    return task.completed;
});

console.log(allCompletedEvery24);

// Метод every — задача 25/40

// Условие:
// Дан массив productsEvery25.
//
// Нужно:
// 1. Проверить, все ли товары есть в наличии.
//    Товар есть в наличии, если stock больше 0.
// 2. Сохранить результат в переменную allInStockEvery25.
// 3. Вывести allInStockEvery25 в консоль.
//
// Ожидаемый вывод:
// false

const productsEvery25 = [
    { id: 1, title: "Laptop", stock: 3 },
    { id: 2, title: "Phone", stock: 0 },
    { id: 3, title: "Tablet", stock: 5 },
];

const allInStockEvery25 = productsEvery25.every(function(product) {
    return product.stock > 0;
});

console.log(allInStockEvery25);

// Метод every — задача 26/40

// Условие:
// Дан массив usersEvery26.
//
// Нужно:
// 1. Проверить, все ли пользователи совершеннолетние.
//    Пользователь совершеннолетний, если age >= 18.
// 2. Сохранить результат в переменную allAdultsEvery26.
// 3. Вывести allAdultsEvery26 в консоль.
//
// Ожидаемый вывод:
// false

const usersEvery26 = [
    { id: 1, name: "Alex", age: 25 },
    { id: 2, name: "Tom", age: 17 },
    { id: 3, name: "Maria", age: 30 },
];

const allAdultsEvery26 = usersEvery26.every(function(user) {
    return user.age >= 18;
});

console.log(allAdultsEvery26);

// Метод every — задача 27/40

// Условие:
// Дан массив formFieldsEvery27.
//
// Нужно:
// 1. Проверить, все ли поля формы заполнены.
//    Поле заполнено, если value не равен пустой строке "".
// 2. Сохранить результат в переменную isFormValidEvery27.
// 3. Вывести isFormValidEvery27 в консоль.
//
// Ожидаемый вывод:
// false

const formFieldsEvery27 = [
    { name: "email", value: "test@mail.com" },
    { name: "password", value: "12345" },
    { name: "city", value: "" },
];

const isFormValidEvery27 = formFieldsEvery27.every(function(formField) {
    return formField.value !== "";
});

console.log(isFormValidEvery27);

// Метод every — задача 28/40

// Условие:
// Дан массив permissionsEvery28.
//
// Нужно:
// 1. Проверить, все ли права разрешены.
//    Право разрешено, если allowed равно true.
// 2. Сохранить результат в переменную allPermissionsAllowedEvery28.
// 3. Вывести allPermissionsAllowedEvery28 в консоль.
//
// Ожидаемый вывод:
// true

const permissionsEvery28 = [
    { name: "canView", allowed: true },
    { name: "canEdit", allowed: true },
    { name: "canDelete", allowed: true },
];

const allPermissionsAllowedEvery28 = permissionsEvery28.every(function(permission) {
    return permission.allowed === true;
});

console.log(allPermissionsAllowedEvery28);

// Метод reduce — задача 29/40

// Условие:
// Дан массив productsReduce29.
//
// Нужно:
// 1. Посчитать сумму цен всех товаров через reduce.
// 2. Сохранить результат в переменную totalPriceReduce29.
// 3. Вывести totalPriceReduce29 в консоль.
//
// Ожидаемый вывод:
// 2500

const productsReduce29 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const totalPriceReduce29 = productsReduce29.reduce(function(acc, product) {
    return acc + product.price;
}, 0);

console.log(totalPriceReduce29);

// Метод reduce — задача 30/40

// Условие:
// Дан массив cartReduce30.
//
// Нужно:
// 1. Посчитать общую сумму корзины через reduce.
// 2. У каждого товара сумма считается так:
//    price * quantity
// 3. Сохранить результат в переменную totalCartReduce30.
// 4. Вывести totalCartReduce30 в консоль.
//
// Ожидаемый вывод:
// 3000

const cartReduce30 = [
    { id: 1, title: "Laptop", price: 1200, quantity: 1 },
    { id: 2, title: "Phone", price: 800, quantity: 2 },
    { id: 3, title: "Case", price: 100, quantity: 2 },
];

const totalCartReduce30 = cartReduce30.reduce(function(acc, cart) {
    return acc + cart.quantity * cart.price;
}, 0);

console.log(totalCartReduce30);

// Метод reduce — задача 31/40

// Условие:
// Дан массив commentsReduce31.
//
// Нужно:
// 1. Посчитать сумму лайков всех комментариев через reduce.
// 2. Сохранить результат в переменную totalLikesReduce31.
// 3. Вывести totalLikesReduce31 в консоль.
//
// Ожидаемый вывод:
// 10

const commentsReduce31 = [
    { id: 1, text: "Good", likes: 2 },
    { id: 2, text: "Thanks", likes: 3 },
    { id: 3, text: "Useful", likes: 5 },
];

const totalLikesReduce31 = commentsReduce31.reduce(function(acc, comment) {
    return acc + comment.likes;
}, 0);

console.log(totalLikesReduce31);

// Метод reduce — задача 32/40

// Условие:
// Дан массив tasksReduce32.
//
// Нужно:
// 1. Посчитать количество выполненных задач через reduce.
// 2. Сохранить результат в переменную completedCountReduce32.
// 3. Вывести completedCountReduce32 в консоль.
//
// Ожидаемый вывод:
// 2

const tasksReduce32 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: true },
];

const completedCountReduce32 = tasksReduce32.reduce(function(acc, task) {
    if (task.completed) {
        return acc + 1;
    } else {
        return acc;
    }
}, 0);

console.log(completedCountReduce32);

// Метод reduce — задача 33/40

// Условие:
// Дан массив usersReduce33.
//
// Нужно:
// 1. Посчитать количество активных пользователей через reduce.
// 2. Активный пользователь — это пользователь,
//    у которого isActive равно true.
// 3. Сохранить результат в переменную activeUsersCountReduce33.
// 4. Вывести activeUsersCountReduce33 в консоль.
//
// Ожидаемый вывод:
// 3

const usersReduce33 = [
    { id: 1, name: "Alex", isActive: true },
    { id: 2, name: "Maria", isActive: true },
    { id: 3, name: "Tom", isActive: false },
    { id: 4, name: "Kate", isActive: true },
];

const activeUsersCountReduce33 = usersReduce33.reduce(function(acc, user) {
    if (user.isActive) {
        return acc + 1;
    } else {
        return acc;
    }
}, 0);

console.log(activeUsersCountReduce33);

// Метод reduce — задача 34/40

// Условие:
// Дан массив tasksReduce34.
//
// Нужно:
// 1. Через reduce создать объект statsReduce34.
// 2. В объекте statsReduce34 должны быть свойства:
//    total
//    completed
//    active
// 3. total — общее количество задач.
// 4. completed — количество выполненных задач.
// 5. active — количество невыполненных задач.
// 6. Вывести statsReduce34 в консоль.
//
// Ожидаемый вывод:
// { total: 4, completed: 2, active: 2 }

const tasksReduce34 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: false },
    { id: 4, title: "Repeat", completed: true },
];

const statsReduce34 = tasksReduce34.reduce(function(acc, task) {
    acc.total += 1;

    if (task.completed) {
        acc.completed += 1;
    }

    if (!task.completed) {
        acc.active += 1;
    }
    return acc;
}, {
    total: 0,
    completed: 0,
    active: 0,
});
console.log(statsReduce34);

// Метод reduce — задача 35/40

// Условие:
// Дан массив cartReduce35.
//
// Нужно:
// 1. Через reduce создать объект cartStatsReduce35.
// 2. В объекте должны быть свойства:
//    totalPrice
//    totalQuantity
// 3. totalPrice — общая стоимость корзины.
//    Стоимость одного товара: price * quantity.
// 4. totalQuantity — общее количество товаров.
// 5. Вывести cartStatsReduce35 в консоль.
//
// Ожидаемый вывод:
// { totalPrice: 3000, totalQuantity: 5 }

const cartReduce35 = [
    { id: 1, title: "Laptop", price: 1200, quantity: 1 },
    { id: 2, title: "Phone", price: 800, quantity: 2 },
    { id: 3, title: "Case", price: 100, quantity: 2 },
];

const cartStatsReduce35 = cartReduce35.reduce(function(acc, cart) {
    acc.totalPrice += cart.quantity * cart.price;
    acc.totalQuantity += cart.quantity;

    return acc;
}, {
    totalPrice: 0,
    totalQuantity: 0,
});

console.log(cartStatsReduce35);

// Метод reduce — задача 36/40

// Условие:
// Дан массив commentsReduce36.
//
// Нужно:
// 1. Через reduce создать объект commentsStatsReduce36.
// 2. В объекте должны быть свойства:
//    totalComments
//    totalLikes
//    likedByMeCount
// 3. totalComments — общее количество комментариев.
// 4. totalLikes — сумма всех likes.
// 5. likedByMeCount — количество комментариев,
//    у которых likedByMe равно true.
// 6. Вывести commentsStatsReduce36 в консоль.
//
// Ожидаемый вывод:
// { totalComments: 3, totalLikes: 10, likedByMeCount: 2 }

const commentsReduce36 = [
    { id: 1, text: "Good", likes: 2, likedByMe: true },
    { id: 2, text: "Thanks", likes: 3, likedByMe: false },
    { id: 3, text: "Useful", likes: 5, likedByMe: true },
];

const commentsStatsReduce36 = commentsReduce36.reduce(function(acc, comment) {
    acc.totalComments += 1;
    acc.totalLikes += comment.likes;

    if (comment.likedByMe) {
        acc.likedByMeCount += 1;
    }

    return acc;
}, {
    totalComments: 0,
    totalLikes: 0,
    likedByMeCount: 0,
});

console.log(commentsStatsReduce36);

// Смешанная задача 37/40 на методы filter + map

// Условие:
// Дан массив productsMixed37.
//
// Нужно:
// 1. Получить только товары из категории "tech",
//    у которых stock больше 0.
// 2. На основе этих товаров создать массив карточек productCardsMixed37.
// 3. В каждой карточке должны быть свойства:
//    title
//    label
// 4. label должен быть строкой:
//    "Laptop - 1200"
//    "Phone - 800"
// 5. Используй filter и map.
// 6. Вывести productCardsMixed37 в консоль.
//
// Ожидаемый вывод:
// [
//   { title: "Laptop", label: "Laptop - 1200" },
//   { title: "Phone", label: "Phone - 800" }
// ]

const productsMixed37 = [
    { id: 1, title: "Laptop", category: "tech", price: 1200, stock: 3 },
    { id: 2, title: "Book", category: "books", price: 20, stock: 10 },
    { id: 3, title: "Tablet", category: "tech", price: 500, stock: 0 },
    { id: 4, title: "Phone", category: "tech", price: 800, stock: 5 },
];

const productCardsMixed37 = productsMixed37.filter(function(product) {
    return product.category === "tech" && product.stock > 0;
}).map(function(product) {
    return {
        title: product.title,
        label: `${product.title} - ${product.price}`,
    };
});

console.log(productCardsMixed37);

// Смешанная задача 38/40 на методы find + map

// Условие:
// Дан массив usersMixed38.
//
// Нужно:
// 1. Найти пользователя с id 2 через find.
// 2. Если пользователь найден, создать новый массив updatedUsersMixed38 через map.
// 3. В новом массиве у пользователя с id 2
//    isOnline должен стать true.
// 4. Остальные пользователи должны остаться без изменений.
// 5. Исходный массив usersMixed38 напрямую не изменяй.
// 6. Вывести найденного пользователя.
// 7. Вывести updatedUsersMixed38.
// 8. Вывести usersMixed38.
//
// Ожидаемый updatedUsersMixed38:
// [
//   { id: 1, name: "Alex", isOnline: false },
//   { id: 2, name: "Maria", isOnline: true },
//   { id: 3, name: "Tom", isOnline: false }
// ]

const usersMixed38 = [
    { id: 1, name: "Alex", isOnline: false },
    { id: 2, name: "Maria", isOnline: false },
    { id: 3, name: "Tom", isOnline: false },
];

const foundUsersMixed38 = usersMixed38.find(function(user) {
    return user.id === 2;
});

let updatedUsersMixed38 = usersMixed38;

if (foundUsersMixed38) {
    updatedUsersMixed38 = usersMixed38.map(function(user) {
            if (user.id === 2) {
                return {
                id: user.id,
                name: user.name,
                isOnline: true,
            };
        }
        return user;
    });
}

console.log(foundUsersMixed38);
console.log(updatedUsersMixed38);
console.log(usersMixed38);

// Смешанная задача 39/40 на методы some + filter

// Условие:
// Дан массив productsMixed39.
//
// Нужно:
// 1. Проверить, есть ли хотя бы один товар категории "tech".
// 2. Сохранить результат в переменную hasTechProductsMixed39.
// 3. Если такие товары есть,
//    создать массив availableTechProductsMixed39.
// 4. В availableTechProductsMixed39 должны попасть товары,
//    у которых category равен "tech"
//    и stock больше 0.
// 5. Если таких товаров нет, вывести:
//    No tech products
// 6. Вывести hasTechProductsMixed39.
// 7. Вывести availableTechProductsMixed39,
//    если он был создан.
//
// Ожидаемый вывод:
// true
// [
//   { id: 1, title: "Laptop", category: "tech", stock: 3 },
//   { id: 4, title: "Phone", category: "tech", stock: 5 }
// ]

const productsMixed39 = [
    { id: 1, title: "Laptop", category: "tech", stock: 3 },
    { id: 2, title: "Book", category: "books", stock: 10 },
    { id: 3, title: "Tablet", category: "tech", stock: 0 },
    { id: 4, title: "Phone", category: "tech", stock: 5 },
];

const hasTechProductsMixed39 = productsMixed39.some(function(product) {
    return product.category === "tech";
});

let availableTechProductsMixed39 = [];

if (hasTechProductsMixed39) {
    availableTechProductsMixed39 = productsMixed39.filter(function(product) {
        return product.category === "tech" && product.stock > 0
        });
} else {
    console.log("No tech products");
}

console.log(hasTechProductsMixed39);
if(hasTechProductsMixed39) {
    console.log(availableTechProductsMixed39);
}


// Смешанная задача 40/40 на find + filter + map + reduce

// Условие:
// Дан объект shopMixed40.
//
// Нужно:
// 1. Найти пользователя с id 2 через find.
// 2. Если пользователь найден,
//    получить все заказы этого пользователя через filter.
// 3. На основе заказов пользователя создать массив orderCardsMixed40 через map.
//    В каждой карточке должны быть свойства:
//    id
//    label
// 4. label должен быть строкой:
//    "Order 2 - 1600"
//    "Order 3 - 200"
// 5. Через reduce посчитать общую сумму заказов пользователя.
//    Сумма одного заказа: total.
// 6. Создать объект summaryMixed40.
//    В нём должны быть свойства:
//    userName
//    ordersCount
//    total
// 7. Вывести найденного пользователя.
// 8. Вывести orderCardsMixed40.
// 9. Вывести summaryMixed40.
//
// Ожидаемый orderCardsMixed40:
// [
//   { id: 2, label: "Order 2 - 1600" },
//   { id: 3, label: "Order 3 - 200" }
// ]
//
// Ожидаемый summaryMixed40:
// { userName: "Maria", ordersCount: 2, total: 1800 }
const shopMixed40 = {
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

const isUserShopMixed40 = shopMixed40.users.find(function(user) {
    return user.id === 2;
});

let userOrderCardsMixed40 = [];
let orderCardsMixed40 = [];
let summaryMixed40 = {};


if (isUserShopMixed40) {
    userOrderCardsMixed40 = shopMixed40.orders.filter(function(order) {
       return order.userId === isUserShopMixed40.id;
    });

    orderCardsMixed40 = userOrderCardsMixed40.map(function(order) {
        return {
            id: order.id,
            label: `Order ${order.id} - ${order.total}`,
        };
    });

    const totalMixed40 = userOrderCardsMixed40.reduce(function(acc, order) {
        return acc + order.total;
    }, 0);

    summaryMixed40 = {
        userName: isUserShopMixed40.name,
        ordersCount: userOrderCardsMixed40.length,
        total: totalMixed40,
    };
}

console.log(isUserShopMixed40);
console.log(orderCardsMixed40);
console.log(summaryMixed40);


