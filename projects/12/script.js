// const active = document.querySelector('.faq')
// const open = document.querySelector('.fa-chevron-down')
// const close = document.querySelector('.fa-times')

// open.addEventListener('click', () => active.classList.add('active'))
// close.addEventListener('click', () => active.classList.remove('active'))

// Above was my attempt which worked for the first box and no other I need to learn about loops

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
//The alternative brings in all the faq toggles and checks either
//the chevron or cross are clicked in discriminently and either 
//removes the active class or adds it.