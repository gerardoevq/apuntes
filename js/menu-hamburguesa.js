const hamburguesa=document.querySelector('#hamburguer')
const enlaces=document.querySelector('#nav-links')

//console.log(hamburguesa)
hamburguesa.addEventListener('click',()=>{
    enlaces.classList.toggle('show')
})