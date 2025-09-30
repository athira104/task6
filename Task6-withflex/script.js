// Select elements
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".side-bar");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Toggle sidebar on small screens
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Toggle dark/light theme
themeToggle.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("dark-theme");

  // Switch icon
  const icon = themeToggle.querySelector("i");
  if (icon) {
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
  }
});
