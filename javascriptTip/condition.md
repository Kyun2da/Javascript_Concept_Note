# 조건문을 깔끔하게 작성하라



## 거짓 값이 있는 조건문을 축약하라

거짓값의 목록

- false
- null
- 0
- NaN
- ''
- ""



참과 거짓 값이 중요한 이유는 긴 표현식을 축약할 수 있기 때문이다.

```js
const employee = {
    name: 'Eric',
    equipmentTraining: '',
}

if (!employee.equipmentTraining){
    return '기계를 작동할 권한이 없습니다.';
}
```



```js
function checkAuthorization(){
    if(employee.equipmentTraining !== true){ // 엄격한 확인방법으로 원하는 형식인지 확인한다.
        return '기계를 작동할 권한이 없습니다.'; 
    }
    return `반갑습니다, ${employee.name} 님`;
}
checkAuthorization(employee);
```



##  삼항 연산자로 빠르게 데이터를 확인하라

```js
var display = active ? 'bold' : 'normal';
```

하지만 삼항 연산자를 여러번 쓰는 것은 오히려 코드를 복잡하게 만드니 그럴 때는 if else 문을 활용하도록 하자.



## 단락 평가를 이용해 효율성을 극대화하라

```js
function getIconPath(icon){
    const path = icon.path ? icon.path: 'uploads/default.png';
    return `https://assets.foo.com/${path}`
}
```

위의 코드의 문제점은 **icon.path**가 두번 쓰였다는 것이다. 이를 단락평가를 활용하여 좀더 간단하게 바꿀 수 있다.

```js
function getIconPath(icon){
    const path = icon.path || 'uploads/default.png';
    return `https://assets.foo.com/${path}`;
}
```



