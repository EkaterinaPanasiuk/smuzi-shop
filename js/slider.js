let images= document.querySelectorAll('.slider__img')
//коллекция картинок слайдера
let sliderLine=document.querySelector('.slider__line')
//ряд картинок слайдера
let count=0;
let width;
let number=(images.length-1)
//функция перерасчета слайдера в зависимости от ширины экрана
function init(){
//вычисляем сколько занимает наш слайдер в окне экрана
width=document.querySelector('.slider').offsetWidth;
//ряду картинок задаем ширину  зависимую от размера экрана
sliderLine.style.width=width * images.length + 'px';
//каждой картинке присваиваем ширину равную ширине слайдера
images.forEach(function(item){
    item.style.width=width + 'px'
    //высота авто
   item.style.height='auto'
})
rollslider()
}


let btnLeft=document.querySelector('.slider__button-left')
btnLeft.addEventListener('click', function(){
    count=count- width  
    if (count<=0){count=(width * number)}
rollslider()
})

let btnRight=document.querySelector('.slider__button-right')
btnRight.addEventListener('click',function(){
    count=count+ width  
    if (count>(width * number)){count=0}
rollslider()
})
function rollslider(){
    sliderLine.style.left=-count+'px'
 }
//событие изменения экрана заново запускае функцию перерасчета картинок
window.addEventListener('resize', init)
init()