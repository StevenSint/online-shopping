let totalQty_In_Cart =document.getElementById("totalQty-In-Cart");
let totalCount =0;

const items = document.querySelectorAll('.item');

items.forEach(item => {
    const itemId = item.getAttribute('data-item-id');
    const itemName = item.getAttribute('data-item-name');
    const addButton = document.getElementById(`addItem-${itemId}`);
    const removeButton = document.getElementById(`removeItem-${itemId}`);
    const qtyDisplay = document.getElementById(`item-${itemId}Qty`);
    let count = 0;

    addButton.onclick = function() {
        count++;
        totalCount++;
        qtyDisplay.textContent = count;
        totalQty_In_Cart.textContent = totalCount;
    }

    removeButton.onclick = function() {
        if (count > 0) {
            count--;
            totalCount--;
        }
        qtyDisplay.textContent = count;
        totalQty_In_Cart.textContent = totalCount;
    }
});


