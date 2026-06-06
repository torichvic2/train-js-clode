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

// Условие:
// Дан массив tasksArrow11.
//
// Нужно:
// 1. Создать новый массив updatedTasksArrow11 через map.
// 2. В новом массиве у задачи с id 2 completed должен стать true.
// 3. Остальные задачи должны остаться без изменений.
// 4. Исходный массив tasksArrow11 напрямую не изменяй.
// 5. Использовать стрелочные функции.
// 6. Вывести updatedTasksArrow11.
// 7. Вывести tasksArrow11.
//
// Ожидаемый updatedTasksArrow11:
// [
//   { id: 1, title: "Watch", completed: true },
//   { id: 2, title: "Practice", completed: true },
//   { id: 3, title: "Rest", completed: false }
// ]

const tasksArrow11 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: false },
];

const updatedTasksArrow11 = tasksArrow11.map(t => t);
updatedTasksArrow11.map(t => t.id === 2 ? t.completed = true : t);

console.log(tasksArrow11);
console.log(updatedTasksArrow11);