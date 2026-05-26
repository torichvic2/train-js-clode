// Реальная задача 2: бесплатная доставка
//
// Напиши функцию getDeliveryMessage(orderTotal, freeDeliveryFrom), которая возвращает сообщение:
//
//     если orderTotal >= freeDeliveryFrom, вернуть "Доставка бесплатная";
// иначе вернуть "До бесплатной доставки не хватает X", где X — разница между freeDeliveryFrom и orderTotal.
//     Примеры:
//
// getDeliveryMessage(2000, 2000); // "Доставка бесплатная"
// getDeliveryMessage(1500, 2000); // "До бесплатной доставки не хватает 500"
// getDeliveryMessage(700, 1000);  // "До бесплатной доставки не хватает 300"

function getDeliveryMessage(orderTotal, freeDeliveryFrom) {
    if (orderTotal >= freeDeliveryFrom) {
        return 'Доставка бесплатная';
    }
    const missingAmount = freeDeliveryFrom - orderTotal;
    return `До бесплатной доставки не хватает ${missingAmount}`;
}