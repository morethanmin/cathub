---
title: python manage.py runserver를 입력하면 무슨 일이 일어날까?
description: "-"
category: python
---

파이썬에서 pip를통해 django를 설치한 뒤, 해당 커맨드를 입력하면 django-admin에 의해 somethingApp이라는 django 프로젝트가생성된다.

```bash
django-admin startapp somethingApp
```

이렇게 생성된 django project를 아래와 같은 커맨드를 입력해 django 프로젝트를 시작할 수 있지만 정작 어떤 방식으로 동작하는지 모르고 사용하는 경우가 있는데 한번 살펴보자.

```bash
python manage.py runserver
```

커맨드를 하나하나 읽어 보자

python이라는 커맨드를 입력하면 python을 설치하면서 컴퓨터에 등록된 환경변수에 의해 python이 설치된 경로를 찾아가 python을 실행해준다.

첫번째 인자는 파이썬에 의해 해당 모듈(manage.py)을 실행할 것이고, 두번 째 인자는 manage.py라는 모듈이 사용하게 될 인자이다.

manage.py라는 python 모듈을 살펴보자.

```python
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'somethingApp.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
```

import 라는 코드를 통해 os와 sys라는 python을 설치시 기본적으로 제공하는 모듈들을 불러온다.

- os: 컴퓨터의 폴더나 경로, 파일 등을 활용할 수 있도록 도와주는 모듈
- sys: python interpreter 제공하는 변수와 함수를 직접 제어할 수 있게 해주는 모듈이다

interpreter에 대해서 설명하자면 python은 소스코드를 기계어로 컴파일해 실행파일을 만드는 컴파일 언어가 아닌 한줄 한줄 프로그램이 읽어 내려가며 실행하는 방식이고 이때 사용되는 프로그램이 interpreter이다.

이후 main이라는 함수를 정의하고, if문을 실행하는데 해당 if문은 아래와 같다.

```python
if __name__ == '__main__':
```

해당 코드는 모듈이 임포트된 경우가 아니라 인터프리터에서 직접 실행되는 모듈인 경우에 if 문 이하를 돌리라는 의미를 갖고 있다.

**name**은 글로벌 변수로 인터프리터에 의해 실행되면 **main**이 담기게 되고, import되는 경우에는 해당 파일이름이 담기게 되기 때문이다.

이제 main함수가 실행되게 되는데, main함수 내부를 살펴보자.

```python
def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'somethingApp.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
```

- **os.environ.setdefault**라는 함수를 통해 **DJANGO_SETTINGS_MODULE**라는 이름의 환경변수를 **somethingApp.settings**라는 경로에 접근해 설정해주고 있다.
- 예외처리를 통해 **django.core.management**를 **execute_from_command_line**라는 이름으로 import하고, 만약 없다면 import error를 던져준다.
- sys.argv를 통해 아까 커맨드에서 입력한 runserver라는 커맨드를 django에서 불러온 모듈의 인자로 넘겨주면서 장고 프레임워크가 실행된다.

다음은 **somethingApp.settings** 를 살펴본다
