const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© vio_tech info" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263778339761";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_34_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIxLFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDM4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NSxcbiAgICAgICAgNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQU9pbmVOWG9LQUpQSDdzU3hYeGU3WW54ZzdpMTIzWXdGV1NDbVFVWjNSMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM4MDEyMDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVEMTczNkZEMkE5NzMzQkFEM0IwQzAwMzc2Q0Q4QjU0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjg1MzY2NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0ZkxkQzhnU1FNMnFIMDRCYnh5ZVVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU4NTRjODE5LWUzMjMtNGU0ZC05OTAwLWY0MTI4ZjEyYmVjOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxMDQsXG4gICAgICAwLFxuICAgICAgOTEsXG4gICAgICAxNyxcbiAgICAgIDI0MCxcbiAgICAgIDc0LFxuICAgICAgMTQ4LFxuICAgICAgODEsXG4gICAgICAyMDYsXG4gICAgICAyNDIsXG4gICAgICAzMyxcbiAgICAgIDE0OSxcbiAgICAgIDIzNCxcbiAgICAgIDcyLFxuICAgICAgMTA0LFxuICAgICAgNjEsXG4gICAgICAxNjksXG4gICAgICA3OSxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAxNTAsXG4gICAgICAzNixcbiAgICAgIDE1MCxcbiAgICAgIDI0MSxcbiAgICAgIDc3LFxuICAgICAgMzgsXG4gICAgICAxMjgsXG4gICAgICAyMTgsXG4gICAgICAxNDksXG4gICAgICA5NSxcbiAgICAgIDI1MixcbiAgICAgIDQzLFxuICAgICAgMTk2LFxuICAgICAgMTA0LFxuICAgICAgNCxcbiAgICAgIDkyLFxuICAgICAgODIsXG4gICAgICA1MSxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFMWkZWOVY5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTM4MDEyMDY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNlYW55XCIsXG4gICAgXCJsaWRcIjogXCIyMDQzOTM2ODUyNTAxMDE6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcTNqT2dGRUpia3RyY0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk0rQlc2RndOdXJ5ZXl6ckU1VUxFblAyRWhuNTkybk5mNkpYL2ZPK2E2M2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY0tOVlhDdGlLOFU3YXRyT0UydEF3aGJRMHZEY1FWdnRxUE5EaGpWSXhTTkp4WVIzRVhHMzZQU0NpVVcwL1lZVlNtYlYzc3FheFNIZlpmdkZWSHc0Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTTBSU1oyc0xmTTdES2lWMW9DNmtYQTJINHhmVG1PajVHZG1kZ1FROXVPaVIvalR0R25zN0dHblNTb0xCY2dJa3Bvb0tGUjBZSXNJejFpYmljNFczQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzEzODAxMjA2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjg1MzY2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdFRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0VFLmpzb24iOiAie1wia2V5RGF0YVwiOlwibkpuUkVCNCsvNU5DbEJ4V3NyVzRFU3JKbmRkeXJHd092dnhpMkV5aEsyND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTYwNDg0NzQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY4NTM2MTg2MDNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ vio_tech ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "zim_pain_hub",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "VIO-MD 🥺❤️",
  ownername:process.env.OWNER_NAME|| "Alex !",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
