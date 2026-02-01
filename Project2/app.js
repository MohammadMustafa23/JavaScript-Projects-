let Green = document.getElementById('first');
let Yellow = document.getElementById('second');
let Blue = document.getElementById('third');
let Orange = document.getElementById('fourth');
let Black = document.getElementById('fifth');

Green.addEventListener('click',()=>{
    document.body.style.backgroundColor='green';
})
Blue.addEventListener('click',()=>{
    document.body.style.backgroundColor='blue';
})
Yellow.addEventListener('click',()=>{
    document.body.style.backgroundColor='yellow';
})
Orange.addEventListener('click',()=>{
    document.body.style.backgroundColor='orange';
})
Black.addEventListener('click',()=>{
    document.body.style.backgroundColor='black';
})

