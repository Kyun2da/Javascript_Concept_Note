var 단어 = document.getElementById("단어");
var 폼 = document.getElementById("폼");
var 입력창 = document.getElementById("입력창");
var 버튼 = document.getElementById("버튼");
var 결과창 = document.getElementById("결과창");

var word = document.getElementById("startname");
var Player1 = document.getElementById("usrname");
var Player2 = document.getElementById("usrname2");
var playButton = document.getElementById("play-button");
var game = document.getElementsByClassName("game");

$(document).ready(function() {
  $("#myBtn").click(function() {
    $("#myModal").modal();
  });
  $("#play-button").click(function() {
    $("#game").css("display", "block");
  });
});

폼.addEventListener("submit", function 콜백함수(이벤트) {
  이벤트.preventDefault();
});
버튼.addEventListener("click", function 콜백함수() {
  if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
    결과창.textContent = "딩동댕!";
    단어.textContent = 입력창.value;
    입력창.value = "";
    입력창.focus();
  } else {
    결과창.textContent = "땡!";
    입력창.value = "";
    입력창.focus();
  }
});

// playButton.addEventListener("click", function 콜백함수() {
//   game.style.display = "block";
// });
