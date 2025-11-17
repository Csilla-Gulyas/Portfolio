// const octopus = document.getElementById('octopus');
// const blushes = document.querySelectorAll('#blush-left, #blush-right');

// octopus.addEventListener('mouseenter', () => {
//     blushes.forEach(b => {
//         b.style.animation = 'blush-hover 0.6s ease forwards';
//     });
// });

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
                        src: "images/pigeon_food.png",
                        alt: "Pigeon Food étterem weblapjának menüjéről készült kép"
                    },
                    imageRight: {
                        src: "images/pigeon_food_2.png",
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
                        src: "images/webshop_database.png",
                        alt: "A webshop adatbázis lekérdezéseiről készített képernyőkép."
                    },
                    imageRight: {
                        src: "images/webshop_database_2.png",
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
                        src: "images/minesweeper.png",
                        alt: "Az aknakereső kezdő képernyője látható a képen (kezdő pálya)."
                    },
                    imageRight: {
                        src: "images/minesweeper_2.png",
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
        title: "JELENLEG FUTÓ PROJEKTMUNKÁIM",
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
                        src: "images/barbie_webshop.png",
                        alt: "A Barbie webshop backendjének kód részlete és mappaszerkezete látható képernyőképként."
                    },
                    imageRight: {
                        src: "images/barbie_webshop_2.png",
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
                        src: "images/pet_adoption_website.png",
                        alt: "A webshop adatbázis lekérdezéseiről készített képernyőkép."
                    },
                    imageRight: {
                        src: "images/pet_adoption_website_2.png",
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
    img1.src = cardData.projectImageContainer.imageLeft.src;
    img1.alt = cardData.projectImageContainer.imageLeft.alt;
    img1.classList.add("img1");
    projectImageContainer.appendChild(img1);

    const img2 = document.createElement("img");
    img2.src = cardData.projectImageContainer.imageRight.src;
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

generateCards();

function generateCards() {
    const projectsContainer = document.getElementById("projectsContainer");
    const projectCard = document.getElementById("projectContainer");

    projectsContainer.innerHTML= "";
    console.log(projectGroups);
    

    projectGroups.forEach(projectGroup => {
        const h2 = document.createElement("h2");
        h2.textContent = projectGroup.title;
        projectsContainer.appendChild(h2);

        projectGroup.projectCards.forEach(card => {
            const h3 = document.createElement("h3");
            h3.textContent = card.title;
            projectsContainer.appendChild(h3);
            let cardElement = generateCard(card, projectCard);
            projectsContainer.appendChild(cardElement)
        })
    })
}

//flip animation for soft skills
const skillContainers = document.querySelectorAll('.soft-skill-container');
const externalContainers = document.querySelectorAll('.soft-skill-container-external');

let paused = false;
//ms
const readTime = 6000;

function flipAll() {
    if (!paused) {
        skillContainers.forEach(container => container.classList.toggle('flipped'));
    }
    setTimeout(flipAll, readTime);
}

// start
setTimeout(flipAll, readTime);

// Desktop: hover = pause
externalContainers.forEach(container => {
    container.addEventListener('mouseenter', () => paused = true);
    container.addEventListener('mouseleave', () => paused = false);
});

// Mobil: tap = pause
externalContainers.forEach(container => {
    container.addEventListener('touchstart', () => {
        paused = !paused;
    });
});




