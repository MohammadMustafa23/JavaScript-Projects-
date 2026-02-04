let temp = document.getElementById('main');
setInterval(()=>{
    let time = new Date();
   temp.textContent=time.toLocaleTimeString();
},1000)