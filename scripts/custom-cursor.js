document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.getElementById("custom-cursor");
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  
    // Optional: Add hover effect on clickable elements
    const clickableElements = document.querySelectorAll("a, button");
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("hovered");
      });
      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovered");
      });
    });
  });
  