//weird's Mention Commands
//weird is wierd
module.exports.weird = {
  help: "What a weirdo",
  func: (message) => {
    if(message.member.roles.some(r=>["Code Maker", "Admin"].includes(r.name) ) ) {
      message.channel.send("<@161308036605018112> is <@161308036605018112>")
    } else {
      message.channel.send(`${message.author.username} just tried to abuse a power they don't have`)
      message.channel.send(`Silly ${message.author.username}. Go join the timeout squad!`)
    }
  }
}
//I NEED HEALING
module.exports.heals = {
  help: "i NeEd HeAlInG",
  func: (message) => {
    if(message.member.roles.some(r=>["Code Maker", "Admin"].includes(r.name) ) ) {
      message.channel.send("<@161308036605018112>! I need HEALING!")
    } else {
      message.channel.send(`${message.author.username} just tried to abuse a power they don't have`)
      message.channel.send(`Silly ${message.author.username}. Go join the timeout squad!`)
    }
  }
}
