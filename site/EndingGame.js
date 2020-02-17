//앞으로 추가할 기능 : 목숨, 타이머기능, 초기에 넣을 단어조건
var 단어 = document.getElementById("단어");
var 폼 = document.getElementById("폼");
var 입력창 = document.getElementById("입력창");
var 버튼 = document.getElementById("버튼");
var 입력창2 = document.getElementById("입력창2");
var 버튼2 = document.getElementById("버튼2");
var 결과창 = document.getElementById("결과창");
var 시작화면 = document.getElementById("startMenu");
var 시작버튼 = document.getElementById("myBtn");
var word = document.getElementById("startname");
var Player1 = document.getElementById("usrname");
var Player2 = document.getElementById("usrname2");
var playButton = document.getElementById("play-button");
var game = document.getElementById("game");
var modal = document.getElementById("myModal");
var 플레이어 = document.getElementById("플레이어");
var 플레이어1이름 = document.getElementById("플레이어1");
var 플레이어2이름 = document.getElementById("플레이어2");
var turn = 1;
var 플레이어1;
var 플레이어2;
var 플레이어1공간 = document.getElementById("플레이어1공간");
var 플레이어2공간 = document.getElementById("플레이어2공간");
var 플레이어1목숨;
var 플레이어2목숨;
var 시작목숨 = 3;
var 목숨1 = document.getElementById("목숨1");
var 목숨2 = document.getElementById("목숨2");
시작버튼.addEventListener("click", function(e) {
  $("#myModal").modal();
});

playButton.addEventListener("click", function(e) {
  game.style.display = "block";
  시작화면.style.display = "none";
  단어.textContent = word.value;
  플레이어1 = Player1.value;
  플레이어2 = Player2.value;
  플레이어.textContent = 플레이어1 + "님의 차례입니다.";
  플레이어1이름.textContent = "플레이어1 : " + 플레이어1;
  플레이어2이름.textContent = "플레이어2 : " + 플레이어2;
  플레이어1목숨 = 시작목숨;
  플레이어2목숨 = 시작목숨;
  목숨1만들기(시작목숨);
  목숨2만들기(시작목숨);
  입력창.focus();
});

버튼.addEventListener("click", function 콜백함수() {
  turn++;
  플레이어1공간.classList.add("disabledbutton");
  플레이어2공간.classList.remove("disabledbutton");
  플레이어.textContent = 플레이어2 + "님의 차례입니다.";
  if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
    결과창.textContent = "딩동댕!";
    단어.textContent = 입력창.value;
    입력창.value = "";
    입력창2.focus();
  } else {
    결과창.textContent = "땡!";
    플레이어1목숨--;
    입력창.value = "";
    입력창2.focus();
  }
  목숨1만들기(플레이어1목숨);
  목숨2만들기(플레이어2목숨);
});

버튼2.addEventListener("click", function 콜백함수() {
  turn++;
  플레이어2공간.classList.add("disabledbutton");
  플레이어1공간.classList.remove("disabledbutton");
  플레이어.textContent = 플레이어1 + "님의 차례입니다.";
  if (단어.textContent[단어.textContent.length - 1] === 입력창2.value[0]) {
    결과창.textContent = "딩동댕!";
    단어.textContent = 입력창2.value;
    입력창2.value = "";
    입력창.focus();
  } else {
    결과창.textContent = "땡!";
    플레이어2목숨--;
    입력창2.value = "";
    입력창.focus();
  }
  목숨1만들기(플레이어1목숨);
  목숨2만들기(플레이어2목숨);
});
function enterkey() {
  if (window.event.keyCode === 13) {
    // 엔터키가 눌렸을 때 실행할 내용
    if (turn % 2 == 1) 버튼.click();
    else 버튼2.click();
  }
}

function 목숨1만들기(num) {
  목숨1.innerHTML = "";
  for (var i = 0; i < num; i++) {
    var div = document.createElement("div");
    div.classList.add("목숨");
    목숨1.appendChild(div);
  }
}

function 목숨2만들기(num) {
  목숨2.innerHTML = "";
  for (var i = 0; i < num; i++) {
    var div = document.createElement("img");
    div.classList.add("목숨");
    목숨2.appendChild(div);
  }
}
