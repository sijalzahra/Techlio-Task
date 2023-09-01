document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const logo = header.querySelector('.logo');

    if (window.scrollY > 0){
        header.classList.add('scrolled');
        logo.src = 'images/techlio-logo-color-change.png';
    } else {
        header.classList.remove('scrolled');
        logo.src = "images/logo.png";
    }
});

const images = [
    'images/thumbnails-4.jpg',
    'images/thumbnails-2.jpg',
    'images/thumbnails-3.jpg',
    'images/defaultvaluethumbnails-5.jpg',
    'images/thumbnails-1.jpg'
];


const slider = document.querySelector('.slider');
const prevButtons = document.querySelectorAll('.prev-button'); 
const nextButtons = document.querySelectorAll('.next-button');

let currentIndex = 0;

prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });
});

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// let headerMenu = document.getElementById("headerMenu")

// function showMenu(){
//     headerMenu.style.right = "0";
// }

// function hideMenu(){
//     headerMenu.style.right = "-200px";
// }

document.addEventListener('DOMContentLoaded', function () {
    const headerMenu = document.getElementById('headerMenu');
    const showMenuIcon = document.getElementById('showMenu');
    const hideMenuIcon = document.getElementById('hideMenu');

    showMenuIcon.addEventListener('click', () => {
        headerMenu.style.right = '0'; // Slide in from the right
        showMenuIcon.style.display = 'none'; // Hide the menu bar icon
        hideMenuIcon.style.display = 'block'; // Show the close icon
    });

    hideMenuIcon.addEventListener('click', () => {
        headerMenu.style.right = '-300px'; // Slide out to the right
        showMenuIcon.style.display = 'block'; // Show the menu bar icon
        hideMenuIcon.style.display = 'none'; // Hide the close icon
    });
});




