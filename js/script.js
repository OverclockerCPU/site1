const headerlist = document.querySelector(".header__list");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  headerlist.classList.toggle("active")
  hamburger.classList.toggle("active")
})
document.querySelectorAll(".header__link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerlist.classList.remove("active");
  }))

