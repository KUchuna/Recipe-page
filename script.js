const listIcon = document.querySelectorAll('.list-item-icon');
const listText = document.querySelectorAll('.list-item-text');
const span = document.querySelectorAll('.animation-span');

listIcon.forEach(elem => elem.addEventListener('click', () => {
    elem.classList.remove('black-filter');
    listIcon.forEach(elem => elem.classList.remove('orange-filter'));
    listIcon.forEach(elem => elem.classList.add('black-filter'));
    elem.classList.add('orange-filter');

    if(listIcon[0].classList.contains('orange-filter')){
        listText[0].classList.add('orange-filter');
    }
    else {
        listText[0].classList.remove('orange-filter');
    }
    if(listIcon[1].classList.contains('orange-filter')){
        listText[1].classList.add('orange-filter');
    }
    else {
        listText[1].classList.remove('orange-filter');
    }
    if(listIcon[2].classList.contains('orange-filter')){
        listText[2].classList.add('orange-filter');
    }
    else {
        listText[2].classList.remove('orange-filter');
    }
    if(listIcon[3].classList.contains('orange-filter')){
        listText[3].classList.add('orange-filter');
    }
    else {
        listText[3].classList.remove('orange-filter');
    }

}));

listText.forEach(elem => elem.addEventListener('click', () => {
    listText.forEach(elem => elem.classList.remove('orange-filter'));
    elem.classList.add('orange-filter');

    if(listText[0].classList.contains('orange-filter')){
        listIcon[0].classList.add('orange-filter');
    }
    else {
        listIcon[0].classList.remove('orange-filter');
    }
    if(listText[1].classList.contains('orange-filter')){
        listIcon[1].classList.add('orange-filter');
    }
    else {
        listIcon[1].classList.remove('orange-filter');
    }
    if(listText[2].classList.contains('orange-filter')){
        listIcon[2].classList.add('orange-filter');
    }
    else {
        listIcon[2].classList.remove('orange-filter');
    }
    if(listText[3].classList.contains('orange-filter')){
        listIcon[3].classList.add('orange-filter');
    }
    else {
        listIcon[3].classList.remove('orange-filter');
    }
}));


const imageWidth = window.getComputedStyle(document.getElementById('image-box')).getPropertyValue('width');
const instructions = document.getElementById('instructions-box');
const ingredients = document.getElementById('ingredients');
const yeildsWidth = window.getComputedStyle(document.getElementById('yeilds')).getPropertyValue('width');
const fourthItem = document.getElementById('fourth-item');

var ingredientsWidth = parseInt(imageWidth) - parseInt(yeildsWidth);
var windowWidth = window.innerWidth;
var windowWidthValue = parseInt(windowWidth);


if (windowWidthValue>800){

    ingredients.style.maxWidth = ingredientsWidth+"px";
    instructions.style.maxWidth = ingredientsWidth+'px';

} 

