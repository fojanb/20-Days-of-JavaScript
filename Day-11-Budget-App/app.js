const data = {
  budgetForm: document.querySelector("#budget-form"),
  current_budget: document.getElementById("budget"),
  expenseForm: document.getElementById("expense-form"),
  current_expense: document.getElementById("expense"),
  expense_title: document.getElementById("expense_title"),
  
};
data.budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  data.current_budget.innerText = parseInt(data.budgetForm.querySelector("input").value);
  data.budgetForm.querySelector("input").value = "";
});
data.expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  data.current_expense.innerText = parseInt(
    data.expenseForm.querySelector("#expenseAmount").value
  );
  data.expense_title.innerText = `-${document.getElementById("title").value}`;
  document.getElementById("title").value="";
  data.expenseForm.querySelector("#expenseAmount").value="";
});
