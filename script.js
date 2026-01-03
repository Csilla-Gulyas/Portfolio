// const octopus = document.getElementById('octopus');
// const blushes = document.querySelectorAll('#blush-left, #blush-right');

// octopus.addEventListener('mouseenter', () => {
//     blushes.forEach(b => {
//         b.style.animation = 'blush-hover 0.6s ease forwards';
//     });
// });

// SVG markup betöltése és inline beszúrása, hogy CSS-sel animálható legyen
document.querySelectorAll("[data-svg]").forEach(async element => {
    const svgUrl    = element.dataset.svg;
    const response  = await fetch(svgUrl);
    const svgMarkup = await response.text();

    element.innerHTML = svgMarkup;
});


//load project cards dynamically
let projectGroups = [
    {
        title: "PROJEKTMUNKÁIM",
        projectCards: [
            {
                title: "Pigeon Food",
                projectTextContainerLeft: {
                    texts: [
                        "A regisztrációs és bejelentkező űrlapoknál megvalósítottam a segítő szövegek „felugrását” a mezők fölé, így a beírt szöveg sosem takaródik el.",
                        "Ennek az elkészítése okozta a legnagyobb örömöt és kihívást, mert sok apró galibát okozott, de amikor végre működni kezdett, percekig csak nézegettem.",
                        "Kattints ide a kód megtekintéséhez!<br>A ReadMe-ben lévő linken keresztül megtekintheted az oldal megjelenését!"
                    ]
                },
                projectImageContainer: {
                    imageLeft: {
                        src: "pigeon_food.png",
                        alt: "Pigeon Food étterem weblapjának menüjéről készült kép"
                    },
                    imageRight: {
                        src: "pigeon_food_2.png",
                        alt: "Pigeon Food étterem weblapjának bejelentkezése oldalának CSS-éről készült kép."
                    }
                },
                projectTextContainerRight: {
                    description: "A Pigeon Food egy statikus frontend weboldal, amely egy ételrendelő felületet mutat be. <br> Az oldal tartalmaz főoldalt, menüt, regisztrációs és bejelentkezési oldalt, valamint kapcsolatfelvételi lapot.",
                    technologies: [
                        "HTML5, CSS3, JavaScript (Vanilla)",
                        "Bootstrap 5 (néhány elemhez)"
                    ]
                }
            },

            {
                title: "Webshop adatbázis",
                projectTextContainerLeft: {
                    texts: [
                        "A projektben az adatbázis megtervezése volt messze a kedvenc részem.",
                        "Nagyon élveztem, ahogy a sok különálló ötlet végül egy logikus, jól működő rendszerként állt össze és jól lefedte mind azt, amit megszerettem volna valósítani.",
                        "Kattints ide a kód megtekintéséhez!"
                    ]
                },
                projectImageContainer: {
                    imageLeft: {
                        src: "webshop_database.png",
                        alt: "A webshop adatbázis lekérdezéseiről készített képernyőkép."
                    },
                    imageRight: {
                        src: "webshop_database_2.png",
                        alt: "A webshop adatbázis EK diagramja."
                    }
                },
                projectTextContainerRight: {
                    description: "Ez a projekt egy online webáruház relációs adatbázisát valósítja meg.<br>A rendszer célja, hogy kezelje a felhasználókat, termékeket, rendeléseket, fizetéseket, szállítást és beszállítókat, ezzel támogatva a webáruház működését a termékek böngészésétől a megrendelés teljesítéséig.",
                    technologies: [
                        "MySQL"
                    ]
                }
            },

            {
                title: "Aknakereső",
                projectTextContainerLeft: {
                    texts: [
                        "A játékban alapvetően a számok azt mutatják, hány bomba van körülöttük, és ez a kódrészlet automatikusan frissíti ezeket az értékeket minden bombához.",
                        "Erre a részre vagyok a legbüszkébb, mert bár elsőre bonyolultnak tűnt logikailag összerakni, meglepően gyorsan sikerült megvalósítanom.",
                        "Kattints ide a kód megtekintéséhez!<br>A ReadMe-ben lévő linken keresztül kipróbálhatod a játékot is!"
                    ]
                },
                projectImageContainer: {
                    imageLeft: {
                        src: "minesweeper.png",
                        alt: "Az aknakereső kezdő képernyője látható a képen (kezdő pálya)."
                    },
                    imageRight: {
                        src: "minesweeper_2.png",
                        alt: "A pálya generáláshoz írt elágazásom kódja szerepel a képernyőképen."
                    }
                },
                projectTextContainerRight: {
                    description: "Egy hagyományos Aknakereső játékot valósítottam meg új, modern dizájnnal.<br>A játék több nehézségi szinttel, beépített használati útmutatóval, időmérővel és zenelejátszóval rendelkezik.",
                    technologies: [
                        "HTML5, CSS3, JavaScript (Vanilla)"
                    ]
                }
            }
        ],
    },
    {
        title: "LEGFRISSEBB PROJEKTMUNKÁIM",
        projectCards: [
            {
                title: "Barbie webshop",
                projectTextContainerLeft: {
                    texts: [
                        "A diagram a backend teljes logikáját mutatja: az entitásokat, a hozzájuk tartozó service metódusokat és a kapcsolatokat.",
                        "Több verziót készítettem, mert nehéz volt egyszerre átlátni minden funkciót és, hogy mikor hívják egymást a servicek.<br>Amikor végre összeállt az egész a fejemben az nagyon megnyugtató érzés volt.",
                        "Kattints ide a kód megtekintéséhez!"
                    ]
                },
                projectImageContainer: {
                    imageLeft: {
                        src: "barbie_webshop.png",
                        alt: "A Barbie webshop backendjének kód részlete és mappaszerkezete látható képernyőképként."
                    },
                    imageRight: {
                        src: "barbie_webshop_2.png",
                        alt: "A Barbie webshop szerkezete látható diagram formájában."
                    }
                },
                projectTextContainerRight: {
                    description: "A projekt célja egy webáruház fejlesztése, amely Barbie babákat és kiegészítőiket kínálja.<br>A platform lehetővé teszi a termékek böngészését, a kedvencek és a kosár kezelését, valamint a megrendelések leadását.<br>Jelenleg a projekt folyamatban van, a frontendet a társam készíti, én a backendet fejlesztem.",
                    technologies: [
                        "ASP.NET Core (C#), EF Core (PostgreSQL)",
                        "HTML5, CSS3, JavaScript (Vanilla)",
                        "Xunit"
                    ]
                }
            },
            {
                title: "Kisállat örökbefogadó oldal",
                projectTextContainerLeft: {
                    texts: [
                        "A képen az adatbázis struktúra szerepel.",
                        "A büszkeségem részt még nem tudom kitölteni, amint kész lesz egy kiemelt funkció, frissítem a tartalmat.",
                        "Kattints ide a kód megtekintéséhez!"
                    ]
                },
                projectImageContainer: {
                    imageLeft: {
                        src: "pet_adoption_website.png",
                        alt: "A webshop adatbázis lekérdezéseiről készített képernyőkép."
                    },
                    imageRight: {
                        src: "pet_adoption_website_2.png",
                        alt: "A webshop adatbázis EK diagramja."
                    }
                },
                projectTextContainerRight: {
                    description: "Ez a projekt egy kisállatok örökbefogadását támogató weboldal.<br>A publikus oldal minden látogató számára elérhető, a felhasználói interakciók pedig regisztrációhoz kötöttek.<br>A projekt jelenleg egy 3 fős csapatmunkában készül, én felelek az adatbázisért, az állatok oldalának frontend és backend részeiért, valamint az örökbefogadó űrlap kezeléséért.",
                    technologies: [
                        "MySQL, PHP",
                        "HTML5, CSS3, JavaScript (Vanilla)"
                    ]
                }
            }
        ],
    }
]

