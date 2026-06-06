// Spread — задача 1/15

// Условие:
// Дан объект userSpread1.
//
// Нужно:
// 1. Создать новый объект updatedUserSpread1.
// 2. В новом объекте city должен быть "Busan".
// 3. Исходный объект userSpread1 не изменяй.
// 4. Используй spread.
// 5. Выведи userSpread1.
// 6. Выведи updatedUserSpread1.
//
// Ожидаемый updatedUserSpread1:
// { name: "Alex", age: 25, city: "Busan" }

const userSpread1 = {
    name: "Alex",
    age: 25,
    city: "Seoul",
};

const updatedUserSpread1 = {...userSpread1, city: "Busan"};

console.log(userSpread1);
console.log(updatedUserSpread1);

// Spread — задача 2/15

// Условие:
// Дан объект productSpread2.
//
// Нужно:
// 1. Создать новый объект updatedProductSpread2.
// 2. В новом объекте price должен быть 750.
// 3. В новом объекте isAvailable должен быть true.
// 4. Исходный объект productSpread2 не изменяй.
// 5. Используй spread.
// 6. Выведи productSpread2.
// 7. Выведи updatedProductSpread2.
//
// Ожидаемый updatedProductSpread2:
// { title: "Phone", price: 750, isAvailable: true }

const productSpread2 = {
    title: "Phone",
    price: 800,
};

const updatedProductSpread2 = {...productSpread2, price: 750, isAvailable: true};

console.log(productSpread2);
console.log(updatedProductSpread2);

// Spread — задача 3/15

// Условие:
// Дан массив numbersSpread3.
//
// Нужно:
// 1. Создать новый массив updatedNumbersSpread3.
// 2. В новом массиве должны быть все старые числа
//    и число 4 в конце.
// 3. Исходный массив numbersSpread3 не изменяй.
// 4. Используй spread.
// 5. Выведи numbersSpread3.
// 6. Выведи updatedNumbersSpread3.
//
// Ожидаемый updatedNumbersSpread3:
// [1, 2, 3, 4]

const numbersSpread3 = [1, 2, 3];

const updatedNumbersSpread3 = [...numbersSpread3, 4];

console.log(numbersSpread3);
console.log(updatedNumbersSpread3);

// Spread — задача 4/15

// Условие:
// Дан массив usersSpread4.
//
// Нужно:
// 1. Создать новый массив updatedUsersSpread4.
// 2. В новом массиве должны быть все старые пользователи
//    и новый пользователь:
//    { id: 3, name: "Tom" }
// 3. Исходный массив usersSpread4 не изменяй.
// 4. Используй spread.
// 5. Выведи usersSpread4.
// 6. Выведи updatedUsersSpread4.
//
// Ожидаемый updatedUsersSpread4:
// [
//   { id: 1, name: "Alex" },
//   { id: 2, name: "Maria" },
//   { id: 3, name: "Tom" }
// ]

const usersSpread4 = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Maria" },
];

const updatedUsersSpread4 = [...usersSpread4, { id: 3, name: "Tom" }];

console.log(usersSpread4);
console.log(updatedUsersSpread4);

// Spread — задача 5/15

// Условие:
// Даны массивы firstSpread5 и secondSpread5.
//
// Нужно:
// 1. Создать новый массив allNumbersSpread5.
// 2. В нём должны быть элементы обоих массивов.
// 3. Исходные массивы не изменяй.
// 4. Используй spread.
// 5. Выведи allNumbersSpread5.
//
// Ожидаемый вывод:
// [1, 2, 3, 4, 5, 6]

const firstSpread5 = [1, 2, 3];
const secondSpread5 = [4, 5, 6];

const allNumbersSpread5 = [...firstSpread5, ...secondSpread5];

console.log(allNumbersSpread5);

// Spread — задача 6/15

// Условие:
// Дан объект userSpread6 с вложенным объектом address.
//
// Нужно:
// 1. Создать новый объект updatedUserSpread6.
// 2. В новом объекте город должен быть "Busan".
// 3. Исходный объект userSpread6 не изменяй.
// 4. Используй spread на нужных уровнях.
// 5. Выведи userSpread6.
// 6. Выведи updatedUserSpread6.
//
// Ожидаемый updatedUserSpread6:
// {
//   name: "Alex",
//   address: {
//     city: "Busan",
//     country: "South Korea"
//   }
// }

