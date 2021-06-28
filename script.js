// menu bar script
document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

// frequently asked questions script
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// changing month and year tabs script
const toggleSwitch = document.querySelector('.toggle-switch');

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.querySelector('.pricing-main').classList.add('active-toggle');
    } else {
        document.querySelector('.pricing-main').classList.remove('active-toggle');
    }
});

// slider in client satisfaction
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}