// Реальная задача 9: расчет бонусных баллов
//
// Напиши функцию calculateBonusPoints(orderTotal, isVip), которая возвращает количество бонусных баллов.
//
//     Правила:
//
// обычный пользователь получает 1 балл за каждые 100 рублей заказа;
// VIP-пользователь получает 2 балла за каждые 100 рублей заказа;
// если сумма заказа меньше 100, вернуть 0.
// Примеры:
//
//     calculateBonusPoints(500, false); // 5
// calculateBonusPoints(500, true);  // 10
// calculateBonusPoints(90, true);   // 0
// calculateBonusPoints(120, false); // 1.2
// Можно возвращать дробное число, округлять не нужно.

function calculateBonusPoints(orderTotal, isVip) {
    if (orderTotal < 100) {
        return 0;
    }

    return isVip ? orderTotal / 100 * 2 : orderTotal / 100;
}