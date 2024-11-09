const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__list");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll(".slider__list")[0];
    slider.style.marginLeft = "-203%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-101.5%";
    }, 500);
}

function moverIzquierda() {
    let sliderSection = document.querySelectorAll(".slider__list");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-101.5%";
    }, 500);
}

btnRight.addEventListener('click', function () {
    moverDerecha();
});

btnLeft.addEventListener('click', function () {
    moverIzquierda();
});

