const btn = document.querySelector(".night-mode");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});


window.addEventListener('scroll' , ()=>{
  document.querySelector('nav').classList.toggle('window' , window.scrollY > 0)
});




const openBtn = document.querySelector(".btn1");
const closeBtn = document.querySelector(".btn2");
var nav = document.querySelector('.firstul');
openBtn.addEventListener ("click" , () =>{
  nav.style.display='flex';
 openBtn.style.display='none';
  closeBtn.style.display='inline-block';

}) ;

closeBtn.addEventListener("click", () => {
  nav.style.display = 'none';
  openBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';

});
  

const close = document.querySelectorAll('#close')


close.forEach(closing=>{
  closing.addEventListener('click', () => {
  nav.style.display = 'none';
  openBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
  })
})




    
var swiper = new Swiper('.home-swiper', {
  
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
    spaceBetween: 8,
    
  pagination: {
    el:'.first-pag'
  },


});  



var swiper = new Swiper('.buy-swiper', {
  
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
    spaceBetween:0,
    
  pagination: {
    el: '.second-pag',
  },


});



  var swiper = new Swiper('.services-swiper', {
  
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
    spaceBetween: 8,
    
  pagination: {
    el: '.third-pag',
  },


});









const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown =>{
  const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');
  
  
  select.addEventListener("click" , () =>{
  select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });
  



options.forEach(option =>{
    option.addEventListener('click' , () =>{
      selected.innerText = option.innerHTML;
      
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      
      options.forEach(option =>{
        option.classList.remove('active1');
      });
      option.classList.add('active1');
    });
});
}); 



const cards = document.querySelectorAll(".product");
const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");

let left = 0;
let eachCards = 112.3;
let totalCardSize = 224;
nextBtn.addEventListener("click", () => {
  left = left + eachCards;
  if (left >= totalCardSize) {
    left = totalCardSize
  }

  increment(left);
})
prevBtn.addEventListener("click", () => {
  left = left - eachCards
  if (left < 0) {
    left = 0
  }
  increment(left);
})


function increment(left) {
  for (const card of cards) {
    card.style.left = -left + "%"
  }
}



const cards1 = document.querySelectorAll(".first-slider-container");
const prevBtn1 = document.querySelector("#prevbtn1");
const nextBtn1 = document.querySelector("#nextbtn1");

let left1 = 0;
let eachCards1 = 105.4;
let totalCardSize1 = 211;
nextBtn1.addEventListener("click", () => {
  left1 += eachCards1;
  if (left1 >= totalCardSize1) {
    left1 = totalCardSize1
  }

  increment1(left1);
})
prevBtn1.addEventListener("click", () => {
  left1 -= eachCards1
  if (left1 < 0) {
    left1 = 0
  }
  increment1(left1);
})


function increment1(left1) {
  for (const card1 of cards1) {
    card1.style.left = -left1 + "%"
  }
}


