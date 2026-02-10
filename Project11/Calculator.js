let buttons = document.querySelectorAll('button');
let buttonArray = Array.from(buttons);
let display = document.querySelector('#input');
let Experession = '';

buttonArray.forEach(value =>{
    value.addEventListener('click',(e)=>{
        if(e.target.textContent == 'BC')
        {
            Experession = Experession.substring(0,Experession.length-1);
            display.value=Experession;
        } else if(e.target.textContent == 'C')  {
            Experession='';
            display.value=Experession;
        }  else if(e.target.innerHTML == '=') {
             Experession= eval(Experession);
             display.value=Experession;
        } else {
           Experession+=e.target.innerHTML;
           display.value=Experession;
        }
    });
});


