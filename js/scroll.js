const scrollTo =(section)=>
{
        let objsection=document.querySelector('#'+section);
        objsection.scrollIntoView({behavior:"smooth"})
}