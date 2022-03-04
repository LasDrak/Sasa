let handler = async m => m.reply(`
┏━━⬣ 𝗗𝗢𝗡𝗔𝗦𝗜
┃
┃⬡ TRI : 0895612153565
┃⬡ Indosat Ooredoo : 085756507257
┃⬡ GOPAY : 62895612153565 > 6281244653014
┃⬡ DANA : -
┃⬡ SAWERIA : xxxxxxxx
┗⬣
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

