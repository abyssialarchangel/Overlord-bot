//restart Command
//weird is wierd
module.exports = {
  help: "Resets the bot",
  func: (message) => {
    if(message.member.roles.some(r=>["Code Maker", "Admin", "Main Healer"].includes(r.name) ) ) {
      resetBot(message.channel);
    } else {
      message.channel.send(`${message.author.username} just tried to abuse a power they don't have`)
      message.channel.send(`Silly ${message.author.username}. Go join the timeout squad!`)
    }
  }
}
