# 프로젝트명

- 리액트(NoCRA) + 웹팩 + swc + Typescript + Tailwindcss
- 바벨에 비해 컴파일링 속도가 매우 빠릅니다.

# 프로젝트 정보
- 프로젝트 세팅 관련 내용은 SETTING.md를 참고 부탁드립니다.

# 참고 레포지토리
```
https://github.com/inyong-e/react-webpack-swc-boilerplate
```

## 로컬

#### localhost: 3000

### env

```
REACT_APP_URL = http://localhost:3000
```

- 해당 env는 임시로 생성되었습니다. 리액트 프로젝트에서는 반드시 'REACT_APP_' 이라는 문자를 변수명 앞에 붙여서 생성합니다.

### 외부 api 사용

```
# 없음
```
# Getting Started

### local

- "start": "webpack serve --mode development --open --hot"
> 이 명령어는 개발 모드에서 웹팩을 실행합니다.<br> --open 옵션은 명령어 실행 후 자동으로 브라우저를 열어주며, --hot 옵션은 코드 변경 시 자동으로 리로드하는 HMR(Hot Module Replacement) 기능을 활성화합니다.<br> 이 명령어를 실행하면 개발 서버가 시작되고, 코드 변경 사항이 실시간으로 반영됩니다.
- "build": "webpack --mode production"
> 이 명령어는 프로덕션 모드에서 웹팩을 실행하여 최적화된 빌드를 생성합니다. 이 명령어를 실행하면 최적화와 미니파이(minify) 과정을 거친 결과물이 출력 디렉토리(기본적으로 dist 디렉토리)에 생성됩니다.
---