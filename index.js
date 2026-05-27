// Реальная задача 10: цена с налогом
//
// Напиши функцию calculatePriceWithTax(price, taxPercent), которая возвращает цену с налогом.

// Примеры:
// calculatePriceWithTax(1000);     // 1200
// calculatePriceWithTax(500, 0);   // 500

function calculatePriceWithTax(price, taxPercent = 20) {
    return price + price * taxPercent / 100;
}