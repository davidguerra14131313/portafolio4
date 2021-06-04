window.addEventListener('scroll',function()
{
    let imagen=document.querySelector('.main__section-services')
    console.log("hola mundo")
    let altura=window.innerHeight;
    
    let distancia = imagen.getBoundingClientRect().top;
    console.log(altura)
    console.log(distancia)

    if(distancia <=altura)
    {
        imagen.classList.add('aparece');
    }
    else{
        imagen.classList.remove('aparece');
    }
})