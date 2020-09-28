//DOM cache:
let header = document.querySelector('header');
let spinner = document.querySelector('.spinner');


// set header background when the page is scrolled and the spinner text is about to overlap the header:
window.addEventListener("scroll", function name(params) {
	// // get the how much we have scrolled (using scrollTop property):
	// let scrollTop = document.documentElement.scrollTop;
	// console.log(`scrollTop: ${scrollTop}`);

	// get current spinner top position:
	let rect = spinner.getBoundingClientRect();
	let spinerTop = rect.top;

	console.log(`spinerTop: ${spinerTop}`);
	if(spinerTop <= 55){
		header.classList.add("bg-dark-transperant");
	}else{
		header.classList.remove("bg-dark-transperant");
	}
});
