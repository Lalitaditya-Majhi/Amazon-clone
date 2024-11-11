const imgList = document.querySelector('.img-list');  
const imgItems = document.querySelectorAll('.img-item'); 
const btnLeft = document.getElementById('slide-btn-left'); 
const btnRight = document.getElementById('slide-btn-right'); 

let currentIndex = 0; 


function updateSliderPosition() {
    const offset = -currentIndex * 100; 
    imgList.style.transform = `translateX(${offset}%)`; 
}


btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgItems.length;
    updateSliderPosition();
   });
   
   
   btnLeft.addEventListener('click', () => {
       currentIndex = (currentIndex - 1 + imgItems.length) % imgItems.length; 
       updateSliderPosition();
   });
