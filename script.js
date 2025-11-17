// Example small interactions
document.querySelectorAll(".disabled").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("This post is coming soon!");
  });
});

// Sticky header glow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});
