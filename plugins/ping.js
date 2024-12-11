const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now();

        // Calculate ping
        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send message
        await conn.sendMessage(from, { 
            text: ` *⚡ KHAN-AI SPEED : 0.${ping}ms*`, 
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363354023106228@newsletter',
                    newsletterName: 'JawadTechX',
                    serverMessageId: 144
                }
            }
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});