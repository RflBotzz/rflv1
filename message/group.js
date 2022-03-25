"use strict";
const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./control.json'))
let prefix = setting.prefix

module.exports = async(rfl, anu, welcome) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			  let  mem = anu.participants[0]
			    console.log(anu)
                try {
              var pp_user = await rfl.getProfilePicture(mem)
                } catch (e) {
              var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
            var pp_grup = await rfl.getProfilePicture(anu.jid)
                } catch (e) {
            var pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            if (anu.action == 'add' && mem.includes(rfl.user.jid)) {
            rfl.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik ${prefix}menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(rfl.user.jid)) {
             if (!welkom.includes(anu.jid)) return
              let mdata = await rfl.groupMetadata(anu.jid)
              let memeg = mdata.participants.length
              let num = anu.participants[0]
              let v = rfl.contacts[num] || { notify: num.replace(/@.+/, '') }
              let anu_user = v.vname || v.notify || num.split('@')[0]
              let time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
              let teks = `
Hallo kak  *@${num.split('@')[0]}*
Welcome to *${mdata.subject}*

Intro Dulu Kak
👤 Nama : 
🔞 Umur :
🏙️ Askot :

Semoga betah yaa,
Dont forget to read the description
                 `
		               
	           let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://telegra.ph/file/5fa6532fb8bf0f0e579f2.jpg`) 
              let buttons = [{buttonId: `#owner`,buttonText:{displayText: 'W E L C O M E'},type:1}]
              let imageMsg = (await rfl.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
              let buttonsMessage = { contentText: `${teks}`, footerText: 'Jadilah member yang sopan', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
              let prep = await rfl.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                rfl.relayWAMessage(prep)

}
            if (anu.action == 'remove' && !mem.includes(rfl.user.jid)) {
            if (!welkom.includes(anu.jid)) return
              let mdata = await rfl.groupMetadata(anu.jid)
              let num = anu.participants[0]
              let w = rfl.contacts[num] || { notify: num.replace(/@.+/, '') }
              let  anu_user = w.vname || w.notify || num.split('@')[0]
              let  time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
              let  memeg = mdata.participants.length
              let  out = `Byee kak\n${anu_user}\nJangan lupa bahagia, Full senyum`
              let  buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://telegra.ph/file/5fa6532fb8bf0f0e579f2.jpg`)
              let  buttons = [{buttonId: `#owner 1`,buttonText:{displayText: 'Byee👋'},type:1}]
              let  imageMsg = (await rfl.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
              let  buttonsMessage = { contentText: `${out}`, footerText: 'DONT BACK', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
              let  prep = await rfl.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                rfl.relayWAMessage(prep)

            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
