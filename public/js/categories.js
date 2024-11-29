async function loadCategories() {
    try {
        const categories = await fetchData('categories');
        const categoryList = document.getElementById('categoryList');
        const productCategory = document.getElementById('productCategory');
        categoryList.innerHTML = '';
        productCategory.innerHTML = '<option value="">Select Category</option>';
        categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'card';
            categoryCard.innerHTML = `<h3>${category.name}</h3>`;
            categoryList.appendChild(categoryCard);

            const option = document.createElement('option');
            option.value = category.category_id;
            option.textContent = category.name;
            productCategory.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading categories:', error);
    }
}

document.getElementById('addCategoryForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const category = {
        name: document.getElementById('categoryName').value
    };
    try {
        await postData('categories', category);
        loadCategories();
        e.target.reset();
    } catch (error) {
        console.error('Error adding category:', error);
    }
});

