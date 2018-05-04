const Discord = require("discord.js");
let botconfig = require("../botconfig");
module.exports.run = async (bot, message, args) => {
	let cmessage = args.join(" ");
	message.delete().catch();
	message.channel.send(cmessage);
}
module.exports.help = {
	name: "say"
}