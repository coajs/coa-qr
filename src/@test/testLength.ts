import * as qrCode from 'qrcode'

export default new (class {
  async test() {
    const url = 'HTTP://1MAK.CN/SZ/177/16/AQNGUJK2T25Q'
    const qr = this.getQrCodeInfo(url)
    console.log(`length:${qr.textLength} size:${qr.codeSize} version:${qr.codeVersion} mode:${qr.codeMode}`)

    let lastVersion = 0
    const text = url + url + url + url
    // const text = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
    // const text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 1; i < 100; i++) {
      const qr = this.getQrCodeInfo(text.substr(0, i))
      if (lastVersion !== qr.codeVersion) {
        console.log(`length:${qr.textLength} size:${qr.codeSize} version:${qr.codeVersion} mode:${qr.codeMode}`)
      }
      lastVersion = qr.codeVersion
    }
  }

  getQrCodeInfo(text: string) {
    const qr = qrCode.create(text, { errorCorrectionLevel: 'Q' })
    const codeSize = qr.modules.size
    const codeVersion = qr.version
    const codeMode = (qr.segments[0].mode as any).id
    const textLength = text.length

    return { text, textLength, codeSize, codeVersion, codeMode }
  }
})()
