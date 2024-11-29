document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const navMenu = document.querySelector(".nav-menu");

    // 點擊漢堡按鈕，切換選單顯示/隱藏
    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});
