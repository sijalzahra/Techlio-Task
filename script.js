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
