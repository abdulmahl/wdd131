const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuButton.innerHTML = isOpen ? "✕" : "☰";
  bmenuButtontn.setAttribute("aria-expanded", isOpen);
});
