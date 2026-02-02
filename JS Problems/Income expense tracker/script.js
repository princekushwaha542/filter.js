const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = [];

function addTransaction(e) {
  e.preventDefault();

  const textValue = text.value.trim();
  const amountValue = amount.value.trim();

  // ❌ Empty check
  if (textValue === "" || amountValue === "") {
    alert("Please enter text and amount");
    return;
  }

  // ❌ Number check (IMPORTANT)
  if (isNaN(amountValue)) {
    alert("Amount must be a number");
    return;
  }

  const transaction = {
    id: Date.now(),
    text: textValue,
    amount: +amountValue
  };

  transactions.push(transaction);
  addTransactionDOM(transaction);
  updateValues();

  text.value = "";
  amount.value = "";
}


function addTransactionDOM(transaction) {
  const item = document.createElement("li");

  item.classList.add(transaction.amount > 0 ? "plus" : "minus");

  item.innerHTML = `
    ${transaction.text}
    <span>₹${Math.abs(transaction.amount)}</span>
    <button onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((a, b) => a + b, 0);
  const income = amounts.filter(a => a > 0).reduce((a, b) => a + b, 0);
  const expense = amounts.filter(a => a < 0).reduce((a, b) => a + b, 0);

  balance.innerText = `₹${total}`;
  money_plus.innerText = `₹${income}`;
  money_minus.innerText = `₹${Math.abs(expense)}`;
}

function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  updateValues();
}

form.addEventListener("submit", addTransaction);