const userSpread6 = {
    name: "Alex",
    address: {
        city: "Seoul",
        country: "South Korea",
    },
};

const updatedUserSpread6 = {...userSpread6,
    address:
        {...userSpread6.address,
            city: "Busan"
        }
};

console.log(userSpread6);
console.log(updatedUserSpread6);

// Spread — задача 7/15

// Условие:
// Дан объект profileSpread7.
//
// Нужно:
// 1. Создать новый объект updatedProfileSpread7.
// 2. В новом объекте email должен быть "new@mail.com".
// 3. В новом объекте theme должен быть "dark".
// 4. Исходный объект profileSpread7 не изменяй.
// 5. Используй spread на нужных уровнях.
// 6. Выведи profileSpread7.
// 7. Выведи updatedProfileSpread7.
//
// Ожидаемый updatedProfileSpread7:
// {
//   name: "Maria",
//   contacts: {
//     email: "new@mail.com"
//   },
//   settings: {
//     theme: "dark",
//     language: "ru"
//   }
// }

const profileSpread7 = {
    name: "Maria",
    contacts: {
        email: "old@mail.com",
    },
    settings: {
        theme: "light",
        language: "ru",
    },
};

const updatedProfileSpread7 = {...profileSpread7,
    contacts: {
    ...profileSpread7.contacts,
        email: "new@mail.com",
},
    settings: {
    ...profileSpread7.settings,
        theme: "dark",
    },
};

console.log(profileSpread7);
console.log(updatedProfileSpread7);

// Spread — задача 8/15

// Условие:
// Дан массив usersSpread8.
//
// Нужно:
// 1. Создать новый массив updatedUsersSpread8.
// 2. В новом массиве у пользователя с id 2
//    city должен стать "Busan".
// 3. Остальные пользователи должны остаться без изменений.
// 4. Исходный массив usersSpread8 напрямую не изменяй.
// 5. Используй map и spread.
// 6. Выведи usersSpread8.
// 7. Выведи updatedUsersSpread8.
//
// Ожидаемый updatedUsersSpread8:
// [
//   { id: 1, name: "Alex", city: "Seoul" },
//   { id: 2, name: "Maria", city: "Busan" },
//   { id: 3, name: "Tom", city: "London" }
// ]

const usersSpread8 = [
    { id: 1, name: "Alex", city: "Seoul" },
    { id: 2, name: "Maria", city: "Madrid" },
    { id: 3, name: "Tom", city: "London" },
];

const updatedUsersSpread8 = usersSpread8.map(u => u.id === 2 ? {...u, city: "Busan"} : u);

console.log(usersSpread8);
console.log(updatedUsersSpread8);

// Spread — задача 9/15

// Условие:
// Дан массив productsSpread9.
//
// Нужно:
// 1. Создать новый массив updatedProductsSpread9.
// 2. В новом массиве у товара с id 3
//    price должен стать 450.
// 3. Остальные товары должны остаться без изменений.
// 4. Исходный массив productsSpread9 напрямую не изменяй.
// 5. Используй map и spread.
// 6. Выведи productsSpread9.
// 7. Выведи updatedProductsSpread9.
//
// Ожидаемый updatedProductsSpread9:
// [
//   { id: 1, title: "Laptop", price: 1200 },
//   { id: 2, title: "Phone", price: 800 },
//   { id: 3, title: "Tablet", price: 450 }
// ]

const productsSpread9 = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 500 },
];

const updatedProductsSpread9 = productsSpread9.map(p => p.id === 3 ? {...p, price: 450} : p);

console.log(productsSpread9);
console.log(updatedProductsSpread9);

// Spread — задача 10/15

// Условие:
// Дан массив tasksSpread10.
//
// Нужно:
// 1. Создать новый массив updatedTasksSpread10.
// 2. В новом массиве у задачи с id 2
//    completed должен стать true.
// 3. Остальные задачи должны остаться без изменений.
// 4. Исходный массив tasksSpread10 напрямую не изменяй.
// 5. Используй map и spread.
// 6. Выведи tasksSpread10.
// 7. Выведи updatedTasksSpread10.
//
// Ожидаемый updatedTasksSpread10:
// [
//   { id: 1, title: "Watch", completed: true },
//   { id: 2, title: "Practice", completed: true },
//   { id: 3, title: "Rest", completed: false }
// ]

