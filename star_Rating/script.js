const reaction = {
	1:'<i class="fa-solid fa-face-angry"></i>',
	2:'<i class="fa-regular fa-face-meh-blank"></i>',
	3:'<i class="fa-solid fa-face-meh"></i>',
	4:'<i class="fa-solid fa-face-smile"></i>',
	5:'<i class="fa-solid fa-face-grin-wide"></i>'
}
const reactionColor = ['red','orange','lightblue','lightgreen','green'];
const reactionDisplay = document.querySelector('.rating-reaction');
const rating = document.querySelectorAll('.fa-star');

rating.forEach((star,index)=>{
	star.addEventListener('click',()=>{
	changeStar(index);
	// seting reaction
	reactionDisplay.innerHTML = reaction[index+1];
	reactionDisplay.style.color=reactionColor[index];
})
}
);

function changeStar(index)
{
	rating.forEach((star, idx) => {
		if (idx < index + 1) {
		  star.classList.remove("fa-regular");
		  star.classList.add("fa-solid");

		} else {
		  star.classList.remove("fa-solid");
		  star.classList.add("fa-regular");
		}
	  });
	 
	
}
