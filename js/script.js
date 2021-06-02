const headerSlider=new Swiper('.header__slider',{
	
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
		slidesPerView: 'auto',
		
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
});

const commentSlider=new Swiper('.comment__slider',{
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		
	 },
});

var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".x-icon")
var menuIcon = document.querySelector(".menu-icon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
    body.style.overflow="auto";
	 
  } else {
    menu.classList.add("show-menu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
    body.style.overflow="hidden";
  }
}

if (window.matchMedia("(min-width:1200px)").matches) {
 
} 
else{
  var menuLinks = document.querySelectorAll(".menu-link");
  menuLinks.forEach(
    function (menuLink) {
      menuLink.addEventListener("click", toggleMenu)
    }
  )
}

document.addEventListener('mouseover', function (e) {
	if (e.target.classList.contains('sub_menu-link')) {
		 let rightAttribute = e.target.getAttribute('right');

		 let rightBlockChildren = document.querySelector('.sub_menu .right-block').children;

		 [].slice.call(rightBlockChildren).forEach(item => (item.classList.contains(rightAttribute)) ? item.setAttribute('style', 'display: flex;'): item.setAttribute('style', 'display: none;'));
	}
});