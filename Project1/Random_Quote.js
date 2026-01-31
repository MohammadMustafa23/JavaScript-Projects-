const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Do what you can, with what you have, where you are.",
  "Dream big. Start small. Act now.",
  "Work hard in silence; let your success make the noise.",
  "The best way to predict the future is to create it.",
  "Doubt kills more dreams than failure ever will.",
  "Small steps every day lead to big results.",
  "Don’t stop until you’re proud.",
  "Great things never come from comfort zones.",
  "If you get tired, learn to rest—not quit.",
  "Your only limit is your mind.",
  "Believe you can and you're halfway there.",
  "Every day is a new beginning.",
  "Push yourself, because no one else is going to do it for you.",
  "You become what you believe.",
  "Consistency is more important than perfection.",
  "The harder you work, the luckier you get.",
  "A little progress each day adds up to big results.",
  "Don’t wait for opportunity. Create it.",
  "Focus on progress, not perfection."
];

let count=0;
let found = document.createElement('h1');
let button = document.getElementById("btn");
// for Event On click
button.addEventListener('click',()=>{
    count++;
    let click = Math.floor(Math.random()*20);

    let msg=quotes[click];

    found.textContent=count+ " 👉 " +msg;
    found.id = "evnettriggerd"
    
    found.setAttribute=count;
    button.after(found);
})


