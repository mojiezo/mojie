// 等待 DOM 完全加載
document.addEventListener("DOMContentLoaded", function() {
  // 文字淡入效果
  const textElement = document.querySelector('.a p');
  setTimeout(function() {
    textElement.classList.add('show');
  }, 2000);

  // 漢堡菜單顯示/隱藏
  const menuButton = document.querySelector(".menu");
  const navMenu = document.querySelector(".nav-menu");

  menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });
});
