const showData = (arg) => {
  document.getElementById(`_${arg}`).innerText = document.getElementById(
    `${arg}`
  ).value;
};
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  showData("budget");
  showData("expense");
  document.getElementById("_balance").innerText =
    document.getElementById("budget").value -
    document.getElementById("expense").value;
});
