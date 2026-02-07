let form = document.querySelector('.main');
let data = Math.floor((Math.random()*10)+1);
console.log(data);
let input = document.querySelector('#input');
let count=0;
form.addEventListener('submit',(e)=>{
   e.preventDefault();
   let userdata=input.value;
   count++;
   if(userdata==data)
   {
      let button = document.querySelector('.paste');
      let result = document.createElement('h2');
      result.textContent=`Number is ${data} Correct Gauss in ${count} Chanses 👍`;
      result.id="Answer";
      button.append(result);
   }
   form.reset();
})