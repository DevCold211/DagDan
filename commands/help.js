const Discord = require("discord.js");
let botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {

	let user = message.author;

	let hEmbed = new Discord.RichEmbed()
	.setTitle("A message has been sent")
	.setColor("#4286f4");

	let gEmbed = new Discord.RichEmbed()
	.setTitle("General commands")
	.setColor("#4286f4")
	.addField("!botinfo", "Give information about me!")
	.addField("!serverinfo", "Gives info on server");


	let fEmbed = new Discord.RichEmbed()
	.setTitle("Fun commands")
	.setColor("#4286f4")
	.setDescription("These commands have no purpose or meaning :smiley:!")
	.addField("!coinflip", "Flip a coin!")
	.addField("!rate {object}", "Get me to rate something!")
	.addField("!say {message}", "Get me to say somthing!")
	.addField("!givemeowner", "maybe");

	let mEmbed = new Discord.RichEmbed()
	.setTitle("Moderator Commands")
	.setColor("#4286f4")
	.addField("kick {user} {reason}", "I will banish that user");

	message.channel.send(hEmbed);
	await user.send(gEmbed);
	await user.send(fEmbed);
	if (message.member.hasPermission("MANAGE_MESSAGES")) return await user.send(modEmbed);
}

module.exports.help = {
	name: "help"
}
