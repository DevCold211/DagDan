const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let object = args.join(" "); //Gets users thing that he/she wants to get rated
  let num = Math.floor(Math.random() * 10 + 1);
  message.reply(`I'd rate ${object} ${num}/10`);
}

module.exports.help = {
  name: "rate"
}
