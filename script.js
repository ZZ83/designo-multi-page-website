const body      = document.querySelector('body');
const mainNav   = document.querySelector('.c-primaryNavigation');
const navToggle = document.querySelector('.f-mobileNavIcons');

navToggle.addEventListener('click', () => {
    const vis = mainNav.getAttribute("data-visible");
    if (vis === "false") {
        mainNav  .setAttribute("data-visible",  true);
        navToggle.setAttribute("aria-expanded", true);
        body.style.overflowY = "hidden";

    } else if (vis === "true") {
        mainNav  .setAttribute("data-visible",  false);
        navToggle.setAttribute("aria-expanded", false);
        body.style.overflowY = "scroll"
    }
})