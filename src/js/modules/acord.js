const acord = ()=>{
    

    const btns = document.querySelectorAll('.item-footer__title'),
          list = document.querySelectorAll('.item-footer__body');



    btns.forEach( (item, i)=>{
        item.addEventListener('click', function(e){
            item.classList.toggle('item-footer__title_active');
            list[i].classList.toggle('item-footer__body_active')
        })
    })

}
export default acord;