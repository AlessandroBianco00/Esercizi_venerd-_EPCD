const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  if (scroll > 280) {
    header.classList.add("headerBianco");
  } else {
    header.classList.remove("headerBianco");
  }
});
