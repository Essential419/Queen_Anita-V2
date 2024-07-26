//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "reign6888@gmail.com";
global.location = "Asaba, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "wa.me/2349012464012";
global.website = process.env.GURL || "wa me/2349012464012";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c14778f31ad6e620467b0.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349012464012";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c14778f31ad6e620467b0.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "2347084484946";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUEzTjFKZGxnZ0ZJRUVBU0hhRTRtMGhmdkhoTkhlMENJRm1LdVB1dmVsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXd6NmxRYzdUL3Jta2xMSGJremNKR0U5NXdjaEg5aFY0SVNxVEovVktRTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHS2IrdlJtb1BxL0RJOUJYYUNkdStvZUNsaGZQTUFpYTBJTkp2ZVVMRDJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNckVTOEdqMk5VODVrUStEUVZGR0cwNGpFQmhjbjJrbFhRUFJlbVFzZFU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIc2tvc2t6dzgxNHpsNjVhL3h5MHgvYUhhckxkZ0JTQWdCOTlKenRoM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhOZ2tXR3h6cWdwYWhOMUZiMDZLQXJCdXJ5MEtHYzBpVWpONkZNa2ZHUkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NROXFwWUY0dGlLQ25DOHhqSEp3WGE5Vm5sSlByVE5zVTZBSzFYVHZrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1FWSnVCYkdWZDM2cndXQUYvMzZTaldqWUlRMnhXeUZQZVI4OURHSmJ6az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN4YkJpNzJOREsrZDhyYlEyWWNrb3ZrbG4xVVNvSEJyN1lLQkRZNzRjWmhVM1d2aGxyK2E4S0tZZkNnR0E0a1JPZCtFVk9XN1RwZG1GRGdGa2QzK0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiJkN054akV4NSt2MFl1SjBxQkVBd0NEK0NvSnk4V0R5L2xVdy9iNS9VRjBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrVi13Tm1sVlRyLU02SEREUkhyOXVRIiwicGhvbmVJZCI6IjhiY2UxZmZhLTBjZmMtNGUwMS05NTY2LTZlZGFiZWQ2NDI3NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RzVSVEJ6cjFVVThyZS9ZQ0xQZGI5RlBPNW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2xhdys4dEZSaXpxV0JWT2plK2ZYWk1ZS2hrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxONVEzQ0pHIiwibWUiOnsiaWQiOiIyMzQ5MDEyNDY0MDEyOjk0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKZVVrWW9HRU9HOWpiVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzb2xRVnNzckdTYVFXdmk4M2VRSTlUeWUzSHJpWFpqMVpsQkRBa3hLUVhJPSIsImFjY291bnRTaWduYXR1cmUiOiJGSHgxTDJJNGg4QjNtaUI3WDl1VHRqWFJYKzZjbGJsOXVrRXZFbWJDeGFaSGpoeGxOTlBMZDl1ZkFRVHU5NlE2MFZvL0YxYzZRdWlISUw1MUpEZ2NCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNkYwUFFFcVhraVVYYjJMSFhFQ010Ny8zMkJPMHlkSDZtTkIrb3FQU2JuM090T0NiQmp0dWIrTWVKT1Z2L3Mra2owZW44djFqcTZoWExZS0pIdUxHQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDEyNDY0MDEyOjk0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ2SlVGYkxLeGtta0ZyNHZOM2tDUFU4bnR4NjRsMlk5V1pRUXdKTVNrRnkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE5ODI3MDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTE9EIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "❌ ESSENTIAL ❌",
  author: process.env.PACK_AUTHER || "❌ ESSENTIAL ❌",
  packname: process.env.PACK_NAME || "GODWIN",
  botname: process.env.BOT_NAME || "❌ ESSENTIAL ❌",
  ownername: process.env.OWNER_NAME || "GODWIN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
