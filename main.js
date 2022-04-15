const btn = document.getElementById('btn')
const dupa = document.querySelector('.image')

alert('Кохана duckmetra, він просто соромиться зізнатись');
btn.addEventListener('click', () => {
  dupa.classList.add('show')
})

window.onunload = function () { return confirm('Ви хочете покинути сайт?') }
window.onbeforeunload = function () { return confirm('Точно хотите вийти?') }