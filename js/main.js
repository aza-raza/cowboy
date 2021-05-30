let mainNav = document.querySelector('.main-nav');
//let logo = document.querySelector('.logo');
let hiddenNav = document.querySelector('.hidden-nav');
let btnsNav = document.querySelector('.btns-nav');
let g = document.querySelector('g');
let lastScroll = 0;

window.addEventListener('scroll', ()=>{
    let scrolled = window.pageYOffset;
    if(scrolled > 300){
        hiddenNav.classList.add('hidden'); //1
        btnsNav.classList.remove('hidden');
        //g.classList.add('no-letters');
        g.classList.add('active'); //4

        mainNav.addEventListener('mouseover', ()=>{  //2
            mainNav.classList.add('active');
        });
        mainNav.addEventListener('mouseout', ()=>{ //2
            mainNav.classList.remove('active');
        });
    }
    else{
        hiddenNav.classList.remove('hidden'); //1
        btnsNav.classList.add('hidden');
        //g.classList.remove('no-letters');
        g.classList.remove('active'); //4
    }

    if(scrolled > lastScroll){
        hiddenNav.classList.add('hidden'); //1
        mainNav.classList.remove('active'); //3
    }
    else{
        hiddenNav.classList.remove('hidden'); //1
        mainNav.classList.add('active'); //3
    }
    lastScroll = scrolled; //1
});