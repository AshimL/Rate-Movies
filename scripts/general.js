const menuBtn = document.getElementById("menu-btn")
const navLinks =document.getElementById("nav-links") 
const menuBtnIcon = menuBtn.querySelector('i');


menuBtn.addEventListener('click', () =>{
  navLinks.classList.toggle('open');

  let isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute("class", isOpen? "ri-close-line":"ri-menu-line");
})


navLinks.addEventListener("click", () =>{
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});



const stars = document.querySelectorAll('.rating-stars .star');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    updateStars(selectedRating);
  });
});

function updateStars(rating) {
  stars.forEach(star => {
    if (parseInt(star.getAttribute('data-value')) <= rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}