function generateCard(cardData, template) {
    const card = template.cloneNode(true);
    card.removeAttribute("id");

    const projectTextContainerLeft = card.querySelector(".project-text-container-left");
    cardData.projectTextContainerLeft.texts.forEach(text =>{
        const p = document.createElement("p");
        p.innerHTML = text;
        p.classList.add("project-text");
        projectTextContainerLeft.appendChild(p);
        const br = document.createElement("br");
        projectTextContainerLeft.appendChild(br);
    })

    const projectImageContainer = card.querySelector(".project-image-container");
    const img1 = document.createElement("img");
    img1.src = "images/projects/" + cardData.projectImageContainer.imageLeft.src;
    img1.alt = cardData.projectImageContainer.imageLeft.alt;
    img1.classList.add("img1");
    projectImageContainer.appendChild(img1);

    const img2 = document.createElement("img");
    img2.src = "images/projects/" + cardData.projectImageContainer.imageRight.src;
    img2.alt = cardData.projectImageContainer.imageRight.alt;
    img2.classList.add("img2");
    projectImageContainer.appendChild(img2);

    const projectTextContainerRightDescription = card.querySelector(".project-text-container p");
    projectTextContainerRightDescription.innerHTML = cardData.projectTextContainerRight.description;

    const projectTextContainerRightList = card.querySelector(".project-text-container ul");
    cardData.projectTextContainerRight.technologies.forEach(technology =>{
        const li = document.createElement("li");
        li.textContent = technology;
        projectTextContainerRightList.appendChild(li);
    })

    return card;
}

