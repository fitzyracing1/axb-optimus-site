// Axb-Optimus site — light interactions

document.addEventListener("DOMContentLoaded", () => {
  // Smooth active nav highlight on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  const onScroll = () => {
    const y = window.scrollY + 120;
    let current = "";
    sections.forEach((sec) => {
      if (sec.offsetTop <= y) current = sec.id;
    });
    navLinks.forEach((link) => {
      link.style.color = link.getAttribute("href") === `#${current}` ? "#e8edf4" : "";
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
