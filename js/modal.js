window.addEventListener('click', function(event){
    if(event.target.dataset.action==='info'){
        let cardProdct= event.target.closest('.card__wrapper')
        let modalWindow=cardProdct.querySelector('.modal__window')
    modalWindow.classList.add('visible')

    }
})

window.addEventListener('click', function(event){
    
    if(event.target.dataset.action==='close'){
        console.log('close')
        let modal= event.target.closest('.modal__window')
    modal.classList.remove('visible')

    }
})

