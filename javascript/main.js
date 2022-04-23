var open = document.getElementById('open');
var navlinks = document.querySelector('.navlinks');

open.addEventListener('click', ()=>{
    open.classList.toggle('fa-times');
    navlinks.classList.toggle('active');
})
navlinks.addEventListener('click', ()=>{
    open.classList.toggle('fa-bar');
    navlinks.classList.remove('active');
})




 