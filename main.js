// changing hamburger menu state by changing his class for transition
var toggler = document.querySelector(".navigation-toggler");

toggler.addEventListener("click", function() {
  this.classList.toggle("close");
});
//////////////////////////////////////////////////////////////////////////
var mobileNavList = document.querySelector(".navigation-mobile-popup");

var mobileNavLinks = document.querySelector(".navigation-mobile-popup")
  .children;
//wasnt sure if the queryselector all returns html collection or node-list, I tried to avoid Array.from to secure at least higher compatibility
// or doing another operation with for loop - thta would decrease performance and code would be less "DRY"

console.log(mobileNavLinks);

//after clicking on hamburger menu adding class to each li item in navigation to animate
toggler.addEventListener("click", function() {
  mobileNavList.classList.toggle("shown");

  for (let index = 0; index < mobileNavLinks.length; index++) {
    mobileNavLinks[index].classList.toggle("open");
  }
});

//changing color for desktop navigation after scrolling down
let scrollBarPossition = window.scrollY;
const header = document.querySelector(".navbar-desktop");
const header_height = header.offsetHeight;

//arrow functions
const add_class_on_scroll = () => header.classList.add("fade-in");
const remove_class_on_scroll = () => header.classList.remove("fade-in");

window.addEventListener("scroll", function() {
  scrollBarPossition = window.scrollY;

  if (scrollBarPossition >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
//declaring and working with elements which I need for animations on scroll,
//basically changing tranistion properties with adding extra class of element coming into viewport
function animateInView() {
  const cards = document.querySelectorAll(".card");
  const banners = document.querySelectorAll(".banner");
  let listOfBannersPositon = [];
  let listOfCardPositions = [];
  let windowPosition = window.innerHeight / 1.5;

  for (let index = 0; index < cards.length; index++) {
    listOfCardPositions[index] = cards[index].getBoundingClientRect().top;

    if (listOfCardPositions[index] < windowPosition) {
      cards[index].classList.add("animate");
    }
  }
  for(let index = 0; index < banners.length; index++){
    listOfBannersPositon[index] = banners[index].getBoundingClientRect().top;

    if(listOfBannersPositon[index] < windowPosition){
      banners[index].classList.add("banner-animation-trigger");
    }
  }
}

window.addEventListener("scroll", animateInView);