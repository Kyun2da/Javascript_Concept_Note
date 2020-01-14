# DOM 다루기

Document Object Model 이라고 하고 문서 객체 모델이라고도 한다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="header">HEADER</h1>
    <h1>Text Node</h1>
    <img src="./image.jpg" width="400px" />
  </body>
  <script>
    window.onload = function() {
      var header = document.createElement("h1");
      var textNode = document.createTextNode("Hello DOM");

      header.appendChild(textNode);
      document.body.appendChild(header);
    };
  </script>
</html>

```

간단하게 문서의 맨마지막에 <h1>Hello DOM</h1>을 넣는 코드를 위에 써보았다.

하지만 이보다 더 쉬운 방법이 있는데 바로 **innerHTML**을 사용하는 것이다.

### innerHTML 사용하기

```javascript
<script>
    window.onload = function() {
      var output = "";
      output += "<ul>";
      output += " <li>JavaScript</li>";
      output += " <li>jQuery</li>";
      output += " <li>Ajax</li>";
      output += "</ul>";

      document.body.innerHTML = output;
    };
  </script>
```

위의 코드는 innerHTML을 사용하는 코드이다. body안을 onload되면 다음 코드와 같이 바꾸겠다는 뜻이다.

## 문서 객체 가져오기1

웹페이지에 이미 존재하는 HTML 태그를 자바스크립트로 가져오는 방법이 있다.

바로 **getElementById**를 사용하는 것이다.

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="header-1">Header</h1>
    <h1 id="header-2">Header</h1>
  </body>
  <script>
    window.onload = function() {
      var header1 = document.getElementById("header-1");
      var header2 = document.getElementById("header-2");

      header1.innerHTML = "with getElementByID()";
      header2.innerHTML = "with getElementByID()";
    };
  </script>
</html>

```

위의 코드는 getElementById를 사용한 예시이다.

## 문서 객체 가져오기 2

document 객체의 getElementById() 메서드는 한번에 한가지 문서 객체만 가져올 수 있는 반면,

document 객체가 갖는 **getElementsByname**과 **getElementsByTagName**을 사용하면 한번에 여러개의 문서 객체를 가져올 수 있다.

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <h1>Header</h1>
  </body>
  <script>
    window.onload = function() {
      var headers = document.getElementsByTagName("h1");

      //   headers[0].innerHTML = "첫번째 배열입니다.";
      //   headers[1].innerHTML = "두번째 배열입니다.";
      for (var i = 0; i < headers.length; i++) {
        headers[i].innerHTML = "배열 " + i + "번째 입니다.";
      }
    };
  </script>
</html>

```

주의할 점은 for in 반복문은 사용할 수 없다는 점인데 그이유는 문서 객체 이외의 속성에도 접근하기 때문이다. 그러므로 꼭 단순 반복문을 사용해야 한다.