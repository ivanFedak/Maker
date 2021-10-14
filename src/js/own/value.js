const value = ()=>{
    

    const input = document.querySelector('.value__input'),
          btn = document.querySelector('.value__btn'),
          result = document.querySelector('.value__result');


          
    function empty(e){
        if(input.value === ''){
            result.textContent = 'Write something in area';
        }
    } 



    btn.addEventListener('click',function(e){
        result.textContent = input.value.split("").reverse().join("");
        empty();
    })

    
    input.addEventListener('keydown', function(e){
        console.log(e.code , e.key)
        if(e.code == 'Enter'){
            result.textContent = input.value.split("").reverse().join("");
            empty();
        }
        if(e.code == 'Delete'){
            input.value = ''
            result.textContent = 'Write something in area';
        }
    })

    input.addEventListener('input',function(e){
        empty();
    })
    
    

}
export default value;