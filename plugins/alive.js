const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive|uptime|runtime",  // Added multiple patterns separated by '|'
    alias: ["status", "botinfo"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let status = `
    ┌────────────────────
    *├ ⏳Uptime*:  ${runtime(process.uptime())}    
    *├ 📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
    *├ ⚙️ HostName*: ${os.hostname()}
    *├ 👨‍💻 Owner*: Jᴀᴡᴀᴅ TᴇᴄʜX
    *├ 🧬 Version*: 1.0.0
    └───────────────────────
     ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX
`;
        return reply(`${status}`);
    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});
