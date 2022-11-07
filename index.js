document.addEventListener("DOMContentLoaded",()=>{

    const input = document.querySelector('.input');
    const d = document.querySelector('.a');

    input.addEventListener('onclick',(e)=>{
        // console.log(e.target.value);
        d.style.display='block';
    })
    
})
