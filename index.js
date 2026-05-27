// Реальная задача 4: проверка формы регистрации
//
// Напиши функцию getRegistrationMessage(username, password), которая проверяет данные и возвращает сообщение:
//
//     если username пустая строка "", вернуть "Введите имя пользователя"
// если password пустая строка "", вернуть "Введите пароль"
// если длина пароля меньше 8, вернуть "Пароль слишком короткий"
// иначе вернуть "Регистрация успешна"
// Примеры:
//
//     getRegistrationMessage("", "12345678");      // "Введите имя пользователя"
// getRegistrationMessage("anna", "");          // "Введите пароль"
// getRegistrationMessage("anna", "123");       // "Пароль слишком короткий"
// getRegistrationMessage("anna", "12345678");  // "Регистрация успешна"

function getRegistrationMessage(username, password) {
    if (!username) {
        return "Введите имя пользователя";
    }

    if (!password) {
        return "Введите пароль";
    }

    if (password.length < 8) {
        return "Пароль слишком короткий";
    }

    return "Регистрация успешна";
}