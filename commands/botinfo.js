const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setColor("#1c73ff")
  .setThumbnail(bicon)
  .addField("Creators", "DAGCraft2004#9314 and Currently Arm's Division#9871")
  .addField("Bot Name", bot.user.username)
  .addField("Created on", bot.user.createdAt);

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
