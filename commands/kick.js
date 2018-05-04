const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) return message.channel.send("Can't find user.");
  let kReason = args.join(" ").slice(22);

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, you are not permmited to do that.");
  if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, That person can not be kicked.");

  let kickEmbed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
  .addField("Kicked by", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Kicked in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "incidents");
  if (!kickChannel) return message.channel.send("Couldn't find incidents channel.")

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
}

module.exports.help = {
  name: "kick"
}