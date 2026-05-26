// Напиши функцию calculateOrderTotal(productPrice, deliveryPrice, hasPromoCode), которая возвращает итоговую сумму.
//
//     Правила:
//
// базовая сумма = цена товара + доставка;
// если hasPromoCode === true, применяется скидка 10% на товар;
// скидка применяется только к товару, не к доставке.
//     Примеры:
//
// calculateOrderTotal(1000, 300, true);  // 1200
// calculateOrderTotal(1000, 300, false); // 1300
// calculateOrderTotal(500, 100, true);   // 550

function calculateOrderTotal(productPrice, deliveryPrice, hasPromoCode) {
    const product = Number(productPrice);
    const delivery = Number(deliveryPrice);

    if (hasPromoCode) {
        const discount = product * 0.1;
        return product - discount + delivery;
    }
    return product + delivery;
}