# vendor

React、ReactDOM、Babel standalone 的本地副本。三个 UI kit、九张组件卡、六张图谱规范卡都引它们。

以前这些是从 unpkg 拉的。这台机器的国际线路时好时坏，塌到 ~20KB/s 的时候 unpkg 也跟着塌——
工具台整页打不开，headless 出图更是随机超时。CDN 依赖对一套本地设计系统没有任何好处，去掉了。

| 文件 | 版本 | 来源 |
| --- | --- | --- |
| `react.production.min.js` | 18.3.1 | npm `react@18.3.1` → `umd/react.production.min.js` |
| `react-dom.production.min.js` | 18.3.1 | npm `react-dom@18.3.1` → `umd/react-dom.production.min.js` |
| `babel.min.js` | 7.29.0 | npm `@babel/standalone@7.29.0` → `babel.min.js` |

用的是 production build，不是 development——开发版体积大三倍、还带一整套运行时警告，
而这些页面是拿来出图的，不是拿来调 React 的。

要升级：

```bash
npm i --no-save react@<ver> react-dom@<ver> @babel/standalone@<ver>
cp node_modules/react/umd/react.production.min.js assets/vendor/
cp node_modules/react-dom/umd/react-dom.production.min.js assets/vendor/
cp node_modules/@babel/standalone/babel.min.js assets/vendor/
```

升完跑一遍 `node ui_kits/xiaohongshu/export_cards.mjs --all-fixtures --check`，全绿再提交。

> `templates/*/support.js` 里还有三处 unpkg 常量，那三个文件是 Claude Design 生成的运行时
> （文件头写着 do not edit），改了会被下次生成覆盖。它们只在模板独立运行时才会走到。
