const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".close-modal");
const openbtn = document.querySelector(".show-modal");

const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

openbtn.forEach((btn)=>{
	btn.addEventListener("click",openModal)
		
})

closebtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

$(".close-modal, .overlay").click(function(e) {
	e.preventDefault();
	$(".modal, .overlay").fadeOut(500, function() {
	  $(".overlay").remove();
	});
  });