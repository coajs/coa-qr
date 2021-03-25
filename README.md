# coa-qr

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/coa-qr.svg?style=flat-square)](https://www.npmjs.org/package/coa-qr)
[![npm downloads](https://img.shields.io/npm/dm/coa-qr.svg?style=flat-square)](http://npm-stat.com/charts.html?package=coa-qr)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/coajs/coa-qr/pulls)

一个超简单的Qr生成库 for Node.js

基于 [qrcode](https://www.npmjs.com/package/qrcode) 做简单封装

## 特点

根据日常实际项目使用情况：

- 优化了参数名称，并优化了默认值，满足绝大多数使用场景
- 统一了异步表现形式，全部返回 Promise
- 内置类型引用，无需额外查看文档，开箱即用，IDE友好

## 快速开始

### 安装

```shell
yarn add coa-qr
```

### 直接使用

```typescript
import { qr } from 'coa-qr'

// 配置
const option = {
  width: 1000,    //宽度，默认为1000
  margin: 0,      //边距，默认为0
  color: '#000000ff',      //前景颜色，默认为黑色
  background: '#ffffff00', //背景颜色，默认为白色
  level: 'Q'      //级别，可选 L M Q H，默认为 Q
}

// 生成一个二维码存储成文件到相应路径
await qr.toFile('/path/qr.png', '这是二维码的内容', option)

// 生成一个二维码并返回Buffer
await qr.toBuffer('这是二维码的内容', option)  // 返回一个Buffer
```

### 自定义实例

```typescript
import { CoaQr } from 'coa-qr'

// 配置
const option = {
  width: 1000,    //宽度，默认为1000
  margin: 0,      //边距，默认为0
  color: '#000000ff',      //前景颜色，默认为黑色
  background: '#ffffff00', //背景颜色，默认为白色
  level: 'Q'      //级别，可选 L M Q H，默认为 Q
}

// 创建一个自定义的实例
const myQr = new CoaQr(option)

// 利用自定义实例生成一个二维码存储成文件到相应路径
await myQr.toFile('/path/qr.png', '这是二维码的内容')

// 利用自定义实例生成一个二维码并返回Buffer
await myQr.toBuffer('这是二维码的内容')  // 返回一个Buffer
```
