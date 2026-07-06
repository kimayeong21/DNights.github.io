document.querySelectorAll(".detail-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    const isOpen = card.classList.toggle("is-open");

    button.setAttribute("aria-expanded", String(isOpen));
  });
});
