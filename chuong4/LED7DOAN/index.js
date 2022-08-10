
// nav_bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n =>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// nav_bar

function myFunction() {
    $('.spinner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow': 'visible'});
  }
timer1 = setTimeout(myFunction,600);

// const element = document.getElementById("preloader");
// element.remove();