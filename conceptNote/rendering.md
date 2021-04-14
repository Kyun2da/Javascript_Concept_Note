# 브라우저 렌더링 과정

브라우저는 일반적으로 다음과 같은 과정을 거쳐 렌더링을 수행한다.

1. 브라우저는 HTML, CSS, 자바스크립트, 이미지, 폰트 파일 등 렌더링에 필요한 리소스를 요청하고 서버로부터 응답을 받는다.
2. 브라우저의 렌더링 엔진은 서버로부터 응답된 HTML과 CSS를 파싱하여 DOM과 CSSOM을 생성하고 이들을 결합하여 렌더 트리를 생성한다.
3. 브라우저의 자바스크립트 엔진은 서버로부터 응답된 자바스크립트를 파싱하여 AST를 생성하고 바이트코드로 변환하여 실행한다. 이때 자바스크립트는 DOM API 를 통해 DOM이나 CSSOM을 변경할 수 있다. 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합된다.
4. 렌더 트리를 기반으로 HTML 요소의 레이아웃(위치와 크기)를 계산하고 브라우저 화면에 HTML 요소를 페인팅한다.



## 스크립트 태그의 async/ defer 어트리뷰트

1. 일반 적인 script 태그는 script 태그가 들어오면 HTML 파싱을 중단하고 스크립트를 다운로드 하고 실행 시킨후에 다시 HTML 파싱을 재개한다.
2. script async 태그는 HTML 파싱과 script 다운로드는 동시에 하지만 script 실행은 HTML 파싱을 중단하고 실행한후 다시 HTML 파싱을 재개한다.
3. script defer 태그는 HTML 파싱과 script 다운로드는 동시에 하고 HTML 파싱이 완료되면 script를 실행시킨다.



![](https://uploads.disquscdn.com/images/4303414a00e244a653fc9a4894719b730caae6d4c647b97966b1061ae16fec48.png?w=800&h=468)

![](https://uploads.disquscdn.com/images/84255af6a3268816f146e255c48db97c670931c351d640f844ecd78f591077a2.png?w=800&h=489)