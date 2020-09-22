# 반복문을 단순하게 만들어라 - (2)

## forEach() 로 동일한 동작을 적용하라

```js
const names = ['walter', 'white'];
const capitalized = names.forEach(name=> name.toUpperCase());

capitalized;
//undefined
```

forEach() 메서드는 부수 효과 없이는 아무 소용이 없다.

가장 좋은 사용 방식은 함수의 유효범위를 벗어나는 작업이 필요한 경우이다.

```js
sailingClub.forEach(member => sendEmail(member));
```



## 체이닝으로 메서드를 연결하라

```js
sailors
	.filter(sailor=>sailor.active)
	.map(sailor => sailor.email || `${sailor.name}@wiscsail.io`)
	.forEach(sailor => sendEmail(sailor));
```

체이닝의 유일한 단점은 새로운 메서드를 호출할 때마다 반환된 배열 전체를 다시 반복한다는 점이다.



## for in 과 for of 문으로 반복문을 정리하라

for of 문을 사용하면 특수한 객체를 배열로 반환하는 대신, for문과 동일한 개념을 사용하면서 색인에 대한 참조를 제거할 수 있다.

```js
for(const firm of firms){
    const [id,name] = firm;
    if(!isAvailable(id)){
        return `${name}는 사용할 수 없습니다.`;
    }
}
return '모든 회사를 사용할 수 있습니다';
```

for of 문의 장점은 배열메서드를 사용할 때도 컬렉션을 조작할 수 있다는 점이다. 반면, 단점은 예측 가능성이 줄어든다는 점이다.



for in 문은 for of 문과 매우 유사하다. for in 문을 사용할 때는 각 항목을 한 번에 하나씩 받는다.

for of 문과 다르게 값을 받는 것이 아니므로 매번 키를 사용해서 전체 컬렉션을 참조해야한다.

가급적 변수는 const로 선언해서 반복문의 내부에서 사용하도록하자

```js
for (const id in firms){
    if (!isAvailable(parseInt(id, 10))){
        return `${firms[id]}는 사용할 수 없습니다.`;
    }
}
return '모든 회사를 사용할 수 있습니다';
```

