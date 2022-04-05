const container = document.querySelector('.container');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');
const closeIcon = document.querySelector('.close-icon');
const hamburgerIcon = document.querySelector('.hamburger');
const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
const previousImageButton = document.querySelector('.circle1');
const nextImageButton = document.querySelector('.circle2');
const pictureOfShoes = document.querySelector('.shoe');
const amountCounter = document.querySelector('.amount-counter');
const minusSign = document.querySelector('.minus');
const plusSign = document.querySelector('.plus');
const cart = document.querySelector('.cart');
const price = document.querySelector('.price');
const addToCartButton = document.querySelector('.add-to-cart-button');
const popUp = document.createElement('div');
const popUpHeader = document.createElement('h3');
const line = document.createElement('div');
const emptyCartInformation = document.createElement('div');
const emptyCartInformationDiv = document.createElement('div');
const imageProductOneThumbnail = document.createElement('img');
imageProductOneThumbnail.src = 'images/image-product-1-thumbnail.jpg';
imageProductOneThumbnail.classList.add('thumbnail');
popUp.classList.add('cart-popup');
popUpHeader.classList.add('cart-popup-header');
line.classList.add('popup-line');
emptyCartInformation.classList.add('popup-cart-empty-informations');
emptyCartInformation.classList.add('empty-cart-div');
popUpHeader.textContent = 'Cart';
emptyCartInformation.textContent = 'Your cart is empty.';
emptyCartInformation.appendChild(emptyCartInformationDiv);
popUp.appendChild(popUpHeader);
popUp.appendChild(line);
popUp.appendChild(emptyCartInformation);
let open = false;
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
});
cart.addEventListener('click', () => {
    if (open ===  false) {
        open = true;
        container.appendChild(popUp)
    }
    else {
        open = false;
        container.removeChild(popUp);
    }  
});
const cartInformation = document.createElement('div');
const cartInformationDescription = document.createElement('div');
const finalPrice = document.createElement('span');
const checkoutButton = document.createElement('button');
const trashImage = document.createElement('img');
const amountBubble = document.createElement('div');

finalPrice.classList.add('final-price');
trashImage.src = "images/icon-delete.svg";
cartInformation.classList.add('cart-information');
cartInformationDescription.classList.add('cart-information-description');
trashImage.classList.add('trash-image');
checkoutButton.classList.add('checkout-button');
amountBubble.classList.add('amount-bubble');
checkoutButton.textContent = 'Checkout';

cartInformation.appendChild(imageProductOneThumbnail);
cartInformation.appendChild(cartInformationDescription);
cartInformation.appendChild(trashImage);
cartInformation.appendChild(checkoutButton);


addToCartButton.addEventListener('click', () => {
    if (amountOfPurchases > 0) {
        finalPrice.textContent = amountOfPurchases * 125 + '.00';
        cartInformationDescription.textContent = `Autumn Limited Edition...
        ${price.textContent} x ${amountOfPurchases} $${finalPrice.textContent}`;
        emptyCartInformation.textContent = '';
        amountBubble.textContent = amountOfPurchases;
        emptyCartInformation.appendChild(cartInformation);
        navigation.appendChild(amountBubble);
    }

});
trashImage.addEventListener('click', () => {
    emptyCartInformation.removeChild(cartInformation);
    navigation.removeChild(amountBubble);
    emptyCartInformation.textContent = 'Your cart is empty.';
});

// let x = window.matchMedia("(max-width: 700px)");
// console.log(x);
// const navElements = document.createElement('div');
// navElements.classList.add('nav-elements');
// navElements.textContent += 'Collections';
// navElements.textContent += 'Men';
// navElements.textContent += 'Women';
// navElements.textContent += 'About';
// navElements.textContent += 'Contact';

// function mediaQueriesChanges(x) {
//     navElements.appendChild(navElements);
// }
// mediaQueriesChanges(x) // Call listener function at run time
// x.addListener(mediaQueriesChanges)