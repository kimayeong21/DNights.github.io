const viewer = document.querySelector("#project-viewer");
const viewerTitle = document.querySelector("#viewer-title");
const viewerSummary = document.querySelector("#viewer-summary");
const viewerStack = document.querySelector("#viewer-stack");
const viewerContent = document.querySelector("#viewer-content");
const viewerLink = document.querySelector("#viewer-link");
const viewerClose = document.querySelector(".viewer-close");
const viewerBack = document.querySelector(".viewer-back");
const viewerCancel = document.querySelector(".viewer-cancel");

const closeViewer = () => {
  viewer.hidden = true;
  document.body.classList.remove("viewer-open");
};

document.querySelectorAll(".project-card").forEach((card) => {
  const trigger = card.querySelector(".project-title");

  trigger.addEventListener("click", () => {
    viewerTitle.textContent = trigger.textContent;
    viewerSummary.textContent = card.querySelector("p").textContent;
    viewerStack.textContent = card.querySelector("span").textContent;
    viewerContent.innerHTML = card.querySelector(".project-detail").innerHTML;
    viewerLink.href = card.querySelector(".project-link").href;
    viewer.hidden = false;
    document.body.classList.add("viewer-open");
    viewerClose.focus();
  });
});

viewerClose.addEventListener("click", closeViewer);
viewerBack.addEventListener("click", closeViewer);
viewerCancel.addEventListener("click", closeViewer);

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    closeViewer();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !viewer.hidden) {
    closeViewer();
  }
});
