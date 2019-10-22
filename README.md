# Frontend Base Environment

> 前端基础环境搭建

## 使用方法

安装模块

```
npm install
```

开发环境：热更新
```
npm start
```

生产环境：打包输出文件
```
npm run build
```

## 搭建环境

### 初始化

* npm 初始化

```
npm init -y
```

npm 初始化后会生成一个 **package.json** 文件。`-y`命令使package.json的配置项设定为默认项，如果想要手动更改这些配置，可以在初始化时不添加此命令，或到package.json里直接修改文件内容。

* git 初始化

```
git init
```

git 初始化后，我们在仓库里新建一个 **.gitignore** 文件，用来过滤不需要加入仓库版本管理的文件，此文件的内容大致一致，也可在此基础上进行修改形成自己的一套过滤系统。

```
.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
/test/**/coverage/
/test/**/reports/
selenium-debug.log

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
```

> *建议在此基础上添加 package-lock.json 和 yarn.lock 的过滤*

### 构建目录结构

1. 根目录下写入 index.html 文件；
2. 新建 src 目录，写入 index.js 和 index.css 文件；
3. 在 src 目录下新建 assets 目录，存放图片、字体等静态文件；
4. 在 src 目录下写入 normalize.css （初始化文件）和 global.css （全局样式文件）

* HTML 模板

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Title</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

* normalize.css 模板

```css
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, lengend, label, button, input, select, option, textarea, optgroup, table, thead, tbody, tfoot, tr, th, td, div, span, img, a, em, i, iframe, :before, :after{box-sizing: border-box; margin: 0; padding: 0;}
body, button, input, select, option, textarea, optgroup, img{font: 12px/1 "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif; outline: none; border: none;}
textarea{resize: none; overflow: auto;}
ul, ol{list-style: none;}
a{text-decoration: none; background-color: transparent; -webkit-text-decoration-skip: objects;}
table{border-collapse: collapse; border-spacing: 0;}
h1, h2, h3, h4, h5, h6{font-size: 100%;}
article, aside, footer, header, nav, section, figcaption, figure, main, details, menu{display: block; box-sizing: border-box; margin: 0; padding: 0;}
```

### 工程化

```
npm install webpack webpack-cli --save-dev
```

请根据 webpack 的版本（以 **ver. 4.x** 为例）安装并调试以下的 loaders 及 plugins

#### 编译规范

* babel 类负责将js文件编译成es5规范，要增加 **.babelrc** 配置文件

> babel-loader 版本小于 **7.0**
```
npm install babel-loader babel-core babel-preset-env --save-dev
```

> babel-loader 版本为 **7.x** 及以上
```
npm install babel-loader @babel/core @babel/preset-env --save-dev
```

#### 样式编译

* css-loader 及 style-loader 负责css编译

```
npm install css-loader style-loader --save-dev
```

* less 及 less-loader 负责样式预编译，也可使用 sass

```
npm install less less-loader --save-dev
```

* postcss, postcss-import, posscss-loader, posscss-url 负责给样式添加浏览器前缀，要增加 **.postcssrc.js** 配置文件

```
npm install postcss postcss-import posscss-loader posscss-url --save-dev
```

* autoprefixer 负责管理样式的浏览器前缀

```
npm install autoprefixer --save-dev
```

#### 文件处理

* url-loader 负责图片、字体等静态文件的编译

```
npm install url-loader --save-dev
```

* extract-text-webpack-plugin 负责将样式提取成单独的文件

```
npm install extract-text-webpack-plugin --save-dev
```

* html-webpack-plugin 负责将html模板中动态写入静态文件引用

```
npm install html-webpack-plugin --save-dev
```

* file-loader 负责将文件生成到输出目录

```
npm install file-loader --save-dev
```

* uglifyjs-webpack-plugin 负责使用uglify-js进行js文件的压缩

```
npm install uglifyjs-webpack-plugin --save-dev
```

* clean-webpack-plugin 负责清除之前生成的打包文件

```
npm install clean-webpack-plugin --save-dev
```

### 配置文件

* webpack的默认配置文件为 webpack.config.js ，但由于开发时会存在开发环境和生产环境，所以我们为了方便管理，在根目录上建立一个 config 目录，将两种环境的公共部分提取出来写成 webpack.base.js ，使用webpack-merge 将开发环境配置 webpack.dev.js 或生产环境配置 webpack.prod.js 合并起来。详见

  + [webpack.base.js](./config/webpack.base.js)

  + [webpack.dev.js](./config/webpack.dev.js)

  + [webpack.prod.js](./config/webpack.prod.js)

* **.babelrc**

详见 [.babelrc](../.babelrc);

* **.postcssrc.js**

详见 [.postcssrc.js](../.postcssrc.js);