function generateCardMobile(cardData, template) {
    const card = template.cloneNode(true);
    card.removeAttribute("id");

    const cardFront = card.querySelector('.card-front');
    const cardBack = card.querySelector('.card-back');

    const textContainerBack = cardBack.querySelector(".project-text-container-mobile");
    cardData.projectTextContainerLeft.texts.forEach(text =>{
        const p = document.createElement("p");
        p.innerHTML = text;
        p.classList.add("project-text-mobile");
        textContainerBack.appendChild(p);
    })

    const projectImageContainerFront = cardFront.querySelector(".project-image-container-mobile");
    const img1 = document.createElement("img");
    img1.src = "images/projects/" + cardData.projectImageContainer.imageLeft.src;
    img1.alt = cardData.projectImageContainer.imageLeft.alt;
    img1.classList.add("img1");
    projectImageContainerFront.appendChild(img1);

    const projectImageContainerBack = cardBack.querySelector(".project-image-container-mobile");
    const img2 = document.createElement("img");
    img2.src = "images/projects/" + cardData.projectImageContainer.imageRight.src;
    img2.alt = cardData.projectImageContainer.imageRight.alt;
    img2.classList.add("img2");
    projectImageContainerBack.appendChild(img2);

    const projectTextContainerDescription = cardFront.querySelector(".project-text-container-mobile p");
    projectTextContainerDescription.innerHTML = cardData.projectTextContainerRight.description;

    const projectTextContainerList = cardFront.querySelector(".project-text-container-mobile ul");
    cardData.projectTextContainerRight.technologies.forEach(technology =>{
        const li = document.createElement("li");
        li.textContent = technology;
        projectTextContainerList.appendChild(li);
    })

    return card;
}

generateCards();

function generateCards() {
    const projectsContainer = document.getElementById("projectsContainer");
    const projectsContainerMobile = document.getElementById("projectsContainerMobile");
    const projectCard = document.getElementById("projectContainer");
    const projectCardMobile = document.getElementById("projectContainerMobile");

    projectsContainer.innerHTML= "";
    projectsContainerMobile.innerHTML= "";

    projectGroups.forEach(projectGroup => {
        const h2 = document.createElement("h2");
        h2.textContent = projectGroup.title;
        projectsContainer.appendChild(h2);

        const h2Mobile = h2.cloneNode(true);
        projectsContainerMobile.appendChild(h2Mobile);

        projectGroup.projectCards.forEach(card => {
            const h3 = document.createElement("h3");
            h3.textContent = card.title;
            projectsContainer.appendChild(h3);

            const h3Mobile = h3.cloneNode(true);
            projectsContainerMobile.appendChild(h3Mobile);

            let cardElement = generateCard(card, projectCard);
            projectsContainer.appendChild(cardElement)

            let cardElementMobile = generateCardMobile(card, projectCardMobile);
            projectsContainerMobile.appendChild(cardElementMobile)

        })
    })
}

//flip animation for soft skills
const skillContainers = document.querySelectorAll('.soft-skill-container');
const externalContainers = document.querySelectorAll('.soft-skill-container-external');

let paused = false;

const readTime = 6000;

function flipAll() {
    if (!paused) {
        skillContainers.forEach(container => container.classList.toggle('flipped'));
    }
    setTimeout(flipAll, readTime);
}

//start
setTimeout(flipAll, readTime);

//desktop: hover = pause
externalContainers.forEach(container => {
    container.addEventListener('mouseenter', () => paused = true);
    container.addEventListener('mouseleave', () => paused = false);
});

//mobil: tap = pause
externalContainers.forEach(container => {
    container.addEventListener('touchstart', () => {
        paused = !paused;
    });
});

