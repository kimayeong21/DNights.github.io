const viewer = document.querySelector("#project-viewer");
const viewerTitle = document.querySelector("#viewer-title");
const viewerSummary = document.querySelector("#viewer-summary");
const viewerStack = document.querySelector("#viewer-stack");
const viewerContent = document.querySelector("#viewer-content");
const viewerLink = document.querySelector("#viewer-link");
const viewerClose = document.querySelector(".viewer-close");

document.querySelectorAll(".project-card").forEach((card) => {
  const trigger = card.querySelector(".project-title");

  trigger.addEventListener("click", () => {
    viewerTitle.textContent = trigger.textContent;
    viewerSummary.textContent = card.querySelector("p").textContent;
    viewerStack.textContent = card.querySelector("span").textContent;
    viewerContent.innerHTML = card.querySelector(".project-detail").innerHTML;
    viewerLink.href = card.querySelector(".project-link").href;
    viewer.hidden = false;
    viewer.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

viewerClose.addEventListener("click", () => {
  viewer.hidden = true;
});
