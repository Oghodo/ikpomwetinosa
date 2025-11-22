document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("primaryNav");

  // Hamburger toggle
  menuToggle.addEventListener("click", () => {
    const expanded = nav.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", expanded);
  });

  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if(target){
        target.scrollIntoView({ behavior: "smooth" });
        nav.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", false);
      }
    });
  });
});
