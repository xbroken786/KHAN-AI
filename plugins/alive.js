const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive2",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `
> 👋 Zinda Houn Yar
| *Version*: 1.0.0
| *Owner*: JawadTechX
> *WhatsApp Channel ⤵️
- https://whatsapp.com/channel/0029Vaj1hl1Lo4hksSXY0U2t
> © Pᴏᴡᴇʀᴇᴅ Bʏ Kʜᴀɴ Aɪ`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
