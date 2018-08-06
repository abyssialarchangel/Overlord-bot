//Weird's Commands (I'm so sorry)
//shotcall
module.exports.shotcall = {
  help: "Be louder. LOUDER!",
  func: (message) => {
    message.channel.send("Weird! Remember to shotcall louder!")
  }
}

//reminder
module.exports.reminder = {
  help: "Just a friendly reminder",
  func: (message) => {
    message.channel.send("Weird! Remember that pressing  M1 harder = more heals!")
  }
}
//Thanks for the Heals...I'm still sorry
module.exports.thank = {
  help: "Thank for the heals",
  func: (message) => {
    message.channel.send("Thanks for the heals! Literally would have died without you!")
  }
}
//SO So sorry
module.exports.sorry = {
  help: "I really am sorry",
  func: (message) => {
    message.channel.send("I'm sorry Weird.")
  }
}
