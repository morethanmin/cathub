---
title: "[django] csrf token이 뭐지?"
description: "csrf의 개념과 django에서 사용하는 csrf token에 대해 알아본다."
category: python
createdAt: "2021-10-26"
---

막연하게 form안에 `{% csrf_token %}` 을 사용하고 있는 나를 보게 되어 정리해본다.

## CSRF란

CSRF는 Cross Site Request Forgery의 약자로 웹 어플리케이션의 취약점을 이용한 공격방법중 하나로 사용자로 하여금 의도하지 않은 요청을 보내게끔 하는 방식이다.

## Django에서의 CSRF 대응

django에서는 외부에서 post request가 요청되지 않게 하기 위해 로그인한 사용자에게 csrf token을 발급해주고, 이를 template tag인 `{% csrf_token %}` 를 넣어준 form에 대해서만 request를 받게 끔 설계되어있다.

동작과정을 간단하게 정리하면, 사용자가 `{% csrf_token %}`이 있는 django template 페이지에 접속하면 해당 template을 django가 해석하면서 csrf_token이라는 쿠키를 같이 보내준다. 이후 페이지에 존재하는 form에서 post를 통해 request를 날리면 cookie에 담겨있던 csrf_token이 함께 전송이 됨으로써 validation이 되는 방식이다.

## Form 방식은 알겠는데, AJAX인 경우에는?

여러가지 방법이 있겠지만, 크게 두가지로 나뉜다. 해당 요청에 대해서만 `@csrf_exempt` 데코레이터를 달아 csrf를 감지하지 않게끔 하는 방법이 있고, csrf token을 custom으로 주입해주는 방법이 있다. 이상적인 방식은 후자이기에 후자의 방식으로 하는걸 권장한다.

후자의 방식은 django document에서도 친절하게 코드를 짜놨다. 참고하면 좋을듯 하다.

```jsx
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrftoken = getCookie("csrftoken");
```
