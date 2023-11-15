var currentUrl = window.location.href;
var home_link = document.getElementById("home")
var about_link = document.getElementById("uber-uns_link")

if (currentUrl.includes("index")){
  home_link.style.cssText = "border-bottom: var(--links) solid 3px; border-radius: 0;"
}else if 
(currentUrl.includes("about")){
    about_link.style.cssText = "border-bottom: var(--links) solid 3px; border-radius: 0;"
}

const menuIcon = document.querySelector('.menu-icon');
const mobileNavLinks = document.querySelector('.mobile-nav-links');
const navLinks = document.querySelector('.header ul');
const backdrop = document.querySelector('.backdrop');

menuIcon.addEventListener('click', () => {
if (mobileNavLinks.classList.contains('show')) {
    mobileNavLinks.innerHTML = '';
    mobileNavLinks.classList.remove('show');
    
} else {
    mobileNavLinks.innerHTML = '<img src="Logo_Engel-Entrümpelung_removebg.png" width="100" alt="Rümpelhelden" class="header-logo">';
    mobileNavLinks.innerHTML += navLinks.innerHTML;
    mobileNavLinks.classList.add('show');
    backdrop.style.display = 'block';
}
});

backdrop.addEventListener('click', (event) => {
if (event.target === backdrop) { // Check if the backdrop itself was clicked
    mobileNavLinks.classList.remove('show');
    backdrop.style.display = 'none';
}
});
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    try{
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
    catch{}
  }
}


var header = document.getElementsByClassName("header")[0];
var button = document.getElementsByClassName("button")[0];
var image = document.getElementById("header-logo");
window.onscroll = function() {
  if (!(window.matchMedia("(max-width: 1000px)").matches)){
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
      header.style.height = "60px";
      button.style.padding = "0px";
      button.style.height = "60px";
      image.src = "Entrümpelung-Person-removebg.png"
      image.style.width = "50px"
      image.style.transition = "all 0.4s"
    } else {
      header.style.height = "111px";
      button.style.height = "111px";
      image.src = "Logo_Engel-Entrümpelung_removebg.png"
      image.style.width = "100px"
    }
  } else{
    // if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
    //   header.style.height = "60px";
    //   button.style.padding = "0px";
    //   button.style.height = "30px";
    //   image.src = "Entrümpelung-Person-removebg.png"
    //   image.style.width = "50px"
    //   image.style.transition = "all 0.4s"
    // } else {
      header.style.height = "140px";
      button.style.height = "50px";
      image.src = "Logo_Engel-Entrümpelung_removebg.png"
      image.style.width = "100px"
    // }
  }
};




