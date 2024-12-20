const { cmd, commands } = require('../command');
const config = require('../config');
// repo info
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
        let dec = `*Hello there KHAN-AI User! 👋🏻* 

> Simple , Straight Forward But Loaded With Features 🎊, Meet KHAN-AI WhatsApp Bot.

*Thanks for using KHAN-AI 🚩* 

> Don't forget to frok the repo ⤵️

https://github.com/JawadYTX/KHAN-AI`;

        await conn.sendMessage(from, { image: { url: `https://files.catbox.moe/x3bdmi.jpg` }, caption: dec, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363354023106228@newsletter', newsletterName: 'JawadTechX', serverMessageId: 143 } } }, { quoted: mek });

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

// report bugs or request 
cmd({
    pattern: "bug", // Command Name 
    alias: ["report", "request", "dev", "developer"], // Multi Commands 
    desc: "Send a bug or request report to the developer",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, body, sender, senderNumber, pushname, reply }) => {
    try {
        const reportedMessages = {}; // Cache to track reported messages
        const devlopernumber = '923103448168'; // Developer's number
        const prefix = config.PREFIX; // Prefix from config
        const cmd = body.startsWith(prefix) ? body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
        const text = body.slice(prefix.length + cmd.length).trim();

        // Validate input
        if (!text) {
            return reply(`Example: ${prefix}${cmd} Hi dev, the play command is not working.`);
        }

        const messageId = m.key.id;

        // Check for duplicate reports
        if (reportedMessages[messageId]) {
            return reply("This report has already been forwarded to the owner. Please wait for a response.");
        }

        reportedMessages[messageId] = true;

        // Format the messages
        const ownerMessage = `*| REQUEST/BUG |*\n\n*User*: @${sender.split("@")[0]}\n*Request/Bug*: ${text}`;
        const userMessage = `*Hi ${pushname}, your request has been forwarded to my Owners.*\n*Please wait for a response...*`;

        // Send the report to the developer
        await conn.sendMessage(devlopernumber + "@s.whatsapp.net", {
            text: ownerMessage,
            mentions: [sender]
        }, { quoted: mek });

        // Notify the user
        reply("Thank you for your report. It has been forwarded to the owner. Please wait for a response.");
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// coding by JawadTechX 

