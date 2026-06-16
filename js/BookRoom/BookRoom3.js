document.addEventListener('DOMContentLoaded', () => {
    const unitPrice = 2500.00;
    let quantity = 1;

    const quantitySpan = document.getElementById('quantity');
    const totalSpan = document.getElementById('total');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');

    function updateTotal() {
        quantitySpan.textContent = quantity;
        totalSpan.textContent = (quantity * unitPrice).toFixed(2);
    }

    increaseBtn.addEventListener('click', () => {
        quantity++;
        updateTotal();
    });

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateTotal();
        }
    });

    checkoutBtn.addEventListener('click', () => {
        const total = quantity * unitPrice;
        window.location.href = `checkout.html?product=Yummy%20Candy&qty=${quantity}&total=${total}`;
    });
    
    updateTotal();
});
