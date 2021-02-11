const msgEl = document.getElementById('msg');

const randomNum = getRandomNubmer();
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.lang = 'en-US';

recognition.start();

function onSpeak(e) {
  const msg = e.results[0][0].transcript;
  console.log(msg);
  checkNumber(msg);
}

function writeMessage(msg) {
  msgEl.innerHTML = `
        <div>You said : </div>
        <span class="box">${msg}</span>
    `;
}

function checkNumber(msg) {
  const num = +msg;

  if (Number.isNaN(num)) {
    msgEl.innerHTML = '<div>숫자가 아닙니다.</div>';
    return;
  }

  if (num > 100 || num < 1) {
    msgEl.innerHTML = '<div>숫자는 1부터 100사이여야 합니다.</div>';
    return;
  }

  if (num === randomNum) {
    document.body.innerHTML = `
        <h2>축하합니다. 숫자를 맞히셨습니다!</h2>
        <button id="play-again">다시하기</button>
      `;
  } else if (num > randomNum) {
    msgEl.innerHTML = '<div>더 낮습니다</div>';
  } else {
    msgEl.innerHTML = '<div>더 높습니다.</div>';
  }
}

function getRandomNubmer() {
  return Math.floor(Math.random() * 100) + 1;
}

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (e) => {
  if (e.target.id == 'play-again') {
    window.location.reload();
  }
});
