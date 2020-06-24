# rollup-starter-TS-lib

## 简单介绍

这个是一个基于`rollup`打包和`TS`类型检测，构建lib类代码用的脚手架仓库。

> [rollup:Next-generation ES module bundler](https://github.com/rollup/rollup)
>

Webpack和rollup对比：
rollup最大的亮点就是Tree-shaking，即可以静态分析代码中的 import，并排除任何未使用的代码。这允许我们架构于现有工具和模块之上，而不会增加额外的依赖或使项目的大小膨胀。如果用webpack做，虽然可以实现tree-shaking，但是需要自己配置并且打包出来的代码非常臃肿，所以对于库文件和UI组件，rollup更加适合。

## 快速启动-Cli

### 安装依赖

```bash
npm install
```

### 研发监听

```bash
npm run dev
```

### 构建打包

```bash
npm run build
```

### 检测和修复代码：`ts`,`tsx`

```bash
npm run eslint:fix
```

### 格式化代码：`json`,`ts`,`tsx`

```bash
npm run prettier
```

