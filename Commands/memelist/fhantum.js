//Fhantum command
//timeout
module.exports.timeout = {
  help: "go to timeout fhantum",
  func: (message) => {
    message.channel.send("Fhantum! Go back to the timeout corner!")
  }
}
//thank
module.exports.thank = {
  help: "thank fhantum",
  func: (message) => {
    message.channel.send("Good job Fhantum! Keep this up and you might just get out of timeout yet!")
  }
}
