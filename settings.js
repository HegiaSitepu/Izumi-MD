// S C R I P T  O R I  B Y  KIZH MD 🔭
// Credits, jangan dihapus atau diubah!

// - - THANKS TO ALL

//[!] Jangan Lupa Ganti Ownernya

const fs = require("fs")
const chalk = require("chalk")

// GLOBAL OWNER //

global.owner = ['6283818409283'] //GANTI JADI NO MU
global.namaowner = "Theo" // GANTI JADI NAMA MU
global.namebot = "THEO MD" // GANT JADI NAMA BOT MU
global.sessionName = 'sessions' // JANGAN DI UBAH
global.prefa = ['','!','.',',','🐤','🗿'] // JANGAN DI UBAH KALAU GAK MAU EROR

// WATERMARK //

global.v = 'THEO MD' // GANTI AJA
global.wm = '© THEO MD' // GANTI AJA
global.packname = ""
global.author = "THEO BOT" // GANTI AJA
global.author2 = "THEO" // GANTI SAJA
global.footer = 'THEO MD' // GANTI AJA

// FOTO MENU //

global.thumbailUrl = "https://telegra.ph/file/ae089ada46847d3e37456.jpg" // GANTI AJA KALAU MAU GANTI LOGO MENU NYA
global.url = "-" // GANTI SAJA

// PAYMENT //
global.Qris = 'https://telegra.ph/file/ae089ada46847d3e37456.jpg' //GANTI JADI QRIS MU
global.dana = '083818409283' // GANTI NO LU AJA
global.gopay = '083818409283'  // GANTI NO LU AJA
global.scan = 'SCAN QRIS ALL PAY DI ATAS'

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

// GLOBAL MESS //

global.mess = {
    success: 'done boskuu',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Jadikan admin terlebih dahulu kak',
    owner: 'Hanya Owner kak',
    group: 'harus di dalam grub kak',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus bot',
    wait: 'sabar',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'khusus premium" mau prem? chat owner',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
//BATAS
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
