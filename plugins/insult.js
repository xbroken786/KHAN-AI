const axios = require('axios')
const {cmd , commands} = require('../command')

cmd({
  pattern: 'insult',
  desc: 'Get a random insult',
  category: "fun",
  react: '🤥',
},
async (Void, citel) => {
  try {
    let response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    let data = response.data;

    if (!data || !data.insult) {
      return citel.reply('Unable to retrieve an insult. Please try again later.');
    }

    let insult = data.insult;
    return citel.reply(`*Insult:* ${insult}`);
  } catch (error) {
    citel.reply(`Error: ${error.message || error}`);
  }
});

// joke 

cmd({
    pattern: "joke",
    desc: "😂 Get a random joke",
    react: "🤣",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;

        const jokeMessage = `
😂 *Here's a random joke for you!* 😂

*${joke.setup}*

${joke.punchline} 😄

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*`;

        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ En Error Appears.");
    }
});
