module.exports = {
name: "appeal",
description: "Appeal against a punishment.",
category: "Other",
execute: async (client, message, args) => {
    if (message.author.bot) return;
    const discord = require('discord.js')
    const embed = new discord.MessageEmbed()
    .setTitle('Appeal')
    .addField("User Blacklist Appeal", `[Appeal Here](https://tinyurl.com/alfredblacklistappeal)`)
    .addField("Server Blacklist Appeal", `[Appeal Here](https://tinyurl.com/alfredserverblacklistappeal)`)
    .setColor('#FFFFFF')
    .setTimestamp()
    message.channel.send(embed)
}
}
