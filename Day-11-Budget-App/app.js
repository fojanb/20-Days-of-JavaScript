const data = {
    budgetForm : document.querySelector("#budget-form"),

}
data.budgetForm.querySelector("input").addEventListener("change",(e) => {
    console.log(e)
});
data.budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value)

})