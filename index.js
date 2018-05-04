const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({
	disableEveryone: true
});
bot.commands = new Discord.Collection();
let cyan = botconfig.cyan;
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")

    if (jsfile.length <= 0) {

        console.log("No commands found.");

        return;

    }

    jsfile.forEach((f, i) => {

        let props = require(`./commands/${f}`);

        console.log(`${f} loaded!`);

        bot.commands.set(props.help.name, props);

    });

});
bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);
});
bot.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;
	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
    
    // Random question
    if (cmd === `${prefix}GetAlt`) {
        var questions = Array("karen.jullian@orange.fr:johnville304", "tomoose97@hotmail.co.uk:Awesome1", "toy.julianne@gmail.com:conrad123", "annette.renie@gmail.com:shinta28", "alex.mazzeo@outlook.com:Thea9170", "thedolphin156@gmail.com:ninga156", "yannick.halle@gmail.com:66cybm66", "sky.rendahl@hotmail.com:beatles1", "skullfacekid1@gmail.com:slimmy55", "pistolmonster@gmail.com:711cglgc", "alexvilrod@sbcglobal.net:emee123", "jmmorrison26@yahoo.com:huskys26", "sdebjs@hotmail.co.uk:twinkle53", "ruud_henrik@yahoo.no:Har002961", "jrowley47@gmail.com:C6h12o67", );
        var randomquestion = questions[Math.floor(Math.random()*questions.length)];
        message.delete().catch();
        message.author.send(randomquestion);
    }
});
bot.login(botconfig.token);