//Sc Credit Orii By DEFFBOTZ
//recode: rflbotzz
// 
// Thx 
//DEFFBOTZ
//ZEEONE OFC
//Lexxy Official
//RIMURUBOTZ
//Zero YT7
//Ryuuka Botz
//DhaniGansOfficial
//LolHuman
//All Creator Bot
//DLL
//
// SC FREE APIKEY NO ENC 
// DILARANG MENJUAL SC BOT !!
// JANGAN LUPA SUBSCRIBE 
//=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let {WAConnection: _WAConnection, MessageType, Presence, MessageOptions,	Mimetype, WALocationMessage, WAMessageProto, ReconnectMode,	ProxyAgent, ChatModification, GroupSettingChange, WA_MESSAGE_STUB_TYPES, WA_DEAFULT_EPHEMERAL, waChatKey, mentionedJid, processTime, prepareMessageFromContent, relayWAMessage, Browsers	} = require("@adiwajshing/baileys")
let moment = require("moment-timezone")
let speed = require('performance-now')
let { EmojiAPI } = require("emoji-api")
let phoneNum = require('awesome-phonenumber')
let emoji = new EmojiAPI()
let { spawn, exec, execSync } = require("child_process")
let ffmpeg = require('fluent-ffmpeg')
let twitterGetUrl = require("twitter-url-direct")
let googleImage = require('g-i-s')
let brainly = require('brainly-scraper')
let fetch = require('node-fetch');
let ggs = require('google-it')
let request = require('request');
let emojidl = new EmojiAPI()
let Math_js = require('mathjs')
let crypto = require('crypto')
let yts = require( 'yt-search')
let premium = require("./lib/premium");
let ms = require('parse-ms')
let toMs = require('ms')
let axios = require("axios")
let fs = require("fs-extra")
let util = require('util')
let got = require("got");
let qrcodes = require('qrcode');
let imgbb = require('imgbb-uploader');
let os = require('os');
let fbdl = require('fb-video-downloader');
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let Exif = require('./lib/exif');
let exif = new Exif();
var kuis = false
hit_today = []
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
let control = JSON.parse(fs.readFileSync('./control.json'))
owner = `${control.NomorOwner}`
banChats = false;
LolApi = "Deffbotz"
const lolkey = 'rafliofcheh'  //apikey nya
target = `${control.NomorOwner}@s.whatsapp.net`//Ganti jadi nomor lu
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
let { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
let { color, bgcolor } = require('./lib/color')
let { mess } = require('./message/mess')
let hx = require('hxz-api')
let { dungeon } = require('./lib/rpg/dungeon.js') 
let { msgFilter } = require('./lib/antispam')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { limitCount, gcount, gamewaktu} = require('./control.json') 
let { cmdadd } = require('./lib/totalcmd.js')
let { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
let { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
let { mediafireDl } = require('./lib/mediafire.js')
let { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
let { y2mateA, y2mateV } = require('./lib/y2mate')
let { ythd } = require('./lib/ytdl')
let { jadibot } = require('./jadibot.js') 
const { Gempa } = require("./lib/gempa.js");
const { herolist } = require("./lib/herolist.js")
let { covid } = require('./lib/covid.js') 
let { cnn } = require('./lib/cnn.js') 

//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let _RPG = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let _petualang = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let pendaftar = JSON.parse(fs.readFileSync('./lib/bot/user.json'))
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let _sewa = require("./lib/sewa");
let _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let level = require("./lib/level");
let atm = require("./lib/atm");
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let fake = fs.readFileSync ('./gambar/menu.jpg','base64')
let afk = require("./lib/afk");
let { recognize } = require('./lib/ocr')
let reminder = require ('./lib/reminder') 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
let tebakgambar = fs.readFileSync("./database/result/tebakgambar.json");
let antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"));
let stick = fs.readFileSync("./database/result/randomstic.json");
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let event = JSON.parse(fs.readFileSync('./lib/data/event.json'))
let _user = JSON.parse(fs.readFileSync('./database/user.json'))
let _uang = JSON.parse(fs.readFileSync('./database/uang.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
let samih = JSON.parse(fs.readFileSync('./lib/simi.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
let bad = JSON.parse(fs.readFileSync('./database/bad.json'))
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let ban = JSON.parse(fs.readFileSync('./database/banned.json'))
let banc = JSON.parse(fs.readFileSync('./database/banchat.json'))
let limit = JSON.parse(fs.readFileSync('./lib/bot/limit.json'))
let balance = JSON.parse(fs.readFileSync('./lib/bot/balance.json'));
let _reminder = JSON.parse(fs.readFileSync('./database/reminder.json'));
let _claim = JSON.parse(fs.readFileSync('./database/claim.json'));
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let antitelegram = JSON.parse(fs.readFileSync('./database/group/antitelegram.json'))
let antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))
let antilinkfb = JSON.parse(fs.readFileSync('./database/group/antilinkfb.json'))
let antilinkytv = JSON.parse(fs.readFileSync('./database/group/antilinkyt.json'))
let antilinkytc = JSON.parse(fs.readFileSync('./database/group/antilinkytchannel.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/group/autosticker.json'));
const kickarea = JSON.parse(fs.readFileSync('./database/group/antibule.json'));
const sewa = JSON.parse(fs.readFileSync('./database/bot/sewa.json'));

//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let family100 = [];
let tebaklirik =  [];
let siapaaku = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let tebakanime = [];
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let mrpg = fs.readFileSync('./gambar/menu.jpg')
let devil = fs.readFileSync('./media/rfl.jpg')
let slime = fs.readFileSync('./media/rfl.jpg')
let demon = fs.readFileSync('./media/rfl.jpg')
let goblin = fs.readFileSync('./media/rfl.jpg')
let demonking = fs.readFileSync('./media/rfl.jpg')
let behemoth = fs.readFileSync('./media/rfl.jpg')
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let addCmd = (id, command) => {
    let obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let isFiltered = (from) => !!usedCommandRecently.has(from)

let addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 3000) //5 detik bang
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×

let getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
module.exports = rfl = async (rfl, mek) => {
	try {
        if (!mek.hasNewMessage) return
       mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		let { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		let time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
      	let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		let content = JSON.stringify(mek.message)
		let from = mek.key.remoteJid
	     let hour_now = moment().format('HH:mm:ss')
		let rfl1 = ['1','2','3','4','5','6','7','8','9']
          let rfl2 = ['1','2','3','4','5','6','7','8','9'] 
          let rfl3 = rfl1[Math.floor(Math.random() * (rfl1.length))]
          let rfl4 = rfl2[Math.floor(Math.random() * (rfl2.length))] 
		let type = Object.keys(mek.message)[0]        
          let cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
          let prefix = /^[°!•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+,;]/.test(cmd) ? cmd.match(/^[°!•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+,;]/gi) : '#'
          var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''		
          body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
          budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let args = body.trim().split(/ +/).slice(1)
	     let v = args.join(' ')
		hit_today.push(command)
		let arg = body.substring(body.indexOf(' ') + 1)
		let messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		let ar = args.map((v) => v.toLowerCase())
		let argz = body.trim().split(/ +/).slice(1)
		let isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		let totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd       
          let c = args.join(' ')
          let q = args.join(' ')
          let Rfake = fs.readFileSync ('./gambar/thumb.jpg','base64')
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
          let botNumber = rfl.user.jid
          let ownerNumber = `${control.NomorOwner}`
		let ownerName = `${control.NamaOwner}`
		let botName = `${control.NamaBot}`
		let isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? rfl.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		let totalchat = await rfl.chats.all()
		let groupMetadata = isGroup ? await rfl.groupMetadata(from) : ''
		let groupName = isGroup ? groupMetadata.subject : ''
		let groupId = isGroup ? groupMetadata.jid : ''
		let groupMembers = isGroup ? groupMetadata.participants : ''
		let groupDesc = isGroup ? groupMetadata.desc : ''
		let groupOwner = isGroup ? groupMetadata.owner : ''
		let groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		let isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		let isGroupAdmins = groupAdmins.includes(sender) || false
		let isClaimOn = _claim.includes(sender)
          let conts = mek.key.fromMe ? rfl.user.jid : rfl.contacts[sender] || { notify: jid.replace(/@.+/, '') }
          let pushname = mek.key.fromMe ? rfl.user.name : conts.notify || conts.vname || conts.name || '-'
          let mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
          let mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
          let mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
	     let bio_nya = await rfl.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
          mention != undefined ? mention.push(mentionByreply) : []
          let mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	     players1 = []
	     players2 = []
	     gilir = []
	     for (let t of ky_ttt){
	     idttt.push(t.id)
	     players1.push(t.player1)
	     players2.push(t.player2)
	     gilir.push(t.gilir)
}

//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×

	   let isTTT = isGroup ? idttt.includes(from) : false
	   isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        let isOwner = ownerNumber.includes(sender)                
        let isSimi = samih.includes(from)
        let isAfkOn = afk.checkAfkUser(sender, _afk)
        let isWelkom = isGroup ? welkom.includes(from) : false
        let isAntiLink = isGroup ? antilink.includes(from) : false
        let isPremium = premium.checkPremiumUser(sender, _premium)
        let isAntivirtex = isGroup ? antivirtex.includes(from) : false;
        let isEventon = isGroup ? event.includes(from) : false
        let isBanned = ban.includes(sender)
        let isBanchat = banc.includes(from)
        let isPetualang = checkPetualangUser(sender)
        let isAntidel = isGroup ? antidel.includes(from) : false;
        let isLevelingOn = isGroup ? _leveling.includes(from) : true
        let isAntiLinkTelegram = isGroup ? antitelegram.includes(from) : false
        let isAntiLinkig = isGroup ? antilinkig.includes(from) : false
        let isAntiLinkfb = isGroup ? antilinkfb.includes(from) : false
        let isAntiLinkytc = isGroup ? antilinkytc.includes(from) : false
        let isAntiLinkytv = isGroup ? antilinkytv.includes(from) : false
        let isAutoSticker = isGroup ? autosticker.includes(from) : false
        const isKickarea = isGroup ? kickarea.includes(from) : false
        const isSewa = _sewa.checkSewaGroup(from, sewa)

//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×

        let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./gambar/thumb.jpg`), surface: 200, message: `「	BOT WHATSAPP   」	`, orderTitle: 'rflpratama', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `「	BOT WHATSAPP   」	`,jpegThumbnail: fs.readFileSync(`./gambar/thumb.jpg`)}}}
        let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`「	BOT WHATSAPP   」	`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `「	BOT WHATSAPP   」	`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
	   let fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `「	BOT WHATSAPP   」	`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
	   let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`「	BOT WHATSAPP   」	`, "h": `Hmm`,'seconds': '99999', 'caption': `「	BOT WHATSAPP   」	`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
	   let floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `「	BOT WHATSAPP   」	`,jpegThumbnail: fs.readFileSync(`./gambar/thumb.jpg`)}}}
	   let fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `@BY rfl`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;@BY rfl,;;;\nFN:@BY rfl,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`), thumbnail: fs.readFileSync(`./gambar/thumb.jpg`),sendEphemeral: true}}}
	   var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
	   var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let fakeitem = (teks) => {
            rfl.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./gambar/thumb.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`「	BOT WHATSAPP   」	`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
        
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
var elit = 'Petualang Biasa'
			if (isPremium) {
				elit = 'Petualang Pro'
			} 
			if (isOwner) {
				elit = 'GM in GAME'
			}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
// Kalo Make Kasi WM Made By Febriansyah Ajg!!          
        var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
        var petnya = ['😾','🐺','🦊','🐶','🐰']
        var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
        var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']
        let sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍋 : 🍋 : 🍋 Win👑', 
        '🔔 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',    //Mau Ambil? Add Wm Lah Tod
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔', 
        '🍊 : 🍒 : 🍐', 
        '🍒 : 🔔 : 🍊', 
        '🍇 : 🍇 : 🍇 Win👑', 
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐', 
        '🔔 : 🍒 : 🍊', 
        '🍊 : 🍋 : 🔔',	
        '🍐 : 🍒 : 🍋', 
        '🍐 : 🍐 : 🍐 Win👑', 
        '🍊 : 🍒 : 🍒', 
        '🔔 : 🔔 : 🍇', 
        '🍌 : 🍒 : 🔔', 
        '🍐 : 🔔 : 🔔', 
        '🍊 : 🍋 : 🍒', 
        '🍋 : 🍋 : 🍌', 
        '🔔 : 🔔 : 🍇', 
        '🔔 : 🍐 : 🍇', 
        '🍌 : 🍌 : 🍌 Win👑']
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
    let game = require('./lib/game' );
    game.cekWaktuFam(rfl, family100)
    game.cekWaktuTG(rfl, tebakgambar) 
    game.cekWaktuTL(rfl, tebaklirik)
    game.cekWaktuSA(rfl, siapaaku)
    game.cekWaktuTK(rfl, tebakkata)
    game.cekWaktuTU(rfl, tebakkimia)
    game.cekWaktuTB(rfl, tebakbendera)
    game.cekWaktuTA(rfl, tebakanime)
 //=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        let gcount = control.gcount
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        let listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = rfl.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return rfl.relayWAMessage(po, {waitForAck: true})
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        let isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        let reply2 = (teks) => {
            rfl.sendMessage(from, teks, text, {quoted:ftroli})
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        let reply1 = (teks) => {
			rfl.sendMessage(from, teks, text, { thumbnail: Rfake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"DON'T CLICK HERE",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/p/6289501060783`}}})
		}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
		let reply = (teks) => {
            rfl.sendMessage(from, teks, text, {quoted: mek})
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
		let fakestatus = (teks) => {
            rfl.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `[RFLBOTZ]`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`gambar/thumb.jpg`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        let sendMess = (hehe, teks) => {
           rfl.sendMessage(hehe, teks, text)
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        let mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? rfl.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : rfl.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        let sendText = (from, text) => {
           rfl.sendMessage(from, text, MessageType.text)
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        let textImg = (teks) => {
           return rfl.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')})
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        let freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./gambar/thumb.jpg')
        }}}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
       let math = (teks) => {
           return Math.floor(teks)
       }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
       let kick = function(from, orangnya){
	       for (let i of orangnya){
	       rfl.groupRemove(from, [i])
        }
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
       let kickMember = async(id, target = []) => {
           let group = await rfl.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = rfl.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await rfl.groupRemove(to, [i])
        } else {
           await rfl.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
       let add = function(from, orangnya){
	       rfl.groupAdd(from, orangnya)
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
       let sendKontak = (from, nomor, nama, org = "") => {
	       let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       rfl.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: freply})
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
      let hideTag = async function(from, text){
	       let anu = await rfl.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       rfl.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('gambar/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let huluh = (text) => {
let K = new RegExp("[AIUEOaiueo]", "g")
text = text.replace(K, "u") 
return text
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let holoh = (text) => {
let K = new RegExp("[AIUEOaiueo]", "g")
text = text.replace(K, "o") 
return text
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let hilih = (text) => {
let K = new RegExp("[AIUEOaiueo]", "g")
text = text.replace(K, "i") 
return text
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let heleh = (text) => {
let K = new RegExp("[AIUEOaiueo]", "g")
text = text.replace(K, "e") 
return text
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let halah = (text) => {
let K = new RegExp("[AIUEOaiueo]", "g")
text = text.replace(K, "a") 
return text
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      let kma = vid1;
      let mhan = await rfl.prepareMessage(from, kma, video);
      let buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      rfl.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
const sendGif =  (url, capt) => {
rfl.sendMessage(from, url, "videoMessage", {mimetype: "video/gif", filename: "han.gif", gifPlayback: true, caption: capt, sendEphemeral: true, contextInfo: {forwardingScore: 508, isForwarded: true }, quoted: freply})
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
	kma = doc1
	mhan = await rfl.prepareMessage(from, media, document, kma)
	let buttonMessages = {
	documentMessage: mhan.message.documentMessage,
	contentText: text1,
	footerText: desc1,
	buttons: but,
	headerType: "DOCUMENT"
	}
	rfl.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	}
      let sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           rfl.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return rfl.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        } 
        var sendButloc = (from, title, text, desc, button, sen, men, file) => {
        return rfl.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
        }        
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      let buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      rfl.sendMessage(
        id,  
        buttonMessage, 
        MessageType.buttonsMessage,
        {
        caption: '${NamaBot}',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: fkontak,
			sendEphemeral: true 
			})
			}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let sendFileFromStorage = (path, type, options) => {
        rfl.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
        reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
        console.log(e)
        })
        }       
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           let fn = Date.now() / 10000;
           let filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           rfl.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
rfl.sendMessage(from, hasil, type, options).catch(e => {
fetchh(link).then((hasil) => {
rfl.sendMessage(from, hasil, type, options).catch(e => {
rfl.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       rfl.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       rfl.sendMessage(from, hasil, type, options).catch(e => {
	       rfl.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await rfl.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = rfl.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           let res = await rfl.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await rfl.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = rfl.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           let res = await rfl.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let authorname = rfl.contacts[from] != undefined ? rfl.contacts[from].vname || rfl.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          let json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         let littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         let bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       let buf2 = Buffer.from(last, "hex")	
	   let buf3 = Buffer.from(bytes)	
	   let buf4 = Buffer.from(JSON.stringify(json))	
	   let buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				let week = d.toLocaleDateString(locale, { weekday: 'long' })
				let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
	try {
		pporang = await rfl.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }       
	  let ofrply = await getBuffer(pporang)	       
       let time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '🌉Good Night'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond 📝'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond 📝'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond 📝'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond 📝'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
            }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isCmd ) {
try {
let checkATM = atm.checkATMuser(sender, _uang)
if (checkATM === undefined) atm.addATM(sender, _uang)
let uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
atm.addKoinUser(sender, uangsaku, _uang)
let currentLevel = level.getLevelingLevel(sender, _level)
let amountXp = Math.floor(Math.random() * (5 - 10 + 1) + 10)
let requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
level.addLevelingXp(sender, amountXp, _level)
if (requiredXp <= level.getLevelingXp(sender, _level)) {
level.addLevelingLevel(sender, 1, _level)
let userLevel = level.getLevelingLevel(sender, _level)
let fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
D =`
╭◪ *「 LEVEL UP 」* 
╰───────────────╮  
╭───────────────╯
├⊱❏  *Nama :* ${pushname}
├⊱❏ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}
├⊱❏ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 
├⊱❏ *Role*: *${role}*
╰───────────────╯`
sendButMessage(from, D, `𝚂𝚎𝚕𝚊𝚖𝚊𝚝`, [
             {              
                buttonId: `${prefix}limit`,
                buttonText: {
                  displayText: `💳𝐏𝐫𝐨𝐟𝐢𝐥𝐞`,
                },
                type: 1,
              },
            ]);           
} 
} catch (err) {
console.error(err)
}
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let Levelnye = level.getLevelingLevel(sender, _level)
let Xpluu = level.getLevelingXp(sender, _level)
let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
_sewa.expiredCheck(rfl, sewa)
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
 let getUserRandomId = () => {
 	return _user[Math.floor(Math.random() * _user.length)].id
 }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let addRegisterUser = (userid, sender, age, bio, time) => {
	let obj = { id: userid, name: sender, age: age, bio: bio, time: time }
	_user.push(obj)
	fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
		if (_user[i].id === sender) {
			status = true
			}
			})
			return status
			}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let isUser = cekUser(sender)
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
let isMedia = (type === 'imageMessage' || type === 'videoMessage')
let isImage = (type === 'imageMessage')
let isVideo = (type === 'videoMessage')
let isStickers = (type == 'stickerMessage')
let isListMsg = (type == 'listResponseMessage')
let isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
let isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
let isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
let isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
let isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
let isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
if (isGroup && isAutoSticker ) {
if (isImage || isVideo) {
if ( ((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek;
let media = await rfl.downloadAndSaveMediaMessage(encmedia);
ran = '666.webp';
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`);
})
.on('error', function (err) {
console.log(`Error : ${err}`);
fs.unlinkSync(media);
reply('error');
})
.on('end', function () {
console.log('Finish');
rfl.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek,});
fs.unlinkSync(media);
fs.unlinkSync(ran);
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,])
.toFormat('webp')
.save(ran);
} else if (
((isMedia && mek.message.videoMessage.seconds < 11) || (isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) &&args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message .extendedTextMessage.contextInfo: mek;
let media = await rfl.downloadAndSaveMediaMessage(encmedia);
ran = '999.webp';
reply(mess.wait);
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`);})
.on('error', function (err) {
console.log(`Error : ${err}`);
fs.unlinkSync(media);
tipe = media.endsWith('.mp4') ? 'video' : 'gif';
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);})
.on('end', function () {
console.log('Finish');
rfl.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek,});
fs.unlinkSync(media);
fs.unlinkSync(ran);
}) .addOutputOptions([`-vcodec`, `libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`, ])
.toFormat('webp')
.save(ran);
} else {
}}}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
if (isGroup && isKickarea && !mek.key.fromMe) {
if (!sender.includes('62')) {
reply('GRUP ONLY +62!');
rfl.groupRemove(from, [sender]);
}
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
if (bad.includes(messagesD)) {
if (isGroupAdmins) return reply("Admin mah bebas ye kan😎");
kntl = `${args.join(' ')}`
nama = ("TOXIC DETECTED")
impostor = ("NIH PERGI KE ARAB, TOBAT SONO\nSUPAYA GAK TOXIC")
rfl.sendMessage(from, { degreesLatitude: 21.422487, degreesLongitude: 39.826206,
name: nama,
address: impostor,
jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, MessageType.liveLocation, {quoted:freply})
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Mulai mendownload sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					rfl.sendMessage(to, media, sticker, {quoted:fkontak})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let b = `*Hai kak @${senderr.split('@')[0]}*\n*Kamu belum verifikasi Untuk verifikasi harap ketik #verify*`
let a = `*Harap verifikasi dulu*`
let ton = [{
buttonId: `${prefix}verify`,
buttonText: {
displayText: ` 𝗩𝗲𝗿𝗶𝗳𝘆  `,
},
type: 1,}]
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let chats =
type === 'conversation' && mek.message.conversation
? mek.message.conversation
: type == 'imageMessage' && mek.message.imageMessage.caption
? mek.message.imageMessage.caption
: type == 'videoMessage' && mek.message.videoMessage.caption
? mek.message.videoMessage.caption
: type == 'extendedTextMessage' && mek.message.extendedTextMessage.text
? mek.message.extendedTextMessage.text
: type == 'buttonsResponseMessage' && mek.message[
type].selectedButtonId
? mek.message[type].selectedButtonId
: type == 'stickerMessage' &&
getCmd(mek.message[
type].fileSha256.toString(
'base64')) !== null &&
getCmd(mek.message[
type].fileSha256.toString(
'base64')) !== undefined
? getCmd(mek.message[
type].fileSha256.toString(
'base64'))
: '';
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=
if (game.isTebakLirik(from, tebaklirik)) {
if (!chats.toLowerCase().includes(game.getJawabanTL(from, siapaaku))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))) {
  var htgml = randomNomor(100)
  addBalance(sender, htgml, balance)
  b =`GAME TEBAK LIRIK\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTL(from, tebaklirik)}\n*Hadiah :* $${htgml}\nIngin bermain lagi? kirim *${prefix}tebaklirik*`
sendButMessage(from, b, `🅚🅐🅜🅤 🅙🅐🅖🅞`, [
              {              
                buttonId: `${prefix}tebaklirik`,
                buttonText: {
                  displayText: `🕹𝐌𝐚𝐢𝐧 𝐋𝐚𝐠𝐢`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}limit`,
                buttonText: {
                  displayText: `💳𝐏𝐫𝐨𝐟𝐢𝐥𝐞`,
                },
                type: 1,
              },
            ]);           
  tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}
    }
if (game.isSiapaAku(from, siapaaku)) {
if (!chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))) {
  var htgmu = randomNomor(100)
  addBalance(sender, htgmu, balance)
  b = `𝐆𝐀𝐌𝐄 𝐒𝐈𝐀𝐏𝐀𝐊𝐀𝐇 𝐀𝐊𝐔\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, siapaaku)}\n*Hadiah :* $${htgmu}\n Ingin bermain lagi? kirim *${prefix}siapakahaku*`
sendButMessage(from, b, `🅚🅐🅜🅤 🅙🅐🅖🅞`, [
              {              
                buttonId: `${prefix}siapaaku`,
                buttonText: {
                  displayText: `🕹𝐌𝐚𝐢𝐧 𝐋𝐚𝐠𝐢`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}limit`,
                buttonText: {
                  displayText: `💳𝐏𝐫𝐨𝐟𝐢𝐥𝐞`,
                },
                type: 1,
              },
            ]);                  
  siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
}
    }
