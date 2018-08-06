const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: true});
const botsettings = require("./botsettings.json");
const prefix = botsettings.prefix;

console.log(botsettings.token);
console.log(botsettings.prefix);

bot.on( "ready", async ( ) => {
  console.log(`Bot is ready! ${bot.user.username}`)

/*  bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
    console.log(link);

  }).catch(err => {
    console.log(err.stack);
  });
  console.log("Hello again");

  Let link = await bot.generateInvite(["ADMINISTRATOR"])
  console.log("Hello")
*/

//creates a link to invite the bot to discord
try {
  let link = await bot.generateInvite(["ADMINISTRATOR"]);
  console.log(link);
} catch(e) {
  console.log(e.stack);
}

});

bot.on("message", async message => {
  //don't respond to bots or DMs
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
//  if(message.channel.content)
  const master = require("./Commands/master.js");
  const codemaster = require("./Commands/codemaster.js");

  //only look at the first word of a message
  const check = message.content.substring(0, 1);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //checks if message starts with a '!' character
//  if( !command.startsWith(prefix) ) return;

  //runs the master command to excute commands
  if(check === "!") {
    master(message, command, args);
  }
  if(check === "?") {
    codemaster(message, command, args);
  }

});

bot.login(botsettings.token);
