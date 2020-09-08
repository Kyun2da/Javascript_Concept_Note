# 배열로 데이터 컬렉션을 관리하라



## Includes()로 존재여부를 확인하라

```js
const sections = ['shipping'];

function displayShipping(sections){
    if(sections.indexOf('shipping')){
        return true;
    }
    return false;
}
```

위의 코드에서 shipping의 인덱스가 0이라면 if문은 거짓이 되어 false를 반환하기 때문에 올바른 조건문이 아니다. 따라서 다음과 같이 변경할 수 있다.

```js
const sections = ['contact', 'shipping'];

function displayShipping(sections){
    return sections.indexOf('shipping') > -1;
}
```

하지만 위의 코드 또한 가장 간단한 코드는 아니다. **includes()**를 사용하면 위의 코드를 간단하게 변경할 수 있다.

```js
const sections = ['contact', 'shipping'];

function displayShipping(sections){
    return sections.includes('shipping');
}
```



## 펼침 연산자로 배열을 본떠라

```js
//배열에서 항목을 제거하는 코드
function removeItem(items, removable){
    const updated = [];
    for(let i=0; i<items.length; i++){
        if(items[i]!==removable){
            updated.push(items[i]);
        }
    }
    return updated;
}
```

위의 코드는 items의 배열에 removable을 제외한 값을 넣는 방식이다. 하지만 반복문이 있어서 그리 좋은 코드는 아니다. 혹시 splice를 쓰는가? 그렇다면 다음 코드를 보자

```js
function removeItem(items, removable){
    const index = items.indexOf(removable);
    items.splice(index, 1);
    return items;
}
```

위의 코드는 꽤나 간단하다 하지만 단점은 splice가 원본 배열을 조작한다는 점이다. 다른 대안 중 하나는 **slice** 메서드를 사용하는 것이다. 다음 코드를 보자

```js
function removeItem(items, removable){
    const index = items.indexOf(removable);
    return items.slice(0, index).concat(items.slice(index + 1));
}
```

하지만 무엇이 반환되는지 직관적으로 보기 어렵다. 펼침 연산자를 쓰면 좀 더 직관적인 코딩이 가능하다.

```js
function removeItem(items, removable){
    const index = items.indexOf(removable);
    return [...items.slice(0,index), ...items.slice(index+1)];
}
```



또한 스프레드 연산자는 함수의 매개변수 목록을 받을 때에도 쓰일 수 있다. 다음의 예제를 보자.

```js
const book = ['Reasons and Persons', 'Derek Parfit', 19.99]
function formatBook(title, author, price){
    return `${title} by ${author} $${price}`;
}
```

우리는 보통 함수를 적을 때 다음과 같이 작성할 것이다.

```js
formatBook(book[0], book[1], book[2]);
```

하지만 이를 스프레드 연산자로 간단하게 변경이 가능하다.

```js
formatBook(...book);
```



## push() 메서드 대신 펼침 연산자로 원본 변경을 피하라



```js
function addGift(cart){
	if(cart.length > 2){
        return [...cart, reward];
    }
    return cart;
}

function summarizeCartSpread(cart){
    const cartWithReward = addGift(cart);
    const discountable = cart.filter(item=>item.discount);
    if(discountable.length>1){
        return {
            error: '할인 상품은 하나만 주문할 수 있습니다.';
        };
    }
    return {
        discounts: discountable.length;
        items: cartWithReward.length;
        cart: cartWithReward,
    }
}
```

위와 같이 하면 새로운 배열을 생성하기 때문에 원본 배열을 변경할 가능성은 전혀 없다.



## 펼침 연산자로 정렬에 의한 혼란을 피하라

배열을 여러 번 정렬해도 항상 같은 결과가 나오게 펼침 연산자를 사용하는 방법을 알아보자.

```js
const staff = [
    {
        name:'Joe',
        years: 10,
    },
    {
        name: 'Theo',
        years: 5,
    },
    {
        name: 'Dyan',
        years: 10,
    },
];
```

데이터가 다음과 같다.



```js
function sortByYears(a,b) {
    if (a.years === b.years){
        return 0;
    }
    return a.years - b.years;
}

function sortByName = (a,b) => {
    if (a.name===b.name){
        return 0;
    }
    return a.name > b.name ? 1 : -1
}
```

정렬함수는 다음과 같다.

근속 연수에 따라 정렬시키면 데이터는 Theo, Joe, Dyan순일 것이다.

이번에는 이름 순으로 정렬을 해보면 Dyan, Joe, Theo 순일 것이다.

하지만 여기서 다시 근속연수에 따라 정렬을 하면 Theo, Dyan, Joe의 순서가 된다. 이에 대한 정렬 순서를 항상 유지시키기 위해 펼침연산자를 사용한다.



```js
[...staff].sort(sortByYears); 
```



