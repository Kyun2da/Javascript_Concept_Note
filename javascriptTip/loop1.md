# 반복문을 단순하게 만들어라 - (1)

## 화살표 함수로 반복문을 단순하게 만들어라

먼저 일반적인 함수를 화살표 함수로 바꾸는 방법을 알아보자

Before:

```js
function key() {
	return 'abc123';
}
```

After:

```js
const key = () => {
    return 'abc123';
}
```

매개변수가 두개 이상인 경우를 생각해 보자

Before:

```js
function greet(first, last){
    return `안녕하세요, ${capitalize(first)} ${capitalize(last)}님`;
}
```

After:

```js
const greet = (first, last) => {
    return `안녕하세요, ${capitalize(first)} ${capitalize(last)}님`;
}
```



## 배열 메서드로 반복문을 짧게 작성하라

for 문이 늘어져 있는 코드를 살펴보자 물론 for문이 안좋다고 하는 것이 아니다.

```js
const prices = ['1.0', 'negotiable', '2.15'];

const formattedPrices = [];
for(let i = 0; i<prices.length; i++){
    const price = parseFloat(prices[i]);
    if(price){
        formattedPrices.push(price);
    }
}
```

이 함수를 간결하게 바꿔보자

```js
const price = ['1.0', 'negotiable', '2.15'];
const formattedPrices = prices.map(price=>parseFloat(price))
// [1.0, NaN, 2.15]
.filter(price=>price);
// [1.0, 2.15]
```



##  map() 메서드로 비슷한 길이의 배열을 생성하라

Before:

```js
const instruments = [];
for(let i = 0; i<band.length; i++){
    const instrument = band[i].instrument;
    instruments.push(instrument);
}
```

After:

```js
const instruments = band.map(member => member.instrument)
```



## filter() 와 find()로 데이터의 부분집합을 생성하라

Before:

```js
const daves = [];
for(let i = 0; i< team.length; i++){
    if(team[i].match(/Dav/)){
        daves.push(team[i]);
    }
}
```

After:

```js
const daves = team.filter(member=>member.match(/Dav/));
```

Find

Before:

```js
let memorialInstructor;
for(let i = 0; i < instructors.length; i++){
    if(instructors[i].libraries.includes('기념 도서관')){
        memorialInstructor = instructors[i];
        break;
    }
}
```

After:

```js
const librarian = instructors.find(instructor=>{
	return instructor.libraries.includes('기념 도서관');
});
```

