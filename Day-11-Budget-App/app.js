const data = {
  budgetForm: document.querySelector("#budget-form"),
  current_budget: document.getElementById("budget"),
  expenseForm: document.getElementById("expense-form"),
  current_expense: document.getElementById("expense"),
  expense_title: document.getElementById("expense_title"),
  current_balance : document.getElementById("balance"),
  expenseValue : document.getElementById("expenseValue"),
  budget:0,
  expense:0,
  balance:0,
};
data.budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  data.budget = parseInt(data.budgetForm.querySelector("input").value);
  data.current_budget.innerText = data.budget
  data.current_balance.innerText = data.budget;
  data.budgetForm.querySelector("input").value = "";
  
});
data.expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  data.expense = parseInt(data.expenseForm.querySelector("#expenseAmount").value);
  data.current_expense.innerText = data.expense;
  data.expenseValue.innerText = `$${data.expense}`;
  data.expense_title.innerText = `-${document.getElementById("title").value}`;
  data.balance = data.budget - data.expense
  data.current_balance.innerText = data.balance;
  document.getElementById("title").value="";
  data.expenseForm.querySelector("#expenseAmount").value="";
});
