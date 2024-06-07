const openModal = document.getElementById("openModal");
const modal = document.querySelector(".modal");
openModal.addEventListener("click", () => {
  modal.style.display = "block";
  document.querySelector(".closeModal").addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => e.target === modal ? modal.style.display = "none" : null);
});
