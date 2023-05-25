const discord = require("discord.js");

module.exports = {
  name: "addrole",
  category: "Utility",
  aliases: ["addroles"],
  description: "Add a role to a user.",
  usage: "<user> <role>",
  execute: async (client, message, args) => {
      if(message.guild.id === "568902211980099605") return message.channel.send('Mod commands are disabled')
    let perm = message.member.hasPermission("MANAGE_ROLES");
    if (!perm) return message.channel.send("You don't have the perms to use this.");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mention the user.");

    let role = message.mentions.roles.first();
    if (!role) return message.channel.send("Mention the role.");

    let embed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setDescription(`Added ${role} to ${user}.`);

    user.roles.add(role);
    message.channel.send(embed);
  }
};