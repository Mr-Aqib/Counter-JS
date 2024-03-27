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
            if(number<0)
            {
                counter.innerHTML=number
                counter.style.color='red'
            }
            else
            {
             
                
                counter.innerHTML=number
            }
           
          
        }
        else  if(items.innerHTML==='Reset')
        {
            number=0
            counter.innerHTML=number
            counter.style.color='yellow'
        }
        else
        {
            number++
            
            counter.innerHTML=number
            counter.style.color='blue'
        }
    })
})