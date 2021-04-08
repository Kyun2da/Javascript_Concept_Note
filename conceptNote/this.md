# this

this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기참조 변수이다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.



자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값, 즉 this 바인딩이 동적으로 결정된다.



## 함수 호출방식에 따른 this 바인딩

함수 호출 방식은 크게 4가지가 있다.



#### 1. 일반 함수 호출

기본적으로 this에는 전역 객체가 바인딩된다.

```js
function foo() {
    console.log("foo's this: ", this); // window
    function bar() {
        console.log("bar's this: ", this); // window
    }
    bar();
}
foo();
```



#### 2. 메서드 호출

메서드 내부의 this에는 메서드를 호출한 객체, 즉 메서드를 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩된다. 주의할 것은 메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩된다는 것이다.

```js
const person = {
    name: 'Lee',
    getName() {
        // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
        return this.name;
    }
};

// 메서드 getName을 호출한 객체는 person이다.
console.log(person.getName()); // Lee
```



#### 3. 생성자 함수 호출

생성자 함수 내부의 this에는 생성자 함수가 미래에 생성할 인스턴스가 바인딩된다.

```js
// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);
// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```



#### 4. Function.prototype.apply / call / bind 메서드에 의한 간접 호출

Function.prototype.apply, Function.prototype.call 메서드는 this로 사용할 객체와 인수리스트를 인수로 전달받아 **함수를 호출**한다.

```js
/**
 * 주어진 this 바인딩과 인수 리스트 배열을 사용하여 함수를 호출한다.
 * @param thisArg - this로 사용할 객체
 * @param argsArray - 함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
 * @returns 호출된 함수의 반환값
 */
Function.prototype.apply(thisArg[, argsArray])

/**
 * 주어진 this 바인딩과 ,로 구분된 인수 리스트를 사용하여 함수를 호출한다.
 * @param thisArg - this로 사용할 객체
 * @param arg1, arg2, ... - 함수에게 전달할 인수 리스트
 * @returns 호출된 함수의 반환값
 */
Function.prototype.call (thisArg[, arg1[, arg2[, ...]]])
```

예제

```js
function getThisBinding() {
    console.log(arguments);
    return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
// apply 메서드는 호출할 함수의 인수를 배열로 묶ㅇ ㅓ전달한다.
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
// Arguments(3) [1, 2, 3, callee: f, Symbol(Symbol.iterator): f]
// {a: 1}

// call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding.call(thisArg, 1, 2, 3));
// Arguments(3) [1, 2, 3, callee: f, Symbol(Symbol.iterator): f]
// {a: 1}
```



반면 Function.prototype.bind 메서드는 apply call 메서드와 달리 함수를 호출하지 않고 this로 사용할 객체만 전달한다.



## 이외의 this 바인딩

#### 1. 엄격 모드에서의 this

엄격 모드에서 함수를 실행 시 this는 undefined가 된다. 내부 함수 호출 또한 this가 undefined이다.

이는 의도치 않게 전역객체에 바인딩된 this를 사용하는 것을 막을 수 있다.



#### 2. Arrow 함수 호출시의 this

- Arrow 함수는 함수를 선언할 때 this에 바인딩될 객체가 정적으로 결정된다.
- Arrow 함수의 this는 언제나 상위 스코프의 this를 가리킨다.
  - 즉, `Lexical this`를 가진다.
  - Lexical scope와 비슷한 개념이다.(함수의 상위 스코프를 결정하는 방식)







## 참고

- 코어 자바스크립트
- 자바스크립트 딥다이브
- [iamsjy17님 블로그](https://iamsjy17.github.io/javascript/2019/06/07/js33_15_this.html)





