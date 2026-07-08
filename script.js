const reader = document.querySelector("#project-reader");
const readerTitle = document.querySelector("#reader-title");
const readerBody = document.querySelector("#reader-body");
const readerLink = document.querySelector("#reader-link");
const readerClose = document.querySelector(".reader-close");
const projectButtons = document.querySelectorAll(".detail-toggle");

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    const detail = card.querySelector(".project-detail");
    const link = card.querySelector(".project-link");
    const wasOpen = card.classList.contains("is-open");

    document.querySelectorAll(".project-card.is-open").forEach((openCard) => {
      openCard.classList.remove("is-open");
      openCard.querySelector(".detail-toggle").setAttribute("aria-expanded", "false");
    });

    if (wasOpen) {
      reader.hidden = true;
      return;
    }

    card.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    readerTitle.textContent = button.textContent;
    readerBody.innerHTML = detail.innerHTML;
    readerLink.href = link.href;
    reader.hidden = false;

    reader.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

readerClose.addEventListener("click", () => {
  reader.hidden = true;
  document.querySelectorAll(".project-card.is-open").forEach((openCard) => {
    openCard.classList.remove("is-open");
    openCard.querySelector(".detail-toggle").setAttribute("aria-expanded", "false");
  });
});
