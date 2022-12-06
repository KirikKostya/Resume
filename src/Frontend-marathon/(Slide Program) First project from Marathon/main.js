function activeSlide(activeSlide=0){
const slides = document.querySelectorAll('.slide');
 
slides[activeSlide].classList.add('active');

for (const slide of slides) {
    slide.addEventListener('click', ()=>{
        clearActiveclasses()
    slide.classList.add('active');
})
}

function clearActiveclasses(){
    slides.forEach(slide => {
    slide.classList.remove('active')  
})
}
}

activeSlide();

