# 변수 할당으로 의도를 표현하라

```javascript
const taxRate = 0.1;
const total = 100 + (100 * taxRate);
// 100행의 코드를 건너뛰었다
return `구매 금액은 ${total}입니다.`;
```



```js
let taxRate = 0.1;
let total = 100 + (100 * taxRate);
// 100행의 코드를 건너뛰었다
return `구매 금액은 ${total}입니다.`;
```

**위 두개의 코드는 const와 let을 사용해서 서로 고정된 값이고, 고정되지 않은 값임을 알려주어 해당 변수를 잘 추측할 수 있도록 해준다.**



또한 블록스코프 문제 때문에 되도록이면 let과 const를 사용하고 var는 사용하지 말자



```js
function addClick(items) {
	for(var i =0; i<items.length; i++){
		items[i].onClick = function(){
			return i;
		};
	}
	return items;
}
const example = [{}, {}];
const clickSet = addClick(example);
clickSet[0].onClick();
```

**위의 코드는 var로 for문을 돌시 i에 모두 2가 들어가게 되어 원하지 않게 for문이 동작한다 따라서 이때는 let을 쓰도록하자.**

사실 그냥 var는 안쓰고 여태 var로 썼던 것을 let으로 편하게 쓰면 됨.