if (game.isTebakKata(from, tebakkata)) {
if (!chats.toLowerCase().includes(game.getJawabanTK(from, siapaaku))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTK(from, tebakkata))) {
  var htgtk = randomNomor(100)
  addBalance(sender, htgtk, balance)
  b = `𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐓𝐀\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTK(from, tebakkata)}\n*Hadiah :* $${htgtk}\nIngin bermain lagi? kirim *${prefix}tebakkata*`
sendButMessage(from, b, `🅚🅐🅜🅤 🅙🅐🅖🅞`, [
              {              
                buttonId: `${prefix}tebakkata`,
                buttonText: {
                  displayText: `🕹𝐌𝐚𝐢𝐧 𝐋𝐚𝐠𝐢`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}limit`,
                buttonText: {
                  displayText: `💳𝐏𝐫𝐨𝐟𝐢𝐥𝐞`,
                },
                type: 1,
              },
            ]);           
  tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}
    }
if (game.isTebakKimia(from, tebakkimia)) {
if (!chats.toLowerCase().includes(game.getJawabanTU(from, siapaaku))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTU(from, tebakkimia))) {
  var reva = randomNomor(100)
  addBalance(sender, reva, balance)
  b = `𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐔𝐍𝐒𝐔𝐑 𝐊𝐈𝐌𝐈𝐀\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTU(from, tebakkimia)}\n*Hadiah :* $${reva}\nIngin bermain lagi? kirim *${prefix}tebakkimia*`
sendButMessage(from, b, `🅚🅐🅜🅤 🅙🅐🅖🅞`, [
              {              
                buttonId: `${prefix}tebakkimia`,
                buttonText: {
                  displayText: `🕹𝐌𝐚𝐢𝐧 𝐋𝐚𝐠𝐢`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}limit`,
                buttonText: {
                  displayText: `💳𝐏𝐫𝐨𝐟𝐢𝐥𝐞`,
                },
                type: 1,
              },
            ]);           
  tebakkimia.splice(game.getTUPosi(from, tebakkimia), 1)
}
    }
if (game.isTebakBendera(from, tebakbendera)) {
if (!chats.toLowerCase().includes(game.getJawabanTB(from, siapaaku))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))) {
  var syahira = randomNomor(100)
  addBalance(sender, syahira, balance)
  b = `𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐁𝐄𝐍𝐃𝐄𝐑𝐀\n *Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n*Hadiah :* $${syahira}\nIngin bermain lagi? kirim *${prefix}tebakbendera*`
sendButMessage(from, b, `🅚🅐🅜🅤 🅙🅐🅖🅞`, [
              {              
                buttonId: `${prefix}tebakbendera`,
                buttonText: {
                  displayText: `🕹𝐌𝐚𝐢𝐧 𝐋𝐚𝐠𝐢`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}limit`,
                buttonText: {
                  displayText: `💳𝐏𝐫𝐨𝐟𝐢𝐥𝐞`,
                },
                type: 1,
              },
            ]);           
  tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
}
    }
if (game.isTebakAnime(from, tebakanime)) {
if (!chats.toLowerCase().includes(game.getJawabanTA(from, siapaaku))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTA(from, tebakanime))) {
  var vinna = randomNomor(100)
  addBalance(sender, vinna, balance)
  b = `𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐀𝐍𝐈𝐌𝐄\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTA(from, tebakanime)}\n*Hadiah :* $${vinna}\nIngin bermain lagi? kirim *${prefix}tebakanime*`
sendButMessage(from, b, `🅚🅐🅜🅤 🅙🅐🅖🅞`, [
              {              
                buttonId: `${prefix}tebakanime`,
                buttonText: {
                  displayText: `🕹𝐌𝐚𝐢𝐧 𝐋𝐚𝐠𝐢`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}limit`,
                buttonText: {
                  displayText: `💳𝐏𝐫𝐨𝐟𝐢𝐥𝐞`,
                },
                type: 1,
              },
            ]);           
  tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}
    }
if (game.isTebakGambar(from, tebakgambar) && isRegistered) {
if (!chats.toLowerCase().includes(game.getJawabanTG(from, siapaaku))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))) {
  var htgm = randomNomor(100)
  addBalance(sender, htgm, balance)
  b = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* $${htgm}\n\n*`
sendButMessage(from, b, `🅚🅐🅜🅤 🅙🅐🅖🅞`, [
              {              
                buttonId: `${prefix}tebakgambar`,
                buttonText: {
                  displayText: `🕹𝐌𝐚𝐢𝐧 𝐋𝐚𝐠𝐢`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}limit`,
                buttonText: {
                  displayText: `💳𝐏𝐫𝐨𝐟𝐢𝐥𝐞`,
                },
                type: 1,
              },
            ]);           
  tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
}
    }

if (game.isfam(from, family100)) {
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy) {
  if (budy.toLowerCase().includes(i)) {
    var htgmp = Math.floor(Math.random() * 20) + 1
    atm.addKoinUser(sender, htgmp, _uang)
    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
    var anug = anjuy.indexOf(i)
    anjuy.splice(anug, 1)
  }
}
if (anjuy.length < 1) {
  rfl.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
  family100.splice(game.getfamposi(from, family100), 1)
}
    }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
      if (isGroup && isAntiLink && !isOwner && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
            if (isGroupAdmins) return reply("Admin mah bebas ye kan😎");
                setTimeout( () => {
		rfl.groupRemove(from, [sender]).catch((e) => { rfl.reply(from, global.db.mess.BotAdmin, mek) })
		}, 7000)
        setTimeout( () => {
        rfl.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        rfl.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        rfl.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
        rfl.sendMessage(from, `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick dalam 3 Detik❗`, MessageType.text)
        }, 0)               
               
        }
        }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
