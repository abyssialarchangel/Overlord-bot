//noncreative's Commands
//base
module.exports.noncreative = {
  help: "Insert noncreative quote here",
  func: (message) => {
    message.channel.send("Oh no! Noncreative is trying to shotcall! Quick, pretend to listen.")
  }
}
//creative
module.exports.creative = {
  help: "Insert creative quote here",
  func: (message) => {
    message.channel.send("CRUSADER ONLINE! NONCREATIVE AT YOUR SERVICE! BRING ME ANOTHER!")
  }
}
//afraid
module.exports.afraid = {
  help: "ARE YOU AFRAID?",
  func: (message) => {
    message.channel.send("ARE YOU CHICKEN?! Of course you are when Noncreative has joined the fight!")
  }
}
//thank
module.exports.thank = {
  help: "Thanks Non!",
  func: (message) => {
    message.channel.send("Thanks Noncreative for actually trying to get us to push through the choke!")
  }
}
