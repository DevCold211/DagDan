const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  avatar = aUser.displayAvatarURL;

  let embed = new Discord.RichEmbed()
  .setTitle(`${aUser.username}'s avatar`)
  .setImage(avatar);

  message.channel.send(embed);
}


module.exports.help = {
  name: "avatar"
}
