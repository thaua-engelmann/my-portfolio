//Turn on / off music           * noCopyrightMusic *
const checkMusic = document.querySelector('#music');
const bgMusic = new Audio('../music/bgMusic.mp3');

checkMusic.addEventListener('change', playMusic);

function playMusic() {
    if (checkMusic.checked === true) {
        bgMusic.play();
        bgMusic.loop = true;
    } else {
        bgMusic.pause();
    }
};

//Open navbar
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navegation');

menuBtn.addEventListener('click', toggleNav);

function toggleNav() {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('open');
}

// project modal
const Projects = [
    daviPalets = {
        name: 'Davi Palets',
        techs: '<li>HTML</li><li>CSS</li><li>JAVASCRIPT</li><li>SASS</li><li>FIREBASE</li><li>RESPONSIVE</li><li>DESIGN</li>',
        description: "<p>A single Landing Page to my father's company.</p><p>For this project, I started making it as simple as possible, just using HTML, SASS & JAVASCRIPT, but along the way I saw the necessity of using a database. Here's when I found Firebase.</p>"
    },
    narutoQuiz = {
        name: 'Naruto Quiz',
        techs: '<li>HTML</li><li>CSS</li><li>SASS</li><li>JAVASCRIPT</li><li>RESPONSIVE</li>',
        description: "<p>Naruto Quiz is a javascript based game with timer about Naruto anime & manga.</p><p>I am a big fan of animes and I thought this would be really cool to make and also would fit very well as a project on my portfolio.</p><p>It's simple, but the questions are hard. Give it a try!</p>"
    },
    portfolio = {
        name: 'Portfolio',
        techs: '<li>HTML</li><li>CSS</li><li>JAVASCRIPT</li><li>SASS</li><li>FIREBASE</li><li>RESPONSIVE</li><li>DESIGN</li>',
        description: "<p>The idea behind this project was creating a place where I could show all my greatest projects that I've worked for the past months.</p><p>The design was based on other portfolios like caferati.me and realmartinzane, which gave me a lot of inspiration to make it my own.</p>"
    },
    weatherApp = {
        name: 'Weather App',
        techs: '<li>HTML</li><li>CSS</li><li>SASS</li><li>JAVASCRIPT</li><li>RESPONSIVE</li>',
        description: '<p>A Weather App using <a href="https://openweathermap.org/" target="blank">openWeatherMap</a> API.</p><p>This app uses this API to retrieve weather data and displays the current weather of the desired location. It was all made using Vanilla Javascript.</p><p>To use it, you can just search for the city you want, or just click on <em>get location button </em> to get your local weather. It\'s easy and fast!</p>'
    }
]

const modal = document.querySelector('.modal-project');
const modalImage = document.querySelector('.modal-project img');
const openModalBtn = document.querySelectorAll('.view-project');
const closeModalBtn = document.querySelector('.close-modal');

const projectName = document.querySelector('.project-title h1');
const projectAbout = document.querySelector('.project-about-description');
const techList = document.querySelector('.project-techs');
const demoProject = document.querySelector('a.demo-project');
const codeProject = document.querySelector('a.code-project');

openModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('show');

        const modalImageSrc = button.getAttribute('data-image');
        modalImage.src = `../images/${modalImageSrc}`;

        if (modalImageSrc === 'narutoQuiiz_logo.png') {
            projectName.innerHTML = narutoQuiz.name;
            techList.innerHTML = narutoQuiz.techs;
            projectAbout.innerHTML = narutoQuiz.description;
            demoProject.href = "https://narutoquiiz.netlify.app/";
            codeProject.href = "https://github.com/thaua-engelmann/naruto-quiiz";
        }

        if (modalImageSrc === 'daviPalets_logo.png') {
            projectName.innerHTML = daviPalets.name;
            techList.innerHTML = daviPalets.techs;
            projectAbout.innerHTML = daviPalets.description;
            demoProject.href = "https://davipalets.com.br/";
            codeProject.href = "https://github.com/thaua-engelmann/davi-palets";
        }

        if (modalImageSrc === 'thauaEngelmann_logo.png') {
            projectName.innerHTML = portfolio.name;
            projectAbout.innerHTML = portfolio.description;
            techList.innerHTML = daviPalets.techs;
            demoProject.href = "https://thauaengelmann.netlify.app/";
            codeProject.href = "https://github.com/thaua-engelmann/my-portfolio";
        }

        if (modalImageSrc === 'weatherApp_logo.png') {
            projectName.innerHTML = weatherApp.name;
            techList.innerHTML = weatherApp.techs;
            projectAbout.innerHTML = weatherApp.description;
            demoProject.href = "https://weather-app-thauaengelmann.netlify.app/";
            codeProject.href = "https://github.com/thaua-engelmann/weather-app";
        }
    });
})

closeModalBtn.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.remove('show');
}