// memory cost
function memoryCost(btnId, cost) {
    const memory = document.getElementById(`${btnId}-cost`);
    const memoryText = parseInt(memory.innerText);
    if (cost == true) {
        memory.innerText = 0;
    } else {
        memory.innerText = 180;
    }
    totalCost()
}

// storage cost
function storageCost(btnId, cost) {
    const storage = document.getElementById(`${btnId}-cost`);
    const storageText = parseInt(storage.innerText);
    if (cost == true) {
        storage.innerText = 0;
    } else if (cost == false) {
        storage.innerText = 100;
    } else {
        storage.innerText = 180;
    }
    totalCost()
}

// delivery cost
function deliveryCost(btnId, cost) {
    const delivery = document.getElementById(`${btnId}-cost`);
    const deliveryText = parseInt(delivery.innerText);
    if (cost == true) {
        delivery.innerText = 0;
    } else if (cost == false) {
        delivery.innerText = 20;
    }
    totalCost()
}
// accessories id
function accessories(accessoriesId) {
    const accessoriesCost = document.getElementById(`${accessoriesId}-cost`);
    const allAccessories = parseInt(accessoriesCost.innerText);
    return allAccessories;
}
// total price
function totalCost() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceInt = parseInt(bestPrice.innerText);
    const memory = accessories('memory');
    const storage = accessories('storage');
    const delivery = accessories('delivery');
    const totalPrice = bestPriceInt + memory + delivery + storage;
    document.getElementById('total-price').innerText = totalPrice;
   return document.getElementById('total').innerText = totalPrice;
}
// promo Code
function promoCode() {
    const promo = document.getElementById('input-value');
    const totalDiscountPrice = document.getElementById('total');
    const totalDiscountPriceInt = parseInt(totalDiscountPrice.innerText);
    const price = totalCost();
    if (promo.value == "stevekaku") {
        totalDiscountPrice.innerText = price - (price * 0.20);
    }
    promo.value = '';
}
// promo button 
document.getElementById('button-addon2').addEventListener('click', function () {
    promoCode();
})
// memory button 8gb
document.getElementById('memory-btn-8gb').addEventListener('click', function () {
    memoryCost('memory', true)
})
// memory button 16gb
document.getElementById('memory-btn-16gb').addEventListener('click', function () {
    memoryCost('memory', false);
})
// storage button 256gb
document.getElementById('storage-btn-256gb').addEventListener('click', function () {
    storageCost('storage', true)
})
// storage button 512gb
document.getElementById('storage-btn-512gb').addEventListener('click', function () {
    storageCost('storage', false);
})
// storage button 1tb
document.getElementById('storage-btn-1tb').addEventListener('click', function () {
    storageCost('storage');
})
// delivery button 0 cost
document.getElementById('primary-delivery').addEventListener('click', function () {
    deliveryCost('delivery', true);
})
// delivery button 20 cost
document.getElementById('secondary-delivery').addEventListener('click', function () {
    deliveryCost('delivery', false);
})