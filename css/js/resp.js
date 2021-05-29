burgur = document.querySelector('.burgur')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burgur.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})