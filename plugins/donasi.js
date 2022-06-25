let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0813-3299-5497]
│ •  [0819-444-5802]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
