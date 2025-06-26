function clearErrorMessages() {
  ["billErrorMessage", "personErrorMessage"].forEach((id) =>
    document.getElementById(id).classList.add("hidden")
  );
}
export { clearErrorMessages };