if (isGroup && isAntivirtex && !mek.key.fromMe) {
if (budy.length > 1200) {
if (isGroupAdmins) return reply("Admin mah bebas ye kan😎");
        rfl.updatePresence(from, Presence.composing)
        let ayhd = "\n".repeat(420)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`        
		setTimeout( () => {
		rfl.groupRemove(from, [kic]).catch((e) => { rfl.reply(from, global.db.mess.BotAdmin, mek) })
		rfl.sendMessage(`6289501060783@s.whatsapp.net`, `wa.me/${sender.split("@")[0]}\n telah mengirim Virtex ❗`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "BOT WHATSAPP",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:"https://wa.me/6289501060783"}}})            
        }, 7000)
        setTimeout( () => {
        rfl.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        rfl.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        rfl.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
        rfl.reply(from, `${ayhd}\nAnti Virtex Terdeteksi, pengguna ${kic} Telah Mengirimkan Virtex\n\nMaaf ${pushname} Anda akan di kick 3 detik lagi❗`, mek)                
        }, 0)               
               
        }
        }
		
   //=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
    if (messagesD.match("https://youtu.be/")){
       if (!isGroup) return
       if (!isAntiLinkytv) return
       if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Video*')
       rfl.updatePresence(from, Presence.composing)
       var kic = `${sender.split("@")[0]}@s.whatsapp.net`
       reply(`*「 Link YouTube Video Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
       setTimeout( () => {
              rfl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
       }, 1000)
       setTimeout( () => {
              rfl.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
       }, 0)
}
//==============================================================
  /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉??𝙄 𝙇??𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘾𝙃𝘼𝙉𝙉𝙀𝙇***\\\\\
   if (messagesD.match("https://youtube.com/")){
          if (!isGroup) return
          if (!isAntiLinkytc) return
          if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Channel*')
          rfl.updatePresence(from, Presence.composing)
          var kic = `${sender.split("@")[0]}@s.whatsapp.net`
          reply(`*「 Link YouTube Channel Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
          setTimeout( () => {
                 rfl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
          }, 1000)
          setTimeout( () => {
                 rfl.updatePresence(from, Presence.composing)
   reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
          }, 0)
   }
   //==============================================================
   /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈***\\\\\
   if (messagesD.match("https://www.instagram.com/")){
          if (!isGroup) return
          if (!isAntiLinkig) return
          if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Instagram*')
          rfl.updatePresence(from, Presence.composing)
          var kic = `${sender.split("@")[0]}@s.whatsapp.net`
          reply(`*「 Link Instagram Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
          setTimeout( () => {
                 rfl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
          }, 1000)
          setTimeout( () => {
                 rfl.updatePresence(from, Presence.composing)
   reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
          }, 0)
   }
   //=========================================================================
   //=========================================================================
   /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆***\\\\\
   if (messagesD.match("https://facebook.com/")){
   if (!isGroup) return
   if (!isAntiLinkfb) return
   if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Facebook*')
   rfl.updatePresence(from, Presence.composing)
   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
   reply(`*「 Link Facebook Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
   setTimeout( () => {
          rfl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
   }, 1000)
   setTimeout( () => {
          rfl.updatePresence(from, Presence.composing)
   reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
   }, 0)
   }
    //=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
/*if (isSimi) {		
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=ID`)
                     sami = simi.success
                        rfl.sendMessage(from, `${sami}`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }*/
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×
rfl.updatePresence(from, Presence.composing)// hapus aja bang kalo risih	
rfl.chatRead(from, "read")// hapus aja bang kalo risih
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
runt = process.uptime() 
rfl.setStatus(`Aktif Selama : ${kyun(runt)} `).catch((_)=>_);
settingstatus = new Date() * 1;            
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
if (isCmd && !isGroup)
atm.addKoinUser(sender, randomNomor(100), _uang)
console.log(color('[','magenta'), color('➳','white'), color(']','white'), color('NAMA','magenta'), color(pushname,'magenta'), color('MENGGUNAKAN','white'), color('FITUR :','magenta'), color(command, 'magenta'), 'args :', color(args.length))      
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
if (isCmd && isGroup)
atm.addKoinUser(sender, randomNomor(100), _uang)
console.log(color('[','magenta'), color('➳','white'), color(']','white'), color('NAMA','magenta'), color(pushname,'magenta'), color('MENGGUNAKAN','white'), color('FITUR :','magenta'), color(command, 'magenta'), color(`Di Group ${groupName}`,'white'), 'args :', color(args.length))
addBalance(sender, randomNomor(80), balance)

////=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
let spam1 = `𝙹𝚊𝚗𝚐𝚊𝚗 𝚜𝚙𝚊𝚖 𝚢𝚊 𝚔𝚊𝚔\n𝙱𝚎𝚛𝚒𝚔𝚊𝚗 𝚓𝚎𝚍𝚊 3 𝚍𝚎𝚝𝚒𝚔/𝚙𝚎𝚛𝚒𝚗𝚝𝚊𝚑`
let spam2 = 'rflbotz🥰'
let spam3 = [{
buttonId: `${prefix}maap`,
buttonText: {
displayText: `💈𝘔𝘢𝘢𝘧  `,
},
type: 1,}]
if (isCmd && msgFilter.isFiltered(from)) {
return sendButMessage (from, spam1, spam2, spam3, { quoted: freply})
}
if (isCmd) msgFilter.addFilter(from)

//==============================================================================================        
let prem1 = `𝙽𝙾𝚃 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙳𝙴𝚃𝙴𝙲𝚃`
let prem2 = `*Hai kak @${senderr.split('@')[0]}*\nJika kamu ingin menggunakan fitur ini kamu harus menjadi user premium\nChat owner jika ingin membeli premium`
let prem3 = [{
buttonId: `${prefix}owner`,
buttonText: {
displayText: ` 𝗢𝘄𝗻𝗲𝗿  `,
},
type: 1,}]
//==============================================================================================        
if (!isCmd && from.endsWith('@s.whatsapp.net')) {
rfl.anonymous = rfl.anonymous ? rfl.anonymous : {}
let room = Object.values(rfl.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
if (room) {
  if (/^.*(next|leave|start)/.test(body)) return
  if ([`${prefix}next`, `${prefix}leave`, `${prefix}start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return
  let other = [room.a,
  room.b].find(user => user !== sender)
  if (type === "conversation") {
    rfl.sendMessage(other, mek.message.conversation, text);
  } else {
  }
}
    }
//==============================================================================================        
switch(command){
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×case 'herolist

//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×case 'hhehe
/*case 'sewa':
if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
reply(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/bot/sewa.json', JSON.stringify(sewa))
reply(mess.success)
} else {
reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break*/
//=============================================================================================================================
case 'waifuhd':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
v = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
reply(mess.wait)              
buff = sendMediaURL(from, v.url, )
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await rfl.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await rfl.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
rfl.relayWAMessage(prep)
limitAdd(sender, limit) 
break
case 'waifu': 
            const waifu = fs.readFileSync('./lib/waifu.json')
            const waifuJson = JSON.parse(waifu)
            const randIndex = Math.floor(Math.random() * waifuJson.length)
            const randKey = waifuJson[randIndex]
            rfl.sendFileFromUrl(from, randKey.image, 'Waifu.jpg', randKey.teks)
            break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
/*case 'sewalist': 
case 'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
reply(txtnyee)
break
//=============================================================================================================================
case 'sewacheck':
case 'ceksewa': 
if (!isGroup) return reply(mess.only.group)
if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
reply(sewanya)
break*/
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×case 'hhehe
case 'antibule':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.FromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply('Bot not admin');
if (args[0] == 'on') {
if (isKickarea) return reply('Sudah aktif!!');
kickarea.push(from);
fs.writeFileSync('./database/group/antibule.json',JSON.stringify(kickarea));
reply('Sukses mengaktifkan kickarea!');
} else if (args[0] == 'off') {
kickarea.splice(from, 1);
fs.writeFileSync('./database/group/antibule.json',JSON.stringify(kickarea));
reply('Sukses mematikan kickarea!');
} else if (!q) {
sendButMessage(from, `MODE ANTIBULE`, `Silahkan pilih salah satu`, [{buttonId: `kickarea on`,buttonText: {displayText: `on`,},type: 1, },{buttonId: `kickarea off`, buttonText: { displayText: `off`,}, type: 1,}, ]);}
break;
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×case 'hhehe
  /*  case 'herolist':  {
                await herolist().then((ress) => {
                    let hm = `*Menampilkan list hero mobile legends*\n\n`
                    for (var i = 0; i < ress.hero.length; i++) {
                        hm += '➣  ' + ress.hero[i] + '\n'
                    }
                    reply(hm)
                    })
                break;*/
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×        
						case 'pantun':{
									const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
									const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
									sendButMessage(from, `${ran_pantun}`, `Nih Kak`, [
									{
										buttonId: `#pantun`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											limitAdd(sender, limit)
									}
									limitAdd(sender, limit)
									break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×            case 'tinyurl':
               case 'tinyurl':
              let bu = args.join(" ")
                request(`https://tinyurl.com/api-create.php?url=${bu}`, function (error, response, body) {
                try {
                    reply(body)
                  } catch (e) {
                    reply(e)
                  }
                })
                break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×case 'cnn':
              case 'cnn':
                var result = await cnn()
                console.log(result)
                cn = 'CNN NEWS'
                for (let i = 0; i < result.length; i++) {
                  cn += `\n\nTitle : ${result[i].judul}\nLink : ${result[i].link}\nImage: ${result[i].thumb}`
                }
                buff = await getBuffer(result[0].thumb)
                rfl.sendMessage(from, buff, MessageType.image, {caption: cn})
                break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
case 'covidindo':
                c = await covid()
                var { kasus, kematian, sembuh } = c[0]
                reply(`Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`)
                break
//==================================================================================//==================================================================================
case 'next': case 'leave': case "stop": {
  if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
  rfl.anonymous = rfl.anonymous ? rfl.anonymous : {}
  let room = Object.values(rfl.anonymous).find(room => room.check(sender))
  if (!room) {
    await rfl.sendButton(from, '_Kamu tidak sedang berada di anonymous chat_', `${rfl.user.name}`, 'Cari Partner', prefix + 'start')
    return false
  }
  reply('_You stopped matchmaking_')
  let other = room.other(sender)
  if (other) await rfl.sendButton(other, '_Partner meninggalkan chat_', `${rfl.user.name}`, 'Cari Partner', prefix + 'start')
  delete rfl.anonymous[room.id]
  if (command === 'leave' || command === "stop") break
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
case 'mulai': case 'start': case "anonymous": case "mutual": {
  if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
  rfl.anonymous = rfl.anonymous ? rfl.anonymous : {}
  if (Object.values(rfl.anonymous).find(room => room.check(sender))) {
    await rfl.sendButton(from, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', `${rfl.user.name}`, 'Keluar', `${prefix}leave`)
    return false
  }
  let room = Object.values(rfl.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
  if (room) {
    await rfl.sendButton(room.a, '_Partner was found_', `${rfl.user.name}`, 'Next', prefix + 'next')
    room.b = sender
    room.state = 'CHATTING'
    await rfl.sendButton(room.b, '_Partner was found_', `${rfl.user.name}`, 'Next', prefix + 'next')
  } else {
    let id = + new Date
    rfl.anonymous[id] = {
id,
a: sender,
b: '',
state: 'WAITING',
check: function (who = '') {
  return [this.a,
  this.b].includes(who)
},
other: function (who = '') {
  return who === this.a ? this.b : who === this.b ? this.a : ''
},
    }
    await rfl.sendButton(from, 'ᴡᴀɪᴛɪɴɢ ᴀ ᴘᴀʀᴛɴᴇʀ', `𝙳𝙴𝙵𝙵𝙱𝙾𝚃𝚉`, 'Keluar', prefix + 'leave')
  }
  break
}
//==================================================================================
case 'jadibot':
jadibot(reply,rfl,from, mek)
break
//==================================================================================
case 'autosticker':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (args[0] == 'on') {
if (isAutoSticker) return reply('Sudah aktif!!');
autosticker.push(from);
fs.writeFileSync('./database/group/autosticker.json',JSON.stringify(autosticker));
reply('Sukses mengaktifkan autosticker!');
} else if (args[0] == 'off') {
autosticker.splice(from, 1);
fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(autosticker));
reply('Sukses mematikan autosticker!');
} else if (!q) {
sendButMessage(from, `MODE AutoSticker`, `Silahkan pilih salah satu`, [{buttonId: `#autosticker on`,buttonText: {displayText: `ON`,},type: 1,},{ buttonId: `#autosticker off`,buttonText: {displayText: `OFF`,},type: 1, },]);}
break;
//==================================================================================
case 'antilinkyoutube-v':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                      if (Number(args[0]) === 1) {
                                             if (isAntiLinkytv) return reply('anti link YouTube video sudah aktif')
                                             antilinkytv.push(from)
                                             fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
                                             reply('Sukses mengaktifkan anti link YouTube di group ini ✔️')
                                             rfl.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Video`, text)
                                      } else if (Number(args[0]) === 0) {
                                             if (isAntiLinkytv) return reply('Mode anti link YouTube video sudah Mati')
                                             antilinkytv.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
                                             reply('Sukes menonaktifkan anti link YouTube video di group ini ✔️')
                                      } else {
                                             reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                      }
                                      break    
//==================================================================================
case 'antilinkyoutube-c':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                      if (Number(args[0]) === 1) {
                                             if (isAntiLinkytc) return reply('anti link YouTube channel sudah aktif')
                                             antilinkytc.push(from)
                                             fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
                                             reply('Sukses mengaktifkan anti link YouTube channel di group ini ✔️')
                                             rfl.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Channel`, text)
                                      } else if (Number(args[0]) === 0) {
                                             if (isAntiLinkytc) return reply('Mode anti link YouTube channel sudah Mati')
                                             antilinkytc.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
                                             reply('Sukes menonaktifkan anti link YouuTube channel di group ini ✔️')
                                      } else {
                                             reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                      }
                                      break
//==================================================================================
case 'antilinkinstagram':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                      if (Number(args[0]) === 1) {
                                             if (isAntiLinkig) return reply('UDAH NYALA KAK')
                                             antilinkig.push(from)
                                             fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
                                             reply('SUKSES MENGAKTIFKAN ANTI LINK INSTAGRAM')
                                             rfl.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link IG`, text)
                                      } else if (Number(args[0]) === 0) {
                                             if (!isAntiLinkig) return reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                             antilinkig.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
                                             reply('SUKSES MEMATIKAN ANTI LINK IG DI GROUP')
                                      } else {
                                             reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                      }
                                      break
//==================================================================================
case 'antilinktelegram':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
                                     if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
                                     if (args[0] === '1') {
                                     if (isAntiLinkTelegram) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                            antitelegram.push(from)
                                            fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
                                            reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK TELEGRAM SUDAH ENABLE!')
                                            rfl.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                     } else if (args[0] === '0') {
                                            antitelegram.splice(from, 1)
                                            fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
                                            reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK TELEGRAM SUDAH DISABLE!')
                                     } else {
                                            reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
                                     }
                                     break
//==================================================================================
case 'antilinkfacebook':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
                                      if (args[0] === '1') {
                                      if (isAntiLinkfb) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                      antilinkfb.push(from)
                                             fs.writeFileSync('./database/group/antilinkfb.json', JSON.stringify(antilinkfb))
                                             reply('「 *Facebook DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK Facebook SUDAH ENABLE!')
                                             rfl.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                      } else if (args[0] === '0') {
                                             antilinkfb.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkfb.json', JSON.stringify(antilinkfb))
                                             reply('「 *Facebook DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK Facebook SUDAH DISABLE!')
                                      } else {
                                             reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
                                      }
                                      break    
//==================================================================================
/*case 'premiumcheck':
     case 'cekpremium':
     case 'cekprem':
            if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
             let cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
             reply(`*Expire :* ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s) ${cekExp.seconds} second(s)`)
            break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×𝘤
  case 'listprem':
  case 'listpremium': 
  let txt = `List Premium\nJumlah : ${_premium.length}\n\n`
                let men = [];
                for (let i of _premium){
                    men.push(i.id)
                    let checkExp = ms(i.expired - Date.now())
                    txt += `*ID :* @${i.id.split("@")[0]}\n*Expire :* ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s) ${checkExp.seconds} second(s)\n\n`
                }
                mentions(txt, men, true)
                break
//==================================================================================
/*case 'premium':
             if (!isOwner && mek.key.fromMe) return reply(mess.only.owner)
             if (args[0] === 'add') {
             if (mek.message.extendedTextMessage != undefined) {
             mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
             premium.addPremiumUser(mentioned[0], args[2], _premium)
             reply(`*「 PREMIUM ADDED 」*\n\n*ID*: ${mentioned[0]}\n*Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
         } else {
             premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
             reply(`*「 PREMIUM ADDED 」*\n\n*ID*: ${args[1]}@s.whatsapp.net\n*Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
         }
         } else if (args[0] === 'del') {
             if (mek.message.extendedTextMessage != undefined) {
             mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
            fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
            reply(mess.success)
         } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
            fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
            reply(mess.success)
         }
         } else {
             reply(mess.wrongFormat)
         }
            break*/
//==================================================================================

case 'verify': case 'daftar':
 wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let serialUser = createSerial(14)
										if (isUser) return reply('Kamu sudah terdaftar di dalam database')
										addRegisterUser(sender, pushname, bio_user, wib)
										let ran_blc = randomNomor(50)
										addBalance(sender, ran_blc, balance)
										fs.writeFileSync('./database/user.json', JSON.stringify(_user))
							
										teks = `
┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 VERIFICATION SUKSES 」*
│ *Terimakasih Sudah*
│ *Mendaftarkan Diri*
│ *Dalam Database*
└┬────────────┈ ⳹
┌┤◦➛ *Nama :* ${pushname}
││◦➛ *Nomor :* @${sender.split('@')[0]}
││◦➛ *SN :* ${serialUser}
││◦➛ *Total Pengguna :* ${_user.length} Orang
││◦➛ *Status :* ☑️ Terverifikasi
│└────────────┈ ⳹
│ *Waktu Pendaftaran*
│ *Jam :* ${wita}
├───────────────
│ *Silahkan Ketik ${prefix}rules*
│ *Untuk Melanjutkan Pengguna*
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
*「 ${NamaBot} 」*`
										let papako = [{
											"buttonId": `.menu`,
											"buttonText": {
												"displayText": "MENU"
												},
												"type": "RESPONSE"
												},{
													"buttonId": `.limit`,
													"buttonText": {
														"displayText": "PROCFILE"
														},
														"type": "RESPONSE"
													}]
											sendButLocation(from, teks , `Thank for verification\n${control.NamaBot}™© | By ${control.NamaOwner}`, Rfake, papako, {contextInfo: { mentionedJid: [sender]}})
									break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×𝘤
case 'tess':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
fakeReply('-$-$-') 
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×𝘤

   case 'claim':   
              case 'klaim':
              if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
                    if (isClaimOn) return reply('Kamu sudah ngeclaim hari ini')
                    addLevelingXp(sender, 100, _level)
                    var htgm6 = randomNomor(1000)
                    addBalance(sender, htgm6, balance)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    await reply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *100Xp* dan *$${htgm6}* balance
Dari claim harian`)
                    break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×𝘤
/*case 'cariteman': 
//sertakan nama aku jangan claim jangan recode, biarkan kek gini oke! @arifirazzaq2001
//case by Arifi Razzaq
//bug fixed by arifi razzaq
if (isGroup) return  reply( 'Fitur ini tidak bisa dijalankan di dalam grup')
hem = getUserRandomId(_user).replace('@s.whatsapp.net','')
await reply('Sedang Mencari Seseorang...')
try {
ppimg = await rfl.getProfilePicture(`${hem.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nama* : ${pushname}
  ‣ *Nomor* : ${hem.split("@")[0]}
‣ *APi* : wa.me/${hem.split("@")[0]}?text=halo

Klik APi untuk memulai obrolan`
  its = await getBuffer (ppimg)
  rfl.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
                await reply( `Seseorang Ditemukan: \n*${prefix}next* — Cari Teman Lagi`)
                await limitAdd(sender, limit)
            break*/
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×𝘤
case 'requestdev':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
      if (args.length < 1) return reply(`Ketik ${prefix}request [fiturnya] [contohnya]`) 
      reply('Terima Kasih Telah Request Pada Pada Developer, ')
      rfl.sendMessage(`6289501060783@s.whatsapp.net`,`*Request :* ${v}`, text) //Jangan diubah bang
      break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
case 'request':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
      if (args.length < 1) return reply(`Ketik ${prefix}request [fiturnya] [Contohnya kayak mana]`) 
      reply('Terima Kasih Telah Request Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
      rfl.sendMessage(`${control.NomorOwner}@s.whatsapp.net`,`*Request :* ${v}`, text)
      break      
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
case 'report':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
      if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`)       
      reply('Terima Kasih Telah Melaporkan Bug Pada Devoloper, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
      rfl.sendMessage('6289501060783@s.whatsapp.net',`*Bug Report:* ${v}`, text) //jangan diubah ya adik²
      break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×𝘤
case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
              if (!isGroup) return reply(mess.only.group)
              let resp = _level
             _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×𝘤
 case 'level': 
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
              if (!isGroup) return reply(mess.only.group)
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await rfl.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=rflbotz&img=${profilePic}&background=https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg&username=${pushname}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              buttons = [{ buttonId: `${prefix}claim`, buttonText: { displayText: 'CLAIM' }, type: 1 },{ buttonId: `${prefix}leaderboard`, buttonText: { displayText: 'LEADEBOARD' },type:1}]
              imageMsg = (await rfl.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'follow @rfl.xyz', imageMessage: imageMsg,
              contentText:`${teks}`,buttons,headerType:4}
              prep = await rfl.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              rfl.relayWAMessage(prep)
              break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×𝘤
case 'antidelete':
    case 'antidel':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
    if (!isGroup) return reply(mess.only.group)
    if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
    if (!q) return reply(`Pilih enable atau disable`)
    if (q.toLowerCase() === 'enable') {
      if (isAntidel) return reply(`Udah aktif`)
      antidel.push(from)
      fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
      reply('anti delete grup aktif')
    } else if (q.toLowerCase() === 'disable') {
      let anu = antidel.indexOf(from)
      antidel.splice(anu, 1)
      fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
      reply('antidelete grup nonaktif')
    } else {
      testqq(from, `antiviewonce`)
    }
    break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×𝘤
case 'maap':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
reply('𝗜𝘆𝗮 𝗱𝗶𝗺𝗮𝗮𝗳𝗶𝗻 𝘁𝗮𝗽𝗶 𝗷𝗮𝗻𝗴𝗮𝗻 𝗯𝗲𝗴𝗶𝘁𝘂 𝘆𝗮 𝗹𝗮𝗶𝗻 𝗸𝗮𝗹𝗶\n𝙒𝙖𝙩𝙚𝙧𝙗𝙤𝙤𝙢 𝙢𝙚𝙣𝙣') 
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'bcaudio':		
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
             	     if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
				anu = await rfl.chats.all()
				if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
				let encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				bc = await rfl.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				rfl.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftroli,caption: `[ *BROADCAST* ]\n\n${body.slice(9)}`})
				}
				reply('Suksess broadcast')
				}
				break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'bcstik':		
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
	               if (sender.split("@")[0] != owner) return reply("Command only for owner bot")			 
				anu = await rfl.chats.all()
				if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
				let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				bc = await rfl.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				rfl.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
				}
		      	reply('Suksess broadcast')
				}
				break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'tebakkata': case 'tk': {
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${control.lolkey}`)
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.pertanyaan}\n\nWaktu : ${gamewaktu}s`)
  let ahhh = anu.data.result.jawaban.toLowerCase()
  game.addkata(from, ahhh, gamewaktu, tebakkata)
  gameAdd(sender, glimit)
}
  break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'tebakkimia': case 'tuk': {
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakKimia(from, tebakkimia)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${control.lolkey}`)
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Lambang unsur ${anu.data.result.nama} adalah?\n\nWaktu : ${gamewaktu}s`)
  let revasayank = anu.data.result.lambang.toLowerCase()
  game.addkimia(from, revasayank, gamewaktu, tebakkimia)
  gameAdd(sender, glimit)
}
  break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'tebakbendera': case 'tb': {
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${control.lolkey}`)
  let petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Bendera negara manakah itu ${anu.data.result.flag}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
  let ikasayank = anu.data.result.name.toLowerCase()
  game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
  gameAdd(sender, glimit)
}
  break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'tebakanime': case 'ta': {
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakAnime(from, tebakanime)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebakchara?apikey=${control.lolkey}`)
  let petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  sendMediaURL(from, anu.data.result.image, monospace(`Silahkan tebak karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`), mek)
  let nurulsayank = anu.data.result.name.toLowerCase()
  game.addanime(from, nurulsayank, gamewaktu, tebakanime)
  gameAdd(sender, glimit)
}
  break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'siapaaku': case 'siapakahaku': case 'sa': {
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (!isGroup) return reply(mess.only.group)
  if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${control.lolkey}`)
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nWaktu : ${gamewaktu}s`)
  let anau = anu.data.result.answer.toLowerCase()
  game.addsyiko(from, anau, gamewaktu, siapaaku)
  gameAdd(sender, glimit)
}
  break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'tebaklirik': case 'tl': {
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (!isGroup) return reply(mess.only.group)
  if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${control.lolkey}`)
  let petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
  let anal = anu.data.result.answer.toLowerCase()
  game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
  gameAdd(sender, glimit)
}
  break
  //=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'gura':
case 'gawrgura':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
    if (isBanned) return reply(mess.baned)
    if (isGame(sender,isGroupAdmins, isOwner, gcount, glimit)) return reply(`Limit kamu sudah habis`)
    reply(mess.wait)
    fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
   .then(res => res.text())
   .then(body => {
    let tod = body.split("\n");
    let pjr = tod[Math.floor(Math.random() * tod.length)];
    sendStickerUrl(from, pjr)
}
)
gameAdd(sender, glimit)
         break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×		
case 'tts': case 'gtts': 
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          reply(mess.wait) 
          bogay = body.replace(prefix, '')
          let gtts = require('./lib/gtts')(args[0])
          if (args.length < 2) return rfl.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
          dtt = bogay.slice(8)
          ranm = getRandom('.mp3')
          dtt.length > 600 ? reply('Textnya kebanyakan om') : gtts.save(ranm, dtt, function() {
          sendFileFromStorage(ranm, audio, {quoted: mek, mimetype: 'audio/mp4', ptt: true})
          fs.unlinkSync(ranm)
          limitAdd(sender, limit)
          })
          break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×				                       
	//masih error & males benerin wkkw ntar aja lah
	/*case 'epen':
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isEventon) return reply('*SUDAH AKTIF* !!!')
		  event.push(from)
		  fs.writeFileSync('./lib/data/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  event.splice(from, 1)
		  fs.writeFileSync('./lib/data/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply('eeee')
		  }										
		  break      
		  case 'event':
          pp = 'on or off?'
          but = [
           { buttonId: `!epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButMessage(from, pp, 'Klik tombol untuk mengaktifkan', but, ftroli)
          break        
case 'profile': case 'rpgmenu':
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest 
 • mining
 • mancing
 • luckyday
 • myinventori
 • topleaderboard
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 • killslime
 • killgoblin
 • killdevil
 • killbehemoth
 • killdemond
 • killdemondking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
 but = [
          { buttonId: `!inventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', mrpg, but, {quoted: mek})
          break
    case 'joinrpg':
          if (!isGroup) return reply(mess.only.group)  
		  if (isPetualang) return reply('Kamu sudah menjadi petualang')
		  if (args.length < 1) return reply(`Kirim perintah ${prefix + command} nama`) 
	   	  _petualang.push(sender)
		  fs.writeFileSync('./lib/data/inventori.json', JSON.stringify(_petualang))        
	      addInventori(sender)
	      addLevelingId(sender) 
          let name = args[0]
          try {
		  ppimg = await rfl.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		  } catch {
	      ppimg = 'https://telegra.ph/file/ea03e6d664f8406465f00.jpg'	
		  }
		  let serialUser = createSerial(14)
          let anuu = monospace(`「 SUKSES JOIN RPG 」\n「 PROFILE 」\n • Nama : ${name}\n • Level : ${getLevelingLevel(sender)}\n • Status : ${elit}\n • Xp :  ${getLevelingXp(sender)}/${reqXp}\n\n「 RPG GAME 」`)
          haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${name}&member=${pendaftar.length} User&seri=${serialUser}&pp=${ppimg}&bg=https://telegra.ph/file/d34e017b7d744bdcbfac3.jpg`)
          but = [
          { buttonId: `!rpgmenu`, buttonText: { displayText: 'RPG MENU' }, type: 1 }]
          sendButLocation(from, anuu, 'Rpg Game@^1.2.3', haitod, but, {quoted: mek})  
          break
    case 'mybag':
    case 'cekinven':
    case 'inventori':
    case 'myinventori':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
          but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
          sendButMessage(from, done, 'Inventori User', but)
          break

case 'kues': case 'quest': case 'misi':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          var lordpebri = rfl.prepareMessageFromContent(from, {
                        "listMessage": {
						"title": "Hallo kak, Aku rfl!!\nAku adalah admin quest di group ini! \nSilahkan pilih quest yang cocok dengan kakak!\nGabung ke petualang pro untuk membuka quest mode demon",
						"description": "\n*Jadi petualangan pro untuk dapatkan hadiah sepesial>_<*",
						"buttonText": "Silahkan Pilih Misinya Kak!",
						"footerText": "@Quest game",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "Misi Ke-1",
								"rows": [
									{
										"title": "Membunuh Slime",
										"description": "Berburu slime untuk mendapatkan hadiah",
										"rowId": "!slime"
									}
								]
							},
							{
								"title": "Misi Ke-2", 
								"rows": [
									{
										"title": "Membunuh Goblin",
										"description": "Membunuh goblin untuk mendapatkan hadiah",
										"rowId": "!goblin"
									}
								]
							},
							{
								"title": "Misi Ke-3", 
								"rows": [
									{
										"title": "Membunuh Monster Evil Eye",
										"description": "Membunuh monster untuk mendapatkan hadiah",
										"rowId": "!devil"
									}
								]
							},
							{
								"title": "Misi Ke-4",
								"rows": [
									{
										"title": "Membunuh Monster Behemoth",
										"description": "Membunuh monster untuk mendapatkan hadiah",
										"rowId": "!behemoth"
									}
								]
							},
                            {
								"title": "Misi Ke-5",
								"rows": [
									{
										"title": "Membunuh Demon Four Fiends | VIP",
										"description": "Membunuh demon untuk mendapatkan hadiah",
										"rowId": "!demon"
									}
								]
							},
                            {
								"title": "Misi Ke-6",
								"rows": [
									{
										"title": "Membunuh Demon King | VIP",
										"description": "Membunuh demon king untuk mendapatkan hadiah spesial",
										"rowId": "!demonking"
                                  }
								]
							}
						]
					}
				},
			{}
	      )
	      rfl.relayWAMessage(lordpebri, {waitForAck: true})     
          break
    case 'slime': case 'killslime':
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 400)
          addLevelingXp(sender, ez)
          a = randomNomor(55)
          b = randomNomor(400)
          c = randomNomor(80)
          d = randomNomor(3)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', slime, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break      
    case 'goblin': case 'killgoblin':
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 500)
          addLevelingXp(sender, ez)
          a = randomNomor(65)
          b = randomNomor(500)
          c = randomNomor(90)
          d = randomNomor(5)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', goblin, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break                      
    case 'devil': case 'killdevil':
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 600)
          addLevelingXp(sender, ez)
          a = randomNomor(70)
          b = randomNomor(600)
          c = randomNomor(95)
          d = randomNomor(6)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', devil, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break
    case 'behemoth': case 'killbehemoth':
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 700)
          addLevelingXp(sender, ez)
          a = randomNomor(75)
          b = randomNomor(600)
          c = randomNomor(100)
          d = randomNomor(7)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3',behemoth, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break   
    case 'demon': case 'killdemond': 
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
		  if (!isPremium) return reply('Upss sepertinya kakak bukan petualang pro!\nchat ownet untuk menjadi petualang pro')
          ez = Math.ceil(Math.random() * 850)
          addLevelingXp(sender, ez)
          a = randomNomor(90)
          b = randomNomor(900)
          c = randomNomor(120)
          d = randomNomor(10)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demon, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break  
    case 'demonking': case 'killdemondking':
	      if (!isGroup) return reply(mess.only.group)    
          if (!isOwner) return reply ('Hanya Untuk GM')    
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 1000)
          addLevelingXp(sender, ez)
          addLevelingXp(sender, ez)
          addBalance(sender, 1999, balance)
          addEmas(sender, 99)          
          addBesi(sender, 99)
          addDm(sender, 99)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demonking, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break                    
    case 'leaderboard':
	case 'lb':
	      if (!isGroup) return reply(mess.only.group)
	      _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
          let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
          let nom = 0
          try {
          for (let i = 0; i < 10; i++) {
          nom++
          leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
          }
          await reply(leaderboardlvl)
          } catch (err) {
          console.error(err)
          await reply(`minimal 10 user untuk bisa mengakses database`)
          }
          break
    case 'sellikan':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 5 * jmlh
          if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
          sellFish(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)          
          break
    case 'sellbesi':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 10 * jmlh
          if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
          sellBesi(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)                    
          break          
    case 'sellemas':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 25 * jmlh
          if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
          sellEmas(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)                    
          break 
    case 'selldiamond':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          ttl = body.slice(13)
          var etoo = 75 * ttl
          if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
          sellDm(sender, ttl)
          addBalance(sender, etoo, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)                    
          break                                      
    case 'mancing':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)	
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 350)          
	      coin = randomNomor(50)	    
	      ditangkap = Math.ceil(Math.random() * 50)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = monospace(`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
          but = [
          { buttonId: '!mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
          { buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
           ]
          sendButLocation(from, caption, 'Memancing', cing, but, {quoted: mek})      
          }, 6000)
          setTimeout( () => {
		  rfl.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  rfl.sendMessage(from, '🎣Meanarik kail. . .', text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  rfl.sendMessage(from, '🎣Mulai memancing. . .', text) 
		  }, 1500) // 1000 = 1s,
		  addFish(sender, ditangkap)
		  addLevelingXp(sender, xp)
		  addBalance(sender, coin, balance) 
          limitAdd(sender, limit)         
	      break
    case 'adventure':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          let ad = dungeon[Math.floor(Math.random() * dungeon.length)]
	      anu = fs.readFileSync('./lib/rpg/dungeon.js');
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer('https://i.ibb.co/9pKDV3C/072ab52b8430e4b8e71d2e13047ec81c.jpg')  
	      let adven = Math.ceil(Math.random() * 1000)          
	      let money = Math.ceil(Math.random() * 300)					      	      
	      setTimeout( () => {		
          caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
          but = [
          { buttonId: `!myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, caption, 'Memancing', hasm, but, {quoted: mek})   
          }, 7000)
          setTimeout( () => {
		  rfl.sendMessage(from, `Awass`, text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  rfl.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  rfl.sendMessage(from, `${pushname} sedang bertualang`, text) 
		  }, 1500) // 1000 = 1s,
		  addLevelingXp(sender, adven)
		  addBalance(sender, money, balance) 
          limitAdd(sender, limit)         
          break
   	case 'mining':   
   	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
   	      if (!isGroup) return reply(mess.only.group)                         
          if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)                              
          if (!isPetualang) return reply(mess.only.player)
          pp = randomNomor(75)
          emas = randomNomor(15)
          dm = randomNomor(3)
          besi = randomNomor(50)
          done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
          addBalance(sender, pp, balance)          
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
          mining = ('Waitt sedang menguli . . .')
		  setTimeout( () => {		//case by pebri
		  but = [{ buttonId: `!mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
          sendButMessage(from, done, 'Mining', but)
		  }, 9000) // 1000 = 1s,
		  setTimeout( () => {
		  reply('sedang menambang') 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  reply('Mendapatkan emas') 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  reply('done') 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  rfl.sendMessage(from, mining, text, {quoted: mek}) 
		  }, 0) // 1000 = 1s,
	      break	  
    case 'luckyday':  case 'luckytime':
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')
          if (isPremium) {
          ez = Math.ceil(Math.random() * 450)
          a = randomNomor(99)
          b = randomNomor(500)
          c = randomNomor(150)
          addBalance(sender, b, balance)
          addLevelingXp(sender, ez)
          addEmas(sender, a)
          addBesi(sender, c)
          za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButMessage(from, za, '@LuckyTime', but, mek)   
          }else{
          ez = Math.ceil(Math.random() * 300)
          addLevelingXp(sender, ez)
          a = randomNomor(49)
          b = randomNomor(300)
          c = randomNomor(70)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButMessage(from, za, '@LuckyTime', but, mek)          
          }  
          gameAdd(sender, glimit) 
          break*/	              
	case 'suratto': // Masih error
				if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat\nMax 5 Kata`)
				let textp = args.join(' ');
				let noorg2 = textp.split("|")[0]
				let katakita2 = textp.split("|")[1]
				let kataorg2 = `Surat Dari ${sender}`
				try {
				pping = await rfl.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				pping = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let mnik = `
╔════ ◤ *SURAT FITUR* ◢
║╔▸
║╠ *From* : ${pushname}
║╠ *Number* : @${sender.split("@")[0]}
║╠ *For* : You
║╚▸
║╔▸   ﹝ *ISI SURAT* ﹞  
║╠ ${katakita2}
║╚▸
║╔▸   ﹝ *BALAS SURAT* ﹞  
║╠ Untuk Membalas Ketik:
║╠ #suratto (No tujuan|Isi Surat)
║╠ Contoh: 
║╠ #suratto 6285737134572|Hai Juga
║╚▸
╚═══ ◤ *${NamaBot}* ◢ `
				rfl.sendMessage(`${noorg2}@s.whatsapp.net`,pping, image , {caption: mnik, quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender]}}}});	
				reply('Surat Sukses Dikirim')
				break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'sc': case 'script':
reply('https://youtube.com/channel/UCSAcYW8MkFyaVQz9asa3q5Q') //Kalo punya otak jangan diubah ya adik²
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
			
case 'ocr':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
					// Fix Case By Wahyu/Ganss⛔
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let mediau = await rfl.downloadAndSaveMediaMessage(encmedia)
						reply('Sedang scanning gambar untuk diubah menjadi text') 
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					limitAdd(sender, limit)
					break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
				
case 'fdeface': 
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isBanned) return reply(mess.baned)
if (isLimit(sender,isGroupAdmins, isOwner, gcount, glimit)) return reply(`Limit kamu sudah habis`)
  ge = args.join('');
  var pe = ge.split('|')[0];
  var pen = ge.split('|')[1];
  var pn = ge.split('|')[2];
  var be = ge.split('|')[3];
  let fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
  if (args.length < 1) return reply(fde);
  let dipes =
    isQuotedSticker || isQuotedImage
      ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message
          .extendedTextMessage.contextInfo
      : mek;
  let tipes = await rfl.downloadAndSaveMediaMessage(dipes);
  let bufer = fs.readFileSync(tipes);
  let desc = `${pn}`;
  let title = `${pen}`;
  let url = `${pe}`;
  let buu = `https://${be}`;
  var  anu = {
    detectLinks: false,
  };
  var mat = await rfl.generateLinkPreview(url);
  mat.title = title;
  mat.description = desc;
  mat.jpegThumbnail = bufer;
  mat.canonicalUrl = buu;
  rfl.sendMessage(from, mat, MessageType.extendedText, anu);
  limitAdd(sender, limit)
  break;  
	case 'reminder': // by Slavyan 
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isBanned) return reply(mess.baned)
if (isLimit(sender, isGroupAdmins, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis`)
          if (!q)
            return reply(
              `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
            );
          teks = body.slice(10);
          let messRemind = teks.split('/')[0];
          let timeRemind = teks.split('/')[1];
          typeRemind = 'Text';
          if (isQuotedImage) typeRemind = 'Image';
          if (isQuotedSticker) typeRemind = 'Sticker';
          if (isQuotedAudio) typeRemind = 'Audio';
          if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
            typeRemind = 'Text';
          let parsedTime = ms(toMs(timeRemind));
          reminder.addReminder(
            sender,
            messRemind,
            typeRemind,
            timeRemind,
            _reminder
          );
          if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
            await rfl.sendMessage(
              from,
              `── 「 REMINDER 」 ──
      
  Reminder berhasil diaktifkan!
  ➸ Pesan: ${messRemind}
  ➸ Type: Text
  ➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
                parsedTime.seconds
              } detik
  ➸ Untuk: @${sender.split('@')[0]}
      `,
              text,
              { contextInfo: { mentionedJid: [sender] } }
            );
            let intervRemind = setInterval(async () => {
              if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                anu = await reminder.getReminderMsg(sender, _reminder);
                rfl.sendMessage(
                  from,
                  `── 「 REMINDER 」 ──
  
  ⏰ @${sender.split('@')[0]} ⏰
  ➸ Pesan: ${messRemind}
  ➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                  text,
                  { contextInfo: { mentionedJid: [sender] } }
                );
                _reminder.splice(
                  reminder.getReminderPosition(sender, _reminder),
                  1
                );
                fs.writeFileSync(
                  './database/reminder.json',
                  JSON.stringify(_reminder)
                );
                clearInterval(intervRemind);
              }
            }, 1000);
          } else if (isQuotedSticker) {
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm'))
              .message.extendedTextMessage.contextInfo;
            media = await rfl.downloadAndSaveMediaMessage(encmedia);
            await rfl.sendMessage(
              from,
              `── 「 REMINDER 」 ──
      
  Reminder berhasil diaktifkan!
  ➸ Pesan: ${messRemind}
  ➸ Type: Sticker
  ➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
                parsedTime.seconds
              } detik
  ➸ Untuk: @${sender.split('@')[0]}
      `,
              text,
              { contextInfo: { mentionedJid: [sender] } }
            );
            let intervRemind = setInterval(async () => {
              if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                anu = await reminder.getReminderMsg(sender, _reminder);
                rfl.sendMessage(
                  from,
                  `── 「 REMINDER 」 ──
  
  ⏰ @${sender.split('@')[0]} ⏰
  ➸ Pesan: ${messRemind}
  ➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                  text,
                  { contextInfo: { mentionedJid: [sender] } }
                );
                rfl.sendMessage(from, fs.readFileSync(media), sticker);
                _reminder.splice(
                  reminder.getReminderPosition(sender, _reminder),
                  1
                );
                fs.writeFileSync(
                  './database/reminder.json',
                  JSON.stringify(_reminder)
                );
                clearInterval(intervRemind);
              }
            }, 1000);
          } else if (isQuotedImage) {
            encmedia = isQuotedImage
              ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message
                  .extendedTextMessage.contextInfo
              : mek;
            media = await rfl.downloadAndSaveMediaMessage(encmedia);
            await rfl.sendMessage(
              from,
              `── 「 REMINDER 」 ──
      
  Reminder berhasil diaktifkan!
  ➸ Pesan: ${messRemind}
  ➸ Type: Image
  ➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
                parsedTime.seconds
              } detik
  ➸ Untuk: @${sender.split('@')[0]}
      `,
              text,
              { contextInfo: { mentionedJid: [sender] } }
            );
            let intervRemind = setInterval(async () => {
              if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                anu = await reminder.getReminderMsg(sender, _reminder);
                teks = `── 「 REMINDER 」 ──
  
  ⏰ @${sender.split('@')[0]} ⏰
  ➸ Pesan: ${messRemind}
  ➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
  rfl.sendMessage(from, media, image, {
                  contextInfo: { mentionedJid: [sender] },
                  caption: teks,
                });
                _reminder.splice(
                  reminder.getReminderPosition(sender, _reminder),
                  1
                );
                fs.writeFileSync(
                  './database/reminder.json',
                  JSON.stringify(_reminder)
                );
                clearInterval(intervRemind);
              }
            }, 1000);
          } else if (isQuotedAudio) {
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm'))
              .message.extendedTextMessage.contextInfo;
            media = await rfl.downloadAndSaveMediaMessage(encmedia);
            await rfl.sendMessage(
              from,
              `── 「 REMINDER 」 ──
      
  Reminder berhasil diaktifkan!
  ➸ Pesan: ${messRemind}
  ➸ Type: Audio
  ➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
                parsedTime.seconds
              } detik
  ➸ Untuk: @${sender.split('@')[0]}
      `,
              text,
              { contextInfo: { mentionedJid: [sender] } }
            );
            let intervRemind = setInterval(async () => {
              if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                anu = await reminder.getReminderMsg(sender, _reminder);
                rfl.sendMessage(
                  from,
                  `── 「 REMINDER 」 ──
  
  ⏰ @${sender.split('@')[0]} ⏰
  ➸ Pesan: ${messRemind}
  ➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                  text,
                  { contextInfo: { mentionedJid: [sender] } }
                );
                rfl.sendMessage(from, fs.readFileSync(media), audio, {
                  contextInfo: { mentionedJid: [sender] },
                  mimetype: 'audio/mp4',
                  ptt: true,
                  caption: teks,
                });
                _reminder.splice(
                  reminder.getReminderPosition(sender, _reminder),
                  1
                );
                fs.writeFileSync(
                  './database/reminder.json',
                  JSON.stringify(_reminder)
                );
                clearInterval(intervRemind);
              }
            }, 1000);
          }
          limitAdd(sender, limit)
          break;
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			

   case 'limit': case 'ceklimit': case 'balance': case 'glimit': case 'profile':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  thu = await rfl.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
  me = rfl.user
  tiyo = `*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Balance : ${getBalance(sender, balance)}`}\n-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
  sendButMessage(from, tiyo, `CLICK DIBAWAH UNTUK MEMBELI LIMIT`, [
              {              
                buttonId: `${prefix}buylimit`,
                buttonText: {
                  displayText: `💸BUYLIMIT`,
                },
                type: 1,
              },
            ]);                  
          break;   
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'buygamelimit':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (!q)return reply(`Example : ${prefix + command} 10 1 limit = 100 balance`)
  if (isNaN(q)) return reply(`Harus berupa angka`)
  payout = body.slice[10]
  yumm = 100 * payout
  if (getBalance(sender, balance) < yumm) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
  kurangBalance(sender, yumm, balance)
  giveGame(sender, parseInt(args[0]), glimit)
  tiyu = `PEMBELIAN SEBANYAK ${q}`
  sendButMessage(from, tiyu, `*Kamu telah berhasil membeli game limit*`, [
            {
              buttonId: `${prefix}limit`,
              buttonText: {
                displayText: `🔖CHECK LIMIT`,
              },
              type: 1,
            },
          ]);               
          break;
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'buylimit':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (!q)return reply(`Example : ${prefix + command} 10 1 limit = 100 balance`)
  if (isNaN(q)) return reply(`Harus berupa angka`)
  payout = body.slice[10]
  yumm = 100 * payout
  if (getBalance(sender, balance) < yumm) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
  kurangBalance(sender, yumm, balance)
  giveLimit(sender, parseInt(args[0]), limit)
  tiyu = `PEMBELIAN SEBANYAK ${q}`
  sendButMessage(from, tiyu, `*Kamu telah berhasil membeli limit*`, [
            {
              buttonId: `${prefix}limit`,
              buttonText: {
                displayText: `🔖CHECK LIMIT`,
              },
              type: 1,
            },
          ]);               
          break;
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			

