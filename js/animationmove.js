window.addEventListener('scroll',function()
{
    let imagen=document.querySelector('.main__section-services');
    let content_service=document.querySelector('.services__container-service');
    let conteiner_icon_arrow=document.querySelector('.ico-home__container');
    let content_about_me=document.querySelector('.container__of__about-me-1')
    let about_me=document.querySelector('.main__section-about-me__1');
    let projects=document.querySelector('.projects-1__container-projects');
    let contacts=document.querySelector('.container-contact__containt');
    let altura=window.innerHeight;

    let distancia
    distancia= about_me.getBoundingClientRect().top;
   
    let distancia2
    distancia2= imagen.getBoundingClientRect().top;
    distancia2= content_service.getBoundingClientRect().top;
     let distancia3
    distancia3=projects.getBoundingClientRect().top;
    let distancia4 
    distancia4=contacts.getBoundingClientRect().top;

    if(distancia < altura )
    {
        conteiner_icon_arrow.classList.add('aparece_icon')
       
        content_about_me.classList.add('container-projects__subcontainer__animation');
    }
     
    else{
   
        conteiner_icon_arrow.classList.remove('aparece_icon')
        content_about_me.classList.remove('container-projects__subcontainer__animation');

    }
  
    if( distancia2 < altura  || distancia3 < altura && distancia4 < altura)
    {
    
    content_service.classList.add('aparece_content_service');
    imagen.classList.add('aparece');
    projects.classList.add('container-projects__subcontainer__animation');
    contacts.classList.add('container-projects__subcontainer__animation');
 
    console.log(altura);
    console.log(distancia);
    }
    else
    {
        imagen.classList.remove('aparece');
        content_service.classList.remove('aparece_content_service');
        projects.classList.remove('container-projects__subcontainer__animation');
        contacts.classList.remove('container-projects__subcontainer__animation');
 
    }

    if(  distancia4 < altura)
    {
    
    contacts.classList.add('container-projects__subcontainer__animation');
    console.log(altura);
    console.log(distancia);
    }
    else
    {
       contacts.classList.remove('container-projects__subcontainer__animation');
 
    }


})