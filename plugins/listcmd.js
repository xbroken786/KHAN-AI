const {cmd , commands} = require('../command')

cmd({
    pattern: "list",
    alias: ["listcmd","commands"],
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭━━❮ DOWNLOAD COMMANDS ❯━┈⊷*
┃▸
┃▸📄 COMMAND: .play
┃▸❕ Download Audio from yt
┃▸ 
┃▸📄 COMMAND: .song
┃▸❕ Download song from yt
┃▸ 
┃▸📄 COMMAND: .apk
┃▸❕ Download apk from playstore
┃▸ 
┃▸📄 COMMAND: .video
┃▸❕ Download video from yt
┃▸ 
┃▸📄 COMMAND: .fb
┃▸❕ Download  video from fb
┃▸ 
┃▸📄 COMMAND: .tk
┃▸❕ Download video from tiktok
┃▸ 
┃▸📄 COMMAND: .ig
┃▸❕ Download video from ig
┃▸ 
┃▸📄 COMMAND: .gdrive
┃▸❕ Download drive files
┃▸ 
┃▸📄 COMMAND: .wamod
┃▸❕ Download wamod apk
┃▸
┃▸📄 COMMAND: .img
┃▸❕ Download image
┃▸
┃▸📄 COMMAND: .darama
┃▸❕ Download full episode video
╰━━━━━━━━━━━━⪼ 

╭━━❮ SEARCH COMMANDS ❯━┈⊷*
┃▸
┃▸📄 COMMAND: .yts
┃▸❕ Serch videos from yt
╰━━━━━━━━━━━━⪼  

╭━━❮‍ MAIN COMMANDS ❯━┈⊷*
┃▸
┃▸📄 COMMAND: .alive
┃▸❕ Check online or not
┃▸  
┃▸📄 COMMAND: .ping
┃▸❕ Check bot speed
┃▸  
┃▸📄 COMMAND: .menu
┃▸❕ Nero main menu
┃▸
┃▸📄 COMMAND: .menu2
┃▸❕ Nero main menu2
┃▸ 
┃▸📄 COMMAND: .ai
┃▸❕ chat with ai bot
┃▸
┃▸📄 COMMAND: .system
┃▸❕ check bot systems
┃▸
┃▸📄 COMMAND: .owner
┃▸❕ get owner info
┃▸ 
┃▸📄 COMMAND: .status
┃▸❕ check bot runtime
╰━━━━━━━━━━━━⪼

╭━━❮ OTHER CMD ❯━┈⊷*
┃▸
┃▸📄 COMMAND: .hirunews/news
┃▸❕ Get news result for life
┃▸ 
┃▸📄 COMMAND: .wabeta
┃▸❕ Get whatsapp beta news
┃▸
┃▸📄 COMMAND: .sitech
┃▸❕ Get tech news
┃▸ 
┃▸📄 COMMAND: .nasa
┃▸❕ Get nasa news
╰━━━━━━━━━━━━⪼

╭━━❮ GROUP CMD ❯━┈⊷*
┃▸
┃▸📄 COMMAND: .mute
┃▸❕ Mute group
┃▸
┃▸📄 COMMAND: .unmute
┃▸❕ Unmute group
┃▸
┃▸📄 COMMAND: .left
┃▸❕ left group
┃▸
┃▸📄 COMMAND: .jid
┃▸❕ group jid
╰━━━━━━━━━━━━⪼

╭━━❮ OWNER CMD ❯━┈⊷*
┃▸📄 COMMAND: .update
┃▸❕ update bot velue 
┃▸
┃▸📄 COMMAND: .restart 
┃▸❕ restart your bot
╰━━━━━━━━━━━━⪼

╭━━❮ CONVERT CMD ❯━┈⊷*
┃▸📄 COMMAND: .sticker
┃▸❕ convert photo to sticker
╰━━━━━━━━━━━━⪼
╭━━❮ 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 ❯━┈⊷
┃https://whatsapp.com/channel/0029VatOy2EAzNc2WcShQw1j
╰────────────────··๏
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX`

await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/hzagwo.jpg`},caption:dec},{quoted:mek});
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
