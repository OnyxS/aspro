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

