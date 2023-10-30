document.addEventListener("DOMContentLoaded", function () {
    const descriptionInput = document.getElementById("expense-description");
    const amountInput = document.getElementById("expense-amount");
    const addExpenseButton = document.getElementById("add-expense");
    const expensesList = document.getElementById("expenses-list");
    const totalExpenses = document.getElementById("total-expenses");

    let total = 0;

    addExpenseButton.addEventListener("click", function () {
        const description = descriptionInput.value;
        const amount = parseFloat(amountInput.value);

        if (description && !isNaN(amount)) {
            const li = document.createElement("li");
            li.innerHTML = `${description} - $${amount.toFixed(2)}`;
            expensesList.appendChild(li);

            total += amount;
            totalExpenses.textContent = total.toFixed(2);

            descriptionInput.value = "";
            amountInput.value = "";
        }
    });
});
