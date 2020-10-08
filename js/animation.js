document.addEventListener("DOMContentLoaded", function () {
	new WOW().init();
});

let arrayAnimation = [

	{
		elementClass: '.logo', 
		effect : 'fadeInTop', 
		duration: "1000"
	},
	{
		elementClass: '.menu', 
		effect : 'fadeInTop', 
		duration: "1000"
	},
	{
		elementClass: '.language', 
		effect : 'fadeInTop', 
		duration: "1000"
	},
	{
		elementClass: '.blockImg', 
		effect : 'fadeIn', 
		duration: "1000"
	},
	{
		elementClass: '#person_1', 
		effect : 'fadeInLeft', 
		duration: "1000"
	},
	{
		elementClass: '#person_2', 
		effect : 'fadeInRight', 
		duration: "1000"
	},
	{
		elementClass: '.project', 
		effect : 'fadeIn', 
		duration: "1000"
	},
	{
		elementClass: '#mainImage_1', 
		effect : 'fadeIn', 
		duration: "1000"
	},
	{
		elementClass: '#comm_1', 
		effect : 'fadeInLeft', 
		duration: "1000"
	},
	{
		elementClass: '#comm_2', 
		effect : 'fadeInRight', 
		duration: "1000"
	},
	{
		elementClass: '#mainImage_2', 
		effect : 'fadeIn', 
		duration: "1000"
	},
	{
		elementClass: '.map', 
		effect : 'fadeIn', 
		duration: "1000"
	},
	{
		elementClass: '.VK', 
		effect : 'popIn', 
		duration: "1000"
	},
	{
		elementClass: '.directed', 
		effect : 'popIn', 
		duration: "1000"
	}
];

arrayAnimation.forEach (item => {
	document.querySelector(item.elementClass).classList.add (
		'wow', 
		'vivify', 
		item.effect, 
		'duration-'+item.duration
	);
});







