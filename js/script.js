window.onload = function() {
const hamburger=document.getElementById('hamburger');

hamburger.onclick=function(){
let topNav=document.getElementById('myTopnav');
if(topNav.className === 'responsive'){
    topNav.className='';
} else{
    topNav.className='responsive';
}
}
const menuList=document.querySelectorAll('.menu-element');
//приходим циклом по найденым элементам
menuList.forEach(function(element){
    //каждому элементу создаём обработчик события "клик мыши"
    element.addEventListener('click',function(event){
        //считываем атрибут дата у элемента,по которому был произведён щелчок
        const elementLink=element.dataset.link;

        //проверяем, есть ли альтернативная ссылка и тогда выполняем дальше 
        if(elementLink){
            //прерываем стандратное поведение ссылки
        event.preventDefault();
        //плавно прокручиваем страницу к искомому блоку
        document.getElementById(elementLink).scrollIntoView({behavior:'smooth'});
        }
        //иначе ничего не делаем
    });
});
}
