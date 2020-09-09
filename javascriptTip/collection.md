# 특수한 컬렉션을 이용해 코드 명료성을 극대화하라



## 객체를 이용해 정적인 키-값을 탐색하라

```js
const colors = ['#d10202', '#19d836', '#0e33d8']
```

위와 같이 쓴다면 각 숫자가 어느 색깔을 의미하는지 알기 힘들다 따라서 정적인 값을 활용한다.

```js
const colors = {
    red: '#d10202',
    green: '#19d836',
    blue: '#0e33d8',
}
```



## Object.assign()으로 조작없이 객체를 생성하라

ES6는 Object.assign()을 새롭게 추가해 다른 객체의 키-값으로 객체의 필드를 생성하고 갱신할 수 있도록 했습니다.

즉, Object.assign()을 이용하면 다른 객체의 속성을 이용해서 객체를 갱신할 수 있습니다.

```js
const defaults = {
	author: '',
    title: '',
    year: 2017,
    rating: null,
};
const book = {
    author: 'Joe Morgan',
    title: 'Simplifying JavaScript',
}
const updated = Object.assign({}, defaults, book);
```

이렇게 맨 앞에 빈 객체를 넣으면 빈 객체에 새로운 값이 갱신되어 반환되어 원본 객체에는 영향을 끼치지 않으면서 반환할 수 있다.

하지만 중첩된 객체에서는 이마저도 통하지 않는데 이럴때는  좀더 복잡한 방식으로 Object.assign()을 사용해야한다.

```js
const employee2 = Object.assign(
	{},
    defaultEmployee,
    {
        name: Object.assign({}, defaultEmployee.name),
    },
);
export { defaults }
```



## 객체 펼침 연산자로 정보를 갱신하라

Object.assign()의 이점을 객체 펼침 연산자의 간단한 문법으로 대체하는 방법을 살펴보자

```js
const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit',
};
const update = { ...book, title: 'Reasons & Persons'};
// { title: 'Reasons & Persons', author: 'Derek Parfit'}
```

역시 중첩된 객체를 변경할 때도 Object.assign()과 동일한 문제가 발생한다. 하지만 Object.assign보다는 좀더 간단하게 바꿀 수 있다.

```js
const employee = {
    ...defaultEmployee,
    name: {
        ...defaultEmployee.name,
    },
};
```



## 맵으로 명확하게 키-값 데이터를 갱신하라

```js
const dogs = [
    {
        이름: '맥스',
        크기: '소형견',
        견종: '보스턴테리어',
        색상: '검정색',
    },
    {
        이름: '도니',
        크기: '대형견',
        견종: '래브라도레트리버',
        색상: '검정색',
    },
    {
        이름: '섀도',
        크기: '중형견',
        견종: '래브라도레트리버',
        색상: '갈색',
    },
]
```

이러한 데이터가 있다고 가정해보자

보통

```js
let filters = {};
```

이런 객체를 선언해서 위의 데이터를 제어할땐,

```js
function addFilters(filters, key, value){
    filters[key] = value;
}
function deleteFilters(filters, key){
    delete filters[key];
}
function clearFilters(filters){
    filters = {};
    return filters;
}
```

로 제어할 지도 모른다 하지만 모든 함수에 다른 세 가지 패러다임을 적용하기 때문에 그리 좋은 동작방법은 아니다. 이를 개선하기 위해 **map**을 사용한다.

```js
let filters = new Map();
```

```js
filters.set('견종', '래브라도레트리버');
filters.get('견종');
filters.delete('견종');
filters.clear()
```

위와 같이 쓸 수 있고 이 메서드를 활용하면 함수를 변경할 수 있다.

```js
const petFilters = new Map();
function addFilters(filters, key, value){
    filters.set(key, value);
}
function deleteFilters(filters,key){
    filters.delete(key);
}
function clearFilters(filters){
    filters.clear();
}
```



## 맵과 펼침 연산자로 키-값 데이터를 순회하라

```js
function getSortedAppliedFilters(filters){
	const applied = [...filters]
    	.sort(sortByKey)
    	.map(([key,value])=>{
            return `${key}:${value}`;
        })
    	.join(', ');
    return `선택한 조건은 ${applied} 입니다.`;
}
```

위의 코드를 단계별로 정리하면 다음과 같다.

1. 맵을 배열로 반환한다.
2. 배열을 정렬한다.
3. 배열에 담긴 키-값 쌍을 '키:값' 형식의 문자열로 변환한다.
4. 배열의 항목을 연결해서 문자열을 만든다.
5. 템플릿 리터럴을 이용해서 다른 정보와 함께 문자열로 병합한다.





