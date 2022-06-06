"use strict"

window.addEventListener('mouseover', function(event){
    if( event.target.dataset.action==='cardWrapper'|| event.relatedTarget.dataset.action==='cardWrapper'){
        console.log(event.target)
        let card=event.target.closest('.card__wrapper')
        console.log(card)
        let cardImg=card.querySelector('.card__img-cover')
        let cardImgBack=card.querySelector('.card__img-back')
        cardImg.style.zIndex='1'
        cardImgBack.style.zIndex='2'
    }   
})
window.addEventListener('mouseout', function(event){
    if(event.target.dataset.action==='cardWrapper'){
        let card=event.target.closest('.card__wrapper')
        console.log(card)
        let cardImg=card.querySelector('.card__img-cover')
        let cardImgBack=card.querySelector('.card__img-back')
        cardImg.style.zIndex='2'
        cardImgBack.style.zIndex='1'
    }
})