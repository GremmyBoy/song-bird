// Burger 

const hamb = document.querySelector(".hamb");
const Hambmenu = document.querySelector(".hamb-menu");
const cross = document.querySelector(".cross");

hamb.addEventListener('click', HambHandler);
cross.addEventListener('click', HambHandler);

function HambHandler(e) {
    e.preventDefault();
    Hambmenu.classList.toggle('active');
}

// Slider

const leftBtn = document.querySelector(".arrow-pets-left");
const rightBtn = document.querySelector(".arrow-pets-right");
const carousel = document.querySelector('.pets-carousel');
const petsLeft = document.querySelector('#pets-left');
const petsCenter = document.querySelector('#pets-center');
const petsRight = document.querySelector('#pets-right');
const petsCards = document.querySelectorAll('.all-cards>.pets-block');

let petsArray = [];
petsCards.forEach(el => {
    petsArray.push(el)
})

// petsArray = petsArrayClone;

// console.log(petsArrayClone);



// createCard();

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

function moveRight() {
    carousel.classList.add('transition_right');
    rightBtn.removeEventListener('click', moveRight);
    leftBtn.removeEventListener('click', moveLeft);
}

function moveLeft() {
    carousel.classList.add('transition_left');
    rightBtn.removeEventListener('click', moveRight);
    leftBtn.removeEventListener('click', moveLeft);
}

carousel.addEventListener('animationend', function(animationEvent) {
    if(animationEvent.animationName === "move-left") {
        carousel.classList.remove('transition_left');
        const itemLeft = petsLeft.innerHTML;
        petsCenter.innerHTML = itemLeft;
        petsLeft.innerHTML = '';
    }
    else {
        carousel.classList.remove('transition_right');
        const itemRight = petsRight.innerHTML;
        petsCenter.innerHTML = itemRight;
        petsRight.innerHTML = '';
    }
    rightBtn.addEventListener('click', moveRight);
    leftBtn.addEventListener('click', moveLeft);
})

carousel.addEventListener("animationstart", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
        createCardLeft() 
    } 
    else { 
        createCardRight() 
    }
})


function shuffle() { // рандомно перемешивает массив
    // const shuffledArr = Array.from(array);
    for (let i = petsArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));  
      [petsArray[i], petsArray[j]] = [petsArray[j], petsArray[i]];
    } 
  }

function createCardLeft() {
    // let animalCardClone;
    // let rand = Math.floor(Math.random()*petsArrayClone.length);
    // let animalCard = petsArray[rand];
    // animalCardClone = animalCard.cloneNode(true);
    // return animalCard;
    shuffle();
    for (let i = 0; i < 7; i++) {
        let dupeNode = petsArray[i].cloneNode(true)
        petsLeft.insertAdjacentElement('afterbegin', dupeNode);
    }
    // return animalCard;
}

function createCardRight() {
    // let animalCardClone;
    // let rand = Math.floor(Math.random()*petsArrayClone.length);
    // let animalCard = petsArray[rand];
    // animalCardClone = animalCard.cloneNode(true);
    // return animalCard;
    shuffle();
    for (let i = 0; i < 7; i++) {
        let dupeNode = petsArray[i].cloneNode(true)
        petsRight.insertAdjacentElement('afterbegin', dupeNode);
    }
    // return animalCard;
}

alert('Друзья, не успел доделать, кому нетрудно, проверьте пожалйста чуть позже. Если можно в последний день проверки. Благодарю за понимание) Если что пишите в дискорд');
