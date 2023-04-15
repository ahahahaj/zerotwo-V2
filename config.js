const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true

//aumto functioner
//global.autoTyping = false //auto tying in gc (true to on, false to off)
//global.autoRecord = true //auto recording (true to on, false to off)

global.Owner = ['971553527240','971553527240']  //If you want singal number so global.Owner = ['916297175943'] Change into your number
global.OwnerNumber = ['971553527240','971553527240']  //If you want singal number so global.Owner = ['916297175943'] Change into your number
global.ownertag = ['𝐋𝐈𝐆𝐇𝐓']
global.BotName = "زيرو تو"
global.packname = "زيرو تو يروحي"
global.author = "971553527240"
global.OwnerName = "لايت"
global.BotSourceCode = "https://github.com/Kai0071/A17"
global.SupportGroupLink = "https://chat.whatsapp.com/EsNqFrGKxGXFrdwgRaQl9q"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['-'] 


global.location = "West Bengal, India"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://media.tenor.com/Jdu0Ov8X2sIAAAAC/A17-Bot.mp4' }
global.websitex = "https://github.com/Kai0071"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'تم...',
    useradmin: 'عذرا، فقط *مسؤولو المجموعة* يمكنهم استخدام هذا الأمر *عزيزي*!',
    botadmin: 'آسف، لا يمكنني تنفيذ هذا الأمر دون أن أكون *مسؤول* لهذه المجموعة.',
    botowner: 'فقط *المالك* الخاص بي يمكنه استخدام هذا الأمر، !',
    grouponly: 'هذا الأمر مصنوع فقط من أجل *المجموعات*، باكا!',
    privateonly: 'هذا الأمر مصنوع فقط من أجل *الدردشة الخاصة*، حسنا ?!',
    botonly: 'فقط *البوت نفسه* يمكنه استخدام هذا الأمر!',
    waiting: ' اصبر...',
    nolink: 'من فضلك قدم لي *رابط*، Uff!',
    error: 'حدث خطأ ما!',
    banned: 'انت  *تبندت* من استخدام البوت!, هههه',
    bangc: 'هذه المجموعة *تبندت* من استخدام الأوامر!',
    nonsfw: 'لا تكن منحرفا! هذه ليست مجموعة ممكنة من NSFW!, Uff!,'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
