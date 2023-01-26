const data = {
    budgetForm : document.querySelector("#budget-form"),
    current_budget: document.getElementById("budget"),
    budget : 0,
}
data.budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    data.budget = parseInt(data.budgetForm.querySelector("input").value);
    data.current_budget.innerText = data.budget;
})