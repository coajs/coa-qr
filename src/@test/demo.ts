/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import { CoaQr, qr } from '..'

const option = {
  width: 1000, // 宽度，默认为1000
  margin: 0, // 边距，默认为0
  color: '#000000ff', // 前景颜色，默认为黑色
  background: '#ffffff00', // 背景颜色，默认为白色
  level: 'Q', // 级别，可选 L M Q H，默认为 Q
}

// 生成一个二维码存储成文件到相应路径
await qr.toFile('/path/qr.png', '这是二维码的内容', option)

// 生成一个二维码并返回Buffer
await qr.toBuffer('这是二维码的内容', option) // 返回一个Buffer

const myQr = new CoaQr(option)

// 生成一个二维码存储成文件到相应路径
await qr.toFile('/path/qr.png', '这是二维码的内容')

// 生成一个二维码并返回Buffer
await qr.toBuffer('这是二维码的内容') // 返回一个Buffer
