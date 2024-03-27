let counter=document.querySelector('.headingcounter')
let btns=document.querySelectorAll('.btn')
let number=0
counter.innerHTML=number
btns.forEach((items)=>
{
    items.addEventListener(('click'),()=>
    {
        if(items.innerHTML==='Decrease')
        {
            number --
            counter.innerHTML=number
        }
        else  if(items.innerHTML==='Reset')
        {
            number=0
            counter.innerHTML=number
        }
        else
        {
            number++
            counter.innerHTML=number
        }
    })
})