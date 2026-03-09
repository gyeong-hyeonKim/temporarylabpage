const siteTitle = "AJOU MEDICAL AI LABORATORY";

const navItems = [
  { label: "Home", href: "index.html" },
  { label: "Research", href: "research.html" },
  { label: "Publications", href: "publications.html" },
  { label: "Team", href: "team.html" },
  { label: "Join Us", href: "joinus.html" },
  { label: "News", href: "news.html" }
];

function getCurrentPage() {
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function createHeader() {
  const currentPage = getCurrentPage();

  const header = document.getElementById("site-header");
  if (!header) return;

  const navHtml = navItems.map(item => {
    const isActive =
      item.href === currentPage ||
      (currentPage === "index.html" && item.href === "index.html");

    return `
      <a href="${item.href}" class="${isActive ? "active" : ""}">
        ${item.label}
      </a>
    `;
  }).join("");

  header.innerHTML = `
    <div class="container nav-wrap">
      <div class="site-logo">${siteTitle}</div>
      <nav class="main-nav">
        ${navHtml}
      </nav>
    </div>
  `;
}

function createFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="container footer-wrap">
      <p>© 2026 Ajou Medical AI Laboratory. All rights reserved.</p>
      <p>Email: contact@oralcancer-ai.com</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  createHeader();
  createFooter();
});