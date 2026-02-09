const GivePass = document.querySelector('.inpt');
const GenrateBtn = document.querySelector('#Gen');

let Password = "";
GenrateBtn.addEventListener('click',(e) => {
    const PasswordLength =  document.querySelector('#Passlen');
    let size = PasswordLength.value; 
    GivePass.value = PasswordGenrate(size);
    Password = GivePass.value;
})

let RandomPassword = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz",
    "0123456789","%&*$#@(:><>?~+-_=}{\|"];

function PasswordGenrate(size){
    let Password = ""
    while(size > Password.length)
    {
        let ind = RandomPassword[Math.floor((Math.random()*RandomPassword.length))];
        Password+=ind.at(Math.floor(Math.random()*ind.length));
    }
    return Password;
}

function Handleclick() {
    const GivePass = document.querySelector(".inpt");
    const copyBtn = document.querySelector("#copybtn");
    const text = GivePass.value;

    if (text === "") {
        alert("No password to copy");
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        // change icon to check
         changebutton();
    }).catch(err => {
        console.error("Copy failed:", err);
    });
}

function changebutton()
{
    const copyBtn = document.querySelector("#copybtn i");
    copyBtn.className =  'fa-solid fa-clipboard-check';
    
    setTimeout(()=>{
        copyBtn.className =  'fa-regular fa-copy';
    },1000)
}


