// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
      el.classList.add("active");
    }
  });
});

// Mouse Glow Effect
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e)=>{
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
