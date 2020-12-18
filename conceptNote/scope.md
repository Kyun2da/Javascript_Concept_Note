# 스코프(Scope)

스코프(유효범위) 는 모든 프로그래밍 언어의 기본적인 개념중 하나이다.

> **스코프는 참조 대상 식별자(identifier, 변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름)를 찾아내기 위한 규칙이다. 자바스크립트는 이 규칙대로 식별자를 찾는다.**

## 1. 스코프의 구분

자바스크립트에서 스코프를 구분하는 것은 다음과 같이 2가지로 나눌 수 있다.

- 전역 스코프(Global Scope)

- 지역 스코프(Local Scope)

## 2. 자바스크립트 스코프의 특징

대부분의 언어는 **블록 레벨 스코프**를 가지지만 자바스크립트는 **함수레벨 스코프를 따른다**.

※ 여기서 함수레벨 스코프란?

- 함수 코드 블록 내에서 선언된 변수는 함수 코드 블록 내에서만 유효하다는 뜻

단, var 대신 let을 쓰면 블록레벨 스코프를 자바스크립트에서 사용 가능하다.

아래의 코드를 보고 스코프를 이해할 수 있다면 넘어가면 된다

```javascript
var global = 'global';

function foo() {
  var local = 'local';
  console.log(global);
  console.log(local);
}
foo();

console.log(global);
console.log(local); // Uncaught ReferenceError: local is not defined
```

