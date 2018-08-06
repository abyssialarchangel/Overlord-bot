//Roles Command
const discord = require("discord.js");
const everyone = "@everyone, "

module.exports = {
  help: "This finds the roles of a particular person",
  func: (message, args) => {
    if (args.length < 1) return message.reply("Who do you want to find the role of?");
    if (args.length > 1) return message.reply("Too many arguments! Please just enter one person to check.");
    if (!message.guild.members.some(r => args[0].includes(r.nickname) ) && !message.guild.members.some(r => args[0].includes(r.user.username) ) ) return message.reply("Member does not exist. Please try someone else");
    let temp = 0;
    if (message.guild.members.some(r => args[0].includes(r.nickname) ) ) {
      temp = 1;
    }
    if (message.guild.members.some(r => args[0].includes(r.user.username) ) ) {
      temp = 2;
    }

    let person = " ";

    if (temp == 1) {
      person = message.guild.members.find( GuildMember => args[0].includes(GuildMember.nickname) );
    }
    if (temp == 2) {
      person = message.guild.members.find( GuildMember => args[0].includes(GuildMember.user.username) );
    }

    let roles = person.roles.map(r=>r.name).join(", ")
    if(roles.length == everyone.length - 2) {
      roles = "@everyone, This person has no roles!";
    }
    roles = roles.slice(everyone.length);

    let embed = new discord.RichEmbed( )
     .setColor("#9B59B6")
     .addField("Person of Interest:", `${person.user.username}#${person.user.discriminator}`)
     .addField("Roles", roles);

    message.channel.send(embed);

    return;
  }
}
