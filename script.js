let slidePosition = 0;
const slides = document.getElementsByClassName('card');
const totalSlides = slides.length;

document.
    getElementById('button-next')
    .addEventListener("click", function() {
        moveToNextSlide();
    });
document.
    getElementById('button-prev')
    .addEventListener("click", function() {
        moveToPrevSlide();
    });

    function updateSlidePosition() {
        for (let slide of slides) {
            slide.classList.remove('card--visible');
            slide.classList.add('card--hidden');
        }
        slides[slidePosition].classList.add('card--visible')
    }

    function moveToNextSlide() {
        if (slidePosition === totalSlides - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        updateSlidePosition();
    }

    function moveToPrevSlide() {
        if (slidePosition === 0) {
            slidePosition = totalSlides - 1;
        } else {
            slidePosition--;
        }
        updateSlidePosition();
    };


    // ------------------------------
    let gandalf = document.getElementById("push-me");
    let audio = new Audio('./sons/Gandalf.mov');
    
    gandalf.addEventListener("click", () => {
        audio.play();
    });
   