case 'owner':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
vcard3 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN: ${control.NamaOwner}\n` +
            `item1.TEL;waid=${control.NomorOwner}:${control.NomorOwner}\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET:daffayudhistira93@gmail.com\n` +
            `item2.X-ABLabel:📧 Email\n` +
            `item3.URL:https://youtube.com/c/rflBOTZZ/\n` +
            `item3.X-ABLabel:⚙️ Channel Owner\n` +
            `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ rflBOTZ Owner\n` +
            'END:VCARD'.trim()
rfl.sendMessage(from, {displayName: `rfl`, vcard: vcard3}, contact,) 
     break       
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			

case 'set':
	      case 'mode':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
        if (isOwner && mek.key.fromMe) return reply(mess.only.owner)
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `👤 SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `👥 PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			

case 'self':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
              if (isOwner && mek.key.fromMe) return reply(mess.only.owner)
              if (banChats === true) return
        	    uptime = process.uptime()
              banChats = true
              reply(' ```「 SELF MODE 」``` ')
              break   
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			

case 'public':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
        	    if (!mek.key.fromMe) return 
              if (banChats === false) return 
              banChats = false
              reply(' ```「 PUBLIC MODE 」``` ')
              break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			

case 'menu':
case 'help':
case 'rflbotz': 
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
rfl.sendMessage(from, 'Loading... ', text)
groups = rfl.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = rfl.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
let Tag = `${control.NomorOwner}`
  let giid = []
  thu = await rfl.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
  let boy = `${control.NomorOwner}@s.whatsapp.net`
  let filename = `@${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
  let nomoruser = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
  parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
  }
  totalChat = await rfl.chats.all()
  groups = rfl.chats.array.filter(v => v.jid.endsWith('g.us'))
  privat = rfl.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
  total = math(`${groups.length}*${privat.length}`)
  timestampe = speed();
  latensie = speed() - timestampe
 lol = `
