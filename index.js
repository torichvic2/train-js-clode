// Контрольная задача перед массивами
//
// Напиши функцию getCheckoutMessage(productPrice, deliveryPrice, isPaid, taxPercent), которая возвращает сообщение для оформления заказа.
//
//     Правила:
//
// если isPaid === false, вернуть "Заказ ожидает оплаты"
// если заказ оплачен:
//     посчитать итоговую сумму: товар с налогом + доставка;
// если taxPercent не передали, использовать налог 20;
// вернуть строку "Заказ оплачен. Итого: X"
// Примеры:
//
//     getCheckoutMessage(1000, 300, false, 10); // "Заказ ожидает оплаты"
// getCheckoutMessage(1000, 300, true, 10);  // "Заказ оплачен. Итого: 1400"
// getCheckoutMessage(1000, 300, true);      // "Заказ оплачен. Итого: 1500"

function getCheckoutMessage(productPrice, deliveryPrice, isPaid, taxPercent = 20) {
    if (!isPaid) {
        return "Заказ ожидает оплаты";
    }

    const orderTotalPrice = productPrice + deliveryPrice + calculateTaxAmount(productPrice, taxPercent);
    return `Заказ оплачен. Итого: ${orderTotalPrice}`;
}

function calculateTaxAmount(productPrice, taxPercent) {
    return productPrice * taxPercent / 100;
}