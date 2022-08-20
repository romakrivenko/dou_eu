import * as flsFunctions from "./modules/functions.js";
import {openMenu, dropMenu, scrollFunction} from "./files/menu.js";
import {scrollTop} from "./files/scroll.js";

flsFunctions.isWebp();

openMenu();

dropMenu();

const scrollBtn = document.getElementById('topBtn');
scrollBtn.addEventListener('click', () => scrollTop(0));

window.onscroll = function() {scrollFunction()};

const sections = document.querySelectorAll('.history__item');
const navigation = document.querySelectorAll('.history__year');
const toogleActiveItem = () => {
    let activeSection = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop ) {
            activeSection = section.getAttribute('id'); }
    });
    navigation.forEach((navItem) => {
        navItem.classList.remove('current_year');
        if (navItem.classList.contains(activeSection)) {
            navItem.classList.add('current_year');
        }
    });
}

window.addEventListener('scroll', toogleActiveItem);