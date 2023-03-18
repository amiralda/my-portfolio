// const toogleButton = document.getElementsByClassName('toogle-button')[0]

// const navbarLinks = document.getElementsByClassName('navbar-links')[0]
// const close = document.getElementsByClassName('closeMenu')[0]
// const menuLinks = document.querySelectorAll('.navbar-links a');
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlayModal= document.getElementsByClassName('overlay-modal')[0]
// const menuButton = document.getElementsByClassName('menu-btn')[0]
// const menuDesktop = document.getElementsByClassName('menu-desktop')[0]



// function click() {
//   overLay.classList.toggle('active');
//   navbarLinks.classList.toggle('active');
// }

//   toogleButton.addEventListener('click', () => {
//   overLay.classList.toggle('active')
//   navbarLinks.classList.toggle('active')
//   document.body.classList.toggle('fixed-screen')
//   })

//   // Add event listener to navbarLinks
//   navbarLinks.addEventListener('click', () => {
//   navbar-links.classList.remove('active')
//   document.body.classList.toggle('fixed-screen')
//   overLay.classList.remove('active')
//   menuLinks.classList.remove('active')
// })

//  // Add event listener to close button
//   close.addEventListener('click', () => {
//   navbarLinks.classList.remove('active')
//   document.body.classList.remove('fixed-screen')
//   overLay.classList.remove('active')
//   menuLinks.classList.remove('active')

//   })



// // Add event listener to each menu link

// menuButton.addEventListener('click', () => {
//     menuDesktop.classList.toggle('active')
// })

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlayModal.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlayModal.classList.remove('active')
}


// overLay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })

// closeModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })


// function closeModal(modal) {
//     if (modal == null) return
//     modal.classList.remove('active')
//     // overLay.classList.remove('active')
// }
