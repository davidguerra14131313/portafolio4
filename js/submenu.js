let bars =document.querySelector('.container-line--bar');
let submenu1=document.querySelector('.container-line--home');
let submenu2=document.querySelector('.container-line--about-me');
let submenu3=document.querySelector('.container-line--projects');
let submenu4=document.querySelector('.container-line--contact');
let abierto= true;
const mostrarsubmenu=()=>
{
    if(abierto)
    {
        submenu1.style.width="170px";
        submenu2.style.width="170px";
        submenu3.style.width="170px";
        submenu4.style.width="170px";
        abierto=false
    }
    else{
        submenu1.style.width="0px";
        submenu2.style.width="0px";
        submenu3.style.width="0px";
        submenu4.style.width="0px";
        abierto=true
    }
}

bars.addEventListener('click',mostrarsubmenu )
