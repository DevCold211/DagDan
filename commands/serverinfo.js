const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let serverEmbed = new Discord.RichEmbed()
  .setColor("#1c73ff")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You joined", message.member.joinedAt)
  .addField("Total members", message.guild.memberCount);


  return message.channel.send(serverEmbed);
}

module.exports.help = {
  name: "serverinfo"
}
