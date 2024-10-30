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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᗰᑌᗞᗩᔑᏆᖇ Entertainment" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_40_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTgzLFxuICAgICAgICA4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMixcbiAgICAgICAgMTk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY5LFxuICAgICAgICAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDksXG4gICAgICAgIDI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMixcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICA5NixcbiAgICAgICAgMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4LFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlF2WlNFaXo4U3dOczFOeGVCK0I4R01kMjR1c2xhTkFmWWswUXVkZWo1ajg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNKU2hzR1U3UUFXelV3eGNFMUZIcEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGFlNTEwOTgtZjcxZC00Y2NmLWI1YWMtNzVhMjUzMGE1MWEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgMjA5LFxuICAgICAgMTQ5LFxuICAgICAgMTkyLFxuICAgICAgMTE4LFxuICAgICAgMjE0LFxuICAgICAgOTIsXG4gICAgICAxOTYsXG4gICAgICAxNDUsXG4gICAgICA5OSxcbiAgICAgIDE0OSxcbiAgICAgIDEwMixcbiAgICAgIDEyNSxcbiAgICAgIDE3NSxcbiAgICAgIDIyNixcbiAgICAgIDkwLFxuICAgICAgMTgwLFxuICAgICAgMjQ3LFxuICAgICAgMjE3LFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDQ1LFxuICAgICAgMzEsXG4gICAgICAxODksXG4gICAgICAxMTYsXG4gICAgICAxOSxcbiAgICAgIDE0OSxcbiAgICAgIDEwMixcbiAgICAgIDEyMSxcbiAgICAgIDI1NSxcbiAgICAgIDcyLFxuICAgICAgNjAsXG4gICAgICAxMzEsXG4gICAgICAxODIsXG4gICAgICAxODQsXG4gICAgICA3OSxcbiAgICAgIDYzLFxuICAgICAgMjM5LFxuICAgICAgOTIsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFBUNjRSSkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIzOTk1MDA0Njo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXVkYXNpciBLaW5nXCIsXG4gICAgXCJsaWRcIjogXCIyNjYwMDA3Mjk2OTAyNTE6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcXYzNjBHRVBpWmlMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJ2clkxRGNWZnMwcXpKbjdhUDJMOXRyZXIwZ1B2VVBtN250WGFyMnpQbk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibHlQZXRYT09Jb0pOcHVFWEN0ZDNNaWtkV0FnNktlbDI5SEJzaGZ2bUd6N0JkUkRTN1FsSGhCYWliaVZVeHA4LzRja2liNDVqaWZJU3NNMmdGSCtEQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQkdnT0YxNi9RQUg4THVPdzhnWXRXV1NmZGk1bDN5QXFOWG9nemM0NW5WK3NjTTV6bDBaNWpyRmNlelpBblJrOWJZTUE2d1ViQi9XVHhqa3dmdkxCQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjM5OTUwMDQ2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMjg0Nzk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVRZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBVFkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkQzlpVkwwbUlrZklUS04rQ3JURUtNYjdoVmowUWhUOFNhYWYrK2FTNENZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDY1NDcxNzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDI2MDA1MzE1NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
