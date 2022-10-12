// Burger-donate

const hamb = document.querySelector(".hamb");
const Hambmenu = document.querySelector(".hamb-menu");
const cross = document.querySelector(".cross");
const Overlay = document.querySelector('.background');

hamb.addEventListener('click', HambHandler);
cross.addEventListener('click', crossClose);
Overlay.addEventListener('click', backgroundNone);

function HambHandler(e) {
    e.preventDefault();
    Hambmenu.classList.add('active');
    Overlay.classList.add('visible');
}

function backgroundNone(e) {
    if (e.target.classList.contains('background')) {
        Hambmenu.classList.remove('active');
        Overlay.classList.remove('visible');
    }
}

function crossClose() {
    Hambmenu.classList.remove('active');
    Overlay.classList.remove('visible');
}

// Input-donate

const radio = document.querySelectorAll('.radio-donate');
const number = document.querySelector('.donate-number-input');

radio.forEach((item) => {
    item.addEventListener('input', function(){
        number.value = item.value;
    })
})

number.addEventListener('input', function(){
    radio.forEach((item) => {
       if(number.value === item.value){
        item.checked = true;
       }
       else {
        item.checked = false;
       } 
    })
})

// radio1.addEventListener('input', function(e) {
//     number.value = radio1.value;
// })

// number.addEventListener('input', function(e) {
//     radio1.value = e.target.value;
// })