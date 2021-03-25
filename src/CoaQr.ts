import { mkdirSync } from 'fs'
import { dirname } from 'path'
import * as qrCode from 'qrcode'

export namespace CoaQr {
  export interface Option {
    width?: number,
    margin?: number,
    color?: string,
    background?: string,
    level?: 'L' | 'M' | 'Q' | 'H'
  }
}

export class CoaQr {

  private readonly option: CoaQr.Option

  constructor (option: CoaQr.Option = {}) {
    this.option = Object.assign({}, { width: 1000, margin: 0, color: '#000000ff', background: '#ffffff00', level: 'Q' }, option)
  }

  //生成一个二维码存储成文件到相应路径
  async toFile (dist: string, text: string, option: CoaQr.Option = {}) {

    mkdirSync(dirname(dist), { recursive: true })

    await qrCode.toFile(dist, text, this.originOption(option))
  }

  //生成一个二维码并返回Buffer
  async toBuffer (text: string, option: CoaQr.Option = {}) {

    const dataUrl = await qrCode.toDataURL(text, this.originOption(option))

    const base64 = dataUrl.substr(dataUrl.indexOf(',') + 1)

    return Buffer.from(base64, 'base64')
  }

  // 转换为qrCode的原始配置
  private originOption (option: CoaQr.Option) {
    const { width, margin, color, background, level } = Object.assign({}, this.option, option)
    return { width, margin, errorCorrectionLevel: level, color: { dark: color, light: background } }
  }
}