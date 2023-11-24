const contactUsEl = document.getElementById("contactUs");
const contactUsEl2 = document.getElementById("contactUsFooter");
const serviceNavEl = document.getElementById("renderServiceSection");
const loginEl = document.getElementById("loginSignup");
const cookingBtnEl = document.getElementById("cookingBtn");
const cleaningBtnEl = document.getElementById("cleaningBtn");


contactUsEl.addEventListener('click', function(){
  window.location.href = 'contactPage.html';
});
contactUsEl2.addEventListener('click', function(){
  window.location.href = 'contactPage.html';
});
loginEl.addEventListener('click',function(){
  window.location.href = 'signInSignUp.html';
});
cookingBtnEl.addEventListener('click',function(){
  window.location.href = 'cookingPage.html';
});
cleaningBtnEl.addEventListener('click',function(){
  window.location.href = 'cleaningSub.html';
})


































document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");

  let currentIndex = 0;
  const totalImages = document.querySelectorAll(".carousel-item").length;

  function showNext() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + "%";
    carouselInner.style.transform = "translateX(" + translateValue + ")";
  }

  setInterval(showNext, 3000);
});


function hoverStar1(starIndex) {
  const ratingText1 = document.getElementById('output1');


  for (let i = 1; i <= 5; i++) {
    const star = document.querySelector('.stars-container1 .fa-star:nth-child(' + i + ')');
    star.classList.remove('active');
  }


  for (let i = 1; i <= starIndex; i++) {
    const star = document.querySelector('.stars-container1 .fa-star:nth-child(' + i + ')');
    star.classList.add('active');
  }


  ratingText1.textContent = 'You rated it ' + getRatingText(starIndex);
}

function rateStar1(starIndex) {

  console.log('Cooking: Rated ' + starIndex + ' stars');
}

function hoverStar2(starIndex) {
  const ratingText2 = document.getElementById('output2');


  for (let i = 1; i <= 5; i++) {
    const star = document.querySelector('.stars-container2 .fa-star:nth-child(' + i + ')');
    star.classList.remove('active');
  }


  for (let i = 1; i <= starIndex; i++) {
    const star = document.querySelector('.stars-container2 .fa-star:nth-child(' + i + ')');
    star.classList.add('active');
  }


  ratingText2.textContent = 'You rated it ' + getRatingText(starIndex);
}

function rateStar2(starIndex) {

  console.log('Cleaning: Rated ' + starIndex + ' stars');
}

function resetStars(containerSelector, outputId) {
  const stars = document.querySelectorAll(containerSelector + ' .fa-star');
  stars.forEach(star => star.classList.remove('active'));

  const ratingText = document.getElementById(outputId);
  ratingText.textContent = 'You rated it ____';
}

function getRatingText(starIndex) {
  switch (starIndex) {
    case 1:
      return 'Bad';
    case 2:
      return 'Average';
    case 3:
      return 'Better';
    case 4:
      return 'Best';
    case 5:
      return 'Excellent';
    default:
      return '';
  }
}