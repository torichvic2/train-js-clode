// Реальная задача 11: функция использует другую функцию
// Теперь напиши функцию calculateFinalOrderPrice(productPrice, deliveryPrice, taxPercent), которая:
//
// считает цену товара с налогом через calculatePriceWithTax;
// добавляет доставку;
// если taxPercent не передали, должен использоваться стандартный налог 20.
// Примеры:
// calculateFinalOrderPrice(1000, 300);     // 1500
// calculateFinalOrderPrice(500, 100, 0);   // 600


function calculatePriceWithTax(price, taxPercent = 20) {
    return price + price * taxPercent / 100;
}

function calculateFinalOrderPrice(productPrice, deliveryPrice, taxPercent) {
    return calculatePriceWithTax(productPrice, taxPercent) + deliveryPrice;
}
