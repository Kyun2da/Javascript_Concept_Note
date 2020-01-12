# JavaScript 모르는 내용 정리-01

### 익명 함수

```javascript
<script>
            var 함수 = function(){
                var output = prompt('숫자를 입력해주세요', '숫자');
                alert (output);
            };
            
            함수();
</script>
```

##### 웹 브라우저는 script 태그 내부의 내용을 한 줄씩 읽기 전에 선언적 함수부터 읽는다.

```javascript
<script>
    함수();
	function 함수() { alert('함수 A'); }
	function 함수() { alert('함수 B'); }
</script>
```

##### 위와 같은 코드는 에러가 나지않고 선언적 함수부터 읽기 때문에 2 -> 3 -> 1 순서로 실행된다.

### 클로저

```javascript
<script>
            //함수를 선언합니다.
            function test(name) {
                var output = 'Hello ' + name + ' .. !';
            }

            //출력합니다.
            alert(output);
</script>
```

##### 위와 같이 코드를 짜면 에러가 난다. 지역변수이므로 함수 외부에서 사용할 수 없기 때문이다. 따라서 이럴땐 클로저를 쓴다

```javascript
<script>
            //함수를 선언합니다.
            function test(name) {
                var output = 'Hello ' + name + ' .. !';
                return function(){
                    alert(output);
                };
            }

            //출력합니다.
            alert('JavaScript');
</script>
```

#####  이렇게 지역 변수를 남겨두는 현상을 클로저라고 부르기도 하고, 함수 test() 내부의 변수들이 살아있는 것이므로 test() 함수로 생성된 공간을 클로저라고 부르기도 한다.

### 타이머 함수

| 메서드 이름                        | 설명                                                |
| ---------------------------------- | --------------------------------------------------- |
| setTimeout(function, millisecond)  | 일정 시간 후 함수를 한 번 실행합니다.               |
| setInterval(function, millisecond) | 일정 시간마다 함수를 반복해서 실행합니다.           |
| clearTimeout(id)                   | 일정 시간 후 함수를 한 번 실행하는 것을 중지합니다. |
| clearInterval(id)                  | 일정 시간마다 함수를 반복하는 것을 중단합니다.      |

### 자바스크립트의 실행 순서

```javascript
<script>
	alert('A');
	setTimeout(function (){
		alert('B');
	})
	alert('C');
</script>
```

##### 이렇게 실행하면 A -> C -> B 순서로 출력이 된다.