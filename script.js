const intro = document.querySelector('#intro');
const ME = document.querySelector('#ME');
const BE = document.querySelector('#BE');
const circle = document.querySelector('#circle');
const rect = document.querySelector('#rect');
const sun = document.querySelector('#sun');
const house = document.querySelector('#house');
const navButton = document.querySelector('#nav-button');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');
const lines = document.querySelectorAll('.line');
const navMenu = document.querySelector('#nav-menu');
const newsForm = document.querySelector('#news-form');
const newsFields = document.querySelectorAll('[name=news]');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const emailAdd = document.querySelector('#email');
const newsErr = document.querySelector('#error');

function runIntro(){
    console.log('okay')
    ME.classList.remove('unload');
    circle.classList.add('load');
    setTimeout(()=>{BE.classList.remove('unload')},300);
    setTimeout(()=>{rect.classList.add('load')},500);
    setTimeout(()=>{house.classList.add('load')},700);
    setTimeout(()=>{sun.classList.add('load')},900);
    setTimeout(()=>{intro.style.opacity = '0'},1400);
    setTimeout(()=>{intro.style.display='none'},2200);
}

let menu = false;
function clickNav(){
    if(menu){
        lines.forEach(line => line.classList.remove('X'));
        setTimeout(() => {
            line1.classList.remove('collapse');
            line3.classList.remove('collapse');
        },300)
        navMenu.style.opacity = '0';
        setTimeout(() => {navMenu.style.display = 'none'},500)
        menu = false;
        return;
    }
    navButton.style.zIndex = '3';
    line1.classList.add('collapse');
    line3.classList.add('collapse');
    setTimeout(() => {
        lines.forEach(line => line.classList.add('X'));
    },200)
    navMenu.style.display = 'flex';
    setTimeout(() => {navMenu.style.opacity = '1'},200)
    menu = true;
}

function handleNews(e){
    e.preventDefault();
    newsFields.forEach(field => {
        if(field.value == ""){
            field.classList.add('highlight');
            newsErr.style.display = 'block';
        }
    })
}



window.addEventListener('load',runIntro);
navButton.addEventListener('click',clickNav);
newsForm.addEventListener('submit',handleNews)