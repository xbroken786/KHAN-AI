const { cmd, commands } = require('../command');

cmd({
    pattern: "repo|sc|GitHub",  // Added multiple patterns separated by '|'
    desc: "Get information about the bot's repository",
    category: "main",
    react: "📡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hello there User ${pushname}! 👋🏻* 

> KHANX-Ai is a beta version of KHAN-AI and provides enhanced functionality to users.

*Thanks for using KHAN-MD 🇵🇰* 

> Join WhatsApp Channel :- ⤵️
 
https://whatsapp.com/channel/0029Vaj1hl1Lo4hksSXY0U2t

Don't forget to fork the repo ⬇️

https://github.com/JawadYTX/KHANX-AI
`;
        await conn.sendMessage(from, { image: { url: `https://files.catbox.moe/hzagwo.jpg` }, caption: dec }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});