_🌐GRUB TOTAL : ${groups.length}_
_🎲PRIBADI CHAT : ${privat.length}_
_🎭BATERAI : ${baterai}% ${charger}_
_🌠TOTAL CHAT : ${totalChat.length}_
_🏳‍🌈KECEPATAN : ${latensie.toFixed(4)} Detik_
_𓃲RUNTIME : ${runtime(process.uptime())}_
_🏴‍☠️PLATFORM : ${os.platform()}_
_🎲LIMIT: ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}_
`
  buttons = [{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝙾𝚆𝙽𝙴𝚁' }, type: 1 }, { buttonId: `${prefix}rules`, buttonText: { displayText: '𝚁𝚄𝙻𝙴𝚂' }, type: 1 },]

  imageMsg = (await rfl.prepareMessageMedia(fs.readFileSync(`./gambar/menu.jpg`), 'imageMessage', { thumbnail: fs.readFileSync(`./gambar/menu.jpg`) })).imageMessage

  buttonsMessage = {
    contentText: `${lol}`,
    footerText:`
┌─❖
│*「 MAIN MENU 」*
└┬❖ *「 RflBotzz 」*
┌┤✑  *>request* <request ke owner>
││✑  *>requestdev* <request ke developer>
││✑  *>report* <lapor bug syg>
│└───────────────┈ ⳹
│ *「 ABOUT BOT 」*
│✙ *${prefix}runtime*
│✙ *${prefix}speed* 
│✙ *${prefix}script* 
│✙ *${prefix}owner* 
│✙ *${prefix}rules*
└─────────────────┈ ⳹

