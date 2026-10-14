document.getElementById("year").textContent = new Date().getFullYear();

const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08 },
  );

  items.forEach((item) => observer.observe(item));
} else {
  items.forEach((item) => item.classList.add("visible"));
}
