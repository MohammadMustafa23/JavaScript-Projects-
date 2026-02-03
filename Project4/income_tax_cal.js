let form = document.getElementById('action');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let input = document.getElementById('inpt');    
    let val = parseInt(input.value.trim());
    let res = document.getElementById('result'); // Mistake Becase When THe Buttom sumbit automaitc fatched by E  we Not select the Button Eh Select The ans Tag result

    if(val<120000)
    {
         result.textContent=`Your Tax : ${0} Ruppes`
    } else if( val >= 120000 && val <= 160000) {
        // 15% text 16-12 = 4 lakh
        val = val - 120000;
        val = (val * 15)/100;
        result.textContent=`Your Tax : ${val} Ruppes`
    } else if (val > 160000 && val <= 200000) {
        // 20% text 16-20 = 4 lakh
        val = val - 120000;
        let ans = (val * 20)/100;
        result.textContent = `Your Tax : ${ans} Ruppes`
    } else if(val >= 200000) {
        val = val - 120000;
        let ans = (val * 20)/100;
        result.textContent = `Your Tax : ${ans} Ruppes`
    } else {
        result.textContent = `Your Tax : Invalid Amout Enterd `; 
    }
    form.reset();
})

// let form = document.getElementById('action');

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let temp = document.getElementById('inpt');
//     let val = parseInt(temp.value);
//     let res = document.getElementById('result');


//     if(val < 120000)
//     {
//         res.textContent = ` Your Tax : ${0} Ruppes`;
//     } else if( val <= 160000) {
        
//         res.textContent = ` Your Tax : ${0} Ruppes`;
//     } else if (val <= 200000) {
//         res.textContent = ` Your Tax : ${0} Ruppes`;
//     } else if (val > 200000){
//         res.textContent = ` Your Tax : ${0} Ruppes`;
//     } else {
//         res.textContent = `Invalid Amout Enter`;
//     }

//     res.textContent = ` Your Tax : ${val}`;
//     form.reset();
// })