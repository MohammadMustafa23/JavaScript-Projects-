let innerpart = document.getElementById('action')
innerpart.addEventListener('submit',(e)=>{
    e.preventDefault();
    let boy = document.getElementById('boy');
    let Girl = document.getElementById('girl');
    let l1 = boy.value.trim().length;
    let l2 = Girl.value.trim().length;
    let result = Math.pow(l1+l2,8)%101;
    let ans = document.getElementById('res');
    ans.textContent=`Love Parcentage ❤️ : ${result}%`;
    innerpart.reset();
})