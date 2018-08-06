//Dad's Mention Commands
//Poke
module.exports.pokeMen = {
  help: "What a weirdo",
  func: (message, args) => {
    if (args.length < 1) return message.reply("Who do you want to poke?");
    if (args.length > 1) return message.reply("Too many arguments! Please just enter one person to poke.");
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

    let ident = person.user.id;

    if(message.member.roles.some(r=>["Code Maker"].includes(r.name) ) ) {
      message.channel.send(`Poke. <@${ident}>\'s just been touched by a weeb.`)
    } else {
      message.channel.send(`${message.author.username} just tried to abuse a power they don't have`)
      message.channel.send(`Silly ${message.author.username}. Go join the timeout squad!`)
    }
  }
}
