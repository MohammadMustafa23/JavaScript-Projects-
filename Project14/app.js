const paragraphList = [
  {
    text: "The sun rises in the east and sets in the west. Every morning brings new hope and fresh energy. People start their day with plans and goals. A positive mindset helps us achieve success in life.",
  },
  {
    text: "Reading books is a good habit for everyone. Books give us knowledge and improve our thinking skills. They help us learn new words and ideas. Reading daily can make a big difference in life.",
  },
  {
    text: "Technology has changed the way we live. We use mobile phones, computers, and the internet every day. It makes communication faster and easier. However, we should use technology wisely.",
  },
  {
    text: "Exercise is important for a healthy body and mind. Walking, running, or playing sports keeps us active. Healthy food and regular exercise help us stay strong. A healthy lifestyle leads to a happy life.",
  },
  {
    text: "Friendship is one of the most valuable gifts in life. True friends support and understand each other. They share happiness and solve problems together. Good friends make life more enjoyable.",
  },
  {
    text: "Time is very precious and should not be wasted. Once time is gone, it never comes back. Planning our day properly helps us complete our tasks. Good time management leads to success.",
  },
  {
    text: "Nature is full of beauty and wonder. Trees, rivers, mountains, and animals make the world colorful. We should protect nature and keep our environment clean. Caring for nature is our responsibility.",
  },
  {
    text: "Education plays a key role in shaping our future. It helps us gain knowledge and develop skills. Schools and teachers guide us in the right direction. Education opens doors to many opportunities.",
  },
  {
    text: "Hard work is the secret to success. Nothing can be achieved without effort. People who work hard achieve their goals. Determination and patience are important qualities in life.",
  },
  {
    text: "Good manners show respect and kindness. Saying please and thank you makes a big difference. Polite behavior builds strong relationships. Respecting others helps create a peaceful society.",
  },
];

const paragarph = document.querySelector("#paraGraph");
const InputPara = document.querySelector("#inputArea");
const TypingSpeed = document.querySelector("#Speedtype");
const TypingTime = document.querySelector("#SpeedTime");
const TypingAcuracy = document.querySelector("#SpeedAcurarcy");
const RestartButton = document.querySelector("#Rstbutton");
const Startbutton = document.querySelector("#stbutton");

let CurruntPara = "";
let TimeCount = 0;
let isTypingStart = false;
let CorrectCharcter = 0;
let timerId = null;

/* ---------------- START BUTTON ---------------- */

Startbutton.addEventListener("click", () => {
  if (isTypingStart) return; // prevent multiple timers

  // Reset
  TimeCount = 0;
  CorrectCharcter = 0;
  InputPara.value = "";
  TypingTime.textContent = "Time: 0 sec";
  TypingSpeed.textContent = "WPM: 0";
  TypingAcuracy.textContent = "Accuracy: 0%";
  InputPara.disabled = false;
  InputPara.focus();

  // Load random paragraph
  const RandomPara = Math.floor(Math.random() * paragraphList.length);
  CurruntPara = paragraphList[RandomPara].text;
  paragarph.textContent = CurruntPara;

  // Start timer
  timerId = setInterval(() => {
    TimeCount++;
    TypingTime.textContent = `Time: ${TimeCount} sec`;
  }, 1000);

  isTypingStart = true;
});

/* ---------------- INPUT LOGIC ---------------- */

InputPara.addEventListener("input", function () {
  const typedText = InputPara.value;

  // Count correct characters
  CorrectCharcter = 0;
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === CurruntPara[i]) {
      CorrectCharcter++;
    }
  }

  // Accuracy
  let accuracy = 0;
  if (typedText.length > 0) {
    accuracy = (CorrectCharcter / typedText.length) * 100;
  }
  TypingAcuracy.textContent = `Accuracy: ${accuracy.toFixed(2)}%`;

  // WPM
  let wpm = 0;
  if (TimeCount > 0) {
    wpm = typedText.length / 5 / (TimeCount / 60);
  }
  TypingSpeed.textContent = `WPM: ${Math.floor(wpm)}`;

  // Finish condition
  if (typedText.length === CurruntPara.length) {
    clearInterval(timerId);
    isTypingStart = false;
    InputPara.disabled = true;
  }
});

/* ---------------- RESTART BUTTON ---------------- */

RestartButton.addEventListener("click", () => {
  clearInterval(timerId);

  TimeCount = 0;
  CorrectCharcter = 0;
  isTypingStart = false;

  InputPara.value = "";
  InputPara.disabled = true;

  TypingTime.textContent = "Time: 0 sec";
  TypingSpeed.textContent = "WPM: 0";
  TypingAcuracy.textContent = "Accuracy: 0%";

  // Load new paragraph
  const RandomPara = Math.floor(Math.random() * paragraphList.length);
  CurruntPara = paragraphList[RandomPara].text;
  paragarph.textContent = CurruntPara;
});