┏━━━━━「 RflBotzz 」━━━━━━⭓ 
┃╔═══════════📝「 OWNER 」	        
┃╠${prefix}broadcast
┃╠${prefix}broadcast2
┃╠${prefix}broadcast3
┃╠${prefix}ban
┃╠${prefix}banned
┃╠${prefix}unban
┃╠${prefix}listban
┃╠${prefix}banchat
┃╠${prefix}unbanchat
┃╠${prefix}mode
┃╠${prefix}setppbot
┃╠${prefix}setfotomenu
┃╠${prefix}setthumb
┃╠═══════════📝「 ISLAMI MENU」	
┃╠${prefix}alquranaudio
┃╠${prefix}kisahnabi
┃╠${prefix}jadwalsholat
┃╠${prefix}asmaulhusna
┃╠${prefix}listsurah
┃╠═══════════📝「 GROUP 」	
┃╠${prefix}kick 
┃╠${prefix}add
┃╠${prefix}hidetag
┃╠${prefix}demote
┃╠${prefix}promote
┃╠${prefix}reminder (Limit) 
┃╠${prefix}antilink <enable/disable>
┃╠${prefix}antivirtex <enable/disable>
┃╠${prefix}antidel <enable/disable>
┃╠${prefix}welcome <enable/disable>
┃╠${prefix}antilinkyoutube-c <0/1>
┃╠${prefix}antilinkyoutube-v <0/1>
┃╠${prefix}antilinkfacebokk <0/1>
┃╠${prefix}antilinkinstagram <0/1>
┃╠${prefix}autosticker <2 Button>
┃╠${prefix}antibule
┃╠═══════════📝[「 DOWNLOAD 」	
┃╠${prefix}play *query* (Limit) 
┃╠${prefix}tiktokdl *link* (Limit) 
┃╠${prefix}mediafire *link* (Limit) 
┃╠${prefix}telesticker* (Limit) 
┃╠═════════📝「 MAKER MENU 」
┃╠${prefix}blackpink
┃╠${prefix}neon
┃╠${prefix}greenneon
┃╠${prefix}futureneon
┃╠${prefix}sandwriting
┃╠${prefix}sandsummer
┃╠${prefix}sandengraved
┃╠${prefix}metaldark
┃╠${prefix}neonlight
┃╠${prefix}holographic
┃╠${prefix}text1917
┃╠${prefix}deluxesilver
┃╠${prefix}newyearcard
┃╠${prefix}bloodfrosted
┃╠${prefix}hallowen
┃╠${prefix}jokerlogo
┃╠${prefix}fireworksparkle
┃╠${prefix}natureleaves
┃╠${prefix}toxic
┃╠${prefix}strawberry
┃╠${prefix}roadwarning
┃╠${prefix}breakwall
┃╠${prefix}icecold
┃╠${prefix}luxury
┃╠${prefix}cloud
┃╠${prefix}summersand
┃╠${prefix}horrorblood
┃╠${prefix}thunder
┃╠${prefix}glitch
┃╠${prefix}avenger
┃╠${prefix}space
┃╠${prefix}ninjalogo
┃╠${prefix}marvelstudio
┃╠${prefix}lionlogo
┃╠${prefix}wolflogo
┃╠${prefix}steel3d
┃╠${prefix}wallgravity
┃╠${prefix}shadow
┃╠${prefix}cup
┃╠${prefix}cup1
┃╠${prefix}romance
┃╠${prefix}smoke
┃╠${prefix}burnpaper
┃╠${prefix}lovemessage
┃╠${prefix}undergrass
┃╠${prefix}love
┃╠${prefix}coffe
┃╠${prefix}woodheart
┃╠${prefix}woodenboard
┃╠${prefix}summer3d
┃╠${prefix}wolfmetal
┃╠${prefix}nature3d
┃╠${prefix}underwater
┃╠${prefix}golderrose
┃╠${prefix}summernature
┃╠${prefix}letterleaves
┃╠${prefix}glowingneon
┃╠${prefix}fallleaves
┃╠${prefix}flamming
┃╠${prefix}harrypotter
┃╠${prefix}carvedwood
┃╠${prefix}battlefield4
┃╠${prefix}arcade8bit
┃╠${prefix}pubg
┃╠${prefix}wetglass
┃╠${prefix}multicolor3d
┃╠${prefix}watercolor
┃╠${prefix}luxurygold
┃╠${prefix}galaxywallpaper
┃╠${prefix}lighttext
┃╠${prefix}beautifulflower
┃╠${prefix}puppycute
┃╠${prefix}royaltext
┃╠${prefix}heartshaped
┃╠${prefix}birthdaycake
┃╠${prefix}galaxystyle
┃╠${prefix}hologram3d
┃╠${prefix}glossychrome
┃╠${prefix}metallogo
┃╠${prefix}noeltext
┃╠${prefix}glittergold
┃╠${prefix}textcake
┃╠${prefix}starsnight
┃╠${prefix}wooden3d
┃╠${prefix}textbyname
┃╠${prefix}writegalacy
┃╠${prefix}galaxybat
┃╠${prefix}snow3d
┃╠${prefix}birthdayday
┃╠${prefix}goldplaybutton
┃╠${prefix}silverplaybutton
┃╠${prefix}freefire
┃╠${prefix}shadow
┃╠${prefix}flaming
┃╠${prefix}rainbow
┃╠${prefix}wood
┃╠═════════📝「 RANDOM TEXT 」
┃╠${prefix}faktaunik
┃╠${prefix}pantun
┃╠${prefix}bucin1
┃╠${prefix}bucin2
┃╠${prefix}katabijak
┃╠${prefix}pantun
┃╠${prefix}quotesdilan
┃╠${prefix}quotesislami
┃╠${prefix}quotesanime
┃╠${prefix}quotesimage
┃╠${prefix}quotes
┃╠═══════📝「 ANONYMOUS BETA」
┃╠${prefix}start
┃╠${prefix}next
┃╠${prefix}stop
┃╠═══════📝「 MULTI SESSION 」
┃╠${prefix}jadibot
┃╠═══════════📝「 INFO MENU 」
┃╠${prefix}cnn
┃╠${prefix}covidindo
┃╠${prefix}covidglobal
┃╠${prefix}infogempa
┃╠${prefix}cuaca
┃╠${prefix}jadwaltv
┃╠═══════📝「 SEARCH MENU 」
┃╠${prefix}ytsearch *query*
┃╠${prefix}joox *query*
┃╠${prefix}image *query* (Limit) 
┃╠${prefix}pinterest
┃╠${prefix}waifuhd
┃╠${prefix}konachan
┃╠${prefix}charactersearch
┃╠${prefix}animesearch
┃╠${prefix}mangasearch
┃╠${prefix}spotifysearch
┃╠${prefix}wattpadsearch
┃╠${prefix}ceritahoror
┃╠${prefix}shope
┃╠${prefix}googleimage
┃╠═══════════📝「 FUN 」
┃╠${prefix}ganteng (Limit) 
┃╠${prefix}cantik  (Limit) 
┃╠${prefix}goblok (Limit) 
┃╠${prefix}jelek (Limit) 
┃╠${prefix}bego (Limit) 
┃╠${prefix}pinter (Limit) 
┃╠${prefix}nolep (Limit) 
┃╠${prefix}gantengcek
┃╠${prefix}cantikcek
┃╠${prefix}nolepcek
┃╠${prefix}begocek
┃╠${prefix}cekwatak
┃╠${prefix}hobby (Limit) 
┃╠${prefix}wangy (Limit) 
┃╠${prefix}hilih *text*
┃╠${prefix}holoh *text*
┃╠${prefix}halah *text*
┃╠${prefix}huluh *text*
┃╠${prefix}heleh *text*
┃╠${prefix}gura (Limit) 
┃╠═══════════📝「 GAME 」
┃╠${prefix}tictactoe (Limit) 
┃╠${prefix}truth
┃╠${prefix}dare
┃╠${prefix}tebakgambar (Limit) 
┃╠${prefix}siapaaku (Limit) 
┃╠${prefix}tebakkata (Limit) 
┃╠${prefix}tebaklirik (Limit) 
┃╠${prefix}tebakbendera (Limit) 
┃╠${prefix}tebakanime (Limit) 
┃╠${prefix}tebakkimia (Limit) 
┃╠═══════════📝「 TOOLS 」
┃╠${prefix}nulis (Limit) 
┃╠${prefix}tourl (Limit) 
┃╠${prefix}sticker *reply gambar* (Limit) 
┃╠${prefix}take *reply gambar* (Limit) 
┃╠${prefix}toimg
┃╠${prefix}tomp3
┃╠${prefix}linkwa (Limit) 
┃╠${prefix}translate
┃╠${prefix}tts kodebahasa *Teks*
┃╠${prefix}fdeface link|title|desk|teks (Limit) 
┃╠${prefix}tinyurl
┃╠═══════════📝「 STORAGE 」
┃╠${prefix}addcmd *Owner*
┃╠${prefix}delcmd *Owner*
┃╠${prefix}listcmd
┃╠══════════📝「 XP & LIMIT 」
┃╠${prefix}ceklimit
┃╠${prefix}buylimit
┃╠${prefix}claim
┃╠${prefix}level
┃╠${prefix}leaderboards
┃╚═════════════════📝
┗━━━「 BOT-WHATSAPP 」━━━⭓
*Subscribe Yt RflBotzz*
    `
  , imageMessage: imageMsg,
    buttons: buttons,
    headerType: 4
  }

prep = await rfl.prepareMessageFromContent(from, { buttonsMessage }, {
quoted: ftroli, contextInfo: {
mentionedJid: parseMention(lol), externalAdReply: {
  title: `𝘏𝘌𝘓𝘓𝘖 ${pushname} `,
  body: `${ucapanWaktu} Semoga harimu menyenangkan`,
  mediaType: 2,
  mediaUrl: "https://youtu.be/5DXNC4_Bj_U",
  thumbnail: fs.readFileSync('./gambar/menu.jpg'),
}, forwardingScore: 508, isForwarded: false, mentionedJid: [Tag + '@s.whatsapp.net', senderr]
    }
  })
  rfl.relayWAMessage(prep)
  break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'setfotomenu':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
           if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await rfl.downloadMediaMessage(boij)
			fs.writeFileSync(`./gambar/menu.jpg`, delb)
			reply('Sukses')
        	} else {
            reply(`Reply Gambar Dengan Caption ${prefix}setfotomenu`)
          	}
			break	
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×					
		case 'setthumbnail':
	if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
           if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await rfl.downloadMediaMessage(boij)
			fs.writeFileSync(`./gambar/thumb.jpg`, delb)
			reply('Sukses')
        	} else {
            reply(`Reply Gambar Dengan Caption ${prefix}setfotomenu`)
          	}
			break	
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
        case 'd':
        case 'del':
        case 'delete':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               rfl.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
     case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
				if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            let media = await rfl.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                rfl.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                let media = await rfl.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
              
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            rfl.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            limitAdd(sender, limit) 
            break  
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
       case 'welcome':
       if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
             
               break                  
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
       case 'take':
       case 'colong':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
              if (!isQuotedSticker) return reply('Stiker aja om')
              if (args.length < 1) return reply(`Teksnya mana kak?`)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await rfl.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `rfl`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, rfl, mek, from)
              limitAdd(sender, limit) 
              break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'ytdl':
case 'play':		
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
	 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)			
              if (!c) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}play2 ${c}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${c}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await rfl.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await rfl.prepareMessageFromContent(from,{buttonsMessage},{})

rfl.relayWAMessage(prep)
break               	        	
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'playy':
case 'lagu':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
              
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: ftroli, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
let tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botName}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: ftroli, mimetype: 'audio/mp3', filename: res[0].output})
}
limitAdd(sender, limit) 
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'play2':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=ApirflBot`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				buffer1 = await getBuffer(anu.result.url_video)
				rfl.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:ftroli, caption: 'Nih Gan'})
					break               	        	 	        	 	        	
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
	 case 'tiktok':
	 case 'tiktokdl':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://megayaa.herokuapp.com/api/tiktod/?url=${play}`)
				sendMediaURL(from, anu.result.nowatermark)
				limitAdd(sender, limit) 
					break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'igstory':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if(!c) return reply('Usernamenya?')
            hx.igstory(`${c}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    rfl.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    rfl.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            limitAdd(sender, limit) 
            break    
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
       case 'image':
       case 'gimage':
       case 'googleimage':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
             if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: 'Done kak, Jangan lupa subscribe yt RflBotzz'})
}
}
limitAdd(sender, limit) 
             break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'simi':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
              if (args[0] === 'enable'){
              if (isSimi) return reply(`Udah aktif`)
              samih.push(from)
              fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
              reply('SIMI DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = samih.indexOf(from)
              samih.splice(anu, 1)
              fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
              reply('SIMI DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo @${senderr.split('@')[0]} klik button atau Gunakan ${prefix + command } enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!simi enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!simi disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `©rfl` ,
buttons: buttonss,
headerType: 1
}
rfl.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • BOTWEA • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'ban':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isOwner && mek.key.fromMe) return             
              if (args[0] === 'enable'){
              if (isBanchat) return reply(`Udah aktif`)
              banc.push(from)
              fs.writeFileSync('./database/banchat.json', JSON.stringify(banc))
              reply('SUKSES BANCHAT')
              } else if (args[0] === 'disable'){
              let anu = banc.indexOf(from)
              banc.splice(anu, 1)
              fs.writeFileSync('./database/banchat.json', JSON.stringify(banc))
              reply('SUKSES UNBANCHAT')
              } 
              break       
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case "banchat":
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isOwner && mek.key.fromMe) return
        sendButMessage(from, `Ban Chat disini?`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}ban enable`,
            buttonText: {
              displayText: `DONE❗ `,
            },
            type: 1,
          },  
          ]);        
        break   
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
        case "unbanchat":
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isOwner && mek.key.fromMe) return
        sendButMessage(from, `UnBan Chat disini?`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}ban disable`,
            buttonText: {
              displayText: `DONE❗ `,
            },
            type: 1,
          }, 
          ]);         
          break   
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'hidetag':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
if (!isGroup) return reply(mess.only.group)
      if (isOwner) return reply(`Kamu bukan owner ku`)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'pinterest':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
        if (!q) return reply("gambar apa?");
        reply(mess.wait)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await rfl.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'[ • BOTWEA • ]︎', imageMessage: imageMsg,
              contentText:`Follow ig owner @BY rfl`,buttons,headerType:4}
              prep = await rfl.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              rfl.relayWAMessage(prep)
        break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'nulis':
        case 'tulis':
        if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
              
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               rfl.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
limitAdd(sender, limit) 
               break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'kick':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
kick(from, mentionUser)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'add':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = arg.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
rfl.groupAdd(from, [entah])
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
rfl.groupAdd(from, [entah])
}
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case "demote":
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
if (!isGroup) return;
if (!isBotGroupAdmins) return reply("Bot not admin");
rfl.groupDemoteAdmin(from, mentionUser)
break;
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case "promote":
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
if (!isGroup) return;
if (!isBotGroupAdmins) return reply("Bot not admin");
rfl.groupMakeAdmin(from, mentionUser)
break;
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'broadcast':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
  list_chat = await rfl.chats.all()
  ini_text = args.join(" ")
  for (let chat of list_chat) {
    sendMess(chat.jid, ini_text)
  }
  break
if (args.length < 1) return reply('teks?')
anu = await rfl.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await rfl.downloadMediaMessage(encmedia)
for (let _ of anu) {
rfl.sendMessage(_.jid, bc, image, {quoted:ftroli,caption: `*「 BROADCAST [ • BOTWEA • ] 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 BOTWEA BROADCAST 」*\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'bc2':
case 'broadcast2':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
             if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
             if (args.length < 1) return reply('teks?')
             reply('Wait.....')
             anu = await rfl.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await rfl.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             rfl.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 BROADCAST [ • BOTWEA • ] 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
