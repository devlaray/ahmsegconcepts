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

var text = document.querySelector('.text');
window.addEventListener('scroll', function(){
    text.classList.toggle('remove', window.scrollY >0);
})




 