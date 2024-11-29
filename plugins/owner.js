const { cmd } = require('../command');

cmd({
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = '+923146190772';
        const ownerName = 'KHANX-MD'; 

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message
        await conn.sendMessage(from, {
            text: `*☇━━━━━━━━━━━━━━┈⊷▷*
   *Owner Contact Number  ⬆️* 
> ★Bot Name : *KHANX-MD*
> ★Owner Name : *${ownerName}*
> *★ WhatsApp Channel ⤵️* 

https://whatsapp.com/channel/0029VatOy2EAzNc2WcShQw1j

> *★GitHub Repo Link ⤵️* 

https://github.com/JawadYTX/KHANX-AI
*☇━━━━━━━━━━━━━━┈⊷▷*`,
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                quotedMessageId: sentVCard.key.id 
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mek });
    }
});
