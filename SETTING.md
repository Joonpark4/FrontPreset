# npm 초기 설정

```
npm init
```

# 패키지 설치

```
yarn add react react-dom react-router-dom
yarn add -D @babel/core @babel/cli @babel/preset-env @babel/preset-typescript @types/node babel-loader ts-loader source-map html-webpack-plugin webpack webpack-cli webpack-dev-server
```

#### dependencies 패키지

* `react` : 리액트 필수 패키지

* `react-dom` : 리액트 필수 패키지

* `react-router-dom` : 리액트 라우터 필수 패키지

#### devDependencies 패키지

* `@babel/core` : 바벨의 필수 패키지

* `@babel/cli` : 커맨드라인에서 바벨을 사용할 수 있게 해줌

* `@babel/preset-env`  : ECMAScript2015+를 변환할 때 사용한다. 바벨 7 이전 버전에는 연도별 프리셋을 제공했으나 지금은 env 하나로 합쳐짐. (IE 지원을 위한 프리셋)

* `@babel/preset-react` : JSX로 작성된 코드들을 createElement 함수를 이용한 코드로 변환해 주는 바벨 플러그인이 내장되어 있음 (리액트를 변환하기 위한 프리셋)

* `@babel/preset-typescript` : TypeScript 코드를 일반 JavaScript 코드로 변환합니다.

* `@types/node`, `@types/react@types/react-dom@types/react-router-dom` : TypeScript  관련 필수 패키지

* `babel-loader` : Webpack에서 Babel을 사용하여 JavaScript 파일을 변환할 때 사용됩니다.

* `ts-loader` : TypeScript 파일을 JavaScript로 변환하는 Webpack 로더입니다.

* `source-map` : 변환된 코드를 원본 소스 코드에 매핑하는 파일로, 변환된 코드를 디버깅할 때 원본 코드의 위치를 쉽게 찾을 수 있게 해줍니다.

* `html-webpack-plugin` : Webpack 빌드 과정에서 HTML 파일을 생성하거나 수정하는 데 사용됩니다.

* `webpack` : 모듈 번들러로, 여러 JavaScript 파일을 하나의 파일로 묶어줍니다.

* `webpack-cli` : Webpack을 커맨드 라인에서 사용할 수 있게 해주는 도구입니다.

* `webpack-dev-server` : 개발 중 실시간으로 변경 사항을 반영하는 개발 서버로 작동하게 합니다.

## babel.config.js

```
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
};
```

## tsconfig.json

```
{
    "compilerOptions": {
      "target": "es2016",
      "jsx": "react-jsx",
      "module": "commonjs",
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "strict": true,
      "skipLibCheck": true
    }
}
```

* `target`: "es2016" : TypeScript 코드가 컴파일된 후 호환되어야 하는 버전을 지정합니다.

* `"jsx": "react-jsx"` : JSX 코드를 처리하는 방식을 설정합니다. react-jsx는 React 17 이상 버전에서 사용되는 새로운 JSX 변환 방식을 의미합니다.

* `"module": "commonjs"` : Node.js에서 주로 사용되는 모듈 포맷인 commonjs로 모듈 시스템을 지정합니다.

* `"esModuleInterop"` : true : ES6 스타일의 모듈 가져오기(import)를 CommonJS 모듈에서도 사용할 수 있습니다.

* `"forceConsistentCasingInFileNames"` : true: 대소문자 구분이 없는 파일 시스템에서 발생할 수 있는 문제를 예방하는데 도움이 됩니다.

* `"strict": true` : 모든 엄격한 타입 체킹 옵션을 활성화합니다. 이는 코드의 안정성과 유지 보수성을 향상시키는 데 도움이 됩니다.

* `"skipLibCheck": true` : 라이브러리 파일(*.d.ts)의 타입 체크를 건너뛰도록 합니다. 이는 컴파일 시간을 단축시킬 수 있지만, 라이브러리의 타입 정의에 오류가 있을 경우 이를 놓칠 수도 있습니다.


## Scripts Setting

```
  "scripts": {
    "start": "webpack serve --mode=development",
    "build": "webpack --mode=production"
  },
```

`start`

- `webpack-dev-server`를 사용하여 개발 서버를 시작합니다.
- `-mode=development` 모드를 개발 모드로 설정합니다. 개발 모드는 빌드 속도가 빠르고 디버깅이 용이합니다.

`build`

- `--mode=production` 프로덕션 모드에서 `Webpack`을 실행하여 프로젝트를 빌드합니다.
- `-mode=production`은 코드 최적화, 축소 등 프로덕션에 적합한 설정을 사용합니다.

## Sass Install

```
yarn add -D sass-loader css-loader style-loader node-sass
```

* `sass-loader` : Sass 파일을 JavaScript에서 로드할 수 있게 해주는 Webpack 로더입니다.

* `css-loader` : CSS 파일을 JavaScript에서 로드할 수 있게 해주는 Webpack 로더입니다.

* `style-loader` : 스타일을 DOM에 삽입하는 Webpack 로더입니다.

* `node-sass` : Sass를 CSS로 변환합니다. sass-loader: Sass 파일을 처리하는 Webpack 로더입니다.


## webpack.config.js

```
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  devServer: {
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ["babel-loader", "ts-loader"],
			},
      {
        test: /\.scss$/, // SCSS 파일에 대한 정규식 패턴
        use: [
          "style-loader", // 스타일 태그를 생성하여 DOM에 적용
          "css-loader", // CSS를 CommonJS 모듈로 변환
          "sass-loader", // SCSS를 CSS로 컴파일
        ],
      },
    ],
  },
};
```

`HtmlWebpackPlugin` : 생성된 번들을 HTML 파일에 자동으로 주입해주는 플러그인입니다.

`path` : Node.js의 내장 모듈로, 파일 시스템 경로를 다룹니다.

`entry` : 빌드의 시작점을 설정합니다.

`output` : 빌드된 파일을 해당 경로에 생성하고 파일 이름을 filename으로 설정합니다.

`HtmlWebpackPlugin` : ./public/index.html을 템플릿으로 사용하여 HTML 파일을 생성하고, 프로덕션 모드에서는 HTML을 최적화합니다.

`devServer`: 웹팩 개발 서버의 설정을 정의합니다. `static: path.resolve(__dirname, "dist")`는 정적 파일의 위치를 지정하고, `historyApiFallback: true` : 브라우저 히스토리 API를 사용하는 SPA에 유용합니다. `hot: true`는 Hot Module Replacement(실시간 반영)를 활성화합니다.

`Resolve 확장자` : `resolve` 객체는 모듈을 해석할 때 사용할 확장자를 정의합니다. `.js`, `.jsx`, `.ts`, `.tsx` 파일이 자동으로 인식됩니다.

`rules` : 모듈 처리 방법을 정의합니다. 여기서는 `.tsx?` (TypeScript 파일)와 `.scss` (SCSS 파일)에 대한 로더를 설정합니다.

* `test: /\.tsx?$/`는 `.tsx` 또는 `.ts` 확장자를 가진 파일을 대상으로 합니다.
* `exclude: /node_modules/`는 `node_modules` 디렉토리 내의 파일을 처리에서 제외합니다.
* `use` 사용할 로더를 선택합니다.




## src/index.jsx

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteApp from './pages/RouteApp';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <RouteApp />
   </Router>
);
```

## src/scss/style.scss

```
@import "main.scss";

```

## public/index.html

```
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NoCRA Project</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```