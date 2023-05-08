// Nav bar function

let ham = document.querySelector('.hamburger');
let navLinks = document.getElementById('nav-links');
let links = document.querySelectorAll('.links');

// add the class hide and rotate when click the hamburguer
ham.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
    ham.classList.toggle('lines-rotate');
})

// use a forr loop for hidding the links when one is clicked

for (let i = 0; i < links.length; i ++) {
    links[i].addEventListener('click', () => {
        navLinks.classList.toggle('hide');
    })
}