async function loadProducts() {
    try {
        const products = await fetchData('products');
        const productList = document.getElementById('productList');
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'card';
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: Rp.${product.price}</p>
                <p>Stock: ${product.stock}</p>
            `;
            productList.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

document.getElementById('addProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const product = {
        name: document.getElementById('productName').value,
        description: document.getElementById('productDescription').value,
        price: parseFloat(document.getElementById('productPrice').value),
        stock: parseInt(document.getElementById('productStock').value),
        category_id: parseInt(document.getElementById('productCategory').value)
    };
    try {
        await postData('products', product);
        loadProducts();
        e.target.reset();
    } catch (error) {
        console.error('Error adding product:', error);
    }
});

