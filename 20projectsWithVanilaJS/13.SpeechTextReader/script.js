const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
  {
    image: './img/drink.jpg',
    text: '목말라요',
  },
  {
    image: './img/food.jpg',
    text: '배고파요',
  },
  {
    image: './img/tired.jpg',
    text: '졸려요',
  },
  {
    image: './img/hurt.jpg',
    text: '아파요',
  },
  {
    image: './img/happy.jpg',
    text: '행복해요',
  },
  {
    image: './img/angry.jpg',
    text: '화가나요',
  },
  {
    image: './img/sad.jpg',
    text: '슬퍼요',
  },
  {
    image: './img/scared.jpg',
    text: '무서워요',
  },
  {
    image: './img/outside.jpg',
    text: '밖에 나가고 싶어요',
  },
  {
    image: './img/home.jpg',
    text: '집에 가고 싶어요',
  },
  {
    image: './img/school.jpg',
    text: '학교에 가고 싶어요',
  },
  {
    image: './img/grandma.jpg',
    text: '할머니에게 가고 싶어요',
  },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement('div');
  const { image, text } = item;

  box.classList.add('box');
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });

  main.appendChild(box);
}

// Init speech sythth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak Text
function speakText() {
  speechSynthesis.speak(message);
}

// Set Voice
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Toggle text box
toggleBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.toggle('show')
);

// Close button
closeBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.remove('show')
);

// Change voice
voicesSelect.addEventListener('change', setVoice);

// Read text button
readBtn.addEventListener('click', () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();
