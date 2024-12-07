const fs = require('fs');
const path = require('path');
const config = require('../config')
const {cmd , commands} = require('../command')

//fake recording

cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {       
 if (config.FAKE_RECORDING === 'true') {
                await conn.sendPresenceUpdate('recording', from);
            }
         } 
   );

//working on file
