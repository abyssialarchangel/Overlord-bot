//Pacifist's Commands
module.exports.over = {
  help: "Stop overextending!",
  func: (message) => {
    message.channel.send("Pacifist! Stop over extending, you DUM-E!")
  }
}

module.exports.heals = {
  help: "I need healing!",
  func: (message) => {
    message.channel.send("Pacifist needs healing! Quick weird, ignore him and laugh!");
  }
}
module.exports.carry = {
  help: "Pacifist carry hard",
  func: (message) => {
    message.channel.send("It's a Bird! It's a Plane! O, nvm its just our local Pharah main.");
  }
}
//pleb
module.exports.pleb = {
  help: "What a pleb",
  func: (message) => {
    message.channel.send("Pacifist, you still watch TV? What a pleb.");
  }
}
//thank
module.exports.thank = {
  help: "thank",
  func: (message) => {
    message.channel.send("Thanks Pacifist for killing everyone!");
  }
}
//cookie
module.exports.nom = {
  help: "COOKIE! OM NOM NOM!",
  func: (message) => {
    message.channel.send("Here Pacifist. Have a cookie.");
  }
}
//no cookie
module.exports.nocookie = {
  help: "AWWW no cook-ie :c",
  func: (message) => {
    message.channel.send("You know what you did. No cookie for you.")
  }
}
