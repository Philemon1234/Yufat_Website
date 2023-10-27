let openNav = document.getElementById("open");
let closeNav = document.getElementById("close");
let nav_links = document.querySelector(".nav_links");

openNav.addEventListener("click", function () {
    nav_links.classList.add("show_nav");
})

closeNav.addEventListener("click", function () {
    nav_links.classList.remove("show_nav");
})


// Testimonial Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Scroll Animations
const hiddenElements = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

hiddenElements.forEach((el) => observer.observe(el));