const tasksSpread10 = [
    { id: 1, title: "Watch", completed: true },
    { id: 2, title: "Practice", completed: false },
    { id: 3, title: "Rest", completed: false },
];

const updatedTasksSpread10 = tasksSpread10.map(t => t.id === 2 ? {...t, completed: true } : t);

console.log(tasksSpread10);
console.log(updatedTasksSpread10);

// Spread — задача 11/15

// Условие:
// Дан объект stateSpread11.
//
// Нужно:
// 1. Создать новый объект updatedStateSpread11.
// 2. В новом объекте activeTab должен быть "profile".
// 3. В новом объекте isModalOpen должен быть true.
// 4. Исходный объект stateSpread11 не изменяй.
// 5. Используй spread.
// 6. Выведи stateSpread11.
// 7. Выведи updatedStateSpread11.
//
// Ожидаемый updatedStateSpread11:
// {
//   activeTab: "profile",
//   isModalOpen: true,
//   notifications: 3
// }

const stateSpread11 = {
    activeTab: "home",
    isModalOpen: false,
    notifications: 3,
};

const updatedStateSpread11 = {...stateSpread11,
    activeTab: "profile",
    isModalOpen: true,
}

console.log(stateSpread11);
console.log(updatedStateSpread11);

// Spread — задача 12/15

// Условие:
// Дан объект formSpread12.
//
// Нужно:
// 1. Создать новый объект updatedFormSpread12.
// 2. В новом объекте поле email должно стать "new@mail.com".
// 3. Остальные поля должны остаться без изменений.
// 4. Исходный объект formSpread12 не изменяй.
// 5. Используй spread на нужных уровнях.
// 6. Выведи formSpread12.
// 7. Выведи updatedFormSpread12.
//
// Ожидаемый updatedFormSpread12:
// {
//   fields: {
//     email: "new@mail.com",
//     password: "12345"
//   },
//   isValid: false
// }

const formSpread12 = {
    fields: {
        email: "old@mail.com",
        password: "12345",
    },
    isValid: false,
};

const updatedFormSpread12 = {...formSpread12, fields: {
    ...formSpread12.fields,
        email: "new@mail.com",
    },
};

console.log(formSpread12);
console.log(updatedFormSpread12);

// Spread — задача 13/15

// Условие:
// Дан массив usersSpread13.
// У каждого пользователя есть вложенный объект settings.
//
// Нужно:
// 1. Создать новый массив updatedUsersSpread13.
// 2. В новом массиве у пользователя с id 2
//    theme должен стать "dark".
// 3. Остальные пользователи должны остаться без изменений.
// 4. Исходный массив usersSpread13 напрямую не изменяй.
// 5. Используй map и spread на нужных уровнях.
// 6. Выведи usersSpread13.
// 7. Выведи updatedUsersSpread13.
//
// Ожидаемый updatedUsersSpread13:
// [
//   { id: 1, name: "Alex", settings: { theme: "light", language: "en" } },
//   { id: 2, name: "Maria", settings: { theme: "dark", language: "ru" } }
// ]

const usersSpread13 = [
    { id: 1, name: "Alex", settings: { theme: "light", language: "en" } },
    { id: 2, name: "Maria", settings: { theme: "light", language: "ru" } },
];

const updatedUsersSpread13 = usersSpread13.map(u =>
    u.id === 2
        ? {...u,
            settings: {
            ...u.settings,
                theme: "dark",
            },
        } : u
);

console.log(usersSpread13);
console.log(updatedUsersSpread13);

// Spread — задача 14/15

