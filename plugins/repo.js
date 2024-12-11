const { cmd, commands } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "👨‍💻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hello there KHANX-AI User! 👋🏻* 

> KHANX-Ai is a beta version of KHAN-AI also it provides enhanced functionality to users

*Thanks for using KHAN-MD 🇵🇰* 

> Join WhatsApp Channel :- ⤵️
 
https://whatsapp.com/channel/0029VatOy2EAzNc2WcShQw1j

Don't forget to give a star to the repo ⬇️

https://github.com/JawadYTX/KHANX-AI`;

        await conn.sendMessage(from, { image: { url: `https://files.catbox.moe/hzagwo.jpg` }, caption: dec, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363354023106228@newsletter', newsletterName: 'JawadTechX', serverMessageId: 143 } } }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/repo.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});