let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let fechar = document.getElementById('btn-fechar')

btnMenu.addEventListener('click', () => {
    menu.classList.add('aberto')
})


menu.addEventListener('click', () => {
    menu.classList.remove('aberto')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('aberto')
})
fechar.addEventListener('click', () => {
    menu.classList.remove('aberto')
})



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });