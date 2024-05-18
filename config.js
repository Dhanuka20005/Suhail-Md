const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,sri lanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94778800278" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_19_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MixcbiAgICAgICAgODcsXG4gICAgICAgIDIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAwLFxuICAgICAgICA1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICA3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjExLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUkdaRFJsQy9xd3NCakdaSkhsb3pQNG5hZmhSb1JnWU9LOElEdmRndGVSTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3ODgwMDI3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODBCQzAwNkJCMjU5MDkwNEI0OTJBRTlBOUUxRkEzMEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MDIwMzgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3Nzg4MDAyNzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNFMTNDREJENjYzOUZBRjJEMUJEMDA5MzAxQkZBNEI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjAyMDM4NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiU0dPOHFLc1Q3Q0wxWEtRSXE5TzBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBhZmQ5N2VmLTQxY2QtNDBmNC1iMjVkLWU1NjRiNTMxYTZiY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDQ0LFxuICAgICAgOTEsXG4gICAgICAxNzgsXG4gICAgICA3NyxcbiAgICAgIDEzNixcbiAgICAgIDEwNCxcbiAgICAgIDY1LFxuICAgICAgOTIsXG4gICAgICA1NSxcbiAgICAgIDExLFxuICAgICAgMjM0LFxuICAgICAgMTU1LFxuICAgICAgNTMsXG4gICAgICAyOCxcbiAgICAgIDE4LFxuICAgICAgMTM4LFxuICAgICAgMTcxLFxuICAgICAgMTM3LFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDEzOCxcbiAgICAgIDE0LFxuICAgICAgMTU1LFxuICAgICAgODksXG4gICAgICAyMDksXG4gICAgICAxNjEsXG4gICAgICAyNTMsXG4gICAgICA5NixcbiAgICAgIDI0NixcbiAgICAgIDY3LFxuICAgICAgMjA3LFxuICAgICAgMjA0LFxuICAgICAgMTIyLFxuICAgICAgMTgzLFxuICAgICAgNzgsXG4gICAgICA0MixcbiAgICAgIDEzLFxuICAgICAgMTQxLFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmV1d2tBUWw4bWhzZ1lZQmlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMajhYSm5LTjhtMGEwTEdBaGp3NW5XTHN0NkhoQndxSzNvNUJTbDBqd3ljPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpRK3N5em1wWFg1SW83T0RVb3VKMXZiUUVYTkR4UmFiRkJ4Sm5sYWFMQkxIVlJHakpMbkxISi9PZk94ZGkzN3QzMmtSTGtnSFlvWWx4UFkwSnd2eER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInQrcWxXVTNvRVF0aTFzbEoyYzJ2M3o4VFdKYXhMOUNSN3BpcHU3OGRDWXBjSWN6S2NxQ2VJMkhTQmdyamUycGpBZnk2SVhhK042SDZVOFpnUXZ6UkJ3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Nzg4MDAyNzg6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMjgyMzMyMjc3MTUxNDoyMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn6Ww8J+lsPCfpbDwn6Ww8J+lsPCfpbDwn6Ww8J+lsFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3Nzg4MDAyNzg6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjAyMDM3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk4R1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSThFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL29iTEFXbnd4OVBISS9kYVJ6azlQK1hybXdMTkFtR2tGZTlGSDZTdWt2az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzUzMDUwNDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUk4Ri5qc29uIjogIntcImtleURhdGFcIjpcIlJRWXBaWXp2a1gzWFNvL3JIc200REp0M3h3Y0piS3lLbWMyNjNXSk9rSUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1MzA1MDQ3LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzE1ODYzNDExOTY0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSThHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVFlhVDJwT2hLdVBRZnNBSi9QbWJaclpJa0EyeXYxbG16UHlBNGt4TFpWVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzUzMDUwNDcsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzE1ODYzNDE2NzkyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSThILmpzb24iOiAie1wia2V5RGF0YVwiOlwiRzdoVkY3MkFHaTBWWHYzcUdCZFlobDlRWFJXMmdXbjllbWQ5dUQzQjRQRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzUzMDUwNDcsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUk4SS5qc29uIjogIntcImtleURhdGFcIjpcIkNlTzF2b1JlOGp1bEJGcWZzOUU5YUtFWmdNalVnYS80alRJZ3JiRVdQeG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1MzA1MDQ3LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU4NjYzMDIxNDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DHANUWA-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
