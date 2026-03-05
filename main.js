const navbar = document.querySelector(".navbar");
const navbarMenu = document.getElementById("navBar");
const navLinks = document.querySelectorAll(".nav-link");
const text = document.querySelector(".multiple-text");

//Preloader
const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}


// active nav tab
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navLink.classList.add("active");
  });
});

// text animation
const textArray = ["Web Designer", "Web Developer"];
let arrayIndex = 1;
function textLoad(){
    setInterval(timer, 4000);
    function timer() {
        if (arrayIndex < textArray.length){
            text.innerHTML =  textArray[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }else{
            arrayIndex = 0;
            text.innerHTML =  textArray[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
    }
};
textLoad();
