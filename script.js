window.addEventListener('scroll',(e)=>{
    let header=document.querySelector('header');
    let logo=document.querySelector('.logo');

    if(window.scrollY!=0){
        setTimeout(()=>{
            header.classList.remove('header');
            header.classList.add('scroll');
            logo.classList.add('scroll');
        },100)
        
    }else{
       
       setTimeout(()=>{
            header.classList.add('header');
            header.classList.remove('scroll');
            logo.classList.remove('scroll');
       },100)
        
    }

    
})