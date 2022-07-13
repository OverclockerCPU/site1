var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("sticky").style.top = "0";
  } else {
    document.getElementById("sticky").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}
// ----------------------------------------------
var ID_MENU = "sticky";//ИД меню
window.onload = function(){
  	document.getElementById(ID_MENU).classList.add("bgColor1");
window.addEventListener("scroll",function(){
	var element = document.getElementById(ID_MENU);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
  if(scrollTop == 0){
  	
  	document.getElementById(ID_MENU).classList.remove("bgColor2");
  	document.getElementById(ID_MENU).classList.add("bgColor1");
  }
  else{
  	document.getElementById(ID_MENU).classList.remove("bgColor1");
  	document.getElementById(ID_MENU).classList.add("bgColor2");
    }
});
}
// ---------------------------------------------------------------
const headerlist = document.querySelector(".header__list");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  headerlist.classList.toggle("active");
  hamburger.classList.toggle("active");
});
document.querySelectorAll(".header__link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerlist.classList.remove("active");
  })
);
