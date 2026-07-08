const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const title = document.querySelector("#project-title");
const summary = document.querySelector("#project-summary");
const stack = document.querySelector("#project-stack");
const content = document.querySelector("#project-content");
const repo = document.querySelector("#project-repo");

fetch("./index.html")
  .then((response) => response.text())
  .then((html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const card = doc.querySelector(`.project-card[data-project="${projectId}"]`);

    if (!card) {
      title.textContent = "프로젝트를 찾을 수 없습니다";
      summary.textContent = "프로젝트 목록에서 다시 선택해 주세요.";
      repo.hidden = true;
      return;
    }

    title.textContent = card.querySelector(".project-title").textContent;
    summary.textContent = card.querySelector("p").textContent;
    stack.textContent = card.querySelector("span").textContent;
    content.innerHTML = card.querySelector(".project-detail").innerHTML;
    repo.href = card.querySelector(".project-link").href;
    document.title = `${title.textContent} | Ayeong Kim`;
  });
