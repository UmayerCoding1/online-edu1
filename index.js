const menuBtn =document.querySelector("#menu-btn");
const navbar= document.querySelector(".header .flex .navbar");

menuBtn.onclick = ()=>{
  menuBtn.classList.toggle('fa-xmark');  
  navbar.classList.toggle('active');
};