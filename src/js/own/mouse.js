const mouse = ()=>{
    
    const blockX = document.querySelector('.block__X span'),
          blockY = document.querySelector('.block__Y span'),
          wrapper = document.querySelector('.block');


    wrapper.addEventListener('mousemove',function(e){
       let bounds = e.target.getBoundingClientRect();



       console.log(Math.floor( e.clientX) + 'px')
       console.log(Math.floor( e.clientY) + 'px')

       blockX.innerHTML =  Math.floor( e.clientX - bounds.left);
       blockY.innerHTML =  Math.floor( e.clientY - bounds.top);
    })
    




}
export default mouse;