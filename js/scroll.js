const scrollTo =(section)=>
{
        let objsection=document.querySelector('#'+section);
        objsection.scrollIntoView({behavior:"smooth"})
}
const scrollTo_home =()=>
{
        let objsection = document.querySelector('#cabecera');
        objsection.scrollIntoView({behavior:"smooth"})
}