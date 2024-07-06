document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("transactionForm");
  const transactionsList = document.getElementById("transactions");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const type = document.getElementById("type").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount)) {
      alert("Пожалуйста, введите корректное число для суммы.");
      return;
    }

    const transaction = {
      type: type,
      amount: amount,
    };

    saveTransaction(transaction);
    displayTransactions();
    form.reset();
  });

  function saveTransaction(transaction) {
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  function displayTransactions() {
    transactionsList.innerHTML = "";

    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    transactions.forEach(function (transaction, index) {
      const transactionElement = document.createElement("div");
      transactionElement.classList.add("transaction");
      transactionElement.innerHTML = `<strong>${
        transaction.type === "income" ? "Доход" : "Расход"
      }</strong>: ${transaction.amount} злотых`;
      transactionsList.appendChild(transactionElement);
    });
  }

  displayTransactions();
});
