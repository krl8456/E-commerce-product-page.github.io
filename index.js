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
const avatar = document.querySelector('.avatar');
const thumbnailImages = document.querySelectorAll('.main-thumbnail');
const popupModal = document.querySelector('.popup-modal');

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
let avatarClicked = false;
avatar.addEventListener('click', () => {
    if(avatarClicked === false) {
        avatar.style.border = '2px solid hsl(26, 100%, 55%)';
        avatar.style.borderRadius = '50%';
        avatarClicked = true;
    }
    else {
        avatar.style.border = '0';
        avatarClicked = false;
    }
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
        cart.style.filter = 'brightness(20%)';
    }
    else {
        open = false;
        container.removeChild(popUp);
        cart.style.filter = 'brightness(100%)';
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
// cartInformationDescription.appendChild(finalPrice);
cartInformation.appendChild(cartInformationDescription);
cartInformation.appendChild(trashImage);
cartInformation.appendChild(checkoutButton);
cartInformation.appendChild(finalPrice);

addToCartButton.addEventListener('click', () => {
    if (amountOfPurchases > 0) {
        finalPrice.textContent = '$' + amountOfPurchases * 125 + '.00';
        if (window.innerWidth < 780) {
            cartInformationDescription.textContent = `Autumn Limited Edition...
            ${price.textContent} x ${amountOfPurchases}` ;
        }
        else {
            cartInformationDescription.textContent = `Fall Limited Edition Sneakers
            ${price.textContent} x ${amountOfPurchases}` ;

        }
        cartInformationDescription.appendChild(finalPrice);
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



for (let i = 0; i < thumbnailImages.length; i++) {
    thumbnailImages[i].addEventListener('click', () => {
        for (let i = 0; i < thumbnailImages.length; i++) {
            if (thumbnailImages[i].style.opacity === '0.7') {
                thumbnailImages[i].style.opacity = '1';
                thumbnailImages[i].style.border = '0';
            }
        }
        pictureOfShoes.src = `images/image-product-${i+1}.jpg`;
        thumbnailImages[i].style.opacity = '0.7';
        thumbnailImages[i].style.border = '3px solid hsl(26, 100%, 55%)'
    });  
}


const popupThumbnails = document.querySelectorAll('.popup-thumbnail');
const popupCloseIcon = document.querySelector('.popup-close-icon');
pictureOfShoes.addEventListener('click', () => {
    for (let i = 0; i < popupThumbnailImages.length; i++) {
        if (popupThumbnailImages[i].style.opacity === '0.5') {
            popupThumbnailImages[i].style.opacity = '1';
            popupThumbnailImages[i].style.border = '0';
        }
    }
    popupThumbnailImages[0].style.opacity = '0.5';
    popupThumbnailImages[0].style.border = '4px solid hsl(26, 100%, 55%)';
    popupMainImage.src = 'images/image-product-1.jpg';
    counter = 0;
    if(window.innerWidth >= 780) {
        popupModal.showModal();
        for (let el of popupThumbnails) {
            el.style.display = "block";
        }
    }
});

popupCloseIcon.addEventListener('click', () => {
    popupModal.close();    
});

const popupThumbnailImages = document.querySelectorAll('.popup-thumbnail');
const popupMainImage = document.querySelector('.popup-main-image');


for (let i = 0; i < popupThumbnailImages.length; i++) {
    popupThumbnailImages[i].addEventListener('click', () => {
        counter = i;
        for (let i = 0; i < popupThumbnailImages.length; i++) {
            if (popupThumbnailImages[i].style.opacity === '0.5') {
                popupThumbnailImages[i].style.opacity = '1';
                popupThumbnailImages[i].style.border = '0';
            }
        }
        popupMainImage.src = `images/image-product-${i+1}.jpg`;
        popupThumbnailImages[i].style.opacity = '0.5';
        popupThumbnailImages[i].style.border = '4px solid hsl(26, 100%, 55%)';
    })
}

const popupPreviousImageArrow = document.querySelector('.popup-previous-image');
const popupNextImageArrow = document.querySelector('.popup-next-image');

popupNextImageArrow.addEventListener('click', () => {
    if (counter === 3) {
        counter = -1;
        popupThumbnailImages[3].style.opacity = '1';
        popupThumbnailImages[3].style.border = '0';
    }
    popupMainImage.src = images[++counter];
    popupThumbnailImages[counter].style.opacity = '0.5';
    popupThumbnailImages[counter].style.border = '4px solid hsl(26, 100%, 55%)';
    popupThumbnailImages[counter-1].style.opacity = '1';
    popupThumbnailImages[counter-1].style.border = '0';
});
popupPreviousImageArrow.addEventListener('click', () => {
    if (counter === 0) {
        counter = 4;
        popupThumbnailImages[0].style.opacity = '1';
        popupThumbnailImages[0].style.border = '0';
    }
    if (counter === 3) {
        popupThumbnailImages[counter].style.opacity = '1';
        popupThumbnailImages[counter].style.border = '0';
    }
    popupMainImage.src = images[--counter];
    popupThumbnailImages[counter].style.opacity = '0.5';
    popupThumbnailImages[counter].style.border = '4px solid hsl(26, 100%, 55%)';
    popupThumbnailImages[counter+1].style.opacity = '1';
    popupThumbnailImages[counter+1].style.border = '0';
});




