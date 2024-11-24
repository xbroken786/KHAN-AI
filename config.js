const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
  // add your Session Id 
PREFIX: process.env.PREFIX || ".",
  // add your prifix for bot
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/hzagwo.jpg",
  // add img for alive msg
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 ||HEY ${pushname} DEAR I AM ALIVE NOW...||*\n\n`🪄🛠️MINE WHATSAPP CHANEL ;`\n\n_ https://whatsapp.com/channel/0029Vaj1hl1Lo4hksSXY0U2t 🇵🇰_\n\n`",
  // set an alive msg for bot  
SUDO_NB: process.env.SUDO_NB || "923448149931",
  // add your sudo number 
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
  // add your mongodb
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  // make true or false status auto seen
MODE: process.env.MODE || "public",
  // make bot public or private 
AUTO_VOICE: "false"
  // make auto voice false or true
};