skillContainers.forEach(container => {
    container.addEventListener('click', (e) => {
        e.stopPropagation();
        container.classList.toggle('flipped');
    });
});

//load technologies
const technologies = [
    { name: 'Bootstrap', iconName: 'bootstrap' },
    { name: 'C Sharp', iconName: 'csharp' },
    { name: 'CSS3', iconName: 'css3' },
    { name: 'Dart', iconName: 'dart' },
    { name: '.NET Core', iconName: 'dotnetcore' },
    { name: 'Drupal', iconName: 'drupal' },
    { name: 'Flutter', iconName: 'flutter' },
    { name: 'GitHub', iconName: 'github' },
    { name: 'HTML5', iconName: 'html5' },
    { name: 'Inkscape', iconName: 'inkscape' },
    { name: 'JavaScript', iconName: 'javascript' },
    { name: 'jQuery', iconName: 'jquery' },
    { name: 'MySQL', iconName: 'mysql' },
    { name: 'PHP', iconName: 'php' },
    { name: 'PostgreSQL', iconName: 'postgresql' },
    { name: 'Sourcetree', iconName: 'sourcetree' },
    { name: 'Visual Studio', iconName: 'visualstudio' },
    { name: 'VSCode', iconName: 'vscode' }
];

generateTechnologies();

function generateTechnologies() {
    const container = document.getElementById('technologiesIconContainer');
    container.innerHTML = '';

    const group1 = document.createElement('div');
    group1.classList.add('group');
    container.appendChild(group1);

    const group2 = document.createElement('div');
    group2.classList.add('group');
    group2.setAttribute('aria-hidden', 'true');
    container.appendChild(group2);

    technologies.forEach(technology =>{
        const technologyElement = createTechnology(technology);
        const technologyElementClone = technologyElement.cloneNode(true);

        group1.appendChild(technologyElement);
        group2.appendChild(technologyElementClone);
    });
}

function createTechnology(technologyData) {
    const technology = document.createElement('div');
    technology.classList.add('technology');

    const iconSwap = document.createElement('div');
    iconSwap.classList.add('icon-swap');
    technology.appendChild(iconSwap);

    const normalImg = document.createElement('img');
    normalImg.classList.add('normal');
    normalImg.src = `images/technologies/plain/${technologyData.iconName}.svg`;
    iconSwap.appendChild(normalImg);

    const hoverImg = document.createElement('img');
    hoverImg.classList.add('hover');
    hoverImg.src = `images/technologies/original/${technologyData.iconName}.svg`;
    iconSwap.appendChild(hoverImg);

    const name = document.createElement('p');
    name.classList.add('technology-text');
    name.textContent = technologyData.name;
    technology.appendChild(name);

    return technology;
}


// Hamburger menu
let isMenuShown = false;
const hamburgerMenu = document.getElementById("hamburgerMenu");

function mobilMenu() {

    if(!isMenuShown) {
        hamburgerMenu.classList.add("shown");
    } else {
        hamburgerMenu.classList.remove("shown");
    }
    isMenuShown = !isMenuShown;
}


// Scroll To Top Button
const scrollBtn = document.getElementById('scrollBtn');

window.addEventListener('scroll', function() {
    scrollFunction();
    watchScrollBtnDistance();
})

scrollBtn.addEventListener('click', function() {
    topFunction();
})

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

// Scroll button position fix above footer
const footer = document.getElementById('footer');
const scrollTop = document.getElementById('scrollTop');

function watchScrollBtnDistance() {
    const footerTop = footer.getBoundingClientRect().top;
    const scrollBtnBottom = scrollBtn.getBoundingClientRect().bottom;

    const distance = footerTop - scrollBtnBottom;

    if (distance < 80 && scrollTop.style.position !== 'absolute') {
        scrollTop.style.position = 'absolute';
    } else if (window.innerHeight - scrollBtnBottom < 80 && scrollTop.style.position !== 'fixed') {
        scrollTop.style.position = 'fixed';
    }
}

// Flip Animation
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card-mobile");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.add("flipped");

            card.addEventListener("mouseenter", () => {
                clearTimeout(timeoutId);
            });

            card.addEventListener("mouseleave", () => {
                timeoutId = setTimeout(() => {
                    card.classList.remove("flipped");
                }, 5000);
            });
        });
    });
});

// Copy button
function copy(text) {
  navigator.clipboard.writeText(text);
}
