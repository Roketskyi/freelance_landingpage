const toggleBtn = document.getElementById("menu-toggle-btn");
const headerMenu = document.getElementById("header-menu");

toggleBtn.addEventListener("click", function() {
    if (window.innerWidth < 768) {
        headerMenu.style.display = headerMenu.style.display === "none" ? "block" : "none";
    }
});