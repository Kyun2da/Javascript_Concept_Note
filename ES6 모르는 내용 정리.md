# ES6 내용 정리

### let과 const

| 키워드 | 구분 | 선언 위치   | 재선언 |
| ------ | ---- | ----------- | ------ |
| var    | 변수 | 전역 스코프 | 가능   |
| let    | 변수 | 해당 스코프 | 불가능 |
| const  | 상수 | 해당 스코프 | 불가능 |

### for of 반복문

원래의 for in 반복문 예시

```javascript
<script>
    var array = [1, 2, 3, 4];
	for (var i in array) {
        alert(i + "번째 요소는 " + array[i] + "입니다.");
    }
</script>
```

바뀐 for of 반복문 예시

```javascript
<script>
    let i =0;
	for (const element of [1, 2, 3, 4]) {
        alert(`${i}번째 요소는 ${element}입니다.`);
        i++;
    }
</script>
```

### 화살표 함수

```javascript
<script>
            //함수를 선언합니다.
            const multiply = (a, b) => a * b;
            alert(multiply(1, 2));
            alert(multiply(3, 4));
</script>
```

### 전개 연산자

##### 전개 연산자를 사용하지 않았을 때

```javascript
<script>
	function test() {
		alert(arguments[0]);
		alert(arguments[1]);
		alert(arguments[2]);
	}
	
	test(1, 2, 3);
</script>

```

##### 전개 연산자를 사용했을 때

```
<script>
	function test(...numbers) {
		alert(numbers[0]);
		alert(numbers[1]);
		alert(numbers[2]);
	}
	
	test(1, 2, 3);
</script>
```

##### 전개 연산자를 사용한 배열 복제

```javascript
//배열을 선언
const originalArray = [1, 2, 3, 4, 5];

//배열을 복제
const newArray = [...originalArray];
```

##### 전개 연산자를 사용한 배열 병합

```javascript
//배열을 선언
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [52, 273, 103, 32, 57];

//배열을 병합
const newArray = [...arrayA, ...arrayB];
alert(newArray);
```

