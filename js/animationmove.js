window.addEventListener('scroll',function()
{
    let imagen=document.querySelector('.main__section-services');
    let content_service=document.querySelector('.services__container-service');
    let conteiner_icon_arrow=document.querySelector('.ico-home__container');
    let about_me=document.querySelector('.main__section-about-me__1');
    let altura=window.innerHeight;
  
    let distancia
    distancia= imagen.getBoundingClientRect().top;
    distancia= content_service.getBoundingClientRect().top;
    let distancia2 
    distancia2= about_me.getBoundingClientRect().top;

    if(distancia < altura & distancia2 < altura )
    {
        
        content_service.classList.add('aparece_content_service');
        imagen.classList.add('aparece');
        conteiner_icon_arrow.classList.add('aparece_icon');

        console.log(altura);
        console.log(distancia);
    }
   
    else{
        imagen.classList.remove('aparece');
        content_service.classList.remove('aparece_content_service');
        conteiner_icon_arrow.classList.remove('aparece_icon')

     
    }
   
})