// Условие:
// Дан объект stateSpread14.
//
// Нужно:
// 1. Создать новый объект updatedStateSpread14.
// 2. В новом объекте в массив todos нужно добавить новую задачу:
//    { id: 3, title: "Rest", completed: false }
// 3. Остальные свойства должны остаться без изменений.
// 4. Исходный объект stateSpread14 не изменяй.
// 5. Используй spread на нужных уровнях.
// 6. Выведи stateSpread14.
// 7. Выведи updatedStateSpread14.
//
// Ожидаемый updatedStateSpread14:
// {
//   user: "Alex",
//   todos: [
//     { id: 1, title: "Watch", completed: true },
//     { id: 2, title: "Practice", completed: false },
//     { id: 3, title: "Rest", completed: false }
//   ]
// }

const stateSpread14 = {
    user: "Alex",
    todos: [
        { id: 1, title: "Watch", completed: true },
        { id: 2, title: "Practice", completed: false },
    ],
};

const updatedStateSpread14 = {...stateSpread14, todos: [
        ...stateSpread14.todos, {
            id: 3,
            title: "Rest",
            completed: false
        },
    ]};

console.log(stateSpread14);
console.log(updatedStateSpread14);

// Spread — задача 15/15

// Условие:
// Дан объект stateSpread15.
//
// Нужно:
// 1. Создать новый объект updatedStateSpread15.
// 2. В новом объекте у задачи с id 2
//    completed должен стать true.
// 3. Остальные свойства должны остаться без изменений.
// 4. Исходный объект stateSpread15 не изменяй.
// 5. Используй spread, map и spread на нужных уровнях.
// 6. Выведи stateSpread15.
// 7. Выведи updatedStateSpread15.
//
// Ожидаемый updatedStateSpread15:
// {
//   user: "Maria",
//   todos: [
//     { id: 1, title: "Watch", completed: true },
//     { id: 2, title: "Practice", completed: true },
//     { id: 3, title: "Rest", completed: false }
//   ]
// }

const stateSpread15 = {
    user: "Maria",
    todos: [
        { id: 1, title: "Watch", completed: true },
        { id: 2, title: "Practice", completed: false },
        { id: 3, title: "Rest", completed: false },
    ],
};

const updatedStateSpread15 = {...stateSpread15,
    todos: stateSpread15.todos.map(t =>
        t.id === 2 ? {...t, completed: true } : t
    ),
};

console.log(stateSpread15);
console.log(updatedStateSpread15);

// Spread extra — задача 1/10
// Нужно:
// 1. Создать новый объект updatedUserSpreadExtra1.
// 2. В новом объекте city должен стать "Busan".
// 3. В новом объекте phone должен стать "+82-10-0000-0000".
// 4. Исходный объект userSpreadExtra1 не изменяй.
// 5. Используй spread на нужных уровнях.
// 6. Выведи userSpreadExtra1.
// 7. Выведи updatedUserSpreadExtra1.

const userSpreadExtra1 = {
    name: "Alex",
    profile: {
        city: "Seoul",
        age: 25,
    },
    contacts: {
        email: "alex@mail.com",
        phone: "",
    },
};

const updatedUserSpreadExtra1 = {...userSpreadExtra1, profile: {
    ...userSpreadExtra1.profile, city: "Busan"}, contacts: {
    ...userSpreadExtra1.contacts, phone: "+82-10-0000-0000",
    },
};

console.log(userSpreadExtra1);
console.log(updatedUserSpreadExtra1);

// Spread extra — задача 2/10
// Нужно:
// 1. Создать новый объект updatedStateSpreadExtra2.
// 2. В новом объекте добавить в массив notifications новое уведомление:
//    { id: 3, text: "New message", read: false }
// 3. Остальные свойства должны остаться без изменений.
// 4. Исходный объект stateSpreadExtra2 не изменяй.
// 5. Используй spread на нужных уровнях.
// 6. Выведи stateSpreadExtra2.
// 7. Выведи updatedStateSpreadExtra2.

const stateSpreadExtra2 = {
    user: "Maria",
    notifications: [
        { id: 1, text: "Welcome", read: true },
        { id: 2, text: "Update", read: false },
    ],
    unreadCount: 1,
};

const updatedStateSpreadExtra2 = {
    ...stateSpreadExtra2,
    notifications: [
        ...stateSpreadExtra2.notifications,
        { id: 3, text: "New message", read: false }
    ]
}

console.log(stateSpreadExtra2);
console.log(updatedStateSpreadExtra2);

// Spread extra — задача 3/10

