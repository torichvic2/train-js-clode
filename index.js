// Реальная задача 3: сообщение о скидке
//
// В интернет-магазине нужно показать пользователю, какая скидка у него будет.
//
//     Напиши функцию getDiscountMessage(totalPrice, isMember), которая возвращает строку:
//
//     если totalPrice >= 3000 и isMember === true, вернуть "Ваша скидка 20%"
// если totalPrice >= 3000 и isMember === false, вернуть "Ваша скидка 10%"
// если totalPrice < 3000 и isMember === true, вернуть "Ваша скидка 5%"
// если totalPrice < 3000 и isMember === false, вернуть "Скидка не доступна"
// Примеры:
//
//     getDiscountMessage(3500, true);  // "Ваша скидка 20%"
// getDiscountMessage(3500, false); // "Ваша скидка 10%"
// getDiscountMessage(1000, true);  // "Ваша скидка 5%"
// getDiscountMessage(1000, false); // "Скидка не доступна"

function getDiscountMessage(totalPrice, isMember) {
    if (totalPrice >= 3000) {
        return isMember ? "Ваша скидка 20%" : "Ваша скидка 10%";
    }
    return isMember ? "Ваша скидка 5%" : "Скидка не доступна";
}