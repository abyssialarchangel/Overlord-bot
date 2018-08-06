//userindo command code
const discord = require("discord.js");

module.exports = {
  help: "This displays the user info!",
  func: (message) => {
    let embed = new discord.RichEmbed( )
     .setAuthor(message.author.username)
     .setDescription("This is the user's info!")
     .setColor("#9B59B6")
     .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
     .addField("ID", message.author.id)
     .addField("Created At", message.author.createdAt);

    message.channel.send(embed);

    return;
  }
}
