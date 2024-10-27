let lastScrollTop = 20;
const header = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else if (scrollTop === 0) {
    header.classList.remove("header-bg");
  } else {
    header.classList.remove("hidden");
    header.classList.add("header-bg");
  }

  lastScrollTop = scrollTop;
});
