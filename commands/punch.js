const Discord = require("discord.js")
module.exports = {
name : "punch",
category : "Fun", 
description: "Punch someone.",
execute : async (client, message, args) => { 
   const user = message.mentions.users.first();
  if(!user) return message.channel.send("🚫 Please Mention a Person to punch! 🚫")
  if(message.author.id === user.id) return message.channel.send(`${message.author.username}, Lets not do this  :/`)
  const number = Math.round(Math.random() * 14)
    const db = require('quick.db')
    db.add('punch_' + message.author.id + user.id, 1)
 let punchno = await db.fetch('punch_' + message.author.id + user.id)
const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} punches ${user.username}`)
.setImage("https://neko-love.xyz/v1/punch/neko-love-punch_" + number + ".gif")
.setColor('#FFFFFF')
 .setFooter(`There are ${punchno} punches now!`)
message.channel.send(embed)
    }
    }