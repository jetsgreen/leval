toggleButton = document.getElementsByClassName('toggle-button')[0];
navbarLinks = document.getElementsByClassName('navbar-links')[0];


toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
} )

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})