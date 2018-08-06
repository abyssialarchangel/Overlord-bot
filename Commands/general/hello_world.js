//hello world
module.exports = {
  help: "Hello World",
  func: (message) => {
    message.channel.send(`Hello ${message.author.username}! To get started using me type !list to bring up my commands!`);
  }
}
