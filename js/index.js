// const navLinks = document.querySelectorAll('.nav-link a');
// Array.from(navLinks);
// console.log(navLinks);

/** `mouseover`
  * `keydown`
  * `wheel`
  * `load`
  * `focus`
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  * `drag / drop`
*/

// Select elements from DOM
const body = document.querySelector('body');
const logo = document.querySelector('.nav-container h1');
const navLinks = document.querySelectorAll('a');
const busImg = document.querySelector('.container .intro img');
const h2 = document.querySelectorAll('body h2');
const h4 = document.querySelectorAll('body h4');
const btn = document.querySelectorAll('.content-pick .btn');

const topContentSection = document.querySelector('.content-section:nth-of-type(1)');
const topContentTxtSection = document.querySelector('.content-section:nth-of-type(1) p');
const topContentImg = document.querySelector('.content-section .img-content:nth-of-type(1)');

const bottomContentSection = document.querySelector('.content-section:nth-of-type(2)');
const bottomContentTxtSection = document.querySelector('.content-section:nth-of-type(2) p');
const bottomContentImg = document.querySelector('.content-section:nth-of-type(2) .img-content img');

const destinationContent = document.querySelector('.content-destination .destination');
const destinationImg = document.querySelector('.content-destination img');

// Add events to elements

// 1 - click - OK
// var randomColor = Math.floor(Math.random()*16777215).toString(16);

logo.addEventListener('click', (event) => {
    console.log(`event: ${event.type} was activated!`);
    event.target.style.color = 'red';
    event.target.textContent = `Press ' i ' . . . `;

    setTimeout(function(){
        event.target.style.color = "";
        event.target.textContent = 'Fun Bus';
    }, 2000);
}, false);

// 2 - wheel - EH
let scale = .1;
function zoom(event){
    event.preventDefault();
    if(event.deltaY <0) {
        scale *= event.deltaY * -.1;
    }
    else
    {
        scale /=  event.deltaY * .1;
    }
    //restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    //apply scale transform
    busImg.style.transform = `scale(${scale})`;
}
busImg.addEventListener('wheel', zoom);

// 3 - keydown - OK
function iKey(event){
    if(event.key === 'i'){
        alert('all aboard the funbus!');
    }
};

document.addEventListener('keydown', iKey);

// 4 - mouseover - OK

topContentTxtSection.addEventListener('mouseover', function(event){
    //highlight mouseover target
    event.target.style.color = 'orange';

    //reset color after delay
    setTimeout(function(){
        event.target.style.color = "";
    }, 800);
}, false);

bottomContentTxtSection.addEventListener('mouseover', function(event){
    //highlight mouseover target
    event.target.style.color = 'magenta';

    //reset color after delay
    setTimeout(function(){
        event.target.style.color = "";
    }, 800);
}, false);

// 5 - mouseover multiple nav a - OK

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('mouseover', function() {
        navLinks[i].style.color = "orange";

        setTimeout(function(){
            navLinks[i].style.color = "";
        }, 500);
    }, false);
};

// 6 - mouseover multiple h2 - OK

for(let i = 0; i < h2.length; i++){
    h2[i].addEventListener('mouseover', function(){
        h2[i].style.color = 'red';

        setTimeout(function(){
            h2[i].style.color = "";
        }, 1000);
    }, false);
};

// 7 - load - OK

window.addEventListener('load', (event) => {
    console.log(`${event.type} has loaded.`);
    body.style.opacity += '0.1';
    setTimeout(function(){
        body.style.opacity = '.25';
        fadeLvl1();
    }, 500);
});
function fadeLvl1(){
    setTimeout(function(){
        body.style.opacity = '.5';
        fadeLvl2();
    }, 500);
};
function fadeLvl2(){
    setTimeout(function(){
        body.style.opacity = '1';
    }, 500);
};

// 8 - focus - NA

// topContentImg.addEventListener('focus', (event) => {
//     event.target.style.border = '2px solid red';
//     console.log('heyo the focus is on YOU');
// })

function focusPocus(event){
    event.target.style.border = '2px solid teal';
    console.log('heyo the focus is on YOU');
};

topContentImg.addEventListener('click', focusPocus);

// 9 - 