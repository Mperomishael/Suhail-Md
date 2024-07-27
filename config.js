const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '2348142656848';
global.mongodb = process.env.MONGODB_URI  || ""; // "mongodb+srv://suhail:suhail@cluster0.tuhzpez.mongodb.net/?retryWrites=true&w=majority" ;//process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority" ;
global.DATABASE_URI = process.env.DATABASE_URI || "" ; // "postgres://drchnhfxnxvkhb:fe7e6999d202f14f61af1837ef5e1eb07980f37b854ba57c34add33a21453009@ec2-3-221-177-27.compute-1.amazonaws.com:5432/d74crch1e6dgt0";
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ;  
global.video = '' ;
global.blockJids = process.env.BLOCK_JID || "120363023983262391@g.us" ;
global.allowJids = process.env.ALLOW_JID || "null" ;//'120363022922797633@g.us' ;
global.email = 'samsamsun789@gmail.com' ;
global.location = 'Lahore Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl =  process.env.GURL || 'https://youtube.com/empiredigits' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : 'null,2348142656848';
global.devs = "923184474176"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/SuhailTechInfo/Suhail-Md';
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1';
global.website = 'https://github.com/SuhailTechInfo/Suhail-Md' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://' ;

module.exports = {
  sessionName: process.env.SESSION_ID || "SESSION_11_11_07_27_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0E2RkltaW1VNElXWUY5Yk5USWxTaEFYQWN4ZzBVb21BT0c1cjNuVUpXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ080RGpudmtqc1BIYzUzR3FnN1FtUXcxYU5jcHR3YVFiZ2tKajU1a28wYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTWcwcDBHcXBtRFBUMnNLODFDVmdzNXRDd0w5QjhZM1VWVEppTm1ySEZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYYkl2dHFFWW5rOTNPNllYNmlpRTQ3NGY3bi83UnFiWkprQWlDSXhoZlFjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVBbG9SQzQ3VlJ5ZGd0empVcy9SbUtMTzFFdFNiTjR0TnZmUnNKLzVoM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFkOGpOWTAwbUF0NXpNVFZSWnlUeGI2MFFsaWQ5ZjR1ZWE4eVdQallkQTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FpdERrbjl5VmFOMENCUXpDQVRUVDVZcWpzZ0pheUV2bmlYeFAxSHlVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVpzTU13citKUDhTaUEybENDRjlsNG5OZ2pEZHRvYVBTVTNNaEFrSGhWdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkttSU9rdU5zeEJNUHBwWEZERG9Ya3NhaG03MkpRN1JXcXF6aDg1SlJJdkJxVFdQSFV0MGdTZm02Mk4wc2FEY01qNjVxSWlIRVBFVzJidm05UWdvc0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiJMb0wvM3JkZGgySERoMEtKTk8yTEVvbW1YMnNGUzdwTGxETjN3LzFzajJ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzLUlhSVBXdVFXLXZVcm5VX0tqdDVnIiwicGhvbmVJZCI6ImY1ZmFhMjc2LWQyMTMtNGZjMS1iMmMzLWZhMTIzMzMwZjQxNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUclZxeDZFaTc1aDZmSXNLelU0a0M3VWR3U2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1pvYmR3Sm4yMmtMVlhNSVhkMW1EQkkrWG9RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjI5NTZYR0ZGIiwibWUiOnsiaWQiOiIyMzQ4MTQzMDI4NDY3OjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0oyK3BwOEJFTUtyazdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imd2UUU0V1U4SjRZYUlYS1BjemlVYlRlWmwrTTBTSm53R244WDdNajV5aEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBUeXBpTlpLSnE2TDJTS0pGYWxDbmEwWmZzL3ZmQm82bStYRFdYUE1odm0zLzh1bU1NQkg2LzYwS2c4SEdmelBRdTlVUnBqeFJ1VjRYaFRVMnlGZEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVMm1xZGxGdStjYys2dy9LaHN1Mmd5REEwSGJ3VUdEY0ZvR1RkNXlobGlCNWVHeUJSMTErZktHcVUzVUNVenltU1paSVNpbTlMbmw3Qm15MDZ1SEJCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDMwMjg0Njc6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZTDBCT0ZsUENlR0dpRnlqM000bEcwM21aZmpORWlaOEJwL0YrekkrY29SIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDc4NjYxfQ==",
  botname: process.env.BOT_NAME || '-ᴍᴅ',
  ownername: process.env.OWNER_NAME || `Empire`,
  author: process.env.PACK_AUTHER || 'mishael',
  packname: process.env.PACK_NAME || "", // \t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ --- 
  style: process.env.STYLE || '1',  // put '1' & "2" here to check bot styles
  errorChat: process.env.ERROR_CHAT || '', // put 'chat' here to send error in chat ,where it accures
  read_status: process.env.AUTO_READ_STATUS || 'false',
  save_status: process.env.AUTO_SAVE_STATUS || 'false',

  autoreaction: process.env.AUTO_REACTION || 'false',  //  | 'cmd' | 'true' | 'all' |
  //antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || '', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  //antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',   //  | 'false' | 'true' | 
  readcmds: process.env.READ_COMMANDS || 'false',    //  | 'false' | 'true' | 
  HANDLERS: process.env.PREFIX || '.',
  warncount: process.env.WARN_COUNT || '2',
  disablepm: process.env.DISABLE_PM || "true",
  MsgsInLog: process.env.MSGS_IN_LOG || 'false', // "true"  to see messages , "log" to open logs messages , "false" to hide logs messages
  // pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'true',
  // levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',  //  | 'false' | 'true' | 
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  caption: process.env.CAPTION || "```ᴘᴏᴡᴇʀᴇᴅ ʙʏ Empire-ᴍᴅ```",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  userImages: process.env.USER_IMAGES || "",// 'https://i.imgur.com/NpA3ZsJ.jpeg,https://telegra.ph/file/d9a63ef4f8110a6d87167.mp4,https://telegra.ph/file/41c41e73c1c5f11bdb1df.mp4,https://telegra.ph/file/acaba47a11c6975248c84.mp4' ,
  // antiDelete: process.env.ANTIDELETE ||  'true' ,
  // antiCallMessage: process.env.ANTICALL_MESSAGE ||  "\`\`\`Hii this is Suhail-Md a Personal Assistant!!\n\n\tSorry for now, we cannot receive calls, whether in a group or personal \n\n if you need help or request features please chat owner\n\n\nPowered by Suhail-Md Chatbot\`\`\`" ,
  VERSION: process.env.VERSION || 'v.1.2.5',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'Empire',
  menu: process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
  KOYEB_API: process.env.KOYEB_API || '',

  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY && process.env.DATABASE_URI,

  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || 'c7ba2eb2143e5904569fd7f8363ed886',
  aitts_Voice_Id: process.env.AITTS_ID || '19',
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
