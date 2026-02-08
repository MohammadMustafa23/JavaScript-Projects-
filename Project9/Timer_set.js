let form =document.querySelector('#submit');
let input = document.querySelector('#hours');
let input2 = document.querySelector('#min');
let input3= document.querySelector('#sec');
let result = document.createElement('div');
let stop = document.querySelector('.Stop');  
let btn = document.querySelector('.buttonclass');
let timerId = null;

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    // 🟢 FIX #1 — stop old timer BEFORE starting a new one
    if (timerId !== null) {
        clearInterval(timerId);
    }

    let data = input.value;
    let min = input2.value;
    let sec = input3.value;
    data = timeinsec(data,min,sec);

    // 🟢 FIX #2 — store interval ID in timerId (not new variable)
    timerId = setInterval(() => {
        data--;
        // convert seconds -> h:m:s
        let h = Math.floor(data / 3600);
        let m = Math.floor((data % 3600) / 60);
        let s = data % 60;

        // format to 2 digits
        h = String(h).padStart(2, "0");
        m = String(m).padStart(2, "0");
        s = String(s).padStart(2, "0");

        result.id='timer';
        result.textContent = `${h} (HH)  :${m} (MM) :${s} (SEC)`;

        if (data === 0) {
            clearInterval(timerId);
            timerId = null;
            result.textContent = "Time's up!";
        }

    },1000);

    btn.after(result);
    form.reset();
})
// stop.addEventListener('click', () => {
//     clearInterval(timerId);
//     timerId = null;
// });
// 
function timeinsec (HH,MM,SS){
    HH = Number(HH);
    MM = Number(MM);
    SS = Number(SS);
    return (HH*3600) + (MM*60) + SS;
}

// result.addEventListener('copy',()=>{
//     result.oncopy='👍👌';
// })