// Условие:
// Дан объект stateSpreadExtra3.
//
// Нужно:
// 1. Создать новый объект updatedStateSpreadExtra3.
// 2. В новом объекте удалить уведомление с id 1 из массива notifications.
// 3. Остальные свойства должны остаться без изменений.
// 4. Исходный объект stateSpreadExtra3 не изменяй.
// 5. Используй spread и filter.
// 6. Выведи stateSpreadExtra3.
// 7. Выведи updatedStateSpreadExtra3.
//
// Ожидаемый updatedStateSpreadExtra3:
// {
//   user: "Alex",
//   notifications: [
//     { id: 2, text: "Update", read: false },
//     { id: 3, text: "Message", read: false }
//   ]
// }

const stateSpreadExtra3 = {
    user: "Alex",
    notifications: [
        { id: 1, text: "Welcome", read: true },
        { id: 2, text: "Update", read: false },
        { id: 3, text: "Message", read: false },
    ],
};

const updatedStateSpreadExtra3 = {...stateSpreadExtra3, notifications:
        stateSpreadExtra3.notifications.filter(s => s.id !== 1)
};

console.log(stateSpreadExtra3);
console.log(updatedStateSpreadExtra3);

// Spread extra — задача 4/10

// Нужно:
// 1. Создать новый объект updatedStateSpreadExtra4.
// 2. В новом объекте у уведомления с id 2
//    read должен стать true.
// 3. Остальные свойства должны остаться без изменений.
// 4. Исходный объект stateSpreadExtra4 не изменяй.
// 5. Используй spread и map.
// 6. Выведи stateSpreadExtra4.
// 7. Выведи updatedStateSpreadExtra4.

const stateSpreadExtra4 = {
    user: "Alex",
    notifications: [
        { id: 1, text: "Welcome", read: true },
        { id: 2, text: "Update", read: false },
        { id: 3, text: "Message", read: false },
    ],
};

const updatedStateSpreadExtra4 = {...stateSpreadExtra4, notifications:
    stateSpreadExtra4.notifications.map(s => (s.id === 2 ? {...s, read: true} : s)
    )
};

console.log(stateSpreadExtra4);
console.log(updatedStateSpreadExtra4);

// Spread extra — задача 5/10

// 1. Создать новый объект updatedStateSpreadExtra5.
// 2. В новом объекте у пользователя с id 2
//    city должен стать "Busan".
// 3. Остальные свойства должны остаться без изменений.
// 4. Исходный объект stateSpreadExtra5 не изменяй.
// 5. Используй spread и map.

const stateSpreadExtra5 = {
    users: [
        { id: 1, name: "Alex", city: "Seoul" },
        { id: 2, name: "Maria", city: "Madrid" },
        { id: 3, name: "Tom", city: "London" },
    ],
    selectedUserId: 2,
};

const updatedStateSpreadExtra5 = {...stateSpreadExtra5, users:
    stateSpreadExtra5.users.map(u => u.id === 2 ? {...u, city: "Busan"} : u
    ),
};

console.log(stateSpreadExtra5);
console.log(updatedStateSpreadExtra5);

// Spread extra — задача 6/10

// Нужно:
// 1. Создать новый объект updatedStateSpreadExtra6.
// 2. В новом объекте у пользователя с id 2
//    settings.theme должен стать "dark".
// 3. Остальные свойства должны остаться без изменений.
// 4. Исходный объект stateSpreadExtra6 не изменяй.
// 5. Используй spread и map на нужных уровнях.
// 6. Выведи stateSpreadExtra6.
// 7. Выведи updatedStateSpreadExtra6.

const stateSpreadExtra6 = {
    users: [
        { id: 1, name: "Alex", settings: { theme: "light", language: "en" } },
        { id: 2, name: "Maria", settings: { theme: "light", language: "ru" } },
    ],
    selectedUserId: 2,
};

const updatedStateSpreadExtra6 = {...stateSpreadExtra6, users:
    stateSpreadExtra6.users.map(u =>
        u.id === 2 ? {
        ...u, settings: {
        ...u.settings, theme: "dark",
        }} : u
    )
};

console.log(stateSpreadExtra6);
console.log(updatedStateSpreadExtra6);

// Spread extra — задача 7/10

