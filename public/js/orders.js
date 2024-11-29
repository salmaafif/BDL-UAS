let orderItems = [];

async function loadOrderProducts() {
    try {
        const products = await fetchData('products');
        const orderProduct = document.getElementById('orderProduct');
        orderProduct.innerHTML = '<option value="">Select Product</option>';
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.product_id;
            option.textContent = `${product.name} - Rp. ${product.price}`;
            orderProduct.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading products for order:', error);
    }
}

function updateOrderItemsDisplay() {
    const orderItemsContainer = document.getElementById('orderItems');
    orderItemsContainer.innerHTML = '';
    orderItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.name} - Quantity: ${item.quantity} - Price: Rp. ${item.price * item.quantity}</p>
            <button onclick="removeOrderItem(${index})">Remove</button>
        `;
        orderItemsContainer.appendChild(itemElement);
    });
}

function removeOrderItem(index) {
    orderItems.splice(index, 1);
    updateOrderItemsDisplay();
}

document.getElementById('addOrderItemForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const productId = document.getElementById('orderProduct').value;
    const quantity = parseInt(document.getElementById('orderQuantity').value);
    
    try {
        const product = await fetchData(`products/${productId}`);
        orderItems.push({
            product_id: product.product_id,
            name: product.name,
            quantity: quantity,
            price: product.price
        });
        updateOrderItemsDisplay();
        e.target.reset();
    } catch (error) {
        console.error('Error adding order item:', error);
    }
});

document.getElementById('placeOrderBtn').addEventListener('click', async () => {
    if (orderItems.length === 0) {
        alert('Please add items to your order before placing it.');
        return;
    }

    try {
        const orderData = {
            items: orderItems.map(item => ({
                product_id: item.product_id,
                quantity: item.quantity,
                price: item.price
            }))
        };
        await postData('order-items', orderData);
        alert('Order placed successfully!');
        orderItems = [];
        updateOrderItemsDisplay();
    } catch (error) {
        console.error('Error placing order:', error);
        alert('Error placing order. Please try again.');
    }
});

