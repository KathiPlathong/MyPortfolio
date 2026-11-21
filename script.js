
// =========================
// 1. DARK MODE
// =========================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


// =========================
// 2. MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});


// ปิดเมนูเมื่อคลิกลิงก์
const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});
