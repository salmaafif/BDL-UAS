async function loadDiscounts() {
    try {
        const discounts = await fetchData('discounts');
        const discountList = document.getElementById('discountList');
        discountList.innerHTML = '';
        discounts.forEach(discount => {
            const discountCard = document.createElement('div');
            discountCard.className = 'card';
            discountCard.innerHTML = `
                <h3>${discount.name}</h3>
                <p>Type: ${discount.discount_type}</p>
                <p>Amount: ${discount.amount}</p>
                <p>Start Date: ${discount.start_date}</p>
                <p>End Date: ${discount.end_date}</p>
                <p>Applicable To: ${discount.applicable_to}</p>
            `;
            discountList.appendChild(discountCard);
        });
    } catch (error) {
        console.error('Error loading discounts:', error);
    }
}

document.getElementById('addDiscountForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const discount = {
        name: document.getElementById('discountName').value,
        discount_type: document.getElementById('discountType').value,
        amount: parseFloat(document.getElementById('discountAmount').value),
        start_date: document.getElementById('discountStartDate').value,
        end_date: document.getElementById('discountEndDate').value,
        applicable_to: document.getElementById('discountApplicableTo').value
    };
    try {
        await postData('discounts', discount);
        loadDiscounts();
        e.target.reset();
    } catch (error) {
        console.error('Error adding discount:', error);
    }
});

