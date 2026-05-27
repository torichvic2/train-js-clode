// Реальная задача 8: приветствие пользователя
//
// Напиши функцию getUserGreeting(name, isLoggedIn), которая возвращает сообщение:
//
//     если isLoggedIn === false, вернуть "Пожалуйста, войдите в аккаунт"
// если isLoggedIn === true и name не пустая строка, вернуть "Здравствуйте, NAME"
// если isLoggedIn === true, но name пустая строка, вернуть "Здравствуйте, пользователь"
// Примеры:
//
//     getUserGreeting("Анна", true);  // "Здравствуйте, Анна"
// getUserGreeting("", true);      // "Здравствуйте, пользователь"
// getUserGreeting("Анна", false); // "Пожалуйста, войдите в аккаунт"

function getUserGreeting(name, isLoggedIn) {
    if (!isLoggedIn) {
        return "Пожалуйста, войдите в аккаунт";
    }
    return name ? `Здравствуйте, ${name}` : "Здравствуйте, пользователь";
}