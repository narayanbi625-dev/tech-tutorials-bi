```javascript
/* =========================================
   TECH TUTORIALS BI
   Main JavaScript
   ========================================= */


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
   ========================================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    });

});


/* =========================================
   SCROLL REVEAL ANIMATION
   ========================================= */

const animatedElements = document.querySelectorAll(
    ".tech-card, .video-card, .course-card, .project-card, .resource-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const sections = document.querySelectorAll("section[id]");

const updateActiveNavigation = () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const target = link.getAttribute("href");

        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================
   SMOOTH SCROLL
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   CURRENT YEAR
   ========================================= */

const footerYear = document.querySelector(".footer-bottom");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} Tech Tutorials BI. All rights reserved.`;

}


/* =========================================
   YOUTUBE BUTTON TRACKING
   ========================================= */

const youtubeLinks = document.querySelectorAll(
    'a[href*="youtube.com"]'
);

youtubeLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Tech Tutorials BI YouTube link clicked"
        );

    });

});


/* =========================================
   PAGE LOAD ANIMATION
   ========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});
```
