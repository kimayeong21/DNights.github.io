document.querySelectorAll(".detail-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    const isOpen = card.classList.toggle("is-open");

    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen ? "접기" : "자세히 보기";
  });
});
