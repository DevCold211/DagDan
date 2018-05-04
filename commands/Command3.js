const Discord = require("discord.js");
let botconfig = require("../botconfig");
module.exports.run = async (bot, message, args) => {
message.reply("!Help");
message.reply("!say");
message.reply("!GetAlt");
}
module.exports.help = {
	name: "Help"
}