
/* =========================================
   DEDE'S URBAN BISTRO
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const mainNavigation = document.getElementById("main-navigation");


if (menuToggle && mainNavigation) {

    // Open and close mobile navigation
    menuToggle.addEventListener("click", () => {

        const isOpen = mainNavigation.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    // Close navigation after selecting a link
    const navigationLinks = mainNavigation.querySelectorAll("a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNavigation.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    // Close navigation using Escape key
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            mainNavigation.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}
