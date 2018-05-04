const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let side = Math.floor(Math.random() * 2 + 1); //Picks a random number
  if (side === 1) {
  return message.channel.send(`${message.author} Heads!`); //Will output to chat '{user} Heads!'
  } else if (side === 2) {
  return message.channel.send(`${message.author} Tails!`) //Will output to chat '{user} Tails!'
  }
}

module.exports.help = {
  name: "coinflip"
}