rfl.sendMessage(_.jid, 
	    {"contentText": `*「 BROADCAST [ • BOTWEA • ] 」*\n\n${body.slice(4)}`,
	    "footerText": '©rfl',
	    "buttons": [
	    {"buttonId": `!owner`,
	    "buttonText": {"displayText": "OWNER"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:freply})
}
             reply('Suksess broadcast')
}
             break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'bc3':
case 'broadcast3':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
             if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
            if (args.length < 1) return reply('teks?')
             anu = await rfl.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc2 = await rfl.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             rfl.sendMessage(_.jid, { contentText: `*🔖 BROADCAST [ • BOTWEA • ] 🔖*\n\n${body.slice(4)}`, footerText: '©rfl', buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }], headerType: 6, locationMessage: { degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: bc2 }}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'tictactoe':
case 'ttt':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
rfl.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
limitAdd(sender, limit) 
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'antilink':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (args[0] === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo ${pushname} klik button atau Gunakan ${prefix + command }antilink enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!antilink enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!antilin disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `©rfl` ,
buttons: buttonss,
headerType: 1
}
rfl.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • BOTWEA • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case "antivirtex":
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;          
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'ganteng': 
case 'cantik': 
case 'jelek': 
case 'goblok':  
case 'bego': 
case 'pinter': 
case 'jago': 
case 'nolep': 
case 'monyet':                 	 
case 'babi': 
case 'beban': 
case 'baik': 
case 'jahat': 
case 'anjing': 
case 'haram': 
case 'kontol': 
case 'pakboy': 
case 'pakgirl': 
case 'wibu': 
case 'hebat': 
case 'sadboy': 
case 'sadgirl':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply('Khusus group kak') 
jds = []
let A1 = groupMembers
let B1 = groupMembers
let C1 = A1[Math.floor(Math.random() * A1.length)]
D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
jds.push(C1.jid)
mentions(D1, jds, true)
limitAdd(sender, limit) 
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'gantengcek':
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${rfl3}${rfl4}%* 😎`
                    reply(N)
                    break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'cantikcek':

                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${rfl3}${rfl4}% 😁*`
                    reply(N)
                    break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'jelekcek':
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${rfl3}${rfl4}%* 🤢`
                    reply(N)
                    break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'goblokcek':
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${rfl3}${rfl4}%* 🤣`
                    reply(N)
                    break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'begocek':
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${rfl3}${rfl4}%* 😂`
                    reply(N)
                    break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'pintercek':
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${rfl3}${rfl4}%* 😗`
                    reply(N)
                    break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'jagocek':
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${rfl3}${rfl4}%* 💪`
                    reply(N)
                    break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'nolepcek':
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${rfl3}${rfl4}%* 🧐`
                    reply(N)
                    break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'babicek':
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${rfl3}${rfl4}%* 🤪`
                    reply(N)
                    break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'bebancek':
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${rfl3}${rfl4}%* 🤬`
                    reply(N)
                    break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'cekwatak':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
              var namao = pushname
              var prfx = await rfl.getProfilePicture(sender)
              let watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              let wtk = watak[Math.floor(Math.random() * (watak.length))]
              let ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              let akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              let sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              let sft = sifat[Math.floor(Math.random() * (sifat.length))]
              let hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Coldas','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              let hby = hobby[Math.floor(Math.random() * (hobby.length))]
              let kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              let klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              let tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              let typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              limitAdd(sender, limit) 
              break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'hobby':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
              hobby = body.slice(1)
              let by = hobby[Math.floor(Math.random() * hobby.length)]
              rfl.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
              limitAdd(sender, limit) 
              break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'tourl':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(mess.wait)              
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await rfl.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
limitAdd(sender, limit) 
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'imgtourl':
case 'img2url':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
reply(mess.wait)
var imgbb = require('imgbb-uploader')
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  rfl.downloadAndSaveMediaMessage(encmedia)       
imgbb('39d895963468b814fad0514bd28787e2', media)
.then(data => {
var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
ibb = fs.readFileSync(media)
rfl.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
.catch(err => {
throw err
})
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'toimg':  
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)              
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await rfl.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              rfl.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
limitAdd(sender, limit) 
              break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'linkwa':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
limitAdd(sender, limit) 
break
case "tes":
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
        sendButMessage(from, `Siap Lapor!, Bot Aktif!`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}runtime`,
            buttonText: {
              displayText: `⬡ RUNTIME `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `⬡ MENU`,
            },
            type: 1,
          },
        ]);
        break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'runtime':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
textImg(`${runtime(process.uptime())}`)
break       
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'ping':
case 'speed':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
timestampe = speed();
latensie = speed() - timestampe
reply(`「 *[ • BOTWEA • ]* 」\n //==[${latensie.toFixed(4)} detik 💬]==\\`)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'addcmd': 
case 'setcmd':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
textImg("Done!")
} else {
reply('tag stickenya')
}
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'delcmd':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
textImg("Done!")
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'listcmd':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'wangy':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
limitAdd(sender, limit) 
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'waktu':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'cekmati':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply(mess.wrongFormat)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
limitAdd(sender, limit) 
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'tag':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
rfl.sendMessage(from, tagq, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'tagme':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
var nomqm = mek.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
rfl.sendMessage(from, tagu, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break    	
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'upswteks':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
rfl.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'kalkulator':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
var mtk = body.slice(12)
teks = `${mtk} = ${Math_js.evaluate(mtk)}`
reply(teks)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case "totag":
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
       if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await rfl.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await rfl.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          rfl.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await rfl.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await rfl.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          rfl.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await rfl.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await rfl.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          rfl.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await rfl.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await rfl.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          rfl.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'rules':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
ok = `
「	RULES BOT   」	

1.teks dan nama pengguna whatsapp
anda akan kami simpan di dalam
server selama bot aktif
2.data akan di hapus ketika bot offline
3.kami tidak menyimpan
gambar,video,file,audio,dan dokumen
yang anda kirim
4.kami tidak akan pernah meminta
anda untuk memberikan informasi
pribadi
5.jika menemukan bug/error silahkan
langsung lapor ke owner bot
6.jangan spam bot,sangsi block
7.jangan telepon bot,sangsi block
permanen
8.apapun yang anda perintahkan
pada bot ini,KAMI TIDAK AKAN
BERTANGGUNG JAWAB!
TERIMAKASIH TELAH
MENGGUNAKAN BOT KAMI
Owner rflBOTZ:

wa.me/6289501060783`
sendButMessage(from, ok, `Baca rulesnya!, Jangan di baca doang, Patuhi juga kak❗`, [
{
buttonId: `${prefix} command`,
buttonText: {
displayText: `💾MENU `,
},
type: 1,
},]);
break;
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'truth':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
let trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
let ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
rfl.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'dare':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
let dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
let der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️LANJUT`},type:1}]
imageMsg = (await rfl.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
prep = await rfl.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
rfl.relayWAMessage(prep)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'tebakgambar':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
data = tebakgambar
jsonData = JSON.parse(data);
xmm1 = Math.floor(Math.random() * jsonData.length);
xmm2 = jsonData[xmm1];
ngebuff = await getBuffer(xmm2.result.soalImg)
tebak = `➸ Jawaban : ${xmm2.result.jawaban}`
setTimeout( () => {
rfl.sendMessage(from, tebak, text, {quoted: fkontak})
}, 30000)
setTimeout( () => {
rfl.sendMessage(from, '_10 Detik lagi..._', text, {quoted: fkontak})
}, 20000)
setTimeout( () => {
rfl.sendMessage(from, '_20 Detik lagi..._', text, {quoted: fkontak})
}, 10000)
setTimeout( () => {
rfl.sendMessage(from, '_30 Detik lagi..._', text, {quoted: fkontak})
}, 2500)
setTimeout( () => {
rfl.sendMessage(from, ngebuff, image, { caption: '_Hayo jawabannya apa😅, Kalo salah donasj ya😀_', quoted: freply })
}, 0)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'leveling':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (!isGroup) return reply(mess.only.group)
if (ar[0] === 'enable') {
if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
_leveling.push(from)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('Fitur leveling berhasil diaktifkan.')
} else if (ar[0] === 'disable') {
var anup = _leveling.indexOf(from)
_leveling.splice(anup, 1)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('Fitur leveling berhasil dimatikan.')
} else {
var ini_rfl =`Halo @${senderr.split('@')[0]} klik button atau Gunakan ${prefix + command } enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `#leveling enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `#leveling disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_rfl,
footerText: `©rfl` ,
buttons: buttonss,
headerType: 1
}
rfl.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • BOTWEA • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'ban':
case 'banned':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (!isOwner && !mek.key.fromMe) return reply(mess.own)
bnnd = body.slice(5)
ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'unban': 
case 'unbanned':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
delp = body.slice(7)
ban.splice(`${delp}@s.whatsapp.net`, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'listban':
case 'banlist':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
teks = '*List Ban:*\n\n'
for (let rflgans of ban) {
teks += `- ${rflgans}\n`
}
teks += `\n*Total : ${ban.length}*`
rfl.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'yts':
case 'ytsearch':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (!q) return reply(mess.wrongFormat)
  reply(mess.wait)
  try {
    res = await yts(q)
    a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ YOUTUBE SEARCH
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!\n`
    for (let i of res.all) {
a += `\`\`\`🐣 Title : ${i.title}\`\`\`
\`\`\`🐤 Views : ${i.views}\`\`\`
\`\`\`🐣 Upload : ${i.ago}\`\`\`
\`\`\`🐥 Durasi : ${i.timestamp}\`\`\`
\`\`\`🔗 Link : ${i.url}\`\`\``
    }
    b = a.trim()
    sendFileFromUrl(res.all[0].image, image, { quoted: ftroli, caption: b })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
  break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'translate':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  reply(mess.wait) 
  if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
  kode_negara = args[0]
  args.shift()
  ini_txt = args.join(" ")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${control.lolkey}&text=${ini_txt}`)
  get_result = get_result.result
  init_txt = `From : ${get_result.from}\n`
  init_txt += `To : ${get_result.to}\n`
  init_txt += `Original : ${get_result.original}\n`
  init_txt += `Translated : ${get_result.translated}\n`
  init_txt += `Pronunciation : ${get_result.pronunciation}\n`
  reply(init_txt)
  break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
  case 'huluh':	
  if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 			
									if (arg.length > 1) {
                    entah = body.slice(7)
                    imni = await huluh(entah)
                    reply(imni)
									} else if (arg.length < 1) {
					entah = rfl.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = await holoh(entah)
                    reply(imni)
									}
                    break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'hilih':		
		if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
									if (arg.length > 1) {
                    entah = body.slice(7)
                    imni = await hilih(entah)
                    reply(imni)
									} else if (arg.length < 1) {
					entah = rfl.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = await hilih(entah)
                    reply(imni)
									}
                    break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'holoh':			
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
									if (arg.length > 1) {
                    entah = body.slice(7)
                    imni = await holoh(entah)
                    reply(imni)
									} else if (arg.length < 1) {
					entah = rfl.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = await holoh(entah)
                    reply(imni)
									}
                    break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'heleh':
			if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
                    if (arg.length > 1) {
                      entah = body.slice(7)
                      imni = await heleh(entah)
                      reply(imni)
                    } else if (arg.length < 1) {
            entah = rfl.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                      imni = await heleh(entah)
                      reply(imni)
                    }
                      break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'halah':			
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 	
                      if (arg.length > 1) {
                        entah = body.slice(7)
                        imni = await halah(entah)
                        reply(imni)
                      } else if (arg.length < 1) {
              entah = rfl.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                        imni = await halah(entah)
                        reply(imni)
                      }
                      break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'joox':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  //////
  rfl.sendMessage(from, `Tunggu Sebentar`, text) 
  if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
  query = args.join(" ")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${control.lolkey}&query=${query}`)
  get_result = get_result.result
  ini_txt = `Title : ${get_result.info.song}\n`
  ini_txt += `Artists : ${get_result.info.singer}\n`
  ini_txt += `Duration : ${get_result.info.duration}\n`
  ini_txt += `Album : ${get_result.info.album}\n`
  ini_txt += `Uploaded : ${get_result.info.date}\n`
  ini_txt += `Lirik :\n ${get_result.lirik}\n`
  thumbnail = await getBuffer(get_result.image)
  await rfl.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
  get_audio = await getBuffer(get_result.audio[0].link)
  await rfl.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: ftroli })
  break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'setppbot':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
					if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
				    rfl.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await rfl.downloadAndSaveMediaMessage(enmedia)
					await rfl.updateProfilePicture(botNumber, media)
					reply('Sukses terubah')
					break 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'fire':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, document, { mimetype: res[0].mime, filename: res[0].nama, quoted: ftroli })
  break
