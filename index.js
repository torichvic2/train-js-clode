// Реальная задача 6: статус заказа
//
// Напиши функцию getOrderStatusMessage(status), которая возвращает сообщение по статусу заказа:
//
//     если status равно "new", вернуть "Заказ создан"
// если status равно "paid", вернуть "Заказ оплачен"
// если status равно "shipped", вернуть "Заказ отправлен"
// если status равно "cancelled", вернуть "Заказ отменен"
// иначе вернуть "Неизвестный статус"
// Примеры:
//
//     getOrderStatusMessage("new");       // "Заказ создан"
// getOrderStatusMessage("paid");      // "Заказ оплачен"
// getOrderStatusMessage("shipped");   // "Заказ отправлен"
// getOrderStatusMessage("cancelled"); // "Заказ отменен"
// getOrderStatusMessage("test");      // "Неизвестный статус"

function getOrderStatusMessage(status) {
    switch (status) {
        case "new":
            return "Заказ создан";
        case "paid":
            return "Заказ оплачен";
        case "shipped":
            return "Заказ отправлен";
        case "cancelled":
            return "Заказ отменен";
        default:
            return "Неизвестный статус";
    }
}