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



document.addEventListener('DOMContentLoaded', function () {
    const headerMenu = document.getElementById('headerMenu');
    const showMenuIcon = document.getElementById('showMenu');
    const hideMenuIcon = document.getElementById('hideMenu');

    showMenuIcon.addEventListener('click', () => {
        headerMenu.style.right = '0'; 
        showMenuIcon.style.display = 'none'; 
        hideMenuIcon.style.display = 'block';
    });

    hideMenuIcon.addEventListener('click', () => {
        headerMenu.style.right = '-300px'; 
        showMenuIcon.style.display = 'block'; 
        hideMenuIcon.style.display = 'none';
    });
});

let teamIndex = 0;
const totalTeamMembers = 5;
const teamMembersPerPage = 4; 

function showTeamMembers() {
    const teamMember = document.querySelectorAll(".team-member");
    const teamInfo = document.querySelector(".team-info");

    if (window.innerWidth <= 767) {
        teamMember.forEach((div, index) => {
            div.style.display = index === teamIndex ? "block" : "none";
        });
    } else {
        teamMember.forEach((div, index) => {
            div.style.display = "none";
            if (index >= teamIndex && index < teamIndex + teamMembersPerPage) {
                div.style.display = "block";
            }
        });
    }

    teamInfo.style.transform = `translateX(-${teamIndex}%)`;
}


showTeamMembers();

document.getElementById("teamNext").addEventListener("click", () => {
    if (teamIndex + 1 < totalTeamMembers) {
        teamIndex++;
    } else {
        // If we're at the last team member, loop back to the first one
        teamIndex = 0;
    }
    showTeamMembers();
});

document.getElementById("teamPrev").addEventListener("click", () => {
    if (teamIndex > 0) {
        teamIndex--;
    } else {
        teamIndex = totalTeamMembers - 1;
    }
    showTeamMembers();
});

const serviceContents = document.querySelectorAll('.service-content');
const wholeWrapper = document.querySelector('.whole-wrapper');
const fElements = document.querySelectorAll('.f');

const contentData = [
    {
        id: 'webdev',
        title: 'Web Development',
        imageSrc: './images/web-development.png',
        description: 'Our web development team creates custom websites that are tailored to meet the unique needs of each client. We use the latest technologies and follow industry best practices to ensure that our websites are fast, secure, and user-friendly.',
    },
    {
        id: 'mobile',
        title: 'Mobile App Development',
        imageSrc: './images/mobile-app.png',
        description: 'Our app development team creates custom mobile apps for iOS and Android devices. We use the latest technologies and follow industry best practices to ensure that our apps are fast, secure, and user-friendly.',
    },
    {
        id: 'uiux',
        title: 'UI/UX Design',
        imageSrc: './images/UI-UX.png',
        description: 'Our UI/UX designing team creates user-friendly interfaces that make it easy for customers to navigate websites and apps. We follow industry best practices and conduct extensive user testing to ensure that our designs are both intuitive and effective.',
    },
    {
        id: 'graphic',
        title: 'Graphic Designing',
        imageSrc: './images/graphic-designing.png',
        description: 'Our graphics designing team creates visually appealing graphics that help businesses stand out from the competition. From logos to marketing materials, we design graphics that are both eye-catching and effective',
    },
    {
        id: 'webdes',
        title: 'Web Designing',
        imageSrc: './images/web-designing.png',
        description: 'Our web designing team creates visually stunning websites that are both functional and aesthetically pleasing. We work closely with our clients to understand their brand and design websites that reflect their unique personality.',
    },
    {
        id: 'rec',
        title: 'Recruitment',
        imageSrc: './images/Recruitment.png',
        description: 'Our recruitment team helps businesses find the right talent to meet their digital needs. We have an extensive network of professionals in the tech industry and use our expertise to match businesses with the right candidates',
    } 
];


const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
const laptopMediaQuery = window.matchMedia("(min-width:768px) and (max-width:992px)");


serviceContents.forEach((serviceContent, index) => {
    serviceContent.addEventListener('click', () => {
       
        const content3 = document.querySelector('.content-3');
        const allServices = document.querySelectorAll('.service-content');


        content3.style.display = 'none';
        allServices.forEach((service) => {
            service.style.display = 'none';
        });

      
        wholeWrapper.classList.remove('hidden');
       
        if (laptopMediaQuery.matches || mobileMediaQuery.matches) {
            // Apply flex-direction: column for both laptop and mobile views
            wholeWrapper.style.flexaDirection = 'column';
        }

        fElements.forEach((fElement, index) => {
            fElement.addEventListener('click', () => {
                
                fElements.forEach((fElement) => {
                    fElement.classList.remove('active');
                });

      
        fElements[index].classList.add('active');


        const clickedElementId = contentData[index].id;

  
        const clickedContent = contentData.find((data) => data.id === clickedElementId);


        const middleContent = document.querySelector('.middle');
        middleContent.innerHTML = `
            <div>
                <img class="mid-img" src="${clickedContent.imageSrc}" alt="${clickedContent.title}">
            </div>
            <div class="content-middle">
                <h2>${clickedContent.title}</h2>
                <br>
                <p>${clickedContent.description}</p>
            </div>
            <div class="read">    
                <p>Read More</p>
            </div>
        `;
    });
});
})})


