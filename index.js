const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeIcon = document.querySelector('.close-icon');
const hamburgerIcon = document.querySelector('.hamburger');
const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
const previousImageButton = document.querySelector('.circle1');
const nextImageButton = document.querySelector('.circle2');
const pictureOfShoes = document.querySelector('.shoe');
const amountCounter = document.querySelector('.amount-counter');
const minusSign = document.querySelector('.minus');
const plusSign = document.querySelector('.plus');

let counter = 0;
let amountOfPurchases = 0;
closeIcon.addEventListener('click', () => {
    hamburgerMenu.close();
});
hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.showModal();
});
nextImageButton.addEventListener('click', () => {
    if (counter === 3) {
        counter = -1;
    }
    pictureOfShoes.src = images[++counter];
});
previousImageButton.addEventListener('click', () => {
    if (counter === 0) {
        counter = 4;
    }
    pictureOfShoes.src = images[--counter];
});
minusSign.addEventListener('click', () => {
    if (amountOfPurchases > 0) {
        amountOfPurchases --;
    }
    amountCounter.textContent = amountOfPurchases;
});
plusSign.addEventListener('click', () => {
    amountOfPurchases++;
    amountCounter.textContent = amountOfPurchases;
})