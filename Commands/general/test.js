//TEST
module.exports = {
  help: "Test Command",
  func: (message) => {
    message.channel.send("THIS IS A TEST!");
  }
}
