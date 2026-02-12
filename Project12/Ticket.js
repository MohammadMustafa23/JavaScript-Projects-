const submitbutton = document.querySelector("#btn");
const TicketSelect = document.querySelector('.main_part');
const TicketScreen = document.querySelector('.Ticket');
const RandomCode = document.querySelector('.code');

submitbutton.addEventListener("click", () => {
  const Source = document.querySelector('#Source');
  const Destination = document.querySelector('#Destination');
  const DestinationStation = document.querySelector('#StationD');  
  const Sourcestation = document.querySelector("#StationS");
  const Source_value = Sourcestation.value;
  const Det_value = DestinationStation.value;
  console.log(Source_value,"  ",Det_value);
  TicketSelect.style.display = 'none';
  TicketScreen.style.display = 'inline';
  submitbutton.style.display = 'none';
  Source.textContent = `Source: ${Source_value}`;
  Destination.textContent = `Destination: ${Det_value}`;
  RandomCode.textContent = getRandomId();
  changedata();
});



function getRandomId()
{
    let varibale = "ABCDEFGHIJOPQR34SKLM1289NOPXMIZSSZZ67V";
    let id = "";
    for(let i=1; i<=16; i++)
    {
        let Char = Math.floor(Math.random()*varibale.length);
        id+=varibale.at(Char);
    }
    return id;
}

function changedata()
{
   const date = document.querySelector('#date');
   let time = new Date;
   time.toDateString();
   date.textContent=time;
}