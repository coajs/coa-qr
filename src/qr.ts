import { mkdirSync } from 'fs'
import { dirname } from 'path'
import * as qrCode from 'qrcode'

type QrOption = {
  width?: number,
  margin?: number,
  color?: string,
  background?: string,
  level?: 'L' | 'M' | 'Q' | 'H'
}

export default new class {

  private option: QrOption = { width: 1000, margin: 0, color: '#000000ff', background: '#ffffff00', level: 'Q' }

  //生成一个二维码存储成文件到相应路径
  async toFile (dist: string, text: string, option: QrOption = {}) {

    mkdirSync(dirname(dist), { recursive: true })

    await qrCode.toFile(dist, text, this.convertQrCodeOption(option))
  }

  //生成一个二维码并返回Buffer
  async toBuffer (text: string, option: QrOption) {

    const dataUrl = await qrCode.toDataURL(text, this.convertQrCodeOption(option))

    const base64 = dataUrl.substr(dataUrl.indexOf(',') + 1)

    return Buffer.from(base64, 'base64')
  }

  // 转换为qrCode的配置
  private convertQrCodeOption (option: QrOption) {
    const { width, margin, color, background, level } = Object.assign({}, this.option, option)
    return { width, margin, errorCorrectionLevel: level, color: { dark: color, light: background } }
  }
}