// Нужно:
// 1. Создать новый объект updatedStateSpreadExtra7.
// 2. В новом объекте удалить пользователя с id 1 из массива users.
// 3. Остальные свойства должны остаться без изменений.
// 4. Исходный объект stateSpreadExtra7 не изменяй.
// 5. Используй spread и filter.

const stateSpreadExtra7 = {
    users: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Maria" },
        { id: 3, name: "Tom" },
    ],
    selectedUserId: 2,
};

const updatedStateSpreadExtra7 = {...stateSpreadExtra7, users:
    stateSpreadExtra7.users.filter(u => u.id !== 1)
}

console.log(stateSpreadExtra7);
console.log(updatedStateSpreadExtra7);

// Spread extra — задача 8/10

// 1. Создать новый объект updatedStateSpreadExtra8.
// 2. В новом объекте:
///   - добавить новую задачу в todos:
///     { id: 3, title: "Rest", completed: false }
///   - увеличить stats.total на 1
///   - увеличить stats.active на 1
// 3. Остальные свойства должны остаться без изменений.
// 4. Исходный объект stateSpreadExtra8 не изменяй.
// 5. Используй spread на нужных уровнях.

const stateSpreadExtra8 = {
    todos: [
        { id: 1, title: "Watch", completed: true },
        { id: 2, title: "Practice", completed: false },
    ],
    stats: {
        total: 2,
        completed: 1,
        active: 1,
    },
};

const updatedStateSpreadExtra8 = {...stateSpreadExtra8, todos:
    [...stateSpreadExtra8.todos, { id: 3, title: "Rest", completed: false }],
    stats: {
    ...stateSpreadExtra8.stats,
        total: stateSpreadExtra8.stats.total + 1,
        active: stateSpreadExtra8.stats.active + 1,
    }
};

console.log(stateSpreadExtra8);
console.log(updatedStateSpreadExtra8);

// Spread extra — задача 9/10
// Нужно:
// 1. Создать новый объект updatedStateSpreadExtra9.
// 2. В новом объекте у товара с id 2
//    quantity должен увеличиться на 1.
// 3. В stats.totalItems тоже должно увеличиться на 1.
// 4. Остальные свойства должны остаться без изменений.
// 5. Исходный объект stateSpreadExtra9 не изменяй.
// 6. Используй spread и map.
// 7. Выведи stateSpreadExtra9.
// 8. Выведи updatedStateSpreadExtra9.

const stateSpreadExtra9 = {
    cart: [
        { id: 1, title: "Laptop", quantity: 1 },
        { id: 2, title: "Phone", quantity: 2 },
    ],
    stats: {
        totalItems: 3,
    },
};

const updatedStateSpreadExtra9 = {...stateSpreadExtra9, cart:
        stateSpreadExtra9.cart.map(c =>
            c.id === 2 ? {
            ...c, quantity: c.quantity + 1 }
                : c),
        stats: {
    ...stateSpreadExtra9.stats, totalItems:
                stateSpreadExtra9.stats.totalItems + 1,
    }
};

console.log(stateSpreadExtra9);
console.log(updatedStateSpreadExtra9);

// Spread extra — задача 10/10

// Нужно:
// 1. Создать новый объект updatedStateSpreadExtra10.
// 2. В новом объекте:
///   - у задачи с id 2 completed должен стать true
///   - stats.completed должен увеличиться на 1
///   - stats.active должен уменьшиться на 1
// 3. Остальные свойства должны остаться без изменений.
// 4. Исходный объект stateSpreadExtra10 не изменяй.
// 5. Используй spread и map.
// 6. Выведи stateSpreadExtra10.
// 7. Выведи updatedStateSpreadExtra10.

const stateSpreadExtra10 = {
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

const updatedStateSpreadExtra10 = {...stateSpreadExtra10,
    todos:
    stateSpreadExtra10.todos.map(s => s.id === 2 ? {...s, completed: true} : s),
    stats: {
    ...stateSpreadExtra10.stats,
        completed: stateSpreadExtra10.stats.completed + 1,
        active: stateSpreadExtra10.stats.active - 1,
    }
};

console.log(stateSpreadExtra10);
console.log(updatedStateSpreadExtra10);
