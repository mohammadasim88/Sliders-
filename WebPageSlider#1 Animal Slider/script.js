// step#1 : Retrieve DOM elements
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.carousel .list');
const thumbnailBorder = document.querySelector('.carousel .thumbnail');
const timerDisplay = document.querySelector('.carousel .time');

// Move first thumbnail item to end 
thumbnailBorder.appendChild(document.querySelector('.carousel .thumbnail .item'));

// Set time interverls for lider and auto navigation
const sliderTransitionTime = 3000;
const autoNextDelay = 7000;

//click event listener for navigation buttons
nextButton.addEventListener('click', () => showNextSlider());
prevButton.addEventListener('click', () => showPreviousSlider());

let sliderTimeOut;
let autoNextTimeOut = setTimeout(() => nextButton.click(), autoNextDelay);

// Function to showNext Slider
function showNextSlider() {
    const sliderItems = slider.querySelectorAll('.carousel .list .item');
    const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item');
    const firstSliderItem = sliderItems[0];
    const firstThumbnailItem = thumbnailItems[0];

    //Move first slider item to end 
    slider.appendChild(firstSliderItem);
    thumbnailBorder.appendChild(firstThumbnailItem);
    carousel.classList.add('next');

    clearTimeout(sliderTimeOut);
    sliderTimeOut = setTimeout(() =>{
        carousel.classList.remove('next');
    },sliderTransitionTime);

    clearTimeout(autoNextTimeOut);
    autoNextTimeOut = setTimeout(() => nextButton.click(), autoNextDelay);
}

//function to show the previous slider 
function showPreviousSlider() {
    const sliderItems = slider.querySelectorAll('.carousel .list .item');
    const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item');
    const lastSliderItem = sliderItems[sliderItems.length - 1];
    const lastThumbnailItem = thumbnailItems[thumbnailItems.length - 1];
    
    // Move last slider to beginning
    slider.appendChild(lastSliderItem);
    thumbnailBorder.prepend(lastThumbnailItem);
    carousel.classList.add('prev');

    clearTimeout(sliderTimeOut);
    sliderTimeOut = setTimeout(() => {
        carousel.classList.remove('prev');
    }, sliderTransitionTime);

    clearTimeout(autoNextTimeOut);
    autoNextTimeOut = setTimeout(() => nextButton.click(), autoNextDelay);
}