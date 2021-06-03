let bars =document.querySelector('.container-line--bar');
let submenu1=document.querySelector('.container-line--home');
let submenu2=document.querySelector('.container-line--about-me');
let submenu3=document.querySelector('.container-line--projects');
let submenu4=document.querySelector('.container-line--contact');
let contenedor_submenu=document.querySelector('.nav__list__container')
let abierto= true;
const mostrarsubmenu=()=>
{
    if(abierto)
    {   
        bars.style.background="black";
        bars.style.outline="100px";
        bars.style.borderRadius="5px";
        bars.style.padding="5px ";
        bars.style.fontSize="25px";
        bars.style.color="white";
        submenu1.style.width="170px";
        submenu2.style.width="170px";
        submenu3.style.width="170px";
        submenu4.style.width="170px";
        contenedor_submenu.style.backgroundColor="#599797";
        abierto=false
    }
    else{
        bars.style.background="none";
        bars.style.outline="100px";
        bars.style.fontSize ="2.3em";
        bars.style.color="white";
        submenu1.style.width="0px";
        submenu2.style.width="0px";
        submenu3.style.width="0px";
        submenu4.style.width="0px";
        contenedor_submenu.style.backgroundColor="";        
        abierto=true
    }
}
bars.addEventListener('click',mostrarsubmenu );

const  res=()=>{
    if(screen.width > 798)
    {
        submenu1.style.removeProperty('overflow');
        submenu1.style.removeProperty('width');
        submenu2.style.removeProperty('width');
        submenu3.style.removeProperty('width');
        submenu4.style.removeProperty('width');
        contenedor_submenu.style.removeProperty('background-color');
    }
}

window.addEventListener('resize', res);