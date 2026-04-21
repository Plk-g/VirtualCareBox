const items = document.querySelectorAll(".item");
const overlay = document.getElementById("popup");
const nameEl = document.getElementById("popup-name");
const msgEl = document.getElementById("popup-message");
const closeBtn = document.getElementById("popup-close");

let lastFocusedElement = null;

function clearActiveItems() {
  items.forEach((i) => i.classList.remove("active"));
}

function openPopupForItem(item) {
  if (!overlay || !nameEl || !msgEl || !closeBtn) return;

  lastFocusedElement = document.activeElement;

  clearActiveItems();
  item.classList.add("active");

  nameEl.textContent = item.dataset.name ?? "";
  msgEl.textContent = item.dataset.message ?? "";

  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");

  closeBtn.focus();
}

function closePopup() {
  if (!overlay) return;

  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  clearActiveItems();

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
  lastFocusedElement = null;
}

items.forEach((item) => {
  item.setAttribute("tabindex", "0");
  item.setAttribute("role", "button");

  item.addEventListener("click", () => openPopupForItem(item));
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPopupForItem(item);
    }
  });
});

closeBtn?.addEventListener("click", closePopup);

overlay?.addEventListener("click", (e) => {
  if (e.target === overlay) closePopup();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay?.classList.contains("active")) {
    e.preventDefault();
    closePopup();
  }
});
