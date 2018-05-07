const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let questions = Array("karen.jullian@orange.fr:johnville304", "tomoose97@hotmail.co.uk:Awesome1", "toy.julianne@gmail.com:conrad123", "annette.renie@gmail.com:shinta28", "alex.mazzeo@outlook.com:Thea9170", "thedolphin156@gmail.com:ninga156", "yannick.halle@gmail.com:66cybm66", "sky.rendahl@hotmail.com:beatles1", "skullfacekid1@gmail.com:slimmy55", "pistolmonster@gmail.com:711cglgc", "alexvilrod@sbcglobal.net:emee123", "jmmorrison26@yahoo.com:huskys26", "sdebjs@hotmail.co.uk:twinkle53", "ruud_henrik@yahoo.no:Har002961", "jrowley47@gmail.com:C6h12o67", );
  let randomquestion = questions[Math.floor(Math.random()*questions.length)];
  message.delete().catch();
  message.author.send(randomquestion);
}

module.exports.help = {
  name: "getalt"
}
