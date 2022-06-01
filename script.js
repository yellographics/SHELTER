"use strict";

// --- Hamburger Menu

const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const navigationLinks = mobileMenu.querySelectorAll(".navigation__link");
const menuLines = document.querySelectorAll(".hamburger__line");
const logoMobile = document.querySelector(".logo-mobile");
const overflow = document.querySelector(".overflow");
let isOpen = false;

const openMenu = () => {
  hamburger.style.transform = "rotate(90deg)";
  mobileMenu.style.right = "0";
  menuLines.forEach((elem) => elem.classList.add("hamburger__line-colored"));
  body.classList.add("stop-scrolling");
  overflow.style.visibility = "visible";
  overflow.style.opacity = "1";
  isOpen = true;
};

const closeMenu = () => {
  hamburger.style.transform = "rotate(0deg)";
  mobileMenu.style.right = "-100%";
  menuLines.forEach((elem) => elem.classList.remove("hamburger__line-colored"));
  body.classList.remove("stop-scrolling");
  overflow.style.visibility = "hidden";
  isOpen = false;
};

hamburger.addEventListener("click", () => {
  if (!isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

logoMobile.addEventListener("click", () => {
  closeMenu();
});

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
})


overflow.addEventListener("click", () => {
  closeMenu();
});

// --- Pets Array

const petsArray = [
  {
    name: "Jennifer",
    img: "../assets/images/pet-cards/jennifer.jpg",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../assets/images/pet-cards/sophia.jpg",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../assets/images/pet-cards/woody.jpg",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../assets/images/pet-cards/scarlett.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../assets/images/pet-cards/katrine.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../assets/images/pet-cards/timmy.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../assets/images/pet-cards/freddie.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../assets/images/pet-cards/charly.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

// --- slider

const btnLeft = document.querySelector('.button-left') || 0;
const btnRight = document.querySelector('.button-right') || 0;
const sliderTrack = document.querySelector('.slider__track');
let slidesNumbers = [-1, -1, -1];


init();

function randomSlidesGenerator() {
  
  let savedNumber = -1;
  let generatedNumber = 0;

  for (let i = 0; i < 3; i++) {
    do {
      generatedNumber = Math.floor(Math.random() * petsArray.length);
    } while (
      generatedNumber === savedNumber || slidesNumbers.some((elem) => elem === generatedNumber)
    );
    savedNumber = generatedNumber;
    slidesNumbers.push(generatedNumber);
  }

  slidesNumbers.splice(0, 3);
  generatedNumber = -1;
}

function drawSlides (direction){       
    sliderTrack.innerHTML = '';
    for (let i = 0; i < slidesNumbers.length; i++){
        sliderTrack.innerHTML += `<div class="pet-card animate__animated animate__slideIn${direction}" id="${slidesNumbers[i]}">
        <img
          src="../assets/images/pet-cards/${petsArray[slidesNumbers[i]].name.toLowerCase()}.jpg"
          alt="${petsArray[slidesNumbers[i]].name}-${petsArray[slidesNumbers[i]].type}"
        />
        <p>${petsArray[slidesNumbers[i]].name}</p>
        <button class="button button_bordered">Learn more</button>
      </div>`
    }
}

function init(){
  randomSlidesGenerator();
  if(sliderTrack) drawSlides();
}

document.body.addEventListener('click', (event) => {  
  if(event.target.classList.contains('button-left')){
    randomSlidesGenerator();     
    drawSlides("Left"); 
  } else if (event.target.classList.contains('button-right')){
    randomSlidesGenerator();     
    drawSlides("Right"); 
  }
})


// --- popup

const popupWindow = document.querySelector('.popup__window');
const closePopup = popupWindow.querySelector('.close');
const slider = document.querySelector('.slider__track');
const gallery = document.querySelector('.pets-gallery');

const cards = document.querySelectorAll('.pet-card');

function GeneratePopupInfo(card){
  const id = card.id;

  console.log(petsArray[id].name);
  popupWindow.querySelector('.popup__info').innerHTML = `
    
    <img class="popup__image" src='${petsArray[id].img}'>
    <div class="popup__text">
      <h3 class="popup__heading">${petsArray[id].name}</h3>
      <h4 class="popup__subheading">${petsArray[id].type} - ${petsArray[id].breed}</h4>
      <p class="animal-description">${petsArray[id].description}</p>
      <ul>
        <li><span>Age:</span> ${petsArray[id].age}</li>
        <li><span>Inoculations:</span> ${petsArray[id].inoculations}</li>
        <li><span>Diseases:</span> ${petsArray[id].diseases}</li>
        <li><span>Parasites:</span> ${petsArray[id].parasites}</li>
      </ul>
    </div>

  `
}

document.body.addEventListener('click', (event) => {
  const petCard = event.target.closest('.pet-card');
  if (petCard){
    overflow.style.visibility = "visible";
    overflow.style.opacity = "1";
    popupWindow.style.display='block';
    body.classList.add("stop-scrolling"); 
    GeneratePopupInfo(petCard);
  }
})

closePopup.addEventListener('click', () => {
  overflow.style.visibility = "hidden";
  overflow.style.opacity = "0";
  popupWindow.style.display = 'none';
  body.classList.remove("stop-scrolling");
  
})

overflow.addEventListener('click', () => {
  overflow.style.visibility = "hidden";
  overflow.style.opacity = "0";
  popupWindow.style.display = 'none';
  body.classList.remove("stop-scrolling");  
})

closePopup.addEventListener('mouseenter', () => {  
  closePopup.style.backgroundColor = '#FDDCC4';
  closePopup.style.borderColor = '#FDDCC4';   
})

closePopup.addEventListener('mouseleave', () => {
closePopup.style.backgroundColor = 'transparent';
})

overflow.addEventListener('mouseenter', () => {  
    closePopup.style.backgroundColor = '#FDDCC4';
    closePopup.style.borderColor = '#FDDCC4';   
})

overflow.addEventListener('mouseleave', () => {
  closePopup.style.backgroundColor = 'transparent';
})


// --- pagination

let random48animals = [];
let random = 0;
let arrayOf6 = [];
let arrayOf8 = [];

function generateRandom48Animals(array){
  // создаем цикл, который будет прокручиваться 16 раз для создания массива из 3-х чисел
  for (let i = 0; i < 16; i++){
    let arrayOf3 = [];  

    // создаем цикл, который будет прокручиваться 3 раза
    for(let j = 0; j < 3; j++){
      do {
          if(arrayOf6.length === 6){
              arrayOf6 = [];
            }
          if (arrayOf8.length === 8){
              arrayOf8 = [];
          }
          random = Math.floor(Math.random() * array.length);        
      } while (arrayOf3.some(elem => elem === array[random]) || arrayOf6.some(elem => elem === array[random]) || arrayOf8.some(elem => elem === array[random]))  
        
      
      arrayOf3.push(array[random]);
      arrayOf6.push(array[random]);
      arrayOf8.push(array[random]);    
    }
    
    random48animals.push(...arrayOf3);
  }  
}

generateRandom48Animals(petsArray);


const pagination = document.querySelector('.pagination');

if(pagination){
  let pageNumber = +document.querySelector('.pagination__page-number span').innerHTML;


const startBtn = document.querySelector('.pagination__start');
const prevBtn = document.querySelector('.pagination__prev');
const nextBtn = document.querySelector('.pagination__next');
const endBtn = document.querySelector('.pagination__end');

const mediaDesktop = window.matchMedia('(min-width: 1280px)');
const mediaTablet = window.matchMedia('(min-width: 768px)');
const mediaMobile = window.matchMedia('(min-width: 320px)');

let pages = 0;
let cardsPerPage = 0;

if (mediaDesktop.matches){  
  cardsPerPage = 8;
  pages = random48animals.length/cardsPerPage;  
} else if ((mediaTablet.matches)) {  
  cardsPerPage = 6;
  pages = random48animals.length/cardsPerPage;  ;
} else {
  cardsPerPage = 3;
  pages = random48animals.length/cardsPerPage;  
}

drawCards();

if(pagination){
  pagination.addEventListener('click', (event) => {
    const button = event.target.closest('.button_nav');
    switch(button){
      case startBtn:          
        pageNumber = 1;
        drawCards(); 
        document.querySelector('.pagination__page-number span').innerHTML = `${pageNumber}`;
        checkDisabled();               
        break;
      case prevBtn:
        if(pageNumber > 1){
          pageNumber--; 
          drawCards();                     
        }
        document.querySelector('.pagination__page-number span').innerHTML = `${pageNumber}`;        
        checkDisabled();                 
        break;
      case nextBtn:        
        if(pageNumber < pages){
          pageNumber++; 
          drawCards();                          
        }
        document.querySelector('.pagination__page-number span').innerHTML = `${pageNumber}`;  
        checkDisabled();                  
        break;
      case endBtn:        
        pageNumber = pages;
        drawCards();
        document.querySelector('.pagination__page-number span').innerHTML = `${pageNumber}`;
        checkDisabled();            
        break;
    }
  })
}

function checkDisabled(){
  switch(true){
    case pageNumber === 1:
      startBtn.classList.add('button_disabled');
      prevBtn.classList.add('button_disabled');
      nextBtn.classList.remove('button_disabled');
      endBtn.classList.remove('button_disabled');
      break;
    case pageNumber === pages: 
      startBtn.classList.remove('button_disabled');
      prevBtn.classList.remove('button_disabled');
      nextBtn.classList.add('button_disabled');
      endBtn.classList.add('button_disabled');
      break;
    case ((pageNumber > 1) && (pageNumber < pages)):
      startBtn.classList.remove('button_disabled');
      prevBtn.classList.remove('button_disabled');
      nextBtn.classList.remove('button_disabled');
      endBtn.classList.remove('button_disabled');
      break;
  }  
}


function drawCards(){
  let start = (pageNumber - 1) * cardsPerPage;
  let end = start + cardsPerPage;
  let cardsOnPage = random48animals.slice(start, end);    
  gallery.innerHTML = '';
  for (let i = 0; i < cardsOnPage.length; i++){
    const id = petsArray.findIndex(elem => elem.name === cardsOnPage[i].name);
    gallery.innerHTML += `
        <div class="pet-card" id='${id}'>
        <img
          src="${cardsOnPage[i].img}"
          alt="${cardsOnPage[i].name} - ${cardsOnPage[i].type} "
        />
        <p>${cardsOnPage[i].name}</p>
        <button class="button button_bordered">Learn more</button>
      </div>      
    `
  }
}
}