//====================================================================
case 'fire1':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, video, { quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output })
  break
//sendFileFromUrl(res[0].link, video, {quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output})
//====================================================================
case 'fire2':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, audio, { quoted: ftroli, mimetype: 'video/mp3', filename: res[0].output })
  break
//====================================================================
case 'mediafire':
  //////
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  reply(mess.wait)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader

🌐Nama : ${res[0].nama}
🥊Ukuran : ${res[0].size}
🚖Link : ${res[0].link}

Tunggu Proses Mengirim Media......`
  sendButMessage(from, result, `𝚖𝚊𝚞 𝚍𝚒𝚔𝚒𝚛𝚒𝚖 𝚕𝚎𝚠𝚊𝚝 𝚊𝚙𝚊 𝚔𝚊𝚔\n𝙷𝚊𝚛𝚊𝚙 𝚖𝚎𝚖𝚒𝚕𝚒𝚑 𝚏𝚘𝚛𝚖𝚊𝚝 𝚜𝚎𝚜𝚞𝚊𝚒 𝚕𝚒𝚗𝚔 𝚢𝚐 𝚖𝚊𝚞 𝚍𝚒 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍`, [
    {
buttonId: `${prefix}fire ${teks}`,
buttonText: {
  displayText: `𝘋𝘰𝘤𝘶𝘮𝘦𝘯𝘵`,
},
type: 1,
    },
    {
buttonId: `${prefix}fire1 ${teks}`,
buttonText: {
  displayText: `𝘝𝘪𝘥𝘦𝘰`,
},
type: 1,
    },
    {
buttonId: `${prefix}fire2 ${teks}`,
buttonText: {
  displayText: `𝘈𝘶𝘥𝘪𝘰`,
},
type: 1,
    },
  ]);
  limitAdd(sender, limit) 
  break;
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//IslamiMenu
case 'alquranaudio':
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
await rfl.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
break
case 'kisahnabi':
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/muhammad?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/yogyakarta?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//QuotesMenu
case 'bucin1':
reply(mess.wait)
get = await fetchJson(`https://api.lolhuman.xyz/api/random/bucin?apikey=${lolkey}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'bucin2':
reply(mess.wait)
get = await fetchJson(`https://api.lolhuman.xyz/api/random/katabucin?apikey=${lolkey}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'bijak': case 'katabijak':
reply(mess.wait)
get = await fetchJson(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${lolkey}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'pantun':
reply(mess.wait)
get = await fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'quotesdilan':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
reply(quotedilan.result)
break
case 'quotesislami':
anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${lolkey}`, {method: 'get'}) 
reply(`*Random Quotes Islami*\n${anu.result}`) 
break
case 'quotesanime':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*char: ${char}*\n*anime: ${anime} ${episode}*`)
break
case 'quotesimage':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`,  {method: 'get'}) 
await rfl.sendMessage(from, get_result, image, {quoted: mek, caption: 'Subscribe yt rflbotzz'})
break
case 'quotes':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'faktaunik': case 'fakta':
faktaunik = await fetchJson(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=${lolkey}`)
reply(`*Taukah kamu ternyata*\n${faktaunik.result}`) 
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'memes':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`,  {method: 'get'}) 
await rfl.sendMessage(from, get_result, image, { quoted: mek, caption: 'subscribe yt rflbotzz'})
break
case 'wallpaperanime':            
             buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/wallpaper?apikey=${lolkey}`)
             rfl.sendMessage(from, buffer, image, { quoted: mek, caption: 'Done kak, Jangan lupa subscribe yt RflBotzz'})   
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//InformationMenu
case 'covidglobal':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'infogempa':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await rfl.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
break
case 'cuaca':
if (args.length == 0) return reply(`Nama Kotanya Mana kak\nContoh: ${prefix + command} malang`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await rfl.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
reply(ini_txt)
break
case 'jadwaltv':
if (args.length == 0) return reply(`Nama Channel Nya Mana Kak\nContoh: ${prefix + command} sctv`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//FunMenu
case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|rflbotz|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_rfl = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    rfl.sendMessage(from, ini_rfl, image, {quoted: mek})
                    break
case 'namarandom':
namerandom = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
reply(namerandom.result)
break
case 'suit':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'fitnahpc':
 if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
var gh = body.slice(10)
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
rfl.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
break
case 'tag':
if (args.length < 1) return reply(`Nomernya Mana ?\nContoh ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
rfl.sendMessage(from, tagq, text, { quoted: flexx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'tagme':
var nomqm = mek.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
rfl.sendMessage(from, tagu, text, { quoted: flexx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await rfl.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
rfl.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//MakerMenu
case 'blackpink':
case 'neon':
case 'greenneon':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'toxic':
case 'strawberry':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} rflbotzz`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
rfl.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done kak, Jangan Lupa subscribe yt rflbotzz`, quoted : mek})
})
break
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} rflbotzz`)
txt1 = args[0]
txt2 = args[1]
getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
rfl.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done kak, Jangan lupa subscribe yt rflbotzz`, quoted : mek})
})
break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} rflbotzz`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
rfl.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done kak, Jangan lupa subscribe yt rflbotzz`, quoted : mek})
})
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
if (args.length == 0) return reply(`Example: ${prefix + command} rflbotzz`)
txt1 = args[0]
txt2 = args[1]
getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
rfl.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done kak, Jangan lupa subscribe yt rflbotzz`, quoted : mek})
})
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} rflbotzz`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
rfl.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done kak, Jangan lupa subscribe yt rflbotzz`, quoted : mek}) 
})
break
case 'shadow':
case 'flaming':
case 'rainbow':
case 'smoke':
case 'wood':
case 'coffe':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} rflbotzs`)
bo = args.join(" ")
reply(mess.wait)
rn = await getBuffer(`https://api.lolhuman.xyz/oxy/${command}?text=${bo}&apikey=${lolkey}`)
rfl.sendMessage(from, rn, image, { quoted: mek, caption: 'Done Kak, Jangan lupa subscribe yt RflBotzz' })
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//SearchingMenu
case 'konachan':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${lolkey}&query=${query}`)
                    rfl.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'charactersearch':
if (args.length == 0) return reply(`Nama Anime Nya Mana Kak\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await rfl.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
break
case 'animesearch':
if (args.length == 0) return reply(`Nama Anime Nya Mana Kak\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await rfl.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
break
case 'mangasearch':
if (args.length == 0) return reply(`Nama Anime Nya Mana Kak\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await rfl.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
break
case 'spotifysearch':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    rfl.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
		          case 'shope':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//DownloadMenu
case 'telesticker':
if (args.length == 0) return reply(`Link nya mana?\ncontoh: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    rfl.sendMessage(from, ini_buffer, sticker)
                    }
                    break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
default:
/* Panduan bagi yang belum paham aja
   ini balasan otomatis
   
if (budy.includes(``)) { /Di dalam kurung (``) isi teks yang akan di balas bot
                reply(``) /Di dalam kurung (``) isi balasan bot  
                }  
                
// bisa anda tiru seperti di bawah ini  ↓
*/                                                           
if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
if (budy.includes(`assalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }                  
if (budy.includes(`Assalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
if (budy.includes(`asalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }    
if (budy.includes(`asalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }   
if (budy.includes(`Asalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  } 
if (budy.includes(`Asalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }                                                                
if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }                 
if (budy.includes(`tes`)) {
                  reply(`iya kak`)
                  }
if (budy.includes(`Tes`)) {
                  reply(`iya kak`)
                  }                  
if (budy.includes(`Halo`)) {
                  reply(`Halo juga`)
                  }
if (budy.includes(`Hi`)) {
                  reply(`Hi juga`)
                  }    
if (budy.includes(`bang`)) {
                  reply(`kenapa kak`)
                  }   
if (budy.includes(`Haii`)) {
                  reply(`Iyaa`)
                  } 
if (budy.includes(`hai`)) {
                  reply(`iyaa`)
                  }                                                                
if (budy.includes(`woy`)) {
                  reply(`kenapa kak`)
                  }                                    
if (budy.includes(`lu siapa`)) {
                  reply(`yntks`)
                  }
if (budy.includes(`Gelud`)) {
                  reply(`gas sharelock`)
                  }    
if (budy.includes(`Ayang ku kemana`)) {
                  reply(`dih punya aja engga`)
                  }   
if (budy.includes(`Tutor dapet cewe`)) {
                  reply(`haruss ganteng sama banyak duitt, awokawok`)
                  } 
if (budy.includes(`Sad`)) {
                  reply(`gausah sok sad mending sadar diri, awokawok baper pulang`)
                  }                                                                
if (budy.includes(`sad`)) {
                  reply(`gausah sok sad mending sadar diri, awokawok baper pulang aja`)
                  }
if (budy.includes(`Subscribe`)) {
                  reply(`Subscribe Yt RflBotzz`)
                  }                                      
if (budy.includes(`Asu`)) {
                  reply(`Gaboleh toxic kak`)
                  }
if (budy.includes(`bokep`)) {
                  reply(`stay halal brother`)
                  }                  
if (budy.includes(`Bokep`)) {
                  reply(`stay halal brother`)
                  }
if (budy.includes(`Ajg`)) {
                  reply(`Jangan toxic kak`)
                  }    
if (budy.includes(`ajg`)) {
                  reply(`Jangan toxic kak`)
                  }   
if (budy.includes(`Anjing`)) {
                  reply(`Jangan toxic kak`)
                  } 
if (budy.includes(`anjing`)) {
                  reply(`Jangan toxic kak`)
                  }                                                                
if (budy.includes(`Bangsat`)) {
                  reply(`Jangan toxic kak`)
                  }                                    
if (budy.includes(`Bngst`)) {
                  reply(`Jangan toxic kak`)
                  }
if (budy.includes(`bangsat`)) {
                  reply(`Jangan toxic kak`)
                  }    
if (budy.includes(`bngst`)) {
                  reply(`Jangan toxic kak`)
                  }   
if (budy.includes(`Memek`)) {
                  reply(`Jangan toxic kak`)
                  } 
if (budy.includes(`Kontol`)) {
                  reply(`Jangan toxic kak`)
                  }                                                                
if (budy.includes(`kontol`)) {
                  reply(`Jangan toxic kak`)
                  }
if (budy.includes(`Kntl`)) {
                  reply(`Jangan toxic kak`)
                  }   
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   rfl.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		rfl.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  rfl.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
rfl.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
rfl.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
rfl.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
rfl.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🎟️👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 rfl.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
if (/^=?>/.test(budy) && (isOwner || mek.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
if (isCmd) {
return reply(`*Command ${command} Tidak ada dalam menu*\nHarap coba lagi`) 
}
 }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
if (isGroup && budy != undefined){
} else {
console.log('[',color('TEXT','blue'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     rfl.sendMessage(`${target}`, `─────「 *EROR DITEMUKAN* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "BOT WHATSAPP",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:"https://wa.me/0"}}})
	}
    }
    }
    }
    }
    }
    }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//=×=×=×=×=×=×=×=×=×=×BY DEFF BOTZZ=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×	//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×BY DAFFA	
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
