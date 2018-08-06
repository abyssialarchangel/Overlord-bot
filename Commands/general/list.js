//List of Commands
const discord = require("discord.js");

//actual list
module.exports.actual = {
  help: "This is the list of commands for this bot!",
  func: (message) => {
    let embed = new discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("This is the list of commands for this bot!")
    .setColor("#9B59B6")
    .addField("!hello", "shows the greeting")
    .addField("!list", "lists the commands for this bot.")
    .addField("!listen <person's nickname or username>", "Mentions that person and tells them to listen.\nWARNING: Role limited command. Some may not be able to use this.")
    .addField("!memelist", "shows all commands to meme members of the team.")
    .addField("!roles <person's nickname or username>", "Shows the roles and ID of the person.\nWARNING: This command is CASE SENSITIVE.")
    .addField("!userinfo", "Shows all of the user's info.");

    message.channel.send(embed);

    return;
  }
}

//memes
module.exports.memelist = {
  help: "This is the list of all commands to meme members of the team!\nNo, case does not matter.",
  func: ( message ) => {
    let embed = new discord.RichEmbed()
      .setAuthor(message.author.username)
      .setDescription("This is the list of all commands to meme members of the team!\nNo, case does not matter.")
      .setColor("#9B59B6")
      .addField("ArchOfAbyss related commands", `!archofabyss\n!archthank\n!archcode` )
      .addField("Baiser related commands", `!baiser` )
      .addField("Buttmuffin related commands", `!buttmuffin\n!buttmemes\n!buttthank` )
      .addField("Dad related commands", `!dad\n!dadsub\n!dadthank\n!dadwise\ndadpoke\ndadecchi` )
      .addField("elliesaurus related commands", `!elliesaurus` )
      .addField("Fhantum related commands", `!fhantum\n!fhantumthank` )
      .addField("Grimdevil related commands", `!grimdevil\n!grimhart\n!grimbutter\n!grimthank` )
      .addField("Koko related commands", `!koko` )
      .addField("Noncreative related commands", `!noncreative\n!creative\n!creativeafraid\n!noncreativethank` )
      .addField("Pacifist related commands", `!pacifist\n!pacifistover\n!pacifistheals\n!pacifistpleb\npacifistthank\n!pacifistcookie\n!pacifistnocookie` )
      .addField("Pastascream related commands", `!pastascream\n!pastacook` )
      .addField("Poseidon related commands", `!poseidon\n!bubbles\n!poseidonthank` )
      .addField("Schnellis related commands", `!Schnellis` )
      .addField("SpectrGem related commands", `!thank` )
      .addField("TeebsTV related commands", `!teebstv\n!teebsthank` )
      .addField("Weird related commands", `!weirdyell\n!weirdm1\n!weirdthank\n!weirdsorry` )
      .addField("Mention commands (Role Dependent)", `!weird\n!weirdheals` );

    message.channel.send(embed);

    return;
  }
}
