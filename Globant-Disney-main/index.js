
/* API */

const API = "https://serdnah2.github.io/inspiratec/data.json"
const prueba = document.querySelector(".sections img")

/* Slider */

const slider = document.querySelector("#section");
let sliderSection = document.querySelectorAll(".sections");
let sliderSectionLast = sliderSection[sliderSection .length -1];

const btnLeft = document.querySelector("#btn-left")
const btnRight = document.querySelector("#btn-right")

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".sections") [0];
    slider.style.marginLeft = "-200%" ;
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft ="-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".sections");
    let sliderSectionLast = sliderSection[sliderSection .length -1];
    slider.style.marginLeft = "0" ;
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft ="-100%";
    }, 500);    
}

btnRight.addEventListener('click', function(){
    Next();
});


btnLeft.addEventListener('click', function(){
    Prev();
});
