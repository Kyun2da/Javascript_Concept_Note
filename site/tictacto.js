var 바디 = document.body;
var 테이블 = document.createElement("table");
var 줄들 = [];
var 칸들 = [];
var 턴 = "X";
var 결과 = document.createElement("div");
var 비동기콜백 = function(이벤트) {
  var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
  var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
  console.log("몇줄", 몇줄, "몇칸", 몇칸);

  if (칸들[몇줄][몇칸].textContent !== "") {
    console.log("빈칸아닙니다");
  } else {
    console.log("빈칸입니다.");
    칸들[몇줄][몇칸].textContent = 턴;
    //세칸 다채워졌나?
    var 다참 = false;
    //가로줄 검사
    if (
      칸들[몇줄][0].textContent === 턴 &&
      칸들[몇줄][1].textContent === 턴 &&
      칸들[몇줄][2].textContent === 턴
    ) {
      다참 = true;
    }
    //세로줄검사
    if (
      칸들[0][몇칸].textContent === 턴 &&
      칸들[1][몇칸].textContent === 턴 &&
      칸들[2][몇칸].textContent === 턴
    ) {
      다참 = true;
    }
    //대각선검사
    if (몇줄 - 몇칸 === 0) {
      if (
        칸들[0][0].textContent === 턴 &&
        칸들[1][1].textContent === 턴 &&
        칸들[2][2].textContent === 턴
      ) {
        다참 = true;
      }
    }
    if (Math.abs(몇줄 - 몇칸) === 2) {
      //여기 부분 대각선 중간을 마지막에 클릭하면 완성되는 조건도 넣어야함
      if (
        칸들[0][2].textContent === 턴 &&
        칸들[1][1].textContent === 턴 &&
        칸들[2][0].textContent === 턴
      ) {
        다참 = true;
      }
    }

    if (다참) {
      결과.textContent = 턴 + "님의 승리!";
      //초기화
      턴 = "X";
      칸들.forEach(function(줄) {
        줄.forEach(function(칸) {
          칸.textContent = "";
        });
      });
    } else {
      if (턴 === "X") {
        턴 = "O";
      } else {
        턴 = "X";
      }
    }
  }
};

for (i = 1; i <= 3; i += 1) {
  var 줄 = document.createElement("tr");
  줄들.push(줄);
  칸들.push([]);
  for (j = 1; j <= 3; j += 1) {
    var 칸 = document.createElement("td");
    칸.addEventListener("click", 비동기콜백);
    칸들[i - 1].push(칸);
    줄.appendChild(칸);
  }
  테이블.appendChild(줄);
}
바디.appendChild(테이블);
바디.appendChild(결과);
console.log(칸들);
