let form = document.querySelector('#form');
let Task = document.querySelector('.Task');
let input = document.getElementById('data');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let data = input.value;

    let parent = document.createElement('div');
    parent.id="put";
    let span = document.createElement('span');
    span.textContent=data;
    let delbutton = document.createElement('button');
    delbutton.textContent="Delete";
    let donebutton = document.createElement('button');
    donebutton.textContent="Done";
    parent.append(span,delbutton,donebutton);
    Task.appendChild(parent);
    
    delbutton.addEventListener('click',()=>{
        parent.remove();
    })

    donebutton.addEventListener('click',()=>{
        span.textContent= span.textContent+"  --- > "+"👍";
        delbutton.remove();
        donebutton.remove();
    })

    form.reset();
});







