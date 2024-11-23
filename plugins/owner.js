const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = ` *Hello there KHANX-AI User! 👋🏻* 

> KHANX-Ai is a beta version of KHAN-AI also it provide enhanced functionality to users

 *Thanks for using KHAN-MD 🇵🇰* 

> Join WhatsApp Channel :- ⤵️
 
https://whatsapp.com/channel/0029Vaj1hl1Lo4hksSXY0U2t

 Dont forget to give star 🌟 to repo ⬇️

https://github.com/JawadYTX/KHANX-AI `
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/hzagwo.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
