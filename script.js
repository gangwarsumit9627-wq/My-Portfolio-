// 1) Typing effect - apne roles yahan badlo
const roles = ["Web Developer", "Frontend Developer", "Python Learner", "java Learner"];
const el = document.getElementById("typed");
let r = 0, c = 0, deleting = false;

function type() {
  const word = roles[r];
  el.textContent = deleting ? word.slice(0, --c) : word.slice(0, ++c);
  let delay = deleting ? 50 : 100;
  if (!deleting && c === word.length) { delay = 1400; deleting = true; }
  else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 400; }
  setTimeout(type, delay);
}
type();

// 2) Scroll par sections aur skill bars animate hon
document.querySelectorAll(".section h2, .about, .projects, .timeline, .contact > *")
  .forEach(e => e.classList.add("reveal"));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal, .bars").forEach(e => io.observe(e));
