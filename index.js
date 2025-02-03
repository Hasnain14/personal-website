window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    // Adjust the scroll threshold as needed
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function toggleMenu() {
  document.querySelector(".topBar ul").classList.toggle("active");
}

document.querySelectorAll(".topBar ul li ").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".topBar ul").classList.remove("active");
  });
});
