const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = ">"

let commands = "gamenight, defend, train, kick, cmds, More soon! (Message HttpDevz for cmd ideas)"

client.on('ready', () => {
  console.log('Bot Loaded... Bot Online! Success.');
  client.user.setGame("Version: 1.4.0 | >cmds");
  const channel = client.channels.get("296390462866980864");
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  let role = message.guild.roles.find("name", "AdminRole");
  if (!message.member.roles.has(role.id)) {
       message.reply("unfortunately, you do not reach the requirements to run this command.")
  } else

  if (command === "attack") {
    place = args[0]

    if (place === "TDE") {

    }
  } else

  if (command === "train") {
    let channel = message.guild.channels.find("name", "events");
    channel.send("@here An HR is hosting a training! Come along! https://www.roblox.com/games/467218213/TKC-Sword-Training-HOLO")
  } else

  if (command === "defend") {
    let channel = message.guild.channels.find("name", "events");
    channel.send("@here We are under attack! Come defend our fort: https://www.roblox.com/games/597354859/TKC-Fort-Tazalar-II")
  } else

  if (command === "kick") {
    if(message.mentions.users.size === 0) {
      return message.reply("please mention a user to kick them from the guild.");
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) {
      return message.reply("this users does not seem valid.");
    }
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
      return message.reply("I do not have the permissions to kick members.");
    }
    kickMember.kick("You were kicked because `" + message.reply(args.join(" ")) + "`");
    message.author.send("You have successfuly kicked " + kickMember.user + " from TKC Discord.")
  } else

  if (command === "ban") {
    if(message.mentions.users.size === 0) {
      return message.reply("please mention a user to ban them from the guild.");
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) {
      return message.reply("this users does not seem valid.");
    }
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
      return message.reply("I do not have the permissions to ban members.");
    }
    kickMember.kick("You were banned because `" + message.reply(args.join(" ")) + "`");
    message.author.send("You have successfuly banned " + kickMember.user + " from TKC Discord.")
  } else

  if (command === "cmds") { // The cmds
    message.author.send("the commands are\n```" + commands + "```\nuse the prefix `" + prefix + "`")
  } else

  if (command === "gamenight") {
    let channel = message.guild.channels.find("name", "events");
    channel.send("[GAMENIGHT] We're playing " + args [1] + " today! " + args [0] + " @here")
  }

  if (command === "DM") {
    let m = message.reply(args.join(" "));
    message.guild.users.send(m)
  }
});

client.login("MzM3MDY0OTMyNDgwNjQ3MTY4.DFBbvg.FQXTRaDNC7n2cNHk3FnTBvi3wro");
