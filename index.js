// Реальная задача 7: способ оплаты
//
// Напиши функцию getPaymentFee(paymentMethod, amount), которая возвращает комиссию за оплату.
//
//     Правила:
//
// если paymentMethod равно "card", комиссия 2% от amount
// если paymentMethod равно "paypal", комиссия 3% от amount
// если paymentMethod равно "bank", комиссия 0
// для любого другого способа оплаты вернуть null
// Примеры:
//
//     getPaymentFee("card", 1000);   // 20
// getPaymentFee("paypal", 1000); // 30
// getPaymentFee("bank", 1000);   // 0
// getPaymentFee("cash", 1000);   // null

function getPaymentFee(paymentMethod, amount) {
    if (paymentMethod === "card") {
        return amount * 0.02;
    }
    if (paymentMethod === "paypal") {
        return amount * 0.03;
    }
    if (paymentMethod === "bank") {
        return 0;
    }
    return null;
}